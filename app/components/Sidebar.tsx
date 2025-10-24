<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { Home } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Network } from 'lucide-react';
import { Code } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Home, Users, Settings, BarChart3, Shield, Cloud, Code, Brain, Zap, Database, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
=======
import { X, Home, Shield, Zap, Brain, Globe } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = useCallback((item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);
=======
  const toggleSection = (section: string,) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
=======
  const toggleSection = (section: string) => {
    setExpandedSections(prev =>)
      prev.includes(section),
        ? prev.filter(s => s !== section),
        : [...prev, section]
    );
  };

  const serviceCategories = [
    {
      title: 'AI Services'
      icon: Brain;
      color: 'text-purple-400',
      services: [
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
        { name: 'AI Fintech Platform', path: '/ai-fintech' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision' },
        { name: 'AI Machine Learning', path: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing' }
      ]
    },
    {
      title: 'IT Services'
      icon: Cloud;
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Support', path: '/it-support' },
        { name: 'Custom Development', path: '/custom-development' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Network Design', path: '/network-design' }
      ]
    },
    {
      title: 'Micro SAAS'
      icon: Code;
      color: 'text-cyan-400',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', path: '/ai-content-studio' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'Emerging Tech'
      icon: Sparkles;
      color: 'text-pink-400',
      services: [
        { name: 'Quantum Computing', path: '/ai-quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions' },
        { name: 'Smart Cities', path: '/smart-cities' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Innovation Labs', path: '/innovation-labs' }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const supportLinks = [
    { name: 'Support Center', path: '/support', icon: HelpCircle },
    { name: 'Documentation', path: '/docs', icon: FileText },
    { name: 'API Reference', path: '/api-docs', icon: Code },
    { name: 'Status Page', path: '/status', icon: CheckCircle },
    { name: 'Demo Request', path: '/demo', icon: Star },
    { name: 'Free Consultation', path: '/consultation', icon: MessageSquare }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy', icon: Shield },
    { name: 'Terms of Service', path: '/terms', icon: FileText },
    { name: 'Cookie Policy', path: '/cookies', icon: Settings }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

  const menuItems = useMemo(() => [
    {
<<<<<<< HEAD
      name: 'Dashboard',
      path: '/',
      icon: <Home className="w-5 h-5" />,
      children: []
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      children: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Zap className="w-5 h-5" />,
      children: [
        { name: '5G Network Design', path: '/5g-network-design' },
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Private Networks', path: '/5g-private-networks' }
      ]
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Cloud className="w-5 h-5" />,
      children: []
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-5 h-5" />,
      children: []
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-5 h-5" />,
      children: []
  ], []);

  if (!isOpen) return null;

<<<<<<< HEAD
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative flex h-full">
        <div className="w-80 bg-slate-900 shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
=======
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home; },
        { name: 'About', path: '/about', icon: Users; },
        { name: 'Services', path: '/services', icon: Settings; },
        { name: 'Contact', path: '/contact', icon: Phone; },
        { name: 'Blog', path: '/blog', icon: BarChart; },
        { name: 'Case Studies', path: '/case-studies', icon: BarChart; },
      ]
    },
    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain; },
        { name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart; },
        { name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings; },
        { name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users; },
        { name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings; },
        { name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings; },
        { name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings; },
        { name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield; },
        { name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings; },
        { name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart; },
        { name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings; },
        { name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield; },
        { name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings; },
      ]
    },
    {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings; },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart; },
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users; },
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings; },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail; },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings; },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart; },
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings; },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings; },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock; },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart; },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart; },
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings; },
      ]
    },
    {
      title: 'IT Services',
      key: 'it-services',
      items: [
        { name: 'IT Services Overview', path: '/it-services', icon: Code; },
        { name: 'IT Consulting', path: '/it-consulting', icon: Users; },
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings; },
        { name: 'IT Support', path: '/it-support', icon: Users; },
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud; },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud; },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield; },
        { name: 'Database Management', path: '/database-management', icon: Settings; },
        { name: 'Managed IT', path: '/managed-it', icon: Settings; },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Team', path: '/team', icon: Users; },
        { name: 'Careers', path: '/careers', icon: Users; },
        { name: 'Consultation', path: '/consultation', icon: Phone; },
        { name: 'Pricing', path: '/pricing', icon: BarChart; },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', path: '/docs', icon: Settings; },
        { name: 'API Docs', path: '/api-docs', icon: Code; },
        { name: 'Support', path: '/support', icon: Users; },
        { name: 'Status', path: '/status', icon: Settings; },
      ]
    }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST',
  };

  return (
    <React.Fragment>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}</div>
      <aside className={`fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-cyan-400/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg: translate-x-0 lg:static lg:z-auto`,}>
        <div className="flex flex-col h-full">
          {/* Header */}</div>
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
            <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div></div>
              <div></div>
                <h2 className="text-xl font-bold text-white cyber-text">Zion Tech Group</h2>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
