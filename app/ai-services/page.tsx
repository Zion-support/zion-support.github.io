import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, BarChart3, Shield, Cloud, Zap, Users, Award, Clock, DollarSign, Globe, Smartphone, Lock, Settings, Target, Database, Mail, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIServicesPage() {
  const aiServices = [
    {
      name: "AI Analytics",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/ai-analytics",
      features: ["Real-time data processing", "Predictive modeling", "Custom dashboards", "API integration"],
      price: "From $299/month"
    },
    {
      name: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      icon: <Zap className="w-8 h-8" />,
      link: "/ai-automation",
      features: ["Workflow automation", "Process optimization", "Smart scheduling", "Error reduction"],
      price: "From $199/month"
    },
    {
      name: "AI Business Intelligence",
      description: "Make data-driven decisions with our comprehensive BI platform powered by AI",
      icon: <Target className="w-8 h-8" />,
      link: "/ai-business-intelligence",
      features: ["Advanced reporting", "Data visualization", "Trend analysis", "Custom metrics"],
      price: "From $399/month"
    },
    {
      name: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools",
      icon: <Video className="w-8 h-8" />,
      link: "/ai-content-generation",
      features: ["Multi-format content", "Brand consistency", "SEO optimization", "Bulk generation"],
      price: "From $149/month"
    },
    {
      name: "AI Customer Service",
      description: "Enhance customer experience with intelligent chatbots and support automation",
      icon: <Headphones className="w-8 h-8" />,
      link: "/ai-customer-service",
      features: ["24/7 chatbot support", "Sentiment analysis", "Ticket routing", "Performance analytics"],
      price: "From $249/month"
    },
    {
      name: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI-driven analytics and insights",
      icon: <Database className="w-8 h-8" />,
      link: "/ai-data-analytics",
      features: ["Data mining", "Pattern recognition", "Anomaly detection", "Automated insights"],
      price: "From $349/month"
    },
    {
      name: "AI Email Automation",
      description: "Personalize and optimize your email campaigns with AI-powered automation",
      icon: <Mail className="w-8 h-8" />,
      link: "/ai-email-automation",
      features: ["Personalized content", "Send time optimization", "A/B testing", "Performance tracking"],
      price: "From $99/month"
    },
    {
      name: "AI Fraud Detection",
      description: "Protect your business with advanced AI-powered fraud detection and prevention",
      icon: <Shield className="w-8 h-8" />,
      link: "/ai-fraud-detection",
      features: ["Real-time monitoring", "Risk scoring", "Pattern recognition", "Automated alerts"],
      price: "From $499/month"
    },
    {
      name: "AI Healthcare",
      description: "Revolutionize healthcare with AI-powered diagnostic and treatment solutions",
      icon: <Activity className="w-8 h-8" />,
      link: "/ai-healthcare",
      features: ["Medical imaging analysis", "Diagnostic assistance", "Treatment recommendations", "Patient monitoring"],
      price: "From $599/month"
    },
    {
      name: "AI Marketing",
      description: "Optimize your marketing campaigns with AI-driven insights and automation",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/ai-marketing",
      features: ["Campaign optimization", "Audience targeting", "Content personalization", "ROI tracking"],
      price: "From $199/month"
    },
    {
      name: "AI Predictive Analytics",
      description: "Forecast future trends and behaviors with our advanced predictive analytics platform",
      icon: <LineChart className="w-8 h-8" />,
      link: "/ai-predictive-analytics",
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Scenario modeling"],
      price: "From $449/month"
    },
    {
      name: "AI Project Management",
      description: "Streamline project workflows with AI-powered project management and optimization",
      icon: <Settings className="w-8 h-8" />,
      link: "/ai-project-management",
      features: ["Resource optimization", "Timeline prediction", "Risk management", "Progress tracking"],
      price: "From $299/month"
    }
  ];

  const benefits = [
    "40% increase in operational efficiency",
    "60% reduction in manual tasks",
    "99.9% accuracy in data processing",
    "24/7 automated monitoring",
    "Scalable AI solutions",
    "Custom implementation support"
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "10,000+", label: "Data Points Processed", icon: <Database className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From analytics to automation, we provide cutting-edge artificial intelligence solutions for modern enterprises." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, business intelligence, AI consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      <SEOOptimizer />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From analytics to automation, we provide comprehensive AI services that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Video className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of AI services designed to solve specific business challenges 
              and drive innovation across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of artificial intelligence that transforms your business operations and drives measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI services to drive innovation and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Video className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}