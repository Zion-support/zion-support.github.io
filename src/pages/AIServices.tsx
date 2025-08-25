<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Zap, Shield, Cloud, Users, TrendingUp, Globe, Lock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';

const aiServices = [
  {
    title: "AI-Powered Business Intelligence",
    description: "Transform raw data into actionable insights with our advanced AI analytics platform.",
    icon: Brain,
    features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your business needs and industry requirements.",
    icon: Cpu,
    features: ["Custom Model Development", "Model Training & Optimization", "API Integration", "Continuous Learning"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for chatbots, content analysis, and language understanding.",
    icon: Zap,
    features: ["Chatbot Development", "Sentiment Analysis", "Text Classification", "Language Translation"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Computer Vision & Image Recognition",
    description: "AI-powered image and video analysis for automation and quality control.",
    icon: Shield,
    features: ["Object Detection", "Image Classification", "Video Analytics", "Quality Control"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "AI Automation & RPA",
    description: "Intelligent automation solutions that streamline business processes.",
    icon: Cloud,
    features: ["Process Automation", "Workflow Optimization", "Smart Document Processing", "Task Automation"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "AI Consulting & Strategy",
    description: "Expert guidance on AI implementation and digital transformation strategies.",
    icon: Users,
    features: ["AI Strategy Planning", "Technology Assessment", "Implementation Roadmap", "Training & Support"],
    color: "from-yellow-500 to-orange-500"
  }
];

const testimonials = [
  {
    content: "Zion's AI solutions transformed our data analytics capabilities. We now have real-time insights that drive our decision-making process.",
    name: "Dr. Sarah Chen",
    role: "Chief Data Officer, TechCorp",
    rating: 5
  },
  {
    content: "The machine learning models they developed for us have improved our prediction accuracy by 40%. Incredible results!",
    name: "Michael Rodriguez",
    role: "VP of Engineering, InnovateLab",
    rating: 5
  },
  {
    content: "Working with Zion's AI team was a game-changer. They understood our business needs and delivered solutions that exceeded expectations.",
    name: "Emily Watson",
    role: "CTO, StartupXYZ",
    rating: 5
  }
];

const stats = [
  { label: "AI Models Deployed", value: "150+", icon: Brain },
  { label: "Success Rate", value: "98%", icon: CheckCircle },
  { label: "Client Satisfaction", value: "4.9/5", icon: Star },
  { label: "ROI Improvement", value: "300%", icon: TrendingUp }
];

export default function AIServices() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="AI & Machine Learning Services - Zion Tech Group" 
        description="Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems."
        keywords="AI, machine learning, artificial intelligence, predictive analytics, NLP, computer vision, automation"
=======
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIServices = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI analytics and predictive modeling.",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"],
      price: "From $2,500/month",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.",
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Chatbot integration"],
      price: "From $1,800/month",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Computer Vision & Image Recognition",
      description: "Computer vision solutions for image and video analysis, object detection, and pattern recognition.",
      features: ["Object detection", "Image classification", "Facial recognition", "Video analysis"],
      price: "From $3,200/month",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics & Forecasting",
      description: "AI-powered predictive analytics for forecasting trends, risks, and opportunities.",
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Anomaly detection"],
      price: "From $2,800/month",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that learn and adapt to optimize business processes.",
      features: ["Process optimization", "Workflow automation", "Decision automation", "Learning algorithms"],
      price: "From $2,200/month",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "AI Chatbot & Virtual Assistants",
      description: "Intelligent chatbots and virtual assistants for customer service and business automation.",
      features: ["Natural conversations", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      price: "From $1,500/month",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize processes for maximum productivity."
    },
    {
      icon: Award,
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimization."
    },
    {
      icon: Globe,
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with cutting-edge AI capabilities."
    },
    {
      icon: Shield,
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on comprehensive AI-powered insights."
    }
  ];

  const stats = [
    { label: "AI Projects Delivered", value: "150+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Cost Reduction", value: "40%", icon: TrendingUp },
    { label: "Efficiency Gain", value: "3x", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="AI & Machine Learning Services - Zion Tech Group"
        description="Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems."
        keywords="AI services, machine learning, artificial intelligence, predictive analytics, NLP, computer vision, Zion Tech Group"
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Brain, 
  Bot, 
  Zap, 
  Shield, 
  Search, 
  Filter,
  Star,
  Clock,
  Award,
  Eye,
  Mic,
  Code,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Play,
  Users,
  CheckCircle,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Target from 'lucide-react/dist/esm/icons/target';
import Palette from 'lucide-react/dist/esm/icons/palette';
import { SEO } from '@/components/SEO';

interface AIService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  link: string;
  icon: React.ReactNode;
  tags: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  expertise: string;
}

const AI_SERVICES: AIService[] = [
  {
    id: "custom-ai-model",
    title: "Custom AI Model Development",
    description: "Tailored machine learning models built specifically for your business needs, from data preprocessing to deployment.",
    category: "Machine Learning",
    price: "$15,000",
    marketPrice: "$25,000",
    features: ["Custom model architecture", "Data preprocessing", "Model training & validation", "API integration", "Performance monitoring"],
    benefits: ["Competitive advantage", "Tailored to your data", "Scalable solution", "ROI optimization"],
    link: "https://ziontechgroup.com/custom-ai-model",
    icon: <Brain className="h-8 w-8 text-zion-cyan" />,
    tags: ["Custom AI", "Machine Learning", "Deep Learning", "Neural Networks"],
    rating: 4.9,
    reviewCount: 67,
    deliveryTime: "8-12 weeks",
    expertise: "Expert Level"
  },
  {
    id: "computer-vision-suite",
    title: "Computer Vision AI Suite",
    description: "Advanced computer vision solutions for object detection, facial recognition, and image analysis across industries.",
    category: "Computer Vision",
    price: "$8,500",
    marketPrice: "$15,000",
    features: ["Object detection", "Facial recognition", "Image segmentation", "Real-time processing", "Multi-platform support"],
    benefits: ["Automate visual tasks", "Improve accuracy", "Reduce manual work", "24/7 operation"],
    link: "https://ziontechgroup.com/computer-vision",
    icon: <Eye className="h-8 w-8 text-zion-purple" />,
    tags: ["Computer Vision", "Image Processing", "Object Detection", "Facial Recognition"],
    rating: 4.8,
    reviewCount: 89,
    deliveryTime: "6-8 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "nlp-chatbot",
    title: "Advanced NLP Chatbot System",
    description: "Intelligent conversational AI with natural language understanding, sentiment analysis, and multi-language support.",
    category: "Natural Language Processing",
    price: "$6,500",
    marketPrice: "$12,000",
    features: ["Natural language understanding", "Sentiment analysis", "Multi-language support", "Context awareness", "Integration APIs"],
    benefits: ["24/7 customer support", "Reduce support costs", "Improve customer satisfaction", "Scalable solution"],
    link: "https://ziontechgroup.com/nlp-chatbot",
    icon: <Bot className="h-8 w-8 text-zion-cyan" />,
    tags: ["NLP", "Chatbot", "Conversational AI", "Sentiment Analysis"],
    rating: 4.7,
    reviewCount: 134,
    deliveryTime: "4-6 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "speech-recognition",
    title: "Enterprise Speech Recognition",
    description: "High-accuracy speech-to-text and text-to-speech systems with noise cancellation and industry-specific terminology.",
    category: "Speech Processing",
    price: "$7,500",
    marketPrice: "$14,000",
    features: ["Speech-to-text", "Text-to-speech", "Noise cancellation", "Industry terminology", "Real-time processing"],
    benefits: ["Improve accessibility", "Automate transcription", "Reduce manual work", "Multi-language support"],
    link: "https://ziontechgroup.com/speech-recognition",
    icon: <Mic className="h-8 w-8 text-zion-purple" />,
    tags: ["Speech Recognition", "Voice Processing", "Transcription", "TTS"],
    rating: 4.8,
    reviewCount: 78,
    deliveryTime: "5-7 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "ai-code-assistant",
    title: "AI-Powered Code Generation",
    description: "Intelligent code generation and optimization tool with support for multiple programming languages and frameworks.",
    category: "AI Development Tools",
    price: "$4,500",
    marketPrice: "$9,000",
    features: ["Multi-language support", "Code optimization", "Bug detection", "Documentation generation", "IDE integration"],
    benefits: ["Faster development", "Reduce bugs", "Improve code quality", "Automate repetitive tasks"],
    link: "https://ziontechgroup.com/ai-code-assistant",
    icon: <Code className="h-8 w-8 text-zion-cyan" />,
    tags: ["Code Generation", "AI Development", "Programming", "Automation"],
    rating: 4.6,
    reviewCount: 156,
    deliveryTime: "3-5 weeks",
    expertise: "Intermediate Level"
  },
  {
    id: "predictive-analytics",
    title: "AI Predictive Analytics Platform",
    description: "Advanced predictive modeling and forecasting system with real-time data processing and actionable insights.",
    category: "Predictive Analytics",
    price: "$9,500",
    marketPrice: "$18,000",
    features: ["Predictive modeling", "Real-time processing", "Data visualization", "Automated insights", "API access"],
    benefits: ["Data-driven decisions", "Predict trends", "Optimize operations", "Competitive advantage"],
    link: "https://ziontechgroup.com/predictive-analytics",
    icon: <BarChart3 className="h-8 w-8 text-zion-purple" />,
    tags: ["Predictive Analytics", "Forecasting", "Data Science", "Business Intelligence"],
    rating: 4.9,
    reviewCount: 92,
    deliveryTime: "6-9 weeks",
    expertise: "Expert Level"
  },
  {
    id: "ai-security",
    title: "AI-Powered Cybersecurity",
    description: "Intelligent threat detection and response system using machine learning to identify and prevent cyber attacks.",
    category: "AI Security",
    price: "$12,000",
    marketPrice: "$22,000",
    features: ["Threat detection", "Behavioral analysis", "Automated response", "Compliance reporting", "Real-time monitoring"],
    benefits: ["Prevent attacks", "Reduce false positives", "Automate security", "Meet compliance"],
    link: "https://ziontechgroup.com/ai-security",
    icon: <Shield className="h-8 w-8 text-zion-cyan" />,
    tags: ["Cybersecurity", "AI Security", "Threat Detection", "Compliance"],
    rating: 4.9,
    reviewCount: 45,
    deliveryTime: "8-10 weeks",
    expertise: "Expert Level"
  },
  {
    id: "ai-automation",
    title: "Intelligent Process Automation",
    description: "AI-driven automation platform that learns and optimizes business processes for maximum efficiency.",
    category: "Process Automation",
    price: "$8,000",
    marketPrice: "$15,000",
    features: ["Process learning", "Workflow optimization", "Integration support", "Performance analytics", "Custom automation"],
    benefits: ["Increase efficiency", "Reduce costs", "Improve accuracy", "Scale operations"],
    link: "https://ziontechgroup.com/ai-automation",
    icon: <Zap className="h-8 w-8 text-zion-purple" />,
    tags: ["Process Automation", "Workflow", "Efficiency", "Optimization"],
    rating: 4.7,
    reviewCount: 112,
    deliveryTime: "5-7 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "ai-recommendation",
    title: "AI Recommendation Engine",
    description: "Personalized recommendation system using machine learning to improve user engagement and conversion rates.",
    category: "Recommendation Systems",
    price: "$6,000",
    marketPrice: "$11,000",
    features: ["Personalized recommendations", "Real-time learning", "Multi-channel support", "A/B testing", "Analytics dashboard"],
    benefits: ["Increase engagement", "Improve conversions", "Personalize experience", "Data insights"],
    link: "https://ziontechgroup.com/ai-recommendations",
    icon: <Target className="h-8 w-8 text-zion-cyan" />,
    tags: ["Recommendations", "Personalization", "Machine Learning", "User Experience"],
    rating: 4.8,
    reviewCount: 89,
    deliveryTime: "4-6 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "ai-data-processing",
    title: "AI Data Processing Pipeline",
    description: "Intelligent data processing and ETL system with automated data cleaning, transformation, and quality assurance.",
    category: "Data Processing",
    price: "$7,000",
    marketPrice: "$13,000",
    features: ["Data cleaning", "ETL automation", "Quality assurance", "Real-time processing", "Scalable architecture"],
    benefits: ["Improve data quality", "Automate processing", "Reduce errors", "Scale efficiently"],
    link: "https://ziontechgroup.com/ai-data-processing",
    icon: <Database className="h-8 w-8 text-zion-purple" />,
    tags: ["Data Processing", "ETL", "Data Quality", "Automation"],
    rating: 4.6,
    reviewCount: 67,
    deliveryTime: "5-7 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "ai-edge-computing",
    title: "AI Edge Computing Solutions",
    description: "Edge AI deployment for real-time processing with optimized models for IoT devices and edge networks.",
    category: "Edge AI",
    price: "$10,000",
    marketPrice: "$19,000",
    features: ["Edge deployment", "Model optimization", "Real-time processing", "IoT integration", "Network optimization"],
    benefits: ["Low latency", "Reduce bandwidth", "Offline operation", "Scalable deployment"],
    link: "https://ziontechgroup.com/ai-edge-computing",
    icon: <Network className="h-8 w-8 text-zion-cyan" />,
    tags: ["Edge Computing", "IoT", "Real-time", "Optimization"],
    rating: 4.8,
    reviewCount: 34,
    deliveryTime: "7-9 weeks",
    expertise: "Expert Level"
  },
  {
    id: "ai-mobile-apps",
    title: "AI-Enhanced Mobile Applications",
    description: "Mobile apps with integrated AI features including image recognition, voice processing, and personalized experiences.",
    category: "Mobile AI",
    price: "$5,500",
    marketPrice: "$10,000",
    features: ["AI integration", "Cross-platform", "Performance optimization", "User experience", "Analytics"],
    benefits: ["Enhanced user experience", "Competitive advantage", "Increased engagement", "Personalization"],
    link: "https://ziontechgroup.com/ai-mobile-apps",
    icon: <Smartphone className="h-8 w-8 text-zion-purple" />,
    tags: ["Mobile AI", "App Development", "User Experience", "Personalization"],
    rating: 4.7,
    reviewCount: 123,
    deliveryTime: "4-6 weeks",
    expertise: "Intermediate Level"
  }
];

const categories = [
  { name: "All AI Services", value: "all", icon: <Brain className="h-4 w-4" /> },
  { name: "Machine Learning", value: "machine learning", icon: <Brain className="h-4 w-4" /> },
  { name: "Computer Vision", value: "computer vision", icon: <Eye className="h-4 w-4" /> },
  { name: "NLP", value: "nlp", icon: <Bot className="h-4 w-4" /> },
  { name: "Speech Processing", value: "speech", icon: <Mic className="h-4 w-4" /> },
  { name: "Development Tools", value: "development", icon: <Code className="h-4 w-4" /> },
  { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Shield className="h-4 w-4" /> }
];

export default function AIServices() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredServices = AI_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "all" || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.tags.some(tag => tag.toLowerCase().includes(selectedCategory));
    
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="AI Services & Solutions - Zion Tech Group" 
        description="Expert AI development services including machine learning, computer vision, NLP, and custom AI solutions for businesses."
        keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, custom AI development"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              AI & Machine Learning
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions that drive innovation, 
              efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your AI Journey
              </motion.button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Free Consultation
=======
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-cyan opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                AI & Machine Learning
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions including predictive analytics, 
              natural language processing, and automated decision-making systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/20 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)]"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
<<<<<<< HEAD
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
=======
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
=======
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated background with more particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
          <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 rounded-full bg-zion-cyan opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/6 w-2.5 h-2.5 rounded-full bg-zion-purple-light opacity-30 animate-pulse delay-500"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence. From custom ML models to enterprise AI solutions, 
            we deliver intelligent technology that drives growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6"
              size="lg"
            >
              Start AI Project
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6">
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions designed to accelerate your digital transformation journey.
=======
      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive innovation and transform your business operations
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {aiServices.map((service, index) => {
=======
            {services.map((service, index) => {
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
=======
      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-zion-slate-light">AI Projects Delivered</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">98%</div>
            <div className="text-zion-slate-light">Client Satisfaction</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">50+</div>
            <div className="text-zion-slate-light">AI Experts</div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-blue-light">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.value
                      ? "bg-zion-purple text-white"
                      : "border-zion-blue-light text-zion-slate-light hover:bg-zion-purple/10"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/30 border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-zion-slate-dark/50 rounded-xl">
                    {service.icon}
                  </div>
                  <Badge className="bg-zion-purple text-white">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Pricing and Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light line-through ml-2">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-zion-purple" />
                    <span className="text-zion-slate-light">{service.expertise}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
=======
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials */}
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about our AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
=======
      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative power of AI with our comprehensive solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our cutting-edge AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Start Your AI Project
                </motion.button>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Eye, 
  Factory, 
  Shield, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AIServices = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Autonomous Systems",
      description: "Build intelligent systems that operate independently and make decisions in real-time.",
      features: ["Self-learning algorithms", "Predictive analytics", "Automated decision making"],
      path: "/ai-autonomous-systems"
    },
    {
      icon: TrendingUp,
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI-powered analytics.",
      features: ["Real-time dashboards", "Predictive modeling", "Performance optimization"],
      path: "/ai-business-intelligence"
    },
    {
      icon: Code,
      title: "AI Code Generation",
      description: "Accelerate development with AI-powered code generation and review tools.",
      features: ["Automated coding", "Code review", "Bug detection"],
      path: "/ai-code-generation"
    },
    {
      icon: Eye,
      title: "AI Computer Vision",
      description: "Implement advanced computer vision solutions for image and video analysis.",
      features: ["Object detection", "Facial recognition", "Quality control"],
      path: "/ai-computer-vision"
    },
    {
      icon: Users,
      title: "AI Healthcare Solutions",
      description: "Revolutionize healthcare with AI-powered diagnostic and treatment systems.",
      features: ["Medical imaging", "Patient monitoring", "Drug discovery"],
      path: "/ai-healthcare-solutions"
    },
    {
      icon: Shield,
      title: "AI Compliance Automation",
      description: "Ensure regulatory compliance with intelligent automation and monitoring.",
      features: ["Risk assessment", "Compliance monitoring", "Audit trails"],
      path: "/ai-compliance-automation"
    }
  ];

  const benefits = [
    "Increased operational efficiency",
    "Reduced human error",
    "24/7 availability",
    "Scalable solutions",
    "Cost optimization",
    "Competitive advantage"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions for
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Tomorrow's Challenges
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to transform your business operations, 
              enhance decision-making, and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive AI Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            From autonomous systems to specialized industry solutions, we provide end-to-end AI services 
            that drive innovation and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <service.icon className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
              </div>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                    <CheckCircle className="h-4 w-4 text-zion-cyan mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={service.path}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light">
              Experience the transformative power of AI with our proven approach and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-zion-cyan flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
=======
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI solutions can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
    </div>
  );
};

<<<<<<< HEAD
export default AIServices;
>>>>>>> origin/cursor/website-audit-and-enhancement-2595
=======
export default AIServices;
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-zion-purple" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-zion-slate-dark/50 text-zion-slate-light border-zion-blue-light">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            We follow a proven methodology to deliver high-quality AI solutions that meet your business objectives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-cyan">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Discovery & Analysis</h3>
            <p className="text-zion-slate-light">Understand your requirements and analyze data for AI solution design.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-purple">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Model Development</h3>
            <p className="text-zion-slate-light">Build and train AI models using state-of-the-art algorithms and frameworks.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-cyan">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Testing & Validation</h3>
            <p className="text-zion-slate-light">Rigorous testing and validation to ensure accuracy and performance.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-zion-purple">4</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Deployment & Support</h3>
            <p className="text-zion-slate-light">Seamless deployment with ongoing support and maintenance.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how artificial intelligence can transform your business operations 
            and give you a competitive edge in the market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg py-6">
              Start Your AI Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple text-lg py-6">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-zion-blue-dark/30 rounded-2xl p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-zion-slate-light text-lg">
              Our AI experts are ready to help you create intelligent solutions that drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-cyan">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-purple">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-zion-cyan">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
