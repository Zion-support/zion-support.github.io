'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  CheckCircle, 
  Clock, 
  Users, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Calendar,
  MessageSquare,
  FileText,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Star,
  DollarSign,
  Sparkles,
  Settings,
  Bell,
  Activity
} from 'lucide-react';

export default function AIProjectManagerPage() {
  const features = [
    {
      title: 'AI-Powered Task Prioritization',
      description: 'Automatically prioritize tasks based on deadlines, dependencies, and team capacity',
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      benefits: ['40% faster project completion', 'Reduced bottlenecks', 'Optimized resource allocation']
    },
    {
      title: 'Smart Resource Allocation',
      description: 'AI analyzes team skills and workload to suggest optimal task assignments',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      benefits: ['25% improved team efficiency', 'Balanced workload distribution', 'Skill-based matching']
    },
    {
      title: 'Predictive Risk Analysis',
      description: 'Identify potential project risks before they become issues using machine learning',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      benefits: ['60% fewer project delays', 'Early risk detection', 'Mitigation recommendations']
    },
    {
      title: 'Automated Progress Tracking',
      description: 'Real-time project monitoring with AI-generated insights and recommendations',
      icon: <Activity className="w-6 h-6 text-green-400" />,
      benefits: ['Real-time visibility', 'Automated reporting', 'Performance insights']
    },
    {
      title: 'Intelligent Time Estimation',
      description: 'AI learns from past projects to provide accurate time estimates for new tasks',
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      benefits: ['85% more accurate estimates', 'Reduced project overruns', 'Better planning']
    },
    {
      title: 'Smart Communication Hub',
      description: 'AI-powered team communication with automatic meeting summaries and action items',
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      benefits: ['Reduced meeting time', 'Clear action items', 'Better collaboration']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        'Basic AI task prioritization',
        'Project templates',
        'Basic reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom AI training',
        'Advanced security',
        'Dedicated support',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Inc.',
      role: 'Project Manager',
      content: 'AI Project Manager has revolutionized how we handle projects. The AI insights have helped us complete projects 40% faster.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'InnovateLabs',
      role: 'CTO',
      content: 'The predictive risk analysis feature has saved us countless hours and prevented major project delays.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      company: 'Digital Solutions Co.',
      role: 'Team Lead',
      content: 'The smart resource allocation feature ensures our team is always working at optimal capacity.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Jira', icon: '🎯' },
    { name: 'Asana', icon: '📋' },
    { name: 'Trello', icon: '📌' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Google Workspace', icon: '📧' },
    { name: 'Zoom', icon: '📹' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Manager - Intelligent Project Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionize project management with AI-powered task prioritization, resource allocation, and predictive analytics. Increase team productivity by 40%." />
        <meta name="keywords" content="AI project management, task prioritization, resource allocation, project analytics, team productivity" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Project Manager - Intelligent Project Management" />
        <meta property="og:description" content="Revolutionize project management with AI-powered task prioritization, resource allocation, and predictive analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-project-manager" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-project-manager.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Project Manager - Intelligent Project Management" />
        <meta name="twitter:description" content="Revolutionize project management with AI-powered task prioritization, resource allocation, and predictive analytics." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-project-manager.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Project Manager
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize your project management with AI-powered task prioritization, 
                intelligent resource allocation, and predictive analytics that increase team productivity by 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Faster Project Completion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-gray-300 text-sm">More Accurate Estimates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                <div className="text-gray-300 text-sm">Fewer Project Delays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">25%</div>
                <div className="text-gray-300 text-sm">Improved Team Efficiency</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage artificial intelligence to optimize every aspect of your project management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your team size and needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Connect with your favorite tools and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-2">{integration.icon}</div>
                  <div className="text-white text-sm font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of teams already using AI Project Manager
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
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
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-cyan-500/30">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Project Management?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free 14-day trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Questions? Call us: <a href="tel:+13024640950" className="underline hover:text-white">+1 302 464 0950</a></p>
                  <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}