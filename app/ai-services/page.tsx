'use client';

import React, { useState, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Star, 
  CheckCircle, 
  Play, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  BarChart,
  Cpu,
  Globe,
  Lock,
  Database,
  Smartphone,
  Code,
  MessageSquare,
  Eye,
  Settings,
  Wifi,
  Server,
  HardDrive,
  FileText,
  PieChart,
  Activity,
  Lightning,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Headphones,
  Monitor,
  Mobile,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Mic,
  Headset,
  Gamepad2,
  Network,
  Security,
  Data,
  Analytics,
  Growth,
  Team,
  Achievement,
  Rating,
  Time,
  Goal,
  Success,
  Next,
  Start,
  Magic,
  Call,
  Email,
  Location
} from 'lucide-react';

// Real AI Services Data with detailed information
const aiServices = [
  {
    id: 'ai-machine-learning',
    name: 'AI Machine Learning Platform',
    description: 'Complete ML platform with model training, deployment, and monitoring. Build and deploy AI models at scale with enterprise-grade security and performance.',
    icon: Brain,
    price: 'Starting at $4,999/month',
    features: [
      'Model training & deployment',
      'Performance monitoring',
      'AutoML capabilities',
      'Scalable infrastructure',
      'Real-time inference',
      'Model versioning',
      'A/B testing',
      'Custom algorithms'
    ],
    popular: true,
    category: 'Machine Learning',
    benefits: ['90% accuracy improvement', '10x faster model deployment', 'Automated optimization'],
    link: 'https://ziontechgroup.com/ai-machine-learning',
    demo: 'https://ziontechgroup.com/demo/ai-machine-learning',
    useCases: [
      'Predictive analytics for business forecasting',
      'Customer behavior prediction and segmentation',
      'Fraud detection and risk assessment',
      'Recommendation systems for e-commerce',
      'Image and video recognition systems'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Kubernetes', 'Docker'],
    roi: '300% average ROI within 6 months'
  },
  {
    id: 'ai-computer-vision',
    name: 'AI Computer Vision Solutions',
    description: 'Advanced computer vision applications for object detection, image recognition, and video analysis with real-time processing capabilities.',
    icon: Eye,
    price: 'Starting at $3,499/month',
    features: [
      'Object detection & recognition',
      'Real-time video analysis',
      'Custom model training',
      'Multi-format support',
      'Edge deployment',
      'API integration',
      'Batch processing',
      'Quality assurance'
    ],
    popular: true,
    category: 'Computer Vision',
    benefits: ['95% accuracy in detection', 'Real-time processing', 'Custom solutions'],
    link: 'https://ziontechgroup.com/ai-computer-vision',
    demo: 'https://ziontechgroup.com/demo/ai-computer-vision',
    useCases: [
      'Quality control in manufacturing',
      'Security surveillance systems',
      'Medical image analysis',
      'Autonomous vehicle vision',
      'Retail inventory management'
    ],
    technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorRT', 'ONNX', 'OpenVINO'],
    roi: '250% ROI through automation and quality improvement'
  },
  {
    id: 'ai-natural-language-processing',
    name: 'AI Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and chatbot development with multi-language support.',
    icon: MessageSquare,
    price: 'Starting at $2,999/month',
    features: [
      'Text analysis & sentiment',
      'Language translation',
      'Chatbot development',
      'Custom model training',
      'Multi-language support',
      'Real-time processing',
      'API integration',
      'Content moderation'
    ],
    popular: true,
    category: 'NLP',
    benefits: ['98% accuracy in analysis', 'Multi-language support', 'Real-time processing'],
    link: 'https://ziontechgroup.com/ai-natural-language-processing',
    demo: 'https://ziontechgroup.com/demo/ai-natural-language-processing',
    useCases: [
      'Customer service automation',
      'Content analysis and moderation',
      'Document processing and extraction',
      'Language translation services',
      'Voice assistants and chatbots'
    ],
    technologies: ['BERT', 'GPT', 'Transformer', 'spaCy', 'NLTK', 'Hugging Face'],
    roi: '200% ROI through automation and improved customer experience'
  },
  {
    id: 'ai-predictive-analytics',
    name: 'AI Predictive Analytics',
    description: 'Advanced predictive analytics with AI-powered forecasting, trend analysis, and business intelligence for data-driven decision making.',
    icon: TrendingUp,
    price: 'Starting at $2,499/month',
    features: [
      'Predictive modeling',
      'Trend analysis',
      'Business forecasting',
      'Risk assessment',
      'Real-time dashboards',
      'Custom algorithms',
      'Data visualization',
      'Automated reporting'
    ],
    popular: false,
    category: 'Analytics',
    benefits: ['85% prediction accuracy', 'Risk mitigation', 'Data-driven decisions'],
    link: 'https://ziontechgroup.com/ai-predictive-analytics',
    demo: 'https://ziontechgroup.com/demo/ai-predictive-analytics',
    useCases: [
      'Sales forecasting and planning',
      'Demand prediction and inventory optimization',
      'Financial risk assessment',
      'Customer churn prediction',
      'Market trend analysis'
    ],
    technologies: ['Python', 'R', 'Apache Spark', 'Pandas', 'NumPy', 'Scikit-learn'],
    roi: '180% ROI through improved forecasting accuracy'
  },
  {
    id: 'ai-robotics-platform',
    name: 'AI Robotics Platform',
    description: 'Intelligent robotics solutions with AI-powered automation, autonomous systems, and smart manufacturing for industrial applications.',
    icon: Bot,
    price: 'Starting at $9,999/month',
    features: [
      'Autonomous systems',
      'Smart manufacturing',
      'Quality control',
      'Predictive maintenance',
      'Human-robot collaboration',
      'Real-time monitoring',
      'Custom integration',
      'Safety compliance'
    ],
    popular: false,
    category: 'Robotics',
    benefits: ['40% efficiency increase', 'Zero-defect production', 'Predictive maintenance'],
    link: 'https://ziontechgroup.com/ai-robotics-platform',
    demo: 'https://ziontechgroup.com/demo/ai-robotics-platform',
    useCases: [
      'Manufacturing automation',
      'Warehouse logistics',
      'Quality inspection',
      'Assembly line optimization',
      'Service robotics'
    ],
    technologies: ['ROS', 'TensorFlow', 'PyTorch', 'OpenCV', 'Gazebo', 'MoveIt'],
    roi: '400% ROI through automation and efficiency gains'
  },
  {
    id: 'ai-edge-computing',
    name: 'AI Edge Computing Solutions',
    description: 'AI processing at the edge with low-latency inference, real-time decision making, and IoT integration for immediate response systems.',
    icon: Cpu,
    price: 'Starting at $1,999/month',
    features: [
      'Edge AI processing',
      'Low-latency inference',
      'IoT integration',
      'Real-time decisions',
      'Offline capability',
      'Resource optimization',
      'Security at edge',
      'Scalable deployment'
    ],
    popular: false,
    category: 'Edge Computing',
    benefits: ['90% latency reduction', 'Offline processing', 'Real-time decisions'],
    link: 'https://ziontechgroup.com/ai-edge-computing',
    demo: 'https://ziontechgroup.com/demo/ai-edge-computing',
    useCases: [
      'Autonomous vehicles',
      'Smart city infrastructure',
      'Industrial IoT monitoring',
      'Real-time video analysis',
      'Emergency response systems'
    ],
    technologies: ['TensorFlow Lite', 'ONNX Runtime', 'OpenVINO', 'NVIDIA Jetson', 'Intel NCS', 'Raspberry Pi'],
    roi: '220% ROI through reduced latency and improved responsiveness'
  },
  {
    id: 'ai-voice-processing',
    name: 'AI Voice Processing & Speech Recognition',
    description: 'Advanced voice processing solutions with speech recognition, voice synthesis, and conversational AI for natural human-computer interaction.',
    icon: Mic,
    price: 'Starting at $2,299/month',
    features: [
      'Speech recognition',
      'Voice synthesis',
      'Conversational AI',
      'Multi-language support',
      'Noise cancellation',
      'Real-time processing',
      'Voice biometrics',
      'Custom voice models'
    ],
    popular: false,
    category: 'Voice AI',
    benefits: ['95% speech accuracy', 'Natural conversations', 'Multi-language support'],
    link: 'https://ziontechgroup.com/ai-voice-processing',
    demo: 'https://ziontechgroup.com/demo/ai-voice-processing',
    useCases: [
      'Voice assistants and chatbots',
      'Call center automation',
      'Voice-controlled applications',
      'Accessibility solutions',
      'Language learning platforms'
    ],
    technologies: ['Whisper', 'Wav2Vec', 'Tacotron', 'WaveNet', 'DeepSpeech', 'Kaldi'],
    roi: '190% ROI through improved customer interaction'
  },
  {
    id: 'ai-recommendation-engine',
    name: 'AI Recommendation Engine',
    description: 'Intelligent recommendation systems with collaborative filtering, content-based filtering, and hybrid approaches for personalized user experiences.',
    icon: Target,
    price: 'Starting at $1,799/month',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid approaches',
      'Real-time recommendations',
      'A/B testing',
      'Performance analytics',
      'Custom algorithms',
      'Scalable infrastructure'
    ],
    popular: false,
    category: 'Recommendation Systems',
    benefits: ['35% increase in engagement', '25% boost in sales', 'Personalized experiences'],
    link: 'https://ziontechgroup.com/ai-recommendation-engine',
    demo: 'https://ziontechgroup.com/demo/ai-recommendation-engine',
    useCases: [
      'E-commerce product recommendations',
      'Content streaming platforms',
      'Social media feeds',
      'Job matching platforms',
      'Financial product suggestions'
    ],
    technologies: ['Apache Spark', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Redis'],
    roi: '280% ROI through increased engagement and sales'
  }
];

// Service Card Component
const ServiceCard = memo(({ service }: { service: any }) => (
  <div className="quantum-card p-8 h-full group hover:scale-105 transition-all duration-300">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-gray-400">{service.category}</p>
        </div>
      </div>
      {service.popular && (
        <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full">
          Popular
        </span>
      )}
    </div>
    
    <p className="text-gray-300 mb-6 text-base leading-relaxed">
      {service.description}
    </p>
    
    <div className="mb-6">
      <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
      <div className="text-sm text-gray-400 mb-4">{service.roi}</div>
      <div className="flex flex-wrap gap-2">
        {service.benefits.map((benefit: string, index: number) => (
          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
            {benefit}
          </span>
        ))}
      </div>
    </div>
    
    <div className="space-y-3 mb-8">
      <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
      {service.features.slice(0, 4).map((feature: string, index: number) => (
        <div key={index} className="flex items-center text-sm text-gray-300">
          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
          {feature}
        </div>
      ))}
    </div>

    <div className="mb-6">
      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {service.technologies.map((tech: string, index: number) => (
          <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    <div className="flex space-x-3">
      <a
        href={service.link}
        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-all group"
      >
        <span className="flex items-center justify-center">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </a>
      <a
        href={service.demo}
        className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition-all"
      >
        Demo
      </a>
    </div>
  </div>
));

// Use Cases Section
const UseCasesSection = memo(() => (
  <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
          <span className="holographic-text">AI Use Cases</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover how our AI solutions are transforming industries and driving innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Healthcare & Medical',
            description: 'AI-powered medical imaging, drug discovery, and patient diagnosis',
            icon: Activity,
            benefits: ['95% diagnostic accuracy', '50% faster drug discovery', '24/7 patient monitoring']
          },
          {
            title: 'Financial Services',
            description: 'Fraud detection, algorithmic trading, and risk assessment',
            icon: BarChart,
            benefits: ['99.8% fraud detection', '30% risk reduction', 'Real-time analysis']
          },
          {
            title: 'Manufacturing',
            description: 'Quality control, predictive maintenance, and process optimization',
            icon: Settings,
            benefits: ['40% efficiency gain', 'Zero-defect production', 'Predictive maintenance']
          },
          {
            title: 'Retail & E-commerce',
            description: 'Personalized recommendations, inventory optimization, and customer service',
            icon: ShoppingCart,
            benefits: ['35% sales increase', '50% inventory reduction', '24/7 customer support']
          },
          {
            title: 'Transportation',
            description: 'Autonomous vehicles, route optimization, and traffic management',
            icon: Car,
            benefits: ['90% accident reduction', '25% fuel savings', 'Real-time optimization']
          },
          {
            title: 'Education',
            description: 'Personalized learning, automated grading, and intelligent tutoring',
            icon: GraduationCap,
            benefits: ['60% learning improvement', 'Automated assessment', 'Personalized content']
          }
        ].map((useCase, index) => (
          <div key={index} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {useCase.title}
              </h3>
            </div>
            <p className="text-gray-300 mb-4">{useCase.description}</p>
            <div className="space-y-2">
              {useCase.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

// Main AI Services Page Component
export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: Layers },
    { id: 'Machine Learning', label: 'Machine Learning', icon: Brain },
    { id: 'Computer Vision', label: 'Computer Vision', icon: Eye },
    { id: 'NLP', label: 'Natural Language Processing', icon: MessageSquare },
    { id: 'Analytics', label: 'Analytics', icon: BarChart },
    { id: 'Robotics', label: 'Robotics', icon: Bot },
    { id: 'Edge Computing', label: 'Edge Computing', icon: Cpu },
    { id: 'Voice AI', label: 'Voice AI', icon: Mic },
    { id: 'Recommendation Systems', label: 'Recommendations', icon: Target }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Services - Zion Tech Group',
    description: 'Comprehensive AI services including machine learning, computer vision, NLP, and robotics solutions',
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com'
    },
    areaServed: 'Worldwide',
    serviceType: 'Artificial Intelligence Services'
  };

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Machine Learning, Computer Vision, NLP</title>
        <meta
          name="description"
          content="Comprehensive AI services including machine learning, computer vision, natural language processing, robotics, and edge computing solutions. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, machine learning, computer vision, NLP, natural language processing, robotics, edge computing, artificial intelligence, AI consulting, AI development"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 cyber-grid neural-network-bg overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 cyber-text">
              <span className="holographic-text neon-pulse">AI Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI solutions. From machine learning to robotics, 
              we deliver enterprise-grade AI services that drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Get Started Today
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Request Consultation
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
              <span className="holographic-text">Ready to Implement AI?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let our AI experts help you identify the best solutions for your business needs and implement them successfully.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Call (302) 464-0950
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Email kleber@ziontechgroup.com
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}