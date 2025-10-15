'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  CalendarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  BoltIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AITimeTrackerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: BoltIcon,
      title: 'AI-Powered Time Tracking',
      description: 'Automatically track time across applications and projects using intelligent pattern recognition and machine learning.',
      benefits: ['95% accuracy in time tracking', 'Zero manual input required', 'Smart project categorization']
    },
    {
      icon: ChartBarIcon,
      title: 'Intelligent Analytics',
      description: 'Get deep insights into productivity patterns, time allocation, and efficiency metrics with AI-driven analytics.',
      benefits: ['Productivity optimization', 'Time waste identification', 'Performance benchmarking']
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Coordinate team schedules, track project progress, and optimize resource allocation with AI recommendations.',
      benefits: ['Team productivity insights', 'Resource optimization', 'Collaboration enhancement']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance & Security',
      description: 'Ensure time tracking compliance with labor laws and maintain data security with enterprise-grade protection.',
      benefits: ['Labor law compliance', 'Data encryption', 'Audit trail generation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$15',
      period: '/month',
      description: 'Perfect for freelancers and remote workers',
      features: [
        'Unlimited time tracking',
        'Basic AI features',
        '5 projects',
        'Email support',
        'Mobile app',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$39',
      period: '/month',
      description: 'Ideal for small teams and agencies',
      features: [
        'Up to 10 team members',
        'Advanced AI features',
        'Unlimited projects',
        'Priority support',
        'Team analytics',
        'API access',
        'Integrations',
        'Custom reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom AI training',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'Freelance Developer',
      content: 'This AI time tracker is incredible. It automatically categorizes my work and gives me insights I never knew I needed.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Project Manager, DesignCo',
      content: 'Our team productivity increased by 25% since implementing this tool. The AI insights help us optimize our workflows.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO, TechStart',
      content: 'The compliance features give us confidence in our time tracking. Perfect for our growing team.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Freelancers & Consultants',
      description: 'Track billable hours accurately and generate professional reports for clients with automated time categorization.',
      icon: UserGroupIcon
    },
    {
      title: 'Remote Teams',
      description: 'Monitor team productivity and ensure work-life balance with intelligent time tracking and analytics.',
      icon: GlobeAltIcon
    },
    {
      title: 'Agencies & Studios',
      description: 'Track project profitability and optimize resource allocation with AI-powered insights and recommendations.',
      icon: ChartBarIcon
    },
    {
      title: 'Enterprise Organizations',
      description: 'Ensure compliance and optimize workforce productivity with enterprise-grade time tracking and analytics.',
      icon: ShieldCheckIcon
    }
  ];

  const integrations = [
    { name: 'Slack', description: 'Track time directly from Slack conversations' },
    { name: 'Microsoft Teams', description: 'Integrate with Teams for seamless tracking' },
    { name: 'Jira', description: 'Sync with Jira tickets and projects' },
    { name: 'Trello', description: 'Track time on Trello cards automatically' },
    { name: 'GitHub', description: 'Monitor development time and commits' },
    { name: 'Google Calendar', description: 'Sync with calendar events and meetings' },
    { name: 'Zoom', description: 'Track meeting time automatically' },
    { name: 'Notion', description: 'Integrate with Notion workspaces' }
  ];

  return (
    <>
      <SEOHead 
        title="AI Time Tracker - Zion Tech Group"
        description="Revolutionary AI-powered time tracking platform that automatically monitors productivity, optimizes workflows, and provides intelligent insights. Start your free trial today."
        keywords="AI time tracker, automatic time tracking, productivity analytics, time management, team tracking, AI productivity, time optimization"
        canonicalUrl="https://ziontechgroup.com/ai-time-tracker"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  AI Time Tracker
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize your productivity with AI-powered time tracking that automatically monitors your work, optimizes your schedule, and provides intelligent insights. 
                <br className="hidden sm:block" />
                <span className="text-cyan-400 font-semibold">Contact us at +1 302 464 0950 or kleber@ziontechgroup.com</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-orange-400/25 neon-border-animated">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Harness the power of artificial intelligence to automatically track time, optimize productivity, and gain valuable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect for <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Every Professional</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From individual freelancers to enterprise teams, our AI time tracker adapts to your specific needs and workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Seamless <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Connect with your favorite tools and platforms for a unified productivity experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your needs. All plans include our core AI features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-orange-500 shadow-orange-500/20' 
                    : 'border-slate-700 hover:border-orange-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of professionals who have transformed their productivity with our AI-powered time tracking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Ready to Optimize Your Productivity?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free 14-day trial today. No credit card required. Experience the power of AI-driven time tracking.
              <br className="hidden sm:block" />
              <span className="text-cyan-400 font-semibold">Get in touch: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-orange-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AITimeTrackerPage;