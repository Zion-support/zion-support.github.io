import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings, Cpu, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime, enhanced security, and cost optimization strategies.',
      features: [
        'AWS/Azure/GCP migration planning',
        'Zero downtime migration execution',
        'Cost optimization and monitoring',
        'Security compliance (SOC 2, ISO 27001)',
        'Disaster recovery setup',
        'Performance monitoring and optimization',
        '24/7 cloud infrastructure management',
        'Multi-cloud strategy implementation'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-migration',
      category: 'Cloud Services',
      marketPrice: '$5,000-15,000',
      setupTime: '2-4 weeks',
      savings: '40-60% cost reduction'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat assessment, penetration testing, compliance audits, and 24/7 security monitoring.',
      features: [
        'Security assessment and vulnerability scanning',
        'Penetration testing and ethical hacking',
        'Compliance audit (GDPR, HIPAA, PCI DSS)',
        '24/7 security monitoring and incident response',
        'Firewall configuration and management',
        'Endpoint protection and antivirus',
        'Security awareness training',
        'Incident response planning'
      ],
      pricing: 'Starting at $1,800/month',
      popular: true,
      link: '/cybersecurity',
      category: 'Security',
      marketPrice: '$3,000-8,000/month',
      setupTime: '1-3 weeks',
      savings: '50% cost reduction'
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your specific business requirements, from web applications to mobile apps and enterprise systems.',
      features: [
        'Web application development (React, Node.js)',
        'Mobile app development (iOS, Android)',
        'API development and integration',
        'Database design and optimization',
        'UI/UX design and implementation',
        'Quality assurance and testing',
        'DevOps and CI/CD pipeline setup',
        'Ongoing maintenance and support'
      ],
      pricing: 'Starting at $5,000',
      popular: false,
      link: '/custom-development',
      category: 'Development',
      marketPrice: '$10,000-50,000',
      setupTime: '4-12 weeks',
      savings: '30-50% cost reduction'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'Database Management & Analytics',
      description: 'Optimize and maintain your databases for maximum performance, implement data analytics solutions, and ensure data security.',
      features: [
        'Database performance tuning and optimization',
        'Backup strategies and disaster recovery',
        'Data migration and consolidation',
        'Security hardening and access control',
        'Real-time analytics and reporting',
        'Data warehousing solutions',
        'Business intelligence dashboards',
        'Data governance and compliance'
      ],
      pricing: 'Starting at $1,200/month',
      popular: false,
      link: '/database-management',
      category: 'Data Management',
      marketPrice: '$2,500-6,000/month',
      setupTime: '1-2 weeks',
      savings: '40% cost reduction'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms with modern development practices.',
      features: [
        'iOS native app development (Swift)',
        'Android native app development (Kotlin)',
        'Cross-platform development (React Native)',
        'App store deployment and optimization',
        'Push notifications and analytics',
        'Offline functionality and sync',
        'Security and encryption',
        'Performance optimization'
      ],
      pricing: 'Starting at $8,000',
      popular: false,
      link: '/mobile-solutions',
      category: 'Mobile Development',
      marketPrice: '$15,000-40,000',
      setupTime: '6-16 weeks',
      savings: '35% cost reduction'
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for your organization with high availability and security.',
      features: [
        'Network design and architecture',
        'Hardware installation and configuration',
        'Security configuration and firewalls',
        'Performance monitoring and optimization',
        'Wireless network setup and management',
        'VPN and remote access solutions',
        'Network troubleshooting and support',
        'Scalability planning and implementation'
      ],
      pricing: 'Starting at $2,000',
      popular: false,
      link: '/network-infrastructure',
      category: 'Infrastructure',
      marketPrice: '$4,000-12,000',
      setupTime: '2-6 weeks',
      savings: '45% cost reduction'
    },
    {
      icon: <Server className="w-12 h-12 text-cyan-500" />,
      title: 'DevOps & CI/CD',
      description: 'Implement DevOps practices, continuous integration/continuous deployment pipelines, and infrastructure as code solutions.',
      features: [
        'CI/CD pipeline setup and automation',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring and logging solutions',
        'Automated testing and deployment',
        'Security scanning and compliance',
        'Performance optimization',
        'Team training and best practices'
      ],
      pricing: 'Starting at $3,500/month',
      popular: false,
      link: '/devops-cicd',
      category: 'DevOps',
      marketPrice: '$7,000-15,000/month',
      setupTime: '2-4 weeks',
      savings: '50% cost reduction'
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-500" />,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to help you make informed technology decisions, optimize your infrastructure, and plan for future growth.',
      features: [
        'Technology assessment and audit',
        'Strategic planning and roadmap development',
        'Vendor selection and evaluation',
        'Implementation guidance and oversight',
        'Cost optimization and budgeting',
        'Digital transformation planning',
        'Technology training and workshops',
        'Ongoing advisory services'
      ],
      pricing: 'Starting at $150/hour',
      popular: false,
      link: '/it-consulting',
      category: 'Consulting',
      marketPrice: '$200-400/hour',
      setupTime: 'As needed',
      savings: '25% cost reduction'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 40% through efficient solutions, automation, and optimized resource utilization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring services to ensure your systems run smoothly.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience and deep technical expertise.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Flexible solutions that grow with your business needs and adapt to changing requirements.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  const technologies = [
    { name: 'AWS', icon: '☁️', description: 'Amazon Web Services' },
    { name: 'Azure', icon: '🔵', description: 'Microsoft Azure' },
    { name: 'Google Cloud', icon: '🌐', description: 'Google Cloud Platform' },
    { name: 'Docker', icon: '🐳', description: 'Containerization' },
    { name: 'Kubernetes', icon: '⚙️', description: 'Container Orchestration' },
    { name: 'React', icon: '⚛️', description: 'Frontend Framework' },
    { name: 'Node.js', icon: '🟢', description: 'Backend Runtime' },
    { name: 'Python', icon: '🐍', description: 'Programming Language' },
    { name: 'Java', icon: '☕', description: 'Enterprise Development' },
    { name: 'Blockchain', icon: '⛓️', description: 'Distributed Ledger' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and network infrastructure solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, database management, mobile solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of IT services designed to address every aspect of your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {service.pricing}
                    </span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Market Price</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>Setup: {service.setupTime}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {service.category}
                    </span>
                  </div>
                  {service.savings && (
                    <div className="text-sm text-green-600 font-semibold">
                      💰 Save {service.savings}
                    </div>
                  )}
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry best practices to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our proven track record and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already leveraging our IT services to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your IT Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ItServicesPage;
