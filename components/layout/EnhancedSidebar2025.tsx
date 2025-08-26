import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, Home, Star, Users, 
  Settings, HelpCircle, Mail, Phone, MapPin,
  Brain, Atom, Shield, Rocket, DollarSign,
  Globe, Cpu, Database, Lock, Zap,
  TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Search, Menu, X as CloseIcon,
  Target, BookOpen, Calendar, Video
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  color?: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;
  category?: string;
}

const sidebarSections = [
  {
    title: 'Revolutionary Services',
    icon: Zap,
    color: 'from-cyan-500 to-blue-600',
    items: [
      {
        name: 'AI & Consciousness',
        href: '/ai-services',
        icon: Brain,
        description: 'Advanced AI consciousness and evolution platforms',
        subItems: [
          { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
          { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
          { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
          { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
          { name: 'AI Education Platform', href: '/ai-education-platform' },
          { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
          { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
          { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
          { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
          { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
        ]
      },
      {
        name: 'Quantum Computing',
        href: '/quantum-services',
        icon: Atom,
        description: 'Next-generation quantum computing solutions',
        subItems: [
          { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
          { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
          { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
          { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
          { name: 'Quantum Robotics', href: '/quantum-robotics' },
          { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
          { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
          { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
        ]
      },
      {
        name: 'Enterprise IT',
        href: '/enterprise-it',
        icon: Shield,
        description: 'Enterprise-grade IT infrastructure and security',
        subItems: [
          { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
          { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
          { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
          { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
          { name: 'Quantum Networking', href: '/quantum-networking' },
          { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
          { name: 'Quantum Data Center', href: '/quantum-data-center' },
          { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
        ]
      },
      {
        name: 'Micro SAAS',
        href: '/micro-saas',
        icon: Rocket,
        description: 'AI-powered micro SAAS solutions',
        subItems: [
          { name: 'AI Content Factory Platform', href: '/ai-content-factory' },
          { name: 'CRM Intelligence & Automation', href: '/crm-intelligence-automation' },
          { name: 'AI Decision Engine Platform', href: '/ai-decision-engine' },
          { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' },
          { name: 'AI HR & Talent Platform', href: '/ai-hr-talent-platform' },
          { name: 'Financial Analytics Platform', href: '/financial-analytics-platform' },
          { name: 'Supply Chain Intelligence', href: '/supply-chain-intelligence' },
          { name: 'Marketing Automation Platform', href: '/marketing-automation-platform' },
          { name: 'Project Management AI', href: '/project-management-ai' }
        ]
      },
      {
        name: 'Space Technology',
        href: '/space-tech',
        icon: Globe,
        description: 'Cutting-edge space exploration and mining',
        subItems: [
          { name: 'Space Mining Platform', href: '/space-mining-platform' },
          { name: 'Satellite Technology', href: '/satellite-technology' },
          { name: 'Space Resource Management', href: '/space-resource-management' },
          { name: 'Interplanetary Communication', href: '/interplanetary-communication' }
        ]
      },
      {
        name: 'Emerging Tech',
        href: '/emerging-tech',
        icon: Sparkles,
        description: 'Future technologies and innovations',
        subItems: [
          { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
          { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
          { name: 'Advanced Robotics', href: '/advanced-robotics' },
          { name: 'Biotechnology Platform', href: '/biotechnology-platform' }
        ]
      }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Target,
    color: 'from-purple-500 to-pink-600',
    items: [
      {
        name: 'Healthcare',
        href: '/healthcare-solutions',
        icon: Heart,
        description: 'AI-powered healthcare diagnostics and solutions',
        subItems: [
          { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
          { name: 'Medical Imaging AI', href: '/medical-imaging-ai' },
          { name: 'Drug Discovery Platform', href: '/drug-discovery-platform' }
        ]
      },
      {
        name: 'Financial Services',
        href: '/financial-solutions',
        icon: BarChart3,
        description: 'Advanced financial intelligence and analytics',
        subItems: [
          { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
          { name: 'Quantum Trading Platform', href: '/quantum-financial-trading' },
          { name: 'Risk Assessment AI', href: '/risk-assessment-ai' }
        ]
      },
      {
        name: 'Manufacturing',
        href: '/manufacturing-solutions',
        icon: Settings,
        description: 'Industry 4.0 and smart manufacturing',
        subItems: [
          { name: 'Smart Factory Platform', href: '/smart-factory-platform' },
          { name: 'Predictive Maintenance AI', href: '/predictive-maintenance-ai' },
          { name: 'Quality Control AI', href: '/quality-control-ai' }
        ]
      },
      {
        name: 'Retail & E-commerce',
        href: '/retail-solutions',
        icon: Eye,
        description: 'E-commerce optimization and retail intelligence',
        subItems: [
          { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' },
          { name: 'Customer Behavior AI', href: '/customer-behavior-ai' },
          { name: 'Inventory Management AI', href: '/inventory-management-ai' }
        ]
      },
      {
        name: 'Government & Defense',
        href: '/government-solutions',
        icon: Shield,
        description: 'Secure government and defense solutions',
        subItems: [
          { name: 'Cybersecurity Platform', href: '/quantum-cybersecurity-platform' },
          { name: 'Data Protection AI', href: '/data-protection-ai' },
          { name: 'Threat Detection AI', href: '/threat-detection-ai' }
        ]
      },
      {
        name: 'Education',
        href: '/education-solutions',
        icon: Award,
        description: 'AI-powered education and learning platforms',
        subItems: [
          { name: 'AI Education Platform', href: '/ai-education-platform' },
          { name: 'Personalized Learning AI', href: '/personalized-learning-ai' },
          { name: 'Student Performance AI', href: '/student-performance-ai' }
        ]
      }
    ]
  },
  {
    title: 'Company & Resources',
    icon: Users,
    color: 'from-green-500 to-emerald-600',
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', badge: 'New' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud/' },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation/' },
      { name: 'Quantum Networking', href: '/quantum-services' },
      { name: 'Quantum Data Center', href: '/quantum-services' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-infrastructure' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5" />,
    color: 'text-emerald-400',
    items: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', badge: 'New' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', badge: 'New' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', badge: 'New' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform', badge: 'New' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform', badge: 'New' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform' },
      { name: 'Project Management', href: '/intelligent-project-management-suite' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'Marketing Automation', href: '/ai-autonomous-marketing-platform' },
      { name: 'Customer Service AI', href: '/ai-customer-service' },
      { name: 'HR & Recruitment', href: '/ai-hr-recruitment' },
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Solutions',
    icon: <Target className="w-5 h-5" />,
    color: 'text-orange-400',
    items: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' },
      { name: 'Real Estate Technology', href: '/real-estate-technology-solutions' },
      { name: 'Entertainment & Media', href: '/entertainment-media-solutions' },
      { name: 'Space Technology', href: '/space-technology' },
      { name: 'Biotech & Healthcare', href: '/biotech-ai-research-platform' }
    ]
  },
  {
    title: 'Resources',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-cyan-400',
    items: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Events', href: '/events' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Developer Resources', href: '/developer-resources' },
      { name: 'Research & Development', href: '/research-development' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Performance Reports', href: '/reports' },
      { name: 'Market Analysis', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' }
    ]
  },
  {
    title: 'Company',
    icon: <Users className="w-5 h-5" />,
    color: 'text-pink-400',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: '/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Press', href: '/news' },
      { name: 'Partners', href: '/partners' },
      { name: 'Investors', href: '/investors' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Locations', href: '/locations' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Diversity & Inclusion', href: '/diversity-inclusion' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: <Star className="w-4 h-4" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Market Pricing', href: '/market-pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Services Advertising', href: '/services-advertising', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Events', href: '/events', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Webinars', href: '/webinars', icon: <Video className="w-4 h-4" /> },
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Resources', href: '/resources', description: 'Whitepapers and guides' },
  { name: 'Blog', href: '/blog', description: 'Industry insights' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status-pages-slo', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
];

const stats = [
  { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="w-5 h-5" /> },
  { label: 'Years Experience', value: '15+', icon: <Clock className="w-5 h-5" /> },
  { label: 'Awards Won', value: '25+', icon: <Award className="w-5 h-5" /> }
];

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle);
    } else {
      newExpanded.add(sectionTitle);
    }
    setExpandedSections(newExpanded);
  };

  const toggleItem = (itemName: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemName)) {
      newExpanded.delete(itemName);
    } else {
      newExpanded.add(itemName);
    }
    setExpandedItems(newExpanded);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (href: string) => router.pathname === href;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Contact Bar */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">{contactInfo.email}</span>
            </div>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="p-6 space-y-6">
          {/* Home Link */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group"
          >
            <Home className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">Home</span>
          </Link>

          {/* Service Sections */}
          {sidebarSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-3">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-lg border border-gray-700/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                    <section.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold">{section.title}</span>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                    expandedSections.has(section.title) ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 ml-6"
                  >
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <button
                          onClick={() => toggleItem(item.name)}
                          className="w-full flex items-center justify-between p-2 hover:bg-gray-800/30 rounded-lg transition-all duration-300 group text-left"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                            <div>
                              <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium">
                                {item.name}
                              </span>
                              <p className="text-gray-500 text-xs">{item.description}</p>
                            </div>
                          </div>
                          {item.subItems && item.subItems.length > 0 && (
                            <ChevronRight 
                              className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                                expandedItems.has(item.name) ? 'rotate-90' : ''
                              }`} 
                            />
                          )}
                        </button>

                        {/* Sub-items */}
                        {item.subItems && item.subItems.length > 0 && (
                          <AnimatePresence>
                            {expandedItems.has(item.name) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-1 ml-6"
                              >
                                {item.subItems.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2 p-2 hover:bg-gray-800/20 rounded-lg transition-all duration-300 group"
                                  >
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                                    <span className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-200 text-xs">
                                      {subItem.name}
                                    </span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Quick Stats */}
          <div className="pt-6 border-t border-gray-800/50">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Quick Stats</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                <div className="text-lg font-bold text-cyan-400">500+</div>
                <div className="text-xs text-gray-400">Services</div>
              </div>
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                <div className="text-lg font-bold text-purple-400">1000+</div>
                <div className="text-xs text-gray-400">Clients</div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="pt-6 border-t border-gray-800/50">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg border border-cyan-500/30">
              <h4 className="text-sm font-semibold text-white mb-2">Ready to Transform?</h4>
              <p className="text-gray-300 text-xs mb-3">
                Get in touch to discuss your revolutionary technology needs.
              </p>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}