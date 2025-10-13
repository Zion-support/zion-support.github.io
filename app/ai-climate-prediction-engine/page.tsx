import React from "react";
import { ArrowRight, CheckCircle, Star, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, BarChart3, Cloud, Brain, Code, Database, Mail, Users, Clock, DollarSign, Globe, Smartphone, Monitor, Settings, Target, TrendingUp, Cpu, Wifi, Battery, Camera, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIClimatePredictionEngine() {
  const features = [
    "Advanced weather pattern recognition",
    "Climate change impact modeling",
    "Extreme weather event prediction",
    "Agricultural yield forecasting",
    "Renewable energy optimization",
    "Disaster risk assessment",
    "Carbon footprint tracking",
    "Environmental monitoring",
    "Seasonal trend analysis",
    "Temperature anomaly detection",
    "Precipitation forecasting",
    "Storm tracking & warnings",
    "Drought & flood prediction",
    "Air quality monitoring",
    "Ocean current analysis",
    "Custom climate models"
  ];

  const benefits = [
    "Reduce climate risks by 80%",
    "Increase agricultural yields by 35%",
    "Optimize renewable energy by 50%",
    "Save millions in disaster prevention",
    "Improve environmental planning",
    "Enable data-driven climate policies",
    "Reduce carbon emissions",
    "Protect vulnerable communities"
  ];

  const applications = [
    {
      title: "Agriculture & Farming",
      description: "Predict optimal planting times, crop yields, and weather risks for maximum agricultural productivity",
      icon: <CloudRain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Renewable Energy",
      description: "Optimize solar and wind energy production through accurate weather and climate predictions",
      icon: <Sun className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Disaster Management",
      description: "Early warning systems for hurricanes, floods, droughts, and other extreme weather events",
      icon: <CloudLightning className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Urban Planning",
      description: "Climate-resilient city planning with heat island analysis and flood risk assessment",
      icon: <Map className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$399/month",
      description: "For small organizations",
      features: [
        "Up to 5 locations",
        "Basic weather forecasts",
        "7-day predictions",
        "Email support",
        "Standard reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999/month",
      description: "For medium enterprises",
      features: [
        "Up to 25 locations",
        "Advanced climate models",
        "30-day predictions",
        "Priority support",
        "Custom alerts",
        "API access",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999/month",
      description: "For large organizations",
      features: [
        "Unlimited locations",
        "Full climate suite",
        "90-day predictions",
        "Dedicated support",
        "Custom models",
        "White-label options",
        "Compliance reporting",
        "Real-time monitoring"
      ],
      popular: false
    }
  ];

  const dataSources = [
    "NOAA Weather Data", "NASA Climate Data", "European Centre for Medium-Range Weather Forecasts",
    "Japan Meteorological Agency", "UK Met Office", "Canadian Meteorological Centre",
    "Bureau of Meteorology Australia", "Indian Meteorological Department", "World Meteorological Organization",
    "Global Climate Observing System", "Climate Data Records", "Satellite Observations",
    "Ocean Buoy Networks", "Weather Radar Systems", "Atmospheric Sounding Data"
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      company: "Global Agriculture Corp",
      role: "Chief Climate Scientist",
      content: "The AI Climate Prediction Engine has revolutionized our farming operations. We've increased crop yields by 40% while reducing weather-related losses by 60%.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Michael Torres",
      company: "Renewable Energy Solutions",
      role: "Operations Director",
      content: "The renewable energy optimization features are incredible. We've increased our solar and wind energy efficiency by 45% through better weather predictions.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Dr. Lisa Chen",
      company: "Disaster Management Agency",
      role: "Emergency Response Coordinator",
      content: "The early warning system has saved countless lives. We can now predict extreme weather events with 95% accuracy up to 72 hours in advance.",
      rating: 5,
      avatar: "LC"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group | Advanced Weather & Climate Analytics</title>
        <meta
          name="description"
          content="Advanced AI-powered climate prediction engine for weather forecasting, agricultural planning, renewable energy optimization, and disaster management. Make data-driven climate decisions."
        />
        <meta
          name="keywords"
          content="climate prediction, weather forecasting, agricultural planning, renewable energy, disaster management, climate analytics, environmental monitoring, weather AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-climate-prediction-engine" />
      </Helmet>
      <SEOOptimizer
        title="AI Climate Prediction Engine - Zion Tech Group | Advanced Weather & Climate Analytics"
        description="Advanced AI-powered climate prediction engine for weather forecasting, agricultural planning, renewable energy optimization, and disaster management. Make data-driven climate decisions."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <CloudRain className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Advanced Climate Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI Climate Prediction Engine
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of AI to predict weather patterns, climate changes, and environmental impacts. 
                Make informed decisions for agriculture, renewable energy, and disaster management.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">95% prediction accuracy</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Real-time monitoring</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Global coverage</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Multi-industry applications</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Climate Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Advanced Climate Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive climate intelligence powered by cutting-edge AI and machine learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Industry Applications
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your industry with AI-powered climate intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${app.color} rounded-xl mb-6`}>
                    <div className="text-white">{app.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Global Data Sources
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive climate data from leading meteorological organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-white font-medium text-sm">{source}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Climate Intelligence Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable impact on climate resilience and environmental sustainability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Flexible Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your climate intelligence needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? "border-cyan-400 shadow-2xl shadow-cyan-500/20" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Climate Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how organizations are building climate resilience with AI
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
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Climate Resilience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and gain the climate intelligence advantage. 
              No setup fees, cancel anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}