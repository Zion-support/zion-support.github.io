'use client';
import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Server, 
  Network, 
  Smartphone, 
  Globe, 
  Settings, 
  Monitor,
  HardDrive,
  Cpu,
  Lock,
  Zap,
  Users,
  BarChart,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Clock,
  DollarSign,
  Award,
  Star,
  Phone,
  Mail,
  Calendar,
  FileText,
  Wifi,
  Router,
  HardDriveIcon,
  DatabaseIcon,
  ServerIcon,
  CloudIcon,
  ShieldIcon,
  CodeIcon,
  SmartphoneIcon,
  GlobeIcon,
  SettingsIcon,
  MonitorIcon
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Settings, count: 30 },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, count: 8 },
    { id: 'security', name: 'Security', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud, count: 7 },
    { id: 'development', name: 'Development', icon: Code, count: 9 }
  ];

  const itServices = [
    // Infrastructure Services
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure Management',
      description: 'Complete network design, implementation, and management with 99.9% uptime guarantee and 24/7 monitoring.',
      category: 'infrastructure',
      icon: Network,
      price: 1999,
      features: [
        'Network Design & Planning',
        'Router & Switch Configuration',
        'Wireless Network Setup',
        'Network Security Implementation',
        'Performance Monitoring',
        '24/7 Support & Maintenance'
      ],
      benefits: [
        '99.9% network uptime',
        '50% faster data transfer',
        'Enhanced security',
        'Reduced downtime'
      ],
      useCases: [
        'Office Network Setup',
        'Data Center Networks',
        'Remote Work Infrastructure',
        'Network Security'
      ],
      pricing: 'monthly',
      implementation: '1-2 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 180
    },
    {
      id: 'server-management',
      name: 'Server Management & Administration',
      description: 'Comprehensive server management including setup, configuration, monitoring, and maintenance for optimal performance.',
      category: 'infrastructure',
      icon: Server,
      price: 2499,
      features: [
        'Server Setup & Configuration',
        'Operating System Management',
        'Performance Optimization',
        'Backup & Recovery',
        'Security Hardening',
        'Automated Monitoring'
      ],
      benefits: [
        '99.9% server uptime',
        '40% performance improvement',
        'Automated maintenance',
        'Proactive issue resolution'
      ],
      useCases: [
        'Web Server Management',
        'Database Servers',
        'Application Servers',
        'File Servers'
      ],
      pricing: 'monthly',
      implementation: '2-3 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 150
    },
    {
      id: 'data-center-services',
      name: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery with enterprise-grade security.',
      category: 'infrastructure',
      icon: HardDrive,
      price: 3999,
      features: [
        'Colocation Services',
        'Managed Hosting',
        'Disaster Recovery',
        'Power & Cooling Management',
        'Physical Security',
        'Compliance Support'
      ],
      benefits: [
        'Enterprise-grade security',
        '99.99% uptime SLA',
        'Disaster recovery',
        'Compliance ready'
      ],
      useCases: [
        'Mission-Critical Applications',
        'Disaster Recovery',
        'Compliance Requirements',
        'High Availability Systems'
      ],
      pricing: 'monthly',
      implementation: '3-4 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 80
    },

    // Security Services
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and incident response.',
      category: 'security',
      icon: Shield,
      price: 2999,
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Security Auditing',
        'Penetration Testing',
        'Security Training',
        'Compliance Management'
      ],
      benefits: [
        '99.9% threat detection',
        'Zero security breaches',
        'Compliance ready',
        'Reduced security risks'
      ],
      useCases: [
        'Enterprise Security',
        'Compliance Audits',
        'Threat Prevention',
        'Security Training'
      ],
      pricing: 'monthly',
      implementation: '2-4 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 200
    },
    {
      id: 'firewall-management',
      name: 'Firewall & Network Security',
      description: 'Advanced firewall configuration, network security monitoring, and intrusion detection with real-time threat prevention.',
      category: 'security',
      icon: Lock,
      price: 1799,
      features: [
        'Firewall Configuration',
        'Intrusion Detection',
        'Network Monitoring',
        'Threat Prevention',
        'Security Policies',
        'Incident Response'
      ],
      benefits: [
        'Real-time threat prevention',
        '99.9% security uptime',
        'Automated responses',
        'Comprehensive monitoring'
      ],
      useCases: [
        'Network Protection',
        'Threat Prevention',
        'Compliance Requirements',
        'Security Monitoring'
      ],
      pricing: 'monthly',
      implementation: '1-2 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 160
    },
    {
      id: 'data-protection',
      name: 'Data Protection & Backup',
      description: 'Comprehensive data protection including automated backups, encryption, and disaster recovery with 99.99% data integrity.',
      category: 'security',
      icon: HardDrive,
      price: 1299,
      features: [
        'Automated Backups',
        'Data Encryption',
        'Disaster Recovery',
        'Data Archiving',
        'Compliance Support',
        'Recovery Testing'
      ],
      benefits: [
        '99.99% data integrity',
        'Automated backups',
        'Quick recovery times',
        'Compliance ready'
      ],
      useCases: [
        'Data Backup',
        'Disaster Recovery',
        'Compliance Requirements',
        'Data Archiving'
      ],
      pricing: 'monthly',
      implementation: '1-2 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 220
    },

    // Cloud Services
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime, cost optimization, and enhanced scalability.',
      category: 'cloud',
      icon: Cloud,
      price: 3499,
      features: [
        'Cloud Strategy Planning',
        'Application Migration',
        'Data Migration',
        'Cost Optimization',
        'Security Implementation',
        'Performance Monitoring'
      ],
      benefits: [
        'Zero downtime migration',
        '40% cost reduction',
        'Enhanced scalability',
        'Improved performance'
      ],
      useCases: [
        'AWS Migration',
        'Azure Migration',
        'Google Cloud Migration',
        'Hybrid Cloud Setup'
      ],
      pricing: 'monthly',
      implementation: '4-6 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 120
    },
    {
      id: 'cloud-management',
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure management including monitoring, optimization, and cost management for optimal performance.',
      category: 'cloud',
      icon: Cloud,
      price: 2199,
      features: [
        'Cloud Monitoring',
        'Performance Optimization',
        'Cost Management',
        'Security Management',
        'Automated Scaling',
        'Backup & Recovery'
      ],
      benefits: [
        '30% cost savings',
        '99.9% uptime',
        'Automated scaling',
        'Optimized performance'
      ],
      useCases: [
        'AWS Management',
        'Azure Management',
        'Google Cloud Management',
        'Multi-cloud Management'
      ],
      pricing: 'monthly',
      implementation: '2-3 weeks',
      support: '24/7',
      rating: 4.7,
      clients: 140
    },
    {
      id: 'hybrid-cloud',
      name: 'Hybrid Cloud Solutions',
      description: 'Hybrid cloud architecture design and implementation for seamless integration between on-premise and cloud environments.',
      category: 'cloud',
      icon: Server,
      price: 2799,
      features: [
        'Hybrid Architecture Design',
        'Integration Services',
        'Data Synchronization',
        'Security Management',
        'Performance Optimization',
        'Monitoring & Analytics'
      ],
      benefits: [
        'Seamless integration',
        'Flexible deployment',
        'Cost optimization',
        'Enhanced security'
      ],
      useCases: [
        'Hybrid Cloud Setup',
        'Cloud Integration',
        'Data Synchronization',
        'Multi-cloud Management'
      ],
      pricing: 'monthly',
      implementation: '3-5 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 90
    },

    // Development Services
    {
      id: 'web-development',
      name: 'Web Development Services',
      description: 'Custom web applications and websites built with modern technologies, responsive design, and optimal performance.',
      category: 'development',
      icon: Globe,
      price: 1999,
      features: [
        'Custom Web Applications',
        'Responsive Design',
        'Performance Optimization',
        'SEO Implementation',
        'Security Integration',
        'Maintenance & Support'
      ],
      benefits: [
        'Modern web technologies',
        'Mobile-responsive design',
        'Fast loading times',
        'SEO optimized'
      ],
      useCases: [
        'Corporate Websites',
        'E-commerce Platforms',
        'Web Applications',
        'Portfolio Sites'
      ],
      pricing: 'monthly',
      implementation: '3-6 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 180
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX and optimal performance.',
      category: 'development',
      icon: Smartphone,
      price: 2499,
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Development',
        'Modern UI/UX Design',
        'Performance Optimization',
        'App Store Deployment',
        'Maintenance & Updates'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'Modern design',
        'App store ready'
      ],
      useCases: [
        'Business Apps',
        'E-commerce Apps',
        'Productivity Apps',
        'Entertainment Apps'
      ],
      pricing: 'monthly',
      implementation: '4-8 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 120
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'Custom API development, third-party integrations, and microservices architecture for scalable applications.',
      category: 'development',
      icon: Code,
      price: 1799,
      features: [
        'Custom API Development',
        'Third-party Integrations',
        'Microservices Architecture',
        'API Documentation',
        'Testing & Optimization',
        'Monitoring & Analytics'
      ],
      benefits: [
        'Scalable architecture',
        'Seamless integrations',
        'Comprehensive documentation',
        'High performance'
      ],
      useCases: [
        'API Development',
        'System Integration',
        'Microservices',
        'Third-party APIs'
      ],
      pricing: 'monthly',
      implementation: '2-4 weeks',
      support: '24/7',
      rating: 4.7,
      clients: 160
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const formatPrice = (price: number, pricing: string) => {
    return `$${price.toLocaleString()}/${pricing === 'monthly' ? 'mo' : 'yr'}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Comprehensive IT Infrastructure & Support
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            From network infrastructure to cloud migration, we provide end-to-end IT services 
            that keep your business running smoothly and securely. Enterprise-grade solutions with 24/7 support.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">500+</div>
              <div className="text-gray-300">Infrastructure Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.clients} clients)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">
                      {formatPrice(service.price, service.pricing)}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Business Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Implementation Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">Implementation</div>
                    <div className="text-xs text-gray-600">{service.implementation}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <Shield className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">Support</div>
                    <div className="text-xs text-gray-600">{service.support}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <Award className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">SLA</div>
                    <div className="text-xs text-gray-600">99.9% Uptime</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold">
                    <Play className="w-5 h-5" />
                    <span>Request Demo</span>
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Managed IT Services */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Managed IT Services
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Let us handle all your IT needs so you can focus on your business. 
              Our managed IT services provide comprehensive support and maintenance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
                <p className="text-cyan-100">Round-the-clock system monitoring and proactive issue resolution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proactive Maintenance</h3>
                <p className="text-cyan-100">Automated updates, patches, and preventive maintenance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>
                <p className="text-cyan-100">Assigned IT specialists and priority support for your business</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-200"
              >
                Get Managed IT Quote
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            IT Services Pricing
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Flexible pricing options for businesses of all sizes. All plans include 
            dedicated support and comprehensive IT management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Small Business Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Business</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$999<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Up to 25 users
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic IT support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Monthly maintenance
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 shadow-2xl transform scale-105">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white mr-2" />
                <span className="text-white font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$2,499<span className="text-lg text-cyan-100">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Up to 100 users
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  24/7 monitoring
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Weekly maintenance
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Dedicated account manager
                </li>
              </ul>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$4,999<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited users
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Premium support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  On-site support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Daily maintenance
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom solutions
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;