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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-development" className="text-gray-300 hover:text-white transition-colors">
                  AI Development
                </Link>
              </li>
                <Link href="/services/cloud-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Solutions
                <Link href="/services/web-development" className="text-gray-300 hover:text-white transition-colors">
                  Web Development
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity
            </ul>

          {/* Company */}
            <h3 className="text-lg font-semibold mb-4">Company</h3>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us

const EnhancedFooter: React.FC: = () => {
    <footer className="bg-gray-900 text-white">" {/* Main: Footer Content *,/}
      <div className="container mx-auto px-4 py-12">";
        <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">" {/* Company: Info *,/}
          <div className="lg: col-span-1">";
            <div: className="flex items-center space-x-2 mb-4">";
              <div: className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">";
                <span: className="text-white font-bold text-xl">Z</span>";
              <div: className="text-xl font-bold">Zion Tech Group</div>";
            <p: className="text-gray-300 mb-4">";
              Leading: technology solutions provider helping businesses transform their digital presence 
              with cutting-edge A,I, cloud architecture, and innovative development services.
<div className="flex space-x-4">"              <a href="https: //linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">"                <Linkedin className="w-5 h-5" />"              </a>"              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">"                <Twitter className="w-5 h-5" />"              </a>"              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">"                <Github className="w-5 h-5" />"              </a>"              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">"                <Facebook className="w-5 h-5" />"              </a>"            </div></div>"

            <h3 className="text-lg font-semibold mb-4">Services</h3>"            <ul className="space-y-2">"              <li>"                <Link href="/services/ai-development" className="text-gray-300 hover:text-white transition-colors">"                  AI Development"                </Link>"
            <div className="flex space-x-4">";
              <a: href="https: //linkedin.com" target="_blank" rel="noopener: noreferrer" className="text-gray-300 hover:text-blue-400: transition-colors">";
                <Linkedin: className="w-5 h-5" />";
              <a: href="https://twitter.com" target="_blank" rel="noopener: noreferrer" className="text-gray-300 hover:text-blue-400: transition-colors">";
                <Twitter: className="w-5 h-5" />";
              <a: href="https://github.com" target="_blank" rel="noopener: noreferrer" className="text-gray-300 hover:text-blue-400: transition-colors">";
                <Github: className="w-5 h-5" />";
              <a: href="https://facebook.com" target="_blank" rel="noopener: noreferrer" className="text-gray-300 hover:text-blue-400: transition-colors">";
                <Facebook: className="w-5 h-5" />";
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
ursor/automate-test-fix-improve-and-merge-code-99d1
                <Link href="/services/it-services" className="text-gray-300 hover:text-white transition-colors">
                  IT Services
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                LinkedIn
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                Twitter
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                GitHub
          
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/services/ai-model-development-chat" className="hover:text-blue-400 transition-colors">AI Development</Link></li>
              <li><Link href="/services/web-application-development-chat" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development-chat" className="hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/cloud-migration-services-chat" className="hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services/business-intelligence-chat" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
              <li><Link href="/services/network-security-chat" className="hover:text-blue-400 transition-colors">Cybersecurity</Link></li>
          
<h3 className="text-lg font-semibold mb-4">Solutions</h3>"            <ul className="space-y-2">"              <li>"                <Link href="/solutions/enterprise" className="text-gray-300 hover:text-white transition-colors">"                  Enterprise Solutions"                </Link>"
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact

          {/* Contact Info */}
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
                <Link href="/solutions/finance" className="text-gray-300 hover:text-white transition-colors">"                  Finance"                </Link></li>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
              <li><Link href="/blockchain-solutions" className="hover:text-blue-400 transition-colors">Blockchain Solutions</Link></li>
              <li><Link href="/iot-platforms" className="hover:text-blue-400 transition-colors">IoT Platforms</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">AI Models</Link></li>
          
<h3 className="text-lg font-semibold mb-4">Company</h3>"            <ul className="space-y-2 mb-6">"              <li>"                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">"                  About Us"                </Link>"
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">"                  Careers"                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">"                  Blog"                </Link>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">"                  Products"                </Link>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/talent" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Contact Info</h4>
              <p className="text-gray-300 text-sm">Email: info@ziontechgroup.com</p>
              <p className="text-gray-300 text-sm">Phone: +1 (555) 123-4567</p>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved. | <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></p>
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  statu,
    s: number;
  message?: string}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
