import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // AI Service data directly in the component
  const aiServices = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      category: "Business Intelligence",
      description: "Advanced analytics and business intelligence powered by machine learning algorithms",
      price: 2500,
      pricingModel: "monthly",
      aiScore: 95,
import React, { useState } from 'react';
      name: "Natural Language Processing Solutions",
      category: "Language AI",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding",
      price: 1800,
      pricingModel: "monthly",
      aiScore: 92,
      features: ["Text analysis", "Sentiment analysis", "Language translation", "Chatbot integration"],
      benefits: ["Improved customer service", "Automated content analysis", "Multilingual support", "Efficiency gains"],
      useCases: ["Customer support", "Content moderation", "Market research", "Document analysis"],
      tags: ["NLP", "Language AI", "Text Analysis", "Sentiment Analysis"]
    },
    {
      id: 3,
      name: "Computer Vision & Image Recognition",
      category: "Visual AI",
      description: "Computer vision solutions for image and video analysis, object detection, and pattern recognition",
      price: 3200,
      pricingModel: "monthly",
      aiScore: 94,
      features: ["Object detection", "Image classification", "Facial recognition", "Video analysis"],
      benefits: ["Automated quality control", "Security enhancement", "Process automation", "Data extraction"],
      useCases: ["Manufacturing QC", "Security systems", "Retail analytics", "Medical imaging"],
      tags: ["Computer Vision", "Image Recognition", "Object Detection", "Video Analysis"]
    },
    {
      id: 4,
      name: "Predictive Analytics & Forecasting",
      category: "Predictive AI",
      description: "AI-powered predictive analytics for forecasting trends, risks, and opportunities",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 91,
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
      name: "Predictive Analytics & Forecasting",
      category: "Predictive AI",
      description: "AI-powered predictive analytics for forecasting trends, risks, and opportunities with high accuracy models",
      price: 2800,
      pricingModel: "monthly",
      aiScore: 91,
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Anomaly detection"],
      benefits: ["Proactive decision making", "Risk mitigation", "Resource optimization", "Competitive advantage"],
      useCases: ["Supply chain optimization", "Financial risk management", "Sales forecasting", "Maintenance prediction"],
      tags: ["Predictive Analytics", "Forecasting", "Risk Assessment", "Trend Analysis"]
    },
    {
      id: 5,
      name: "AI-Powered Automation",
      category: "Process Automation",
      description: "Intelligent automation solutions that learn and adapt to optimize business processes",
      price: 2200,
      pricingModel: "monthly",
      aiScore: 89,
      features: ["Process optimization", "Workflow automation", "Decision automation", "Learning algorithms"],
      benefits: ["Increased efficiency", "Cost reduction", "Error reduction", "Scalability"],
      useCases: ["Customer service", "Data entry", "Document processing", "Quality control"],
      tags: ["Automation", "Process Optimization", "Workflow", "Decision Making"]
    },
    {
      id: 6,
      id: 6,
      name: "AI Chatbot & Virtual Assistants",
      category: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants for customer service and business automation",
      price: 1500,
      pricingModel: "monthly",
      aiScore: 88,
      features: ["Natural conversations", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      benefits: ["24/7 availability", "Cost reduction", "Improved customer satisfaction", "Scalable support"],
      useCases: ["Customer support", "Sales assistance", "Appointment booking", "Information retrieval"],
      tags: ["Chatbot", "Virtual Assistant", "Conversational AI", "Customer Service"]
    }
  ];

  const categories = ['all', 'Business Intelligence', 'Language AI', 'Visual AI', 'Predictive AI', 'Process Automation', 'Conversational AI', 'Customer Service', 'Marketing AI', 'Security AI', 'Supply Chain AI'];
  const categories = ['all', 'Business Intelligence', 'Language AI', 'Visual AI', 'Predictive AI', 'Process Automation', 'Conversational AI', 'Quantum AI', 'Neuromorphic AI', 'Privacy-Preserving AI', 'Healthcare AI', 'Environmental AI', 'Space AI', 'Financial AI', 'Security AI', 'Creative AI', 'Educational AI'];
    
    return matchesSearch && matchesCategory;
        return `$${price.toLocaleString()}/month`;
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
        return `$${price.toLocaleString()}`;
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive innovation across all aspects of your organization.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800 py-8 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
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
  }
];

const benefits = [
  {
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

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
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
        </div>
      </div>

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

      {/* Search and Filter Section */}
      <div className="relative z-10 bg-slate-800/80 backdrop-blur-sm py-8 border-b border-slate-700/50">
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
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All AI Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-400">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getAIScoreColor(service.aiScore)}`}>
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg transition-all duration-300"
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {service.category}
                  </span>
                  <span className="inline-block bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full ml-2">
                    {service.pricingModel}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
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

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {service.useCases.slice(0, 2).map((useCase, index) => (
                      <li key={index} className="flex items-center">
                        <Zap className="w-4 h-4 text-green-400 mr-2" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Harness AI Power?
          </h2>

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
      {/* Call to Action */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
            </div>
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
          <div className="mt-8">
            <a 
              href="https://ziontechgroup.com" 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
