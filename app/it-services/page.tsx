import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Server, Shield, Cloud, Database, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
export default function ITServicesPage() {
  const services = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      duration: '2-4 weeks'
=======
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support', 'Disaster recovery'],
      pricing: 'Starting at $299/month',
      category: 'Infrastructure'
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'],
      price: 'Starting at $2,500',
      link: '/cloud-migration'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
<<<<<<< HEAD
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
<<<<<<< HEAD
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: true,
      duration: 'Ongoing'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipeline setup', 'Docker containerization', 'Kubernetes orchestration', 'Monitoring setup'],
      pricing: 'Starting at $3,000',
      link: '/devops-cicd',
      popular: false,
      duration: '3-6 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services for optimal performance.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration services'],
      pricing: 'Starting at $800/month',
      link: '/database-management',
      popular: false,
      duration: 'Ongoing'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms with native performance.',
      features: ['Native iOS/Android apps', 'Cross-platform solutions', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      link: '/mobile-app-development',
      popular: true,
      duration: '8-12 weeks'
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support'],
      pricing: 'Starting at $299/month',
      link: '/infrastructure-management',
      popular: false,
      duration: 'Ongoing'
=======
      description: 'Protect your business with comprehensive cybersecurity services and threat monitoring.',
      features: ['24/7 threat monitoring', 'Penetration testing', 'Security audits', 'Incident response'],
      price: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with modern DevOps practices and automation.',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Monitoring & logging', 'Container orchestration'],
      price: 'Starting at $3,000',
      link: '/devops-cicd'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data warehousing', 'Business intelligence', 'Machine learning', 'Real-time dashboards'],
      price: 'Starting at $2,000/month',
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: ['Native & cross-platform', 'UI/UX design', 'App store deployment', 'Maintenance & support'],
      price: 'Starting at $5,000',
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure, transparent, and decentralized applications.',
      features: ['Smart contracts', 'DApp development', 'Tokenization', 'Blockchain consulting'],
      price: 'Starting at $10,000',
      link: '/blockchain'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Infrastructure',
      description: 'Build, deploy, and manage scalable cloud solutions with our expert cloud engineering team.',
      features: [
        'AWS, Azure, GCP expertise',
        'Cloud migration services',
        'Infrastructure as Code',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring'
      ],
      pricing: 'Starting at $3,500/month',
      popular: true,
      link: '/cloud-infrastructure'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive cybersecurity services and threat protection.',
      features: [
        'Security assessments',
        'Penetration testing',
        'Incident response',
        'Compliance management',
        'Security training',
        'Threat monitoring'
      ],
      pricing: 'Starting at $2,800/month',
      popular: true,
      link: '/cybersecurity'
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      features: [
        'Web applications',
        'Mobile apps',
        'API development',
        'Database design',
        'Integration services',
        'Maintenance & support'
      ],
      pricing: 'Starting at $4,000/month',
      popular: false,
      link: '/custom-development'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Management',
      description: 'Organize, secure, and optimize your data with our comprehensive data management solutions.',
      features: [
        'Database design',
        'Data migration',
        'Backup solutions',
        'Data analytics',
        'Data governance',
        'Performance optimization'
      ],
      pricing: 'Starting at $2,200/month',
      popular: false,
      link: '/data-management'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Solutions',
      description: 'Develop and deploy mobile applications that engage users and drive business growth.',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: 'Starting at $3,200/month',
      popular: false,
      link: '/mobile-solutions'
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support services to keep your systems running smoothly and efficiently.',
      features: [
        '24/7 technical support',
        'System monitoring',
        'Software updates',
        'Hardware maintenance',
        'User training',
        'Help desk services'
      ],
      pricing: 'Starting at $1,500/month',
      popular: true,
      link: '/it-support'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cost Efficiency',
      description: 'Reduce IT costs by up to 40% through optimized solutions and automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your IT infrastructure',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalability',
      description: 'Solutions that grow with your business and adapt to changing needs',
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your digital assets',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'TechStart Inc.',
      content: 'The cloud migration was seamless. We saved 60% on infrastructure costs and improved performance significantly.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'DataCorp Solutions',
      content: 'Their cybersecurity solutions gave us peace of mind. Our security posture has never been stronger.',
      rating: 5
    },
    {
      name: 'Mark Rodriguez',
      company: 'InnovateTech',
      content: 'The DevOps implementation transformed our development workflow. Deployments are now 10x faster.',
      rating: 5
    }
  ];

