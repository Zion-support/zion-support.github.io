'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Infrastructure & Cloud Services
    {
      icon: Cloud,
      title: 'IT Infrastructure',
      price: '$999/month',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      price: '$1,599/month',
      description: 'Advanced security solutions with threat detection and prevention',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Database Services',
      price: '$899/month',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
    },
    {
      title: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      icon: Database,
      features: ['Colocation services', 'Managed hosting', 'Disaster recovery', 'Backup solutions', 'Monitoring', '24/7 support'],
      price: 'Starting at $800/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced capital costs', 'Expert management', 'Compliance support'],
      technologies: ['VMware', 'Hyper-V', 'SAN Storage', 'Backup Software', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Cybersecurity Services
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      icon: <Shield className="w-8 h-8" />,
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
      icon: <Lock className="w-8 h-8" />,
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
      icon: <FileText className="w-8 h-8" />,
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
      icon: <Activity className="w-8 h-8" />,
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
      icon: <Database className="w-8 h-8" />,
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
      icon: <HardDrive className="w-8 h-8" />,
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
      icon: <ArrowRight className="w-8 h-8" />,
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
      icon: <Code className="w-8 h-8" />,
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
      icon: <Cog className="w-8 h-8" />,
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
      icon: <Globe className="w-8 h-8" />,
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
      icon: <Users className="w-8 h-8" />,
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
      icon: <Target className="w-8 h-8" />,
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
      icon: <Settings className="w-8 h-8" />,
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
      icon: <Mail className="w-8 h-8" />,
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
      icon: <Phone className="w-8 h-8" />,
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
      icon: <Award className="w-8 h-8" />,
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
      icon: <Rocket className="w-8 h-8" />,
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our IT Services
          </h2>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-600 transition-colors duration-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
      <Footer />
    </div>
  );
};

export default ITServicesPage;
