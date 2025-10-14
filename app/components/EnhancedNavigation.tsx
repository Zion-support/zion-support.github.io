import { ArrowRight, ChevronDown, Menu, X, Brain, Shield, Zap, Globe, BarChart3, Cloud } from 'lucide-react';

const EnhancedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro' },
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
        { label: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { label: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { label: 'AI Automation Platform', href: '/ai-automation-platform' },
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro' },
        { label: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { label: 'AI HR & Recruitment Pro', href: '/ai-hr-recruitment-pro' },
        { label: 'AI Financial Analysis', href: '/ai-financial-analysis' },
        { label: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
        { label: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro' },
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro' },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
        { label: 'AI Sentiment Analysis Pro', href: '/ai-sentiment-analysis-pro' },
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine' },
        { label: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro' },
        { label: 'AI Language Translation', href: '/ai-language-translation' },
        { label: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { label: 'AI Data Mining Pro', href: '/ai-data-mining-pro' },
        { label: 'AI Video Analysis', href: '/ai-video-analysis' },
        { label: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting' },
        { label: 'AI NLP Text Analysis', href: '/ai-nlp-text-analysis' },
        { label: 'View All AI Services', href: '/ai-services' }
      ]
    },
    {
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { label: 'AI-Powered Business Intelligence Pro', href: '/ai-business-intelligence' },
        { label: 'AI Customer Support Automation Suite', href: '/ai-customer-support' },
        { label: 'AI Content Generation Studio', href: '/ai-content-generation' },
        { label: 'AI Cybersecurity Defense Matrix', href: '/ai-cybersecurity' },
        { label: '5G Network Infrastructure Solutions', href: '/5g-solutions' },
        { label: 'Cloud Infrastructure Management Pro', href: '/cloud-infrastructure' },
        { label: 'AI-Powered Data Analytics Platform', href: '/ai-data-analytics' },
        { label: 'AI Code Assistant Pro', href: '/ai-code-assistant' },
        { label: 'AI Marketing Automation Hub', href: '/ai-marketing-automation' },
        { label: 'AI Document Intelligence Suite', href: '/ai-document-processing' },
        { label: 'AI Sales CRM Assistant Pro', href: '/ai-crm-assistant' },
        { label: 'AI Financial Analytics Pro', href: '/ai-financial-analytics' },
        { label: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
        { label: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
        { label: 'AI Legal Research Assistant', href: '/ai-legal-research' },
        { label: 'AI Energy Management System', href: '/ai-energy-management' },
        { label: 'Enterprise Database Management Pro', href: '/database-management' },
        { label: 'IT Infrastructure Monitoring Suite', href: '/infrastructure-monitoring' },
        { label: 'Advanced Network Security Solutions', href: '/network-security' },
        { label: 'Cloud Migration & Modernization', href: '/cloud-migration' },
        { label: 'DevOps & CI/CD Pipeline Solutions', href: '/devops-solutions' },
        { label: 'Enterprise Backup & Disaster Recovery', href: '/backup-disaster-recovery' },
        { label: 'Mobile App Development Services', href: '/mobile-development' },
        { label: 'Web Application Development', href: '/web-development' },
        { label: 'IT Support & Help Desk Services', href: '/it-support' },
        { label: 'Network Infrastructure Design', href: '/network-infrastructure' },
        { label: 'IT Consulting & Strategy', href: '/it-consulting' },
        { label: 'Cybersecurity Audit & Compliance', href: '/cybersecurity-audit' },
        { label: 'Data Center Services & Colocation', href: '/data-center-services' },
        { label: 'IT Asset Management Solutions', href: '/asset-management' },
        { label: 'View All IT Services', href: '/services' }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { label: 'Zion Security Shield', href: '/zion-security-shield' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { label: 'Zion AI Inventory Manager', href: '/zion-ai-inventory-manager' },
        { label: 'Zion HR Assistant Pro', href: '/zion-hr-assistant-pro' },
        { label: 'Zion AI Accounting Suite', href: '/zion-ai-accounting-suite' },
        { label: 'Zion E-commerce Optimizer', href: '/zion-ecommerce-optimizer' },
        { label: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights' },
        { label: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
        { label: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
        { label: 'Zion AI Social Listener', href: '/zion-ai-social-listener' },
        { label: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
        { label: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
        { label: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
        { label: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
        { label: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
        { label: 'Zion AI Workflow Automation', href: '/zion-ai-workflow-automation' },
        { label: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
        { label: 'Zion AI Data Warehouse', href: '/zion-ai-data-warehouse' },
        { label: 'Zion AI Mobile App Builder', href: '/zion-ai-mobile-app-builder' },
        { label: 'Zion AI API Manager', href: '/zion-ai-api-manager' },
        { label: 'Zion AI Backup Manager', href: '/zion-ai-backup-manager' },
        { label: 'Zion AI Testing Automation', href: '/zion-ai-testing-automation' },
        { label: 'View All Micro SAAS', href: '/micro-saas' }
      ]
    },
    {
      label: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { label: '5G Data Analytics', href: '/5g-data-analytics' },
        { label: '5G Edge Computing', href: '/5g-edge-computing' },
        { label: '5G Implementation', href: '/5g-implementation' },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { label: '5G Private Networks', href: '/5g-private-networks' },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { label: 'View All 5G Solutions', href: '/5g-solutions' }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      icon: <BarChart3 className="w-4 h-4" />,
      dropdown: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
        { label: 'News', href: '/news' },
        { label: 'Press', href: '/press' },
        { label: 'Partners', href: '/partners' }
      ]
    }
  ];

  const quickLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
    { label: 'Support', href: '/support' },
    { label: 'Consultation', href: '/consultation' }
  ];

  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white group">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden lg:flex space-x-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  <div className="ml-6 space-y-2">
                    {item.dropdown.slice(0, 4).map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        to={dropdownItem.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                    {item.dropdown.length > 4 && (
                      <Link
                        to={item.href}
                        className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        View All →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedNavigation;