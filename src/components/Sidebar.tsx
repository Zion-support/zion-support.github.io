import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Building, Target, Zap, Database, Network, Cloud, Lock, BarChart3, Palette, Smartphone, Server, Github, Youtube, FileText, BookOpen, Calendar, HelpCircle, Settings, ChevronRight } from 'lucide-react';
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
      title: 'Main Navigation',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Blog', path: '/blog', icon: BookOpen }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Globe },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', icon: Building },
        { name: 'Micro SAAS', path: '/micro-saas', icon: Rocket }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Brain },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Brain }
      ]
    },
    {
      title: 'Advanced Solutions',
      items: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Globe },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: BarChart3 },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Smartphone },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Zap }
      ]
    },
    {
      title: 'Resources & Support',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Webinars', path: '/webinars', icon: Calendar },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Case Studies', path: '/case-studies', icon: BookOpen }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: 'Delaware, USA', href: '#' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-white/10 z-50 overflow-y-auto"
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
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-6">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                          isActive(item.path)
                            ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.name}
                        <ChevronRight className={`w-3 h-3 ml-auto transition-transform duration-200 ${
                          isActive(item.path) ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`} />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-4 border-t border-white/10 mt-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-4 h-4 mr-3" />
                    {contact.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                Follow Us
              </h3>
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}