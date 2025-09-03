<<<<<<< HEAD
import: React, { useState } from 'react';';
import: Link from 'next/link';';
import: { Menu, X, ChevronDown } from 'lucide-react';';

const: EnhancedNavigation: React.FC: = () => {
  const [isOpe,n, setIsOpen] = useState(false);
  const: [servicesOpen, setServicesOpen] = useState(false);
  const: [solutionsOpen, setSolutionsOpen] = useState(false);

  return: (
    <nav className="bg-white shadow-lg sticky top-0 z-50">";
      <div: className="container mx-auto px-4">";
        <div: className="flex justify-between items-center py-4">";
          {/* Logo: */}
          <Link href="/" className="flex items-center space-x-2">";
            <div: className="flex items-center space-x-2">";
              <div: className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">";
                <span: className="text-white font-bold text-xl">Z</span>";
              </div>
              <div: className="text-xl font-bold text-gray-800">Zion Tech Group</div>";
            </div>
          </Link>

          {/* Desktop: Navigation */}
          <div className="hidden lg: flex: items-center space-x-8">";
            <Link: href="/" className="text-gray-600 hover:text-blue-600: transition-colors">";
              Home: </Link>
            
            {/* Services Dropdown *,/}
            <div className="relative group">";
              <button: className="flex items-center text-gray-600 hover: text-blue-600: transition-colors"";
                onMouseEnter={() => setServicesOpen(true,)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services: <ChevronDown className="ml-1 w-4 h-4" />";
              </button>
              <div: className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link: href="/services/ai-development" className="block px-4 py-2 text-gray-700 hover: bg-blue-50: hover:text-blue-600">";
                  AI: Development
                </Link>
                <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Cloud: Services
                </Link>
                <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Web: Development
                </Link>
                <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Mobile: Development
                </Link>
                <Link href="/services/blockchain-solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Blockchain: Solutions
                </Link>
                <Link href="/services/iot-platforms" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  IoT: Platforms
=======
import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { ChevronDown, Menu, X } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

=======
import { ChevronDown, Cloud, Home, Menu, X } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
<<<<<<< HEAD
  const [solutionsOpen, setSolutionsOpen] = useState(false)
=======
  const [solutionsOpen, setSolutionsOpen] = useState(false);
<<<<<<< HEAD
  return ('
    <nav className="bg-white shadow-lg sticky top-0 z-50">"
      <div className="container mx-auto px-4">"
=======
>>>>>>> main
>>>>>>> main
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
>>>>>>> main
        <div className="flex justify-between items-center py-4">
          {/* Logo */}"
          <Link href="/" className="flex items-center space-x-2">"
            <div className="flex items-center space-x-2">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-xl">Z</span>
              </div>"
              <div className="text-xl font-bold text-gray-800">
                Zion Tech Group
              </div>
            </div>
          </Link>

<<<<<<< HEAD
          {/* Desktop Navigation */}"
          <div className="hidden lg:flex items-center space-x-8">
            <Link"
              href="/""
              className="text-gray-600 hove,
    r:text-blue-600 transition-colors"
=======
          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className='hidden lg: flex items-center space-x-8'>
            <Link href='/' className='text-gray-600 hover:text-blue-600 transition-colors'>
=======
<<<<<<< HEAD
          <div className="hidden lg: flex items-center space-x-8">
=======
          <div className="hidden lg:flex items-center space-x-8">
>>>>>>> main
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
>>>>>>> main
            >
>>>>>>> main
              Home
            </Link>

            {/* Services Dropdown */}"
            <div className="relative group">
              <button"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services"
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div"
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
<<<<<<< HEAD
                <Link`
                  href="/services/ai-development""
                  className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600"
=======
<<<<<<< HEAD
                <Link href='/services/ai-services' className='block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600'>
                  AI Services
=======
                <Link
                  href="/services/ai-development"
<<<<<<< HEAD
                  className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600"
=======
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
>>>>>>> main
>>>>>>> main
                >
                  AI Development
>>>>>>> main
                </Link>
                <Link"
                  href="/services/cloud-services""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Cloud Services
                </Link>
                <Link"
                  href="/services/web-development""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Web Development
                </Link>
                <Link"
                  href="/services/mobile-development""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Mobile Development
                </Link>
                <Link"
                  href="/services/blockchain-solutions""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Blockchain Solutions
                </Link>
                <Link"
                  href="/services/iot-platforms""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  IoT Platforms
                </Link>
                <Link"
                  href="/services/cybersecurity""
                  className="block px-4 py-2 text-gray-700 hove,
    r:bg-blue-50 hove,
    r:text-blue-600"
                >
                  Cybersecurity
>>>>>>> main
                </Link>
                <Link href="/services/cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Cybersecurity: </Link>
              </div>
            </div>

<<<<<<< HEAD
            {/* Solutions Dropdown *,/}
            <div className="relative group">";
              <button: className="flex items-center text-gray-600 hover: text-blue-600: transition-colors"";
                onMouseEnter={() => setSolutionsOpen(true,)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions: <ChevronDown className="ml-1 w-4 h-4" />";
              </button>
              <div: className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link: href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover: bg-blue-50: hover:text-blue-600">";
                  Enterprise: Solutions
                </Link>
                <Link href="/solutions/small-business" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Small: Business
=======
            {/* Solutions Dropdown */}"
            <div className="relative group">
              <button"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Solutions"
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div"
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
<<<<<<< HEAD
                <Link`
                  href="/solutions/enterprise""
                  className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600"
=======
<<<<<<< HEAD
                <Link href='/solutions' className='block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600'>
                  Solutions Overview
                </Link>
                <Link href='/solutions/enterprise' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'>
=======
                <Link
                  href="/solutions/enterprise"
<<<<<<< HEAD
                  className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600"
=======
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
>>>>>>> main
>>>>>>> main
                >
>>>>>>> main
                  Enterprise Solutions
                </Link>
                <Link"
                  href="/solutions/small-business""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Small Business
                </Link>
                <Link"
                  href="/solutions/startups""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Startups
                </Link>
                <Link"
                  href="/solutions/healthcare""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Healthcare
                </Link>
                <Link"
                  href="/solutions/finance""
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Finance
>>>>>>> main
                </Link>
                <Link href="/solutions/startups" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Startups: </Link>
                <Link href="/solutions/healthcare" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Healthcare: </Link>
                <Link href="/solutions/finance" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Finance: </Link>
              </div>
            </div>

<<<<<<< HEAD
            <Link href="/products" className="text-gray-600 hover:text-blue-600: transition-colors">";
              Products: </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-blue-600: transition-colors">";
              Solutions: </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600: transition-colors">";
              About: </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600: transition-colors">";
              Blog: </Link>
            <Link href="/careers" className="text-gray-600 hover:text-blue-600: transition-colors">";
              Careers: </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600: transition-colors">";
              Contact: </Link>
          </div>

          {/* CTA Button *,/}
          <div className="hidden lg: block">";
            <Link: href="/contact" className="bg-blue-600 hover:bg-blue-700: text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block">";
              Get: Started
            </Link>
          </div>

          {/* Mobile menu button *,/}
          <button
            className="lg: hidden: text-gray-600 hover:text-gray-900"";
            onClick={() => setIsOpen(!isOpen,)}
          >
            {isOpen: ? <X className="w-6 h-6" /> : <Menu: className="w-6 h-6" />}";
          </button>
        </div>

        {/* Mobile: Navigation */}
        {isOpen && (
          <div className="lg: hidden: border-t border-gray-200 py-4">";
            <div: className="space-y-2">";
              <Link: href="/" className="block py-2 text-gray-600 hover:text-blue-600">";
                Home: </Link>
              <div className="py-2">";
                <div: className="text-gray-600 font-semibold mb-2">Services</div>";
                <div: className="pl-4 space-y-2">";
                  <Link: href="/services/ai-development" className="block py-1 text-gray-500 hover:text-blue-600">";
                    AI: Development
                  </Link>
                  <Link href="/services/cloud-services" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Cloud: Services
                  </Link>
                  <Link href="/services/web-development" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Web: Development
                  </Link>
                  <Link href="/services/mobile-development" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Mobile: Development
                  </Link>
                  <Link href="/services/blockchain-solutions" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Blockchain: Solutions
                  </Link>
                  <Link href="/services/iot-platforms" className="block py-1 text-gray-500 hover:text-blue-600">";
                    IoT: Platforms
=======
            <Link"
              href="/products""
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <Link"
              href="/solutions""
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Solutions
            </Link>
            <Link"
              href="/about""
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link"
              href="/blog""
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <Link"
              href="/careers""
              className="text-gray-600 hove,
    r:text-blue-600 transition-colors"
            >
              Careers
            </Link>
            <Link"
              href="/contact""
              className="text-gray-600 hove,
    r:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}"
          <div className="hidden lg:block">
            <Link"
              href="/contact""
              className="bg-blue-600 hove,
    r:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <button"
            className="lg:hidden text-gray-600 hove,
    r:text-gray-900"
=======
          <button
<<<<<<< HEAD
            className='lg:hidden text-gray-600 hover:text-gray-900'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
=======
            className="lg:hidden text-gray-600 hover:text-gray-900"
>>>>>>> main
            onClick={() => setIsOpen(!isOpen)}
          >"
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> main
          </button>
        </div>

        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isOpen && ("
          <div className="lg: hidden border-t border-gray-200 py-4">"
=======
<<<<<<< HEAD
        {mobileMenuOpen && (
          <div className='lg:hidden border-t border-gray-200 py-4'>
            <div className='space-y-2'>
              <Link href='/' className='block py-2 text-gray-600 hover:text-blue-600'>
=======
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
>>>>>>> main
            <div className="space-y-2">
              <Link"
                href="/""
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
>>>>>>> main
                Home
              </Link>"
              <div className="py-2">"
                <div className="text-gray-600 font-semibold mb-2">Services</div>"
                <div className="pl-4 space-y-2">
                  <Link"
                    href="/services/ai-development""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    AI Development
                  </Link>
                  <Link"
                    href="/services/cloud-services""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Cloud Services
                  </Link>
                  <Link"
                    href="/services/web-development""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Web Development
                  </Link>
                  <Link"
                    href="/services/mobile-development""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Mobile Development
                  </Link>
                  <Link"
                    href="/services/blockchain-solutions""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Blockchain Solutions
                  </Link>
                  <Link"
                    href="/services/iot-platforms""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    IoT Platforms
                  </Link>
                  <Link"
                    href="/services/cybersecurity""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Cybersecurity
>>>>>>> main
                  </Link>
                  <Link href="/services/cybersecurity" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Cybersecurity: </Link>
                </div>
<<<<<<< HEAD
              </div>
              <div className="py-2">";
                <div: className="text-gray-600 font-semibold mb-2">Solutions</div>";
                <div: className="pl-4 space-y-2">";
                  <Link: href="/solutions/enterprise" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Enterprise: Solutions
                  </Link>
                  <Link href="/solutions/small-business" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Small: Business
=======
              </div>"
              <div className="py-2">"
                <div className="text-gray-600 font-semibold mb-2">
                  Solutions
                </div>"
                <div className="pl-4 space-y-2">
                  <Link"
                    href="/solutions/enterprise""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Enterprise Solutions
                  </Link>
                  <Link"
                    href="/solutions/small-business""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Small Business
                  </Link>
                  <Link"
                    href="/solutions/startups""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Startups
                  </Link>
                  <Link"
                    href="/solutions/healthcare""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Healthcare
                  </Link>
                  <Link"
                    href="/solutions/finance""
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  >
                    Finance
>>>>>>> main
                  </Link>
                  <Link href="/solutions/startups" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Startups: </Link>
                  <Link href="/solutions/healthcare" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Healthcare: </Link>
                  <Link href="/solutions/finance" className="block py-1 text-gray-500 hover:text-blue-600">";
                    Finance: </Link>
                </div>
              </div>
<<<<<<< HEAD
              <Link href="/products" className="block py-2 text-gray-600 hover:text-blue-600">";
                Products: </Link>
              <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600">";
                About: </Link>
              <Link href="/blog" className="block py-2 text-gray-600 hover:text-blue-600">";
                Blog: </Link>
              <Link href="/careers" className="block py-2 text-gray-600 hover:text-blue-600">";
                Careers: </Link>
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">";
                Contact: </Link>
              <div className="pt-4">";
                <Link: href="/contact" className="bg-blue-600 hover:bg-blue-700: text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center">";
                  Get: Started
=======
              <Link"
                href="/products""
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
                Products
              </Link>
              <Link"
                href="/about""
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
                About
              </Link>
              <Link"
                href="/blog""
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
                Blog
              </Link>
              <Link"
                href="/careers""
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
                Careers
              </Link>
              <Link"
                href="/contact""
                className="block py-2 text-gray-600 hove,
    r:text-blue-600"
              >
                Contact
              </Link>"
              <div className="pt-4">
                <Link"
                  href="/contact""
                  className="bg-blue-600 hove,
    r:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center"
                >
                  Get Started
>>>>>>> main
                </Link>
              </div>
            </div>
          </div>
        ,)}
      </div>
    </nav>
  );
};
<<<<<<< HEAD

export: default EnhancedNavigation;
=======
<<<<<<< HEAD
export default EnhancedNavigation
=======
export default EnhancedNavigation;
"
>>>>>>> main
>>>>>>> main
