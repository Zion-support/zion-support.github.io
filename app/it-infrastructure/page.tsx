'use client';
import React from 'react';
import { Settings, Server, Database, Shield, Globe, Zap, CheckCircle, Star, Users, Clock, DollarSign, ArrowRight, Phone, Mail, MapPin, Cloud, HardDrive, Network, Cpu, Lock, BarChart, Target, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITInfrastructurePage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and management for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost optimization', 'Security compliance', '24/7 monitoring'],
      price: '$2,500/month',
      originalPrice: '$3,500/month',
      popular: true
    },
    {
      title: 'Network Infrastructure Design',
      description: 'Design and implement secure, scalable network infrastructure for businesses of all sizes.',
      icon: Network,
      features: ['Network design', 'Security implementation', 'Performance optimization', 'Disaster recovery', 'VPN setup', 'Firewall configuration'],
      price: '$1,800/month',
      originalPrice: '$2,500/month',
      popular: false
    },
    {
      title: 'Data Center Solutions',
      description: 'Complete data center setup, management, and optimization for enterprise environments.',
      icon: Server,
      features: ['Data center design', 'Hardware procurement', 'Power management', 'Cooling systems', 'Security protocols', 'Backup systems'],
      price: '$4,000/month',
      originalPrice: '$5,500/month',
      popular: false
    },
    {
      title: 'Server Management & Maintenance',
      description: 'Comprehensive server management including setup, monitoring, maintenance, and optimization.',
      icon: Settings,
      features: ['Server setup', 'Performance monitoring', 'Security updates', 'Backup management', 'Capacity planning', 'Troubleshooting'],
      price: '$1,200/month',
      originalPrice: '$1,800/month',
      popular: true
    },
    {
      title: 'Database Infrastructure',
      description: 'Database design, implementation, and management for optimal performance and security.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Security hardening', 'Replication setup', 'Monitoring'],
      price: '$1,500/month',
      originalPrice: '$2,200/month',
      popular: false
    },
    {
      title: 'IT Security Infrastructure',
      description: 'Comprehensive security infrastructure including firewalls, intrusion detection, and compliance.',
      icon: Shield,
      features: ['Security assessment', 'Firewall configuration', 'Intrusion detection', 'Vulnerability scanning', 'Compliance audit', 'Incident response'],
      price: '$2,200/month',
      originalPrice: '$3,000/month',
      popular: true
    }
  ];

  const benefits = [
    '99.9% uptime guarantee',
    '24/7 monitoring and support',
    'Scalable solutions',
    'Cost optimization',
    'Security compliance',
    'Expert technical team'
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud Platform', description: 'Amazon Web Services infrastructure and services' },
    { name: 'Microsoft Azure', category: 'Cloud Platform', description: 'Microsoft cloud computing platform' },
    { name: 'Google Cloud', category: 'Cloud Platform', description: 'Google cloud infrastructure services' },
    { name: 'VMware', category: 'Virtualization', description: 'Server virtualization and management' },
    { name: 'Docker', category: 'Containerization', description: 'Container platform and orchestration' },
    { name: 'Kubernetes', category: 'Orchestration', description: 'Container orchestration platform' },
    { name: 'Cisco', category: 'Networking', description: 'Network infrastructure and security' },
    { name: 'Fortinet', category: 'Security', description: 'Network security and firewall solutions' },
    { name: 'Microsoft SQL Server', category: 'Database', description: 'Enterprise database management system' },
    { name: 'PostgreSQL', category: 'Database', description: 'Open-source relational database' },
    { name: 'MongoDB', category: 'Database', description: 'NoSQL document database' },
    { name: 'Redis', category: 'Database', description: 'In-memory data structure store' }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our IT infrastructure. The cloud migration was seamless and our systems are now more secure and efficient than ever.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'IT Director, FinanceFirst',
      content: 'Their 24/7 monitoring and support has been invaluable. We have peace of mind knowing our infrastructure is in expert hands.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, StartupXYZ',
      content: 'The cost optimization strategies they implemented saved us 40% on our cloud costs while improving performance. Highly recommended.',
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT infrastructure services including cloud migration, network design, data center solutions, and 24/7 management. Build a robust, scalable, and secure technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Users className="w-5 h-5" />
                <span>500+ successful projects</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 client rating</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#services"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete IT infrastructure solutions designed to support your business growth and ensure optimal performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-6 relative ${service.popular ? 'border-blue-400/40 ring-2 ring-blue-400/20' : 'border-gray-600/40'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <a
                  href="#contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading technologies and platforms to deliver the best infrastructure solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                    <p className="text-blue-400 text-sm">{tech.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Infrastructure Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver reliable, scalable, and secure infrastructure solutions that support your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                <p className="text-gray-300">
                  {benefit === '99.9% uptime guarantee' && 'Our infrastructure solutions are designed for maximum reliability with 99.9% uptime guarantee.'}
                  {benefit === '24/7 monitoring and support' && 'Round-the-clock monitoring and support ensure your systems are always running optimally.'}
                  {benefit === 'Scalable solutions' && 'Infrastructure that grows with your business, from startup to enterprise scale.'}
                  {benefit === 'Cost optimization' && 'We help optimize your infrastructure costs while maintaining performance and reliability.'}
                  {benefit === 'Security compliance' && 'Comprehensive security measures and compliance with industry standards and regulations.'}
                  {benefit === 'Expert technical team' && 'Experienced engineers and architects with deep expertise in infrastructure technologies.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses build robust and scalable IT infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free infrastructure assessment and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITInfrastructurePage;