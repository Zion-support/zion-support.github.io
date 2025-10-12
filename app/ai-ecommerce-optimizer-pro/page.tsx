import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users, Star } from 'lucide-react';

const AiEcommerceOptimizerProPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms to optimize your e-commerce performance.',
      benefits: ['Conversion optimization', 'Price optimization', 'Inventory management', 'Personalization']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track your business growth.',
      benefits: ['Real-time analytics', 'Custom reports', 'Performance tracking', 'ROI analysis']
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection.',
      benefits: ['PCI compliance', 'Data encryption', 'Fraud detection', 'Secure payments']
    },
    {
      icon: <Users className="w-5 h-5 ml-2" />,
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis to improve conversion rates.',
      benefits: ['Customer segmentation', 'Behavior analysis', 'Predictive analytics', 'Retention optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 10,000 products',
        'Basic AI optimization',
        'Analytics dashboard',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for established online stores',
      features: [
        'Up to 100,000 products',
        'Advanced AI features',
        'Custom analytics',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large e-commerce operations',
      features: [
        'Unlimited products',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Store',
      content: 'AI E-commerce Optimizer Pro increased our conversion rate by 45%. The AI recommendations are spot-on.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Electronics Retailer',
      content: 'The analytics dashboard gave us insights we never had before. Our revenue increased by 60%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Home & Garden Store',
      content: 'The customer insights feature helped us understand our customers better. Our retention rate improved dramatically.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Advanced E-commerce AI | Zion Tech Group</title>
        <meta name="description" content="Transform your e-commerce with AI-powered optimization. Conversion optimization, analytics, security, and customer insights. Get started today." />
        <meta name="keywords" content="AI e-commerce, e-commerce optimization, conversion optimization, analytics, customer insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-orange-400 mr-3" />
            <span className="text-orange-400 font-semibold">AI-Powered E-commerce</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI E-commerce Optimizer Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your e-commerce with AI-powered optimization. Get conversion optimization, 
            analytics, security, and customer insights in one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful E-commerce Features</h2>
            <p className="text-xl text-gray-300">Everything you need to optimize your online store</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300">Flexible pricing for e-commerce businesses of all sizes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-orange-400/40 scale-105 shadow-2xl shadow-orange-500/20' 
                  : 'border-orange-500/20 hover:border-orange-400/40'
              }`}>
                {plan.popular && (
                  <div className="flex items-center justify-center mb-4 text-orange-400">
                    <Star className="w-5 h-5 mr-2" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                      : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by E-commerce Leaders</h2>
            <p className="text-xl text-gray-300">See how AI E-commerce Optimizer Pro transforms online stores</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your E-commerce?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of online stores who are already using AI E-commerce Optimizer Pro to grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300">
              Get Free Demo
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEcommerceOptimizerProPage;