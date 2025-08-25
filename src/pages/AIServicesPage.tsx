<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Network, 
  Smartphone, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Lightbulb, 
  Award, 
  Clock, 
  DollarSign, 
  PieChart 
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
=======
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, ArrowRight, CheckCircle, ExternalLink, Sparkles, Rocket, TrendingUp, BarChart3, Target, Users as UsersIcon, Brain as BrainIcon, MessageSquare } from 'lucide-react';
import { enhancedAIServices2025 } from '@/data/comprehensiveServices2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad
=======
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, ArrowRight, CheckCircle, TrendingUp, BarChart3, Target, Rocket, Lock, Sparkles, Layers, Code, Database as DatabaseIcon2, Globe2, Shield as ShieldIcon2, Zap as ZapIcon2, Brain as BrainIcon, Cpu as CpuIcon, Cloud as CloudIcon, Database as DatabaseIcon3, Shield as ShieldIcon3, Zap as ZapIcon3, MessageSquare, Atom } from 'lucide-react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a

const AI_SERVICES = COMPREHENSIVE_SERVICES.filter(service => 
  service.category.includes('AI') || 
  service.category.includes('Machine Learning') || 
  service.category.includes('Automation')
);

<<<<<<< HEAD
<<<<<<< HEAD
export default function AIServicesPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <Brain className="h-16 w-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed for the modern enterprise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Shield, Zap, Cloud, Rocket, Target, Users, Award, Globe } from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      category: 'AI Business Intelligence',
      services: [
        {
          title: 'AI Business Intelligence Suite',
          description: 'Comprehensive business intelligence powered by advanced AI algorithms for data-driven decision making.',
          features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting'],
          icon: Brain,
          color: 'from-purple-500 to-pink-500',
          link: '/ai-business-intelligence'
        },
        {
          title: 'AI Business Intelligence Pro',
          description: 'Enterprise-grade AI BI solution with advanced machine learning and predictive analytics.',
          features: ['ML-powered forecasting', 'Advanced segmentation', 'ROI optimization', 'Competitive analysis'],
          icon: Target,
          color: 'from-blue-500 to-cyan-500',
          link: '/ai-business-intelligence-pro'
        }
      ]
    },
    {
      category: 'AI Content & Marketing',
      services: [
        {
          title: 'AI Content Generation',
          description: 'Automated content creation using advanced language models for marketing and communication.',
          features: ['Blog posts', 'Social media content', 'Email campaigns', 'Product descriptions'],
          icon: Zap,
          color: 'from-yellow-500 to-orange-500',
          link: '/ai-content-generation'
        },
        {
          title: 'AI Content Marketing Automation',
          description: 'End-to-end content marketing automation with AI-powered personalization and optimization.',
          features: ['Content planning', 'Automated publishing', 'Performance tracking', 'Audience insights'],
          icon: Rocket,
          color: 'from-green-500 to-emerald-500',
          link: '/ai-content-marketing-automation'
        }
      ]
    },
    {
      category: 'AI Development & Code',
      services: [
        {
          title: 'AI Code Generation Enterprise',
          description: 'Enterprise-grade AI code generation for rapid application development and maintenance.',
          features: ['Multi-language support', 'Code review', 'Documentation generation', 'Testing automation'],
          icon: Cpu,
          color: 'from-indigo-500 to-purple-500',
          link: '/ai-code-generation-enterprise'
        },
        {
          title: 'AI Code Review Copilot',
          description: 'AI-powered code review assistant that identifies issues and suggests improvements.',
          features: ['Security scanning', 'Performance optimization', 'Best practices', 'Learning recommendations'],
          icon: Shield,
          color: 'from-red-500 to-pink-500',
          link: '/ai-code-review-copilot'
        }
      ]
=======
  // Enhanced AI Service data with more innovative services
  const aiServices = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      category: "Business Intelligence",
      description: "Advanced analytics and business intelligence powered by machine learning algorithms for data-driven decision making",
      price: 2500,
      pricingModel: "monthly",
      aiScore: 95,
<<<<<<< HEAD
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization", "Natural language queries", "Automated insights"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage", "Real-time insights", "Automated reporting"],
      useCases: ["Financial analysis", "Sales forecasting", "Customer behavior analysis", "Performance tracking", "Market research", "Operational optimization"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning", "Predictive Analytics"],
      innovationLevel: "Cutting-edge",
      marketPrice: "$2,500 - $8,000/month",
      deliveryTime: "6-8 weeks",
=======
import { Search, Filter, Brain, Zap, Shield, Database, Users, TrendingUp, BarChart3, MessageSquare, Camera, Video, FileText, Target, Globe, Bot, Cpu, Network, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Star, Clock, DollarSign } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // AI Services data
  const aiServices = [
    {
      id: 1,
      name: "AI Content Creator Pro",
      category: "Content Generation",
      pricing: "Freemium",
      description: "Advanced AI-powered content creation platform that generates high-quality articles, blog posts, marketing copy, and social media content with human-like creativity and SEO optimization.",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["AI content generation", "SEO optimization", "Multi-language support", "Content planning", "Performance analytics", "Plagiarism detection"],
      benefits: ["Create content 10x faster", "Improve SEO rankings", "Reduce content costs by 70%", "Maintain brand voice consistency"],
      targetAudience: ["Content marketers", "Bloggers", "Agencies", "Small businesses", "E-commerce"],
      tags: ["Content Creation", "AI", "SEO", "Marketing", "Automation"],
      marketPrice: "$45/month (Industry average: $80/month)",
      roi: "400% ROI within 3 months",
      implementationTime: "2-3 days",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
=======
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage"],
      useCases: ["Financial analysis", "Sales forecasting", "Customer behavior analysis", "Performance tracking"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-890c
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "AI-Powered Customer Service Automation",
      category: "Customer Service",
      description: "Intelligent customer service automation with natural language processing and sentiment analysis",
      price: 1800,
      pricingModel: "monthly",
      aiScore: 93,
      features: ["24/7 chatbot support", "Sentiment analysis", "Ticket routing", "Knowledge base integration"],
      benefits: ["24/7 availability", "Reduced response time", "Improved customer satisfaction", "Cost savings"],
      useCases: ["E-commerce support", "Help desk automation", "Customer inquiries", "Technical support"],
      tags: ["AI", "Customer Service", "Automation", "Chatbot", "NLP"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "AI-Powered Marketing Optimization",
      category: "Marketing AI",
      description: "Intelligent marketing optimization using AI to improve campaigns, targeting, and ROI",
      price: 2200,
      pricingModel: "monthly",
      aiScore: 91,
      features: ["Campaign optimization", "Audience targeting", "A/B testing", "ROI prediction"],
      benefits: ["Higher conversion rates", "Better targeting", "Improved ROI", "Data-driven decisions"],
      useCases: ["Digital advertising", "Email marketing", "Social media campaigns", "Content optimization"],
      tags: ["AI", "Marketing", "Optimization", "ROI", "Targeting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "AI-Powered Fraud Detection",
      category: "Security AI",
      description: "Advanced fraud detection systems using machine learning to identify and prevent fraudulent activities",
      price: 3500,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Real-time monitoring", "Pattern recognition", "Risk scoring", "Alert system"],
      benefits: ["Fraud prevention", "Risk reduction", "Compliance", "Customer protection"],
      useCases: ["Financial services", "E-commerce", "Insurance", "Healthcare"],
      tags: ["AI", "Security", "Fraud Detection", "Risk Management", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "AI-Powered Supply Chain Optimization",
      category: "Supply Chain AI",
      description: "Intelligent supply chain optimization using AI to improve efficiency and reduce costs",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 89,
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Supplier management"],
      benefits: ["Cost reduction", "Improved efficiency", "Better planning", "Risk mitigation"],
      useCases: ["Manufacturing", "Retail", "Logistics", "Distribution"],
      tags: ["AI", "Supply Chain", "Optimization", "Forecasting", "Logistics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
    {
      id: 2,
<<<<<<< HEAD
      name: "Natural Language Processing Solutions",
      category: "Language AI",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding with multilingual support",
      price: 1800,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Chatbot integration", "Document processing", "Voice recognition"],
      benefits: ["Improved customer service", "Automated content analysis", "Multilingual support", "Efficiency gains", "24/7 availability", "Cost reduction"],
      useCases: ["Customer support", "Content moderation", "Market research", "Document analysis", "Voice assistants", "Translation services"],
      tags: ["NLP", "Language AI", "Text Analysis", "Sentiment Analysis", "Machine Translation"],
      innovationLevel: "Advanced",
      marketPrice: "$1,800 - $5,000/month",
      deliveryTime: "4-6 weeks",
=======
      name: "AI Customer Support Bot",
      category: "Customer Service",
      pricing: "Freemium",
      description: "Intelligent chatbot solution that provides 24/7 customer support, handles complex queries, and integrates seamlessly with existing CRM systems for enhanced customer experience.",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Unlimited conversations",
      features: ["Natural language processing", "Multi-language support", "CRM integration", "Sentiment analysis", "Automated responses", "Live chat handoff"],
      benefits: ["Reduce support costs by 60%", "Improve response time to under 1 second", "Handle multiple conversations simultaneously", "24/7 availability"],
      targetAudience: ["E-commerce", "Customer support teams", "Service businesses", "SaaS companies"],
      tags: ["Chatbot", "Customer Service", "AI", "Automation", "CRM"],
      marketPrice: "$35/month (Industry average: $65/month)",
      roi: "300% ROI within 4 months",
      implementationTime: "3-5 days",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
<<<<<<< HEAD
      name: "Computer Vision & Image Recognition",
      category: "Visual AI",
      description: "Computer vision solutions for image and video analysis, object detection, and pattern recognition with real-time processing",
      price: 3200,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Object detection", "Image classification", "Facial recognition", "Video analysis", "Real-time processing", "Custom model training"],
      benefits: ["Automated quality control", "Security enhancement", "Process automation", "Data extraction", "24/7 monitoring", "Accuracy improvement"],
      useCases: ["Manufacturing QC", "Security systems", "Retail analytics", "Medical imaging", "Autonomous vehicles", "Surveillance"],
      tags: ["Computer Vision", "Image Recognition", "Object Detection", "Video Analysis", "Deep Learning"],
      innovationLevel: "Cutting-edge",
      marketPrice: "$3,200 - $10,000/month",
      deliveryTime: "8-10 weeks",
=======
      name: "AI Sales Predictor",
      category: "Sales Intelligence",
      pricing: "Freemium",
      description: "Predictive sales analytics platform that uses machine learning to forecast sales trends, identify high-value leads, and optimize sales strategies for maximum revenue growth.",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Sales forecasting", "Lead scoring", "Pipeline analytics", "Revenue prediction", "Performance insights", "ROI optimization"],
      benefits: ["Increase sales by 45%", "Improve lead conversion by 55%", "Reduce sales cycle by 30%", "Better resource allocation"],
      targetAudience: ["Sales teams", "Business development", "Startups", "Enterprise companies"],
      tags: ["Sales Intelligence", "AI", "Predictive Analytics", "Lead Scoring", "Forecasting"],
      marketPrice: "$55/month (Industry average: $95/month)",
      roi: "350% ROI within 5 months",
      implementationTime: "4-6 days",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
    },
    {
<<<<<<< HEAD
      category: 'AI Research & Innovation',
      services: [
        {
          title: 'AI Autonomous Research Assistant',
          description: 'Intelligent research automation for scientific discovery and innovation.',
          features: ['Literature review', 'Data analysis', 'Hypothesis generation', 'Report creation'],
          icon: Brain,
          color: 'from-cyan-500 to-blue-500',
          link: '/ai-autonomous-research-assistant'
        },
        {
          title: 'AI Consciousness Evolution Platform',
          description: 'Cutting-edge research platform for AI consciousness and cognitive development.',
          features: ['Neural architecture', 'Consciousness simulation', 'Ethical frameworks', 'Research collaboration'],
          icon: Globe,
          color: 'from-violet-500 to-purple-500',
          link: '/ai-consciousness-evolution-platform'
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations with AI-powered solutions.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Unlock valuable insights from your data with advanced AI analytics and machine learning.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and process optimization.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI technology and innovation.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
=======
  // Use the enhanced AI services data
  const aiServices = enhancedAIServices2025;

  const categories = ['all', ...Array.from(new Set(aiServices.map(service => service.category)))];
=======
      id: 4,
<<<<<<< HEAD
      name: "Predictive Analytics & Forecasting",
      category: "Predictive AI",
      description: "AI-powered predictive analytics for forecasting trends, risks, and opportunities with high accuracy models",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 91,
<<<<<<< HEAD
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Anomaly detection"],
      benefits: ["Proactive decision making", "Risk mitigation", "Resource optimization", "Competitive advantage"],
      useCases: ["Supply chain optimization", "Financial risk management", "Sales forecasting", "Maintenance prediction"],
      tags: ["Predictive Analytics", "Forecasting", "Risk Assessment", "Trend Analysis"]
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Cpu, 
  Cloud,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Rocket,
  Globe
} from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom AI Models', 'Data Visualization'],
      link: '/ai-business-intelligence'
    },
    {
      icon: Zap,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models designed to solve your specific business challenges and automate complex processes.',
      features: ['Custom Model Development', 'Model Training & Optimization', 'API Integration', 'Performance Monitoring'],
      link: '/machine-learning-solutions'
=======
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Anomaly detection", "Scenario modeling", "Real-time updates"],
      benefits: ["Proactive decision making", "Risk mitigation", "Resource optimization", "Competitive advantage", "Cost savings", "Improved planning"],
      useCases: ["Supply chain optimization", "Financial risk management", "Sales forecasting", "Maintenance prediction", "Market analysis", "Inventory management"],
      tags: ["Predictive Analytics", "Forecasting", "Risk Assessment", "Trend Analysis", "Machine Learning"],
      innovationLevel: "Advanced",
      marketPrice: "$2,800 - $7,500/month",
      deliveryTime: "6-8 weeks",
=======
      name: "AI Image Recognition Suite",
      category: "Computer Vision",
      pricing: "Freemium",
      description: "Advanced computer vision platform that provides image recognition, object detection, and visual analysis capabilities for businesses looking to automate visual processes.",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Object detection", "Image classification", "Face recognition", "Quality control", "Automated tagging", "Visual search"],
      benefits: ["Automate visual inspections", "Improve quality control by 90%", "Reduce manual review time", "Enhanced security"],
      targetAudience: ["Manufacturing", "Retail", "Security", "Healthcare", "E-commerce"],
      tags: ["Computer Vision", "Image Recognition", "AI", "Automation", "Quality Control"],
      marketPrice: "$65/month (Industry average: $120/month)",
      roi: "280% ROI within 6 months",
      implementationTime: "5-7 days",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
<<<<<<< HEAD
      name: "AI-Powered Automation",
      category: "Process Automation",
      description: "Intelligent automation solutions that learn and adapt to optimize business processes with minimal human intervention",
      price: 2200,
      pricingModel: "monthly",
      aiScore: 89,
      features: ["Process optimization", "Workflow automation", "Decision automation", "Learning algorithms", "Integration APIs", "Performance monitoring"],
      benefits: ["Increased efficiency", "Cost reduction", "Error reduction", "Scalability", "24/7 operation", "Continuous improvement"],
      useCases: ["Customer service", "Data entry", "Document processing", "Quality control", "Supply chain", "Financial operations"],
      tags: ["Automation", "Process Optimization", "Workflow", "Decision Making", "RPA"],
      innovationLevel: "Advanced",
      marketPrice: "$2,200 - $6,000/month",
      deliveryTime: "5-7 weeks",
=======
      name: "AI Data Analyzer Pro",
      category: "Data Analytics",
      pricing: "Freemium",
      description: "Intelligent data analysis platform that automatically discovers insights, generates reports, and provides actionable recommendations from complex datasets.",
      price: 40,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Automated insights", "Predictive modeling", "Natural language queries", "Real-time dashboards", "Data visualization", "Report generation"],
      benefits: ["Discover insights 5x faster", "Reduce analysis time by 80%", "Improve decision making", "Automated reporting"],
      targetAudience: ["Data analysts", "Business intelligence teams", "Executives", "Marketing teams"],
      tags: ["Data Analytics", "AI", "Business Intelligence", "Predictive Modeling", "Automation"],
      marketPrice: "$40/month (Industry average: $75/month)",
      roi: "320% ROI within 4 months",
      implementationTime: "3-5 days",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Protect your business with AI-driven security solutions and automated compliance monitoring.',
      features: ['Threat Detection', 'Compliance Automation', 'Risk Assessment', 'Security Analytics'],
      link: '/ai-security-compliance'
    },
    {
      icon: Users,
      title: 'AI-Powered Customer Experience',
      description: 'Enhance customer engagement with intelligent chatbots, personalization, and predictive customer service.',
      features: ['Smart Chatbots', 'Personalization Engine', 'Customer Analytics', 'Predictive Support'],
      link: '/ai-customer-experience'
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
    },
    {
      icon: Cpu,
      title: 'AI Process Automation',
      description: 'Streamline operations with intelligent automation that learns and improves over time.',
      features: ['Workflow Automation', 'Document Processing', 'Intelligent Routing', 'Process Optimization'],
      link: '/ai-process-automation'
    },
    {
<<<<<<< HEAD
      id: 6,
<<<<<<< HEAD
      name: "AI Chatbot & Virtual Assistants",
      category: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants for customer service and business automation with natural conversations",
      price: 1500,
      pricingModel: "monthly",
      aiScore: 88,
<<<<<<< HEAD
      features: ["Natural conversations", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      benefits: ["24/7 availability", "Cost reduction", "Improved customer satisfaction", "Scalable support"],
      useCases: ["Customer support", "Sales assistance", "Appointment booking", "Information retrieval"],
      tags: ["Chatbot", "Virtual Assistant", "Conversational AI", "Customer Service"]
    },
    // NEW INNOVATIVE AI SERVICES ADDED
    {
      id: 7,
      name: "Quantum AI Computing Platform",
      category: "Quantum AI",
      description: "Revolutionary quantum computing platform for AI model training and optimization",
      price: 8500,
      pricingModel: "monthly",
      aiScore: 98,
      features: ["Quantum algorithms", "AI model acceleration", "Quantum machine learning", "Research tools"],
      benefits: ["Exponential speed increase", "Breakthrough AI capabilities", "Research leadership", "Competitive advantage"],
      useCases: ["Drug discovery", "Financial modeling", "Climate simulation", "AI research"],
      tags: ["Quantum AI", "Quantum Computing", "Machine Learning", "Research", "Innovation"]
    },
    {
      id: 8,
      name: "Neuromorphic AI Systems",
      category: "Neuromorphic AI",
      description: "Brain-inspired AI systems that mimic human neural processing for advanced cognitive tasks",
      price: 4200,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Brain-like processing", "Cognitive computing", "Adaptive learning", "Energy efficiency"],
      benefits: ["Human-like reasoning", "Lower power consumption", "Adaptive intelligence", "Cognitive enhancement"],
      useCases: ["Autonomous vehicles", "Robotics", "Medical diagnosis", "Cognitive computing"],
      tags: ["Neuromorphic", "Cognitive AI", "Brain-inspired", "Adaptive Learning", "Robotics"]
    },
    {
      id: 9,
      name: "Federated Learning Platform",
      category: "Privacy-Preserving AI",
      description: "Distributed AI training platform that preserves data privacy while enabling collaborative learning",
      price: 3800,
      pricingModel: "monthly",
      aiScore: 93,
      features: ["Privacy-preserving training", "Distributed learning", "Secure aggregation", "Model sharing"],
      benefits: ["Data privacy protection", "Collaborative learning", "Regulatory compliance", "Reduced data costs"],
      useCases: ["Healthcare AI", "Financial services", "Cross-company collaboration", "Privacy-sensitive domains"],
      tags: ["Federated Learning", "Privacy", "Distributed AI", "Collaboration", "Security"]
    },
    {
      id: 10,
      name: "AI-Powered Drug Discovery",
      category: "Healthcare AI",
      description: "Advanced AI platform for pharmaceutical research, drug discovery, and clinical trial optimization",
      price: 6500,
      pricingModel: "monthly",
      aiScore: 97,
      features: ["Molecular modeling", "Drug screening", "Clinical trial design", "Biomarker discovery"],
      benefits: ["Faster drug development", "Cost reduction", "Success rate improvement", "Patient safety"],
      useCases: ["Pharmaceutical research", "Clinical trials", "Personalized medicine", "Drug repurposing"],
      tags: ["Drug Discovery", "Healthcare AI", "Pharmaceuticals", "Clinical Trials", "Personalized Medicine"]
    },
    {
      id: 11,
      name: "AI-Powered Climate Modeling",
      category: "Environmental AI",
      description: "Advanced climate modeling and environmental prediction using AI and machine learning",
      price: 5200,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Climate prediction", "Environmental monitoring", "Carbon tracking", "Disaster forecasting"],
      benefits: ["Climate action planning", "Risk mitigation", "Sustainability insights", "Policy support"],
      useCases: ["Government planning", "Agriculture optimization", "Disaster preparedness", "Environmental protection"],
      tags: ["Climate AI", "Environmental Modeling", "Sustainability", "Risk Assessment", "Policy"]
    },
    {
      id: 12,
      name: "AI-Powered Space Exploration",
      category: "Space AI",
      description: "AI solutions for space exploration, satellite data analysis, and astronomical research",
      price: 7800,
      pricingModel: "monthly",
      aiScore: 95,
      features: ["Satellite data analysis", "Space object detection", "Astronomical research", "Mission planning"],
      benefits: ["Space exploration advancement", "Scientific discovery", "Mission optimization", "Cost efficiency"],
      useCases: ["NASA missions", "Satellite operations", "Astronomical research", "Space debris tracking"],
      tags: ["Space AI", "Satellite Data", "Astronomy", "Space Exploration", "Research"]
    },
    {
      id: 13,
      name: "AI-Powered Financial Trading",
      category: "Financial AI",
      description: "Advanced AI trading platform with real-time market analysis and automated trading strategies",
      price: 4500,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Real-time analysis", "Algorithmic trading", "Risk management", "Portfolio optimization"],
      benefits: ["Improved returns", "Risk reduction", "24/7 trading", "Emotion-free decisions"],
      useCases: ["Hedge funds", "Investment firms", "Trading desks", "Personal investing"],
      tags: ["Financial AI", "Algorithmic Trading", "Risk Management", "Portfolio Optimization", "Trading"]
    },
    {
      id: 14,
      name: "AI-Powered Cybersecurity",
      category: "Security AI",
      description: "Next-generation cybersecurity platform with AI-powered threat detection and response",
      price: 3900,
      pricingModel: "monthly",
      aiScore: 95,
      features: ["Threat detection", "Behavioral analysis", "Automated response", "Zero-day protection"],
      benefits: ["Enhanced security", "Faster response", "Proactive protection", "Cost reduction"],
      useCases: ["Enterprise security", "Government agencies", "Financial institutions", "Healthcare"],
      tags: ["Cybersecurity", "Threat Detection", "Behavioral Analysis", "Zero-day", "Security"]
    },
    {
      id: 15,
      name: "AI-Powered Creative Suite",
      category: "Creative AI",
      description: "Comprehensive AI-powered creative platform for content generation, design, and multimedia creation",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Content generation", "Design automation", "Video creation", "Music composition"],
      benefits: ["Creative efficiency", "Cost reduction", "24/7 creativity", "Quality improvement"],
      useCases: ["Marketing agencies", "Content creators", "Design studios", "Entertainment"],
      tags: ["Creative AI", "Content Generation", "Design", "Video", "Music"]
    },
    {
      id: 16,
      name: "AI-Powered Education Platform",
      category: "Educational AI",
      description: "Personalized learning platform with AI-powered tutoring, assessment, and curriculum optimization",
      price: 2200,
      pricingModel: "monthly",
      aiScore: 91,
      features: ["Personalized learning", "Adaptive assessment", "Intelligent tutoring", "Progress tracking"],
      benefits: ["Improved learning outcomes", "Personalized experience", "Teacher efficiency", "Student engagement"],
      useCases: ["K-12 education", "Higher education", "Corporate training", "Online learning"],
      tags: ["Educational AI", "Personalized Learning", "Adaptive Assessment", "Tutoring", "Education"]
    }
  ];

<<<<<<< HEAD
  const categories = ['all', 'Business Intelligence', 'Language AI', 'Visual AI', 'Predictive AI', 'Process Automation', 'Conversational AI', 'Quantum AI', 'Neuromorphic AI', 'Privacy-Preserving AI', 'Healthcare AI', 'Environmental AI', 'Space AI', 'Financial AI', 'Security AI', 'Creative AI', 'Educational AI'];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
=======
      features: ["Natural conversations", "Multi-language support", "Integration APIs", "Analytics dashboard", "Custom training", "Voice interface"],
      benefits: ["24/7 availability", "Cost reduction", "Improved customer satisfaction", "Scalable support", "Consistent service", "Quick responses"],
      useCases: ["Customer support", "Sales assistance", "Appointment booking", "Information retrieval", "Order tracking", "Technical support"],
      tags: ["Chatbot", "Virtual Assistant", "Conversational AI", "Customer Service", "NLP"],
      innovationLevel: "Advanced",
      marketPrice: "$1,500 - $4,000/month",
      deliveryTime: "3-4 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "Quantum Machine Learning",
      category: "Quantum AI",
      description: "Revolutionary quantum machine learning platform that combines quantum computing with AI for exponential speedup",
      price: 5000,
      pricingModel: "monthly",
      aiScore: 98,
      features: ["Quantum ML algorithms", "Hybrid quantum-classical training", "Optimization solvers", "Quantum feature selection", "Model acceleration", "Expert consultation"],
      benefits: ["Exponential speedup", "Solve intractable problems", "Future-proof technology", "Competitive advantage", "Research leadership", "Innovation edge"],
      useCases: ["Drug discovery", "Financial modeling", "Supply chain optimization", "Climate modeling", "Cryptography", "Scientific research"],
      tags: ["Quantum Computing", "Machine Learning", "AI", "Optimization", "Research"],
      innovationLevel: "Revolutionary",
      marketPrice: "$5,000 - $15,000/month",
      deliveryTime: "10-12 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Edge AI Computing Platform",
      category: "Edge AI",
      description: "Distributed AI computing platform that brings machine learning to edge devices for real-time processing",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 93,
      features: ["Edge AI deployment", "Real-time processing", "Offline capabilities", "Device management", "Model optimization", "Security protocols"],
      benefits: ["Real-time processing", "Reduced latency", "Lower bandwidth costs", "Enhanced privacy", "Offline operation", "Scalability"],
      useCases: ["IoT devices", "Autonomous vehicles", "Smart cities", "Industrial automation", "Healthcare monitoring", "Retail analytics"],
      tags: ["Edge Computing", "AI", "IoT", "Real-time Processing", "Device Management"],
      innovationLevel: "Cutting-edge",
      marketPrice: "$2,800 - $8,000/month",
      deliveryTime: "8-10 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "AI-Powered Cybersecurity",
      category: "AI Security",
      description: "Advanced AI cybersecurity platform that detects and prevents threats in real-time using behavioral analysis",
      price: 3500,
      pricingModel: "monthly",
      aiScore: 96,
      features: ["Threat detection", "Behavioral analysis", "Real-time monitoring", "Incident response", "Vulnerability assessment", "Compliance reporting"],
      benefits: ["Proactive threat prevention", "Reduced false positives", "Faster incident response", "Compliance automation", "Cost-effective security", "24/7 protection"],
      useCases: ["Network security", "Endpoint protection", "Cloud security", "Compliance management", "Incident response", "Threat hunting"],
      tags: ["AI", "Cybersecurity", "Threat Detection", "Compliance", "Security Analytics"],
      innovationLevel: "Cutting-edge",
      marketPrice: "$3,500 - $10,000/month",
      deliveryTime: "6-8 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "AI-Powered Healthcare Analytics",
      category: "Healthcare AI",
      description: "Advanced healthcare analytics platform that uses AI to improve patient outcomes and optimize operations",
      price: 4000,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Patient outcome prediction", "Operational optimization", "Risk assessment", "Clinical decision support", "Population health analytics", "Cost analysis"],
      benefits: ["Improved patient outcomes", "Reduced healthcare costs", "Optimized resource allocation", "Enhanced clinical decisions", "Regulatory compliance", "Population health insights"],
      useCases: ["Clinical decision support", "Population health management", "Operational optimization", "Risk assessment", "Quality improvement", "Research"],
      tags: ["Healthcare", "AI", "Analytics", "Clinical Decision Support", "Population Health"],
      innovationLevel: "Advanced",
      marketPrice: "$4,000 - $12,000/month",
      deliveryTime: "8-10 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "AI-Powered Financial Services",
      category: "FinTech AI",
      description: "Intelligent financial services platform that uses AI for risk assessment, fraud detection, and personalized banking",
      price: 3200,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Risk assessment", "Fraud detection", "Personalized banking", "Investment recommendations", "Credit scoring", "Regulatory compliance"],
      benefits: ["Reduced fraud losses", "Improved risk management", "Personalized services", "Regulatory compliance", "Cost reduction", "Customer satisfaction"],
      useCases: ["Fraud detection", "Credit assessment", "Investment advisory", "Risk management", "Compliance monitoring", "Customer service"],
      tags: ["FinTech", "AI", "Risk Management", "Fraud Detection", "Personalization"],
      innovationLevel: "Advanced",
      marketPrice: "$3,200 - $9,000/month",
      deliveryTime: "6-8 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 12,
      name: "AI-Powered Supply Chain",
      category: "Supply Chain AI",
      description: "Intelligent supply chain platform that uses AI to optimize inventory, predict demand, and streamline logistics",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 90,
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Supplier management", "Real-time tracking", "Performance analytics"],
      benefits: ["Reduced inventory costs", "Improved delivery times", "Increased efficiency", "Reduced stockouts", "Optimized supplier relationships", "Cost savings"],
      useCases: ["Retail inventory", "Manufacturing supply chains", "E-commerce logistics", "Distribution optimization", "Procurement automation", "Warehouse management"],
      tags: ["AI", "Supply Chain", "Logistics", "Inventory Management", "Optimization"],
      innovationLevel: "Advanced",
      marketPrice: "$2,800 - $7,500/month",
      deliveryTime: "6-8 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Business Intelligence', 'Language AI', 'Visual AI', 'Predictive AI', 'Process Automation', 'Conversational AI', 'Quantum AI', 'Edge AI', 'AI Security', 'Healthcare AI', 'FinTech AI', 'Supply Chain AI'];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
=======
      name: "AI Process Automation",
      category: "Process Automation",
      pricing: "Freemium",
      description: "Intelligent process automation platform that uses AI to streamline business workflows, reduce manual tasks, and improve operational efficiency across all departments.",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Workflow automation", "Document processing", "Decision automation", "Integration hub", "Process monitoring", "Performance analytics"],
      benefits: ["Reduce operational costs by 50%", "Improve process accuracy to 99.9%", "Scale operations efficiently", "Real-time monitoring"],
      targetAudience: ["Operations teams", "HR departments", "Finance teams", "Manufacturing", "Service businesses"],
      tags: ["Process Automation", "AI", "Workflow", "Efficiency", "Integration"],
      marketPrice: "$75/month (Industry average: $140/month)",
      roi: "400% ROI within 6 months",
      implementationTime: "1-2 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "AI Security Monitor",
      category: "Cybersecurity",
      pricing: "Freemium",
      description: "Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated incident response, and comprehensive security monitoring for businesses.",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Threat detection", "Incident response", "Security monitoring", "Vulnerability assessment", "Compliance reporting", "Real-time alerts"],
      benefits: ["Detect threats 10x faster", "Reduce security incidents by 80%", "Automated response", "24/7 protection"],
      targetAudience: ["IT security teams", "Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Cybersecurity", "AI", "Threat Detection", "Security Monitoring", "Compliance"],
      marketPrice: "$85/month (Industry average: $160/month)",
      roi: "250% ROI within 8 months",
      implementationTime: "1-2 weeks",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "AI Marketing Optimizer",
      category: "Marketing",
      pricing: "Freemium",
      description: "Intelligent marketing optimization platform that uses AI to analyze campaign performance, optimize ad spend, and maximize ROI across all marketing channels.",
      price: 50,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Campaign optimization", "Ad spend optimization", "Audience targeting", "Performance analytics", "A/B testing", "ROI tracking"],
      benefits: ["Increase ROI by 40%", "Reduce ad waste by 30%", "Improve targeting accuracy", "Automated optimization"],
      targetAudience: ["Marketing teams", "Digital agencies", "E-commerce", "SaaS companies"],
      tags: ["Marketing", "AI", "Optimization", "ROI", "Analytics"],
      marketPrice: "$50/month (Industry average: $90/month)",
      roi: "300% ROI within 4 months",
      implementationTime: "3-5 days",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Content Generation', 'Customer Service', 'Sales Intelligence', 'Computer Vision', 'Data Analytics', 'Process Automation', 'Cybersecurity', 'Marketing'];
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
=======
  const categories = ['all', 'Business Intelligence', 'Language AI', 'Visual AI', 'Predictive AI', 'Process Automation', 'Conversational AI', 'Customer Service', 'Marketing AI', 'Security AI', 'Supply Chain AI'];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-890c

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price}/month`;
      case 'yearly':
        return `$${price * 12}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      default:
<<<<<<< HEAD
        return `$${price.toLocaleString()}`;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad
    }
  ];

<<<<<<< HEAD
  const useCases = [
    {
      industry: 'Healthcare',
      applications: ['Medical diagnosis', 'Drug discovery', 'Patient monitoring', 'Research automation'],
      icon: Shield
    },
    {
      industry: 'Finance',
      applications: ['Risk assessment', 'Fraud detection', 'Trading algorithms', 'Customer service'],
      icon: Target
    },
    {
      industry: 'Manufacturing',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation'],
      icon: Cpu
    },
    {
      industry: 'Retail',
      applications: ['Customer personalization', 'Inventory management', 'Demand forecasting', 'Chatbots'],
      icon: Users
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Business Intelligence': return <BarChart3 className="w-6 h-6" />;
      case 'Language AI': return <Brain className="w-6 h-6" />;
      case 'Visual AI': return <Eye className="w-6 h-6" />;
      case 'Predictive AI': return <TrendingUp className="w-6 h-6" />;
      case 'Process Automation': return <Zap className="w-6 h-6" />;
      case 'Conversational AI': return <MessageSquare className="w-6 h-6" />;
      default: return <BrainIcon className="w-6 h-6" />;
=======
      icon: Cloud,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure that grows with your business needs and computational requirements.',
      features: ['Scalable Computing', 'GPU Clusters', 'Model Deployment', 'Performance Optimization'],
      link: '/ai-cloud-infrastructure'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize processes to save time and reduce costs.'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Leverage data-driven insights to make informed decisions and predict future trends.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with AI-powered threat detection and security monitoring.'
    },
    {
      icon: Users,
      title: 'Improved Customer Experience',
      description: 'Deliver personalized experiences and faster, more accurate customer service.'
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
    }
  ];

<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
=======
  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing',
    'Retail & E-commerce',
    'Education',
    'Transportation & Logistics',
    'Energy & Utilities',
    'Media & Entertainment'
  ];
=======
  const getAIScoreColor = (score: number) => {
    if (score >= 95) return 'text-emerald-400';
    if (score >= 90) return 'text-green-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 bg-purple-400/20';
      case 'Cutting-edge': return 'text-blue-400 bg-blue-400/20';
      case 'Advanced': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
=======
        return `$${price}`;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
<<<<<<< HEAD
      case 'Business Intelligence': return <BarChart3 className="w-6 h-6" />;
      case 'Language AI': return <Globe2 className="w-6 h-6" />;
      case 'Visual AI': return <Eye className="w-6 h-6" />;
      case 'Predictive AI': return <TrendingUp className="w-6 h-6" />;
      case 'Process Automation': return <Settings className="w-6 h-6" />;
      case 'Conversational AI': return <MessageSquare className="w-6 h-6" />;
      case 'Quantum AI': return <Atom className="w-6 h-6" />;
      case 'Edge AI': return <Cpu className="w-6 h-6" />;
      case 'AI Security': return <Shield className="w-6 h-6" />;
      case 'Healthcare AI': return <Heart className="w-6 h-6" />;
      case 'FinTech AI': return <CreditCard className="w-6 h-6" />;
      case 'Supply Chain AI': return <Truck className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
=======
      case 'Content Generation': return <FileText className="w-6 h-6" />;
      case 'Customer Service': return <MessageSquare className="w-6 h-6" />;
      case 'Sales Intelligence': return <TrendingUp className="w-6 h-6" />;
      case 'Computer Vision': return <Eye className="w-6 h-6" />;
      case 'Data Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Process Automation': return <Zap className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Marketing': return <Target className="w-6 h-6" />;
      default: return <Brain className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Subscription': return 'text-blue-400';
      case 'One-time': return 'text-purple-400';
      default: return 'text-gray-400';
    }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
  };
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Zap, Cpu, Shield, Users, TrendingUp, ArrowRight, CheckCircle, Star, Globe, Lock, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const aiServices = [
  {
    title: "AI-Powered Business Intelligence",
    description: "Transform raw data into actionable insights with our advanced AI analytics platform.",
    icon: Brain,
    features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization"],
    price: "From $2,500/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Natural Language Processing",
    description: "Build intelligent chatbots and language understanding systems for your business.",
    icon: Cpu,
    features: ["Chatbot Development", "Sentiment Analysis", "Text Classification", "Language Translation"],
    price: "From $1,800/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Computer Vision Solutions",
    description: "Implement advanced image and video analysis for automation and quality control.",
    icon: Shield,
    features: ["Object Detection", "Image Classification", "Video Analytics", "Quality Assurance"],
    price: "From $3,200/month",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Predictive Maintenance",
    description: "Prevent equipment failures and optimize maintenance schedules with AI predictions.",
    icon: TrendingUp,
    features: ["Failure Prediction", "Maintenance Optimization", "Performance Monitoring", "Cost Reduction"],
    price: "From $2,800/month",
    color: "from-orange-500 to-red-500"
=======
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  PenTool, 
  BarChart3, 
  Shield,
  Zap,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { TrustedBySection } from "@/components/TrustedBySection";

const aiServices = [
  {
    id: "ai-content",
    title: "AI-Powered Content Generation",
    description: "Automated content creation for blogs, social media, and marketing materials using advanced language models.",
    price: 299,
    currency: "$",
    period: "/month",
    features: [
      "Unlimited content generation",
      "Multi-language support",
      "SEO optimization",
      "Brand voice customization",
      "Plagiarism detection",
      "Content calendar management"
    ],
    icon: <PenTool className="h-8 w-8" />,
    category: "Content Creation",
    badge: "Popular",
    link: "/services",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Support Bot",
    description: "Intelligent chatbot with natural language processing for 24/7 customer support and lead generation.",
    price: 450,
    currency: "$",
    period: "/month",
    features: [
      "Natural language processing",
      "Multi-channel integration",
      "Lead qualification",
      "24/7 availability",
      "Analytics dashboard",
      "Custom training"
    ],
    icon: <MessageSquare className="h-8 w-8" />,
    category: "Customer Support",
    badge: "Featured",
    link: "/services",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a5ab?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-video",
    title: "AI-Powered Video Analytics",
    description: "Computer vision platform for video surveillance, object detection, facial recognition, and behavioral analysis.",
    price: 1800,
    currency: "$",
    period: "/month",
    features: [
      "Real-time object detection",
      "Facial recognition",
      "Behavioral analysis",
      "Custom model training",
      "API integration",
      "Compliance reporting"
    ],
    icon: <Eye className="h-8 w-8" />,
    category: "Computer Vision",
    badge: "Advanced",
    link: "/services",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-analytics",
    title: "Predictive Analytics Dashboard",
    description: "Real-time business intelligence platform with predictive modeling for sales forecasting and trend analysis.",
    price: 800,
    currency: "$",
    period: "/month",
    features: [
      "Predictive modeling",
      "Real-time dashboards",
      "Custom algorithms",
      "Data visualization",
      "Automated reporting",
      "API access"
    ],
    icon: <BarChart3 className="h-8 w-8" />,
    category: "Business Intelligence",
    badge: "Pro",
    link: "/services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c072?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-security",
    title: "AI-Powered Threat Detection",
    description: "Advanced cybersecurity using machine learning to detect and prevent sophisticated cyber threats in real-time.",
    price: 1200,
    currency: "$",
    period: "/month",
    features: [
      "Real-time threat detection",
      "Behavioral analysis",
      "Automated response",
      "Threat intelligence",
      "Compliance monitoring",
      "24/7 SOC support"
    ],
    icon: <Shield className="h-8 w-8" />,
    category: "Cybersecurity",
    badge: "Enterprise",
    link: "/services",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: "ai-automation",
    title: "Intelligent Process Automation",
    description: "AI-driven workflow automation that learns from your business processes and continuously improves efficiency.",
    price: 650,
    currency: "$",
    period: "/month",
    features: [
      "Process mining",
      "Workflow automation",
      "Machine learning",
      "Integration APIs",
      "Performance analytics",
      "Custom workflows"
    ],
    icon: <Zap className="h-8 w-8" />,
    category: "Automation",
    badge: "New",
    link: "/services",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
  }
];

const benefits = [
  {
<<<<<<< HEAD
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and streamline operations",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed decisions based on AI-powered insights",
    icon: Brain,
    color: "text-zion-purple"
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs through intelligent automation",
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    title: "24/7 Operation",
    description: "AI systems work around the clock without breaks",
    icon: Globe,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's AI solutions helped us reduce processing time by 70% and increase accuracy to 99.9%.",
    name: "Dr. Sarah Chen",
    role: "CTO, DataFlow Systems",
    rating: 5
  },
  {
    content: "The AI-powered analytics platform transformed how we understand our customer behavior and market trends.",
    name: "Michael Rodriguez",
    role: "VP of Analytics, TechCorp",
    rating: 5
  },
  {
    content: "Implementing their computer vision solution saved us millions in quality control costs.",
    name: "Jennifer Kim",
    role: "Operations Director, Manufacturing Inc",
    rating: 5
  }
];
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0

export default function AIServicesPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to autonomous systems, we deliver the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
        </div>
      </section>

<<<<<<< HEAD
      {/* AI Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
              <p className="text-zion-cyan-light">Increase in Efficiency</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">$2.9T</h3>
              <p className="text-zion-cyan-light">AI Market Value by 2025</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">87%</h3>
              <p className="text-zion-cyan-light">Customer Satisfaction</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-zion-cyan-light">AI-Powered Operations</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border-zion-cyan/30">
            <TabsTrigger value="overview" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              AI Services
            </TabsTrigger>
            <TabsTrigger value="use-cases" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Use Cases
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why AI is Critical for Your Business
                </h2>
                <p className="text-lg text-zion-cyan-light mb-6">
                  In today's competitive landscape, artificial intelligence isn't just a luxury—it's a necessity. 
                  Our AI solutions help businesses automate processes, gain insights from data, and create 
                  personalized customer experiences that drive growth and efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Process Automation</h3>
                      <p className="text-zion-cyan-light">Streamline operations and reduce manual tasks by up to 80%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Predictive Analytics</h3>
                      <p className="text-zion-cyan-light">Make data-driven decisions with advanced forecasting capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Customer Intelligence</h3>
                      <p className="text-zion-cyan-light">Understand customer behavior and preferences in real-time</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">AI Capabilities</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Machine Learning</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">95%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Natural Language Processing</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">88%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Computer Vision</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">92%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Predictive Analytics</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">90%</span>
                      </div>
                    </div>
                  </div>
                </Card>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Services & Solutions
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive innovation across all aspects of your organization.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence solutions that transform businesses through automation, insights, and intelligent decision-making
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
          </p>
          
          {/* AI Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{aiServices.length}+</div>
              <div className="text-purple-100 text-sm">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%+</div>
              <div className="text-purple-100 text-sm">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-100 text-sm">AI Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-purple-100 text-sm">Uptime</div>
=======
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Machine Learning
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your business with cutting-edge artificial intelligence solutions that drive innovation, 
              efficiency, and competitive advantage in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Enhanced Search and Filter Section */}
      <div className="bg-slate-800 py-12 border-b border-slate-700 relative">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 bg-gradient-to-r from-purple-600/90 to-blue-600/90 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
=======
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="AI & Machine Learning Services - Zion Tech Group" 
        description="Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and computer vision."
        keywords="AI, machine learning, predictive analytics, NLP, computer vision, business intelligence"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive innovation across all aspects of your organization.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Brain className="w-5 h-5 text-purple-300" />
                <span className="text-purple-100">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Eye className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100">Computer Vision</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe2 className="w-5 h-5 text-green-300" />
                <span className="text-green-100">NLP</span>
              </div>
            </div>
          </motion.div>
        </div>

<<<<<<< HEAD
      {/* Search and Filter Section */}
      <div className="relative z-10 bg-slate-800/80 backdrop-blur-sm py-8 border-b border-slate-700/50">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Enhanced Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg transition-all duration-300"
=======
                className="w-full pl-10 pr-4 py-3 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>

            {/* Enhanced Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
<<<<<<< HEAD
                className="w-full px-6 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg transition-all duration-300"
=======
                className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? '🚀 All AI Categories' : `✨ ${category}`}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
=======
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              AI & Machine Learning
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business operations with cutting-edge artificial intelligence solutions. 
              From predictive analytics to computer vision, we deliver AI that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
                <CheckCircle className="w-5 h-5" />
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Enhanced Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden">
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                        <span className="inline-block bg-slate-600 text-slate-300 text-xs px-3 py-1 rounded-full">
                          {service.pricingModel}
=======
      {/* Services Grid */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getInnovationLevelColor(service.innovationLevel)}`}>
                          {service.innovationLevel}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getAIScoreColor(service.aiScore)} flex items-center gap-1 mt-1`}>
                      <Brain className="w-4 h-4" />
                      AI Score: {service.aiScore}%
                    </div>
                  </div>
                </div>
                
<<<<<<< HEAD
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features:
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-purple-400" />
                        {feature}
=======
                <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full mb-2 border border-purple-500/30">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600/20 text-slate-300 text-xs px-3 py-1 rounded-full ml-2 border border-slate-500/30">
                    {service.pricingModel}
                  </span>
=======
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search AI services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-purple-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-purple-400 bg-purple-400 bg-opacity-20">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
                </div>
                <div className="text-sm text-gray-400">{service.userLimit}</div>
                <div className="text-sm text-green-400 font-medium">{service.marketPrice}</div>
              </div>

<<<<<<< HEAD
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Key Features:
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
=======
      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
            Comprehensive AI solutions designed to address your specific business challenges and drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD

<<<<<<< HEAD
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Use Cases:
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-400" />
                        {useCase}
=======
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-400" />
                    Use Cases:
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <li key={index} className="flex items-center">
                        <Zap className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{useCase}</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
                      </li>
                    ))}
                  </ul>
=======
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

<<<<<<< HEAD
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-yellow-400" />
                    AI Models:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.aiModels.slice(0, 3).map((model, index) => (
                      <span key={index} className="text-xs bg-purple-600 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    Compliance:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.compliance.slice(0, 3).map((compliance, index) => (
                      <span key={index} className="text-xs bg-green-600 text-green-300 px-2 py-1 rounded border border-green-500/30">
                        {compliance}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 4).map((tag, index) => (
<<<<<<< HEAD
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-lg border border-slate-600">
=======
                    <span key={index} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded border border-slate-600/50">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
                      {tag}
=======
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {feature}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
                    </span>
                  ))}
=======
      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Our AI Services?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge AI technology with proven expertise to deliver solutions that drive real business value.
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
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${benefit.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-purple-400 font-semibold">{service.accuracy}</div>
                    <div className="text-slate-400">Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-blue-400 font-semibold">{service.marketPrice}</div>
                    <div className="text-slate-400">Market Price</div>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Get Started with AI
=======
                <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                  <span>Delivery: {service.deliveryTime}</span>
                  <span>Market: {service.marketPrice}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
                </button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad
=======
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Start your free trial today</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started →
                  </a>
                </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
              </div>
<<<<<<< HEAD
            </div>
<<<<<<< HEAD
          </TabsContent>

          {/* AI Services Tab */}
          <TabsContent value="services" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Service Portfolio</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform every aspect of your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AI_SERVICES.map((service) => (
                <AIServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          {/* Use Cases Tab */}
          <TabsContent value="use-cases" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Real-World AI Applications</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Discover how AI is transforming industries and creating new opportunities for growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UseCaseCard
                icon={<Brain className="h-8 w-8 text-zion-cyan" />}
                title="Customer Service Automation"
                description="AI-powered chatbots and virtual assistants that provide 24/7 customer support"
                examples={[
                  "Intelligent ticket routing",
                  "Automated responses to common queries",
                  "Sentiment analysis for customer satisfaction"
                ]}
              />
              <UseCaseCard
                icon={<BarChart3 className="h-8 w-8 text-zion-cyan" />}
                title="Predictive Analytics"
                description="Forecast trends and make data-driven decisions with machine learning models"
                examples={[
                  "Sales forecasting",
                  "Inventory optimization",
                  "Risk assessment and management"
                ]}
              />
              <UseCaseCard
                icon={<Shield className="h-8 w-8 text-zion-cyan" />}
                title="Fraud Detection"
                description="Advanced AI systems that identify and prevent fraudulent activities in real-time"
                examples={[
                  "Transaction monitoring",
                  "Behavioral analysis",
                  "Anomaly detection"
                ]}
              />
              <UseCaseCard
                icon={<Network className="h-8 w-8 text-zion-cyan" />}
                title="Process Optimization"
                description="Streamline operations and improve efficiency with intelligent automation"
                examples={[
                  "Workflow automation",
                  "Resource allocation",
                  "Performance monitoring"
                ]}
              />
              <UseCaseCard
                icon={<Smartphone className="h-8 w-8 text-zion-cyan" />}
                title="Personalization"
                description="Create tailored experiences for customers using AI-driven insights"
                examples={[
                  "Product recommendations",
                  "Content personalization",
                  "Dynamic pricing"
                ]}
              />
              <UseCaseCard
                icon={<Globe className="h-8 w-8 text-zion-cyan" />}
                title="Market Intelligence"
                description="Gain competitive advantages with AI-powered market analysis and insights"
                examples={[
                  "Competitor monitoring",
                  "Trend analysis",
                  "Opportunity identification"
                ]}
              />
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Service Pricing Plans</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Flexible pricing options designed to meet your business needs and budget
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter AI"
                price="$2,999"
                description="Perfect for small businesses starting their AI journey"
                features={[
                  "Basic AI consultation",
                  "Process automation setup",
                  "Data analysis tools",
                  "Email support",
                  "Monthly maintenance"
                ]}
                popular={false}
              />
              <PricingCard
                title="Professional AI"
                price="$7,999"
                description="Comprehensive AI solutions for growing businesses"
                features={[
                  "Advanced AI implementation",
                  "Custom machine learning models",
                  "Predictive analytics",
                  "Priority support",
                  "Weekly maintenance",
                  "Performance optimization"
                ]}
                popular={true}
              />
              <PricingCard
                title="Enterprise AI"
                price="$19,999"
                description="Full-scale AI transformation for large organizations"
                features={[
                  "End-to-end AI strategy",
                  "Custom AI development",
                  "24/7 monitoring",
                  "Dedicated support team",
                  "Continuous optimization",
                  "Scalability planning"
                ]}
                popular={false}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
=======
      {/* Call to Action */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-3629
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can transform your business and drive unprecedented growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Schedule AI Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Request AI Demo
            </Button>
          </div>
=======
=======
      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
            Don't just take our word for it. Here's what industry leaders have to say about our AI services.
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
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
            </motion.div>
          ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Contact Section */}
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            Ready to start your AI transformation journey? Contact our experts today.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </CardContent>
          </Card>
=======
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                AI Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Experience the power of artificial intelligence with our comprehensive suite of services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
=======
      {/* Enhanced Contact Section */}
      <div className="bg-slate-800 py-20 border-t border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            Ready to Harness AI Power?
          </h2>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
=======
          <div className="mb-8">
            <a 
              href="/comprehensive-services"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 mb-4"
            >
              Explore Our Complete Service Portfolio →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-3629
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">{aiServices[0].contactInfo.phone}</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">{aiServices[0].contactInfo.email}</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group"
            >
              Visit Our Website
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href={`mailto:${aiServices[0].contactInfo.email}?subject=AI Services Inquiry`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5dad
=======
      {/* AI Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                AI Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive AI solutions designed to address your specific business challenges and drive measurable results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          </div>
=======
      <div className="relative z-10 bg-slate-800/80 backdrop-blur-sm py-16 border-t border-slate-700/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Harness AI Power?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Contact our expert team to discuss your AI needs and get a customized solution that transforms your business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Phone className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">+1 302 464 0950</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <MapPin className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Our Website
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.a>
              <motion.a
                href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-375a
        </div>
      </section>

<<<<<<< HEAD
      {/* AI Services Categories */}
=======
      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                AI Solutions?
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover the transformative benefits that AI can bring to your business operations and growth.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
=======
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-6">
              Our AI solutions are designed to scale with your business and provide measurable ROI
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e8c
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industries We{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities across diverse industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-4 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300 text-center"
              >
                <span className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
<<<<<<< HEAD
                AI Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive AI solutions designed to meet your business needs and drive innovation.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                        <p className="text-zion-slate-light mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                          Learn More
                        </button>
                      </motion.div>
                    );
                  })}
                </div>
=======
                AI Implementation
              </span>
              {' '}Process
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for successfully implementing AI solutions that drive real business value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Assessment',
                description: 'Understand your business needs and assess AI opportunities.'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Develop a comprehensive AI strategy and implementation roadmap.'
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Build and rigorously test AI models and solutions.'
              },
              {
                step: '04',
                title: 'Deployment & Optimization',
                description: 'Deploy solutions and continuously optimize for performance.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-zion-slate-light">{phase.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover how AI is transforming industries and creating new opportunities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((application, appIndex) => (
                      <li key={appIndex} className="text-zion-slate-light text-sm">
                        • {application}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
    title: "Cost Efficiency",
    description: "Reduce operational costs by up to 40% through intelligent automation and optimization",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "24/7 Availability",
    description: "AI services never sleep, providing round-the-clock support and monitoring",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Scalability",
    description: "Easily scale your AI capabilities as your business grows without additional infrastructure",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Continuous Learning",
    description: "AI models continuously improve and adapt to your specific business needs and data",
    icon: <Brain className="h-6 w-6" />
  }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Modern Business
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From content creation to predictive analytics, 
              our AI services deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose AI Services?</h2>
            <p className="text-zion-slate-light text-lg">
              Leverage the power of artificial intelligence to drive innovation and growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Service Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of AI-powered solutions designed to address your specific business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                      {service.category}
                    </Badge>
                    {service.badge && (
                      <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-zion-purple">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-muted-foreground">{service.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
                  <Button asChild className="w-full">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center max-w-4xl mx-auto"
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Harness the Power of AI?
            </h2>
<<<<<<< HEAD
            <p className="text-lg text-zion-slate-light mb-8">
              Transform your business with our cutting-edge AI services. 
              Get started today and experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your AI Journey
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Consultation
              </button>
=======
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business operations, 
              improve efficiency, and create new opportunities for growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get a Custom Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// AI Service Card Component
function AIServiceCard({ service }: { service: any }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
            {service.category}
          </Badge>
          <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            {service.subcategory}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white">{service.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-zion-cyan-light">AI Score:</span>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-zion-blue-light rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
              </div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
              Learn More
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Use Case Card Component
function UseCaseCard({ icon, title, description, examples }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  examples: string[]; 
}) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {examples.map((example, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-zion-cyan-light text-sm">{example}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Pricing Card Component
function PricingCard({ title, price, description, features, popular }: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <Card className={`relative bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 ${popular ? 'ring-2 ring-zion-cyan' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-zion-cyan text-white px-3 py-1">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <div className="text-4xl font-bold text-zion-cyan mb-2">{price}</div>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
=======
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your AI Journey
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
=======
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Join thousands of businesses already leveraging our AI solutions to drive growth and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Request Custom Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Our AI Experts
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
}