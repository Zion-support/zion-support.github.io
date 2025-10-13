import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Database,
  Activity,
  Target,
  Sparkles,
  Users,
  Settings,
  FileText,
  Network,
  Lock,
  RefreshCw,
  Monitor,
  HardDrive,
  Eye,
  TrendingUp,
  Code,
  Bot,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

const AIServices = () => {
  const aiServices = [
    {
      title: "AI Business Intelligence Pro",
      description: "Advanced analytics platform with real-time dashboards, predictive analytics, and AI-powered insights",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "Starting at $299/month",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"],
      link: "/ai-business-intelligence-pro",
      category: "Analytics",
      popular: true
    },
    {
      title: "AI Cybersecurity Suite Pro",
      description: "AI-powered security platform with 24/7 threat detection and automated response",
      icon: <Shield className="w-8 h-8" />,
      price: "Starting at $499/month",
      features: ["Threat detection", "Automated response", "24/7 monitoring", "Compliance reporting"],
      link: "/ai-cybersecurity-suite-pro",
      category: "Security",
      popular: true
    },
    {
      title: "AI Content Generation Pro",
      description: "Create high-quality content at scale with AI-powered writing and content optimization",
      icon: <FileText className="w-8 h-8" />,
      price: "Starting at $149/month",
      features: ["Content creation", "SEO optimization", "Brand voice training", "Multi-format output"],
      link: "/ai-content-generation-pro",
      category: "Content",
      popular: false
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent customer service with natural language processing and sentiment analysis",
      icon: <Bot className="w-8 h-8" />,
      price: "Starting at $199/month",
      features: ["Multi-language support", "Sentiment analysis", "CRM integration", "Live chat handoff"],
      link: "/ai-customer-support-chatbot",
      category: "Customer Service",
      popular: true
    },
    {
      title: "AI Code Assistant Pro",
      description: "AI-powered development tools with code generation, review, and optimization",
      icon: <Code className="w-8 h-8" />,
      price: "Starting at $129/month",
      features: ["Code generation", "Bug detection", "Performance optimization", "Documentation"],
      link: "/ai-code-assistant-pro",
      category: "Development",
      popular: false
    },
    {
      title: "AI Marketing Automation",
      description: "End-to-end marketing automation with AI-driven personalization and campaign optimization",
      icon: <Target className="w-8 h-8" />,
      price: "Starting at $199/month",
      features: ["Email automation", "Social media", "Lead scoring", "A/B testing"],
      link: "/ai-marketing-automation",
      category: "Marketing",
      popular: true
    },
    {
      title: "AI Document Intelligence",
      description: "Intelligent document analysis, extraction, and processing with OCR technology",
      icon: <FileText className="w-8 h-8" />,
      price: "Starting at $159/month",
      features: ["OCR technology", "Form recognition", "Data extraction", "Workflow automation"],
      link: "/ai-document-intelligence",
      category: "Document Processing",
      popular: false
    },
    {
      title: "AI Financial Analysis",
      description: "Advanced financial modeling and risk assessment with automated reporting",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "Starting at $349/month",
      features: ["Risk assessment", "Fraud detection", "Investment analysis", "Compliance reporting"],
      link: "/ai-financial-analysis",
      category: "Finance",
      popular: false
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting and logistics automation",
      icon: <Globe className="w-8 h-8" />,
      price: "Starting at $279/month",
      features: ["Demand forecasting", "Inventory optimization", "Route planning", "Risk assessment"],
      link: "/ai-supply-chain-optimizer",
      category: "Supply Chain",
      popular: false
    },
    {
      title: "AI Voice Assistant Pro",
      description: "Voice-activated AI assistant with natural language processing and multi-platform support",
      icon: <Phone className="w-8 h-8" />,
      price: "Starting at $179/month",
      features: ["Voice recognition", "Natural language processing", "Multi-platform", "Custom commands"],
      link: "/ai-voice-assistant-pro",
      category: "Voice AI",
      popular: false
    },
    {
      title: "AI Image Recognition Pro",
      description: "Computer vision solutions with image analysis, object detection, and visual search",
      icon: <Eye className="w-8 h-8" />,
      price: "Starting at $229/month",
      features: ["Object detection", "Image classification", "Visual search", "Quality analysis"],
      link: "/ai-image-recognition-pro",
      category: "Computer Vision",
      popular: false
    },
    {
      title: "AI Predictive Maintenance",
      description: "Predictive analytics for equipment maintenance with IoT integration and failure prediction",
      icon: <Settings className="w-8 h-8" />,
      price: "Starting at $399/month",
      features: ["Failure prediction", "IoT integration", "Maintenance scheduling", "Cost optimization"],
      link: "/ai-predictive-maintenance",
      category: "IoT & Maintenance",
      popular: false
    }
  ];

  const categories = [
    {
      name: "Analytics & Intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Transform data into actionable insights with AI-powered analytics",
      count: "5 services"
    },
    {
      name: "Customer Experience",
      icon: <Users className="w-6 h-6" />,
      description: "Enhance customer interactions with intelligent automation",
      count: "4 services"
    },
    {
      name: "Content & Media",
      icon: <FileText className="w-6 h-6" />,
      description: "Create and optimize content with AI-powered tools",
      count: "3 services"
    },
    {
      name: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      description: "Protect your business with AI-driven security solutions",
      count: "2 services"
    },
    {
      name: "Development & Operations",
      icon: <Code className="w-6 h-6" />,
      description: "Accelerate development with AI-powered coding tools",
      count: "3 services"
    },
    {
      name: "Industry Solutions",
      icon: <Target className="w-6 h-6" />,
      description: "Specialized AI solutions for specific industries",
      count: "4 services"
    }
  ];

  const pricingPlans = [
    {
      name: "AI Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Choose 2 AI services",
        "Basic AI capabilities",
        "Email support",
        "Standard integrations",
        "10GB data storage",
        "Monthly reporting"
      ],
      popular: false
    },
    {
      name: "AI Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for growing businesses with advanced AI needs",
      features: [
        "Choose 5 AI services",
        "Advanced AI capabilities",
        "Priority support",
        "All integrations",
        "100GB data storage",
        "Weekly reporting",
        "Custom training",
        "API access"
      ],
      popular: true
    },
    {
      name: "AI Enterprise",
      price: "$999",
      period: "per month",
      description: "Complete AI solution for large organizations",
      features: [
        "Unlimited AI services",
        "Premium AI capabilities",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited data storage",
        "Real-time reporting",
        "Custom AI models",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "DataFirst Corp.",
      role: "Chief AI Officer",
      content: "Zion Tech Group's AI services transformed our entire business. We achieved 60% efficiency gains and $2M in cost savings in the first year.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Robert Kim",
      company: "TechInnovate Inc.",
      role: "CTO",
      content: "The AI Business Intelligence and Customer Support solutions are game-changers. Our team productivity increased by 45%.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sarah Johnson",
      company: "GrowthTech Ltd.",
      role: "VP of Operations",
      content: "Best AI services we've used. The predictive analytics and automation tools have revolutionized our operations.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const stats = [
    { number: "100+", label: "AI Services", icon: <Brain className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "AI Models", icon: <Settings className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. Business intelligence, cybersecurity, content generation, customer support, and more. Starting at $299/month." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business intelligence, AI analytics, AI cybersecurity, AI content generation, AI customer support, AI automation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Services - Advanced Artificial Intelligence Solutions" />
        <meta property="og:description" content="Transform your business with comprehensive AI services. Business intelligence, cybersecurity, content generation, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:image" content="https://ziontechgroup.com/images/ai-services-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services - Advanced Artificial Intelligence Solutions" />
        <meta name="twitter:description" content="Transform your business with comprehensive AI services. Business intelligence, cybersecurity, content generation, and more." />
        <meta name="twitter:image" content="https://ziontechgroup.com/images/ai-services-twitter.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <Brain className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">#1 AI Services Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI services. 
            From business intelligence to cybersecurity, we provide cutting-edge artificial intelligence solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Get AI Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View AI Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI solutions organized by business function and industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="text-cyan-400 font-medium">
                  {category.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of AI-powered solutions designed to transform your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-purple-400 font-semibold text-lg">
                    {service.price}
                  </div>
                  <Link
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the AI services plan that fits your business needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 shadow-lg hover:shadow-purple-500/25'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by AI Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what AI professionals say about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of businesses already using our AI services to drive growth and innovation. 
            Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;