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
      title: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform featuring predictive modeling and real-time dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics",
      features: ["Predictive Analytics", "Real-time Insights", "Custom Dashboards", "Machine Learning Models", "Data Visualization", "Automated Reporting"],
      price: "Starting at $299/month",
      popular: true
    },
    {
      title: "AI Content Generation & Marketing",
      description: "Create high-quality content at scale with our AI-powered content generation tools for blogs, social media, and marketing campaigns.",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation",
      features: ["Automated Writing", "SEO Optimization", "Multi-language Support", "Brand Voice Training", "Content Calendar", "Plagiarism Detection"],
      price: "Starting at $149/month",
      popular: true
    },
    {
      title: "AI Cybersecurity & Threat Detection",
      description: "Protect your business with AI-driven security solutions featuring advanced threat detection and automated incident response.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Behavioral Analysis", "Vulnerability Assessment", "Compliance Reporting"],
      price: "Starting at $499/month",
      popular: true
    },
    {
      title: "AI Customer Support & Chatbots",
      description: "Enhance customer experience with intelligent chatbots, sentiment analysis, and multi-channel support automation.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-customer-support",
      features: ["Smart Chatbots", "Sentiment Analysis", "Multi-channel Support", "Knowledge Base", "Ticket Routing", "Performance Analytics"],
      price: "Starting at $249/month",
      popular: true
    },
    {
      title: "AI Data Analytics & Machine Learning",
      description: "Unlock the power of your data with advanced AI analytics, machine learning models, and predictive insights.",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-data-analytics",
      features: ["Data Mining", "Pattern Recognition", "Predictive Modeling", "Real-time Processing", "Custom Algorithms", "Data Pipeline"],
      price: "Starting at $199/month",
      popular: false
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent workflow automation and smart task routing.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-workflow-automation",
      features: ["Process Optimization", "Task Automation", "Smart Routing", "Integration Tools", "Performance Analytics", "Custom Workflows"],
      price: "Starting at $179/month",
      popular: false
    },
    {
      title: "AI Document Processing & OCR",
      description: "Intelligent document processing with OCR technology, data extraction, and automated workflow management.",
      icon: <Code className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      link: "/ai-document-processing",
      features: ["OCR Technology", "Data Extraction", "Document Classification", "Workflow Automation", "Batch Processing", "Quality Assurance"],
      price: "Starting at $229/month",
      popular: false
    },
    {
      title: "AI Marketing Automation",
      description: "Comprehensive marketing automation with AI-powered campaign optimization and personalized content delivery.",
      icon: <Target className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/ai-marketing-automation",
      features: ["Campaign Optimization", "Personalization", "Lead Scoring", "A/B Testing", "Multi-channel", "ROI Tracking"],
      price: "Starting at $199/month",
      popular: true
    },
    {
      title: "AI Predictive Analytics",
      description: "Advanced predictive analytics platform with machine learning models for forecasting and trend analysis.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/ai-predictive-analytics",
      features: ["Machine Learning Models", "Forecasting Algorithms", "Trend Analysis", "Risk Assessment", "Scenario Planning", "Real-time Predictions"],
      price: "Starting at $349/month",
      popular: true
    },
    {
      title: "AI Voice & Speech Processing",
      description: "Advanced voice recognition, speech synthesis, and natural language processing for voice-enabled applications.",
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/ai-voice-assistant",
      features: ["Voice Recognition", "Speech Synthesis", "Natural Language Processing", "Multi-language Support", "Custom Training", "API Integration"],
      price: "Starting at $299/month",
      popular: false
    },
    {
      title: "AI Computer Vision & Image Analysis",
      description: "Advanced computer vision solutions with object detection, facial recognition, and automated image processing.",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/ai-computer-vision",
      features: ["Object Detection", "Facial Recognition", "Image Classification", "Quality Analysis", "Batch Processing", "Custom Models"],
      price: "Starting at $199/month",
      popular: false
    },
    {
      title: "AI Financial Analytics & Forecasting",
      description: "Advanced financial forecasting with AI-powered predictions, risk analysis, and automated financial planning.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-financial-analytics",
      features: ["Financial Forecasting", "Risk Analysis", "Automated Planning", "Scenario Modeling", "Investment Analysis", "Compliance Monitoring"],
      price: "Starting at $349/month",
      popular: true
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain management with AI-powered demand forecasting and logistics automation.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      link: "/ai-supply-chain-optimizer",
      features: ["Demand Forecasting", "Inventory Optimization", "Logistics Automation", "Supplier Management", "Risk Assessment", "Cost Optimization"],
      price: "Starting at $399/month",
      popular: false
    },
    {
      title: "AI Healthcare & Medical Diagnostics",
      description: "Revolutionary AI-powered medical diagnostics with image analysis and treatment recommendations.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      link: "/ai-healthcare-diagnostics",
      features: ["Medical Imaging", "Symptom Analysis", "Treatment Recommendations", "Patient Monitoring", "Drug Interaction", "Compliance Tracking"],
      price: "Starting at $499/month",
      popular: false
    },
    {
      title: "AI Legal Research & Contract Analysis",
      description: "Advanced legal research and document analysis with case law search and contract review.",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      link: "/ai-legal-research",
      features: ["Case Law Search", "Contract Analysis", "Compliance Monitoring", "Document Review", "Legal Research", "Precedent Analysis"],
      price: "Starting at $329/month",
      popular: false
    },
    {
      title: "AI Energy Management & Optimization",
      description: "Smart energy management with consumption optimization and renewable energy integration.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-energy-management",
      features: ["Energy Optimization", "Renewable Integration", "Predictive Maintenance", "Smart Grid", "Cost Analysis", "Carbon Tracking"],
      price: "Starting at $199/month",
      popular: false
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
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
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
              
              <div className="mb-4">
                <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
                {service.features.length > 4 && (
                  <li className="text-sm text-cyan-400">
                    +{service.features.length - 4} more features
                  </li>
                )}
              </ul>
              
              <div className="flex gap-2">
                <Link
                  to={service.link}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Get Quote
                </button>
              </div>
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