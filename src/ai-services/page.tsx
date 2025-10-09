'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Atom } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$2,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      benefits: ['40% better predictions', '60% faster insights', 'ROI tracking', 'Scalable models'],
      color: 'text-purple-400',
      category: 'Machine Learning',
      marketPrice: '$4,000/month',
      savings: '$1,500/month',
      demoUrl: 'https://demo.ziontechgroup.com/ml-solutions',
      caseStudy: 'https://ziontechgroup.com/case-studies/ml-retail',
      supportEmail: 'ml@ziontechgroup.com',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Apache Spark']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,800/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      benefits: ['95% accuracy', 'Multi-language support', 'Real-time processing', 'Custom training'],
      color: 'text-blue-400',
      category: 'NLP',
      marketPrice: '$3,000/month',
      savings: '$1,200/month',
      demoUrl: 'https://demo.ziontechgroup.com/nlp-solutions',
      caseStudy: 'https://ziontechgroup.com/case-studies/nlp-customer-service',
      supportEmail: 'nlp@ziontechgroup.com',
      technologies: ['BERT', 'GPT', 'Transformer', 'spaCy', 'NLTK']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$2,200/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Medical Imaging'],
      benefits: ['99% accuracy', 'Real-time processing', 'Edge deployment', 'Custom models'],
      color: 'text-green-400',
      category: 'Computer Vision',
      marketPrice: '$3,500/month',
      savings: '$1,300/month',
      demoUrl: 'https://demo.ziontechgroup.com/computer-vision',
      caseStudy: 'https://ziontechgroup.com/case-studies/cv-manufacturing',
      supportEmail: 'cv@ziontechgroup.com',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'TensorRT']
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,900/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      benefits: ['80% process reduction', '90% error reduction', '24/7 operation', 'Cost savings'],
      color: 'text-cyan-400',
      category: 'Automation',
      marketPrice: '$3,200/month',
      savings: '$1,300/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-automation',
      caseStudy: 'https://ziontechgroup.com/case-studies/automation-finance',
      supportEmail: 'automation@ziontechgroup.com',
      technologies: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Python', 'RPA']
    },
    {
      title: 'Quantum AI Computing',
      description: 'Next-generation quantum algorithms for complex problem solving',
      icon: Atom,
      price: '$5,000/month',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research & Development', 'Custom Solutions'],
      benefits: ['Exponential speedup', 'Complex optimization', 'Future-proof technology', 'Competitive advantage'],
      color: 'text-yellow-400',
      category: 'Quantum Computing',
      marketPrice: '$8,000/month',
      savings: '$3,000/month',
      demoUrl: 'https://demo.ziontechgroup.com/quantum-ai',
      caseStudy: 'https://ziontechgroup.com/case-studies/quantum-optimization',
      supportEmail: 'quantum@ziontechgroup.com',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Q#', 'Quantum Annealing']
    },
    {
      title: 'AI Cybersecurity',
      description: 'AI-powered threat detection and prevention systems',
      icon: Shield,
      price: '$2,800/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Behavioral Analysis', 'Incident Response', 'Risk Assessment', 'Compliance Monitoring'],
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response', 'Reduced false positives'],
      color: 'text-red-400',
      category: 'Cybersecurity',
      marketPrice: '$4,500/month',
      savings: '$1,700/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-cybersecurity',
      caseStudy: 'https://ziontechgroup.com/case-studies/ai-security-banking',
      supportEmail: 'security@ziontechgroup.com',
      technologies: ['TensorFlow', 'Keras', 'Scikit-learn', 'ELK Stack', 'Splunk']
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analytics with AI-powered insights and predictions',
      icon: BarChart,
      price: '$2,100/month',
      features: ['Predictive Analytics', 'Data Mining', 'Statistical Analysis', 'Business Intelligence', 'Real-time Dashboards', 'Custom Reports'],
      benefits: ['50% faster insights', 'Better decision making', 'Automated reporting', 'Scalable analytics'],
      color: 'text-indigo-400',
      category: 'Analytics',
      marketPrice: '$3,500/month',
      savings: '$1,400/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-analytics',
      caseStudy: 'https://ziontechgroup.com/case-studies/ai-analytics-ecommerce',
      supportEmail: 'analytics@ziontechgroup.com',
      technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly']
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent customer support with AI-powered chatbots and automation',
      icon: Users,
      price: '$1,500/month',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', 'Multi-language Support', 'Human Handoff'],
      benefits: ['90% query resolution', '24/7 availability', 'Cost reduction', 'Improved satisfaction'],
      color: 'text-pink-400',
      category: 'Customer Service',
      marketPrice: '$2,500/month',
      savings: '$1,000/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-support',
      caseStudy: 'https://ziontechgroup.com/case-studies/ai-support-saas',
      supportEmail: 'support@ziontechgroup.com',
      technologies: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'NLP', 'Sentiment Analysis']
    },
    {
      title: 'AI Content Generation',
      description: 'AI-powered content creation for marketing, blogs, and social media',
      icon: FileText,
      price: '$1,200/month',
      features: ['Blog Writing', 'Social Media Posts', 'Email Campaigns', 'Ad Copy', 'SEO Optimization', 'Brand Voice Consistency'],
      benefits: ['10x content output', 'Consistent quality', 'SEO optimized', 'Time savings'],
      color: 'text-orange-400',
      category: 'Content Creation',
      marketPrice: '$2,000/month',
      savings: '$800/month',
      demoUrl: 'https://demo.ziontechgroup.com/ai-content',
      caseStudy: 'https://ziontechgroup.com/case-studies/ai-content-marketing',
      supportEmail: 'content@ziontechgroup.com',
      technologies: ['GPT-4', 'Claude', 'BERT', 'T5', 'Content Optimization']
    }
  ];

  const categories = [
    { name: 'All', count: aiServices.length },
    { name: 'Machine Learning', count: aiServices.filter(s => s.category === 'Machine Learning').length },
    { name: 'NLP', count: aiServices.filter(s => s.category === 'NLP').length },
    { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { name: 'Quantum Computing', count: aiServices.filter(s => s.category === 'Quantum Computing').length },
    { name: 'Cybersecurity', count: aiServices.filter(s => s.category === 'Cybersecurity').length },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Content Creation', count: aiServices.filter(s => s.category === 'Content Creation').length }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all AI solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all AI services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class AI engineers and data scientists with proven track records'
    }
  ];

  const caseStudies = [
    {
      title: 'Retail Chain Optimization',
      description: 'Implemented ML solutions for inventory management, resulting in 40% reduction in stockouts and 25% cost savings.',
      company: 'Fortune 500 Retailer',
      results: ['40% reduction in stockouts', '25% cost savings', '$2M annual savings'],
      link: '/case-studies/retail-ml'
    },
    {
      title: 'Banking Fraud Detection',
      description: 'Deployed AI cybersecurity system that detected 99.9% of fraudulent transactions in real-time.',
      company: 'Major US Bank',
      results: ['99.9% fraud detection', '60% false positive reduction', '$5M fraud prevention'],
      link: '/case-studies/banking-ai-security'
    },
    {
      title: 'Manufacturing Quality Control',
      description: 'Computer vision system improved product quality by 35% and reduced inspection time by 80%.',
      company: 'Global Manufacturer',
      results: ['35% quality improvement', '80% faster inspection', '50% defect reduction'],
      link: '/case-studies/manufacturing-cv'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Advanced AI services including machine learning, NLP, computer vision, and quantum computing. Transform your business with cutting-edge artificial intelligence solutions."
        keywords={['AI services', 'machine learning', 'NLP', 'computer vision', 'quantum computing', 'AI automation']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Services">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Advanced Artificial Intelligence Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive AI services. From machine learning and NLP to quantum computing, 
              we deliver cutting-edge artificial intelligence solutions that drive real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get AI Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
                <div className="text-sm text-gray-300">AI Service Categories</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$12,000+</div>
                <div className="text-sm text-gray-300">Monthly Savings</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">AI Monitoring</div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="cyber-card px-6 py-3 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-white font-medium">{category.name}</span>
                  <span className="text-cyan-400 ml-2">({category.count})</span>
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className={`text-3xl font-bold neon-text ${service.color}`}>{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">
                      Save {service.savings}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a 
                      href={service.link} 
                      className={`w-full px-4 py-3 text-center block transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900 rounded-lg`}
                    >
                      Learn More
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a 
                        href={service.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-3 py-2 text-sm text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Demo
                      </a>
                      <a 
                        href={service.caseStudy}
                        className="text-center px-3 py-2 text-sm text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Case Study
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{study.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">Results:</div>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={study.link}
                    className="text-cyan-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Read Full Case Study →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our AI services today and transform your business with cutting-edge artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;