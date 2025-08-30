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
  Code,
  Database,
  Lock,
  Leaf,
  ShoppingCart,
  Heart,
  DollarSign,
  Star,
  Award,
  Crown,
  Gem,
  Diamond,
  Sparkles,
  TrendingUp,
  Wrench,
  Satellite,
  Orbit,
  Calendar,
  Video,
  TestTube
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
          name: 'AI & Machine Learning', 
          href: '/services/ai-solutions', 
          icon: Brain,
          description: 'Transform with AI',
          subItems: [
            { name: 'AI Content Generation', href: '/services/ai-content-generation', icon: FileText },
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
            { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target },
            { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: TrendingUp },
            { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart },
            { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield }
          ]
        },
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Atom,
          description: 'Next-gen computing',
          subItems: [
            { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Brain },
            { name: 'Quantum Security', href: '/services/quantum-enhanced-cybersecurity', icon: Lock },
            { name: 'Quantum Trading', href: '/services/quantum-ai-trading-platform', icon: DollarSign },
            { name: 'Quantum Neural Networks', href: '/services/quantum-neural-network-platform', icon: Network }
          ]
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield,
          description: 'Advanced security',
          subItems: [
            { name: 'Zero Trust Security', href: '/services/zero-trust-network-access', icon: Lock },
            { name: 'AI Threat Detection', href: '/services/ai-cybersecurity-threat-detection', icon: Brain },
            { name: 'Incident Response', href: '/services/incident-response-platform', icon: Activity },
            { name: 'Vendor Risk Management', href: '/services/vendor-risk-management', icon: Shield }
          ]
        },
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud,
          description: 'Modern infrastructure',
          subItems: [
            { name: 'AI DevOps Automation', href: '/services/ai-devops-automation-platform', icon: Cpu },
            { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign },
            { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor', icon: Activity },
            { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', icon: Code }
          ]
        },
        { 
          name: 'Digital Transformation', 
          href: '/services/digital-transformation', 
          icon: Rocket,
          description: 'Modernize business',
          subItems: [
            { name: 'Digital Twin Solutions', href: '/solutions/digital-twin', icon: Eye },
            { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Zap },
            { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator', icon: Building },
            { name: 'Autonomous Business Operations', href: '/services/autonomous-business-operations-platform', icon: Rocket }
          ]
        },
        { 
          name: 'Data & Analytics', 
          href: '/services/data-analytics', 
          icon: BarChart3,
          description: 'Insights-driven decisions',
          subItems: [
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
            { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform', icon: DollarSign },
            { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Network },
            { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: Wrench }
          ]
        },
        { 
          name: 'IoT & Edge Computing', 
          href: '/services/iot-edge-computing', 
          icon: Activity,
          description: 'Connected intelligence',
          subItems: [
            { name: 'AI IoT Edge Platform', href: '/services/ai-iot-edge-computing-platform', icon: Cpu },
            { name: 'IoT Edge Computing', href: '/services/iot-edge-computing-platform', icon: Activity },
            { name: 'Smart City Solutions', href: '/services/smart-city-solutions', icon: Building },
            { name: 'Industrial IoT', href: '/services/industrial-iot', icon: Cpu }
          ]
        },
        { 
          name: 'Space Technology', 
          href: '/services/space-technology', 
          icon: Rocket,
          description: 'Space innovations',
          subItems: [
            { name: 'Satellite Systems', href: '/services/satellite-systems', icon: Satellite },
            { name: 'Space Analytics', href: '/services/space-analytics', icon: BarChart3 },
            { name: 'Orbital Optimization', href: '/services/orbital-optimization', icon: Orbit },
            { name: 'Space Weather Monitoring', href: '/services/space-weather', icon: Cloud }
          ]
        },
        { 
          name: 'Blockchain & Web3', 
          href: '/services/blockchain-solutions', 
          icon: Code,
          description: 'Decentralized future',
          subItems: [
            { name: 'Enterprise Blockchain', href: '/solutions/blockchain-enterprise-solutions', icon: Building },
            { name: 'Smart Contracts', href: '/services/smart-contracts', icon: FileText },
            { name: 'DeFi Solutions', href: '/services/defi-solutions', icon: DollarSign },
            { name: 'NFT Platforms', href: '/services/nft-platforms', icon: Gem }
          ]
        },
        { 
          name: 'Sustainability', 
          href: '/services/sustainability', 
          icon: Leaf,
          description: 'Green technology',
          subItems: [
            { name: 'Sustainable Technology', href: '/services/sustainable-technology-solutions', icon: Leaf },
            { name: 'Green IT Solutions', href: '/services/green-it', icon: Heart },
            { name: 'Carbon Footprint Tracking', href: '/services/carbon-tracking', icon: Activity },
            { name: 'Energy Optimization', href: '/services/energy-optimization', icon: Zap }
          ]
        },
        { 
          name: 'Comprehensive Portfolio', 
          href: '/comprehensive-services', 
          icon: Globe,
          description: 'Full service overview',
          badge: 'New'
        },
        { 
          name: 'Revolutionary Services', 
          href: '/revolutionary-services', 
          icon: Sparkles,
          description: 'Cutting-edge innovations',
          badge: 'Featured'
        },
        { 
          name: 'New Services 2025', 
          href: '/new-services-2025', 
          icon: Star,
          description: 'Latest innovations',
          badge: 'Latest'
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
          icon: Building,
          description: 'Large-scale business solutions',
          subItems: [
            { name: 'Enterprise AI Platform', href: '/solutions/enterprise-ai', icon: Brain },
            { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Rocket },
            { name: 'Enterprise Security', href: '/solutions/enterprise-security', icon: Shield },
            { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud }
          ]
        },
        { 
          name: 'AI Business Intelligence', 
          href: '/solutions/ai-business-intelligence', 
          icon: Brain,
          description: 'Data-driven insights',
          subItems: [
            { name: 'Predictive Analytics', href: '/solutions/predictive-analytics', icon: BarChart3 },
            { name: 'Business Process Automation', href: '/solutions/business-process-automation', icon: Zap },
            { name: 'Customer Intelligence', href: '/solutions/customer-intelligence', icon: Users },
            { name: 'Market Intelligence', href: '/solutions/market-intelligence', icon: TrendingUp }
          ]
        },
        { 
          name: 'Quantum AI Platform', 
          href: '/solutions/quantum-ai-platform', 
          icon: Atom,
          description: 'Quantum-enhanced AI',
          subItems: [
            { name: 'Quantum Machine Learning', href: '/solutions/quantum-ml', icon: Brain },
            { name: 'Quantum Optimization', href: '/solutions/quantum-optimization', icon: Target },
            { name: 'Quantum Cryptography', href: '/solutions/quantum-cryptography', icon: Lock },
            { name: 'Quantum Simulation', href: '/solutions/quantum-simulation', icon: Atom }
          ]
        },
        { 
          name: 'Digital Twin Solutions', 
          href: '/solutions/digital-twin', 
          icon: Eye,
          description: 'Virtual replicas for optimization',
          subItems: [
            { name: 'Manufacturing Twins', href: '/solutions/manufacturing-twins', icon: Cpu },
            { name: 'Building Twins', href: '/solutions/building-twins', icon: Building },
            { name: 'Process Twins', href: '/solutions/process-twins', icon: Activity },
            { name: 'Asset Twins', href: '/solutions/asset-twins', icon: Server }
          ]
        },
        { 
          name: 'Zero Trust Security', 
          href: '/solutions/zero-trust-security', 
          icon: Shield,
          description: 'Advanced security architecture',
          subItems: [
            { name: 'Network Access Control', href: '/solutions/network-access-control', icon: Lock },
            { name: 'Identity Management', href: '/solutions/identity-management', icon: Users },
            { name: 'Device Trust', href: '/solutions/device-trust', icon: Cpu },
            { name: 'Application Security', href: '/solutions/application-security', icon: Code }
          ]
        },
        { 
          name: 'Industry Solutions', 
          href: '/solutions/industry', 
          icon: Building,
          description: 'Sector-specific solutions',
          subItems: [
            { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart },
            { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
            { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu },
            { name: 'Retail & E-commerce', href: '/solutions/retail', icon: ShoppingCart }
          ]
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      description: 'Company information',
      subItems: [
        { name: 'Our Story', href: '/about/story', icon: FileText, description: 'How we started' },
        { name: 'Team', href: '/about/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', icon: Users, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Network, description: 'Strategic partnerships' },
        { name: 'Press', href: '/press', icon: FileText, description: 'Latest news' },
        { name: 'Awards & Recognition', href: '/about/awards', icon: Award, description: 'Industry recognition' },
        { name: 'Sustainability', href: '/about/sustainability', icon: Leaf, description: 'Our commitment' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      description: 'Documentation and support',
      subItems: [
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest insights' },
        { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
        { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'Innovation insights' },
        { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' },
        { name: 'API Reference', href: '/api', icon: Cpu, description: 'Developer resources' },
        { name: 'Support', href: '/support', icon: HelpCircle, description: 'Get help' },
        { name: 'Training', href: '/training', icon: GraduationCap, description: 'Learn with us' },
        { name: 'Helpdesk', href: '/help', icon: HelpCircle, description: 'Technical support' },
        { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research' },
        { name: 'Events', href: '/events', icon: Calendar, description: 'Upcoming events' },
        { name: 'Sitemap', href: '/sitemap', icon: FileText, description: 'Site navigation' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch'
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: DollarSign,
      description: 'Transparent pricing'
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  const toggleSection = (sectionName: string) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const renderSubItems = (items: any[], level: number = 0) => {
    return items.map((item) => (
      <div key={item.name} className="space-y-1">
        {item.subItems ? (
          <div>
            <button
              onClick={() => toggleSection(item.name)}
              className={`w-full flex items-center justify-between p-2 text-sm rounded-lg transition-colors group ${
                level === 0 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/30'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-4 h-4 ${level === 0 ? 'text-gray-400' : 'text-gray-500'}`} />
                <div className="text-left">
                  <div className="font-medium">{item.name}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500 truncate max-w-[120px]">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
              {item.badge && (
                <span className={`px-2 py-1 text-xs rounded-full ${
                  item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                  item.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.badge}
                </span>
              )}
              <ChevronRight 
                className={`w-4 h-4 transition-transform ${
                  activeSection === item.name ? 'rotate-90' : ''
                }`} 
              />
            </button>
            
            <AnimatePresence>
              {activeSection === item.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="ml-6 space-y-1">
                    {renderSubItems(item.subItems, level + 1)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            to={item.href}
            className={`block p-2 text-sm rounded-lg transition-colors group ${
              isActive(item.href)
                ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                : level === 0 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/30'
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className={`w-4 h-4 ${
                isActive(item.href) 
                  ? 'text-cyan-400' 
                  : level === 0 ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <div className="text-left">
                <div className="font-medium">{item.name}</div>
                {item.description && (
                  <div className="text-xs text-gray-500 truncate max-w-[120px]">
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          </Link>
        )}
      </div>
    ));
  };

  return (
    <aside className={`fixed left-0 top-16 h-full bg-gray-900/95 backdrop-blur-md border-r border-white/10 transition-all duration-300 z-40 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 bg-gray-800 border border-gray-600 rounded-full p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronRight className="w-4 h-4 rotate-180" />}
      </button>

      {/* Navigation Content */}
      <div className="h-full overflow-y-auto py-6 px-4">
        <nav className="space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className={`w-full flex items-center justify-between p-3 text-sm rounded-lg transition-colors group ${
                      isActive(item.href)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className={`w-5 h-5 ${
                        isActive(item.href) ? 'text-cyan-400' : 'text-gray-400'
                      }`} />
                      {!isCollapsed && (
                        <div className="text-left">
                          <div className="font-medium">{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-gray-500 truncate max-w-[180px]">
                              {item.description}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    {!isCollapsed && (
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform ${
                          activeSection === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {!isCollapsed && (
                    <AnimatePresence>
                      {activeSection === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden mt-2"
                        >
                          <div className="ml-6 space-y-1">
                            {renderSubItems(item.subItems)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`block p-3 text-sm rounded-lg transition-colors group ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className={`w-5 h-5 ${
                      isActive(item.href) ? 'text-cyan-400' : 'text-gray-400'
                    }`} />
                    {!isCollapsed && (
                      <div className="text-left">
                        <div className="font-medium">{item.name}</div>
                        {item.description && (
                          <div className="text-xs text-gray-500 truncate max-w-[180px]">
                            {item.description}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="flex items-center space-x-3 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Get Started</span>
              </Link>
              <Link
                to="/pricing"
                className="flex items-center space-x-3 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <DollarSign className="w-4 h-4 text-green-400" />
                <span>View Pricing</span>
              </Link>
              <Link
                to="/support"
                className="flex items-center space-x-3 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-blue-400" />
                <span>Support</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
