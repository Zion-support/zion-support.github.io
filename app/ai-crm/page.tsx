'use client';
import React from 'react';
import { Brain, Users, BarChart, Zap, Shield, Clock, Target, TrendingUp, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
function AICRMPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns, engagement history, and demographic data.',
      benefit: 'Increase conversion rates by 40%'
    },
    {
      icon: Users,
      title: 'Smart Contact Management',
      description: 'Automatically organize and categorize contacts with AI-driven insights, relationship mapping, and communication history tracking.',
      benefit: 'Save 10+ hours per week'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Get AI-powered insights on sales trends, customer behavior, and revenue forecasting with automated reporting and dashboards.',
      benefit: 'Improve forecasting accuracy by 60%'
    },
    {
      icon: Zap,
      title: 'Automated Follow-ups',
      description: 'Intelligent email sequences, task automation, and reminder systems that adapt based on customer interactions and preferences.',
      benefit: 'Reduce manual work by 70%'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value using advanced AI algorithms and machine learning.',
      benefit: 'Increase campaign effectiveness by 50%'
    },
    {
      icon: Shield,
      title: 'Data Security & Compliance',
      description: 'Enterprise-grade security with GDPR compliance, data encryption, and automated backup systems to protect your customer data.',
      benefit: '100% compliance guarantee'
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 contacts',
        'AI lead scoring',
        'Basic automation',
        'Email integration',
        'Mobile app access',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI analytics',
        'Custom automation workflows',
        'Advanced integrations',
        'Priority support',
        'Custom reporting',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom AI models',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'White-label options'
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'AI CRM increased our lead conversion by 45% in just 3 months. The predictive analytics are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'CEO',
      content: 'The automation features saved us 15 hours per week. Our team can now focus on high-value activities.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Solutions',
      role: 'Marketing Manager',
      content: 'The AI insights helped us understand our customers better than ever. Revenue increased by 30%.',
      rating: 5
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered CRM
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Intelligent Customer Relationship Management
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your sales process with our AI-powered CRM that automatically scores leads, 
            predicts customer behavior, and automates follow-ups. Increase conversions by 40% while 
            reducing manual work by 70%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Free Demo
            </Link>
          </div>
        </div>
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
            <div className="text-white font-semibold mb-2">Higher Conversion</div>
            <div className="text-gray-500 text-sm">AI-powered lead scoring increases conversion rates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
            <div className="text-white font-semibold mb-2">Less Manual Work</div>
            <div className="text-gray-500 text-sm">Automation reduces repetitive tasks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
            <div className="text-white font-semibold mb-2">Better Forecasting</div>
            <div className="text-gray-500 text-sm">Predictive analytics improve accuracy</div>
          </div>
        </div>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-500 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-500">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button role="button" className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-500 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AI CRM to increase conversions, 
            automate workflows, and grow revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}

export default AICRMPage;