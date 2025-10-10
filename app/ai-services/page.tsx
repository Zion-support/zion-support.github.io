'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Settings, Target, Globe, Database, Smartphone, Lock, TrendingUp, Calendar, CheckSquare, FileText, Mail, Phone, MapPin, DollarSign, Award, Rocket, Sparkles, Eye, MessageSquare, Palette, Cpu, Bot, Layers, Workflow } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 1,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to identify opportunities and develop comprehensive AI roadmaps for digital transformation',
      category: 'Consulting',
      icon: Brain,
      features: [
        'AI readiness assessment and gap analysis',
        'Strategic AI roadmap development',
        'Technology stack evaluation and selection',
        'ROI analysis and business case development',
        'Change management and training programs',
        'Vendor evaluation and selection',
        'Implementation planning and timeline',
        'Ongoing strategic guidance and support'
      ],
      price: 'Starting at $5,000/month',
      users: 'Unlimited',
      popular: true,
      marketPrice: '$8,000-15,000/month',
      benefits: ['Align AI with business goals', 'Reduce implementation risks', 'Maximize ROI on AI investments', 'Stay ahead of competition']
    },
    {
      id: 2,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms tailored to your specific business needs and data',
      category: 'ML',
      icon: Cpu,
      features: [
        'Custom ML model development and training',
        'Data preprocessing and feature engineering',
        'Model optimization and hyperparameter tuning',
        'Real-time inference and deployment',
        'Model monitoring and maintenance',
        'A/B testing and performance evaluation',
        'Integration with existing systems',
        'Continuous learning and model updates'
      ],
      price: 'Starting at $15,000/project',
      users: 'Unlimited',
      popular: true,
      marketPrice: '$25,000-100,000/project',
      benefits: ['Solve complex business problems', 'Improve decision making', 'Automate processes', 'Gain competitive advantage']
    },
    {
      id: 3,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding applications',
      category: 'NLP',
      icon: MessageSquare,
      features: [
        'Sentiment analysis and emotion detection',
        'Text classification and categorization',
        'Language translation and localization',
        'Chatbot and conversational AI development',
        'Document processing and information extraction',
        'Content generation and summarization',
        'Voice recognition and speech-to-text',
        'Multi-language support and processing'
      ],
      price: 'Starting at $8,000/project',
      users: 'Unlimited',
      popular: false,
      marketPrice: '$15,000-50,000/project',
      benefits: ['Improve customer experience', 'Automate content processing', 'Enable multilingual support', 'Extract insights from text data']
    },
    {
      id: 4,
      title: 'Computer Vision Solutions',
      description: 'AI-powered visual recognition and image analysis for various business applications',
      category: 'Vision',
      icon: Eye,
      features: [
        'Object detection and recognition',
        'Facial recognition and biometrics',
        'OCR and document scanning',
        'Quality inspection and defect detection',
        'Medical imaging and diagnostics',
        'Autonomous vehicle vision systems',
        'Augmented reality applications',
        'Video analytics and surveillance'
      ],
      price: 'Starting at $12,000/project',
      users: 'Unlimited',
      popular: false,
      marketPrice: '$20,000-80,000/project',
      benefits: ['Automate visual inspections', 'Improve quality control', 'Enable new applications', 'Reduce human error']
    },
    {
      id: 5,
      title: 'AI Automation & RPA',
      description: 'Intelligent process automation that mimics human actions to streamline business operations',
      category: 'Automation',
      icon: Workflow,
      features: [
        'Workflow automation and orchestration',
        'Document processing and data extraction',
        'Email and calendar automation',
        'Invoice processing and approval workflows',
        'Customer onboarding automation',
        'Compliance monitoring and reporting',
        'Integration with 500+ business tools',
        'Exception handling and escalation'
      ],
      price: 'Starting at $3,500/month',
      users: 'Up to 100 users',
      popular: true,
      marketPrice: '$6,000-15,000/month',
      benefits: ['Reduce manual work by 80%', 'Improve process efficiency', 'Eliminate human errors', 'Scale operations cost-effectively']
    },
    {
      id: 6,
      title: 'AI Security & Fraud Detection',
      description: 'Advanced AI security solutions for threat detection, fraud prevention, and risk management',
      category: 'Security',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Fraud pattern recognition and prevention',
        'Behavioral analysis and anomaly detection',
        'Risk assessment and scoring',
        'Security monitoring and alerting',
        'Compliance automation and reporting',
        'Incident response and remediation',
        'Threat intelligence and analysis'
      ],
      price: 'Starting at $4,000/month',
      users: 'Unlimited',
      popular: false,
      marketPrice: '$8,000-25,000/month',
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce false positives', 'Meet compliance requirements', 'Protect business reputation']
    },
    {
      id: 7,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable business insights with advanced AI-powered analytics',
      category: 'Analytics',
      icon: BarChart,
      features: [
        'Predictive analytics and forecasting',
        'Anomaly detection and alerting',
        'Customer segmentation and profiling',
        'Market trend analysis and insights',
        'Real-time dashboard and reporting',
        'Natural language query interface',
        'Automated report generation',
        'Integration with BI tools and platforms'
      ],
      price: 'Starting at $2,800/month',
      users: 'Up to 50 users',
      popular: true,
      marketPrice: '$5,000-15,000/month',
      benefits: ['Make data-driven decisions', 'Identify new opportunities', 'Improve business performance', 'Gain competitive insights']
    },
    {
      id: 8,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure and model deployment on cloud platforms with auto-scaling',
      category: 'Infrastructure',
      icon: Cloud,
      features: [
        'Model deployment and serving',
        'Auto-scaling and load balancing',
        'GPU optimization and management',
        'Data pipeline and ETL processes',
        'Monitoring and logging systems',
        'Cost optimization and management',
        'Security and compliance features',
        'Multi-cloud deployment support'
      ],
      price: 'Starting at $1,500/month',
      users: 'Unlimited',
      popular: false,
      marketPrice: '$3,000-10,000/month',
      benefits: ['Scale AI models efficiently', 'Reduce infrastructure costs', 'Ensure high availability', 'Simplify deployment process']
    },
    {
      id: 9,
      title: 'AI Design Assistant',
      description: 'AI-powered design tools for graphics, UI/UX, and creative content generation',
      category: 'Design',
      icon: Palette,
      features: [
        'Automated design generation and suggestions',
        'Brand consistency and style guides',
        'A/B testing and optimization',
        'Color and layout recommendations',
        'Template customization and creation',
        'Image enhancement and editing',
        'Video and animation generation',
        'Integration with design tools'
      ],
      price: 'Starting at $299/month',
      users: 'Up to 20 users',
      popular: false,
      marketPrice: '$500-1,500/month',
      benefits: ['Accelerate design process', 'Maintain brand consistency', 'Reduce design costs', 'Improve creative output']
    },
    {
      id: 10,
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with chatbots, sentiment analysis, and automated support',
      category: 'Customer Service',
      icon: Users,
      features: [
        'AI-powered chatbot development',
        'Multi-channel customer support',
        'Sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Knowledge base and FAQ automation',
        'Customer satisfaction monitoring',
        'Live agent assistance and handoff',
        'Performance analytics and insights'
      ],
      price: 'Starting at $1,200/month',
      users: 'Up to 100 users',
      popular: true,
      marketPrice: '$2,000-6,000/month',
      benefits: ['Provide 24/7 customer support', 'Reduce support costs by 60%', 'Improve customer satisfaction', 'Scale support operations']
    },
    {
      id: 11,
      title: 'AI Content Generation',
      description: 'AI-powered content creation for marketing, documentation, and creative writing',
      category: 'Content',
      icon: FileText,
      features: [
        'Automated content generation and writing',
        'SEO optimization and keyword integration',
        'Multi-language content creation',
        'Brand voice and tone consistency',
        'Content planning and strategy',
        'Plagiarism detection and checking',
        'Content performance analytics',
        'Integration with CMS and platforms'
      ],
      price: 'Starting at $199/month',
      users: 'Up to 15 users',
      popular: false,
      marketPrice: '$400-1,200/month',
      benefits: ['Scale content production', 'Maintain consistent quality', 'Reduce content costs', 'Improve SEO performance']
    },
    {
      id: 12,
      title: 'AI Training & Education',
      description: 'Comprehensive AI training programs to upskill your team in AI technologies and best practices',
      category: 'Training',
      icon: Award,
      features: [
        'Custom AI training programs',
        'Hands-on workshops and labs',
        'Certification courses and assessments',
        'Ongoing support and mentoring',
        'Team-specific curriculum development',
        'Practical project implementation',
        'Best practices and methodologies',
        'Industry-specific AI applications'
      ],
      price: 'Starting at $2,500/session',
      users: 'Up to 20 participants',
      popular: false,
      marketPrice: '$5,000-15,000/session',
      benefits: ['Build internal AI capabilities', 'Reduce external dependencies', 'Improve team productivity', 'Stay current with AI trends']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'Consulting', name: 'Consulting' },
    { id: 'ML', name: 'Machine Learning' },
    { id: 'NLP', name: 'Natural Language' },
    { id: 'Vision', name: 'Computer Vision' },
    { id: 'Automation', name: 'Automation' },
    { id: 'Security', name: 'Security' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Infrastructure', name: 'Infrastructure' },
    { id: 'Design', name: 'Design' },
    { id: 'Customer Service', name: 'Customer Service' },
    { id: 'Content', name: 'Content' },
    { id: 'Training', name: 'Training' }
  ];

  const benefits = [
    'Cutting-edge AI technology and algorithms',
    'Customized solutions for your business needs',
    'Expert AI engineers and data scientists',
    'Scalable and flexible implementations',
    '24/7 support and maintenance',
    'Proven ROI and business impact'
  ];

  const stats = [
    { icon: Brain, value: '95%', label: 'Accuracy Rate' },
    { icon: Zap, value: '10x', label: 'Faster Processing' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '300%', label: 'Efficiency Gain' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group - Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, automation, and AI consulting. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, AI automation, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive unprecedented growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Services</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                }`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you implement cutting-edge artificial intelligence 
              solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;