'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, Cloud, Shield, Database, Server, Smartphone, Wrench, Globe, Lock, Monitor, HardDrive, Cpu, Wifi, Settings, BarChart3, Headphones, Clock, DollarSign, Target, Award, TrendingUp, Building, Code, Network, FileText, Mail, Phone, MapPin } from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  popular: boolean;
  category: string;
  benefits: string[];
  link: string;
}

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices: ITService[] = [
    {
      id: 'cloud-migration',
      icon: Cloud,
      title: 'Cloud Migration Services',
      description: 'Seamless migration of your infrastructure to leading cloud platforms with zero downtime.',
      features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Security Implementation', 'Performance Optimization', '24/7 Support'],
      price: 'Starting at $2,500',
      duration: '2-4 weeks',
      popular: true,
      category: 'Cloud Services',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability and flexibility', 'Enhanced security and compliance', 'Better disaster recovery'],
      link: '/it-services/cloud-migration'
    },
    {
      id: 'cybersecurity-audit',
      icon: Shield,
      title: 'Cybersecurity Audit & Implementation',
      description: 'Comprehensive security assessment and implementation of enterprise-grade security solutions.',
      features: ['Security Assessment', 'Penetration Testing', 'Vulnerability Scanning', 'Security Policy Development', 'Employee Training', 'Ongoing Monitoring'],
      price: '$1,500/month',
      duration: 'Ongoing',
      popular: true,
      category: 'Security',
      benefits: ['Protect against cyber threats', 'Ensure compliance with regulations', 'Reduce security risks by 90%', 'Peace of mind with 24/7 monitoring'],
      link: '/it-services/cybersecurity-audit'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: ['Native iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'API Integration', 'App Store Optimization', 'Maintenance & Support'],
      price: 'Starting at $5,000',
      duration: '6-12 weeks',
      popular: false,
      category: 'Development',
      benefits: ['Reach customers on mobile devices', 'Improve user engagement', 'Increase business visibility', 'Generate additional revenue streams'],
      link: '/it-services/mobile-development'
    },
    {
      id: 'data-analytics',
      icon: BarChart3,
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      price: '$2,000/month',
      duration: 'Ongoing',
      popular: false,
      category: 'Analytics',
      benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Improve operational efficiency', 'Gain competitive advantage'],
      link: '/it-services/data-analytics'
    },
    {
      id: 'network-infrastructure',
      icon: Network,
      title: 'Network Infrastructure Design',
      description: 'Design and implement robust network infrastructure for optimal performance and security.',
      features: ['Network Design', 'Hardware Installation', 'Security Configuration', 'Performance Optimization', 'Monitoring Setup', 'Documentation'],
      price: 'Starting at $3,000',
      duration: '1-3 weeks',
      popular: false,
      category: 'Infrastructure',
      benefits: ['Improve network performance', 'Enhance security posture', 'Reduce downtime', 'Support business growth'],
      link: '/it-services/network-infrastructure'
    },
    {
      id: 'managed-it-services',
      icon: Settings,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including monitoring, maintenance, and support for your entire infrastructure.',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Security Management', 'Backup & Recovery', 'Software Updates'],
      price: '$1,200/month',
      duration: 'Ongoing',
      popular: true,
      category: 'Managed Services',
      benefits: ['Reduce IT costs by 30%', 'Minimize downtime', 'Focus on core business', 'Access to expert support'],
      link: '/it-services/managed-it'
    },
    {
      id: 'devops-implementation',
      icon: Code,
      title: 'DevOps Implementation',
      description: 'Implement DevOps practices and tools to streamline development and deployment processes.',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Automated Testing', 'Container Orchestration', 'Monitoring & Logging', 'Team Training'],
      price: 'Starting at $4,000',
      duration: '4-8 weeks',
      popular: false,
      category: 'DevOps',
      benefits: ['Faster deployment cycles', 'Improved code quality', 'Reduced manual errors', 'Better collaboration'],
      link: '/it-services/devops-implementation'
    },
    {
      id: 'disaster-recovery',
      icon: HardDrive,
      title: 'Disaster Recovery Solutions',
      description: 'Comprehensive backup and disaster recovery solutions to protect your critical business data.',
      features: ['Backup Strategy', 'Data Replication', 'Recovery Testing', 'Cloud Backup', 'RTO/RPO Planning', 'Emergency Response'],
      price: '$800/month',
      duration: 'Ongoing',
      popular: false,
      category: 'Backup & Recovery',
      benefits: ['Minimize data loss', 'Ensure business continuity', 'Meet compliance requirements', 'Reduce recovery time'],
      link: '/it-services/disaster-recovery'
    },
    {
      id: 'it-consulting',
      icon: Users,
      title: 'IT Strategy Consulting',
      description: 'Strategic IT consulting to align technology with business goals and drive digital transformation.',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Vendor Management', 'ROI Analysis'],
      price: '$200/hour',
      duration: 'As needed',
      popular: false,
      category: 'Consulting',
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve operational efficiency', 'Stay competitive'],
      link: '/it-services/it-consulting'
    },
    {
      id: 'system-administration',
      icon: Monitor,
      title: 'System Administration',
      description: 'Professional system administration services for Windows, Linux, and cloud environments.',
      features: ['Server Management', 'User Administration', 'Security Hardening', 'Performance Tuning', 'Patch Management', 'Troubleshooting'],
      price: '$1,000/month',
      duration: 'Ongoing',
      popular: false,
      category: 'Administration',
      benefits: ['Ensure system reliability', 'Improve security posture', 'Optimize performance', 'Reduce maintenance costs'],
      link: '/it-services/system-administration'
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Development', 'Analytics', 'Infrastructure', 'Managed Services', 'DevOps', 'Backup & Recovery', 'Consulting', 'Administration'];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your business operations.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your sensitive data and systems.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent costs and no hidden fees.'
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'TechStart Inc.',
      content: 'Zion Tech Group transformed our IT infrastructure. Their cloud migration saved us 40% on costs while improving performance.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      company: 'FinanceCorp',
      content: 'Their cybersecurity services gave us peace of mind. We feel confident our data is protected 24/7.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      company: 'RetailMax',
      content: 'The mobile app they developed increased our customer engagement by 200%. Excellent work!',
      rating: 5
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Services & Solutions - Professional IT Support | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, mobile development, and managed IT services. Expert solutions for your business." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, mobile development, managed IT, DevOps, data analytics, IT consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Services</span>
              <br />
              <span className="text-white">& Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional IT services and solutions to power your business growth. From cloud migration to cybersecurity, 
              we provide comprehensive technology support for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our IT Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our IT Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  {service.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-purple-300">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.duration}</div>
                    </div>
                  </div>

                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
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

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Contact our expert team for a free consultation and discover how our IT services can drive your business forward.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
