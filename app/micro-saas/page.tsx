import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mic, 
  BarChart3, 
  Globe, 
  Shield, 
  Sparkles, 
  Users, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Settings, 
  Clock,
  Award,
  Activity,
  Target,
  Database,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSAAS = () => {
  const categories = [
    {
      title: "AI & Machine Learning",
      description: "Revolutionary AI solutions powered by advanced machine learning algorithms",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      count: 25
    },
    {
      title: "Business Intelligence",
      description: "Advanced analytics and data visualization for informed decision making",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      count: 15
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions with AI-powered threat detection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      count: 12
    },
    {
      title: "Communication",
      description: "Advanced communication tools and voice synthesis technologies",
      icon: <Mic className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      count: 8
    }
  ];

  const featuredServices = [
    {
      name: "Zion AI Neural Interface",
      description: "Revolutionary brain-computer interface for thought-to-text conversion and mind control",
      price: "From $199/month",
      icon: <Brain className="w-6 h-6" />,
      link: "/zion-ai-neural-interface",
      category: "AI & Machine Learning",
      accuracy: "98.5% Neural Accuracy",
      features: ["Thought-to-text", "Mind control", "Real-time processing", "Neural security"]
    },
    {
      name: "AI Voice Cloning Studio",
      description: "Professional voice synthesis with 95% accuracy and multi-language support",
      price: "From $29/month",
      icon: <Mic className="w-6 h-6" />,
      link: "/ai-voice-cloning-studio",
      category: "Communication",
      accuracy: "95% Voice Accuracy",
      features: ["Voice synthesis", "Multi-language", "Real-time", "Enterprise security"]
    },
    {
      name: "AI Quantum Financial Oracle",
      description: "Quantum-powered financial predictions with 99.7% accuracy for market analysis",
      price: "From $199/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/ai-quantum-financial-oracle",
      category: "Business Intelligence",
      accuracy: "99.7% Prediction Accuracy",
      features: ["Market prediction", "Risk management", "Portfolio optimization", "Real-time analysis"]
    },
    {
      name: "AI Space Mission Optimizer",
      description: "Advanced space mission optimization with 99.9% trajectory accuracy",
      price: "From $499/month",
      icon: <Globe className="w-6 h-6" />,
      link: "/ai-space-mission-optimizer",
      category: "AI & Machine Learning",
      accuracy: "99.9% Trajectory Accuracy",
      features: ["Mission planning", "Trajectory optimization", "Risk assessment", "Real-time control"]
    },
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-analytics-pro",
      category: "Business Intelligence",
      accuracy: "500+ Integrations",
      features: ["Real-time dashboards", "AI insights", "Data integration", "Team collaboration"]
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/zion-security-shield",
      category: "Cybersecurity",
      accuracy: "99.9% Threat Detection",
      features: ["Threat detection", "Automated response", "Real-time monitoring", "Compliance"]
    }
  ];

  const allServices = [
    // AI & Machine Learning Services
    { name: "AI Content Generation Pro", price: "$99/month", link: "/ai-content-generation-pro", category: "AI & Machine Learning" },
    { name: "AI Customer Support Chatbot", price: "$149/month", link: "/ai-customer-support-chatbot", category: "AI & Machine Learning" },
    { name: "AI Code Assistant Pro", price: "$199/month", link: "/ai-code-assistant-pro", category: "AI & Machine Learning" },
    { name: "AI Business Intelligence Pro", price: "$299/month", link: "/ai-business-intelligence-pro", category: "AI & Machine Learning" },
    { name: "AI Automation Platform", price: "$399/month", link: "/ai-automation-platform", category: "AI & Machine Learning" },
    { name: "AI Data Analytics Pro", price: "$249/month", link: "/ai-data-analytics-pro", category: "AI & Machine Learning" },
    { name: "AI Marketing Automation", price: "$179/month", link: "/ai-marketing-automation", category: "AI & Machine Learning" },
    { name: "AI HR & Recruitment Pro", price: "$229/month", link: "/ai-hr-recruitment-pro", category: "AI & Machine Learning" },
    { name: "AI Financial Analysis", price: "$199/month", link: "/ai-financial-analysis", category: "AI & Machine Learning" },
    { name: "AI Supply Chain Optimizer", price: "$349/month", link: "/ai-supply-chain-optimizer", category: "AI & Machine Learning" },
    { name: "AI Voice Assistant Pro", price: "$129/month", link: "/ai-voice-assistant-pro", category: "AI & Machine Learning" },
    { name: "AI Image Recognition Pro", price: "$159/month", link: "/ai-image-recognition-pro", category: "AI & Machine Learning" },
    { name: "AI Predictive Maintenance", price: "$279/month", link: "/ai-predictive-maintenance", category: "AI & Machine Learning" },
    { name: "AI Sentiment Analysis Pro", price: "$149/month", link: "/ai-sentiment-analysis-pro", category: "AI & Machine Learning" },
    { name: "AI Recommendation Engine", price: "$199/month", link: "/ai-recommendation-engine", category: "AI & Machine Learning" },
    { name: "AI Fraud Detection Pro", price: "$299/month", link: "/ai-fraud-detection-pro", category: "AI & Machine Learning" },
    { name: "AI Language Translation", price: "$99/month", link: "/ai-language-translation", category: "AI & Machine Learning" },
    { name: "AI Chatbot Enterprise", price: "$399/month", link: "/ai-chatbot-enterprise", category: "AI & Machine Learning" },
    { name: "AI Data Mining Pro", price: "$229/month", link: "/ai-data-mining-pro", category: "AI & Machine Learning" },
    { name: "AI Video Analysis", price: "$179/month", link: "/ai-video-analysis", category: "AI & Machine Learning" },
    { name: "AI Time Series Forecasting", price: "$199/month", link: "/ai-time-series-forecasting", category: "AI & Machine Learning" },
    { name: "AI NLP Text Analysis", price: "$129/month", link: "/ai-nlp-text-analysis", category: "AI & Machine Learning" },
    { name: "AI Cybersecurity Suite Pro", price: "$399/month", link: "/ai-cybersecurity-suite-pro", category: "AI & Machine Learning" },
    { name: "AI Content Moderation Pro", price: "$149/month", link: "/ai-content-moderation-pro", category: "AI & Machine Learning" },
    { name: "AI Document Intelligence", price: "$199/month", link: "/ai-document-intelligence", category: "AI & Machine Learning" },

    // Business Intelligence Services
    { name: "Zion Cloud Vault", price: "$199/month", link: "/zion-cloud-vault", category: "Business Intelligence" },
    { name: "Zion AI Inventory Manager", price: "$249/month", link: "/zion-ai-inventory-manager", category: "Business Intelligence" },
    { name: "Zion HR Assistant Pro", price: "$179/month", link: "/zion-hr-assistant-pro", category: "Business Intelligence" },
    { name: "Zion AI Accounting Suite", price: "$299/month", link: "/zion-ai-accounting-suite", category: "Business Intelligence" },
    { name: "Zion E-commerce Optimizer", price: "$199/month", link: "/zion-ecommerce-optimizer", category: "Business Intelligence" },
    { name: "Zion AI Customer Insights", price: "$229/month", link: "/zion-ai-customer-insights", category: "Business Intelligence" },
    { name: "Zion AI Lead Scoring", price: "$149/month", link: "/zion-ai-lead-scoring", category: "Business Intelligence" },
    { name: "Zion AI Document Processor", price: "$179/month", link: "/zion-ai-document-processor", category: "Business Intelligence" },
    { name: "Zion AI Social Listener", price: "$199/month", link: "/zion-ai-social-listener", category: "Business Intelligence" },
    { name: "Zion AI Email Optimizer", price: "$129/month", link: "/zion-ai-email-optimizer", category: "Business Intelligence" },
    { name: "Zion AI Meeting Assistant", price: "$149/month", link: "/zion-ai-meeting-assistant", category: "Business Intelligence" },
    { name: "Zion AI Expense Tracker", price: "$99/month", link: "/zion-ai-expense-tracker", category: "Business Intelligence" },
    { name: "Zion AI Survey Builder", price: "$79/month", link: "/zion-ai-survey-builder", category: "Business Intelligence" },
    { name: "Zion AI Chatbot Builder", price: "$199/month", link: "/zion-ai-chatbot-builder", category: "Business Intelligence" },
    { name: "Zion AI Workflow Automation", price: "$249/month", link: "/zion-ai-workflow-automation", category: "Business Intelligence" },

    // Cybersecurity Services
    { name: "Zion AI SEO Optimizer", price: "$149/month", link: "/zion-ai-seo-optimizer", category: "Cybersecurity" },
    { name: "Zion AI Data Warehouse", price: "$299/month", link: "/zion-ai-data-warehouse", category: "Cybersecurity" },
    { name: "Zion AI Mobile App Builder", price: "$399/month", link: "/zion-ai-mobile-app-builder", category: "Cybersecurity" },
    { name: "Zion AI API Manager", price: "$199/month", link: "/zion-ai-api-manager", category: "Cybersecurity" },
    { name: "Zion AI Backup Manager", price: "$129/month", link: "/zion-ai-backup-manager", category: "Cybersecurity" },
    { name: "Zion AI Testing Automation", price: "$179/month", link: "/zion-ai-testing-automation", category: "Cybersecurity" },
    { name: "Advanced Security Suite", price: "$499/month", link: "/advanced-security-suite", category: "Cybersecurity" },
    { name: "AI Cybersecurity Monitor Pro", price: "$349/month", link: "/ai-cybersecurity-monitor-pro", category: "Cybersecurity" },
    { name: "AI Cyber Defense Matrix", price: "$599/month", link: "/ai-cyber-defense-matrix", category: "Cybersecurity" },
    { name: "AI Blockchain Solutions", price: "$399/month", link: "/ai-blockchain-solutions", category: "Cybersecurity" },
    { name: "AI Blockchain Analytics", price: "$299/month", link: "/ai-blockchain-analytics", category: "Cybersecurity" },
    { name: "AI Cloud Infrastructure", price: "$449/month", link: "/ai-cloud-infrastructure", category: "Cybersecurity" },

    // Communication Services
    { name: "AI Content Studio", price: "$199/month", link: "/ai-content-studio", category: "Communication" },
    { name: "AI Content Writer", price: "$99/month", link: "/ai-content-writer", category: "Communication" },
    { name: "AI Content Management", price: "$149/month", link: "/ai-content-management", category: "Communication" },
    { name: "AI Conversation Analytics", price: "$179/month", link: "/ai-conversation-analytics", category: "Communication" },
    { name: "AI Conversational AI", price: "$229/month", link: "/ai-conversational-ai", category: "Communication" },
    { name: "AI Customer Service", price: "$199/month", link: "/ai-customer-service", category: "Communication" },
    { name: "AI Customer Support", price: "$179/month", link: "/ai-customer-support", category: "Communication" },
    { name: "AI Customer Support Bot", price: "$149/month", link: "/ai-customer-support-bot", category: "Communication" }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - 60+ AI-Powered Software Solutions | Zion Tech Group"
        description="Discover 60+ revolutionary micro SAAS solutions powered by AI and advanced technology. From neural interfaces to quantum financial predictions, transform your business with cutting-edge software."
        keywords="micro SAAS, software solutions, AI tools, business automation, productivity software, technology solutions, software as a service"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">60+ Revolutionary Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of 60+ revolutionary micro SAAS solutions powered by 
            advanced AI and cutting-edge technology. Transform your business operations with ready-to-use software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#solutions"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
            <FuturisticButton
              href="#contact"
              variant="outline"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              Get Custom Quote
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our micro SAAS solutions are organized into specialized categories to help you find exactly what you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <FuturisticCard
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="text-cyan-400 font-medium">
                  {category.count} Solutions
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30">
                    {service.accuracy}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  to={service.link}
                  className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* All Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-cyan-400 text-xs font-medium">{service.price}</span>
                </div>
                <div className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                  {service.category}
                </div>
              </Link>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get a custom quote for our micro SAAS solutions or speak with our experts about your specific needs.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Get Custom Quote
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSAAS;