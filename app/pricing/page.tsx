import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, ArrowRight, Mail, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Services' },
    { id: 'it', name: 'IT Services' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      price: { month: 999, year: 9999 },
      icon: Target,
      category: 'all',
      features: [
        'Basic AI consultation',
        'IT infrastructure assessment',
        'Email support',
        'Monthly reporting',
        'Basic security audit',
        'Cloud migration planning'
      ],
      popular: false,
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { month: 2499, year: 24999 },
      icon: Star,
      category: 'all',
      features: [
        'Advanced AI solutions',
        'Full IT management',
        'Priority support',
        'Weekly reporting',
        'Comprehensive security',
        'Cloud optimization',
        'Custom development',
        'Training sessions'
      ],
      popular: true,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: { month: 4999, year: 49999 },
      icon: Award,
      category: 'all',
      features: [
        'Custom AI development',
        'Dedicated IT team',
        '24/7 support',
        'Real-time monitoring',
        'Advanced security suite',
        'Multi-cloud strategy',
        'Legacy system integration',
        'Executive consulting',
        'Unlimited training',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const aiServices = [
    {
      name: 'AI Marketing Automation',
      price: { month: 599, year: 5999 },
      description: 'Automate your marketing campaigns with AI',
      features: ['Campaign optimization', 'Customer segmentation', 'Content generation', 'Performance analytics']
    },
    {
      name: 'AI Data Analytics',
      price: { month: 799, year: 7999 },
      description: 'Transform data into actionable insights',
      features: ['Predictive modeling', 'Real-time dashboards', 'Custom reports', 'Data visualization']
    },
    {
      name: 'AI Customer Support',
      price: { month: 499, year: 4999 },
      description: 'AI-powered customer service solutions',
      features: ['Chatbot implementation', 'Ticket routing', 'Sentiment analysis', '24/7 availability']
    }
  ];

  const itServices = [
    {
      name: 'IT Infrastructure Management',
      price: { month: 1299, year: 12999 },
      description: 'Complete IT infrastructure oversight',
      features: ['Server management', 'Network monitoring', 'Backup solutions', 'Performance optimization']
    },
    {
      name: 'Cloud Migration & Setup',
      price: { month: 1999, year: 19999 },
      description: 'Seamless cloud migration services',
      features: ['AWS/Azure/GCP setup', 'Data migration', 'Security configuration', 'Cost optimization']
    },
    {
      name: 'Cybersecurity Suite',
      price: { month: 899, year: 8999 },
      description: 'Comprehensive security solutions',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Incident response', 'Compliance management']
    }
  ];

  const filteredPlans = pricingPlans.filter(plan => 
    selectedCategory === 'all' || plan.category === selectedCategory
  );

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'pricing_phone_number',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, cloud solutions pricing, cybersecurity pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our commitment to excellence and ongoing support.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1 border border-white/20">
                <button
                  onClick={() => setBillingPeriod('month')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingPeriod === 'month'
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('year')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingPeriod === 'year'
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly <span className="text-cyan-400 text-sm">(Save 20%)</span>
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {filteredPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/20 hover:border-cyan-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI solutions with transparent pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">
                      ${service.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services with competitive pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">
                      ${service.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We offer tailored solutions for unique business requirements. Contact us for a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;