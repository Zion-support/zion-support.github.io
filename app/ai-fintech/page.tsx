import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, DollarSign, Shield, TrendingUp, BarChart, Clock, Target } from 'lucide-react';

const AIFintechPage: React.FC = () => {
  const fintechServices = [
    {
      title: 'Algorithmic Trading AI',
      description: 'Advanced AI trading algorithms that analyze market data and execute trades automatically.',
      icon: '📈',
      price: 'Starting at $5,000/month',
      features: ['Market analysis', 'Risk management', 'Portfolio optimization', 'Real-time trading', 'Backtesting'],
      benefits: ['Increase trading profits by 25%', 'Reduce risk exposure', '24/7 market monitoring', 'Optimize portfolios']
    },
    {
      title: 'Fraud Detection AI',
      description: 'AI-powered fraud detection systems that identify suspicious activities in real-time.',
      icon: '🛡️',
      price: 'Starting at $3,500/month',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Alert systems', 'Machine learning'],
      benefits: ['Prevent 99% of fraud attempts', 'Reduce false positives by 70%', 'Save millions in losses', 'Ensure compliance']
    },
    {
      title: 'Credit Scoring AI',
      description: 'Advanced credit risk assessment using machine learning and alternative data sources.',
      icon: '💳',
      price: 'Starting at $2,500/month',
      features: ['Alternative data analysis', 'Risk modeling', 'Credit decisions', 'Portfolio management', 'Regulatory compliance'],
      benefits: ['Improve approval rates by 30%', 'Reduce default rates by 40%', 'Expand credit access', 'Optimize risk']
    },
    {
      title: 'Robo-Advisory AI',
      description: 'AI-powered investment advisory services for personalized portfolio management.',
      icon: '🤖',
      price: 'Starting at $1,500/month',
      features: ['Portfolio optimization', 'Risk assessment', 'Rebalancing', 'Tax optimization', 'Client reporting'],
      benefits: ['Lower management fees', 'Personalized advice', 'Better returns', 'Scalable service']
    },
    {
      title: 'RegTech AI',
      description: 'AI-powered regulatory compliance and reporting automation for financial institutions.',
      icon: '📋',
      price: 'Starting at $4,000/month',
      features: ['Compliance monitoring', 'Regulatory reporting', 'Risk assessment', 'Audit trails', 'Alert systems'],
      benefits: ['Reduce compliance costs by 50%', 'Improve accuracy', 'Ensure compliance', 'Streamline reporting']
    },
    {
      title: 'InsurTech AI',
      description: 'AI-powered insurance underwriting, claims processing, and risk assessment.',
      icon: '🏥',
      price: 'Starting at $3,000/month',
      features: ['Risk assessment', 'Claims processing', 'Underwriting automation', 'Fraud detection', 'Customer service'],
      benefits: ['Faster claims processing', 'Better risk assessment', 'Reduce fraud', 'Improve customer experience']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI fintech solutions including algorithmic trading, fraud detection, credit scoring, and robo-advisory services." />
        <meta name="keywords" content="AI fintech, financial AI, algorithmic trading, fraud detection, credit scoring, robo-advisory" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Fintech Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Revolutionize financial services with cutting-edge AI technology that enhances security, efficiency, and profitability
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
                Why Choose Our AI Fintech Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade AI technology that transforms financial services and drives growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Profit Optimization</h3>
                <p className="text-gray-600">AI algorithms that maximize returns and minimize risks</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bank-Grade Security</h3>
                <p className="text-gray-600">Enterprise security and compliance with financial regulations</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">Instant insights and decision-making for financial operations</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">AI systems that grow with your business and adapt to market changes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fintech AI Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI solutions for every aspect of financial services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fintechServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
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

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Financial Benefits:</h4>
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
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Financial Services?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our fintech AI experts for a free consultation and custom solution design
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

export default AIFintechPage;
