import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Smartphone as Phone, Headphones, Printer, Camera, Wrench, Cog, Activity, Globe as Web, Mail as Email, MessageCircle, Mic, Phone as PhoneIcon, Eye, Bot, Cpu as AI, Sparkles, Target as Focus, Layers, Workflow } from 'lucide-react';
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
<<<<<<< HEAD
      title: 'AI Consulting & Strategy',
      description: 'Comprehensive AI strategy development, implementation planning, and digital transformation consulting for enterprise organizations.',
      icon: '🧠',
      price: '$2,500/month',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Roadmap',
        'Change Management',
        'ROI Analysis',
        'Executive Training'
      ],
      benefits: [
        'Accelerate AI adoption by 300%',
        'Reduce implementation risks by 60%',
        'Achieve 400% ROI within 12 months',
        'Future-proof your technology stack'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Consulting',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Cloud AI', 'Edge Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent decision-making systems.',
      icon: '🤖',
      price: '$1,500/month',
      features: [
        'Custom ML Model Development',
        'Data Preprocessing & Cleaning',
        'Model Training & Optimization',
        'Real-time Inference',
        'Model Monitoring & Maintenance',
        'A/B Testing Framework'
      ],
      benefits: [
        'Improve accuracy by 40-80%',
        'Reduce manual work by 70%',
        'Enable real-time predictions',
        'Scale with your business growth'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      icon: '💬',
      price: '$1,200/month',
      features: [
        'Text Classification & Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Chatbot Development'
      ],
      benefits: [
        'Process 10,000+ documents/hour',
        'Improve customer satisfaction by 50%',
        'Reduce response time by 80%',
        'Enable multilingual operations'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'NLP',
      technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for object detection, facial recognition, quality control, and automated inspection.',
      icon: '👁️',
      price: '$1,800/month',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition Systems',
        'Image Classification',
        'Video Analysis',
        'Quality Control Automation',
        'Real-time Processing'
      ],
      benefits: [
        'Reduce inspection time by 90%',
        'Improve accuracy to 99.5%',
        'Enable 24/7 monitoring',
        'Reduce human error by 95%'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch', 'CUDA'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive modeling for forecasting, risk assessment, demand planning, and business intelligence.',
      icon: '📊',
      price: '$1,600/month',
      features: [
        'Demand Forecasting',
        'Risk Assessment Models',
        'Customer Lifetime Value',
        'Churn Prediction',
        'Sales Forecasting',
        'Anomaly Detection'
      ],
      benefits: [
        'Improve forecast accuracy by 60%',
        'Reduce inventory costs by 25%',
        'Increase revenue by 30%',
        'Minimize business risks'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Analytics',
      technologies: ['Python', 'R', 'Apache Spark', 'Tableau', 'Power BI', 'Jupyter'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Automation Suite',
      description: 'Intelligent process automation with RPA, workflow optimization, and decision-making capabilities.',
      icon: '⚙️',
      price: '$1,400/month',
      features: [
        'Process Discovery & Mapping',
        'RPA Implementation',
        'Workflow Optimization',
        'Decision Automation',
        'Exception Handling',
        'Performance Monitoring'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Free up staff for strategic work'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'Workflow Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI for customer service, sales support, and internal operations.',
      icon: '🤖',
      price: '$800/month',
      features: [
        'Multi-channel Deployment',
        'Intent Recognition',
        'Context Management',
        'Human Handoff',
        'Analytics & Reporting',
        'Custom Integrations'
      ],
      benefits: [
        'Handle 80% of customer queries',
        'Reduce response time to seconds',
        'Available 24/7/365',
        'Improve customer satisfaction'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Conversational AI',
      technologies: ['Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'OpenAI GPT', 'Webhooks', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Data Pipeline & ETL',
      description: 'Intelligent data processing, cleaning, and transformation pipelines for enterprise data management.',
      icon: '🔄',
      price: '$1,100/month',
      features: [
        'Data Ingestion & Processing',
        'Data Quality Management',
        'Real-time Streaming',
        'Data Transformation',
        'Schema Evolution',
        'Data Lineage Tracking'
      ],
      benefits: [
        'Process 1M+ records/hour',
        'Improve data quality by 95%',
        'Reduce processing time by 80%',
        'Enable real-time analytics'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Data Engineering',
      technologies: ['Apache Kafka', 'Apache Airflow', 'Apache Spark', 'Python', 'SQL', 'Cloud Storage'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Security & Fraud Detection',
      description: 'Advanced security solutions with AI-powered threat detection, fraud prevention, and risk management.',
      icon: '🛡️',
      price: '$2,200/month',
      features: [
        'Threat Detection & Analysis',
        'Fraud Prevention',
        'Anomaly Detection',
        'Risk Scoring',
        'Real-time Monitoring',
        'Incident Response'
      ],
      benefits: [
        'Detect 99.9% of threats',
        'Reduce false positives by 80%',
        'Prevent fraud losses by 90%',
        'Enable proactive security'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Security',
      technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'Log Analysis', 'Behavioral Analytics', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, products, and services.',
      icon: '🎯',
      price: '$1,300/month',
      features: [
        'Collaborative Filtering',
        'Content-based Filtering',
        'Hybrid Approaches',
        'Real-time Recommendations',
        'A/B Testing',
        'Performance Analytics'
      ],
      benefits: [
        'Increase sales by 25%',
        'Improve user engagement by 40%',
        'Reduce bounce rate by 30%',
        'Personalize user experience'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Recommendation Systems',
      technologies: ['Python', 'Apache Spark', 'TensorFlow', 'Redis', 'PostgreSQL', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Voice & Speech Solutions',
      description: 'Advanced speech recognition, text-to-speech, and voice analytics for customer service and accessibility.',
      icon: '🎤',
      price: '$1,000/month',
      features: [
        'Speech-to-Text',
        'Text-to-Speech',
        'Voice Analytics',
        'Speaker Identification',
        'Emotion Detection',
        'Multi-language Support'
      ],
      benefits: [
        'Improve accessibility by 100%',
        'Reduce call handling time by 50%',
        'Enable voice automation',
        'Enhance customer experience'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Speech AI',
      technologies: ['Google Speech API', 'Amazon Polly', 'Azure Cognitive Services', 'OpenAI Whisper', 'WebRTC', 'Voice SDKs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Edge Computing Solutions',
      description: 'Deploy AI models at the edge for real-time processing, reduced latency, and offline capabilities.',
      icon: '⚡',
      price: '$1,700/month',
      features: [
        'Edge Model Deployment',
        'Real-time Inference',
        'Offline Capabilities',
        'Model Optimization',
        'Edge Analytics',
        'Device Management'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Enable offline operations',
        'Reduce bandwidth costs by 70%',
        'Improve data privacy'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Edge AI',
      technologies: ['TensorFlow Lite', 'ONNX', 'OpenVINO', 'NVIDIA Jetson', 'Raspberry Pi', 'Edge Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // NEW ADVANCED AI SERVICES
    {
      title: 'AI-Powered Voice Cloning & Synthesis',
      description: 'Advanced voice synthesis technology for creating realistic voice clones and personalized speech systems.',
      icon: '🎤',
      price: 'Starting at $2,500/month',
      features: ['Voice cloning', 'Text-to-speech synthesis', 'Voice conversion', 'Emotion control', 'Multi-language support'],
      benefits: ['Create personalized voice assistants', 'Improve accessibility', 'Enhance user experience'],
      marketPrice: '$4,000-12,000/month',
      category: 'Voice AI',
      technologies: ['Tacotron', 'WaveNet', 'MelGAN', 'Real-time Voice Cloning', 'Custom Neural Networks']
    },
    {
      title: 'AI-Powered 3D Model Generation',
      description: 'Intelligent 3D model creation and optimization for gaming, VR, and architectural visualization.',
      icon: '🎮',
      price: 'Starting at $3,500/month',
      features: ['3D model generation', 'Texture synthesis', 'Animation creation', 'LOD optimization', 'VR/AR integration'],
      benefits: ['Accelerate 3D content creation', 'Reduce production costs', 'Improve visual quality'],
      marketPrice: '$6,000-18,000/month',
      category: '3D AI',
      technologies: ['NeRF', '3D GANs', 'Blender API', 'Unity Integration', 'Custom 3D Models']
    },
    {
      title: 'AI-Powered Music Composition',
      description: 'Intelligent music generation and composition with style transfer and emotional analysis.',
      icon: '🎵',
      price: 'Starting at $1,800/month',
      features: ['Music composition', 'Style transfer', 'Emotional analysis', 'Instrument synthesis', 'Lyrics generation'],
      benefits: ['Create original music', 'Reduce composition time', 'Explore new musical styles'],
      marketPrice: '$3,000-8,000/month',
      category: 'Creative AI',
      technologies: ['MuseNet', 'Jukebox', 'Magenta', 'MIDI Processing', 'Custom Music Models']
    },
    {
      title: 'AI-Powered Video Generation',
      description: 'Advanced video creation and editing using AI for content production and marketing.',
      icon: '🎬',
      price: 'Starting at $4,500/month',
      features: ['Video generation', 'Scene synthesis', 'Motion transfer', 'Style transfer', 'Automated editing'],
      benefits: ['Create professional videos', 'Reduce production time', 'Lower video production costs'],
      marketPrice: '$7,500-20,000/month',
      category: 'Video AI',
      technologies: ['DALL-E Video', 'Runway ML', 'Stable Video Diffusion', 'OpenCV', 'Custom Video Models']
    },
    {
      title: 'AI-Powered Code Generation',
      description: 'Intelligent code generation and completion for multiple programming languages and frameworks.',
      icon: '💻',
      price: 'Starting at $2,200/month',
      features: ['Code generation', 'Bug fixing', 'Code optimization', 'Documentation generation', 'Multi-language support'],
      benefits: ['Accelerate development', 'Reduce coding errors', 'Improve code quality'],
      marketPrice: '$3,500-10,000/month',
      category: 'Development AI',
      technologies: ['GitHub Copilot', 'CodeT5', 'CodeBERT', 'Custom Code Models', 'IDE Integration']
    },
    {
      title: 'AI-Powered Game Development',
      description: 'Intelligent game asset generation, level design, and NPC behavior creation.',
      icon: '🎮',
      price: 'Starting at $3,000/month',
      features: ['Asset generation', 'Level design', 'NPC behavior', 'Procedural content', 'Game balancing'],
      benefits: ['Accelerate game development', 'Create unique content', 'Improve player experience'],
      marketPrice: '$5,000-15,000/month',
      category: 'Gaming AI',
      technologies: ['Unity ML-Agents', 'Unreal Engine AI', 'Procedural Generation', 'Custom Game AI', 'Reinforcement Learning']
    },
    {
      title: 'AI-Powered Fashion Design',
      description: 'Intelligent fashion design and trend prediction with virtual try-on capabilities.',
      icon: '👗',
      price: 'Starting at $2,800/month',
      features: ['Fashion design', 'Trend prediction', 'Virtual try-on', 'Color matching', 'Size optimization'],
      benefits: ['Accelerate design process', 'Predict fashion trends', 'Improve customer experience'],
      marketPrice: '$4,500-12,000/month',
      category: 'Fashion AI',
      technologies: ['FashionGAN', 'Virtual Try-On', 'Trend Analysis', 'Computer Vision', 'Custom Fashion Models']
    },
    {
      title: 'AI-Powered Interior Design',
      description: 'Intelligent interior design and space optimization with virtual room planning.',
      icon: '🏠',
      price: 'Starting at $2,500/month',
      features: ['Room design', 'Furniture placement', 'Color schemes', 'Space optimization', '3D visualization'],
      benefits: ['Improve space utilization', 'Accelerate design process', 'Enhance customer satisfaction'],
      marketPrice: '$4,000-10,000/month',
      category: 'Design AI',
      technologies: ['3D Reconstruction', 'Interior Design AI', 'Space Planning', 'Custom Design Models', 'VR Integration']
    },
    {
      title: 'AI-Powered Language Learning',
      description: 'Personalized language learning with adaptive curriculum and pronunciation analysis.',
      icon: '🗣️',
      price: 'Starting at $1,500/month',
      features: ['Adaptive learning', 'Pronunciation analysis', 'Conversation practice', 'Progress tracking', 'Multi-language support'],
      benefits: ['Accelerate language learning', 'Personalize education', 'Improve retention rates'],
      marketPrice: '$2,500-6,000/month',
      category: 'Education AI',
      technologies: ['Speech Recognition', 'NLP', 'Adaptive Learning', 'Custom Language Models', 'Mobile Integration']
    },
    {
      title: 'AI-Powered Mental Health Assistant',
      description: 'Intelligent mental health monitoring and support with mood analysis and intervention recommendations.',
      icon: '🧠',
      price: 'Starting at $3,200/month',
      features: ['Mood analysis', 'Crisis detection', 'Intervention recommendations', 'Progress tracking', 'Privacy protection'],
      benefits: ['Improve mental health outcomes', 'Provide 24/7 support', 'Reduce healthcare costs'],
      marketPrice: '$5,000-15,000/month',
      category: 'Healthcare AI',
      technologies: ['Sentiment Analysis', 'NLP', 'Privacy-Preserving ML', 'Custom Health Models', 'HIPAA Compliance']
    },
    {
      title: 'AI-Powered Fitness Coaching',
      description: 'Personalized fitness coaching with form analysis and workout optimization.',
      icon: '💪',
      price: 'Starting at $1,200/month',
      features: ['Form analysis', 'Workout optimization', 'Progress tracking', 'Injury prevention', 'Nutrition guidance'],
      benefits: ['Improve workout effectiveness', 'Prevent injuries', 'Personalize fitness plans'],
      marketPrice: '$2,000-5,000/month',
      category: 'Fitness AI',
      technologies: ['Computer Vision', 'Motion Analysis', 'Wearable Integration', 'Custom Fitness Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Sleep Analysis',
      description: 'Intelligent sleep monitoring and optimization with personalized recommendations.',
      icon: '😴',
      price: 'Starting at $800/month',
      features: ['Sleep monitoring', 'Sleep quality analysis', 'Optimization recommendations', 'Sleep disorder detection', 'Progress tracking'],
      benefits: ['Improve sleep quality', 'Identify sleep issues', 'Optimize sleep patterns'],
      marketPrice: '$1,500-4,000/month',
      category: 'Health AI',
      technologies: ['Sleep Analysis', 'Wearable Data', 'Custom Sleep Models', 'Mobile Integration', 'Health APIs']
    },
    {
      title: 'AI-Powered Nutrition Planning',
      description: 'Personalized nutrition planning with meal optimization and dietary analysis.',
      icon: '🥗',
      price: 'Starting at $1,000/month',
      features: ['Meal planning', 'Nutritional analysis', 'Dietary optimization', 'Allergy management', 'Shopping lists'],
      benefits: ['Improve nutrition', 'Simplify meal planning', 'Optimize health outcomes'],
      marketPrice: '$1,800-4,500/month',
      category: 'Health AI',
      technologies: ['Nutrition Analysis', 'Meal Planning AI', 'Custom Diet Models', 'Mobile Apps', 'Health APIs']
    },
    {
      title: 'AI-Powered Pet Care',
      description: 'Intelligent pet health monitoring and care recommendations with behavior analysis.',
      icon: '🐕',
      price: 'Starting at $1,500/month',
      features: ['Health monitoring', 'Behavior analysis', 'Care recommendations', 'Veterinary integration', 'Emergency alerts'],
      benefits: ['Improve pet health', 'Early problem detection', 'Reduce vet costs'],
      marketPrice: '$2,500-6,000/month',
      category: 'Pet AI',
      technologies: ['Computer Vision', 'Pet Health Models', 'IoT Integration', 'Mobile Apps', 'Veterinary APIs']
    },
    {
      title: 'AI-Powered Home Automation',
      description: 'Intelligent home automation with predictive control and energy optimization.',
      icon: '🏡',
      price: 'Starting at $2,000/month',
      features: ['Predictive control', 'Energy optimization', 'Security monitoring', 'Comfort management', 'IoT integration'],
      benefits: ['Reduce energy costs', 'Improve comfort', 'Enhance security'],
      marketPrice: '$3,500-8,000/month',
      category: 'Smart Home AI',
      technologies: ['IoT Integration', 'Predictive Control', 'Energy Management', 'Custom Home Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Travel Planning',
      description: 'Intelligent travel planning with personalized recommendations and real-time optimization.',
      icon: '✈️',
      price: 'Starting at $1,800/month',
      features: ['Trip planning', 'Personalized recommendations', 'Real-time optimization', 'Budget management', 'Travel alerts'],
      benefits: ['Optimize travel experiences', 'Save time planning', 'Reduce travel costs'],
      marketPrice: '$3,000-7,000/month',
      category: 'Travel AI',
      technologies: ['Travel APIs', 'Recommendation Systems', 'Real-time Optimization', 'Custom Travel Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Event Planning',
      description: 'Intelligent event planning and management with automated coordination and optimization.',
      icon: '🎉',
      price: 'Starting at $2,200/month',
      features: ['Event planning', 'Vendor coordination', 'Budget optimization', 'Guest management', 'Timeline automation'],
      benefits: ['Streamline event planning', 'Reduce coordination time', 'Improve event success'],
      marketPrice: '$3,500-9,000/month',
      category: 'Event AI',
      technologies: ['Event Management', 'Coordination AI', 'Custom Event Models', 'Mobile Apps', 'Vendor APIs']
    },
    {
      title: 'AI-Powered Dating Assistant',
      description: 'Intelligent dating assistance with compatibility analysis and conversation coaching.',
      icon: '💕',
      price: 'Starting at $1,200/month',
      features: ['Compatibility analysis', 'Conversation coaching', 'Profile optimization', 'Date planning', 'Safety monitoring'],
      benefits: ['Improve dating success', 'Enhance safety', 'Optimize matches'],
      marketPrice: '$2,000-5,000/month',
      category: 'Social AI',
      technologies: ['Compatibility Analysis', 'NLP', 'Custom Dating Models', 'Mobile Apps', 'Safety APIs']
    },
    {
      title: 'AI-Powered Parenting Assistant',
      description: 'Intelligent parenting support with child development monitoring and activity recommendations.',
      icon: '👶',
      price: 'Starting at $1,500/month',
      features: ['Development monitoring', 'Activity recommendations', 'Safety alerts', 'Progress tracking', 'Expert guidance'],
      benefits: ['Support child development', 'Improve parenting confidence', 'Ensure child safety'],
      marketPrice: '$2,500-6,000/month',
      category: 'Family AI',
      technologies: ['Child Development Models', 'Safety Monitoring', 'Custom Family Models', 'Mobile Apps', 'Expert Systems']
    },
    {
      title: 'AI-Powered Elderly Care',
      description: 'Intelligent elderly care monitoring with health tracking and safety assistance.',
      icon: '👴',
      price: 'Starting at $2,500/month',
      features: ['Health monitoring', 'Safety assistance', 'Medication reminders', 'Emergency alerts', 'Family communication'],
      benefits: ['Improve elderly care', 'Ensure safety', 'Reduce care costs'],
      marketPrice: '$4,000-10,000/month',
      category: 'Elderly Care AI',
      technologies: ['Health Monitoring', 'Safety Systems', 'Custom Care Models', 'IoT Integration', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Accessibility Assistant',
      description: 'Intelligent accessibility support with adaptive interfaces and assistive technology.',
      icon: '♿',
      price: 'Starting at $1,800/month',
      features: ['Adaptive interfaces', 'Voice control', 'Visual assistance', 'Mobility support', 'Communication aids'],
      benefits: ['Improve accessibility', 'Enhance independence', 'Support inclusion'],
      marketPrice: '$3,000-7,000/month',
      category: 'Accessibility AI',
      technologies: ['Accessibility APIs', 'Assistive Technology', 'Custom Accessibility Models', 'Mobile Apps', 'IoT Integration']
    },
    {
      title: 'AI-Powered Environmental Monitoring',
      description: 'Intelligent environmental monitoring with pollution detection and sustainability recommendations.',
      icon: '🌱',
      price: 'Starting at $2,000/month',
      features: ['Pollution monitoring', 'Sustainability analysis', 'Environmental alerts', 'Carbon tracking', 'Green recommendations'],
      benefits: ['Monitor environmental impact', 'Improve sustainability', 'Reduce carbon footprint'],
      marketPrice: '$3,500-8,000/month',
      category: 'Environmental AI',
      technologies: ['Environmental Sensors', 'Pollution Detection', 'Custom Environmental Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Wildlife Conservation',
      description: 'Intelligent wildlife monitoring and conservation with species identification and behavior analysis.',
      icon: '🦁',
      price: 'Starting at $3,500/month',
      features: ['Species identification', 'Behavior analysis', 'Population monitoring', 'Threat detection', 'Conservation planning'],
      benefits: ['Protect wildlife', 'Monitor populations', 'Prevent poaching'],
      marketPrice: '$6,000-15,000/month',
      category: 'Conservation AI',
      technologies: ['Computer Vision', 'Wildlife Detection', 'Custom Conservation Models', 'Satellite Data', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Disaster Response',
      description: 'Intelligent disaster prediction and response coordination with real-time monitoring.',
      icon: '🚨',
      price: 'Starting at $5,000/month',
      features: ['Disaster prediction', 'Response coordination', 'Resource optimization', 'Evacuation planning', 'Damage assessment'],
      benefits: ['Save lives', 'Reduce damage', 'Improve response time'],
      marketPrice: '$8,000-20,000/month',
      category: 'Emergency AI',
      technologies: ['Disaster Prediction', 'Response Coordination', 'Custom Emergency Models', 'Satellite Data', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Urban Planning',
      description: 'Intelligent urban planning with traffic optimization and infrastructure analysis.',
      icon: '🏙️',
      price: 'Starting at $4,500/month',
      features: ['Traffic optimization', 'Infrastructure analysis', 'Population modeling', 'Resource planning', 'Sustainability analysis'],
      benefits: ['Improve city efficiency', 'Reduce traffic congestion', 'Optimize resource use'],
      marketPrice: '$7,500-18,000/month',
      category: 'Urban AI',
      technologies: ['Traffic Analysis', 'Infrastructure Modeling', 'Custom Urban Models', 'Satellite Data', 'IoT Integration']
    },
    {
      title: 'AI-Powered Agriculture Optimization',
      description: 'Intelligent agricultural optimization with crop monitoring and yield prediction.',
      icon: '🌾',
      price: 'Starting at $3,000/month',
      features: ['Crop monitoring', 'Yield prediction', 'Pest detection', 'Irrigation optimization', 'Soil analysis'],
      benefits: ['Increase crop yields', 'Reduce resource use', 'Improve sustainability'],
      marketPrice: '$5,000-12,000/month',
      category: 'Agriculture AI',
      technologies: ['Satellite Imagery', 'IoT Sensors', 'Custom Agriculture Models', 'Drone Data', 'Weather APIs']
    },
    {
      title: 'AI-Powered Water Management',
      description: 'Intelligent water resource management with quality monitoring and distribution optimization.',
      icon: '💧',
      price: 'Starting at $2,800/month',
      features: ['Water quality monitoring', 'Distribution optimization', 'Leak detection', 'Usage analysis', 'Treatment optimization'],
      benefits: ['Improve water quality', 'Reduce waste', 'Optimize distribution'],
      marketPrice: '$4,500-11,000/month',
      category: 'Water AI',
      technologies: ['Water Quality Sensors', 'Distribution Networks', 'Custom Water Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Waste Management',
      description: 'Intelligent waste management with collection optimization and recycling analysis.',
      icon: '♻️',
      price: 'Starting at $2,200/month',
      features: ['Collection optimization', 'Recycling analysis', 'Waste sorting', 'Route planning', 'Sustainability tracking'],
      benefits: ['Reduce waste', 'Improve recycling', 'Optimize collection'],
      marketPrice: '$3,500-8,000/month',
      category: 'Waste AI',
      technologies: ['Waste Sensors', 'Route Optimization', 'Custom Waste Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Energy Grid Management',
      description: 'Intelligent energy grid optimization with demand prediction and renewable integration.',
      icon: '⚡',
      price: 'Starting at $4,000/month',
      features: ['Demand prediction', 'Grid optimization', 'Renewable integration', 'Load balancing', 'Outage prevention'],
      benefits: ['Improve grid efficiency', 'Integrate renewables', 'Prevent outages'],
      marketPrice: '$6,500-16,000/month',
      category: 'Energy AI',
      technologies: ['Grid Data', 'Demand Forecasting', 'Custom Energy Models', 'IoT Sensors', 'Renewable APIs']
    },
    {
      title: 'AI-Powered Smart City Management',
      description: 'Comprehensive smart city management with integrated AI services and citizen engagement.',
      icon: '🏛️',
      price: 'Starting at $8,000/month',
      features: ['Integrated services', 'Citizen engagement', 'Resource optimization', 'Service delivery', 'Data analytics'],
      benefits: ['Improve city services', 'Enhance citizen experience', 'Optimize resources'],
      marketPrice: '$15,000-40,000/month',
      category: 'Smart City AI',
      technologies: ['City Data Integration', 'Citizen Services', 'Custom City Models', 'IoT Networks', 'Analytics Platforms']
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation. Enterprise-grade AI solutions starting at $800/month." />
        <meta name="keywords" content="ai services, machine learning, nlp, computer vision, ai consulting, automation, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform your business operations and drive innovation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$800</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
=======
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.',
      icon: Brain,
      price: 2500,
      period: 'month',
      features: [
        'Custom Model Development',
        'Predictive Analytics',
        'Pattern Recognition',
        'Model Training & Optimization',
        'Real-time Inference',
        'A/B Testing',
        'Performance Monitoring',
        'Continuous Learning'
      ],
      category: 'Core AI',
      popular: true,
      savings: '$30,000/year vs ML engineers'
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      icon: MessageCircle,
      price: 1800,
      period: 'month',
      features: [
        'Text Analysis & Classification',
        'Sentiment Analysis',
        'Language Translation',
        'Chatbot Development',
        'Document Processing',
        'Voice Recognition',
        'Content Generation',
        'Language Modeling'
      ],
      category: 'Core AI',
      popular: true,
      savings: '$20,000/year vs NLP specialists'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual understanding.',
      icon: Eye,
      price: 2200,
      period: 'month',
      features: [
        'Object Detection & Recognition',
        'Image Classification',
        'Facial Recognition',
        'Video Analysis',
        'Medical Imaging',
        'Quality Inspection',
        'Augmented Reality',
        'Real-time Processing'
      ],
      category: 'Core AI',
      savings: '$25,000/year vs CV engineers'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions that learn and adapt to optimize business processes.',
      icon: Workflow,
      price: 1500,
      period: 'month',
      features: [
        'Process Discovery',
        'Workflow Automation',
        'Decision Automation',
        'Exception Handling',
        'Process Optimization',
        'ROI Tracking',
        'Change Management',
        'Continuous Improvement'
      ],
      category: 'Automation',
      popular: true,
      savings: '$18,000/year vs process consultants'
    },
    {
      id: 'ai-analytics',
      name: 'AI-Powered Analytics',
      description: 'Advanced analytics platform with AI insights, predictions, and automated reporting.',
      icon: BarChart,
      price: 1999,
      period: 'month',
      features: [
        'Predictive Analytics',
        'Anomaly Detection',
        'Trend Analysis',
        'Automated Insights',
        'Custom Dashboards',
        'Real-time Alerts',
        'Data Visualization',
        'Performance Metrics'
      ],
      category: 'Analytics',
      savings: '$24,000/year vs data scientists'
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions.',
      icon: Bot,
      price: 1200,
      period: 'month',
      features: [
        'Natural Conversations',
        'Context Understanding',
        'Multi-language Support',
        'Integration APIs',
        'Learning Capabilities',
        'Human Handoff',
        'Analytics & Insights',
        'Custom Training'
      ],
      category: 'Conversational AI',
      popular: true,
      savings: '$15,000/year vs customer service staff'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, design, and multimedia generation.',
      icon: FileText,
      price: 899,
      period: 'month',
      features: [
        'Text Generation',
        'Image Creation',
        'Video Production',
        'Audio Generation',
        'Content Optimization',
        'Brand Voice Training',
        'Multi-language Support',
        'Quality Control'
      ],
      category: 'Content AI',
      savings: '$12,000/year vs content creators'
    },
    {
      id: 'ai-recommendation',
      name: 'AI Recommendation Systems',
      description: 'Personalized recommendation engines that increase engagement and drive conversions.',
      icon: Target,
      price: 1600,
      period: 'month',
      features: [
        'Personalized Recommendations',
        'Collaborative Filtering',
        'Content-based Filtering',
        'Real-time Updates',
        'A/B Testing',
        'Performance Tracking',
        'Multi-channel Support',
        'Custom Algorithms'
      ],
      category: 'Personalization',
      savings: '$20,000/year vs recommendation specialists'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced fraud detection systems that identify suspicious activities in real-time.',
      icon: Shield,
      price: 2100,
      period: 'month',
      features: [
        'Real-time Detection',
        'Pattern Recognition',
        'Risk Scoring',
        'False Positive Reduction',
        'Adaptive Learning',
        'Compliance Reporting',
        'Multi-channel Monitoring',
        'Alert Management'
      ],
      category: 'Security AI',
      savings: '$25,000/year vs fraud analysts'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-powered demand forecasting and inventory management.',
      icon: Layers,
      price: 2800,
      period: 'month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Optimization',
        'Supplier Analysis',
        'Risk Assessment',
        'Cost Optimization',
        'Real-time Monitoring',
        'Predictive Maintenance'
      ],
      category: 'Operations AI',
      savings: '$35,000/year vs supply chain consultants'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis, treatment planning, and patient care optimization.',
      icon: Activity,
      price: 3500,
      period: 'month',
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Treatment Planning',
        'Drug Discovery',
        'Patient Monitoring',
        'Clinical Decision Support',
        'Compliance Management',
        'Research Analytics'
      ],
      category: 'Healthcare AI',
      savings: '$50,000/year vs medical specialists'
    },
    {
      id: 'ai-finance',
      name: 'AI Financial Services',
      description: 'AI-powered financial solutions for trading, risk management, and customer service.',
      icon: DollarSign,
      price: 3200,
      period: 'month',
      features: [
        'Algorithmic Trading',
        'Risk Assessment',
        'Credit Scoring',
        'Fraud Prevention',
        'Customer Insights',
        'Regulatory Compliance',
        'Portfolio Optimization',
        'Market Analysis'
      ],
      category: 'FinTech AI',
      savings: '$40,000/year vs financial analysts'
    }
  ];

  const categories = [
    { name: 'Core AI', icon: Brain, count: 3 },
    { name: 'Automation', icon: Workflow, count: 1 },
    { name: 'Analytics', icon: BarChart, count: 1 },
    { name: 'Conversational AI', icon: Bot, count: 1 },
    { name: 'Content AI', icon: FileText, count: 1 },
    { name: 'Personalization', icon: Target, count: 1 },
    { name: 'Security AI', icon: Shield, count: 1 },
    { name: 'Operations AI', icon: Layers, count: 1 },
    { name: 'Healthcare AI', icon: Activity, count: 1 },
    { name: 'FinTech AI', icon: DollarSign, count: 1 }
  ];

  const pricingPlans = [
    {
      name: 'AI Starter',
      price: 999,
      period: 'month',
      description: 'Essential AI services for small businesses',
      features: [
        'Basic ML Models',
        'Simple Chatbot',
        'Content Generation',
        'Basic Analytics',
        'Email Support',
        'Standard Templates'
      ],
      popular: false
    },
    {
      name: 'AI Professional',
      price: 2499,
      period: 'month',
      description: 'Advanced AI solutions for growing businesses',
      features: [
        'Custom ML Models',
        'Advanced NLP',
        'Computer Vision',
        'Process Automation',
        'AI Analytics',
        'Priority Support',
        'Custom Training',
        'API Access'
      ],
      popular: true
    },
    {
      name: 'AI Enterprise',
      price: 4999,
      period: 'month',
      description: 'Full-scale AI solutions for large organizations',
      features: [
        'All Professional Features',
        'Custom AI Development',
        'Dedicated AI Team',
        'Advanced Security',
        'Compliance Management',
        'SLA Guarantee',
        'Strategic Consulting',
        'White-label Solutions'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence. From machine learning to automation, we deliver AI solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Process Automation</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300 text-sm">Client Savings</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Monitoring</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
=======
      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            AI Service Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <category.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} services</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI services today and transform your business operations.
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
=======
      {/* AI Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  {service.savings && (
                    <p className="text-green-400 text-sm mt-1">{service.savings}</p>
                  )}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full cyber-button text-center">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your AI Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge AI</h3>
              <p className="text-gray-300">Latest AI technologies and algorithms for maximum performance and accuracy.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation and deployment of AI solutions to start seeing results fast.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Average 300% ROI with measurable business impact and cost savings.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all AI solutions and data.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">World-class AI engineers and data scientists with proven track records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts assess your business and recommend the best AI solutions for maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Assessment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free AI assessment • ✓ Custom recommendations • ✓ No obligation</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-1468
    </div>
  );
};

export default AIServicesPage;
