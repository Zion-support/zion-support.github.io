'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, Mail, MapPin, ArrowRight, Award, TrendingUp, Clock, Headphones, Cpu, HardDrive, Wifi, Monitor, Smartphone, Laptop, Router, Key, Eye, AlertTriangle, RefreshCw, BarChart, Target, Rocket, Brain, Zap, Shield, Database, Settings, Users, Globe, Search, Filter, MessageSquare, Music, Video, Code, Gamepad2, Shirt, Home, GraduationCap, Heart, Dumbbell, Moon, Apple, PawPrint } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    // Core AI Services
    {
      icon: Brain,
      title: 'AI Consulting & Strategy',
      price: '$2,500/month',
      marketPrice: '$5,000-10,000/month',
      savings: 'Save $2,500-7,500/month',
      description: 'Comprehensive AI strategy development, implementation planning, and digital transformation consulting for enterprise organizations.',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Roadmap',
        'Change Management',
        'ROI Analysis',
        'Executive Training',
        'Vendor Selection',
        'Risk Assessment'
      ],
      benefits: [
        'Accelerate AI adoption by 300%',
        'Reduce implementation risks by 60%',
        'Achieve 400% ROI within 12 months',
        'Future-proof your technology stack'
      ],
      category: 'Consulting',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Cloud AI', 'Edge Computing'],
      popular: true
    },
    {
      icon: Cpu,
      title: 'Machine Learning Solutions',
      price: '$1,500/month',
      marketPrice: '$3,000-6,000/month',
      savings: 'Save $1,500-4,500/month',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent decision-making systems.',
      features: [
        'Custom ML Model Development',
        'Data Preprocessing & Cleaning',
        'Model Training & Optimization',
        'Real-time Inference',
        'Model Monitoring & Maintenance',
        'A/B Testing Framework',
        'Feature Engineering',
        'Model Deployment'
      ],
      benefits: [
        'Improve accuracy by 40-80%',
        'Reduce manual work by 70%',
        'Enable real-time predictions',
        'Scale with your business growth'
      ],
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      popular: true
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      price: '$1,200/month',
      marketPrice: '$2,500-5,000/month',
      savings: 'Save $1,300-3,800/month',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      features: [
        'Text Classification & Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Chatbot Development',
        'Question Answering',
        'Document Processing'
      ],
      benefits: [
        'Process 10,000+ documents/hour',
        'Improve customer satisfaction by 50%',
        'Reduce response time by 80%',
        'Enable multilingual operations'
      ],
      category: 'NLP',
      technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
      popular: true
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      price: '$1,800/month',
      marketPrice: '$3,500-7,000/month',
      savings: 'Save $1,700-5,200/month',
      description: 'Image and video analysis solutions for object detection, facial recognition, quality control, and automated inspection.',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition Systems',
        'Image Classification',
        'Video Analysis',
        'Quality Control Automation',
        'Real-time Processing',
        'Medical Image Analysis',
        'Surveillance Systems'
      ],
      benefits: [
        'Reduce inspection time by 90%',
        'Improve accuracy to 99.5%',
        'Enable 24/7 monitoring',
        'Reduce human error by 95%'
      ],
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch', 'CUDA'],
      popular: true
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics Platform',
      price: '$1,600/month',
      marketPrice: '$3,000-6,000/month',
      savings: 'Save $1,400-4,400/month',
      description: 'Advanced predictive modeling for forecasting, risk assessment, demand planning, and business intelligence.',
      features: [
        'Demand Forecasting',
        'Risk Assessment Models',
        'Customer Lifetime Value',
        'Churn Prediction',
        'Sales Forecasting',
        'Anomaly Detection',
        'Market Analysis',
        'Financial Modeling'
      ],
      benefits: [
        'Improve forecast accuracy by 60%',
        'Reduce inventory costs by 25%',
        'Increase revenue by 30%',
        'Minimize business risks'
      ],
      category: 'Analytics',
      technologies: ['Python', 'R', 'Apache Spark', 'Tableau', 'Power BI', 'Jupyter'],
      popular: true
    },
    {
      icon: Settings,
      title: 'AI Automation Suite',
      price: '$1,400/month',
      marketPrice: '$2,500-5,000/month',
      savings: 'Save $1,100-3,600/month',
      description: 'Intelligent process automation with RPA, workflow optimization, and decision-making capabilities.',
      features: [
        'Process Discovery & Mapping',
        'RPA Implementation',
        'Workflow Optimization',
        'Decision Automation',
        'Exception Handling',
        'Performance Monitoring',
        'Document Processing',
        'Email Automation'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Free up staff for strategic work'
      ],
      category: 'Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'Workflow Engines'],
      popular: true
    },
    {
      icon: Users,
      title: 'AI Chatbot & Virtual Assistant',
      price: '$800/month',
      marketPrice: '$1,500-3,000/month',
      savings: 'Save $700-2,200/month',
      description: 'Intelligent conversational AI for customer service, sales support, and internal operations.',
      features: [
        'Multi-channel Deployment',
        'Intent Recognition',
        'Context Management',
        'Human Handoff',
        'Analytics & Reporting',
        'Custom Integrations',
        'Voice Integration',
        'Multi-language Support'
      ],
      benefits: [
        'Handle 80% of customer queries',
        'Reduce response time to seconds',
        'Available 24/7/365',
        'Improve customer satisfaction'
      ],
      category: 'Conversational AI',
      technologies: ['Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'OpenAI GPT', 'Webhooks', 'APIs'],
      popular: true
    },
    {
      icon: Database,
      title: 'AI Data Pipeline & ETL',
      price: '$1,100/month',
      marketPrice: '$2,000-4,000/month',
      savings: 'Save $900-2,900/month',
      description: 'Intelligent data processing, cleaning, and transformation pipelines for enterprise data management.',
      features: [
        'Data Ingestion & Processing',
        'Data Quality Management',
        'Real-time Streaming',
        'Data Transformation',
        'Schema Evolution',
        'Data Lineage Tracking',
        'Data Validation',
        'Error Handling'
      ],
      benefits: [
        'Process 1M+ records/hour',
        'Improve data quality by 95%',
        'Reduce processing time by 80%',
        'Enable real-time analytics'
      ],
      category: 'Data Engineering',
      technologies: ['Apache Kafka', 'Apache Airflow', 'Apache Spark', 'Python', 'SQL', 'Cloud Storage'],
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Security & Fraud Detection',
      price: '$2,200/month',
      marketPrice: '$4,000-8,000/month',
      savings: 'Save $1,800-5,800/month',
      description: 'Advanced security solutions with AI-powered threat detection, fraud prevention, and risk management.',
      features: [
        'Threat Detection & Analysis',
        'Fraud Prevention',
        'Anomaly Detection',
        'Risk Scoring',
        'Real-time Monitoring',
        'Incident Response',
        'Behavioral Analysis',
        'Compliance Monitoring'
      ],
      benefits: [
        'Detect 99.9% of threats',
        'Reduce false positives by 80%',
        'Prevent fraud losses by 90%',
        'Enable proactive security'
      ],
      category: 'Security',
      technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'Log Analysis', 'Behavioral Analytics', 'Threat Intelligence'],
      popular: true
    },
    {
      icon: Target,
      title: 'AI Recommendation Engine',
      price: '$1,300/month',
      marketPrice: '$2,500-5,000/month',
      savings: 'Save $1,200-3,700/month',
      description: 'Personalized recommendation systems for e-commerce, content, products, and services.',
      features: [
        'Collaborative Filtering',
        'Content-based Filtering',
        'Hybrid Approaches',
        'Real-time Recommendations',
        'A/B Testing',
        'Performance Analytics',
        'Cold Start Handling',
        'Multi-armed Bandit'
      ],
      benefits: [
        'Increase sales by 25%',
        'Improve user engagement by 40%',
        'Reduce bounce rate by 30%',
        'Personalize user experience'
      ],
      category: 'Recommendation Systems',
      technologies: ['Python', 'Apache Spark', 'TensorFlow', 'Redis', 'PostgreSQL', 'Machine Learning'],
      popular: true
    },
    {
      icon: Headphones,
      title: 'AI Voice & Speech Solutions',
      price: '$1,000/month',
      marketPrice: '$2,000-4,000/month',
      savings: 'Save $1,000-3,000/month',
      description: 'Advanced speech recognition, text-to-speech, and voice analytics for customer service and accessibility.',
      features: [
        'Speech-to-Text',
        'Text-to-Speech',
        'Voice Analytics',
        'Speaker Identification',
        'Emotion Detection',
        'Multi-language Support',
        'Voice Cloning',
        'Real-time Processing'
      ],
      benefits: [
        'Improve accessibility by 100%',
        'Reduce call handling time by 50%',
        'Enable voice automation',
        'Enhance customer experience'
      ],
      category: 'Speech AI',
      technologies: ['Google Speech API', 'Amazon Polly', 'Azure Cognitive Services', 'OpenAI Whisper', 'WebRTC', 'Voice SDKs'],
      popular: true
    },
    {
      icon: Zap,
      title: 'AI Edge Computing Solutions',
      price: '$1,700/month',
      marketPrice: '$3,000-6,000/month',
      savings: 'Save $1,300-4,300/month',
      description: 'Deploy AI models at the edge for real-time processing, reduced latency, and offline capabilities.',
      features: [
        'Edge Model Deployment',
        'Real-time Inference',
        'Offline Capabilities',
        'Model Optimization',
        'Edge Analytics',
        'Device Management',
        'Federated Learning',
        'Edge Security'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Enable offline operations',
        'Reduce bandwidth costs by 70%',
        'Improve data privacy'
      ],
      category: 'Edge AI',
      technologies: ['TensorFlow Lite', 'ONNX', 'OpenVINO', 'NVIDIA Jetson', 'Raspberry Pi', 'Edge Computing'],
      popular: false
    },
    // Advanced AI Services
    {
      icon: Music,
      title: 'AI Music Composition',
      price: '$1,800/month',
      marketPrice: '$3,000-8,000/month',
      savings: 'Save $1,200-6,200/month',
      description: 'Intelligent music generation and composition with style transfer and emotional analysis.',
      features: [
        'Music Composition',
        'Style Transfer',
        'Emotional Analysis',
        'Instrument Synthesis',
        'Lyrics Generation',
        'Chord Progression',
        'Melody Generation',
        'Arrangement'
      ],
      benefits: [
        'Create original music',
        'Reduce composition time',
        'Explore new musical styles',
        'Lower production costs'
      ],
      category: 'Creative AI',
      technologies: ['MuseNet', 'Jukebox', 'Magenta', 'MIDI Processing', 'Custom Music Models'],
      popular: false
    },
    {
      icon: Video,
      title: 'AI Video Generation',
      price: '$4,500/month',
      marketPrice: '$7,500-20,000/month',
      savings: 'Save $3,000-15,500/month',
      description: 'Advanced video creation and editing using AI for content production and marketing.',
      features: [
        'Video Generation',
        'Scene Synthesis',
        'Motion Transfer',
        'Style Transfer',
        'Automated Editing',
        'Deepfake Detection',
        'Video Enhancement',
        'Real-time Processing'
      ],
      benefits: [
        'Create professional videos',
        'Reduce production time',
        'Lower video production costs',
        'Enable creative possibilities'
      ],
      category: 'Video AI',
      technologies: ['DALL-E Video', 'Runway ML', 'Stable Video Diffusion', 'OpenCV', 'Custom Video Models'],
      popular: false
    },
    {
      icon: Code,
      title: 'AI Code Generation',
      price: '$2,200/month',
      marketPrice: '$3,500-10,000/month',
      savings: 'Save $1,300-7,800/month',
      description: 'Intelligent code generation and completion for multiple programming languages and frameworks.',
      features: [
        'Code Generation',
        'Bug Fixing',
        'Code Optimization',
        'Documentation Generation',
        'Multi-language Support',
        'Code Review',
        'Refactoring',
        'Testing Generation'
      ],
      benefits: [
        'Accelerate development',
        'Reduce coding errors',
        'Improve code quality',
        'Enable faster prototyping'
      ],
      category: 'Development AI',
      technologies: ['GitHub Copilot', 'CodeT5', 'CodeBERT', 'Custom Code Models', 'IDE Integration'],
      popular: true
    },
    {
      icon: Gamepad2,
      title: 'AI Game Development',
      price: '$3,000/month',
      marketPrice: '$5,000-15,000/month',
      savings: 'Save $2,000-12,000/month',
      description: 'Intelligent game asset generation, level design, and NPC behavior creation.',
      features: [
        'Asset Generation',
        'Level Design',
        'NPC Behavior',
        'Procedural Content',
        'Game Balancing',
        'AI Opponents',
        'Dynamic Storytelling',
        'Player Analytics'
      ],
      benefits: [
        'Accelerate game development',
        'Create unique content',
        'Improve player experience',
        'Reduce development costs'
      ],
      category: 'Gaming AI',
      technologies: ['Unity ML-Agents', 'Unreal Engine AI', 'Procedural Generation', 'Custom Game AI', 'Reinforcement Learning'],
      popular: false
    },
    {
      icon: Shirt,
      title: 'AI Fashion Design',
      price: '$2,800/month',
      marketPrice: '$4,500-12,000/month',
      savings: 'Save $1,700-9,200/month',
      description: 'Intelligent fashion design and trend prediction with virtual try-on capabilities.',
      features: [
        'Fashion Design',
        'Trend Prediction',
        'Virtual Try-on',
        'Color Matching',
        'Size Optimization',
        'Fabric Analysis',
        'Style Transfer',
        'Market Analysis'
      ],
      benefits: [
        'Accelerate design process',
        'Predict fashion trends',
        'Improve customer experience',
        'Reduce design costs'
      ],
      category: 'Fashion AI',
      technologies: ['FashionGAN', 'Virtual Try-On', 'Trend Analysis', 'Computer Vision', 'Custom Fashion Models'],
      popular: false
    },
    {
      icon: Home,
      title: 'AI Interior Design',
      price: '$2,500/month',
      marketPrice: '$4,000-10,000/month',
      savings: 'Save $1,500-7,500/month',
      description: 'Intelligent interior design and space optimization with virtual room planning.',
      features: [
        'Room Design',
        'Furniture Placement',
        'Color Schemes',
        'Space Optimization',
        '3D Visualization',
        'Style Matching',
        'Lighting Design',
        'Cost Estimation'
      ],
      benefits: [
        'Improve space utilization',
        'Accelerate design process',
        'Enhance customer satisfaction',
        'Reduce design time'
      ],
      category: 'Design AI',
      technologies: ['3D Reconstruction', 'Interior Design AI', 'Space Planning', 'Custom Design Models', 'VR Integration'],
      popular: false
    },
    {
      icon: GraduationCap,
      title: 'AI Language Learning',
      price: '$1,500/month',
      marketPrice: '$2,500-6,000/month',
      savings: 'Save $1,000-4,500/month',
      description: 'Personalized language learning with adaptive curriculum and pronunciation analysis.',
      features: [
        'Adaptive Learning',
        'Pronunciation Analysis',
        'Conversation Practice',
        'Progress Tracking',
        'Multi-language Support',
        'Cultural Context',
        'Gamification',
        'Real-time Feedback'
      ],
      benefits: [
        'Accelerate language learning',
        'Personalize education',
        'Improve retention rates',
        'Enable flexible learning'
      ],
      category: 'Education AI',
      technologies: ['Speech Recognition', 'NLP', 'Adaptive Learning', 'Custom Language Models', 'Mobile Integration'],
      popular: false
    },
    {
      icon: Heart,
      title: 'AI Mental Health Assistant',
      price: '$3,200/month',
      marketPrice: '$5,000-15,000/month',
      savings: 'Save $1,800-11,800/month',
      description: 'Intelligent mental health monitoring and support with mood analysis and intervention recommendations.',
      features: [
        'Mood Analysis',
        'Crisis Detection',
        'Intervention Recommendations',
        'Progress Tracking',
        'Privacy Protection',
        'Therapy Support',
        'Medication Reminders',
        'Crisis Intervention'
      ],
      benefits: [
        'Improve mental health outcomes',
        'Provide 24/7 support',
        'Reduce healthcare costs',
        'Enable early intervention'
      ],
      category: 'Healthcare AI',
      technologies: ['Sentiment Analysis', 'NLP', 'Privacy-Preserving ML', 'Custom Health Models', 'HIPAA Compliance'],
      popular: false
    },
    {
      icon: Dumbbell,
      title: 'AI Fitness Coaching',
      price: '$1,200/month',
      marketPrice: '$2,000-5,000/month',
      savings: 'Save $800-3,800/month',
      description: 'Personalized fitness coaching with form analysis and workout optimization.',
      features: [
        'Form Analysis',
        'Workout Optimization',
        'Progress Tracking',
        'Injury Prevention',
        'Nutrition Guidance',
        'Personalized Plans',
        'Real-time Feedback',
        'Goal Setting'
      ],
      benefits: [
        'Improve workout effectiveness',
        'Prevent injuries',
        'Personalize fitness plans',
        'Increase motivation'
      ],
      category: 'Fitness AI',
      technologies: ['Computer Vision', 'Motion Analysis', 'Wearable Integration', 'Custom Fitness Models', 'Mobile Apps'],
      popular: false
    },
    {
      icon: Moon,
      title: 'AI Sleep Analysis',
      price: '$800/month',
      marketPrice: '$1,500-4,000/month',
      savings: 'Save $700-3,200/month',
      description: 'Intelligent sleep monitoring and optimization with personalized recommendations.',
      features: [
        'Sleep Monitoring',
        'Sleep Quality Analysis',
        'Optimization Recommendations',
        'Sleep Disorder Detection',
        'Progress Tracking',
        'Environmental Analysis',
        'Sleep Coaching',
        'Habit Tracking'
      ],
      benefits: [
        'Improve sleep quality',
        'Identify sleep issues',
        'Optimize sleep patterns',
        'Enhance overall health'
      ],
      category: 'Health AI',
      technologies: ['Sleep Analysis', 'Wearable Data', 'Custom Sleep Models', 'Mobile Integration', 'Health APIs'],
      popular: false
    },
    {
      icon: Apple,
      title: 'AI Nutrition Planning',
      price: '$1,000/month',
      marketPrice: '$1,800-4,500/month',
      savings: 'Save $800-3,500/month',
      description: 'Personalized nutrition planning with meal optimization and dietary analysis.',
      features: [
        'Meal Planning',
        'Nutritional Analysis',
        'Dietary Optimization',
        'Allergy Management',
        'Shopping Lists',
        'Recipe Generation',
        'Calorie Tracking',
        'Macro Optimization'
      ],
      benefits: [
        'Improve nutrition',
        'Simplify meal planning',
        'Optimize health outcomes',
        'Reduce food waste'
      ],
      category: 'Health AI',
      technologies: ['Nutrition Analysis', 'Meal Planning AI', 'Custom Diet Models', 'Mobile Apps', 'Health APIs'],
      popular: false
    },
    {
      icon: PawPrint,
      title: 'AI Pet Care',
      price: '$1,500/month',
      marketPrice: '$2,500-6,000/month',
      savings: 'Save $1,000-4,500/month',
      description: 'Intelligent pet health monitoring and care recommendations with behavior analysis.',
      features: [
        'Health Monitoring',
        'Behavior Analysis',
        'Care Recommendations',
        'Veterinary Integration',
        'Emergency Alerts',
        'Activity Tracking',
        'Diet Planning',
        'Training Support'
      ],
      benefits: [
        'Improve pet health',
        'Early problem detection',
        'Reduce vet costs',
        'Enhance pet care'
      ],
      category: 'Pet AI',
      technologies: ['Computer Vision', 'Pet Health Models', 'IoT Integration', 'Mobile Apps', 'Veterinary APIs'],
      popular: false
    },
    {
      icon: Smartphone,
      title: 'AI Mobile App Development',
      price: '$2,000/month',
      marketPrice: '$3,500-8,000/month',
      savings: 'Save $1,500-6,000/month',
      description: 'AI-powered mobile app development with intelligent features and personalization.',
      features: [
        'AI Feature Integration',
        'Personalization',
        'Predictive Analytics',
        'Voice Integration',
        'Image Recognition',
        'Natural Language Processing',
        'Recommendation Systems',
        'Real-time Processing'
      ],
      benefits: [
        'Create intelligent apps',
        'Improve user experience',
        'Increase engagement',
        'Reduce development time'
      ],
      category: 'Mobile AI',
      technologies: ['React Native', 'Flutter', 'TensorFlow Lite', 'Core ML', 'Custom Mobile Models', 'APIs'],
      popular: true
    }
  ];

  const categories = [
    'All', 'Consulting', 'Machine Learning', 'NLP', 'Computer Vision', 'Analytics', 
    'Automation', 'Conversational AI', 'Data Engineering', 'Security', 'Recommendation Systems',
    'Speech AI', 'Edge AI', 'Creative AI', 'Video AI', 'Development AI', 'Gaming AI',
    'Fashion AI', 'Design AI', 'Education AI', 'Healthcare AI', 'Fitness AI', 'Health AI',
    'Pet AI', 'Mobile AI'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { icon: Users, label: 'AI Experts', value: '75+' },
    { icon: Award, label: 'AI Projects', value: '1,000+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Clock, label: 'Response Time', value: '< 2 hours' },
    { icon: Shield, label: 'Data Security', value: '100%' },
    { icon: Globe, label: 'Global Reach', value: '50+ countries' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, automation, and advanced AI solutions. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI automation, AI consulting, artificial intelligence, AI solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Advanced Artificial Intelligence Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive AI services including machine learning, natural language processing, computer vision, 
              automation, and cutting-edge AI solutions. Transform your business with the power of artificial intelligence.
            </p>
          </section>

          {/* Statistics */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card hologram-card p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-300">
                  Showing {filteredServices.length} of {aiServices.length} AI services
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group relative">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="text-4xl mb-4 text-center cyber-scan-line">
                    <service.icon className="w-12 h-12 mx-auto text-cyan-400" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Category Badge */}
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gray-800 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-1 neon-text">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      Market: {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-400 font-medium mt-1">
                      {service.savings}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 italic">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-yellow-400" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="text-xs text-gray-400">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-6 p-3 bg-gray-800 rounded-lg">
                    <div className="text-xs text-gray-300 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Phone className="w-3 h-3 text-cyan-400" />
                        <span>+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-3 h-3 text-cyan-400" />
                        <span>kleber@ziontechgroup.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+13024640950"
                      className="cyber-button text-center text-sm py-2 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm text-center hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="cyber-card hologram-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get started with our AI services today and experience the power of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button text-center"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>🌐 https://ziontechgroup.com</p>
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