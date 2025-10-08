import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const QuantumComputingPage: React.FC = () => {
  const services = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for complex optimization problems',
      features: ['Optimization Problems', 'Cryptography', 'Machine Learning'],
      price: 'Custom Pricing',
      icon: '⚛️'
    },
    {
      title: 'Quantum Simulation',
      description: 'Simulate quantum systems for research and development',
      features: ['Molecular Simulation', 'Material Science', 'Drug Discovery'],
      price: 'Starting at $5,000/month',
      icon: '🔬'
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles',
      features: ['Quantum Key Distribution', 'Secure Communication', 'Data Protection'],
      price: 'Starting at $3,000/month',
      icon: '🔐'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Next-generation AI powered by quantum computing',
      features: ['Quantum Neural Networks', 'Pattern Recognition', 'Data Analysis'],
      price: 'Starting at $4,000/month',
      icon: '🧠'
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic guidance for quantum computing adoption',
      features: ['Technology Assessment', 'Implementation Strategy', 'Training'],
      price: 'Custom Pricing',
      icon: '💡'
    },
    {
      title: 'Quantum Cloud Access',
      description: 'Access to quantum computing resources via cloud',
      features: ['IBM Quantum', 'Google Quantum', 'Rigetti Computing'],
      price: 'Starting at $1,000/month',
      icon: '☁️'
    }
  ];

  const applications = [
    { title: 'Financial Modeling', description: 'Portfolio optimization and risk analysis' },
    { title: 'Drug Discovery', description: 'Molecular simulation for pharmaceutical research' },
    { title: 'Cryptography', description: 'Quantum-resistant encryption systems' },
    { title: 'Machine Learning', description: 'Quantum-enhanced AI algorithms' },
    { title: 'Supply Chain', description: 'Logistics optimization and routing' },
    { title: 'Climate Modeling', description: 'Complex climate system simulation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Quantum Computing Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of quantum computing to solve complex problems that are 
            impossible for classical computers. Experience the future of computation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Explore Quantum Solutions
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Quantum Case Studies
            </Link>
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quantum Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quantum Services</h2>
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

        {/* Why Quantum Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Quantum Computing?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Exponential Speedup</h3>
                    <p className="text-gray-300">Solve problems exponentially faster than classical computers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Quantum Advantage</h3>
                    <p className="text-gray-300">Tackle problems that are intractable for classical systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Future-Proof</h3>
                    <p className="text-gray-300">Stay ahead with next-generation computing technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Ready for Quantum?</h3>
              <p className="text-gray-300 mb-6">
                Discover how quantum computing can revolutionize your industry and 
                solve your most complex challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  Free quantum readiness assessment
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  Custom quantum strategy
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  Expert quantum consulting
                </div>
              </div>
              <Link to="/contact" className="cyber-button mt-6 inline-block">
                Get Quantum Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Enter the Quantum Era
          </h2>
          <p className="text-gray-300 mb-6">
            Be among the first to leverage quantum computing for competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Quantum Journey
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

export default QuantumComputingPage;