<<<<<<< HEAD
import React from 'react';

const AIServicesPage: React.FC = () => {
=======
import React, { useState } from 'react';
import React, { useState } from 'react';
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
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, ArrowRight, CheckCircle, ExternalLink, Sparkles, Rocket, TrendingUp, BarChart3, Target, Users as UsersIcon, Brain as BrainIcon, MessageSquare } from 'lucide-react';
import { enhancedAIServices2025 } from '@/data/comprehensiveServices2025';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, ArrowRight, CheckCircle, TrendingUp, BarChart3, Target, Rocket, Lock, Sparkles, Layers, Code, Database as DatabaseIcon2, Globe2, Shield as ShieldIcon2, Zap as ZapIcon2, Brain as BrainIcon, Cpu as CpuIcon, Cloud as CloudIcon, Database as DatabaseIcon3, Shield as ShieldIcon3, Zap as ZapIcon3, MessageSquare, Atom } from 'lucide-react';


const AI_SERVICES = COMPREHENSIVE_SERVICES.filter(service => 
  service.category.includes('AI') || 
  service.category.includes('Machine Learning') || 
  service.category.includes('Automation')
);

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
import { ENHANCED_SERVICES } from '@/data/enhancedServices';

// Filter AI services
const AI_SERVICES = ENHANCED_SERVICES.filter(service => 
  service.category.includes('AI') || 
  service.category.includes('Machine Learning') ||
  service.category.includes('Automation')
);

