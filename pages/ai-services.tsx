import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  Search, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin,
  Zap,
  Users,
  Shield,
  Gamepad2,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  FlaskConical
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};
const aiServices = [
  // AI Automation & Process Intelligence
  {
    title: 'AI-Powered Process Automation',
    description: 'Intelligent automation platform that learns and optimizes business processes using advanced AI algorithms.',
    icon: Settings,
    features: ['Process Mining', 'Intelligent Automation', 'Workflow Optimization', 'Exception Handling', 'Performance Analytics', 'ROI Tracking'],
    pricing: '$5,000 - $25,000/month',
    category: 'AI Automation',
    popular: true,
    benefits: ['80% Process Efficiency', '60% Cost Reduction', 'Automated Decision Making', 'Scalable Operations', 'Real-time Optimization'],
    marketPrice: '$8,000 - $40,000/month',
    link: 'https://ziontechgroup.com/ai-process-automation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    features: ['Custom Model Development', 'Data Preprocessing', 'Model Deployment', 'A/B Testing', 'Real-time APIs', 'Model Versioning'],
    pricing: '$3,500 - $15,000/month',
    category: 'Machine Learning',
    popular: true,
    benefits: ['40-60% Accuracy Improvement', '80% Time Reduction', '25-35% Better Outcomes', 'Automated Decision Making'],
    marketPrice: '$5,000 - $20,000/month',
    link: 'https://ziontechgroup.com/machine-learning-models',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics', 'OCR Processing', 'Quality Control'],
    pricing: '$2,800 - $12,000/month',
    category: 'Computer Vision',
    popular: true,
    benefits: ['95%+ Accuracy', '90% Time Reduction', '24/7 Monitoring', '50% Cost Savings'],
    marketPrice: '$4,000 - $18,000/month',
    link: 'https://ziontechgroup.com/computer-vision-solutions',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    features: ['Text Analysis', 'Sentiment Detection', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Content Moderation'],
    pricing: '$2,200 - $10,000/month',
    category: 'NLP',
    popular: true,
    benefits: ['10,000+ Documents/Hour', '35% Customer Satisfaction', '70% Cost Reduction', 'Multilingual Support'],
    marketPrice: '$3,500 - $15,000/month',
    link: 'https://ziontechgroup.com/natural-language-processing',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Intelligent data analysis with predictive insights, anomaly detection, and automated reporting.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Anomaly Detection', 'Automated Reporting', 'Data Visualization', 'Pattern Recognition', 'Trend Analysis'],
    pricing: '$2,500 - $12,000/month',
    category: 'Analytics',
    popular: true,
    benefits: ['60% Faster Decisions', '3x Opportunity Identification', '80% False Positive Reduction', '40% Forecast Accuracy'],
    marketPrice: '$4,000 - $18,000/month',
    link: 'https://ziontechgroup.com/ai-powered-analytics',
    contact: '+1 302 464 0950'
  },

  // Advanced AI & Machine Learning Solutions
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'Intelligent code review platform with automated bug detection, security scanning, and performance optimization suggestions.',
    icon: Code,
    features: ['Automated Code Review', 'Bug Detection', 'Security Scanning', 'Performance Analysis', 'Best Practices', 'Team Collaboration'],
    pricing: '$2,000 - $10,000/month',
    category: 'AI Development',
    popular: true,
    benefits: ['Faster Development', 'Higher Code Quality', 'Reduced Bugs', 'Security Enhancement', 'Team Productivity'],
    marketPrice: '$3,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-code-review-assistant',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Document Processing',
    description: 'AI-powered document digitization, classification, and data extraction with 99.9% accuracy for any document type.',
    icon: FileText,
    features: ['Document Digitization', 'Smart Classification', 'Data Extraction', 'OCR Technology', 'Workflow Automation', 'Integration APIs'],
    pricing: '$1,500 - $8,000/month',
    category: 'AI Automation',
    popular: true,
    benefits: ['99.9% Accuracy', 'Time Savings', 'Cost Reduction', 'Automated Workflows', 'Better Data Quality'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/smart-document-processing',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Predictive Maintenance AI',
    description: 'AI-driven predictive maintenance for industrial equipment with real-time monitoring and failure prediction.',
    icon: Settings,
    features: ['Predictive Analytics', 'Real-time Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration'],
    pricing: '$5,000 - $30,000/month',
    category: 'AI Industrial',
    popular: true,
    benefits: ['Reduced Downtime', 'Cost Savings', 'Extended Equipment Life', 'Optimized Maintenance', 'Risk Mitigation'],
    marketPrice: '$8,000 - $50,000/month',
    link: 'https://ziontechgroup.com/predictive-maintenance-ai',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Voice Analytics Platform',
    description: 'Advanced voice analysis for customer service, sales calls, and communication optimization with sentiment analysis.',
    icon: Mic,
    features: ['Voice Analysis', 'Sentiment Detection', 'Call Optimization', 'Performance Metrics', 'Real-time Insights', 'Team Training'],
    pricing: '$3,000 - $15,000/month',
    category: 'AI Communication',
    popular: true,
    benefits: ['Better Customer Experience', 'Improved Sales', 'Team Performance', 'Data-Driven Insights', 'Cost Optimization'],
    marketPrice: '$5,000 - $25,000/month',
    link: 'https://ziontechgroup.com/ai-voice-analytics-platform',
    contact: '+1 302 464 0950'
  },

  // Conversational AI & Chatbots
  {
    title: 'Advanced Conversational AI',
    description: 'Next-generation conversational AI with context awareness, emotional intelligence, and multi-modal interactions.',
    icon: Bot,
    features: ['Context Awareness', 'Emotional Intelligence', 'Multi-modal Interaction', 'Voice & Text', 'Integration APIs', 'Analytics'],
    pricing: '$4,000 - $20,000/month',
    category: 'Conversational AI',
    popular: true,
    benefits: ['Natural Conversations', 'Better User Experience', 'Higher Engagement', 'Reduced Support Costs', '24/7 Availability'],
    marketPrice: '$6,000 - $30,000/month',
    link: 'https://ziontechgroup.com/advanced-conversational-ai',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Customer Support System',
    description: 'Comprehensive AI-powered customer support with intelligent routing, sentiment analysis, and automated resolution.',
    icon: MessageSquare,
    features: ['Intelligent Routing', 'Sentiment Analysis', 'Automated Resolution', 'Knowledge Base', 'Escalation Management', 'Analytics'],
    pricing: '$2,500 - $12,000/month',
    category: 'Customer Support AI',
    popular: true,
    benefits: ['Faster Resolution', 'Better Customer Satisfaction', 'Cost Reduction', '24/7 Support', 'Scalable Operations'],
    marketPrice: '$4,000 - $18,000/month',
    link: 'https://ziontechgroup.com/ai-customer-support-system',
    contact: '+1 302 464 0950'
  },

  // Content AI & Creative Solutions
  {
    title: 'AI Content Generation Suite',
    description: 'Comprehensive AI content creation platform with text, image, video, and audio generation capabilities.',
    icon: FileText,
    features: ['Text Generation', 'Image Creation', 'Video Production', 'Audio Generation', 'Content Optimization', 'Brand Consistency'],
    pricing: '$3,000 - $15,000/month',
    category: 'Content AI',
    popular: true,
    benefits: ['10x Content Output', 'Cost Reduction', 'Consistent Quality', 'Faster Time-to-Market', 'Creative Enhancement'],
    marketPrice: '$5,000 - $25,000/month',
    link: 'https://ziontechgroup.com/ai-content-generation-suite',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Video Production Platform',
    description: 'Automated video creation and editing platform with AI-powered scripting, voice synthesis, and visual effects.',
    icon: Video,
    features: ['Automated Scripting', 'Voice Synthesis', 'Visual Effects', 'Video Editing', 'Brand Integration', 'Multi-format Export'],
    pricing: '$4,000 - $20,000/month',
    category: 'Video AI',
    popular: true,
    benefits: ['Faster Production', 'Cost Reduction', 'Professional Quality', 'Scalable Creation', 'Brand Consistency'],
    marketPrice: '$6,000 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-video-production-platform',
    contact: '+1 302 464 0950'
  },

  // Healthcare AI Solutions
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'Advanced AI system for medical diagnosis support with image analysis, symptom assessment, and treatment recommendations.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Symptom Assessment', 'Treatment Recommendations', 'Drug Interaction Check', 'Patient Monitoring', 'Compliance'],
    pricing: '$10,000 - $50,000/month',
    category: 'Healthcare AI',
    popular: true,
    benefits: ['Improved Diagnosis', 'Faster Treatment', 'Reduced Errors', 'Better Patient Outcomes', 'Cost Efficiency'],
    marketPrice: '$15,000 - $75,000/month',
    link: 'https://ziontechgroup.com/ai-medical-diagnosis-assistant',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'AI-powered drug discovery platform with molecular analysis, compound screening, and clinical trial optimization.',
    icon: FlaskConical,
    features: ['Molecular Analysis', 'Compound Screening', 'Clinical Trial Optimization', 'Side Effect Prediction', 'Drug Repurposing', 'Analytics'],
    pricing: '$25,000 - $100,000/month',
    category: 'Pharmaceutical AI',
    popular: true,
    benefits: ['Faster Discovery', 'Cost Reduction', 'Higher Success Rate', 'Better Safety', 'Innovation'],
    marketPrice: '$40,000 - $150,000/month',
    link: 'https://ziontechgroup.com/ai-drug-discovery-platform',
    contact: '+1 302 464 0950'
  },

  // Financial AI Solutions
  {
    title: 'AI Trading Algorithm Platform',
    description: 'Advanced AI trading algorithms with real-time market analysis, risk management, and automated trading strategies.',
    icon: TrendingUp,
    features: ['Real-time Analysis', 'Risk Management', 'Automated Trading', 'Portfolio Optimization', 'Market Prediction', 'Compliance'],
    pricing: '$8,000 - $40,000/month',
    category: 'Financial AI',
    popular: true,
    benefits: ['Higher Returns', 'Risk Reduction', '24/7 Trading', 'Emotion-free Decisions', 'Scalable Strategies'],
    marketPrice: '$12,000 - $60,000/month',
    link: 'https://ziontechgroup.com/ai-trading-algorithm-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Fraud Detection System',
    description: 'Advanced AI fraud detection with real-time monitoring, behavioral analysis, and automated prevention systems.',
    icon: Shield,
    features: ['Real-time Monitoring', 'Behavioral Analysis', 'Pattern Recognition', 'Automated Prevention', 'Risk Scoring', 'Reporting'],
    pricing: '$5,000 - $25,000/month',
    category: 'Financial Security AI',
    popular: true,
    benefits: ['Real-time Detection', 'Reduced False Positives', 'Cost Savings', 'Better Security', 'Compliance'],
    marketPrice: '$8,000 - $40,000/month',
    link: 'https://ziontechgroup.com/ai-fraud-detection-system',
    contact: '+1 302 464 0950'
  },

  // Autonomous Systems AI
  {
    title: 'Autonomous Vehicle AI',
    description: 'Complete AI system for autonomous vehicles with perception, decision making, and control algorithms.',
    icon: Car,
    features: ['Perception Systems', 'Decision Making', 'Control Algorithms', 'Safety Systems', 'Testing', 'Validation'],
    pricing: '$50,000 - $200,000/month',
    category: 'Autonomous AI',
    popular: true,
    benefits: ['Enhanced Safety', 'Efficiency Improvement', 'Cost Reduction', 'Innovation', 'Future Mobility'],
    marketPrice: '$75,000 - $300,000/month',
    link: 'https://ziontechgroup.com/autonomous-vehicle-ai',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Robotics Control System',
    description: 'Advanced AI control system for industrial and service robots with learning capabilities and adaptive behavior.',
    icon: Bot,
    features: ['Motion Control', 'Learning Algorithms', 'Adaptive Behavior', 'Safety Systems', 'Integration', 'Maintenance'],
    pricing: '$15,000 - $75,000/month',
    category: 'Robotics AI',
    popular: true,
    benefits: ['Improved Efficiency', 'Adaptive Behavior', 'Cost Reduction', 'Scalable Operations', 'Innovation'],
    marketPrice: '$25,000 - $120,000/month',
    link: 'https://ziontechgroup.com/ai-robotics-control-system',
    contact: '+1 302 464 0950'
  },

  // Quantum AI Solutions
  {
    title: 'Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for complex optimization problems and advanced pattern recognition.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization', 'Pattern Recognition', 'Quantum Simulation', 'Hybrid Systems', 'Performance Analysis'],
    pricing: '$20,000 - $100,000/month',
    category: 'Quantum AI',
    popular: true,
    benefits: ['Exponential Speedup', 'Complex Problem Solving', 'Advanced Optimization', 'Future-Proof Technology', 'Competitive Advantage'],
    marketPrice: '$30,000 - $150,000/month',
    link: 'https://ziontechgroup.com/quantum-machine-learning',
    contact: '+1 302 464 0950'
  },

  // Edge AI Solutions
  {
    title: 'Edge AI Processing Platform',
    description: 'Edge computing AI platform with real-time processing, low latency, and offline capabilities for IoT and mobile devices.',
    icon: Wifi,
    features: ['Edge Processing', 'Real-time Analysis', 'Low Latency', 'Offline Capability', 'IoT Integration', 'Scalable Deployment'],
    pricing: '$8,000 - $40,000/month',
    category: 'Edge AI',
    popular: true,
    benefits: ['Ultra-low Latency', 'Real-time Processing', 'Offline Operation', 'Cost Efficiency', 'Scalable Architecture'],
    marketPrice: '$12,000 - $60,000/month',
    link: 'https://ziontechgroup.com/edge-ai-processing-platform',
    contact: '+1 302 464 0950'
  },

  // AI Ethics & Governance
  {
    title: 'AI Ethics & Bias Detection',
    description: 'Comprehensive AI ethics platform with bias detection, fairness monitoring, and responsible AI governance.',
    icon: Shield,
    features: ['Bias Detection', 'Fairness Monitoring', 'Ethics Assessment', 'Compliance Tracking', 'Audit Trails', 'Reporting'],
    pricing: '$5,000 - $25,000/month',
    category: 'AI Ethics',
    popular: true,
    benefits: ['Ethical AI', 'Bias Reduction', 'Compliance', 'Trust Building', 'Risk Mitigation'],
    marketPrice: '$8,000 - $40,000/month',
    link: 'https://ziontechgroup.com/ai-ethics-bias-detection',
    contact: '+1 302 464 0950'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 80+ Cutting-Edge Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover 80+ cutting-edge AI services from Zion Tech Group. Machine learning, computer vision, natural language processing, predictive analytics, and advanced AI solutions." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, predictive analytics, artificial intelligence, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our cutting-edge AI services. 80+ artificial intelligence solutions designed to accelerate innovation and drive growth." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI & Machine Learning
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover 80+ cutting-edge AI services designed to accelerate innovation, automate processes, and drive growth. 
                From machine learning and computer vision to natural language processing and predictive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services, each designed to solve specific business challenges and drive measurable results.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="text-lg font-bold text-green-600">
                        {service.pricing}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">
                        Market Price: {service.marketPrice}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href={service.link}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        Learn More →
                      </Link>
                      <a
                        href={`tel:${service.contact}`}
                        className="text-green-600 hover:text-green-700 font-semibold text-sm"
                      >
                        Call: {service.contact}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our expert team help you leverage cutting-edge AI technology to drive growth and innovation.
                <br className="hidden md:block" />
                <span className="text-purple-200 font-semibold">Get your free consultation today!</span>
              </p>
              <div className="mb-8">
                <p className="text-lg text-purple-100 mb-2">
                  📞 <strong>Call us:</strong> +1 302 464 0950
                </p>
                <p className="text-lg text-purple-100 mb-2">
                  📧 <strong>Email us:</strong> kleber@ziontechgroup.com
                </p>
                <p className="text-lg text-purple-100">
                  📍 <strong>Visit us:</strong> 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

