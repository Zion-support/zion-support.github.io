import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BusinessIntelligencePage: React.FC = () => {
  const services = [
    {
      title: 'Data Visualization',
      description: 'Interactive dashboards and reports for business insights',
      features: ['Real-time Dashboards', 'Custom Reports', 'Interactive Charts'],
      price: 'Starting at $1,200/month',
      icon: '📊'
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis',
      features: ['Sales Forecasting', 'Demand Planning', 'Risk Analysis'],
      price: 'Starting at $1,800/month',
      icon: '🔮'
    },
    {
      title: 'Data Integration',
      description: 'Connect and unify data from multiple sources',
      features: ['ETL Processes', 'Data Warehousing', 'API Integration'],
      price: 'Starting at $1,500/month',
      icon: '🔗'
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time monitoring of key business metrics',
      features: ['KPI Tracking', 'Alert Systems', 'Performance Reports'],
      price: 'Starting at $999/month',
      icon: '📈'
    },
    {
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and preferences',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Churn Prediction'],
      price: 'Starting at $1,400/month',
      icon: '👥'
    },
    {
      title: 'Financial Analytics',
      description: 'Comprehensive financial reporting and analysis',
      features: ['P&L Analysis', 'Cash Flow Forecasting', 'Budget Planning'],
      price: 'Starting at $1,600/month',
      icon: '💰'
    }
  ];

  const benefits = [
    { metric: '300%', description: 'Faster Decision Making' },
    { metric: '85%', description: 'Data Accuracy Improvement' },
    { metric: '50%', description: 'Cost Reduction' },
    { metric: 'Real-time', description: 'Insights & Reporting' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Business Intelligence Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable insights with advanced business intelligence 
            solutions that drive informed decision-making and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get BI Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View BI Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">BI Benefits</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">BI Services</h2>
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
            Transform your business with powerful business intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start BI Journey
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

export default BusinessIntelligencePage;