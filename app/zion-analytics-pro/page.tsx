<<<<<<< HEAD
import { ArrowRight, BarChart3, CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Database, Eye, Download, Upload, Search, Filter, Bell, MessageSquare, Calendar, PieChart, LineChart, BarChart, Activity, AlertTriangle, CheckCircle2, XCircle, Info, ExternalLink, Mail, Phone, MapPin, Play, Download as DownloadIcon, Upload as UploadIcon, Settings, Lock, RefreshCw, Globe, Smartphone, Target, FileText, Code, Brain, Database as DatabaseIcon } from "lucide-react";
=======
import { ArrowRight, BarChart3, TrendingUp, Users, Zap, CheckCircle, Star, Mail, Phone, MapPin, Shield, Clock, Globe } from "lucide-react";
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAnalyticsPro() {
  const features = [
    {
<<<<<<< HEAD
      title: "Real-time Dashboard",
      description: "Monitor your business metrics in real-time with customizable dashboards that update automatically.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Live data updates", "Customizable widgets", "Mobile responsive", "Export capabilities"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis to help you make data-driven decisions.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Sales forecasting", "Trend analysis", "Anomaly detection", "Risk assessment"]
    },
    {
      title: "Custom Reports",
      description: "Generate detailed reports with drag-and-drop report builder and automated scheduling.",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Drag-and-drop builder", "Automated scheduling", "Multiple formats", "White-label options"]
    },
    {
      title: "API Integration",
      description: "Connect with 100+ business applications and data sources for comprehensive analytics.",
      icon: <Database className="w-6 h-6" />,
      benefits: ["100+ integrations", "Real-time sync", "Custom connectors", "Data transformation"]
    },
    {
      title: "Data Visualization",
      description: "Create stunning charts, graphs, and interactive visualizations to present your data effectively.",
      icon: <PieChart className="w-6 h-6" />,
      benefits: ["Interactive charts", "Multiple chart types", "Custom themes", "Export options"]
    },
    {
      title: "Automated Alerts",
      description: "Set up intelligent alerts for important metrics and receive notifications via email, SMS, or Slack.",
      icon: <Bell className="w-6 h-6" />,
      benefits: ["Smart thresholds", "Multi-channel alerts", "Custom conditions", "Escalation rules"]
=======
      title: "Real-time Analytics Dashboard",
      description: "Monitor your business metrics in real-time with customizable dashboards and interactive visualizations.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Live Data Updates", "Custom Widgets", "Mobile Responsive", "Export Capabilities"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis to help you make data-driven decisions for the future.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Sales Forecasting", "Trend Analysis", "Risk Assessment", "Growth Projections"]
    },
    {
      title: "User Behavior Tracking",
      description: "Understand your customers better with detailed user journey mapping and behavior analytics.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Customer Journey", "Conversion Funnels", "User Segmentation", "Engagement Metrics"]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically and schedule them for delivery to stakeholders.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Scheduled Reports", "Custom Templates", "Multi-format Export", "Email Delivery"]
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
<<<<<<< HEAD
      price: "$299",
=======
      price: "$99",
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
      period: "/month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
<<<<<<< HEAD
        "Standard reports",
        "Email support",
        "1GB data storage",
        "API access"
=======
        "Monthly reports",
        "Email support",
        "1 user account"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
      ],
      popular: false
    },
    {
      name: "Professional",
<<<<<<< HEAD
      price: "$499",
=======
      price: "$199",
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
      period: "/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 20 data sources",
        "Advanced dashboards",
<<<<<<< HEAD
        "Custom reports",
        "Priority support",
        "10GB data storage",
        "Advanced analytics",
        "Team collaboration",
        "White-label options"
=======
        "Real-time analytics",
        "Predictive insights",
        "Priority support",
        "Up to 5 user accounts",
        "API access"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
      ],
      popular: true
    },
    {
      name: "Enterprise",
<<<<<<< HEAD
      price: "$999",
=======
      price: "$399",
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
<<<<<<< HEAD
        "Advanced reporting",
        "24/7 support",
        "Unlimited storage",
        "AI-powered insights",
        "Custom integrations",
        "Dedicated account manager"
=======
        "Advanced AI insights",
        "White-label options",
        "24/7 support",
        "Unlimited users",
        "Full API access",
        "Custom integrations"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
      ],
      popular: false
    }
  ];

