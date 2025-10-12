import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Globe, Brain, Mail, BarChart, Smartphone, FileText, Camera, CreditCard, Calendar, Target, TrendingUp, Lock, Headphones, Settings, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration', 'Time tracking', 'Goal setting'],
      pricing: '$29/month',
      link: 'https://ziontechgroup.com/ai-task-manager',
      popular: true,
      users: '2,500+',
      rating: '4.9',
      category: 'Productivity'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking', 'Financial reports', 'Tax preparation', 'Multi-currency support'],
      pricing: '$19/month',
      link: 'https://ziontechgroup.com/ai-expense-tracker',
      popular: true,
      users: '1,800+',
      rating: '4.8',
      category: 'Finance'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI security audit', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Password generator'],
      pricing: '$15/month',
      link: 'https://ziontechgroup.com/ai-password-manager',
      popular: false,
      users: '1,200+',
      rating: '4.7',
      category: 'Security'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, and client management.',
      features: ['Auto invoice generation', 'Payment tracking', 'Client management', 'Tax calculations', 'Recurring billing', 'Multi-language support'],
      pricing: '$35/month',
      link: 'https://ziontechgroup.com/ai-invoice-generator',
      popular: true,
      users: '1,900+',
      rating: '4.9',
      category: 'Business'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, goal tracking, and wellness recommendations.',
      features: ['Health monitoring', 'AI insights', 'Goal tracking', 'Wellness recommendations', 'Integration with wearables', 'Medical reminders'],
      pricing: '$24/month',
      link: 'https://ziontechgroup.com/ai-health-tracker',
      popular: false,
      users: '1,100+',
      rating: '4.6',
      category: 'Health'
    },
    {
      icon: <Calendar className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: ['AI scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Smart reminders', 'Conflict resolution'],
      pricing: '$27/month',
      link: 'https://ziontechgroup.com/ai-smart-calendar',
      popular: true,
      users: '2,200+',
      rating: '4.8',
      category: 'Productivity'
    },
    {
      icon: <Mail className="w-8 h-8 text-cyan-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority classification.',
      features: ['Smart email sorting', 'Auto-responses', 'Email scheduling', 'Priority classification', 'Template library', 'Spam filtering'],
      pricing: '$22/month',
      link: 'https://ziontechgroup.com/ai-email-assistant',
      popular: false,
      users: '1,600+',
      rating: '4.7',
      category: 'Communication'
    },
    {
      icon: <BarChart className="w-8 h-8 text-yellow-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reports', 'Data visualization', 'KPI tracking'],
      pricing: '$49/month',
      link: 'https://ziontechgroup.com/ai-analytics-dashboard',
      popular: true,
      users: '1,300+',
      rating: '4.8',
      category: 'Analytics'
    },
    {
      icon: <Target className="w-8 h-8 text-pink-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead discovery and qualification with CRM integration and follow-up automation.',
      features: ['Lead discovery', 'Qualification scoring', 'CRM integration', 'Follow-up automation', 'Contact enrichment', 'Lead scoring'],
      pricing: '$39/month',
      link: 'https://ziontechgroup.com/ai-lead-generation',
      popular: true,
      users: '1,700+',
      rating: '4.9',
      category: 'Sales'
    },
    {
      icon: <Camera className="w-8 h-8 text-teal-500" />,
      title: 'AI Photo Organizer',
      description: 'Intelligent photo management with automatic tagging, face recognition, and smart albums.',
      features: ['Auto tagging', 'Face recognition', 'Smart albums', 'Duplicate detection', 'Cloud sync', 'Photo editing'],
      pricing: '$18/month',
      link: 'https://ziontechgroup.com/ai-photo-organizer',
      popular: false,
      users: '950+',
      rating: '4.5',
      category: 'Media'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-emerald-500" />,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with AI insights, spending analysis, and financial goal tracking.',
      features: ['Budget planning', 'Spending analysis', 'Goal tracking', 'Bill reminders', 'Investment tracking', 'Financial forecasting'],
      pricing: '$21/month',
      link: 'https://ziontechgroup.com/ai-budget-planner',
      popular: false,
      users: '1,400+',
      rating: '4.6',
      category: 'Finance'
    },
    {
      icon: <Headphones className="w-8 h-8 text-violet-500" />,
      title: 'AI Customer Support',
      description: 'Intelligent customer support chatbot with natural language processing and ticket management.',
      features: ['NLP chatbot', 'Ticket management', 'Knowledge base', 'Multi-language support', 'Escalation handling', 'Analytics'],
      pricing: '$45/month',
      link: 'https://ziontechgroup.com/ai-customer-support',
      popular: true,
      users: '2,100+',
      rating: '4.8',
      category: 'Support'
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start from just $15/month with no hidden fees or setup costs',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive onboarding process',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence for enhanced productivity and insights',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AI Task Manager has revolutionized how our team manages projects. The AI prioritization saves us 10+ hours per week.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Designer',
      content: 'The AI Invoice Generator is a game-changer. It automatically creates professional invoices and tracks payments seamlessly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      content: 'AI Expense Tracker has simplified our financial management. The receipt scanning feature is incredibly accurate.',
      rating: 5
    }
  ];

  const stats = [
    { number: '25,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '30-day', label: 'Free Trial' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS applications including AI task management, expense tracking, password management, and more. Affordable solutions for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI applications, task management, expense tracking, password manager, invoice generator, productivity tools" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, AI-powered micro applications designed to solve specific business problems. Affordable, easy-to-use solutions that deliver immediate value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="https://ziontechgroup.com/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Small applications, big impact on your productivity and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Applications</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our suite of specialized AI-powered applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {app.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{app.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {app.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 mb-6">{app.description}</p>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-white">{app.pricing}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-300">{app.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{app.users} active users</div>
                </div>
                <a 
                  href={app.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven micro applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </a>
                <a 
                  href="https://ziontechgroup.com/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Apps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;
