import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  PhoneIcon,
  EyeIcon,
  LightBulbIcon,
  BeakerIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  WifiIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud migration, setup, and management services for AWS, Azure, and Google Cloud platforms.',
      price: 'Starting at $2,500/month',
      features: [
        'Cloud migration planning and execution',
        'Infrastructure as Code (IaC) implementation',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup solutions',
        'Cost optimization and monitoring',
        'Security compliance and auditing',
        '24/7 infrastructure monitoring',
        'Performance optimization'
      ],
      category: 'Cloud Services',
      icon: CloudIcon,
      popular: true,
      link: '/it-services/cloud-infrastructure'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      price: 'Starting at $3,000/month',
      features: [
        'Security assessment and auditing',
        'Threat detection and monitoring',
        'Vulnerability scanning and patching',
        'Incident response and forensics',
        'Security awareness training',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Penetration testing',
        'Security policy development'
      ],
      category: 'Security',
      icon: ShieldCheckIcon,
      popular: true,
      link: '/it-services/cybersecurity'
    },
    {
      id: 'network-management',
      name: 'Network Management & Support',
      description: 'Complete network design, implementation, monitoring, and maintenance services for optimal performance.',
      price: 'Starting at $1,500/month',
      features: [
        'Network design and architecture',
        'Router and switch configuration',
        'Wireless network setup and optimization',
        'Network monitoring and troubleshooting',
        'Bandwidth management and QoS',
        'VPN setup and management',
        'Network security implementation',
        'Performance optimization'
      ],
      category: 'Networking',
      icon: WifiIcon,
      popular: false,
      link: '/it-services/network-management'
    },
    {
      id: 'data-management',
      name: 'Data Management & Analytics',
      description: 'Data strategy, migration, warehousing, and analytics solutions to unlock business insights.',
      price: 'Starting at $2,000/month',
      features: [
        'Data strategy and governance',
        'Database design and optimization',
        'Data migration and integration',
        'Data warehousing solutions',
        'Business intelligence dashboards',
        'Data quality and cleansing',
        'Real-time data processing',
        'Data security and compliance'
      ],
      category: 'Data Services',
      icon: ChartBarIcon,
      popular: true,
      link: '/it-services/data-management'
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your business needs using modern technologies and methodologies.',
      price: 'Starting at $150/hour',
      features: [
        'Custom web applications',
        'Mobile app development',
        'API development and integration',
        'Legacy system modernization',
        'Microservices architecture',
        'DevOps and CI/CD implementation',
        'Quality assurance and testing',
        'Ongoing maintenance and support'
      ],
      category: 'Development',
      icon: CodeBracketIcon,
      popular: false,
      link: '/it-services/software-development'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy Consulting',
      description: 'Strategic IT planning, technology assessment, and digital transformation guidance for business growth.',
      price: 'Starting at $200/hour',
      features: [
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'Vendor evaluation and selection',
        'IT budget planning and optimization',
        'Change management support',
        'Technology training and education',
        'Ongoing advisory services'
      ],
      category: 'Consulting',
      icon: LightBulbIcon,
      popular: false,
      link: '/it-services/consulting'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for hospitals, clinics, and healthcare providers.',
      icon: BeakerIcon,
      solutions: ['EMR/EHR Systems', 'Telemedicine Platforms', 'Medical Device Integration', 'Compliance Management']
    },
    {
      name: 'Finance',
      description: 'Secure, compliant IT infrastructure for banks, fintech, and financial services.',
      icon: CurrencyDollarIcon,
      solutions: ['Core Banking Systems', 'Payment Processing', 'Risk Management', 'Regulatory Compliance']
    },
    {
      name: 'Manufacturing',
      description: 'Industrial IT solutions for smart manufacturing and supply chain optimization.',
      icon: CogIcon,
      solutions: ['ERP Systems', 'IoT Integration', 'Supply Chain Management', 'Quality Control Systems']
    },
    {
      name: 'Education',
      description: 'Educational technology solutions for schools, universities, and e-learning platforms.',
      icon: AcademicCapIcon,
      solutions: ['LMS Platforms', 'Student Information Systems', 'Online Learning Tools', 'Campus Network Management']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Omnichannel IT solutions for retail businesses and e-commerce platforms.',
      icon: GlobeAltIcon,
      solutions: ['POS Systems', 'Inventory Management', 'Customer Analytics', 'E-commerce Platforms']
    },
    {
      name: 'Government',
      description: 'Secure, scalable IT solutions for government agencies and public sector organizations.',
      icon: ShieldCheckIcon,
      solutions: ['Citizen Services', 'Digital Government', 'Security Compliance', 'Data Management']
    }
  ];

  const technologies = [
    {
      name: 'Cloud Platforms',
      description: 'AWS, Azure, Google Cloud, and hybrid cloud solutions',
      icon: CloudIcon
    },
    {
      name: 'Security Tools',
      description: 'Firewalls, SIEM, endpoint protection, and threat intelligence',
      icon: ShieldCheckIcon
    },
    {
      name: 'Networking',
      description: 'Cisco, Juniper, Fortinet, and software-defined networking',
      icon: WifiIcon
    },
    {
      name: 'Databases',
      description: 'SQL Server, Oracle, MySQL, PostgreSQL, and NoSQL databases',
      icon: ServerIcon
    },
    {
      name: 'Development',
      description: 'Python, Java, .NET, React, Angular, and mobile development',
      icon: CodeBracketIcon
    },
    {
      name: 'DevOps',
      description: 'Docker, Kubernetes, Jenkins, GitLab, and CI/CD pipelines',
      icon: WrenchScrewdriverIcon
    }
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      price: '$500/month',
      description: 'Essential IT support for small businesses',
      features: [
        'Email and phone support (9 AM - 5 PM)',
        'Remote troubleshooting',
        'Basic security monitoring',
        'Software updates and patches',
        'Monthly health reports',
        'Up to 10 devices'
      ],
      popular: false
    },
    {
      name: 'Professional Support',
      price: '$1,500/month',
      description: 'Comprehensive IT support for growing businesses',
      features: [
        '24/7 phone and email support',
        'Remote and on-site support',
        'Advanced security monitoring',
        'Proactive maintenance',
        'Weekly health reports',
        'Up to 50 devices',
        'Priority response times',
        'Backup and recovery services'
      ],
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: '$5,000/month',
      description: 'Full-service IT support for large organizations',
      features: [
        '24/7 dedicated support team',
        'On-site technical staff',
        'Advanced threat protection',
        'Real-time monitoring and alerting',
        'Daily health reports',
        'Unlimited devices',
        'SLA guarantees',
        'Disaster recovery planning',
        'Custom integrations',
        'Executive reporting'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and custom software development for businesses of all sizes." />
        <meta name="keywords" content="IT solutions, cloud services, cybersecurity, network management, software development, IT consulting, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/50 mb-8">
                <CogIcon className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Comprehensive IT Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                IT Solutions
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Complete IT infrastructure and services to power your business. From cloud migration to cybersecurity, we provide end-to-end technology solutions that drive efficiency and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">1000+</div>
                  <div className="text-gray-300 text-sm">IT Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">200+</div>
                  <div className="text-gray-300 text-sm">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to keep your business running smoothly and securely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-slate-700 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex space-x-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-purple-400 text-purple-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Industry <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized IT solutions tailored to meet the unique requirements and compliance needs of different industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{industry.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Solutions:</h4>
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {solution}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Technology <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading technologies and platforms to deliver robust, scalable IT solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{tech.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Levels Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                IT Support <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support level that best fits your business needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportLevels.map((level, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover-lift ${
                  level.popular 
                    ? 'border-purple-500/50 relative' 
                    : 'border-slate-700/50 hover:border-purple-500/50'
                }`}>
                  {level.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                    <p className="text-gray-400 mb-4">{level.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{level.price}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      level.popular
                        ? 'neon-button'
                        : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT solutions can improve your efficiency, security, and business performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Get IT Assessment
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;