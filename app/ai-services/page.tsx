import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: "ai-analytics-dashboard-pro",
      name: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered business intelligence platform with predictive analytics, real-time insights, and automated reporting",
      price: "From $2,500/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time predictive analytics",
        "Machine learning insights",
        "Automated report generation",
        "Custom dashboard creation",
        "Data visualization tools",
        "API integrations"
      ]
    },
    {
      id: "ai-automation-platform",
      name: "AI Automation Platform",
      description: "Comprehensive automation solution that streamlines business processes using AI and machine learning",
      price: "From $1,800/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Process automation",
        "Workflow optimization",
        "Smart scheduling",
        "Error reduction",
        "Performance monitoring",
        "Custom integrations"
      ]
    },
    {
      id: "ai-customer-support-chatbot",
      name: "AI Customer Support Chatbot",
      description: "Intelligent chatbot solution that provides 24/7 customer support with natural language processing",
      price: "From $1,200/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Context awareness",
        "Escalation to human agents",
        "Analytics and insights",
        "Custom training"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, and customer support solutions. Transform your business with our advanced AI technologies." />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI services including analytics, automation, and customer support solutions. Transform your business with our advanced AI technologies." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive AI solutions. From analytics to automation, 
                we provide cutting-edge AI services that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started with AI Services
                </button>
                <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  View Our Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to meet your specific business needs and drive innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="text-sm text-gray-400 space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your AI needs and help you choose the best solutions for your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start AI Implementation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;