import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiCloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      title: 'AI-Optimized Cloud',
      description: 'Cloud infrastructure designed for AI workloads',
      features: ['GPU Computing', 'Auto-scaling', 'Cost Optimization'],
      price: 'Starting at $2,000/month',
      icon: '☁️'
    },
    {
      title: 'ML Pipeline Infrastructure',
      description: 'Complete machine learning pipeline infrastructure',
      features: ['Data Processing', 'Model Training', 'Model Deployment'],
      price: 'Starting at $2,500/month',
      icon: '🔄'
    },
    {
      title: 'AI Data Lakes',
      description: 'Scalable data storage and processing for AI',
      features: ['Data Ingestion', 'Data Processing', 'Data Analytics'],
      price: 'Starting at $1,800/month',
      icon: '🏞️'
    },
    {
      title: 'Edge AI Infrastructure',
      description: 'Distributed AI computing at the edge',
      features: ['Edge Servers', 'Model Deployment', 'Real-time Processing'],
      price: 'Starting at $2,200/month',
      icon: '⚡'
    },
    {
      title: 'AI Monitoring & Management',
      description: 'Comprehensive monitoring and management of AI infrastructure',
      features: ['Performance Monitoring', 'Resource Management', 'Cost Tracking'],
      price: 'Starting at $1,500/month',
      icon: '📊'
    },
    {
      title: 'AI Security Infrastructure',
      description: 'Secure AI infrastructure with enterprise-grade security',
      features: ['Data Encryption', 'Access Control', 'Compliance'],
      price: 'Starting at $1,200/month',
      icon: '🔒'
    }
  ];

  const benefits = [
    { metric: '99.9%', description: 'Uptime Guarantee' },
    { metric: 'Auto', description: 'Scaling Capabilities' },
    { metric: '50%', description: 'Cost Reduction' },
    { metric: '24/7', description: 'Monitoring & Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Cloud Infrastructure
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Build and scale AI applications with purpose-built cloud infrastructure 
            that delivers performance, reliability, and cost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get Infrastructure Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Infrastructure Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Infrastructure Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Infrastructure Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-purple-400 hover:text-purple-300 font-medium">
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
            Ready to Build AI Infrastructure?
          </h2>
          <p className="text-gray-300 mb-6">
            Scale your AI applications with our purpose-built cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Infrastructure Journey
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

export default AiCloudInfrastructurePage;