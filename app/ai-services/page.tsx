import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, Eye, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'Machine Learning Solutions',
      description: 'Build intelligent systems that learn and adapt to your business needs with our advanced ML algorithms.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Learning'],
      link: '/ai-ml',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: 'Natural Language Processing',
      description: 'Transform text and speech data into actionable insights with our cutting-edge NLP technologies.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      link: '/ai-nlp',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      icon: <Eye className="w-12 h-12 text-green-500" />,
      title: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information with our advanced computer vision solutions.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Control'],
      link: '/ai-computer-vision',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics & Insights',
      description: 'Unlock hidden patterns in your data with our AI-powered analytics and business intelligence solutions.',
      features: ['Data Mining', 'Predictive Modeling', 'Business Intelligence', 'Real-time Dashboards'],
      link: '/ai-analytics',
      color: 'from-purple-600 to-violet-600'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Security Solutions',
      description: 'Protect your digital assets with AI-powered security systems that detect and prevent threats in real-time.',
      features: ['Threat Detection', 'Fraud Prevention', 'Anomaly Detection', 'Security Automation'],
      link: '/ai-cybersecurity',
      color: 'from-red-600 to-rose-600'
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-500" />,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation that reduces costs and increases efficiency.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Automation', 'Smart Scheduling'],
      link: '/ai-automation',
      color: 'from-indigo-600 to-blue-600'
    }
  ];

  const industryApplications = [
    {
      industry: 'Healthcare',
      applications: [
        'AI-powered diagnostics and medical imaging analysis',
        'Predictive analytics for patient outcomes',
        'Drug discovery and development acceleration',
        'Personalized treatment recommendations'
      ],
      icon: '🏥'
    },
    {
      industry: 'Finance',
      applications: [
        'Algorithmic trading and portfolio optimization',
        'Fraud detection and risk assessment',
        'Credit scoring and loan approval automation',
        'Regulatory compliance monitoring'
      ],
      icon: '💰'
    },
    {
      industry: 'Manufacturing',
      applications: [
        'Predictive maintenance and quality control',
        'Supply chain optimization and demand forecasting',
        'Robotic process automation',
        'Smart factory implementation'
      ],
      icon: '🏭'
    },
    {
      industry: 'Retail',
      applications: [
        'Personalized customer recommendations',
        'Inventory optimization and demand forecasting',
        'Price optimization and dynamic pricing',
        'Customer service chatbots and virtual assistants'
      ],
      icon: '🛍️'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Deep Learning',
      description: 'Neural networks that mimic human brain function for complex problem-solving',
      benefits: ['Image Recognition', 'Speech Processing', 'Natural Language Understanding', 'Predictive Modeling']
    },
    {
      title: 'Reinforcement Learning',
      description: 'AI systems that learn through trial and error to optimize decision-making',
      benefits: ['Game Playing', 'Robotics Control', 'Resource Optimization', 'Strategy Development']
    },
    {
      title: 'Transfer Learning',
      description: 'Leverage pre-trained models to accelerate development and improve performance',
      benefits: ['Faster Development', 'Better Accuracy', 'Reduced Data Requirements', 'Cost Efficiency']
    },
    {
      title: 'Edge AI',
      description: 'Deploy AI models directly on devices for real-time processing and reduced latency',
      benefits: ['Real-time Processing', 'Privacy Protection', 'Reduced Bandwidth', 'Offline Capability']
    }
  ];

  const implementationProcess = [
    {
      phase: 'Discovery & Assessment',
      description: 'Analyze your business needs and current AI readiness',
      duration: '1-2 weeks',
      deliverables: ['AI Strategy Document', 'Technical Assessment', 'ROI Analysis']
    },
    {
      phase: 'Data Preparation',
      description: 'Clean, structure, and prepare your data for AI model training',
      duration: '2-4 weeks',
      deliverables: ['Data Pipeline', 'Quality Reports', 'Feature Engineering']
    },
    {
      phase: 'Model Development',
      description: 'Build, train, and optimize AI models for your specific use case',
      duration: '4-8 weeks',
      deliverables: ['Trained Models', 'Performance Metrics', 'Validation Results']
    },
    {
      phase: 'Deployment & Integration',
      description: 'Deploy models to production and integrate with existing systems',
      duration: '2-4 weeks',
      deliverables: ['Production System', 'API Integration', 'Monitoring Dashboard']
    },
    {
      phase: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and ongoing support',
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Model Updates', '24/7 Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation. Transform your business with artificial intelligence." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI automation, artificial intelligence, AI solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations, enhance decision-making, and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive artificial intelligence services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 group-hover:scale-105`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced AI technologies and methodologies we leverage for your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how AI is transforming different industries and sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryApplications.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{industry.icon}</span>
                  <h3 className="text-2xl font-semibold text-white">{industry.industry}</h3>
                </div>
                <ul className="space-y-3">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our proven methodology for successful AI implementation
            </p>
          </div>
          
          <div className="space-y-8">
            {implementationProcess.map((phase, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white mb-2 md:mb-0">{phase.phase}</h3>
                    <span className="text-blue-400 font-semibold">{phase.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{phase.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <span key={deliverableIndex} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Embrace AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how artificial intelligence can revolutionize your business and give you a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Project
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Meet Our AI Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;