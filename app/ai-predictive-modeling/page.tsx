import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, Star, Clock, DollarSign, Zap, BarChart3, TrendingUp, Target, Users, Award, ArrowRight, Sparkles, Globe, Shield, Database, FileText, Settings, Monitor, Smartphone, Headphones, Mic } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIPredictiveModelingPage = () => {
  const features = [
    {
      title: "Advanced Machine Learning Models",
      description: "Deploy state-of-the-art ML algorithms including deep learning, ensemble methods, and neural networks for accurate predictions",
      icon: <Brain className="w-6 h-6" />,
      stats: "50+ ML algorithms"
    },
    {
      title: "Real-time Data Processing",
      description: "Process and analyze data streams in real-time to generate instant predictions and insights for immediate action",
      icon: <Zap className="w-6 h-6" />,
      stats: "Sub-second predictions"
    },
    {
      title: "Automated Feature Engineering",
      description: "AI automatically identifies and creates the most relevant features from your data to improve model accuracy",
      icon: <Settings className="w-6 h-6" />,
      stats: "90% accuracy improvement"
    },
    {
      title: "Multi-Variate Analysis",
      description: "Analyze complex relationships between multiple variables to uncover hidden patterns and correlations",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "1000+ variables"
    },
    {
      title: "Model Explainability",
      description: "Understand how your models make decisions with detailed explanations and feature importance analysis",
      icon: <Target className="w-6 h-6" />,
      stats: "Full transparency"
    },
    {
      title: "Continuous Learning",
      description: "Models automatically retrain and improve as new data becomes available, maintaining peak performance",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "Self-improving models"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and data teams",
      features: [
        "Up to 5 predictive models",
        "Basic ML algorithms",
        "Standard data processing",
        "Email support",
        "Basic visualizations",
        "1 user account",
        "10GB data storage",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies and data scientists",
      features: [
        "Up to 25 predictive models",
        "Advanced ML algorithms",
        "Real-time processing",
        "Priority support",
        "Advanced visualizations",
        "5 user accounts",
        "100GB data storage",
        "Automated feature engineering",
        "Model explainability",
        "90-day data retention",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1999",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited predictive models",
        "Custom ML algorithms",
        "Real-time streaming",
        "24/7 dedicated support",
        "White-label solution",
        "Unlimited user accounts",
        "Unlimited data storage",
        "Custom feature engineering",
        "Advanced explainability",
        "Unlimited data retention",
        "Full API access",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1M+", label: "Predictions Made", icon: <Brain className="w-6 h-6" /> },
    { number: "95%", label: "Model Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "ML Algorithms", icon: <Settings className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Processing", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Chen",
      company: "Financial Services",
      role: "Chief Data Scientist",
      content: "This AI predictive modeling platform has transformed our risk assessment capabilities. We've improved our fraud detection accuracy by 40% and reduced false positives by 60%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Rodriguez",
      company: "E-commerce Platform",
      role: "VP of Analytics",
      content: "The automated feature engineering is incredible. It saves our data science team weeks of work and consistently produces more accurate models than our manual approach.",
      rating: 5,
      avatar: "SR"
    },
    {
      name: "James Wilson",
      company: "Healthcare Provider",
      role: "Director of Analytics",
      content: "The model explainability features are crucial for our healthcare applications. We can now confidently deploy AI models knowing exactly how they make decisions.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const useCases = [
    {
      title: "Financial Risk Assessment",
      description: "Predict credit risk, fraud detection, and market volatility with advanced financial modeling",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer Behavior Prediction",
      description: "Forecast customer churn, lifetime value, and purchasing patterns for better marketing strategies",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Supply Chain Optimization",
      description: "Predict demand, optimize inventory, and reduce supply chain disruptions with ML models",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Healthcare Diagnostics",
      description: "Predict disease progression, treatment outcomes, and patient readmission risks",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Predictive Modeling - Zion Tech Group | Advanced ML Analytics"
        description="Advanced AI-powered predictive modeling platform with 50+ ML algorithms, real-time processing, and automated feature engineering. Build accurate predictive models with 95% accuracy."
        keywords="predictive modeling, machine learning, AI analytics, predictive analytics, ML algorithms, data science, forecasting, predictive intelligence"
        canonical="https://ziontechgroup.com/ai-predictive-modeling"
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
            <span className="text-cyan-400 text-sm font-medium">#1 AI Predictive Modeling Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Predictive Modeling
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build accurate predictive models with advanced AI and machine learning. Process data in real-time, 
            automate feature engineering, and generate actionable insights with 95% accuracy.
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
              Advanced Predictive Modeling Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful AI-driven tools to build, deploy, and manage predictive models at scale
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
              From finance to healthcare, our AI predictive modeling adapts to your industry needs
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
              Choose Your Modeling Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start building predictive models with our flexible pricing plans
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
              Trusted by Data Scientists Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what data professionals say about our AI predictive modeling platform
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
            Ready to Build Your First Predictive Model?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of data scientists already using our AI predictive modeling platform to build accurate models faster. 
            Start your free trial today and unlock the power of predictive analytics.
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

export default AIPredictiveModelingPage;