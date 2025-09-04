import React from 'react';
import NextLink from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  ArrowUp,
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <NextLink href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-2xl">Zion Tech</span>
            </NextLink>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading technology solutions provider helping businesses transform their digital presence
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5"  />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5"  />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5"  />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5"  />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <NextLink href="/services/ai-development" className="text-gray-400 hover:text-white transition-colors duration-200">
                  AI Services
                </NextLink>
              </li>
              <li>
                <NextLink href="/it-services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  IT Services
                </NextLink>
              </li>
              <li>
                <NextLink href="/micro-saas" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Micro SaaS
                </NextLink>
              </li>
              <li>
                <NextLink href="/services/cloud" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cloud Services
                </NextLink>
              </li>
              <li>
                <NextLink href="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cybersecurity
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <NextLink href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </NextLink>
              </li>
              <li>
                <NextLink href="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Careers
                </NextLink>
              </li>
              <li>
                <NextLink href="/news" className="text-gray-400 hover:text-white transition-colors duration-200">
                  News
                </NextLink>
              </li>
              <li>
                <NextLink href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Pricing
                </NextLink>
              </li>
              <li>
                <NextLink href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <NextLink href="/docs" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Documentation
                </NextLink>
              </li>
              <li>
                <NextLink href="/support" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Support
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Solutions
                </NextLink>
              </li>
              <li>
                <NextLink href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </NextLink>
              </li>
              <li>
                <NextLink href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-400 transition-colors duration-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+13024640950" className="text-white hover:text-blue-400 transition-colors duration-200">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">
                    364 E Main St STE 1008
                    <br  />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Zion Tech Group. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <NextLink href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </NextLink>
            <NextLink href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </NextLink>
            <NextLink href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </NextLink>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer