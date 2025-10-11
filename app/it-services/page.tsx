import React from 'react';
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Code, Database, Smartphone, Globe, Wifi, Settings, Lock, Zap, BarChart3, Users, Headphones, Wrench, Monitor, HardDrive, Cpu, Network, Mail, FileText, Search, Target, TrendingUp, Award, Clock, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud & Infrastructure
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and optimized performance.',
      features: [
        'Zero-downtime migration',
        'Cost optimization',
        'Security compliance',
        'Performance monitoring',
        '24/7 support',
        'Backup & disaster recovery'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-migration',
      category: 'Cloud & Infrastructure',
      duration: '2-4 weeks',
      users: '500+',
      rating: '4.9'
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: 'Infrastructure Setup',
      description: 'Complete IT infrastructure design, implementation, and management for modern businesses.',
      features: [
        'Network design & setup',
        'Server configuration',
        'Security implementation',
        'Monitoring & maintenance',
        'Scalability planning',
        'Documentation & training'
      ],
      pricing: 'Starting at $5,000',
      popular: false,
      link: '/infrastructure-setup',
      category: 'Cloud & Infrastructure',
      duration: '3-6 weeks',
      users: '300+',
      rating: '4.8'
    },
    {
      icon: <Wifi className="w-12 h-12 text-purple-500" />,
      title: 'Network Security',
      description: 'Advanced network security solutions with firewall configuration and threat monitoring.',
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'VPN setup',
        'Network monitoring',
        'Security audits',
        'Compliance reporting'
      ],
      pricing: 'Starting at $1,500/month',
      popular: false,
      link: '/network-security',
      category: 'Cloud & Infrastructure',
      duration: '1-2 weeks',
      users: '400+',
      rating: '4.7'
    },

    // Cybersecurity
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity protection with threat detection and incident response.',
      features: [
        'Threat detection & prevention',
        'Security assessments',
        'Incident response',
        'Compliance management',
        'Security training',
        'Penetration testing'
      ],
      pricing: 'Starting at $1,500/month',
      popular: true,
      link: '/cybersecurity-solutions',
      category: 'Cybersecurity',
      duration: '2-3 weeks',
      users: '600+',
      rating: '4.9'
    },
    {
      icon: <Lock className="w-12 h-12 text-yellow-500" />,
      title: 'Data Protection & Backup',
      description: 'Secure data backup solutions with encryption and disaster recovery planning.',
      features: [
        'Automated backups',
        'Data encryption',
        'Disaster recovery',
        'Compliance support',
        'Data migration',
        'Recovery testing'
      ],
      pricing: 'Starting at $800/month',
      popular: false,
      link: '/data-protection',
      category: 'Cybersecurity',
      duration: '1-2 weeks',
      users: '350+',
      rating: '4.6'
    },
    {
      icon: <Search className="w-12 h-12 text-indigo-500" />,
      title: 'Security Audits',
      description: 'Comprehensive security audits to identify vulnerabilities and ensure compliance.',
      features: [
        'Vulnerability assessment',
        'Compliance checking',
        'Risk analysis',
        'Security recommendations',
        'Audit reports',
        'Remediation support'
      ],
      pricing: 'Starting at $3,000',
      popular: false,
      link: '/security-audits',
      category: 'Cybersecurity',
      duration: '1-3 weeks',
      users: '200+',
      rating: '4.8'
    },

    // Development & DevOps
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: [
        'Custom application development',
        'API development',
        'Database design',
        'UI/UX design',
        'Testing & QA',
        'Maintenance & support'
      ],
      pricing: 'Starting at $5,000',
      popular: true,
      link: '/custom-development',
      category: 'Development',
      duration: '4-12 weeks',
      users: '800+',
      rating: '4.7'
    },
    {
      icon: <Settings className="w-12 h-12 text-cyan-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and monitoring.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Automated testing',
        'Deployment automation',
        'Monitoring & logging',
        'Performance optimization'
      ],
      pricing: 'Starting at $2,000/month',
      popular: false,
      link: '/devops-cicd',
      category: 'Development',
      duration: '2-4 weeks',
      users: '450+',
      rating: '4.6'
    },
    {
      icon: <Database className="w-12 h-12 text-emerald-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for optimal performance.',
      features: [
        'Database design & setup',
        'Performance optimization',
        'Data migration',
        'Backup & recovery',
        'Security implementation',
        'Monitoring & maintenance'
      ],
      pricing: 'Starting at $1,200/month',
      popular: false,
      link: '/database-management',
      category: 'Development',
      duration: '1-3 weeks',
      users: '300+',
      rating: '4.5'
    },

    // Mobile & Web Development
    {
      icon: <Smartphone className="w-12 h-12 text-pink-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS & Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: 'Starting at $8,000',
      popular: true,
      link: '/mobile-development',
      category: 'Mobile & Web',
      duration: '6-16 weeks',
      users: '700+',
      rating: '4.8'
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications with cutting-edge technologies.',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'CMS development',
        'SEO optimization',
        'Performance optimization',
        'Security implementation'
      ],
      pricing: 'Starting at $3,000',
      popular: false,
      link: '/web-development',
      category: 'Mobile & Web',
      duration: '3-8 weeks',
      users: '900+',
      rating: '4.7'
    },
    {
      icon: <Monitor className="w-12 h-12 text-purple-600" />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: [
        'Online store setup',
        'Payment gateway integration',
        'Inventory management',
        'Order processing',
        'Customer management',
        'Analytics & reporting'
      ],
      pricing: 'Starting at $4,500',
      popular: false,
      link: '/ecommerce-solutions',
      category: 'Mobile & Web',
      duration: '4-10 weeks',
      users: '500+',
      rating: '4.6'
    },

    // Data & Analytics
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and reporting.',
      features: [
        'Data visualization',
        'Business intelligence',
        'Predictive analytics',
        'Custom dashboards',
        'Data integration',
        'Automated reporting'
      ],
      pricing: 'Starting at $2,000/month',
      popular: true,
      link: '/data-analytics',
      category: 'Data & Analytics',
      duration: '3-6 weeks',
      users: '400+',
      rating: '4.7'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions to drive data-driven decision making.',
      features: [
        'KPI dashboards',
        'Data warehousing',
        'ETL processes',
        'Advanced analytics',
        'Self-service BI',
        'Mobile BI access'
      ],
      pricing: 'Starting at $2,500/month',
      popular: false,
      link: '/business-intelligence',
      category: 'Data & Analytics',
      duration: '4-8 weeks',
      users: '250+',
      rating: '4.8'
    },

    // Support & Maintenance
    {
      icon: <Headphones className="w-12 h-12 text-indigo-600" />,
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for your business needs.',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Issue tracking',
        'Knowledge base',
        'User training',
        'SLA compliance'
      ],
      pricing: 'Starting at $800/month',
      popular: false,
      link: '/it-support',
      category: 'Support & Maintenance',
      duration: 'Immediate',
      users: '1,200+',
      rating: '4.5'
    },
    {
      icon: <Wrench className="w-12 h-12 text-gray-600" />,
      title: 'IT Maintenance',
      description: 'Proactive IT maintenance to ensure optimal performance and prevent issues.',
      features: [
        'System monitoring',
        'Preventive maintenance',
        'Software updates',
        'Hardware maintenance',
        'Performance optimization',
        'Documentation updates'
      ],
      pricing: 'Starting at $600/month',
      popular: false,
      link: '/it-maintenance',
      category: 'Support & Maintenance',
      duration: 'Ongoing',
      users: '800+',
      rating: '4.4'
    },

    // Specialized Services
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and implementation for modern businesses.',
      features: [
        'Digital strategy planning',
        'Process automation',
        'Technology integration',
        'Change management',
        'Training & adoption',
        'Performance monitoring'
      ],
      pricing: 'Starting at $10,000',
      popular: true,
      link: '/digital-transformation',
      category: 'Specialized Services',
      duration: '8-20 weeks',
      users: '150+',
      rating: '4.9'
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry standards and regulatory requirements.',
      features: [
        'Compliance assessment',
        'Policy development',
        'Audit preparation',
        'Risk management',
        'Training programs',
        'Ongoing monitoring'
      ],
      pricing: 'Starting at $3,500',
      popular: false,
      link: '/compliance-governance',
      category: 'Specialized Services',
      duration: '4-12 weeks',
      users: '100+',
      rating: '4.6'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your peace of mind.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'IT solutions that grow with your business and adapt to changing needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients worldwide.'
    }
  ];

  const categories = ['All', 'Cloud & Infrastructure', 'Cybersecurity', 'Development', 'Mobile & Web', 'Data & Analytics', 'Support & Maintenance', 'Specialized Services'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and digital transformation. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, mobile development, data analytics, digital transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Complete IT infrastructure services including cloud migration, cybersecurity, custom development, and digital transformation. 
              Expert solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive IT solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {service.rating}
                    <span className="ml-2">({service.users})</span>
                  </div>
                </div>
                <div className="text-sm text-gray-400 mb-4">Duration: {service.duration}</div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the benefits of working with our expert IT team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can modernize your technology and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Micro SAAS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
