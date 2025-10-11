import React from 'react';
import { CheckCircle, Brain, Zap, Eye, MessageSquare, BarChart3, Shield, Cog, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      features: ['Predictive Modeling', 'Pattern Recognition', 'Automated Learning', 'Real-time Adaptation'],
      applications: ['Fraud Detection', 'Customer Segmentation', 'Demand Forecasting', 'Quality Control']
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'Natural Language Processing',
      description: 'Transform text and speech into actionable insights and automated responses.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      applications: ['Customer Support', 'Content Moderation', 'Document Processing', 'Voice Assistants']
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
      applications: ['Quality Inspection', 'Security Monitoring', 'Medical Imaging', 'Autonomous Vehicles']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions.',
      features: ['Trend Analysis', 'Risk Assessment', 'Performance Prediction', 'Scenario Planning'],
      applications: ['Sales Forecasting', 'Market Analysis', 'Risk Management', 'Resource Planning']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation that reduces manual work.',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Decision Automation'],
      applications: ['Invoice Processing', 'Customer Onboarding', 'Inventory Management', 'Report Generation']
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'AI Security',
      description: 'Protect your systems with AI-powered security solutions and threat detection.',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      applications: ['Network Security', 'Data Protection', 'Access Control', 'Compliance Monitoring']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, treatment optimization, and patient care automation.',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Fraud detection, algorithmic trading, and personalized financial services.',
      icon: '💰'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: '🏭'
    },
    {
      name: 'Retail',
      description: 'Personalized recommendations, inventory management, and customer analytics.',
      icon: '🛍️'
    },
    {
      name: 'Transportation',
      description: 'Route optimization, autonomous vehicles, and traffic management.',
      icon: '🚗'
    },
    {
      name: 'Education',
      description: 'Personalized learning, automated grading, and educational content generation.',
      icon: '🎓'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'AI Strategy & Assessment',
      description: 'We analyze your business processes and identify AI opportunities for maximum impact.'
    },
    {
      step: '02',
      title: 'Data Preparation & Analysis',
      description: 'We clean, structure, and prepare your data for AI model training and deployment.'
    },
    {
      step: '03',
      title: 'Model Development & Training',
      description: 'Our experts develop and train custom AI models tailored to your specific needs.'
    },
    {
      step: '04',
      title: 'Integration & Deployment',
      description: 'We seamlessly integrate AI solutions into your existing systems and workflows.'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization ensure your AI solutions perform at peak efficiency.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, NLP, computer vision, and predictive analytics from Zion Tech Group." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance decision-making, and drive innovation across every aspect of your organization.
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

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A systematic approach to delivering AI solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Partner with us to unlock the full potential of artificial intelligence for your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
                  <p className="text-white/80 text-sm">Tailored AI solutions designed specifically for your business needs and challenges.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                  <p className="text-white/80 text-sm">Robust security measures and compliance standards to protect your data and systems.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-white/80 text-sm">Track record of delivering measurable business value and ROI through AI implementation.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-white/80 text-sm">Experienced AI engineers and data scientists with deep expertise in cutting-edge technologies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIServicesPage;