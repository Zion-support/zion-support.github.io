'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Shield, Zap, ArrowRight, Star, Globe, Smartphone, Mail, Phone, MapPin, CheckCircle, Clock, Users, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigration: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Cloud,
      title: 'AWS Migration',
      description: 'Complete migration to Amazon Web Services with optimized architecture and cost management',
      features: ['EC2, S3, RDS setup', 'Auto-scaling configuration', 'Cost optimization', 'Security hardening'],
      price: 'Starting at $2,500'
    },
    {
      icon: Cloud,
      title: 'Azure Migration',
      description: 'Microsoft Azure cloud migration with hybrid cloud solutions and enterprise integration',
      features: ['Virtual Machines', 'Azure SQL Database', 'Active Directory sync', 'DevOps integration'],
      price: 'Starting at $2,200'
    },
    {
      icon: Cloud,
      title: 'Google Cloud Migration',
      description: 'Google Cloud Platform migration with AI/ML integration and data analytics optimization',
      features: ['Compute Engine', 'BigQuery setup', 'AI/ML services', 'Kubernetes orchestration'],
      price: 'Starting at $2,800'
    },
    {
      icon: Shield,
      title: 'Multi-Cloud Strategy',
      description: 'Hybrid and multi-cloud architecture design for maximum flexibility and redundancy',
      features: ['Cross-cloud integration', 'Disaster recovery', 'Load balancing', 'Compliance management'],
      price: 'Starting at $5,000'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '99.9% Uptime',
      description: 'Enterprise-grade reliability with automatic failover and redundancy'
    },
    {
      icon: BarChart,
      title: '40% Cost Reduction',
      description: 'Optimized resource allocation and pay-as-you-scale pricing'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security features and compliance with industry standards'
    },
    {
      icon: Clock,
      title: 'Faster Deployment',
      description: 'Rapid scaling and deployment capabilities for business growth'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements'
    },
    {
      step: '2',
      title: 'Architecture Design',
      description: 'Custom cloud architecture design optimized for your specific needs'
    },
    {
      step: '3',
      title: 'Migration Execution',
      description: 'Seamless migration with zero downtime and data integrity guarantees'
    },
    {
      step: '4',
      title: 'Optimization & Support',
      description: 'Post-migration optimization and ongoing support for peak performance'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'TechStart Inc',
      content: 'Zion Tech Group migrated our entire infrastructure to AWS in just 2 weeks. The cost savings were immediate and significant.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'Enterprise Solutions',
      content: 'The multi-cloud strategy they implemented gave us the flexibility we needed. Our uptime improved to 99.95%.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'CEO',
      company: 'E-commerce Platform',
      content: 'Migration to Google Cloud with AI integration transformed our business. We can now scale instantly during peak times.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Professional Cloud Migration Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime. 
              Achieve 40% cost reduction and 99.9% uptime with our expert migration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Free Assessment
              </a>
              <a
                href="#services"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Successful Migrations</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Cloud Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of cloud migration solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mr-6">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                    <div className="text-blue-400 font-bold text-lg">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Cloud Migration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional cloud migration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 4-step process for successful cloud migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cloud migration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get a free cloud migration assessment and discover how much you can save. 
            Our experts will analyze your current infrastructure and provide a detailed migration plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudMigration;