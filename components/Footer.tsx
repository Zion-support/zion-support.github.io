import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cloud computing, and digital transformation. 
              We help businesses innovate and grow with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/ai-services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                AI Solutions
              </Link></li>
              <li><Link href="/services/micro-saas" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Micro SaaS
              </Link></li>
              <li><Link href="/services/it-services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                IT Services
              </Link></li>
              <li><Link href="/services/blockchain" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                Blockchain
              </Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Blog</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Hours</p>
                  <p className="text-white">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;