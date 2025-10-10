'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Clock, DollarSign, Users, Phone, Mail, MapPin, Brain, BarChart, Target, TrendingUp, Lock, Server, Code, Wifi, HardDrive, Cpu, Monitor } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ITService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  link: string;
  benefits: string[];
  duration: string;
}

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices: ITService[] = [
    {
      id: '1',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud strategy and planning',
        'Automated migration tools',
        'Cost optimization and monitoring',
        'Disaster recovery solutions',
        'Auto-scaling and load balancing',
        '24/7 cloud monitoring'
      ],
      price: '$3,500/month',
      category: 'Cloud',
      popular: true,
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability by 300%', 'Increase uptime to 99.9%'],
      duration: '2-4 weeks'
    },
    {
      id: '2',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      features: [
        'Advanced threat detection',
        'Penetration testing',
        'Security audits and compliance',
        'Incident response planning',
        'Employee security training',
        '24/7 security monitoring'
      ],
      price: '$4,200/month',
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity',
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce security incidents by 85%', 'Ensure compliance with regulations'],
      duration: '1-3 weeks'
    },
    {
      id: '3',
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD Implementation',
      description: 'Streamline development workflows with automated deployment, testing, and monitoring solutions.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration (Kubernetes)',
        'Infrastructure as Code',
        'Automated testing integration',
        'Performance monitoring',
        'Deployment automation'
      ],
      price: '$2,800/month',
      category: 'DevOps',
      popular: false,
      link: 'https://ziontechgroup.com/devops',
      benefits: ['Reduce deployment time by 80%', 'Increase deployment frequency by 10x', 'Improve code quality by 60%'],
      duration: '3-6 weeks'
    },
    {
      id: '4',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and migration services for all major database systems.',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Data migration and consolidation',
        'Backup and recovery solutions',
        'Database monitoring and maintenance',
        'Security hardening'
      ],
      price: '$2,200/month',
      category: 'Database',
      popular: false,
      link: 'https://ziontechgroup.com/database-management',
      benefits: ['Improve query performance by 70%', 'Reduce downtime by 90%', 'Optimize storage usage by 50%'],
      duration: '2-4 weeks'
    },
    {
      id: '5',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: [
        'Native iOS and Android apps',
        'Cross-platform development (React Native/Flutter)',
        'UI/UX design and prototyping',
        'App store optimization',
        'Push notifications and analytics',
        'Maintenance and updates'
      ],
      price: '$5,000/project',
      category: 'Development',
      popular: true,
      link: 'https://ziontechgroup.com/mobile-development',
      benefits: ['Reach mobile users effectively', 'Improve user engagement by 200%', 'Generate new revenue streams'],
      duration: '8-16 weeks'
    },
    {
      id: '6',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Web Application Development',
      description: 'Custom web applications built with modern technologies and frameworks for optimal performance.',
      features: [
        'Full-stack web development',
        'Progressive Web Apps (PWA)',
        'API development and integration',
        'E-commerce solutions',
        'Content management systems',
        'Performance optimization'
      ],
      price: '$4,500/project',
      category: 'Development',
      popular: false,
      link: 'https://ziontechgroup.com/web-development',
      benefits: ['Increase online presence', 'Improve user experience', 'Boost conversion rates by 150%'],
      duration: '6-12 weeks'
    },
    {
      id: '7',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Automate repetitive business processes using RPA and workflow automation tools.',
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow automation design',
        'Integration with existing systems',
        'Process monitoring and analytics',
        'Error handling and recovery',
        'Scalable automation solutions'
      ],
      price: '$1,800/month',
      category: 'Automation',
      popular: false,
      link: 'https://ziontechgroup.com/process-automation',
      benefits: ['Reduce manual work by 75%', 'Increase accuracy by 95%', 'Save 20+ hours per week'],
      duration: '2-6 weeks'
    },
    {
      id: '8',
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance for optimal performance.',
      features: [
        'Server setup and configuration',
        'Network design and implementation',
        'Hardware procurement and installation',
        'System monitoring and maintenance',
        'Capacity planning and scaling',
        'Disaster recovery planning'
      ],
      price: '$3,000/month',
      category: 'Infrastructure',
      popular: false,
      link: 'https://ziontechgroup.com/it-infrastructure',
      benefits: ['Ensure 99.9% uptime', 'Reduce IT costs by 30%', 'Improve system performance by 50%'],
      duration: '4-8 weeks'
    },
    {
      id: '9',
      icon: <BarChart className="w-8 h-8 text-pink-500" />,
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: [
        'Data warehouse design',
        'ETL/ELT processes',
        'Business intelligence dashboards',
        'Predictive analytics',
        'Data visualization',
        'Real-time reporting'
      ],
      price: '$2,500/month',
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/data-analytics',
      benefits: ['Make data-driven decisions', 'Identify new opportunities', 'Improve operational efficiency by 40%'],
      duration: '3-8 weeks'
    },
    {
      id: '10',
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to help align technology with business goals and digital transformation.',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation and selection',
        'IT governance and compliance',
        'Change management'
      ],
      price: '$200/hour',
      category: 'Consulting',
      popular: false,
      link: 'https://ziontechgroup.com/it-consulting',
      benefits: ['Align IT with business goals', 'Reduce technology risks', 'Optimize IT investments'],
      duration: 'Ongoing'
    }
  ];

  const categories = ['All', 'Cloud', 'Security', 'DevOps', 'Database', 'Development', 'Automation', 'Infrastructure', 'Analytics', 'Consulting'];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, DevOps, database management, and custom development for modern businesses." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, DevOps, database management, web development, mobile development" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete technology solutions to modernize your infrastructure, enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
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
                  className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                    category === selectedCategory
                      ? 'bg-cyan-600 text-white'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to solve complex business challenges and drive growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      {service.price.includes('/month') && <span className="text-gray-400">/month</span>}
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <span className="bg-white/10 px-2 py-1 rounded-full">{service.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="text-sm text-gray-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-cyan-600 text-white px-4 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our IT experts to discuss your requirements and discover how our solutions can modernize your technology stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ItServicesPage;