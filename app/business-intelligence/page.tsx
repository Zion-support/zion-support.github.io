import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, BarChart, TrendingUp, Target, Eye, Database, Zap, Brain, PieChart, LineChart, Activity } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Live business intelligence dashboards with real-time data visualization and interactive reporting.',
      icon: '📊',
      price: 'Starting at $2,800/month',
      features: ['Real-time data streaming', 'Interactive dashboards', 'Custom visualizations', 'Mobile responsive', 'Automated alerts'],
      benefits: ['Make faster decisions', 'Identify trends immediately', 'Improve operational efficiency'],
      marketPrice: '$4,500-12,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Superset', 'Custom Dashboards']
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced forecasting models for sales, demand, inventory, and business trend prediction.',
      icon: '🔮',
      price: 'Starting at $3,500/month',
      features: ['Time series forecasting', 'Demand prediction', 'Sales forecasting', 'Risk assessment', 'Scenario modeling'],
      benefits: ['Improve planning accuracy by 50%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$6,000-18,000/month',
      category: 'Predictive Analytics',
      technologies: ['Python', 'R', 'TensorFlow', 'Prophet', 'ARIMA', 'Machine Learning']
    },
    {
      title: 'Data Warehouse & ETL Solutions',
      description: 'Comprehensive data warehousing with automated ETL processes for unified data management.',
      icon: '🏗️',
      price: 'Starting at $4,200/month',
      features: ['Data integration', 'ETL/ELT pipelines', 'Data modeling', 'Quality assurance', 'Performance optimization'],
      benefits: ['Centralize data sources', 'Improve data quality', 'Enable faster analytics'],
      marketPrice: '$7,000-20,000/month',
      category: 'Data Engineering',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Apache Airflow', 'dbt', 'Fivetran']
    },
    {
      title: 'Self-Service BI Platform',
      description: 'Empower business users with intuitive self-service analytics and reporting tools.',
      icon: '👥',
      price: 'Starting at $2,200/month',
      features: ['Drag-and-drop interface', 'Pre-built templates', 'Collaborative workspaces', 'Mobile access', 'Automated insights'],
      benefits: ['Reduce IT dependency', 'Accelerate decision making', 'Improve data literacy'],
      marketPrice: '$3,500-10,000/month',
      category: 'Self-Service BI',
      technologies: ['Qlik Sense', 'Tableau Server', 'Power BI Service', 'Looker', 'Custom Platforms']
    },
    {
      title: 'Advanced Data Visualization',
      description: 'Custom interactive visualizations and infographics for complex data storytelling.',
      icon: '🎨',
      price: 'Starting at $1,800/month',
      features: ['Custom charts', 'Interactive maps', '3D visualizations', 'Animation effects', 'Responsive design'],
      benefits: ['Enhance data comprehension', 'Improve stakeholder engagement', 'Create compelling presentations'],
      marketPrice: '$3,000-8,000/month',
      category: 'Visualization',
      technologies: ['D3.js', 'Three.js', 'Observable', 'Plotly', 'Custom JavaScript']
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent BI solutions with machine learning, natural language processing, and automated insights.',
      icon: '🤖',
      price: 'Starting at $5,000/month',
      features: ['Natural language queries', 'Automated insights', 'Anomaly detection', 'Predictive modeling', 'Conversational AI'],
      benefits: ['Democratize data access', 'Discover hidden patterns', 'Automate routine analysis'],
      marketPrice: '$8,000-25,000/month',
      category: 'AI-Powered BI',
      technologies: ['AI/ML', 'Natural Language Processing', 'Anomaly Detection', 'Recommendation Engines', 'Conversational AI']
    },
    {
      title: 'KPI & Performance Management',
      description: 'Comprehensive KPI tracking and performance management with automated reporting and alerts.',
      icon: '📈',
      price: 'Starting at $2,500/month',
      features: ['KPI dashboards', 'Scorecards', 'Performance tracking', 'Automated reports', 'Alert systems'],
      benefits: ['Monitor business performance', 'Align teams with goals', 'Identify improvement areas'],
      marketPrice: '$4,000-12,000/month',
      category: 'Performance Management',
      technologies: ['Balanced Scorecard', 'OKR Tools', 'Custom Dashboards', 'Alert Systems', 'Reporting Tools']
    },
    {
      title: 'Data Governance & Compliance',
      description: 'Enterprise data governance with compliance monitoring and data quality management.',
      icon: '🛡️',
      price: 'Starting at $3,800/month',
      features: ['Data lineage tracking', 'Quality monitoring', 'Compliance reporting', 'Access controls', 'Audit trails'],
      benefits: ['Ensure data quality', 'Meet compliance requirements', 'Reduce data risks'],
      marketPrice: '$6,000-18,000/month',
      category: 'Data Governance',
      technologies: ['Collibra', 'Informatica', 'Alation', 'Custom Solutions', 'Compliance Tools']
    },
    {
      title: 'BI Consulting & Strategy',
      description: 'Strategic BI consulting to design and implement comprehensive analytics strategies.',
      icon: '💡',
      price: 'Starting at $3,000/month',
      features: ['BI strategy development', 'Technology assessment', 'Change management', 'Training programs', 'Best practices'],
      benefits: ['Align BI with business goals', 'Optimize technology investments', 'Build analytics capabilities'],
      marketPrice: '$5,000-15,000/month',
      category: 'BI Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Change Management', 'Training Programs']
    }
  ];

  // Group services by category
  const servicesByCategory = biServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof biServices>);

  return (
    <>
      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence and analytics solutions for data-driven decision making and business optimization." />
        <meta name="keywords" content="business intelligence, data analytics, predictive analytics, data visualization, BI consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Business Intelligence Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with advanced analytics and intelligent reporting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our BI Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Expert business intelligence solutions that turn your data into competitive advantage
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Insights</h3>
                <p className="text-gray-600">Live dashboards and instant data analysis for faster decisions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">Intelligent insights with automated pattern recognition</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Enterprise-grade security with compliance and data governance</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Insights</h3>
                <p className="text-gray-600">Clear, actionable recommendations for business growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Services
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} solutions for your business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                        <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Get BI Consultation
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Capabilities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our BI Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive business intelligence expertise across all major platforms and technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Integration</h3>
                <p className="text-gray-600">Connect and unify data from multiple sources and systems</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600">Create compelling visualizations and interactive dashboards</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Forecast trends and predict future outcomes with ML models</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Monitoring</h3>
                <p className="text-gray-600">KPI tracking and operational performance analytics</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600">Live data processing and instant insights delivery</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Automated insights, anomaly detection, and natural language queries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our BI experts for a free consultation and custom analytics strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;