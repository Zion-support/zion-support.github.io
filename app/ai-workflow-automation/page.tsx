import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiWorkflowAutomationPage: React.FC = () => {
  const services = [
    {
      title: 'Process Automation',
      description: 'Intelligent automation of complex business workflows',
      features: ['Workflow Design', 'Process Optimization', 'Exception Handling'],
      price: 'Starting at $1,500/month',
      icon: '⚙️'
    },
    {
      title: 'Document Processing',
      description: 'AI-powered document analysis and workflow automation',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification'],
      price: 'Starting at $1,200/month',
      icon: '📄'
    },
    {
      title: 'Approval Workflows',
      description: 'Automated approval processes with intelligent routing',
      features: ['Smart Routing', 'Approval Logic', 'Notification Systems'],
      price: 'Starting at $800/month',
      icon: '✅'
    },
    {
      title: 'Task Automation',
      description: 'Automated task assignment and completion tracking',
      features: ['Task Assignment', 'Progress Tracking', 'Deadline Management'],
      price: 'Starting at $1,000/month',
      icon: '📋'
    },
    {
      title: 'Integration Automation',
      description: 'Automated data flow between different systems',
      features: ['API Integration', 'Data Synchronization', 'Error Handling'],
      price: 'Starting at $1,300/month',
      icon: '🔗'
    },
    {
      title: 'Compliance Automation',
      description: 'Automated compliance monitoring and reporting',
      features: ['Compliance Checks', 'Audit Trails', 'Report Generation'],
      price: 'Starting at $1,600/month',
      icon: '📊'
    }
  ];

  const benefits = [
    { metric: '90%', description: 'Process Efficiency' },
    { metric: '75%', description: 'Time Savings' },
    { metric: '99%', description: 'Accuracy Rate' },
    { metric: '24/7', description: 'Automated Operations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Workflow Automation
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your business processes with intelligent workflow automation 
            that learns, adapts, and optimizes your operations automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get Automation Assessment
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Automation Case Studies
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

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-gray-300 mb-6">
            Transform your business operations with intelligent workflow automation.
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

export default AiWorkflowAutomationPage;