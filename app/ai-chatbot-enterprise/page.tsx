import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  MessageCircle, 
  Zap, 
  Shield, 
  BarChart3, 
  Settings,
  CheckCircle,
  Users,
  Globe
} from 'lucide-react';

const AiChatbotEnterprisePage: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Conversations",
      description: "Advanced AI-powered chatbots that understand context, intent, and provide human-like responses."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Multi-Channel Support",
      description: "Deploy chatbots across websites, mobile apps, social media, and messaging platforms."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Processing",
      description: "Instant response times with advanced natural language processing and machine learning."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with data encryption, compliance management, and audit trails."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Comprehensive analytics dashboard to track performance, user satisfaction, and optimization opportunities."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Easy Integration",
      description: "Seamlessly integrate with existing CRM, helpdesk, and business systems through robust APIs."
    }
  ];

  const capabilities = [
    "Natural language understanding (NLU)",
    "Multi-language support and translation",
    "Sentiment analysis and emotion detection",
    "Conversation flow management",
    "Knowledge base integration",
    "Live agent handoff capabilities",
    "Custom voice and personality",
    "Advanced reporting and analytics"
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "24/7 customer service with instant responses to common queries and seamless escalation to human agents.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Sales Assistance",
      description: "Qualify leads, provide product information, and guide customers through the sales process.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Internal Support",
      description: "Employee self-service for HR queries, IT support, and internal process automation.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Global Deployment",
      description: "Multi-language chatbots for international businesses with localized responses.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Enterprise - Zion Tech Group | Advanced Conversational AI</title>
        <meta name="description" content="Transform customer engagement with our enterprise AI chatbot solutions. Advanced NLP, multi-channel support, and seamless integration for businesses." />
        <meta name="keywords" content="AI chatbot, enterprise chatbot, conversational AI, customer service automation, NLP, chatbot development" />
        <meta property="og:title" content="AI Chatbot Enterprise - Zion Tech Group" />
        <meta property="og:description" content="Advanced enterprise AI chatbot solutions for customer engagement and automation." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Chatbot <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Enterprise</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform customer engagement with our advanced AI chatbot solutions. 
                Deliver intelligent, personalized conversations at scale across all channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to deploy and manage enterprise-grade AI chatbots
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Advanced Capabilities</h2>
                <p className="text-xl text-gray-300">
                  Our AI chatbot platform provides comprehensive enterprise features
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy AI chatbots across various business functions to drive efficiency and customer satisfaction
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {useCase.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy AI Chatbots?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI chatbot enterprise solutions can transform your customer engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AiChatbotEnterprisePage;