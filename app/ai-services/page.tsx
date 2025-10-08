import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Brain, Cpu, Eye, MessageSquare, BarChart3, FileText, Image, Video, Music, Code, Palette, Search, Filter, Download, Upload, Share, Lock, Unlock, Eye, EyeOff, Settings, Bell, Heart, ThumbsUp, MessageCircle, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All AI Services', icon: '🤖' },
    { id: 'machine-learning', name: 'Machine Learning', icon: '🧠' },
    { id: 'nlp', name: 'Natural Language Processing', icon: '💬' },
    { id: 'computer-vision', name: 'Computer Vision', icon: '👁️' },
    { id: 'automation', name: 'AI Automation', icon: '⚡' },
    { id: 'analytics', name: 'AI Analytics', icon: '📊' },
    { id: 'chatbots', name: 'AI Chatbots', icon: '🤖' },
    { id: 'content', name: 'AI Content', icon: '📝' }
  ];

  const aiServices = [
    // Machine Learning Services
    {
      id: 1,
      name: 'Machine Learning Model Development',
      description: 'Custom machine learning models tailored to your specific business needs, from data preprocessing to model deployment.',
      category: 'machine-learning',
      price: '$2,500/month',
      features: [
        'Custom model development',
        'Data preprocessing & cleaning',
        'Feature engineering',
        'Model training & validation',
        'Hyperparameter optimization',
        'Model deployment & monitoring',
        'Performance analytics',
        'Continuous learning updates'
      ],
      icon: '🧠',
      color: 'from-blue-500 to-purple-600',
      popular: true,
      rating: 4.9,
      users: '500+',
      link: 'https://ziontechgroup.com/ml-development'
    },
    {
      id: 2,
      name: 'Predictive Analytics Platform',
      description: 'Advanced predictive analytics solution that forecasts trends, behaviors, and outcomes using machine learning algorithms.',
      category: 'machine-learning',
      price: '$1,999/month',
      features: [
        'Predictive modeling',
        'Time series forecasting',
        'Risk assessment',
        'Demand forecasting',
        'Customer behavior prediction',
        'Real-time predictions',
        'Custom dashboards',
        'API integration'
      ],
      icon: '📈',
      color: 'from-green-500 to-teal-600',
      popular: false,
      rating: 4.8,
      users: '300+',
      link: 'https://ziontechgroup.com/predictive-analytics'
    },

    // Natural Language Processing
    {
      id: 3,
      name: 'Natural Language Processing Suite',
      description: 'Comprehensive NLP solution for text analysis, sentiment analysis, language translation, and content understanding.',
      category: 'nlp',
      price: '$1,500/month',
      features: [
        'Sentiment analysis',
        'Text classification',
        'Named entity recognition',
        'Language translation',
        'Text summarization',
        'Question answering',
        'Chatbot integration',
        'Multi-language support'
      ],
      icon: '💬',
      color: 'from-purple-500 to-pink-600',
      popular: true,
      rating: 4.7,
      users: '800+',
      link: 'https://ziontechgroup.com/nlp-suite'
    },
    {
      id: 4,
      name: 'AI Content Generator',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, marketing copy, and creative content.',
      category: 'content',
      price: '$299/month',
      features: [
        'Article generation',
        'Marketing copy creation',
        'Social media content',
        'Product descriptions',
        'Email campaigns',
        'SEO optimization',
        'Brand voice customization',
        'Content scheduling'
      ],
      icon: '📝',
      color: 'from-orange-500 to-red-600',
      popular: true,
      rating: 4.8,
      users: '1.2K+',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },

    // Computer Vision
    {
      id: 5,
      name: 'Computer Vision Platform',
      description: 'Advanced computer vision solution for image recognition, object detection, and visual content analysis.',
      category: 'computer-vision',
      price: '$2,200/month',
      features: [
        'Object detection & recognition',
        'Image classification',
        'Facial recognition',
        'OCR (Optical Character Recognition)',
        'Video analysis',
        'Quality inspection',
        'Real-time processing',
        'Custom model training'
      ],
      icon: '👁️',
      color: 'from-cyan-500 to-blue-600',
      popular: false,
      rating: 4.6,
      users: '400+',
      link: 'https://ziontechgroup.com/computer-vision'
    },
    {
      id: 6,
      name: 'AI Image Processing',
      description: 'Intelligent image enhancement, editing, and manipulation using advanced AI algorithms.',
      category: 'computer-vision',
      price: '$899/month',
      features: [
        'Image enhancement',
        'Background removal',
        'Style transfer',
        'Image upscaling',
        'Color correction',
        'Object removal',
        'Batch processing',
        'API integration'
      ],
      icon: '🎨',
      color: 'from-pink-500 to-rose-600',
      popular: false,
      rating: 4.5,
      users: '600+',
      link: 'https://ziontechgroup.com/ai-image-processing'
    },

    // AI Automation
    {
      id: 7,
      name: 'AI Workflow Automation',
      description: 'Intelligent automation platform that streamlines business processes with AI-powered decision making.',
      category: 'automation',
      price: '$1,800/month',
      features: [
        'Process automation',
        'Decision making AI',
        'Exception handling',
        'Workflow optimization',
        'Integration capabilities',
        'Performance monitoring',
        'Custom triggers',
        'Scalable architecture'
      ],
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600',
      popular: true,
      rating: 4.8,
      users: '700+',
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      id: 8,
      name: 'AI Data Processing',
      description: 'Automated data processing and analysis platform that handles large datasets with intelligent insights.',
      category: 'analytics',
      price: '$1,299/month',
      features: [
        'Data ingestion & cleaning',
        'Automated analysis',
        'Pattern recognition',
        'Anomaly detection',
        'Data visualization',
        'Report generation',
        'Real-time processing',
        'Cloud integration'
      ],
      icon: '📊',
      color: 'from-indigo-500 to-purple-600',
      popular: false,
      rating: 4.7,
      users: '500+',
      link: 'https://ziontechgroup.com/ai-data-processing'
    },

    // AI Chatbots
    {
      id: 9,
      name: 'AI Chatbot Platform',
      description: 'Advanced conversational AI platform with natural language understanding and multi-channel support.',
      category: 'chatbots',
      price: '$399/month',
      features: [
        'Natural language understanding',
        'Multi-channel support',
        'Context awareness',
        'Human handoff',
        'Analytics & insights',
        'Custom training',
        'API integration',
        'Voice capabilities'
      ],
      icon: '🤖',
      color: 'from-emerald-500 to-green-600',
      popular: true,
      rating: 4.9,
      users: '1.5K+',
      link: 'https://ziontechgroup.com/ai-chatbot'
    },
    {
      id: 10,
      name: 'AI Customer Support',
      description: 'Intelligent customer support solution that provides 24/7 assistance with human-like interactions.',
      category: 'chatbots',
      price: '$599/month',
      features: [
        '24/7 availability',
        'Multi-language support',
        'Ticket management',
        'Knowledge base integration',
        'Sentiment analysis',
        'Escalation handling',
        'Performance metrics',
        'Custom branding'
      ],
      icon: '🎧',
      color: 'from-violet-500 to-purple-600',
      popular: false,
      rating: 4.6,
      users: '900+',
      link: 'https://ziontechgroup.com/ai-customer-support'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-intense">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Harness the power of cutting-edge AI technologies to automate processes, gain insights, 
              and drive innovation across your organization with our comprehensive AI service portfolio.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5K+</div>
                <div className="text-gray-300">AI Models Deployed</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free AI Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full mt-1">
                          ⭐ POPULAR
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing & Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.users}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our AI Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300">
                Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300">
                Advanced text analysis, sentiment analysis, and language understanding capabilities.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-300">
                Image recognition, object detection, and visual content analysis solutions.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300">
                Intelligent process automation with AI-powered decision making and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our AI Implementation Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-4">1. Discovery & Analysis</h3>
              <p className="text-gray-300">
                We analyze your business needs, data sources, and objectives to design the perfect AI solution.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-4">2. Design & Development</h3>
              <p className="text-gray-300">
                Our AI experts develop custom models and algorithms tailored to your specific requirements.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">3. Deployment & Integration</h3>
              <p className="text-gray-300">
                We deploy your AI solution and integrate it seamlessly with your existing systems.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">4. Monitoring & Optimization</h3>
              <p className="text-gray-300">
                Continuous monitoring and optimization to ensure peak performance and accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you transform your business with cutting-edge artificial intelligence solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free AI strategy consultation</p>
            <p>✓ Custom AI solution design</p>
            <p>✓ 24/7 AI monitoring & support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;