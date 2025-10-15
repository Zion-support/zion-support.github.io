import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

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
        "API integration"
      ],
      benefits: [
        "Increase decision-making speed by 300%",
        "Reduce manual reporting by 90%",
        "Improve data accuracy by 95%",
        "Real-time business insights"
      ]
    },
    {
      id: "ai-customer-service-pro",
      name: "AI Customer Service Pro",
      description: "Intelligent customer support system with natural language processing, automated responses, and 24/7 availability",
      price: "From $1,800/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Automated ticket routing",
        "Sentiment analysis",
        "Knowledge base integration",
        "Human handoff capability"
      ],
      benefits: [
        "Reduce response time by 80%",
        "Handle 10x more inquiries",
        "Improve customer satisfaction by 40%",
        "24/7 availability"
      ]
    },
    {
      id: "ai-content-generator",
      name: "AI Content Generator",
      description: "Create high-quality content at scale with AI-powered writing, editing, and optimization tools",
      price: "From $1,200/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Multi-format content creation",
        "SEO optimization",
        "Brand voice consistency",
        "Plagiarism detection",
        "Content scheduling",
        "Performance analytics"
      ],
      benefits: [
        "Increase content output by 500%",
        "Reduce content costs by 70%",
        "Improve SEO rankings",
        "Maintain consistent brand voice"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, automation" />
        <meta property="og:title" content="AI Services - Advanced Artificial Intelligence Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <SEOOptimizer />

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and revolutionize your operations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl`}>
                    {service.icon}
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/${service.id}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Started with AI Services
            </button>
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