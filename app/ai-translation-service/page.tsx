import React, { useState } from "react";
import { Globe, Brain, Zap, ArrowRight, CheckCircle, Star, Users, Clock, DollarSign, MessageSquare, Shield, BarChart3 } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const AITranslationServicePage = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const features = [
    {
      title: "100+ Language Support",
      description: "Translate content between 100+ languages with human-level accuracy using advanced neural machine translation.",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["100+ languages", "Neural translation", "Context awareness"]
    },
    {
      title: "Real-Time Translation",
      description: "Instant translation for live conversations, meetings, and real-time communication across language barriers.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Live translation", "Voice recognition", "Instant results"]
    },
    {
      title: "Industry-Specific Models",
      description: "Specialized translation models trained for specific industries like legal, medical, technical, and business.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Industry expertise", "Technical accuracy", "Professional terminology"]
    },
    {
      title: "Document Translation",
      description: "Translate entire documents while preserving formatting, layout, and structure across different file types.",
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ["Format preservation", "Batch processing", "Multiple file types"]
    },
    {
      title: "Quality Assurance",
      description: "Advanced quality control with human review options and confidence scoring for translation accuracy.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Quality scoring", "Human review", "Accuracy validation"]
    },
    {
      title: "API Integration",
      description: "Seamless integration with your existing applications through robust APIs and SDKs.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["REST API", "SDK support", "Custom integrations"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100,000 characters/month",
        "50+ languages",
        "Basic translation",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1M characters/month",
        "100+ languages",
        "Industry-specific models",
        "Real-time translation",
        "Priority support",
        "Advanced API"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 299,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited characters",
        "All languages",
        "Custom models",
        "White-label options",
        "Dedicated support",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Global Marketing Director",
      company: "International Corp",
      content: "The AI translation service has revolutionized our global marketing. We can now communicate effectively with customers in 20+ countries.",
      rating: 5
    },
    {
      name: "James Chen",
      role: "Product Manager",
      company: "TechStart Global",
      content: "The real-time translation feature is incredible. Our international team meetings are now seamless and productive.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      role: "Content Manager",
      company: "Digital Agency",
      content: "The industry-specific models are a game-changer. Legal and technical translations are now accurate and professional.",
      rating: 5
    }
  ];

  const stats = [
    { number: "100+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Translation Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "50ms", label: "Average Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "2,000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Translation Service | Zion Tech Group - Real-Time Multilingual Translation"
        description="Break language barriers with our AI-powered translation service. Support for 100+ languages, real-time translation, and industry-specific models for accurate communication."
        keywords="AI translation, multilingual translation, real-time translation, language translation, neural translation, document translation, API translation"
        canonical="https://ziontechgroup.com/ai-translation-service"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Globe className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Translation Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Translation Service
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Break language barriers with our AI-powered translation service. Support for 100+ languages, 
            real-time translation, and industry-specific models for accurate, professional communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              Try Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Translation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology for accurate, fast, and professional translation services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your translation needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Global Companies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about our AI Translation Service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Break Language Barriers?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI translation service to communicate globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              Try Demo
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Contact: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p>📞 Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AITranslationServicePage;