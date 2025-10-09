import React from 'react';
import Head from 'next/head';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, UserCheck, DollarSign, PieChart } from 'lucide-react';

const AICRMServicePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification using machine learning algorithms to identify high-value prospects automatically.',
      benefits: ['Increase conversion by 40%', 'Reduce manual qualification time', 'Improve sales efficiency']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Automated Follow-ups',
      description: 'Smart email sequences and follow-up campaigns triggered by customer behavior and engagement patterns.',
      benefits: ['Never miss a follow-up', 'Personalized communication', 'Increase response rates by 60%']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict customer lifetime value, churn risk, and optimal engagement timing.',
      benefits: ['Reduce churn by 35%', 'Increase customer LTV', 'Data-driven decisions']
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Smart Scheduling',
      description: 'AI-powered meeting scheduling that considers all parties\' preferences and availability.',
      benefits: ['Save 5+ hours/week', 'Reduce scheduling conflicts', 'Improve meeting attendance']
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Customer Segmentation',
      description: 'Automatic customer grouping based on behavior, preferences, and purchase patterns.',
      benefits: ['Targeted marketing campaigns', 'Personalized experiences', 'Higher engagement rates']
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Revenue Forecasting',
      description: 'Accurate revenue predictions using historical data and market trends.',
      benefits: ['Better financial planning', 'Identify growth opportunities', 'Reduce forecasting errors']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Predictive analytics',
        'Custom workflows',
        'Priority support',
        'API access',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom development'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'AI CRM Automation increased our lead conversion by 45% and saved us 20 hours per week on manual tasks.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'VP of Sales',
      content: 'The predictive analytics helped us identify high-value prospects before our competitors. Game changer!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      role: 'Marketing Manager',
      content: 'Automated follow-ups and personalized campaigns increased our customer engagement by 60%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI CRM Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered CRM automation platform. Increase sales by 40%, reduce manual work, and boost customer engagement with intelligent automation." />
        <meta name="keywords" content="AI CRM, CRM automation, sales automation, lead scoring, customer management, AI sales tools" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-crm-automation" />
      </Head>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text">
              AI CRM Automation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Revolutionary AI-Powered Customer Relationship Management
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Transform your sales process with intelligent automation, predictive analytics, and AI-driven insights. 
              Increase conversions by 40%, reduce manual work by 70%, and boost customer engagement with our 
              cutting-edge CRM platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose AI CRM Automation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">40% Increase in Sales</h3>
              <p className="text-gray-300">AI-powered lead scoring and automation boost conversion rates significantly.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-3">70% Time Savings</h3>
              <p className="text-gray-300">Automate repetitive tasks and focus on high-value activities.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">60% Better Engagement</h3>
              <p className="text-gray-300">Personalized communication and optimal timing improve customer relationships.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                  }`}
                >
                  Get Started
                </a>
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
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using AI CRM Automation to boost their sales and customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🕒 Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AICRMServicePage;