'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Code, Cloud, Shield, Database, Smartphone, Server, Star, DollarSign, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ITServicesPage() {
  const services = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced performance.',
      price: 'Starting at $2,500',
      features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      popular: true,
      duration: '2-4 weeks'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      price: '$1,500/month',
      features: ['Threat monitoring', 'Vulnerability assessment', 'Security training', 'Incident response'],
      icon: <Shield className="w-8 h-8 text-green-500" />,
      popular: false,
      duration: 'Ongoing'
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      price: 'Starting at $5,000',
      features: ['Native & cross-platform', 'UI/UX design', 'App store deployment', 'Maintenance support'],
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      popular: false,
      duration: '6-12 weeks'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      price: '$2,000/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Data visualization', 'Custom reports'],
      icon: <Database className="w-8 h-8 text-orange-500" />,
      popular: false,
      duration: 'Ongoing'
    },
    {
      id: 'devops-cicd',
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      price: '$3,000 setup',
      features: ['Automated deployments', 'Infrastructure as code', 'Monitoring & alerting', 'Performance optimization'],
      icon: <Server className="w-8 h-8 text-red-500" />,
      popular: false,
      duration: '2-3 weeks'
    },
    {
      id: 'it-support',
      title: 'IT Support',
      description: 'Comprehensive IT support and maintenance services for your business.',
      price: '$800/month',
      features: ['24/7 helpdesk', 'Remote support', 'Hardware maintenance', 'Software updates'],
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      popular: false,
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your peace of mind.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced threat protection and compliance.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs and requirements.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The cloud migration was seamless and our performance improved by 300%. Highly recommend their services.',
      rating: 5,
      avatar: 'SJ',
      service: 'Cloud Migration'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their cybersecurity solutions have protected us from multiple threats. The monitoring is excellent.',
      rating: 5,
      avatar: 'MC',
      service: 'Cybersecurity'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'The mobile app they developed exceeded our expectations. Great team and excellent communication.',
      rating: 5,
      avatar: 'ER',
      service: 'Mobile Development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, mobile development, and data analytics. Transform your business with our expert solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, mobile development, data analytics, DevOps, IT support, enterprise solutions" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to power your business growth. From cloud migration to cybersecurity, 
            we provide the expertise and technology you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of IT services designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.duration}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 mx-auto">
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-blue-400 text-xs">{testimonial.service}</p>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our expert team help you build a robust, scalable, and secure IT environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Portfolio
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
