import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Cloud, Server, Database, Network, Monitor } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server Management & Monitoring',
        'Network Design & Implementation',
        'Storage Solutions',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        '24/7 Technical Support'
      ],
      benefits: 'Achieve 99.9% uptime',
      popular: true,
      rating: 4.9,
      clients: '500+'
    },
    {
      title: 'Cloud Infrastructure Solutions',
      description: 'Complete cloud infrastructure setup, migration, and optimization with 24/7 monitoring.',
      icon: '☁️',
      price: '$2,999/month',
      features: [
        'Multi-cloud deployment (AWS, Azure, GCP)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization and monitoring',
        'Security compliance (SOC 2, ISO 27001)',
        '24/7 monitoring and alerting',
        'Performance optimization'
      ],
      benefits: 'Reduce infrastructure costs by 40%',
      popular: true,
      rating: 4.9,
      clients: '200+'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, incident response, and compliance.',
      icon: '🔒',
      price: '$2,499/month',
      features: [
        '24/7 Security Operations Center (SOC)',
        'Threat detection and response',
        'Vulnerability assessment and penetration testing',
        'Security awareness training',
        'Compliance management (GDPR, HIPAA, PCI-DSS)',
        'Identity and access management',
        'Security monitoring and alerting',
        'Incident response planning'
      ],
      benefits: 'Protect against 99.9% of threats',
      popular: false,
      rating: 4.8,
      clients: '150+'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Comprehensive IT Solutions for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            From infrastructure management to cybersecurity, we provide end-to-end IT services 
            that keep your business running smoothly and securely.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Our IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Professional IT services designed to meet your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="text-3xl font-bold text-cyan-400 mb-4">{service.price}</div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {service.rating}
                  </div>
                  <div>{service.clients} clients</div>
                </div>
                
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm mb-4 inline-block">
                  {service.benefits}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="tel:+13024640950"
                  className="w-full bg-cyan-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-300 transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to discuss your IT needs and get a customized solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              Call Us - (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
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