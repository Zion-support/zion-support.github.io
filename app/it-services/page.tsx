'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Server, Database, Network, Cloud, Lock, Settings, Monitor, HardDrive, Wifi, Smartphone, Laptop, Headphones } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices = [
    // Infrastructure & Cloud Services
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and optimization with 99.9% uptime guarantee.',
      icon: Cloud,
      price: '$999/month',
      features: ['AWS/Azure/GCP setup', 'Auto-scaling configuration', 'Load balancing', 'Disaster recovery', '24/7 monitoring', 'Cost optimization'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Ensure high availability', 'Automated backups'],
      marketPrice: '$1500-3000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      popular: true
    },
    {
      title: 'Server Management & Maintenance',
      description: 'Comprehensive server administration, monitoring, and maintenance services for optimal performance.',
      icon: Server,
      price: '$599/month',
      features: ['Server monitoring', 'Performance optimization', 'Security updates', 'Backup management', 'Troubleshooting', 'Capacity planning'],
      benefits: ['Reduce downtime by 90%', 'Improve performance', 'Ensure security', 'Proactive maintenance'],
      marketPrice: '$800-1500/month',
      category: 'Infrastructure',
      technologies: ['Linux', 'Windows Server', 'Nagios', 'Zabbix', 'Ansible', 'Puppet'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/server-management'
    },
    {
      title: 'Database Administration',
      description: 'Expert database management, optimization, and maintenance for all major database systems.',
      icon: Database,
      price: '$799/month',
      features: ['Database optimization', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services', 'Monitoring'],
      benefits: ['Improve query performance by 300%', 'Ensure data integrity', 'Reduce storage costs', 'Automated backups'],
      marketPrice: '$1000-2000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/database-administration'
    },
    {
      title: 'Network Infrastructure Setup',
      description: 'Complete network design, implementation, and management for secure and efficient connectivity.',
      icon: Network,
      price: '$699/month',
      features: ['Network design', 'Router configuration', 'Switch management', 'Firewall setup', 'VPN configuration', 'Wireless networks'],
      benefits: ['Improve network performance', 'Enhance security', 'Reduce connectivity issues', 'Optimize bandwidth usage'],
      marketPrice: '$1000-1800/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Ubiquiti', 'Palo Alto', 'SonicWall'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    // Security Services
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: Shield,
      price: '$1299/month',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Penetration testing', 'Security audits', 'Incident response', 'Compliance management'],
      benefits: ['Prevent 95% of cyber attacks', 'Ensure compliance', 'Reduce security risks', '24/7 protection'],
      marketPrice: '$2000-4000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewalls', 'IDS/IPS', 'NGFW', 'Security Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      popular: true
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Automated backup solutions with disaster recovery planning and data restoration services.',
      icon: HardDrive,
      price: '$399/month',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Offsite storage', 'Recovery testing', 'Compliance backup'],
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity', 'Meet compliance requirements'],
      marketPrice: '$600-1200/month',
      category: 'Security',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/data-backup-recovery'
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management with single sign-on, multi-factor authentication, and access controls.',
      icon: Lock,
      price: '$599/month',
      features: ['Single Sign-On (SSO)', 'Multi-factor authentication', 'User provisioning', 'Access reviews', 'Privileged access management', 'Compliance reporting'],
      benefits: ['Improve security posture', 'Simplify user management', 'Reduce access risks', 'Ensure compliance'],
      marketPrice: '$800-1500/month',
      category: 'Security',
      technologies: ['Okta', 'Azure AD', 'AWS IAM', 'Ping Identity', 'CyberArk', 'SailPoint'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/identity-access-management'
    },
    // DevOps & Automation
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps implementation with automated CI/CD pipelines, infrastructure as code, and monitoring.',
      icon: Settings,
      price: '$899/month',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Container orchestration', 'Monitoring & logging', 'Automated testing', 'Deployment automation'],
      benefits: ['Reduce deployment time by 80%', 'Improve code quality', 'Increase reliability', 'Faster time to market'],
      marketPrice: '$1200-2500/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/devops-cicd',
      popular: true
    },
    {
      title: 'IT Automation Services',
      description: 'Intelligent automation of IT processes to reduce manual work and improve efficiency.',
      icon: Zap,
      price: '$699/month',
      features: ['Process automation', 'Script development', 'Workflow optimization', 'Task scheduling', 'Error handling', 'Performance monitoring'],
      benefits: ['Reduce manual work by 70%', 'Improve accuracy', 'Increase efficiency', 'Lower operational costs'],
      marketPrice: '$1000-1800/month',
      category: 'Automation',
      technologies: ['Python', 'PowerShell', 'Ansible', 'Puppet', 'Chef', 'RPA Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-automation'
    },
    // Support & Maintenance
    {
      title: '24/7 IT Support & Helpdesk',
      description: 'Round-the-clock technical support with rapid response times and expert troubleshooting.',
      icon: Headphones,
      price: '$499/month',
      features: ['24/7 support', 'Remote assistance', 'Ticket management', 'Knowledge base', 'User training', 'Escalation procedures'],
      benefits: ['Minimize downtime', 'Quick problem resolution', 'User satisfaction', 'Proactive support'],
      marketPrice: '$700-1200/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira Service Desk', 'Zendesk', 'Freshdesk', 'Remote Tools', 'Monitoring Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-support-helpdesk'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset tracking, lifecycle management, and optimization services.',
      icon: Monitor,
      price: '$399/month',
      features: ['Asset inventory', 'Lifecycle tracking', 'License management', 'Depreciation tracking', 'Disposal management', 'Cost optimization'],
      benefits: ['Optimize IT spending', 'Ensure compliance', 'Prevent asset loss', 'Improve planning'],
      marketPrice: '$600-1000/month',
      category: 'Management',
      technologies: ['ServiceNow', 'Lansweeper', 'PDQ Inventory', 'SCCM', 'Custom Solutions', 'API Integrations'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-asset-management'
    },
    // Specialized Services
    {
      title: 'Mobile Device Management',
      description: 'Complete mobile device security, configuration, and management for corporate environments.',
      icon: Smartphone,
      price: '$299/month',
      features: ['Device enrollment', 'Security policies', 'App management', 'Remote wipe', 'Compliance monitoring', 'User provisioning'],
      benefits: ['Secure mobile access', 'Centralized management', 'Compliance assurance', 'Cost control'],
      marketPrice: '$400-800/month',
      category: 'Mobile',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Citrix', 'Jamf', 'Custom MDM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/mobile-device-management'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology roadmaps, and digital transformation consulting.',
      icon: Brain,
      price: '$199/hour',
      features: ['Technology assessment', 'Strategic planning', 'Digital transformation', 'Vendor evaluation', 'ROI analysis', 'Implementation guidance'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Plan for future growth', 'Reduce risks'],
      marketPrice: '$250-500/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Vendor Management', 'Change Management', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-consulting-strategy'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive compliance management for SOX, HIPAA, GDPR, and other regulatory requirements.',
      icon: BarChart,
      price: '$899/month',
      features: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk management', 'Training programs', 'Documentation'],
      benefits: ['Ensure compliance', 'Reduce audit risks', 'Improve governance', 'Streamline processes'],
      marketPrice: '$1200-2000/month',
      category: 'Compliance',
      technologies: ['GRC Platforms', 'Compliance Tools', 'Risk Management', 'Policy Management', 'Audit Tools', 'Documentation Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-compliance-governance'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.',
      icon: Globe,
      price: '$1499/month',
      features: ['Migration planning', 'Data migration', 'Application modernization', 'Security configuration', 'Performance optimization', 'Post-migration support'],
      benefits: ['Reduce migration risks', 'Minimize downtime', 'Optimize costs', 'Improve scalability'],
      marketPrice: '$2000-4000/month',
      category: 'Cloud',
      technologies: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'VMware', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/cloud-migration-services',
      popular: true
    },
    {
      title: 'IT Disaster Recovery Planning',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
      icon: Shield,
      price: '$799/month',
      features: ['Disaster recovery planning', 'Backup strategies', 'Recovery testing', 'RTO/RPO optimization', 'Documentation', 'Training'],
      benefits: ['Ensure business continuity', 'Minimize data loss', 'Reduce recovery time', 'Meet compliance requirements'],
      marketPrice: '$1000-2000/month',
      category: 'Disaster Recovery',
      technologies: ['Backup Solutions', 'Replication Tools', 'Cloud DR', 'Monitoring Systems', 'Automation Tools', 'Testing Platforms'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-disaster-recovery'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { name: 'Automation', count: itServices.filter(s => s.category === 'Automation').length },
    { name: 'Management', count: itServices.filter(s => s.category === 'Management').length },
    { name: 'Mobile', count: itServices.filter(s => s.category === 'Mobile').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Compliance', count: itServices.filter(s => s.category === 'Compliance').length },
    { name: 'Cloud', count: itServices.filter(s => s.category === 'Cloud').length },
    { name: 'Disaster Recovery', count: itServices.filter(s => s.category === 'Disaster Recovery').length }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, DevOps, database management, and 24/7 support. Starting at $299/month." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database management, IT support, network management, IT consulting" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions including cloud infrastructure, cybersecurity, DevOps, database management, and 24/7 support. 
              Transform your technology infrastructure with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                          POPULAR
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Category</div>
                        <div className="text-sm font-medium text-white">{service.category}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                        className="flex-1 border border-cyan-500 text-cyan-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our IT experts for a free consultation and customized solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 w-full sm:w-auto text-center"
              >
                📧 Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>Hours: Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};
export default ITServicesPage;