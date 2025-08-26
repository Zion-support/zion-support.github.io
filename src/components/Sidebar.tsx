import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, 
  Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, 
  Brain, Cpu, Rocket, Building, Target, Zap, Database, Network, 
  Cloud, Lock, BarChart3, Palette, Smartphone, Server, Github, 
  Youtube, ChevronRight, ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(new Set());

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle);
    } else {
      newExpanded.add(sectionTitle);
    }
    setExpandedSections(newExpanded);
  };

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Mission', path: '/mission', icon: Target },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI Services', path: '/services/ai', icon: Brain },
        { name: 'Cloud & DevOps', path: '/services/cloud', icon: Cloud },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/infrastructure', icon: Server },
        { name: 'Digital Transformation', path: '/services/transformation', icon: Zap },
        { name: 'Consulting', path: '/services/consulting', icon: Briefcase }
      ]
    },
    {
      title: 'Advanced Solutions',
      items: [
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Globe },
        { name: 'Space Tech', path: '/space-tech', icon: Rocket },
        { name: 'Green IT', path: '/green-it', icon: Palette },
        { name: 'Mobile Solutions', path: '/mobile', icon: Smartphone },
        { name: 'IoT Services', path: '/iot-services', icon: Network },
        { name: 'Blockchain Services', path: '/blockchain-services', icon: Lock }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users },
        { name: 'Financial Solutions', path: '/financial-solutions', icon: BarChart3 },
        { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', icon: Cpu },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Smartphone },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: Brain },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', icon: Brain },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Brain }
      ]
    },
    {
      title: 'Resources & Support',
      items: [
        { name: 'Blog', path: '/blog', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Press', path: '/press', icon: Globe },
        { name: 'Case Studies', path: '/case-studies', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'Training', path: '/training', icon: Globe },
        { name: 'Events', path: '/events', icon: Globe }
      ]
    },
    {
      title: 'Help & Support',
      items: [
        { name: 'Help Center', path: '/help', icon: Users },
        { name: 'Documentation', path: '/docs', icon: Globe },
        { name: 'FAQ', path: '/faq', icon: Globe },
        { name: 'Support Portal', path: '/support', icon: Users },
        { name: 'Request Quote', path: '/request-quote', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake }
      ]
    },
    {
      title: 'Talent & Community',
      items: [
        { name: 'Talent Directory', path: '/talent', icon: Users },
        { name: 'Browse Talents', path: '/talents', icon: Users },
        { name: 'AI Matcher', path: '/match', icon: Brain },
        { name: 'Community', path: '/community', icon: Users },
        { name: 'Zion Hire AI', path: '/zion-hire-ai', icon: Brain }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: 'Wilmington, DE, USA', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:bg-blue-600/20' },
    { icon: Twitter, name: 'Twitter', href: 'https://twitter.com/ziontechgroup', color: 'hover:bg-sky-500/20' },
    { icon: Github, name: 'GitHub', href: 'https://github.com/ziontechgroup', color: 'hover:bg-gray-600/20' },
    { icon: Youtube, name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', color: 'hover:bg-red-600/20' },
    { icon: Facebook, name: 'Facebook', href: 'https://facebook.com/ziontechgroup', color: 'hover:bg-blue-600/20' },
    { icon: Instagram, name: 'Instagram', href: 'https://instagram.com/ziontechgroup', color: 'hover:bg-pink-600/20' }
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
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-2">
              {navigationItems.map((section) => (
                <div key={section.title} className="space-y-1">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <span className="font-medium">{section.title}</span>
                    {expandedSections.has(section.title) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedSections.has(section.title) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 space-y-1"
                    >
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                            isActive(item.path)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <contact.icon className="h-4 w-4" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} hover:scale-110 transition-all duration-300`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 mt-auto">
              <div className="text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Zion Tech Group</p>
                <p className="mt-1">Leading the future of technology</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}