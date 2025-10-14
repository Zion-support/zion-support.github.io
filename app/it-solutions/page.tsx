import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon,
  WrenchScrewdriverIcon,
  DatabaseIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CogIcon,
  CloudIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SignalIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  EyeIcon,
  ShieldExclamationIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  BoltIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  WifiIcon,
  TruckIcon,
  BuildingOfficeIcon,
  HomeIcon,
  CarIcon,
  HeartIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BanknotesIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  PresentationChartLineIcon,
  UserPlusIcon,
  UserMinusIcon,
  CalendarDaysIcon,
  MapPinIcon as MapPin
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itSolutions = [
    {
      icon: ServerIcon,
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, management, and optimization for AWS, Azure, and Google Cloud with 99.9% uptime guarantee.',
      price: '$1,200/month',
      features: [
        'Multi-cloud Support (AWS, Azure, GCP)',
        'Auto-scaling & Load Balancing',
        'Cost Optimization & Monitoring',
        'Security Hardening & Compliance',
        '24/7 Infrastructure Monitoring',
        'Disaster Recovery Planning',
        'Performance Optimization',
        'Backup & Data Protection'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve system reliability by 99.9%',
        'Enhanced security posture',
        'Scalable and flexible architecture',
        'Automated scaling and management',
        'Expert cloud architects'
      ],
      useCases: [
        'Web Application Hosting',
        'Data Processing & Analytics',
        'Microservices Architecture',
        'DevOps & CI/CD Pipelines',
        'Disaster Recovery',
        'Hybrid Cloud Solutions'
      ],
      link: '/cloud-infrastructure'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps implementation with automated CI/CD pipelines, containerization, and deployment automation for faster, more reliable releases.',
      price: '$1,800/month',
      features: [
        'Automated CI/CD Pipelines',
        'Containerization (Docker/Kubernetes)',
        'Infrastructure as Code (IaC)',
        'Automated Testing & Quality Gates',
        'Monitoring & Logging',
        'Security Scanning & Compliance',
        'Blue-Green Deployments',
        'Rollback Capabilities'
      ],
      benefits: [
        'Deploy 10x faster with confidence',
        'Reduce deployment errors by 90%',
        'Improve team collaboration',
        'Automated testing and validation',
        'Faster time to market',
        'Reduced operational overhead'
      ],
      useCases: [
        'Application Deployment',
        'Microservices Management',
        'Database Migrations',
        'Infrastructure Updates',
        'Security Patches',
        'Feature Rollouts'
      ],
      link: '/devops-cicd'
    },
    {
      icon: DatabaseIcon,
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and management for improved performance and reliability.',
      price: '$1,500/month',
      features: [
        'Database Design & Architecture',
        'Performance Tuning & Optimization',
        'Migration & Upgrade Services',
        'Backup & Recovery Solutions',
        'Security Hardening & Encryption',
        'Monitoring & Alerting',
        'Query Optimization',
        'Capacity Planning'
      ],
      benefits: [
        'Improve database performance by 60%',
        'Reduce downtime to near zero',
        'Enhanced data security',
        'Cost-effective database solutions',
        'Automated backup and recovery',
        'Expert database administration'
      ],
      useCases: [
        'Database Migration',
        'Performance Optimization',
        'High Availability Setup',
        'Data Warehousing',
        'Backup & Recovery',
        'Security Hardening'
      ],
      link: '/database-management'
    },
    {
      icon: CodeBracketIcon,
      title: 'Custom Software Development',
      description: 'Bespoke software development services for web applications, mobile apps, and enterprise solutions using modern technologies and best practices.',
      price: '$150/hour',
      features: [
        'Full-Stack Web Development',
        'Mobile App Development (iOS/Android)',
        'API Development & Integration',
        'Legacy System Modernization',
        'Microservices Architecture',
        'Cloud-Native Applications',
        'Third-party Integrations',
        'Ongoing Maintenance & Support'
      ],
      benefits: [
        'Custom solutions tailored to your needs',
        'Modern, scalable architecture',
        'Cross-platform compatibility',
        'Seamless third-party integrations',
        'Ongoing support and maintenance',
        'Future-proof technology stack'
      ],
      useCases: [
        'Business Applications',
        'E-commerce Platforms',
        'Customer Portals',
        'Mobile Applications',
        'API Development',
        'System Integration'
      ],
      link: '/custom-development'
    },
    {
      icon: ShieldCheckIcon,
      title: 'IT Security & Compliance',
      description: 'Comprehensive IT security services including vulnerability assessment, penetration testing, compliance management, and security training.',
      price: '$2,000/month',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing & Vulnerability Scanning',
        'Compliance Management (SOC2, GDPR, HIPAA)',
        'Security Policy Development',
        'Incident Response Planning',
        'Security Awareness Training',
        'Threat Monitoring & Detection',
        'Security Architecture Review'
      ],
      benefits: [
        'Enhanced security posture',
        'Compliance with industry standards',
        'Reduced security risks',
        'Improved incident response',
        'Security awareness across organization',
        'Expert security guidance'
      ],
      useCases: [
        'Security Audits',
        'Compliance Preparation',
        'Incident Response',
        'Security Training',
        'Vulnerability Management',
        'Risk Assessment'
      ],
      link: '/it-security'
    },
    {
      icon: CogIcon,
      title: 'IT Support & Maintenance',
      description: '24/7 IT support services with proactive monitoring, maintenance, and technical assistance to keep your systems running smoothly.',
      price: '$800/month',
      features: [
        '24/7 Technical Support',
        'Proactive System Monitoring',
        'Remote Management & Troubleshooting',
        'Hardware & Software Support',
        'Security Updates & Patches',
        'Performance Optimization',
        'User Training & Documentation',
        'IT Asset Management'
      ],
      benefits: [
        'Reduced system downtime',
        'Proactive issue prevention',
        'Expert technical support',
        'Cost-effective IT management',
        'Improved system performance',
        'Peace of mind for your IT'
      ],
      useCases: [
        'Help Desk Support',
        'System Maintenance',
        'User Training',
        'Hardware Support',
        'Software Updates',
        'Performance Monitoring'
      ],
      link: '/it-support'
    }
  ];

  const technologies = [
    { name: 'Cloud Platforms', icon: CloudIcon, items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'] },
    { name: 'Programming Languages', icon: CodeBracketIcon, items: ['Python', 'JavaScript', 'Java', 'C#', 'Go', 'Rust'] },
    { name: 'Databases', icon: DatabaseIcon, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { name: 'DevOps Tools', icon: WrenchScrewdriverIcon, items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform'] },
    { name: 'Security Tools', icon: ShieldCheckIcon, items: ['OWASP', 'Nessus', 'Burp Suite', 'Wireshark', 'Nmap'] },
    { name: 'Monitoring', icon: ChartBarIcon, items: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'Datadog'] }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Technologies' },
    { number: '100+', label: 'Projects Completed' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group | Comprehensive IT Services</title>
        <meta name="description" content="Complete IT solutions including cloud infrastructure, DevOps, database management, custom software development, security, and 24/7 support services." />
        <meta name="keywords" content="IT services, cloud computing, DevOps, database management, software development, cybersecurity, IT support, infrastructure" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions with expert support and proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services designed to modernize your infrastructure, enhance security, 
                and drive operational efficiency with expert support and proven methodologies.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IT Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">IT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT services covering infrastructure, development, security, and support 
                to keep your business running smoothly and securely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {itSolutions.map((solution, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{solution.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRightIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={solution.link} 
                      className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to="/contact" 
                      className="border border-green-400 text-green-300 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest technologies and tools to deliver cutting-edge IT solutions 
                that meet your business requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, idx) => (
                      <span key={idx} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Why Choose Our IT Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine deep technical expertise with business acumen to deliver IT solutions 
                that drive real business value and competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ServerIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Expertise</h3>
                <p className="text-gray-300">Our team has years of experience in enterprise IT solutions and modern technologies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring to ensure your systems run smoothly.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                <p className="text-gray-300">Security is built into every solution we deliver, protecting your data and systems.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300">Quick implementation and deployment to get your solutions up and running fast.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Measurable Results</h3>
                <p className="text-gray-300">We deliver measurable improvements in performance, security, and efficiency.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">Solutions that grow with your business and adapt to changing requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free IT assessment and discover how our solutions can 
              transform your technology infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free IT Assessment
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;