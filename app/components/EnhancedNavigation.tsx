import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Brain, ChevronDown,   Globe, Menu, Shield,  X, Zap } from 'lucide-react';

const EnhancedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: &apos;AI Services&apos;,
      href: &apos;/ai-services&apos;,
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { label: &apos;AI Voice Assistant Pro&apos;, href: &apos;/zion-ai-voice-assistant-pro&apos; },
        { label: &apos;AI Image Recognition Pro&apos;, href: &apos;/zion-ai-image-recognition-pro&apos; },
        { label: &apos;AI Fraud Detection Pro&apos;, href: &apos;/zion-ai-fraud-detection-pro&apos; },
        { label: &apos;AI Predictive Maintenance&apos;, href: &apos;/zion-ai-predictive-maintenance&apos; },
        { label: &apos;AI Analytics Dashboard Pro&apos;, href: &apos;/ai-analytics-dashboard-pro&apos; },
        { label: &apos;AI Cybersecurity Suite Pro&apos;, href: &apos;/ai-cybersecurity-suite-pro&apos; },
        { label: &apos;AI Content Generation Pro&apos;, href: &apos;/ai-content-generation-pro&apos; },
        { label: &apos;AI Customer Support Chatbot&apos;, href: &apos;/ai-customer-support-chatbot&apos; },
        { label: &apos;AI Code Assistant Pro&apos;, href: &apos;/ai-code-assistant-pro&apos; },
        { label: &apos;AI Business Intelligence Pro&apos;, href: &apos;/ai-business-intelligence-pro&apos; },
        { label: &apos;AI Automation Platform&apos;, href: &apos;/ai-automation-platform&apos; },
        { label: &apos;AI Data Analytics Pro&apos;, href: &apos;/ai-data-analytics-pro&apos; },
        { label: &apos;AI Marketing Automation&apos;, href: &apos;/ai-marketing-automation&apos; },
        { label: &apos;AI HR & Recruitment Pro&apos;, href: &apos;/ai-hr-recruitment-pro&apos; },
        { label: &apos;AI Financial Analysis&apos;, href: &apos;/ai-financial-analysis&apos; },
        { label: &apos;AI Supply Chain Optimizer&apos;, href: &apos;/ai-supply-chain-optimizer&apos; },
        { label: &apos;AI Sentiment Analysis Pro&apos;, href: &apos;/ai-sentiment-analysis-pro&apos; },
        { label: &apos;AI Recommendation Engine&apos;, href: &apos;/ai-recommendation-engine&apos; },
        { label: &apos;AI Language Translation&apos;, href: &apos;/ai-language-translation&apos; },
        { label: &apos;AI Chatbot Enterprise&apos;, href: &apos;/ai-chatbot-enterprise&apos; },
        { label: &apos;AI Data Mining Pro&apos;, href: &apos;/ai-data-mining-pro&apos; },
        { label: &apos;AI Analysis&apos;, href: &apos;/ai-video-analysis&apos; },
        { label: &apos;AI Time Series Forecasting&apos;, href: &apos;/ai-time-series-forecasting&apos; },
        { label: &apos;AI NLP Text Analysis&apos;, href: &apos;/ai-nlp-text-analysis&apos; },
        { label: &apos;View All AI Services&apos;, href: &apos;/ai-services&apos; }
      ]
    },
    {
      label: &apos;IT Services&apos;,
      href: &apos;/services&apos;,
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { label: &apos;AI-Powered Business Intelligence Pro&apos;, href: &apos;/ai-business-intelligence&apos; },
        { label: &apos;AI Customer Support Automation Suite&apos;, href: &apos;/ai-customer-support&apos; },
        { label: &apos;AI Content Generation Studio&apos;, href: &apos;/ai-content-generation&apos; },
        { label: &apos;AI Cybersecurity Defense Matrix&apos;, href: &apos;/ai-cybersecurity&apos; },
        { label: &apos;5G Network Infrastructure Solutions&apos;, href: &apos;/5g-solutions&apos; },
        { label: &apos;Infrastructure Management Pro&apos;, href: &apos;/cloud-infrastructure&apos; },
        { label: &apos;AI-Powered Data Analytics Platform&apos;, href: &apos;/ai-data-analytics&apos; },
        { label: &apos;AI Code Assistant Pro&apos;, href: &apos;/ai-code-assistant&apos; },
        { label: &apos;AI Marketing Automation Hub&apos;, href: &apos;/ai-marketing-automation&apos; },
        { label: &apos;AI Document Intelligence Suite&apos;, href: &apos;/ai-document-processing&apos; },
        { label: &apos;AI Sales CRM Assistant Pro&apos;, href: &apos;/ai-crm-assistant&apos; },
        { label: &apos;AI Financial Analytics Pro&apos;, href: &apos;/ai-financial-analytics&apos; },
        { label: &apos;AI Healthcare Diagnostics&apos;, href: &apos;/ai-healthcare-diagnostics&apos; },
        { label: &apos;AI Supply Chain Optimizer&apos;, href: &apos;/ai-supply-chain-optimizer&apos; },
        { label: &apos;AI Legal Research Assistant&apos;, href: &apos;/ai-legal-research&apos; },
        { label: &apos;AI Energy Management System&apos;, href: &apos;/ai-energy-management&apos; },
        { label: &apos;Enterprise Management Pro&apos;, href: &apos;/database-management&apos; },
        { label: &apos;IT Infrastructure Monitoring Suite&apos;, href: &apos;/infrastructure-monitoring&apos; },
        { label: &apos;Advanced Network Security Solutions&apos;, href: &apos;/network-security&apos; },
        { label: &apos;Migration & Modernization&apos;, href: &apos;/cloud-migration&apos; },
        { label: &apos;DevOps & CI/CD Pipeline Solutions&apos;, href: &apos;/devops-solutions&apos; },
        { label: &apos;Enterprise Backup & Disaster Recovery&apos;, href: &apos;/backup-disaster-recovery&apos; },
        { label: &apos;Mobile App Development Services&apos;, href: &apos;/mobile-development&apos; },
        { label: &apos;Web Application Development&apos;, href: &apos;/web-development&apos; },
        { label: &apos;IT Support & Help Desk Services&apos;, href: &apos;/it-support&apos; },
        { label: &apos;Network Infrastructure Design&apos;, href: &apos;/network-infrastructure&apos; },
        { label: &apos;IT Consulting & Strategy&apos;, href: &apos;/it-consulting&apos; },
        { label: &apos;Cybersecurity Audit & Compliance&apos;, href: &apos;/cybersecurity-audit&apos; },
        { label: &apos;Data Center Services & Colocation&apos;, href: &apos;/data-center-services&apos; },
        { label: &apos;IT Asset Management Solutions&apos;, href: &apos;/asset-management&apos; },
        { label: &apos;View All IT Services&apos;, href: &apos;/services&apos; }
      ]
    },
    {
      label: &apos;Micro SAAS&apos;,
      href: &apos;/micro-saas&apos;,
      icon: <Zap className="w-4 h-4" />,
      dropdown: [
        { label: &apos;Zion Analytics Pro&apos;, href: &apos;/zion-analytics-pro&apos; },
        { label: &apos;Zion Security Shield&apos;, href: &apos;/zion-security-shield&apos; },
        { label: &apos;Zion Vault&apos;, href: &apos;/zion-cloud-vault&apos; },
        { label: &apos;Zion AI Voice Assistant Pro&apos;, href: &apos;/zion-ai-voice-assistant-pro&apos; },
        { label: &apos;Zion AI Fraud Detection Pro&apos;, href: &apos;/zion-ai-fraud-detection-pro&apos; },
        { label: &apos;Zion AI Image Recognition Pro&apos;, href: &apos;/zion-ai-image-recognition-pro&apos; },
        { label: &apos;Zion AI Predictive Maintenance&apos;, href: &apos;/zion-ai-predictive-maintenance&apos; },
        { label: &apos;Zion AI Inventory Manager&apos;, href: &apos;/zion-ai-inventory-manager&apos; },
        { label: &apos;Zion HR Assistant Pro&apos;, href: &apos;/zion-hr-assistant-pro&apos; },
        { label: &apos;Zion AI Accounting Suite&apos;, href: &apos;/zion-ai-accounting-suite&apos; },
        { label: &apos;Zion E-commerce Optimizer&apos;, href: &apos;/zion-ecommerce-optimizer&apos; },
        { label: &apos;Zion AI Customer Insights&apos;, href: &apos;/zion-ai-customer-insights&apos; },
        { label: &apos;Zion AI Lead Scoring&apos;, href: &apos;/zion-ai-lead-scoring&apos; },
        { label: &apos;Zion AI Document Processor&apos;, href: &apos;/zion-ai-document-processor&apos; },
        { label: &apos;Zion AI Social Listener&apos;, href: &apos;/zion-ai-social-listener&apos; },
        { label: &apos;Zion AI Email Optimizer&apos;, href: &apos;/zion-ai-email-optimizer&apos; },
        { label: &apos;Zion AI Meeting Assistant&apos;, href: &apos;/zion-ai-meeting-assistant&apos; },
        { label: &apos;Zion AI Expense Tracker&apos;, href: &apos;/zion-ai-expense-tracker&apos; },
        { label: &apos;Zion AI Survey Builder&apos;, href: &apos;/zion-ai-survey-builder&apos; },
        { label: &apos;Zion AI Chatbot Builder&apos;, href: &apos;/zion-ai-chatbot-builder&apos; },
        { label: &apos;Zion AI Workflow Automation&apos;, href: &apos;/zion-ai-workflow-automation&apos; },
        { label: &apos;Zion AI SEO Optimizer&apos;, href: &apos;/zion-ai-seo-optimizer&apos; },
        { label: &apos;Zion AI Data Warehouse&apos;, href: &apos;/zion-ai-data-warehouse&apos; },
        { label: &apos;Zion AI Mobile App Builder&apos;, href: &apos;/zion-ai-mobile-app-builder&apos; },
        { label: &apos;Zion AI API Manager&apos;, href: &apos;/zion-ai-api-manager&apos; },
        { label: &apos;Zion AI Backup Manager&apos;, href: &apos;/zion-ai-backup-manager&apos; },
        { label: &apos;Zion AI Testing Automation&apos;, href: &apos;/zion-ai-testing-automation&apos; },
        { label: &apos;View All Micro SAAS&apos;, href: &apos;/micro-saas&apos; }
      ]
    },
    {
      label: &apos;5G Solutions&apos;,
      href: &apos;/5g-solutions&apos;,
      icon: <Globe className="w-4 h-4" />,
      dropdown: [
        { label: &apos;5G Data Analytics&apos;, href: &apos;/5g-data-analytics&apos; },
        { label: &apos;5G Edge Computing&apos;, href: &apos;/5g-edge-computing&apos; },
        { label: &apos;5G Implementation&apos;, href: &apos;/5g-implementation&apos; },
        { label: &apos;5G Mobile Applications&apos;, href: &apos;/5g-mobile-applications&apos; },
        { label: &apos;5G Network Infrastructure&apos;, href: &apos;/5g-network-infrastructure&apos; },
        { label: &apos;5G Private Networks&apos;, href: &apos;/5g-private-networks&apos; },
        { label: &apos;5G Smart City Solutions&apos;, href: &apos;/5g-smart-city-solutions&apos; },
        { label: &apos;View All 5G Solutions&apos;, href: &apos;/5g-solutions&apos; }
      ]
    },
    {
      label: &apos;Company&apos;,
      href: &apos;/about&apos;,
      icon: <BarChart3 className="w-4 h-4" />,
      dropdown: [
        { label: &apos;About Us&apos;, href: &apos;/about&apos; },
        { label: &apos;Our Team&apos;, href: &apos;/team&apos; },
        { label: &apos;Careers&apos;, href: &apos;/careers&apos; },
        { label: &apos;Case Studies&apos;, href: &apos;/case-studies&apos; },
        { label: &apos;Blog&apos;, href: &apos;/blog&apos; },
        { label: &apos;News&apos;, href: &apos;/news&apos; },
        { label: &apos;Press&apos;, href: &apos;/press&apos; },
        { label: &apos;Partners&apos;, href: &apos;/partners&apos; }
      ]
    }
  ];

  const quickLinks = [
    { label: &apos;Pricing&apos;, href: &apos;/pricing&apos; },
    { label: &apos;Demo&apos;, href: &apos;/demo&apos; },
    { label: &apos;Support&apos;, href: &apos;/support&apos; },
    { label: &apos;Consultation&apos;, href: &apos;/consultation&apos; }
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