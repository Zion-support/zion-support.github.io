import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const TaskManagerProPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization using machine learning to optimize your workflow and productivity.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Advanced team collaboration tools with real-time updates and seamless communication.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ClockIcon,
      title: 'Time Tracking',
      description: 'Comprehensive time tracking and productivity analytics to optimize your work patterns.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics Dashboard',
      description: 'Detailed analytics and insights to track team performance and project progress.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BoltIcon,
      title: 'Automation',
      description: 'Powerful automation features to streamline repetitive tasks and workflows.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance features.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Up to 5 projects',
        'Basic AI prioritization',
        'Time tracking',
        'Mobile app access',
        'Email support'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Most popular for teams',
      features: [
        'Unlimited projects',
        'Advanced AI prioritization',
        'Team collaboration',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <>
      <SEOHead
        title="Task Manager Pro - AI-Powered Productivity"
        description="Advanced task management with AI-powered prioritization, team collaboration, and time tracking for maximum productivity and efficiency."
        keywords="task management, productivity, AI prioritization, team collaboration, time tracking, project management"
        canonicalUrl="https://ziontechgroup.com/task-manager-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-emerald-900/30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">AI Task Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Task Manager Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Advanced task management with AI-powered prioritization, team collaboration, and time tracking for maximum productivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="btn-futuristic px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage tasks efficiently and boost team productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 neon-glow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full btn-futuristic py-3 ${plan.popular ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-slate-900 to-emerald-900/40"></div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven task management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial (14 days)
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TaskManagerProPage;