import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive security evaluation and vulnerability testing',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits'],
      price: 'Starting at $1,500/month',
      icon: '🔍'
    },
    {
      title: 'Threat Detection',
      description: 'AI-powered threat detection and response systems',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Incident Response'],
      price: 'Starting at $2,000/month',
      icon: '🛡️'
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data security and privacy solutions',
      features: ['Encryption', 'Access Control', 'Data Loss Prevention'],
      price: 'Starting at $1,200/month',
      icon: '🔐'
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with security regulations and standards',
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOC 2 Certification'],
      price: 'Starting at $1,800/month',
      icon: '📋'
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness and training programs',
      features: ['Phishing Simulation', 'Security Workshops', 'Best Practices'],
      price: 'Starting at $800/month',
      icon: '🎓'
    },
    {
      title: 'Managed Security',
      description: '24/7 security monitoring and management services',
      features: ['SOC Services', 'Threat Hunting', 'Security Operations'],
      price: 'Starting at $2,500/month',
      icon: '🛠️'
    }
  ];

  const benefits = [
    { metric: '99.9%', description: 'Threat Detection Rate' },
    { metric: '24/7', description: 'Security Monitoring' },
    { metric: '15min', description: 'Average Response Time' },
    { metric: '100%', description: 'Compliance Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Cybersecurity Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your business with comprehensive cybersecurity solutions that 
            defend against evolving threats and ensure regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get Security Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Security Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-red-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-red-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-red-400 hover:text-red-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-gray-300 mb-6">
            Protect your valuable data and systems with our comprehensive cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Security Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CybersecurityPage;