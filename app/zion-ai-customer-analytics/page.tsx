import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const ZionAICustomerAnalyticsPage: React.FC = () => {
  const features = [
    'Real-time customer behavior tracking',
    'AI-powered customer segmentation',
    'Predictive churn analysis',
    'Customer lifetime value prediction',
    'Sentiment analysis across channels',
    'Automated customer journey mapping',
    'Personalized recommendation engine',
    'Advanced cohort analysis',
    'Multi-channel data integration',
    'Custom dashboard creation'
  ];

  const benefits = [
    'Increase customer retention by 35%',
    'Boost revenue per customer by 45%',
    'Reduce churn rate by 50%',
    'Improve customer satisfaction by 40%',
    'Optimize marketing spend by 30%',
    'Enhance customer experience'
  ];

  const pricing = {
    basic: { price: 99, features: ['Up to 10K customers', 'Basic analytics', 'Email support'] },
    professional: { price: 299, features: ['Up to 100K customers', 'Advanced AI insights', 'Priority support', 'Custom integrations'] },
    enterprise: { price: 799, features: ['Unlimited customers', 'Full AI suite', 'Dedicated support', 'White-label options'] }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Customer Analytics - Advanced Customer Intelligence Platform"
        description="Unlock deep customer insights with AI-powered analytics. Track behavior, predict churn, and optimize customer experience with our intelligent analytics platform."
        keywords="customer analytics, AI insights, customer behavior, churn prediction, customer segmentation, business intelligence"
        canonicalUrl="https://ziontechgroup.com/zion-ai-customer-analytics"
      />
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 animated-icon">📈</div>
              <h1 className="text-5xl md:text-7xl font-bold holographic-text mb-6">
                Zion AI Customer Analytics
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform customer data into actionable insights with our AI-powered analytics platform. 
                Understand your customers like never before and drive growth with intelligent predictions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a href="#demo" className="neon-button text-lg px-10 py-4">
                  View Demo
                </a>
                <a href="#pricing" className="neon-button-purple text-lg px-10 py-4">
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Advanced Analytics Features</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Harness the power of AI to unlock deep customer insights and drive business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card glow-effect p-6 group">
                  <div className="text-3xl mb-4 animated-icon">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:neon-text transition-all duration-300">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Advanced machine learning algorithms analyze customer data to provide actionable insights.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-6">Proven Business Impact</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="futuristic-card glow-effect p-8 text-center">
                  <div className="text-4xl font-bold neon-text-pink mb-4">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Flexible Pricing Plans</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Choose the perfect plan for your business size and analytics needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <div key={plan} className={`futuristic-card glow-effect p-8 ${
                  plan === 'professional' ? 'ring-2 ring-neon-cyan' : ''
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                    <div className="text-4xl font-bold neon-text mb-2">${details.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white">
                        <span className="text-neon-cyan mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan === 'professional' 
                        ? 'neon-button' 
                        : 'neon-button-purple'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="futuristic-card glow-effect p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-6">
                Start Your Customer Analytics Journey Today
              </h2>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Join leading businesses using Zion AI Customer Analytics to understand their customers and drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="/contact" className="neon-button text-lg px-10 py-4">
                  Start Free Trial
                </a>
                <a href="tel:+13024640950" className="neon-button-purple text-lg px-10 py-4">
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAICustomerAnalyticsPage;