import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Target, 
  Globe, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Video,
  MessageSquare,
  TrendingUp,
  Database,
  Eye,
  Settings,
  Award,
  Clock
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

  const aiServices = [
    {
      title: "AI Video Generation",
      description: "Create professional videos in minutes with AI-powered script generation, voice synthesis, and smart editing",
      icon: <Video className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-ai-video-generator",
      features: ["Script generation", "Voice synthesis", "Auto editing", "50+ languages"],
      featured: true
    },
    {
      title: "AI Customer Insights",
      description: "Transform customer data into actionable insights with AI-powered analytics and predictive behavior modeling",
      icon: <Brain className="w-8 h-8" />,
      price: "From $49/month",
      link: "/zion-ai-customer-insights",
      features: ["Sentiment analysis", "Predictive analytics", "Real-time insights", "Multi-channel integration"],
      featured: true
    },
    {
      title: "AI Voice Assistant Pro",
      description: "Advanced voice AI with natural language processing, multi-language support, and custom voice training",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-ai-voice-assistant-pro",
      features: ["Natural language processing", "Custom voice training", "Multi-language support", "API integration"],
      featured: true
    },
    {
      title: "AI Code Reviewer",
      description: "Automated code review with AI-powered suggestions, security scanning, and performance optimization",
      icon: <Settings className="w-8 h-8" />,
      price: "From $59/month",
      link: "/zion-ai-code-reviewer",
      features: ["Automated reviews", "Security scanning", "Performance optimization", "Multi-language support"],
      featured: false
    },
    {
      title: "AI Contract Analyzer",
      description: "Intelligent contract analysis with risk assessment, compliance checking, and automated summaries",
      icon: <Shield className="w-8 h-8" />,
      price: "From $79/month",
      link: "/zion-ai-contract-analyzer",
      features: ["Risk assessment", "Compliance checking", "Automated summaries", "Legal insights"],
      featured: false
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Optimize supply chain operations with AI-powered demand forecasting and inventory management",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $99/month",
      link: "/zion-ai-supply-chain-optimizer",
      features: ["Demand forecasting", "Inventory optimization", "Risk management", "Real-time analytics"],
      featured: false
    },
    {
      title: "AI Translator Pro",
      description: "Professional translation services with AI-powered accuracy, context awareness, and industry-specific terminology",
      icon: <Globe className="w-8 h-8" />,
      price: "From $49/month",
      link: "/zion-ai-translator-pro",
      features: ["100+ languages", "Context awareness", "Industry terminology", "Real-time translation"],
      featured: false
    },
    {
      title: "AI Data Cleaner",
      description: "Automated data cleaning and validation with AI-powered error detection and data quality improvement",
      icon: <Database className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-ai-data-cleaner",
      features: ["Error detection", "Data validation", "Quality improvement", "Automated cleaning"],
      featured: false
    },
    {
      title: "AI Invoice Generator",
      description: "Smart invoice generation with AI-powered data extraction, automated calculations, and professional formatting",
      icon: <Award className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-ai-invoice-generator",
      features: ["Data extraction", "Automated calculations", "Professional formatting", "Multi-currency support"],
      featured: false
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced AI Technology",
      description: "Cutting-edge machine learning algorithms and neural networks"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Processing",
      description: "Optimized for speed and efficiency with real-time processing"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics and reporting for informed decisions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Grows with your business from startup to enterprise"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Integration",
      description: "Seamless integration with your existing tools and workflows"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models" },
    { number: "99.9%", label: "Uptime" },
    { number: "50+", label: "Languages" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including video generation, customer insights, voice assistants, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence" />
      </Helmet>

      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered solutions. 
            From video generation to customer insights, we provide the tools you need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <FuturisticCard key={index} className={`p-6 ${service.featured ? 'ring-2 ring-blue-400' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-400">{service.icon}</div>
                  {service.featured && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <FuturisticButton className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our AI services today and experience the power of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <FuturisticButton size="lg">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
            </Link>
            <Link to="/demo">
              <FuturisticButton variant="outline" size="lg">
                View Demo <Eye className="w-5 h-5 ml-2" />
              </FuturisticButton>
            </Link>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default AIServices;
