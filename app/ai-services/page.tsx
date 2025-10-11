import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Cog, Cpu, Database, Users, Target, TrendingUp, Lock, Smartphone, Cloud, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation with brand voice customization.',
      features: ['Multi-language support (50+ languages)', 'SEO optimization with real-time suggestions', 'Brand voice training and customization', 'Content templates library (1000+ templates)', 'Plagiarism detection and originality scoring', 'Content performance analytics'],
      pricing: 'Starting at $49/month',
      link: '/ai-content-generator',
      popular: true,
      category: 'Content & Marketing',
      users: '15,000+',
      rating: '4.9'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI for customer support, lead generation, and sales automation with advanced NLP capabilities.',
      features: ['No-code visual builder', 'Multi-channel deployment (Web, Mobile, WhatsApp, Slack)', 'Advanced NLP with sentiment analysis', 'Custom knowledge base integration', 'Real-time analytics dashboard', 'Human handoff capabilities'],
      pricing: 'Starting at $99/month',
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Customer Experience',
      users: '8,500+',
      rating: '4.8'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
      features: ['Real-time data processing', 'Predictive analytics and forecasting', 'Custom dashboard creation', 'Automated report generation', 'Anomaly detection and alerts', 'API integration with 100+ platforms'],
      pricing: 'Starting at $149/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Data & Analytics',
      users: '12,000+',
      rating: '4.9'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'AI Process Automation Suite',
      description: 'Comprehensive workflow automation with AI decision-making, document processing, and intelligent task routing.',
      features: ['Visual workflow designer', 'AI decision trees and logic', 'Document processing and OCR', 'Email and communication automation', 'Integration with 500+ apps', 'Performance monitoring and optimization'],
      pricing: 'Starting at $199/month',
      link: '/ai-automation',
      popular: false,
      category: 'Automation',
      users: '6,200+',
      rating: '4.7'
    },
    {
      icon: <Eye className="w-8 h-8 text-red-500" />,
      title: 'AI Computer Vision Platform',
      description: 'Advanced image and video analysis for quality control, security monitoring, and visual content understanding.',
      features: ['Object detection and recognition', 'Facial recognition and analysis', 'Quality control automation', 'Real-time video processing', 'Custom model training', 'Edge deployment capabilities'],
      pricing: 'Starting at $299/month',
      link: '/ai-computer-vision',
      popular: false,
      category: 'Computer Vision',
      users: '3,800+',
      rating: '4.6'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'AI Cybersecurity Guardian',
      description: 'AI-powered security solutions with threat detection, anomaly monitoring, and automated incident response.',
      features: ['Real-time threat detection', 'Behavioral analysis and anomaly detection', 'Automated incident response', 'Security compliance monitoring', 'Threat intelligence integration', '24/7 security monitoring'],
      pricing: 'Starting at $399/month',
      link: '/ai-cybersecurity',
      popular: true,
      category: 'Security',
      users: '4,500+',
      rating: '4.8'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Customer Intelligence',
      description: 'Deep customer insights with AI-powered segmentation, churn prediction, and personalized engagement strategies.',
      features: ['Customer segmentation and profiling', 'Churn prediction and prevention', 'Personalized recommendation engine', 'Sentiment analysis across channels', 'Customer lifetime value prediction', 'Automated marketing campaigns'],
      pricing: 'Starting at $179/month',
      link: '/ai-customer-intelligence',
      popular: false,
      category: 'Customer Intelligence',
      users: '7,300+',
      rating: '4.7'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      title: 'AI Sales Optimization',
      description: 'Intelligent sales tools with lead scoring, opportunity analysis, and automated sales processes.',
      features: ['AI-powered lead scoring', 'Sales opportunity analysis', 'Automated follow-up sequences', 'Sales performance analytics', 'CRM integration and automation', 'Predictive sales forecasting'],
      pricing: 'Starting at $129/month',
      link: '/ai-sales-optimization',
      popular: false,
      category: 'Sales & Marketing',
      users: '5,600+',
      rating: '4.6'
    },
    {
      icon: <Database className="w-8 h-8 text-teal-500" />,
      title: 'AI Data Processing Engine',
      description: 'Intelligent data processing, cleaning, and transformation with automated quality assurance and validation.',
      features: ['Automated data cleaning and validation', 'Data transformation and enrichment', 'Quality assurance and monitoring', 'Real-time data processing', 'Custom data pipeline creation', 'Integration with major databases'],
      pricing: 'Starting at $89/month',
      link: '/ai-data-processing',
      popular: false,
      category: 'Data Processing',
      users: '9,100+',
      rating: '4.5'
    }
  ];

  const industries = [
    {
      name: 'Healthcare & Life Sciences',
      description: 'AI-powered diagnostics, drug discovery, patient care optimization, and medical imaging analysis.',
      icon: '🏥',
      applications: ['Medical diagnosis', 'Drug discovery', 'Patient monitoring', 'Medical imaging']
    },
    {
      name: 'Financial Services',
      description: 'Fraud detection, algorithmic trading, risk assessment, and personalized financial advisory services.',
      icon: '💰',
      applications: ['Fraud detection', 'Algorithmic trading', 'Risk management', 'Personalized banking']
    },
    {
      name: 'Manufacturing & Industry',
      description: 'Predictive maintenance, quality control, supply chain optimization, and smart manufacturing.',
      icon: '🏭',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Smart manufacturing']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Personalized recommendations, inventory management, customer analytics, and demand forecasting.',
      icon: '🛍️',
      applications: ['Personalized recommendations', 'Inventory optimization', 'Customer analytics', 'Demand forecasting']
    },
    {
      name: 'Transportation & Logistics',
      description: 'Route optimization, autonomous vehicles, traffic management, and fleet optimization.',
      icon: '🚗',
      applications: ['Route optimization', 'Autonomous vehicles', 'Traffic management', 'Fleet optimization']
    },
    {
      name: 'Education & Training',
      description: 'Personalized learning, automated grading, educational content generation, and student analytics.',
      icon: '🎓',
      applications: ['Personalized learning', 'Automated grading', 'Content generation', 'Student analytics']
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 60% through intelligent automation and process optimization',
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      stat: '60%'
    },
    {
      title: '24/7 Availability',
      description: 'AI services work around the clock without breaks, holidays, or downtime',
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      stat: '99.9%'
    },
    {
      title: 'Scalability',
      description: 'Easily scale your AI solutions as your business grows without proportional cost increases',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      stat: '10x'
    },
    {
      title: 'Accuracy',
      description: 'Achieve 95%+ accuracy in AI-powered tasks, predictions, and decision-making processes',
      icon: <Target className="w-6 h-6 text-yellow-500" />,
      stat: '95%+'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'AI Strategy & Assessment',
      description: 'We analyze your business processes, data landscape, and identify AI opportunities for maximum impact and ROI.',
      icon: <Brain className="w-8 h-8 text-blue-500" />
    },
    {
      step: '02',
      title: 'Data Preparation & Analysis',
      description: 'We clean, structure, and prepare your data for AI model training, ensuring quality and compliance.',
      icon: <Database className="w-8 h-8 text-green-500" />
    },
    {
      step: '03',
      title: 'Model Development & Training',
      description: 'Our AI experts develop and train custom models tailored to your specific business requirements.',
      icon: <Cog className="w-8 h-8 text-purple-500" />
    },
    {
      step: '04',
      title: 'Integration & Deployment',
      description: 'We seamlessly integrate AI solutions into your existing systems with minimal disruption.',
      icon: <Zap className="w-8 h-8 text-orange-500" />
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization ensure your AI solutions perform at peak efficiency.',
      icon: <BarChart3 className="w-8 h-8 text-red-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'CTO, MedTech Solutions',
      content: 'The AI analytics platform has revolutionized our patient data analysis. We\'ve seen a 40% improvement in diagnostic accuracy and 60% reduction in analysis time.',
      rating: 5,
      company: 'MedTech Solutions'
    },
    {
      name: 'James Rodriguez',
      role: 'VP of Operations, RetailMax',
      content: 'AI-powered inventory management has transformed our supply chain. We\'ve reduced stockouts by 80% and increased profit margins by 25%.',
      rating: 5,
      company: 'RetailMax'
    },
    {
      name: 'Lisa Chen',
      role: 'CEO, FinanceFlow',
      content: 'The AI fraud detection system has saved us millions in potential losses. The accuracy and speed of threat detection is remarkable.',
      rating: 5,
      company: 'FinanceFlow'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, natural language processing, computer vision, and predictive analytics. Expert AI solutions for modern enterprises." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI automation, enterprise AI solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for modern businesses. Machine learning, automation, and intelligent systems." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance decision-making, and drive innovation across every aspect of your organization. 
              Our comprehensive AI solutions deliver measurable results and competitive advantages.
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
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of artificial intelligence with our proven solutions and expert team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address every aspect of your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="mb-2">
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{service.users} active users</div>
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
          </div>

          {/* Industries Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to delivering AI solutions that drive real business value and measurable ROI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real results from businesses that have transformed with our AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-blue-300">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that have already transformed their operations with our AI solutions. 
                Let's discuss how we can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Consultation
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