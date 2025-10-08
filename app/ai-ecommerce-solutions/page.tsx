import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiEcommerceSolutionsPage: React.FC = () => {
  const services = [
    {
      title: 'AI Product Recommendations',
      description: 'Personalized product recommendations powered by AI',
      features: ['Behavioral Analysis', 'Real-time Recommendations', 'A/B Testing'],
      price: 'Starting at $1,500/month',
      icon: '🛍️'
    },
    {
      title: 'Dynamic Pricing',
      description: 'AI-driven pricing optimization for maximum revenue',
      features: ['Price Optimization', 'Competitor Analysis', 'Demand Forecasting'],
      price: 'Starting at $1,200/month',
      icon: '💰'
    },
    {
      title: 'Inventory Management',
      description: 'Intelligent inventory optimization and demand forecasting',
      features: ['Demand Prediction', 'Stock Optimization', 'Reorder Automation'],
      price: 'Starting at $1,800/month',
      icon: '📦'
    },
    {
      title: 'Customer Service AI',
      description: 'AI-powered customer support and chatbots',
      features: ['24/7 Support', 'Order Tracking', 'Returns Processing'],
      price: 'Starting at $999/month',
      icon: '🤖'
    },
    {
      title: 'Visual Search',
      description: 'AI-powered image search and product discovery',
      features: ['Image Recognition', 'Similar Product Search', 'Visual Filters'],
      price: 'Starting at $1,300/month',
      icon: '🔍'
    },
    {
      title: 'Fraud Detection',
      description: 'AI-powered fraud prevention and payment security',
      features: ['Transaction Monitoring', 'Risk Scoring', 'Real-time Alerts'],
      price: 'Starting at $1,100/month',
      icon: '🛡️'
    }
  ];

  const benefits = [
    { metric: '35%', description: 'Conversion Rate Increase' },
    { metric: '25%', description: 'Revenue Growth' },
    { metric: '60%', description: 'Customer Satisfaction' },
    { metric: '40%', description: 'Cost Reduction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI E-commerce Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your e-commerce business with AI-powered solutions that 
            increase sales, improve customer experience, and optimize operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get E-commerce Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View E-commerce Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">E-commerce AI Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-pink-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">E-commerce AI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-pink-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-pink-400 hover:text-pink-300 font-medium">
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
            Ready to Transform Your E-commerce?
          </h2>
          <p className="text-gray-300 mb-6">
            Boost your online sales with AI-powered e-commerce solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start E-commerce AI Journey
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

export default AiEcommerceSolutionsPage;