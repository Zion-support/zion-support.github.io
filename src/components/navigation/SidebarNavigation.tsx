import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Zap, 
  Leaf, 
  Star, 
  ChevronRight,
  ChevronDown,
  Home,
  Users,
  Settings,
  FileText,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Rocket,
  Sparkles,
  Target,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  Heart,
  Activity,
  Building,
  Briefcase,
  GraduationCap,
  Factory,
  ShoppingCart,
  Truck,
  Zap as ZapIcon,
  Sun,
  TreePine
} from 'lucide-react';

interface NavigationItem {

  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  featured?: boolean;
  badge?: string;
}

const navigationItems: NavigationItem[] = [
  {

    name: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />
  },
  {

    name: 'AI & ML Services',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    children: [
      {

        name: 'Comprehensive Services 2025',
        href: '/comprehensive-services-2025',
        icon: <Star className="w-4 h-4" />,
        featured: true,
        badge: 'New'
      },
      {

        name: 'Innovative Services 2025',
        href: '/innovative-services-2025',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true,
        badge: 'Hot'
      },
      {

        name: 'AI Business Manager',
        href: '/services/ai-autonomous-business-manager',
        icon: <Building className="w-4 h-4" />
      },
      {

        name: 'AI Content Factory',
        href: '/services/ai-content-factory-enterprise',
        icon: <FileText className="w-4 h-4" />
      },
      {

        name: 'AI Cybersecurity',
        href: '/services/ai-cybersecurity-sentinel',
        icon: <Shield className="w-4 h-4" />
      },
      {

        name: 'AI Healthcare',
        href: '/services/ai-biomedical-research-platform',
        icon: <Heart className="w-4 h-4" />
      },
      {

        name: 'AI Financial Trading',
        href: '/services/ai-financial-trading-platform',
        icon: <ZapIcon className="w-4 h-4" />
      },
      {

        name: 'AI Legal Assistant',
        href: '/services/ai-legal-research-assistant',
        icon: <FileText className="w-4 h-4" />
      },
      {

        name: 'AI Education',
        href: '/services/ai-education-professor',
        icon: <GraduationCap className="w-4 h-4" />
      },
      {

        name: 'AI Manufacturing',
        href: '/services/ai-manufacturing-optimization',
        icon: <Factory className="w-4 h-4" />
      }
    ]
  },
  {

    name: 'Cloud & DevOps',
    href: '/cloud-devops',
    icon: <Cloud className="w-5 h-5" />,
    children: [
      {

        name: 'Quantum Cloud Infrastructure',
        href: '/services/quantum-cloud-infrastructure',
        icon: <Zap className="w-4 h-4" />
      },
      {

        name: 'Autonomous DevOps',
        href: '/services/autonomous-devops-platform',
        icon: <Code className="w-4 h-4" />
      },
      {

        name: 'Cloud Migration',
        href: '/services/cloud-migration-enterprise',
        icon: <Database className="w-4 h-4" />
      }
    ]
  },
  {

    name: 'Emerging Tech',
    href: '/emerging-tech',
    icon: <Sparkles className="w-5 h-5" />,
    children: [
      {

        name: 'IoT Edge Computing',
        href: '/services/iot-edge-intelligence-platform',
        icon: <Cpu className="w-4 h-4" />
      },
      {

        name: 'Blockchain Governance',
        href: '/services/blockchain-governance-platform',
        icon: <Network className="w-4 h-4" />
      },
      {

        name: 'Space Technology',
        href: '/services/space-tech-ai-platform',
        icon: <Rocket className="w-4 h-4" />
      },
      {

        name: 'Climate AI',
        href: '/services/ai-climate-prediction-engine',
        icon: <TreePine className="w-4 h-4" />
      }
    ]
  },
  {

    name: 'Industry Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    children: [
      {

        name: 'Healthcare Solutions',
        href: '/solutions/healthcare',
        icon: <Heart className="w-4 h-4" />
      },
      {

        name: 'Financial Services',
        href: '/solutions/financial',
        icon: <ZapIcon className="w-4 h-4" />
      },
      {

        name: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <Factory className="w-4 h-4" />
      },
      {

        name: 'Retail & E-commerce',
        href: '/solutions/retail',
        icon: <ShoppingCart className="w-4 h-4" />
      },
      {

        name: 'Transportation',
        href: '/solutions/transportation',
        icon: <Truck className="w-4 h-4" />
      },
      {

        name: 'Energy & Utilities',
        href: '/solutions/energy',
        icon: <Sun className="w-4 h-4" />
      },
      {

        name: 'Real Estate',
        href: '/solutions/real-estate',
        icon: <Building className="w-4 h-4" />
      },
      {

        name: 'Agriculture',
        href: '/solutions/agriculture',
        icon: <TreePine className="w-4 h-4" />
      }
    ]
  },
  {

    name: 'Company',
    href: '/about',
    icon: <Globe className="w-5 h-5" />,
    children: [
      {

        name: 'About Us',
        href: '/about',
        icon: <Users className="w-4 h-4" />
      },
      {

        name: 'Leadership',
        href: '/leadership',
        icon: <Users className="w-4 h-4" />
      },
      {

        name: 'Careers',
        href: '/careers',
        icon: <Briefcase className="w-4 h-4" />
      },
      {

        name: 'News & Press',
        href: '/news',
        icon: <FileText className="w-4 h-4" />
      },
      {

        name: 'Case Studies',
        href: '/case-studies',
        icon: <FileText className="w-4 h-4" />
      },
      {

        name: 'Partners',
        href: '/partners',
        icon: <Users className="w-4 h-4" />
      }
    ]
  },
  {

    name: 'Resources',
    href: '/resources',
    icon: <FileText className="w-5 h-5" />,
    children: [
      {

        name: 'Blog',
        href: '/blog',
        icon: <FileText className="w-4 h-4" />
      },
      {

        name: 'Documentation',
        href: '/docs',
        icon: <FileText className="w-4 h-4" />
      },
      {

        name: 'API Reference',
        href: '/api',
        icon: <Code className="w-4 h-4" />
      },
      {

        name: 'Help Center',
        href: '/help',
        icon: <HelpCircle className="w-4 h-4" />
      },
      {

        name: 'Training',
        href: '/training',
        icon: <GraduationCap className="w-4 h-4" />
      },
      {

        name: 'Webinars',
        href: '/webinars',
        icon: <Users className="w-4 h-4" />
      },
      {

        name: 'White Papers',
        href: '/white-papers',
        icon: <FileText className="w-4 h-4" />
      }
    ]
  },
  {

    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />,
    children: [
      {

        name: 'Get Quote',
        href: '/request-quote',
        icon: <FileText className="w-4 h-4" />
      },
      {

        name: 'Support',
        href: '/contact',
        icon: <HelpCircle className="w-4 h-4" />
      },
      {

        name: 'Sales',
        href: '/contact?type=sales',
        icon: <Users className="w-4 h-4" />
      },
      {

        name: 'Partnerships',
        href: '/contact?type=partnership',
        icon: <Users className="w-4 h-4" />
      }
    ]
  }
];

