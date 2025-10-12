<<<<<<< HEAD
'use client';

import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function MicroSaaSServicesPage() {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Micro SaaS Services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Micro SaaS Services</h1>
          <p className="text-xl text-gray-300 mb-8">Micro SaaS Services by Zion Tech Group</p>
          <a
            href="/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
}
=======
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content automatically using advanced AI technology.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content scheduling'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Team collaboration', 'Progress tracking', 'Deadline alerts'],
      pricing: 'Starting at $19/month',
      link: '/ai-task-manager'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI-powered categorization and insights.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Financial reports'],
      pricing: 'Starting at $15/month',
      link: '/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Multi-device sync'],
      pricing: 'Starting at $9/month',
      link: '/ai-password-manager'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered customization and tracking.',
      features: ['Template library', 'Auto-calculation', 'Payment tracking', 'Client management'],
      pricing: 'Starting at $25/month',
      link: '/ai-invoice-generator'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI-powered insights and recommendations.',
      features: ['Health metrics', 'Goal tracking', 'AI insights', 'Progress reports'],
      pricing: 'Starting at $12/month',
      link: '/ai-health-tracker'
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: 'Starting at $18/month',
      link: '/ai-smart-calendar'
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and sustainability solutions powered by AI.',
      features: ['Carbon tracking', 'Sustainability goals', 'Impact reporting', 'Green recommendations'],
      pricing: 'Starting at $35/month',
      link: '/ai-climate-solutions-pro'
=======
      link: '/ai-task-manager',
      popular: true
    },
    {
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      link: '/ai-invoice-generator',
      popular: true
    },
    {
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      popular: false
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
    }
  ];

  const features = [
    {
<<<<<<< HEAD
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'AI-Powered',
      description: 'All our micro SAAS solutions leverage cutting-edge AI technology.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Pricing',
      description: 'Flexible pricing plans that grow with your business needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your success.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI Content Generator has revolutionized our content creation process. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'The AI Task Manager keeps our team organized and productive. Excellent tool!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'These micro SAAS solutions are game-changers. Perfect for small businesses!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SAAS services including AI task management, expense tracking, password management, and more. Streamline your business operations." />
        <meta name="keywords" content="micro SAAS, AI tools, task management, expense tracking, password manager, business automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Specialized micro services designed to streamline your business operations with AI-powered solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {microSAAS.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'AI Tools' },
    { number: '24/7', label: 'Support' }
  ];

  return (
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
          
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver specialized solutions that focus on specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from users who have transformed their workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Streamline Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Choose from our range of micro SAAS solutions to optimize your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
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
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default MicroSAASServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-41ac
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-072b
