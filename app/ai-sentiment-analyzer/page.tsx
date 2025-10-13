import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, Star, Clock, DollarSign, Zap, BarChart3, MessageSquare, TrendingUp, Users, Target, Award, ArrowRight, Sparkles, Globe, Smartphone, Monitor, Headphones, Mic, FileText, Database, Shield } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AISentimentAnalyzerPage = () => {
  const features = [
    {
      title: "Real-time Sentiment Analysis",
      description: "Advanced AI analyzes sentiment across multiple languages and platforms in real-time, providing instant insights into customer emotions and opinions",
      icon: <Brain className="w-6 h-6" />,
      stats: "50+ languages supported"
    },
    {
      title: "Multi-Platform Monitoring",
      description: "Monitor sentiment across social media, reviews, surveys, emails, and customer support interactions from a single dashboard",
      icon: <Globe className="w-6 h-6" />,
      stats: "20+ platforms"
    },
    {
      title: "Emotion Detection",
      description: "Go beyond positive/negative to detect specific emotions like joy, anger, fear, surprise, and sadness with 95% accuracy",
      icon: <MessageSquare className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Trend Analysis",
      description: "Track sentiment trends over time, identify patterns, and predict future sentiment changes with machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "Predictive analytics"
    },
    {
      title: "Custom Model Training",
      description: "Train custom sentiment models on your specific data and industry terminology for maximum accuracy and relevance",
      icon: <Target className="w-6 h-6" />,
      stats: "Industry-specific models"
    },
    {
      title: "Automated Alerts",
      description: "Get instant notifications when sentiment drops below thresholds or when significant changes occur in customer perception",
      icon: <Zap className="w-6 h-6" />,
      stats: "Instant alerts"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10,000 analyses/month",
        "Basic sentiment analysis",
        "5 data sources",
        "Email support",
        "Standard reports",
        "1 user account",
        "Basic dashboard",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies and marketing teams",
      features: [
        "Up to 100,000 analyses/month",
        "Advanced sentiment analysis",
        "Emotion detection",
        "20 data sources",
        "Priority support",
        "Custom reports",
        "5 user accounts",
        "Advanced dashboard",
        "Trend analysis",
        "90-day data retention",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited analyses",
        "Custom model training",
        "Real-time monitoring",
        "Unlimited data sources",
        "24/7 dedicated support",
        "White-label solution",
        "Unlimited user accounts",
        "Custom dashboard",
        "Predictive analytics",
        "Unlimited data retention",
        "Full API access",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1B+", label: "Messages Analyzed", icon: <MessageSquare className="w-6 h-6" /> },
    { number: "95%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Analysis", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Lisa Wang",
      company: "E-commerce Platform",
      role: "Customer Experience Director",
      content: "This AI sentiment analyzer has transformed how we understand our customers. We can now respond to negative sentiment in real-time and improve our products based on actual customer feedback.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Michael Rodriguez",
      company: "Social Media Agency",
      role: "Digital Marketing Manager",
      content: "The multi-platform monitoring is incredible. We can track sentiment across all our clients' social media channels and provide actionable insights that drive real business results.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Sarah Johnson",
      company: "Healthcare Provider",
      role: "Patient Experience Manager",
      content: "The emotion detection feature helps us understand patient concerns better than ever. We've improved our patient satisfaction scores by 40% since implementing this tool.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  const useCases = [
    {
      title: "Brand Monitoring",
      description: "Track brand sentiment across social media, news, and review platforms to protect and enhance your brand reputation",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer Support",
      description: "Analyze customer support interactions to identify pain points and improve service quality",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Market Research",
      description: "Understand public opinion about products, services, or campaigns to make data-driven decisions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Content Strategy",
      description: "Optimize content strategy by understanding what resonates with your audience emotionally",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Sentiment Analyzer - Zion Tech Group | Real-time Sentiment Analysis"
        description="Advanced AI-powered sentiment analysis across 50+ languages and 20+ platforms. Real-time emotion detection, trend analysis, and automated alerts for better customer insights."
        keywords="sentiment analysis, AI emotion detection, brand monitoring, customer sentiment, social media analysis, text analytics, opinion mining"
        canonical="https://ziontechgroup.com/ai-sentiment-analyzer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Sentiment Analysis Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Sentiment Analyzer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Understand customer emotions and opinions with advanced AI-powered sentiment analysis. 
            Monitor brand sentiment across 50+ languages and 20+ platforms in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Live Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Sentiment Analysis Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful AI-driven insights to understand customer emotions and opinions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From brand monitoring to customer support, our AI sentiment analyzer adapts to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Analysis Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start analyzing sentiment with our flexible pricing plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our AI sentiment analyzer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Understanding Your Customers Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI sentiment analyzer to understand customer emotions, 
            improve brand reputation, and make data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISentimentAnalyzerPage;