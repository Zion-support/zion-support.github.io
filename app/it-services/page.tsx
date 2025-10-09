'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Headphones, Printer, Camera, Wrench, Cog, Activity, MessageCircle, Mic, Phone } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Core Infrastructure Services
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions with migration, optimization, and 24/7 management across AWS, Azure, and GCP platforms.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-cloud strategy', 'Migration planning', 'Auto-scaling', 'Load balancing', 'Disaster recovery', 'Cost optimization', 'Security hardening', 'Performance monitoring'],
      price: 'Starting at $1,200/month',
      category: 'Infrastructure',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security', 'Increase uptime to 99.9%'],
      marketPrice: '$2,000-5,000/month',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Ansible']
    },
    {
      title: 'Advanced Cybersecurity Solutions',
      description: 'Enterprise-grade security with threat detection, incident response, compliance management, and security training.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection & response', 'Vulnerability assessment', 'Security monitoring', 'Incident response', 'Compliance management', 'Security training', 'Penetration testing', 'Security audits'],
      price: 'Starting at $1,500/month',
      category: 'Security',
      benefits: ['Prevent 99.9% of cyber threats', 'Reduce security incidents by 80%', 'Ensure compliance', 'Protect sensitive data'],
      marketPrice: '$2,500-6,000/month',
      technologies: ['SIEM', 'EDR', 'XDR', 'Firewalls', 'IDS/IPS', 'Zero Trust', 'SOC']
    },
    {
      title: 'Database & Data Management',
      description: 'Comprehensive database solutions with optimization, migration, backup, and real-time monitoring.',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'Data migration', 'Real-time monitoring', 'Query optimization', 'Data archiving', 'Replication setup', 'Security hardening'],
      price: 'Starting at $800/month',
      category: 'Data',
      benefits: ['Improve performance by 60%', 'Reduce downtime by 90%', 'Optimize costs', 'Ensure data integrity'],
      marketPrice: '$1,200-3,000/month',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle', 'SQL Server']
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Robust networking solutions with design, implementation, monitoring, and security optimization.',
      icon: <Network className="w-8 h-8" />,
      features: ['Network design & implementation', 'VPN setup & management', 'Firewall configuration', 'Network monitoring', 'Bandwidth optimization', 'Wireless solutions', 'SD-WAN implementation', 'Network security'],
      price: 'Starting at $900/month',
      category: 'Infrastructure',
      benefits: ['Improve network performance by 50%', 'Enhance security', 'Reduce downtime', 'Optimize costs'],
      marketPrice: '$1,500-4,000/month',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'SD-WAN', 'WiFi 6', '5G', 'MPLS']
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automation, monitoring, and continuous delivery pipelines.',
      icon: <Code className="w-8 h-8" />,
      features: ['CI/CD pipeline setup', 'Infrastructure as code', 'Automated testing', 'Container orchestration', 'Monitoring & logging', 'Deployment automation', 'Version control', 'Release management'],
      price: 'Starting at $1,300/month',
      category: 'Development',
      benefits: ['Deploy 10x faster', 'Reduce errors by 80%', 'Improve team productivity', 'Accelerate time-to-market'],
      marketPrice: '$2,000-5,000/month',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Ansible']
    },
    {
      title: '24/7 IT Support & Help Desk',
      description: 'Comprehensive technical support with help desk, remote assistance, and proactive maintenance.',
      icon: <Users className="w-8 h-8" />,
      features: ['24/7 help desk', 'Remote support', 'System maintenance', 'User training', 'Software management', 'Hardware support', 'Incident management', 'Knowledge base'],
      price: 'Starting at $500/month',
      category: 'Support',
      benefits: ['Reduce downtime by 70%', 'Improve user satisfaction', 'Lower support costs', 'Proactive issue resolution'],
      marketPrice: '$800-2,000/month',
      technologies: ['ServiceNow', 'Jira Service Desk', 'Remote Desktop', 'Monitoring Tools', 'Ticketing Systems']
    },

    // Advanced IT Services
    {
      title: 'AI-Powered IT Operations',
      description: 'Intelligent IT operations with AI-driven monitoring, predictive maintenance, and automated incident response.',
      icon: <Brain className="w-8 h-8" />,
      features: ['AI monitoring', 'Predictive maintenance', 'Automated incident response', 'Anomaly detection', 'Capacity planning', 'Performance optimization', 'Root cause analysis', 'Intelligent alerting'],
      price: 'Starting at $1,800/month',
      category: 'AI Operations',
      benefits: ['Prevent 90% of outages', 'Reduce MTTR by 60%', 'Optimize resource usage', 'Improve system reliability'],
      marketPrice: '$3,000-7,000/month',
      technologies: ['Machine Learning', 'AIOps', 'APM', 'Log Analytics', 'Custom AI Models']
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security with compliance management, data protection, and audit support.',
      icon: <Lock className="w-8 h-8" />,
      features: ['Cloud security assessment', 'Compliance management', 'Data encryption', 'Access control', 'Audit support', 'Risk assessment', 'Security policies', 'Incident response'],
      price: 'Starting at $1,400/month',
      category: 'Security',
      benefits: ['Ensure compliance', 'Protect cloud data', 'Reduce security risks', 'Pass audits easily'],
      marketPrice: '$2,200-5,500/month',
      technologies: ['CSPM', 'CASB', 'Zero Trust', 'Encryption', 'IAM', 'Compliance Tools']
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics with real-time dashboards, reporting, and business intelligence solutions.',
      icon: <BarChart className="w-8 h-8" />,
      features: ['Data warehousing', 'Real-time analytics', 'Dashboard creation', 'Report automation', 'Data visualization', 'Predictive analytics', 'Data integration', 'Self-service BI'],
      price: 'Starting at $1,100/month',
      category: 'Analytics',
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Reduce reporting time by 80%', 'Increase operational efficiency'],
      marketPrice: '$1,800-4,500/month',
      technologies: ['Power BI', 'Tableau', 'Qlik', 'Apache Spark', 'Hadoop', 'Python', 'R']
    },
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device management with security, app management, and remote control capabilities.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Device enrollment', 'App management', 'Security policies', 'Remote control', 'Data protection', 'Compliance monitoring', 'Location tracking', 'Remote wipe'],
      price: 'Starting at $300/month',
      category: 'Mobile',
      benefits: ['Secure mobile devices', 'Reduce security risks', 'Improve productivity', 'Ensure compliance'],
      marketPrice: '$500-1,500/month',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf', 'AirWatch']
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with disaster recovery planning, testing, and business continuity.',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Automated backups', 'Disaster recovery planning', 'Recovery testing', 'Data replication', 'Cloud backup', 'Ransomware protection', 'Business continuity', 'Recovery time optimization'],
      price: 'Starting at $400/month',
      category: 'Backup',
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity', 'Meet compliance requirements'],
      marketPrice: '$600-2,000/month',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS Backup', 'Azure Backup', 'Cloud Storage']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting with technology roadmaps, digital transformation, and IT governance.',
      icon: <Target className="w-8 h-8" />,
      features: ['Technology roadmaps', 'Digital transformation', 'IT governance', 'Technology assessment', 'Vendor management', 'Cost optimization', 'Change management', 'Training programs'],
      price: 'Starting at $2,000/month',
      category: 'Consulting',
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve IT governance', 'Accelerate digital transformation'],
      marketPrice: '$3,500-8,000/month',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Cloud Strategy', 'Digital Transformation']
    },

    // Specialized Services
    {
      title: 'VoIP & Unified Communications',
      description: 'Complete unified communications solution with VoIP, video conferencing, and collaboration tools.',
      icon: <Phone className="w-8 h-8" />,
      features: ['VoIP implementation', 'Video conferencing', 'Unified messaging', 'Call center solutions', 'Integration services', 'Quality monitoring', 'Security', 'Training'],
      price: 'Starting at $600/month',
      category: 'Communications',
      benefits: ['Reduce communication costs by 50%', 'Improve collaboration', 'Enhance productivity', 'Simplify communications'],
      marketPrice: '$1,000-3,000/month',
      technologies: ['Microsoft Teams', 'Cisco', 'Avaya', 'Zoom', 'WebRTC', 'SIP']
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset management with tracking, lifecycle management, and cost optimization.',
      icon: <Settings className="w-8 h-8" />,
      features: ['Asset tracking', 'Lifecycle management', 'License management', 'Cost optimization', 'Inventory management', 'Depreciation tracking', 'Compliance reporting', 'Vendor management'],
      price: 'Starting at $350/month',
      category: 'Asset Management',
      benefits: ['Optimize IT investments', 'Ensure compliance', 'Reduce costs', 'Improve asset utilization'],
      marketPrice: '$600-1,800/month',
      technologies: ['ServiceNow', 'Lansweeper', 'ManageEngine', 'Asset Management Tools']
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs with certification support and skill development.',
      icon: <Award className="w-8 h-8" />,
      features: ['Technical training', 'Certification programs', 'Skill assessments', 'Custom training', 'Online learning', 'Hands-on labs', 'Exam preparation', 'Progress tracking'],
      price: 'Starting at $200/month',
      category: 'Training',
      benefits: ['Improve team skills', 'Increase productivity', 'Reduce support needs', 'Career development'],
      marketPrice: '$400-1,200/month',
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs', 'Online Platforms']
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of complex IT initiatives.',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Project planning', 'Resource management', 'Risk management', 'Quality assurance', 'Timeline management', 'Budget control', 'Stakeholder communication', 'Delivery management'],
      price: 'Starting at $1,500/month',
      category: 'Project Management',
      benefits: ['Deliver projects on time', 'Control costs', 'Manage risks', 'Ensure quality'],
      marketPrice: '$2,500-6,000/month',
      technologies: ['PMI', 'Agile', 'Scrum', 'Project Management Tools', 'Risk Management']
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
                    <span className="text-lg font-bold text-green-400">{service.price}</span>
                    <span className="text-xs text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
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

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Benefits:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.benefits?.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies?.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {service.technologies && service.technologies.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </Link>
                </div>
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