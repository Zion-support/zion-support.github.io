import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AutonomousSystemsPage: React.FC = () => {
  const services = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving vehicle systems and fleet management',
      features: ['Path Planning', 'Object Detection', 'Fleet Coordination'],
      price: 'Starting at $2,500/month',
      icon: '🚗'
    },
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous production lines and quality control',
      features: ['Predictive Maintenance', 'Quality Inspection', 'Process Optimization'],
      price: 'Starting at $3,000/month',
      icon: '🏭'
    },
    {
      title: 'Autonomous Drones',
      description: 'Intelligent drone systems for various applications',
      features: ['Mission Planning', 'Collision Avoidance', 'Data Collection'],
      price: 'Starting at $1,500/month',
      icon: '🚁'
    },
    {
      title: 'Smart Buildings',
      description: 'Autonomous building management and optimization',
      features: ['Energy Management', 'Security Systems', 'Climate Control'],
      price: 'Starting at $2,000/month',
      icon: '🏢'
    },
    {
      title: 'Autonomous Robotics',
      description: 'Self-managing robotic systems for various tasks',
      features: ['Task Planning', 'Adaptive Learning', 'Human Interaction'],
      price: 'Starting at $2,200/month',
      icon: '🤖'
    },
    {
      title: 'Autonomous Networks',
      description: 'Self-healing and self-optimizing network systems',
      features: ['Traffic Management', 'Fault Detection', 'Performance Optimization'],
      price: 'Starting at $1,800/month',
      icon: '🌐'
    }
  ];

  const capabilities = [
    { title: 'Self-Learning', description: 'Systems that improve through experience' },
    { title: 'Adaptive Behavior', description: 'Dynamic response to changing conditions' },
    { title: 'Predictive Maintenance', description: 'Proactive system health management' },
    { title: 'Autonomous Decision Making', description: 'Independent problem-solving capabilities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Autonomous Systems
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Build intelligent systems that operate independently, learn from experience, 
            and adapt to changing conditions without human intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Explore Autonomous Solutions
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Success Stories
            </Link>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Autonomous Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center cyber-card">
                <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Autonomous Solutions</h2>
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

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Autonomous System Development</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Requirements</h3>
              <p className="text-gray-300 text-sm">Define autonomous system requirements and objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">Architect intelligent autonomous system components</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">Build and train autonomous system algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Deployment</h3>
              <p className="text-gray-300 text-sm">Deploy and monitor autonomous system performance</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Build the Future with Autonomous Systems
          </h2>
          <p className="text-gray-300 mb-6">
            Create intelligent systems that work independently and adapt to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Building Autonomous Systems
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

export default AutonomousSystemsPage;