import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {

  X, 
  ChevronDown, 
  ChevronRight,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Server,
  Cloud,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Eye,
  Search,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  Menu,
  ArrowRight,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Truck,
  Heart,
  Scale,
  Home,
  BookOpen,
  Briefcase,
  Calendar,
  Factory
} from 'lucide-react';

interface MobileMenuProps {

  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {

  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {

    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isSectionExpanded = (section: string) => expandedSections.includes(section);

  const menuVariants = {

    closed: {

      x: '100%',
      opacity: 0,
      transition: {

        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {

      x: 0,
      opacity: 1,
      transition: {

        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const overlayVariants = {

    closed: {

      opacity: 0,
      transition: {

        duration: 0.3
      }
    },
    open: {

      opacity: 1,
      transition: {

        duration: 0.3
      }
    }
  };

  const menuItems = [
    {

      title: 'Home',
      href: '/',
      icon: Home,
      simple: true
    },
    {

      title: 'Services',
      icon: Zap,
      sections: [
        {

          title: 'AI & Automation',
          icon: Brain,
          items: [
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-dashboard', icon: BarChart3 },
            { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle },
            { name: 'AI Project Management', href: '/services/ai-project-management-platform', icon: Workflow },
            { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation-platform', icon: TrendingUp },
            { name: 'AI Enterprise Automation', href: '/services/ai-enterprise-automation-platform', icon: Building2 },
            { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: Workflow },
            { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform', icon: TrendingUp },
            { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', icon: Heart },
            { name: 'AI Educational Content', href: '/services/ai-educational-content-creation-platform', icon: BookOpen },
            { name: 'AI Legal Automation', href: '/services/ai-legal-document-automation-platform', icon: FileText },
            { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users },
            { name: 'AI Real Estate Analytics', href: '/services/ai-real-estate-investment-analytics-platform', icon: Home },
            { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics-platform', icon: Truck },
            { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', icon: Search },
            { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', icon: Database },
            { name: 'AI Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-platform', icon: Cpu },
            { name: 'AI Quantum Neural Network', href: '/services/ai-quantum-neural-network-platform', icon: Atom },
            { name: 'AI Space Technology', href: '/services/ai-space-technology-platform', icon: Satellite },
            { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-threat-intelligence', icon: Shield }
          ]
        },
        {

          title: 'Cloud & Infrastructure',
          icon: Cloud,
          items: [
            { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
            { name: 'Infrastructure Management', href: '/services/it-infrastructure-management', icon: Server },
            { name: 'Cybersecurity Solutions', href: '/services/cybersecurity', icon: Shield },
            { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions', icon: Network },
            { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', icon: Atom },
            { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: DollarSign }
          ]
        },
        {

          title: 'Specialized Solutions',
          icon: Target,
          items: [
            { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations-platform', icon: Brain },
            { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics-platform', icon: BarChart3 },
            { name: 'AI Enterprise Workflow Automation', href: '/services/ai-enterprise-workflow-automation', icon: Workflow },
            { name: 'AI Quantum Computing Solutions', href: '/services/ai-quantum-computing-solutions', icon: Atom },
            { name: 'AI Autonomous Financial Advisor', href: '/services/ai-autonomous-financial-advisor-platform', icon: DollarSign },
            { name: 'AI Autonomous Supply Chain Intelligence', href: '/services/ai-autonomous-supply-chain-intelligence', icon: BarChart3 },
            { name: 'AI Autonomous Cybersecurity Intelligence', href: '/services/ai-autonomous-cybersecurity-intelligence', icon: Shield }
          ]
        }
      ]
    },
    {

      title: 'Solutions',
      icon: Target,
      sections: [
        {

          title: 'Industry Solutions',
          icon: Building2,
          items: [
            { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
            { name: 'Financial Solutions', href: '/solutions/financial', icon: DollarSign },
            { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Factory },
            { name: 'Government Solutions', href: '/solutions/government', icon: Building2 },
            { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart }
          ]
        },
        {

          title: 'Technology Solutions',
          icon: Cpu,
          items: [
            { name: 'Quantum Edge Computing', href: '/solutions/quantum-edge-computing', icon: Atom },
            { name: 'AI Autonomous Business', href: '/solutions/ai-autonomous-business', icon: Brain },
            { name: 'Blockchain Web3', href: '/solutions/blockchain-web3', icon: Network },
            { name: 'IoT Edge Computing', href: '/solutions/iot-edge-computing', icon: Wifi },
            { name: 'Space Tech', href: '/solutions/space-tech', icon: Satellite }
          ]
        }
      ]
    },
    {

      title: 'Company',
      icon: Building2,
      sections: [
        {

          title: 'About Us',
          icon: Users,
          items: [
            { name: 'About Zion Tech Group', href: '/about', icon: Building2 },
            { name: 'Leadership Team', href: '/leadership', icon: Users },
            { name: 'Careers', href: '/careers', icon: Briefcase },
            { name: 'News & Updates', href: '/news', icon: FileText },
            { name: 'Events', href: '/events', icon: Calendar }
          ]
        },
        {

          title: 'Partnerships',
          icon: Handshake,
          items: [
            { name: 'Partners', href: '/partners', icon: Handshake },
            { name: 'Become a Partner', href: '/partners/join', icon: Users2 }
          ]
        }
      ]
    },
    {

      title: 'Resources',
      icon: BookOpen,
      sections: [
        {

          title: 'Learning & Insights',
          icon: GraduationCap,
          items: [
            { name: 'Blog', href: '/blog', icon: FileText },
            { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
            { name: 'White Papers', href: '/white-papers', icon: FileText },
            { name: 'Research & Development', href: '/research-development', icon: Lightbulb }
          ]
        },
        {

          title: 'Training & Support',
          icon: HelpCircle,
          items: [
            { name: 'Training Programs', href: '/training', icon: GraduationCap },
            { name: 'Webinars', href: '/webinars', icon: Video },
            { name: 'Documentation', href: '/docs', icon: FileText },
            { name: 'Help Center', href: '/help', icon: HelpCircle }
          ]
        }
      ]
    },
    {

      title: 'Support',
      icon: HelpCircle,
      simple: true,
      href: '/support'
    },
    {

      title: 'Contact',
      icon: Phone,
      simple: true,
      href: '/contact'
    },
    {

      title: 'Pricing',
      icon: DollarSign,
      simple: true,
      href: '/pricing'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-zion-slate-darker to-zion-blue-dark border-l border-zion-purple/30 shadow-2xl z-50 lg:hidden overflow-y-auto custom-scrollbar"
          >
            {/* Header */}
            <div className="sticky top-0 bg-zion-slate-darker/95 backdrop-blur-sm border-b border-zion-purple/20 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-2">
              {menuItems.map((item, index) => (
                <div key={item.title}>
                  {item.simple ? (
                    <Link
                      to={item.href || '/'}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-3 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-all duration-200 group"
                    >
                      <item.icon className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleSection(item.title)}
                        className="w-full flex items-center justify-between p-3 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-all duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{item.title}</span>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-zion-cyan transition-transform duration-200 ${

                            isSectionExpanded(item.title) ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>

                      {/* Submenu */}
                      <AnimatePresence>
                        {isSectionExpanded(item.title) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-6 space-y-1 mt-2">
                              {item.sections?.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="mb-4">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <section.icon className="w-4 h-4 text-zion-cyan" />
                                    <span className="text-sm font-medium text-zion-cyan">{section.title}</span>
                                  </div>
                                  <div className="space-y-1">
                                    {section.items.map((subItem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        to={subItem.href}
                                        onClick={onClose}
                                        className="flex items-center space-x-2 p-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded transition-colors group"
                                      >
                                        <subItem.icon className="w-3 h-3 text-zion-cyan group-hover:scale-110 transition-transform" />
                                        <span>{subItem.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-zion-slate-darker/95 backdrop-blur-sm border-t border-zion-purple/20 p-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-3">
                  <a href="mailto:kleber@ziontechgroup.com" className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 rounded-lg transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="tel:+13024640950" className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 rounded-lg transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-xs text-zion-slate-light">
                  © 2025 Zion Tech Group. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}