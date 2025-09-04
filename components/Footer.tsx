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

const Footer: React.FC = (): JSX.Element => {
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
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </NextLink>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><NextLink href="/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</NextLink></li>
              <li><NextLink href="/it-services" className="text-gray-400 hover:text-white transition-colors">IT Solutions</NextLink></li>
              <li><NextLink href="/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</NextLink></li>
              <li><NextLink href="/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</NextLink></li>
              <li><NextLink href="/cloud-services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</NextLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><NextLink href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</NextLink></li>
              <li><NextLink href="/team" className="text-gray-400 hover:text-white transition-colors">Our Team</NextLink></li>
              <li><NextLink href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</NextLink></li>
              <li><NextLink href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</NextLink></li>
              <li><NextLink href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</NextLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <div className="text-gray-400">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <NextLink href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</NextLink>
              <NextLink href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</NextLink>
              <NextLink href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</NextLink>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;