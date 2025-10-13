import React from "react";
import { ArrowRight, CheckCircle, Star, Database, Search, Brain, Zap, Shield, Target, Users, BarChart3, Settings, Smartphone, Laptop, Monitor, Sparkles, Award, TrendingUp, DollarSign, Clock, Globe, Mail, Phone, MapPin, Eye, Filter, Activity, Lock, Unlock, CheckCircle2, AlertTriangle, Info, HelpCircle, Layers, PieChart, LineChart, BarChart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIDataMiningPro() {
  const features = [
    "Pattern Discovery Algorithms",
    "Anomaly Detection",
    "Predictive Modeling",
    "Big Data Processing",
    "Real-time Analysis",
    "Custom Algorithm Development",
    "Data Visualization",
    "Integration Capabilities",
    "Machine Learning Models",
    "Statistical Analysis",
    "Clustering & Classification",
    "Association Rule Mining"
  ];

  const benefits = [
    "Discover hidden patterns in data",
    "Identify anomalies early",
    "Improve decision making",
    "Extract valuable insights",
    "Reduce analysis time by 80%",
    "Scale with big data"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      originalPrice: "$599",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1M data points/month",
        "Basic pattern discovery",
        "Email support",
        "Standard processing",
        "Basic visualizations",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      originalPrice: "$1,199",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10M data points/month",
        "Advanced ML algorithms",
        "Priority support",
        "Real-time processing",
        "Advanced visualizations",
        "Custom model training",
        "Anomaly detection",
        "Predictive analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,199",
      originalPrice: "$2,399",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited data points",
        "Premium AI capabilities",
        "24/7 dedicated support",
        "Custom analytics dashboard",
        "White-label solutions",
        "SLA guarantee",
        "Custom integrations",
        "On-premise deployment",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const miningTypes = [
    {
      title: "Pattern Recognition",
      description: "Discover hidden patterns and trends in large datasets using advanced machine learning algorithms",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      accuracy: "99.2%"
    },
    {
      title: "Anomaly Detection",
      description: "Identify unusual patterns and outliers that may indicate fraud, errors, or opportunities",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      accuracy: "98.8%"
    },
    {
      title: "Predictive Modeling",
      description: "Build predictive models to forecast future trends and behaviors based on historical data",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      accuracy: "97.5%"
    },
    {
      title: "Clustering Analysis",
      description: "Group similar data points together to identify customer segments and market opportunities",
      icon: <Layers className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      accuracy: "99.1%"
    },
    {
      title: "Association Rules",
      description: "Discover relationships between different variables and identify cross-selling opportunities",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-amber-500",
      accuracy: "96.7%"
    },
    {
      title: "Text Mining",
      description: "Extract insights from unstructured text data including social media, reviews, and documents",
      icon: <FileText className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      accuracy: "98.3%"
    }
  ];

  const industries = [
    {
      title: "E-commerce",
      description: "Analyze customer behavior, optimize pricing, and improve recommendation systems",
      icon: <Target className="w-6 h-6" />,
      insights: "35%"
    },
    {
      title: "Finance",
      description: "Detect fraud, assess risk, and optimize investment strategies",
      icon: <DollarSign className="w-6 h-6" />,
      insights: "40%"
    },
    {
      title: "Healthcare",
      description: "Analyze patient data, predict outcomes, and improve treatment protocols",
      icon: <Activity className="w-6 h-6" />,
      insights: "45%"
    },
    {
      title: "Marketing",
      description: "Segment customers, optimize campaigns, and predict customer lifetime value",
      icon: <BarChart className="w-6 h-6" />,
      insights: "30%"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "DataTech Solutions",
      role: "Chief Data Scientist",
      content: "Zion AI Data Mining Pro has revolutionized our data analysis. We've discovered patterns that were completely hidden before, leading to 40% improvement in our business metrics.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "FinanceFirst Analytics",
      role: "Head of Analytics",
      content: "The anomaly detection capabilities are outstanding. We've identified fraudulent transactions that would have cost us millions. The ROI is incredible.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "RetailMax Insights",
      role: "VP of Data Science",
      content: "The predictive modeling features have transformed our inventory management. We can now predict demand with 97% accuracy, reducing waste by 60%.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const stats = [
    { number: "99.2%", label: "Pattern Recognition Accuracy", icon: <Search className="w-6 h-6" /> },
    { number: "80%", label: "Analysis Time Reduction", icon: <Clock className="w-6 h-6" /> },
    { number: "10M+", label: "Data Points Processed", icon: <Database className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Processing", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Mining Pro - Advanced Data Analysis | Zion Tech Group</title>
        <meta
          name="description"
          content="Discover hidden insights with AI Data Mining Pro. Advanced pattern recognition, anomaly detection, and predictive modeling with 99.2% accuracy. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="data mining, AI data analysis, pattern recognition, anomaly detection, predictive modeling, big data analytics, machine learning, data insights"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-data-mining-pro" />
      </Helmet>
      <SEOOptimizer
        title="AI Data Mining Pro - Advanced Data Analysis | Zion Tech Group"
        description="Discover hidden insights with AI Data Mining Pro. Advanced pattern recognition, anomaly detection, and predictive modeling with 99.2% accuracy. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 Data Mining Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI Data Mining Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover hidden insights with advanced data mining. Pattern recognition, anomaly detection, 
                and predictive modeling with 99.2% accuracy for data-driven decisions.
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
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mining Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Data Mining Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive data mining techniques powered by state-of-the-art AI and machine learning algorithms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {miningTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{type.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {type.description}
                    </p>
                    <div className="text-2xl font-bold text-cyan-400">
                      {type.accuracy}
                    </div>
                    <div className="text-xs text-gray-400">Accuracy Rate</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Data Mining Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive data mining capabilities designed to extract maximum value from your data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how different industries are leveraging data mining for competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{industry.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {industry.description}
                    </p>
                    <div className="text-xl font-bold text-green-400">
                      {industry.insights}
                    </div>
                    <div className="text-xs text-gray-400">Insight Improvement</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? "border-cyan-500/50 shadow-cyan-500/25" 
                      : "border-white/10 hover:border-white/20"
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
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 line-through">${plan.originalPrice}</span>
                      <span className="text-gray-300">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-lg hover:shadow-cyan-500/25"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Data Mining Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your data into actionable insights with intelligent mining that delivers measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
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
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who trust our data mining solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Discover Hidden Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start your free 14-day trial today. No credit card required. Experience the power of AI data mining.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}