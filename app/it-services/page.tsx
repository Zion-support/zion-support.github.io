'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Search,
  Filter,
  Server,
  Lock,
  BarChart3,
  Cpu,
  HardDrive,
  Network,
  Monitor,
  Headphones,
  DollarSign,
  Target,
  FileText,
  Calendar
} from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  marketPrice?: string;
  savings?: string;
  benefits: string[];
  useCases: string[];
  link: string;
}

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices: ITService[] = [
    // Cloud Services
    {
      id: '1',
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee, auto-scaling, and 24/7 monitoring.',
      features: [
        '99.9% uptime SLA',
        'Auto-scaling capabilities',
        '24/7 monitoring',
        'Cost optimization',
        'Security management',
        'Backup and disaster recovery',
        'Multi-cloud support',
        'Performance optimization'
      ],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true,
      marketPrice: '$2,999/month',
      savings: '57% savings',
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      useCases: [
        'Cloud migration and optimization',
        'Hybrid cloud solutions',
        'Disaster recovery planning',
        'Cost optimization strategies'
      ],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: '2',
      icon: Cloud,
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and data integrity preservation.',
      features: [
        'Zero-downtime migration',
        'Data integrity preservation',
        'Cost optimization',
        'Security compliance',
        '24/7 support',
        'Performance testing',
        'Rollback capabilities',
        'Documentation and training'
      ],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services',
      popular: false,
      marketPrice: '$7,999/project',
      savings: '63% savings',
      benefits: [
        'Minimize business disruption',
        'Reduce migration risks',
        'Optimize cloud costs',
        'Improve performance and scalability'
      ],
      useCases: [
        'Legacy system modernization',
        'Multi-cloud strategy implementation',
        'Disaster recovery setup',
        'Compliance and security enhancement'
      ],
      link: 'https://ziontechgroup.com/cloud-migration'
    },

    // Cybersecurity
    {
      id: '3',
      icon: Shield,
      title: 'Comprehensive Cybersecurity Suite',
      description: 'Advanced cybersecurity solutions with threat detection, vulnerability assessment, and automated response.',
      features: [
        '24/7 threat monitoring',
        'Vulnerability assessment',
        'Penetration testing',
        'Incident response',
        'Security awareness training',
        'Compliance management',
        'Firewall management',
        'Endpoint protection'
      ],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      popular: true,
      marketPrice: '$1,999/month',
      savings: '60% savings',
      benefits: [
        'Protect against 99.9% of threats',
        'Reduce security incidents by 85%',
        'Ensure regulatory compliance',
        'Minimize business risk'
      ],
      useCases: [
        'Network security monitoring',
        'Compliance and audit preparation',
        'Incident response planning',
        'Security awareness programs'
      ],
      link: 'https://ziontechgroup.com/cybersecurity-suite'
    },
    {
      id: '4',
      icon: Lock,
      title: 'Security Monitoring & SOC',
      description: '24/7 Security Operations Center with advanced threat detection, incident response, and compliance reporting.',
      features: [
        '24/7 SOC monitoring',
        'Advanced threat detection',
        'Automated incident response',
        'Compliance reporting',
        'Threat intelligence',
        'Forensic analysis',
        'Security metrics dashboard',
        'Custom alerting'
      ],
      price: 'Starting at $1,199/month',
      category: 'Cybersecurity',
      popular: false,
      marketPrice: '$2,999/month',
      savings: '60% savings',
      benefits: [
        'Detect threats in real-time',
        'Reduce response time by 90%',
        'Improve security posture',
        'Ensure continuous compliance'
      ],
      useCases: [
        'Enterprise security monitoring',
        'Compliance requirements',
        'Incident response management',
        'Security operations optimization'
      ],
      link: 'https://ziontechgroup.com/security-monitoring'
    },

    // Infrastructure & DevOps
    {
      id: '5',
      icon: Settings,
      title: 'DevOps & CI/CD Implementation',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
      features: [
        'CI/CD pipeline setup',
        'Automated testing',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring and alerting',
        'Version control management',
        'Deployment automation',
        'Performance optimization'
      ],
      price: 'Starting at $999/month',
      category: 'DevOps',
      popular: true,
      marketPrice: '$2,499/month',
      savings: '60% savings',
      benefits: [
        'Reduce deployment time by 80%',
        'Improve code quality',
        'Increase development velocity',
        'Minimize deployment risks'
      ],
      useCases: [
        'Software development acceleration',
        'Quality assurance automation',
        'Infrastructure automation',
        'Release management optimization'
      ],
      link: 'https://ziontechgroup.com/devops-cicd'
    },
    {
      id: '6',
      icon: Server,
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for enterprise environments.',
      features: [
        'Server setup and configuration',
        'Network infrastructure',
        'Storage management',
        'Backup and recovery',
        'Performance monitoring',
        'Capacity planning',
        'Hardware maintenance',
        'Disaster recovery'
      ],
      price: 'Starting at $1,499/month',
      category: 'Infrastructure',
      popular: false,
      marketPrice: '$3,499/month',
      savings: '57% savings',
      benefits: [
        'Improve system reliability',
        'Optimize performance',
        'Reduce maintenance costs',
        'Ensure business continuity'
      ],
      useCases: [
        'Data center management',
        'Server consolidation',
        'Network optimization',
        'Disaster recovery planning'
      ],
      link: 'https://ziontechgroup.com/it-infrastructure'
    },

    // Database Services
    {
      id: '7',
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Database design, optimization, migration, and management with AI-powered performance tuning.',
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery',
        'Migration services',
        'Security hardening',
        'Monitoring and alerting',
        'Capacity planning',
        'Query optimization'
      ],
      price: 'Starting at $599/month',
      category: 'Database',
      popular: false,
      marketPrice: '$1,499/month',
      savings: '60% savings',
      benefits: [
        'Improve database performance by 70%',
        'Reduce downtime by 90%',
        'Optimize storage costs',
        'Enhance data security'
      ],
      useCases: [
        'Database performance tuning',
        'Data migration projects',
        'Backup and recovery planning',
        'Database security enhancement'
      ],
      link: 'https://ziontechgroup.com/database-management'
    },

    // Development Services
    {
      id: '8',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UX design and AI integration.',
      features: [
        'Native iOS and Android apps',
        'Cross-platform development',
        'UI/UX design',
        'API integration',
        'Push notifications',
        'App store optimization',
        'Performance optimization',
        'Maintenance and support'
      ],
      price: 'Starting at $1,999/month',
      category: 'Development',
      popular: true,
      marketPrice: '$4,999/month',
      savings: '60% savings',
      benefits: [
        'Reach customers on all devices',
        'Improve user engagement',
        'Increase business efficiency',
        'Stay competitive in mobile market'
      ],
      useCases: [
        'Customer-facing mobile apps',
        'Internal business applications',
        'E-commerce mobile solutions',
        'IoT and connected device apps'
      ],
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      id: '9',
      icon: Globe,
      title: 'Web Development & E-commerce',
      description: 'Modern, responsive web applications and e-commerce platforms built with cutting-edge technologies.',
      features: [
        'Responsive web design',
        'E-commerce platforms',
        'Content management systems',
        'API development',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Maintenance and support'
      ],
      price: 'Starting at $1,299/month',
      category: 'Development',
      popular: false,
      marketPrice: '$2,999/month',
      savings: '57% savings',
      benefits: [
        'Improve online presence',
        'Increase conversion rates',
        'Enhance user experience',
        'Boost search engine rankings'
      ],
      useCases: [
        'Corporate websites',
        'E-commerce platforms',
        'Web applications',
        'Portfolio and marketing sites'
      ],
      link: 'https://ziontechgroup.com/web-development'
    },

    // Managed Services
    {
      id: '10',
      icon: Headphones,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support, proactive monitoring, and help desk services.',
      features: [
        '24/7 help desk support',
        'Proactive monitoring',
        'Remote maintenance',
        'Security management',
        'Backup solutions',
        'Software updates',
        'Hardware maintenance',
        'IT consulting'
      ],
      price: 'Starting at $999/month',
      category: 'Managed Services',
      popular: true,
      marketPrice: '$2,499/month',
      savings: '60% savings',
      benefits: [
        'Reduce IT management burden',
        'Improve system reliability',
        'Lower total cost of ownership',
        'Access to expert support'
      ],
      useCases: [
        'Small to medium business IT',
        'Remote workforce support',
        'IT department augmentation',
        'Compliance and security management'
      ],
      link: 'https://ziontechgroup.com/managed-it'
    },
    {
      id: '11',
      icon: BarChart3,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to optimize your technology infrastructure and align with business goals.',
      features: [
        'Technology assessment',
        'Strategic planning',
        'Digital transformation',
        'Cost optimization',
        'Vendor management',
        'Project management',
        'Change management',
        'Training and support'
      ],
      price: 'Starting at $299/hour',
      category: 'Consulting',
      popular: false,
      marketPrice: '$599/hour',
      savings: '50% savings',
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Improve operational efficiency',
        'Reduce technology risks'
      ],
      useCases: [
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation initiatives',
        'IT governance and compliance'
      ],
      link: 'https://ziontechgroup.com/it-consulting'
    },

    // Specialized Services
    {
      id: '12',
      icon: Network,
      title: 'Network Solutions & Security',
      description: 'Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.',
      features: [
        'Network design and implementation',
        'VPN and remote access',
        'Load balancing',
        'Network security',
        'Wireless solutions',
        'Network monitoring',
        'Performance optimization',
        'Disaster recovery'
      ],
      price: 'Starting at $699/month',
      category: 'Networking',
      popular: false,
      marketPrice: '$1,799/month',
      savings: '61% savings',
      benefits: [
        'Improve network performance',
        'Enhance security posture',
        'Enable remote work',
        'Reduce network downtime'
      ],
      useCases: [
        'Enterprise network setup',
        'Remote workforce enablement',
        'Network security enhancement',
        'Performance optimization'
      ],
      link: 'https://ziontechgroup.com/network-solutions'
    },
    {
      id: '13',
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery.',
      features: [
        'Automated backups',
        'Instant recovery',
        'Disaster recovery planning',
        'Data encryption',
        'Compliance support',
        'Cloud backup options',
        'Testing and validation',
        '24/7 monitoring'
      ],
      price: 'Starting at $199/month',
      category: 'Data Management',
      popular: false,
      marketPrice: '$499/month',
      savings: '60% savings',
      benefits: [
        'Protect critical business data',
        'Minimize downtime during disasters',
        'Ensure regulatory compliance',
        'Reduce data loss risks'
      ],
      useCases: [
        'Business continuity planning',
        'Compliance requirements',
        'Data protection strategies',
        'Disaster recovery testing'
      ],
      link: 'https://ziontechgroup.com/data-backup'
    },
    {
      id: '14',
      icon: Monitor,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations.',
      features: [
        'Real-time monitoring',
        'Performance alerts',
        'Capacity planning',
        'Trend analysis',
        'Custom dashboards',
        'Automated reporting',
        'Optimization recommendations',
        'Integration capabilities'
      ],
      price: 'Starting at $399/month',
      category: 'Monitoring',
      popular: false,
      marketPrice: '$999/month',
      savings: '60% savings',
      benefits: [
        'Prevent system failures',
        'Optimize resource utilization',
        'Improve performance',
        'Reduce operational costs'
      ],
      useCases: [
        'Infrastructure monitoring',
        'Application performance management',
        'Capacity planning',
        'Performance optimization'
      ],
      link: 'https://ziontechgroup.com/it-monitoring'
    }
  ];

  const categories = ['All', 'Cloud Services', 'Cybersecurity', 'DevOps', 'Infrastructure', 'Database', 'Development', 'Managed Services', 'Consulting', 'Networking', 'Data Management', 'Monitoring'];

  const stats = [
    {
      icon: Users,
      value: '1,000+',
      label: 'IT Projects Delivered',
      description: 'Successfully completed worldwide'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service commitment'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'IT Support',
      description: 'Round-the-clock assistance'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'Proven expertise in IT'
    }
  ];

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system reliability by 95%',
    'Enhance security posture significantly',
    'Enable remote work capabilities',
    'Scale infrastructure efficiently',
    'Ensure regulatory compliance',
    'Minimize downtime and disruptions',
    'Access to expert IT professionals'
  ];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and managed services. Expert IT support and consulting." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, DevOps, IT consulting, network solutions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver enterprise-grade IT services.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search IT services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to modernize your infrastructure and drive business success.
              </p>
              <p className="text-cyan-400 mt-4">
                Showing {filteredServices.length} of {itServices.length} services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    {service.marketPrice && (
                      <div className="text-sm text-gray-400 mb-2">
                        <span className="line-through">{service.marketPrice}</span>
                        <span className="text-green-400 ml-2 font-semibold">{service.savings}</span>
                      </div>
                    )}
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, index) => (
                        <li key={index} className="text-gray-300 text-sm">
                          • {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={service.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Learn More
                    </a>
                    <a
                      href={`tel:+13024640950`}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver proven IT solutions that drive measurable business results and competitive advantage.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your IT needs and create a custom solution that drives real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
              <div className="mt-8 text-gray-400 text-sm">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;