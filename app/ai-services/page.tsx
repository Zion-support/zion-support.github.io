import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, BarChart, Users, Settings, CheckCircle, ArrowRight, Phone, Mail, Search, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = useMemo(() => [
    {
      id: 'ai-marketing',
      name: 'AI Marketing',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Brain,
      category: 'marketing',
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      benefits: ['300% increase in conversion rates', '50% reduction in marketing costs', 'Real-time optimization'],
      pricing: { starting: 2999, period: 'month' },
      popular: true
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      category: 'automation',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      benefits: ['80% efficiency increase', '60% time savings', 'Zero human error'],
      pricing: { starting: 1400, period: 'month' },
      popular: false
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare',
      description: 'Transform healthcare with AI-powered diagnostic and treatment solutions.',
      icon: Shield,
      category: 'healthcare',
      features: ['Medical Diagnosis', 'Treatment Planning', 'Patient Monitoring', 'Drug Discovery'],
      benefits: ['Improved diagnostic accuracy', 'Faster treatment decisions', 'Reduced medical errors'],
      pricing: { starting: 4999, period: 'month' },
      popular: false
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech',
      description: 'Revolutionize financial services with AI-driven solutions.',
      icon: BarChart,
      category: 'fintech',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      benefits: ['99.9% fraud detection accuracy', 'Real-time risk assessment', 'Automated compliance'],
      pricing: { starting: 3999, period: 'month' },
      popular: true
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Enhance customer experience with AI-powered support solutions.',
      icon: Users,
      category: 'customer-service',
      features: ['Chatbots', 'Voice Assistants', 'Ticket Management', 'Customer Analytics'],
      benefits: ['24/7 availability', 'Instant response times', 'Multilingual support'],
      pricing: { starting: 1999, period: 'month' },
      popular: false
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Optimize business workflows with intelligent automation.',
      icon: Settings,
      category: 'automation',
      features: ['Process Automation', 'Task Optimization', 'Resource Management', 'Performance Monitoring'],
      benefits: ['Streamlined operations', 'Reduced bottlenecks', 'Improved productivity'],
      pricing: { starting: 2499, period: 'month' },
      popular: false
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'marketing', name: 'Marketing', icon: BarChart },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'fintech', name: 'Fintech', icon: BarChart },
    { id: 'customer-service', name: 'Customer Service', icon: Users }
  ];

  const filteredServices = useMemo(() => {
    let filtered = aiServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [aiServices, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including marketing automation, healthcare solutions, fintech, customer support, and workflow automation." />
        <meta name="keywords" content="AI services, artificial intelligence, marketing automation, healthcare AI, fintech, customer support AI" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence solutions. From marketing automation to healthcare AI, we deliver intelligent solutions that drive results.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Filter by category:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    {service.popular && (
                      <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold mt-1">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300">{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.pricing.starting.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">per {service.pricing.period}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:+13024640950`}
                      className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                    >
                      <Phone className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                      Call
                    </a>
                    <a
                      href={`mailto:info@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                    >
                      <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our AI experts to discuss how our solutions can drive innovation and growth in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;