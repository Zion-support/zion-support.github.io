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
        'Priority recommendations'
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
        'Contact enrichment',
        'Relationship mapping'
      ],
      price: '$199/month',
      marketPrice: '$399-699/month'
    },
    {
      title: 'Automated Follow-ups',
      description: 'AI-driven follow-up sequences that adapt based on customer behavior',
      icon: MessageSquare,
      benefits: [
        'Smart follow-up timing',
        'Personalized messages',
        'Multi-channel automation',
        'Response tracking'
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
        'Deal probability',
        'Risk assessment'
      ],
      price: '$399/month',
      marketPrice: '$799-1,299/month'
    },
    {
      title: 'Customer Journey Analytics',
      description: 'Track and analyze customer interactions across all touchpoints',
      icon: Globe,
      benefits: [
        'Journey mapping',
        'Touchpoint analysis',
        'Engagement scoring',
        'Churn prediction'
      ],
      price: '$349/month',
      marketPrice: '$699-1,199/month'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot for customer support and lead qualification',
      icon: Bot,
      benefits: [
        '24/7 availability',
        'Lead qualification',
        'Support automation',
        'Multi-language support'
      ],
      price: '$179/month',
      marketPrice: '$349-599/month'
    }
  ];

  const useCases = [
    {
      title: 'Sales Teams',
      description: 'Empower sales teams with AI-driven insights and automation',
      icon: Target,
      examples: ['Lead scoring', 'Pipeline management', 'Forecasting', 'Follow-up automation']
    },
    {
      title: 'Marketing Teams',
      description: 'Optimize marketing campaigns with customer insights and segmentation',
      icon: BarChart,
      examples: ['Customer segmentation', 'Campaign tracking', 'ROI analysis', 'Lead nurturing']
    },
    {
      title: 'Customer Success',
      description: 'Improve customer satisfaction with proactive support and insights',
      icon: Heart,
      examples: ['Health scoring', 'Churn prevention', 'Upselling opportunities', 'Support automation']
    },
    {
      title: 'Management',
      description: 'Get executive insights and reports for strategic decision making',
      icon: TrendingUp,
      examples: ['Executive dashboards', 'Performance metrics', 'Revenue forecasting', 'Team analytics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 contacts',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '10,000 contacts',
        'Advanced AI features',
        'Priority support',
        'All integrations',
        '5 user accounts',
        'Custom reports',
        'API access'
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
        '24/7 support',
        'Custom integrations',
        'Unlimited users',
        'White-label options',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'SalesPro Inc.',
      role: 'VP of Sales',
      content: 'The AI lead scoring has increased our conversion rate by 40%. We can now focus on the most promising prospects.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'Marketing Solutions',
      role: 'Marketing Director',
      content: 'The customer journey analytics have given us incredible insights into our customer behavior. Our campaigns are now 3x more effective.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Customer Success Co.',
      role: 'Head of Customer Success',
      content: 'The AI chatbot handles 80% of our support queries, freeing up our team to focus on complex issues and relationship building.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI CRM - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered CRM system with intelligent lead scoring, automated follow-ups, and predictive analytics. Transform your customer relationships with AI." />
        <meta name="keywords" content="ai crm, customer relationship management, lead scoring, sales automation, predictive analytics, customer insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI-Powered CRM
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your customer relationships with our intelligent CRM system. AI-powered lead scoring, automated follow-ups, and predictive analytics to boost your sales.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Higher Conversion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-gray-300">More Effective</div>
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
            Intelligent CRM Features
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

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Perfect for Every Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">• {example}</li>
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
            Simple, Transparent Pricing
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
            Ready to Transform Your Customer Relationships?
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
