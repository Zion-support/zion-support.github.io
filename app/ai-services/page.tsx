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
  TrendingUp
} from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      title: "AI Analytics Pro",
      description: "Transform your data into actionable insights with our advanced AI analytics platform featuring real-time dashboards and predictive modeling.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics",
      features: ["Predictive Analytics", "Real-time Insights", "Custom Dashboards", "Machine Learning Models", "Data Visualization", "Automated Reporting"],
      price: "From $299/month",
      marketPrice: "$500-800/month",
      benefits: ["40% faster decisions", "90% accuracy", "Real-time processing"]
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered content generation tools including text, images, and video.",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation",
      features: ["Automated Writing", "SEO Optimization", "Multi-language Support", "Image Generation", "Video Creation", "Brand Consistency"],
      price: "From $199/month",
      marketPrice: "$400-700/month",
      benefits: ["70% faster creation", "95% brand consistency", "Unlimited content"]
    },
    {
      title: "AI Cybersecurity Suite",
      description: "Protect your business with AI-driven security solutions featuring advanced threat detection and automated response.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Vulnerability Assessment", "Compliance Reporting", "Incident Response"],
      price: "From $499/month",
      marketPrice: "$800-1200/month",
      benefits: ["99.9% detection", "50% faster response", "Zero false positives"]
    },
    {
      title: "AI Customer Support Pro",
      description: "Enhance customer experience with intelligent chatbots, sentiment analysis, and multi-channel support automation.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-customer-support",
      features: ["Smart Chatbots", "Sentiment Analysis", "Multi-channel Support", "Voice Recognition", "Knowledge Base", "Escalation Management"],
      price: "From $149/month",
      marketPrice: "$300-600/month",
      benefits: ["85% satisfaction", "60% faster resolution", "24/7 availability"]
    },
    {
      title: "AI Data Intelligence",
      description: "Unlock the power of your data with advanced AI analytics, machine learning, and automated insights generation.",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-data-analytics",
      features: ["Data Mining", "Pattern Recognition", "Predictive Modeling", "Data Cleaning", "Feature Engineering", "Model Deployment"],
      price: "From $399/month",
      marketPrice: "$800-1500/month",
      benefits: ["70% faster analysis", "90% accuracy", "Real-time insights"]
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent workflow automation, task optimization, and smart routing.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-workflow-automation",
      features: ["Process Optimization", "Task Automation", "Smart Routing", "Resource Allocation", "Performance Monitoring", "Custom Workflows"],
      price: "From $199/month",
      marketPrice: "$400-800/month",
      benefits: ["50% efficiency gain", "30% cost reduction", "Automated optimization"]
    },
    {
      title: "AI Marketing Automation",
      description: "Scale your marketing efforts with AI-powered campaign management, audience segmentation, and performance optimization.",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/ai-marketing-automation",
      features: ["Campaign Management", "Audience Segmentation", "A/B Testing", "Content Optimization", "Lead Scoring", "ROI Tracking"],
      price: "From $249/month",
      marketPrice: "$500-1000/month",
      benefits: ["60% engagement boost", "40% cost reduction", "80% ROI improvement"]
    },
    {
      title: "AI Voice Assistant Pro",
      description: "Deploy intelligent voice assistants with natural language processing, voice recognition, and multi-language support.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/ai-voice-assistant",
      features: ["Voice Recognition", "Natural Language Processing", "Multi-language Support", "Custom Commands", "Integration APIs", "Analytics Dashboard"],
      price: "From $179/month",
      marketPrice: "$400-800/month",
      benefits: ["95% accuracy", "Real-time processing", "Customizable responses"]
    },
    {
      title: "AI Document Intelligence",
      description: "Automate document processing with AI-powered text extraction, classification, and intelligent data capture.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      link: "/ai-document-processing",
      features: ["Text Extraction", "Document Classification", "Data Capture", "OCR Processing", "Form Recognition", "Compliance Checking"],
      price: "From $299/month",
      marketPrice: "$600-1200/month",
      benefits: ["90% accuracy", "80% time savings", "Automated processing"]
    },
    {
      title: "AI Predictive Analytics",
      description: "Forecast future trends and behaviors with advanced predictive modeling and machine learning algorithms.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/ai-predictive-analytics",
      features: ["Predictive Modeling", "Trend Analysis", "Risk Assessment", "Forecasting", "Scenario Planning", "Real-time Predictions"],
      price: "From $349/month",
      marketPrice: "$700-1400/month",
      benefits: ["95% accuracy", "Real-time predictions", "Risk mitigation"]
    },
    {
      title: "AI Computer Vision",
      description: "Implement computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/ai-computer-vision",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Quality Inspection", "Visual Analytics", "Real-time Processing"],
      price: "From $399/month",
      marketPrice: "$800-1600/month",
      benefits: ["98% accuracy", "Real-time processing", "Custom models"]
    },
    {
      title: "AI Blockchain Solutions",
      description: "Integrate AI with blockchain technology for secure, transparent, and intelligent decentralized applications.",
      icon: <Lock className="w-8 h-8" />,
      color: "from-gray-500 to-slate-500",
      link: "/ai-blockchain-solutions",
      features: ["Smart Contracts", "Decentralized AI", "Secure Transactions", "Tokenization", "Consensus Algorithms", "Privacy Protection"],
      price: "From $599/month",
      marketPrice: "$1200-2500/month",
      benefits: ["Enhanced security", "Transparency", "Decentralized processing"]
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
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden animate-zoom-in ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Pricing Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {service.price}
                </span>
              </div>

              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-xs text-cyan-400 font-medium">
                      +{service.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 text-sm">Benefits:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <span
                      key={benefitIndex}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Market Price */}
              <div className="mb-4 text-xs text-gray-400">
                Market: {service.marketPrice}
              </div>
              
              <Link
                to={service.link}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
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