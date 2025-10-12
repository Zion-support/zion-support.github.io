import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ITServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      duration: '2-4 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security assessment', 'Threat monitoring', 'Incident response', 'Compliance management'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity',
      popular: true,
      duration: 'Ongoing'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server management', 'Network monitoring', 'Backup solutions', '24/7 support'],
      pricing: 'Starting at $800/month',
      link: '/infrastructure',
      popular: false,
      duration: 'Ongoing'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Secure data storage, backup, and recovery solutions for your business.',
      features: ['Data backup', 'Recovery planning', 'Data migration', 'Compliance support'],
      pricing: 'Starting at $600/month',
      link: '/data-management',
      popular: false,
      duration: 'Ongoing'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development',
      popular: false,
      duration: '6-12 weeks'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites.',
      features: ['Responsive design', 'Performance optimization', 'SEO optimization', 'Maintenance support'],
      pricing: 'Starting at $3,000',
      link: '/web-development',
      popular: false,
      duration: '4-8 weeks'
    }
  ];

  const microServices = [
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      title: 'IT Support',
      description: '24/7 technical support for your IT infrastructure.',
      pricing: '$200/month'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Security Audit',
      description: 'Comprehensive security assessment and recommendations.',
      pricing: '$500/audit'
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      title: 'Cloud Setup',
      description: 'Quick cloud infrastructure setup and configuration.',
      pricing: '$1,000/setup'
    }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'Enterprise Solutions Inc.',
      content: 'Their cloud migration was flawless. Zero downtime and significant cost savings. Highly recommended.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'SecureTech Corp.',
      content: 'The cybersecurity team is exceptional. They identified vulnerabilities we never knew existed.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'TechStart LLC',
      content: 'Professional, reliable, and always available. Our IT infrastructure has never been more stable.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and custom development solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure management, web development, mobile development" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and custom development solutions.
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
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive IT solutions designed to modernize and secure your business infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <span className="text-gray-400 text-sm ml-2">({service.duration})</span>
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Quick IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Fast-track IT solutions for immediate business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {microServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-lg font-bold text-white">{service.pricing}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Client Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              See how our IT services have transformed businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
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
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can transform your business operations and drive efficiency.
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
    </div>
  );
}