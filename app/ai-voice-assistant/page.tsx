import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Headphones, Zap, CheckCircle, ArrowRight, Star, Clock, Users, Award, MessageSquare, Globe } from 'lucide-react';

const AiVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Advanced NLP for understanding context, intent, and complex queries"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Support for 50+ languages with accurate pronunciation and accent recognition"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Processing",
      description: "Ultra-low latency voice processing for seamless conversations"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Context Awareness",
      description: "Maintains conversation context and learns from user interactions"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$99",
      period: "/month",
      description: "Perfect for personal use and small projects",
      features: [
        "Up to 1,000 voice interactions",
        "5 supported languages",
        "Basic NLP capabilities",
        "Email support",
        "Standard voice models"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$299",
      period: "/month",
      description: "Ideal for businesses and customer service",
      features: [
        "Up to 10,000 voice interactions",
        "25 supported languages",
        "Advanced NLP & sentiment analysis",
        "Priority support",
        "Custom voice training",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large-scale voice applications",
      features: [
        "Unlimited voice interactions",
        "50+ supported languages",
        "Premium NLP & AI capabilities",
        "24/7 dedicated support",
        "Custom voice synthesis",
        "Advanced analytics",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "24/7 AI voice assistants for customer support and inquiries",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Smart Home",
      description: "Voice control for IoT devices and home automation systems",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Healthcare",
      description: "Voice-enabled patient monitoring and medical assistance",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Education",
      description: "Interactive voice learning and language tutoring systems",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const integrations = [
    "Amazon Alexa", "Google Assistant", "Microsoft Cortana", "Siri", "WhatsApp", "Telegram", 
    "Slack", "Discord", "WebRTC", "Twilio", "Vonage", "Zoom"
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group | Conversational AI Solutions</title>
        <meta name="description" content="Advanced AI voice assistant with natural language processing, multi-language support, and real-time voice processing for customer service, smart homes, and enterprise applications." />
        <meta name="keywords" content="ai voice assistant, conversational ai, voice recognition, nlp, customer service, smart home, voice automation" />
        <meta property="og:title" content="AI Voice Assistant - Zion Tech Group" />
        <meta property="og:description" content="Intelligent voice assistant solutions powered by advanced AI" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Voice Assistant</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Intelligent conversational AI that understands, responds, and learns from every interaction. 
                Deploy voice assistants across multiple platforms with natural language processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Try Demo
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View API Docs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Voice AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by cutting-edge speech recognition and natural language understanding technologies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Voice AI Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with intelligent voice interactions across multiple industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Platform Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with popular voice platforms and communication tools
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((integration, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your voice AI needs. All plans include our advanced NLP technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Voice AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of developers and businesses using our AI voice assistant platform. 
                Start building conversational AI experiences today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiVoiceAssistantPage;