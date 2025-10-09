import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Server, Shield, Settings, Monitor } from 'lucide-react';

const SystemAdminPage: React.FC = () => {
  const adminServices = [
    {
      title: 'Windows Server Administration',
      description: 'Comprehensive Windows server management, maintenance, and optimization for enterprise environments.',
      icon: '🪟',
      price: '$1,200/month',
      features: [
        'Active Directory Management',
        'Group Policy Configuration',
        'Server Monitoring & Maintenance',
        'Security Hardening',
        'Backup & Recovery',
        'Performance Optimization'
      ],
      benefits: [
        'Ensure 99.9% uptime',
        'Reduce security vulnerabilities by 80%',
        'Improve system performance by 40%',
        'Minimize downtime and disruptions'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Windows Admin',
      technologies: ['Windows Server', 'Active Directory', 'PowerShell', 'Group Policy', 'WSUS', 'SCCM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Linux System Administration',
      description: 'Expert Linux server administration and management for high-performance, secure, and scalable systems.',
      icon: '🐧',
      price: '$1,300/month',
      features: [
        'Server Configuration & Setup',
        'User & Permission Management',
        'Service Management',
        'Security Hardening',
        'Automation & Scripting',
        'Performance Tuning'
      ],
      benefits: [
        'Achieve maximum system stability',
        'Implement robust security measures',
        'Automate routine tasks',
        'Optimize resource utilization'
      ],
      marketPrice: '$2,800-5,500/month',
      category: 'Linux Admin',
      technologies: ['Ubuntu', 'CentOS', 'RHEL', 'Bash', 'Ansible', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud administration across AWS, Azure, and Google Cloud platforms.',
      icon: '☁️',
      price: '$1,800/month',
      features: [
        'Multi-cloud Management',
        'Resource Provisioning',
        'Cost Optimization',
        'Security Configuration',
        'Monitoring & Alerting',
        'Disaster Recovery'
      ],
      benefits: [
        'Reduce cloud costs by 30%',
        'Improve security posture',
        'Ensure high availability',
        'Scale resources efficiently'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Admin',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>System Administration Services - Zion Tech Group</title>
        <meta name="description" content="Professional system administration services. Windows, Linux, and cloud server management with 24/7 monitoring and support." />
        <meta name="keywords" content="system administration, server management, Windows admin, Linux admin, cloud administration, IT infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/system-admin" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Administration</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional system administration services to keep your infrastructure running smoothly, securely, and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Administration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of system administration services designed for various platforms and environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adminServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join businesses that trust our system administration expertise to keep their infrastructure running smoothly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
              >
                Start Your Admin Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SystemAdminPage;