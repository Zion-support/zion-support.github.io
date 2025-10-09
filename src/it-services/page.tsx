'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Cybersecurity Services
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      icon: Shield,
      features: ['AI threat detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Vulnerability scanning', 'Penetration testing'],
      price: 'Starting at $2,500/month',
      category: 'Security',
      benefits: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
      icon: Lock,
      features: ['SSO implementation', 'MFA setup', 'Privileged access management', 'Identity governance', 'Access reviews', 'Compliance reporting'],
      price: 'Starting at $1,800/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Improved user experience', 'Compliance support', 'Reduced IT overhead'],
      technologies: ['Azure AD', 'Okta', 'Ping Identity', 'CyberArk', 'SailPoint', 'ForgeRock'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Compliance & Audit',
      description: 'Comprehensive security compliance services for SOC 2, ISO 27001, HIPAA, and other regulatory requirements.',
      icon: FileText,
      features: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk assessment', 'Training programs', 'Ongoing monitoring'],
      price: 'Starting at $3,000/month',
      category: 'Security',
      benefits: ['Achieve compliance', 'Reduce audit time', 'Minimize risks', 'Build trust'],
      technologies: ['GRC Tools', 'Risk Management', 'Compliance Frameworks', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with dedicated security analysts and advanced threat hunting.',
      icon: Activity,
      features: ['24/7 monitoring', 'Threat hunting', 'Incident response', 'Security analytics', 'Threat intelligence', 'Forensic analysis'],
      price: 'Starting at $5,000/month',
      category: 'Security',
      benefits: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Proactive defense'],
      technologies: ['SIEM', 'SOAR', 'EDR', 'Threat Intelligence', 'Forensic Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Database & Data Management
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management with performance tuning, backup strategies, and high availability solutions.',
      icon: Database,
      features: ['Performance tuning', 'Backup & recovery', 'High availability', 'Data migration', 'Monitoring', 'Capacity planning'],
      price: 'Starting at $1,500/month',
      category: 'Data',
      benefits: ['Improved performance', 'Reduced downtime', 'Cost optimization', 'Data protection'],
      technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and rapid recovery capabilities.',
      icon: HardDrive,
      features: ['Automated backups', 'Disaster recovery planning', 'RTO/RPO optimization', 'Testing & validation', 'Cloud backup', 'Recovery automation'],
      price: 'Starting at $1,200/month',
      category: 'Data',
      benefits: ['Minimize data loss', 'Rapid recovery', 'Business continuity', 'Compliance support'],
      technologies: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Migration Services',
      description: 'Seamless data migration with zero downtime, data validation, and comprehensive testing for all platforms.',
      icon: ArrowRight,
      features: ['Zero-downtime migration', 'Data validation', 'Schema conversion', 'Performance testing', 'Rollback planning', 'Post-migration support'],
      price: 'Starting at $2,500/project',
      category: 'Data',
      benefits: ['Risk-free migration', 'Minimal downtime', 'Data integrity', 'Cost savings'],
      technologies: ['AWS DMS', 'Azure Data Factory', 'Google Cloud Data Transfer', 'Custom Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // DevOps & Development
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring.',
      icon: Code,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning', 'Automated testing'],
      price: 'Starting at $2,000/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Microservices Architecture',
      description: 'Modern microservices architecture design and implementation with containerization and service mesh.',
      icon: Cog,
      features: ['Architecture design', 'Service decomposition', 'API gateway', 'Service mesh', 'Monitoring', 'Scaling strategies'],
      price: 'Starting at $3,500/month',
      category: 'Development',
      benefits: ['Improved scalability', 'Better maintainability', 'Faster development', 'Technology flexibility'],
      technologies: ['Kubernetes', 'Istio', 'Docker', 'API Gateway', 'Service Mesh', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Development & Management',
      description: 'Comprehensive API development with design, implementation, security, and lifecycle management.',
      icon: Globe,
      features: ['API design', 'RESTful APIs', 'GraphQL', 'API security', 'Rate limiting', 'Documentation'],
      price: 'Starting at $1,800/month',
      category: 'Development',
      benefits: ['Better integration', 'Improved security', 'Enhanced performance', 'Developer experience'],
      technologies: ['Node.js', 'Python', 'Java', 'Kong', 'Apigee', 'AWS API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // IT Support & Management
    {
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including help desk, system administration, and proactive maintenance.',
      icon: Users,
      features: ['24/7 help desk', 'Remote support', 'System administration', 'Patch management', 'User training', 'Asset management'],
      price: 'Starting at $1,000/month',
      category: 'Support',
      benefits: ['Reduced IT costs', 'Improved uptime', 'Expert support', 'Proactive maintenance'],
      technologies: ['RMM Tools', 'PSA Software', 'Remote Access', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT planning and consulting to align technology with business objectives and drive digital transformation.',
      icon: Target,
      features: ['IT strategy development', 'Technology assessment', 'Digital transformation', 'Vendor evaluation', 'Budget planning', 'Roadmap creation'],
      price: 'Starting at $2,500/month',
      category: 'Consulting',
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk reduction', 'Competitive advantage'],
      technologies: ['Strategy Frameworks', 'Assessment Tools', 'Planning Software'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with tracking, optimization, and compliance reporting.',
      icon: Settings,
      features: ['Asset tracking', 'License management', 'Lifecycle planning', 'Cost optimization', 'Compliance reporting', 'Vendor management'],
      price: 'Starting at $800/month',
      category: 'Management',
      benefits: ['Cost savings', 'Compliance assurance', 'Better planning', 'Reduced risks'],
      technologies: ['Asset Management Tools', 'License Management', 'CMDB', 'Reporting Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Specialized Services
    {
      title: 'Microsoft 365 Migration & Management',
      description: 'Complete Microsoft 365 migration with security configuration, user training, and ongoing management.',
      icon: Mail,
      features: ['Migration planning', 'Data migration', 'Security configuration', 'User training', 'Ongoing management', 'Compliance setup'],
      price: 'Starting at $1,500/month',
      category: 'Cloud Services',
      benefits: ['Improved collaboration', 'Enhanced security', 'Cost savings', 'Better productivity'],
      technologies: ['Microsoft 365', 'Azure AD', 'PowerShell', 'Migration Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'VoIP & Unified Communications',
      description: 'Modern communication solutions with VoIP, video conferencing, and unified communications platforms.',
      icon: Phone,
      features: ['VoIP implementation', 'Video conferencing', 'Unified communications', 'Call center solutions', 'Integration services', 'Training'],
      price: 'Starting at $1,200/month',
      category: 'Communications',
      benefits: ['Cost savings', 'Improved collaboration', 'Better mobility', 'Enhanced features'],
      technologies: ['Cisco', 'Microsoft Teams', 'Zoom', '8x8', 'RingCentral', 'Avaya'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs for staff development and certification preparation.',
      icon: Award,
      features: ['Technical training', 'Certification prep', 'Security awareness', 'Software training', 'Custom programs', 'Online learning'],
      price: 'Starting at $500/month',
      category: 'Training',
      benefits: ['Improved skills', 'Better productivity', 'Reduced support needs', 'Career development'],
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Expert IT project management with planning, execution, and delivery of complex technology initiatives.',
      icon: Rocket,
      features: ['Project planning', 'Resource management', 'Risk assessment', 'Timeline management', 'Quality assurance', 'Stakeholder communication'],
      price: 'Starting at $2,000/month',
      category: 'Project Management',
      benefits: ['On-time delivery', 'Cost control', 'Quality assurance', 'Risk mitigation'],
      technologies: ['Project Management Tools', 'Agile Methodologies', 'Risk Management Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Data', count: itServices.filter(s => s.category === 'Data').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Management', count: itServices.filter(s => s.category === 'Management').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Communications', count: itServices.filter(s => s.category === 'Communications').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length }
  ];
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to AWS, Azure, or GCP with 99.9% uptime guarantee.',
      features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', '24/7 Monitoring'],
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Security Configuration', 'Monitoring', '24/7 Support'],
      price: 'Starting at $1,299/month',
      category: 'Cloud',
      color: 'text-blue-400'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection, prevention, and incident response capabilities.',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance', 'Penetration Testing'],
      price: 'Starting at $1,599/month',
      category: 'Security',
      color: 'text-red-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      icon: Settings,
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      price: 'Starting at $1,199/month',
      category: 'DevOps',
      color: 'text-green-400'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and monitoring.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Real-time Monitoring'],
      price: 'Starting at $899/month',
      category: 'Database',
      color: 'text-purple-400'
    },
    {
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure design, implementation, and management services.',
      icon: Server,
      features: ['Network Design', 'Server Setup', 'Storage Solutions', 'Load Balancing', 'Disaster Recovery', 'Capacity Planning'],
      price: 'Starting at $1,499/month',
      category: 'Infrastructure',
      color: 'text-cyan-400'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern technologies.',
      icon: Smartphone,
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Maintenance'],
      price: 'Starting at $2,999/month',
      category: 'Development',
      color: 'text-orange-400'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your IT infrastructure up and running in record time with our proven methodologies.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your critical data and systems.'
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to certified professionals with years of experience in enterprise IT.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions including infrastructure, cybersecurity, 
              database management, and DevOps services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Cloud className="w-4 h-4" />
                <span>Get Started</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className={`text-lg font-bold ${service.color} mb-2`}>{service.price}</div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions. Expert IT support for modern businesses."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'IT infrastructure', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Comprehensive IT Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Expert IT solutions for modern businesses
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, our expert IT team provides comprehensive solutions 
                to keep your business running smoothly and securely in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Basic Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Business hours support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Remote assistance
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Basic monitoring
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500">
              <h3 className="text-xl font-bold text-white mb-4">Professional Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$499/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  On-site visits
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority response
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Dedicated team
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom SLAs
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Proactive monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Strategic consulting
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Free IT Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                (302) 464-0950
              </a>
            </div>
      </main>

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                      <a 
                        href="/contact" 
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Why Choose Our IT Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                Let our expert IT team help you build a robust, secure, and scalable technology foundation for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;