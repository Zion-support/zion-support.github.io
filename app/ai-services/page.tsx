import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database, 
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  Settings,
  Globe,
  Mail,
  Clock,
  Zap,
  Target,
  Award,
  DollarSign,
  Play,
  ExternalLink
} from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      name: "AI Analytics Dashboard Pro",
      description: "Advanced business intelligence with real-time analytics, predictive modeling, and custom visualizations",
      price: "From $499/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics-dashboard-pro",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Machine Learning"],
      popular: true,
      category: "Analytics"
    },
    {
      name: "AI Cybersecurity Suite Pro",
      description: "Comprehensive security solution with AI-powered threat detection, automated response, and compliance monitoring",
      price: "From $799/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity-suite-pro",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports", "Incident Response"],
      popular: true,
      category: "Security"
    },
    {
      name: "AI Content Generation Pro",
      description: "Intelligent content creation with natural language processing, multi-format support, and brand consistency",
      price: "From $299/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation-pro",
      features: ["Content Creation", "Multi-format Support", "Brand Consistency", "SEO Optimization", "Plagiarism Detection"],
      category: "Content"
    },
    {
      name: "AI Customer Support Chatbot",
      description: "Intelligent customer service with natural language understanding, context awareness, and seamless handoff",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-customer-support-chatbot",
      features: ["Natural Language Processing", "Context Awareness", "Multi-channel Support", "Sentiment Analysis", "Human Handoff"],
      category: "Customer Service"
    },
    {
      name: "AI Code Assistant Pro",
      description: "Advanced coding assistant with code generation, debugging, optimization, and documentation",
      price: "From $399/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-code-assistant-pro",
      features: ["Code Generation", "Debugging Assistance", "Code Optimization", "Documentation", "Multi-language Support"],
      category: "Development"
    },
    {
      name: "AI Business Intelligence Pro",
      description: "Enterprise-grade BI with advanced analytics, data visualization, and strategic insights",
      price: "From $599/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/ai-business-intelligence-pro",
      features: ["Advanced Analytics", "Data Visualization", "Strategic Insights", "Report Automation", "Custom Metrics"],
      category: "Analytics"
    },
    {
      name: "AI Automation Platform",
      description: "Comprehensive automation solution with workflow orchestration, process optimization, and intelligent routing",
      price: "From $449/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-automation-platform",
      features: ["Workflow Orchestration", "Process Optimization", "Intelligent Routing", "Error Handling", "Performance Monitoring"],
      category: "Automation"
    },
    {
      name: "AI Data Analytics Pro",
      description: "Advanced data analysis with machine learning, statistical modeling, and predictive insights",
      price: "From $399/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/ai-data-analytics-pro",
      features: ["Machine Learning", "Statistical Modeling", "Predictive Insights", "Data Mining", "Pattern Recognition"],
      category: "Analytics"
    },
    {
      name: "AI Marketing Automation",
      description: "Intelligent marketing campaigns with audience segmentation, content optimization, and performance tracking",
      price: "From $349/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/ai-marketing-automation",
      features: ["Audience Segmentation", "Content Optimization", "Performance Tracking", "A/B Testing", "ROI Analysis"],
      category: "Marketing"
    },
    {
      name: "AI HR & Recruitment Pro",
      description: "Intelligent talent management with candidate screening, performance analysis, and workforce optimization",
      price: "From $299/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/ai-hr-recruitment-pro",
      features: ["Candidate Screening", "Performance Analysis", "Workforce Optimization", "Skills Assessment", "Retention Prediction"],
      category: "Human Resources"
    },
    {
      name: "AI Financial Analysis",
      description: "Advanced financial modeling with risk assessment, fraud detection, and investment optimization",
      price: "From $499/month",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      link: "/ai-financial-analysis",
      features: ["Risk Assessment", "Fraud Detection", "Investment Optimization", "Financial Modeling", "Compliance Monitoring"],
      category: "Finance"
    },
    {
      name: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning",
      price: "From $599/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      link: "/ai-supply-chain-optimizer",
      features: ["Demand Forecasting", "Inventory Optimization", "Logistics Planning", "Risk Management", "Cost Optimization"],
      category: "Supply Chain"
    },
    {
      name: "AI Voice Assistant Pro",
      description: "Advanced voice AI with natural language understanding, multi-language support, and context awareness",
      price: "From $249/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      link: "/ai-voice-assistant-pro",
      features: ["Natural Language Understanding", "Multi-language Support", "Context Awareness", "Voice Synthesis", "Integration APIs"],
      category: "Voice AI"
    },
    {
      name: "AI Image Recognition Pro",
      description: "Advanced computer vision with object detection, facial recognition, and image analysis",
      price: "From $199/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      link: "/ai-image-recognition-pro",
      features: ["Object Detection", "Facial Recognition", "Image Analysis", "Quality Assessment", "Content Moderation"],
      category: "Computer Vision"
    },
    {
      name: "AI Predictive Maintenance",
      description: "Intelligent maintenance scheduling with equipment monitoring, failure prediction, and optimization",
      price: "From $399/month",
      icon: <Clock className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/ai-predictive-maintenance",
      features: ["Equipment Monitoring", "Failure Prediction", "Maintenance Scheduling", "Cost Optimization", "Performance Tracking"],
      category: "Maintenance"
    },
    {
      name: "AI Sentiment Analysis Pro",
      description: "Advanced sentiment analysis with emotion detection, brand monitoring, and social media insights",
      price: "From $179/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      link: "/ai-sentiment-analysis-pro",
      features: ["Emotion Detection", "Brand Monitoring", "Social Media Insights", "Trend Analysis", "Alert System"],
      category: "Analytics"
    },
    {
      name: "AI Recommendation Engine",
      description: "Intelligent recommendation system with personalization, collaborative filtering, and real-time updates",
      price: "From $299/month",
      icon: <Star className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/ai-recommendation-engine",
      features: ["Personalization", "Collaborative Filtering", "Real-time Updates", "A/B Testing", "Performance Analytics"],
      category: "Recommendation"
    },
    {
      name: "AI Fraud Detection Pro",
      description: "Advanced fraud prevention with real-time monitoring, pattern recognition, and risk scoring",
      price: "From $599/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/ai-fraud-detection-pro",
      features: ["Real-time Monitoring", "Pattern Recognition", "Risk Scoring", "Alert System", "Compliance Reporting"],
      category: "Security"
    },
    {
      name: "AI Language Translation",
      description: "Advanced translation service with context awareness, cultural adaptation, and real-time processing",
      price: "From $149/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-language-translation",
      features: ["Context Awareness", "Cultural Adaptation", "Real-time Processing", "Multi-language Support", "Quality Assessment"],
      category: "Language"
    },
    {
      name: "AI Chatbot Enterprise",
      description: "Enterprise-grade chatbot with advanced NLP, integration capabilities, and analytics dashboard",
      price: "From $399/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-chatbot-enterprise",
      features: ["Advanced NLP", "Integration Capabilities", "Analytics Dashboard", "Custom Training", "Multi-channel Support"],
      category: "Customer Service"
    },
    {
      name: "AI Data Mining Pro",
      description: "Advanced data extraction and analysis with pattern discovery, anomaly detection, and insights generation",
      price: "From $349/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      link: "/ai-data-mining-pro",
      features: ["Pattern Discovery", "Anomaly Detection", "Insights Generation", "Data Cleaning", "Visualization"],
      category: "Data Science"
    },
    {
      name: "AI Video Analysis",
      description: "Intelligent video processing with object tracking, scene analysis, and content moderation",
      price: "From $299/month",
      icon: <Play className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-video-analysis",
      features: ["Object Tracking", "Scene Analysis", "Content Moderation", "Motion Detection", "Quality Assessment"],
      category: "Computer Vision"
    },
    {
      name: "AI Time Series Forecasting",
      description: "Advanced time series analysis with trend prediction, seasonal adjustment, and anomaly detection",
      price: "From $249/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-time-series-forecasting",
      features: ["Trend Prediction", "Seasonal Adjustment", "Anomaly Detection", "Confidence Intervals", "Model Selection"],
      category: "Analytics"
    },
    {
      name: "AI NLP Text Analysis",
      description: "Natural language processing with text classification, entity extraction, and semantic analysis",
      price: "From $199/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/ai-nlp-text-analysis",
      features: ["Text Classification", "Entity Extraction", "Semantic Analysis", "Language Detection", "Sentiment Analysis"],
      category: "Language"
    }
  ];

  const categories = [
    { name: "Analytics", count: 5, color: "from-blue-500 to-cyan-500" },
    { name: "Security", count: 2, color: "from-red-500 to-orange-500" },
    { name: "Content", count: 1, color: "from-purple-500 to-pink-500" },
    { name: "Customer Service", count: 2, color: "from-green-500 to-emerald-500" },
    { name: "Development", count: 1, color: "from-indigo-500 to-purple-500" },
    { name: "Automation", count: 1, color: "from-yellow-500 to-orange-500" },
    { name: "Marketing", count: 1, color: "from-pink-500 to-rose-500" },
    { name: "Human Resources", count: 1, color: "from-violet-500 to-purple-500" },
    { name: "Finance", count: 1, color: "from-emerald-500 to-green-500" },
    { name: "Supply Chain", count: 1, color: "from-blue-500 to-indigo-500" },
    { name: "Voice AI", count: 1, color: "from-amber-500 to-yellow-500" },
    { name: "Computer Vision", count: 2, color: "from-cyan-500 to-teal-500" },
    { name: "Maintenance", count: 1, color: "from-orange-500 to-red-500" },
    { name: "Recommendation", count: 1, color: "from-pink-500 to-rose-500" },
    { name: "Language", count: 2, color: "from-blue-500 to-cyan-500" },
    { name: "Data Science", count: 1, color: "from-slate-500 to-gray-500" }
  ];

  const benefits = [
    {
      title: "Cutting-Edge AI",
      description: "Latest artificial intelligence technologies and machine learning algorithms",
      icon: <Brain className="w-6 h-6" />,
      stat: "99.9% accuracy"
    },
    {
      title: "Scalable Solutions",
      description: "Enterprise-grade solutions that grow with your business",
      icon: <Cloud className="w-6 h-6" />,
      stat: "Unlimited scaling"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: <Clock className="w-6 h-6" />,
      stat: "Always available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI services including analytics, cybersecurity, automation, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, analytics, cybersecurity, automation, business intelligence" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI services. From advanced analytics to intelligent automation, 
            we provide cutting-edge artificial intelligence solutions tailored to your specific needs.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-medium text-sm">{category.name}</h3>
                <p className="text-gray-400 text-xs">{category.count} services</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiServices.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <div className="mb-2">
                <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                {service.price}
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-sm text-cyan-400 font-medium">
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>
              
              <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom AI Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our AI experts can create a custom solution tailored to your specific business requirements. 
              Let's discuss your needs and build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Discuss Your AI Needs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View AI Demo
                <Play className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
