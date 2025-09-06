import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  ChevronUp,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-slate-900 text-gray-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading AI & Technology Solutions for a Smarter Future. We deliver cutting-edge
              technology solutions that transform businesses and drive innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <div className="mb-4">
            <h3 className="text-white font-semibold mb-2">Contact Us</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400">
              <a href="tel:+13024640950" className="hover:text-white transition-colors">
                📞 +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                ✉️ kleber@ziontechgroup.com
              </a>
              <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex justify-between items-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <button
            type='button'
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            className='flex items-center space-x-1 text-gray-400 hover:text-white text-sm transition-colors cursor-pointer'
            aria-label='Back to top'
          >
            <ChevronUp className='h-4 w-4' aria-hidden='true' />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;