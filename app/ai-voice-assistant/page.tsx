import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Headphones, MessageSquare, Zap, CheckCircle, ArrowRight, Star, Clock, Users, Globe } from 'lucide-react';

const AiVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Natural Voice Recognition",
      description: "Advanced speech-to-text with 99.9% accuracy in 50+ languages and dialects"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Intelligent Voice Synthesis",
      description: "Human-like voice generation with customizable tones, accents, and emotions"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Contextual Understanding",
      description: "Deep learning models that understand context, intent, and conversation flow"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Ultra-low latency voice processing for seamless, natural conversations"
    }
  ];

  const capabilities = [
    "Customer Service Automation",
    "Voice-Controlled Applications", 
    "Multilingual Support",
    "Sentiment Analysis",
    "Voice Biometrics",
    "Call Center Integration",
    "Smart Home Control",
    "Accessibility Solutions",
    "Voice Commerce",
    "Meeting Transcription",
    "Voice Search Optimization",
    "Personalized Responses"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 voice interactions/month",
        "5 voice profiles",
        "Basic language support (10 languages)",
        "Email support",
        "Standard voice quality",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month", 
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 voice interactions/month",
        "25 voice profiles",
        "Advanced language support (25 languages)",
        "Priority support",
        "Premium voice quality",
        "Advanced analytics & insights",
        "Custom voice training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited voice interactions",
        "Unlimited voice profiles",
        "Full language support (50+ languages)",
        "24/7 dedicated support",
        "Ultra-premium voice quality",
        "Complete analytics suite",
        "Custom voice development",
        "White-label solutions",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const integrations = [
    "Slack", "Microsoft Teams", "Zoom", "Salesforce", "HubSpot", "Zendesk",
    "Amazon Alexa", "Google Assistant", "Siri", "WhatsApp", "Telegram", "Discord"
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group | Intelligent Voice Solutions</title>
        <meta name="description" content="Advanced AI voice assistant platform with natural language processing, multilingual support, and seamless integration for businesses of all sizes." />
        <meta name="keywords" content="ai voice assistant, voice recognition, speech synthesis, nlp, voice ai, conversational ai, voice automation" />
        <meta property="og:title" content="AI Voice Assistant - Zion Tech Group" />
        <meta property="og:description" content="Intelligent voice solutions powered by advanced AI" />
        <meta property="og:type" content="website" />
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
                Transform your business with intelligent voice assistants that understand, respond, and learn from every conversation. 
                Experience the future of voice-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Try Demo
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
                Powered by cutting-edge AI technology for natural, intelligent voice interactions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From customer service to smart home control, our voice AI adapts to your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {capability}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms for a unified voice experience
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
                Choose the perfect plan for your voice AI needs. Scale up as you grow.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
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
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Voice Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-lg">Languages Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Always Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">2s</div>
                <div className="text-gray-300 text-lg">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Give Your Business a Voice?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Experience the power of AI voice technology. Start your free trial today and transform how you interact with customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Demo
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