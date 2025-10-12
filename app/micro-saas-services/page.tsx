import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality blog posts, social media content, and marketing copy using advanced GPT-4 technology.',
      features: ['GPT-4 powered generation', '50+ content templates', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Plagiarism detection'],
      pricing: '$49/month',
      originalPrice: '$79/month',
      link: '/ai-content-generator',
      popular: true,
      category: 'Content & Marketing',
      freeTrial: '14 days free'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Smart Task Manager',
      description: 'AI-powered task management with intelligent prioritization and automated scheduling.',
      features: ['AI task prioritization', 'Time tracking', 'Team collaboration', 'Calendar integration', 'Progress analytics', 'Mobile app'],
      pricing: '$19/month',
      originalPrice: '$29/month',
      link: '/smart-task-manager',
      popular: false,
      category: 'Productivity',
      freeTrial: '7 days free'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: 'Expense Tracker AI',
      description: 'Automatically track, categorize, and analyze business expenses with receipt scanning and AI insights.',
      features: ['Receipt OCR scanning', 'Smart categorization', 'Tax preparation', 'Budget alerts', 'Expense reports', 'Multi-currency support'],
      pricing: '$15/month',
      originalPrice: '$25/month',
      link: '/expense-tracker-ai',
      popular: true,
      category: 'Finance',
      freeTrial: '30 days free'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Secure Password Manager',
      description: 'Enterprise-grade password management with zero-knowledge encryption and advanced security features.',
      features: ['Zero-knowledge encryption', 'Password generator', 'Breach monitoring', '2FA integration', 'Team sharing', 'Dark web scanning'],
      pricing: '$9/month',
      originalPrice: '$15/month',
      link: '/password-manager',
      popular: false,
      category: 'Security',
      freeTrial: '14 days free'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your business data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'API integrations', 'Automated insights'],
      pricing: '$39/month',
      originalPrice: '$59/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics',
      freeTrial: '14 days free'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: 'Team Collaboration Hub',
      description: 'All-in-one team workspace with chat, file sharing, project management, and video conferencing.',
      features: ['Video conferencing', 'File sharing', 'Project boards', 'Time tracking', 'Document collaboration', 'Mobile apps'],
      pricing: '$25/month',
      originalPrice: '$39/month',
      link: '/team-collaboration-hub',
      popular: false,
      category: 'Collaboration',
      freeTrial: '14 days free'
    },
    {
      icon: <Settings className="w-8 h-8 text-teal-500" />,
      title: 'API Integration Manager',
      description: 'Connect and manage all your business tools with our no-code API integration platform.',
      features: ['500+ integrations', 'No-code setup', 'Real-time sync', 'Error handling', 'Custom workflows', 'Webhook support'],
      pricing: '$35/month',
      originalPrice: '$49/month',
      link: '/api-integration-manager',
      popular: true,
      category: 'Integration',
      freeTrial: '14 days free'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Website Performance Monitor',
      description: 'Monitor your website performance, uptime, and user experience with real-time alerts and detailed analytics.',
      features: ['Uptime monitoring', 'Performance metrics', 'User experience tracking', 'Real-time alerts', 'Detailed reports', 'Global monitoring'],
      pricing: '$29/month',
      originalPrice: '$45/month',
      link: '/website-performance-monitor',
      popular: false,
      category: 'Monitoring',
      freeTrial: '7 days free'
    },
    {
      icon: <Database className="w-8 h-8 text-pink-500" />,
      title: 'Customer Data Platform',
      description: 'Unify customer data from all sources and create comprehensive customer profiles for better marketing.',
      features: ['Data unification', 'Customer profiles', 'Segmentation', 'Marketing automation', 'Privacy compliance', 'Real-time updates'],
      pricing: '$59/month',
      originalPrice: '$89/month',
      link: '/customer-data-platform',
      popular: true,
      category: 'CRM & Marketing',
      freeTrial: '14 days free'
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

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SaaS applications designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SaaS, SaaS applications, business tools, productivity software, AI tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Micro SaaS Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, focused applications designed to solve specific business challenges. 
            Get the tools you need without the complexity of enterprise software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center hover-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 neon-border"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 neon-text">
              Our Micro SaaS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAAS.map((service, index) => (
              <div key={index} className="glass-morphism rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-cyan-400/20 hover-glow group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    {service.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-green-400 font-medium">{service.freeTrial}</span>
                    <span className="text-xs text-gray-400">• No credit card required</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-gray-400 ml-6">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <div className="flex items-center justify-between">
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center hover-glow relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <ArrowRight className="w-4 h-4 ml-1 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    to={service.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Learn More
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
              className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center hover-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="w-5 h-5 ml-2 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 neon-border"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;