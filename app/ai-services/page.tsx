import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {;
'use client';
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, TrendingUp,
  Cpu
} from 'lucide-react';
import { Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, FileText, Users, Target, Settings, CheckCircle, ArrowRight, Clock, TrendingUp, Workflow } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const aiServices = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <MessageCircle className="w-5h-5ml-2" />,
      title: 'AI Chatbot & Conversational AI',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      icon: <Eye className="w-5h-5ml-2" />,
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced image analysis and recognition capabilities for various industries.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Medical imaging'],
      benefits: ['90% accuracy improvement', '70% faster processing', '24/7 monitoring'],
      link: '/computer-vision',
      category: 'vision'
    },
    {
      icon: <Mic className="w-5h-5ml-2" />,
      title: 'AI Voice & Speech Processing',
      description: 'Convert speech to text, analyze sentiment, and create voice assistants.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Voice synthesis', 'Sentiment analysis', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Custom voice models'],
      link: '/ai-voice-assistant',
      category: 'voice'
    },
    {
      icon: <FileText className="w-5h-5ml-2" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions'],
      benefits: ['80% time savings', 'Consistent quality', 'SEO optimized'],
      link: '/ai-content-generator',
      category: 'content'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and resolution.',
      price: 'Starting at $1,799/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      benefits: ['75% faster resolution', '90% customer satisfaction', '24/7 availability'],
      link: '/ai-customer-service',
      category: 'customer'
    },
    {
      icon: <Heart className="w-5h-5ml-2" />,
      title: 'AI Healthcare Solutions',
      description: 'Medical diagnosis assistance, drug discovery, and patient monitoring systems.',
      price: 'Starting at $4,999/month',
      features: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Diagnostic assistance'],
      benefits: ['95% diagnostic accuracy', '30% faster diagnosis', 'FDA compliant'],
      link: '/ai-healthcare',
      category: 'healthcare'
    },
    {
      icon: <DollarSign className="w-5h-5ml-2" />,
      title: 'AI Financial Services',
      description: 'Fraud detection, algorithmic trading, and risk assessment solutions.',
      price: 'Starting at $3,499/month',
      features: ['Fraud detection', 'Algorithmic trading', 'Risk assessment', 'Credit scoring'],
      benefits: ['99.5% fraud detection', '25% risk reduction', 'Real-time monitoring'],
      link: '/ai-financial',
      category: 'finance'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'AI Marketing Automation',
      description: 'Personalized marketing campaigns and customer segmentation using AI.',
      price: 'Starting at $2,199/month',
      features: ['Customer segmentation', 'Personalized campaigns', 'A/B testing', 'ROI optimization'],
      benefits: ['40% higher conversion', '60% cost reduction', 'Real-time optimization'],
      link: '/ai-marketing',
      category: 'marketing'
    },
    {
      icon: <Settings className="w-5h-5ml-2" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and optimize business processes with AI.',
      price: 'Starting at $1,299/month',
      features: ['Workflow automation', 'Document processing', 'Data entry automation', 'Process optimization'],
      benefits: ['70% time savings', '90% accuracy improvement', 'Cost reduction'],
      link: '/ai-automation',
      category: 'automation'
    },
    {
      icon: <Cpu className="w-5h-5ml-2" />,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business requirements.',
      price: 'Custom pricing',
      features: ['Custom ML models', 'API development', 'Integration services', 'Ongoing support'],
      benefits: ['100% tailored solution', 'Competitive advantage', 'Scalable architecture'],
      link: '/custom-ai-development',
      category: 'custom'
    }
  ];
  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5h-5ml-2" /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-5h-5ml-2" /> },
    { id: 'conversational', name: 'Conversational', icon: <MessageCircle className="w-5h-5ml-2" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5h-5ml-2" /> },
    { id: 'vision', name: 'Computer Vision', icon: <Eye className="w-5h-5ml-2" /> },
    { id: 'voice', name: 'Voice AI', icon: <Mic className="w-5h-5ml-2" /> },
    { id: 'content', name: 'Content', icon: <FileText className="w-5h-5ml-2" /> },
    { id: 'customer', name: 'Customer Service', icon: <Users className="w-5h-5ml-2" /> },
    { id: 'automation', name: 'Automation', icon: <Workflow className="w-5h-5ml-2" /> }
  ];
  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-5h-5ml-2" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-5h-5ml-2" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-5h-5ml-2" /> },
    { number: '150+', label: 'AI Experts', icon: <Users className="w-5h-5ml-2" /> }
  ];
  const filteredServices = activeTab === 'overview' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta const name = "description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." /  />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services"  />
        <script type="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Advanced artificial intelligence solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "USD",
              "availability": "https: //schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5h-5ml-2" />
              AI <span className="w-5h-5ml-2" />Services</span>
            </h1>
            <p className="w-5h-5ml-2">Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link
          to="/contact"
          className="bg-gradient-to-rfrom-blue-600to-purple-600text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-centergap-2"
        >
          Get Started 
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <Link to="/about" className="borderborder-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-all duration-300" />
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <Brain className="w-5h-5ml-2" />
              <span />Advanced AI Solutions</span>
            </div>
