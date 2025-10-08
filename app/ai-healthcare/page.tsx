import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiHealthcarePage: React.FC = () => {
  const services = [
    {
      title: 'Medical Imaging AI',
      description: 'AI-powered analysis of medical images and scans',
      features: ['X-ray Analysis', 'MRI Interpretation', 'CT Scan Processing'],
      price: 'Starting at $1,999/month',
      icon: '🏥'
    },
    {
      title: 'Drug Discovery',
      description: 'AI-accelerated pharmaceutical research and development',
      features: ['Molecular Analysis', 'Drug Design', 'Clinical Trials'],
      price: 'Starting at $3,000/month',
      icon: '💊'
    },
    {
      title: 'Diagnostic AI',
      description: 'Intelligent diagnostic assistance and decision support',
      features: ['Symptom Analysis', 'Risk Assessment', 'Treatment Recommendations'],
      price: 'Starting at $2,500/month',
      icon: '🔬'
    },
    {
      title: 'Personalized Medicine',
      description: 'AI-driven personalized treatment plans',
      features: ['Genomic Analysis', 'Treatment Optimization', 'Outcome Prediction'],
      price: 'Starting at $2,200/month',
      icon: '🧬'
    },
    {
      title: 'Healthcare Analytics',
      description: 'Advanced analytics for healthcare operations',
      features: ['Patient Flow Analysis', 'Resource Optimization', 'Outcome Tracking'],
      price: 'Starting at $1,800/month',
      icon: '📊'
    },
    {
      title: 'Telemedicine AI',
      description: 'AI-enhanced remote healthcare services',
      features: ['Virtual Consultations', 'Remote Monitoring', 'AI Triage'],
      price: 'Starting at $1,500/month',
      icon: '📱'
    }
  ];

  const benefits = [
    { metric: '95%', description: 'Diagnostic Accuracy Improvement' },
    { metric: '60%', description: 'Faster Drug Discovery' },
    { metric: '40%', description: 'Cost Reduction' },
    { metric: '24/7', description: 'AI Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Healthcare Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform healthcare delivery with AI-powered solutions that improve 
            diagnosis accuracy, accelerate drug discovery, and enhance patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Explore Healthcare AI
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Healthcare Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Healthcare AI Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Healthcare AI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-green-400 hover:text-green-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">HIPAA Compliant & Secure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-white mb-2">Data Security</h3>
                <p className="text-gray-300 text-sm">Bank-level encryption and secure data handling</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-bold text-white mb-2">HIPAA Compliance</h3>
                <p className="text-gray-300 text-sm">Full compliance with healthcare privacy regulations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-bold text-white mb-2">Quality Assurance</h3>
                <p className="text-gray-300 text-sm">Rigorous testing and validation processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Healthcare with AI?
          </h2>
          <p className="text-gray-300 mb-6">
            Join leading healthcare organizations using AI to improve patient care and outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Healthcare AI Journey
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

export default AiHealthcarePage;