import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Eye, MessageCircle, BarChart, Shield, Users, Clock, DollarSign, Star, Cog, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation Pro',
      description: 'Advanced AI-powered content creation with SEO optimization, brand voice customization, and multi-language support.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content scheduling', 'Plagiarism detection', 'Content analytics'],
      pricing: '$299/month',
      popular: true,
      category: 'Content',
      link: '/ai-content-generation-pro'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Computer Vision Solutions',
      description: 'Image recognition, object detection, and visual analysis solutions for various industries.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Quality inspection', 'Visual search', 'Real-time processing'],
      pricing: '$499/month',
      popular: false,
      category: 'Vision',
      link: '/ai-computer-vision'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: 'Conversational AI Platform',
      description: 'Intelligent chatbots and virtual assistants for customer service and support with advanced NLP capabilities.',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'Intent recognition', 'Integration APIs', 'Voice synthesis'],
      pricing: '$399/month',
      popular: true,
      category: 'Conversation',
      link: '/ai-conversational-ai'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-500" />,
      title: 'Predictive Analytics Engine',
      description: 'Machine learning models for forecasting, trend analysis, and business intelligence with real-time insights.',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Demand forecasting', 'Performance optimization', 'Custom dashboards'],
      pricing: '$599/month',
      popular: false,
      category: 'Analytics',
      link: '/ai-predictive-analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Solutions',
      description: 'Intelligent threat detection and cybersecurity solutions powered by advanced AI algorithms.',
      features: ['Threat detection', 'Anomaly detection', 'Fraud prevention', 'Security monitoring', 'Incident response', 'Compliance reporting'],
      pricing: '$799/month',
      popular: false,
      category: 'Security',
      link: '/ai-cybersecurity'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'AI for HR & Recruitment',
      description: 'Automated resume screening, candidate matching, and HR process optimization with bias detection.',
      features: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Bias detection', 'Performance analysis', 'Skills assessment'],
      pricing: '$349/month',
      popular: false,
      category: 'HR',
      link: '/ai-hr-recruitment'
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      title: 'AI Process Automation',
      description: 'Intelligent automation of repetitive tasks and business processes with machine learning optimization.',
      features: ['Workflow automation', 'Task scheduling', 'Integration APIs', 'Performance monitoring', 'Custom triggers', 'Error handling'],
      pricing: '$449/month',
      popular: true,
      category: 'Automation',
      link: '/ai-automation'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Language Translation',
      description: 'Advanced neural machine translation with context understanding and cultural adaptation.',
      features: ['100+ languages', 'Context understanding', 'Cultural adaptation', 'Real-time translation', 'Document processing', 'Voice translation'],
      pricing: '$199/month',
      popular: false,
      category: 'Language',
      link: '/ai-translation'
    }
  ];

  const aiCapabilities = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business needs and data patterns with continuous learning.'
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-green-500" />,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities across multiple languages.'
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Image and video analysis, object recognition, and visual intelligence solutions for various applications.'
    },
    {
      icon: <BarChart className="w-12 h-12 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to help you make informed business decisions with high accuracy.'
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and business processes with self-optimization capabilities.'
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: 'AI Ethics & Governance',
      description: 'Responsible AI implementation with bias detection, fairness monitoring, and ethical guidelines compliance.'
    }
  ];

  const stats = [
    { number: '200+', label: 'AI Models Deployed' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '24/7', label: 'AI Monitoring' }
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
              AI Services & Solutions
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
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* AI Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI expertise across all major domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive AI service packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-gray-400 text-sm">per month</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
                  <BarChart className="w-8 h-8 text-white" />
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
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
      </section>
    </div>
  );
};

export default AIServicesPage;
