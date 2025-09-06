import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'Email', href: 'mailto:contact@ziontechgroup.com', icon: '📧' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through cutting-edge technology solutions. 
              We deliver AI-powered innovations that drive real results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'AI Solutions',
                'Cloud Services',
                'Automation',
                'Cybersecurity',
                'Consulting'
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p>📍 123 Tech Street, Innovation City</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ contact@ziontechgroup.com</p>
              <p>🌐 www.ziontechgroup.com</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-700/50 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;