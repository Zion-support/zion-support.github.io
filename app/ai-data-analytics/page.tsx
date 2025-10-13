import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Brain, Zap, CheckCircle, ArrowRight, Star } from 'lucide-react';

const AiDataAnalyticsPage: React.FC = () => {
  const analyticsSolutions = [
    {
      title: 'AI Business Intelligence Platform',
      description: 'Comprehensive data analytics platform with real-time insights, predictive modeling, and automated reporting.',
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Interactive dashboards',
        'Automated reporting',
        'Data visualization tools',
        'API integrations'
      ],
      benefits: [
        'Increase decision speed by 60%',
        'Reduce manual reporting by 85%',
        'Identify trends 3x faster',
        'Improve forecast accuracy by 40%'
      ],
      price: '$2,000-4,000/month',
      category: 'Business Intelligence'
    },
    {
      title: 'AI Customer Analytics Suite',
      description: 'Comprehensive customer data analysis platform with behavioral insights and churn prediction.',
      icon: <Brain className="w-6 h-6" />,
      features: [
        'Customer segmentation',
        'Behavioral analysis',
        'Churn prediction',
        'Personalized recommendations',
        'Lifetime value calculation',
        'A/B testing tools'
      ],
      benefits: [
        'Increase customer retention by 35%',
        'Boost conversion rates by 25%',
        'Reduce churn by 40%',
        'Improve customer satisfaction'
      ],
      price: '$899/month',
      category: 'Customer Analytics'
    },
    {
      title: 'AI Financial Analytics',
      description: 'Advanced financial data analysis with risk assessment, fraud detection, and investment insights.',
      icon: <Zap className="w-6 h-6" />,
      features: [
        'Risk assessment models',
        'Fraud detection',
        'Investment analysis',
        'Market trend analysis',
        'Compliance monitoring',
        'Real-time alerts'
      ],
      benefits: [
        'Reduce financial risks by 50%',
        'Detect fraud 90% faster',
        'Improve investment returns',
        'Ensure compliance'
      ],
      price: '$1,500/month',
      category: 'Financial Analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional AI data analytics solutions by Zion Tech Group. Transform your data into actionable insights." />
        <meta name="keywords" content="AI data analytics, business intelligence, predictive analytics, data visualization, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Data Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our comprehensive AI-powered analytics solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
              View Solutions
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Analytics Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI analytics tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {analyticsSolutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{solution.price}</div>
                      <div className="text-sm text-gray-400">{solution.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Analytics Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Insights</h3>
                <p className="text-gray-300">
                  Get instant insights from your data with real-time processing and analysis.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
                <p className="text-gray-300">
                  Advanced machine learning algorithms provide accurate predictions and insights.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-300">
                  Process and analyze large datasets in seconds with our optimized platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Easy to Use</h3>
                <p className="text-gray-300">
                  Intuitive dashboards and drag-and-drop tools make analytics accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your analytics journey today and unlock the power of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiDataAnalyticsPage;