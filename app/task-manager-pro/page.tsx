import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, CheckSquare, Zap, Users, Clock, DollarSign, Star, Target, Award, BarChart3, Bot, Globe, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TaskManagerProPage: React.FC = () => {
  const taskManagerFeatures = [
    {
      icon: <CheckSquare className="w-8 h-8 text-blue-500" />,
      title: 'Smart Task Management',
      description: 'AI-powered task organization and prioritization for maximum productivity.',
      price: '$29/month',
      features: ['Auto-prioritization', 'Deadline tracking', 'Progress monitoring', 'Team collaboration']
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Collaboration',
      description: 'Advanced team management and collaboration tools.',
      price: '$49/month',
      features: ['Team workspaces', 'Real-time updates', 'File sharing', 'Communication tools']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting for productivity insights.',
      price: '$39/month',
      features: ['Performance metrics', 'Time tracking', 'Productivity reports', 'Custom dashboards']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Automation & Integration',
      description: 'Automated workflows and third-party integrations.',
      price: '$59/month',
      features: ['Workflow automation', 'API integrations', 'Custom triggers', 'Data synchronization']
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6 text-blue-400" /> },
    { number: '40%', label: 'Productivity Increase', icon: <Zap className="w-6 h-6 text-green-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <CheckSquare className="w-6 h-6 text-orange-400" /> }
  ];

  const integrations = [
    { name: 'Communication', items: ['Slack', 'Microsoft Teams', 'Discord', 'Zoom'] },
    { name: 'Productivity', items: ['Google Workspace', 'Microsoft 365', 'Notion', 'Trello'] },
    { name: 'Development', items: ['GitHub', 'GitLab', 'Jira', 'Bitbucket'] },
    { name: 'CRM', items: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Task Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced task management solution with AI-powered features, team collaboration, and productivity analytics. Boost your team's efficiency with Task Manager Pro." />
        <meta name="keywords" content="task manager, project management, team collaboration, productivity tools, AI task management, workflow automation" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <CheckSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Task Manager Pro
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Advanced task management solution with AI-powered features, team collaboration, 
              and productivity analytics. Boost your team's efficiency and achieve more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Task Manager Pro Features</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Powerful features designed to boost productivity and team collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {taskManagerFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{feature.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Integrations</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Seamlessly integrate with your favorite tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{integration.name}</h3>
                <div className="space-y-2">
                  {integration.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-gray-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using Task Manager Pro today and experience the difference in your team's productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaskManagerProPage;