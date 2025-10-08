import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Cloud, Server, Database, Lock, ArrowRight, Sparkles } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud solutions including migration, optimization, and 24/7 monitoring.',
      icon: '☁️',
      price: '$2,000/month',
      features: [
        'AWS, Azure, GCP management',
        'Cloud migration & optimization',
        'Auto-scaling & load balancing',
        'Cost optimization',
        'Disaster recovery planning',
        '24/7 monitoring & support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability & reliability',
        'Enhance security & compliance'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection, incident response, and compliance.',
      icon: '🛡️',
      price: '$3,500/month',
      features: [
        'Threat detection & prevention',
        'Vulnerability assessments',
        'Incident response & forensics',
        'Security awareness training',
        'Compliance management (SOC 2, ISO 27001)',
        'Penetration testing'
      ],
      benefits: [
        'Prevent 95% of security breaches',
        'Reduce response time by 80%',
        'Ensure regulatory compliance'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Zero Trust']
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines and infrastructure as code solutions.',
      icon: '🔄',
      price: '$2,500/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Automated testing',
        'Deployment automation',
        'Monitoring & alerting'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve team productivity'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Terraform']
    },
    {
      title: 'Database Administration',
      description: 'Expert database management, optimization, and maintenance services.',
      icon: '🗄️',
      price: '$1,800/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening',
        'Migration & upgrades',
        '24/7 monitoring'
      ],
      benefits: [
        'Improve query performance by 60%',
        'Reduce downtime by 95%',
        'Ensure data integrity'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Database Services',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle']
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management solutions.',
      icon: '🌐',
      price: '$2,200/month',
      features: [
        'Network design & implementation',
        'Wireless network setup',
        'VPN & remote access',
        'Network security',
        'Performance monitoring',
        'Troubleshooting & support'
      ],
      benefits: [
        'Improve network performance by 50%',
        'Enhance security posture',
        'Reduce connectivity issues'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Meraki', 'SD-WAN']
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services for end-users and technical issues.',
      icon: '🎧',
      price: '$1,500/month',
      features: [
        '24/7 helpdesk support',
        'Remote troubleshooting',
        'Software installation & updates',
        'Hardware maintenance',
        'User training & onboarding',
        'Ticket management system'
      ],
      benefits: [
        'Resolve issues 3x faster',
        'Improve user satisfaction',
        'Reduce IT overhead costs'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Support Services',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'Active Directory']
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning.',
      icon: '💾',
      price: '$1,200/month',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Data replication',
        'Recovery testing',
        'Compliance backup requirements',
        'Cloud backup solutions'
      ],
      benefits: [
        'Ensure 99.9% data availability',
        'Minimize data loss risks',
        'Meet compliance requirements'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Backup & Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Acronis']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning and technology roadmap development.',
      icon: '💡',
      price: '$2,800/month',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'Budget planning',
        'Implementation guidance'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Plan for future growth'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Scrum', 'Project Management']
    },
    {
      title: 'Software Development',
      description: 'Custom software development and application modernization services.',
      icon: '💻',
      price: '$3,000/month',
      features: [
        'Custom application development',
        'Legacy system modernization',
        'API development & integration',
        'Mobile app development',
        'Quality assurance & testing',
        'Maintenance & support'
      ],
      benefits: [
        'Accelerate development cycles',
        'Improve application performance',
        'Enhance user experience'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Software Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'Angular']
    },
    {
      title: 'IT Compliance & Governance',
      description: 'Compliance management and IT governance framework implementation.',
      icon: '📋',
      price: '$2,300/month',
      features: [
        'Compliance framework implementation',
        'Audit preparation & support',
        'Policy development',
        'Risk assessment',
        'Training & awareness',
        'Documentation management'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit risks',
        'Improve governance processes'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Compliance',
      technologies: ['GRC Tools', 'ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'SOX']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database administration, and network management. Expert IT solutions for your business." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database administration, network management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Server className="w-12 h-12 text-cyan-400 mr-4 animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    IT Services
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT solutions to optimize your infrastructure, security, and operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/contact"
                  className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Free Consultation
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {category} Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Professional IT services for {category.toLowerCase()} needs
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {itServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="text-5xl mr-4 group-hover:animate-bounce">{service.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{service.title}</h3>
                            <div className="flex items-center space-x-4">
                              <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                              <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-purple-400 mb-3">Business Benefits:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                                <Star className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-green-400 mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Optimize Your IT Infrastructure?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today for a free IT assessment and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </span>
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;