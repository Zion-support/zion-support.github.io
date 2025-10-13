import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle, Brain, Zap, Shield, BarChart3, Cloud, Users, Target, Calendar, Globe, Smartphone, Monitor, Database, Settings, TrendingUp, Award, Clock, DollarSign, Lock, Sparkles, Eye, MessageSquare, FileText, Image, Video, Music, Code, Search, Filter, Layers, Cpu, Network, Bot, Wand2 } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const AIServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Services - Zion Tech Group",
    "description": "Comprehensive AI services including machine learning, natural language processing, computer vision, and AI-powered business solutions",
    "url": "https://ziontechgroup.com/ai-services",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "AI Consulting Services",
          "description": "Strategic AI consulting and implementation services",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          }
        }
      ]
    }
  };

  const aiServices = [
    {
      name: "AI Consulting Services",
      description: "Strategic AI consulting to identify opportunities, develop AI strategies, and guide implementation. Transform your business with AI expertise.",
      price: "From $3,999/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["AI strategy development", "Opportunity assessment", "Implementation planning", "ROI analysis", "Change management", "Training programs"],
      category: "Consulting",
      rating: 4.9,
      clients: "150+",
      link: "/ai-consulting-services",
      featured: true,
      popular: true,
      duration: "2-4 weeks"
    },
    {
      name: "Machine Learning Solutions",
      description: "Custom machine learning models and algorithms tailored to your business needs. Predictive analytics, recommendation systems, and more.",
      price: "From $2,499/month",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Custom ML models", "Predictive analytics", "Recommendation systems", "Anomaly detection", "Model optimization", "A/B testing"],
      category: "Machine Learning",
      rating: 4.8,
      clients: "200+",
      link: "/machine-learning-solutions",
      featured: true,
      popular: true,
      duration: "3-6 weeks"
    },
    {
      name: "Natural Language Processing",
      description: "Advanced NLP solutions including chatbots, sentiment analysis, text summarization, and language translation services.",
      price: "From $1,999/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Chatbot development", "Sentiment analysis", "Text summarization", "Language translation", "Named entity recognition", "Text classification"],
      category: "NLP",
      rating: 4.9,
      clients: "300+",
      link: "/natural-language-processing",
      featured: true,
      popular: true,
      duration: "2-4 weeks"
    },
    {
      name: "Computer Vision Solutions",
      description: "Image and video analysis solutions including object detection, facial recognition, OCR, and automated visual inspection.",
      price: "From $2,299/month",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Object detection", "Facial recognition", "OCR technology", "Image classification", "Video analysis", "Quality inspection"],
      category: "Computer Vision",
      rating: 4.8,
      clients: "180+",
      link: "/computer-vision-solutions",
      featured: true,
      popular: false,
      duration: "3-5 weeks"
    },
    {
      name: "AI-Powered Analytics",
      description: "Advanced analytics solutions with AI-driven insights, automated reporting, and predictive business intelligence.",
      price: "From $1,799/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      features: ["Predictive analytics", "Automated reporting", "Real-time insights", "Data visualization", "Trend analysis", "Forecasting"],
      category: "Analytics",
      rating: 4.9,
      clients: "250+",
      link: "/ai-powered-analytics",
      featured: false,
      popular: true,
      duration: "2-3 weeks"
    },
    {
      name: "AI Content Generation",
      description: "AI-powered content creation including text, images, videos, and multimedia content. Scale your content production with AI.",
      price: "From $1,299/month",
      icon: <Wand2 className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Text generation", "Image creation", "Video production", "Content optimization", "Brand consistency", "Multi-language support"],
      category: "Content Creation",
      rating: 4.7,
      clients: "400+",
      link: "/ai-content-generation",
      featured: false,
      popular: true,
      duration: "1-2 weeks"
    },
    {
      name: "AI Automation Solutions",
      description: "Intelligent automation solutions to streamline business processes, reduce manual work, and improve efficiency.",
      price: "From $1,599/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Process automation", "Workflow optimization", "Task automation", "Document processing", "Email automation", "Integration APIs"],
      category: "Automation",
      rating: 4.8,
      clients: "320+",
      link: "/ai-automation-solutions",
      featured: false,
      popular: true,
      duration: "2-4 weeks"
    },
    {
      name: "AI Security Solutions",
      description: "AI-powered cybersecurity solutions including threat detection, fraud prevention, and intelligent security monitoring.",
      price: "From $2,199/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: ["Threat detection", "Fraud prevention", "Security monitoring", "Anomaly detection", "Risk assessment", "Incident response"],
      category: "Security",
      rating: 4.9,
      clients: "120+",
      link: "/ai-security-solutions",
      featured: true,
      popular: false,
      duration: "3-5 weeks"
    },
    {
      name: "AI Customer Service",
      description: "Intelligent customer service solutions including AI chatbots, virtual assistants, and automated support systems.",
      price: "From $999/month",
      icon: <Bot className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: ["AI chatbots", "Virtual assistants", "Automated support", "Multi-channel integration", "Sentiment analysis", "Escalation management"],
      category: "Customer Service",
      rating: 4.8,
      clients: "500+",
      link: "/ai-customer-service",
      featured: false,
      popular: true,
      duration: "1-3 weeks"
    },
    {
      name: "AI Data Processing",
      description: "Intelligent data processing and ETL solutions with AI-powered data cleaning, transformation, and integration.",
      price: "From $1,499/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: ["Data cleaning", "ETL automation", "Data integration", "Quality assurance", "Real-time processing", "Scalable infrastructure"],
      category: "Data Processing",
      rating: 4.7,
      clients: "200+",
      link: "/ai-data-processing",
      featured: false,
      popular: false,
      duration: "2-3 weeks"
    },
    {
      name: "AI Search & Discovery",
      description: "Intelligent search and discovery solutions with semantic search, recommendation engines, and content discovery.",
      price: "From $1,199/month",
      icon: <Search className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: ["Semantic search", "Recommendation engines", "Content discovery", "Personalization", "Search optimization", "Analytics dashboard"],
      category: "Search & Discovery",
      rating: 4.8,
      clients: "280+",
      link: "/ai-search-discovery",
      featured: false,
      popular: true,
      duration: "2-3 weeks"
    },
    {
      name: "AI Voice Solutions",
      description: "Voice AI solutions including speech recognition, text-to-speech, voice assistants, and conversational AI.",
      price: "From $1,699/month",
      icon: <Music className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      features: ["Speech recognition", "Text-to-speech", "Voice assistants", "Conversational AI", "Multi-language support", "Voice analytics"],
      category: "Voice AI",
      rating: 4.6,
      clients: "150+",
      link: "/ai-voice-solutions",
      featured: false,
      popular: false,
      duration: "3-4 weeks"
    }
  ];

  const categories = [
    { name: "All Services", count: aiServices.length, active: true },
    { name: "Consulting", count: aiServices.filter(s => s.category === "Consulting").length, active: false },
    { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length, active: false },
    { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length, active: false },
    { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length, active: false },
    { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Content Creation", count: aiServices.filter(s => s.category === "Content Creation").length, active: false },
    { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length, active: false },
    { name: "Security", count: aiServices.filter(s => s.category === "Security").length, active: false },
    { name: "Customer Service", count: aiServices.filter(s => s.category === "Customer Service").length, active: false },
    { name: "Data Processing", count: aiServices.filter(s => s.category === "Data Processing").length, active: false },
    { name: "Search & Discovery", count: aiServices.filter(s => s.category === "Search & Discovery").length, active: false },
    { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length, active: false }
  ];

  const benefits = [
    {
      title: "AI Expertise",
      description: "Deep expertise in cutting-edge AI technologies and methodologies",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Scalable Implementation",
      description: "AI solutions that grow with your business and adapt to changing requirements",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "ROI Focused",
      description: "AI implementations focused on delivering measurable business value and ROI",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Ethical AI",
      description: "Responsible AI development with ethical considerations and bias mitigation",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Continuous Learning",
      description: "AI models that continuously learn and improve from new data and feedback",
      icon: <Network className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: "E-commerce Personalization",
      description: "AI-powered product recommendations and personalized shopping experiences",
      icon: <Target className="w-6 h-6" />,
      industry: "Retail"
    },
    {
      title: "Healthcare Diagnostics",
      description: "AI-assisted medical imaging and diagnostic support systems",
      icon: <Eye className="w-6 h-6" />,
      industry: "Healthcare"
    },
    {
      title: "Financial Fraud Detection",
      description: "Real-time fraud detection and risk assessment for financial transactions",
      icon: <Shield className="w-6 h-6" />,
      industry: "Finance"
    },
    {
      title: "Manufacturing Quality Control",
      description: "Automated quality inspection and defect detection in manufacturing",
      icon: <Settings className="w-6 h-6" />,
      industry: "Manufacturing"
    },
    {
      title: "Customer Service Automation",
      description: "Intelligent chatbots and virtual assistants for customer support",
      icon: <Bot className="w-6 h-6" />,
      industry: "Services"
    },
    {
      title: "Content Moderation",
      description: "AI-powered content filtering and moderation for social platforms",
      icon: <Filter className="w-6 h-6" />,
      industry: "Social Media"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Comprehensive AI services including machine learning, NLP, computer vision, and AI-powered business solutions. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, machine learning, NLP, computer vision, AI consulting, AI automation, AI analytics"
        canonical="https://ziontechgroup.com/ai-services"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Cutting-Edge AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver AI-powered innovations that drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge AI solutions with unmatched expertise and proven results
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Use Cases Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming businesses across different industries
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <div className="mb-2">
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                {service.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({service.clients} clients)</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400">Duration: {service.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of businesses already using our AI services to drive innovation and growth. 
            Start your AI transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              View Micro SAAS
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;