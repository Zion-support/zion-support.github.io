import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Lock, Settings, Target, TrendingUp, Cpu, Monitor, FileText, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Eye, Heart, ThumbsUp, Award, Rocket, Headphones, Mic, Video, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Cube, Scale } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-analytics",
      name: "AI Analytics",
      description: "Advanced AI-powered business intelligence platform with predictive analytics, real-time insights, and automated reporting",
      price: "From $2,500/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time predictive analytics",
        "Machine learning insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration",
        "Advanced filtering & segmentation",
        "Export to PDF/Excel/CSV",
        "White-label options"
      ],
      benefits: [
        "Increase revenue by 35%",
        "Reduce reporting time by 85%",
        "Make data-driven decisions",
        "Identify new opportunities"
      ],
      link: "/ai-analytics",
      popular: true
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      description: "Intelligent process automation that streamlines workflows, reduces manual tasks, and increases operational efficiency",
      price: "From $1,800/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Workflow automation",
        "Document processing",
        "Email automation",
        "Task scheduling",
        "Integration capabilities",
        "Custom automation rules",
        "Performance monitoring",
        "Scalable solutions"
      ],
      benefits: [
        "Reduce manual work by 70%",
        "Increase productivity by 50%",
        "Eliminate human errors",
        "24/7 automated operations"
      ],
      link: "/ai-automation",
      popular: true
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "AI-powered content creation platform that generates high-quality text, images, and multimedia content for marketing and communication",
      price: "From $1,200/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Text generation",
        "Image creation",
        "Video production",
        "Social media content",
        "SEO optimization",
        "Brand voice consistency",
        "Multi-language support",
        "Content scheduling"
      ],
      benefits: [
        "Reduce content costs by 60%",
        "Increase content output by 300%",
        "Maintain brand consistency",
        "Scale content production"
      ],
      link: "/ai-content-generation",
      popular: false
    },
    {
      id: "ai-customer-service",
      name: "AI Customer Service",
      description: "Intelligent customer support solutions with chatbots, sentiment analysis, and automated ticket routing for enhanced customer experience",
      price: "From $1,500/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Intelligent chatbots",
        "Sentiment analysis",
        "Automated ticket routing",
        "Multi-channel support",
        "Knowledge base integration",
        "Real-time analytics",
        "Custom training",
        "24/7 availability"
      ],
      benefits: [
        "Improve response time by 80%",
        "Increase customer satisfaction by 45%",
        "Reduce support costs by 50%",
        "Handle multiple languages"
      ],
      link: "/ai-customer-service",
      popular: true
    },
    {
      id: "ai-cybersecurity",
      name: "AI Cybersecurity",
      description: "Advanced AI-powered security solutions that detect threats, prevent attacks, and protect your digital assets with machine learning",
      price: "From $3,000/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Threat detection",
        "Anomaly detection",
        "Automated response",
        "Behavioral analysis",
        "Real-time monitoring",
        "Incident response",
        "Compliance reporting",
        "Security training"
      ],
      benefits: [
        "Detect threats 90% faster",
        "Reduce false positives by 75%",
        "Prevent data breaches",
        "Ensure compliance"
      ],
      link: "/ai-cybersecurity",
      popular: true
    },
    {
      id: "ai-data-analytics",
      name: "AI Data Analytics",
      description: "Comprehensive data analysis platform that transforms raw data into actionable insights using advanced AI and machine learning algorithms",
      price: "From $2,000/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Data processing",
        "Pattern recognition",
        "Predictive modeling",
        "Data visualization",
        "Real-time analysis",
        "Custom algorithms",
        "Data integration",
        "Performance metrics"
      ],
      benefits: [
        "Uncover hidden patterns",
        "Make accurate predictions",
        "Optimize business processes",
        "Drive data-driven decisions"
      ],
      link: "/ai-data-analytics",
      popular: false
    }
  ];

  const categories = [
    {
      name: "Business Intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      count: 8,
      description: "AI-powered analytics and insights"
    },
    {
      name: "Process Automation",
      icon: <Zap className="w-6 h-6" />,
      count: 12,
      description: "Intelligent workflow automation"
    },
    {
      name: "Content & Marketing",
      icon: <FileText className="w-6 h-6" />,
      count: 6,
      description: "AI content creation and marketing"
    },
    {
      name: "Customer Experience",
      icon: <Users className="w-6 h-6" />,
      count: 10,
      description: "AI-powered customer service"
    },
    {
      name: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      count: 7,
      description: "AI cybersecurity solutions"
    },
    {
      name: "Data & Analytics",
      icon: <Database className="w-6 h-6" />,
      count: 9,
      description: "Advanced data analysis"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's AI Analytics transformed our decision-making process. We've seen a 40% increase in revenue and 60% reduction in reporting time.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI automation solutions have revolutionized our operations. We've eliminated 70% of manual tasks and increased productivity significantly.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "AI-powered customer service has improved our response times by 80% and customer satisfaction by 45%. It's been a game-changer.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services. Machine learning, automation, analytics, and intelligent solutions for modern enterprises."
        keywords="AI services, artificial intelligence, machine learning, automation, business intelligence, AI consulting, intelligent solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />

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
            From machine learning to automation, we provide the AI tools you need to stay competitive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
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
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI solutions designed for different business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-cyan-400 text-sm">{category.count} solutions</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured AI Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most powerful and popular AI solutions for business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={service.link}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions are transforming businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
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
            Transform your business with our cutting-edge AI solutions. 
            Join the AI revolution and stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
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
        </div>
      </section>
    </div>
  );
}