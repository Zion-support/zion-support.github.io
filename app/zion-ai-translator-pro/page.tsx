import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Star, ArrowRight, CheckCircle, Languages, Clock, Shield, Users, Sparkles } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionAiTranslatorProPage = () => {
  const features = [
    {
      title: "100+ Languages Supported",
      description: "Translate between 100+ languages with high accuracy using advanced neural machine translation",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Context-Aware Translation",
      description: "AI understands context and provides culturally appropriate translations for better accuracy",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Translation",
      description: "Instant translation with sub-second response times for seamless communication",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Enterprise Security",
      description: "End-to-end encryption and GDPR compliance for secure business communications",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const supportedLanguages = [
    "English", "Spanish", "French", "German", "Italian", "Portuguese", "Russian", "Chinese", "Japanese", "Korean", "Arabic", "Hindi"
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$15",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "100,000 characters per month",
        "50+ languages",
        "Basic context awareness",
        "Web interface",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "500,000 characters per month",
        "100+ languages",
        "Advanced context awareness",
        "API access",
        "Team collaboration",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited characters",
        "All languages",
        "Custom models",
        "White-label solution",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      company: "Global Marketing Manager",
      content: "Zion AI Translator Pro has revolutionized our international marketing. The context-aware translations are incredibly accurate and culturally appropriate.",
      rating: 5
    },
    {
      name: "James Park",
      company: "E-commerce Director",
      content: "We use this tool for translating product descriptions across 20+ markets. The quality is professional-grade and our conversion rates have improved significantly.",
      rating: 5
    },
    {
      name: "Sophie Chen",
      company: "Content Manager",
      content: "The real-time translation feature is a game-changer for our live customer support. We can now assist customers in their native language instantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOOptimizer
        title="Zion AI Translator Pro - Advanced AI Translation Platform | Zion Tech Group"
        description="Professional AI translation service supporting 100+ languages with context-aware accuracy. Real-time translation with enterprise security. Starting from $15/month."
        keywords="AI translation, machine translation, multilingual, language translation, real-time translation, context-aware translation, enterprise translation, API translation"
        canonical="https://ziontechgroup.com/zion-ai-translator-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Globe className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Translation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 animate-pulse">
              {" "}Translator Pro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Break language barriers with our advanced AI translation platform. 
            Translate between 100+ languages with context-aware accuracy and enterprise security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Try Demo
              <Globe className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Translation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered translation platform provides accurate, context-aware translations 
              across 100+ languages with enterprise-grade security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supports 100+ Languages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From major world languages to regional dialects, we support comprehensive translation needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {supportedLanguages.map((language, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-medium">{language}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400">And 90+ more languages including regional dialects and specialized terminology</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your translation needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-green-500 shadow-2xl shadow-green-500/20 scale-105'
                    : 'border-white/20 hover:border-green-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
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
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Global Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Translator Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Break Language Barriers?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses using Zion AI Translator Pro to communicate 
            effectively across languages and cultures worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Try Demo
              <Globe className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAiTranslatorProPage;