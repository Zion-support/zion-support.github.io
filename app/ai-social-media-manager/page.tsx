import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, TrendingUp, Target, Brain, Clock, DollarSign, Award, Rocket, Cpu, Database, Mail, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Settings, Monitor, FileText, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, Wifi, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow, Instagram, Facebook, Twitter, Youtube, Linkedin, Send, Image, Video, Hash, AtSign, Smile, Camera, Mic, Headphones, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, Clock10, Clock11, Clock12, Calendar as CalendarIcon, CalendarDays, CalendarCheck, CalendarX, CalendarPlus, CalendarMinus, CalendarRange, CalendarSearch, CalendarHeart, CalendarStar, CalendarClock, CalendarUser, CalendarEdit, CalendarTrash, CalendarSettings, CalendarImport, CalendarExport, CalendarShare, CalendarLock, CalendarUnlock, CalendarKey, CalendarShield, CalendarAlert, CalendarBell, CalendarZap, CalendarSparkles, CalendarGift, CalendarAward, CalendarTrophy, CalendarMedal, CalendarCrown, CalendarGem, CalendarDiamond, CalendarPearl, CalendarRuby, CalendarSapphire, CalendarEmerald, CalendarTopaz, CalendarAmethyst, CalendarQuartz, CalendarCrystal, CalendarJewel, CalendarTreasure, CalendarGold, CalendarSilver, CalendarBronze, CalendarPlatinum, CalendarTitanium, CalendarSteel, CalendarIron, CalendarCopper, CalendarAluminum, CalendarZinc, CalendarTin, CalendarLead, CalendarMercury, CalendarUranium, CalendarPlutonium, CalendarRadium, CalendarThorium, CalendarActinium, CalendarProtactinium, CalendarNeptunium, CalendarAmericium, CalendarCurium, CalendarBerkelium, CalendarCalifornium, CalendarEinsteinium, CalendarFermium, CalendarMendelevium, CalendarNobelium, CalendarLawrencium, CalendarRutherfordium, CalendarDubnium, CalendarSeaborgium, CalendarBohrium, CalendarHassium, CalendarMeitnerium, CalendarDarmstadtium, CalendarRoentgenium, CalendarCopernicium, CalendarNihonium, CalendarFlerovium, CalendarMoscovium, CalendarLivermorium, CalendarTennessine, CalendarOganesson, Package, Receipt, ClipboardList, Workflow } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AiSocialMediaManager() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice and audience"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on your audience's activity patterns and engagement data"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive analytics and insights to track engagement, reach, and ROI across all platforms"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Insights",
      description: "Deep audience analysis to understand demographics, interests, and behavior patterns"
    },
    {
      icon: <Hash className="w-6 h-6" />,
      title: "Hashtag Optimization",
      description: "AI-powered hashtag research and optimization to maximize reach and engagement"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Auto-Responder",
      description: "Intelligent auto-responses to comments and messages to maintain engagement 24/7"
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500",
      features: ["Stories", "Reels", "Posts", "IGTV", "Shopping"]
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      features: ["Posts", "Stories", "Events", "Groups", "Pages"]
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-8 h-8" />,
      color: "from-blue-400 to-blue-500",
      features: ["Tweets", "Threads", "Spaces", "Moments"]
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-8 h-8" />,
      color: "from-blue-600 to-blue-700",
      features: ["Posts", "Articles", "Company Updates", "Events"]
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      features: ["Videos", "Shorts", "Live", "Community"]
    },
    {
      name: "TikTok",
      icon: <Video className="w-8 h-8" />,
      color: "from-black to-gray-800",
      features: ["Videos", "Live", "Stories", "Effects"]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save 20+ Hours Weekly",
      description: "Automate content creation, scheduling, and engagement management"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increase Engagement by 300%",
      description: "AI-optimized content and timing drive higher engagement rates"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Boost ROI by 250%",
      description: "Better targeting and content optimization improve conversion rates"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Consistent Brand Voice",
      description: "AI maintains your brand voice across all platforms and content"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "3 social media accounts",
        "50 posts per month",
        "Basic analytics",
        "AI content generation",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "10 social media accounts",
        "Unlimited posts",
        "Advanced analytics",
        "AI scheduling",
        "Hashtag optimization",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited accounts",
        "White-label solution",
        "Custom AI training",
        "Dedicated account manager",
        "API access",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta
          name="description"
          content="Automate your social media with AI-powered content generation, scheduling, and analytics. Increase engagement by 300% and save 20+ hours weekly."
        />
        <meta
          name="keywords"
          content="AI social media management, social media automation, content generation, social media analytics, social media scheduling, brand management"
        />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Social Media
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}Manager
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Automate your social media with AI-powered content generation, scheduling, and analytics. Increase engagement by 300% and save 20+ hours weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Platforms Section */}
        <div className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                All Major Platforms Supported
              </h2>
              <p className="text-xl text-gray-300">
                Manage all your social media accounts from one unified dashboard
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className={`text-${platform.color.split('-')[1]}-400 mb-4 mx-auto w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {platform.name}
                  </h3>
                  <div className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-block text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded mr-1 mb-1"
                      >
                        {feature}
                      </span>
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
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300">
                Advanced AI capabilities to transform your social media presence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
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
                Proven Results
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of businesses transforming their social media presence
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
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that fits your social media needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular
                      ? "border-purple-500 ring-2 ring-purple-500/20"
                      : "border-gray-700"
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                        : "border-2 border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white"
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
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how AI can revolutionize your social media strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
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