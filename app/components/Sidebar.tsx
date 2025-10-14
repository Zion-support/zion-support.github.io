import { 
  HomeIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  CurrencyDollarIcon, 
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  MapIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon;
interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const isActive = (path: string) => {
    return location.pathname === path}
  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]

  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/about", icon: InformationCircleIcon },
    { 
      name: "Services", 
      href: "/services", 
      icon: BriefcaseIcon,
      submenu: [
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: GlobeAltIcon },'''
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },'''
    { name: 'Blog', href: '/blog', icon: AcademicCapIcon },'''
    { name: 'Resources', href: '/resources', icon: PlayIcon },'''
    { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },'''
    { name: 'Contact', href: '/contact', icon: PhoneIcon }'''
  ];

  if (!isOpen) return null;

  return (
<>    <div className="fixed inset-0 z-50 md:hidden">"
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>"
      <div className="relative flex flex-col w-64 h-full bg-slate-900">"
        <div className="flex items-center justify-between p-4 border-b border-slate-700">"
          <span className="text-xl font-bold text-white">Menu</span>"
          <button onClick={onClose} className="text-gray-400 hover:text-white">"
            <XMarkIcon className="w-6 h-6" />"
          </button>
        </>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">"
          {navigation.map((link) => (
            <div key={link.name}></div>
              {link.submenu ? (
                <div></div>
                  <button;
                    onClick={() => toggleExpanded(link.name)
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded
                  >
                    <div className="flex items-center">"
                      <link.icon className="w-5 h-5 mr-3" />"
                      {link.name}
                    </div>
                    <ChevronDownIcon;
                      className={`w-4 h-4 transition-transform ${````
                        expandedItems.includes(link.name) ? 'rotate-180' : '''''
                      }`} ````
                    /></ChevronDownIcon>
                  </button>
                  {expandedItems.includes(link.name) && (
                    <div className="ml-4 mt-2 space-y-1">"
                      {link.submenu.map((subLink) => (
                        <Link;
                          key={subLink.name}
                          to={subLink.href}
                          className={`flex items-center px-3 py-2 text-sm transition-colors ${````
                            isActive(subLink.href)
                              ? 'text-blue-400 bg-blue-900/20''''
                              : 'text-gray-400 hover:text-white hover:bg-slate-800''''
                          }`}````
                          onClick={onClose}></Link>
                          <subLink.icon className="w-4 h-4 mr-3" />"
                          {subLink.name}
                        </Link>
                      ))
                    </div>
                  )}
                </div>
              ) : (
                <Link;
                </Link>
              )
            </div>
        </nav>
const ImprovedSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');'
  const location = useLocation();

  // Close sidebar when route changes;
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'ai-services',''
      title: 'AI Services',''
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',''
      href: '/ai-services',''
      items: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: <BarChart3 className="w-4 h-4" /> },'"'"
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },'"'"
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: <FileText className="w-4 h-4" /> },'"'"
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot', icon: <MessageSquare className="w-4 h-4" /> },'"'"
        { label: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', icon: <TrendingUp className="w-4 h-4" /> },'"'"
        { label: 'AI Automation Platform', href: '/ai-automation-platform', icon: <Zap className="w-4 h-4" /> },'"'"
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },'"'"
        { label: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: <TrendingUp className="w-4 h-4" /> },'"'"
        { label: 'AI HR & Recruitment Pro', href: '/ai-hr-recruitment-pro', icon: <Users className="w-4 h-4" /> },'"'"
        { label: 'AI Financial Analysis', href: '/ai-financial-analysis', icon: <DollarSign className="w-4 h-4" /> },'"'"
        { label: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: <Globe className="w-4 h-4" /> },'"'"
        { label: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro', icon: <MessageSquare className="w-4 h-4" /> },'"'"
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: <Clock className="w-4 h-4" /> },'"'"
        { label: 'AI Sentiment Analysis Pro', href: '/ai-sentiment-analysis-pro', icon: <TrendingUp className="w-4 h-4" /> },'"'"
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: <Star className="w-4 h-4" /> },'"'"
        { label: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro', icon: <Shield className="w-4 h-4" /> },'"'"
        { label: 'AI Language Translation', href: '/ai-language-translation', icon: <Globe className="w-4 h-4" /> },'"'"
        { label: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', icon: <MessageSquare className="w-4 h-4" /> },'"'"
        { label: 'AI Data Mining Pro', href: '/ai-data-mining-pro', icon: <BarChart3 className="w-4 h-4" /> },'"'"
        { label: 'AI Video Analysis', href: '/ai-video-analysis', icon: <Play className="w-4 h-4" /> },'"'"
        { label: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting', icon: <TrendingUp className="w-4 h-4" /> },'"'"
        { label: 'AI NLP Text Analysis', href: '/ai-nlp-text-analysis', icon: <FileText className="w-4 h-4" /> }'"'"
      ]
    },
    {
      id: 'it-services',''
      title: 'IT Services',''
      icon: <Shield className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',''
      href: '/services',''
      items: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> },'"'"
        { label: 'Blockchain Development', href: '/blockchain-development', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'IoT Solutions', href: '/iot-solutions', icon: <Globe className="w-4 h-4" /> },'"'"
        { label: 'AR/VR Development', href: '/ar-vr-development', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'DevOps Solutions', href: '/devops-solutions', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'Mobile Development', href: '/mobile-development', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'Web Development', href: '/web-development', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'IT Support', href: '/it-support', icon: <HelpCircle className="w-4 h-4" /> },'"'"
        { label: 'Network Infrastructure', href: '/network-infrastructure', icon: <Globe className="w-4 h-4" /> },'"'"
        { label: 'IT Consulting', href: '/it-consulting', icon: <Users className="w-4 h-4" /> },'"'"
        { label: 'Cybersecurity Audit', href: '/cybersecurity-audit', icon: <Shield className="w-4 h-4" /> },'"'"
        { label: 'Data Center Services', href: '/data-center-services', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'Asset Management', href: '/asset-management', icon: <BarChart3 className="w-4 h-4" /> }'"'"
      ]
    },
    {
      id: 'micro-saas',''
      title: 'Micro SAAS',''
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',''
      href: '/micro-saas',''
      items: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> },'"'"
        { label: 'Zion Security Shield', href: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },'"'"
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Inventory Manager', href: '/zion-ai-inventory-manager', icon: <BarChart3 className="w-4 h-4" /> },'"'"
        { label: 'Zion HR Assistant Pro', href: '/zion-hr-assistant-pro', icon: <Users className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Accounting Suite', href: '/zion-ai-accounting-suite', icon: <DollarSign className="w-4 h-4" /> },'"'"
        { label: 'Zion E-commerce Optimizer', href: '/zion-ecommerce-optimizer', icon: <TrendingUp className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights', icon: <Users className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring', icon: <Star className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Document Processor', href: '/zion-ai-document-processor', icon: <FileText className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Social Listener', href: '/zion-ai-social-listener', icon: <Globe className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer', icon: <Mail className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: <Calendar className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker', icon: <DollarSign className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder', icon: <MessageSquare className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Workflow Automation', href: '/zion-ai-workflow-automation', icon: <Zap className="w-4 h-4" /> },'"'"
        { label: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: <TrendingUp className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Data Warehouse', href: '/zion-ai-data-warehouse', icon: <Cloud className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Mobile App Builder', href: '/zion-ai-mobile-app-builder', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'Zion AI API Manager', href: '/zion-ai-api-manager', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Backup Manager', href: '/zion-ai-backup-manager', icon: <Cloud className="w-4 h-4" /> },'"'"
        { label: 'Zion AI Testing Automation', href: '/zion-ai-testing-automation', icon: <CheckCircle className="w-4 h-4" /> }'"'"
      ]
    },
    {
      id: '5g-solutions',''
      title: '5G Solutions',''
      icon: <Globe className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',''
      href: '/5g-solutions',''
      items: [
        { label: '5G Data Analytics', href: '/5g-data-analytics', icon: <BarChart3 className="w-4 h-4" /> },'"'"
        { label: '5G Edge Computing', href: '/5g-edge-computing', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: '5G Implementation', href: '/5g-implementation', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: '5G Mobile Applications', href: '/5g-mobile-applications', icon: <Settings className="w-4 h-4" /> },'"'"
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },'"'"
        { label: '5G Private Networks', href: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> },'"'"
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions', icon: <Globe className="w-4 h-4" /> }'"'"
      ]
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },'"'"
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },'"'"
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4" /> },'"'"
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },'"'"
    { label: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" /> },'"'"
    { label: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },'"'"
    { label: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4" /> }'"'"
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },''
    { label: 'Our Team', href: '/team' },''
    { label: 'Careers', href: '/careers' },''
    { label: 'Case Studies', href: '/case-studies' },''
    { label: 'News', href: '/news' },''
    { label: 'Press', href: '/press' },''
    { label: 'Partners', href: '/partners' }''
  ];

  const filteredSections = navigationSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0 || searchQuery === '');'

  if (!isOpen) return null;
import React from "react";"

  return (
    <div className={`bg-slate-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} ${className}`}>
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {isOpen && (
          <h2 className="text-xl font-bold">Zion Tech Group</h2>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          {isOpen ? (
            <ChevronLeftIcon className="w-5 h-5" />
          ) : (
            <ChevronRightIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
