import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models tailored to your business needs',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making'],
      price: 'Starting at $1,500/month',
      icon: '🤖'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text analysis and language understanding',
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation'],
      price: 'Starting at $999/month',
      icon: '💬'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis powered by AI',
      features: ['Object Detection', 'Facial Recognition', 'Quality Inspection'],
      price: 'Starting at $1,299/month',
      icon: '👁️'
    },
    {
      title: 'AI Consulting',
      description: 'Strategic AI implementation and optimization',
      features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning'],
      price: 'Custom Pricing',
      icon: '💡'
    },
    {
      title: 'AI Model Training',
      description: 'Custom model development and training services',
      features: ['Data Preparation', 'Model Development', 'Performance Optimization'],
      price: 'Starting at $2,500/month',
      icon: '🎯'
    },
    {
      title: 'AI Integration',
      description: 'Seamless integration of AI into existing systems',
      features: ['API Development', 'System Integration', 'Legacy Modernization'],
      price: 'Starting at $1,800/month',
      icon: '🔗'
    }
  ];

  const benefits = [
    {
      title: 'Proven ROI',
      description: 'Average 300% return on investment for our AI implementations',
      icon: '📈'
    },
    {
      title: 'Expert Team',
      description: 'PhD-level AI specialists with 10+ years of experience',
      icon: '👨‍💻'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all AI solutions',
      icon: '🛠️'
    },
    {
      title: 'Scalable Solutions',
      description: 'AI solutions that grow with your business',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive artificial intelligence solutions designed to transform your business 
            operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get Free Consultation
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our AI Services</h2>
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

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our AI Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our AI Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">We analyze your business needs and identify AI opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Strategy</h3>
              <p className="text-gray-300 text-sm">We develop a comprehensive AI implementation strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">We build and train custom AI models for your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Deployment</h3>
              <p className="text-gray-300 text-sm">We deploy and integrate AI solutions into your systems</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-300 mb-6">
            Get started with our AI services and see the difference artificial intelligence can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Your AI Journey
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

export default AiServicesPage;