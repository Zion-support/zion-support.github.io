import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Zap,
  Target,
  Users,
  FileText,
  Phone,
  ChevronRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  BarChart3,
  Activity,
  Globe,
  Building,
  Eye,
  Cpu,
  Cloud,
  Network,
  Server,
  GraduationCap,
  HelpCircle,
  Settings,
  Menu,
  X,
  MessageCircle,
  Truck,
  Workflow,
  Leaf,
  Link as LinkIcon,
  Code,
  Database,
  Lock,
  Wrench,
  Smile,
  Edit,
  Star,
  TrendingUp,
  Heart,
  Mail
} from 'lucide-react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      description: 'Main dashboard and overview'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      description: 'Our technology services',
      subItems: [
        { 
          name: 'AI Content Studio Pro', 
          href: '/services/ai-content-studio-pro', 
          icon: Brain, 
          new: true,
          popular: true
        },
        { 
          name: 'AI Sales Copilot', 
          href: '/services/ai-sales-copilot', 
          icon: Users, 
          new: true
        },
        { 
          name: 'AI Customer Support', 
          href: '/services/ai-customer-support-automation', 
          icon: MessageCircle, 
          popular: true
        },
        { 
          name: 'AI Project Management', 
          href: '/services/ai-project-management-platform', 
          icon: Target, 
          new: true
        },
        { 
          name: 'AI Financial Trading', 
          href: '/services/ai-financial-trading-platform', 
          icon: TrendingUp, 
          new: true
        },
        { 
          name: 'AI Healthcare Analytics', 
          href: '/services/ai-healthcare-analytics-platform', 
          icon: Heart, 
          new: true
        },
        { 
          name: 'AI Supply Chain', 
          href: '/services/ai-supply-chain-optimization', 
          icon: Truck
        },
        { 
          name: 'AI Workflow Orchestrator', 
          href: '/services/ai-workflow-orchestrator', 
          icon: Workflow, 
          new: true
        },
        { 
          name: 'AI Cybersecurity', 
          href: '/services/ai-cybersecurity-threat-detection', 
          icon: Shield, 
          popular: true
        },
        { 
          name: 'Quantum AI Hybrid', 
          href: '/services/quantum-ai-hybrid-platform', 
          icon: Atom, 
          new: true,
          popular: true
        },
        { 
          name: 'Space Technology', 
          href: '/services/space-technology-platform', 
          icon: Rocket, 
          new: true
        },
        { 
          name: 'Digital Twin Platform', 
          href: '/services/digital-twin-platform', 
          icon: Eye
        },
        { 
          name: 'Green IT Sustainability', 
          href: '/services/green-it-sustainability-platform', 
          icon: Leaf, 
          new: true
        },
        { 
          name: 'Blockchain Solutions', 
          href: '/services/blockchain-enterprise-solutions', 
          icon: LinkIcon
        },
        { 
          name: 'IoT Edge Computing', 
          href: '/services/iot-edge-computing-platform', 
          icon: Activity
        },
        { 
          name: 'Cloud DevOps', 
          href: '/services/cloud-devops-automation', 
          icon: Cloud
        },
        { 
          name: 'AI Marketing Automation', 
          href: '/services/ai-marketing-automation', 
          icon: TrendingUp
        },
        { 
          name: 'AI SEO Platform', 
          href: '/services/ai-powered-seo-platform', 
          icon: Code
        },
        { 
          name: 'AI Predictive Maintenance', 
          href: '/services/ai-predictive-maintenance', 
          icon: Wrench
        },
        { 
          name: 'AI HR Platform', 
          href: '/services/ai-hr-platform', 
          icon: Users
        },
        { 
          name: 'AI Business Intelligence', 
          href: '/services/ai-business-intelligence', 
          icon: BarChart3
        },
        { 
          name: 'AI Code Review', 
          href: '/services/ai-code-review-security', 
          icon: Code
        },
        { 
          name: 'AI Content Optimizer', 
          href: '/services/ai-content-optimizer-pro', 
          icon: Edit
        },
        { 
          name: 'AI Customer Experience', 
          href: '/services/ai-customer-experience-analytics', 
          icon: Smile
        },
        { 
          name: 'AI DevOps Platform', 
          href: '/services/ai-devops-automation-platform', 
          icon: Settings
        },
        { 
          name: 'AI Email Responder', 
          href: '/services/ai-auto-email-responder', 
          icon: Mail
        },
        { 
          name: 'Comprehensive Services', 
          href: '/comprehensive-services', 
          icon: Globe, 
          featured: true
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      description: 'Industry-specific solutions',
      subItems: [
        { 
          name: 'Enterprise Solutions', 
          href: '/solutions/enterprise', 
          icon: Building 
        },
        { 
          name: 'AI Business Intelligence', 
          href: '/solutions/ai-business-intelligence', 
          icon: Brain 
        },
        { 
          name: 'Quantum AI Platform', 
          href: '/solutions/quantum-ai-platform', 
          icon: Atom,
          new: true
        },
        { 
          name: 'Digital Twin', 
          href: '/solutions/digital-twin', 
          icon: Eye 
        },
        { 
          name: 'Zero Trust Security', 
          href: '/solutions/zero-trust-security', 
          icon: Lock 
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      description: 'Company information',
      subItems: [
        { 
          name: 'Our Story', 
          href: '/about/story', 
          icon: FileText 
        },
        { 
          name: 'Team', 
          href: '/about/team', 
          icon: Users 
        },
        { 
          name: 'Careers', 
          href: '/careers', 
          icon: Users 
        },
        { 
          name: 'Partners', 
          href: '/partners', 
          icon: Network 
        },
        { 
          name: 'Press', 
          href: '/press', 
          icon: FileText 
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      description: 'Documentation and support',
      subItems: [
        { 
          name: 'Blog', 
          href: '/blog', 
          icon: FileText 
        },
        { 
          name: 'Case Studies', 
          href: '/case-studies', 
          icon: FileText 
        },
        { 
          name: 'Research & Development', 
          href: '/research-development', 
          icon: Activity 
        },
        { 
          name: 'Documentation', 
          href: '/docs', 
          icon: FileText 
        },
        { 
          name: 'API Reference', 
          href: '/api', 
          icon: Cpu 
        },
        { 
          name: 'Support', 
          href: '/support', 
          icon: HelpCircle 
        },
        { 
          name: 'Training', 
          href: '/training', 
          icon: GraduationCap 
        },
        { 
          name: 'Helpdesk', 
          href: '/help', 
          icon: HelpCircle 
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch with us'
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  const toggleSection = (sectionName: string) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  return (
    <motion.aside
      className={`fixed left-0 top-16 h-full bg-gray-800/95 backdrop-blur-md border-r border-gray-700 transition-all duration-300 z-40 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      initial={{ x: -256 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronRight className="w-4 h-4 rotate-180" />}
      </button>

      {/* Navigation Content */}
      <div className="h-full overflow-y-auto py-4">
        <nav className="space-y-2 px-3">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href) || activeSection === item.name
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span>{item.name}</span>}
                    </div>
                    {!isCollapsed && (
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform ${
                          activeSection === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    )}
                  </button>

                  {/* Sub-items */}
                  <AnimatePresence>
                    {activeSection === item.name && !isCollapsed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-2 space-y-1"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                              isActive(subItem.href)
                                ? 'bg-cyan-500/10 text-cyan-400'
                                : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                            }`}
                          >
                            <subItem.icon className="w-4 h-4" />
                            <span className="flex items-center gap-2">
                              {subItem.name}
                              {subItem.new && <span className="px-1.5 py-0.5 bg-cyan-500 text-white text-xs font-semibold rounded-full">NEW</span>}
                              {subItem.popular && <Star className="w-3 h-3 text-yellow-400" />}
                              {subItem.featured && <span className="px-1.5 py-0.5 bg-yellow-500 text-black text-xs font-semibold rounded-full">FEATURED</span>}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Stats (when expanded) */}
        {!isCollapsed && (
          <div className="mt-8 px-3">
            <div className="bg-gray-700/50 rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold text-white">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="text-center">
                  <div className="text-cyan-400 font-bold">50+</div>
                  <div className="text-gray-400">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-bold">95%</div>
                  <div className="text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Info (when expanded) */}
        {!isCollapsed && (
          <div className="mt-4 px-3">
            <div className="bg-gray-700/50 rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3 h-3 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3 h-3 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.aside>
  );
}
