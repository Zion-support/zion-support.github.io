import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiAutomationPage: React.FC = () => {
  const services = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive business processes with intelligent decision-making',
      features: ['Workflow Automation', 'Exception Handling', 'Quality Control'],
      price: 'Starting at $399/month',
      icon: '⚙️'
    },
    {
      title: 'Document Processing',
      description: 'AI-powered document analysis and data extraction',
      features: ['OCR Technology', 'Data Extraction', 'Classification'],
      price: 'Starting at $299/month',
      icon: '📄'
    },
    {
      title: 'Customer Service Automation',
      description: 'Intelligent customer support and ticket routing',
      features: ['Ticket Classification', 'Auto-Responses', 'Escalation Management'],
      price: 'Starting at $249/month',
      icon: '🎧'
    },
    {
      title: 'Financial Automation',
      description: 'Automated financial processes and reporting',
      features: ['Invoice Processing', 'Expense Management', 'Financial Reporting'],
      price: 'Starting at $499/month',
      icon: '💰'
    },
    {
      title: 'HR Automation',
      description: 'Streamline human resources processes',
      features: ['Resume Screening', 'Interview Scheduling', 'Onboarding'],
      price: 'Starting at $349/month',
      icon: '👥'
    },
    {
      title: 'Inventory Management',
      description: 'Intelligent inventory tracking and optimization',
      features: ['Demand Forecasting', 'Reorder Automation', 'Stock Optimization'],
      price: 'Starting at $199/month',
      icon: '📦'
    }
  ];

  const benefits = [
    { metric: '95%', description: 'Process Efficiency Improvement' },
    { metric: '80%', description: 'Cost Reduction' },
    { metric: '24/7', description: 'Automated Operations' },
    { metric: '99.9%', description: 'Accuracy Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Automation Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business operations with intelligent automation that handles 
            complex processes, makes decisions, and learns from experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get Automation Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Automation Benefits</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Automation Services</h2>
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

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Automation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Analysis</h3>
              <p className="text-gray-300 text-sm">We analyze your current processes and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">We design intelligent automation workflows tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300 text-sm">We build and deploy AI-powered automation solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Optimization</h3>
              <p className="text-gray-300 text-sm">We continuously monitor and optimize automation performance</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-gray-300 mb-6">
            Discover how AI automation can transform your operations and boost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Automation Journey
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

export default AiAutomationPage;