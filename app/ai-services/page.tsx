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
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServices = () => {
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
      title: "AI Analytics Pro",
      description: "Advanced AI-powered analytics platform for comprehensive business intelligence and data-driven decision making",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $99/month",
      link: "/ai-analytics",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"]
    },
    {
      title: "AI Automation Platform",
      description: "Comprehensive automation platform powered by AI to streamline business processes and increase efficiency",
      icon: <Zap className="w-8 h-8" />,
      price: "From $79/month",
      link: "/ai-automation-platform",
      features: ["Workflow automation", "Smart scheduling", "Process optimization", "Custom integrations"]
    },
    {
      title: "AI Climate Prediction Engine",
      description: "Advanced climate modeling and prediction system using AI to forecast weather patterns and environmental changes",
      icon: <Globe className="w-8 h-8" />,
      price: "From $149/month",
      link: "/ai-climate-prediction-engine",
      features: ["Weather forecasting", "Climate modeling", "Risk assessment", "Environmental monitoring"]
    },
    {
      title: "AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis and tracking system to understand customer emotions and feedback",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $59/month",
      link: "/ai-customer-sentiment-tracker",
      features: ["Sentiment analysis", "Real-time monitoring", "Multi-language support", "Custom alerts"]
    },
    {
      title: "AI Data Analytics Pro",
      description: "Professional-grade data analytics platform with AI-powered insights and automated reporting capabilities",
      icon: <Database className="w-8 h-8" />,
      price: "From $89/month",
      link: "/ai-data-analytics-pro",
      features: ["Data visualization", "Automated reports", "Machine learning", "Cloud integration"]
    },
    {
      title: "AI Financial Analysis",
      description: "Comprehensive financial analysis platform using AI for market prediction, risk assessment, and investment insights",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $199/month",
      link: "/ai-financial-analysis",
      features: ["Market analysis", "Risk assessment", "Portfolio optimization", "Real-time data"]
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "Advanced AI-powered healthcare diagnostic system for medical image analysis and disease detection",
      icon: <Shield className="w-8 h-8" />,
      price: "From $299/month",
      link: "/ai-healthcare-diagnostics",
      features: ["Medical imaging", "Disease detection", "Diagnostic support", "HIPAA compliant"]
    },
    {
      title: "AI Holographic Workspace",
      description: "Next-generation holographic workspace powered by AI for immersive collaboration and productivity",
      icon: <Eye className="w-8 h-8" />,
      price: "From $399/month",
      link: "/ai-holographic-workspace",
      features: ["3D visualization", "Virtual collaboration", "AI assistance", "Immersive interface"]
    },
    {
      title: "AI HR Recruitment Pro",
      description: "Intelligent HR recruitment platform using AI for candidate screening, matching, and interview optimization",
      icon: <Users className="w-8 h-8" />,
      price: "From $129/month",
      link: "/ai-hr-recruitment-pro",
      features: ["Candidate screening", "Skill matching", "Interview optimization", "Bias reduction"]
    },
    {
      title: "AI Image Recognition Pro",
      description: "Advanced image recognition and analysis platform powered by AI for object detection and classification",
      icon: <Target className="w-8 h-8" />,
      price: "From $79/month",
      link: "/ai-image-recognition-pro",
      features: ["Object detection", "Image classification", "Real-time processing", "Custom models"]
    },
    {
      title: "AI-Powered DevOps",
      description: "Intelligent DevOps platform with AI-powered automation, monitoring, and optimization capabilities",
      icon: <Settings className="w-8 h-8" />,
      price: "From $159/month",
      link: "/ai-powered-devops",
      features: ["Automated deployment", "Performance monitoring", "Predictive maintenance", "CI/CD optimization"]
    },
    {
      title: "AI-Powered Email Analyzer",
      description: "Intelligent email analysis platform using AI for spam detection, sentiment analysis, and optimization",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $49/month",
      link: "/ai-powered-email-analyzer",
      features: ["Spam detection", "Sentiment analysis", "Email optimization", "Security scanning"]
    },
    {
      title: "AI Quantum Computing",
      description: "Cutting-edge quantum computing platform with AI integration for complex problem solving and optimization",
      icon: <Zap className="w-8 h-8" />,
      price: "From $499/month",
      link: "/ai-quantum-computing",
      features: ["Quantum algorithms", "AI integration", "Complex optimization", "Research tools"]
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain optimization platform using AI for logistics, inventory management, and forecasting",
      icon: <Globe className="w-8 h-8" />,
      price: "From $179/month",
      link: "/ai-supply-chain-optimizer",
      features: ["Logistics optimization", "Inventory management", "Demand forecasting", "Route planning"]
    },
    {
      title: "AI Translation Service",
      description: "Advanced AI-powered translation service supporting 100+ languages with real-time translation capabilities",
      icon: <Globe className="w-8 h-8" />,
      price: "From $39/month",
      link: "/ai-translation-service",
      features: ["100+ languages", "Real-time translation", "Context awareness", "API integration"]
    }
  ];

  const stats = [
    { label: "AI Services", value: "16+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Success Rate", value: "99.9%" },
    { label: "Uptime", value: "99.9%" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, healthcare diagnostics, and more. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, analytics, automation, healthcare AI, business intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive suite of AI-powered services. 
                From analytics to automation, we provide cutting-edge solutions tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className={`p-6 h-full ${service.featured ? 'ring-2 ring-blue-400' : ''}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    {service.featured && (
                      <Star className="w-5 h-5 text-yellow-400 ml-auto" />
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={service.link}>
                    <FuturisticButton className="w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </FuturisticButton>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our AI experts to discuss your requirements and discover how our services can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/services">
                  <FuturisticButton variant="outline" size="lg">
                    View All Services
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default AIServices;