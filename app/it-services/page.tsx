import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cloud, Shield, Settings, Code, Database, Smartphone, Lock, Users } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Scalability', 'Security'],
      href: '/cloud-services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats.',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      href: '/cybersecurity'
    },
    {
      icon: Settings,
      title: 'DevOps',
      description: 'Streamline your development and deployment processes with DevOps practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      href: '/devops'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimization', 'SEO'],
      href: '/web-development'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management services.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration'],
      href: '/database-management'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      href: '/mobile-development'
    },
    {
      icon: Lock,
      title: 'Network Security',
      description: 'Secure network infrastructure and monitoring solutions.',
      features: ['Network Design', 'Firewall Configuration', 'VPN Setup', 'Monitoring'],
      href: '/network-security'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business goals.',
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Training'],
      href: '/it-consulting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to support your business infrastructure and technology needs.
          </p>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <service.icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="block w-full text-center bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 px-4 rounded-lg transition-colors"
                  >
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your IT needs and explore how our solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItServicesPage;