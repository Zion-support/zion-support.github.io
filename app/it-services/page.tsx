'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Settings, Target, Globe, Database, Smartphone, Lock, TrendingUp, Calendar, CheckSquare, FileText, Mail, Phone, MapPin, DollarSign, Award, Rocket, Sparkles, Server, Network, HardDrive, Monitor, Wifi, Cpu, MemoryStick } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP migration and management with 24/7 monitoring',
      category: 'Cloud',
      icon: Cloud,
      features: [
        'Cloud architecture design and optimization',
        'Migration planning and execution (AWS, Azure, GCP)',
        'Cost optimization and resource management',
        'Security compliance and governance',
        '24/7 monitoring and support',
        'Disaster recovery and backup solutions',
        'Auto-scaling and load balancing',
        'Multi-cloud strategy and management'
      ],
      price: 'Starting at $2,500/month',
      users: 'Unlimited',
      popular: true,
      marketPrice: '$5,000-15,000/month',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability and flexibility', 'Enhance security and compliance', 'Enable remote work capabilities']
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance with industry standards',
      category: 'Security',
      icon: Shield,
      features: [
        'Security assessment and vulnerability scanning',
        'Threat detection and incident response',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Penetration testing and security audits',
        'Security awareness training programs',
        'Firewall and network security configuration',
        'Endpoint protection and monitoring',
        '24/7 Security Operations Center (SOC)'
      ],
      price: 'Starting at $4,000/month',
      users: 'Unlimited',
      popular: true,
      marketPrice: '$8,000-25,000/month',
      benefits: ['Prevent 99.9% of cyber attacks', 'Meet compliance requirements', 'Protect sensitive data', 'Maintain business continuity']
    },
    {
      id: 3,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated development workflows and deployment pipelines for faster, more reliable software delivery',
      category: 'DevOps',
      icon: Settings,
      features: [
        'CI/CD pipeline setup and optimization',
        'Container orchestration (Kubernetes, Docker)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Automated testing and quality assurance',
        'Deployment automation and rollback',
        'Performance monitoring and alerting',
        'Git workflow and branching strategies',
        'Integration with development tools'
      ],
      price: 'Starting at $3,000/month',
      users: 'Up to 50 developers',
      popular: false,
      marketPrice: '$6,000-18,000/month',
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity', 'Enable continuous delivery']
    },
    {
      id: 4,
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, and maintenance for all major database systems',
      category: 'Database',
      icon: Database,
      features: [
        'Database design and architecture planning',
        'Performance optimization and tuning',
        'Backup and disaster recovery solutions',
        'Security hardening and access control',
        'Migration and upgrade services',
        'Monitoring and maintenance',
        'Query optimization and indexing',
        '24/7 database support and administration'
      ],
      price: 'Starting at $1,800/month',
      users: 'Unlimited',
      popular: false,
      marketPrice: '$3,500-12,000/month',
      benefits: ['Improve database performance by 60%', 'Ensure data integrity and security', 'Reduce downtime to near zero', 'Scale database operations efficiently']
    },
    {
      id: 5,
      title: 'Managed IT Services',
      description: 'Complete IT management including helpdesk, monitoring, and maintenance for all your technology needs',
      category: 'Managed Services',
      icon: Monitor,
      features: [
        '24/7 helpdesk and technical support',
        'Proactive monitoring and maintenance',
        'Patch management and updates',
        'Asset management and inventory',
        'User training and support',
        'Vendor management and procurement',
        'IT strategy and planning',
        'Performance optimization and reporting'
      ],
      price: 'Starting at $2,200/month',
      users: 'Up to 100 users',
      popular: true,
      marketPrice: '$4,000-12,000/month',
      benefits: ['Reduce IT costs by 30%', 'Improve system reliability', 'Free up internal resources', 'Ensure consistent IT support']
    },
    {
      id: 6,
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting to align technology with business objectives and drive digital transformation',
      category: 'Consulting',
      icon: Globe,
      features: [
        'Technology roadmap and planning',
        'Digital transformation strategy',
        'Vendor evaluation and selection',
        'Cost analysis and optimization',
        'Change management and training',
        'IT governance and compliance',
        'Technology assessment and audits',
        'Ongoing strategic guidance'
      ],
      price: 'Starting at $1,500/month',
      users: 'Unlimited',
      popular: false,
      marketPrice: '$3,000-10,000/month',
      benefits: ['Align IT with business goals', 'Reduce technology risks', 'Optimize IT investments', 'Drive digital innovation']
    },
    {
      id: 7,
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics solutions and custom dashboards',
      category: 'Analytics',
      icon: BarChart,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT processes and data pipelines',
        'Custom dashboard and report development',
        'Predictive analytics and forecasting',
        'Data governance and quality management',
        'Real-time reporting and alerts',
        'Integration with business systems',
        'Advanced visualization and storytelling'
      ],
      price: 'Starting at $2,800/month',
      users: 'Up to 50 users',
      popular: true,
      marketPrice: '$5,000-15,000/month',
      benefits: ['Make data-driven decisions', 'Identify new business opportunities', 'Improve operational efficiency', 'Gain competitive insights']
    },
    {
      id: 8,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design',
      category: 'Development',
      icon: Smartphone,
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and user experience optimization',
        'API integration and backend development',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Security and performance optimization',
        'Maintenance and ongoing support'
      ],
      price: 'Starting at $8,000/project',
      users: 'Unlimited',
      popular: false,
      marketPrice: '$15,000-100,000/project',
      benefits: ['Reach mobile users effectively', 'Improve customer engagement', 'Increase revenue opportunities', 'Build brand presence']
    },
    {
      id: 9,
      title: 'Web Application Development',
      description: 'Custom web applications and e-commerce solutions built with modern technologies and best practices',
      category: 'Development',
      icon: Code,
      features: [
        'Custom web application development',
        'E-commerce platforms and online stores',
        'API development and integration',
        'Responsive design and mobile optimization',
        'Performance optimization and SEO',
        'Content management systems',
        'Security implementation and testing',
        'Maintenance and ongoing support'
      ],
      price: 'Starting at $6,000/project',
      users: 'Unlimited',
      popular: true,
      marketPrice: '$12,000-80,000/project',
      benefits: ['Enhance online presence', 'Improve user experience', 'Increase conversion rates', 'Scale digital operations']
    },
    {
      id: 10,
      title: 'Process Automation & RPA',
      description: 'Automate repetitive business processes to improve efficiency and reduce costs with RPA solutions',
      category: 'Automation',
      icon: Zap,
      features: [
        'Process analysis and optimization',
        'RPA implementation and deployment',
        'Workflow automation and orchestration',
        'Integration with existing systems',
        'Exception handling and monitoring',
        'Training and change management',
        'Performance tracking and reporting',
        'Ongoing maintenance and support'
      ],
      price: 'Starting at $3,500/month',
      users: 'Up to 100 users',
      popular: false,
      marketPrice: '$6,000-20,000/month',
      benefits: ['Reduce manual work by 80%', 'Improve process accuracy', 'Lower operational costs', 'Scale business operations']
    },
    {
      id: 11,
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security solutions for enterprise environments',
      category: 'Networking',
      icon: Network,
      features: [
        'Network design and architecture',
        'Firewall configuration and management',
        'VPN setup and remote access',
        'Wireless network solutions',
        'Network monitoring and optimization',
        'Security hardening and compliance',
        'Disaster recovery planning',
        '24/7 network support and maintenance'
      ],
      price: 'Starting at $2,000/month',
      users: 'Unlimited',
      popular: false,
      marketPrice: '$4,000-15,000/month',
      benefits: ['Ensure reliable connectivity', 'Improve network security', 'Support remote work', 'Optimize network performance']
    },
    {
      id: 12,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services for all your technology needs with 24/7 availability',
      category: 'Support',
      icon: Users,
      features: [
        '24/7 technical support and helpdesk',
        'Remote assistance and troubleshooting',
        'Hardware maintenance and repair',
        'Software installation and updates',
        'User training and onboarding',
        'Issue tracking and resolution',
        'Knowledge base and documentation',
        'SLA guarantees and reporting'
      ],
      price: 'Starting at $1,200/month',
      users: 'Up to 50 users',
      popular: true,
      marketPrice: '$2,000-8,000/month',
      benefits: ['Minimize downtime and disruptions', 'Improve user productivity', 'Reduce IT support costs', 'Ensure consistent service quality']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'Cloud', name: 'Cloud' },
    { id: 'Security', name: 'Security' },
    { id: 'DevOps', name: 'DevOps' },
    { id: 'Database', name: 'Database' },
    { id: 'Managed Services', name: 'Managed Services' },
    { id: 'Consulting', name: 'Consulting' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Development', name: 'Development' },
    { id: 'Automation', name: 'Automation' },
    { id: 'Networking', name: 'Networking' },
    { id: 'Support', name: 'Support' }
  ];

  const benefits = [
    'Expert team with 10+ years experience',
    '24/7 technical support and monitoring',
    'Scalable solutions that grow with your business',
    'Cutting-edge technology and best practices',
    'Competitive pricing and flexible plans',
    'Proven track record of successful implementations'
  ];

  const stats = [
    { icon: Server, value: '500+', label: 'Servers Managed' },
    { icon: Shield, value: '99.9%', label: 'Security Uptime' },
    { icon: Users, value: '200+', label: 'Clients Served' },
    { icon: Zap, value: '50%', label: 'Cost Reduction' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group - Comprehensive Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud infrastructure, cybersecurity, DevOps, database management, and custom development solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, database management, web development, mobile development" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to modernize your infrastructure, 
            enhance security, and drive business growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                }`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you modernize your IT infrastructure and 
              secure your business for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;