import React from "react";
import { ArrowRight, CheckCircle, Star, Users, BarChart3, TrendingUp, Target, Eye, Brain, Zap, Shield, Globe, Smartphone, Monitor, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Mail, Sparkles, Award, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function ZionAICustomerInsights() {
  const features = [
    "AI-powered customer behavior analysis",
    "Real-time sentiment analysis across all channels",
    "Predictive customer lifetime value modeling",
    "Automated customer segmentation",
    "Churn prediction and prevention alerts",
    "Customer journey mapping and optimization",
    "Multi-channel data integration",
    "Advanced analytics and reporting",
    "Custom dashboard creation",
    "API integration for existing systems",
    "White-label solution available",
    "24/7 monitoring and alerts"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10,000 customer profiles",
        "Basic sentiment analysis",
        "Standard reporting",
        "Email support",
        "3 data source integrations",
        "Basic dashboard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 100,000 customer profiles",
        "Advanced AI analytics",
        "Predictive modeling",
        "Priority support",
        "10 data source integrations",
        "Custom dashboard builder",
        "API access",
        "Churn prediction alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited customer profiles",
        "Advanced AI and ML models",
        "Real-time analytics",
        "Dedicated support",
        "Unlimited integrations",
        "White-label solution",
        "Custom AI model training",
        "Advanced security features",
        "Team collaboration tools",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const insights = [
    {
      title: "Customer Segmentation",
      description: "Automatically segment customers based on behavior, preferences, and value using AI algorithms",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Increase targeting accuracy by 40%", "Improve campaign ROI by 35%", "Reduce customer acquisition costs"]
    },
    {
      title: "Sentiment Analysis",
      description: "Monitor customer sentiment across all touchpoints in real-time with advanced NLP",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Detect issues before they escalate", "Improve customer satisfaction", "Reduce churn by 25%"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer behavior, lifetime value, and churn probability with machine learning",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Predict churn with 85% accuracy", "Optimize marketing spend", "Increase retention rates"]
    },
    {
      title: "Journey Mapping",
      description: "Visualize and optimize customer journeys across all channels and touchpoints",
      icon: <Map className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["Identify friction points", "Improve conversion rates", "Enhance customer experience"]
    },
    {
      title: "Real-time Monitoring",
      description: "Track customer interactions and behaviors in real-time with instant alerts",
      icon: <Activity className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      benefits: ["Respond to issues immediately", "Capitalize on opportunities", "Improve response times"]
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards with the metrics that matter most to your business",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      benefits: ["Make data-driven decisions", "Save time on reporting", "Share insights across teams"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "E-commerce Platform",
      role: "VP of Marketing",
      content: "Zion AI Customer Insights has transformed how we understand our customers. We've increased our customer lifetime value by 45% and reduced churn by 30%.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "SaaS Company",
      role: "Head of Customer Success",
      content: "The predictive analytics are incredibly accurate. We can now identify at-risk customers before they churn and take proactive measures to retain them.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The real-time sentiment analysis helps us respond to customer issues immediately. Our customer satisfaction scores have improved by 40% since implementation.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Using Our Platform", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Data Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "85%", label: "Churn Prediction Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Monitoring", icon: <Activity className="w-6 h-6" /> }
  ];

  const dataSources = [
    "CRM Systems (Salesforce, HubSpot, Pipedrive)",
    "Email Marketing Platforms (Mailchimp, Constant Contact)",
    "Social Media (Facebook, Twitter, Instagram, LinkedIn)",
    "Website Analytics (Google Analytics, Adobe Analytics)",
    "Customer Support (Zendesk, Freshdesk, Intercom)",
    "E-commerce Platforms (Shopify, WooCommerce, Magento)",
    "Mobile Apps (iOS, Android)",
    "Survey Tools (SurveyMonkey, Typeform)",
    "Call Centers and Phone Systems",
    "Live Chat and Messaging Platforms"
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights - AI-Powered Customer Analytics Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform customer data into actionable insights with AI-powered analytics. Predict churn, analyze sentiment, and optimize customer journeys. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="customer insights, customer analytics, AI analytics, sentiment analysis, churn prediction, customer segmentation, customer journey mapping"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Customer Insights - AI-Powered Customer Analytics Platform"
        description="Transform customer data into actionable insights with AI-powered analytics. Predict churn, analyze sentiment, and optimize customer journeys. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Analytics</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion AI Customer Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your customer data into actionable insights with advanced AI analytics. 
              Predict churn, analyze sentiment, optimize journeys, and grow your business.
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful AI Customer Analytics
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Unlock the full potential of your customer data with advanced AI algorithms. 
                Get insights that drive growth and improve customer experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Customer Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get deep insights into customer behavior, preferences, and patterns with our AI-powered analytics platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="space-y-2">
                    {insight.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connect All Your Data Sources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Integrate with 50+ popular platforms to get a complete view of your customers across all touchpoints.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {source}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your customer analytics needs. Start with a free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/25' 
                      : 'border-white/20 hover:border-white/30'
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
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Leading Companies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI customer insights platform has transformed businesses across industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
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
              Join hundreds of companies using Zion AI Customer Insights to make data-driven decisions 
              and grow their business. Start your free trial today!
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
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
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
                to="/micro-saas"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Solutions
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}