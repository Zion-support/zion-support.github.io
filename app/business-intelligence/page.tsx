import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, BarChart, Zap, Shield, Cpu, Brain, Target, TrendingUp } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboards that provide real-time insights into business performance and key metrics.',
      icon: '📊',
      price: 'Starting at $2,500/month',
      features: ['Real-time data visualization', 'Custom dashboards', 'Interactive reports', 'Mobile access', 'Automated alerts'],
      benefits: ['Make decisions 10x faster', 'Identify trends immediately', 'Improve business performance'],
      marketPrice: '$4,000-8,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Superset', 'Custom Dashboards']
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered predictive models that forecast trends, customer behavior, and business outcomes.',
      icon: '🔮',
      price: 'Starting at $3,500/month',
      features: ['Demand forecasting', 'Customer churn prediction', 'Sales forecasting', 'Risk assessment', 'Scenario modeling'],
      benefits: ['Improve planning accuracy by 60%', 'Reduce risks', 'Optimize resource allocation'],
      marketPrice: '$6,000-12,000/month',
      category: 'Predictive Analytics',
      technologies: ['Python', 'R', 'TensorFlow', 'Scikit-learn', 'Prophet']
    },
    {
      title: 'Data Warehouse Design',
      description: 'Comprehensive data warehouse solutions for centralized data storage and management.',
      icon: '🏗️',
      price: 'Starting at $4,000/month',
      features: ['Data modeling', 'ETL processes', 'Data governance', 'Security implementation', 'Performance optimization'],
      benefits: ['Centralize all data sources', 'Improve data quality', 'Enable advanced analytics'],
      marketPrice: '$7,000-15,000/month',
      category: 'Data Management',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse', 'Apache Airflow']
    },
    {
      title: 'Automated Reporting',
      description: 'AI-powered automated report generation and distribution for stakeholders across the organization.',
      icon: '📋',
      price: 'Starting at $1,800/month',
      features: ['Automated report generation', 'Scheduled delivery', 'Custom formatting', 'Multi-format export', 'Access control'],
      benefits: ['Save 20 hours/week', 'Ensure consistency', 'Improve accessibility'],
      marketPrice: '$3,000-6,000/month',
      category: 'Reporting',
      technologies: ['Power BI', 'Tableau', 'Crystal Reports', 'JasperReports', 'Custom Solutions']
    },
    {
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior, preferences, and lifetime value for strategic decision making.',
      icon: '👥',
      price: 'Starting at $2,800/month',
      features: ['Customer segmentation', 'Behavior analysis', 'Lifetime value modeling', 'Churn prediction', 'Personalization insights'],
      benefits: ['Increase customer retention by 40%', 'Improve targeting', 'Boost customer satisfaction'],
      marketPrice: '$4,500-9,000/month',
      category: 'Customer Intelligence',
      technologies: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Custom ML Models', 'CRM Integration']
    },
    {
      title: 'Financial Intelligence',
      description: 'Comprehensive financial analytics and reporting for better financial planning and decision making.',
      icon: '💰',
      price: 'Starting at $3,200/month',
      features: ['Financial reporting', 'Budget analysis', 'Cost optimization', 'Revenue forecasting', 'Risk assessment'],
      benefits: ['Improve financial planning', 'Reduce costs by 25%', 'Optimize revenue streams'],
      marketPrice: '$5,500-11,000/month',
      category: 'Financial Analytics',
      technologies: ['SAP', 'Oracle', 'QuickBooks', 'Xero', 'Custom Financial Models']
    }
  ];

  const categories = [...new Set(biServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence solutions including real-time analytics, predictive modeling, and data visualization for data-driven decision making." />
        <meta name="keywords" content="business intelligence, data analytics, predictive analytics, data visualization, business intelligence consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Business Intelligence Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with advanced analytics and intelligent reporting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Start BI Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  View BI Solutions
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
                Why Choose Our BI Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Advanced analytics and intelligence solutions that drive data-driven decision making
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Insights</h3>
                <p className="text-gray-600">Get instant access to critical business metrics and performance data</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analytics</h3>
                <p className="text-gray-600">Machine learning algorithms that uncover hidden patterns and trends</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Intelligence</h3>
                <p className="text-gray-600">Forecast future trends and outcomes with advanced predictive models</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 12 months of implementation</p>
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
                  Advanced {category.toLowerCase()} services for comprehensive business intelligence
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
                          <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 40% vs market rates
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
                            <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
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

                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
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
                Our BI Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive business intelligence technologies and methodologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
                <p className="text-gray-600">Interactive dashboards and reports for clear data presentation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning</h3>
                <p className="text-gray-600">AI-powered analytics and predictive modeling</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Forecast trends and outcomes with advanced models</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Cpu className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Processing</h3>
                <p className="text-gray-600">ETL processes and data warehouse management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Analytics</h3>
                <p className="text-gray-600">Tailored solutions for specific business needs</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Zap className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Processing</h3>
                <p className="text-gray-600">Streaming analytics and instant insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Data into Intelligence?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our BI experts for a free consultation and custom analytics strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;