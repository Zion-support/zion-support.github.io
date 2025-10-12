import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, Cloud, Wifi, Cpu, Smartphone, Shield, Database, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Services',
      description: 'Transform your business with our comprehensive AI solutions including content generation, chatbots, and automation.',
      features: ['AI Content Generation', 'AI Analytics & BI', 'AI Automation', 'AI Cybersecurity', 'Computer Vision', 'Natural Language Processing'],
      href: '/ai-services'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'IT Services',
      description: 'Complete IT infrastructure and development services to keep your business running smoothly.',
      features: ['Cloud Migration', 'Cybersecurity', 'Network Infrastructure', 'Database Management', 'DevOps & CI/CD', 'IT Support'],
      href: '/it-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud Migration', 'Cloud Infrastructure', 'Cloud Security', 'Multi-Cloud Strategy', 'Cloud Backup', 'Cloud Monitoring'],
      href: '/cloud-services'
    },
    {
      icon: <Wifi className="w-8 h-8 text-cyan-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation.',
      features: ['5G Network Design', 'IoT Integration', 'Edge Computing', '5G Security', 'Network Optimization', '5G Testing'],
      href: '/5g-implementation'
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      features: ['Process Automation', 'Digital Workforce', 'Customer Experience', 'Data Strategy', 'Change Management', 'Technology Consulting'],
      href: '/digital-transformation'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Micro SaaS',
      description: 'AI-powered business tools and micro software solutions for modern businesses.',
      features: ['AI Content Writer Pro', 'AI Analytics Dashboard', 'AI Email Marketing', 'AI CRM Assistant', 'AI Social Media Manager', 'AI Expense Tracker'],
      href: '/micro-saas'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection.'
    },
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients across various industries.'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: 'Global Reach',
      description: 'Scale your business worldwide with our international deployment and support services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group. Transform your business with our cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, IT services, cloud computing, digital transformation, 5G implementation, micro SaaS, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}