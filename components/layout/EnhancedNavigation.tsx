import React { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

const EnhancedNavigation: React.FC: = () => {
  const [isOpe,n, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return: (
    <nav className="bg-white shadow-lg sticky top-0 z-50">";
      <div: className="container mx-auto px-4">";
        <div: className="flex justify-between items-center py-4">" {/* Logo: */}
          <Link href="/" className="flex items-center space-x-2">";
            <div: className="flex items-center space-x-2">";
              <div: className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">";
                <span: className="text-white font-bold text-xl">Z</span>";
              </div>
              <div: className="text-xl font-bold text-gray-800">Zion Tech Group</div>";
          </Link>

          {/* Desktop: Navigation */}
          <div className="hidden lg: flex: items-center space-x-8">";
            <Link: href="/" className="text-gray-600 hover:text-blue-600: transition-colors">";
              Home: </Link>
            
            {/* Services Dropdown *,/}
            <div className="relative group">";
              <button: className="flex items-center text-gray-600 hover: text-blue-600: transition-colors"";
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services: <ChevronDown className="ml-1 w-4 h-4" />";
              </button>
              <div: className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                <Link: href="/services/ai-development" className="block px-4 py-2 text-gray-700 hover: bg-blue-50: hover:text-blue-600">";
                  AI: Development
                <Link href="/services/cloud-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Cloud: Services
                <Link href="/services/web-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Web: Development
                <Link href="/services/mobile-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Mobile: Development
                <Link href="/services/blockchain-solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Blockchain: Solutions
                <Link href="/services/iot-platforms" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  IoT: Platforms
import { ChevronDown, Menu, X } from 'lucide-react';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

import { ChevronDown, Cloud, Home, Menu, X } from 'lucide-react';


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link href="/comprehensive-services-showcase-2026" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Services
                  <Link href="/services/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Micro SaaS
                  <Link href="/services/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI & Machine Learning
                  <Link href="/services/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    IT Services
                  <Link href="/services/cloud-infrastructure" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Cloud & Infrastructure
              )}
<nav className="bg-white shadow-lg sticky top-0 z-50">"      <div className="container mx-auto px-4">"        <div className="flex justify-between items-center py-4">"          {/* Logo */}"          <Link href="/" className="flex items-center space-x-2">"            <div className="flex items-center space-x-2">"              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"                <span className="text-white font-bold text-xl">Z</span>"              </div>"              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>"            </div>"          </Link>"

          <div className="hidden lg: flex items-center space-x-8">"            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">"              Home"            </Link>"
ursor/automate-test-fix-improve-and-merge-code-99d1
            
            {/* Services Dropdown */}
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  return ('
    <nav className="bg-white shadow-lg sticky top-0 z-50">"
      <div className="container mx-auto px-4">"
          {/* Logo */}"
          <Link href="/" className="flex items-center space-x-2">"
            <div className="flex items-center space-x-2">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
              </div>"
              <div className="text-xl font-bold text-gray-800">
                Zion Tech Group

            <Link href="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
              Solutions
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Get Started

          {/* Mobile Menu Button */}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-600 hover:text-blue-600"
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          {/* Desktop Navigation */}"
            <Link"
              href="/""
              className="text-gray-600 hove,
    r:text-blue-600 transition-colors"
          <div className='hidden lg: flex items-center space-x-8'>
            <Link href='/' className='text-gray-600 hover:text-blue-600 transition-colors'>
          <div className="hidden lg: flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"

            {/* Services Dropdown */}"
            <div className="relative group">
              <button"
                Services"
                <ChevronDown className="ml-1 w-4 h-4" />
              <div"
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                <Link href="/services/ai-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Development
                <Link`
                  href="/services/ai-development""
                  className="block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600"
                <Link href='/services/ai-services' className='block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600'>
                  AI Services
                  href="/services/ai-development"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  href="/services/cloud-services""
                  Cloud Services
                  href="/services/web-development""
                  Web Development
                  href="/services/mobile-development""
                  Mobile Development
                  href="/services/blockchain-solutions""
                  Blockchain Solutions
                  href="/services/iot-platforms""
                  IoT Platforms
                  href="/services/cybersecurity""
                  className="block px-4 py-2 text-gray-700 hove,
    r:bg-blue-50 hove,
    r:text-blue-600"
                  Cybersecurity
                <Link href="/services/cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Cybersecurity: </Link>

            {/* Solutions Dropdown *,/}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                Solutions: <ChevronDown className="ml-1 w-4 h-4" />";
              <div: className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                <Link: href="/solutions/enterprise" className="block px-4 py-2 text-gray-700 hover: bg-blue-50: hover:text-blue-600">";
                  Enterprise: Solutions
                <Link href="/solutions/small-business" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Small: Business
            {/* Solutions Dropdown */}"
                Solutions"
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                  href="/solutions/enterprise""
                <Link href='/solutions' className='block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600'>
                  Solutions Overview
                <Link href='/solutions/enterprise' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'>
                  href="/solutions/enterprise"
                  Enterprise Solutions
                  href="/solutions/small-business""
                  Small Business
                  href="/solutions/startups""
                  Startups
                <Link href="/solutions/healthcare" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  href="/solutions/healthcare""
                  Healthcare
                  href="/solutions/finance""
                  Finance
                <Link href="/solutions/startups" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Startups: </Link>
                <Link href="/solutions/healthcare" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Healthcare: </Link>
                <Link href="/solutions/finance" className="block px-4 py-2 text-gray-700 hover:bg-blue-50: hover:text-blue-600">";
                  Finance: </Link>

          {/* CTA Button */}
          <div className="hidden lg:block">"            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block">"              Get Started"            </Link></div>"
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

          {/* CTA Button *,/}
          <div className="hidden lg: block">";
            <Link: href="/contact" className="bg-blue-600 hover:bg-blue-700: text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block">";
              Get: Started

          {/* Mobile menu button *,/}
            className="lg: hidden: text-gray-600 hover:text-gray-900"";
            {isOpen: ? <X className="w-6 h-6" /> : <Menu: className="w-6 h-6" />}";

        {/* Mobile: Navigation */}
        {isOpen && (
          <div className="lg: hidden: border-t border-gray-200 py-4">";
            <div: className="space-y-2">";
              <Link: href="/" className="block py-2 text-gray-600 hover:text-blue-600">";
              <div className="py-2">";
                <div: className="text-gray-600 font-semibold mb-2">Services</div>";
                <div: className="pl-4 space-y-2">";
                  <Link: href="/services/ai-development" className="block py-1 text-gray-500 hover:text-blue-600">";
                  <Link href="/services/cloud-services" className="block py-1 text-gray-500 hover:text-blue-600">";
                  <Link href="/services/web-development" className="block py-1 text-gray-500 hover:text-blue-600">";
                  <Link href="/services/mobile-development" className="block py-1 text-gray-500 hover:text-blue-600">";
                  <Link href="/services/blockchain-solutions" className="block py-1 text-gray-500 hover:text-blue-600">";
                  <Link href="/services/iot-platforms" className="block py-1 text-gray-500 hover:text-blue-600">";
              href="/products""
              Products
              href="/solutions""
              href="/about""
              href="/blog""
              Blog
              href="/careers""
              Careers
              href="/contact""
              Contact

          {/* CTA Button */}"
          <div className="hidden lg:block">
              className="bg-blue-600 hove,
    r:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block"

          {/* Mobile menu button */}
            className="lg:hidden text-gray-600 hove,
    r:text-gray-900"
            className='lg:hidden text-gray-600 hover:text-gray-900'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >"

        {/* Mobile Navigation */}
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link href="/" className="block text-gray-600 hover:text-blue-600">
              <div>
                  className="flex items-center text-gray-600 hover:text-blue-600"
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href="/comprehensive-services-showcase-2026" className="block text-gray-600 hover:text-blue-600">
                    <Link href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600">
                    <Link href="/services/ai-services" className="block text-gray-600 hover:text-blue-600">
                    <Link href="/services/it-services" className="block text-gray-600 hover:text-blue-600">
              <Link href="/solutions" className="block text-gray-600 hover:text-blue-600">
              <Link href="/about" className="block text-gray-600 hover:text-blue-600">
              <Link href="/contact" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-center">
          <div className="lg:hidden border-t border-gray-200 py-4">"            <div className="space-y-2">"              <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600">"                Home"              </Link>
              <div className="py-2">"                <div className="text-gray-600 font-semibold mb-2">Services</div>"                <div className="pl-4 space-y-2">"                  <Link href="/services/ai-development" className="block py-1 text-gray-500 hover:text-blue-600">"                    AI Development"                  </Link>"
                  <Link href="/services/cloud-services" className="block py-1 text-gray-500 hover:text-blue-600">"                    Cloud Services"                  </Link>
                  <Link href="/services/web-development" className="block py-1 text-gray-500 hover:text-blue-600">"                    Web Development"                  </Link>
                  <Link href="/services/mobile-development" className="block py-1 text-gray-500 hover:text-blue-600">"                    Mobile Development"                  </Link>
                  <Link href="/services/blockchain-solutions" className="block py-1 text-gray-500 hover:text-blue-600">"                    Blockchain Solutions"                  </Link>
                  <Link href="/services/iot-platforms" className="block py-1 text-gray-500 hover:text-blue-600">"                    IoT Platforms"                  </Link>
                  <Link href="/services/cybersecurity" className="block py-1 text-gray-500 hover:text-blue-600">"                    Cybersecurity"                  </Link>
              <div className="py-2">"                <div className="text-gray-600 font-semibold mb-2">Solutions</div>"                <div className="pl-4 space-y-2">"                  <Link href="/solutions/enterprise" className="block py-1 text-gray-500 hover:text-blue-600">"                    Enterprise Solutions"                  </Link>"
                  <Link href="/solutions/small-business" className="block py-1 text-gray-500 hover:text-blue-600">"                    Small Business"                  </Link>
                  <Link href="/solutions/startups" className="block py-1 text-gray-500 hover:text-blue-600">"                    Startups"                  </Link>
                  <Link href="/solutions/healthcare" className="block py-1 text-gray-500 hover:text-blue-600">"                    Healthcare"                  </Link>
                  <Link href="/solutions/finance" className="block py-1 text-gray-500 hover:text-blue-600">"                    Finance"                  </Link>
              <Link href="/products" className="block py-2 text-gray-600 hover:text-blue-600">"                Products"              </Link>
              <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600">"                About"              </Link>
              <Link href="/blog" className="block py-2 text-gray-600 hover:text-blue-600">"                Blog"              </Link>
              <Link href="/careers" className="block py-2 text-gray-600 hover:text-blue-600">"                Careers"              </Link>
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">"                Contact"              </Link>
              <div className="pt-4">"                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center">"                  Get Started"                </Link></div>"
        {isOpen && ("
          <div className="lg: hidden border-t border-gray-200 py-4">"
        {mobileMenuOpen && (
          <div className='lg:hidden border-t border-gray-200 py-4'>
            <div className='space-y-2'>
              <Link href='/' className='block py-2 text-gray-600 hover:text-blue-600'>
            <div className="space-y-2">
                className="block py-2 text-gray-600 hover:text-blue-600"
              </Link>"
              <div className="py-2">"
                <div className="text-gray-600 font-semibold mb-2">Services</div>"
                <div className="pl-4 space-y-2">
                    className="block py-1 text-gray-500 hover:text-blue-600"
                  <Link href="/services/cybersecurity" className="block py-1 text-gray-500 hover:text-blue-600">";
                <div: className="text-gray-600 font-semibold mb-2">Solutions</div>";
                  <Link: href="/solutions/enterprise" className="block py-1 text-gray-500 hover:text-blue-600">";
                  <Link href="/solutions/small-business" className="block py-1 text-gray-500 hover:text-blue-600">";
                <div className="text-gray-600 font-semibold mb-2">
                  <Link href="/solutions/startups" className="block py-1 text-gray-500 hover:text-blue-600">";
                  <Link href="/solutions/healthcare" className="block py-1 text-gray-500 hover:text-blue-600">";
                  <Link href="/solutions/finance" className="block py-1 text-gray-500 hover:text-blue-600">";
              <Link href="/products" className="block py-2 text-gray-600 hover:text-blue-600">";
              <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600">";
              <Link href="/blog" className="block py-2 text-gray-600 hover:text-blue-600">";
              <Link href="/careers" className="block py-2 text-gray-600 hover:text-blue-600">";
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">";
              <div className="pt-4">";
                <Link: href="/contact" className="bg-blue-600 hover:bg-blue-700: text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center">";
                className="block py-2 text-gray-600 hove,
              <div className="pt-4">
    r:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center"
    </nav>
  )};

export default EnhancedNavigation;
export: default EnhancedNavigation;
export default EnhancedNavigation
"