<<<<<<< HEAD
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Analytics Pro transformed our data analysis. We now make decisions 40% faster with real-time insights.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The predictive analytics feature helped us identify trends before our competitors. Game changer!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Easy to use, powerful features, and excellent support. Our team productivity increased by 60%.",
      rating: 5,
      avatar: "ER"
    }
=======
  const integrations = [
    { name: "Google Analytics", logo: "📊" },
    { name: "Facebook Ads", logo: "📱" },
    { name: "Google Ads", logo: "🔍" },
    { name: "Salesforce", logo: "☁️" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Shopify", logo: "🛒" },
    { name: "Stripe", logo: "💳" },
    { name: "Mailchimp", logo: "📧" },
    { name: "Zapier", logo: "⚡" },
    { name: "Slack", logo: "💬" }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "100+", label: "Integrations", icon: <Database className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Zion Analytics Pro - AI-Powered Business Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your data into actionable insights with Zion Analytics Pro. Real-time dashboards, predictive analytics, and automated reporting for modern businesses."
        />
        <meta
          name="keywords"
          content="business intelligence, analytics, data visualization, predictive analytics, real-time dashboards, reporting, AI analytics, data insights"
=======
        <title>Zion Analytics Pro - Advanced Business Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="Zion Analytics Pro - Advanced AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable business decisions."
        />
        <meta
          name="keywords"
          content="business intelligence, analytics platform, data visualization, predictive analytics, real-time dashboards, automated reporting, AI insights"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                  <BarChart3 className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Most Popular Analytics Platform</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Zion Analytics
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
                    {" "}Pro
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your data into actionable insights with our AI-powered business intelligence platform. 
                  Real-time dashboards, predictive analytics, and automated reporting for modern businesses.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Live Dashboard Preview</h3>
                    <p className="text-gray-300">See your data in action</p>
                  </div>
                  
                  {/* Mock Dashboard */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">Revenue</span>
                        <span className="text-green-400 text-sm">+12.5%</span>
                      </div>
                      <div className="text-2xl font-bold text-white">$125,430</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Users</div>
                        <div className="text-xl font-bold text-white">2,847</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4">
                        <div className="text-white font-semibold text-sm mb-1">Conversion</div>
                        <div className="text-xl font-bold text-white">3.2%</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">Active Sessions</span>
                        <span className="text-yellow-400 text-sm">Live</span>
                      </div>
                      <div className="text-2xl font-bold text-white">1,234</div>
                    </div>
                  </div>
                </div>
=======
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 border border-cyan-500/30">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-cyan-300 text-sm font-semibold">Micro SAAS Solution</span>
              </div>
            </div>
            
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Zion Analytics
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Pro
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered business intelligence platform that transforms your data into actionable insights. 
              Real-time analytics, predictive modeling, and automated reporting for data-driven decision making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Demo
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
<<<<<<< HEAD
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
=======
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
                Everything you need to transform your data into actionable business insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
=======
                Everything you need to turn your data into actionable business insights and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
                Choose the plan that fits your business needs. All plans include our core features.
=======
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
<<<<<<< HEAD
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-blue-500/50 shadow-2xl shadow-blue-500/25' 
                      : 'border-white/20 hover:border-blue-500/30'
=======
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20' 
                      : 'border-white/20 hover:border-cyan-500/30'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
=======
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
<<<<<<< HEAD
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/25'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
=======
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using Zion Analytics Pro to drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
=======
        {/* Integrations Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Seamless Integrations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms. Zion Analytics Pro integrates with 50+ popular services.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
                >
                  <div className="text-2xl mb-2">{integration.logo}</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {integration.name}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Information Section */}
=======
        {/* Contact Section */}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to start your free trial or schedule a personalized demo.
=======
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses already using Zion Analytics Pro to make data-driven decisions. 
                Start your free trial today or contact us for a personalized demo.
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
<<<<<<< HEAD
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-blue-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-blue-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
<<<<<<< HEAD
                  className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
=======
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
<<<<<<< HEAD
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
=======
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-4325
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}