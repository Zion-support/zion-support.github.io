<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },'
        { name: 'About', path: '/about', icon: Users },'
        { name: 'Services', path: '/services', icon: Settings },'
        { name: 'Contact', path: '/contact', icon: Phone },'
        { name: 'Blog', path: '/blog', icon: BarChart },'
        { name: 'Case Studies', path: '/case-studies', icon: BarChart },]'
      ],
    },
    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain },'
        { name: 'Business Intelligence', path: '/ai-services/business-intelligence', icon: BarChart },'
        { name: 'Document Processing', path: '/ai-services/document-processing', icon: Settings },'
        { name: 'Customer Experience', path: '/ai-services/customer-experience', icon: Users },'
        { name: 'Marketing Automation', path: '/ai-services/marketing-automation', icon: Settings },'
        { name: 'Predictive Maintenance', path: '/ai-services/predictive-maintenance', icon: Settings },'
        { name: 'Supply Chain', path: '/ai-services/supply-chain', icon: Settings },'
        { name: 'Fraud Detection', path: '/ai-services/fraud-detection', icon: Shield },'
        { name: 'Content Generation', path: '/ai-services/content-generation', icon: Settings },'
        { name: 'HR Analytics', path: '/ai-services/hr-analytics', icon: BarChart },'
        { name: 'Process Automation', path: '/ai-services/process-automation', icon: Settings },'
        { name: 'Quality Assurance', path: '/ai-services/quality-assurance', icon: Shield },'
        { name: 'Energy Management', path: '/ai-services/energy-management', icon: Settings },]'
      ],
    },
    {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
        { name: 'Micro SaaS Overview', path: '/micro-saas', icon: Settings },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard', icon: BarChart },
        { name: 'Support Bot', path: '/micro-saas/support-bot', icon: Users },
        { name: 'Social Manager', path: '/micro-saas/social-manager', icon: Settings },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', icon: Mail },
        { name: 'Inventory Management', path: '/micro-saas/inventory-management', icon: Settings },
        { name: 'Lead Scoring', path: '/micro-saas/lead-scoring', icon: BarChart },
        { name: 'Document Processor', path: '/micro-saas/document-processor', icon: Settings },
        { name: 'SEO Optimizer', path: '/micro-saas/seo-optimizer', icon: Settings },
        { name: 'Appointment Scheduler', path: '/micro-saas/appointment-scheduler', icon: Clock },
        { name: 'Chat Analytics', path: '/micro-saas/chat-analytics', icon: BarChart },
        { name: 'Expense Tracker', path: '/micro-saas/expense-tracker', icon: BarChart },
        { name: 'Content Generator', path: '/micro-saas/content-generator', icon: Settings },
      key: 'it-services',
      items: [
        { name: 'IT Services Overview', path: '/it-services', icon: Code },'
        { name: 'IT Consulting', path: '/it-consulting', icon: Users },'
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings },'
        { name: 'IT Support', path: '/it-support', icon: Users },'
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud },'
        { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud },'
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },'
        { name: 'Database Management', path: '/database-management', icon: Settings },'
        { name: 'Managed IT', path: '/managed-it', icon: Settings },]'
      ],
    },
    {
      title: 'Company',
      items: [
        { name: 'Team', path: '/team', icon: Users },'
        { name: 'Careers', path: '/careers', icon: Users },'
        { name: 'Consultation', path: '/consultation', icon: Phone },'
        { name: 'Pricing', path: '/pricing', icon: BarChart },]'
      ],
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', path: '/docs', icon: Settings },
        { name: 'API Docs', path: '/api-docs', icon: Code },
        { name: 'Support', path: '/support', icon: Users },
        { name: 'Status', path: '/status', icon: Settings },
  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={onClose} className="close-btn">
        ×
      </button>
      <nav>
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/about" onClick={onClose}>About</Link>
        <Link to="/services" onClick={onClose}>Services</Link>
        <Link to="/contact" onClick={onClose}>Contact</Link>
      </nav>
    </div>
  );
}
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">"
            <div className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">"
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </div>
            <button;
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Company Links */}
            <div className="p-4">"
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Company;
              </h3>
              <ul className="space-y-1">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link;
                      href={link.path}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={onClose}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Categories */}
            <div className="p-4">"
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Services;
              </h3>
              <div className="space-y-1">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <button;
                      onClick={() => toggleSection(category.title)}
                      className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-3">"
                        <div className={`w-6 h-6 ${category.bgColor} rounded flex items-center justify-center`}>
                          <category.icon className={`w-3 h-3 ${category.color}`} />
                        </div>
                        <span className="font-medium">{category.title}</span>
                      </div>
                      {expandedSections.has(category.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.has(category.title) && (
                      <div className="ml-6 mt-1 space-y-1">
                        {category.services.map((service, serviceIndex) => (
                          <Link;
                            key={serviceIndex}
                            href={service.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={onClose}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="p-4">"
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Support;
              </h3>
              <ul className="space-y-1">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link;
                      href={link.path}
                      className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={onClose}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">"
            <div className="space-y-3">"
              <div className="flex items-center space-x-2 text-sm text-gray-600">"
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">"
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
=======
'use client';
import React from 'react';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
