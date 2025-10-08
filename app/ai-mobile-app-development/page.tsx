import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiMobileAppDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Mobile Apps',
      description: 'Native and cross-platform mobile apps with AI capabilities',
      features: ['iOS & Android', 'AI Integration', 'Real-time Processing'],
      price: 'Starting at $3,000/month',
      icon: '📱'
    },
    {
      title: 'Voice Recognition Apps',
      description: 'Mobile apps with advanced voice recognition and NLP',
      features: ['Speech-to-Text', 'Voice Commands', 'Natural Language Processing'],
      price: 'Starting at $2,500/month',
      icon: '🎤'
    },
    {
      title: 'Computer Vision Apps',
      description: 'Mobile apps with image recognition and computer vision',
      features: ['Image Recognition', 'AR Features', 'Object Detection'],
      price: 'Starting at $2,800/month',
      icon: '📷'
    },
    {
      title: 'Personalized Mobile Experience',
      description: 'AI-driven personalization in mobile applications',
      features: ['User Behavior Analysis', 'Content Personalization', 'Recommendation Engine'],
      price: 'Starting at $2,200/month',
      icon: '🎯'
    },
    {
      title: 'Chatbot Integration',
      description: 'Intelligent chatbots integrated into mobile apps',
      features: ['Natural Conversations', 'Context Awareness', 'Multi-language Support'],
      price: 'Starting at $1,800/month',
      icon: '💬'
    },
    {
      title: 'Predictive Analytics Apps',
      description: 'Mobile apps with predictive analytics and insights',
      features: ['Data Analysis', 'Predictive Modeling', 'Real-time Insights'],
      price: 'Starting at $2,600/month',
      icon: '📊'
    }
  ];

  const benefits = [
    { metric: '50%', description: 'Faster Development' },
    { metric: '90%', description: 'User Engagement' },
    { metric: 'AI-Powered', description: 'Smart Features' },
    { metric: 'Cross-Platform', description: 'iOS & Android' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Mobile App Development
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Create intelligent mobile applications that leverage AI to deliver 
            personalized experiences, smart features, and enhanced user engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get App Development Quote
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View App Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Mobile AI Benefits</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Mobile AI Services</h2>
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

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build AI-Powered Mobile Apps?
          </h2>
          <p className="text-gray-300 mb-6">
            Create intelligent mobile applications that stand out in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start App Development
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

export default AiMobileAppDevelopmentPage;