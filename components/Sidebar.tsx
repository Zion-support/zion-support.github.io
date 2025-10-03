// import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigation = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: '🏠' },
        { name: 'About', href: '/about', icon: '🏢' },
        { name: 'Contact', href: '/contact', icon: '📞' },
        { name: 'Blog', href: '/blog', icon: '📝' },
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'All Services', href: '/services', icon: '⚙️' },
        { name: 'AI Micro SaaS Solutions', href: '/services', icon: '🤖' },
        { name: 'Advanced AI Solutions', href: '/services', icon: '🧠' },
        { name: 'IT Services & DevOps', href: '/services', icon: '💻' },
        { name: 'Micro SaaS Platforms', href: '/services', icon: '💼' },
        { name: 'Healthcare Technology', href: '/services', icon: '🏥' },
        { name: 'Blockchain Solutions', href: '/services', icon: '⛓️' },
        { name: 'AI Customer Feedback Analyzer', href: '/services/ai-customer-feedback-analyzer', icon: '💬' },
        { name: 'AI Expense Management SaaS', href: '/services/ai-expense-management-saas', icon: '💳' },
        { name: 'AI Time Tracking Suite', href: '/services/ai-time-tracking-productivity-suite', icon: '⏱️' },
        { name: 'AI Email Automation Platform', href: '/services/ai-email-automation-platform', icon: '📧' },
        { name: 'AI Password Manager Enterprise', href: '/services/ai-password-manager-enterprise', icon: '🔐' },
        { name: 'AI Video Content Optimizer', href: '/services/ai-video-content-optimizer', icon: '🎥' },
        { name: 'AI HR Recruitment Automation', href: '/services/ai-hr-recruitment-automation', icon: '👥' },
        { name: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation', icon: '🎧' },
        { name: 'AI Inventory Forecasting Platform', href: '/services/ai-inventory-forecasting-platform', icon: '📊' },
        { name: 'AI Quantum Optimization Engine', href: '/services/ai-quantum-optimization-engine', icon: '⚛️' },
        { name: 'AI Autonomous DevOps Orchestrator', href: '/services/ai-autonomous-devops-orchestrator', icon: '🤖' },
        { name: 'AI Meta-Cognitive Business Intelligence', href: '/services/ai-meta-cognitive-business-intelligence', icon: '🧠' },
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'All Solutions', href: '/solutions', icon: '🎯' },
        { name: 'Enterprise Solutions', href: '/enterprise', icon: '🏭' },
        { name: 'Innovative IT Solutions', href: '/innovative-it-solutions', icon: '💡' },
        { name: 'Advanced AI Solutions', href: '/advanced-ai-solutions', icon: '🧠' },
        { name: 'Healthcare Technology', href: '/services/healthcare-technology-solutions', icon: '🏥' },
        { name: 'FinTech Solutions', href: '/services/financial-technology-solutions', icon: '💰' },
        { name: 'E-commerce Solutions', href: '/services/ecommerce-technology-solutions', icon: '🛒' },
        { name: 'Manufacturing AI', href: '/services/manufacturing-ai-platform', icon: '🏭' },
        { name: 'Cloud Migration Services', href: '/services/cloud-migration-services', icon: '☁️' },
        { name: 'DevOps Automation Services', href: '/services/devops-automation-services', icon: '⚙️' },
        { name: 'Cybersecurity Consulting', href: '/services/cybersecurity-consulting-services', icon: '🔒' },
        { name: 'Data Analytics Consulting', href: '/services/data-analytics-consulting', icon: '📊' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'All Resources', href: '/resources', icon: '📚' },
        { name: 'Guides', href: '/guides', icon: '📖' },
        { name: 'Content Hub', href: '/content-hub', icon: '📋' },
        { name: 'Enhanced Catalog', href: '/enhanced-services-catalog', icon: '📋' },
        { name: 'Case Studies', href: '/case-studies', icon: '📈' },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Pricing', href: '/pricing', icon: '💳' },
        { name: 'Support', href: '/support', icon: '🎧' },
        { name: 'Partners', href: '/partners', icon: '🤝' },
        { name: 'Portfolio', href: '/portfolio', icon: '🎨' },
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Privacy Policy', href: '/privacy', icon: '🔐' },
        { name: 'Terms of Service', href: '/terms', icon: '📄' },
        { name: 'Security', href: '/security', icon: '🛡️' },
        { name: 'Sitemap', href: '/sitemap', icon: '🗺️' },
      ]
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:shadow-none
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Zion Tech</span>
          </Link>
          
          <button
            onClick={onClose}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="overflow-y-auto h-full pb-20">
          <div className="p-6 space-y-8">
            {navigation.map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <nav className="space-y-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                      onClick={onClose}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="space-y-3">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 w-full text-center"
                onClick={onClose}
              >
                Get Started
              </Link>
              
              <Link
                to="/pricing"
                className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full text-center"
                onClick={onClose}
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-6 py-4 bg-gray-50">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+13024640950" className="hover:text-blue-600 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <span className="mt-0.5">📍</span>
                <span className="text-xs">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;