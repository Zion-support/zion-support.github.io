import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, CheckSquare, Clock, Zap, Users, BarChart } from 'lucide-react';

const TaskManagerProPage: React.FC = () => {
  const taskFeatures = [
    {
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization based on deadlines, importance, and dependencies.',
      icon: '🎯',
      benefits: [
        'Smart prioritization',
        'Deadline management',
        'Dependency tracking',
        'Urgency detection'
      ]
    },
    {
      title: 'Team Collaboration',
      description: 'Advanced team collaboration tools with real-time updates and communication.',
      icon: '👥',
      benefits: [
        'Real-time collaboration',
        'Team communication',
        'Task assignment',
        'Progress tracking'
      ]
    },
    {
      title: 'Time Tracking',
      description: 'Comprehensive time tracking with AI-powered insights and productivity analysis.',
      icon: '⏱️',
      benefits: [
        'Automatic time tracking',
        'Productivity insights',
        'Time estimation',
        'Performance analytics'
      ]
    },
    {
      title: 'Project Management',
      description: 'Full project management capabilities with Gantt charts and milestone tracking.',
      icon: '📊',
      benefits: [
        'Gantt charts',
        'Milestone tracking',
        'Resource management',
        'Project analytics'
      ]
    },
    {
      title: 'Automation Workflows',
      description: 'Create automated workflows to streamline repetitive tasks and processes.',
      icon: '⚙️',
      benefits: [
        'Workflow automation',
        'Task templates',
        'Recurring tasks',
        'Smart notifications'
      ]
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and reporting for better productivity insights.',
      icon: '📈',
      benefits: [
        'Productivity metrics',
        'Team performance',
        'Project insights',
        'Custom reports'
      ]
    }
  ];

  const taskTypes = [
    {
      type: 'Personal Tasks',
      description: 'Individual task management and productivity',
      price: '$39/month',
      features: ['Personal dashboard', 'Task prioritization', 'Time tracking', 'Basic analytics']
    },
    {
      type: 'Team Tasks',
      description: 'Team collaboration and task management',
      price: '$79/month',
      features: ['Team collaboration', 'Task assignment', 'Progress tracking', 'Team analytics']
    },
    {
      type: 'Project Management',
      description: 'Complete project management solution',
      price: '$149/month',
      features: ['Project planning', 'Gantt charts', 'Resource management', 'Project analytics']
    },
    {
      type: 'Agile Development',
      description: 'Agile project management with sprints and boards',
      price: '$199/month',
      features: ['Sprint planning', 'Kanban boards', 'Scrum tools', 'Agile analytics']
    },
    {
      type: 'Client Management',
      description: 'Client project and task management',
      price: '$129/month',
      features: ['Client portals', 'Project tracking', 'Billing integration', 'Client reports']
    },
    {
      type: 'Enterprise Tasks',
      description: 'Large-scale task and project management',
      price: '$299/month',
      features: ['Enterprise features', 'Custom workflows', 'Advanced security', 'Dedicated support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$39/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 100 tasks/month',
        'Basic AI features',
        'Time tracking',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Advanced features for small teams',
      features: [
        'Up to 1,000 tasks/month',
        'Advanced AI prioritization',
        'Team collaboration',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'Complete task management for large organizations',
      features: [
        'Unlimited tasks',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Task Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered task management with intelligent prioritization, team collaboration, and productivity analytics. Boost your team's efficiency." />
        <meta name="keywords" content="task manager pro, task management, project management, team collaboration, productivity tools, ai task prioritization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Task Manager Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered task management with intelligent prioritization, team collaboration, and productivity analytics. Boost your team's efficiency.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Productivity Boost</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Task Completion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
              <div className="text-gray-300">Collaboration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Assistance</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Task Management Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taskFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Task Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Task Management Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taskTypes.map((task, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{task.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{task.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{task.price}</div>
                </div>
                <ul className="space-y-2">
                  {task.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Task Manager Pro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Prioritization</h3>
              <p className="text-gray-300">AI automatically prioritizes tasks based on importance, deadlines, and dependencies for maximum efficiency.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Seamless Collaboration</h3>
              <p className="text-gray-300">Real-time collaboration tools keep your team synchronized and productive across all projects.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Productivity Insights</h3>
              <p className="text-gray-300">Advanced analytics help you understand productivity patterns and optimize team performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Task Manager Pro Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Boost Your Team's Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help your team work smarter, not harder. Start managing tasks more efficiently today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskManagerProPage;