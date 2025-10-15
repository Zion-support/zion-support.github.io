import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  ServerIcon,
  LockClosedIcon,
  BeakerIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HeartIcon,
  CurrencyDollarIcon as DollarIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  CommandLineIcon,
  DocumentTextIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  MicrophoneIcon,
  CameraIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itSolutions = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud infrastructure design, implementation, and management across AWS, Azure, and Google Cloud platforms.',
      features: [
        'Multi-cloud Architecture',
        'Auto-scaling & Load Balancing',
        'Disaster Recovery Planning',
        'Security & Compliance',
        'Cost Optimization',
        '24/7 Monitoring',
        'Migration Services',
        'Performance Tuning'
      ],
      pricing: {
        consultation: { price: 150, period: 'hour', features: ['Infrastructure Assessment', 'Architecture Design', 'Migration Planning', 'Cost Analysis'] },
        implementation: { price: 5000, period: 'project', features: ['Full Setup & Configuration', 'Security Implementation', 'Monitoring Setup', 'Documentation'] },
        managed: { price: 299, period: 'month', features: ['24/7 Monitoring', 'Maintenance & Updates', 'Security Management', 'Performance Optimization'] }
      },
      icon: CloudIcon,
      category: 'Infrastructure',
      popularity: 'Most Popular',
      applications: ['Web Applications', 'Data Analytics', 'DevOps', 'Microservices', 'Hybrid Cloud'],
      link: '/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-suite',
      title: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and incident response.',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Security Auditing',
        'Compliance Management',
        'Penetration Testing',
        'Security Training',
        'Incident Response',
        'Risk Assessment'
      ],
      pricing: {
        assessment: { price: 2500, period: 'one-time', features: ['Security Audit', 'Vulnerability Scan', 'Risk Assessment', 'Compliance Check'] },
        implementation: { price: 10000, period: 'project', features: ['Security Implementation', 'Monitoring Setup', 'Policy Creation', 'Staff Training'] },
        managed: { price: 499, period: 'month', features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Regular Updates'] }
      },
      icon: ShieldCheckIcon,
      category: 'Cybersecurity',
      popularity: 'Essential',
      applications: ['Network Security', 'Endpoint Protection', 'Data Security', 'Compliance', 'Incident Response'],
      link: '/cybersecurity-suite'
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure Design',
      description: 'Advanced network design, implementation, and optimization for enterprise-grade connectivity and performance.',
      features: [
        'Network Architecture Design',
        'Wireless Solutions',
        'SD-WAN Implementation',
        'Load Balancing',
        'Network Security',
        'Performance Optimization',
        'Disaster Recovery',
        'Remote Access Solutions'
      ],
      pricing: {
        design: { price: 200, period: 'hour', features: ['Network Assessment', 'Architecture Design', 'Equipment Selection', 'Implementation Plan'] },
        implementation: { price: 15000, period: 'project', features: ['Full Network Setup', 'Configuration', 'Testing', 'Documentation'] },
        support: { price: 199, period: 'month', features: ['24/7 Support', 'Monitoring', 'Maintenance', 'Updates'] }
      },
      icon: GlobeAltIcon,
      category: 'Networking',
      popularity: 'Reliable',
      applications: ['Office Networks', 'Data Centers', 'Remote Work', 'IoT Connectivity', 'Cloud Integration'],
      link: '/network-infrastructure'
    },
    {
      id: 'data-management',
      title: 'Data Management & Analytics',
      description: 'Comprehensive data management solutions including database design, data warehousing, and business intelligence.',
      features: [
        'Database Design & Optimization',
        'Data Warehousing',
        'ETL/ELT Processes',
        'Business Intelligence',
        'Data Governance',
        'Backup & Recovery',
        'Data Migration',
        'Performance Tuning'
      ],
      pricing: {
        consultation: { price: 175, period: 'hour', features: ['Data Assessment', 'Architecture Design', 'Strategy Planning', 'Tool Selection'] },
        implementation: { price: 8000, period: 'project', features: ['Database Setup', 'ETL Development', 'BI Dashboard', 'Training'] },
        managed: { price: 399, period: 'month', features: ['Database Management', 'Performance Monitoring', 'Backup Management', 'Support'] }
      },
      icon: ServerIcon,
      category: 'Data Management',
      popularity: 'Data Driven',
      applications: ['Business Intelligence', 'Data Warehousing', 'Analytics', 'Reporting', 'Data Migration'],
      link: '/data-management'
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and automated deployment strategies.',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Logging',
        'Security Integration',
        'Performance Optimization'
      ],
      pricing: {
        setup: { price: 12000, period: 'project', features: ['Pipeline Setup', 'Tool Configuration', 'Automation Scripts', 'Documentation'] },
        training: { price: 300, period: 'day', features: ['Team Training', 'Best Practices', 'Tool Usage', 'Process Implementation'] },
        managed: { price: 599, period: 'month', features: ['Pipeline Management', 'Monitoring', 'Updates', 'Support'] }
      },
      icon: CogIcon,
      category: 'DevOps',
      popularity: 'Efficiency',
      applications: ['Software Development', 'Deployment Automation', 'Infrastructure Management', 'Quality Assurance', 'Monitoring'],
      link: '/devops-automation'
    },
    {
      id: 'it-support',
      title: 'Managed IT Support Services',
      description: 'Comprehensive IT support and management services for businesses of all sizes with 24/7 availability.',
      features: [
        '24/7 Technical Support',
        'Help Desk Services',
        'System Administration',
        'Software Management',
        'Hardware Support',
        'User Training',
        'Security Updates',
        'Performance Monitoring'
      ],
      pricing: {
        basic: { price: 99, period: 'month', features: ['Email Support', 'Basic Troubleshooting', 'Software Updates', 'Remote Assistance'] },
        professional: { price: 199, period: 'month', features: ['Phone & Email Support', 'Advanced Troubleshooting', 'System Administration', 'On-site Support'] },
        enterprise: { price: 399, period: 'month', features: ['24/7 Support', 'Dedicated Team', 'Proactive Monitoring', 'Custom Solutions'] }
      },
      icon: WrenchScrewdriverIcon,
      category: 'Support',
      popularity: 'Reliable',
      applications: ['Help Desk', 'System Administration', 'User Support', 'Maintenance', 'Training'],
      link: '/it-support'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: HeartIcon,
      solutions: [
        'HIPAA Compliance Systems',
        'Electronic Health Records',
        'Telemedicine Infrastructure',
        'Medical Device Integration',
        'Data Security & Privacy'
      ],
      description: 'Specialized IT solutions for healthcare organizations with compliance and security focus.'
    },
    {
      industry: 'Finance',
      icon: DollarIcon,
      solutions: [
        'PCI DSS Compliance',
        'Financial Data Security',
        'Trading Systems',
        'Risk Management Tools',
        'Regulatory Reporting'
      ],
      description: 'Secure IT infrastructure for financial services with regulatory compliance.'
    },
    {
      industry: 'Manufacturing',
      icon: CogIcon,
      solutions: [
        'Industrial IoT Networks',
        'SCADA Systems',
        'Quality Control Systems',
        'Supply Chain Management',
        'Predictive Maintenance'
      ],
      description: 'Industrial IT solutions for manufacturing efficiency and automation.'
    },
    {
      industry: 'Education',
      icon: AcademicCapIcon,
      solutions: [
        'Learning Management Systems',
        'Student Information Systems',
        'Campus Networks',
        'Digital Classrooms',
        'Research Computing'
      ],
      description: 'Educational technology solutions for modern learning environments.'
    },
    {
      industry: 'Retail',
      icon: BuildingOfficeIcon,
      solutions: [
        'Point of Sale Systems',
        'Inventory Management',
        'E-commerce Platforms',
        'Customer Analytics',
        'Supply Chain Integration'
      ],
      description: 'Retail IT solutions for omnichannel customer experiences.'
    },
    {
      industry: 'Government',
      icon: ShieldCheckIcon,
      solutions: [
        'Citizen Services Platforms',
        'Secure Government Networks',
        'Document Management',
        'Compliance Systems',
        'Digital Transformation'
      ],
      description: 'Secure IT solutions for government agencies and public services.'
    }
  ];

  const technologies = [
    { name: 'Cloud Platforms', description: 'AWS, Azure, Google Cloud', icon: CloudIcon },
    { name: 'Virtualization', description: 'VMware, Hyper-V, Docker', icon: ServerIcon },
    { name: 'Networking', description: 'Cisco, Juniper, SD-WAN', icon: GlobeAltIcon },
    { name: 'Security', description: 'Firewalls, SIEM, Endpoint Protection', icon: ShieldCheckIcon },
    { name: 'Databases', description: 'SQL Server, Oracle, PostgreSQL', icon: ServerIcon },
    { name: 'Monitoring', description: 'Nagios, Zabbix, Prometheus', icon: ChartBarIcon },
    { name: 'Automation', description: 'Ansible, Puppet, Terraform', icon: CogIcon },
    { name: 'Backup', description: 'Veeam, Commvault, Acronis', icon: LockClosedIcon }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group | Professional IT Services & Infrastructure</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network design, data management, and DevOps. Professional IT services for businesses of all sizes." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, network design, data management, DevOps, managed IT services, IT consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional IT solutions and infrastructure services designed to optimize your business operations and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 interactive-glow"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* IT Solutions Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                IT Solutions Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive operational excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.map((solution, index) => (
                <div key={solution.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform floating">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    {solution.popularity && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {solution.popularity}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.slice(0, 3).map((app, idx) => (
                        <span key={idx} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(solution.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center">
                          <span className="text-gray-300 capitalize">{tier}:</span>
                          <span className="text-white font-semibold">
                            ${details.price}/{details.period}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={solution.link} 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Industry-Specific IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored IT solutions designed for specific industries and compliance requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <div key={industry.industry} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Get Industry Solution
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Technologies & Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading technologies and platforms to deliver best-in-class IT solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={tech.name} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover-lift text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT solutions can optimize your operations, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your IT Transformation
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule IT Consultation
              </Link>
            </div>
            <div className="mt-8 text-gray-300">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;
