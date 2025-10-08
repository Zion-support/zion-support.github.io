import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const services = [
    {
      title: 'Custom SAAS Development',
      description: 'Tailored software-as-a-service solutions for your business',
      features: ['Custom Features', 'User Management', 'Payment Integration'],
      price: 'Starting at $2,000/month',
      icon: '💻'
    },
    {
      title: 'SAAS Migration',
      description: 'Migrate your existing applications to cloud-based SAAS',
      features: ['Data Migration', 'API Integration', 'User Training'],
      price: 'Starting at $1,500/month',
      icon: '🔄'
    },
    {
      title: 'Multi-tenant Architecture',
      description: 'Scalable multi-tenant SAAS platform development',
      features: ['Tenant Isolation', 'Scalable Infrastructure', 'Custom Branding'],
      price: 'Starting at $3,000/month',
      icon: '🏢'
    },
    {
      title: 'SAAS Analytics',
      description: 'Advanced analytics and reporting for your SAAS platform',
      features: ['User Analytics', 'Revenue Tracking', 'Performance Metrics'],
      price: 'Starting at $800/month',
      icon: '📊'
    },
    {
      title: 'API Development',
      description: 'RESTful APIs and integrations for your SAAS platform',
      features: ['REST APIs', 'Webhook Integration', 'Third-party APIs'],
      price: 'Starting at $1,200/month',
      icon: '🔌'
    },
    {
      title: 'SAAS Maintenance',
      description: 'Ongoing maintenance and support for your SAAS platform',
      features: ['Bug Fixes', 'Feature Updates', 'Security Patches'],
      price: 'Starting at $600/month',
      icon: '🛠️'
    }
  ];

  const benefits = [
    { metric: '99.9%', description: 'Uptime Guarantee' },
    { metric: '24/7', description: 'Monitoring & Support' },
    { metric: 'Auto', description: 'Scaling Capabilities' },
    { metric: 'Secure', description: 'Enterprise Security' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Build, deploy, and scale your software-as-a-service platform with our 
            comprehensive SAAS development and management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Your SAAS Journey
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View SAAS Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SAAS Platform Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SAAS Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-orange-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-orange-400 hover:text-orange-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">SAAS Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Planning</h3>
              <p className="text-gray-300 text-sm">Define requirements and architecture for your SAAS platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">Build your SAAS platform with modern technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Testing</h3>
              <p className="text-gray-300 text-sm">Comprehensive testing and quality assurance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Deployment</h3>
              <p className="text-gray-300 text-sm">Deploy and launch your SAAS platform</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build Your SAAS Platform?
          </h2>
          <p className="text-gray-300 mb-6">
            Let us help you create a scalable and profitable software-as-a-service solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Building Today
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

export default MicroSaasPage;