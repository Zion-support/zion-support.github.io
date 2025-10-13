import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, TrendingUp, Target, Brain, Clock, DollarSign, Award, Rocket, Cpu, Database, Mail, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Settings, Monitor, FileText, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, Wifi, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow, PieChart, LineChart, TrendingDown, TrendingUp, BarChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, Wifi, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AiBusinessIntelligencePro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms automatically discover patterns and generate actionable business insights"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Dashboards",
      description: "Interactive dashboards with live data visualization and customizable widgets for all business metrics"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast future trends, customer behavior, and business performance with 95% accuracy"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Integration",
      description: "Connect to 200+ data sources including CRM, ERP, marketing tools, and cloud platforms"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Natural Language Query",
      description: "Ask questions in plain English and get instant answers from your data using AI-powered query engine"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with AI-generated insights and recommendations"
    }
  ];

  const dataSources = [
    {
      name: "Sales & CRM",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      sources: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"]
    },
    {
      name: "Marketing",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      sources: ["Google Analytics", "Facebook Ads", "Mailchimp", "Hootsuite"]
    },
    {
      name: "Finance",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      sources: ["QuickBooks", "Xero", "Stripe", "PayPal"]
    },
    {
      name: "Operations",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      sources: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"]
    },
    {
      name: "HR & People",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      sources: ["Workday", "BambooHR", "ADP", "Slack"]
    },
    {
      name: "Cloud Platforms",
      icon: <CloudRain className="w-8 h-8" />,
      color: "from-gray-500 to-gray-600",
      sources: ["AWS", "Azure", "Google Cloud", "Snowflake"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increase Revenue by 35%",
      description: "Data-driven decisions lead to better strategies and higher profitability"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save 25+ Hours Weekly",
      description: "Automated reporting and insights eliminate manual data analysis tasks"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Improve Decision Speed",
      description: "Real-time insights enable faster, more accurate business decisions"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitive Advantage",
      description: "AI-powered insights give you an edge over competitors using traditional analytics"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "5 user licenses"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 data sources",
        "Advanced AI insights",
        "Custom dashboards",
        "Predictive analytics",
        "Priority support",
        "25 user licenses"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager",
        "API access",
        "Unlimited users"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with AI-powered business intelligence. Get real-time insights, predictive analytics, and automated reporting to drive growth and profitability."
        />
        <meta
          name="keywords"
          content="AI business intelligence, predictive analytics, data visualization, business insights, data integration, automated reporting, business analytics"
        />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Business Intelligence
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with AI-powered business intelligence. Get real-time insights, predictive analytics, and automated reporting to drive growth and profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-indigo-400 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources Section */}
        <div className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Connect All Your Data Sources
              </h2>
              <p className="text-xl text-gray-300">
                Seamlessly integrate with 200+ business applications and data sources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`text-${source.color.split('-')[1]}-400 mb-4`}>{source.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {source.name}
                  </h3>
                  <div className="space-y-2">
                    {source.sources.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300">
                Powerful AI capabilities to transform your data into actionable insights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-indigo-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Proven Business Results
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of businesses making data-driven decisions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                >
                  <div className="text-green-400 mb-4 mx-auto w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that scales with your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular
                      ? "border-indigo-500 ring-2 ring-indigo-500/20"
                      : "border-gray-700"
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                        : "border-2 border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and discover the power of AI-driven business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-400 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}