import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Bot, BarChart3, Shield, Zap, Target } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: [
        'AI Readiness Assessment',
        'Custom AI Roadmap Development',
        'Technology Stack Recommendations',
        'ROI Analysis & Projections',
        'Implementation Planning',
        'Change Management Support'
      ],
      pricing: 'Starting at $5,000/month'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Development',
      description: 'Build intelligent conversational AI solutions that enhance customer experience and automate support processes.',
      features: [
        'Natural Language Processing',
        'Multi-channel Integration',
        'Custom Knowledge Base',
        'Sentiment Analysis',
        '24/7 Availability',
        'Analytics & Reporting'
      ],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling.',
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Automated Reporting',
        'Anomaly Detection',
        'Business Intelligence'
      ],
      pricing: 'Starting at $3,500/month'
    },
    {
      icon: Shield,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered security solutions that detect and prevent threats in real-time.',
      features: [
        'Threat Detection & Prevention',
        'Behavioral Analysis',
        'Fraud Detection',
        'Security Monitoring',
        'Incident Response',
        'Compliance Management'
      ],
      pricing: 'Starting at $4,000/month'
    },
    {
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Streamline your business processes with intelligent automation that reduces manual work and improves efficiency.',
      features: [
        'Workflow Automation',
        'Document Processing',
        'Data Extraction',
        'Decision Automation',
        'Integration Management',
        'Performance Monitoring'
      ],
      pricing: 'Starting at $2,800/month'
    },
    {
      icon: Target,
      title: 'AI Personalization',
      description: 'Deliver personalized experiences to your customers with AI-powered recommendation engines and content optimization.',
      features: [
        'Recommendation Engines',
        'Content Personalization',
        'User Behavior Analysis',
        'A/B Testing',
        'Real-time Optimization',
        'Performance Tracking'
      ],
      pricing: 'Starting at $3,200/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy consulting, chatbot development, data analytics, security solutions, and process automation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot development, data analytics, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From strategy consulting to implementation, our comprehensive AI services 
              help businesses harness the power of artificial intelligence to drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-green-400">
                      {service.pricing}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver AI solutions that drive real results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our AI specialists have years of experience in machine learning, 
                deep learning, and AI implementation across various industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                We've successfully implemented AI solutions for 50+ clients, 
                delivering measurable improvements in efficiency and ROI.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300">
                Our streamlined development process ensures quick deployment 
                and faster time-to-value for your AI initiatives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Every AI solution is tailored to your specific business needs, 
                ensuring optimal performance and maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our AI services can help you achieve your business goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Free AI Consultation
              </a>
              <a 
                href="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule AI Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIServicesPage;