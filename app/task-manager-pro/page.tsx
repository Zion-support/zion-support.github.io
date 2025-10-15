import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  BellIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const TaskManagerProPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Task Prioritization',
      description: 'Smart AI algorithms automatically prioritize tasks based on deadlines, importance, and team capacity',
      color: 'text-cyan-400'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Real-time collaboration with comments, mentions, file sharing, and team communication tools',
      color: 'text-blue-400'
    },
    {
      icon: ClockIcon,
      title: 'Time Tracking',
      description: 'Built-in time tracking with detailed reports, productivity analytics, and billable hours management',
      color: 'text-green-400'
    },
    {
      icon: ChartBarIcon,
      title: 'Progress Visualization',
      description: 'Interactive dashboards, Gantt charts, and Kanban boards to visualize project progress',
      color: 'text-purple-400'
    },
    {
      icon: CalendarIcon,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers team availability, dependencies, and optimal work patterns',
      color: 'text-orange-400'
    },
    {
      icon: BellIcon,
      title: 'Smart Notifications',
      description: 'Intelligent notifications that adapt to your work patterns and only alert you when necessary',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      id: 'individual',
      name: 'Individual',
      price: '$19',
      originalPrice: '$29',
      period: '/month',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: [
        'Unlimited personal tasks',
        'Basic AI prioritization',
        'Time tracking',
        'Mobile & desktop apps',
        'Basic integrations (10)',
        'Email support',
        '1GB file storage'
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$29',
      originalPrice: '$49',
      period: '/month',
      description: 'Most popular for small teams and growing businesses',
      features: [
        'Everything in Individual',
        'Team collaboration (up to 10 members)',
        'Advanced AI features',
        'Project templates',
        'Advanced integrations (50+)',
        'Priority support',
        '10GB file storage',
        'Custom workflows',
        'Advanced analytics'
      ],
      popular: true,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$99',
      originalPrice: '$149',
      period: '/month',
      description: 'For large teams and organizations',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Custom AI training',
        'White-label solution',
        'Unlimited integrations',
        'Dedicated support',
        'Unlimited file storage',
        'Advanced security',
        'SLA guarantee',
        'Custom onboarding'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Get task updates directly in Slack' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Seamless integration with Teams' },
    { name: 'Google Workspace', icon: '📧', description: 'Sync with Gmail and Google Calendar' },
    { name: 'Zoom', icon: '📹', description: 'Schedule meetings and track time' },
    { name: 'GitHub', icon: '💻', description: 'Connect with development workflows' },
    { name: 'Trello', icon: '📋', description: 'Import existing Trello boards' },
    { name: 'Asana', icon: '✅', description: 'Migrate from Asana seamlessly' },
    { name: 'Jira', icon: '🎯', description: 'Integrate with Jira projects' },
    { name: 'Notion', icon: '📝', description: 'Sync with Notion databases' },
    { name: 'Monday.com', icon: '📊', description: 'Connect with Monday.com boards' }
  ];

  const useCases = [
    {
      title: 'Project Management',
      description: 'Manage complex projects with multiple stakeholders and dependencies',
      icon: ChartBarIcon,
      examples: ['Software development', 'Marketing campaigns', 'Event planning', 'Product launches']
    },
    {
      title: 'Team Collaboration',
      description: 'Keep your team aligned with shared goals and transparent communication',
      icon: UserGroupIcon,
      examples: ['Remote teams', 'Cross-functional projects', 'Client work', 'Internal initiatives']
    },
    {
      title: 'Personal Productivity',
      description: 'Organize your personal tasks and achieve your goals with AI assistance',
      icon: CheckCircleIcon,
      examples: ['Daily planning', 'Goal tracking', 'Habit building', 'Time management']
    },
    {
      title: 'Client Work',
      description: 'Manage client projects with professional tools and transparent reporting',
      icon: DocumentTextIcon,
      examples: ['Agency work', 'Consulting projects', 'Freelance gigs', 'Service delivery']
    }
  ];

  return (
    <>
      <SEOHead
        title="Task Manager Pro - Zion Tech Group"
        description="Advanced task management with AI-powered prioritization, team collaboration features, and time tracking capabilities. Boost productivity with intelligent automation."
        keywords="task management, project management, team collaboration, time tracking, productivity tools, ai prioritization, workflow automation"
        canonicalUrl="https://ziontechgroup.com/task-manager-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white futuristic-bg">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(35)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center neon-glow">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold holographic mb-6 neon-text">
                Task Manager Pro
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Advanced task management with AI-powered prioritization, team collaboration features, and time tracking capabilities. 
                Boost productivity with intelligent automation and seamless team coordination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="cyber-button neon-border-animated">
                  Start Free Trial - 14 Days
                </button>
                <Link to="/demo" className="btn-futuristic neon-glow">
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Powerful Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage tasks, collaborate with teams, and boost productivity with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform neon-glow`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Perfect For
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're managing personal tasks or coordinating large teams, Task Manager Pro adapts to your workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-8 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {useCase.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Integrations
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and streamline your workflow with 50+ integrations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-6 text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-3xl mb-3">{integration.icon}</div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and productivity needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} 
                  className={`group relative holographic-card glass-card p-8 hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-green-500' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400 neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'cyber-button neon-border-animated' 
                        : 'btn-futuristic neon-glow'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.id === 'individual' ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of teams and individuals who trust Task Manager Pro to organize their work and achieve their goals. 
              Start your free trial today and experience the future of task management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button neon-border-animated">
                Start Free Trial - 14 Days
              </button>
              <Link to="/contact" className="btn-futuristic neon-glow">
                Contact Sales
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TaskManagerProPage;