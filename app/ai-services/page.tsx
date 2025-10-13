import React from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Mail, 
  Target, 
  Code, 
  Database, 
  Users, 
  FileText, 
  Globe, 
  Smartphone,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  Sparkles,
  TrendingUp,
  Lock,
  Settings,
  Monitor,
  Server,
  Cpu,
  Eye,
  MessageSquare,
  Search,
  Filter,
  Layers,
  Workflow
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const AIServicesPage = () => {
  const aiServices = [
    {
      id: "ai-analytics-dashboard",
      name: "AI Analytics Dashboard Pro",
      tagline: "Advanced Business Intelligence with AI",
      description: "Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and automated reporting.",
      price: "From $299/month",
      features: [
        "Real-time data visualization",
        "Predictive analytics & forecasting",
        "Custom dashboard builder",
        "Automated report generation",
        "Multi-source data integration",
        "Advanced AI insights",
        "Mobile & desktop access",
        "24/7 customer support"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      category: "Analytics",
      popular: true,
      link: "/ai-analytics-dashboard-pro"
    },
    {
      id: "ai-content-generator",
      name: "AI Content Generator Pro",
      tagline: "Intelligent Content Creation Platform",
      description: "Create engaging content at scale with our advanced AI content generation platform. Blog posts, social media, marketing materials, and more.",
      price: "From $199/month",
      features: [
        "AI content generation",
        "Multi-format support",
        "Brand voice customization",
        "SEO optimization tools",
        "Content calendar management",
        "Team collaboration features",
        "Performance analytics",
        "Template library"
      ],
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      category: "Content",
      popular: true,
      link: "/ai-content-generator"
    },
    {
      id: "ai-cybersecurity-suite",
      name: "AI Cybersecurity Suite Pro",
      tagline: "Next-Generation Security with AI",
      description: "Protect your business with AI-powered cybersecurity solutions. Real-time threat detection, automated response, and advanced security analytics.",
      price: "From $499/month",
      features: [
        "AI threat detection",
        "Automated incident response",
        "Behavioral analysis",
        "Vulnerability assessment",
        "Security compliance reporting",
        "Multi-layer protection",
        "24/7 monitoring",
        "Expert security team"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      category: "Security",
      popular: true,
      link: "/ai-cybersecurity-suite-pro"
    },
    {
      id: "ai-customer-support",
      name: "AI Customer Support Chatbot",
      tagline: "Intelligent Customer Service Automation",
      description: "Enhance customer experience with our AI-powered support chatbot. Natural language processing, sentiment analysis, and seamless human handoff.",
      price: "From $149/month",
      features: [
        "Natural language processing",
        "Sentiment analysis",
        "Multi-language support",
        "Seamless human handoff",
        "Knowledge base integration",
        "Real-time analytics",
        "Custom training",
        "24/7 availability"
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      category: "Customer Service",
      popular: false,
      link: "/ai-customer-support-chatbot"
    },
    {
      id: "ai-code-assistant",
      name: "AI Code Assistant Pro",
      tagline: "Intelligent Development Companion",
      description: "Accelerate your development with AI-powered code generation, debugging, and optimization. Support for multiple programming languages and frameworks.",
      price: "From $249/month",
      features: [
        "Code generation & completion",
        "Intelligent debugging",
        "Code optimization suggestions",
        "Multi-language support",
        "Framework integration",
        "Code review assistance",
        "Documentation generation",
        "Team collaboration tools"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      category: "Development",
      popular: false,
      link: "/ai-code-assistant-pro"
    },
    {
      id: "ai-business-intelligence",
      name: "AI Business Intelligence Pro",
      tagline: "Smart Business Decision Making",
      description: "Make data-driven decisions with our AI-powered business intelligence platform. Advanced analytics, forecasting, and strategic insights.",
      price: "From $399/month",
      features: [
        "Advanced data analytics",
        "Predictive modeling",
        "Strategic insights",
        "Custom reporting",
        "Data visualization",
        "Trend analysis",
        "ROI optimization",
        "Executive dashboards"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      category: "Business Intelligence",
      popular: false,
      link: "/ai-business-intelligence-pro"
    },
    {
      id: "ai-marketing-automation",
      name: "AI Marketing Automation Pro",
      tagline: "Intelligent Marketing Campaign Management",
      description: "Optimize your marketing campaigns with AI-powered automation. Personalization, audience targeting, and performance optimization.",
      price: "From $179/month",
      features: [
        "AI-powered personalization",
        "Audience segmentation",
        "Campaign optimization",
        "A/B testing automation",
        "Performance analytics",
        "Multi-channel management",
        "Lead scoring",
        "ROI tracking"
      ],
      icon: <Target className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      category: "Marketing",
      popular: false,
      link: "/ai-marketing"
    },
    {
      id: "ai-data-analytics",
      name: "AI Data Analytics Pro",
      tagline: "Advanced Data Processing & Insights",
      description: "Extract valuable insights from your data with our AI-powered analytics platform. Machine learning, pattern recognition, and automated reporting.",
      price: "From $329/month",
      features: [
        "Machine learning algorithms",
        "Pattern recognition",
        "Automated data processing",
        "Real-time analytics",
        "Custom model training",
        "Data visualization",
        "Predictive insights",
        "API integration"
      ],
      icon: <Database className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      category: "Data Analytics",
      popular: false,
      link: "/ai-data-analytics"
    },
    {
      id: "ai-workflow-automation",
      name: "AI Workflow Automation Pro",
      tagline: "Intelligent Business Process Automation",
      description: "Automate complex business processes with AI-powered workflow automation. Smart decision making, exception handling, and continuous optimization.",
      price: "From $219/month",
      features: [
        "Intelligent process automation",
        "Smart decision making",
        "Exception handling",
        "Continuous optimization",
        "Multi-system integration",
        "Custom workflow builder",
        "Performance monitoring",
        "Scalable architecture"
      ],
      icon: <Workflow className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      category: "Automation",
      popular: false,
      link: "/ai-workflow-automation"
    },
    {
      id: "ai-predictive-analytics",
      name: "AI Predictive Analytics Pro",
      tagline: "Future-Ready Business Forecasting",
      description: "Predict future trends and outcomes with our advanced AI predictive analytics platform. Forecasting, risk assessment, and strategic planning.",
      price: "From $449/month",
      features: [
        "Advanced forecasting models",
        "Risk assessment",
        "Scenario planning",
        "Trend analysis",
        "Anomaly detection",
        "Custom model development",
        "Real-time predictions",
        "Strategic insights"
      ],
      icon: <Eye className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      category: "Predictive Analytics",
      popular: false,
      link: "/ai-predictive-analytics"
    },
    {
      id: "ai-recommendation-engine",
      name: "AI Recommendation Engine Pro",
      tagline: "Personalized User Experience Platform",
      description: "Enhance user engagement with our AI-powered recommendation engine. Personalized content, product suggestions, and user behavior analysis.",
      price: "From $279/month",
      features: [
        "Personalized recommendations",
        "User behavior analysis",
        "Content optimization",
        "A/B testing",
        "Real-time personalization",
        "Multi-channel support",
        "Performance analytics",
        "Custom algorithms"
      ],
      icon: <Search className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      category: "Recommendation",
      popular: false,
      link: "/ai-recommendation-engine"
    },
    {
      id: "ai-sales-automation",
      name: "AI Sales Automation Pro",
      tagline: "Intelligent Sales Process Optimization",
      description: "Optimize your sales process with AI-powered automation. Lead scoring, sales forecasting, and intelligent customer engagement.",
      price: "From $199/month",
      features: [
        "Intelligent lead scoring",
        "Sales forecasting",
        "Customer engagement automation",
        "Pipeline optimization",
        "Performance analytics",
        "CRM integration",
        "Custom workflows",
        "Team collaboration"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      category: "Sales",
      popular: false,
      link: "/ai-sales-automation"
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length },
    { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
    { name: "Content", count: aiServices.filter(s => s.category === "Content").length },
    { name: "Security", count: aiServices.filter(s => s.category === "Security").length },
    { name: "Customer Service", count: aiServices.filter(s => s.category === "Customer Service").length },
    { name: "Development", count: aiServices.filter(s => s.category === "Development").length },
    { name: "Business Intelligence", count: aiServices.filter(s => s.category === "Business Intelligence").length },
    { name: "Marketing", count: aiServices.filter(s => s.category === "Marketing").length },
    { name: "Data Analytics", count: aiServices.filter(s => s.category === "Data Analytics").length },
    { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length },
    { name: "Predictive Analytics", count: aiServices.filter(s => s.category === "Predictive Analytics").length },
    { name: "Recommendation", count: aiServices.filter(s => s.category === "Recommendation").length },
    { name: "Sales", count: aiServices.filter(s => s.category === "Sales").length }
  ];

  const stats = [
    { number: "12+", label: "AI Service Categories", icon: <Brain className="w-6 h-6" /> },
    { number: "50+", label: "AI Models Deployed", icon: <Cpu className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: "E-commerce Personalization",
      description: "Increase conversion rates by 35% with AI-powered product recommendations and personalized shopping experiences.",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Fraud Detection",
      description: "Detect fraudulent transactions in real-time with 99.8% accuracy using advanced machine learning algorithms.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Healthcare Diagnostics",
      description: "Assist medical professionals with AI-powered diagnostic tools and treatment recommendations.",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Manufacturing Optimization",
      description: "Optimize production processes and reduce costs by 25% with predictive maintenance and quality control.",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services. Analytics, automation, cybersecurity, content generation, and more. Enterprise-grade AI solutions starting from $149/month."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI cybersecurity, AI content generation, business intelligence"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}
              & Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From analytics to automation, we provide enterprise-grade AI services that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get AI Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch AI Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World AI Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions are transforming businesses across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      <span className="text-xs text-yellow-400 font-medium">Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.tagline}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-xs text-gray-400">per month</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business with our comprehensive AI solutions. From analytics to automation, 
            we provide the tools and expertise you need to stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View AI Pricing
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;