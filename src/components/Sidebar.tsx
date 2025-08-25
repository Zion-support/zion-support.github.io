import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Zap, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['main']);

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const navigationItems = [
    {
      title: 'Main',
      icon: Home,
      items: [
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services', path: '/services', icon: Briefcase, description: 'Explore our AI services' },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Rocket, description: 'Industry solutions' },
        { name: 'Pricing', path: '/pricing', icon: Briefcase, description: 'Service plans and pricing' },
        { name: 'About', path: '/about', icon: Users, description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Micro SAAS Services',
      icon: Brain,
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain, description: 'Intelligent automation solutions' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain, description: 'Autonomous research platform' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain, description: 'Quantum AI training' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Rocket, description: 'Self-optimizing operations' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Cpu, description: 'Intelligent IT asset tracking' },
        { name: 'AI Project Management', path: '/services/ai-powered-project-management', icon: Rocket, description: 'Intelligent project oversight' },
        { name: 'AI Content Generation', path: '/services/ai-content-generation-engine', icon: Brain, description: 'Automated content creation' },
        { name: 'AI Sales Intelligence', path: '/services/ai-sales-intelligence-platform', icon: Rocket, description: 'Lead scoring and forecasting' },
        { name: 'AI Risk Management', path: '/services/ai-risk-management-platform', icon: Shield, description: 'Comprehensive risk assessment' },
        { name: 'AI HR Analytics Suite', path: '/services/ai-hr-analytics-suite', icon: Users, description: 'Employee performance insights' },
        { name: 'AI Financial Analytics', path: '/services/ai-powered-financial-analytics', icon: Briefcase, description: 'Real-time market insights' },
        { name: 'AI Marketing Orchestrator', path: '/services/autonomous-marketing-orchestrator', icon: Rocket, description: 'AI-driven campaign optimization' }
      ]
    },
    {
      title: 'Cybersecurity & Quantum',
      icon: Shield,
      items: [
        { name: 'Quantum Encryption', path: '/services/quantum-encryption-platform', icon: Shield, description: 'Future-proof security' },
        { name: 'Quantum Cybersecurity', path: '/services/quantum-enhanced-cybersecurity', icon: Shield, description: 'Post-quantum protection' },
        { name: 'Quantum Communication', path: '/services/quantum-secure-communication', icon: Shield, description: 'Unhackable messaging' },
        { name: 'Quantum Identity Management', path: '/services/quantum-secure-identity-management', icon: Shield, description: 'Quantum-secured identities' },
        { name: 'Real-Time Fraud Detection', path: '/services/real-time-fraud-detection', icon: Shield, description: 'ML-powered fraud prevention' },
        { name: 'Smart Compliance Monitoring', path: '/services/smart-compliance-monitoring', icon: Shield, description: 'Regulatory compliance tracking' },
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield, description: 'Automated compliance' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      items: [
        { name: 'Cloud Cost Optimization', path: '/services/cloud-optimization', icon: Cpu, description: 'AI-driven cost management' },
        { name: 'Autonomous IT Operations', path: '/services/autonomous-it-operations-platform', icon: Cpu, description: 'Self-healing infrastructure' },
        { name: 'Smart Energy Management', path: '/services/smart-energy-management', icon: Cpu, description: 'AI-driven optimization' },
        { name: 'Predictive Maintenance', path: '/services/predictive-maintenance-platform', icon: Cpu, description: 'IoT-powered monitoring' },
        { name: 'Autonomous Data Pipeline', path: '/services/autonomous-data-pipeline-orchestrator', icon: Cpu, description: 'Self-healing workflows' },
        { name: 'Smart Vendor Management', path: '/services/smart-vendor-management-system', icon: Cpu, description: 'AI-powered evaluation' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu, description: 'Modern infrastructure services' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Cpu, description: 'Next-gen networking' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Rocket,
      items: [
        { name: 'Smart Inventory Management', path: '/services/smart-inventory-management', icon: Rocket, description: 'AI-driven forecasting' },
        { name: 'Intelligent Customer Support', path: '/services/intelligent-customer-support', icon: Users, description: 'AI chatbot with human fallback' },
        { name: 'Smart Contract Management', path: '/services/smart-contract-management', icon: Briefcase, description: 'Automated lifecycle management' },
        { name: 'Autonomous Customer Success', path: '/services/autonomous-customer-success-platform', icon: Users, description: 'Proactive monitoring' },
        { name: 'Smart Learning Management', path: '/services/smart-learning-management-platform', icon: Users, description: 'Personalized learning paths' },
        { name: 'Smart Contract Lifecycle', path: '/services/smart-contract-lifecycle-manager', icon: Briefcase, description: 'End-to-end contract management' },
        { name: 'Autonomous Supply Chain', path: '/services/autonomous-supply-chain-optimizer', icon: Rocket, description: 'Self-optimizing supply chains' },
        { name: 'Smart Energy Trading', path: '/services/smart-energy-trading-platform', icon: Cpu, description: 'AI-driven market analysis' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      items: [
        { name: 'Blockchain Supply Chain', path: '/services/blockchain-supply-chain-tracker', icon: Globe, description: 'End-to-end transparency' },
        { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning-platform', icon: Brain, description: 'Quantum algorithms for ML' },
        { name: 'Quantum Financial Modeling', path: '/services/quantum-financial-modeling', icon: Briefcase, description: 'Advanced financial simulations' },
        { name: 'Quantum Neural Networks', path: '/services/quantum-neural-network-platform', icon: Brain, description: 'Quantum AI training' },
        { name: 'Smart Environmental Monitoring', path: '/services/smart-environmental-monitoring', icon: Globe, description: 'IoT sustainability tracking' },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe, description: 'Quantum computing solutions' },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe, description: 'Specialized business applications' },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe, description: 'Cutting-edge innovations' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Globe,
      items: [
        { name: 'Healthcare Analytics', path: '/services/smart-healthcare-analytics', icon: Users, description: 'Patient insights and diagnostics' },
        { name: 'Legal Document Analysis', path: '/services/ai-legal-document-analyzer', icon: Briefcase, description: 'Contract analysis and compliance' },
        { name: 'Marketing Orchestration', path: '/services/autonomous-marketing-orchestrator', icon: Rocket, description: 'AI-driven campaign optimization' },
        { name: 'Supply Chain Optimization', path: '/services/autonomous-supply-chain-optimizer', icon: Rocket, description: 'Self-optimizing supply chains' },
        { name: 'Energy Trading Platform', path: '/services/smart-energy-trading-platform', icon: Cpu, description: 'AI-driven market analysis' },
        { name: 'Innovation Management', path: '/services/ai-innovation-management-platform', icon: Brain, description: 'End-to-end innovation pipeline' },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Globe, description: 'Sector-specific solutions' }
      ]
    },
    {
      title: 'Company & Resources',
      icon: Users,
      items: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Our Mission', path: '/mission', icon: Users, description: 'What drives us forward' },
        { name: 'Our Team', path: '/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', path: '/partners', icon: Handshake, description: 'Strategic partnerships' },
        { name: 'Blog', path: '/blog', icon: Globe, description: 'Industry insights' },
        { name: 'Case Studies', path: '/case-studies', icon: Globe, description: 'Success stories' },
        { name: 'Help Center', path: '/help', icon: Users, description: 'Support resources' },
        { name: 'Documentation', path: '/docs', icon: Globe, description: 'Technical documentation' },
        { name: 'Support Center', path: '/support', icon: Users, description: 'Customer support' }
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
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Globe, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Globe, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube' }
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

  const isActiveRoute = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

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
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Zion Tech Group</div>
                    <div className="text-cyan-400 text-xs">AI-Powered Solutions</div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors duration-200"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-6">
              {navigationItems.map((section) => (
                <div key={section.title} className="space-y-3">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:bg-cyan-400/10 rounded-lg transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5 text-cyan-400" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        expandedSections.includes(section.title) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {expandedSections.includes(section.title) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-8 space-y-2"
                    >
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block p-2 rounded-lg transition-all duration-200 group ${
                            isActiveRoute(item.path)
                              ? 'bg-cyan-400/20 text-cyan-400'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                          }`}
                          onClick={onClose}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-4 h-4" />
                            <div className="flex-1">
                              <div className="text-sm font-medium">{item.name}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="border-t border-cyan-500/20 p-4 space-y-4">
              <h3 className="text-white font-semibold text-sm neon-text neon-cyan">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-cyan-500/20 p-4 space-y-4">
              <h3 className="text-white font-semibold text-sm neon-text neon-cyan">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg transition-all duration-200 group"
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t border-cyan-500/20 p-4 space-y-3">
              <Link
                to="/contact"
                className="block w-full futuristic-btn text-center py-3 text-sm font-medium"
                onClick={onClose}
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="block w-full text-center py-3 text-sm font-medium text-cyan-400 hover:text-cyan-300 border border-cyan-400/30 hover:border-cyan-400/50 rounded-lg transition-all duration-200"
                onClick={onClose}
              >
                View Pricing
              </Link>
            </div>

            {/* Footer */}
            <div className="border-t border-cyan-500/20 p-4">
              <div className="text-center text-xs text-gray-500 space-y-2">
                <p>© {new Date().getFullYear()} Zion Tech Group</p>
                <p>AI-Powered Technology Solutions</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                    Privacy
                  </Link>
                  <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}