import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai" className="text-gray-300 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/cloud" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/infrastructure" className="text-gray-300 hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link href="/services/transformation" className="text-gray-300 hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;