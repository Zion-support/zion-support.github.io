import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Zap,
  Brain,
  Shield,
  Cpu,
  Heart,
  Rocket,
  Sparkles,
  BarChart3,
  Network,
  Globe,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Search,
  Bell,
  User,
  Settings,
  ChevronRight,
  ChevronDown,
  Target,
  TrendingUp,
  Briefcase,
  Newspaper,
  TestTube,
  Code,
  Database,
  Server,
  Activity,
  Eye,
  Atom,
  Lock,
  Building,
  GraduationCap,
  HelpCircle,
  ShoppingCart,
  Award,
  Star
} from 'lucide-react';

export function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();

  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      badge: null
    },
    {
      name: 'Services',
      icon: Zap,
      badge: 'New',
      sections: [
        {
          title: 'AI Solutions',
          icon: Brain,
          links: [
            { name: 'AI Overview', href: '/services/ai-solutions', icon: Brain },
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
            { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users },
            { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: TrendingUp },
            { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart },
            { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target }
          ]
        },
        {
          title: 'Quantum Computing',
          icon: Atom,
          links: [
            { name: 'Quantum Overview', href: '/services/quantum-computing', icon: Atom },
            { name: 'Quantum AI Hybrid', href: '/services/ai-quantum-hybrid-platform', icon: Brain },
            { name: 'Quantum AI Trading', href: '/services/quantum-ai-trading-platform', icon: Atom },
            { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing', icon: Cpu }
          ]
        },
        {
          title: 'Cybersecurity',
          icon: Shield,
          links: [
            { name: 'Security Overview', href: '/services/cybersecurity', icon: Shield },
            { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },
            { name: 'Zero Trust Network', href: '/services/zero-trust-network-access', icon: Lock },
            { name: 'Security Headers Manager', href: '/services/security-headers-csp-manager', icon: Shield }
          ]
        },
        {
          title: 'Core Technology',
          icon: Cpu,
          links: [
            { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
            { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye },
            { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Activity },
            { name: 'Space Technology', href: '/services/space-technology', icon: Rocket },
            { name: 'Data Analytics', href: '/services/data-analytics', icon: TrendingUp },
            { name: 'API Development', href: '/services/api-development', icon: Code },
            { name: 'Database Solutions', href: '/services/database-solutions', icon: Database },
            { name: 'Infrastructure', href: '/services/infrastructure', icon: Server }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      icon: Target,
      badge: null,
      sections: [
        {
          title: 'Enterprise Solutions',
          icon: Building,
          links: [
            { name: 'Enterprise Overview', href: '/solutions/enterprise', icon: Building },
            { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Rocket },
            { name: 'AI Business Intelligence', href: '/solutions/ai-business-intelligence', icon: Brain },
            { name: 'Quantum AI Platform', href: '/solutions/quantum-ai-platform', icon: Atom }
          ]
        },
        {
          title: 'Industry Solutions',
          icon: Briefcase,
          links: [
            { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
            { name: 'Finance', href: '/solutions/finance', icon: DollarSign },
            { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu },
            { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart }
          ]
        }
      ]
    },
    {
      name: 'About',
      icon: Users,
      badge: null,
      sections: [
        {
          title: 'Company',
          icon: Building,
          links: [
            { name: 'Our Story', href: '/about/story', icon: FileText },
            { name: 'Team', href: '/about/team', icon: Users },
            { name: 'Careers', href: '/careers', icon: Briefcase },
            { name: 'Partners', href: '/partners', icon: Network },
            { name: 'Press', href: '/press', icon: Newspaper }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      icon: FileText,
      badge: null,
      sections: [
        {
          title: 'Content',
          icon: Newspaper,
          links: [
            { name: 'Blog', href: '/blog', icon: Newspaper },
            { name: 'Case Studies', href: '/case-studies', icon: FileText },
            { name: 'Research & Development', href: '/research-development', icon: TestTube },
            { name: 'White Papers', href: '/white-papers', icon: FileText }
          ]
        },
        {
          title: 'Developer',
          icon: Code,
          links: [
            { name: 'Documentation', href: '/docs', icon: FileText },
            { name: 'API Reference', href: '/api', icon: Code },
            { name: 'Developer Portal', href: '/developer', icon: Cpu },
            { name: 'SDKs & Libraries', href: '/sdk', icon: Code }
          ]
        },
        {
          title: 'Support',
          icon: HelpCircle,
          links: [
            { name: 'Help Center', href: '/help', icon: HelpCircle },
            { name: 'Training & Certification', href: '/training', icon: GraduationCap },
            { name: 'Community Forum', href: '/community', icon: Users },
            { name: 'Contact Support', href: '/support', icon: Phone }
          ]
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      badge: null
    }
  ];

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(s => s !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <aside className="w-64 bg-gray-900 text-gray-300 h-screen overflow-y-auto fixed left-0 top-16 z-40 border-r border-gray-700">
      <div className="p-4">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.href ? (
                // Simple link item
                <Link
                  to={item.href}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors group ${
                    isActive(item.href)
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-cyan-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ) : (
                // Expandable section
                <div>
                  <button
                    onClick={() => toggleSection(item.name.toLowerCase())}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors group hover:bg-gray-800 hover:text-white ${
                      expandedSections.includes(item.name.toLowerCase()) ? 'text-white' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-cyan-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {expandedSections.includes(item.name.toLowerCase()) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Section content */}
                  <AnimatePresence>
                    {expandedSections.includes(item.name.toLowerCase()) && item.sections && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-6 mt-2 space-y-1"
                      >
                        {item.sections.map((section) => (
                          <div key={section.title} className="space-y-1">
                            <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-400">
                              <section.icon className="w-4 h-4" />
                              <span>{section.title}</span>
                            </div>
                            <div className="ml-4 space-y-1">
                              {section.links.map((link) => (
                                <Link
                                  key={link.name}
                                  to={link.href}
                                  className={`flex items-center space-x-2 px-3 py-2 text-sm rounded transition-colors group ${
                                    isActive(link.href)
                                      ? 'text-cyan-400 bg-cyan-500/10'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                  }`}
                                >
                                  <link.icon className="w-3 h-3" />
                                  <span>{link.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 px-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="flex items-center space-x-3 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Request Quote</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-3 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Contact Sales</span>
            </Link>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="px-3 space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Star className="w-4 h-4 text-cyan-400" />
              <span>Trusted by 1000+ Companies</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
