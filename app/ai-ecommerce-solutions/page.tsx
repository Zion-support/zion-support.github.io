import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ShoppingCart, CreditCard, Package, BarChart3 } from 'lucide-react';

const AIEcommerceSolutionsPage: React.FC = () => {
  const ecommerceServices = [
    {
      title: 'AI-Powered E-commerce Platform',
      description: 'Complete e-commerce solution with AI-driven personalization, inventory management, and automated customer service.',
      icon: '🛒',
      price: '$1,999/month',
      features: [
        'AI product recommendations',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer behavior analysis',
        'Automated customer service',
        'Multi-channel selling',
        'Payment processing',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase conversion by 45%',
        'Reduce cart abandonment by 60%',
        'Boost average order value by 35%',
        'Save 30+ hours per week'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'E-commerce Platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Stripe', 'Shopify API'],
      useCases: ['Online Retail', 'B2B Commerce', 'Marketplace', 'Subscription Business']
    },
    {
      title: 'AI Inventory Management System',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and waste reduction.',
      icon: '📦',
      price: '$899/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock optimization',
        'Supplier management',
        'Cost analysis',
        'Waste reduction',
        'Multi-location support',
        'Real-time tracking'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 40%',
        'Eliminate waste by 50%',
        'Improve cash flow'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Inventory Management',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'APIs', 'Machine Learning'],
      useCases: ['Retail', 'Manufacturing', 'Food & Beverage', 'Pharmaceuticals']
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Advanced customer service automation with chatbots, ticket routing, and automated resolution workflows.',
      icon: '💬',
      price: '$599/month',
      features: [
        'Intelligent chatbots',
        'Ticket classification',
        'Automated responses',
        'Escalation management',
        'Multi-language support',
        'Knowledge base integration',
        'Sentiment analysis',
        'Performance analytics'
      ],
      benefits: [
        'Reduce support costs by 65%',
        'Improve response time by 90%',
        'Increase customer satisfaction',
        'Provide 24/7 support'
      ],
      marketPrice: '$1,000-2,000/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Dialogflow', 'Rasa', 'Node.js', 'MongoDB', 'AI/ML'],
      useCases: ['E-commerce', 'SaaS', 'Retail', 'Service Business']
    },
    {
      title: 'AI Marketing Automation Suite',
      description: 'Comprehensive marketing automation with AI-powered campaigns, email marketing, and social media management.',
      icon: '📈',
      price: '$799/month',
      features: [
        'Email marketing automation',
        'Social media management',
        'Ad campaign optimization',
        'Customer segmentation',
        'A/B testing automation',
        'Content personalization',
        'ROI tracking',
        'Cross-channel analytics'
      ],
      benefits: [
        'Increase email open rates by 50%',
        'Boost social engagement by 80%',
        'Improve ad performance by 60%',
        'Reduce marketing costs by 40%'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Marketing Automation',
      technologies: ['HubSpot', 'Mailchimp', 'Facebook API', 'Google Ads', 'Python', 'Machine Learning'],
      useCases: ['E-commerce', 'SaaS', 'Lead Generation', 'Customer Retention']
    },
    {
      title: 'AI Payment & Fraud Detection',
      description: 'Advanced payment processing with AI-powered fraud detection, risk assessment, and chargeback prevention.',
      icon: '💳',
      price: '$1,299/month',
      features: [
        'Real-time fraud detection',
        'Risk scoring algorithms',
        'Chargeback prevention',
        'Payment optimization',
        'Multi-currency support',
        'Compliance management',
        'Transaction analytics',
        'API integration'
      ],
      benefits: [
        'Reduce fraud by 95%',
        'Lower chargeback rates by 80%',
        'Increase payment success rates',
        'Ensure compliance'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Payment Processing',
      technologies: ['Stripe', 'PayPal', 'Machine Learning', 'Python', 'Redis', 'APIs'],
      useCases: ['E-commerce', 'Marketplace', 'Subscription', 'High-risk Business']
    },
    {
      title: 'AI Analytics & Business Intelligence',
      description: 'Comprehensive analytics platform with AI-powered insights, customer behavior analysis, and predictive modeling.',
      icon: '📊',
      price: '$1,499/month',
      features: [
        'Customer behavior analysis',
        'Sales forecasting',
        'Product performance tracking',
        'Market trend analysis',
        'Custom dashboards',
        'Real-time reporting',
        'Predictive analytics',
        'ROI optimization'
      ],
      benefits: [
        'Improve decision making',
        'Increase sales by 30%',
        'Optimize product mix',
        'Identify growth opportunities'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Analytics',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'D3.js', 'Machine Learning'],
      useCases: ['E-commerce', 'Retail', 'Marketplace', 'Subscription Business']
    }
  ];

  const ecommerceFeatures = [
    {
      title: 'AI Personalization',
      description: 'Deliver personalized experiences to every customer',
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Real-Time Analytics',
      description: 'Make data-driven decisions with real-time insights',
      icon: <BarChart3 className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Automated Operations',
      description: 'Streamline operations with intelligent automation',
      icon: <Zap className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Secure Payments',
      description: 'Bank-level security for all transactions',
      icon: <Shield className="w-8 h-8 text-red-600" />
    }
  ];

  const industryStats = [
    { metric: '45%', description: 'Average Conversion Increase' },
    { metric: '60%', description: 'Cart Abandonment Reduction' },
    { metric: '35%', description: 'Average Order Value Boost' },
    { metric: '95%', description: 'Fraud Detection Accuracy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Helmet>
        <title>AI E-commerce Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered e-commerce solutions including personalized shopping, inventory management, payment processing, and marketing automation. Boost your online sales with cutting-edge technology." />
        <meta name="keywords" content="AI e-commerce, online store, e-commerce platform, inventory management, payment processing, marketing automation, customer service" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI E-commerce Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Transform your online business with AI-powered e-commerce solutions that boost sales, reduce costs, and enhance customer experience
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
                ✉️ Get E-commerce Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Our AI e-commerce solutions deliver measurable improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our E-commerce Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered tools for every aspect of e-commerce
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Boost Sales Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our E-commerce Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology designed specifically for e-commerce success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our e-commerce clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Zion Tech Group's AI e-commerce platform increased our online sales by 150% in just 6 months. The personalized recommendations are incredible!"</p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CEO, Fashion Forward</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"The AI inventory management system reduced our stockouts by 80% and saved us $500K annually. Highly recommended!"</p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">Operations Director, TechGear</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Their AI customer service automation reduced our support costs by 70% while improving customer satisfaction. Amazing results!"</p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-sm text-gray-500">Customer Success Manager, HomeDecor Plus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your E-commerce?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get a free e-commerce audit and discover how AI can boost your online sales
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
  );
};

export default AIEcommerceSolutionsPage;