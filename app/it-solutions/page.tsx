import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Server, Shield, Cloud, Database } from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.',
      icon: '☁️',
      price: '$1,299/month',
      features: [
        'Cloud Migration Planning',
        'Infrastructure Optimization',
        'Cost Optimization',
        'Security Hardening',
        '24/7 Monitoring',
        'Backup & Recovery',
        'Disaster Recovery',
        'Compliance Management'
      ],
      benefits: [
        'Reduce cloud costs by 30%',
        'Improve performance by 40%',
        'Ensure 99.9% uptime',
        'Enhance security posture',
        'Simplify management'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: '🛡️',
      price: '$899/month',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Security Auditing',
        'Penetration Testing',
        'Security Training',
        'Compliance Management',
        'Incident Response',
        'Security Monitoring'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security risks by 80%',
        'Ensure compliance',
        'Protect sensitive data',
        'Minimize downtime'
      ],
      marketPrice: '$1,800-4,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'Firewalls', 'Antivirus', 'Penetration Testing', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Infrastructure Setup',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity.',
      icon: '🌐',
      price: '$1,199/month',
      features: [
        'Network Design & Planning',
        'Hardware Installation',
        'Configuration Management',
        'Performance Optimization',
        'Security Implementation',
        'Monitoring & Maintenance',
        'Troubleshooting',
        'Documentation'
      ],
      benefits: [
        'Improve network performance',
        'Enhance security',
        'Reduce downtime',
        'Optimize bandwidth usage',
        'Ensure scalability'
      ],
      marketPrice: '$2,000-4,500/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Network Monitoring', 'SD-WAN'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and migration services for all major database systems.',
      icon: '🗄️',
      price: '$799/month',
      features: [
        'Database Administration',
        'Performance Optimization',
        'Backup & Recovery',
        'Migration Services',
        'Security Hardening',
        'Monitoring & Alerting',
        'Capacity Planning',
        'Troubleshooting'
      ],
      benefits: [
        'Improve database performance by 50%',
        'Ensure data integrity',
        'Reduce downtime',
        'Optimize storage usage',
        'Enhance security'
      ],
      marketPrice: '$1,500-3,500/month',
      category: 'Database Services',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Help Desk & Support',
      description: '24/7 technical support and help desk services for all your IT needs and user issues.',
      icon: '🎧',
      price: '$599/month',
      features: [
        '24/7 Technical Support',
        'Remote Assistance',
        'Issue Tracking',
        'Knowledge Base',
        'User Training',
        'Software Installation',
        'Hardware Support',
        'Performance Monitoring'
      ],
      benefits: [
        'Reduce IT support costs by 40%',
        'Improve user satisfaction',
        'Faster issue resolution',
        'Proactive maintenance',
        'Comprehensive coverage'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Support Services',
      technologies: ['Help Desk Software', 'Remote Access', 'Monitoring Tools', 'Ticketing Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated deployment, monitoring, and continuous integration.',
      icon: '⚙️',
      price: '$1,499/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Logging',
        'Container Orchestration',
        'Security Integration',
        'Performance Optimization'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve code quality',
        'Enable rapid scaling',
        'Enhance collaboration'
      ],
      marketPrice: '$2,500-5,500/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Recovery Solutions',
      description: 'Comprehensive backup strategies and disaster recovery planning to protect your critical data.',
      icon: '💾',
      price: '$399/month',
      features: [
        'Automated Backups',
        'Disaster Recovery Planning',
        'Data Encryption',
        'Offsite Storage',
        'Recovery Testing',
        'Compliance Management',
        'Monitoring & Alerting',
        'Documentation'
      ],
      benefits: [
        'Protect critical data',
        'Minimize downtime',
        'Ensure compliance',
        'Reduce recovery time',
        'Peace of mind'
      ],
      marketPrice: '$800-2,000/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning, technology assessment, and digital transformation consulting services.',
      icon: '💡',
      price: '$1,199/month',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation',
        'Vendor Management',
        'Budget Planning',
        'Risk Assessment',
        'Compliance Review',
        'Implementation Planning'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce IT risks',
        'Improve efficiency',
        'Enable innovation'
      ],
      marketPrice: '$2,000-4,500/month',
      category: 'IT Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Risk Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile Device Management',
      description: 'Complete mobile device management including security, app deployment, and device monitoring.',
      icon: '📱',
      price: '$299/month',
      features: [
        'Device Enrollment',
        'App Management',
        'Security Policies',
        'Remote Wiping',
        'Location Tracking',
        'Compliance Monitoring',
        'User Management',
        'Reporting & Analytics'
      ],
      benefits: [
        'Secure mobile devices',
        'Control app access',
        'Ensure compliance',
        'Reduce security risks',
        'Simplify management'
      ],
      marketPrice: '$600-1,500/month',
      category: 'Mobile Management',
      technologies: ['MDM Solutions', 'Mobile Security', 'App Management', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Software Development Services',
      description: 'Custom software development, web applications, and mobile app development services.',
      icon: '💻',
      price: '$1,999/month',
      features: [
        'Custom Software Development',
        'Web Application Development',
        'Mobile App Development',
        'API Development',
        'Database Design',
        'UI/UX Design',
        'Testing & Quality Assurance',
        'Maintenance & Support'
      ],
      benefits: [
        'Custom solutions for your needs',
        'Modern, scalable applications',
        'Expert development team',
        'Ongoing support',
        'Competitive advantage'
      ],
      marketPrice: '$3,500-8,000/month',
      category: 'Software Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Mobile Development', 'Cloud Platforms'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Solutions & Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud management, cybersecurity, networking, and software development. Starting at $299/month." />
        <meta name="keywords" content="it solutions, cloud management, cybersecurity, networking, database management, devops, software development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Solutions & Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to optimize your infrastructure, enhance security, and drive business growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$299</div>
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
            Get started with our IT solutions today and transform your technology infrastructure.
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

export default ITSolutionsPage;