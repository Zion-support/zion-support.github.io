import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Kanban, 
  BarChart3, 
  Users, 
  Zap, 
  Target, 
  TrendingUp,
  Clock,
  Shield,
  Smartphone,
  Globe,
  FileText,
  Settings,
  Star,
  Award,
  Phone,
  MapPin,
  Envelope,
  Calendar,
  CheckSquare,
  MessageSquare,
  PieChart,
  RefreshCw
} from 'lucide-react';

const AIProjectManagementProPage: React.FC = () => {
  const features = [
    'AI-powered task prioritization and scheduling',
    'Intelligent resource allocation and workload balancing',
    'Automated project timeline generation',
    'Real-time collaboration and communication tools',
    'Advanced analytics and performance insights',
    'Risk assessment and mitigation suggestions',
    'Custom workflow automation',
    'Integration with 100+ popular tools',
    'Mobile app for on-the-go management',
    'Advanced reporting and dashboard customization'
  ];

  const benefits = [
    'Increase project completion rate by 40%',
    'Reduce project delays by 60%',
    'Improve team productivity by 35%',
    'Save 15+ hours per week on project management',
    'Better resource utilization and cost control',
    'Enhanced team collaboration and communication'
  ];

  const integrations = [
    { name: 'Slack', icon: <MessageSquare className="w-6 h-6 text-purple-400" /> },
    { name: 'Microsoft Teams', icon: <Users className="w-6 h-6 text-blue-400" /> },
    { name: 'Google Workspace', icon: <Globe className="w-6 h-6 text-green-400" /> },
    { name: 'Jira', icon: <CheckSquare className="w-6 h-6 text-blue-600" /> },
    { name: 'Trello', icon: <Kanban className="w-6 h-6 text-cyan-400" /> },
    { name: 'Asana', icon: <Target className="w-6 h-6 text-orange-400" /> }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        'Basic AI features',
        '10 projects',
        'Standard integrations',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59/mo',
      originalPrice: '$99/mo',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 team members',
        'Advanced AI capabilities',
        'Unlimited projects',
        'Advanced integrations',
        'Priority support',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$119/mo',
      originalPrice: '$199/mo',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Manage sprints, code reviews, and deployment pipelines',
      icon: <Code className="w-6 h-6 text-blue-400" />,
      results: '50% faster delivery cycles'
    },
    {
      title: 'Marketing Agencies',
      description: 'Coordinate campaigns, track deliverables, and manage clients',
      icon: <Target className="w-6 h-6 text-green-400" />,
      results: '40% improvement in campaign efficiency'
    },
    {
      title: 'Construction',
      description: 'Track milestones, manage resources, and ensure compliance',
      icon: <Building className="w-6 h-6 text-orange-400" />,
      results: '35% reduction in project delays'
    },
    {
      title: 'Consulting',
      description: 'Manage client projects, track billable hours, and deliver results',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      results: '60% increase in billable utilization'
    }
  ];

  const stats = [
    { number: '40%', label: 'Higher Completion Rate' },
    { number: '60%', label: 'Fewer Delays' },
    { number: '35%', label: 'More Productive' },
    { number: '15+', label: 'Hours Saved Weekly' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Management Pro - Intelligent Project Management | Zion Tech Group</title>
        <meta name="description" content="Transform your project management with AI-powered automation. Increase completion rates by 40%, reduce delays by 60%, and save 15+ hours weekly with our intelligent project management platform." />
        <meta name="keywords" content="AI project management, project automation, team collaboration, project tracking, resource management, project analytics" />
        <meta property="og:title" content="AI Project Management Pro - Intelligent Project Management" />
        <meta property="og:description" content="Transform your project management with AI-powered automation. Increase completion rates by 40% and reduce delays by 60%." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-project-management-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-project-management-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Project Management
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your project management with AI-powered automation that increases completion rates by 40%, 
              reduces delays by 60%, and saves 15+ hours every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/25 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-indigo-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered project management platform includes everything you need to plan, 
              execute, and deliver projects successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for a unified project management experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center group-hover:text-indigo-300 transition-colors">
                  {integration.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of teams that have transformed their project management with our AI platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI project management platform works across all industries and team sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <div className="text-sm text-indigo-400 font-medium">
                  {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your team. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-indigo-500 bg-slate-700/50' : ''
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-indigo-400">{plan.price}</span>
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
                      : 'border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of teams using our AI project management platform to increase productivity, 
            reduce delays, and deliver projects successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIProjectManagementProPage;