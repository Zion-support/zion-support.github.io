import React from 'react';
<<<<<<< HEAD
import { FooterNewsletter } from '@/components/FooterNewsletter';
import { 
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  ChevronUp,
} from 'lucide-react';
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
<<<<<<< HEAD
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
              <a
                href="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
=======
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of cutting-edge AI, IT, and digital transformation solutions. 
              We help businesses scale, innovate, and succeed in the digital age.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/services/it-services" className="text-gray-300 hover:text-white transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/micro-saas" className="text-gray-300 hover:text-white transition-colors">
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
                </Link>
              </li>
            </ul>
          </div>

<<<<<<< HEAD
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <FooterNewsletter />
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
            className='flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer'
            aria-label='Back to top'
          >
            <ChevronUp className='h-4 w-4' aria-hidden='true' />
            <span>Back to Top</span>
          </button>
=======
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;