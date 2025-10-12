import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content automatically using advanced AI technology.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Task Management Pro',
      description: 'Streamline your workflow with intelligent task management and automation.',
      features: ['Smart scheduling', 'Team collaboration', 'Progress tracking'],
      pricing: 'Starting at $19/month',
      link: '/task-management',
      popular: false
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: 'Expense Tracker AI',
      description: 'Automatically track and categorize expenses with AI-powered insights.',
      features: ['Receipt scanning', 'Smart categorization', 'Budget alerts'],
      pricing: 'Starting at $15/month',
      link: '/expense-tracker',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Password Manager',
      description: 'Secure password management with advanced encryption and AI features.',
      features: ['Zero-knowledge encryption', 'Password generator', 'Breach monitoring'],
      pricing: 'Starting at $9/month',
      link: '/password-manager',
      popular: false
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics.',
      features: ['Real-time analytics', 'Custom dashboards', 'Predictive insights'],
      pricing: 'Starting at $39/month',
      link: '/analytics-dashboard',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and intelligent categorization.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation', 'Expense reports', 'Multi-currency support'],
      price: '$15/month',
      link: '/ai-expense-tracker',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure storage', 'Password generation', 'Security alerts', 'Multi-device sync', 'Breach monitoring', 'Two-factor authentication'],
      price: '$12/month',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates and payment tracking.',
      features: ['Auto-invoice generation', 'Payment tracking', 'Custom templates', 'Tax calculations', 'Client management', 'Recurring billing'],
      price: '$25/month',
      link: '/ai-invoice-generator',
      popular: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations.',
      features: ['Health metrics tracking', 'AI insights', 'Wellness recommendations', 'Goal setting', 'Progress monitoring', 'Health reports'],
      price: '$18/month',
      link: '/ai-health-tracker',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Conflict resolution', 'Availability sharing'],
      price: '$22/month',
      link: '/ai-smart-calendar',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Content Writer',
      description: 'AI-powered content creation for blogs, social media, and marketing materials.',
      features: ['Content generation', 'SEO optimization', 'Brand voice training', 'Multi-language support', 'Plagiarism detection', 'Content scheduling'],
      price: '$29/month',
      link: '/ai-content-writer',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'Team Collaboration Hub',
      description: 'Enhance team productivity with integrated communication and project management.',
      features: ['Real-time chat', 'File sharing', 'Project tracking'],
      pricing: 'Starting at $25/month',
      link: '/team-collaboration',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'Affordable solutions that deliver maximum value for your investment',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows',
      icon: <Settings className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your success',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupCo',
      content: 'The AI Content Generator saved us hours every week. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'TechFlow',
      content: 'Excellent value for money. The expense tracker is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'DataDriven Inc.',
      content: 'The analytics dashboard provided insights we never knew existed.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'AI Tools' },
    { number: '24/7', label: 'Support' }
  ];
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support with AI-powered responses, ticket management, and analytics.',
      features: [
        'AI-powered responses',
        'Ticket management system',
        'Customer analytics',
        'Multi-channel support',
        'Knowledge base integration',
        'Performance metrics'
      ],
      pricing: '$39/month',
      users: 'Up to 25 users',
      link: '/ai-customer-support-bot',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-500" />,
      title: 'AI Website Builder',
      description: 'AI-powered website creation with smart templates, content generation, and SEO optimization.',
      features: [
        'AI-generated templates',
        'Content generation',
        'SEO optimization',
        'Mobile responsiveness',
        'Analytics integration',
        'E-commerce features'
      ],
      pricing: '$35/month',
      users: 'Up to 10 websites',
      link: '/ai-website-builder',
      popular: false
    }
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive setup process and pre-configured templates.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and regular security audits.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: 'Mobile First',
      description: 'Access your tools anywhere with our responsive design and mobile apps.'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Infrastructure',
      description: 'Grow without limits with our cloud-based infrastructure that scales with your needs.'
    }
  ]

  const benefits = [
    'No long-term contracts',
    'Cancel anytime',
    '24/7 customer support',
    'Regular updates and new features',
    'API access for integrations',
    'White-label options available'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SaaS applications designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SaaS, SaaS applications, business tools, productivity software, AI tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, focused applications designed to solve specific business challenges. 
            Get the tools you need without the complexity of enterprise software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused solutions that deliver maximum value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using our micro SaaS applications today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS applications designed to solve specific business problems. Affordable, scalable, and easy to use." />
        <meta name="keywords" content="micro SAAS, AI tools, business applications, productivity tools, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Powerful AI-powered micro applications designed to solve specific business problems. 
              Affordable, scalable, and easy to use.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'features'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Our Apps
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'benefits'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Why Choose Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      {activeTab === 'features' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasApps.map((app, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group relative">
                  {app.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {app.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {app.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                    {app.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-white">{app.pricing}</span>
                      <span className="text-gray-400 text-sm">{app.users}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {app.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={app.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {activeTab === 'benefits' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our Micro SAAS Solutions?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Choose from our collection of AI-powered micro applications and start transforming your business today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/ai-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View All Services
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
