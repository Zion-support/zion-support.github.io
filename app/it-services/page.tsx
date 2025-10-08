import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Smartphone,
  Monitor,
  HardDrive,
  Wifi,
  Lock,
  Settings,
  Zap,
  Users,
  BarChart,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud migration with zero downtime and cost optimization.',
      icon: '☁️',
      price: 'Starting at $2,500/month',
      features: [
        'AWS/Azure/GCP Migration',
        'Zero Downtime Migration',
        'Cost Optimization',
        'Auto-scaling Setup',
        'Disaster Recovery',
        '24/7 Monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and performance',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection, vulnerability assessment, and incident response.',
      icon: '🔒',
      price: 'Starting at $3,000/month',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Security Training'
      ],
      benefits: [
        'Prevent 95% of security breaches',
        'Ensure compliance with regulations',
        'Reduce security incidents by 80%',
        'Protect sensitive data'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'MFA', 'Encryption']
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration/continuous deployment.',
      icon: '🔄',
      price: 'Starting at $2,000/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Monitoring & Alerting',
        'Container Orchestration',
        'GitOps Implementation'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve team productivity',
        'Enable continuous delivery'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Terraform']
    },
    {
      title: 'Database Administration',
      description: 'Expert database management including optimization, backup, recovery, and performance tuning.',
      icon: '🗄️',
      price: 'Starting at $1,800/month',
      features: [
        'Database Optimization',
        'Backup & Recovery',
        'Performance Tuning',
        'Security Hardening',
        'Migration Services',
        '24/7 Support'
      ],
      benefits: [
        'Improve query performance by 60%',
        'Ensure data integrity',
        'Reduce downtime to near zero',
        'Optimize storage costs'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle']
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management including LAN, WAN, and wireless solutions.',
      icon: '🌐',
      price: 'Starting at $2,200/month',
      features: [
        'Network Design & Implementation',
        'Wireless Solutions',
        'VPN Setup',
        'Load Balancing',
        'Network Monitoring',
        'Security Configuration'
      ],
      benefits: [
        'Improve network performance by 50%',
        'Enhance security posture',
        'Reduce network downtime',
        'Enable remote connectivity'
      ],
      marketPrice: '$3,500-8,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Ubiquiti', 'SD-WAN', 'MPLS']
    },
    {
      title: 'System Administration',
      description: 'Comprehensive system management including Windows, Linux, and hybrid environments.',
      icon: '⚙️',
      price: 'Starting at $1,500/month',
      features: [
        'Server Management',
        'User Account Management',
        'System Monitoring',
        'Patch Management',
        'Backup Solutions',
        'Performance Optimization'
      ],
      benefits: [
        'Improve system reliability',
        'Reduce administrative overhead',
        'Enhance security',
        'Optimize resource utilization'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Systems',
      technologies: ['Windows Server', 'Linux', 'Active Directory', 'PowerShell', 'Bash', 'Puppet']
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for end-users and IT issues.',
      icon: '🎧',
      price: 'Starting at $1,200/month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'Hardware Troubleshooting',
        'Software Installation',
        'User Training',
        'Issue Tracking'
      ],
      benefits: [
        'Reduce support tickets by 40%',
        'Improve user satisfaction',
        'Faster issue resolution',
        'Proactive problem prevention'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'Slack', 'Microsoft Teams']
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      icon: '💾',
      price: 'Starting at $1,000/month',
      features: [
        'Automated Backups',
        'Disaster Recovery Planning',
        'Data Replication',
        'Recovery Testing',
        'Compliance Backup',
        'Cloud Backup Solutions'
      ],
      benefits: [
        'Protect critical data',
        'Minimize downtime during disasters',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$1,800-4,000/month',
      category: 'Backup',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Acronis', 'Carbonite']
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development and third-party system integration services.',
      icon: '🔌',
      price: 'Starting at $2,800/month',
      features: [
        'RESTful API Development',
        'GraphQL APIs',
        'Third-party Integrations',
        'API Documentation',
        'API Security',
        'Performance Optimization'
      ],
      benefits: [
        'Connect disparate systems',
        'Improve data flow',
        'Enable automation',
        'Enhance user experience'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'Integration',
      technologies: ['Node.js', 'Python', 'Java', 'Postman', 'Swagger', 'OAuth']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting.',
      icon: '💡',
      price: 'Starting at $200/hour',
      features: [
        'IT Strategy Planning',
        'Technology Assessment',
        'Digital Transformation',
        'Vendor Selection',
        'Implementation Planning',
        'Change Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce implementation risks',
        'Improve operational efficiency'
      ],
      marketPrice: '$300-500/hour',
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Scrum', 'Project Management', 'Change Management']
    },
    {
      title: 'Mobile Device Management',
      description: 'Comprehensive mobile device management including BYOD policies and security.',
      icon: '📱',
      price: 'Starting at $1,600/month',
      features: [
        'Mobile Device Enrollment',
        'App Management',
        'Security Policies',
        'Remote Wipe',
        'Compliance Monitoring',
        'User Training'
      ],
      benefits: [
        'Secure mobile devices',
        'Enforce security policies',
        'Enable BYOD programs',
        'Reduce security risks'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Mobile',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'AirWatch', 'Jamf', 'Samsung Knox']
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management including procurement, tracking, and disposal.',
      icon: '📊',
      price: 'Starting at $1,400/month',
      features: [
        'Asset Discovery',
        'Inventory Management',
        'License Tracking',
        'Procurement Management',
        'Disposal Planning',
        'Cost Optimization'
      ],
      benefits: [
        'Reduce IT costs by 25%',
        'Improve asset utilization',
        'Ensure compliance',
        'Optimize procurement'
      ],
      marketPrice: '$2,200-4,500/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'PDQ Inventory', 'ManageEngine', 'Snipe-IT', 'Asset Panda']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database administration, and system integration solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, database administration, system integration, IT consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Complete IT solutions including cloud migration, cybersecurity, DevOps, and system integration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Free IT Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600">
                Expert IT professionals with proven experience in enterprise environments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with 10+ years experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">24/7 support with guaranteed response times</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 12 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Professional {category.toLowerCase()} services tailored to your business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get IT Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* IT Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive technology expertise across all major platforms and solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Platforms</h3>
                <p className="text-gray-600">AWS, Azure, Google Cloud, and hybrid cloud solutions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Solutions</h3>
                <p className="text-gray-600">Comprehensive security and compliance management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Database Management</h3>
                <p className="text-gray-600">All major database platforms and optimization</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Network className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Networking</h3>
                <p className="text-gray-600">Enterprise networking and infrastructure design</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Settings className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">System Administration</h3>
                <p className="text-gray-600">Windows, Linux, and hybrid environment management</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Services</h3>
                <p className="text-gray-600">24/7 technical support and helpdesk services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our IT experts for a free consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
