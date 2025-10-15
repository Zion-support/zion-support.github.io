import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with cutting-edge AI and technology solutions. 
              We help organizations transform their operations and achieve digital excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              
          <a href="https://twitter.com/ziontechgroup" className="text-purple-400 hover:text-purple-300">
                <Twitter className="w-5 h-5" />
              </a>
              
          <a href="https://linkedin.com/company/ziontechgroup" className="text-purple-400 hover:text-purple-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/digital-transformation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/micro-saas" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Micro SaaS
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <HeartIcon className="h-4 w-4 text-red-500" />
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;