import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mic, 
  Speaker, 
  BarChart3, 
  Target, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Volume2,
  Headphones,
  MessageCircle,
  Users,
  Settings,
  Activity,
  TrendingUp,
  Shield,
  Zap,
  PieChart,
  LineChart,
  Building,
  Award,
  Globe,
  Smartphone
} from 'lucide-react';

const AiVoiceAssistantProPage: React.FC = () => {
  const features = [
    "Natural language processing (NLP)",
    "Multi-language voice recognition",
    "Custom voice training",
    "Real-time conversation analytics",
    "Voice biometric authentication",
    "Smart home integration",
    "Business process automation",
    "Voice command customization",
    "Conversation recording & analysis",
    "Integration with CRM systems",
    "Mobile app support",
    "API for custom integrations"
  ];

  const benefits = [
    "Increase productivity by 40%",
    "Reduce manual tasks by 60%",
    "Improve customer satisfaction by 35%",
    "Save 5 hours per week per user",
    "Enable hands-free operations",
    "Accelerate business processes 3x"
  ];

  const useCases = [
    "Customer service automation",
    "Office productivity enhancement",
    "Smart home control",
    "Healthcare voice commands",
    "Elderly care assistance",
    "Accessibility solutions"
  ];

  const pricing = {
    personal: {
      price: "$29/month",
      originalPrice: "$49/month",
      users: "Up to 5 users",
      features: [
        "Basic voice recognition",
        "Simple commands",
        "Mobile app",
        "Email support",
        "Standard integrations",
        "Basic analytics"
      ]
    },
    business: {
      price: "$99/month",
      originalPrice: "$149/month",
      users: "Up to 25 users",
      features: [
        "Advanced NLP",
        "Custom voice training",
        "Business automation",
        "CRM integration",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom commands"
      ],
      popular: true
    },
    enterprise: {
      price: "$299/month",
      originalPrice: "$449/month",
      users: "Unlimited users",
      features: [
        "Custom AI models",
        "White-label solution",
        "Advanced analytics",
        "Custom workflows",
        "Dedicated support",
        "Compliance monitoring",
        "Custom reporting",
        "Training & onboarding"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Pro - Intelligent Voice Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI Voice Assistant Pro. Get intelligent voice recognition, automation, and hands-free operations. Start your free trial today!" />
        <meta name="keywords" content="AI voice assistant, voice recognition, voice automation, NLP, voice commands, business automation, voice AI, hands-free operations" />
        <meta property="og:title" content="AI Voice Assistant Pro - Intelligent Voice Automation" />
        <meta property="og:description" content="Revolutionize your operations with AI-powered voice recognition, natural language processing, and intelligent automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-voice-assistant-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Mic className="w-4 h-4 mr-2" />
                AI-Powered Voice Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Voice
                </span>
                <br />
                <span className="text-white">Assistant Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionize your business operations with our advanced AI-powered voice assistant. 
                Enable hands-free productivity, automate complex tasks, and enhance customer 
                experiences with natural language processing and intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">40%</div>
                  <div className="text-gray-400 text-sm font-semibold">Productivity Gain</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">5h</div>
                  <div className="text-gray-400 text-sm font-semibold">Time Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">35%</div>
                  <div className="text-gray-400 text-sm font-semibold">Satisfaction Boost</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">3x</div>
                  <div className="text-gray-400 text-sm font-semibold">Faster Processes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Voice Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Voice Assistant Pro combines cutting-edge natural language processing, 
                machine learning, and voice recognition to deliver intelligent automation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your voice automation needs. 
                Start with our free trial and experience hands-free productivity today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details]) => (
                <div
                  key={plan}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    details.popular
                      ? "border-purple-400 shadow-2xl shadow-purple-500/25 scale-105"
                      : "border-white/20"
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {details.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{plan}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-4xl font-bold text-white">{details.price}</span>
                      {details.originalPrice && (
                        <span className="text-gray-400 text-lg line-through">{details.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{details.users}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                      details.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Voice Assistant Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of voice automation with our AI-powered platform that delivers 
                measurable results and enhanced productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect For <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform adapts to various industries and use cases, delivering 
                optimized voice automation solutions for your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {useCase}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Go Hands-Free?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join productivity leaders who trust AI Voice Assistant Pro to automate their 
                operations and enhance efficiency. Start your free trial today.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
                <p className="text-gray-300 mb-6">
                  Contact our voice automation experts to discuss your needs and start your hands-free transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiVoiceAssistantProPage;