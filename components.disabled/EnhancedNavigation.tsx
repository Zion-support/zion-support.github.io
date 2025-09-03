import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  
  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='flex items-center space-x-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>Z</span>
              </div>
              <div className='text-xl font-bold text-gray-800'>Zion Tech Group</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            <Link href='/' className='text-gray-600 hover:text-blue-600 transition-colors'>Home</Link>
            
            {/* Services Dropdown */}
            <div className='relative group'>
              <button
                className='flex items-center text-gray-600 hover:text-blue-600 transition-colors'
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className='ml-1 w-4 h-4' />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 ${
                  servicesOpen ? 'block' : 'hidden'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href='/services/ai-development' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>AI Development</Link>
                <Link href='/services/cloud-services' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Cloud Services</Link>
                <Link href='/services/web-development' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Web Development</Link>
                <Link href='/services/mobile-development' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Mobile Development</Link>
                <Link href='/services/blockchain-solutions' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Blockchain Solutions</Link>
              </div>
            </div>
            
            {/* Solutions Dropdown */}
            <div className='relative group'>
              <button
                className='flex items-center text-gray-600 hover:text-blue-600 transition-colors'
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions
                <ChevronDown className='ml-1 w-4 h-4' />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 ${
                  solutionsOpen ? 'block' : 'hidden'
                }`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link href='/solutions/enterprise' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Enterprise Solutions</Link>
                <Link href='/solutions/startup' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Startup Solutions</Link>
                <Link href='/solutions/consulting' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Consulting</Link>
                <Link href='/solutions/support' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Support & Maintenance</Link>
              </div>
            </div>
            
            <Link href='/about' className='text-gray-600 hover:text-blue-600 transition-colors'>About</Link>
            <Link href='/contact' className='text-gray-600 hover:text-blue-600 transition-colors'>Contact</Link>
            <Link href='/blog' className='text-gray-600 hover:text-blue-600 transition-colors'>Blog</Link>
            
            <div className='flex items-center space-x-4'>
              <Link href='/login' className='text-gray-600 hover:text-blue-600 transition-colors'>Login</Link>
              <Link href='/signup' className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>Get Started</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className='lg:hidden border-t border-gray-200 py-4'>
            <div className='flex flex-col space-y-4'>
              <Link href='/' className='text-gray-600 hover:text-blue-600 transition-colors'>Home</Link>
              <Link href='/services' className='text-gray-600 hover:text-blue-600 transition-colors'>Services</Link>
              <Link href='/solutions' className='text-gray-600 hover:text-blue-600 transition-colors'>Solutions</Link>
              <Link href='/about' className='text-gray-600 hover:text-blue-600 transition-colors'>About</Link>
              <Link href='/contact' className='text-gray-600 hover:text-blue-600 transition-colors'>Contact</Link>
              <Link href='/blog' className='text-gray-600 hover:text-blue-600 transition-colors'>Blog</Link>
              <div className='flex flex-col space-y-2 pt-4 border-t border-gray-200'>
                <Link href='/login' className='text-gray-600 hover:text-blue-600 transition-colors'>Login</Link>
                <Link href='/signup' className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center'>Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;