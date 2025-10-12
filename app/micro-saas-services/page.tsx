import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings, Sparkles, Rocket, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MicroSAASServicesPage() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      title: 'AI Carbon Footprint Tracker',
      description: 'Track and reduce your carbon footprint with AI-powered insights and personalized recommendations.',
      features: ['Real-time carbon tracking', 'AI-powered analysis', 'Personalized recommendations', 'Carbon offset marketplace', 'Progress monitoring', 'Environmental impact reports'],
      price: '$9.99/month',
      link: '/ai-carbon-footprint-tracker',
      popular: true,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Home className="w-8 h-8 text-blue-400" />,
      title: 'AI Smart Home Energy Manager',
      description: 'Optimize your home energy consumption with AI-powered automation and real-time monitoring.',
      features: ['Energy optimization', 'Device control', 'Real-time monitoring', 'Cost reduction', 'Automated routines', 'Mobile app access'],
      price: '$14.99/month',
      link: '/ai-smart-home-energy-manager',
      popular: true,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'AI Personal Finance Optimizer',
      description: 'Take control of your finances with AI-powered budgeting, investment recommendations, and financial planning.',
      features: ['Smart budgeting', 'Investment optimization', 'Expense tracking', 'Financial goals', 'Credit monitoring', 'Tax optimization'],
      price: '$12.99/month',
      link: '/ai-personal-finance-optimizer',
      popular: true,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and productivity insights.',
      features: ['Smart prioritization', 'Time tracking', 'Productivity analytics', 'Team collaboration', 'Goal setting', 'Progress monitoring'],
      price: '$29/month',
      link: '/ai-task-manager',
      popular: false,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'Password generation', 'Breach monitoring', 'Multi-device sync', 'Security audit', 'Two-factor authentication'],
      price: '$39/month',
      link: '/ai-password-manager',
      popular: false,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: 'AI Climate Solutions Pro',
      description: 'Comprehensive climate solutions for businesses with AI-powered environmental impact analysis.',
      features: ['Environmental analysis', 'Sustainability reporting', 'Carbon offset programs', 'Green energy optimization', 'Compliance tracking', 'Impact measurement'],
      price: '$99/month',
      link: '/ai-climate-solutions-pro',
      popular: false,
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Intelligence',
      description: 'All our micro SAAS solutions are powered by advanced AI algorithms for superior performance.'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Global Accessibility',
      description: 'Access your solutions from anywhere in the world with our global cloud infrastructure.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our team of experts to ensure your success.'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Environmental Consultant',
      content: 'The AI Carbon Tracker helped me reduce my carbon footprint by 40% in just 6 months. The personalized recommendations are incredibly effective.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Smart Home Owner',
      content: 'The AI Smart Home Manager reduced my electricity bill by 35% while making my home more comfortable. The automation features are incredible.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Financial Advisor',
      content: 'The AI Finance Optimizer helped my clients increase their savings by 40% on average. The personalized recommendations are incredibly accurate.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SAAS solutions including AI carbon tracking, smart home management, finance optimization, and more. Transform your daily tasks with AI-powered tools." />
        <meta name="keywords" content="micro SAAS, AI tools, carbon tracking, smart home, finance optimization, productivity tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
              <Rocket className="w-4 h-4 text-pink-400 mr-2" />
              <span className="text-pink-300 text-sm font-medium">Specialized AI Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Micro SAAS
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent animate-pulse">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              Specialized software-as-a-service solutions designed for specific business needs and personal productivity. 
              Transform your daily tasks with AI-powered micro applications that deliver big results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#services" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Specialized AI-powered tools designed to solve specific problems and enhance productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-pink-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-pink-400 font-semibold">{service.price}</span>
                  <div className="flex items-center text-pink-400 group-hover:text-pink-300 transition-colors font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Why Choose Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We deliver specialized solutions with cutting-edge AI technology and expert support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-pink-500/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-pink-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              What Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from users who have transformed their daily tasks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
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
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl p-8 sm:p-12 lg:p-16 border border-pink-500/30 backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Ready to Transform Your Daily Tasks?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
                Discover the power of AI-powered micro SAAS solutions. Start your free trial today 
                and experience the difference intelligent automation can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-white/25 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}