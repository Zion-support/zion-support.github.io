'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cloud, Shield, Code, Database, Smartphone, Monitor, Wifi, Settings, CheckCircle, ArrowRight, DollarSign, Clock, Users, Star, BarChart3, Headphones, Globe, Lock, HardDrive, Server, Zap, Activity, PieChart, Target, Mail, Calendar, CreditCard, FileText, Search, Camera, MessageSquare } from 'lucide-react'

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  category: string;
  marketPrice: string;
  benefits: string[];
  capabilities: string[];
  useCases: string[];
  link: string;
  popular: boolean;
  deliveryTime: string;
  supportLevel: string;
}

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices: ITService[] = [
    {
      id: 'cloud-infrastructure-management',
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure solutions including migration, optimization, and ongoing management across AWS, Azure, and Google Cloud platforms.',
      features: [
        'Multi-cloud strategy and architecture design',
        'Cloud migration planning and execution',
        'Infrastructure automation and orchestration',
        'Cost optimization and resource management',
        'Security and compliance implementation',
        'Disaster recovery and backup solutions',
        'Performance monitoring and optimization',
        '24/7 cloud infrastructure support'
      ],
      price: '$3,500/month',
      originalPrice: '$6,200/month',
      category: 'Cloud Services',
      marketPrice: '$5,000-15,000/month',
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve system reliability by 99.9%',
        'Accelerate deployment time by 70%',
        'Enhance security posture by 85%'
      ],
      capabilities: [
        'Multi-cloud architecture design',
        'Automated infrastructure provisioning',
        'Cost optimization algorithms',
        'Advanced monitoring and alerting'
      ],
      useCases: [
        'Enterprise cloud migration',
        'Hybrid cloud architecture',
        'Disaster recovery solutions',
        'Cloud cost optimization'
      ],
      link: 'https://ziontechgroup.com/cloud-infrastructure-management',
      popular: true,
      deliveryTime: '4-8 weeks',
      supportLevel: '24/7 Premium'
    },
    {
      id: 'cybersecurity-solutions',
      icon: Shield,
      title: 'Enterprise Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat assessment, security architecture design, implementation, and ongoing monitoring.',
      features: [
        'Security assessment and penetration testing',
        'Security architecture design and implementation',
        'Endpoint protection and detection systems',
        'Network security and firewall management',
        'Identity and access management (IAM)',
        'Security monitoring and incident response',
        'Compliance management (SOC 2, ISO 27001)',
        'Security training and awareness programs'
      ],
      price: '$4,200/month',
      originalPrice: '$7,500/month',
      category: 'Cybersecurity',
      marketPrice: '$6,000-20,000/month',
      benefits: [
        'Reduce security incidents by 90%',
        'Improve compliance posture by 95%',
        'Decrease incident response time by 80%',
        'Protect against 99.9% of known threats'
      ],
      capabilities: [
        'Advanced threat detection',
        'Automated incident response',
        'Compliance automation',
        'Security orchestration'
      ],
      useCases: [
        'Enterprise security transformation',
        'Compliance and audit preparation',
        'Incident response planning',
        'Security awareness training'
      ],
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      popular: true,
      deliveryTime: '6-10 weeks',
      supportLevel: '24/7 Critical'
    },
    {
      id: 'custom-software-development',
      icon: Code,
      title: 'Custom Software Development',
      description: 'End-to-end custom software development services including web applications, mobile apps, and enterprise software solutions.',
      features: [
        'Full-stack web application development',
        'Native and cross-platform mobile apps',
        'Enterprise software solutions',
        'API development and integration',
        'Database design and optimization',
        'UI/UX design and implementation',
        'Quality assurance and testing',
        'DevOps and deployment automation'
      ],
      price: '$2,800/month',
      originalPrice: '$4,500/month',
      category: 'Development',
      marketPrice: '$4,000-12,000/month',
      benefits: [
        'Accelerate time-to-market by 60%',
        'Reduce development costs by 45%',
        'Improve software quality by 80%',
        'Enable rapid scaling and iteration'
      ],
      capabilities: [
        'Agile development methodology',
        'Modern technology stack',
        'Automated testing and deployment',
        'Scalable architecture design'
      ],
      useCases: [
        'Business process automation',
        'Customer-facing applications',
        'Internal tool development',
        'Legacy system modernization'
      ],
      link: 'https://ziontechgroup.com/custom-software-development',
      popular: true,
      deliveryTime: '8-16 weeks',
      supportLevel: 'Business Hours'
    },
    {
      id: 'data-management-solutions',
      icon: Database,
      title: 'Data Management Solutions',
      description: 'Comprehensive data management services including data architecture, migration, warehousing, and analytics platform implementation.',
      features: [
        'Data architecture design and implementation',
        'Data migration and integration services',
        'Data warehouse and lake solutions',
        'ETL/ELT pipeline development',
        'Data quality and governance',
        'Master data management (MDM)',
        'Data analytics and BI platforms',
        'Data security and privacy compliance'
      ],
      price: '$3,200/month',
      originalPrice: '$5,800/month',
      category: 'Data Services',
      marketPrice: '$5,000-18,000/month',
      benefits: [
        'Improve data quality by 85%',
        'Reduce data processing time by 70%',
        'Enable data-driven decision making',
        'Ensure compliance with data regulations'
      ],
      capabilities: [
        'Advanced data architecture',
        'Automated data pipelines',
        'Data quality management',
        'Compliance and governance'
      ],
      useCases: [
        'Data warehouse implementation',
        'Data migration projects',
        'Analytics platform setup',
        'Data governance programs'
      ],
      link: 'https://ziontechgroup.com/data-management-solutions',
      popular: false,
      deliveryTime: '6-12 weeks',
      supportLevel: 'Business Hours'
    },
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android with modern frameworks and best practices.',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Progressive Web App (PWA) development',
        'Mobile UI/UX design',
        'App store optimization and deployment',
        'Push notifications and analytics',
        'Backend API development',
        'App maintenance and updates'
      ],
      price: '$2,500/month',
      originalPrice: '$4,200/month',
      category: 'Mobile Development',
      marketPrice: '$3,500-10,000/month',
      benefits: [
        'Reach customers on all devices',
        'Improve user engagement by 65%',
        'Reduce development time by 50%',
        'Enable offline functionality'
      ],
      capabilities: [
        'Cross-platform development',
        'Native performance optimization',
        'App store management',
        'User experience design'
      ],
      useCases: [
        'Customer-facing mobile apps',
        'Internal business applications',
        'E-commerce mobile solutions',
        'IoT device management apps'
      ],
      link: 'https://ziontechgroup.com/mobile-app-development',
      popular: true,
      deliveryTime: '6-12 weeks',
      supportLevel: 'Business Hours'
    },
    {
      id: 'network-infrastructure',
      icon: Wifi,
      title: 'Network Infrastructure Services',
      description: 'Complete network infrastructure design, implementation, and management including LAN, WAN, wireless, and security solutions.',
      features: [
        'Network architecture design and planning',
        'LAN and WAN implementation',
        'Wireless network deployment',
        'Network security and firewall setup',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      price: '$2,200/month',
      originalPrice: '$3,800/month',
      category: 'Infrastructure',
      marketPrice: '$3,000-8,000/month',
      benefits: [
        'Improve network performance by 60%',
        'Reduce downtime by 85%',
        'Enhance security posture by 90%',
        'Enable remote work capabilities'
      ],
      capabilities: [
        'Advanced network design',
        'Security implementation',
        'Performance monitoring',
        'Automated management'
      ],
      useCases: [
        'Office network setup',
        'Remote work infrastructure',
        'Network security hardening',
        'Performance optimization'
      ],
      link: 'https://ziontechgroup.com/network-infrastructure',
      popular: false,
      deliveryTime: '3-6 weeks',
      supportLevel: '24/7 Standard'
    },
    {
      id: 'devops-automation',
      icon: Settings,
      title: 'DevOps Automation Services',
      description: 'DevOps implementation and automation services including CI/CD pipelines, infrastructure as code, and deployment automation.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration (Kubernetes, Docker)',
        'Automated testing and deployment',
        'Monitoring and logging solutions',
        'Configuration management',
        'Security scanning and compliance',
        'Performance optimization'
      ],
      price: '$2,800/month',
      originalPrice: '$4,500/month',
      category: 'DevOps',
      marketPrice: '$4,000-12,000/month',
      benefits: [
        'Accelerate deployment by 80%',
        'Reduce deployment failures by 90%',
        'Improve system reliability by 70%',
        'Enable continuous delivery'
      ],
      capabilities: [
        'Automated deployment pipelines',
        'Infrastructure automation',
        'Monitoring and alerting',
        'Security integration'
      ],
      useCases: [
        'Application deployment automation',
        'Infrastructure management',
        'Continuous integration setup',
        'Monitoring and alerting'
      ],
      link: 'https://ziontechgroup.com/devops-automation',
      popular: true,
      deliveryTime: '4-8 weeks',
      supportLevel: 'Business Hours'
    },
    {
      id: 'it-consulting-services',
      icon: Monitor,
      title: 'IT Consulting Services',
      description: 'Strategic IT consulting services including technology assessment, digital transformation planning, and technology roadmap development.',
      features: [
        'Technology assessment and audit',
        'Digital transformation strategy',
        'IT roadmap and planning',
        'Technology selection and evaluation',
        'Process optimization and automation',
        'Change management and training',
        'Vendor evaluation and selection',
        'IT governance and compliance'
      ],
      price: '$1,800/month',
      originalPrice: '$3,200/month',
      category: 'Consulting',
      marketPrice: '$2,500-8,000/month',
      benefits: [
        'Align IT with business objectives',
        'Reduce technology costs by 35%',
        'Improve operational efficiency by 50%',
        'Enable digital transformation'
      ],
      capabilities: [
        'Strategic planning',
        'Technology evaluation',
        'Process optimization',
        'Change management'
      ],
      useCases: [
        'Digital transformation planning',
        'Technology modernization',
        'Process optimization',
        'IT strategy development'
      ],
      link: 'https://ziontechgroup.com/it-consulting-services',
      popular: false,
      deliveryTime: '2-4 weeks',
      supportLevel: 'Business Hours'
    },
    {
      id: 'managed-it-services',
      icon: Headphones,
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services including help desk, system monitoring, maintenance, and proactive support.',
      features: [
        '24/7 help desk and technical support',
        'Proactive system monitoring and maintenance',
        'Security monitoring and management',
        'Backup and disaster recovery',
        'Software updates and patch management',
        'Hardware maintenance and replacement',
        'User training and support',
        'IT asset management'
      ],
      price: '$1,500/month',
      originalPrice: '$2,800/month',
      category: 'Managed Services',
      marketPrice: '$2,000-6,000/month',
      benefits: [
        'Reduce IT operational costs by 40%',
        'Improve system uptime by 95%',
        'Eliminate IT management headaches',
        'Enable focus on core business'
      ],
      capabilities: [
        '24/7 monitoring and support',
        'Proactive maintenance',
        'Automated management',
        'Comprehensive reporting'
      ],
      useCases: [
        'Small business IT management',
        'Remote workforce support',
        'System maintenance and updates',
        'Technical support services'
      ],
      link: 'https://ziontechgroup.com/managed-it-services',
      popular: true,
      deliveryTime: '1-2 weeks',
      supportLevel: '24/7 Premium'
    },
    {
      id: 'web-development-services',
      icon: Globe,
      title: 'Web Development Services',
      description: 'Full-service web development including responsive websites, e-commerce platforms, and web applications.',
      features: [
        'Responsive web design and development',
        'E-commerce platform development',
        'Content management systems (CMS)',
        'Web application development',
        'API development and integration',
        'SEO optimization and performance tuning',
        'Security implementation and testing',
        'Ongoing maintenance and support'
      ],
      price: '$2,200/month',
      originalPrice: '$3,800/month',
      category: 'Web Development',
      marketPrice: '$3,000-10,000/month',
      benefits: [
        'Increase online presence and visibility',
        'Improve user experience by 70%',
        'Boost conversion rates by 45%',
        'Enable online business growth'
      ],
      capabilities: [
        'Modern web technologies',
        'Responsive design',
        'Performance optimization',
        'SEO and marketing integration'
      ],
      useCases: [
        'Corporate website development',
        'E-commerce platform setup',
        'Web application development',
        'Website redesign and optimization'
      ],
      link: 'https://ziontechgroup.com/web-development-services',
      popular: true,
      deliveryTime: '4-8 weeks',
      supportLevel: 'Business Hours'
    }
  ];

  const categories = ['All', ...Array.from(new Set(itServices.map(service => service.category)))];

  const benefits = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: 'Scalable Solutions',
      description: 'IT solutions that grow with your business, from startup to enterprise scale.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive protection and compliance management.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Rapid Deployment',
      description: 'Quick implementation and deployment with minimal business disruption.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for critical systems.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions and services to modernize your infrastructure, 
              enhance security, and drive digital transformation across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore IT Services
              </a>
              <a
                href="/consultation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get IT Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Our IT Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our IT Services
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-yellow-400">Most Popular</span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">
                    Delivery: {service.deliveryTime}
                  </div>
                  <div className="text-sm text-gray-400">
                    Support: {service.supportLevel}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-green-400 font-medium">
                    Save {service.originalPrice ? Math.round((1 - parseInt(service.price.replace('$', '').replace('/month', '').replace(',', '')) / parseInt(service.originalPrice.replace('$', '').replace('/month', '').replace(',', ''))) * 100) : 0}%
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <button className="w-full border border-gray-400 text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IT experts help you design and implement the perfect technology solution 
            for your business needs and growth objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Settings className="w-5 h-5 mr-2" />
              Get IT Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Our IT Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServicesPage;