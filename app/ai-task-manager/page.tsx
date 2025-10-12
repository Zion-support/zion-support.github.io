import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Shield, Database, Smartphone, Calendar, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Sparkles, Rocket, Clock, DollarSign, PieChart, Mail, Phone, MapPin, BarChart3, FileText, Bell, Filter, Search, Plus, Edit, Trash2, Share2, Download, Upload } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AITaskManagerPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Priority Scoring',
      description: 'Intelligent task prioritization based on deadlines, importance, and dependencies using advanced AI algorithms.',
      benefits: ['Smart Priority Detection', 'Deadline Analysis', 'Dependency Mapping', 'Workload Balancing']
    },
    {
      icon: <Bell className="w-8 h-8 text-yellow-400" />,
      title: 'Smart Deadline Alerts',
      description: 'Proactive notifications and reminders powered by AI to ensure you never miss important deadlines.',
      benefits: ['Predictive Alerts', 'Customizable Notifications', 'Escalation Management', 'Calendar Integration']
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, comments, and task assignment capabilities.',
      benefits: ['Real-time Updates', 'Team Chat', 'Task Assignment', 'Progress Tracking', 'File Sharing']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Progress Analytics',
      description: 'Comprehensive analytics and insights to track productivity, identify bottlenecks, and optimize workflows.',
      benefits: ['Productivity Metrics', 'Bottleneck Detection', 'Performance Reports', 'Trend Analysis']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: 'Mobile App',
      description: 'Full-featured mobile application for iOS and Android with offline capabilities and sync.',
      benefits: ['Offline Access', 'Push Notifications', 'Quick Actions', 'Voice Commands', 'Widget Support']
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-400" />,
      title: 'Customizable Workflows',
      description: 'Flexible workflow customization to match your team\'s unique processes and requirements.',
      benefits: ['Custom Fields', 'Workflow Automation', 'Template Library', 'Integration Hub']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Unlimited tasks and projects',
        'AI priority scoring',
        'Basic analytics',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$39',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Team collaboration tools',
        'Detailed analytics',
        'Custom workflows',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Advanced security features',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment',
        '24/7 phone support',
        'Custom training'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'The AI Task Manager Pro has revolutionized how we manage projects. The AI prioritization saves us 10+ hours per week.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      company: 'TechFlow Inc.',
      role: 'Project Manager',
      content: 'The team collaboration features are incredible. We can now track progress in real-time and never miss a deadline.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Sarah Wilson',
      company: 'Digital Agency',
      role: 'CEO',
      content: 'The analytics dashboard gives us insights we never had before. We\'ve increased our productivity by 40%.',
      rating: 5,
      avatar: 'SW'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Task Manager Pro - Zion Tech Group | Intelligent Task Management</title>
        <meta name="description" content="Transform your productivity with AI Task Manager Pro. Intelligent task prioritization, team collaboration, and analytics. Start your free trial today!" />
        <meta name="keywords" content="AI task manager, project management, team collaboration, productivity tools, task prioritization, workflow automation" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">AI-Powered Productivity</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Task Manager <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Pro</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Intelligent task management with AI-powered prioritization, team collaboration, and comprehensive analytics. 
              Transform your productivity and never miss a deadline again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#pricing" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>✨ 14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Everything you need to manage tasks intelligently and efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20' 
                  : 'border-white/20 hover:border-cyan-400/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Join thousands of teams who have transformed their productivity with AI Task Manager Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-purple-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your Productivity?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Start your free 14-day trial today and experience the power of AI-driven task management. 
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Contact Sales
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Call: <a href="tel:+13024640950" className="font-semibold hover:text-white transition-colors">+1 302 464 0950</a></p>
                  <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="font-semibold hover:text-white transition-colors">kleber@ziontechgroup.com</a></p>
                  <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}