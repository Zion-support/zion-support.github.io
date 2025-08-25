import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Cloud, Lock, Code, Rocket, Target, Lightbulb, Sparkles } from 'lucide-react';
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
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services', path: '/services', icon: Briefcase, description: 'Explore our comprehensive services' },
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain, description: 'Advanced AI and machine learning' },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target, description: 'Industry-specific solutions' },
        { name: 'Pricing', path: '/pricing', icon: Briefcase, description: 'Transparent pricing plans' },
        { name: 'About', path: '/about', icon: Users, description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Technology Services',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain, description: 'Advanced AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain, description: 'AI-powered research' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Cpu, description: 'Quantum computing solutions' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase, description: 'Self-operating systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Briefcase, description: 'Intelligent IT management' },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Cpu, description: 'Quantum solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Globe, description: 'High-speed connectivity' },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket, description: 'Cutting-edge tech' }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cloud, description: 'Complete IT solutions' },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud, description: 'Cloud development' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'Security solutions' },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock, description: 'Compliance automation' },
        { name: 'Edge Computing', path: '/services#edge-computing', icon: Cpu, description: 'Edge infrastructure' },
        { name: 'Network Infrastructure', path: '/services#network', icon: Globe, description: 'Network solutions' },
        { name: 'Blockchain Platform', path: '/services#blockchain', icon: Code, description: 'Blockchain solutions' },
        { name: 'IoT Solutions', path: '/services#iot', icon: Globe, description: 'Internet of Things' }
      ]
    },
    {
      title: 'Micro SAAS & Development',
      items: [
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code, description: 'Scalable software' },
        { name: 'Innovative Micro Services', path: '/innovative-micro-saas-services', icon: Code, description: 'Custom solutions' },
        { name: 'Custom Development', path: '/services#custom-development', icon: Code, description: 'Tailored software' },
        { name: 'API Integration', path: '/services#api-integration', icon: Code, description: 'System integration' },
        { name: 'AI Project Management', path: '/services#ai-project-management', icon: Brain, description: 'Smart project tools' },
        { name: 'AI Customer Support', path: '/services#ai-support', icon: Brain, description: 'Automated support' },
        { name: 'AI HR Automation', path: '/services#ai-hr', icon: Brain, description: 'HR automation' },
        { name: 'AI Marketing Platform', path: '/services#ai-marketing', icon: Brain, description: 'Marketing automation' }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Briefcase, description: 'Large-scale solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users, description: 'Medical technology' },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: Briefcase, description: 'Fintech solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Briefcase, description: 'Smart manufacturing' },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Briefcase, description: 'Digital retail' },
        { name: 'Government Solutions', path: '/solutions/government', icon: Shield, description: 'Public sector tech' },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket, description: 'Business modernization' },
        { name: 'Business Intelligence', path: '/services#business-intelligence', icon: Lightbulb, description: 'Data insights' }
      ]
    },
    {
      title: 'Company & Support',
      items: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Our Team', path: '/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', path: '/partners', icon: Handshake, description: 'Partnership opportunities' },
        { name: 'Case Studies', path: '/case-studies', icon: Lightbulb, description: 'Success stories' },
        { name: 'Help Center', path: '/help', icon: Globe, description: 'Support resources' },
        { name: 'Documentation', path: '/docs', icon: Globe, description: 'Technical guides' },
        { name: 'Status Page', path: '/status', icon: Globe, description: 'System status' }
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
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-50 overflow-y-auto"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <Link to="/" className="flex items-center space-x-3 group" onClick={onClose}>
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg opacity-75 blur-sm group-hover:blur-md transition-all duration-300"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400 font-medium">Innovation • Technology • Future</p>
                  </div>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-cyan-500/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Navigation Content */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider neon-text-cyan">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        onClick={onClose}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 group"
                      >
                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg group-hover:border-cyan-400/50 transition-colors duration-200">
                          <item.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact Information */}
              <div className="pt-6 border-t border-cyan-500/20">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 neon-text-cyan">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <contact.icon className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-cyan-500/20">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 neon-text-cyan">
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 border border-cyan-500/20 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg text-center transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}