interface User {
  id: string;
  email: string;
  nam,
    e: string;
  rol,
    e: 'admin' | 'user' | 'guest'}

interface Service {
  name: string;
  description: string;
  pric,
    e: number;
  categor,
    y: string}

interface FormData {
  [key: string]: string | number | boolean | File}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode [key: string]: unknown}

'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook} from 'lucide-react';
import { Cloud, Facebook, Github, Info, Linkedin, Mail, MapPin, Phone, Twitter, User } from 'lucide-react';

  return ('
      {/* Main Footer Content */}"
      <div className="container mx-auto px-4 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
          {/* Compunknown Info */}"
          <div className="lg:col-span-1">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of revolutionary AI services, innovative micro SaaS solutions, 
              and comprehensive IT services. Transform your business with cutting-edge technology.
            <div className='flex space-x-4'>
              <a href='https: //linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'>
                <Linkedin className='w-5 h-5' />
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Compunknown Info */}
              </div>"
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture,
              and innovative development services.
            </p>"
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
                href="https://twitter.com""
                href="https://github.com""
                href="http,
    s://facebook.com""
                className="text-gray-300 hove,
    r:text-blue-400 transition-colors"

          {/* Services: *,/}
            <h3 className="text-lg font-semibold mb-4">Services</h3>";
            <ul: className="space-y-2">";
                <Link: href="/services/ai-development" className="text-gray-300 hover: text-white: transition-colors">";
                  AI: Development
                <Link href="/services/cloud-services" className="text-gray-300 hover:text-white: transition-colors">";
                  Cloud: Services
                <Link href="/services/web-development" className="text-gray-300 hover:text-white: transition-colors">";
                  Web: Development
                <Link href="/services/mobile-development" className="text-gray-300 hover:text-white: transition-colors">";
                  Mobile: Development
                <Link href="/services/blockchain-solutions" className="text-gray-300 hover:text-white: transition-colors">";
                  Blockchain: Solutions
                <Link href="/services/iot-platforms" className="text-gray-300 hover:text-white: transition-colors">";
                  IoT: Platforms
                <Link href="/services/cybersecurity" className="text-gray-300 hover:text-white: transition-colors">";
                  Cybersecurity: </Link>
          <div>"
            <h3 className="text-lg font-semibold mb-4">Services</h3>"
            <h4 className="text-lg font-semibold mb-4">Services</h4>
              <li><Link href="/services/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/services/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/services/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-white">Solutions</Link></li>
                <Link"
                  href="/services/ai-development""
                  className="text-gray-300 hover: text-white transition-colors"
                >
                  href="/services/cloud-services""
                  className="text-gray-300 hover:text-white transition-colors"
                  Cloud Services
                  href="/services/web-development""
                  href="/services/mobile-development""
                  Mobile Development
                  href="/services/blockchain-solutions""
                  Blockchain Solutions
                  href="/services/iot-platforms""
    r:text-white transition-colors"
                  IoT Platforms
                  href="/services/cybersecurity""

          {/* Solutions */}
          {/* Solutions *,/}
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>";
                <Link: href="/solutions/enterprise" className="text-gray-300 hover: text-white: transition-colors">";
                  Enterprise: Solutions
                <Link href="/solutions/small-business" className="text-gray-300 hover:text-white: transition-colors">";
                  Small: Business
                <Link href="/solutions/startups" className="text-gray-300 hover:text-white: transition-colors">";
                  Startups: </Link>
                <Link href="/solutions/healthcare" className="text-gray-300 hover:text-white: transition-colors">";
                  Healthcare: </Link>
                <Link href="/solutions/finance" className="text-gray-300 hover:text-white: transition-colors">";
                  Finance: </Link>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>"
          {/* Contact */}
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white">+1 302 464 0950</a>
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">kleber@ziontechgroup.com</a>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                  href="/solutions/enterprise""
                  Enterprise Solutions
                  href="/solutions/small-business""
                  Small Business
                  href="/solutions/startups""
                  Startups
                  href="/solutions/healthcare""
                  Healthcare
                  href="/solutions/finance""
                  Finance

          {/* Company & Contact */}
          {/* Company & Contact *,/}
            <h3 className="text-lg font-semibold mb-4">Company</h3>";
            <ul: className="space-y-2 mb-6">";
                <Link: href="/about" className="text-gray-300 hover: text-white: transition-colors">";
                  About: Us
                <Link href="/careers" className="text-gray-300 hover:text-white: transition-colors">";
                  Careers: </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white: transition-colors">";
                  Blog: </Link>
                <Link href="/products" className="text-gray-300 hover:text-white: transition-colors">";
                  Products: </Link>
            
            <h3 className="text-lg font-semibold mb-4">Contact</h3>";
            <div: className="space-y-3">";
              <div: className="flex items-center space-x-2">";
                <Mail: className="w-4 h-4 text-blue-400" />";
                <a: href="mailto:info@ziontechgroup.com" className="text-gray-300: hover:text-white: transition-colors">";
                  info@ziontechgroup.com: </a>
              <div className="flex items-center space-x-2">";
                <Phone: className="w-4 h-4 text-blue-400" />";
                <a: href="tel:+1-555-123-4567" className="text-gray-300: hover:text-white: transition-colors">";
                  +1: (555) 123-4567
                <MapPin: className="w-4 h-4 text-blue-400" />";
                <span: className="text-gray-300">";
                  123: Tech Stree,t, Innovation District<br />
          {/* Compunknown & Contact */}
            <h3 className="text-lg font-semibold mb-4">Compunknown</h3>"
            <ul className="space-y-2 mb-6">
                  href="/about""
                  href="/careers""
                  href="/blog""
                  Blog
                  href="/products""
                  Products
