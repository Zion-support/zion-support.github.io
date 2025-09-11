import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Smartphone, 
  Building, 
  Globe, 
  Zap, 
  Shield, 
  Users,
  ArrowUp,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Development', href: '/services/ai-development' },
        { name: 'Cloud Architecture', href: '/services/cloud-services' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'Blockchain Solutions', href: '/services/blockchain' },
        { name: 'IoT Platforms', href: '/services/iot-platforms' },
        { name: 'Web Development', href: '/services/web-development' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'E-commerce', href: '/solutions/ecommerce' },
        { name: 'CRM Systems', href: '/solutions/crm' },
        { name: 'Data Analytics', href: '/solutions/analytics' },
        { name: 'Automation', href: '/solutions/automation' },
        { name: 'Digital Transformation', href: '/solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/ziontechgroup' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/95 backdrop-blur-2xl border-t border-white/20 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  Zion Tech
                </span>
                <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Leading provider of innovative technology solutions and services. 
              Transforming businesses through cutting-edge AI, cloud infrastructure, and micro SaaS platforms.
            </p>
            
            {/* Contact Information */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Smartphone className="w-4 h-4 mr-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Building className="w-4 h-4 mr-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 bg-gray-800/50 hover:bg-blue-500/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 border border-gray-700/50 hover:border-blue-500/30"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon === 'Twitter' ? '𝕏' : social.icon === 'LinkedIn' ? 'in' : social.icon === 'Facebook' ? 'f' : 'ig'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                {section.title === 'Company' && <Users className="w-5 h-5 mr-2 text-blue-400" />}
                {section.title === 'Services' && <Zap className="w-5 h-5 mr-2 text-green-400" />}
                {section.title === 'Solutions' && <Shield className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-purple-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;