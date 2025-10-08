import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, BarChart, Zap, Shield, Cpu, Brain, Target, TrendingUp, Database, PieChart } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Comprehensive dashboards with real-time data visualization and interactive reporting.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['Real-time data streaming', 'Interactive dashboards', 'Custom visualizations', 'Mobile responsive', 'API integration'],
      benefits: ['Make faster decisions', 'Improve data visibility', 'Reduce reporting time by 80%'],
      marketPrice: '$4,000-8,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Superset', 'Custom Dashboards']
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced forecasting models for sales, demand, and business trend prediction.',
      icon: '🔮',
      price: 'Starting at $3,500/month',
      features: ['Time series forecasting', 'Demand prediction', 'Sales forecasting', 'Risk assessment', 'Scenario modeling'],
      benefits: ['Improve planning accuracy by 50%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$5,000-15,000/month',
      category: 'Predictive Analytics',
      technologies: ['Python', 'R', 'Prophet', 'ARIMA', 'Machine Learning']
    },
    {
      title: 'Data Warehouse Design & Implementation',
      description: 'Scalable data warehouse solutions for centralized data management and analytics.',
      icon: '🏗️',
      price: 'Starting at $5,000/month',
      features: ['Data modeling', 'ETL processes', 'Data quality management', 'Scalable architecture', 'Performance optimization'],
      benefits: ['Centralize data sources', 'Improve data quality', 'Enable advanced analytics'],
      marketPrice: '$8,000-20,000/month',
      category: 'Data Infrastructure',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse', 'Apache Airflow']
    },
    {
      title: 'Self-Service BI Platform',
      description: 'Empower business users with self-service analytics and reporting capabilities.',
      icon: '👥',
      price: 'Starting at $2,000/month',
      features: ['Drag-and-drop interface', 'Pre-built templates', 'Data exploration', 'Collaborative features', 'User training'],
      benefits: ['Reduce IT dependency', 'Accelerate insights', 'Improve user adoption'],
      marketPrice: '$3,500-7,000/month',
      category: 'Self-Service',
      technologies: ['Tableau', 'Power BI', 'QlikView', 'Looker', 'Custom Platforms']
    },
    {
      title: 'Advanced Data Visualization',
      description: 'Custom data visualizations and interactive charts for complex data storytelling.',
      icon: '📈',
      price: 'Starting at $1,800/month',
      features: ['Custom visualizations', 'Interactive charts', 'Data storytelling', 'Brand customization', 'Export capabilities'],
      benefits: ['Improve data comprehension', 'Enhance presentations', 'Drive better decisions'],
      marketPrice: '$3,000-6,000/month',
      category: 'Visualization',
      technologies: ['D3.js', 'Chart.js', 'Plotly', 'Highcharts', 'Custom Libraries']
    },
    {
      title: 'Automated Reporting System',
      description: 'Automated report generation and distribution with scheduled delivery.',
      icon: '📋',
      price: 'Starting at $1,500/month',
      features: ['Scheduled reports', 'Automated distribution', 'Custom templates', 'Multi-format export', 'Alert systems'],
      benefits: ['Save 20+ hours/week', 'Ensure timely reporting', 'Improve consistency'],
      marketPrice: '$2,500-5,000/month',
      category: 'Reporting',
      technologies: ['SSRS', 'Crystal Reports', 'JasperReports', 'Automation Tools', 'Email Systems']
    },
    {
      title: 'Data Quality Management',
      description: 'Comprehensive data quality solutions with cleansing, validation, and monitoring.',
      icon: '🔍',
      price: 'Starting at $2,200/month',
      features: ['Data profiling', 'Quality rules', 'Cleansing algorithms', 'Monitoring dashboards', 'Alert systems'],
      benefits: ['Improve data accuracy', 'Reduce errors by 90%', 'Ensure compliance'],
      marketPrice: '$3,500-8,000/month',
      category: 'Data Quality',
      technologies: ['Informatica', 'Talend', 'Great Expectations', 'Custom Tools', 'Data Validation']
    },
    {
      title: 'Performance Analytics',
      description: 'KPI tracking and performance monitoring with automated insights and recommendations.',
      icon: '🎯',
      price: 'Starting at $2,800/month',
      features: ['KPI dashboards', 'Performance tracking', 'Benchmarking', 'Trend analysis', 'Automated insights'],
      benefits: ['Track key metrics', 'Identify performance gaps', 'Optimize operations'],
      marketPrice: '$4,500-10,000/month',
      category: 'Performance',
      technologies: ['KPI Frameworks', 'Analytics Tools', 'Machine Learning', 'Benchmarking', 'Custom Metrics']
    },
    {
      title: 'Customer Analytics Platform',
      description: 'Comprehensive customer insights with segmentation, behavior analysis, and lifetime value prediction.',
      icon: '👤',
      price: 'Starting at $3,200/month',
      features: ['Customer segmentation', 'Behavior analysis', 'Lifetime value prediction', 'Churn prediction', 'Personalization'],
      benefits: ['Improve customer retention', 'Increase lifetime value', 'Optimize marketing spend'],
      marketPrice: '$5,000-12,000/month',
      category: 'Customer Analytics',
      technologies: ['Customer Data Platforms', 'Machine Learning', 'Segmentation Tools', 'Predictive Models', 'CRM Integration']
    },
    {
      title: 'Financial Analytics & Reporting',
      description: 'Advanced financial reporting with budgeting, forecasting, and variance analysis.',
      icon: '💰',
      price: 'Starting at $3,800/month',
      features: ['Financial dashboards', 'Budget tracking', 'Variance analysis', 'Cash flow forecasting', 'Compliance reporting'],
      benefits: ['Improve financial visibility', 'Accelerate month-end close', 'Ensure compliance'],
      marketPrice: '$6,000-15,000/month',
      category: 'Financial Analytics',
      technologies: ['Financial Systems', 'ERP Integration', 'Compliance Tools', 'Forecasting Models', 'Reporting Tools']
    },
    {
      title: 'Supply Chain Analytics',
      description: 'End-to-end supply chain visibility with demand forecasting and optimization.',
      icon: '🚚',
      price: 'Starting at $4,500/month',
      features: ['Supply chain visibility', 'Demand forecasting', 'Inventory optimization', 'Supplier analytics', 'Risk assessment'],
      benefits: ['Reduce inventory costs', 'Improve delivery times', 'Minimize supply chain risks'],
      marketPrice: '$7,000-18,000/month',
      category: 'Supply Chain',
      technologies: ['Supply Chain Tools', 'Demand Planning', 'Inventory Management', 'Risk Assessment', 'Optimization Models']
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent BI with automated insights, anomaly detection, and natural language queries.',
      icon: '🤖',
      price: 'Starting at $4,000/month',
      features: ['Automated insights', 'Anomaly detection', 'Natural language queries', 'Smart recommendations', 'Conversational BI'],
      benefits: ['Discover hidden patterns', 'Reduce analysis time by 80%', 'Enable self-service analytics'],
      marketPrice: '$6,500-16,000/month',
      category: 'AI-Powered BI',
      technologies: ['AI/ML', 'Natural Language Processing', 'Anomaly Detection', 'Recommendation Engines', 'Conversational AI']
    }
  ];

  const categories = [...new Set(biServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence services including analytics, data visualization, predictive modeling, and AI-powered insights." />
        <meta name="keywords" content="business intelligence, data analytics, data visualization, predictive analytics, BI consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Business Intelligence Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with advanced analytics and intelligent reporting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Explore BI Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our BI Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert data professionals delivering insights that drive real business value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Cutting-edge analytics with AI-powered insights and predictions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Insights</h3>
                <p className="text-gray-600">Live dashboards and real-time data streaming for instant decisions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Security</h3>
                <p className="text-gray-600">Enterprise-grade security with compliance and data governance</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 350% ROI within 12 months of implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized {category.toLowerCase()} services tailored to your business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {biServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Get BI Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* BI Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Business Intelligence Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive BI solutions that transform raw data into strategic business insights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
                <BarChart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600">Interactive dashboards and custom visualizations for better insights</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Machine learning models for forecasting and trend analysis</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Management</h3>
                <p className="text-gray-600">Data warehousing, ETL, and quality management solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                <p className="text-gray-600">KPI tracking and performance monitoring with automated insights</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <PieChart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Service BI</h3>
                <p className="text-gray-600">Empower users with self-service analytics and reporting tools</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Cpu className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Automated insights, anomaly detection, and natural language queries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our BI experts for a free consultation and custom analytics strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;