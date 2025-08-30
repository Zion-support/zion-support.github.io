import React, { useState, useEffect } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Link, useLocation  } from 'react-router-dom.ts';
import { X, 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
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
import { cn  } from '@/lib/utils';

interface SidebarProps extends React.PropsWithChildren<{}> {

<<<<<<< HEAD
  isOpen: boolean;
  onClose: ()  => void;
  className?: string}

export function Sidebar: React.FC = () => {;
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<any>([]);

  // Close sidebar when location changes
  React.useEffect(() => {
    onClose()}, [location.pathname, onClose]);

  const toggleSection = (sectionTitle: string)  => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        [...prev, sectionTitle];
    )};

  const navigationItems = [
    {
      title: 'Main Navigation',
      icon: Home,
      items[
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services Overview', path: '/services', icon: Briefcase, description: 'All our services' },
        { name: 'Solutions', path: '/solutions', icon: Rocket, description: 'Industry solutions' },
        { name: 'Pricing', path: '/pricing', icon: DollarSignIcon, description: 'Service plans and pricing' },
        { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our comp' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      items[
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
      items[
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
      items[
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
      items[
        { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, description: 'Transform data into insights' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', icon: TrendingUp, description: 'Data-driven decisions' }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Monitor,
      items[
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
      items[
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
      items[
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
      items[
        { name: 'Space Technology', path: '/space-technology', icon: Rocket, description: 'Space tech solutions' },
        { name: 'Space Mining Platform', path: '/space-mining-autonomous-platform-2029', icon: Rocket, description: 'Space mining automation' },
        { name: 'Space Tech AI Platform', path: '/space-technology-ai-platform', icon: Brain, description: 'AI space platform' }
      ]
    },
    {
      title: 'Resources & Insights',
      icon: FileText,
      items[
        { name: 'Blog', path: '/blog', icon: FileText, description: 'Latest insights and news' },
        { name: 'Case Studies', path: '/case-studies', icon: CheckCircle, description: 'Success stories' },
        { name: 'News', path: '/news', icon: Newspaper, description: 'Comp updates' },
        { name: 'Newsroom', path: '/newsroom', icon: Newspaper, description: 'Press releases' },
        { name: 'Reports', path: '/reports', icon: FileText, description: 'Industry reports' },
        { name: 'Research & Development', path: '/research-development', icon: TestTube, description: 'R&D projects' },
        { name: 'Insights', path: '/insights', icon: TrendingUp, description: 'Industry insights' },
        { name: 'Webinars', path: '/webinars', icon: Video, description: 'Educational content' }
      ]
    },
    {
      title: 'Comp & Team',
      icon: Users,
      items[
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Comp', path: '/comp', icon: Building, description: 'Comp information' },
        { name: 'Innovation', path: '/innovation', icon: Lightbulb, description: 'Innovation initiatives' },
        { name: 'Talent', path: '/talent', icon: Users, description: 'Talent solutions' }
      ]
    };
  ];

  const toggleSection = (sectionTitle: string) => {;
    setExpandedSections(prev => ;
      prev.includes(sectionTitle) ;
        ? prev.filter(name => name !== sectionTitle);
        : [...prev, sectionTitle];
    );
  };

  const isActive = (path: string) => {;
    if (path === '/') {;
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const renderNavItem = (item: SidebarItem, level: number = 0) => {;
    const isExpanded = expandedSections.includes(item.title);

    return (
      <div key = {item.title} className="mb-4">
        <button
          onClick={() => toggleSection(item.title)}
          className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            isExpanded 
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
              : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
          }`}
        >
          <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
          <span className="flex-1 text-left">{item.title}</span>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 ml-auto" />
          ) : (
            <ChevronRight className="w-4 h-4 ml-auto" />
          )}
        </button>
        
        {isExpanded && (
          <motion.div
            initial = {
  { opacity: 0,
  height: 0 





}}
            animate = {
  { opacity: 1,
  height: 'auto' 





}}
            exit = {
  { opacity: 0,
  height: 0 





}}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-2 space-y-1"
          >
            {item.items.map(child => (
              <Link
                key={child.name}
                to={child.path}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(child.path)
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <child.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>{child.name}</span>;
              </Link>;
            ))};
          </motion.div>;
        )};
      </div>;
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick = {() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition = {
  { type: 'spring', damping: 25,
  stiffness: 200 





}}
              className="absolute left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <h2 className="text-lg font-semibold text-white">Navigation</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navigation.map(item => renderNavItem(item))}
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-slate-700/50">
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
<<<<<<< HEAD
        </>
      )}
    </AnimatePresence>
  )}
=======
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl z-40">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map(item => renderNavItem(item))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="text-center">
            <Link
              to="/contact"
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              Get Started;
            </Link>;
          </div>;
        </div>;
      </div>;
    </>;
  );
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