=======
    
        <>
      <title>AiServices - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiServices</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiservices services coming soon.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-48fd
            
            <h1 className="w-5h-5ml-2" />
              Transform Your Business with{' '}
              <span className="w-5h-5ml-2" />AI Technology
              </span>
            </h1>
            
            <p className="w-5h-5ml-2">Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>
            
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link to="/contact" className="groupbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Get AI Consultation</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Link to="/demo" className="groupborder-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <span />View AI Demo</span>
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
            </div>
        </div>
      </section>

<<<<<<< HEAD
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, natural language processing, computer vision, and automation. Expert AI solutions for enterprises." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, business intelligence, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" /  />
        <meta property="og:description" content="Advanced AI solutions to transform your business operations and drive innovation." /  />
        <meta property="og:type" content="website" /  />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" /  />
      </Helmet>

      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                AI Services
                <span className="w-5h-5ml-2" />& Solutions
                </span>
              </h1>
              <p className="{`text-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning 
                to natural language processing, we deliver AI that drives real business value.
              </p>
              <div className="{`flex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        >
          Get AI Consultation
                  
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                  Call +1 302 464 0950
                </a>
              </div>
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-centergroup" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <stat.icon className="w-8 h-8text-cyan-400"  />
                  </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}</div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}</div>
              ))}
            </div>
        </div>
      </section>

              </p>
            </div>

            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {services.map((service, index) => (
                <div 
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8 h-8text-white"  />
                  </div>
                  
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  
                  <p className="w-5h-5ml-2">{service.description}
                  </p>

                  <ul className="w-5h-5ml-2" />
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5h-5ml-2" />{service.price}</span>
                    <Link
          to="{service.link}"
          className="text-cyan-400hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flex items-center"
        >
          Learn More 
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
        {/* Stats Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <stat.icon className="h-8w-8text-white"  />
                  </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}</div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Category Filter */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {categories.map((category) => (
                <button
                  key="{category}"
                  onClick="{()" =  />setSelectedCategory(category)}
                  className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </section>

        {/* Services Grid */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {filteredServices.map((service, index) => (
                <div
                  key="{service.id}"
                  className="{`group" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`} />
                  {service.popular && (
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5h-5ml-2" />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="{`inline-flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`} />
                      <service.icon className="h-8w-8text-white"  />
                    </div>
                    <h3 className="w-5h-5ml-2" />{service.title}</h3>
                    <p className="w-5h-5ml-2">{service.description}</p>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key="{i}"
                            className="{`h-4" w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                           />
                        ))}
                      </div>
                      <span className="w-5h-5ml-2" />({service.reviews} reviews)</span>
                    </div>

                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{service.price}</div>
                    <span className="w-5h-5ml-2" />Monthly subscription</span>
                  </div>

                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">+{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <Link
          to="{`/${service.id}`}"
          className="w-fullinline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105"
        >
          View Details
                      
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                    <Link to="/contact" className="w-fullinline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-whitetransition-all duration-300">Get Quote
                    </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* AI Process Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5ml-2" />
                Our <span className="w-5h-5ml-2" />AI Process</span>
              </h2>
              <p className="w-5h-5ml-2">A proven methodology for successful AI implementation
              </p>
            </div>

            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your business processes and identify AI opportunities.',
                  icon: <Target className="w-5h-5ml-2" />
                },
                {
                  step: '02',
                  title: 'AI Strategy & Planning',
                  description: 'Develop a comprehensive AI roadmap tailored to your goals.',
                  icon: <Settings className="w-5h-5ml-2" />
                },
                {
                  step: '03',
                  title: 'Model Development',
                  description: 'Build and train custom AI models for your specific use cases.',
                  icon: <Brain className="w-5h-5ml-2" />
                },
                {
                  step: '04',
                  title: 'Deployment & Optimization',
                  description: 'Deploy AI solutions and continuously optimize performance.',
                  icon: <Zap className="w-5h-5ml-2" />
                }
              ].map((step, index) => (
                <div key={index} className="text-centergroup" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {step.icon}
                  </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{step.step}</div>
                  <h3 className="w-5h-5ml-2" />{step.title}</h3>
                  <p className="w-5h-5ml-2">{step.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Harness the Power of AI?
                </h2>
                <p className="w-5h-5ml-2">Let's discuss how our AI solutions can transform your business and give you a competitive edge.
                </p>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                    Start Your AI Journey
                  </Link>
                  <Link to="/pricing" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                    View AI Pricing
                  </Link>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Transform Your Business with AI?
              </h2>
              <p className="w-5h-5ml-2">Let's discuss how our AI solutions can automate your processes, enhance customer experiences, and drive growth.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105"
        >
          Learn More 
          <ArrowRight className="w-5h-5ml-2" />
        </Link>Start Your AI Journey
                </Link>
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />Ready to Transform Your Business with AI?
            </h2>
            <p className="w-5h-5ml-2">Let our AI experts help you identify opportunities, design solutions, and implement AI that drives real business value.
            </p>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        >
          Start Your AI Journey
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <h2 className="w-5h-5ml-2" />
            Ready to Harness the Power of AI?
          </h2>
          <p className="w-5h-5ml-2">Let our AI experts help you choose the perfect solution for your business needs.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-blue-600to-purple-600text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2"
        >
          Start Your AI Journey 
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
            <Link to="/about" className="borderborder-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-all duration-300" />
              Meet Our Team
            </Link>
          </div>
      </section>
    </div>
  );
};

export default AiServicesPage;
=======
      </>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-48fd
}