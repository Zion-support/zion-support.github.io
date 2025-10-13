import React from "react";
import { ArrowRight, CheckCircle, Star, Users, BarChart3, Brain, Target, TrendingUp, Zap, Clock, Award, Globe, Lock, Settings, Monitor, Smartphone, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Eye, Heart, ThumbsUp, Rocket, Cpu } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionAICustomerInsights() {
  const features = [
    "AI-powered customer behavior analysis",
    "Real-time sentiment analysis across all channels",
    "Predictive customer lifetime value modeling",
    "Automated customer segmentation and profiling",
    "Cross-platform data integration (CRM, social, web, email)",
    "Advanced churn prediction and prevention",
    "Personalized recommendation engine",
    "Customer journey mapping and optimization",
    "Competitive analysis and benchmarking",
    "Automated insight generation and reporting",
    "Real-time alerts and notifications",
    "Custom dashboard and visualization tools"
  ];

  const benefits = [
    "Increase customer retention by 40%",
    "Boost revenue per customer by 35%",
    "Reduce churn rate by 60%",
    "Improve customer satisfaction scores by 50%"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 customer profiles",
        "Basic sentiment analysis",
        "Standard segmentation",
        "Email support",
        "Basic analytics dashboard",
        "5 data source integrations",
        "Monthly reports"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 10,000 customer profiles",
        "Advanced sentiment analysis",
        "AI-powered segmentation",
        "Priority support",
        "Advanced analytics dashboard",
        "15 data source integrations",
        "Weekly reports",
        "Predictive analytics",
        "API access",
        "Custom dashboards"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited customer profiles",
        "Real-time sentiment analysis",
        "Advanced AI segmentation",
        "24/7 dedicated support",
        "Custom analytics platform",
        "Unlimited data integrations",
        "Real-time reports",
        "Advanced predictive modeling",
        "Full API access",
        "White-label options",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const insights = [
    {
      title: "Customer Behavior Analysis",
      description: "Understand how customers interact with your brand across all touchpoints",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      metrics: ["Purchase patterns", "Engagement levels", "Preference tracking", "Behavioral triggers"]
    },
    {
      title: "Sentiment Analysis",
      description: "Monitor customer emotions and satisfaction in real-time across all channels",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      metrics: ["Social media sentiment", "Review analysis", "Support ticket emotions", "Survey responses"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer behavior and identify opportunities for growth",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      metrics: ["Churn prediction", "Lifetime value", "Purchase probability", "Engagement forecasting"]
    },
    {
      title: "Customer Segmentation",
      description: "Automatically group customers based on behavior, preferences, and value",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      metrics: ["Demographic segments", "Behavioral clusters", "Value-based groups", "Lifecycle stages"]
    },
    {
      title: "Journey Mapping",
      description: "Visualize and optimize the complete customer experience journey",
      icon: <Map className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      metrics: ["Touchpoint analysis", "Journey optimization", "Friction identification", "Experience scoring"]
    },
    {
      title: "Competitive Intelligence",
      description: "Monitor competitor performance and market positioning",
      icon: <Eye className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      metrics: ["Market share analysis", "Competitor benchmarking", "Price monitoring", "Feature comparison"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "E-commerce Platform",
      role: "VP of Marketing",
      content: "Zion AI Customer Insights has transformed our customer understanding. We've increased retention by 45% and our customer satisfaction scores are at an all-time high. The insights are incredibly accurate and actionable.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Thompson",
      company: "SaaS Company",
      role: "Head of Customer Success",
      content: "The predictive analytics are game-changing. We can now identify at-risk customers before they churn and take proactive measures. Our churn rate has dropped by 60% since implementation.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The customer journey mapping feature has helped us identify and fix critical pain points. Our customer experience scores have improved dramatically, and we're seeing higher customer lifetime values.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Customer Profiles Analyzed", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Prediction Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "40%", label: "Average Retention Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights - AI-Powered Customer Analytics | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform customer data into actionable insights with AI. Predict behavior, analyze sentiment, segment customers, and optimize experiences. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="customer insights, AI analytics, customer behavior, sentiment analysis, predictive analytics, customer segmentation, customer journey mapping"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Customer Insights - AI-Powered Customer Analytics | Zion Tech Group"
        description="Transform customer data into actionable insights with AI. Predict behavior, analyze sentiment, segment customers, and optimize experiences. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Customer Analytics Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Customer Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform customer data into actionable insights with AI. Predict behavior, analyze sentiment, 
              segment customers, and optimize experiences. Make data-driven decisions that drive growth.
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
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
                Unlock the full potential of your customer data with advanced AI analytics. 
                Understand behavior, predict outcomes, and optimize experiences like never before.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Customer Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get deep insights into every aspect of your customer relationships
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="space-y-2">
                    {insight.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with a free trial and scale as you grow. All plans include our core AI features.
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
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                    to={plan.popular ? "/contact" : "/contact"}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                    }`}
                  >
                    {plan.cta}
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
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI customer insights have transformed businesses
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion AI Customer Insights to make data-driven decisions 
              and grow their customer relationships. Start your free trial today.
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
                View All Plans
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}