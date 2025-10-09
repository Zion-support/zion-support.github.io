import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,999/month',
      features: [
        'Infrastructure Design & Planning',
        'Server & Network Management',
        'Cloud Migration Services',
        'Disaster Recovery Planning',
        'Performance Monitoring',
        '24/7 Technical Support'
      ],
      benefits: [
        'Reduce downtime by 90%',
        'Improve system performance by 50%',
        'Lower operational costs by 30%',
        'Ensure business continuity'
      ],
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'VMware', 'Docker', 'Kubernetes', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity services including threat detection, vulnerability assessment, and incident response.',
      icon: '🛡️',
      price: '$1,999/month',
      features: [
        'Threat Detection & Prevention',
        'Vulnerability Assessment',
        'Security Auditing',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Reduce security incidents by 80%',
        'Ensure compliance with regulations',
        'Minimize business risks'
      ],
      category: 'Security',
      technologies: ['SIEM', 'Firewalls', 'Antivirus', 'Encryption', 'VPN', 'Security Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Services & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management of cloud infrastructure.',
      icon: '☁️',
      price: '$1,799/month',
      features: [
        'Cloud Strategy & Planning',
        'Migration Services',
        'Cost Optimization',
        'Security Implementation',
        'Performance Monitoring',
        'Multi-cloud Management'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      category: 'Cloud',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Design & Management',
      description: 'Professional network design, implementation, and ongoing management for optimal performance.',
      icon: '🌐',
      price: '$1,499/month',
      features: [
        'Network Architecture Design',
        'Implementation & Configuration',
        'Performance Optimization',
        'Security Implementation',
        'Monitoring & Maintenance',
        'Troubleshooting & Support'
      ],
      benefits: [
        'Improve network performance by 60%',
        'Reduce network downtime by 85%',
        'Enhance security posture',
        'Support business growth'
      ],
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'VPN', 'Network Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management',
      description: 'Comprehensive database services including design, optimization, backup, and recovery solutions.',
      icon: '🗄️',
      price: '$1,299/month',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Backup & Recovery Solutions',
        'Security Implementation',
        'Monitoring & Maintenance',
        'Data Migration Services'
      ],
      benefits: [
        'Improve database performance by 70%',
        'Ensure data integrity and security',
        'Reduce backup and recovery time',
        'Minimize data loss risks'
      ],
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'Redis', 'Backup Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk, remote assistance, and technical support.',
      icon: '🎧',
      price: '$899/month',
      features: [
        '24/7 Technical Support',
        'Remote Assistance',
        'Hardware & Software Support',
        'User Training',
        'Issue Tracking & Resolution',
        'Preventive Maintenance'
      ],
      benefits: [
        'Reduce IT support costs by 50%',
        'Improve user satisfaction',
        'Minimize downtime and disruptions',
        'Proactive issue resolution'
      ],
      category: 'Support',
      technologies: ['Helpdesk Software', 'Remote Tools', 'Monitoring', 'Ticketing Systems', 'Knowledge Base'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and technical support. Enterprise-grade IT solutions starting at $899/month." />
        <meta name="keywords" content="it services, infrastructure management, cybersecurity, cloud services, network management, database management, it support" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to keep your business running smoothly, securely, and efficiently.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$899</div>
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
                    <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </div>
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