import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiCybersecurityPage: React.FC = () => {
  const services = [
    {
      title: 'AI Threat Detection',
      description: 'Advanced AI systems for detecting and preventing cyber threats',
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Threat Hunting'],
      price: 'Starting at $2,000/month',
      icon: '🛡️'
    },
    {
      title: 'Automated Response',
      description: 'AI-powered incident response and threat mitigation',
      features: ['Auto-Response', 'Threat Containment', 'Recovery Automation'],
      price: 'Starting at $1,800/month',
      icon: '⚡'
    },
    {
      title: 'Predictive Security',
      description: 'AI-driven security forecasting and risk assessment',
      features: ['Risk Prediction', 'Vulnerability Assessment', 'Threat Intelligence'],
      price: 'Starting at $1,500/month',
      icon: '🔮'
    },
    {
      title: 'Security Analytics',
      description: 'AI-powered analysis of security logs and events',
      features: ['Log Analysis', 'Pattern Recognition', 'Security Insights'],
      price: 'Starting at $1,200/month',
      icon: '📊'
    },
    {
      title: 'Zero Trust Security',
      description: 'AI-enhanced zero trust architecture implementation',
      features: ['Identity Verification', 'Access Control', 'Continuous Monitoring'],
      price: 'Starting at $2,500/month',
      icon: '🔐'
    },
    {
      title: 'Security Training AI',
      description: 'AI-powered security awareness and training programs',
      features: ['Phishing Simulation', 'Behavioral Training', 'Risk Assessment'],
      price: 'Starting at $800/month',
      icon: '🎓'
    }
  ];

  const benefits = [
    { metric: '99.9%', description: 'Threat Detection Rate' },
    { metric: 'Real-time', description: 'Threat Response' },
    { metric: 'AI-Powered', description: 'Security Automation' },
    { metric: '24/7', description: 'Continuous Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Cybersecurity Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Defend against evolving cyber threats with AI-powered security solutions 
            that learn, adapt, and respond to attacks in real-time.
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">AI Security Benefits</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">AI Security Services</h2>
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
            Ready to Secure Your Future with AI?
          </h2>
          <p className="text-gray-300 mb-6">
            Protect your business with next-generation AI-powered cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start AI Security Journey
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

export default AiCybersecurityPage;