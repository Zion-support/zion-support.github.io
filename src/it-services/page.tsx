'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Globe, Users, Server, HardDrive, Monitor, Printer, Router, ArrowRight, CheckCircle, Star, Phone, Award, FileText, Activity, Code, Target, Mail, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Infrastructure & Cloud Services
    {
      titl: e: 'Data Center Services',
      descriptio: n: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      ico: n: HardDrive,
      feature: s: ['Colocation services', 'Managed hosting', 'Disaster recovery', 'Backup solutions', 'Monitoring', '24/7 support'],
      pric: e: 'Starting at $800/month',
      categor: y: 'Infrastructure',
      benefit: s: ['Reliable infrastructure', 'Reduced capital costs', 'Expert management', 'Compliance support'],
      technologie: s: ['VMware', 'Hyper-V', 'SAN Storage', 'Backup Software', 'Monitoring Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'Cloud Infrastructure & Migration',
      descriptio: n: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud platforms.',
      ico: n: Cloud,
      feature: s: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      pric: e: 'Starting at $1,500/month',
      categor: y: 'Infrastructure',
      benefit: s: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologie: s: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Cybersecurity Services
    {
      titl: e: 'Advanced Threat Protection',
      descriptio: n: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      ico: n: Shield,
      feature: s: ['AI threat detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Vulnerability scanning', 'Penetration testing'],
      pric: e: 'Starting at $2,500/month',
      categor: y: 'Security',
      benefit: s: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
      technologie: s: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'Identity & Access Management',
      descriptio: n: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
      ico: n: Lock,
      feature: s: ['SSO implementation', 'MFA setup', 'Privileged access management', 'Identity governance', 'Access reviews', 'Compliance reporting'],
      pric: e: 'Starting at $1,800/month',
      categor: y: 'Security',
      benefit: s: ['Enhanced security', 'Improved user experience', 'Compliance support', 'Reduced IT overhead'],
      technologie: s: ['Azure AD', 'Okta', 'Ping Identity', 'CyberArk', 'SailPoint', 'ForgeRock'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'Security Compliance & Audit',
      descriptio: n: 'Comprehensive security compliance services for SOC 2, ISO 27001, HIPAA, and other regulatory requirements.',
      ico: n: FileText,
      feature: s: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk assessment', 'Training programs', 'Ongoing monitoring'],
      pric: e: 'Starting at $3,000/month',
      categor: y: 'Security',
      benefit: s: ['Achieve compliance', 'Reduce audit time', 'Minimize risks', 'Build trust'],
      technologie: s: ['GRC Tools', 'Risk Management', 'Compliance Frameworks', 'Audit Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'Security Operations Center (SOC)',
      descriptio: n: '24/7 security monitoring and incident response with dedicated security analysts and advanced threat hunting.',
      ico: n: Activity,
      feature: s: ['24/7 monitoring', 'Threat hunting', 'Incident response', 'Security analytics', 'Threat intelligence', 'Forensic analysis'],
      pric: e: 'Starting at $5,000/month',
      categor: y: 'Security',
      benefit: s: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Proactive defense'],
      technologie: s: ['SIEM', 'SOAR', 'EDR', 'Threat Intelligence', 'Forensic Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Database & Data Management
    {
      titl: e: 'Database Administration & Optimization',
      descriptio: n: 'Expert database management with performance tuning, backup strategies, and high availability solutions.',
      ico: n: Database,
      feature: s: ['Performance tuning', 'Backup & recovery', 'High availability', 'Data migration', 'Monitoring', 'Capacity planning'],
      pric: e: 'Starting at $1,500/month',
      categor: y: 'Data',
      benefit: s: ['Improved performance', 'Reduced downtime', 'Cost optimization', 'Data protection'],
      technologie: s: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'Data Backup & Disaster Recovery',
      descriptio: n: 'Comprehensive backup and disaster recovery solutions with automated testing and rapid recovery capabilities.',
      ico: n: HardDrive,
      feature: s: ['Automated backups', 'Disaster recovery planning', 'RTO/RPO optimization', 'Testing & validation', 'Cloud backup', 'Recovery automation'],
      pric: e: 'Starting at $1,200/month',
      categor: y: 'Data',
      benefit: s: ['Minimize data loss', 'Rapid recovery', 'Business continuity', 'Compliance support'],
      technologie: s: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'Data Migration Services',
      descriptio: n: 'Seamless data migration with zero downtime, data validation, and comprehensive testing for all platforms.',
      ico: n: ArrowRight,
      feature: s: ['Zero-downtime migration', 'Data validation', 'Schema conversion', 'Performance testing', 'Rollback planning', 'Post-migration support'],
      pric: e: 'Starting at $2,500/project',
      categor: y: 'Data',
      benefit: s: ['Risk-free migration', 'Minimal downtime', 'Data integrity', 'Cost savings'],
      technologie: s: ['AWS DMS', 'Azure Data Factory', 'Google Cloud Data Transfer', 'Custom Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // DevOps & Development
    {
      titl: e: 'DevOps & CI/CD Implementation',
      descriptio: n: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring.',
      ico: n: Code,
      feature: s: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning', 'Automated testing'],
      pric: e: 'Starting at $2,000/month',
      categor: y: 'Development',
      benefit: s: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
      technologie: s: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'Microservices Architecture',
      descriptio: n: 'Modern microservices architecture design and implementation with containerization and service mesh.',
      ico: n: Cog,
      feature: s: ['Architecture design', 'Service decomposition', 'API gateway', 'Service mesh', 'Monitoring', 'Scaling strategies'],
      pric: e: 'Starting at $3,500/month',
      categor: y: 'Development',
      benefit: s: ['Improved scalability', 'Better maintainability', 'Faster development', 'Technology flexibility'],
      technologie: s: ['Kubernetes', 'Istio', 'Docker', 'API Gateway', 'Service Mesh', 'Monitoring Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'API Development & Management',
      descriptio: n: 'Comprehensive API development with design, implementation, security, and lifecycle management.',
      ico: n: Globe,
      feature: s: ['API design', 'RESTful APIs', 'GraphQL', 'API security', 'Rate limiting', 'Documentation'],
      pric: e: 'Starting at $1,800/month',
      categor: y: 'Development',
      benefit: s: ['Better integration', 'Improved security', 'Enhanced performance', 'Developer experience'],
      technologie: s: ['Node.js', 'Python', 'Java', 'Kong', 'Apigee', 'AWS API Gateway'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // IT Support & Management
    {
      titl: e: 'Managed IT Services',
      descriptio: n: 'Comprehensive IT management including help desk, system administration, and proactive maintenance.',
      ico: n: Users,
      feature: s: ['24/7 help desk', 'Remote support', 'System administration', 'Patch management', 'User training', 'Asset management'],
      pric: e: 'Starting at $1,000/month',
      categor: y: 'Support',
      benefit: s: ['Reduced IT costs', 'Improved uptime', 'Expert support', 'Proactive maintenance'],
      technologie: s: ['RMM Tools', 'PSA Software', 'Remote Access', 'Monitoring Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'IT Strategy & Consulting',
      descriptio: n: 'Strategic IT planning and consulting to align technology with business objectives and drive digital transformation.',
      ico: n: Target,
      feature: s: ['IT strategy development', 'Technology assessment', 'Digital transformation', 'Vendor evaluation', 'Budget planning', 'Roadmap creation'],
      pric: e: 'Starting at $2,500/month',
      categor: y: 'Consulting',
      benefit: s: ['Strategic alignment', 'Cost optimization', 'Risk reduction', 'Competitive advantage'],
      technologie: s: ['Strategy Frameworks', 'Assessment Tools', 'Planning Software'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'IT Asset Management',
      descriptio: n: 'Complete IT asset lifecycle management with tracking, optimization, and compliance reporting.',
      ico: n: Settings,
      feature: s: ['Asset tracking', 'License management', 'Lifecycle planning', 'Cost optimization', 'Compliance reporting', 'Vendor management'],
      pric: e: 'Starting at $800/month',
      categor: y: 'Management',
      benefit: s: ['Cost savings', 'Compliance assurance', 'Better planning', 'Reduced risks'],
      technologie: s: ['Asset Management Tools', 'License Management', 'CMDB', 'Reporting Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Specialized Services
    {
      titl: e: 'Microsoft 365 Migration & Management',
      descriptio: n: 'Complete Microsoft 365 migration with security configuration, user training, and ongoing management.',
      ico: n: Mail,
      feature: s: ['Migration planning', 'Data migration', 'Security configuration', 'User training', 'Ongoing management', 'Compliance setup'],
      pric: e: 'Starting at $1,500/month',
      categor: y: 'Cloud Services',
      benefit: s: ['Improved collaboration', 'Enhanced security', 'Cost savings', 'Better productivity'],
      technologie: s: ['Microsoft 365', 'Azure AD', 'PowerShell', 'Migration Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'VoIP & Unified Communications',
      descriptio: n: 'Modern communication solutions with VoIP, video conferencing, and unified communications platforms.',
      ico: n: Phone,
      feature: s: ['VoIP implementation', 'Video conferencing', 'Unified communications', 'Call center solutions', 'Integration services', 'Training'],
      pric: e: 'Starting at $1,200/month',
      categor: y: 'Communications',
      benefit: s: ['Cost savings', 'Improved collaboration', 'Better mobility', 'Enhanced features'],
      technologie: s: ['Cisco', 'Microsoft Teams', 'Zoom', '8x8', 'RingCentral', 'Avaya'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'IT Training & Certification',
      descriptio: n: 'Comprehensive IT training programs for staff development and certification preparation.',
      ico: n: Award,
      feature: s: ['Technical training', 'Certification prep', 'Security awareness', 'Software training', 'Custom programs', 'Online learning'],
      pric: e: 'Starting at $500/month',
      categor: y: 'Training',
      benefit: s: ['Improved skills', 'Better productivity', 'Reduced support needs', 'Career development'],
      technologie: s: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      titl: e: 'IT Project Management',
      descriptio: n: 'Expert IT project management with planning, execution, and delivery of complex technology initiatives.',
      ico: n: Rocket,
      feature: s: ['Project planning', 'Resource management', 'Risk assessment', 'Timeline management', 'Quality assurance', 'Stakeholder communication'],
      pric: e: 'Starting at $2,000/month',
      categor: y: 'Project Management',
      benefit: s: ['On-time delivery', 'Cost control', 'Quality assurance', 'Risk mitigation'],
      technologie: s: ['Project Management Tools', 'Agile Methodologies', 'Risk Management Tools'],
      contactInf: o: 'Contac: t: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  // Removed unused categories and services variables

  // Removed unused benefits array

  const additionalServices = [
    {
      ico: n: Users,
      titl: e: 'IT Consulting',
      descriptio: n: 'Strategic IT planning and technology roadmap development.',
      pric: e: '$200/hour'
    },
    {
      ico: n: Server,
      titl: e: 'Server Management',
      descriptio: n: '24/7 server monitoring, maintenance, and optimization.',
      pric: e: 'Starting at $299/month'
    },
    {
      ico: n: HardDrive,
      titl: e: 'Data Backup & Recovery',
      descriptio: n: 'Automated backup solutions and disaster recovery planning.',
      pric: e: 'Starting at $199/month'
    },
    {
      ico: n: Monitor,
      titl: e: 'System Integration',
      descriptio: n: 'API development and system integration services.',
      pric: e: 'Starting at $1,500/project'
    },
    {
      ico: n: Printer,
      titl: e: 'Hardware Support',
      descriptio: n: 'Computer, printer, and network equipment support.',
      pric: e: 'Starting at $99/month'
    },
    {
      ico: n: Router,
      titl: e: 'Network Security',
      descriptio: n: 'Firewall configuration and network security implementation.',
      pric: e: 'Starting at $399/month'
    }
  ];

  // Removed unused benefits variable

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              IT Services & Infrastructure
            >
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to support and optimize your business infrastructure. 
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-cyan-600: hover:to-purple-700 transition-all duration-300: hover:scale-105"
            >
              Get Free IT Assessment
            </a>
            <a
              href="te: l:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold: hover:bg-cyan-400: hover:text-slate-900 transition-all duration-300"
            >
              (302) 464-0950
            >
        </section>

        {/* Main Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core IT Services</h2>
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6: hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {React.createElement(service.icon, { classNam: e: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key: Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  >
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefit: s:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  >
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologie: s:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
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
                  <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-cyan-400: hover:opacity-80 transition-opacity"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  >
            ))}
          >

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional IT Services</h2>
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4: hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  {React.createElement(service.icon, { classNam: e: "w-6 h-6 text-cyan-400 mr-3" })}
                  <h3 className="text-lg font-bold text-white">{service.title}>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                <div className="text-cyan-400 font-bold text-sm">{service.price}>
            ))}
          >

        {/* Support Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
          <div className="grid grid-cols-1: md:grid-cols-3 gap-8">
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
                >
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold: hover:bg-cyan-600 transition-colors"
              >
                Get Started
              >
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
                >
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold: hover:bg-cyan-600 transition-colors"
              >
                Get Started
              >
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
                >
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold: hover:bg-cyan-600 transition-colors"
              >
                Contact Sales
              >
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className="flex flex-col: sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold: hover:from-cyan-600: hover:to-purple-700 transition-all duration-300: hover:scale-105"
              >
                Get Free IT Assessment
              </a>
              <a
                href="te: l:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold: hover:bg-cyan-400: hover:text-slate-900 transition-all duration-300"
              >
                (302) 464-0950
              >
          >
      >
      >
        <Footer />
      </div>
  );
};

export default ITServicesPage;