import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

const AICustomerAnalyticsProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      features: [
        'Up to 10,000 customer records',
        'Basic AI insights',
        'Customer segmentation',
        'Churn prediction',
        'Email support',
        'Standard reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      features: [
        'Up to 100,000 customer records',
        'Advanced AI analytics',
        'Real-time customer scoring',
        'Predictive modeling',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Data export/import'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      features: [
        'Unlimited customer records',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'On-premise deployment',
        'Advanced security features'
      ],
      popular: false
    }
  ];

  const features = [
    {
      title: 'AI-Powered Customer Segmentation',
      description: 'Automatically segment customers using machine learning algorithms based on behavior, preferences, and value.',
      icon: '🎯',
      benefits: ['95% accuracy in segmentation', 'Real-time customer profiling', 'Dynamic segment updates']
    },
    {
      title: 'Predictive Churn Analysis',
      description: 'Identify customers at risk of churning with 90%+ accuracy using advanced predictive models.',
      icon: '⚠️',
      benefits: ['Early churn detection', 'Automated retention campaigns', 'Reduced customer loss by 40%']
    },
    {
      title: 'Customer Lifetime Value Prediction',
      description: 'Accurately predict customer lifetime value to optimize marketing spend and resource allocation.',
      icon: '💰',
      benefits: ['Improved ROI on marketing', 'Better resource allocation', 'Increased customer value by 35%']
    },
    {
      title: 'Real-Time Customer Scoring',
      description: 'Dynamic customer scoring that updates in real-time based on latest interactions and behaviors.',
      icon: '📊',
      benefits: ['Instant customer insights', 'Dynamic scoring updates', 'Improved targeting accuracy']
    },
    {
      title: 'Behavioral Pattern Recognition',
      description: 'Identify complex behavioral patterns and trends that human analysts might miss.',
      icon: '🔍',
      benefits: ['Hidden pattern discovery', 'Predictive insights', 'Competitive advantage']
    },
    {
      title: 'Automated Reporting & Alerts',
      description: 'Generate comprehensive reports and set up automated alerts for critical customer insights.',
      icon: '📈',
      benefits: ['Time-saving automation', 'Proactive insights', 'Data-driven decisions']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase conversion rates by 25% through personalized product recommendations and targeted marketing campaigns.',
      metrics: ['25% increase in conversion', '40% higher average order value', '60% improvement in customer retention']
    },
    {
      title: 'SaaS Customer Success',
      description: 'Reduce churn by 50% with proactive customer success interventions and personalized onboarding.',
      metrics: ['50% reduction in churn', '35% increase in upsells', '80% improvement in NPS scores']
    },
    {
      title: 'Financial Services',
      description: 'Improve loan approval rates while reducing risk through advanced credit scoring and fraud detection.',
      metrics: ['30% faster loan processing', '25% reduction in defaults', '90% fraud detection accuracy']
    },
    {
      title: 'Healthcare & Wellness',
      description: 'Enhance patient outcomes through personalized treatment recommendations and preventive care insights.',
      metrics: ['40% better patient outcomes', '50% reduction in readmissions', '60% improvement in treatment adherence']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'VP of Marketing',
      company: 'RetailMax',
      content: 'AI Customer Analytics Pro helped us increase our conversion rates by 25% and reduce churn by 40%. The insights are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Head of Customer Success',
      company: 'CloudTech Solutions',
      content: 'The predictive churn analysis is a game-changer. We can now intervene before customers leave, resulting in 50% lower churn rates.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Chief Data Officer',
      company: 'FinanceFirst',
      content: 'The AI models are incredibly sophisticated. We\'ve seen a 30% improvement in our loan approval accuracy while reducing risk.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Customer Analytics Pro - Advanced Customer Intelligence Platform | Zion Tech Group"
        description="Transform customer data into actionable insights with AI-powered analytics. Predict churn, segment customers, and optimize lifetime value. Start your free trial today."
        keywords="AI customer analytics, customer segmentation, churn prediction, customer lifetime value, predictive analytics, customer intelligence"
        canonicalUrl="https://ziontechgroup.com/ai-customer-analytics-pro"
      />
      
      <div className="min-h-screen futuristic-bg">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 fade-in-up">
                AI Customer Analytics Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
                Unlock the power of your customer data with AI-driven insights. Predict behavior, 
                optimize experiences, and maximize customer lifetime value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
                <button className="futuristic-btn">
                  Start Free Trial
                </button>
                <button className="futuristic-btn futuristic-btn-secondary">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-blue mb-4">Advanced AI Analytics Features</h2>
              <p className="text-xl text-gray-300">Transform raw data into actionable customer insights</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card futuristic-card-enter p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold neon-text-purple mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20 futuristic-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-pink mb-4">Real-World Success Stories</h2>
              <p className="text-xl text-gray-300">See how businesses across industries are transforming with AI analytics</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="futuristic-card p-6">
                  <h3 className="text-xl font-semibold neon-text-green mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <span className="w-2 h-2 bg-neon-orange rounded-full mr-3"></span>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-orange mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the plan that scales with your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`futuristic-card p-8 relative ${plan.popular ? 'ring-2 ring-neon-cyan' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-neon-cyan text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold neon-text mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold neon-text-blue">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-neon-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full futuristic-btn ${plan.popular ? '' : 'futuristic-btn-secondary'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 futuristic-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-green mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-300">See what our customers are saying about AI Customer Analytics Pro</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="futuristic-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-neon-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold neon-text">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Unlock Your Customer Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies using AI Customer Analytics Pro to make data-driven decisions and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn">
                Start Your Free Trial
              </button>
              <button className="futuristic-btn futuristic-btn-secondary">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICustomerAnalyticsProPage;