import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Brain, Target, BarChart, Clock, Users, TrendingUp, Globe, MessageSquare, Eye, Sparkles } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      title: 'AI Business Intelligence Dashboard',
      description: 'Advanced AI-powered business intelligence with real-time analytics, predictive insights, and automated reporting.',
      icon: '📊',
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Custom KPI tracking',
        'Multi-source data integration',
        'Mobile-responsive dashboards'
      ],
      benefits: [
        'Increase decision speed by 50%',
        'Reduce manual reporting by 80%',
        'Identify trends 3x faster',
        'Improve forecasting accuracy by 40%'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Analytics Platform',
      description: 'Intelligent customer behavior analysis with segmentation, churn prediction, and personalized insights.',
      icon: '👥',
      price: '$199/month',
      features: [
        'Customer segmentation analysis',
        'Churn prediction modeling',
        'Lifetime value prediction',
        'Behavioral pattern recognition',
        'Personalization recommendations',
        'Sentiment analysis'
      ],
      benefits: [
        'Reduce customer churn by 35%',
        'Increase customer lifetime value by 45%',
        'Improve personalization by 60%',
        'Enhance customer experience'
      ],
      marketPrice: '$400-800/month',
      technologies: ['Machine Learning', 'Python', 'Scikit-learn', 'React', 'MongoDB'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Marketing Analytics Suite',
      description: 'Comprehensive marketing analytics with attribution modeling, ROI optimization, and campaign performance insights.',
      icon: '📈',
      price: '$249/month',
      features: [
        'Multi-touch attribution modeling',
        'ROI optimization algorithms',
        'Campaign performance analysis',
        'Customer journey mapping',
        'A/B testing automation',
        'Budget allocation optimization'
      ],
      benefits: [
        'Increase marketing ROI by 65%',
        'Optimize ad spend by 40%',
        'Improve campaign performance by 50%',
        'Reduce customer acquisition costs'
      ],
      marketPrice: '$600-1200/month',
      technologies: ['Google Analytics API', 'Facebook Ads API', 'Machine Learning', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Analytics Engine',
      description: 'Advanced financial analytics with risk assessment, fraud detection, and automated financial reporting.',
      icon: '💰',
      price: '$399/month',
      features: [
        'Risk assessment and modeling',
        'Fraud detection algorithms',
        'Financial forecasting',
        'Automated compliance reporting',
        'Cash flow optimization',
        'Investment analysis'
      ],
      benefits: [
        'Reduce financial risks by 50%',
        'Detect fraud with 99.5% accuracy',
        'Improve cash flow by 30%',
        'Automate compliance reporting'
      ],
      marketPrice: '$800-1500/month',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Supply Chain Analytics',
      description: 'Intelligent supply chain optimization with demand forecasting, inventory management, and logistics analytics.',
      icon: '📦',
      price: '$349/month',
      features: [
        'Demand forecasting models',
        'Inventory optimization',
        'Supplier performance analysis',
        'Logistics route optimization',
        'Cost reduction analytics',
        'Risk management insights'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve demand accuracy by 40%',
        'Optimize logistics routes by 30%',
        'Minimize supply chain risks'
      ],
      marketPrice: '$700-1400/month',
      technologies: ['Time Series Analysis', 'Machine Learning', 'Python', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Analytics Pro',
      description: 'Advanced social media analytics with sentiment analysis, influencer tracking, and engagement optimization.',
      icon: '📱',
      price: '$179/month',
      features: [
        'Sentiment analysis across platforms',
        'Influencer identification and tracking',
        'Engagement optimization',
        'Content performance analysis',
        'Competitor benchmarking',
        'Trend prediction'
      ],
      benefits: [
        'Increase social engagement by 80%',
        'Identify top-performing content',
        'Optimize posting times',
        'Track competitor strategies'
      ],
      marketPrice: '$300-600/month',
      technologies: ['NLP', 'Social Media APIs', 'Machine Learning', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for business intelligence, customer analytics, marketing insights, and more. Transform your data into actionable insights." />
        <meta name="keywords" content="AI analytics, business intelligence, data analytics, predictive analytics, customer analytics, marketing analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Analytics Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with advanced AI-powered analytics solutions. Make smarter decisions faster.
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
                  ✉️ Get Free Consultation
                </a>
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
                Advanced AI technology combined with deep analytics expertise to deliver actionable insights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Advanced machine learning for deeper data analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600">Get insights as they happen with real-time processing</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Forecast trends and make proactive decisions</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Dashboards</h3>
                <p className="text-gray-600">Tailored visualizations for your specific needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Analytics Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI-powered analytics for every business function
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save up to 60% vs market rates
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
                        <span key={techIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
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

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contact our AI analytics experts for a free consultation and custom analytics strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            <div className="text-sm text-green-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsPage;