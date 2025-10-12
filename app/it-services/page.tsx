'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Code, 
  Smartphone, 
  Database, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Server,
  Wifi,
  Users,
  Globe,
  Lock,
  Cpu,
  Zap
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      name: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud Platform with zero downtime',
      price: 'Starting at $5,000',
      originalPrice: '$7,500',
      features: ['Zero-downtime migration', 'Data security', 'Performance optimization', '24/7 support', 'Cost optimization', 'Disaster recovery', 'Monitoring setup', 'Team training'],
      icon: Cloud,
      path: '/cloud-migration',
      popular: true,
      savings: '33%',
      category: 'Cloud Services'
    },
    {
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines and infrastructure automation',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training', 'Container orchestration', 'Security scanning', 'Performance monitoring', 'Incident response'],
      icon: Code,
      path: '/devops-solutions',
      category: 'DevOps & Automation'
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment and implementation with ongoing monitoring',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Vulnerability scanning', 'Incident response', 'Security training', 'Compliance reporting'],
      icon: Shield,
      path: '/cybersecurity',
      category: 'Security Services'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX design',
      price: 'Starting at $8,000',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Maintenance support', 'Push notifications', 'Offline functionality', 'Analytics integration', 'Performance optimization'],
      icon: Smartphone,
      path: '/mobile-development',
      category: 'Mobile Development'
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and monitoring',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL', 'API documentation', 'Rate limiting', 'Analytics dashboard', 'Authentication', 'Versioning', 'Testing suite', 'Performance optimization'],
      icon: Database,
      path: '/api-development',
      category: 'API Development'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, and maintenance services with 24/7 monitoring',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support', 'Query optimization', 'Index management', 'Capacity planning', 'Disaster recovery'],
      icon: Database,
      path: '/database-management',
      category: 'Database Services'
    },
    {
      name: 'Web Development',
      description: 'Modern web applications with responsive design and optimal performance',
      price: 'Starting at $6,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Security implementation', 'CMS integration', 'E-commerce solutions', 'Progressive Web App', 'Analytics integration'],
      icon: Globe,
      path: '/web-development',
      category: 'Web Development'
    },
    {
      name: 'Data Analytics Solutions',
      description: 'Business intelligence and data analytics with custom dashboards and reporting',
      price: 'Starting at $3,000',
      features: ['Custom dashboards', 'Data visualization', 'ETL processes', 'Real-time analytics', 'Machine learning', 'Predictive analytics', 'Data warehousing', 'Report automation'],
      icon: BarChart3,
      path: '/data-analytics',
      category: 'Data & Analytics'
    },
    {
      name: 'IT Infrastructure Design',
      description: 'Complete IT infrastructure design and implementation for enterprise environments',
      price: 'Starting at $10,000',
      features: ['Network design', 'Server configuration', 'Storage solutions', 'Security implementation', 'Backup systems', 'Monitoring setup', 'Documentation', 'Training'],
      icon: Server,
      path: '/it-infrastructure',
      category: 'Infrastructure'
    },
    {
      name: 'Blockchain Solutions',
      description: 'Blockchain development and smart contract implementation for various industries',
      price: 'Starting at $15,000',
      features: ['Smart contracts', 'DApp development', 'Token creation', 'DeFi solutions', 'NFT platforms', 'Consensus mechanisms', 'Security auditing', 'Integration services'],
      icon: Shield,
      path: '/blockchain-solutions',
      category: 'Blockchain'
    },
    {
      name: 'IoT Development',
      description: 'Internet of Things solutions with device management and data processing',
      price: 'Starting at $7,000',
      features: ['Device connectivity', 'Data processing', 'Real-time monitoring', 'Dashboard development', 'Mobile apps', 'Cloud integration', 'Security implementation', 'Scalability planning'],
      icon: Wifi,
      path: '/iot-development',
      category: 'IoT Solutions'
    },
    {
      name: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services',
      price: 'Starting at $200/hour',
      features: ['Technology assessment', 'Digital strategy', 'Process optimization', 'Technology selection', 'Implementation planning', 'Change management', 'ROI analysis', 'Ongoing support'],
      icon: Users,
      path: '/it-consulting',
      category: 'Consulting'
    }
  ];

  const additionalServices = [
    { name: 'Web Development', path: '/web-development', icon: Globe },
    { name: 'Data Analytics', path: '/data-analytics', icon: BarChart3 },
    { name: 'IT Consulting', path: '/it-consulting', icon: Users },
    { name: 'System Integration', path: '/system-integration', icon: Server },
    { name: 'Network Security', path: '/network-security', icon: Lock },
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const technologies = [
    { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, Google Cloud, Kubernetes' },
    { name: 'Programming Languages', icon: Code, description: 'Python, JavaScript, Java, C#, Go, Rust' },
    { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis, Elasticsearch' },
    { name: 'DevOps Tools', icon: Server, description: 'Docker, Jenkins, Terraform, Ansible' },
    { name: 'Security', icon: Shield, description: 'OWASP, ISO 27001, SOC 2, GDPR' },
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Flutter, Swift, Kotlin' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions & Support</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, mobile development, and database management. Enterprise-grade solutions from Zion Tech Group." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, database management, IT consulting, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              IT Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive IT solutions. From cloud migration 
            to cybersecurity, we deliver enterprise-grade technology services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core IT Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core IT Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional IT solutions designed to enhance your business operations and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 hover:bg-slate-700/50 group relative ${
                service.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our full range of IT solutions and specialized services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-4 text-center transition-colors border border-slate-700 hover:border-cyan-500/30 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-sm font-medium">{service.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Master</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We work with the latest technologies and industry-standard tools to deliver robust solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  </div>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions and emerging technologies.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
                <p className="text-gray-300">Enterprise-grade security measures and compliance with industry standards to protect your business.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-full mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring to ensure your systems run smoothly at all times.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can enhance your business operations, security, and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}