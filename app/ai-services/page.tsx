import React from "react";
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Code, Database, Users, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, pattern recognition, and intelligent automation.",
      features: ["Predictive Analytics", "Pattern Recognition", "Model Training", "Performance Optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline processes and reduce manual work.",
      features: ["Process Automation", "Workflow Optimization", "Smart Scheduling", "Error Reduction"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security",
      description: "AI-powered security solutions for threat detection and prevention.",
      features: ["Threat Detection", "Anomaly Detection", "Security Monitoring", "Risk Assessment"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud AI Services",
      description: "Scalable AI solutions deployed on cloud infrastructure for maximum efficiency.",
      features: ["Cloud Deployment", "Auto-scaling", "Cost Optimization", "High Availability"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile AI Integration",
      description: "AI capabilities integrated into mobile applications for enhanced user experience.",
      features: ["Mobile Optimization", "Real-time Processing", "Offline Capabilities", "User Experience"]
    },
    {
      id: "ai-data-mining-pro",
      name: "AI Data Mining Pro",
      description: "Advanced data mining with pattern discovery, anomaly detection, and predictive modeling",
      price: "From $2,100/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      features: [
        "Pattern discovery algorithms",
        "Anomaly detection",
        "Predictive modeling",
        "Big data processing",
        "Real-time analysis",
        "Custom algorithm development",
        "Data visualization",
        "Integration capabilities"
      ],
      benefits: [
        "Discover hidden patterns",
        "Identify anomalies early",
        "Improve decision making",
        "Extract valuable insights"
      ],
      category: "Data Analytics",
      rating: 4.7,
      reviews: 543,
      link: "/ai-data-mining-pro",
      featured: false
    },
    {
      id: "ai-video-analysis",
      name: "AI Video Analysis",
      description: "Intelligent video processing with object tracking, scene recognition, and automated content analysis",
      price: "From $1,900/month",
      icon: <Video className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Object tracking & detection",
        "Scene recognition & classification",
        "Motion analysis",
        "Facial recognition in video",
        "Real-time processing",
        "Batch video analysis",
        "Custom model training",
        "API integration"
      ],
      benefits: [
        "Automate video monitoring",
        "Extract insights from video",
        "Improve security systems",
        "Enhance content management"
      ],
      category: "Computer Vision",
      rating: 4.6,
      reviews: 789,
      link: "/ai-video-analysis",
      featured: false
    },
    {
      name: "AI Blockchain Solutions",
      description: "Intelligent blockchain applications with AI-powered smart contracts and analytics.",
      features: ["Smart contracts", "DeFi analytics", "NFT generation", "Blockchain monitoring", "Cryptocurrency analysis", "Risk assessment"],
      icon: <Shield className="w-8 h-8" />,
      applications: ["DeFi platforms", "NFT marketplaces", "Cryptocurrency trading", "Supply chain tracking"],
      price: "Starting at $3,999/month",
      benefits: ["Automated smart contracts", "Real-time blockchain analysis", "Fraud detection", "Optimized transactions"]
    }
  ];
    {
      name: "Emily Watson",
      company: "Digital Marketing Agency",
      role: "CEO",
      content: "AI Content Generation Pro has transformed our content strategy. We're producing 20x more content with better quality and higher engagement rates.",
      rating: 5,
      avatar: "EW"
    }
  ];


  return (
    <>
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including machine learning, automation, security, and analytics solutions for modern businesses."
        keywords="AI services, machine learning, artificial intelligence, automation, AI security, cloud AI, data analytics"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Artificial Intelligence Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              AI Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to automation, we help you harness the power of AI for competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Assessment
              </Link>
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
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/30 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to implementing AI solutions that deliver real business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your business needs, data, and objectives to identify AI opportunities."
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Develop a comprehensive AI strategy with clear goals, timelines, and success metrics."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and test AI models using industry best practices and your specific requirements."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Deploy solutions and provide ongoing support to ensure optimal performance and value."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can solve your specific challenges and drive growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiServicesPage;