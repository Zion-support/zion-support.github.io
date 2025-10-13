import { ArrowRight, Mic, Brain, Users, Zap, CheckCircle, Star, Volume2, Headphones, MessageSquare, Clock, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiVoiceAssistant() {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Natural Voice Recognition",
      description: "Advanced speech-to-text with 99.5% accuracy in 50+ languages and dialects"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Conversational AI",
      description: "Intelligent dialogue management with context awareness and emotional intelligence"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Text-to-Speech",
      description: "Natural-sounding voice synthesis with multiple voice options and emotional tones"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-User Support",
      description: "Recognize and adapt to different users with personalized responses and preferences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Ultra-low latency voice processing for seamless conversational experiences"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Support for 50+ languages with automatic language detection and translation"
    }
  ];

  const voiceFeatures = [
    "Voice Command Recognition",
    "Conversational AI Chat",
    "Voice Search & Navigation",
    "Audio Transcription",
    "Voice Analytics",
    "Custom Voice Training",
    "Voice Cloning",
    "Emotion Detection",
    "Accent Recognition",
    "Noise Cancellation",
    "Voice Biometrics",
    "API Integration"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small applications",
      features: [
        "Up to 1,000 voice interactions",
        "Basic voice recognition",
        "Standard voices",
        "Email support",
        "Basic analytics",
        "1 language"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "Up to 10,000 voice interactions",
        "Advanced AI features",
        "Custom voice training",
        "Priority support",
        "Advanced analytics",
        "5 languages",
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
        "Unlimited interactions",
        "Full AI suite",
        "Voice cloning",
        "24/7 phone support",
        "White-label solution",
        "All languages",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Customer Service Co.",
      role: "VP of Operations",
      content: "Zion AI Voice Assistant has revolutionized our customer service. The natural conversation flow and accuracy have improved customer satisfaction by 70%.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      company: "Healthcare Provider",
      role: "IT Director",
      content: "The voice recognition is incredibly accurate, even with medical terminology. Our patients love the hands-free interaction and it's improved accessibility significantly.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "E-learning Platform",
      role: "Product Manager",
      content: "The multi-language support and voice cloning features are game-changers. We can now provide personalized voice experiences for our global user base.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Intelligent Voice AI Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform user interactions with Zion AI Voice Assistant - the ultimate voice AI platform. Natural speech recognition, conversational AI, and voice synthesis for modern applications."
        />
        <meta
          name="keywords"
          content="AI voice assistant, voice recognition, speech-to-text, text-to-speech, conversational AI, voice AI, natural language processing, voice synthesis"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-6">
              <Mic className="w-4 h-4 text-violet-400 mr-2" />
              <span className="text-violet-400 text-sm font-medium">AI-Powered Voice Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                AI Voice Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform user interactions with the world's most intelligent voice AI platform. 
              Natural speech recognition, conversational AI, and voice synthesis for modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">99.5%</div>
                <div className="text-gray-300">Voice Recognition Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
                <div className="text-gray-300">Voice Interactions Daily</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Voice AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create intelligent voice experiences with cutting-edge AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Features List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Voice AI Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to build intelligent voice applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {voiceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart Voice AI Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the voice AI plan that fits your application needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-violet-400 bg-gradient-to-br from-violet-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-violet-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                        : 'border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Voice AI Developers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what developers say about Zion AI Voice Assistant
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Voice AI Applications?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers using Zion AI Voice Assistant to create intelligent voice experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}