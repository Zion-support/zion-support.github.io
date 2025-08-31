import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Settings,
  Users,
  Shield,
  Cloud,
  Brain,
  Database,
  Globe,
  Rocket,
  Zap,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  BarChart3,
  Cpu,
  Smartphone,
  Lock,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Calendar
} from 'lucide-react';

const ModernSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Users },
      { name: 'Contact', href: '/contact', icon: Phone },
      { name: 'Blog', href: '/blog', icon: FileText },
      { name: 'Careers', href: '/careers', icon: Users },
      { name: 'Events', href: '/events', icon: Calendar },
    ],
    services: [
      { name: 'AI Services', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Cpu },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket },
      { name: 'Blockchain Solutions', href: '/services/blockchain', icon: Lock },
      { name: 'IoT & Edge Computing', href: '/services/iot-edge', icon: Smartphone },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
      { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', icon: Database },
      { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform', icon: Users },
      { name: 'AI Supply Chain Intelligence', href: '/services/ai-supply-chain-intelligence', icon: Globe },
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Database },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Globe },
      { name: 'AI-Powered Analytics', href: '/solutions/ai-analytics', icon: Brain },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
      { name: 'Security Compliance', href: '/solutions/security-compliance', icon: Shield },
      { name: 'Performance Optimization', href: '/solutions/performance', icon: Zap },
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'API Reference', href: '/api', icon: Cpu },
      { name: 'Support Center', href: '/help', icon: MessageCircle },
      { name: 'Community Forum', href: '/forum', icon: Users },
      { name: 'Innovative Services Showcase 2026', href: '/innovative-services-showcase-2026', icon: Rocket },
      { name: 'Comprehensive Services Showcase 2025', href: '/comprehensive-services-showcase-2025', icon: BarChart3 },
    ],
    comp: [
      { name: 'Privacy Policy', href: '/privacy', icon: Lock },
      { name: 'Terms of Service', href: '/terms', icon: FileText },
      { name: 'Cookie Policy', href: '/cookies', icon: Lock },
      { name: 'Accessibility', href: '/accessibility', icon: Users },
      { name: 'Security', href: '/security', icon: Shield },
      { name: 'Compliance', href: '/compliance', icon: Shield },
    ]
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const renderNavSection = (title: string, items: any[], sectionKey: string) => (
    <div key={sectionKey} className="mb-6">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium"
      >
        <span>{title}</span>
        {expandedSections.includes(sectionKey) ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      
      <AnimatePresence>
        {expandedSections.includes(sectionKey) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-2 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    location.pathname === item.href
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/80 backdrop-blur-sm rounded-lg text-white hover:bg-black/90 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-cyan-500/20 z-50 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h2>
              <p className="text-xs text-gray-400">Innovation Hub</p>
            </div>
          </div>

          {/* Navigation Content */}
          <nav className="space-y-2">
            {/* Main Navigation */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
              <div className="space-y-1">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Section */}
            {renderNavSection('Services', navigation.services, 'services')}

            {/* Solutions Section */}
            {renderNavSection('Solutions', navigation.solutions, 'solutions')}

            {/* Resources Section */}
            {renderNavSection('Resources', navigation.resources, 'resources')}

            {/* Company Section */}
            {renderNavSection('Company', navigation.comp, 'comp')}
          </nav>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-xs leading-relaxed">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Zion Tech Group
            </p>
            <p className="text-xs text-gray-500 mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default ModernSidebar;