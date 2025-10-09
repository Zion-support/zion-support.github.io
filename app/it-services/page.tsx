import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Server, Cloud, Shield, Code, BarChart, Users, Database, Network, HardDrive, Cpu, Monitor, Wifi, Settings, Activity, Globe, Lock, Zap, Target, Rocket, Award, Clock, DollarSign } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud migration services with AWS, Azure, and Google Cloud Platform integration and optimization.',
      icon: '☁️',
      price: '$2,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Migration Execution',
        'Cost Optimization',
        'Security Implementation',
        'Performance Monitoring',
        'Disaster Recovery'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Enterprise-grade network design, implementation, and security solutions for optimal performance and protection.',
      icon: '🌐',
      price: '$1,800/month',
      features: [
        'Network Design & Implementation',
        'Firewall Configuration',
        'VPN Setup & Management',
        'Intrusion Detection',
        'Network Monitoring',
        'Security Audits'
      ],
      benefits: [
        'Improve network performance by 60%',
        'Enhance security posture',
        'Reduce downtime by 80%',
        'Enable secure remote access'
      ],
      marketPrice: '$3,500-10,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Juniper', 'Ubiquiti', 'Meraki'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and 24/7 monitoring.',
      icon: '🗄️',
      price: '$1,200/month',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Maintenance'
      ],
      benefits: [
        'Improve query performance by 70%',
        'Ensure data integrity and security',
        'Reduce backup and recovery time',
        'Optimize storage utilization'
      ],
      marketPrice: '$2,500-8,000/month',
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
      icon: '⚙️',
      price: '$1,500/month',
      features: [
        'CI/CD Pipeline Setup',
        'Automated Testing',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Release Management'
      ],
      benefits: [
        'Reduce deployment time by 90%',
        'Improve code quality and reliability',
        'Enable faster feature delivery',
        'Minimize production issues'
      ],
      marketPrice: '$3,000-12,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management.',
      icon: '🛡️',
      price: '$2,200/month',
      features: [
        'Security Assessment',
        'Threat Detection & Response',
        'Vulnerability Management',
        'Compliance Auditing',
        'Security Training',
        'Incident Response'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks by 85%',
        'Maintain business continuity'
      ],
      marketPrice: '$4,000-15,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'SOAR', 'NGFW', 'WAF', 'DLP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 IT support services with remote assistance, ticketing system, and proactive monitoring.',
      icon: '🎧',
      price: '$800/month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Assistance',
        'Ticketing System',
        'Proactive Monitoring',
        'Hardware & Software Support',
        'User Training'
      ],
      benefits: [
        'Minimize downtime and disruptions',
        'Improve user productivity',
        'Reduce IT support costs',
        'Ensure system reliability'
      ],
      marketPrice: '$1,500-5,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Zendesk', 'TeamViewer', 'SCCM', 'Active Directory'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with disaster recovery planning and business continuity services.',
      icon: '💾',
      price: '$1,000/month',
      features: [
        'Automated Backup Systems',
        'Disaster Recovery Planning',
        'Business Continuity Testing',
        'Data Archiving',
        'Recovery Time Optimization',
        'Compliance Management'
      ],
      benefits: [
        'Protect critical business data',
        'Minimize recovery time',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$2,000-8,000/month',
      category: 'Backup',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS Backup', 'Azure Backup', 'Google Cloud'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Server Management & Virtualization',
      description: 'Complete server administration including virtualization, monitoring, and optimization services.',
      icon: '🖥️',
      price: '$1,300/month',
      features: [
        'Server Administration',
        'Virtualization Management',
        'Performance Optimization',
        'Capacity Planning',
        'Patch Management',
        'Resource Monitoring'
      ],
      benefits: [
        'Optimize server performance',
        'Reduce hardware costs',
        'Improve resource utilization',
        'Ensure system stability'
      ],
      marketPrice: '$2,500-10,000/month',
      category: 'Servers',
      technologies: ['VMware', 'Hyper-V', 'Proxmox', 'Windows Server', 'Linux', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile Device Management',
      description: 'Comprehensive mobile device management with security, app deployment, and remote control capabilities.',
      icon: '📱',
      price: '$600/month',
      features: [
        'Device Enrollment',
        'App Management',
        'Security Policies',
        'Remote Wipe',
        'Compliance Monitoring',
        'User Training'
      ],
      benefits: [
        'Secure mobile devices',
        'Control app access',
        'Ensure compliance',
        'Simplify device management'
      ],
      marketPrice: '$1,200-4,000/month',
      category: 'Mobile',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf', 'AirWatch', 'Samsung Knox'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to align technology with business goals and optimize IT investments.',
      icon: '💡',
      price: '$1,800/month',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation',
        'Vendor Management',
        'Budget Planning',
        'ROI Analysis'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Plan for future growth',
        'Reduce IT complexity'
      ],
      marketPrice: '$3,500-12,000/month',
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Lean', 'Six Sigma', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Software Development & Integration',
      description: 'Custom software development and system integration services for business-specific requirements.',
      icon: '💻',
      price: '$2,500/month',
      features: [
        'Custom Application Development',
        'API Integration',
        'Legacy System Modernization',
        'Database Integration',
        'Third-party Integrations',
        'Maintenance & Support'
      ],
      benefits: [
        'Meet specific business needs',
        'Improve operational efficiency',
        'Integrate disparate systems',
        'Modernize legacy applications'
      ],
      marketPrice: '$5,000-20,000/month',
      category: 'Development',
      technologies: ['Python', 'Java', '.NET', 'Node.js', 'React', 'Angular'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management including procurement, tracking, and disposal services.',
      icon: '📦',
      price: '$700/month',
      features: [
        'Asset Discovery & Inventory',
        'Lifecycle Management',
        'License Management',
        'Cost Optimization',
        'Disposal Services',
        'Compliance Reporting'
      ],
      benefits: [
        'Optimize IT asset utilization',
        'Reduce licensing costs',
        'Ensure compliance',
        'Improve asset visibility'
      ],
      marketPrice: '$1,500-5,000/month',
      category: 'Asset Management',
      technologies: ['SCCM', 'Lansweeper', 'ServiceNow', 'Jira', 'Custom Solutions', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'VoIP & Unified Communications',
      description: 'Complete VoIP and unified communications solutions for modern business communication needs.',
      icon: '📞',
      price: '$900/month',
      features: [
        'VoIP System Implementation',
        'Unified Communications',
        'Video Conferencing',
        'Call Center Solutions',
        'Mobile Integration',
        'Quality Monitoring'
      ],
      benefits: [
        'Reduce communication costs',
        'Improve collaboration',
        'Enable remote work',
        'Enhance customer service'
      ],
      marketPrice: '$1,800-6,000/month',
      category: 'Communications',
      technologies: ['Cisco', 'Microsoft Teams', 'Zoom', 'RingCentral', '8x8', 'Vonage'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification preparation for your technical team.',
      icon: '🎓',
      price: '$1,100/month',
      features: [
        'Technical Training Programs',
        'Certification Preparation',
        'Hands-on Labs',
        'Instructor-led Training',
        'Online Learning Platform',
        'Progress Tracking'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support tickets',
        'Stay current with technology'
      ],
      marketPrice: '$2,000-8,000/month',
      category: 'Training',
      technologies: ['Cisco', 'Microsoft', 'AWS', 'Google Cloud', 'VMware', 'CompTIA'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management services to ensure successful delivery of technology initiatives.',
      icon: '📋',
      price: '$1,400/month',
      features: [
        'Project Planning & Execution',
        'Resource Management',
        'Risk Assessment',
        'Quality Assurance',
        'Stakeholder Communication',
        'Timeline Management'
      ],
      benefits: [
        'Ensure project success',
        'Meet deadlines and budgets',
        'Minimize risks',
        'Improve communication'
      ],
      marketPrice: '$2,500-10,000/month',
      category: 'Project Management',
      technologies: ['PMI', 'Agile', 'Scrum', 'Kanban', 'Microsoft Project', 'Jira'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Green IT & Sustainability',
      description: 'Sustainable IT solutions to reduce environmental impact and improve energy efficiency.',
      icon: '🌱',
      price: '$1,600/month',
      features: [
        'Energy Efficiency Assessment',
        'Green Technology Implementation',
        'Carbon Footprint Reduction',
        'Sustainable Procurement',
        'Waste Management',
        'Compliance Reporting'
      ],
      benefits: [
        'Reduce environmental impact',
        'Lower energy costs',
        'Improve sustainability',
        'Meet green standards'
      ],
      marketPrice: '$3,000-12,000/month',
      category: 'Sustainability',
      technologies: ['Energy Monitoring', 'Green Computing', 'Virtualization', 'Cloud Computing', 'Renewable Energy', 'IoT'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Backup', count: itServices.filter(s => s.category === 'Backup').length },
    { name: 'Servers', count: itServices.filter(s => s.category === 'Servers').length },
    { name: 'Mobile', count: itServices.filter(s => s.category === 'Mobile').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and DevOps. Enterprise-grade solutions starting at $600/month." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, network infrastructure, devops, database management, it support" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to optimize your technology infrastructure and drive business growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$600</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your IT Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
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
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and transform your technology operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
