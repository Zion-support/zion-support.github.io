'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Code, 
  Settings, 
  TrendingUp,
  CheckCircle,
  Play,
  Download,
  Clock,
  Award,
  Star,
  Phone,
  FileText,
  Database,
  Cpu,
  Eye,
  MessageSquare,
  Video
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain, count: 25 },
    { id: 'machine-learning', name: 'Machine Learning', icon: Cpu, count: 8 },
    { id: 'natural-language', name: 'Natural Language', icon: MessageSquare, count: 6 },
    { id: 'computer-vision', name: 'Computer Vision', icon: Eye, count: 5 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 6 }
  ];

  const aiServices = [
    // Machine Learning Services
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics AI',
      description: 'Advanced machine learning models for forecasting business trends, customer behavior, and market dynamics with 95% accuracy.',
      category: 'machine-learning',
      icon: BarChart,
      price: 2999,
      features: [
        'Custom ML Model Development',
        'Real-time Data Processing',
        'Automated Model Training',
        'Performance Monitoring',
        'API Integration',
        'Custom Dashboards'
      ],
      benefits: [
        '95% prediction accuracy',
        '50% faster decision making',
        '30% cost reduction',
        'Real-time insights'
      ],
      useCases: [
        'Sales Forecasting',
        'Customer Churn Prediction',
        'Market Trend Analysis',
        'Risk Assessment'
      ],
      pricing: 'monthly',
      implementation: '2-4 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 150
    },
    {
      id: 'recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Intelligent recommendation systems that increase conversion rates by 40% and improve customer satisfaction.',
      category: 'machine-learning',
      icon: Target,
      price: 1999,
      features: [
        'Collaborative Filtering',
        'Content-Based Filtering',
        'Hybrid Approaches',
        'Real-time Recommendations',
        'A/B Testing Framework',
        'Performance Analytics'
      ],
      benefits: [
        '40% higher conversion rates',
        '35% increase in average order value',
        '60% better customer engagement',
        'Personalized experiences'
      ],
      useCases: [
        'E-commerce Product Recommendations',
        'Content Personalization',
        'Cross-selling & Upselling',
        'Movie/Music Recommendations'
      ],
      pricing: 'monthly',
      implementation: '3-5 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 200
    },
    {
      id: 'anomaly-detection',
      name: 'Anomaly Detection AI',
      description: 'Advanced anomaly detection system that identifies unusual patterns in data with 99.5% accuracy for fraud prevention.',
      category: 'machine-learning',
      icon: Shield,
      price: 2499,
      features: [
        'Unsupervised Learning Models',
        'Real-time Monitoring',
        'Custom Thresholds',
        'Alert System',
        'Historical Analysis',
        'Integration APIs'
      ],
      benefits: [
        '99.5% detection accuracy',
        '80% reduction in false positives',
        'Real-time threat detection',
        'Automated response systems'
      ],
      useCases: [
        'Fraud Detection',
        'Network Security',
        'Quality Control',
        'System Monitoring'
      ],
      pricing: 'monthly',
      implementation: '2-3 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 120
    },

    // Natural Language Processing
    {
      id: 'sentiment-analysis',
      name: 'Sentiment Analysis AI',
      description: 'Advanced NLP system that analyzes customer feedback, social media, and reviews with 92% accuracy across 50+ languages.',
      category: 'natural-language',
      icon: MessageSquare,
      price: 1499,
      features: [
        'Multi-language Support',
        'Real-time Analysis',
        'Emotion Detection',
        'Topic Classification',
        'Custom Model Training',
        'API Integration'
      ],
      benefits: [
        '92% accuracy rate',
        '50+ language support',
        'Real-time processing',
        'Actionable insights'
      ],
      useCases: [
        'Customer Feedback Analysis',
        'Social Media Monitoring',
        'Brand Reputation Management',
        'Market Research'
      ],
      pricing: 'monthly',
      implementation: '1-2 weeks',
      support: '24/7',
      rating: 4.7,
      clients: 300
    },
    {
      id: 'chatbot-ai',
      name: 'Intelligent Chatbot AI',
      description: 'Advanced conversational AI that handles 80% of customer inquiries automatically with human-like responses.',
      category: 'natural-language',
      icon: MessageSquare,
      price: 1799,
      features: [
        'Natural Language Understanding',
        'Context Awareness',
        'Multi-channel Support',
        'Integration APIs',
        'Analytics Dashboard',
        'Custom Training'
      ],
      benefits: [
        '80% query resolution',
        '24/7 availability',
        '60% cost reduction',
        'Improved customer satisfaction'
      ],
      useCases: [
        'Customer Support',
        'Lead Qualification',
        'FAQ Automation',
        'Appointment Scheduling'
      ],
      pricing: 'monthly',
      implementation: '2-4 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 250
    },
    {
      id: 'document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis and extraction system that processes 10,000+ documents per hour with 98% accuracy.',
      category: 'natural-language',
      icon: FileText,
      price: 2199,
      features: [
        'OCR Technology',
        'Data Extraction',
        'Document Classification',
        'Batch Processing',
        'Custom Templates',
        'API Integration'
      ],
      benefits: [
        '98% extraction accuracy',
        '10,000+ docs/hour',
        '90% time savings',
        'Automated workflows'
      ],
      useCases: [
        'Invoice Processing',
        'Contract Analysis',
        'Form Processing',
        'Legal Document Review'
      ],
      pricing: 'monthly',
      implementation: '3-4 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 180
    },

    // Computer Vision Services
    {
      id: 'image-recognition',
      name: 'Image Recognition AI',
      description: 'Advanced computer vision system that identifies objects, faces, and scenes with 96% accuracy for various applications.',
      category: 'computer-vision',
      icon: Eye,
      price: 1899,
      features: [
        'Object Detection',
        'Face Recognition',
        'Scene Classification',
        'Real-time Processing',
        'Custom Model Training',
        'API Integration'
      ],
      benefits: [
        '96% recognition accuracy',
        'Real-time processing',
        'Custom model training',
        'Scalable architecture'
      ],
      useCases: [
        'Security Systems',
        'Quality Control',
        'Medical Imaging',
        'Retail Analytics'
      ],
      pricing: 'monthly',
      implementation: '2-3 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 160
    },
    {
      id: 'video-analysis',
      name: 'Video Analysis AI',
      description: 'Intelligent video processing system that analyzes content, detects objects, and extracts insights from video streams.',
      category: 'computer-vision',
      icon: Video,
      price: 2599,
      features: [
        'Real-time Video Analysis',
        'Object Tracking',
        'Motion Detection',
        'Content Moderation',
        'Analytics Dashboard',
        'Cloud Processing'
      ],
      benefits: [
        'Real-time analysis',
        'Automated content moderation',
        'Detailed analytics',
        'Scalable processing'
      ],
      useCases: [
        'Security Monitoring',
        'Content Moderation',
        'Sports Analytics',
        'Traffic Management'
      ],
      pricing: 'monthly',
      implementation: '3-5 weeks',
      support: '24/7',
      rating: 4.7,
      clients: 90
    },

    // Automation Services
    {
      id: 'workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent automation system that streamlines business processes, reducing manual work by 70% and improving efficiency.',
      category: 'automation',
      icon: Zap,
      price: 1599,
      features: [
        'Process Mining',
        'Automated Workflows',
        'Exception Handling',
        'Performance Monitoring',
        'Custom Integrations',
        'Analytics Dashboard'
      ],
      benefits: [
        '70% reduction in manual work',
        '50% faster processing',
        '99% accuracy rate',
        'Cost savings'
      ],
      useCases: [
        'Invoice Processing',
        'Customer Onboarding',
        'Data Entry Automation',
        'Report Generation'
      ],
      pricing: 'monthly',
      implementation: '2-4 weeks',
      support: '24/7',
      rating: 4.8,
      clients: 220
    },
    {
      id: 'data-processing',
      name: 'AI Data Processing',
      description: 'Automated data cleaning, transformation, and analysis system that processes millions of records with 99.9% accuracy.',
      category: 'automation',
      icon: Database,
      price: 1299,
      features: [
        'Data Cleaning',
        'Data Transformation',
        'Quality Validation',
        'Batch Processing',
        'Real-time Processing',
        'Custom Rules Engine'
      ],
      benefits: [
        '99.9% data accuracy',
        'Millions of records/hour',
        'Automated quality checks',
        'Reduced processing time'
      ],
      useCases: [
        'Data Migration',
        'ETL Processes',
        'Data Quality Management',
        'Analytics Preparation'
      ],
      pricing: 'monthly',
      implementation: '1-3 weeks',
      support: '24/7',
      rating: 4.9,
      clients: 280
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const formatPrice = (price: number, pricing: string) => {
    return `$${price.toLocaleString()}/${pricing === 'monthly' ? 'mo' : 'yr'}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Cutting-Edge Artificial Intelligence for Enterprise
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Transform your business with our comprehensive AI services. From machine learning models 
            to natural language processing, we deliver enterprise-grade AI solutions that drive real results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4.8★</div>
              <div className="text-gray-300">Client Rating</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.clients} clients)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">
                      {formatPrice(service.price, service.pricing)}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Business Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Implementation Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">Implementation</div>
                    <div className="text-xs text-gray-600">{service.implementation}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <Shield className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">Support</div>
                    <div className="text-xs text-gray-600">{service.support}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <Award className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900">SLA</div>
                    <div className="text-xs text-gray-600">99.9% Uptime</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold">
                    <Play className="w-5 h-5" />
                    <span>Request Demo</span>
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom AI Solutions */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom AI Solution?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Our AI experts can develop custom solutions tailored to your specific business needs. 
              From research to deployment, we handle everything.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Research & Development</h3>
                <p className="text-cyan-100">Custom AI model development and training</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Integration & Deployment</h3>
                <p className="text-cyan-100">Seamless integration with your existing systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
                <p className="text-cyan-100">24/7 monitoring and continuous optimization</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-200"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Enterprise AI Pricing
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business. All plans include 
            dedicated support and custom integrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Professional Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$1,499<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Up to 3 AI services
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic customization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Standard SLA
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 shadow-2xl transform scale-105">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white mr-2" />
                <span className="text-white font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-6">$4,999<span className="text-lg text-cyan-100">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Up to 10 AI services
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Full customization
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Dedicated account manager
                </li>
              </ul>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Get Started
              </button>
            </div>

            {/* Custom Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">Custom<span className="text-lg text-gray-500"> pricing</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited AI services
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  24/7 phone support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  White-label solutions
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;