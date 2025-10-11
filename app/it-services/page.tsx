import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Code, Smartphone, Brain, Cpu, DollarSign, Star, Users, Clock, Server, Wifi, Lock, Settings, BarChart3, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud transformation services including migration, optimization, and ongoing management.',
      features: [
        'Multi-cloud strategy and planning',
        'AWS, Azure, and GCP expertise',
        'Legacy system migration',
        'Cloud cost optimization',
        'Security and compliance setup',
        'Disaster recovery planning',
        '24/7 cloud monitoring',
        'Performance optimization'
      ],
      pricing: {
        assessment: '$2,500',
        migration: 'Starting at $15,000',
        management: '$1,200/month'
      },
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability and flexibility', 'Enhance security posture', 'Enable remote work capabilities'],
      useCases: ['Data center migration', 'Application modernization', 'Hybrid cloud setup', 'Cloud cost optimization'],
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services to protect your business from evolving threats.',
      features: [
        'Security assessment and auditing',
        'Endpoint protection and EDR',
        'Network security and firewalls',
        'Email security and phishing protection',
        'Identity and access management',
        'Security awareness training',
        'Incident response planning',
        'Compliance management (SOC2, GDPR)'
      ],
      pricing: {
        assessment: '$3,000',
        implementation: 'Starting at $8,000',
        managed_security: '$1,500/month'
      },
      benefits: ['Protect against cyber threats', 'Ensure compliance requirements', 'Reduce security risks', 'Maintain business continuity'],
      useCases: ['Security audits', 'Threat protection', 'Compliance management', 'Incident response'],
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with our comprehensive analytics solutions.',
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Real-time analytics dashboards',
        'Predictive analytics and ML models',
        'Data visualization and reporting',
        'Data governance and quality',
        'Self-service analytics platform',
        'Mobile analytics applications'
      ],
      pricing: {
        assessment: '$2,000',
        implementation: 'Starting at $12,000',
        maintenance: '$800/month'
      },
      benefits: ['Make data-driven decisions', 'Improve operational efficiency', 'Identify new opportunities', 'Enhance customer experience'],
      useCases: ['Business intelligence', 'Sales analytics', 'Customer insights', 'Operational reporting'],
      link: '/data-analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: [
        'Web application development',
        'Mobile app development (iOS/Android)',
        'API development and integration',
        'Microservices architecture',
        'Legacy system modernization',
        'Third-party integrations',
        'Quality assurance and testing',
        'Ongoing maintenance and support'
      ],
      pricing: {
        consultation: '$1,500',
        development: '$150/hour',
        maintenance: '$2,000/month'
      },
      benefits: ['Custom solutions for unique needs', 'Competitive advantage', 'Scalable and maintainable code', 'Ongoing technical support'],
      useCases: ['Custom applications', 'System integration', 'Mobile development', 'Legacy modernization'],
      link: '/custom-development'
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure management including servers, networks, and systems administration.',
      features: [
        'Server administration and maintenance',
        'Network design and optimization',
        'Backup and disaster recovery',
        'Performance monitoring and tuning',
        'Patch management and updates',
        'Capacity planning and scaling',
        'Remote monitoring and management',
        'Help desk and technical support'
      ],
      pricing: {
        assessment: '$1,500',
        setup: 'Starting at $5,000',
        management: '$2,000/month'
      },
      benefits: ['Ensure system reliability', 'Reduce downtime', 'Optimize performance', 'Focus on core business'],
      useCases: ['Server management', 'Network administration', 'System monitoring', 'Technical support'],
      link: '/infrastructure-management'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and optimization',
        'App store deployment and management',
        'Push notifications and analytics',
        'Backend API development',
        'App testing and quality assurance',
        'Ongoing maintenance and updates'
      ],
      pricing: {
        consultation: '$1,000',
        development: '$125/hour',
        maintenance: '$1,500/month'
      },
      benefits: ['Reach mobile customers', 'Improve user engagement', 'Increase business accessibility', 'Stay competitive in mobile market'],
      useCases: ['Mobile apps', 'E-commerce solutions', 'Business applications', 'Consumer apps'],
      link: '/mobile-development'
    },
    {
      icon: <Wifi className="w-8 h-8 text-yellow-500" />,
      title: 'Network Solutions',
      description: 'Comprehensive network design, implementation, and management services.',
      features: [
        'Network design and architecture',
        'Wireless network implementation',
        'Network security and firewalls',
        'VPN setup and management',
        'Network monitoring and optimization',
        'Bandwidth management',
        'Network troubleshooting',
        'Remote access solutions'
      ],
      pricing: {
        assessment: '$1,200',
        implementation: 'Starting at $3,000',
        management: '$800/month'
      },
      benefits: ['Improve network performance', 'Enhance security', 'Enable remote work', 'Reduce network issues'],
      useCases: ['Network setup', 'Wireless deployment', 'Security implementation', 'Performance optimization'],
      link: '/network-solutions'
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: [
        'CI/CD pipeline setup and automation',
        'Container orchestration (Docker, Kubernetes)',
        'Infrastructure as Code (IaC)',
        'Monitoring and logging solutions',
        'Automated testing and deployment',
        'Version control and collaboration',
        'Cloud-native application development',
        'Performance optimization'
      ],
      pricing: {
        assessment: '$2,000',
        implementation: 'Starting at $10,000',
        management: '$1,200/month'
      },
      benefits: ['Faster deployment cycles', 'Improved code quality', 'Reduced deployment risks', 'Better team collaboration'],
      useCases: ['CI/CD setup', 'Container orchestration', 'Automated deployment', 'Infrastructure automation'],
      link: '/devops-cicd'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  const technologies = [
    'AWS, Azure, GCP',
    'Docker & Kubernetes',
    'React, Angular, Vue.js',
    'Node.js, Python, Java',
    'PostgreSQL, MongoDB',
    'Terraform, Ansible',
    'Jenkins, GitLab CI',
    'Prometheus, Grafana'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, data analytics, custom development, and infrastructure management. Expert solutions for modern businesses." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, data analytics, custom development, infrastructure management" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive digital transformation. 
              From cloud migration to custom development, we provide end-to-end solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get IT Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/it-assessment" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free IT Assessment
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Service Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              End-to-end IT solutions to modernize your infrastructure and drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([key, value], priceIndex) => (
                      <div key={priceIndex} className="flex justify-between text-sm">
                        <span className="text-gray-300 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Technologies We Work With</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We leverage cutting-edge technologies to deliver modern, scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can transform your business and drive digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get IT Consultation
                </Link>
                <Link 
                  to="/it-assessment" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Free IT Assessment
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