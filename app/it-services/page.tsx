import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business',
      features: ['AWS/Azure/GCP', 'Migration Services', 'Cost Optimization'],
      price: 'Starting at $800/month',
      icon: '☁️'
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network protection and monitoring',
      features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions'],
      price: 'Starting at $600/month',
      icon: '🛡️'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and helpdesk services',
      features: ['Remote Support', 'On-site Service', 'Priority Response'],
      price: 'Starting at $400/month',
      icon: '🛠️'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Reliable data protection and disaster recovery',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption'],
      price: 'Starting at $300/month',
      icon: '💾'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions for your business needs',
      features: ['Web Applications', 'Mobile Apps', 'API Development'],
      price: 'Starting at $1,200/month',
      icon: '💻'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology assessment',
      features: ['Technology Roadmap', 'Vendor Selection', 'Digital Transformation'],
      price: 'Starting at $500/month',
      icon: '📊'
    }
  ];

  const benefits = [
    { metric: '99.9%', description: 'Uptime Guarantee' },
    { metric: '24/7', description: 'Support Available' },
    { metric: '15min', description: 'Average Response Time' },
    { metric: '50+', description: 'Expert Technicians' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to keep your business running smoothly. 
            From cloud infrastructure to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get IT Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View IT Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our IT Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-indigo-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">IT Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-indigo-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our IT Service Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Assessment</h3>
              <p className="text-gray-300 text-sm">We evaluate your current IT infrastructure and identify needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Planning</h3>
              <p className="text-gray-300 text-sm">We develop a comprehensive IT strategy and roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300 text-sm">We implement and configure your IT solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Support</h3>
              <p className="text-gray-300 text-sm">We provide ongoing support and maintenance</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p className="text-gray-300 mb-6">
            Let our expert team help you build a robust and secure IT foundation for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get Started Today
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

export default ItServicesPage;