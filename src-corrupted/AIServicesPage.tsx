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
import { motion } from 'framer-motion';

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
      <SEO 
        title="AI Services - Zion Tech Group" 
        description="Discover cutting-edge AI services and micro SAAS solutions for your business needs."
        keywords="AI services, micro SAAS, artificial intelligence, automation, content generation"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-16 w-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-purple-light bg-clip-text text-transparent">
                AI Services Hub
              </h1>
            </div>
          </motion.div>
        </div>

                className="w-full pl-10 pr-4 py-3 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
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
                className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
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
            </div>
          </motion.div>
        </div>
      </section>

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
                
                <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full mb-2 border border-purple-500/30">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600/20 text-slate-300 text-xs px-3 py-1 rounded-full ml-2 border border-slate-500/30">
                    {service.pricingModel}
                  </span>
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
                </div>
                <div className="text-sm text-gray-400">{service.userLimit}</div>
                <div className="text-sm text-green-400 font-medium">{service.marketPrice}</div>
              </div>

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
                      </li>
                    ))}
                  </ul>
                </div>
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
                      </li>
                    ))}
                  </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

                    <span key={index} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded border border-slate-600/50">
                      {tag}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {feature}
                    </span>
                  ))}
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

                <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                  <span>Delivery: {service.deliveryTime}</span>
                  <span>Market: {service.marketPrice}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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
              </div>
          <TabsContent value="overview" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why AI Matters for Your Business</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Artificial Intelligence is no longer a luxury—it's a necessity for businesses that want to stay competitive in today's digital economy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <Zap className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Automation & Efficiency</h3>
                  <p className="text-zion-cyan-light">
                    Automate repetitive tasks, reduce manual errors, and increase operational efficiency by up to 80%.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Insights</h3>
                  <p className="text-zion-cyan-light">
                    Transform raw data into actionable insights that drive better decision-making and strategic planning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Customer Experience</h3>
                  <p className="text-zion-cyan-light">
                    Deliver personalized experiences, predict customer needs, and increase satisfaction and retention rates.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* AI Capabilities */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our AI Capabilities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Brain className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Machine Learning</h4>
                  <p className="text-sm text-zion-cyan-light">Custom ML models for your specific needs</p>
                </div>
                <div className="text-center">
                  <Network className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Neural Networks</h4>
                  <p className="text-sm text-zion-cyan-light">Deep learning for complex pattern recognition</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Predictive Analytics</h4>
                  <p className="text-sm text-zion-cyan-light">Forecast trends and behaviors</p>
                </div>
                <div className="text-center">
                  <Smartphone className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Natural Language Processing</h4>
                  <p className="text-sm text-zion-cyan-light">Understand and process human language</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">AI Service Portfolio</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address your specific business challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {AI_SERVICES.map((service) => (
                <AIServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          {/* Use Cases Tab */}
          <TabsContent value="use-cases" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Real-World AI Applications</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Discover how AI is transforming industries and creating new opportunities for businesses like yours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UseCaseCard
                icon={<BarChart3 className="h-8 w-8" />}
                title="Financial Services"
                description="Fraud detection, risk assessment, algorithmic trading, and personalized financial advice."
                examples={["Credit scoring", "Market prediction", "Compliance automation"]}
              />
              <UseCaseCard
                icon={<Users className="h-8 w-8" />}
                title="Healthcare"
                description="Medical diagnosis, drug discovery, patient monitoring, and treatment optimization."
                examples={["Disease prediction", "Medical imaging", "Drug development"]}
              />
              <UseCaseCard
                icon={<Globe className="h-8 w-8" />}
                title="Retail & E-commerce"
                description="Customer segmentation, demand forecasting, inventory optimization, and personalized marketing."
                examples={["Recommendation engines", "Price optimization", "Supply chain management"]}
              />
              <UseCaseCard
                icon={<Shield className="h-8 w-8" />}
                title="Cybersecurity"
                description="Threat detection, anomaly identification, and automated response systems."
                examples={["Intrusion detection", "Malware analysis", "Behavioral analysis"]}
              />
              <UseCaseCard
                icon={<TrendingUp className="h-8 w-8" />}
                title="Manufacturing"
                description="Predictive maintenance, quality control, supply chain optimization, and process automation."
                examples={["Equipment monitoring", "Quality assurance", "Production planning"]}
              />
              <UseCaseCard
                icon={<Lightbulb className="h-8 w-8" />}
                title="Research & Development"
                description="Data analysis, pattern recognition, hypothesis generation, and experimental design."
                examples={["Literature review", "Data mining", "Simulation modeling"]}
              />
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">AI Service Pricing</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Transparent pricing for our AI services with flexible options to fit your budget and requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter AI Package"
                price="$2,999"
                description="Perfect for small businesses starting their AI journey"
                features={[
                  "Basic AI integration",
                  "Process automation",
                  "Data analysis tools",
                  "5 hours of consultation",
                  "Email support"
                ]}
                popular={false}
              />
              <PricingCard
                title="Professional AI Suite"
                price="$7,999"
                description="Comprehensive AI solution for growing businesses"
                features={[
                  "Advanced AI models",
                  "Custom automation",
                  "Predictive analytics",
                  "20 hours of consultation",
                  "Priority support",
                  "Training & documentation"
                ]}
                popular={true}
              />
              <PricingCard
                title="Enterprise AI Platform"
                price="$19,999"
                description="Full-scale AI transformation for large organizations"
                features={[
                  "Custom AI development",
                  "Full automation suite",
                  "Advanced analytics",
                  "Unlimited consultation",
                  "24/7 dedicated support",
                  "Custom training programs",
                  "Ongoing optimization"
                ]}
                popular={false}
              />
            </div>

            {/* ROI Calculator */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">ROI Calculator</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Investment Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Cost Reduction:</span>
                      <span className="text-white font-semibold">20-40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Efficiency Gain:</span>
                      <span className="text-white font-semibold">60-80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Revenue Increase:</span>
                      <span className="text-white font-semibold">15-30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Time Savings:</span>
                      <span className="text-white font-semibold">40-60%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Expected Returns</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Payback Period:</span>
                      <span className="text-white font-semibold">6-12 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">3-Year ROI:</span>
                      <span className="text-white font-semibold">300-500%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Risk Reduction:</span>
                      <span className="text-white font-semibold">50-70%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Competitive Advantage:</span>
                      <span className="text-white font-semibold">Significant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
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
            </motion.div>
          ))}
        </div>
      </section>

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
          </div>
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
        </div>
      </section>

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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              {filteredServices.length} AI Services Found
            </h2>
            <p className="text-zion-slate-light">
              Discover AI solutions that can transform your business operations and customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                      {service.subcategory}
                    </Badge>
                    <div className="flex items-center gap-1 text-zion-slate-light">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-zion-blue mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getPricingModelIcon(service.pricingModel)}
                      <span className="text-sm text-zion-slate-light">
                        {getPricingModelText(service.pricingModel)}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-purple">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      {service.pricingModel === 'monthly' && (
                        <div className="text-xs text-zion-slate-light">per month</div>
                      )}
                    </div>
                  </div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">AI Intelligence Score</span>
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                      <Brain className="w-3 h-3 mr-1" />
                      {service.aiScore}/100
                    </Badge>
                  </div>

                  {/* Features Preview */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Perfect For</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 pt-4">
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </Link>
                    
                    <div className="flex gap-2">
                      {service.website && (
                        <a 
                          href={service.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </a>
                      )}
                      
                      <Link to="/contact" className="flex-1">
                        <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t border-zion-blue-light">
                    <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light">
                      {service.documentation && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>Docs</span>
                        </div>
                      )}
                      {service.support && (
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>Support</span>
                        </div>
                      )}
                      {service.compliance && service.compliance.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>{service.compliance.length} Compliance</span>
                        </div>
                      )}
                      {service.sla && (
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>SLA</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Harness the Power of AI?
            </h2>
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
            </div>
          </motion.div>
        </div>
      </section>
            Let's discuss how AI can transform your business operations and drive unprecedented growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Brain className="mr-2 h-5 w-5" />
              Start AI Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-zion-blue-dark py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Ready to explore AI solutions for your business? Contact our experts today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
              <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              <p className="text-sm text-zion-cyan-light">24/7 Response</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan-light">364 E Main St STE 1008</p>
              <p className="text-sm text-zion-cyan-light">Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
