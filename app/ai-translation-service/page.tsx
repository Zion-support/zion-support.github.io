import { ArrowRight, Globe, Languages, Zap, BarChart3, CheckCircle, Star, Brain, Clock, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AITranslationService() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "100+ Language Support",
      description: "Translate between 100+ languages with 99% accuracy using advanced neural machine translation"
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Context-Aware Translation",
      description: "AI understands context, tone, and cultural nuances for accurate, natural translations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Translation",
      description: "Instant translation with ultra-low latency for live conversations and real-time content"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Translation Analytics",
      description: "Comprehensive analytics on translation quality, usage patterns, and performance metrics"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Batch Processing",
      description: "Process thousands of documents simultaneously with intelligent batch translation"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Custom Models",
      description: "Train custom translation models for industry-specific terminology and requirements"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 words/month",
        "50+ languages",
        "Basic translation",
        "Email support",
        "1 user account",
        "Standard accuracy"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 100,000 words/month",
        "100+ languages",
        "Advanced translation",
        "Priority support",
        "Up to 5 user accounts",
        "API access",
        "Custom models",
        "Batch processing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited words",
        "All languages",
        "Premium translation",
        "White-label solution",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced compliance",
        "Custom training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      company: "Global E-commerce",
      role: "International Manager",
      content: "AI Translation Service helped us expand to 15 new markets. Our product descriptions are perfectly localized.",
      rating: 5
    },
    {
      name: "James Chen",
      company: "SaaS Platform",
      role: "Product Manager",
      content: "The translation quality is incredible. Our international users feel like the app was built for their language.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      company: "Content Agency",
      role: "Content Director",
      content: "We can now create multilingual content at scale. The AI understands context and cultural nuances perfectly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Translation Service - Advanced Multilingual Translation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Break language barriers with our AI Translation Service. 100+ languages, context-aware translation, and real-time processing for global businesses."
        />
        <meta
          name="keywords"
          content="AI translation, multilingual translation, language translation, neural translation, real-time translation, translation API, global communication"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
              <Globe className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-sm font-medium">AI-Powered Translation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                AI Translation Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Break language barriers with our advanced AI Translation Service. 
              Translate between 100+ languages with 99% accuracy and context-aware understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">99%</div>
                <div className="text-gray-300">Translation Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
                <div className="text-gray-300">Words Translated Daily</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Translation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to communicate globally with AI-powered translation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your translation needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-emerald-400 bg-gradient-to-br from-emerald-500/10 to-teal-500/10'
                      : 'border-white/20 hover:border-emerald-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'
                        : 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'
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
                Trusted by Global Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what international businesses say about our translation platform
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
              Ready to Go Global?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses breaking language barriers with AI-powered translation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
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