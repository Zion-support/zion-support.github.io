'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration & Setup',
      description: 'Seamlessly migrate your infrastructure to the cloud with expert guidance and minimal downtime.',
      features: [
        'AWS, Azure, and Google Cloud migration',
        'Infrastructure as Code (IaC) implementation',
        'Data migration and synchronization',
        'Cloud security and compliance setup',
        'Cost optimization and monitoring',
        'Disaster recovery planning'
      ],
      icon: '☁️'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security measures and threat detection systems.',
      features: [
        'Security assessment and auditing',
        'Firewall and network security',
        'Endpoint protection and monitoring',
        'Identity and access management',
        'Security awareness training',
        'Incident response planning'
      ],
      icon: '🔒'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Implement modern development practices with automated pipelines and continuous deployment.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Container orchestration with Kubernetes',
        'Infrastructure automation',
        'Monitoring and logging solutions',
        'Version control and code management',
        'Performance optimization'
      ],
      icon: '⚙️'
    },
    {
      title: 'Database Management',
      description: 'Optimize and maintain your database infrastructure for maximum performance and reliability.',
      features: [
        'Database design and optimization',
        'Performance tuning and monitoring',
        'Backup and recovery strategies',
        'Data migration and synchronization',
        'Security and access control',
        'Scalability planning'
      ],
      icon: '🗄️'
    },
    {
      title: 'Network Solutions',
      description: 'Design and implement robust network architectures that support your business growth.',
      features: [
        'Network design and architecture',
        'Wireless network setup and optimization',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization',
        'Network security implementation'
      ],
      icon: '🌐'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmaps to align with your business objectives.',
      features: [
        'Technology strategy development',
        'IT infrastructure assessment',
        'Digital transformation planning',
        'Vendor evaluation and selection',
        'Budget planning and optimization',
        'Change management support'
      ],
      icon: '💡'
    }
  ];

  const technologies = [
    { name: 'Cloud Platforms', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud'] },
    { name: 'Operating Systems', items: ['Windows Server', 'Linux (Ubuntu, CentOS)', 'macOS', 'VMware vSphere'] },
    { name: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server'] },
    { name: 'DevOps Tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible'] },
    { name: 'Security Tools', items: ['Firewalls', 'SIEM', 'Antivirus', 'VPN', '2FA', 'Encryption'] },
    { name: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack', 'Nagios', 'Zabbix', 'New Relic'] }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Infrastructure & Technology Solutions | Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and network solutions for modern businesses."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Complete IT infrastructure and support services designed to keep your business running smoothly, 
                  securely, and efficiently in today's digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Get IT Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* IT Services Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our IT Solutions</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive IT services that cover every aspect of your technology infrastructure and operations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies We Use */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technologies We Work With</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We leverage the latest technologies and tools to deliver robust, scalable, and secure IT solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="cyber-card p-8">
                    <h3 className="text-xl font-bold text-white mb-6">{tech.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Support Tiers */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">IT Support Tiers</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the level of IT support that best fits your business needs and budget.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="cyber-card p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic Support</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Email support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Basic troubleshooting</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Software updates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Monthly health check</span>
                    </li>
                  </ul>
                </div>
                
                <div className="cyber-card p-8 text-center border-2 border-cyan-400 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional Support</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">24/7 phone support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Remote assistance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Proactive monitoring</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Security updates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Weekly health reports</span>
                    </li>
                  </ul>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise Support</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400"> pricing</span></div>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Dedicated support team</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">On-site support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Custom solutions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Priority response</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Strategic consulting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our IT Services */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We provide reliable, secure, and scalable IT solutions that keep your business running smoothly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                  <p className="text-gray-300">
                    Round-the-clock monitoring and support to ensure your systems are always running optimally.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                  <p className="text-gray-300">
                    Comprehensive security measures to protect your data and systems from threats and vulnerabilities.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
                  <p className="text-gray-300">
                    IT infrastructure that grows with your business, from startup to enterprise scale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your IT needs and create a solution that keeps your business running smoothly, 
                securely, and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Get IT Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;