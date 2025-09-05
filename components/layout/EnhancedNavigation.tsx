<<<<<<< HEAD

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
=======
import React, { useState } from 'react;
import Link from 'next/link;
import { Menu, X, ChevronDown } from 'lucide-react;
const EnhancedNavigation: React.FC = () => {const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
const EnhancedNavigation = () => {;
  return (;
    <nav className="bg-white shadow-lg sticky top-0 z-50">;
      <div className="container mx-auto px-4">;
        <div className="flex justify-between items-center py-4">;
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">;
            <div className="flex items-center space-x-2">;
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-xl">Z</span>;
              </div>;
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>;
            </div>;
          </Link>;

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">;
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>;
            {/* Services Dropdown */}
            <div className="relative group">;
              <button;
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors";
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >;
                Services;
                <ChevronDown className="ml-1 w-4 h-4" />;
              </button>;
              <div;
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >;
                <Link href="/services/ai-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">AI Development</Link>;
                <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Cloud Services</Link>;
                <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Web Development</Link>;
                <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Mobile Development</Link>;
                <Link href="/services/blockchain-solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Blockchain Solutions</Link>;
                <Link href="/services/iot-platforms" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">IoT Platforms</Link>;
                <Link href="/services/cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Cybersecurity</Link>;
              </div>;
            </div>;
>>>>>>> origin/automation-fixes

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          </div>
          <div className="hidden lg:block">
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Get Started
              </span>
            </Link>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200>
            <div className="space-y-2">
              <Link href="/">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Home</span>
              </Link>
              <div className="space-y-2">
                <div className="font-semibold text-gray-800 py-2">Services</div>
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <span className="block py-2 pl-4 text-gray-600 hover:text-blue-600> {service.name}
                    </span"
                  </Link>
                ))}
              </div>
              <Link href="/about">
                <span className="block py-2 text-gray-600 hover:text-blue-600>About</span> </Link"
              <Link href="/contact">
                <span className="block py-2 text-gray-600 hover:text-blue-600">Contact</span>
              </Link>
              <Link href="/contact">
                <span className="block py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        )}
<<<<<<< HEAD
      </div>
    </nav>
=======
      </div>;
    </nav>;
>>>>>>> origin/automation-fixes
  );
};
export default EnhancedNavigation;
