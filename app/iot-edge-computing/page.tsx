import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IotEdgeComputingPage: React.FC = () => {
  const services = [
    {
      title: 'IoT Device Management',
      description: 'Comprehensive management of IoT devices and sensors',
      features: ['Device Provisioning', 'Remote Monitoring', 'Firmware Updates'],
      price: 'Starting at $1,200/month',
      icon: '📱'
    },
    {
      title: 'Edge Computing Platform',
      description: 'Distributed computing infrastructure for real-time processing',
      features: ['Edge Servers', 'Data Processing', 'Low Latency'],
      price: 'Starting at $1,800/month',
      icon: '⚡'
    },
    {
      title: 'Data Analytics',
      description: 'Real-time analytics and insights from IoT data',
      features: ['Stream Processing', 'Predictive Analytics', 'Visualization'],
      price: 'Starting at $1,500/month',
      icon: '📊'
    },
    {
      title: 'Industrial IoT',
      description: 'IoT solutions for manufacturing and industrial applications',
      features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization'],
      price: 'Starting at $2,000/month',
      icon: '🏭'
    },
    {
      title: 'Smart City Solutions',
      description: 'IoT infrastructure for smart city applications',
      features: ['Traffic Management', 'Environmental Monitoring', 'Public Safety'],
      price: 'Starting at $2,500/month',
      icon: '🏙️'
    },
    {
      title: 'IoT Security',
      description: 'Comprehensive security for IoT devices and networks',
      features: ['Device Authentication', 'Network Security', 'Data Encryption'],
      price: 'Starting at $1,000/month',
      icon: '🔒'
    }
  ];

  const benefits = [
    { metric: 'Real-time', description: 'Data Processing' },
    { metric: '50%', description: 'Latency Reduction' },
    { metric: '99.9%', description: 'Uptime Guarantee' },
    { metric: 'Scalable', description: 'Infrastructure' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            IoT & Edge Computing
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Connect and process data at the edge with IoT and edge computing solutions 
            that enable real-time decision-making and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Explore IoT Solutions
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View IoT Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">IoT & Edge Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">IoT & Edge Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-blue-400 hover:text-blue-300 font-medium">
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
            Ready to Connect Everything?
          </h2>
          <p className="text-gray-300 mb-6">
            Build intelligent IoT solutions with our edge computing expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start IoT Journey
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

export default IotEdgeComputingPage;