import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-analytics-dashboard-pro",
      name: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered business intelligence platform with predictive analytics, real-time insights, and automated reporting",
      price: "From $2,500/month",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time predictive analytics",
        "Machine learning insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration"
      ],
      benefits: [
        "Increase revenue by 35%",
        "Reduce analysis time by 80%",
        "Improve decision accuracy by 90%"
      ],
      link: "/ai-analytics-dashboard-pro"
    },
    {
      id: "ai-automation-platform",
      name: "AI Automation Platform",
      description: "Comprehensive automation solution that streamlines business processes using advanced AI algorithms",
      price: "From $1,800/month",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      features: [
        "Process automation",
        "Workflow optimization",
        "Intelligent task routing",
        "Performance monitoring",
        "Custom automation rules"
      ],
      benefits: [
        "Save 60% operational costs",
        "Increase efficiency by 75%",
        "Reduce human errors by 95%"
      ],
      link: "/ai-automation-platform"
    },
    {
      id: "ai-cybersecurity-suite-pro",
      name: "AI Cybersecurity Suite Pro",
      description: "Next-generation security solution with AI-powered threat detection and automated response",
      price: "From $3,200/month",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      features: [
        "AI threat detection",
        "Automated incident response",
        "Behavioral analysis",
        "Real-time monitoring",
        "Compliance reporting"
      ],
      benefits: [
        "Prevent 99.9% of threats",
        "Reduce response time by 85%",
        "Ensure compliance 100%"
      ],
      link: "/ai-cybersecurity-suite-pro"
    },
    {
      id: "ai-content-generation-pro",
      name: "AI Content Generation Pro",
      description: "Revolutionary content creation platform powered by advanced natural language processing",
      price: "From $1,200/month",
      icon: FileText,
      color: "from-green-500 to-teal-500",
      features: [
        "Multi-format content creation",
        "Brand voice training",
        "SEO optimization",
        "Content scheduling",
        "Quality assurance"
      ],
      benefits: [
        "Create content 10x faster",
        "Improve SEO rankings by 200%",
        "Maintain brand consistency 100%"
      ],
      link: "/ai-content-generation-pro"
    },
    {
      id: "ai-customer-service-bot",
      name: "AI Customer Service Bot",
      description: "Intelligent customer support solution with natural language understanding and human-like interactions",
      price: "From $800/month",
      icon: MessageSquare,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Sentiment analysis",
        "Escalation management",
        "Performance analytics"
      ],
      benefits: [
        "Reduce support costs by 70%",
        "Improve response time by 90%",
        "Increase customer satisfaction by 85%"
      ],
      link: "/ai-customer-service-bot"
    },
    {
      id: "ai-predictive-analytics",
      name: "AI Predictive Analytics",
      description: "Advanced forecasting and prediction system using machine learning and big data analysis",
      price: "From $2,000/month",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Predictive modeling",
        "Risk assessment",
        "Trend analysis",
        "Scenario planning",
        "Real-time predictions"
      ],
      benefits: [
        "Improve forecast accuracy by 95%",
        "Reduce risks by 80%",
        "Optimize planning by 90%"
      ],
      link: "/ai-predictive-analytics"
    }
  ];

  const categories = [
    "All",
    "Analytics",
    "Automation",
    "Security",
    "Content",
    "Customer Service",
    "Predictive"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredServices = aiServices.filter(service => 
    selectedCategory === "All" || service.name.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our cutting-edge AI services including analytics, automation, cybersecurity, content generation, and predictive analytics. Expert AI solutions for modern enterprises."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI cybersecurity, AI content generation, predictive analytics, business AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From predictive analytics to automated workflows, we deliver AI that drives real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Explore Services
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-xs md:text-sm">AI Solutions</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-xs md:text-sm">AI Projects</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-xs md:text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-xs md:text-sm">AI Support</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive unprecedented growth.
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {filteredServices.map((service) => (
              <FuturisticCard
                key={service.id}
                className="group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expected Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <FuturisticButton
                    href="/contact"
                    variant="outline"
                    size="sm"
                  >
                    Get Quote
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you identify the perfect solutions for your business needs. 
            Get a free consultation and discover how AI can transform your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Free Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch AI Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
}