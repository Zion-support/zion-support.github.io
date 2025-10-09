'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AICRMPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms',
      icon: Target,
      benefits: [
        'Automatic lead scoring',
        'Behavioral analysis',
        'Predictive modeling',
        'Real-time updates'
      ],
      price: '$299/month',
      marketPrice: '$599-999/month'
    },
    {
      title: 'Intelligent Contact Management',
      description: 'Smart contact organization with AI-powered insights and recommendations',
      icon: Users,
      benefits: [
        'Smart contact grouping',
        'Duplicate detection',
        'Relationship mapping',
        'Communication history'
      ],
      price: '$199/month',
      marketPrice: '$399-699/month'
    },
    {
      title: 'Automated Follow-ups',
      description: 'AI-driven follow-up sequences that adapt based on customer behavior',
      icon: MessageSquare,
      benefits: [
        'Behavioral triggers',
        'Personalized messaging',
        'Optimal timing',
        'A/B testing'
      ],
      price: '$249/month',
      marketPrice: '$499-799/month'
    },
    {
      title: 'Sales Forecasting',
      description: 'Predictive analytics for accurate sales forecasting and pipeline management',
      icon: TrendingUp,
      benefits: [
        'Revenue forecasting',
        'Pipeline analysis',
        'Risk assessment',
        'Trend identification'
      ],
      price: '$399/month',
      marketPrice: '$799-1299/month'
    },
    {
      title: 'Customer Insights',
      description: 'Deep customer analytics with AI-powered insights and recommendations',
      icon: Brain,
      benefits: [
        'Customer segmentation',
        'Churn prediction',
        'Upsell opportunities',
        'Lifetime value analysis'
      ],
      price: '$349/month',
      marketPrice: '$699-1199/month'
    },
    {
      title: 'Integration Hub',
      description: 'Seamlessly connect with 100+ business tools and platforms',
      icon: Globe,
      benefits: [
        '100+ integrations',
        'API connections',
        'Data synchronization',
        'Custom workflows'
      ],
      price: '$149/month',
      marketPrice: '$299-499/month'
    }
  ];

  const crmModules = [
    {
      title: 'Lead Management',
      description: 'Capture, qualify, and nurture leads with AI assistance',
      icon: Target,
      features: ['Lead capture', 'Qualification scoring', 'Nurture campaigns', 'Conversion tracking']
    },
    {
      title: 'Contact Management',
      description: 'Organize and manage customer contacts with intelligent insights',
      icon: Users,
      features: ['Contact profiles', 'Interaction history', 'Relationship mapping', 'Communication tracking']
    },
    {
      title: 'Sales Pipeline',
      description: 'Track and manage sales opportunities through the entire funnel',
      icon: BarChart,
      features: ['Pipeline visualization', 'Stage tracking', 'Deal management', 'Forecasting']
    },
    {
      title: 'Customer Service',
      description: 'Provide exceptional customer support with AI-powered tools',
      icon: MessageSquare,
      features: ['Ticket management', 'Knowledge base', 'Chat support', 'Satisfaction tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 contacts',
        'Basic AI features',
        'Email integration',
        'Standard reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for growing businesses and sales teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Full integrations',
        'Advanced reporting',
        'Priority support',
        'Custom workflows',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited contacts',
        'All AI features',
        'Custom integrations',
        'Advanced analytics',
        '24/7 support',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'Sales Pro Inc.',
      role: 'Sales Director',
      content: 'The AI-powered lead scoring has increased our conversion rate by 60%. We can now focus on the most promising prospects.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'Tech Solutions',
      role: 'VP of Sales',
      content: 'The automated follow-ups are incredible. Our response rates have improved by 80% and our sales team is more productive.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Customer Success Co.',
      role: 'Customer Success Manager',
      content: 'The customer insights help us understand our clients better than ever. We can predict churn and prevent it proactively.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI CRM - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered CRM system with intelligent lead scoring, automated follow-ups, and predictive analytics. Transform your sales process with our smart CRM solution." />
        <meta name="keywords" content="ai crm, customer relationship management, lead scoring, sales automation, predictive analytics, crm software" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI CRM System
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your customer relationships with our AI-powered CRM. Intelligent lead scoring, automated follow-ups, and predictive analytics to boost your sales performance.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Better Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Integrations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI CRM Inquiry"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all"
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI CRM Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold text-green-400">{feature.price}</span>
                      <span className="text-sm text-gray-400">Market: {feature.marketPrice}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Modules Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Complete CRM Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crmModules.map((module, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <module.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                <p className="text-gray-300 mb-4">{module.description}</p>
                <ul className="space-y-1">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400">• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your CRM Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-cyan-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI CRM today and experience the future of customer relationship management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI CRM Inquiry"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-8 text-purple-100">
            <p>Contact: kleber@ziontechgroup.com | +1 302 464 0950</p>
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICRMPage;
