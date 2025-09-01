import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo, serviceCategories } from '../../data/services';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                Zion Tech Group
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading provider of innovative micro SAAS, IT, and AI solutions. 
                Transforming businesses through cutting-edge technology and expert consulting.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Globe className="w-4 h-4 mr-3 text-cyan-400" />
                <a href={contactInfo.website} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={`/services#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {category.icon} {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  💰 Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  📊 Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/solutions/healthcare"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  🏥 Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/financial"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  💰 Financial Services
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/manufacturing"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  🏭 Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/government"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  🏛️ Government
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/startup"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  🚀 Startup Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/enterprise"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  🏢 Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6 mt-8">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/webinars"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  Training
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              Stay Updated with Latest Tech Insights
            </h4>
            <p className="text-gray-300 mb-6">
              Get exclusive insights, industry updates, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/ziontechgroup"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;