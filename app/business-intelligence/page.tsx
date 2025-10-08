import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, BarChart, TrendingUp, Database, Target } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Data Analytics & Visualization',
      description: 'Transform raw data into actionable insights with interactive dashboards',
      price: 'Starting at $1,800/month',
      features: [
        'Interactive dashboards',
        'Real-time analytics',
        'Custom visualizations',
        'Data storytelling',
        'Mobile access'
      ],
      icon: '📊',
      popular: true
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and predictive modeling for business decisions',
      price: 'Starting at $2,500/month',
      features: [
        'Machine learning models',
        'Forecasting algorithms',
        'Risk assessment',
        'Trend analysis',
        'Scenario planning'
      ],
      icon: '🔮',
      popular: true
    },
    {
      title: 'Data Warehouse Design',
      description: 'Centralized data storage and management for enterprise analytics',
      price: 'Starting at $3,000/month',
      features: [
        'Data modeling',
        'ETL processes',
        'Data quality management',
        'Scalable architecture',
        'Cloud integration'
      ],
      icon: '🏗️',
      popular: false
    },
    {
      title: 'Real-Time Reporting',
      description: 'Automated reporting systems with real-time data updates',
      price: 'Starting at $1,500/month',
      features: [
        'Automated reports',
        'Real-time updates',
        'Custom scheduling',
        'Multi-format export',
        'Alert systems'
      ],
      icon: '📈',
      popular: false
    },
    {
      title: 'Self-Service BI',
      description: 'Empower users with self-service analytics and reporting tools',
      price: 'Starting at $2,200/month',
      features: [
        'User-friendly interface',
        'Drag-and-drop analytics',
        'Ad-hoc reporting',
        'Data exploration',
        'Collaboration tools'
      ],
      icon: '👥',
      popular: false
    },
    {
      title: 'BI Consulting',
      description: 'Strategic guidance on business intelligence implementation and optimization',
      price: 'Starting at $2,000/month',
      features: [
        'BI strategy development',
        'Technology assessment',
        'Implementation planning',
        'Team training',
        'Ongoing support'
      ],
      icon: '💡',
      popular: false
    }
  ];

  const capabilities = [
    {
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources',
      icon: '🔗',
      benefits: ['Multi-source connectivity', 'Real-time synchronization', 'Data cleansing', 'API integration']
    },
    {
      title: 'Advanced Analytics',
      description: 'Sophisticated analytical capabilities for deep insights',
      icon: '🧠',
      benefits: ['Machine learning', 'Statistical analysis', 'Predictive modeling', 'AI-powered insights']
    },
    {
      title: 'Interactive Dashboards',
      description: 'Dynamic, user-friendly dashboards for data exploration',
      icon: '📱',
      benefits: ['Real-time updates', 'Customizable views', 'Mobile access', 'Drill-down capabilities']
    },
    {
      title: 'Automated Reporting',
      description: 'Automated report generation and distribution',
      icon: '📋',
      benefits: ['Scheduled reports', 'Email distribution', 'PDF/Excel export', 'Alert notifications']
    },
    {
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance',
      icon: '🛡️',
      benefits: ['Data quality management', 'Security controls', 'Compliance monitoring', 'Audit trails']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize query performance and system efficiency',
      icon: '⚡',
      benefits: ['Query optimization', 'Caching strategies', 'Resource management', 'Scalability planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced analytics and reporting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Explore BI Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Business Intelligence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Business Intelligence?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Business Intelligence (BI) is the process of collecting, analyzing, and presenting 
                business data to help organizations make informed decisions. Our BI solutions transform 
                raw data into actionable insights through advanced analytics, interactive dashboards, 
                and predictive modeling.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BarChart className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Data-Driven Decisions</h3>
                    <p className="text-gray-600">Make informed decisions based on real-time data and insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Performance Monitoring</h3>
                    <p className="text-gray-600">Track KPIs and performance metrics in real-time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Centralized Data</h3>
                    <p className="text-gray-600">Consolidate data from multiple sources into a single platform</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">BI Benefits</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-sm text-gray-600">Faster decision making</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">25%</div>
                    <div className="text-sm text-gray-600">Increase in revenue</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">60%</div>
                    <div className="text-sm text-gray-600">Reduction in reporting time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Intelligence Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete BI solutions from data integration to advanced analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              BI Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive business intelligence capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
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

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              How we build and deploy BI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Analyze business requirements and data sources</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Design data models and dashboard layouts</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Develop</h3>
              <p className="text-gray-600">Build and test BI solutions and dashboards</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600">Deploy solutions and provide training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our BI Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Leading expertise in business intelligence and data analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">BI Experts</h3>
              <p className="text-gray-600">Certified data analysts and BI specialists</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Successful BI implementations across industries</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">AI-powered insights and predictive analytics</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored BI solutions for your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our BI experts for a consultation and custom analytics solution
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessIntelligencePage;