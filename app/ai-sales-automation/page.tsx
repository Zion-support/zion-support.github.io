'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { TrendingUp, Target, Users, BarChart, Zap, Brain, Phone, Mail, CheckCircle, Star, ArrowRight, DollarSign, Clock, Shield, Building, ShoppingCart, Cloud, Home } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligently score and prioritize leads using machine learning algorithms that analyze behavior, demographics, and engagement patterns.',
      benefits: ['95% accuracy', 'Real-time scoring', 'Behavioral analysis']
    },
    {
      icon: Target,
      title: 'Automated Outreach',
      description: 'Send personalized, multi-channel outreach sequences that adapt based on prospect responses and engagement levels.',
      benefits: ['Multi-channel', 'Personalization', 'A/B testing']
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with popular CRM systems to sync data, automate follow-ups, and maintain accurate records.',
      benefits: ['Real-time sync', 'Data accuracy', 'Workflow automation']
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Get deep insights into your sales performance with predictive analytics, conversion tracking, and ROI analysis.',
      benefits: ['Predictive insights', 'Conversion tracking', 'ROI analysis']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive sales tasks like follow-ups, meeting scheduling, and proposal generation to focus on closing deals.',
      benefits: ['Task automation', 'Time savings', 'Consistency']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure all sales activities comply with regulations like GDPR and CAN-SPAM while maintaining enterprise-grade security.',
      benefits: ['GDPR compliance', 'Data security', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small sales teams getting started with AI automation',
      features: [
        'Up to 1,000 leads/month',
        'Basic lead scoring',
        'Email automation',
        'CRM integration',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Ideal for growing sales teams with advanced automation needs',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI scoring',
        'Multi-channel outreach',
        'Advanced CRM integration',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large sales organizations with complex requirements',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'All channels supported',
        'Custom integrations',
        'Custom analytics',
        'Dedicated support',
        'White-label solution',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Sales Director',
      company: 'TechCorp',
      content: 'Our sales team productivity increased by 300% after implementing AI sales automation. We\'re closing deals faster than ever.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'VP of Sales',
      company: 'GrowthStart',
      content: 'The AI lead scoring is incredibly accurate. We\'re focusing on the right prospects and our conversion rates have doubled.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'Sales Manager',
      company: 'Enterprise Solutions',
      content: 'The automated outreach sequences are so personalized that prospects think we\'re writing each email individually.',
      rating: 5
    }
  ];

  const stats = [
    { number: '300%', label: 'Sales Increase' },
    { number: '95%', label: 'Lead Accuracy' },
    { number: '50%', label: 'Time Saved' },
    { number: '24/7', label: 'Automation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Sales Automation - Zion Tech Group"
        description="Boost sales by 300% with intelligent lead scoring, automated outreach, and CRM integration. Increase productivity and close more deals with AI-powered sales automation."
        keywords={['AI sales automation', 'lead scoring', 'sales CRM', 'automated outreach', 'sales analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Sales Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Boost your sales by 300% with intelligent lead scoring, automated outreach, and CRM integration that works 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Sales Automation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
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
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-900 p-8 rounded-lg ${
                  plan.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-cyan-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Sales?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of sales teams already using our AI automation to close more deals and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISalesAutomationPage;