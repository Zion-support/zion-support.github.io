import React from 'react';
const ImprovedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  // Close mobile menu when route changes
  useEffect(() => {
  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI Solutions',
      color: 'from-blue-500 to-cyan-500',
      dropdown: [
          label: 'AI Analytics Dashboard Pro',
          href: '/ai-analytics-dashboard-pro',
          description: 'Real-time business intelligence',
          icon: <BarChart3 className="w-4 h-4" />
        },
          label: 'AI Cybersecurity Suite Pro',
          href: '/ai-cybersecurity-suite-pro',
          description: 'Advanced threat protection',
          icon: <Shield className="w-4 h-4" />
          label: 'AI Content Generation Pro',
          href: '/ai-content-generation-pro',
          description: 'Automated content creation',
          icon: <Sparkles className="w-4 h-4" />
          label: 'AI Customer Support Chatbot',
          href: '/ai-customer-support-chatbot',
          description: 'Intelligent customer service',
          icon: <Users className="w-4 h-4" />
          label: 'AI Code Assistant Pro',
          href: '/ai-code-assistant-pro',
          description: 'AI-powered development',
          icon: <Settings className="w-4 h-4" />
          label: 'AI Business Intelligence Pro',
          href: '/ai-business-intelligence-pro',
          description: 'Data-driven insights',
          icon: <TrendingUp className="w-4 h-4" />
          label: 'AI Automation Platform',
          href: '/ai-automation-platform',
          description: 'Workflow automation',
          icon: <Zap className="w-4 h-4" />
          label: 'AI Data Analytics Pro',
          href: '/ai-data-analytics-pro',
          description: 'Advanced data analysis',
          label: 'AI Marketing Automation',
          href: '/ai-marketing-automation',
          description: 'Smart marketing campaigns',
          label: 'AI HR & Recruitment Pro',
          href: '/ai-hr-recruitment-pro',
          description: 'Intelligent talent management',
          label: 'AI Financial Analysis',
          href: '/ai-financial-analysis',
          description: 'Financial forecasting',
          label: 'AI Supply Chain Optimizer',
          href: '/ai-supply-chain-optimizer',
          description: 'Supply chain intelligence',
          icon: <Globe className="w-4 h-4" />
          label: 'AI Voice Assistant Pro',
          href: '/ai-voice-assistant-pro',
          description: 'Voice-activated AI',
          icon: <User className="w-4 h-4" />
          label: 'AI Image Recognition Pro',
          href: '/ai-image-recognition-pro',
          description: 'Computer vision solutions',
          label: 'AI Predictive Maintenance',
          href: '/ai-predictive-maintenance',
          description: 'Predictive analytics',
          icon: <Clock className="w-4 h-4" />
          label: 'AI Sentiment Analysis Pro',
          href: '/ai-sentiment-analysis-pro',
          description: 'Customer sentiment tracking',
          label: 'AI Recommendation Engine',
          href: '/ai-recommendation-engine',
          description: 'Personalized recommendations',
          icon: <Star className="w-4 h-4" />
          label: 'AI Fraud Detection Pro',
          href: '/ai-fraud-detection-pro',
          description: 'Advanced fraud prevention',
          label: 'AI Language Translation',
          href: '/ai-language-translation',
          description: 'Real-time translation',
          label: 'AI Chatbot Enterprise',
          href: '/ai-chatbot-enterprise',
          description: 'Enterprise chatbot solutions',
          label: 'AI Data Mining Pro',
          href: '/ai-data-mining-pro',
          description: 'Data extraction & analysis',
          label: 'AI Video Analysis',
          href: '/ai-video-analysis',
          description: 'Video content analysis',
          label: 'AI Time Series Forecasting',
          href: '/ai-time-series-forecasting',
          description: 'Time-based predictions',
          label: 'AI NLP Text Analysis',
          href: '/ai-nlp-text-analysis',
          description: 'Natural language processing',
          label: 'View All AI Services',
          description: 'Explore all AI solutions',
          icon: <ArrowRight className="w-4 h-4" />
        }
      ]
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Comprehensive IT Solutions',
      color: 'from-green-500 to-emerald-500',
          label: 'Cloud Infrastructure',
          href: '/cloud-infrastructure',
          description: 'Scalable cloud solutions',
          icon: <Cloud className="w-4 h-4" />
          label: 'Blockchain Development',
          href: '/blockchain-development',
          description: 'Blockchain technology',
          label: 'IoT Solutions',
          href: '/iot-solutions',
          description: 'Internet of Things',
          label: 'AR/VR Development',
          href: '/ar-vr-development',
          description: 'Immersive experiences',
          label: 'DevOps Solutions',
          href: '/devops-solutions',
          description: 'Development operations',
          label: 'Mobile Development',
          href: '/mobile-development',
          description: 'Mobile applications',
          label: 'Web Development',
          href: '/web-development',
          description: 'Web applications',
          label: 'IT Support',
          href: '/it-support',
          description: 'Technical support',
          icon: <HelpCircle className="w-4 h-4" />
          label: 'Network Infrastructure',
          href: '/network-infrastructure',
          description: 'Network solutions',
          label: 'IT Consulting',
          href: '/it-consulting',
          description: 'Technology consulting',
          label: 'Cybersecurity Audit',
          href: '/cybersecurity-audit',
          description: 'Security assessments',
          label: 'Data Center Services',
          href: '/data-center-services',
          description: 'Data center solutions',
          label: 'Asset Management',
          href: '/asset-management',
          description: 'IT asset tracking',
          label: 'View All IT Services',
          description: 'Explore all IT solutions',
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Ready-to-Use Solutions',
      color: 'from-purple-500 to-pink-500',
          label: 'Zion Analytics Pro',
          href: '/zion-analytics-pro',
          description: 'Business intelligence platform',
          label: 'Zion Security Shield',
          href: '/zion-security-shield',
          description: 'Advanced security protection',
          label: 'Zion Cloud Vault',
          href: '/zion-cloud-vault',
          description: 'Secure cloud storage',
          label: 'Zion AI Inventory Manager',
          href: '/zion-ai-inventory-manager',
          description: 'Smart inventory tracking',
          label: 'Zion HR Assistant Pro',
          href: '/zion-hr-assistant-pro',
          description: 'Human resources automation',
          label: 'Zion AI Accounting Suite',
          href: '/zion-ai-accounting-suite',
          description: 'Automated accounting',
          label: 'Zion E-commerce Optimizer',
          href: '/zion-ecommerce-optimizer',
          description: 'E-commerce optimization',
          label: 'Zion AI Customer Insights',
          href: '/zion-ai-customer-insights',
          description: 'Customer analytics',
          label: 'Zion AI Lead Scoring',
          href: '/zion-ai-lead-scoring',
          description: 'Lead qualification',
          label: 'Zion AI Document Processor',
          href: '/zion-ai-document-processor',
          description: 'Document automation',
          label: 'Zion AI Social Listener',
          href: '/zion-ai-social-listener',
          description: 'Social media monitoring',
          label: 'Zion AI Email Optimizer',
          href: '/zion-ai-email-optimizer',
          description: 'Email marketing optimization',
          icon: <Mail className="w-4 h-4" />
          label: 'Zion AI Meeting Assistant',
          href: '/zion-ai-meeting-assistant',
          description: 'Meeting automation',
          label: 'Zion AI Expense Tracker',
          href: '/zion-ai-expense-tracker',
          description: 'Expense management',
          label: 'Zion AI Survey Builder',
          href: '/zion-ai-survey-builder',
          description: 'Survey creation tool',
          label: 'Zion AI Chatbot Builder',
          href: '/zion-ai-chatbot-builder',
          description: 'No-code chatbot creation',
          label: 'Zion AI Workflow Automation',
          href: '/zion-ai-workflow-automation',
          description: 'Process automation',
          label: 'Zion AI SEO Optimizer',
          href: '/zion-ai-seo-optimizer',
          description: 'SEO optimization tool',
          label: 'Zion AI Data Warehouse',
          href: '/zion-ai-data-warehouse',
          description: 'Data storage solution',
          label: 'Zion AI Mobile App Builder',
          href: '/zion-ai-mobile-app-builder',
          description: 'Mobile app creation',
          label: 'Zion AI API Manager',
          href: '/zion-ai-api-manager',
          description: 'API management platform',
          label: 'Zion AI Backup Manager',
          href: '/zion-ai-backup-manager',
          description: 'Automated backup solution',
          label: 'Zion AI Testing Automation',
          href: '/zion-ai-testing-automation',
          description: 'Automated testing',
          icon: <CheckCircle className="w-4 h-4" />
          label: 'View All Micro SAAS',
          description: 'Explore all micro SAAS',
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-Gen Connectivity',
      color: 'from-orange-500 to-red-500',
          label: '5G Data Analytics',
          href: '/5g-data-analytics',
          description: 'High-speed data analysis',
          label: '5G Edge Computing',
          href: '/5g-edge-computing',
          description: 'Edge computing solutions',
          label: '5G Implementation',
          href: '/5g-implementation',
          description: '5G network deployment',
          label: '5G Mobile Applications',
          href: '/5g-mobile-applications',
          description: '5G-enabled mobile apps',
          label: '5G Network Infrastructure',
          href: '/5g-network-infrastructure',
          description: '5G network architecture',
          label: '5G Private Networks',
          href: '/5g-private-networks',
          description: 'Private 5G networks',
          label: '5G Smart City Solutions',
          href: '/5g-smart-city-solutions',
          description: 'Smart city infrastructure',
          label: 'View All 5G Solutions',
          description: 'Explore all 5G solutions',
      label: 'Company',
      href: '/about',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'About Zion Tech Group',
      color: 'from-cyan-500 to-blue-500',
          label: 'About Us',
          description: 'Our story and mission',
          label: 'Our Team',
          href: '/team',
          description: 'Meet our experts',
          label: 'Careers',
          href: '/careers',
          description: 'Join our team',
          icon: <Award className="w-4 h-4" />
          label: 'Case Studies',
          href: '/case-studies',
          description: 'Success stories',
          label: 'Blog',
          href: '/blog',
          description: 'Latest insights',
          label: 'News',
          href: '/news',
          description: 'Company news',
          label: 'Press',
          href: '/press',
          description: 'Press releases',
          label: 'Partners',
          href: '/partners',
          description: 'Our partners',
  const quickLinks = [
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4" /> },
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Consultation', href: '/consultation', icon: <Users className="w-4 h-4" /> }
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  const Sidebar = () => (
    <div className={`fixed inset-0 z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-white/10">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
          {/* Navigation Items */}
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  <div>
                    <div className="text-white font-medium">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
            ))}
          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                  key={link.href}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  {link.icon}
                  <span>{link.label}</span>
          {/* Contact Info */}
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ImprovednavigationProps {
  className?: string;
  children?: React.ReactNode;

export default function Improvednavigation({ className = '', children, ...props }: ImprovednavigationProps) {
  return (