export default function AIServicesPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-16 w-16 text-zion-cyan mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              AI Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Transform Your Business with Cutting-Edge Artificial Intelligence Solutions
          </p>
          <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">
            From process automation to predictive analytics, our AI services deliver measurable results and competitive advantages.
          </p>
          
          {/* Contact CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>
import React from 'react';

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
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage"],
      useCases: ["Financial analysis", "Sales forecasting", "Customer behavior analysis", "Performance tracking"],
      tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"],
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
  // Use the enhanced AI services data
  const aiServices = enhancedAIServices2025;

  const categories = ['all', ...Array.from(new Set(aiServices.map(service => service.category)))];
      id: 4,
import React from 'react';

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
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Anomaly detection", "Scenario modeling", "Real-time updates"],
      benefits: ["Proactive decision making", "Risk mitigation", "Resource optimization", "Competitive advantage", "Cost savings", "Improved planning"],
      useCases: ["Supply chain optimization", "Financial risk management", "Sales forecasting", "Maintenance prediction", "Market analysis", "Inventory management"],
      tags: ["Predictive Analytics", "Forecasting", "Risk Assessment", "Trend Analysis", "Machine Learning"],
      innovationLevel: "Advanced",
      marketPrice: "$2,800 - $7,500/month",
      deliveryTime: "6-8 weeks",
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
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
    },
    {
      icon: Cpu,
      title: 'AI Process Automation',
      description: 'Streamline operations with intelligent automation that learns and improves over time.',
      features: ['Workflow Automation', 'Document Processing', 'Intelligent Routing', 'Process Optimization'],
      link: '/ai-process-automation'
    },
    {
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
  const categories = ['all', 'Business Intelligence', 'Language AI', 'Visual AI', 'Predictive AI', 'Process Automation', 'Conversational AI', 'Customer Service', 'Marketing AI', 'Security AI', 'Supply Chain AI'];

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
    }
  ];

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
  const getAIScoreColor = (score: number) => {
    if (score >= 95) return 'text-emerald-400';
    if (score >= 90) return 'text-green-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 bg-purple-400/20';
      case 'Cutting-edge': return 'text-blue-400 bg-blue-400/20';
      case 'Advanced': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
        return `$${price}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
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
  };
import React from 'react';

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
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { 
  Brain, 

          {/* AI Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-cyan-light">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-cyan-light">Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">80%</div>
              <div className="text-zion-cyan-light">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">300%</div>
              <div className="text-zion-cyan-light">ROI Average</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Services
            </TabsTrigger>
            <TabsTrigger value="use-cases" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Use Cases
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence solutions that transform businesses through automation, insights, and intelligent decision-making
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
            </div>
          </motion.div>
        </div>
      </section>

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 bg-gradient-to-r from-purple-600/90 to-blue-600/90 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="AI & Machine Learning Services - Zion Tech Group" 
        description="Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and computer vision."
        keywords="AI, machine learning, predictive analytics, NLP, computer vision, business intelligence"
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Bot, 
  BarChart3, 
  Code, 
  MessageSquare, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Image, 
  Code, 
  Shield, 
  Globe,
  ArrowRight,
  Star,
  Clock,
  Users,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const AI_SERVICES = [
  {
    id: "ai-content-generation",
    title: "AI Content Generation",
    description: "Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.",
    features: [
      "Blog post generation",
      "Social media content",
      "Email marketing copy",
      "Product descriptions",
      "SEO optimization",
      "Multi-language support"
    ],
    pricing: {
      starter: "$99/month",
      professional: "$299/month",
      enterprise: "$999/month"
    },
    icon: <MessageSquare className="h-8 w-8" />,
    category: "Content Creation",
    rating: 4.9,
    reviewCount: 1247,
    badge: "Most Popular"
  },
  {
    id: "ai-data-analytics",
    title: "AI Data Analytics Platform",
    description: "Advanced analytics and insights powered by machine learning for business intelligence.",
    features: [
      "Predictive analytics",
      "Real-time dashboards",
      "Custom reporting",
      "Data visualization",
      "Trend forecasting",
      "API integration"
    ],
    pricing: {
      starter: "$199/month",
      professional: "$499/month",
      enterprise: "$1499/month"
    },
    icon: <BarChart3 className="h-8 w-8" />,
    category: "Analytics",
    rating: 4.8,
    reviewCount: 892,
    badge: "Trending"
  },
  {
    id: "ai-automation-hub",
    title: "AI Automation Hub",
    description: "Automate repetitive tasks and workflows with intelligent AI-powered automation.",
    features: [
      "Workflow automation",
      "Process optimization",
      "Smart scheduling",
      "Integration tools",
      "Custom triggers",
      "Performance monitoring"
    ],
    pricing: {
      starter: "$149/month",
      professional: "$399/month",
      enterprise: "$1199/month"
    },
    icon: <Zap className="h-8 w-8" />,
    category: "Automation",
    rating: 4.7,
    reviewCount: 756,
    badge: "New"
  },
  {
    id: "ai-image-generation",
    title: "AI Image Generation Studio",
    description: "Create stunning visuals, graphics, and artwork using advanced AI image generation.",
    features: [
      "Custom image creation",
      "Style transfer",
      "Batch processing",
      "High resolution output",
      "Commercial licensing",
      "API access"
    ],
    pricing: {
      starter: "$79/month",
      professional: "$199/month",
      enterprise: "$599/month"
    },
    icon: <Image className="h-8 w-8" />,
    category: "Creative",
    rating: 4.9,
    reviewCount: 1103,
    badge: "Featured"
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant Pro",
    description: "Intelligent coding assistance with code generation, debugging, and optimization.",
    features: [
      "Code generation",
      "Bug detection",
      "Performance optimization",
      "Documentation generation",
      "Multi-language support",
      "IDE integration"
    ],
    pricing: {
      starter: "$129/month",
      professional: "$349/month",
      enterprise: "$899/month"
    },
    icon: <Code className="h-8 w-8" />,
    category: "Development",
    rating: 4.8,
    reviewCount: 634,
    badge: "Developer Choice"
  },
  {
    id: "ai-security-suite",
    title: "AI Security Suite",
    description: "Advanced cybersecurity powered by artificial intelligence for threat detection and prevention.",
    features: [
      "Threat detection",
      "Behavioral analysis",
      "Real-time monitoring",
      "Incident response",
      "Compliance reporting",
      "24/7 support"
    ],
    pricing: {
      starter: "$299/month",
      professional: "$699/month",
      enterprise: "$1999/month"
    },
    icon: <Shield className="h-8 w-8" />,
    category: "Security",
    rating: 4.9,
    reviewCount: 445,
    badge: "Enterprise"
  },
  {
    id: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    description: "Build intelligent conversational AI chatbots for customer service and engagement.",
    features: [
      "Natural language processing",
      "Multi-channel support",
      "Custom training",
      "Analytics dashboard",
      "Integration APIs",
      "Scalable infrastructure"
    ],
    pricing: {
      starter: "$89/month",
      professional: "$249/month",
      enterprise: "$799/month"
    },
    icon: <MessageSquare className="h-8 w-8" />,
    category: "Communication",
    rating: 4.7,
    reviewCount: 567,
    badge: "Customer Favorite"
  },
  {
    id: "ai-market-research",
    title: "AI Market Research Platform",
    description: "Comprehensive market analysis and competitive intelligence powered by AI.",
    features: [
      "Market trend analysis",
      "Competitor monitoring",
      "Consumer insights",
      "Predictive modeling",
      "Custom reports",
      "Data visualization"
    ],
    pricing: {
      starter: "$179/month",
      professional: "$449/month",
      enterprise: "$1299/month"
    },
    icon: <TrendingUp className="h-8 w-8" />,
    category: "Research",
    rating: 4.8,
    reviewCount: 423,
    badge: "Business Essential"
  }
];

const BENEFITS = [
  {
    title: "Cost Effective",
    description: "Reduce operational costs by up to 60% with AI automation",
    icon: <CheckCircle className="h-6 w-6 text-green-500" />
  },
  {
    title: "24/7 Availability",
    description: "AI services work around the clock without breaks or downtime",
    icon: <Clock className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Scalable Solutions",
    description: "Grow your business with flexible, scalable AI solutions",
    icon: <TrendingUp className="h-6 w-6 text-purple-500" />
  },
  {
    title: "Expert Support",
    description: "Access to AI specialists and technical support team",
    icon: <Users className="h-6 w-6 text-cyan-500" />
  }
];

export default function AIServicesPage() {
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AIServicesPage</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AIServicesPage;