import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Cloud, Database, Network, Settings, BookOpen, MessageCircle, FileText, Star, Rocket, Target, Lightbulb, CheckCircle } from 'lucide-react';
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
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
        { name: 'Pricing', path: '/pricing', icon: Star },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Technology Services',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Zap },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Rocket },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Zap },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cloud },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Lightbulb }
      ]
    },
    {
      title: 'Security & Compliance',
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: CheckCircle },
        { name: 'Security Assessment', path: '/services#security-assessment', icon: Shield },
        { name: 'Compliance & Audit', path: '/services#compliance', icon: FileText }
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: MessageCircle },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Testimonials', path: '/testimonials', icon: Star }
      ]
    },
    {
      title: 'Support & Help',
      items: [
        { name: 'Help Center', path: '/help', icon: MessageCircle },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'FAQ', path: '/faq', icon: MessageCircle },
        { name: 'Contact Support', path: '/support', icon: Phone },
        { name: 'Status Page', path: '/status', icon: Globe }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-700 z-50 overflow-y-auto"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            role="complementary"
            aria-label="Navigation sidebar"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                          }`}
                          onClick={onClose}
                        >
                          <item.icon className={`w-4 h-4 flex-shrink-0 ${
                            location.pathname === item.path ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                          }`} />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={onClose}
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="block w-full text-center px-4 py-2 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  onClick={onClose}
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700 text-center">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Zion Tech Group
              </p>
              <p className="text-gray-600 text-xs mt-1">
                AI-Powered Innovation
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}