=======
  return(<>
      {/* Backdrop */}
      <div;
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden",
        onClick={onClose}
      />
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg: hidden">,
        <div className="flex flex-col h-full">,
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700"></div>
            <div className="flex items-center space-x-2"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"></div>
          <div className="flex items-center justify-between p-6 border-b border-gray-700"></div>
            <div className="flex items-center space-x-2"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"></div>
                <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-lg">Zion Tech Group</span>
            </div>
            <button;
              onClick={onClose}
              className="text-gray-400 hover: text-white transition-colors"
            ></button>
              <X className="w-6 h-6" />)
            </button>)
          </div>)
),
          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">{/* Main Navigation */}</div>
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Main Navigation</h3><nav className="space-y-1">{mainLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"></Link>
                Main Navigation;
              </h3>
              <nav className="space-y-1"></nav>
                {mainLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Our Services</h3><div className="space-y-2">{serviceCategories.map((category, categoryIndex) => (</div>
                  <div key={categoryIndex}></div>
                    <button
                      onClick={() =>toggleSection(category.title)}</button></<<<butto>className</butto></butto>="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-colors"</button>
                    ></button>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"></h3>
                Our Services;
              </h3>
              <div className="space-y-2"></div>
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}></div>
                    <button;
                      onClick={() => toggleSection(category.title)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover: bg-gray-700/50 hover:text-white rounded-lg transition-colors",
                    >,
                      <div className="flex items-center space-x-3">,
                      <div className="flex items-center space-x-3"></div>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                        <span>{category.title}</span>
                      </div>
                      {expandedSections.includes(category.title) ? (
                        <ChevronDown className="w-4 h-4" >) : (</ChevronDown><ChevronRight className="w-4 h-4" >)}</ChevronRigh>
                    </ChevronRight>

                    {expandedSections.includes(category.title) && (
                      <div className="ml-8 space-y-1 mt-2"></div>
                        {category.services.map((service, serviceIndex) => (
                          <Link;
                      <div className="ml-8 space-y-1 mt-2">{category.services.map((service, serviceIndex) => (</div><Link
                            key={serviceIndex}
                            to={service.path}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              location.pathname === service.path;
                                ? 'bg-cyan-500/20 text-cyan-400'}
                                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}
                            }`}
                            onClick={onClose}
                          >{service.name}</Lin>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Support</h3><nav className="space-y-1">{supportLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"></Link>
                Support;
              </h3>
              <nav className="space-y-1"></nav>
                {supportLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div></div>
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Legal</h3><nav className="space-y-1">{legalLinks.map((link, index) => (</nav>
                  <Link
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"></Link>
                Legal;
              </h3>
              <nav className="space-y-1"></nav>
                {legalLinks.map((link, index) => (
                  <Link;
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path;
                        ? 'bg-cyan-500/20 text-cyan-400'}
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
                    }`}
                    onClick={onClose}
                  ></Lin>
                    <link.icon className="w-5 h-5" /></lin>
                    <span>{link.name}</spa>
                  </Link>
                ))}
              </nav>
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
          
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                    onClick={onClose}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  
<<<<<<< HEAD
                  {item.children.length > 0 && (
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className="ml-auto p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {expandedItems.includes(item.name) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
=======
                  {(!section.key || expandedSections.has(section.key)) && (
                    <div className="ml-4 space-y-1">
                      {section.items.map((item, itemIndex) => (</div></div></div>
                        <Link
                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                              : 'text-gray-300 hover: text-white hover:bg-slate-800/50',
                          }`}
                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                  )}
                </div>
                
                {item.children.length > 0 && expandedItems.includes(item.name) && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive(child.path)
                            ? 'text-cyan-400 bg-cyan-400/10'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        }`}
                        onClick={onClose}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
=======
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <p>Sidebar component.</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
    </div>
=======
          {/* Contact Info */}
          <div className="border-t border-slate-700/50 p-6">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </div></div></div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs">{contactInfo.hours}</span>
              </div>
          </div>
      </aside>
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
'use client'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Zap,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

<<<<<<< HEAD
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const location = useLocation()

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'AI Solutions',
      href: '/ai-solutions',
      icon: Brain,
      children: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Video Generator', href: '/ai-video-generator' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Code,
      children: [
        { name: 'API Development', href: '/api-development' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Settings
    }
  ]

  const renderNavigationItem = (item: any) => {
    const isActive = location.pathname === item.href
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedSections.includes(item.name)

    return (
      <div key={item.name}>
        <div
          className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
            isActive
              ? 'bg-cyan-500/20 text-cyan-400'
              : 'text-gray-300 hover:bg-slate-700/50'
          }`}
        >
          <Link
            to={item.href}
            className="flex items-center space-x-3 flex-1"
            onClick={() => !hasChildren && setIsOpen(false)}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </Link>
          {hasChildren && (
            <button
              onClick={() => toggleSection(item.name)}
              className="p-1 hover:bg-slate-600 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-6 mt-2 space-y-1">
            {item.children.map((child: any) => {
              const isChildActive = location.pathname === child.href
              return (
                <Link
                  key={child.name}
                  to={child.href}
                  className={`block p-2 rounded-lg text-sm transition-colors ${
                    isChildActive
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:bg-slate-700/50 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {child.name}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-lg shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-slate-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 hover:bg-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6 space-y-2">
          {navigationItems.map(renderNavigationItem)}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Need help?</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
=======
              {/* Social Links */}
              <div className="flex space-x-4"></div>
                <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                  <Twitter className="w-5 h-5" /></Twitte>
                </a>
                <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">,
                  <Github className="w-5 h-5" />,
                </a>,
              </div>,
,
              {/* CTA Button */}
              <Link;
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center",
                onClick={onClose}
              ></Link>
                Get Started Today;
              </Link>
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
export default Sidebar;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {X} from 'lucide-react';

interface SidebarProps {isOpen: boolean,
  onClose: () => void;}

  const navigationItems = [{name: 'Home', path: '/'},
    {name: 'AI Services', path: '/ai-services'},
    {name: 'IT Services', path: '/it-services'},
    {name: 'Micro SaaS', path: '/micro-saas-services'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'}]

export default function Sidebar() {return (
    <span className="text-xl font-boldtext-white">Menu</span>
 (

              key="{index}"
              to="{item.path}"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              onClick="{onClose}"
              />{item.name}
            </Link>
  ))}

  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
