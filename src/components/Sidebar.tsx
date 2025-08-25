import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Github, Youtube, Shield, Handshake, Brain, Rocket, Cpu, Database, Lock, BarChart3, Target, Heart, Code, Network, Cloud, Eye } from 'lucide-react';
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
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Technology Services',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', icon: Brain },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', icon: Users },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', icon: BarChart3 },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Rocket },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Target },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Users },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Shield },
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', icon: Shield },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Services', path: '/services/financial-services', icon: Briefcase },
        { name: 'Manufacturing Intelligence', path: '/services/manufacturing-intelligence', icon: Cpu },
        { name: 'Retail Technology', path: '/services/retail-technology', icon: Target },
        { name: 'Government Solutions', path: '/services/government-solutions', icon: Shield },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket }
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Blog', path: '/blog', icon: Globe },
        { name: 'Case Studies', path: '/case-studies', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'Events', path: '/events', icon: Globe }
      ]
    },
    {
      title: 'Support & Tools',
      items: [
        { name: 'Help Center', path: '/help', icon: Users },
        { name: 'Documentation', path: '/docs', icon: Globe },
        { name: 'AI Matcher', path: '/ai-matcher', icon: Brain },
        { name: 'Talent Directory', path: '/talent-directory', icon: Users },
        { name: 'Request Quote', path: '/request-quote', icon: Briefcase },
        { name: 'Status Page', path: '/status', icon: Globe }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950', label: 'Call us' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com', label: 'Email us' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#', label: 'Visit us' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' }
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

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-md border-r border-gray-800 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Zion Tech Group</div>
                  <div className="text-xs text-gray-400">AI & Technology Solutions</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section, sectionIdx) => (
                <div key={sectionIdx} className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={item.path}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
                          location.pathname === item.path
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        <item.icon className={`w-4 h-4 ${
                          location.pathname === item.path ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'
                        }`} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-800 space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-cyan-400 mt-0.5">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <a
                        href={info.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        aria-label={info.label}
                      >
                        {info.text}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-gray-800 space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
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

            {/* Footer */}
            <div className="p-6 border-t border-gray-800">
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-2">
                  Empowering businesses with cutting-edge AI and technology solutions
                </div>
                <div className="text-xs text-gray-600">
                  © {new Date().getFullYear()} Zion Tech Group
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}