interface SidebarNavigationProps {

  isOpen: boolean;
  onClose: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {

  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleExpanded = (itemName: string) => {

    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isActive = (href: string) => {

    if (href === '/') {

      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const isExpanded = (itemName: string) => expandedItems.includes(itemName);

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
            className="fixed left-0 top-0 h-full w-80 bg-zion-slate-dark border-r border-zion-cyan/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-zion-cyan/20">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-3 group" onClick={onClose}>
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl font-bold text-white">Z</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Zion Tech Group</div>
                    <div className="text-zion-slate-light text-sm">Innovation Hub</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${

                          isActive(item.href)
                            ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                            : 'text-zion-slate-light hover:bg-zion-slate/50 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium">{item.name}</span>
                        </div>
                        {isExpanded(item.name) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded(item.name) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-8 mt-2 space-y-1 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                onClick={onClose}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${

                                  isActive(child.href)
                                    ? 'bg-zion-cyan/10 text-zion-cyan'
                                    : 'text-zion-slate-light hover:bg-zion-slate/30 hover:text-white'
                                }`}
                              >
                                {child.icon}
                                <span className="text-sm">{child.name}</span>
                                {child.featured && (
                                  <span className="ml-auto px-2 py-1 bg-zion-cyan text-white text-xs rounded-full">
                                    {child.badge || 'Featured'}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${

                        isActive(item.href)
                          ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                          : 'text-zion-slate-light hover:bg-zion-slate/50 hover:text-white'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="p-4 border-t border-zion-cyan/20 mt-auto">
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SidebarNavigation;