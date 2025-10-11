import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, Cloud, BarChart, Users, Settings, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'AI Consulting',
      description: 'Strategic AI implementation and optimization for your business needs.',
      category: 'consulting',
      icon: Brain,
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation planning',
        'ROI analysis',
        'Change management'
      ],
      price: 'Starting at $299/month'
    },
    {
      id: 2,
      title: 'AI Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities.',
      category: 'automation',
      icon: Zap,
      features: [
        'Process automation',
        'Workflow optimization',
        'Exception handling',
        'Performance monitoring',
        'Continuous improvement'
      ],
      price: 'Starting at $399/month'
    },
    {
      id: 3,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your digital assets.',
      category: 'security',
      icon: Shield,
      features: [
        'Threat detection',
        'Anomaly detection',
        'Incident response',
        'Security analytics',
        'Compliance monitoring'
      ],
      price: 'Starting at $599/month'
    },
    {
      id: 4,
      title: 'AI Cloud Solutions',
      description: 'Scalable AI infrastructure and cloud-based AI services.',
      category: 'cloud',
      icon: Cloud,
      features: [
        'Cloud AI platforms',
        'Model deployment',
        'Auto-scaling',
        'Cost optimization',
        'Global availability'
      ],
      price: 'Starting at $499/month'
    },
    {
      id: 5,
      title: 'AI Analytics',
      description: 'Advanced data analytics and business intelligence powered by AI.',
      category: 'analytics',
      icon: BarChart,
      features: [
        'Predictive analytics',
        'Real-time insights',
        'Data visualization',
        'Custom dashboards',
        'Trend analysis'
      ],
      price: 'Starting at $349/month'
    },
    {
      id: 6,
      title: 'AI Customer Service',
      description: 'Intelligent chatbots and customer support solutions.',
      category: 'customer',
      icon: Users,
      features: [
        'Chatbot development',
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        '24/7 availability'
      ],
      price: 'Starting at $199/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'automation', name: 'Automation' },
    { id: 'security', name: 'Security' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'customer', name: 'Customer Service' }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including consulting, automation, cybersecurity, cloud solutions, and analytics. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence consulting, AI automation, AI cybersecurity, AI cloud solutions, AI analytics" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From consulting to implementation, 
              we provide comprehensive AI services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-3">{service.price}</div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine deep AI expertise with business understanding to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-white text-lg">Years AI Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-white text-lg">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-white text-lg">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-white text-lg">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiServicesPage;