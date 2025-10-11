'use client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  MessageCircle, 
  BarChart, 
  Eye, 
  Mic, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'chatbots', name: 'Chatbots & NLP' },
    { id: 'analytics', name: 'Analytics & BI' },
    { id: 'vision', name: 'Computer Vision' },
    { id: 'automation', name: 'Automation' },
    { id: 'voice', name: 'Voice & Speech' }
  ];

  const services = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      category: 'chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration',
        '24/7 availability',
        'Custom training'
      ],
      icon: MessageCircle,
      rating: 4.9,
      reviews: 127,
      deliveryTime: '2-4 weeks'
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      category: 'analytics',
      description: 'Transform your data into actionable insights with machine learning algorithms',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Data visualization',
        'Custom models',
        'API integration'
      ],
      icon: BarChart,
      rating: 4.8,
      reviews: 89,
      deliveryTime: '3-6 weeks'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      category: 'vision',
      description: 'Image and video analysis using advanced computer vision technology',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Object detection',
        'Image classification',
        'Facial recognition',
        'Video analysis',
        'Real-time processing',
        'Custom models'
      ],
      icon: Eye,
      rating: 4.7,
      reviews: 156,
      deliveryTime: '4-8 weeks'
    },
    {
      id: 'voice-processing',
      name: 'Voice & Speech AI',
      category: 'voice',
      description: 'Speech recognition, synthesis, and voice command processing',
      price: '$349/month',
      marketPrice: '$600-2000/month',
      features: [
        'Speech recognition',
        'Text-to-speech',
        'Voice commands',
        'Multi-language support',
        'Real-time processing',
        'Custom voices'
      ],
      icon: Mic,
      rating: 4.6,
      reviews: 98,
      deliveryTime: '3-5 weeks'
    },
    {
      id: 'process-automation',
      name: 'Process Automation',
      category: 'automation',
      description: 'Automate repetitive tasks and workflows with intelligent automation',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Data extraction',
        'Custom workflows',
        'Integration APIs'
      ],
      icon: Zap,
      rating: 4.9,
      reviews: 203,
      deliveryTime: '2-6 weeks'
    },
    {
      id: 'ai-security',
      name: 'AI Security Solutions',
      category: 'automation',
      description: 'Advanced threat detection and security monitoring using AI',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Security monitoring',
        'Incident response',
        'Compliance reporting',
        'Real-time alerts'
      ],
      icon: Shield,
      rating: 4.8,
      reviews: 145,
      deliveryTime: '4-8 weeks'
    }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const benefits = [
    {
      icon: Brain,
      title: 'Cutting-Edge AI',
      description: 'Latest AI technologies and algorithms'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times for all projects'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Competitive pricing with no hidden fees'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced AI engineers and data scientists'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions. 
              From chatbots to computer vision, we have the expertise to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                    </div>
                    <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    Delivery: {service.deliveryTime}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your AI needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;