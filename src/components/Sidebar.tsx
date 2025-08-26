import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Building, Target, Zap, Database, Network, Cloud, Lock, BarChart3, Palette, Smartphone, Server, Github, Youtube, DollarSign, LifeBuoy, BookOpen, Video, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: DollarSign },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Support', path: '/support', icon: LifeBuoy },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Technology',
      items: [
        { name: 'AI Solutions', path: '/services/ai', icon: Brain },
        { name: 'Cloud & DevOps', path: '/services/cloud', icon: Cloud },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/infrastructure', icon: Server },
        { name: 'Digital Transformation', path: '/services/transformation', icon: Rocket },
        { name: 'Consulting', path: '/services/consulting', icon: Handshake }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'Tutorials', path: '/tutorials', icon: Video },
        { name: 'Documentation', path: '/docs', icon: BookOpen }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Sitemap', path: '/sitemap', icon: MapPin },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-white/10 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className={`flex items-center px-3 py-3 rounded-lg transition-all duration-300 group ${
                            isActive
                              ? 'bg-blue-600/20 text-blue-400 border border-blue-400/20'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <Icon className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                            isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'
                          }`} />
                          <span className="font-medium">{item.name}</span>
                          {isActive && (
                            <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact Info
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  <span>Wilmington, DE & Remote</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}