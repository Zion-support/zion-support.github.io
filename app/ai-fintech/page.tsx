import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiFintechPage: React.FC = () => {
  const services = [
    {
      title: 'Algorithmic Trading',
      description: 'AI-powered trading algorithms and market analysis',
      features: ['Market Prediction', 'Risk Management', 'Portfolio Optimization'],
      price: 'Starting at $1,499/month',
      icon: '📈'
    },
    {
      title: 'Fraud Detection',
      description: 'Advanced AI systems for detecting and preventing fraud',
      features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring'],
      price: 'Starting at $999/month',
      icon: '🛡️'
    },
    {
      title: 'Credit Scoring',
      description: 'AI-enhanced credit assessment and lending decisions',
      features: ['Alternative Data', 'Risk Assessment', 'Automated Decisions'],
      price: 'Starting at $1,200/month',
      icon: '💳'
    },
    {
      title: 'Regulatory Compliance',
      description: 'AI-powered compliance monitoring and reporting',
      features: ['Transaction Monitoring', 'Regulatory Reporting', 'Audit Support'],
      price: 'Starting at $1,800/month',
      icon: '📋'
    },
    {
      title: 'Customer Service AI',
      description: 'Intelligent chatbots and virtual assistants for financial services',
      features: ['24/7 Support', 'Account Management', 'Financial Advice'],
      price: 'Starting at $799/month',
      icon: '🤖'
    },
    {
      title: 'Wealth Management',
      description: 'AI-driven investment advice and portfolio management',
      features: ['Investment Recommendations', 'Risk Profiling', 'Performance Tracking'],
      price: 'Starting at $1,600/month',
      icon: '💰'
    }
  ];

  const benefits = [
    { metric: '99.9%', description: 'Fraud Detection Accuracy' },
    { metric: '50%', description: 'Faster Loan Processing' },
    { metric: '30%', description: 'Cost Reduction' },
    { metric: '24/7', description: 'AI Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Fintech Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize financial services with AI-powered solutions that enhance 
            security, improve efficiency, and deliver superior customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Explore Fintech AI
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Fintech Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fintech AI Benefits</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Fintech AI Services</h2>
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

        {/* Security Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Bank-Grade Security & Compliance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-lg font-bold text-white mb-2">Data Encryption</h3>
                <p className="text-gray-300 text-sm">End-to-end encryption for all financial data</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Regulatory Compliance</h3>
                <p className="text-gray-300 text-sm">Full compliance with financial regulations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-bold text-white mb-2">Risk Management</h3>
                <p className="text-gray-300 text-sm">Advanced risk assessment and mitigation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Financial Services with AI?
          </h2>
          <p className="text-gray-300 mb-6">
            Join leading financial institutions using AI to enhance security and customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Fintech AI Journey
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

export default AiFintechPage;