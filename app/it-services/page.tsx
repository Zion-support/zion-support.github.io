'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock, Gauge
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: [
        'Cloud migration and setup',
        'Infrastructure as Code (IaC)',
        'Auto-scaling solutions',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery',
        'Multi-cloud strategies',
        'Cloud security implementation'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Infrastructure',
      popular: true
    },
    {
      title: 'Advanced Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and data',
      price: 'Starting at $3,000',
      features: [
        'Security assessment & auditing',
        'Penetration testing',
        'Security monitoring (SIEM)',
        'Compliance management (SOC2, GDPR)',
        'Incident response planning',
        'Staff security training',
        'Zero-trust architecture',
        'Threat intelligence'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      popular: true
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: 'Starting at $8,000',
      features: [
        'Responsive design (mobile-first)',
        'SEO optimization',
        'Performance tuning',
        'Maintenance support',
        'Progressive Web Apps (PWA)',
        'Cross-browser compatibility',
        'Accessibility compliance',
        'Modern frameworks (React, Vue, Angular)'
      ],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      category: 'Development',
      popular: false
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'Starting at $12,000',
      features: [
        'iOS & Android native apps',
        'Cross-platform development (React Native, Flutter)',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization',
        'App security implementation',
        'Backend integration'
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      category: 'Development',
      popular: false
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful and GraphQL APIs for seamless system integration',
      price: 'Starting at $4,000',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'API documentation (OpenAPI)',
        'Rate limiting & throttling',
        'Authentication & authorization',
        'Performance monitoring',
        'API versioning',
        'Third-party integrations'
      ],
      icon: LinkIcon,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development',
      popular: false
    },
    {
      title: 'Database Design & Management',
      description: 'Database design, optimization, and maintenance for optimal performance',
      price: 'Starting at $2,500',
      features: [
        'Database design & architecture',
        'Performance optimization',
        'Backup and recovery strategies',
        'Security hardening',
        'Migration services',
        '24/7 monitoring',
        'Data warehousing',
        'NoSQL solutions'
      ],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure',
      popular: false
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment and continuous integration pipelines',
      price: 'Starting at $6,000',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration (Kubernetes)',
        'Infrastructure automation',
        'Monitoring and logging',
        'Security scanning',
        'Performance optimization',
        'GitOps workflows',
        'Infrastructure monitoring'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      category: 'DevOps',
      popular: true
    },
    {
      title: '24/7 IT Support & Helpdesk',
      description: 'Comprehensive technical support and maintenance services',
      price: 'Starting at $1,500/month',
      features: [
        '24/7 technical support',
        'Remote monitoring',
        'Preventive maintenance',
        'Hardware support',
        'Software updates',
        'User training',
        'Helpdesk ticketing system',
        'On-site support'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      category: 'Support',
      popular: false
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform data into actionable insights with advanced analytics',
      price: 'Starting at $3,500',
      features: [
        'Data visualization dashboards',
        'Business intelligence solutions',
        'Data warehousing',
        'ETL processes',
        'Machine learning integration',
        'Real-time analytics',
        'Custom reporting',
        'Data governance'
      ],
      icon: BarChart,
      color: 'from-emerald-500 to-teal-500',
      category: 'Analytics',
      popular: false
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet specific business requirements',
      price: 'Starting at $15,000',
      features: [
        'Custom application development',
        'Legacy system modernization',
        'Microservices architecture',
        'Cloud-native development',
        'API development',
        'Database design',
        'Quality assurance testing',
        'Ongoing maintenance'
      ],
      icon: Code,
      color: 'from-violet-500 to-purple-500',
      category: 'Development',
      popular: false
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Design, implement, and secure enterprise network infrastructure',
      price: 'Starting at $4,500',
      features: [
        'Network design & implementation',
        'Firewall configuration',
        'VPN setup',
        'Wireless network deployment',
        'Network monitoring',
        'Security hardening',
        'Load balancing',
        'Network optimization'
      ],
      icon: Wifi,
      color: 'from-amber-500 to-yellow-500',
      category: 'Infrastructure',
      popular: false
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management and optimization',
      price: 'Starting at $1,200/month',
      features: [
        'Asset inventory management',
        'License compliance tracking',
        'Hardware lifecycle management',
        'Software asset optimization',
        'Cost tracking & reporting',
        'Vendor management',
        'Disposal & recycling',
        'Asset security'
      ],
      icon: Package,
      color: 'from-rose-500 to-pink-500',
      category: 'Management',
      popular: false
    },
    {
      title: 'IT Project Management',
      description: 'Professional project management for complex IT implementations',
      price: 'Starting at $2,000/month',
      features: [
        'Project planning & scheduling',
        'Resource allocation',
        'Risk management',
        'Quality assurance',
        'Stakeholder communication',
        'Budget management',
        'Timeline tracking',
        'Change management'
      ],
      icon: CheckSquare,
      color: 'from-slate-500 to-gray-500',
      category: 'Management',
      popular: false
    },
    {
      title: 'Cloud-Native Development',
      description: 'Build scalable applications using cloud-native technologies',
      price: 'Starting at $7,000',
      features: [
        'Microservices architecture',
        'Containerization (Docker)',
        'Kubernetes orchestration',
        'Serverless development',
        'Cloud function development',
        'API gateway implementation',
        'Service mesh deployment',
        'Cloud monitoring'
      ],
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      category: 'Development',
      popular: false
    },
    {
      title: 'AI Integration Services',
      description: 'Integrate artificial intelligence capabilities into existing systems',
      price: 'Starting at $5,500',
      features: [
        'AI model integration',
        'Machine learning pipelines',
        'Data preprocessing',
        'API integration',
        'Model deployment',
        'Performance monitoring',
        'Scalability optimization',
        'Maintenance & updates'
      ],
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      category: 'AI Integration',
      popular: true
    },
    {
      title: 'Blockchain Development',
      description: 'Blockchain solutions and smart contract development',
      price: 'Starting at $8,500',
      features: [
        'Smart contract development',
        'DApp development',
        'Blockchain integration',
        'Cryptocurrency solutions',
        'NFT development',
        'DeFi applications',
        'Security auditing',
        'Token development'
      ],
      icon: LinkIcon,
      color: 'from-orange-500 to-red-500',
      category: 'Blockchain',
      popular: false
    },
    {
      title: 'IoT Development & Integration',
      description: 'Internet of Things solutions for connected devices and systems',
      price: 'Starting at $6,500',
      features: [
        'IoT device development',
        'Sensor integration',
        'Data collection systems',
        'Real-time monitoring',
        'Edge computing',
        'Cloud connectivity',
        'Security implementation',
        'Analytics & insights'
      ],
      icon: Globe,
      color: 'from-green-500 to-cyan-500',
      category: 'IoT',
      popular: false
    },
    {
      title: 'E-commerce Development',
      description: 'Complete e-commerce solutions with modern features and integrations',
      price: 'Starting at $10,000',
      features: [
        'E-commerce platform development',
        'Payment gateway integration',
        'Inventory management',
        'Order processing',
        'Customer management',
        'Mobile commerce',
        'SEO optimization',
        'Analytics integration'
      ],
      icon: ShoppingCart,
      color: 'from-emerald-500 to-green-500',
      category: 'E-commerce',
      popular: false
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize application and system performance for maximum efficiency',
      price: 'Starting at $2,800',
      features: [
        'Application performance tuning',
        'Database optimization',
        'Caching strategies',
        'CDN implementation',
        'Load testing',
        'Code optimization',
        'Infrastructure scaling',
        'Monitoring setup'
      ],
      icon: Gauge,
      color: 'from-yellow-500 to-orange-500',
      category: 'Optimization',
      popular: false
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery and business continuity planning',
      price: 'Starting at $3,500',
      features: [
        'Disaster recovery planning',
        'Backup strategies',
        'Failover systems',
        'Data replication',
        'Recovery testing',
        'Business continuity planning',
        'Risk assessment',
        'Emergency procedures'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      category: 'Security',
      popular: false
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'DevOps', 'Support', 'Analytics', 'Management', 'AI Integration', 'Blockchain', 'IoT', 'E-commerce', 'Optimization'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                IT Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive IT services to build, secure, and optimize your technology infrastructure. 
                From cloud migration to cybersecurity, we have the expertise you need.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500"
                >
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-cyan-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our expert team help you build, secure, and optimize your technology infrastructure 
              for maximum performance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;