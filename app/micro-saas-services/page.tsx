import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '1,200+',
      rating: '4.9'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget tracking', 'Financial reports'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: true,
      users: '850+',
      rating: '4.8'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI CRM Assistant',
      description: 'Smart customer relationship management with AI-powered insights and automation.',
      features: ['Lead scoring', 'Automated follow-ups', 'Customer insights', 'Sales forecasting'],
      pricing: '$29/month',
      link: '/ai-crm-assistant',
      popular: false,
      users: '650+',
      rating: '4.7'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring and threat detection for small to medium businesses.',
      features: ['Threat detection', 'Security alerts', 'Compliance monitoring', 'Incident response'],
      pricing: '$39/month',
      link: '/ai-security-monitor',
      popular: false,
      users: '420+',
      rating: '4.9'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with automatic project categorization and productivity analysis.',
      features: ['Auto time tracking', 'Project categorization', 'Productivity reports', 'Team insights'],
      pricing: '$12/month',
      link: '/ai-time-tracker',
      popular: true,
      users: '980+',
      rating: '4.6'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'AI Content Scheduler',
      description: 'Smart content scheduling and social media management with AI optimization.',
      features: ['Content scheduling', 'AI optimization', 'Multi-platform posting', 'Analytics dashboard'],
      pricing: '$24/month',
      link: '/ai-content-scheduler',
      popular: false,
      users: '720+',
      rating: '4.8'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process.'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      title: 'Affordable Pricing',
      description: 'Cost-effective solutions designed for small to medium businesses.'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible and scalable micro-SaaS tools.'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for peace of mind.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro-SaaS Tools' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.8', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro-SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro-SaaS tools and services designed for small to medium businesses. AI-powered solutions that scale with your growth." />
        <meta name="keywords" content="micro-SaaS, SaaS tools, business automation, AI tools, productivity software, small business solutions" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro-SaaS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, focused software solutions designed for small to medium businesses. Get the tools you need without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Micro-SaaS?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Focused solutions that solve specific business problems without overwhelming complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro-SaaS Tools</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our collection of powerful, focused business tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {microSAAS.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-gray-400 text-sm">per month</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {service.users} users
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our micro-SaaS tools today and see the difference they can make for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Free
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
    </div>
  );
};

export default MicroSAASServicesPage;