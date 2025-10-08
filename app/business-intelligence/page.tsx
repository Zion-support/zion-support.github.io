import React from 'react';
import { CheckCircle, ArrowRight, Star, BarChart3, TrendingUp, Database, PieChart } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Real-time Analytics',
      description: 'Live dashboards and analytics that provide instant insights into your business performance.',
      features: [
        'Live Data Processing',
        'Real-time Dashboards',
        'Instant Alerts',
        'Performance Monitoring'
      ],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Data Visualization',
      description: 'Interactive charts, graphs, and visualizations that make complex data easy to understand.',
      features: [
        'Interactive Dashboards',
        'Custom Visualizations',
        'Drill-down Capabilities',
        'Mobile-responsive Design'
      ],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and predictive models to anticipate future trends and opportunities.',
      features: [
        'Machine Learning Models',
        'Trend Forecasting',
        'Risk Assessment',
        'Scenario Planning'
      ],
      price: 'Starting at $2,200/month'
    },
    {
      title: 'Reporting Solutions',
      description: 'Automated report generation and distribution for stakeholders at all levels.',
      features: [
        'Automated Reports',
        'Custom Templates',
        'Scheduled Delivery',
        'Multi-format Export'
      ],
      price: 'Starting at $1,200/month'
    }
  ];

  const biCapabilities = [
    {
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources for comprehensive analysis.',
      icon: '🔗',
      benefits: ['Multi-source Integration', 'Data Cleansing', 'ETL Processes', 'Real-time Sync']
    },
    {
      title: 'Advanced Analytics',
      description: 'Sophisticated analytical techniques to uncover hidden patterns and insights.',
      icon: '📊',
      benefits: ['Statistical Analysis', 'Pattern Recognition', 'Correlation Analysis', 'Trend Analysis']
    },
    {
      title: 'Self-Service BI',
      description: 'Empower users to create their own reports and dashboards without technical expertise.',
      icon: '👥',
      benefits: ['User-friendly Interface', 'Drag-and-drop Tools', 'Pre-built Templates', 'Training Support']
    },
    {
      title: 'Mobile Analytics',
      description: 'Access critical business insights on-the-go with mobile-optimized dashboards.',
      icon: '📱',
      benefits: ['Mobile Dashboards', 'Offline Access', 'Push Notifications', 'Touch-optimized UI']
    },
    {
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance across your analytics platform.',
      icon: '🛡️',
      benefits: ['Data Quality Management', 'Security Controls', 'Compliance Monitoring', 'Audit Trails']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize query performance and system resources for faster insights.',
      icon: '⚡',
      benefits: ['Query Optimization', 'Caching Strategies', 'Resource Management', 'Performance Monitoring']
    }
  ];

  const industrySolutions = [
    {
      title: 'Retail Analytics',
      description: 'Customer behavior analysis, inventory optimization, and sales forecasting.',
      icon: '🛒'
    },
    {
      title: 'Financial Services',
      description: 'Risk assessment, fraud detection, and regulatory compliance reporting.',
      icon: '💼'
    },
    {
      title: 'Healthcare',
      description: 'Patient outcomes analysis, operational efficiency, and clinical decision support.',
      icon: '🏥'
    },
    {
      title: 'Manufacturing',
      description: 'Production optimization, quality control, and supply chain analytics.',
      icon: '🏭'
    },
    {
      title: 'E-commerce',
      description: 'Customer journey analysis, conversion optimization, and market trends.',
      icon: '🛍️'
    },
    {
      title: 'Marketing',
      description: 'Campaign performance, customer segmentation, and ROI analysis.',
      icon: '📈'
    }
  ];

  const dataSources = [
    'Databases (SQL, NoSQL)',
    'Cloud Platforms (AWS, Azure, GCP)',
    'CRM Systems (Salesforce, HubSpot)',
    'ERP Systems (SAP, Oracle)',
    'Social Media APIs',
    'Web Analytics (Google Analytics)',
    'IoT Devices',
    'File Systems (CSV, Excel, JSON)',
    'APIs and Web Services',
    'Data Warehouses'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 rounded-full p-4">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Intelligence Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced analytics and visualization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Get Free Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BI Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Intelligence Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive analytics solutions to drive data-driven decision making
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BI Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Intelligence Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features that make your data work for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored business intelligence solutions for your industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Sources We Support
            </h2>
            <p className="text-xl text-gray-600">
              Connect and analyze data from virtually any source
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-sm text-gray-700 font-medium">{source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Business Intelligence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our BI Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with data-driven insights and decisions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven Growth</h3>
              <p className="text-gray-600">
                Make informed decisions based on real data and analytics
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unified Data View</h3>
              <p className="text-gray-600">
                Consolidate data from multiple sources for comprehensive insights
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Analytics</h3>
              <p className="text-gray-600">
                Transform complex data into clear, actionable visualizations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contact our business intelligence experts to discover how data analytics can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-green-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;