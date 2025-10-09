import React from 'react';
import { CheckCircle, BarChart, TrendingUp, Users, Database, Zap } from 'lucide-react';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      name: 'Data Visualization Dashboard',
      price: '$3,500/month',
      description: 'Interactive dashboards with real-time data visualization and analytics',
      features: [
        'Custom dashboard creation',
        'Real-time data updates',
        'Interactive charts and graphs',
        'Mobile-responsive design'
      ],
      icon: BarChart,
      benefits: [
        '50% faster decision making',
        'Real-time insights',
        'Improved data accessibility',
        'Enhanced collaboration'
      ]
    },
    {
      name: 'Predictive Analytics',
      price: '$5,000/month',
      description: 'Advanced predictive modeling and forecasting for business planning',
      features: [
        'Machine learning models',
        'Forecasting algorithms',
        'Trend analysis',
        'Risk assessment'
      ],
      icon: TrendingUp,
      benefits: [
        'Accurate predictions',
        'Risk mitigation',
        'Strategic planning',
        'Competitive advantage'
      ]
    },
    {
      name: 'Data Warehousing',
      price: '$4,500/month',
      description: 'Centralized data storage and management for enterprise analytics',
      features: [
        'Data integration',
        'ETL processes',
        'Data quality management',
        'Scalable storage'
      ],
      icon: Database,
      benefits: [
        'Unified data view',
        'Improved data quality',
        'Faster queries',
        'Cost optimization'
      ]
    },
    {
      name: 'Self-Service Analytics',
      price: '$2,500/month',
      description: 'Empower users with self-service analytics and reporting tools',
      features: [
        'Drag-and-drop interface',
        'Custom report builder',
        'Data exploration tools',
        'Automated insights'
      ],
      icon: Users,
      benefits: [
        'Reduced IT dependency',
        'Faster insights',
        'User empowerment',
        'Increased adoption'
      ]
    }
  ];

  const industries = [
    {
      title: 'Retail & E-commerce',
      description: 'Customer analytics, inventory optimization, and sales forecasting',
      benefits: ['20% increase in sales', '30% reduction in inventory costs', 'Improved customer experience', 'Better demand planning']
    },
    {
      title: 'Healthcare',
      description: 'Patient analytics, operational efficiency, and clinical outcomes',
      benefits: ['Improved patient outcomes', 'Reduced operational costs', 'Better resource allocation', 'Enhanced care quality']
    },
    {
      title: 'Manufacturing',
      description: 'Production analytics, quality control, and supply chain optimization',
      benefits: ['25% increase in efficiency', 'Reduced waste', 'Better quality control', 'Optimized supply chain']
    },
    {
      title: 'Financial Services',
      description: 'Risk management, fraud detection, and customer analytics',
      benefits: ['Enhanced risk assessment', 'Fraud prevention', 'Better customer insights', 'Regulatory compliance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Business Intelligence Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable insights with our comprehensive business intelligence solutions. 
            Make data-driven decisions and drive business growth with advanced analytics and visualization.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Dashboards Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Decisions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Data Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Business Intelligence Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
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

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Visualization</h3>
              <p className="text-gray-300">Power BI, Tableau, and custom visualization tools</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Processing</h3>
              <p className="text-gray-300">Apache Spark, Hadoop, and cloud data platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-300">Python, R, and advanced ML frameworks</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Unlock Your Data?
          </h2>
          <p className="text-purple-100 mb-6">
            Transform your data into actionable insights and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get BI Consultation
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligencePage;