import React from "react";
import { ArrowRight, CheckCircle, Star, Users, BarChart3, Brain, Target, TrendingUp, Zap, Globe, Smartphone, Monitor, Mail, Phone, MapPin, Eye, Heart, MessageSquare, PieChart, Activity, Award, Clock, DollarSign, Shield, Settings, Database, Code, Share, Bell, Search, Filter, Download, Upload, BookOpen, Lightbulb, Puzzle, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiCustomerInsights() {
  const features = [
    "AI-powered customer behavior analysis",
    "Real-time sentiment analysis across all channels",
    "Predictive customer lifetime value modeling",
    "Automated customer segmentation (RFM analysis)",
    "Churn prediction with 95% accuracy",
    "Cross-channel customer journey mapping",
    "Personalized recommendation engine",
    "Customer satisfaction scoring (CSAT, NPS, CES)",
    "Social media sentiment monitoring",
    "Email and chat sentiment analysis",
    "Customer health scoring dashboard",
    "Automated insight reports and alerts",
    "Integration with 100+ CRM and marketing tools",
    "Custom AI model training for your data",
    "White-label reporting and dashboards",
    "API access for custom integrations"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      originalPrice: "$59",
      discount: "51% OFF",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 customers",
        "Basic sentiment analysis",
        "Customer segmentation",
        "Churn prediction",
        "Email support",
        "Standard dashboards",
        "5 integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      originalPrice: "$159",
      discount: "50% OFF",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 10,000 customers",
        "Advanced sentiment analysis",
        "Predictive analytics",
        "Customer journey mapping",
        "Priority support",
        "Custom dashboards",
        "20 integrations",
        "API access",
        "Automated reports",
        "A/B testing insights"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      originalPrice: "$399",
      discount: "50% OFF",
      description: "For large organizations and agencies",
      features: [
        "Unlimited customers",
        "Advanced AI models",
        "Custom model training",
        "White-label options",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "Team collaboration",
        "Data export/import",
        "Compliance reporting",
        "Multi-brand support",
        "Custom AI algorithms"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "E-commerce Giant",
      role: "VP of Customer Experience",
      content: "Zion AI Customer Insights has transformed how we understand our customers. We've increased customer retention by 35% and improved our NPS score by 20 points in just 3 months.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "SaaS Platform",
      role: "Head of Marketing",
      content: "The predictive analytics are incredibly accurate. We can now identify at-risk customers before they churn and take proactive measures. Our customer success team is 3x more effective.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Retail Chain",
      role: "Customer Analytics Director",
      content: "The real-time sentiment analysis across all channels gives us instant insights into customer satisfaction. We've reduced customer complaints by 50% and increased satisfaction scores significantly.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const stats = [
    { number: "500K+", label: "Customers Analyzed", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Churn Prediction Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "35%", label: "Average Retention Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const insights = [
    {
      title: "Customer Segmentation",
      description: "Automatically segment customers based on behavior, value, and engagement using advanced AI algorithms",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sentiment Analysis",
      description: "Monitor customer sentiment across all touchpoints including social media, reviews, and support tickets",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Churn Prediction",
      description: "Identify customers at risk of churning with 95% accuracy and take proactive retention actions",
      icon: <Target className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Lifetime Value",
      description: "Predict customer lifetime value and optimize marketing spend for maximum ROI",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Journey Mapping",
      description: "Visualize complete customer journeys across all channels and touchpoints",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Recommendation Engine",
      description: "AI-powered product and content recommendations to increase engagement and sales",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights - Advanced Customer Analytics Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform customer data into actionable insights with AI. Predict churn, analyze sentiment, segment customers, and optimize lifetime value. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="customer insights, customer analytics, churn prediction, sentiment analysis, customer segmentation, lifetime value, customer journey mapping, AI analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Analytics</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Customer Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform customer data into actionable insights with AI. Predict churn, analyze sentiment, 
              segment customers, and optimize lifetime value. Make data-driven decisions that drive growth.
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
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Customer Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to understand your customers better. From sentiment analysis to churn prediction, 
                our AI-powered platform provides deep insights into customer behavior.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Customer Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a complete view of your customers with our AI-powered analytics across all touchpoints and channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {insight.description}
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
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as your business grows. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-cyan-500/50 shadow-cyan-500/20"
                      : "border-white/20 hover:border-white/40"
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
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300">{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-gray-500 line-through text-sm">{plan.originalPrice}</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        {plan.discount}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Leading Companies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our customers are using Zion AI Customer Insights to drive growth and improve customer experience.
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
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
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
              Ready to Transform Your Customer Understanding?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion AI Customer Insights to make data-driven decisions 
              and improve customer experience. Start your free trial today.
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
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}