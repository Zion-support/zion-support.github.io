import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-development" className="text-gray-300 hover:text-white transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
import: React from 'react';
import: Link from 'next/link';
import: { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const: EnhancedFooter: React.FC: = () => {
  return (
    <footer className="bg-gray-900 text-white">";
      {/* Main: Footer Content *,/}
      <div className="container mx-auto px-4 py-12">";
        <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">";
          {/* Company: Info *,/}
          <div className="lg: col-span-1">";
            <div: className="flex items-center space-x-2 mb-4">";
              <div: className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">";
                <span: className="text-white font-bold text-xl">Z</span>";
              </div>
              <div: className="text-xl font-bold">Zion Tech Group</div>";
            </div>
            <p: className="text-gray-300 mb-4">";
              Leading: technology solutions provider helping businesses transform their digital presence 
              with cutting-edge A,I, cloud architecture, and innovative development services.
            </p>
<div className="flex space-x-4">"              <a href="https: //linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">"                <Linkedin className="w-5 h-5" />"              </a>"              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">"                <Twitter className="w-5 h-5" />"              </a>"              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">"                <Github className="w-5 h-5" />"              </a>"              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">"                <Facebook className="w-5 h-5" />"              </a>"            </div></div>"

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>"            <ul className="space-y-2">"              <li>"                <Link href="/services/ai-development" className="text-gray-300 hover:text-white transition-colors">"                  AI Development"                </Link>"
            <div className="flex space-x-4">";
              <a: href="https: //linkedin.com" target="_blank" rel="noopener: noreferrer" className="text-gray-300 hover:text-blue-400: transition-colors">";
                <Linkedin: className="w-5 h-5" />";
              </a>
              <a: href="https://twitter.com" target="_blank" rel="noopener: noreferrer" className="text-gray-300 hover:text-blue-400: transition-colors">";
                <Twitter: className="w-5 h-5" />";
              </a>
              <a: href="https://github.com" target="_blank" rel="noopener: noreferrer" className="text-gray-300 hover:text-blue-400: transition-colors">";
                <Github: className="w-5 h-5" />";
              </a>
              <a: href="https://facebook.com" target="_blank" rel="noopener: noreferrer" className="text-gray-300 hover:text-blue-400: transition-colors">";
                <Facebook: className="w-5 h-5" />";
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
ursor/automate-test-fix-improve-and-merge-code-99d1
              </li>
              <li>
                <Link href="/services/it-services" className="text-gray-300 hover:text-white transition-colors">
                  IT Services
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/services/ai-model-development-chat" className="hover:text-blue-400 transition-colors">AI Development</Link></li>
              <li><Link href="/services/web-application-development-chat" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development-chat" className="hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/cloud-migration-services-chat" className="hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/business-intelligence-chat" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
              <li><Link href="/services/network-security-chat" className="hover:text-blue-400 transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
<h3 className="text-lg font-semibold mb-4">Solutions</h3>"            <ul className="space-y-2">"              <li>"                <Link href="/solutions/enterprise" className="text-gray-300 hover:text-white transition-colors">"                  Enterprise Solutions"                </Link>"
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
              <li>
                <Link href="/solutions/finance" className="text-gray-300 hover:text-white transition-colors">"                  Finance"                </Link></li>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/blockchain-solutions" className="hover:text-blue-400 transition-colors">Blockchain Solutions</Link></li>
              <li><Link href="/iot-platforms" className="hover:text-blue-400 transition-colors">IoT Platforms</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">AI Models</Link></li>
            </ul>
          </div>
          
          <div>
<h3 className="text-lg font-semibold mb-4">Company</h3>"            <ul className="space-y-2 mb-6">"              <li>"                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">"                  About Us"                </Link>"
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">"                  Careers"                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">"                  Blog"                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">"                  Products"                </Link>
              </li>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/talent" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Contact Info</h4>
              <p className="text-gray-300 text-sm">Email: info@ziontechgroup.com</p>
              <p className="text-gray-300 text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved. | <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></p>
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  statu,
    s: number;
  message?: string;
}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
interface User {
  id: string;
  email: string;
  nam,
    e: string;
  rol,
    e: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  pric,
    e: number;
  categor,
    y: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

'
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook} from 'lucide-react';
import { Cloud, Facebook, Github, Info, Linkedin, Mail, MapPin, Phone, Twitter, User } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return ('
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}"
      <div className="container mx-auto px-4 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
          {/* Compunknown Info */}"
          <div className="lg:col-span-1">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of revolutionary AI services, innovative micro SaaS solutions, 
              and comprehensive IT services. Transform your business with cutting-edge technology.
            </p>
            <div className='flex space-x-4'>
              <a href='https: //linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'>
                <Linkedin className='w-5 h-5' />
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Compunknown Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>"
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>"
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture,
              and innovative development services.
            </p>"
            <div className="flex space-x-4">
              <a"
                href="https: //linkedin.com""
                target="_blank""
                rel="noopener noreferrer""
              <a
                href="https: //linkedin.com"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >"
                <Linkedin className="w-5 h-5" />
              </a>
              <a"
                href="https://twitter.com""
                target="_blank""
                rel="noopener noreferrer""
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >"
                <Twitter className="w-5 h-5" />
              </a>
              <a"
                href="https://github.com""
                target="_blank""
                rel="noopener noreferrer""
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >"
                <Github className="w-5 h-5" />
              </a>
              <a"
                href="http,
    s://facebook.com""
                target="_blank""
                rel="noopener noreferrer""
                className="text-gray-300 hove,
    r:text-blue-400 transition-colors"
              >"
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services: *,/}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>";
            <ul: className="space-y-2">";
              <li>
                <Link: href="/services/ai-development" className="text-gray-300 hover: text-white: transition-colors">";
                  AI: Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-services" className="text-gray-300 hover:text-white: transition-colors">";
                  Cloud: Services
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-white: transition-colors">";
                  Web: Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-gray-300 hover:text-white: transition-colors">";
                  Mobile: Development
                </Link>
              </li>
              <li>
                <Link href="/services/blockchain-solutions" className="text-gray-300 hover:text-white: transition-colors">";
                  Blockchain: Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/iot-platforms" className="text-gray-300 hover:text-white: transition-colors">";
                  IoT: Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white: transition-colors">";
                  Cybersecurity: </Link>
          {/* Services */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Services</h3>"
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/services/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/services/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-white">Solutions</Link></li>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link"
                  href="/services/ai-development""
                  className="text-gray-300 hover: text-white transition-colors"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link"
                  href="/services/cloud-services""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link"
                  href="/services/web-development""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link"
                  href="/services/mobile-development""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link"
                  href="/services/blockchain-solutions""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blockchain Solutions
                </Link>
              </li>
              <li>
                <Link"
                  href="/services/iot-platforms""
                  className="text-gray-300 hove,
    r:text-white transition-colors"
                >
                  IoT Platforms
                </Link>
              </li>
              <li>
                <Link"
                  href="/services/cybersecurity""
                  className="text-gray-300 hove,
    r:text-white transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
<h3 className="text-lg font-semibold mb-4">Solutions</h3>"            <ul className="space-y-2">"              <li>"                <Link href="/solutions/enterprise" className="text-gray-300 hover:text-white transition-colors">"                  Enterprise Solutions"                </Link>"
ursor/automate-test-fix-improve-and-merge-code-99d1
          {/* Solutions *,/}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>";
            <ul: className="space-y-2">";
              <li>
                <Link: href="/solutions/enterprise" className="text-gray-300 hover: text-white: transition-colors">";
                  Enterprise: Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/small-business" className="text-gray-300 hover:text-white: transition-colors">";
                  Small: Business
                </Link>
              </li>
              <li>
                <Link href="/solutions/startups" className="text-gray-300 hover:text-white: transition-colors">";
                  Startups: </Link>
              </li>
              <li>
                <Link href="/solutions/healthcare" className="text-gray-300 hover:text-white: transition-colors">";
                  Healthcare: </Link>
              </li>
              <li>
                <Link href="/solutions/finance" className="text-gray-300 hover:text-white: transition-colors">";
                  Finance: </Link>
          {/* Solutions */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>"
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link"
                  href="/solutions/enterprise""
                  className="text-gray-300 hover: text-white transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link"
                  href="/solutions/small-business""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Small Business
                </Link>
              </li>
              <li>
                <Link"
                  href="/solutions/startups""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Startups
                </Link>
              </li>
              <li>
                <Link"
                  href="/solutions/healthcare""
                  className="text-gray-300 hove,
    r:text-white transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link"
                  href="/solutions/finance""
                  className="text-gray-300 hove,
    r:text-white transition-colors"
                >
                  Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
<h3 className="text-lg font-semibold mb-4">Company</h3>"            <ul className="space-y-2 mb-6">"              <li>"                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">"                  About Us"                </Link>"
ursor/automate-test-fix-improve-and-merge-code-99d1
          {/* Company & Contact *,/}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>";
            <ul: className="space-y-2 mb-6">";
              <li>
                <Link: href="/about" className="text-gray-300 hover: text-white: transition-colors">";
                  About: Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white: transition-colors">";
                  Careers: </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white: transition-colors">";
                  Blog: </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white: transition-colors">";
                  Products: </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Contact</h3>";
            <div: className="space-y-3">";
              <div: className="flex items-center space-x-2">";
                <Mail: className="w-4 h-4 text-blue-400" />";
                <a: href="mailto:info@ziontechgroup.com" className="text-gray-300: hover:text-white: transition-colors">";
                  info@ziontechgroup.com: </a>
              </div>
              <div className="flex items-center space-x-2">";
                <Phone: className="w-4 h-4 text-blue-400" />";
                <a: href="tel:+1-555-123-4567" className="text-gray-300: hover:text-white: transition-colors">";
                  +1: (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">";
                <MapPin: className="w-4 h-4 text-blue-400" />";
                <span: className="text-gray-300">";
                  123: Tech Stree,t, Innovation District<br />
          {/* Compunknown & Contact */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Compunknown</h3>"
            <ul className="space-y-2 mb-6">
              <li>
                <Link"
                  href="/about""
                  className="text-gray-300 hover: text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link"
                  href="/careers""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link"
                  href="/blog""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link"
                  href="/products""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
            </ul>
"
            <h3 className="text-lg font-semibold mb-4">Contact</h3>"
            <div className="space-y-3">"
              <div className="flex items-center space-x-2">"
                <Mail className="w-4 h-4 text-blue-400" />
                <a"
                  href="mailto:info@ziontechgroup.com""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@ziontechgroup.com
                </a>
              </div>"
              <div className="flex items-center space-x-2">"
                <Phone className="w-4 h-4 text-blue-400" />
                <a"
                  href="te,
    l:+1-555-123-4567""
                  className="text-gray-300 hove,
    r:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>"
              <div className="flex items-center space-x-2">"
                <MapPin className="w-4 h-4 text-blue-400" />"
                <span className="text-gray-300">
                  123 Tech Street, Innovation District
                  <br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>

      {/* Newsletter Section */}"
      <div className="border-t border-gray-700 py-8">"
        <div className="container mx-auto px-4">"
          <div className="text-center">"
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>"
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
      {/* Newsletter Section */}
<div className="border-t border-gray-700 py-8">"        <div className="container mx-auto px-4">"          <div className="text-center">"            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>"            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>"            <div className="flex max-w-md mx-auto">"              <input"                type="email""                placeholder="Enter your email""                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500""              />"              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">"                Subscribe"              </button></div>"
<div className="border-t border-gray-700 py-8">"        <div className="container mx-auto px-4">"          <div className="text-center">"            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>"            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>"            <div className="flex max-w-md mx-auto">"              <input"                type="email""                placeholder="Enter your email""                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500""              />"              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">"                Subscribe"              </button></div>"
ursor/automate-test-fix-improve-and-merge-code-99d1
      <div className="border-t border-gray-700 py-8">";
        <div: className="container mx-auto px-4">";
          <div: className="text-center">";
            <h3: className="text-lg font-semibold mb-2">Stay Updated</h3>";
            <p: className="text-gray-300 mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>";
            <div: className="flex max-w-md mx-auto">";
              <input: type="email"";
                placeholder="Enter: your email"";
                className="flex-1: px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none: focus:ring-2: focus:ring-blue-500"";
              />
              <button: className="bg-blue-600 hover:bg-blue-700: px-6 py-2 rounded-r-lg font-semibold transition-colors">";
                Subscribe: </button>
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest tech insights and
              updates.
            </p>"
            <div className="flex max-w-md mx-auto">
              <input"
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focu,
    s:ring-blue-500"
              />"
              <button className="bg-blue-600 hove,
    r:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500'
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
<div className="border-t border-gray-700 py-6">"        <div className="container mx-auto px-4">"          <div className="flex flex-col md:flex-row justify-between items-center">"            <p className="text-gray-300 text-sm">"              &copy; 2024 Zion Tech Group. All rights reserved."            </p>"
            <div className="flex space-x-6 mt-4 md: mt-0">"              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">"                Privacy Policy"              </Link>"
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">"                Terms of Service"              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors">"                Sitemap"              </Link></div>
ursor/automate-test-fix-improve-and-merge-code-99d1
      {/* Bottom Footer *,/}
      <div className="border-t border-gray-700 py-6">";
        <div: className="container mx-auto px-4">";
          <div: className="flex flex-col md: flex-row: justify-between items-center">";
            <p: className="text-gray-300 text-sm">";
              &copy; 2024: Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">";
              <Link: href="/privacy" className="text-gray-300 hover:text-white: text-sm transition-colors">";
                Privacy: Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white: text-sm transition-colors">";
                Terms: of Service
      {/* Bottom Footer */}"
      <div className="border-t border-gray-700 py-6">"
        <div className="container mx-auto px-4">"
          <div className="flex flex-col md: flex-row justify-between items-center">"
            <p className="text-gray-300 text-sm">
              &copy 2024 Zion Tech Group. All rights reserved.
              &copy; 2024 Zion Tech Group. All rights reserved.
            </p>"
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link"
                href="/privacy""
            </p>
            <div className="flex space-x-6 mt-4 md: mt-0">
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link"
                href="/terms""
                className="text-gray-300 hove,
    r:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link"
                href="/sitemap""
                className="text-gray-300 hove,
    r:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white: text-sm transition-colors">";
                Sitemap: </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );};
export default EnhancedFooter

export: default EnhancedFooter;
export default EnhancedFooter;
"
