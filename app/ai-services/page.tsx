import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Eye,
  MessageSquare,
  Settings,
  Mic,
  FileText,
  Truck,
  Heart,
  Scale,
  CheckCircle
} from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      title: "AI Business Intelligence Pro",
      description: "Transform raw data into actionable insights with advanced AI analytics, predictive modeling, and real-time dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-business-intelligence-pro",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization"],
      price: "From $299/month",
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with AI-powered writing tools, SEO optimization, and multi-format output.",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation-studio",
      features: ["Automated Writing", "SEO Optimization", "Multi-language Support", "Brand Voice Training"],
      price: "From $149/month"
    },
    {
      title: "AI Cybersecurity Defense Matrix",
      description: "Advanced threat detection and response with AI-powered security monitoring and automated incident response.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity-defense-matrix",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reporting"],
      price: "From $399/month",
      popular: true
    },
    {
      title: "AI Customer Support Automation",
      description: "Intelligent chatbots and customer service automation with natural language processing and sentiment analysis.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-customer-support-automation",
      features: ["Smart Chatbots", "Sentiment Analysis", "Multi-channel Support", "Live Handoff"],
      price: "From $199/month"
    },
    {
      title: "AI Data Analytics Platform",
      description: "Advanced data processing and visualization with machine learning models and automated insights generation.",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-data-analytics-platform",
      features: ["Data Mining", "Pattern Recognition", "Predictive Modeling", "Interactive Dashboards"],
      price: "From $179/month"
    },
    {
      title: "AI Workflow Automation Hub",
      description: "Intelligent business process automation with AI-powered decision making and smart routing capabilities.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-workflow-automation-hub",
      features: ["Process Optimization", "Task Automation", "Smart Routing", "Integration Management"],
      price: "From $159/month"
    },
    {
      title: "AI Computer Vision Solutions",
      description: "Advanced image and video analysis with object detection, facial recognition, and automated visual processing.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/ai-computer-vision-solutions",
      features: ["Object Detection", "Facial Recognition", "Image Classification", "Video Analysis"],
      price: "From $249/month"
    },
    {
      title: "AI Natural Language Processing",
      description: "Advanced text analysis and language understanding with sentiment analysis, entity extraction, and translation.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-teal-500 to-green-500",
      link: "/ai-natural-language-processing",
      features: ["Sentiment Analysis", "Entity Extraction", "Language Translation", "Text Summarization"],
      price: "From $199/month"
    },
    {
      title: "AI Predictive Maintenance",
      description: "Intelligent equipment monitoring and maintenance prediction to reduce downtime and optimize operations.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      link: "/ai-predictive-maintenance",
      features: ["Equipment Monitoring", "Failure Prediction", "Maintenance Scheduling", "Cost Optimization"],
      price: "From $299/month"
    },
    {
      title: "AI Fraud Detection System",
      description: "Advanced fraud detection and prevention with real-time monitoring and automated risk assessment.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/ai-fraud-detection-system",
      features: ["Real-time Detection", "Risk Assessment", "Pattern Recognition", "Automated Alerts"],
      price: "From $349/month"
    },
    {
      title: "AI Recommendation Engine",
      description: "Intelligent recommendation systems for personalized user experiences and product suggestions.",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      link: "/ai-recommendation-engine",
      features: ["Personalized Recommendations", "User Behavior Analysis", "A/B Testing", "Real-time Updates"],
      price: "From $229/month"
    },
    {
      title: "AI Voice Recognition & Processing",
      description: "Advanced speech recognition and voice processing with real-time transcription and voice commands.",
      icon: <Mic className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/ai-voice-recognition-processing",
      features: ["Speech Recognition", "Voice Commands", "Real-time Transcription", "Multi-language Support"],
      price: "From $179/month"
    },
    {
      title: "AI Document Intelligence",
      description: "Intelligent document processing with OCR, data extraction, and automated document classification.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      link: "/ai-document-intelligence",
      features: ["OCR Technology", "Data Extraction", "Document Classification", "Workflow Automation"],
      price: "From $159/month"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.",
      icon: <Truck className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      link: "/ai-supply-chain-optimization",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Cost Analysis"],
      price: "From $279/month"
    },
    {
      title: "AI Energy Management System",
      description: "Smart energy management with consumption optimization, renewable energy integration, and predictive analytics.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-energy-management-system",
      features: ["Energy Optimization", "Renewable Integration", "Predictive Analytics", "Cost Reduction"],
      price: "From $199/month"
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "Revolutionary medical diagnostics with image analysis, symptom assessment, and treatment recommendations.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      link: "/ai-healthcare-diagnostics",
      features: ["Medical Imaging", "Symptom Analysis", "Treatment Recommendations", "Patient Monitoring"],
      price: "From $499/month"
    },
    {
      title: "AI Legal Research Assistant",
      description: "Advanced legal research and document analysis with case law search and compliance monitoring.",
      icon: <Scale className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      link: "/ai-legal-research-assistant",
      features: ["Case Law Search", "Document Analysis", "Compliance Monitoring", "Legal Research"],
      price: "From $329/month"
    },
    {
      title: "AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment with automated reporting and investment analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      link: "/ai-financial-analytics-pro",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Portfolio Optimization"],
      price: "From $349/month"
    },
    {
      title: "AI Marketing Personalization",
      description: "AI-powered marketing personalization with customer segmentation and automated campaign optimization.",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/ai-marketing-personalization",
      features: ["Customer Segmentation", "Campaign Optimization", "Personalized Content", "Performance Analytics"],
      price: "From $199/month"
    },
    {
      title: "AI Quality Assurance Automation",
      description: "Intelligent quality testing and assurance with automated test generation and defect prediction.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-quality-assurance-automation",
      features: ["Automated Testing", "Defect Prediction", "Quality Metrics", "Test Generation"],
      price: "From $229/month"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and focus on strategic initiatives",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "40% efficiency boost"
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation",
      icon: <Target className="w-6 h-6" />,
      stat: "30% cost savings"
    },
    {
      title: "Better Insights",
      description: "Gain deeper insights into your business with AI analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "90% accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, content generation, cybersecurity, and workflow automation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, business AI solutions" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
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

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="text-cyan-400 font-bold text-lg mb-4">
                {service.price}
              </div>
              
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify the best opportunities for your business 
              and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;