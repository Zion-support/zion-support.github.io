import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiDataAnalyticsPage: React.FC = () => {
  const services = [
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis',
      features: ['Sales Forecasting', 'Demand Planning', 'Risk Assessment'],
      price: 'Starting at $1,800/month',
      icon: '🔮'
    },
    {
      title: 'Real-time Analytics',
      description: 'Live data processing and instant insights',
      features: ['Stream Processing', 'Live Dashboards', 'Real-time Alerts'],
      price: 'Starting at $1,500/month',
      icon: '⚡'
    },
    {
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and preferences',
      features: ['Segmentation', 'Churn Prediction', 'Lifetime Value'],
      price: 'Starting at $1,400/month',
      icon: '👥'
    },
    {
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions with AI enhancement',
      features: ['Data Visualization', 'KPI Tracking', 'Custom Reports'],
      price: 'Starting at $1,200/month',
      icon: '📊'
    },
    {
      title: 'Data Integration',
      description: 'Connect and unify data from multiple sources',
      features: ['ETL Processes', 'API Integration', 'Data Warehousing'],
      price: 'Starting at $1,000/month',
      icon: '🔗'
    },
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models for specific business needs',
      features: ['Model Development', 'Training', 'Deployment'],
      price: 'Starting at $2,000/month',
      icon: '🤖'
    }
  ];

  const benefits = [
    { metric: '300%', description: 'Faster Insights' },
    { metric: '95%', description: 'Accuracy Improvement' },
    { metric: 'Real-time', description: 'Data Processing' },
    { metric: 'Scalable', description: 'Analytics Platform' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Data Analytics
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable insights with AI-powered analytics 
            that reveal patterns, predict trends, and drive informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get Analytics Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Analytics Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Analytics Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Analytics Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">
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
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-gray-300 mb-6">
            Transform your business with powerful AI-driven analytics solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Analytics Journey
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

export default AiDataAnalyticsPage;