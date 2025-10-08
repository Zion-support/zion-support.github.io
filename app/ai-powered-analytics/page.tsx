import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, BarChart, TrendingUp, Brain, Zap, Target, Shield } from 'lucide-react';

const AIPoweredAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      title: 'Real-Time Business Intelligence Dashboard',
      description: 'AI-powered analytics platform that provides instant insights into your business performance with predictive analytics and automated reporting.',
      icon: '📊',
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Automated report generation',
        'Custom KPI tracking',
        'Multi-source data integration',
        'Mobile-responsive dashboards',
        'Advanced filtering and drill-down',
        'Export to multiple formats'
      ],
      benefits: [
        'Make data-driven decisions 10x faster',
        'Identify trends before competitors',
        'Reduce manual reporting by 90%',
        'Increase revenue by 25% through insights'
      ],
      marketPrice: '$500-1200/month',
      category: 'Business Intelligence',
      technologies: ['Tableau', 'Power BI', 'Python', 'Machine Learning', 'React', 'PostgreSQL'],
      useCases: [
        'E-commerce sales optimization',
        'Customer behavior analysis',
        'Supply chain monitoring',
        'Financial performance tracking'
      ]
    },
    {
      title: 'AI Customer Sentiment Analysis Platform',
      description: 'Advanced sentiment analysis tool that monitors customer feedback across all channels and provides actionable insights for improving customer satisfaction.',
      icon: '😊',
      price: '$199/month',
      features: [
        'Multi-channel sentiment monitoring',
        'Real-time sentiment scoring',
        'Trend analysis and alerts',
        'Competitor sentiment comparison',
        'Custom sentiment categories',
        'API integration capabilities',
        'Historical data analysis',
        'Automated response suggestions'
      ],
      benefits: [
        'Improve customer satisfaction by 40%',
        'Catch negative sentiment early',
        'Optimize customer service strategies',
        'Increase customer retention by 30%'
      ],
      marketPrice: '$350-800/month',
      category: 'Customer Analytics',
      technologies: ['NLP', 'Machine Learning', 'Python', 'React', 'MongoDB', 'APIs'],
      useCases: [
        'Social media monitoring',
        'Review analysis',
        'Customer support optimization',
        'Brand reputation management'
      ]
    },
    {
      title: 'Predictive Sales Forecasting Engine',
      description: 'Machine learning-powered sales forecasting that analyzes historical data, market trends, and external factors to predict future sales with high accuracy.',
      icon: '📈',
      price: '$399/month',
      features: [
        'Advanced forecasting algorithms',
        'Multiple forecasting models',
        'Seasonality detection',
        'External factor integration',
        'Confidence intervals',
        'Scenario planning',
        'Automated model retraining',
        'Performance tracking'
      ],
      benefits: [
        'Improve forecast accuracy by 60%',
        'Optimize inventory management',
        'Reduce stockouts by 50%',
        'Increase sales planning efficiency'
      ],
      marketPrice: '$600-1500/month',
      category: 'Sales Analytics',
      technologies: ['Python', 'TensorFlow', 'Prophet', 'ARIMA', 'React', 'PostgreSQL'],
      useCases: [
        'Retail sales forecasting',
        'Demand planning',
        'Revenue projections',
        'Resource allocation'
      ]
    },
    {
      title: 'AI-Powered Marketing Attribution Platform',
      description: 'Intelligent marketing attribution that uses machine learning to accurately track and attribute conversions across all marketing channels and touchpoints.',
      icon: '🎯',
      price: '$249/month',
      features: [
        'Multi-touch attribution modeling',
        'Cross-device tracking',
        'Customer journey mapping',
        'ROI calculation per channel',
        'Attribution confidence scoring',
        'Custom attribution windows',
        'Integration with major platforms',
        'Real-time attribution updates'
      ],
      benefits: [
        'Optimize marketing spend by 35%',
        'Identify high-value channels',
        'Improve campaign performance',
        'Increase marketing ROI by 50%'
      ],
      marketPrice: '$400-1000/month',
      category: 'Marketing Analytics',
      technologies: ['Machine Learning', 'Python', 'Google Analytics', 'Facebook API', 'React'],
      useCases: [
        'Digital marketing optimization',
        'Campaign performance analysis',
        'Budget allocation decisions',
        'Customer acquisition cost analysis'
      ]
    },
    {
      title: 'Intelligent Supply Chain Analytics',
      description: 'AI-driven supply chain optimization platform that analyzes supplier performance, demand patterns, and logistics to optimize your entire supply chain.',
      icon: '🚚',
      price: '$349/month',
      features: [
        'Supplier performance analysis',
        'Demand forecasting',
        'Logistics optimization',
        'Risk assessment and alerts',
        'Cost optimization recommendations',
        'Sustainability tracking',
        'Real-time monitoring',
        'Predictive maintenance alerts'
      ],
      benefits: [
        'Reduce supply chain costs by 25%',
        'Improve delivery times by 40%',
        'Minimize supply disruptions',
        'Increase supplier reliability'
      ],
      marketPrice: '$500-1200/month',
      category: 'Supply Chain Analytics',
      technologies: ['Python', 'Machine Learning', 'IoT', 'React', 'PostgreSQL'],
      useCases: [
        'Inventory optimization',
        'Supplier selection',
        'Route optimization',
        'Risk management'
      ]
    },
    {
      title: 'AI Financial Performance Analyzer',
      description: 'Comprehensive financial analytics platform that analyzes financial data, identifies trends, and provides insights for better financial decision-making.',
      icon: '💰',
      price: '$279/month',
      features: [
        'Financial statement analysis',
        'Cash flow forecasting',
        'Profitability analysis',
        'Risk assessment',
        'Budget variance analysis',
        'Financial KPI tracking',
        'Automated financial reports',
        'Compliance monitoring'
      ],
      benefits: [
        'Improve financial visibility',
        'Optimize cash flow management',
        'Reduce financial risks',
        'Increase profitability by 20%'
      ],
      marketPrice: '$450-1000/month',
      category: 'Financial Analytics',
      technologies: ['Python', 'Machine Learning', 'Excel Integration', 'React', 'PostgreSQL'],
      useCases: [
        'Financial planning and analysis',
        'Cash flow optimization',
        'Risk management',
        'Investment analysis'
      ]
    }
  ];

  const categories = [...new Set(analyticsServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>AI-Powered Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for business intelligence, customer insights, and predictive analytics. Transform your data into actionable insights." />
        <meta name="keywords" content="AI analytics, business intelligence, predictive analytics, data visualization, machine learning analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered Analytics
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with cutting-edge AI analytics solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View Demo
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
                Why Choose Our AI Analytics?
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI technology that delivers insights you can trust and act upon
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Machine learning algorithms that discover hidden patterns and trends</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Processing</h3>
                <p className="text-gray-600">Get insights instantly as data flows into your system</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Results</h3>
                <p className="text-gray-600">Clear, actionable insights that drive business decisions</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with SOC 2 compliance</p>
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
                  Specialized AI analytics tools for {category.toLowerCase()} professionals
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {analyticsServices
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
                        <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.map((useCase, useCaseIndex) => (
                            <span key={useCaseIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                              {useCase}
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
                        Start Free Trial
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our analytics experts for a free consultation and custom solution design
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

export default AIPoweredAnalyticsPage;