"
            <h3 className="text-lg font-semibold mb-4">Contact</h3>"
            <div className="space-y-3">"
              <div className="flex items-center space-x-2">"
                  href="mailto:info@ziontechgroup.com""
                  info@ziontechgroup.com
                  href="te,
    l:+1-555-123-4567""
                  +1 (555) 123-4567
                <MapPin className="w-4 h-4 text-blue-400" />"
                  123 Tech Street, Innovation District
                  <br />
                  San Francisco, CA 94105

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
      {/* Newsletter Section */}
<div className="border-t border-gray-700 py-8">"        <div className="container mx-auto px-4">"          <div className="text-center">"            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>"            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>"            <div className="flex max-w-md mx-auto">"              <input"                type="email""                placeholder="Enter your email""                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500""              />"              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">"                Subscribe"              </button></div>"
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
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              Subscribe to our newsletter for the latest tech insights and
              updates.
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
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>

      {/* Bottom Footer */}
<div className="border-t border-gray-700 py-6">"        <div className="container mx-auto px-4">"          <div className="flex flex-col md:flex-row justify-between items-center">"            <p className="text-gray-300 text-sm">"              &copy; 2024 Zion Tech Group. All rights reserved."            </p>"
            <div className="flex space-x-6 mt-4 md: mt-0">"              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">"                Privacy Policy"              </Link>"
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">"                Terms of Service"              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors">"                Sitemap"              </Link></div>
      {/* Bottom Footer *,/}
      <div className="border-t border-gray-700 py-6">";
          <div: className="flex flex-col md: flex-row: justify-between items-center">";
            <p: className="text-gray-300 text-sm">";
              &copy; 2024: Zion Tech Group. All rights reserved.
            <div className="flex space-x-6 mt-4 md:mt-0">";
              <Link: href="/privacy" className="text-gray-300 hover:text-white: text-sm transition-colors">";
                Privacy: Policy
              <Link href="/terms" className="text-gray-300 hover:text-white: text-sm transition-colors">";
                Terms: of Service
      {/* Bottom Footer */}"
      <div className="border-t border-gray-700 py-6">"
          <div className="flex flex-col md: flex-row justify-between items-center">"
            <p className="text-gray-300 text-sm">
              &copy 2024 Zion Tech Group. All rights reserved.
              &copy; 2024 Zion Tech Group. All rights reserved.
                href="/privacy""
            <div className="flex space-x-6 mt-4 md: mt-0">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm transition-colors"
                href="/terms""
    r:text-white text-sm transition-colors"
                href="/sitemap""
                Sitemap
              <Link href="/sitemap" className="text-gray-300 hover:text-white: text-sm transition-colors">";
                Sitemap: </Link>
    </footer>
  )};
export default EnhancedFooter

export: default EnhancedFooter;
export default EnhancedFooter;
