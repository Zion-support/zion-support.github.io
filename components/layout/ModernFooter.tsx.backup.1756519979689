import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Zap, Shield, Cpu, Database, Globe, Lock } from 'lucide-react';

const ModernFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    { name: 'AI Services', icon: Cpu, href: '/services/ai' },
    { name: 'IT Solutions', icon: Shield, href: '/services/it' },
    { name: 'SAAS Platforms', icon: Database, href: '/services/saas' },
    { name: 'Development', icon: Globe, href: '/services/development' },
    { name: 'Cloud & Security', icon: Lock, href: '/services/cloud-security' },
    { name: 'Analytics', icon: Database, href: '/services/analytics' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-pink/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-neon-green">Innovation Group</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading technology solutions provider helping businesses transform their digital presence 
                with cutting-edge AI, cloud architecture, and innovative development services.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neon-blue/10 hover:bg-neon-blue/20 border border-neon-blue/20 hover:border-neon-blue/40 rounded-lg flex items-center justify-center text-neon-blue hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {serviceCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors group"
                    >
                      <category.icon className="w-4 h-4 text-neon-blue group-hover:text-neon-purple transition-colors" />
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-neon-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-neon-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <a 
                      href="tel:+13024640950" 
                      className="text-neon-blue hover:text-neon-purple transition-colors font-medium"
                    >
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-neon-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="text-neon-blue hover:text-neon-purple transition-colors font-medium"
                    >
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-neon-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Address</p>
                    <p className="text-gray-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-neon-blue/20 pt-8 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-semibold mb-4 text-white">Stay Updated</h4>
              <p className="text-gray-300 mb-6">
                Get the latest insights on technology trends, AI developments, and business solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-neon-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue/40 focus:ring-2 focus:ring-neon-blue/20"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:from-neon-purple hover:to-neon-blue transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neon-blue/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;