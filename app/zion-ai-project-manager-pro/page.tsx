import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  BarChart3, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Brain,
  Target,
  Activity,
  FileText,
  MessageSquare,
  Bell,
  Settings
} from 'lucide-react';

const ZionAIProjectManagerProPage: React.FC = () => {
  const features = [
    {
      title: 'AI Task Management',
      description: 'Intelligent task prioritization and assignment using AI algorithms.',
      icon: Brain,
      benefits: ['Smart Prioritization', 'Auto Assignment', 'Deadline Prediction', 'Resource Optimization']
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for distributed teams and remote work.',
      icon: Users,
      benefits: ['Real-time Chat', 'File Sharing', 'Video Meetings', 'Comment System']
    },
    {
      title: 'Project Tracking',
      description: 'Comprehensive project tracking with Gantt charts and timeline views.',
      icon: BarChart3,
      benefits: ['Gantt Charts', 'Timeline View', 'Progress Tracking', 'Milestone Management']
    },
    {
      title: 'Resource Management',
      description: 'Optimize team resources and workload distribution across projects.',
      icon: Target,
      benefits: ['Workload Balancing', 'Resource Allocation', 'Capacity Planning', 'Skill Matching']
    },
    {
      title: 'Automated Reporting',
      description: 'Generate comprehensive project reports and analytics automatically.',
      icon: FileText,
      benefits: ['Progress Reports', 'Time Tracking', 'Budget Analysis', 'Performance Metrics']
    },
    {
      title: 'Smart Notifications',
      description: 'AI-powered notifications that keep teams informed without overwhelming them.',
      icon: Bell,
      benefits: ['Smart Alerts', 'Priority Notifications', 'Custom Rules', 'Mobile Push']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and simple projects',
      features: [
        'Up to 10 team members',
        'Basic task management',
        'Simple project tracking',
        'Email support',
        '5GB storage',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing teams',
      features: [
        'Up to 50 team members',
        'AI task management',
        'Advanced analytics',
        'Priority support',
        '100GB storage',
        'Advanced integrations',
        'Custom workflows',
        'Time tracking'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom reporting',
        'Dedicated support',
        'Unlimited storage',
        'All integrations',
        'White-label options',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Increase Productivity',
      description: 'Streamline workflows and eliminate bottlenecks',
      icon: Zap,
      stat: '+45%'
    },
    {
      title: 'Reduce Project Delays',
      description: 'Better planning and resource management',
      icon: Clock,
      stat: '-60%'
    },
    {
      title: 'Improve Team Collaboration',
      description: 'Enhanced communication and coordination',
      icon: Users,
      stat: '+70%'
    },
    {
      title: 'Better Project Visibility',
      description: 'Real-time insights and progress tracking',
      icon: Activity,
      stat: '100%'
    }
  ];

  const integrations = [
    { name: 'Slack', logo: 'SL' },
    { name: 'Microsoft Teams', logo: 'MT' },
    { name: 'Google Workspace', logo: 'GW' },
    { name: 'Jira', logo: 'JI' },
    { name: 'Trello', logo: 'TR' },
    { name: 'Asana', logo: 'AS' },
    { name: 'GitHub', logo: 'GH' },
    { name: 'Zapier', logo: 'ZP' }
  ];

  const projectTemplates = [
    { name: 'Software Development', description: 'Agile development workflow with sprints', icon: Settings },
    { name: 'Marketing Campaign', description: 'End-to-end marketing project management', icon: Target },
    { name: 'Event Planning', description: 'Complete event organization and execution', icon: Calendar },
    { name: 'Product Launch', description: 'Structured approach to product releases', icon: Zap },
    { name: 'Client Onboarding', description: 'Streamlined client onboarding process', icon: Users },
    { name: 'Content Creation', description: 'Content planning and production workflow', icon: FileText }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Project Manager Pro - Intelligent Project Management | Zion Tech Group</title>
        <meta name="description" content="Streamline your projects with AI-powered project management. Smart task assignment, team collaboration, and automated reporting for better project outcomes." />
        <meta name="keywords" content="project management, AI project management, team collaboration, task management, project tracking, resource management, project analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-project-manager-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Calendar className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">AI-Powered Project Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Project Manager Pro</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your project management with AI-powered intelligence. Smart task assignment, 
              automated workflows, and real-time collaboration to deliver projects on time and within budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-700 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-blue-400 hover:text-slate-900 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Calendar className="w-5 h-5" />
              </Link>
            </div>

            {/* Benefits Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.stat}</div>
                    <div className="text-gray-300 text-sm">{benefit.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Intelligent Project Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage projects efficiently with AI-powered intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Templates Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pre-Built Project Templates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with industry-proven project templates
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectTemplates.map((template, index) => {
                const IconComponent = template.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{template.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms to streamline your workflow
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{integration.logo}</span>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Project Management Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your team size and project needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-blue-500/50 ring-2 ring-blue-500/20 scale-105' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start your free trial today and experience the power of AI-driven project management. 
                No credit card required, cancel anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-700 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-blue-400 text-blue-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-blue-400 hover:text-slate-900 flex items-center justify-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <Calendar className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIProjectManagerProPage;