import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, DollarSign, Shield, BarChart3, CreditCard } from 'lucide-react';

const AIFintechSolutionsPage: React.FC = () => {
  const fintechServices = [
    {
      title: 'AI Trading Algorithm Platform',
      description: 'Advanced algorithmic trading system with machine learning models that adapt to market conditions in real-time.',
      icon: '📈',
      price: '$1,999/month',
      features: [
        'Real-time Market Analysis',
        'Machine Learning Models',
        'Risk Management',
        'Portfolio Optimization',
        'Backtesting Engine',
        'Live Trading Execution',
        'Performance Analytics',
        'Custom Strategies'
      ],
      benefits: [
        'Increase trading returns by 25-40%',
        'Reduce risk exposure by 30%',
        'Execute trades in milliseconds',
        'Adapt to market changes automatically',
        'Minimize emotional trading decisions'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Algorithmic Trading',
      technologies: ['Machine Learning', 'Real-time Processing', 'Market APIs', 'Risk Models', 'Backtesting'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Fraud Detection System',
      description: 'Advanced fraud prevention system that detects 99.9% of fraudulent transactions while reducing false positives by 85%.',
      icon: '🛡️',
      price: '$899/month',
      features: [
        'Real-time Transaction Monitoring',
        'Behavioral Analysis',
        'Machine Learning Models',
        'Risk Scoring',
        'Device Fingerprinting',
        'Pattern Recognition',
        'Alert Management',
        'Compliance Reporting'
      ],
      benefits: [
        'Detect 99.9% of fraud attempts',
        'Reduce false positives by 85%',
        'Prevent financial losses',
        'Maintain regulatory compliance',
        'Protect customer trust'
      ],
      marketPrice: '$2,500-8,000/month',
      category: 'Fraud Prevention',
      technologies: ['Machine Learning', 'Behavioral Analytics', 'Real-time Processing', 'Risk Scoring', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Credit Scoring Platform',
      description: 'Intelligent credit assessment system that provides more accurate risk evaluation using alternative data sources.',
      icon: '💳',
      price: '$1,299/month',
      features: [
        'Alternative Data Analysis',
        'Machine Learning Models',
        'Real-time Scoring',
        'Risk Segmentation',
        'Regulatory Compliance',
        'API Integration',
        'Custom Scorecards',
        'Performance Monitoring'
      ],
      benefits: [
        'Improve approval rates by 20%',
        'Reduce default rates by 15%',
        'Enable faster decisions',
        'Include underserved populations',
        'Maintain regulatory compliance'
      ],
      marketPrice: '$3,500-12,000/month',
      category: 'Credit Scoring',
      technologies: ['Machine Learning', 'Alternative Data', 'Risk Models', 'API Integration', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Robo-Advisor Platform',
      description: 'Intelligent investment management platform that provides personalized portfolio recommendations and automated rebalancing.',
      icon: '🤖',
      price: '$1,599/month',
      features: [
        'Portfolio Optimization',
        'Risk Assessment',
        'Automated Rebalancing',
        'Tax Optimization',
        'Goal-based Investing',
        'Market Analysis',
        'Client Communication',
        'Performance Tracking'
      ],
      benefits: [
        'Lower management fees by 60%',
        'Improve portfolio performance by 15%',
        'Provide 24/7 management',
        'Enable personalized strategies',
        'Scale to unlimited clients'
      ],
      marketPrice: '$4,000-15,000/month',
      category: 'Robo-Advisory',
      technologies: ['Portfolio Optimization', 'Machine Learning', 'Risk Models', 'API Integration', 'Mobile Apps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Insurance Underwriting',
      description: 'Intelligent insurance underwriting system that accelerates decision-making and improves risk assessment accuracy.',
      icon: '🏥',
      price: '$1,799/month',
      features: [
        'Automated Risk Assessment',
        'Predictive Modeling',
        'Real-time Pricing',
        'Claims Prediction',
        'Fraud Detection',
        'Regulatory Compliance',
        'API Integration',
        'Custom Models'
      ],
      benefits: [
        'Reduce underwriting time by 70%',
        'Improve risk assessment by 25%',
        'Lower operational costs by 40%',
        'Enable real-time decisions',
        'Maintain regulatory compliance'
      ],
      marketPrice: '$5,000-20,000/month',
      category: 'Insurance Tech',
      technologies: ['Machine Learning', 'Predictive Analytics', 'Risk Models', 'API Integration', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Payment Processing',
      description: 'Intelligent payment processing system with fraud prevention, optimization, and real-time analytics.',
      icon: '💸',
      price: '$699/month',
      features: [
        'Multi-channel Processing',
        'Fraud Prevention',
        'Payment Optimization',
        'Real-time Analytics',
        'Chargeback Management',
        'Currency Conversion',
        'API Integration',
        'Custom Reporting'
      ],
      benefits: [
        'Increase approval rates by 15%',
        'Reduce processing costs by 20%',
        'Minimize chargebacks by 30%',
        'Enable global payments',
        'Provide real-time insights'
      ],
      marketPrice: '$2,000-8,000/month',
      category: 'Payment Processing',
      technologies: ['Payment APIs', 'Machine Learning', 'Fraud Detection', 'Real-time Processing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting system that ensures adherence to financial regulations.',
      icon: '📋',
      price: '$1,499/month',
      features: [
        'Regulatory Monitoring',
        'Automated Reporting',
        'Risk Assessment',
        'Audit Trail',
        'Policy Management',
        'Alert System',
        'Documentation',
        'Integration APIs'
      ],
      benefits: [
        'Reduce compliance costs by 50%',
        'Improve accuracy by 90%',
        'Enable real-time monitoring',
        'Minimize regulatory risks',
        'Automate reporting processes'
      ],
      marketPrice: '$4,000-15,000/month',
      category: 'RegTech',
      technologies: ['NLP', 'Machine Learning', 'Regulatory APIs', 'Document Processing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Wealth Management',
      description: 'Comprehensive wealth management platform with personalized advice, tax optimization, and estate planning.',
      icon: '💎',
      price: '$2,299/month',
      features: [
        'Personalized Advice',
        'Tax Optimization',
        'Estate Planning',
        'Goal Tracking',
        'Risk Management',
        'Client Communication',
        'Performance Analytics',
        'Integration APIs'
      ],
      benefits: [
        'Improve client satisfaction by 40%',
        'Increase assets under management',
        'Optimize tax strategies',
        'Provide comprehensive planning',
        'Scale advisory services'
      ],
      marketPrice: '$6,000-25,000/month',
      category: 'Wealth Management',
      technologies: ['Machine Learning', 'Tax Optimization', 'Risk Models', 'Client Portals', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI fintech solutions including algorithmic trading, fraud detection, and robo-advisory. Starting at $699/month." />
        <meta name="keywords" content="ai fintech, algorithmic trading, fraud detection, credit scoring, robo-advisor, insurance underwriting, payment processing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Fintech Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform financial services with AI-powered solutions that enhance trading, prevent fraud, and optimize investment strategies.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">Fintech Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$699</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Fraud Detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">25%</div>
              <div className="text-gray-300">Return Increase</div>
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
            Choose Your Fintech AI Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fintechServices.map((service, index) => (
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
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI fintech solutions today and revolutionize your financial operations.
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

export default AIFintechSolutionsPage;