'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText,
  Mail,
  Phone,
  MapPin,
  Filter,
  Search
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    // AI Services
    {
      id: 1,
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting for enterprise transformation',
      category: 'AI Services',
      price: '$299/hour',
      features: [
        'AI readiness assessment and gap analysis',
        'Custom AI strategy development and roadmap',
        'Technology stack recommendations and selection',
        'ROI analysis and business case development',
        'Change management and training programs',
        'AI governance and ethics framework'
      ],
      icon: Brain,
      popular: true,
      rating: 4.9,
      clients: '200+',
      link: 'https://ziontechgroup.com/ai-strategy-consulting'
    },
    {
      id: 2,
      title: 'Custom AI Model Development',
      description: 'Bespoke AI model development tailored to your specific business requirements and data',
      category: 'AI Services',
      price: '$15,000 - $150,000',
      features: [
        'Custom machine learning model development',
        'Deep learning and neural network solutions',
        'Natural language processing (NLP) models',
        'Computer vision and image recognition',
        'Predictive analytics and forecasting models',
        'API development and integration'
      ],
      icon: Cpu,
      popular: true,
      rating: 4.8,
      clients: '150+',
      link: 'https://ziontechgroup.com/custom-ai-models'
    },
    {
      id: 3,
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI solutions for customer service, sales, and internal operations',
      category: 'AI Services',
      price: '$5,000 - $50,000',
      features: [
        'GPT-4 powered conversational AI',
        'Multi-channel deployment (web, mobile, voice)',
        'Natural language understanding and processing',
        'Intent recognition and entity extraction',
        'Integration with CRM and business systems',
        'Multi-language support (50+ languages)'
      ],
      icon: Bot,
      popular: true,
      rating: 4.9,
      clients: '300+',
      link: 'https://ziontechgroup.com/ai-chatbot'
    },
    // Cloud Services
    {
      id: 4,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee and 24/7 monitoring',
      category: 'Cloud Services',
      price: '$1,299/month',
      features: [
        '99.9% Uptime SLA with financial guarantees',
        '24/7 monitoring and proactive maintenance',
        'Auto-scaling and load balancing',
        'Cost optimization and resource management',
        'Security management and compliance',
        'Disaster recovery and backup solutions'
      ],
      icon: Cloud,
      popular: true,
      rating: 4.9,
      clients: '500+',
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: 5,
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and data integrity',
      category: 'Cloud Services',
      price: '$2,999/project',
      features: [
        'Zero downtime migration planning',
        'Data integrity and security preservation',
        'Cost optimization and resource allocation',
        'Security compliance and best practices',
        '24/7 support during migration',
        'Post-migration optimization and monitoring'
      ],
      icon: Cloud,
      popular: false,
      rating: 4.7,
      clients: '180+',
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    // Cybersecurity
    {
      id: 6,
      title: 'Cybersecurity Services',
      description: 'Comprehensive cybersecurity solutions including threat detection, incident response, and compliance',
      category: 'Cybersecurity',
      price: '$799/month',
      features: [
        'Security assessment and vulnerability scanning',
        'Penetration testing and ethical hacking',
        'Security monitoring and threat detection',
        'Incident response and forensics',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Security awareness training programs'
      ],
      icon: Shield,
      popular: true,
      rating: 4.9,
      clients: '300+',
      link: 'https://ziontechgroup.com/cybersecurity'
    },
    {
      id: 7,
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention',
      category: 'Cybersecurity',
      price: '$599/month',
      features: [
        'Firewall management and configuration',
        'Intrusion detection and prevention systems',
        'Threat intelligence and monitoring',
        'VPN solutions and remote access',
        'Network segmentation and access control',
        'Security policy management'
      ],
      icon: Lock,
      popular: false,
      rating: 4.8,
      clients: '350+',
      link: 'https://ziontechgroup.com/network-security'
    },
    // Data Analytics
    {
      id: 8,
      title: 'AI Data Analytics Platform',
      description: 'Comprehensive AI-powered data analytics and business intelligence platform',
      category: 'Data Analytics',
      price: '$20,000 - $150,000',
      features: [
        'Advanced data visualization and dashboards',
        'AI-powered insights and recommendations',
        'Real-time data processing and analysis',
        'Custom analytics models and algorithms',
        'Data integration and ETL processes',
        'Interactive reporting and exploration'
      ],
      icon: BarChart,
      popular: true,
      rating: 4.9,
      clients: '220+',
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 9,
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive analytics and forecasting solutions for business intelligence',
      category: 'Data Analytics',
      price: '$25,000 - $200,000',
      features: [
        'Advanced forecasting and prediction models',
        'Time series analysis and trend detection',
        'Customer behavior prediction and segmentation',
        'Risk assessment and fraud detection',
        'Demand forecasting and inventory optimization',
        'Real-time data processing and streaming'
      ],
      icon: TrendingUp,
      popular: true,
      rating: 4.8,
      clients: '180+',
      link: 'https://ziontechgroup.com/predictive-analytics'
    },
    // Mobile Development
    {
      id: 10,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies',
      category: 'Mobile Development',
      price: '$1,999/month',
      features: [
        'Native iOS and Android development',
        'Cross-platform React Native solutions',
        'UI/UX design and optimization',
        'App Store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and API development'
      ],
      icon: Smartphone,
      popular: true,
      rating: 4.8,
      clients: '250+',
      link: 'https://ziontechgroup.com/mobile-development'
    },
    // Database Services
    {
      id: 11,
      title: 'Database Management',
      description: 'Database design, optimization, and management for optimal performance and reliability',
      category: 'Database Services',
      price: '$399/month',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery management',
        'Security and access control',
        'Migration and upgrade services',
        'Monitoring and alerting'
      ],
      icon: Database,
      popular: true,
      rating: 4.8,
      clients: '280+',
      link: 'https://ziontechgroup.com/database-management'
    },
    // Automation
    {
      id: 12,
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation and workflow optimization using AI technologies',
      category: 'Automation',
      price: '$15,000 - $100,000',
      features: [
        'Intelligent document processing and extraction',
        'Automated decision making and routing',
        'Process mining and optimization',
        'RPA integration with AI capabilities',
        'Workflow automation and orchestration',
        'Exception handling and error recovery'
      ],
      icon: Zap,
      popular: true,
      rating: 4.9,
      clients: '140+',
      link: 'https://ziontechgroup.com/ai-automation'
    },
    // Web Development
    {
      id: 13,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      category: 'Web Development',
      price: '$1,299/month',
      features: [
        'React/Next.js and modern frameworks',
        'Full-stack development solutions',
        'API development and integration',
        'Performance optimization and SEO',
        'Responsive design and mobile optimization',
        'E-commerce and CMS solutions'
      ],
      icon: Globe,
      popular: true,
      rating: 4.8,
      clients: '400+',
      link: 'https://ziontechgroup.com/web-development'
    },
    // IT Services
    {
      id: 14,
      title: 'IT Support & Help Desk',
      description: 'Comprehensive IT support with 24/7 help desk, remote assistance, and proactive monitoring',
      category: 'IT Services',
      price: '$199/month',
      features: [
        '24/7 help desk and technical support',
        'Remote desktop assistance and troubleshooting',
        'Hardware and software installation',
        'User account management and permissions',
        'Email and communication system support',
        'Proactive system monitoring'
      ],
      icon: Users,
      popular: true,
      rating: 4.9,
      clients: '800+',
      link: 'https://ziontechgroup.com/it-support'
    },
    {
      id: 15,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to optimize your technology infrastructure and digital transformation',
      category: 'IT Services',
      price: '$299/hour',
      features: [
        'Technology assessment and audit',
        'IT strategy development and planning',
        'Digital transformation roadmaps',
        'Cost optimization and budget planning',
        'Vendor evaluation and selection',
        'Change management and training'
      ],
      icon: Brain,
      popular: true,
      rating: 4.8,
      clients: '200+',
      link: 'https://ziontechgroup.com/it-consulting'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'AI Services', name: 'AI Services' },
    { id: 'Cloud Services', name: 'Cloud Services' },
    { id: 'Cybersecurity', name: 'Cybersecurity' },
    { id: 'Data Analytics', name: 'Data Analytics' },
    { id: 'Mobile Development', name: 'Mobile Development' },
    { id: 'Database Services', name: 'Database Services' },
    { id: 'Automation', name: 'Automation' },
    { id: 'Web Development', name: 'Web Development' },
    { id: 'IT Services', name: 'IT Services' }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience in cutting-edge technologies'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2, GDPR, and HIPAA compliance'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast implementation with proven methodologies and best practices'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and results'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : services.filter(service => 
        service.category === selectedCategory && (
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services | Zion Tech Group - Comprehensive AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud infrastructure, we provide cutting-edge technology services for your business." />
        <meta name="keywords" content="AI services, IT services, cloud solutions, cybersecurity, custom development, data analytics, IT consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations 
            and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-300">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 relative ${
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
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.clients}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-gray-400 text-sm">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 text-center block ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                    }`}
                  >
                    Get Quote
                  </a>
                  <a
                    href="/contact"
                    className="w-full py-2 px-6 rounded-lg font-medium text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;