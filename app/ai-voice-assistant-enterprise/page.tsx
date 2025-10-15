import {  ArrowRight  } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import {  Helmet  } from 'react-helmet-async'
import { 
  Mic, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Download,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Eye,
  Filter,
  Calendar,
  Target,
  Volume2,
  Headphones,
  Radio,
  MessageSquare,
  Languages,
  Users,
  Award,
  TrendingUp,
  Cpu,
  Database,
  BarChart3,
  Activity,
  Lock,
  Clock,
  Smartphone
} from 'lucide-react'

const AiVoiceAssistantEnterprisePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Advanced Voice Recognition",
      description: "State-of-the-art speech-to-text with 99.5% accuracy in 50+ languages and dialects.",
      benefits: ["99.5% accuracy", "50+ languages", "Noise cancellation", "Real-time processing"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Natural Language Understanding",
      description: "Deep learning models that understand context, intent, and complex conversational flows.",
      benefits: ["Context awareness", "Intent recognition", "Multi-turn conversations", "Sentiment analysis"]
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Text-to-Speech Synthesis",
      description: "Human-like voice synthesis with emotional expression and multiple voice personalities.",
      benefits: ["Natural voices", "Emotional expression", "Multiple personalities", "Custom voice training"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Seamless conversation in multiple languages with automatic translation and localization.",
      benefits: ["Auto-translation", "Cultural adaptation", "Regional accents", "Language switching"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption, compliance with GDPR/CCPA, and secure voice data processing.",
      benefits: ["End-to-end encryption", "GDPR compliance", "Data privacy", "Secure processing"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Integration",
      description: "Easy integration with existing systems, CRM, ERP, and third-party applications.",
      benefits: ["API integration", "Webhook support", "Custom workflows", "Legacy system support"]
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "24/7 intelligent customer support with voice and chat capabilities",
      icon: <Headphones className="w-8 h-8" />,
      benefits: ["24/7 availability", "Instant responses", "Multi-channel support", "Customer satisfaction"]
    },
    {
      title: "Healthcare",
      description: "Voice-enabled patient care and medical documentation",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Patient monitoring", "Medical transcription", "Appointment scheduling", "HIPAA compliance"]
    },
    {
      title: "Education",
      description: "Interactive learning with voice-based tutoring and assessment",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Personalized learning", "Voice assessments", "Language training", "Accessibility support"]
    },
    {
      title: "Smart Home",
      description: "Voice control for IoT devices and home automation systems",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Device control", "Routine automation", "Energy management", "Security monitoring"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small businesses starting with voice AI",
      features: [
        "Up to 1,000 voice interactions",
        "5 languages supported",
        "Basic voice recognition",
        "Email support",
        "Standard integration",
        "1 voice personality"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing companies with advanced voice needs",
      features: [
        "Up to 10,000 voice interactions",
        "25 languages supported",
        "Advanced NLP capabilities",
        "Priority support",
        "Custom integrations",
        "5 voice personalities",
        "Analytics dashboard",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited voice interactions",
        "50+ languages supported",
        "Full AI capabilities",
        "24/7 dedicated support",
        "Custom development",
        "Unlimited personalities",
        "Advanced analytics",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "CustomerFirst Corp",
      role: "VP of Customer Experience",
      content: "The AI Voice Assistant has transformed our customer service. We've seen a 70% reduction in wait times and 95% customer satisfaction.",
      rating: 5
    },
    {
      name: "Dr. Robert Kim",
      company: "MedTech Solutions",
      role: "Chief Medical Officer",
      content: "Voice-enabled patient care has revolutionized our workflow. The accuracy and natural conversation flow are exceptional.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "EduTech Innovations",
      role: "Director of Learning",
      content: "Our students love the interactive voice learning experience. Engagement has increased by 60% since implementation.",
      rating: 5
    }
  ];

  const languages = [
    { name: "English", flag: "🇺🇸", accuracy: "99.8%" },
    { name: "Spanish", flag: "🇪🇸", accuracy: "99.5%" },
    { name: "French", flag: "🇫🇷", accuracy: "99.3%" },
    { name: "German", flag: "🇩🇪", accuracy: "99.4%" },
    { name: "Chinese", flag: "🇨🇳", accuracy: "99.2%" },
    { name: "Japanese", flag: "🇯🇵", accuracy: "99.1%" },
    { name: "Arabic", flag: "🇸🇦", accuracy: "98.9%" },
    { name: "Portuguese", flag: "🇵🇹", accuracy: "99.3%" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Enterprise - Advanced Conversational AI | Zion Tech Group</title>
        <meta name="description" content="Transform customer interactions with our enterprise-grade AI voice assistant. 99.5% accuracy, 50+ languages, and seamless integration for modern businesses." />
        <meta name="keywords" content="AI voice assistant, conversational AI, voice recognition, speech synthesis, customer service, voice automation" />
        <meta property="og:title" content="AI Voice Assistant Enterprise - Zion Tech Group" />
        <meta property="og:description" content="Enterprise-grade AI voice assistant with advanced conversational capabilities" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-voice-assistant-enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 Enterprise Voice AI Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Voice Assistant Enterprise
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize customer interactions with our advanced AI voice assistant. 
                  99.5% accuracy, 50+ languages, and enterprise-grade security for modern businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced Voice AI Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to create intelligent, natural voice interactions with your customers.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Industry Applications
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover how our AI voice assistant is transforming industries worldwide.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    50+ Languages Supported
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Communicate with your global audience in their native language with exceptional accuracy.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {languages.map((language, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-4xl mb-3">{language.flag}</div>
                    <div className="text-white font-semibold mb-1">{language.name}</div>
                    <div className="text-cyan-400 text-sm">{language.accuracy}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing Plans
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your voice AI needs and budget.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Client Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how companies are transforming customer experience with our AI voice assistant.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Customer Experience?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your voice AI journey today and provide exceptional customer service with our advanced AI voice assistant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AiVoiceAssistantEnterprisePage;