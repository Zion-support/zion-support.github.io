import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const services = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including voice assistants, API management, and cybersecurity',
      link: '/ai-services',
      features: ['AI Voice Assistant', 'API Management', 'Cybersecurity Suite', 'Content Generation']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Micro SaaS',
      description: 'Powerful micro applications for productivity, expense tracking, and task management',
      link: '/micro-saas-services',
      features: ['Expense Tracker', 'Password Manager', 'Task Manager', 'Email Assistant']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, and custom development',
      link: '/it-services',
      features: ['Cloud Migration', 'Cybersecurity', 'Custom Development', 'Data Analytics']
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network solutions for enhanced connectivity and performance',
      link: '/5g-implementation',
      features: ['Network Infrastructure', 'Edge Computing', 'IoT Solutions', 'Mobile Applications']
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage the latest AI technology to automate and optimize your business processes.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Infrastructure',
      description: 'Solutions that grow with your business and adapt to your changing needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your sensitive data and systems.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Outstanding service and support. Their cloud migration was seamless and efficient.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      content: 'The cybersecurity solutions provided excellent protection for our digital infrastructure.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud computing, data analytics, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}AI & IT Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Leading provider of artificial intelligence, cybersecurity, and digital transformation services. 
            Empower your business with cutting-edge technology solutions.
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
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={service.link}
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get enterprise-grade solutions at startup-friendly prices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Micro SaaS</h3>
              <div className="text-4xl font-bold text-white mb-4">$4-39<span className="text-lg text-gray-300">/month</span></div>
              <p className="text-gray-300 mb-6">Perfect for individuals and small teams</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  AI-powered productivity tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Mobile apps included
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  24/7 support
                </li>
              </ul>
              <Link 
                to="/micro-saas-services"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-block"
              >
                View Micro SaaS
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">AI Services</h3>
              <div className="text-4xl font-bold text-white mb-4">$29-199<span className="text-lg text-gray-300">/month</span></div>
              <p className="text-gray-300 mb-6">Advanced AI solutions for growing businesses</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Voice assistants & chatbots
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  API management & analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Cybersecurity suite
                </li>
              </ul>
              <Link 
                to="/ai-services"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-block"
              >
                View AI Services
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">IT Services</h3>
              <div className="text-4xl font-bold text-white mb-4">$1,500-8,000<span className="text-lg text-gray-300">/project</span></div>
              <p className="text-gray-300 mb-6">Enterprise solutions for large organizations</p>
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Cloud migration & management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Dedicated support team
                </li>
              </ul>
              <Link 
                to="/it-services"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-block"
              >
                View IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}