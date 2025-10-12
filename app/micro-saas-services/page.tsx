import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings, CheckSquare, BarChart3, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart AI-powered expense tracking with receipt scanning and automatic categorization.',
      features: ['AI receipt scanning', 'Smart categorization', 'Budget management', 'Tax preparation', 'Multi-currency support', 'Mobile app'],
      pricing: 'Starting at $9/month',
      link: '/ai-expense-tracker',
      popular: true,
      marketPrice: '$19-49/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Advanced AI-powered password manager with zero-knowledge encryption and breach monitoring.',
      features: ['AI password generation', 'Zero-knowledge encryption', 'Breach monitoring', 'Multi-device sync', 'Biometric auth', 'Secure sharing'],
      pricing: 'Starting at $4/month',
      link: '/ai-password-manager',
      popular: true,
      marketPrice: '$8-20/month'
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI prioritization and smart scheduling.',
      features: ['AI prioritization', 'Smart scheduling', 'Team collaboration', 'Progress tracking', 'Time tracking', 'Mobile app'],
      pricing: 'Starting at $12/month',
      link: '/ai-task-manager',
      popular: true,
      marketPrice: '$25-60/month'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content automatically using advanced AI technology.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates', 'Plagiarism detection', 'Content scheduling'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: false,
      marketPrice: '$49-99/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Custom dashboards', 'Predictive insights', 'Machine learning', 'Automated reports', 'Data visualization'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      marketPrice: '$99-299/month'
    },
    {
      icon: <Mail className="w-8 h-8 text-indigo-500" />,
      title: 'AI Email Assistant',
      description: 'Intelligent email management with AI-powered composition, scheduling, and organization.',
      features: ['Smart composition', 'Email scheduling', 'Priority sorting', 'Auto-responses', 'Spam filtering', 'Calendar integration'],
      pricing: 'Starting at $19/month',
      link: '/ai-email-assistant',
      popular: false,
      marketPrice: '$39-99/month'
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
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-white">{service.pricing}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                    <Link 
                      to={service.link}
                      className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  <div className="text-xs text-green-400 font-medium">
                    Save up to 75% vs market rates
                  </div>
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
    </div>
  );
};

export default MicroSAASServicesPage;