import React, { memo } from 'react';
import SEOHead from '../components/SEOHead';

const CRMSuitePage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion CRM Suite Pro",
    "description": "All-in-one customer relationship management platform with AI-powered lead scoring and sales automation",
    "url": "https://ziontechgroup.com/crm-suite",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "39",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Zion CRM Suite Pro - Customer Relationship Management Platform"
        description="All-in-one customer relationship management platform with AI-powered lead scoring, sales automation, and team collaboration features."
        keywords="CRM, customer relationship management, sales automation, lead management, team collaboration, business software"
        canonicalUrl="https://ziontechgroup.com/crm-suite"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">👥</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zion CRM Suite Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              All-in-one customer relationship management platform with AI-powered lead scoring and sales automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Management</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive lead tracking and management system with automated lead scoring and qualification.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Lead capture forms</li>
                  <li>• Lead scoring algorithms</li>
                  <li>• Lead qualification workflows</li>
                  <li>• Lead source tracking</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales Pipeline</h3>
                <p className="text-gray-600 mb-4">
                  Visual sales pipeline management with customizable stages and automated progression tracking.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Custom pipeline stages</li>
                  <li>• Deal progression tracking</li>
                  <li>• Sales forecasting</li>
                  <li>• Pipeline analytics</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Lead Scoring</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI-powered lead scoring to identify the most promising prospects automatically.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Machine learning algorithms</li>
                  <li>• Behavioral analysis</li>
                  <li>• Predictive scoring</li>
                  <li>• Custom scoring models</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamless email integration with tracking, templates, and automated follow-ups.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Email tracking</li>
                  <li>• Template library</li>
                  <li>• Automated sequences</li>
                  <li>• Response tracking</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Task Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automate repetitive tasks and workflows to improve team productivity and efficiency.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Workflow automation</li>
                  <li>• Task assignment</li>
                  <li>• Reminder systems</li>
                  <li>• Deadline tracking</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reporting Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive reporting and analytics dashboard with real-time insights and custom reports.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Real-time dashboards</li>
                  <li>• Custom reports</li>
                  <li>• Performance metrics</li>
                  <li>• Data visualization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$39<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 1,000 contacts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic lead management
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic reporting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Mobile app access
                  </li>
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 10,000 contacts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    AI lead scoring
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced automation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom fields
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced reporting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    API access
                  </li>
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited contacts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced AI features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    White-label options
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dedicated account manager
                  </li>
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Zion CRM Suite Pro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Sales Conversion</h3>
                <p className="text-gray-600">
                  Our AI-powered lead scoring and automation features help you identify and convert the most promising prospects, leading to higher conversion rates and increased revenue.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Lead Management</h3>
                <p className="text-gray-600">
                  Comprehensive lead tracking and management system ensures no opportunity is missed, with automated workflows and intelligent lead routing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Follow-ups</h3>
                <p className="text-gray-600">
                  Never miss a follow-up with our automated reminder system and email sequences, ensuring consistent communication with prospects and customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-driven Insights</h3>
                <p className="text-gray-600">
                  Advanced analytics and reporting provide valuable insights into your sales performance, helping you make informed decisions and optimize your processes.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Management</h3>
                <p className="text-gray-600 text-sm">Track and manage your sales pipeline with advanced analytics and automation.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Nurturing</h3>
                <p className="text-gray-600 text-sm">Automate lead nurturing campaigns and follow-up sequences.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Retention</h3>
                <p className="text-gray-600 text-sm">Maintain strong relationships with existing customers through automated touchpoints.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pipeline Tracking</h3>
                <p className="text-gray-600 text-sm">Monitor deal progression and forecast sales with visual pipeline management.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Coordination</h3>
                <p className="text-gray-600 text-sm">Improve team collaboration with shared contacts and task management.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                <p className="text-gray-600 text-sm">Track team performance and identify areas for improvement.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn more about Zion CRM Suite Pro and how it can transform your sales process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-300">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

CRMSuitePage.displayName = 'CRMSuitePage';

export default CRMSuitePage;