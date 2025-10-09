'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckSquare, Brain, TrendingUp, CheckCircle, Users, Shield, Globe, ArrowRight, Phone, Mail, MapPin, Star, Award, Zap, BarChart, MessageSquare, Eye, Sparkles, Database, Cpu, Clock, Target, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AITaskManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Task Intelligence',
      description: 'Smart task creation, prioritization, and scheduling based on AI analysis of your work patterns and deadlines',
      benefits: ['Smart task prioritization', 'Automatic scheduling', 'Deadline prediction', 'Workload optimization']
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Automate repetitive tasks and workflows with AI that learns from your behavior and preferences',
      benefits: ['Workflow automation', 'Smart reminders', 'Auto-categorization', 'Pattern recognition']
    },
    {
      icon: Target,
      title: 'Smart Goal Tracking',
      description: 'AI-driven goal setting and progress tracking with intelligent insights and recommendations',
      benefits: ['Goal decomposition', 'Progress analytics', 'Milestone tracking', 'Success prediction']
    },
    {
      icon: BarChart,
      title: 'Productivity Analytics',
      description: 'Comprehensive analytics and insights to optimize your productivity and work patterns',
      benefits: ['Productivity metrics', 'Time analysis', 'Efficiency insights', 'Performance optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19.99',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 500 tasks/month',
        'Basic AI features',
        'Personal dashboard',
        'Email support',
        'Mobile app access',
        'Cloud sync',
        'Basic analytics',
        'Calendar integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49.99',
      period: '/month',
      description: 'Ideal for small teams and professionals',
      features: [
        'Up to 5,000 tasks/month',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Advanced analytics',
        'Custom workflows',
        'API access',
        'Unlimited projects',
        'Time tracking',
        'Goal management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149.99',
      period: '/month',
      description: 'For large organizations with complex workflows',
      features: [
        'Unlimited tasks',
        'Full AI suite',
        'Unlimited team members',
        '24/7 support',
        'Custom integrations',
        'Advanced reporting',
        'White-label options',
        'Dedicated account manager',
        'On-premise deployment',
        'Custom AI training'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration platform' },
    { name: 'Google Workspace', icon: '📧', description: 'Gmail & Calendar' },
    { name: 'Notion', icon: '📝', description: 'Note-taking & docs' },
    { name: 'Trello', icon: '📋', description: 'Project management' },
    { name: 'Asana', icon: '✅', description: 'Task management' },
    { name: 'Jira', icon: '🐛', description: 'Issue tracking' },
    { name: 'Zapier', icon: '⚡', description: 'Workflow automation' }
  ];

  const testimonials = [
    {
      name: 'Emma Wilson',
      role: 'Product Manager, TechStart',
      content: 'AI Task Manager has transformed how I organize my work. The AI prioritization is incredibly accurate, and I complete 40% more tasks each week.',
      rating: 5,
      improvement: '40% more tasks completed'
    },
    {
      name: 'James Park',
      role: 'Freelance Developer',
      content: 'The smart scheduling feature is a game-changer. It automatically blocks time for deep work and schedules meetings optimally. My productivity has skyrocketed.',
      rating: 5,
      improvement: '60% productivity increase'
    },
    {
      name: 'Maria Santos',
      role: 'Marketing Director, GrowthCo',
      content: 'Our team collaboration improved dramatically with AI Task Manager. The AI insights help us identify bottlenecks and optimize our workflows.',
      rating: 5,
      improvement: '50% better team efficiency'
    }
  ];

  const useCases = [
    {
      industry: 'Project Management',
      description: 'Manage complex projects with AI-powered task breakdown and resource allocation',
      benefits: ['Project decomposition', 'Resource planning', 'Timeline optimization', 'Risk management']
    },
    {
      industry: 'Remote Work',
      description: 'Optimize remote team productivity with intelligent task distribution and collaboration tools',
      benefits: ['Remote collaboration', 'Time zone optimization', 'Async communication', 'Progress tracking']
    },
    {
      industry: 'Creative Teams',
      description: 'Streamline creative workflows with AI that understands creative processes and deadlines',
      benefits: ['Creative workflow optimization', 'Deadline management', 'Inspiration tracking', 'Client feedback']
    },
    {
      industry: 'Sales Teams',
      description: 'Manage sales activities and follow-ups with AI-powered lead prioritization and task automation',
      benefits: ['Lead prioritization', 'Follow-up automation', 'Pipeline management', 'Performance tracking']
    }
  ];

  const aiCapabilities = [
    {
      feature: 'Smart Prioritization',
      description: 'AI analyzes task importance, deadlines, and dependencies to optimize your work order',
      accuracy: '92%'
    },
    {
      feature: 'Time Estimation',
      description: 'Predict task completion times based on historical data and complexity analysis',
      accuracy: '88%'
    },
    {
      feature: 'Workload Balancing',
      description: 'Automatically distribute tasks to prevent burnout and optimize team capacity',
      accuracy: '95%'
    },
    {
      feature: 'Deadline Prediction',
      description: 'Forecast project completion dates and identify potential delays before they happen',
      accuracy: '90%'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Task Manager - Intelligent Task Management & Productivity Optimization | Zion Tech Group"
        description="Transform your productivity with AI-powered task management. Complete 40% more tasks, optimize workflows, and achieve better work-life balance with intelligent task prioritization and automation."
        keywords={['AI task manager', 'task management', 'productivity optimization', 'workflow automation', 'smart scheduling', 'team collaboration']}
        canonicalUrl="https://ziontechgroup.com/ai-task-manager"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckSquare className="w-4 h-4" />
                AI-Powered Productivity
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Task Manager
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your productivity with AI-powered task management. Complete 40% more tasks, 
                optimize workflows, and achieve better work-life balance with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">More Tasks Completed</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
                <div className="text-gray-300">Prioritization Accuracy</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Workload Optimization</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your task management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI technology delivers unmatched intelligence and accuracy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{capability.feature}</h3>
                    <span className="text-cyan-400 font-bold text-lg">{capability.accuracy}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Perfect for Every Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored task management solutions for different industries and work styles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-sm text-white font-medium mb-1">{integration.name}</div>
                  <div className="text-xs text-gray-400">{integration.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and productivity needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Task Manager ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
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
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of professionals already using AI Task Manager to boost their productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">{testimonial.improvement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and experience the power of AI-driven task management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Task Manager Free Trial Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AITaskManagerPage;