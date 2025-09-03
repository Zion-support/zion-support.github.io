import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
              We help businesses innovate, scale, and succeed in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/zion-tech-group" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Micro SaaS</Link></li>
              <li><Link href="/services-overview" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Services Overview</Link></li>
              <li><Link href="/blockchain-solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blockchain Solutions</Link></li>
              <li><Link href="/iot-solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">IoT Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Partners</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Documentation</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Help Center</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Support</Link></li>
              <li><Link href="/training" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Training</Link></li>
              <li><Link href="/pricing-guide" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pricing Guide</Link></li>
              <li><Link href="/api" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">API</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
