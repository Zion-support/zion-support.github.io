import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, ShoppingCart, Package, CreditCard, Users } from 'lucide-react';

const AIEcommerceSolutionsPage: React.FC = () => {
  const ecommerceServices = [
    {
      title: 'AI Product Recommendation Engine',
      description: 'Intelligent product recommendations that increase sales and improve customer experience with personalized suggestions.',
      icon: '🎯',
      price: '$399/month',
      features: [
        'Personalized Recommendations',
        'Cross-sell & Upsell',
        'Real-time Suggestions',
        'Behavioral Analysis',
        'A/B Testing',
        'Performance Analytics',
        'Multi-channel Integration',
        'Custom Algorithms'
      ],
      benefits: [
        'Increase sales by 25-40%',
        'Improve conversion rates by 30%',
        'Reduce cart abandonment by 20%',
        'Boost average order value by 35%',
        'Enhance customer satisfaction'
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'Recommendation Engine',
      technologies: ['Machine Learning', 'Collaborative Filtering', 'Content-based Filtering', 'Real-time Processing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Inventory Management',
      description: 'Smart inventory optimization with demand forecasting, automated reordering, and waste reduction.',
      icon: '📦',
      price: '$599/month',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Stock Optimization',
        'Waste Reduction',
        'Supplier Management',
        'Real-time Tracking',
        'Predictive Analytics',
        'Cost Optimization'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Eliminate stockouts by 90%',
        'Reduce waste by 50%',
        'Improve cash flow by 25%',
        'Optimize storage space'
      ],
      marketPrice: '$1,500-4,000/month',
      category: 'Inventory Management',
      technologies: ['Time Series Analysis', 'Machine Learning', 'Supply Chain AI', 'IoT Integration', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Service Chatbot',
      description: 'Intelligent customer support with 24/7 availability, order tracking, and personalized assistance.',
      icon: '🤖',
      price: '$299/month',
      features: [
        '24/7 Customer Support',
        'Order Tracking',
        'Product Information',
        'Return Processing',
        'Multi-language Support',
        'Sentiment Analysis',
        'Human Handoff',
        'Performance Analytics'
      ],
      benefits: [
        'Handle 80% of customer queries',
        'Reduce response time to seconds',
        'Improve customer satisfaction by 40%',
        'Reduce support costs by 60%',
        'Scale support operations'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Dialogflow', 'Custom Chatbots', 'API Integration', 'Sentiment Analysis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Dynamic Pricing Engine',
      description: 'Intelligent pricing optimization based on demand, competition, and market conditions for maximum profitability.',
      icon: '💰',
      price: '$799/month',
      features: [
        'Dynamic Pricing Rules',
        'Competitor Analysis',
        'Demand-based Pricing',
        'Seasonal Adjustments',
        'A/B Testing',
        'Profit Optimization',
        'Real-time Updates',
        'Performance Monitoring'
      ],
      benefits: [
        'Increase profit margins by 15-25%',
        'Optimize pricing strategies',
        'Respond to market changes',
        'Maximize revenue potential',
        'Competitive advantage'
      ],
      marketPrice: '$2,000-5,000/month',
      category: 'Pricing Optimization',
      technologies: ['Machine Learning', 'Competitor APIs', 'Price Analytics', 'Real-time Processing', 'Optimization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Fraud Detection System',
      description: 'Advanced fraud prevention with real-time monitoring, risk scoring, and automated protection.',
      icon: '🛡️',
      price: '$499/month',
      features: [
        'Real-time Fraud Detection',
        'Risk Scoring',
        'Transaction Monitoring',
        'Pattern Recognition',
        'Automated Blocking',
        'False Positive Reduction',
        'Compliance Reporting',
        'Machine Learning Updates'
      ],
      benefits: [
        'Prevent 99.9% of fraud attempts',
        'Reduce false positives by 80%',
        'Save millions in fraud losses',
        'Improve customer trust',
        'Ensure compliance'
      ],
      marketPrice: '$1,200-3,500/month',
      category: 'Fraud Prevention',
      technologies: ['Machine Learning', 'Anomaly Detection', 'Real-time Processing', 'Risk Scoring', 'Compliance'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Visual Search Engine',
      description: 'Image-based product search allowing customers to find products by uploading photos or screenshots.',
      icon: '🔍',
      price: '$399/month',
      features: [
        'Image Recognition',
        'Visual Similarity Search',
        'Color & Style Matching',
        'Multi-angle Support',
        'Mobile Optimization',
        'Search Analytics',
        'API Integration',
        'Custom Training'
      ],
      benefits: [
        'Improve product discoverability',
        'Increase conversion rates by 20%',
        'Reduce search friction',
        'Enhance user experience',
        'Boost mobile sales'
      ],
      marketPrice: '$1,000-2,500/month',
      category: 'Visual Search',
      technologies: ['Computer Vision', 'Image Recognition', 'Similarity Search', 'Mobile APIs', 'Custom Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Personalization Platform',
      description: 'Comprehensive personalization across all touchpoints including homepage, emails, and product pages.',
      icon: '🎨',
      price: '$699/month',
      features: [
        'Homepage Personalization',
        'Email Personalization',
        'Product Page Customization',
        'Behavioral Targeting',
        'A/B Testing',
        'Real-time Updates',
        'Cross-device Tracking',
        'Performance Analytics'
      ],
      benefits: [
        'Increase engagement by 50%',
        'Boost conversion rates by 35%',
        'Improve customer retention',
        'Enhance user experience',
        'Maximize revenue per visitor'
      ],
      marketPrice: '$1,800-4,500/month',
      category: 'Personalization',
      technologies: ['Machine Learning', 'Behavioral Analytics', 'Real-time Processing', 'A/B Testing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'End-to-end supply chain intelligence with route optimization, demand planning, and cost reduction.',
      icon: '🚚',
      price: '$999/month',
      features: [
        'Route Optimization',
        'Demand Planning',
        'Supplier Selection',
        'Cost Optimization',
        'Risk Management',
        'Sustainability Tracking',
        'Real-time Monitoring',
        'Predictive Analytics'
      ],
      benefits: [
        'Reduce supply chain costs by 25%',
        'Improve delivery times by 30%',
        'Minimize supply disruptions',
        'Optimize supplier relationships',
        'Enhance sustainability'
      ],
      marketPrice: '$2,500-6,000/month',
      category: 'Supply Chain',
      technologies: ['Supply Chain AI', 'Optimization Algorithms', 'IoT Integration', 'Predictive Analytics', 'Risk Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI E-commerce Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered e-commerce solutions including recommendation engines, inventory management, and fraud detection. Starting at $299/month." />
        <meta name="keywords" content="ai ecommerce, recommendation engine, inventory management, fraud detection, personalization, supply chain optimization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI E-commerce Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your e-commerce business with AI-powered solutions that increase sales, optimize operations, and enhance customer experience.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">E-commerce Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$299</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Sales Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Fraud Prevention</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your E-commerce AI Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your E-commerce Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI e-commerce solutions today and boost your sales and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEcommerceSolutionsPage;