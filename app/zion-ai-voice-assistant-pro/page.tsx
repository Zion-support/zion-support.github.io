import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Mic, Brain, Zap, Shield, Users, Clock, DollarSign, Globe, Smartphone, Headphones, Volume2, MessageCircle, Settings, BarChart3 } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";

const ZionAIVoiceAssistantProPage: React.FC = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding complex commands and conversations",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Multi-Language Support",
      description: "Support for 50+ languages with accurate pronunciation and accent recognition",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Custom Voice Training",
      description: "Train the assistant with your specific voice patterns and preferences",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Real-time Processing",
      description: "Instant response times with low latency for seamless interactions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to track usage, performance, and user satisfaction",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses getting started with AI voice assistants",
      features: [
        "Up to 1,000 interactions/month",
        "Basic voice commands",
        "2 languages supported",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing businesses with advanced voice assistant needs",
      features: [
        "Up to 10,000 interactions/month",
        "Advanced NLP capabilities",
        "10 languages supported",
        "Custom voice training",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Unlimited interactions",
        "Full NLP suite",
        "50+ languages supported",
        "Custom voice models",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "Handle customer inquiries 24/7 with intelligent voice responses",
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      title: "Sales Support",
      description: "Qualify leads and provide product information through voice interactions",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Internal Operations",
      description: "Streamline internal processes with voice-activated workflows",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Accessibility",
      description: "Make your services accessible to users with visual impairments",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Voice Assistant Pro - Advanced Voice AI Solutions | Zion Tech Group"
        description="Transform your business with Zion AI Voice Assistant Pro. Advanced voice AI with natural language processing, multi-language support, and enterprise-grade security."
        keywords="AI voice assistant, voice AI, natural language processing, voice automation, customer service AI, voice technology"
        canonical="https://ziontechgroup.com/zion-ai-voice-assistant-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Headphones className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Zion AI Voice <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Assistant Pro</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most advanced AI voice assistant platform for businesses. 
              Transform customer interactions with natural language processing, multi-language support, and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge AI technology to deliver exceptional voice experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how Zion AI Voice Assistant Pro can transform your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-400">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-gray-700/50'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Voice Interactions?
            </h2>
            <p className="text-gray-300 mb-8">
              Start your free trial today and experience the power of AI voice technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIVoiceAssistantProPage;