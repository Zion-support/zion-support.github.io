import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Brain, 
  Users, 
  MessageSquare, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Play,
  Target,
  TrendingUp,
  Clock,
  Award,
  Calculator,
  Calendar,
  FileText,
  Settings,
  Smartphone,
  Camera,
  CreditCard,
  PieChart,
  LineChart,
  Activity,
  Bot,
  Search,
  BookOpen,
  Lightbulb,
  ThumbsUp,
  MessageCircle,
  HelpCircle,
  Hash,
  AtSign,
  Camera as CameraIcon,
  Video,
  Image,
  Link,
  Hashtag,
  Percent,
  Graph,
  PiggyBank,
  Wallet,
  Banknote,
  TrendingDown
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Project Manager Pro",
      description: "Revolutionary project management with AI-powered task automation, predictive analytics, and intelligent resource allocation.",
      price: "$99/month",
      features: ["AI Task Management", "Predictive Analytics", "Team Collaboration", "Goal Tracking", "Smart Scheduling", "Resource Optimization"],
      link: "/ai-project-manager-pro",
      category: "Productivity",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Social Media Manager Pro",
      description: "Transform your social media strategy with AI-powered content generation, analytics, and automated management across all platforms.",
      price: "$149/month",
      features: ["AI Content Generation", "Multi-platform Management", "Advanced Analytics", "Audience Intelligence", "Smart Scheduling", "Brand Safety"],
      link: "/ai-social-media-manager-pro",
      category: "Marketing",
      color: "from-pink-600 to-purple-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Customer Support Pro",
      description: "Revolutionize customer support with AI-powered chatbots, intelligent ticket routing, and automated workflows.",
      price: "$199/month",
      features: ["AI Chatbots", "Smart Routing", "Sentiment Analysis", "24/7 Support", "Knowledge Base AI", "Automation Suite"],
      link: "/ai-customer-support-pro",
      category: "Support",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "AI Financial Analytics Pro",
      description: "Transform financial management with AI-powered forecasting, fraud detection, and automated financial reporting.",
      price: "$299/month",
      features: ["AI Forecasting", "Fraud Detection", "Investment Optimization", "Automated Reporting", "Cash Flow Analysis", "Risk Assessment"],
      link: "/ai-financial-analytics-pro",
      category: "Finance",
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "AI Accounting Assistant",
      description: "Streamline accounting processes with AI-powered bookkeeping, expense tracking, and automated financial reporting.",
      price: "$79/month",
      features: ["Automated Bookkeeping", "Expense Tracking", "Tax Preparation", "Invoice Management", "Financial Reports", "Compliance Monitoring"],
      link: "/ai-accounting-assistant",
      category: "Finance",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Content Moderation Pro",
      description: "Automate content moderation with AI-powered detection of inappropriate content, spam, and policy violations.",
      price: "$129/month",
      features: ["AI Content Detection", "Spam Filtering", "Policy Enforcement", "Real-time Moderation", "Custom Rules", "Analytics Dashboard"],
      link: "/ai-content-moderation-pro",
      category: "Security",
      color: "from-red-600 to-pink-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Climate Solutions Pro",
      description: "Combat climate change with AI-powered environmental monitoring, carbon tracking, and sustainability optimization.",
      price: "$199/month",
      features: ["Carbon Footprint Tracking", "Environmental Monitoring", "Sustainability Analytics", "Green Energy Optimization", "Climate Risk Assessment", "ESG Reporting"],
      link: "/ai-climate-solutions-pro",
      category: "Sustainability",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI Agricultural Intelligence Pro",
      description: "Optimize farming operations with AI-powered crop monitoring, yield prediction, and precision agriculture solutions.",
      price: "$249/month",
      features: ["Crop Monitoring", "Yield Prediction", "Precision Agriculture", "Weather Analysis", "Pest Detection", "Resource Optimization"],
      link: "/ai-agricultural-intelligence-pro",
      category: "Agriculture",
      color: "from-green-700 to-lime-600"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "AI 3D Generation",
      description: "Create stunning 3D models and visualizations with AI-powered generation tools for design, gaming, and architecture.",
      price: "$179/month",
      features: ["3D Model Generation", "Texture Creation", "Animation Tools", "Rendering Optimization", "Asset Management", "Export Options"],
      link: "/ai-3d-generation",
      category: "Design",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Blockchain Solutions",
      description: "Leverage blockchain technology with AI-powered smart contracts, DeFi analytics, and cryptocurrency management.",
      price: "$299/month",
      features: ["Smart Contract AI", "DeFi Analytics", "Crypto Management", "NFT Generation", "Blockchain Analytics", "Security Monitoring"],
      link: "/ai-blockchain-solutions",
      category: "Blockchain",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length },
    { name: "Productivity", count: microSaasServices.filter(s => s.category === "Productivity").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Support", count: microSaasServices.filter(s => s.category === "Support").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length },
    { name: "Sustainability", count: microSaasServices.filter(s => s.category === "Sustainability").length },
    { name: "Agriculture", count: microSaasServices.filter(s => s.category === "Agriculture").length },
    { name: "Design", count: microSaasServices.filter(s => s.category === "Design").length },
    { name: "Blockchain", count: microSaasServices.filter(s => s.category === "Blockchain").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: "10+", label: "Micro SAAS Services", icon: <Cloud className="w-6 h-6" /> },
    { number: "1000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Activity className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - AI-Powered Business Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS services. From project management to financial analytics, transform your business with intelligent automation." />
        <meta name="keywords" content="micro SAAS, AI services, business automation, project management, social media management, customer support, financial analytics, AI tools" />
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive suite of AI-powered micro SAAS services for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Micro SAAS Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Micro SAAS Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Discover our comprehensive suite of AI-powered micro SAAS services designed to 
                  transform your business operations with intelligent automation and cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                  <a
                    href="#services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Browse by Category
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Find the perfect AI-powered solution for your business needs
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <span className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-semibold rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href={service.link}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your journey with our AI-powered micro SAAS services today. 
                  Get a free consultation and see how we can accelerate your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MicroSaasPage;