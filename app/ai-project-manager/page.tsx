'use client';
import React from 'react';
import { Calendar, Brain, Users, BarChart, Zap, Target, Clock, CheckCircle, ArrowRight, Star, Award, Shield, Smartphone, Monitor, Laptop, Settings, FileText, MessageSquare, TrendingUp, AlertTriangle, PieChart, GitBranch, Timer, DollarSign } from 'lucide-react';

const AiProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Task Automation',
      description: 'Intelligent task creation, prioritization, and assignment based on project requirements and team capacity',
      benefits: ['Smart task breakdown', 'Priority optimization', 'Resource allocation', 'Deadline prediction']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI-powered insights to predict project risks, delays, and resource needs before they become problems',
      benefits: ['Risk assessment', 'Timeline prediction', 'Resource forecasting', 'Performance optimization']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team communication and collaboration with AI-powered meeting summaries and action items',
      benefits: ['Meeting automation', 'Action item tracking', 'Team performance insights', 'Communication optimization']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive project management tasks and create intelligent workflows that adapt to your team',
      benefits: ['Process automation', 'Custom workflows', 'Integration management', 'Efficiency optimization']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'AI-driven goal setting and tracking with real-time progress monitoring and adjustment recommendations',
      benefits: ['Smart goal setting', 'Progress tracking', 'Milestone management', 'Achievement prediction']
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Intelligent time tracking and productivity analysis to optimize team performance and project delivery',
      benefits: ['Automatic time tracking', 'Productivity insights', 'Time allocation optimization', 'Bottleneck identification']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams and simple projects',
      features: [
        'Up to 5 team members',
        'Basic AI task management',
        'Simple project templates',
        'Email support',
        'Basic reporting',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for growing teams with complex project needs',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Integrations',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with enterprise-level requirements',
      features: [
        'Unlimited team members',
        'Premium AI features',
        'Custom automation',
        '24/7 phone support',
        'Custom analytics',
        'White-label options',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'Project Director',
      company: 'TechCorp Solutions',
      content: 'AI Project Manager has revolutionized how we handle complex projects. Our delivery time improved by 40% and team productivity increased by 60%.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Manager',
      company: 'Digital Agency',
      content: 'The AI predictions and risk assessment features have helped us avoid countless project delays. ROI increased by 300% in just 4 months.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The automation features and team collaboration tools have made project management effortless. Our team is more productive than ever.',
      rating: 5
    }
  ];

  const useCases = [
    {
      icon: Settings,
      title: 'Software Development',
      description: 'Agile project management with AI-powered sprint planning and bug tracking',
      benefits: ['Sprint optimization', 'Bug prediction', 'Code review automation', 'Release planning']
    },
    {
      icon: FileText,
      title: 'Marketing Campaigns',
      description: 'End-to-end campaign management with AI-driven content planning and performance tracking',
      benefits: ['Campaign automation', 'Content optimization', 'Performance prediction', 'Budget management']
    },
    {
      icon: Users,
      title: 'Event Planning',
      description: 'Comprehensive event management with AI-powered vendor coordination and timeline optimization',
      benefits: ['Vendor management', 'Timeline optimization', 'Resource planning', 'Risk mitigation']
    },
    {
      icon: TrendingUp,
      title: 'Product Launch',
      description: 'Strategic product launch management with AI-driven market analysis and go-to-market planning',
      benefits: ['Market analysis', 'Launch optimization', 'Stakeholder management', 'Success tracking']
    }
  ];

  const integrations = [
    { name: 'Slack', icon: MessageSquare, description: 'Seamless team communication' },
    { name: 'GitHub', icon: GitBranch, description: 'Code repository integration' },
    { name: 'Jira', icon: Settings, description: 'Issue tracking synchronization' },
    { name: 'Trello', icon: FileText, description: 'Board management integration' },
    { name: 'Google Workspace', icon: Monitor, description: 'Document collaboration' },
    { name: 'Microsoft Teams', icon: Users, description: 'Video conferencing integration' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              AI-Powered Project Management
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Project Manager
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your project management with AI-powered automation, predictive analytics, 
            and intelligent team collaboration. Deliver projects faster and more efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25K+</div>
              <div className="text-sm text-gray-300">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage projects efficiently with AI-powered automation and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI project management solution works across all industries and project types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2 text-left">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a unified project management experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-400">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and project complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of teams who have transformed their project management with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your free trial today and experience the power of AI-driven project management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiProjectManagerPage;