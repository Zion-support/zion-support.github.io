'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Headphones, Printer, Camera, Wrench, Cog, Activity, MessageCircle, Mic, Phone } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and GCP solutions including migration, optimization, and management.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-cloud strategy', 'Cloud migration', 'Cost optimization', 'Auto-scaling', 'Load balancing', 'Disaster recovery', 'Security compliance', '24/7 monitoring'],
      price: 'Starting at $1,200/month',
      category: 'Infrastructure',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security', 'Increase reliability'],
      marketPrice: '$2,000-5,000/month',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker']
    },
    {
      title: 'Advanced Cybersecurity Solutions',
      description: 'Comprehensive security solutions including threat detection, incident response, compliance management, and security training.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection & response', 'Vulnerability assessment', 'Penetration testing', 'Security monitoring', 'Incident response', 'Compliance management', 'Security training', 'Zero-trust architecture'],
      price: 'Starting at $1,500/month',
      category: 'Security',
      benefits: ['Prevent 95% of cyber attacks', 'Ensure compliance', 'Reduce security risks', 'Protect sensitive data'],
      marketPrice: '$2,500-8,000/month',
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Firewalls', 'VPN', 'MFA']
    },
    {
      title: 'Database Administration & Optimization',
      description: 'Expert database management including performance tuning, backup strategies, migration, and 24/7 monitoring.',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'Data migration', 'Query optimization', 'Index management', 'Security hardening', 'Monitoring & alerting', 'Capacity planning'],
      price: 'Starting at $800/month',
      category: 'Data',
      benefits: ['Improve performance by 60%', 'Ensure data integrity', 'Reduce downtime', 'Optimize costs'],
      marketPrice: '$1,200-3,000/month',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server']
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Complete networking solutions including design, implementation, security, and ongoing management.',
      icon: <Network className="w-8 h-8" />,
      features: ['Network design & implementation', 'VPN & remote access', 'Firewall configuration', 'Wireless solutions', 'Network monitoring', 'Traffic analysis', 'Security policies', 'Disaster recovery'],
      price: 'Starting at $900/month',
      category: 'Infrastructure',
      benefits: ['Improve network performance', 'Enhance security', 'Reduce downtime', 'Optimize connectivity'],
      marketPrice: '$1,500-4,000/month',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Ubiquiti', 'Meraki', 'SD-WAN']
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation including automation, monitoring, and continuous integration/deployment pipelines.',
      icon: <Code className="w-8 h-8" />,
      features: ['CI/CD pipeline setup', 'Infrastructure as code', 'Automated testing', 'Container orchestration', 'Monitoring & logging', 'Deployment automation', 'Configuration management', 'Performance optimization'],
      price: 'Starting at $1,000/month',
      category: 'Development',
      benefits: ['Deploy 10x faster', 'Reduce errors by 80%', 'Improve reliability', 'Scale efficiently'],
      marketPrice: '$1,800-5,000/month',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible']
    },
    {
      title: '24/7 IT Support & Help Desk',
      description: 'Comprehensive IT support including help desk, remote assistance, system maintenance, and user training.',
      icon: <Users className="w-8 h-8" />,
      features: ['24/7 help desk', 'Remote support', 'System maintenance', 'User training', 'Software management', 'Hardware support', 'Incident management', 'Knowledge base'],
      price: 'Starting at $400/month',
      category: 'Support',
      benefits: ['Reduce downtime', 'Improve user satisfaction', 'Lower support costs', 'Increase productivity'],
      marketPrice: '$600-2,000/month',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'Slack', 'Microsoft Teams']
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical business data.',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Automated backups', 'Disaster recovery planning', 'Data replication', 'Recovery testing', 'Cloud backup', 'On-site backup', 'Recovery time optimization', 'Compliance reporting'],
      price: 'Starting at $300/month',
      category: 'Data',
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity', 'Meet compliance requirements'],
      marketPrice: '$500-1,500/month',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Acronis', 'Carbonite']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to align technology with business goals and optimize your IT infrastructure.',
      icon: <Target className="w-8 h-8" />,
      features: ['IT strategy development', 'Technology assessment', 'Digital transformation', 'Cost optimization', 'Vendor management', 'Project management', 'Change management', 'Training programs'],
      price: 'Starting at $2,000/month',
      category: 'Consulting',
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Reduce costs', 'Improve efficiency'],
      marketPrice: '$3,000-10,000/month',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Scrum', 'Project Management', 'Change Management']
    },
    {
      title: 'Mobile Device Management',
      description: 'Complete mobile device management including security, app management, and device lifecycle management.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Device enrollment', 'Security policies', 'App management', 'Remote wipe', 'Compliance monitoring', 'Device tracking', 'Bulk configuration', 'User self-service'],
      price: 'Starting at $200/month',
      category: 'Mobile',
      benefits: ['Secure mobile devices', 'Simplify management', 'Ensure compliance', 'Reduce support tickets'],
      marketPrice: '$300-800/month',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'AirWatch', 'Jamf', 'Google Workspace']
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management including procurement, tracking, maintenance, and disposal.',
      icon: <Settings className="w-8 h-8" />,
      features: ['Asset tracking', 'License management', 'Procurement optimization', 'Maintenance scheduling', 'Depreciation tracking', 'Disposal management', 'Compliance reporting', 'Cost analysis'],
      price: 'Starting at $150/month',
      category: 'Management',
      benefits: ['Optimize asset utilization', 'Reduce costs', 'Ensure compliance', 'Improve planning'],
      marketPrice: '$250-600/month',
      technologies: ['ServiceNow', 'Lansweeper', 'ManageEngine', 'Snipe-IT', 'Asset Panda', 'Freshservice']
    },
    {
      title: 'Email & Communication Systems',
      description: 'Complete email and communication solutions including migration, security, and ongoing management.',
      icon: <Mail className="w-8 h-8" />,
      features: ['Email migration', 'Security configuration', 'Spam filtering', 'Archiving', 'Backup & recovery', 'Mobile sync', 'Calendar integration', 'User training'],
      price: 'Starting at $100/month',
      category: 'Communication',
      benefits: ['Improve email security', 'Reduce spam', 'Ensure compliance', 'Enhance productivity'],
      marketPrice: '$200-500/month',
      technologies: ['Microsoft 365', 'Google Workspace', 'Exchange', 'Proofpoint', 'Mimecast', 'Barracuda']
    },
    {
      title: 'IT Security Training & Awareness',
      description: 'Comprehensive security training programs to educate employees and reduce security risks.',
      icon: <Lock className="w-8 h-8" />,
      features: ['Security awareness training', 'Phishing simulation', 'Compliance training', 'Incident response training', 'Policy education', 'Risk assessment', 'Custom training content', 'Progress tracking'],
      price: 'Starting at $500/month',
      category: 'Training',
      benefits: ['Reduce security incidents', 'Improve compliance', 'Educate employees', 'Strengthen security culture'],
      marketPrice: '$800-2,000/month',
      technologies: ['KnowBe4', 'Proofpoint', 'Cofense', 'SANS', 'Custom LMS', 'Interactive Training']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Key Features:</h4>
                  <ul className="text-sm text-gray-400 mb-3">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 text-sm">Benefits:</h4>
                    <ul className="text-sm text-gray-400">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center mb-1">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  href="/contact"
                  className="cyber-button w-full text-center block text-sm"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;