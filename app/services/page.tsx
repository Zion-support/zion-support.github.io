import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Code, Database, Smartphone, Globe, Lock, Users, Zap, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500 to-pink-500',
      href: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud'],
      color: 'from-cyan-500 to-blue-500',
      href: '/cloud-services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-orange-500',
      href: '/cybersecurity'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      color: 'from-green-500 to-emerald-500',
      href: '/custom-development'
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualization tools.',
      href: '/data-analytics'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      href: '/mobile-development'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that drive engagement.',
      href: '/web-development'
    },
    {
      icon: Lock,
      title: 'IT Support',
      description: 'Comprehensive IT support and maintenance services for your business.',
      href: '/it-support'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and technical requirements to understand your goals.',
      icon: Users
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with precision and attention to detail.',
      icon: Code
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud computing, cybersecurity, and custom development - we have you covered." />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, custom development, data analytics, mobile development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive growth. 
            We offer end-to-end services from strategy to implementation and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that have helped hundreds of businesses transform and grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized services to complement your core technology needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <Link
                  to={service.href}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;