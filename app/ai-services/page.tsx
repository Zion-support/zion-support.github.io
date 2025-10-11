import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Cog } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates', 'Plagiarism detection', 'Content scheduling'],
      pricing: '$89/month',
      marketPrice: '$149/month',
      link: '/ai-content-generator',
      popular: true,
      users: '3,200+',
      rating: '4.9'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Enterprise',
      description: 'Create intelligent chatbots for customer support, lead generation, and sales automation with advanced NLP.',
      features: ['No-code builder', 'Multi-channel deployment', 'Analytics dashboard', 'Custom integrations', 'Voice support', 'Multi-language'],
      pricing: '$149/month',
      marketPrice: '$299/month',
      link: '/ai-chatbot-builder',
      popular: true,
      users: '2,800+',
      rating: '4.8'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Platform',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom reports', 'API integration', 'Machine learning', 'Data visualization'],
      pricing: '$199/month',
      marketPrice: '$399/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      users: '2,100+',
      rating: '4.9'
    },
    {
      icon: <Eye className="w-8 h-8 text-cyan-500" />,
      title: 'Computer Vision Solutions',
      description: 'Extract meaningful information from images and videos for business automation and quality control.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Video analysis', 'Quality inspection', 'Security monitoring'],
      pricing: '$249/month',
      marketPrice: '$499/month',
      link: '/computer-vision',
      popular: false,
      users: '1,500+',
      rating: '4.7'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent process automation and RPA integration.',
      features: ['Workflow automation', 'Task scheduling', 'Integration APIs', 'Performance monitoring', 'Document processing', 'Decision automation'],
      pricing: '$179/month',
      marketPrice: '$349/month',
      link: '/ai-automation',
      popular: true,
      users: '2,400+',
      rating: '4.8'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Suite',
      description: 'Protect your systems with AI-powered security solutions, threat detection, and anomaly monitoring.',
      features: ['Threat detection', 'Anomaly detection', 'Security monitoring', 'Incident response', 'Fraud prevention', 'Compliance monitoring'],
      pricing: '$299/month',
      marketPrice: '$599/month',
      link: '/ai-security',
      popular: false,
      users: '1,800+',
      rating: '4.9'
    },
    {
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      title: 'Machine Learning Platform',
      description: 'Build, train, and deploy custom machine learning models for your specific business needs.',
      features: ['Model development', 'Data preprocessing', 'Model training', 'Deployment tools', 'A/B testing', 'Model monitoring'],
      pricing: '$399/month',
      marketPrice: '$799/month',
      link: '/machine-learning',
      popular: true,
      users: '1,200+',
      rating: '4.8'
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: 'AI Voice Solutions',
      description: 'Build custom voice assistants and speech recognition systems for your business applications.',
      features: ['Voice recognition', 'Text-to-speech', 'Multi-language', 'Custom commands', 'Voice analytics', 'Integration APIs'],
      pricing: '$129/month',
      marketPrice: '$249/month',
      link: '/ai-voice-assistant',
      popular: false,
      users: '1,600+',
      rating: '4.6'
    }
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60% through intelligent automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Availability',
      description: 'AI services work around the clock without breaks or downtime',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalability',
      description: 'Easily scale your AI solutions as your business grows',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Accuracy',
      description: 'Achieve 95%+ accuracy in AI-powered tasks and predictions',
      icon: <Star className="w-6 h-6 text-yellow-500" />
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
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
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

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      {service.marketPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">{service.marketPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">{service.users} active users</div>
                  {service.marketPrice && (
                    <div className="text-xs text-green-400 font-semibold">
                      Save ${parseInt(service.marketPrice.replace('$', '').replace('/month', '')) - parseInt(service.pricing.replace('$', '').replace('/month', ''))}/month
                    </div>
                  )}
                </div>

                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
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
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
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