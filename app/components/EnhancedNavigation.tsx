import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X, Brain, Shield, Zap, Globe, BarChart3, Cloud, Sparkles } from 'lucide-react';

const EnhancedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      dropdown: [
        { label: 'Business Intelligence', href: '/ai-business-intelligence' },
        { label: 'Content Generation', href: '/ai-content-generation' },
        { label: 'Customer Support', href: '/ai-customer-support' },
        { label: 'Cybersecurity', href: '/ai-cybersecurity' },
        { label: 'Data Analytics', href: '/ai-data-analytics' },
        { label: 'Marketing Automation', href: '/ai-marketing' },
        { label: 'Video Generation', href: '/ai-video-generation' },
        { label: 'Voice Assistant', href: '/ai-voice-assistant' },
        { label: 'Image Recognition', href: '/ai-image-recognition' },
        { label: 'Predictive Maintenance', href: '/ai-predictive-maintenance' },
        { label: 'Fraud Detection', href: '/ai-fraud-detection' },
        { label: 'Recommendation Engine', href: '/ai-recommendation-engine' },
        { label: 'Translation Services', href: '/ai-translation-services' },
        { label: 'Sentiment Analysis', href: '/ai-sentiment-analysis' },
        { label: 'Code Review Assistant', href: '/ai-code-review' },
        { label: 'Personalization Engine', href: '/ai-personalization' },
        { label: 'Document Intelligence', href: '/ai-document-intelligence' },
        { label: 'Chatbot Builder Pro', href: '/ai-chatbot-builder' },
        { label: 'Market Research', href: '/ai-market-research' },
        { label: 'Quality Assurance', href: '/ai-quality-assurance' },
        { label: 'Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
        { label: 'View All AI Services', href: '/ai-services' }
      ]
    },
    {
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { label: 'Web Development', href: '/web-development' },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'Database Management', href: '/database-management' },
        { label: 'Custom Software', href: '/custom-software' },
        { label: 'Network Infrastructure', href: '/network-infrastructure' },
        { label: 'DevOps Solutions', href: '/devops-solutions' },
        { label: 'Enterprise Cloud Migration', href: '/enterprise-cloud-migration' },
        { label: 'Advanced Network Security', href: '/advanced-network-security' },
        { label: 'Database Administration Pro', href: '/database-administration' },
        { label: 'Mobile App Development', href: '/mobile-app-development' },
        { label: 'API Development & Integration', href: '/api-development' },
        { label: 'DevOps Automation Suite', href: '/devops-automation' },
        { label: 'IT Infrastructure Management', href: '/it-infrastructure-management' },
        { label: 'Web Application Development', href: '/web-application-development' },
        { label: 'Data Backup & Recovery', href: '/data-backup-recovery' },
        { label: 'IT Consulting Services', href: '/it-consulting' },
        { label: 'System Integration Services', href: '/system-integration' },
        { label: 'IT Security Audit', href: '/it-security-audit' },
        { label: 'Cloud Cost Optimization', href: '/cloud-cost-optimization' },
        { label: 'IT Support & Helpdesk', href: '/it-support-helpdesk' },
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
        { label: 'Zion Content Studio', href: '/zion-content-studio' },
        { label: 'Zion Data Sync', href: '/zion-data-sync' },
        { label: 'Zion Email Automation', href: '/zion-email-automation' },
        { label: 'Zion Project Master', href: '/zion-project-master' },
        { label: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
        { label: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro' },
        { label: 'Zion Workflow Automation', href: '/zion-workflow-automation' },
        { label: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant' },
        { label: 'Zion Social Scheduler', href: '/zion-social-scheduler' },
        { label: 'Zion Inventory Manager', href: '/zion-inventory-manager' },
        { label: 'Zion HR Suite', href: '/zion-hr-suite' },
        { label: 'Zion Invoice Generator', href: '/zion-invoice-generator' },
        { label: 'Zion Social Media Scheduler', href: '/zion-social-media-scheduler' },
        { label: 'Zion Customer Feedback Manager', href: '/zion-customer-feedback-manager' },
        { label: 'Zion Expense Tracker', href: '/zion-expense-tracker' },
        { label: 'Zion Task Manager Pro', href: '/zion-task-manager-pro' },
        { label: 'Zion Lead Generator', href: '/zion-lead-generator' },
        { label: 'Zion Document Manager', href: '/zion-document-manager' },
        { label: 'Zion Email Marketing Suite', href: '/zion-email-marketing-suite' },
        { label: 'Zion Time Tracker', href: '/zion-time-tracker' },
        { label: 'Zion CRM Lite', href: '/zion-crm-lite' },
        { label: 'Zion Survey Builder', href: '/zion-survey-builder' },
        { label: 'Zion Appointment Scheduler', href: '/zion-appointment-scheduler' },
        { label: 'Zion Chat Widget', href: '/zion-chat-widget' },
        { label: 'Zion Form Builder', href: '/zion-form-builder' },
        { label: 'Zion Knowledge Base', href: '/zion-knowledge-base' },
        { label: 'Zion API Manager', href: '/zion-api-manager' },
        { label: 'Zion Backup Manager', href: '/zion-backup-manager' },
        { label: 'Zion SEO Analyzer', href: '/zion-seo-analyzer' },
        { label: 'Zion Uptime Monitor', href: '/zion-uptime-monitor' },
        { label: 'Zion Password Manager', href: '/zion-password-manager' },
        { label: 'Zion Conversion Optimizer', href: '/zion-conversion-optimizer' },
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
    { label: 'Consultation', href: '/consultation' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
    { label: 'Partners', href: '/partners' }
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