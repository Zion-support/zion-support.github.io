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
  Database,
  Lock,
  Code,
  Monitor,
  Smartphone,
  Satellite,
  Leaf,
  Gamepad2,
  Bot,
  DollarSign,
  Heart,
  TrendingUp,
  Newspaper,
  TestTube,
  Video,
  Award,
  Briefcase,
  ShoppingCart
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
      name: 'Micro SaaS',
      href: '/services/micro-saas',
      icon: Zap,
      description: 'Innovative software solutions',
      subItems: [
        { name: 'AI & ML Solutions', href: '/services/ai-ml-solutions', icon: Brain, description: 'AI-powered business tools' },
        { name: 'Blockchain & Web3', href: '/services/blockchain-web3', icon: Network, description: 'Decentralized applications' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Quantum-enhanced platforms' },
        { name: 'Cybersecurity Tools', href: '/services/cybersecurity-tools', icon: Shield, description: 'Advanced security solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence tools' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Activity, description: 'Connected device solutions' },
        { name: 'FinTech Solutions', href: '/services/fintech', icon: DollarSign, description: 'Financial technology tools' },
        { name: 'HealthTech', href: '/services/healthtech', icon: Heart, description: 'Healthcare technology' },
        { name: 'GreenTech', href: '/services/greentech', icon: Leaf, description: 'Sustainable technology' },
        { name: 'SpaceTech', href: '/services/spacetech', icon: Satellite, description: 'Space technology solutions' },
        { name: 'Metaverse Platform', href: '/services/metaverse', icon: Gamepad2, description: 'Virtual world solutions' },
        { name: 'Autonomous Systems', href: '/services/autonomous', icon: Bot, description: 'Self-driving technology' }
      ]
    },
    {
      name: 'IT Services',
      href: '/services/it-services',
      icon: Cpu,
      description: 'Enterprise IT solutions',
      subItems: [
        { name: 'Infrastructure', href: '/services/infrastructure', icon: Server, description: 'Network and server solutions' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud migration and automation' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket, description: 'Business modernization' },
        { name: 'Enterprise Solutions', href: '/services/enterprise', icon: Building, description: 'Large-scale implementations' },
        { name: 'Managed Services', href: '/services/managed-services', icon: Monitor, description: '24/7 IT management' },
        { name: 'Consulting', href: '/services/consulting', icon: Briefcase, description: 'Strategic IT guidance' },
        { name: 'Integration', href: '/services/integration', icon: Code, description: 'System connectivity' },
        { name: 'Support & Maintenance', href: '/services/support-maintenance', icon: Settings, description: 'Ongoing IT support' }
      ]
    },
    {
      name: 'AI Solutions',
      href: '/services/ai-solutions',
      icon: Brain,
      description: 'Artificial intelligence services',
      subItems: [
        { name: 'Machine Learning', href: '/services/machine-learning', icon: Brain, description: 'ML model development' },
        { name: 'Natural Language Processing', href: '/services/nlp', icon: FileText, description: 'Text and language AI' },
        { name: 'Computer Vision', href: '/services/computer-vision', icon: Eye, description: 'Image and video AI' },
        { name: 'Predictive Analytics', href: '/services/predictive-analytics', icon: TrendingUp, description: 'Forecasting and insights' },
        { name: 'AI Automation', href: '/services/ai-automation', icon: Zap, description: 'Intelligent process automation' },
        { name: 'AI Consulting', href: '/services/ai-consulting', icon: Users, description: 'AI strategy and implementation' },
        { name: 'AI Infrastructure', href: '/services/ai-infrastructure', icon: Database, description: 'AI computing resources' },
        { name: 'AI Integration', href: '/services/ai-integration', icon: Code, description: 'AI system connectivity' },
        { name: 'AI Security', href: '/services/ai-security', icon: Lock, description: 'AI-powered security' },
        { name: 'AI Ethics', href: '/services/ai-ethics', icon: Shield, description: 'Responsible AI development' },
        { name: 'Quantum AI', href: '/services/quantum-ai', icon: Atom, description: 'Quantum-enhanced AI' },
        { name: 'Edge AI', href: '/services/edge-ai', icon: Smartphone, description: 'Device-level AI processing' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      description: 'Industry-specific solutions',
      subItems: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building, description: 'Large organization solutions' },
        { name: 'AI Business Intelligence', href: '/solutions/ai-business-intelligence', icon: Brain, description: 'AI-powered insights' },
        { name: 'Quantum AI Platform', href: '/solutions/quantum-ai-platform', icon: Atom, description: 'Quantum computing solutions' },
        { name: 'Digital Twin', href: '/solutions/digital-twin', icon: Eye, description: 'Virtual replica technology' },
        { name: 'Zero Trust Security', href: '/solutions/zero-trust-security', icon: Shield, description: 'Advanced security framework' },
        { name: 'Smart City', href: '/solutions/smart-city', icon: Building, description: 'Urban technology solutions' },
        { name: 'Healthcare Tech', href: '/solutions/healthcare-tech', icon: Heart, description: 'Medical technology' },
        { name: 'Financial Tech', href: '/solutions/fintech', icon: DollarSign, description: 'Banking and finance tech' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Industrial technology' },
        { name: 'Retail Tech', href: '/solutions/retail-tech', icon: ShoppingCart, description: 'E-commerce solutions' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      description: 'Company information',
      subItems: [
        { name: 'Our Story', href: '/about/story', icon: FileText, description: 'Company history and mission' },
        { name: 'Team', href: '/about/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Job opportunities' },
        { name: 'Partners', href: '/partners', icon: Network, description: 'Strategic partnerships' },
        { name: 'Press', href: '/press', icon: Newspaper, description: 'News and media' },
        { name: 'Awards', href: '/about/awards', icon: Award, description: 'Recognition and achievements' },
        { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'Innovation and research' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      description: 'Documentation and support',
      subItems: [
        { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Latest insights and news' },
        { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
        { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'Innovation insights' },
        { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical guides' },
        { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources' },
        { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational sessions' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research' },
        { name: 'Training', href: '/training', icon: GraduationCap, description: 'Educational resources' },
        { name: 'Support', href: '/support', icon: HelpCircle, description: 'Help and assistance' },
        { name: 'Helpdesk', href: '/help', icon: HelpCircle, description: 'Technical support' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch with us'
    }
  ];

  const toggleSection = (name: string) => {
    setActiveSection(activeSection === name ? null : name);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <aside className={`fixed left-0 top-16 h-full bg-gray-900/95 backdrop-blur-md border-r border-white/10 transition-all duration-300 z-40 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-4 bg-gray-800 hover:bg-gray-700 text-white p-1 rounded-full border border-gray-600 transition-colors"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronRight className="w-4 h-4 rotate-180" />}
      </button>

      {/* Navigation Content */}
      <div className="h-full overflow-y-auto py-4 px-2">
        <nav className="space-y-2">
          {navigation.map((item) => (
            <div key={item.name} className="space-y-1">
              {item.subItems ? (
                <div>
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href) 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && (
                        <div className="text-left">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-400 font-normal">{item.description}</div>
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

                  {/* Sub Items */}
                  <AnimatePresence>
                    {activeSection === item.name && !isCollapsed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 space-y-1"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              isActive(subItem.href)
                                ? 'bg-cyan-500/20 text-cyan-400'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <subItem.icon className="w-4 h-4" />
                              <div className="text-left">
                                <div className="font-medium">{subItem.name}</div>
                                <div className="text-xs text-gray-500">{subItem.description}</div>
                              </div>
                            </div>
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
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && (
                    <div className="text-left">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-400 font-normal">{item.description}</div>
                    </div>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="space-y-3">
              <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Quick Actions
              </h3>
              <Link
                to="/contact"
                className="block px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
