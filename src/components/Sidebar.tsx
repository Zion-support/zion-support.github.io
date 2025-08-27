import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  Briefcase, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Shield, 
  Handshake, 
  ChevronDown, 
  ChevronRight, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  Palette, 
  Target, 
  Rocket, 
  Eye, 
  DollarSign, 
  ShoppingCart, 
  Clock, 
  Cloud, 
  Search, 
  Building, 
  Zap, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  BarChart3, 
  Lock, 
  AlertTriangle, 
  Server, 
  CheckCircle, 
  Truck, 
  Car, 
  TestTube, 
  PenTool, 
  Building2, 
  Atom, 
  FileText, 
  Quote, 
  Newspaper, 
  Calendar, 
  Video, 
  HelpCircle, 
  LifeBuoy, 
  Store, 
  PieChart, 
  Share2, 
  Monitor, 
  Smartphone,
  Github, 
  Youtube,
  GraduationCap,
  Activity,
  DollarSign as DollarSignIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Sidebar({ isOpen, onClose, className }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Close sidebar when location changes
  React.useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const navigationItems = [
    {
      title: 'Main Navigation',
      icon: Home,
      items: [
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services Overview', path: '/services', icon: Briefcase, description: 'All our services' },
        { name: 'Solutions', path: '/solutions', icon: Rocket, description: 'Industry solutions' },
        { name: 'Pricing', path: '/pricing', icon: DollarSignIcon, description: 'Service plans and pricing' },
        { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      icon: Brain,
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain, description: 'Advanced AI solutions' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain, description: 'AI-powered research' },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Brain, description: 'Autonomous business management' },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Brain, description: 'Complete business platform' },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Code, description: 'Automated code review' },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', icon: Palette, description: 'AI creative solutions' },
        { name: 'AI Data Management', path: '/ai-autonomous-data', icon: Database, description: 'Intelligent data handling' },
        { name: 'AI Decision Engine', path: '/ai-autonomous-decision-engine', icon: Brain, description: 'Smart decision making' },
        { name: 'AI DevOps', path: '/ai-autonomous-devops', icon: Server, description: 'Automated DevOps' },
        { name: 'AI Education', path: '/ai-autonomous-education-professor', icon: Users, description: 'AI learning systems' },
        { name: 'AI Healthcare', path: '/ai-autonomous-healthcare-physician', icon: Heart, description: 'Medical AI solutions' },
        { name: 'AI Learning System', path: '/ai-autonomous-learning-system', icon: Lightbulb, description: 'Adaptive learning' },
        { name: 'AI Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Shield, description: 'Legal AI assistance' },
        { name: 'AI Logistics', path: '/ai-autonomous-logistics', icon: Truck, description: 'Smart logistics' },
        { name: 'AI Manufacturing', path: '/ai-autonomous-manufacturing', icon: Building2, description: 'Smart manufacturing' },
        { name: 'AI Research', path: '/ai-autonomous-research', icon: Brain, description: 'Research automation' },
        { name: 'AI Robotics', path: '/ai-autonomous-robotics', icon: Cpu, description: 'Autonomous robotics' },
        { name: 'AI Security', path: '/ai-autonomous-security', icon: Shield, description: 'Intelligent security' },
        { name: 'AI Testing', path: '/ai-autonomous-testing', icon: Code, description: 'Automated testing' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      items: [
        { name: 'Cloud Infrastructure', path: '/services/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
        { name: 'DevOps & Automation', path: '/services/devops-automation', icon: Cpu, description: 'Streamlined development processes' },
        { name: 'Network Security', path: '/services/network-security', icon: Shield, description: 'Comprehensive network protection' },
        { name: 'Data Center Solutions', path: '/services/data-center', icon: Database, description: 'Enterprise data center services' },
        { name: 'Edge Computing', path: '/services/edge-computing', icon: Network, description: 'Distributed computing solutions' },
        { name: 'Managed PostgreSQL HA', path: '/managed-postgres-ha', icon: Database, description: 'High-availability database' },
        { name: 'Kubernetes RBAC Auditor', path: '/kubernetes-rbac-auditor', icon: Server, description: 'K8s security auditing' },
        { name: 'Mobile Device Management', path: '/mobile-device-management', icon: Smartphone, description: 'Mobile device control' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      items: [
        { name: 'Threat Detection', path: '/services/threat-detection', icon: Shield, description: 'Advanced threat intelligence' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-evidence-automation', icon: Lock, description: 'Automated compliance management' },
        { name: 'Zero Trust Security', path: '/zero-trust-network-architecture-2029', icon: Shield, description: 'Modern security architecture' },
        { name: 'Security Analytics', path: '/services/security-analytics', icon: BarChart3, description: 'Security intelligence platform' },
        { name: 'Vulnerability Assessment', path: '/vulnerability-assessment-penetration-testing', icon: AlertTriangle, description: 'Security testing services' },
        { name: 'TLS Certificate Monitor', path: '/tls-certificate-monitor', icon: Lock, description: 'Certificate management' },
        { name: 'SSO in a Box', path: '/sso-in-a-box', icon: Lock, description: 'Single sign-on solution' },
        { name: 'SSO User Lifecycle', path: '/sso-user-lifecycle-automation', icon: Users, description: 'User management automation' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      items: [
        { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, description: 'Transform data into insights' },
        { name: 'Vector Search Starter', path: '/vector-search-starter', icon: Search, description: 'AI-powered search' },
        { name: 'LLM Gateway', path: '/llm-gateway', icon: Brain, description: 'Language model gateway' },
        { name: 'PDF Render API', path: '/pdf-render-api', icon: FileText, description: 'Document processing' },
        { name: 'Performance Optimization', path: '/performance-optimization', icon: TrendingUp, description: 'System optimization' }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Monitor,
      items: [
        { name: 'Domain DNS Monitor', path: '/domain-dns-monitor', icon: Globe, description: 'DNS monitoring' },
        { name: 'Status Pages & SLO', path: '/status-pages-slo', icon: Activity, description: 'Service level monitoring' },
        { name: 'Synthetic Monitor Recorder', path: '/synthetic-monitor-recorder', icon: Monitor, description: 'Synthetic monitoring' },
        { name: 'Uptime SLO Monitor', path: '/uptime-slo-monitor', icon: Clock, description: 'Uptime monitoring' },
        { name: 'Webhook Relay Replay', path: '/webhook-relay-replay', icon: Share2, description: 'Webhook management' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building,
      items: [
        { name: 'Sales Copilot', path: '/sales-copilot', icon: Users, description: 'AI sales assistant' },
        { name: 'SEO Automation', path: '/seo-automation', icon: TrendingUp, description: 'Automated SEO' },
        { name: 'Serverless Cron Manager', path: '/serverless-cron-manager', icon: Clock, description: 'Cron job management' },
        { name: 'Smart CRM Intelligence', path: '/smart-crm-intelligence-suite', icon: Users, description: 'CRM enhancement' },
        { name: 'Vendor Risk Automation', path: '/vendor-risk-automation', icon: AlertTriangle, description: 'Risk management' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Atom,
      items: [
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Atom, description: 'Quantum computing solutions' },
        { name: 'Quantum Blockchain', path: '/quantum-blockchain', icon: Lock, description: 'Quantum-secure blockchain' },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Cloud, description: 'Quantum cloud services' },
        { name: 'Quantum Cybersecurity', path: '/quantum-cybersecurity', icon: Shield, description: 'Quantum security' },
        { name: 'Quantum Energy', path: '/quantum-energy', icon: Zap, description: 'Quantum energy solutions' },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading-platform', icon: DollarSignIcon, description: 'Quantum trading' },
        { name: 'Quantum IoT', path: '/quantum-iot', icon: Network, description: 'Quantum IoT networks' },
        { name: 'Quantum Logistics', path: '/quantum-logistics', icon: Truck, description: 'Quantum logistics' },
        { name: 'Quantum Metaverse', path: '/quantum-metaverse', icon: Globe, description: 'Quantum virtual worlds' },
        { name: 'Quantum Robotics', path: '/quantum-robotics', icon: Cpu, description: 'Quantum robotics' },
        { name: 'Quantum Secure Communication', path: '/quantum-secure-communication-network', icon: Lock, description: 'Quantum communication' }
      ]
    },
    {
      title: 'Space Technology',
      icon: Rocket,
      items: [
        { name: 'Space Technology', path: '/space-technology', icon: Rocket, description: 'Space tech solutions' },
        { name: 'Space Mining Platform', path: '/space-mining-autonomous-platform-2029', icon: Rocket, description: 'Space mining automation' },
        { name: 'Space Tech AI Platform', path: '/space-technology-ai-platform', icon: Brain, description: 'AI space platform' }
      ]
    },
    {
      title: 'Resources & Insights',
      icon: FileText,
      items: [
        { name: 'Blog', path: '/blog', icon: FileText, description: 'Latest insights and news' },
        { name: 'Case Studies', path: '/case-studies', icon: CheckCircle, description: 'Success stories' },
        { name: 'News', path: '/news', icon: Newspaper, description: 'Company updates' },
        { name: 'Newsroom', path: '/newsroom', icon: Newspaper, description: 'Press releases' },
        { name: 'Reports', path: '/reports', icon: FileText, description: 'Industry reports' },
        { name: 'Research & Development', path: '/research-development', icon: TestTube, description: 'R&D projects' },
        { name: 'Insights', path: '/insights', icon: TrendingUp, description: 'Industry insights' },
        { name: 'Webinars', path: '/webinars', icon: Video, description: 'Educational content' }
      ]
    },
    {
      title: 'Company & Team',
      icon: Users,
      items: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Our Team', path: '/team', icon: Users, description: 'Meet our experts' },
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Company', path: '/company', icon: Building, description: 'Company information' },
        { name: 'Innovation', path: '/innovation', icon: Lightbulb, description: 'Innovation initiatives' },
        { name: 'Talent', path: '/talent', icon: Users, description: 'Talent solutions' }
      ]
    }
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
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Zion Tech Group
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-6">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {section.title}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        expandedSections.includes(section.title) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.title) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 mt-2 space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={onClose}
                            className={`flex items-center space-x-3 p-2 rounded-lg text-sm transition-colors ${
                              location.pathname === item.path
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                            }`}
                          >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{item.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-500 truncate">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>© 2025 Zion Tech Group</p>
                  <p>Innovating the future</p>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com/company/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