=======
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring', 'Incident response'],
      pricing: 'Starting at $499/month',
      category: 'Security'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Services',
      description: 'Cloud migration, optimization, and management across all major platforms.',
      features: ['AWS/Azure/GCP migration', 'Cloud optimization', 'Cost management', 'Multi-cloud strategy', 'Backup solutions'],
      pricing: 'Starting at $399/month',
      category: 'Cloud'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance for optimal performance.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening'],
      pricing: 'Starting at $199/month',
      category: 'Database'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Network Solutions',
      description: 'Network design, implementation, and ongoing management services.',
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Bandwidth optimization', 'Network security'],
      pricing: 'Starting at $249/month',
      category: 'Network'
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'System Administration',
      description: 'Complete system administration and maintenance for your IT environment.',
      features: ['User management', 'System updates', 'Performance monitoring', 'Troubleshooting', 'Documentation'],
      pricing: 'Starting at $199/month',
      category: 'Administration'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring services',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible payment options',
      icon: <DollarSign className="w-6 h-6 text-orange-500" />
    }
=======
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Infrastructure',
      description: 'Build robust, scalable IT infrastructure that grows with your business needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enhanced Security',
      description: 'Implement enterprise-grade security measures to protect your data and systems.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Optimization',
      description: 'Reduce IT costs through efficient resource utilization and cloud optimization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Get round-the-clock technical support and monitoring for your IT infrastructure.'
    }
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'Terraform', category: 'Infrastructure' },
    { name: 'Ansible', category: 'Automation' }
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
  ];
=======
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems are always running optimally.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Cost Effective',
      description: 'Reduce IT costs by up to 40% with our efficient and scalable solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your data and business operations.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    }
  ];
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d

>>>>>>> cursor/analyze-improve-and-deploy-application-da90
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Transform your technology infrastructure with Zion Tech Group." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, infrastructure management, Zion Tech Group" />
=======
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and more." />
        <meta name="keywords" content="IT services, infrastructure, cybersecurity, cloud, database, network, system administration" />
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional IT
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Services</span>
            <br />
            for Modern Business
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your technology infrastructure with our comprehensive IT services. 
            From cloud migration to cybersecurity, we provide solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/it-services#services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Services
            </Link>
=======
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to keep your business running smoothly and securely. From infrastructure to cybersecurity, we've got you covered.
=======
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, mobile development, and blockchain solutions." />
      </Helmet>
      
=======
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, custom development, and technical support for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, software development, technical support, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation.
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive business growth.
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
<<<<<<< HEAD
              <Link 
                to="/about" 
<<<<<<< HEAD
=======
              <Link
                to="/about"
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions are designed to deliver reliability, security, and performance for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
              </div>
            ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
          </div>
        </div>
      </section>

      {/* Services Grid */}
<<<<<<< HEAD
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure and drive business growth
            </p>
          </div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <span className="text-sm text-gray-400">{service.duration}</span>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 group-hover:scale-105"
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end IT solutions designed to meet your business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-bold text-white">{service.pricing}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional IT services tailored to your business needs
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                </div>
                <ul className="space-y-2 mb-8">
=======
      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end IT services designed to modernize your technology stack and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver reliable, secure, and scalable IT solutions
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
=======
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
=======
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
=======
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the key benefits of partnering with us for your IT needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver robust and scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-sm font-medium text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
              </div>
            ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using our IT services to drive growth and efficiency
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you build a robust, secure, and scalable technology foundation.
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your IT Transformation
              </Link>
              <Link
                to="/it-services#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </Link>
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Upgrade Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let us help you build a robust IT foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
            </div>
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Let's discuss how our IT services can transform your technology stack and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

      <Footer />
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
    </div>
  );
<<<<<<< HEAD
};

<<<<<<< HEAD
<<<<<<< HEAD
export default ItServicesPage;
=======
export default ItServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
}
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
export default ITServicesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
