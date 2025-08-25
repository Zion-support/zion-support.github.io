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
<<<<<<< HEAD
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
=======
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', icon: Brain },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', icon: Users },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', icon: BarChart3 },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Advanced Research Automation', path: '/advanced-research-automation', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Rocket },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Target },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', icon: BarChart3 },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Users },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Shield },
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', icon: Shield },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Eye },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket }
>>>>>>> origin/cursor/website-audit-and-enhancement-acb8
      ]
    },
    {
      title: 'Cybersecurity & Quantum',
      icon: Shield,
      items: [
<<<<<<< HEAD
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
        { name: 'Autonomous Supply Chain', path: '/services/autonomous-supply-chain-platform', icon: Rocket, description: 'Self-optimizing logistics' },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', icon: Users, description: 'Customer behavior insights' },
        { name: 'Smart Contract Management', path: '/services/smart-contract-management', icon: Briefcase, description: 'Automated contract oversight' },
        { name: 'AI Legal Research', path: '/services/ai-legal-research-assistant', icon: Shield, description: 'Legal document analysis' },
        { name: 'Autonomous Accounting', path: '/services/autonomous-accounting-platform', icon: Briefcase, description: 'AI-powered bookkeeping' },
        { name: 'Smart HR Management', path: '/services/smart-hr-management-system', icon: Users, description: 'Employee lifecycle automation' },
        { name: 'AI Market Research', path: '/services/ai-market-research-platform', icon: Globe, description: 'Market trend analysis' }
=======
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', icon: Shield },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Code },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network }
>>>>>>> origin/cursor/website-audit-and-enhancement-acb8
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Globe,
      items: [
        { name: 'Healthcare AI', path: '/solutions/healthcare', icon: Shield, description: 'Medical technology solutions' },
        { name: 'Financial Services', path: '/solutions/financial', icon: Briefcase, description: 'Fintech and banking solutions' },
        { name: 'Manufacturing Intelligence', path: '/solutions/manufacturing', icon: Cpu, description: 'Industry 4.0 solutions' },
        { name: 'Retail Technology', path: '/solutions/retail', icon: Rocket, description: 'E-commerce and retail tech' },
        { name: 'Government Solutions', path: '/solutions/government', icon: Shield, description: 'Public sector technology' },
        { name: 'Education Technology', path: '/solutions/education', icon: Brain, description: 'AI-powered learning platforms' },
        { name: 'Real Estate Tech', path: '/solutions/real-estate', icon: Globe, description: 'Property management solutions' },
        { name: 'Transportation & Logistics', path: '/solutions/transportation', icon: Rocket, description: 'Smart mobility solutions' }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, label: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, label: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, label: 'Wilmington, DE, USA', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
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
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-800/50 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-6">
              {navigationItems.map((section) => {
                const Icon = section.icon;
                const isExpanded = expandedSections.includes(section.title);
                
                return (
                  <div key={section.title} className="space-y-3">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-800/50 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {section.title}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-2"
                      >
                        {section.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = location.pathname === item.path;
                          
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                                isActive 
                                  ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400' 
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                              }`}
                              onClick={onClose}
                            >
                              <ItemIcon className="w-4 h-4" />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium">{item.name}</div>
                                {item.description && (
                                  <div className="text-xs text-gray-400 mt-1 truncate">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact & Social */}
            <div className="p-6 border-t border-gray-800/50 space-y-6">
              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{contact.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-200"
                        title={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}