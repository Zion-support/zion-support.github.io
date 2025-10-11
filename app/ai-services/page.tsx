'use client';
import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  return (

  const services = [{
      title: 'Machine Learning Solutions', description: 'Custom ML models tailored to your business needs', features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making'],
      price: 'Starting at $1,500/month',
      icon: '🤖'
    
  );
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
  ]

  const benefits = [{
      title: 'Proven ROI', description: 'Average 300% return on investment for our AI implementations', icon: '📈'
    }, {
      title: 'Expert Team', description: 'PhD-level AI specialists with 10+ years of experience', icon: '👨‍💻'
    }, {
      title: '24/7 Support', description: 'Round-the-clock support for all AI solutions', icon: '🛠️'
    }, {
      title: 'Scalable Solutions', description: 'AI solutions that grow with your business', icon: '⚡'
    }];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
            AI Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive artificial intelligence solutions designed to transform your business 
            operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Get Free Consultation
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}></Link>
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our AI Services</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Link to="/contact" className="text-cyan-400 hover: text-cyan-300 font-medium"></Link>
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
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="grid md: grid-cols-4 gap-8">
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
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Start Your AI Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
    </div>
  );
};

export default AiServicesPage;
    <>
  </>
      <Helmet ></Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai services service for modern businesses." />
        <meta name="keywords" content="AI ai services, artificial intelligence, ai services, AI services, intelligent automation" />
      </Helmet>

      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai services service for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" /></CheckCircle>
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
      <Footer /></Footer>
  );
};

export default AiServicesPage;
