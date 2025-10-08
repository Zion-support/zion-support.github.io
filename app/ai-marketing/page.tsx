import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiMarketingPage: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Ad Optimization',
      description: 'Maximize ROI with intelligent ad targeting and bidding',
      features: ['Real-time Optimization', 'Audience Targeting', 'Budget Management'],
      price: 'Starting at $199/month',
      icon: '🎯'
    },
    {
      title: 'Content Generation',
      description: 'AI-generated marketing content that converts',
      features: ['Blog Posts', 'Social Media', 'Email Campaigns'],
      price: 'Starting at $299/month',
      icon: '✍️'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast customer behavior and market trends',
      features: ['Customer Insights', 'Sales Forecasting', 'Market Analysis'],
      price: 'Starting at $399/month',
      icon: '📊'
    },
    {
      title: 'Chatbot Marketing',
      description: 'Intelligent chatbots for customer engagement',
      features: ['24/7 Support', 'Lead Qualification', 'Personalized Responses'],
      price: 'Starting at $149/month',
      icon: '💬'
    },
    {
      title: 'Email Marketing AI',
      description: 'Personalized email campaigns that drive results',
      features: ['Send Time Optimization', 'Subject Line Testing', 'Content Personalization'],
      price: 'Starting at $249/month',
      icon: '📧'
    },
    {
      title: 'Social Media AI',
      description: 'Automated social media management and posting',
      features: ['Content Scheduling', 'Engagement Analysis', 'Trend Monitoring'],
      price: 'Starting at $179/month',
      icon: '📱'
    }
  ];

  const results = [
    { metric: '300%', description: 'Average Increase in Conversion Rates' },
    { metric: '50%', description: 'Reduction in Marketing Costs' },
    { metric: '85%', description: 'Improvement in Campaign Performance' },
    { metric: '24/7', description: 'Automated Marketing Operations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Marketing Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize your marketing with AI-powered automation, personalization, 
            and optimization that delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Get Free Marketing Audit
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View Success Stories
            </Link>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Proven Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{result.metric}</div>
                <div className="text-gray-300">{result.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">AI Marketing Services</h2>
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

        {/* Features Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why AI Marketing Works</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Personalization at Scale</h3>
                    <p className="text-gray-300">Deliver personalized experiences to thousands of customers simultaneously</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Real-time Optimization</h3>
                    <p className="text-gray-300">Continuously optimize campaigns based on real-time performance data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Predictive Insights</h3>
                    <p className="text-gray-300">Anticipate customer needs and market trends before they happen</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Schedule a free consultation to discover how AI can transform your marketing strategy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="text-pink-400 mr-2">✓</span>
                  Free marketing audit
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-pink-400 mr-2">✓</span>
                  Custom AI strategy
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-pink-400 mr-2">✓</span>
                  Implementation roadmap
                </div>
              </div>
              <Link to="/contact" className="cyber-button mt-6 inline-block">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Transform Your Marketing with AI
          </h2>
          <p className="text-gray-300 mb-6">
            Join hundreds of businesses already using AI to revolutionize their marketing efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start Your AI Marketing Journey
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

export default AiMarketingPage;