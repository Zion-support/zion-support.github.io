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
      description: 'Comprehensive cloud solutions with migration, optimization, and management services',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS/Azure/GCP Migration', 'Auto-scaling & Load balancing', 'Disaster recovery', 'Cost optimization', 'Security hardening', '24/7 monitoring'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security', 'Increase reliability'],
      price: 'Starting at $500/month',
      marketPrice: '$800-1500/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Advanced Cybersecurity Suite',
      description: 'Enterprise-grade security solutions with threat detection, compliance, and incident response',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection & response', 'Vulnerability assessment', 'Security monitoring', 'Compliance management', 'Penetration testing', 'Security training'],
      benefits: ['Prevent 99.9% of cyber attacks', 'Ensure compliance', 'Reduce security risks', 'Protect sensitive data'],
      price: 'Starting at $800/month',
      marketPrice: '$1200-2500/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'Identity Management', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management & Optimization',
      description: 'High-performance database solutions with optimization, backup, and migration services',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'Data migration', 'Monitoring & alerting', 'Query optimization', 'Database design'],
      benefits: ['Improve performance by 60%', 'Ensure data integrity', 'Reduce downtime', 'Optimize costs'],
      price: 'Starting at $300/month',
      marketPrice: '$500-1000/month',
      category: 'Data',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Data Warehousing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Robust networking solutions with security, monitoring, and optimization',
      icon: <Network className="w-8 h-8" />,
      features: ['Network design & implementation', 'VPN & firewall setup', 'Network monitoring', 'Bandwidth optimization', 'Wireless solutions', 'Network security'],
      benefits: ['Improve network performance', 'Enhance security', 'Reduce downtime', 'Optimize costs'],
      price: 'Starting at $400/month',
      marketPrice: '$600-1200/month',
      category: 'Infrastructure',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'SD-WAN', 'WiFi 6', 'Network Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: <Code className="w-8 h-8" />,
      features: ['CI/CD pipeline setup', 'Automated testing', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Release management'],
      benefits: ['Deploy 10x faster', 'Reduce errors by 80%', 'Improve team productivity', 'Enable continuous delivery'],
      price: 'Starting at $600/month',
      marketPrice: '$900-1800/month',
      category: 'Development',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: '24/7 IT Support & Help Desk',
      description: 'Comprehensive technical support with proactive monitoring and rapid response',
      icon: <Users className="w-8 h-8" />,
      features: ['24/7 help desk', 'Remote support', 'System maintenance', 'User training', 'Proactive monitoring', 'Incident management'],
      benefits: ['Reduce downtime by 70%', 'Improve user satisfaction', 'Prevent issues proactively', 'Lower support costs'],
      price: 'Starting at $200/month',
      marketPrice: '$350-700/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Monitoring Tools', 'Ticketing Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Advanced IT Services
    {
      title: 'AI-Powered IT Operations',
      description: 'Intelligent IT operations with AI-driven monitoring, automation, and optimization',
      icon: <Brain className="w-8 h-8" />,
      features: ['AI monitoring & alerting', 'Predictive maintenance', 'Automated remediation', 'Performance optimization', 'Capacity planning', 'Anomaly detection'],
      benefits: ['Prevent 90% of outages', 'Reduce manual work by 60%', 'Improve system performance', 'Lower operational costs'],
      price: 'Starting at $999/month',
      marketPrice: '$1500-3000/month',
      category: 'AI Operations',
      technologies: ['Machine Learning', 'AIOps', 'Monitoring Tools', 'Automation', 'Python', 'TensorFlow'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Enterprise Data Analytics Platform',
      description: 'Comprehensive data analytics with visualization, reporting, and business intelligence',
      icon: <BarChart className="w-8 h-8" />,
      features: ['Data warehousing', 'ETL processes', 'Business intelligence', 'Real-time analytics', 'Custom dashboards', 'Data governance'],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Increase operational efficiency', 'Reduce reporting time'],
      price: 'Starting at $799/month',
      marketPrice: '$1200-2500/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Apache Spark', 'Python', 'SQL', 'Data Lakes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device management with security, monitoring, and policy enforcement',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Device enrollment', 'Policy enforcement', 'App management', 'Security controls', 'Remote wipe', 'Compliance monitoring'],
      benefits: ['Secure mobile devices', 'Enforce policies', 'Reduce security risks', 'Improve productivity'],
      price: 'Starting at $149/month',
      marketPrice: '$250-500/month',
      category: 'Mobile Management',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf', 'Android Enterprise'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with disaster recovery planning and testing',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Automated backups', 'Disaster recovery planning', 'Recovery testing', 'Cloud backup', 'Data archiving', 'Compliance backup'],
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity', 'Meet compliance requirements'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1000/month',
      category: 'Data Protection',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Cloud Storage', 'Replication'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Comprehensive compliance management with auditing, documentation, and risk assessment',
      icon: <Lock className="w-8 h-8" />,
      features: ['Compliance auditing', 'Risk assessment', 'Policy management', 'Documentation', 'Training programs', 'Audit preparation'],
      benefits: ['Ensure compliance', 'Reduce audit risks', 'Improve security posture', 'Streamline processes'],
      price: 'Starting at $599/month',
      marketPrice: '$900-1800/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'Audit Software', 'Documentation Systems', 'Risk Management', 'Compliance Frameworks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and cost control',
      icon: <Settings className="w-8 h-8" />,
      features: ['Asset tracking', 'License management', 'Cost optimization', 'Lifecycle planning', 'Procurement support', 'Disposal management'],
      benefits: ['Optimize IT spending', 'Ensure compliance', 'Improve asset utilization', 'Reduce waste'],
      price: 'Starting at $199/month',
      marketPrice: '$350-700/month',
      category: 'Asset Management',
      technologies: ['Asset Management Tools', 'CMDB', 'License Management', 'Procurement Systems', 'Inventory Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Specialized IT Services
    {
      title: 'VoIP & Unified Communications',
      description: 'Modern communication solutions with VoIP, video conferencing, and collaboration tools',
      icon: <Phone className="w-8 h-8" />,
      features: ['VoIP implementation', 'Video conferencing', 'Unified messaging', 'Call center solutions', 'Mobile integration', 'Quality monitoring'],
      benefits: ['Reduce communication costs', 'Improve collaboration', 'Enhance productivity', 'Modernize communications'],
      price: 'Starting at $399/month',
      marketPrice: '$600-1200/month',
      category: 'Communications',
      technologies: ['Cisco', 'Microsoft Teams', 'Zoom', 'SIP', 'VoIP', 'Unified Communications'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting with technology roadmaps, digital transformation, and optimization',
      icon: <Target className="w-8 h-8" />,
      features: ['Technology roadmaps', 'Digital transformation', 'IT strategy', 'Technology assessment', 'Vendor evaluation', 'Implementation planning'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Plan for future growth', 'Reduce technology risks'],
      price: 'Starting at $299/hour',
      marketPrice: '$400-800/hour',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Vendor Management', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs with certification preparation and skill development',
      icon: <Users className="w-8 h-8" />,
      features: ['Technical training', 'Certification prep', 'Skill assessments', 'Custom training programs', 'Online learning', 'Hands-on labs'],
      benefits: ['Improve team skills', 'Increase productivity', 'Reduce support tickets', 'Prepare for certifications'],
      price: 'Starting at $149/month',
      marketPrice: '$250-500/month',
      category: 'Training',
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs', 'Online Training', 'Skill Assessments'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery services',
      icon: <Activity className="w-8 h-8" />,
      features: ['Project planning', 'Resource management', 'Timeline management', 'Risk assessment', 'Quality assurance', 'Stakeholder communication'],
      benefits: ['Deliver projects on time', 'Control project costs', 'Manage risks effectively', 'Ensure quality delivery'],
      price: 'Starting at $199/hour',
      marketPrice: '$300-600/hour',
      category: 'Project Management',
      technologies: ['Project Management Tools', 'Agile Methodologies', 'Risk Management', 'Quality Assurance', 'Communication Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
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
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
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