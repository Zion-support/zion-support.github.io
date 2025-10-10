'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp, Database, Settings, Lock, Shield, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const WebDevelopmentPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('frontend');

  const services = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces with React, Next.js, and Vue.js',
      icon: Code,
      benefits: ['Responsive design', 'Fast performance', 'SEO optimized', 'Accessibility compliant']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Scalable server-side applications with Node.js, Python, and Java',
      icon: Database,
      benefits: ['API development', 'Database design', 'Security implementation', 'Performance optimization']
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      description: 'Complete web applications from frontend to backend',
      icon: Globe,
      benefits: ['End-to-end solutions', 'Seamless integration', 'Unified architecture', 'Faster development']
    },
    {
      id: 'mobile',
      title: 'Mobile Web Apps',
      description: 'Progressive Web Apps and mobile-optimized web solutions',
      icon: Smartphone,
      benefits: ['Mobile-first design', 'Offline capability', 'Push notifications', 'App-like experience']
    }
  ];

  const capabilities = [
    {
      icon: Code,
      title: 'Modern Frameworks',
      description: 'React, Next.js, Vue.js, Angular, and more'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'PostgreSQL, MongoDB, Redis, and cloud databases'
    },
    {
      icon: Settings,
      title: 'API Development',
      description: 'RESTful APIs, GraphQL, and microservices architecture'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Responsive design and Progressive Web Apps'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Authentication, authorization, and data protection'
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'User tracking, performance monitoring, and insights'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed and user experience'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-grade security and 99.9% uptime guarantee'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow with your business needs and traffic'
    },
    {
      icon: Users,
      title: 'User-Focused',
      description: 'Intuitive interfaces and exceptional user experience'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '95+', label: 'Performance Score', icon: Zap },
    { number: '50%', label: 'Faster Load Times', icon: TrendingUp },
    { number: '24/7', label: 'Support & Monitoring', icon: Clock }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services. Frontend, backend, full-stack, and mobile web solutions for modern businesses."
        keywords="web development, frontend development, backend development, full-stack, mobile web, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Web <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Professional web development services. Frontend, backend, full-stack, and mobile web solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Web Development Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions for all your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service List */}
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedService === service.id
                      ? 'bg-purple-500/20 border-purple-500 border-2'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedService === service.id
                        ? 'bg-purple-500'
                        : 'bg-gradient-to-r from-purple-500 to-blue-600'
                    }`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <selectedServiceData?.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedServiceData?.title}
                </h3>
                <p className="text-gray-300">{selectedServiceData?.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {selectedServiceData?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced web development technologies and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Web Development?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our professional web development services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful web development projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understand your requirements and project goals'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create wireframes, mockups, and user experience design'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build your website with modern technologies and best practices'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploy, test, and launch your website with ongoing support'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your web development needs and create a solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Quote
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;