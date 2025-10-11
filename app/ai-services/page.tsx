import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, BarChart, Users, Zap, ArrowRight, Search, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'cloud', name: 'Cloud AI', icon: Cloud },
    { id: 'security', name: 'AI Security', icon: Shield },
    { id: 'customer', name: 'Customer AI', icon: Users }
  ];

  const aiServices = [
    {
      id: 1,
      title: 'AI Chatbots & NLP',
      description: 'Intelligent conversational AI that understands and responds to customer queries naturally.',
      category: 'customer',
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Easy Integration'],
      price: 'Starting at $2,500/month',
      icon: Brain
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      category: 'automation',
      features: ['Blog Writing', 'Social Media Posts', 'Email Campaigns', 'SEO Optimization'],
      price: 'Starting at $1,800/month',
      icon: Zap
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and insights powered by machine learning algorithms.',
      category: 'analytics',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      price: 'Starting at $3,200/month',
      icon: BarChart
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis for automated quality control and object recognition.',
      category: 'automation',
      features: ['Object Detection', 'Image Classification', 'Quality Control', 'Real-time Processing'],
      price: 'Starting at $4,000/month',
      icon: Cloud
    },
    {
      id: 5,
      title: 'AI Voice Solutions',
      description: 'Speech recognition and synthesis for voice-enabled applications.',
      category: 'customer',
      features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support'],
      price: 'Starting at $2,800/month',
      icon: Users
    },
    {
      id: 6,
      title: 'AI Workflow Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities.',
      category: 'automation',
      features: ['Process Automation', 'Smart Routing', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $3,500/month',
      icon: Zap
    },
    {
      id: 7,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI applications for diagnosis, treatment planning, and patient care.',
      category: 'analytics',
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Patient Monitoring'],
      price: 'Starting at $5,000/month',
      icon: Shield
    },
    {
      id: 8,
      title: 'AI Financial Services',
      description: 'Fintech AI solutions for fraud detection, risk assessment, and trading.',
      category: 'security',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Compliance Monitoring'],
      price: 'Starting at $4,500/month',
      icon: Shield
    },
    {
      id: 9,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI solutions deployed on cloud infrastructure.',
      category: 'cloud',
      features: ['Cloud Deployment', 'Auto-scaling', 'High Availability', 'Global CDN'],
      price: 'Starting at $2,000/month',
      icon: Cloud
    }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with AI." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, data analytics, computer vision, AI automation" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions. From chatbots to data analytics, 
              we provide cutting-edge artificial intelligence services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-slate-900'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI services designed to solve real business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={`/ai-services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;