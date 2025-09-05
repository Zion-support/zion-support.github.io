import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, IT services, and micro SaaS solutions. 
              Empowering businesses with cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/consulting" className="text-gray-300 hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/guides" className="text-gray-300 hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/status" className="text-gray-300 hover:text-white transition-colors">System Status</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;