import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Target, BarChart3, CheckCircle, ArrowRight, Star } from 'lucide-react';

const AiEcommerceSolutionsPage: React.FC = () => {
  const ecommerceSolutions = [
    {
      title: 'AI E-commerce Platform',
      description: 'Complete AI-powered e-commerce solution with intelligent features and automation.',
      icon: <ShoppingCart className="w-6 h-6" />,
      features: [
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer behavior analysis',
        'Automated customer service',
        'Multi-channel selling',
        'Payment processing',
        'Order tracking'
      ],
      benefits: [
        'Increase conversion rates by 35%',
        'Reduce cart abandonment by 50%',
        'Automated inventory management',
        '24/7 customer support'
      ],
      price: '$1,999/month',
      category: 'E-commerce Platform'
    },
    {
      title: 'AI Product Recommendation Engine',
      description: 'Intelligent product recommendations based on customer behavior and preferences.',
      icon: <Target className="w-6 h-6" />,
      features: [
        'Machine learning algorithms',
        'Real-time recommendations',
        'Cross-selling and upselling',
        'Personalized product feeds',
        'A/B testing capabilities',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase average order value by 25%',
        'Boost conversion rates by 30%',
        'Improve customer engagement',
        'Reduce bounce rates'
      ],
      price: '$499/month',
      category: 'Recommendation Engine'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics and insights for e-commerce performance optimization.',
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        'Sales analytics',
        'Customer insights',
        'Performance metrics',
        'Predictive analytics',
        'Custom reports',
        'Real-time monitoring'
      ],
      benefits: [
        'Data-driven decisions',
        'Identify growth opportunities',
        'Optimize marketing spend',
        'Improve ROI'
      ],
      price: '$799/month',
      category: 'Analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI E-commerce Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional AI e-commerce solutions by Zion Tech Group. Transform your online business with intelligent features and automation." />
        <meta name="keywords" content="AI e-commerce, online store, e-commerce platform, AI solutions, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI E-commerce Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your online business with our comprehensive AI-powered e-commerce solutions. 
            Increase sales, improve customer experience, and optimize operations.
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
                E-commerce Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI e-commerce tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ecommerceSolutions.map((solution, index) => (
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
                Why Choose Our E-commerce Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive sales and business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Increase Sales</h3>
                <p className="text-gray-300">
                  Boost conversion rates and average order value with AI-powered features.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Personalized Experience</h3>
                <p className="text-gray-300">
                  Deliver personalized shopping experiences that keep customers coming back.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Insights</h3>
                <p className="text-gray-300">
                  Make informed decisions with comprehensive analytics and reporting.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Easy to Use</h3>
                <p className="text-gray-300">
                  Intuitive interfaces and drag-and-drop tools make setup simple.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your E-commerce Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI-powered e-commerce journey today and see the difference.
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

export default AiEcommerceSolutionsPage;