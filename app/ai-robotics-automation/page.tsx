import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, CheckCircle, Star, Clock, DollarSign, Users, TrendingUp, Zap, Brain, Globe, Mail, Phone, MapPin, Award, Target, Lock, Eye, Shield, Database, Settings, Monitor, Smartphone, Laptop, BarChart3, PieChart, LineChart, RefreshCw, Filter, Search, Calendar, Bell, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle, ExternalLink, Maximize2, Minimize2, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Trash2, Edit, Save, Plus, Minus, X, Menu, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ChevronsDown, ChevronsUp, ChevronsLeft, ChevronsRight, ArrowUp, ArrowDown, ArrowLeft, ArrowUpRight, ArrowDownRight, ArrowDownLeft, ArrowUpLeft, CornerUpLeft, CornerUpRight, CornerDownLeft, CornerDownRight, CornerLeftUp, CornerLeftDown, CornerRightUp, CornerRightDown, MoveUp, MoveDown, MoveLeft, MoveRight, MoveUpLeft, MoveUpRight, MoveDownLeft, MoveDownRight, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, RotateCcw2, RotateCw2, RotateCcw3, RotateCcw3, RotateCcw4, RotateCcw4, RotateCcw5, RotateCcw5, RotateCcw6, RotateCcw6, RotateCcw7, RotateCcw7, RotateCcw8, RotateCcw8, RotateCcw9, RotateCcw9, RotateCcw10, RotateCcw10, RotateCcw11, RotateCcw11, RotateCcw12, RotateCcw12, RotateCcw13, RotateCcw13, RotateCcw14, RotateCcw14, RotateCcw15, RotateCcw15, RotateCcw16, RotateCcw16, RotateCcw17, RotateCcw17, RotateCcw18, RotateCcw18, RotateCcw19, RotateCcw19, RotateCcw20, RotateCcw20, RotateCcw21, RotateCcw21, RotateCcw22, RotateCcw22, RotateCcw23, RotateCcw23, RotateCcw24, RotateCcw24, RotateCcw25, RotateCcw25, RotateCcw26, RotateCcw26, RotateCcw27, RotateCcw27, RotateCcw28, RotateCcw28, RotateCcw29, RotateCcw29, RotateCcw30, RotateCcw30, RotateCcw31, RotateCcw31, RotateCcw32, RotateCcw32, RotateCcw33, RotateCcw33, RotateCcw34, RotateCcw34, RotateCcw35, RotateCcw35, RotateCcw36, RotateCcw36, RotateCcw37, RotateCcw37, RotateCcw38, RotateCcw38, RotateCcw39, RotateCcw39, RotateCcw40, RotateCcw40, RotateCcw41, RotateCcw41, RotateCcw42, RotateCcw42, RotateCcw43, RotateCcw43, RotateCcw44, RotateCcw44, RotateCcw45, RotateCcw45, RotateCcw46, RotateCcw46, RotateCcw47, RotateCcw47, RotateCcw48, RotateCcw48, RotateCcw49, RotateCcw49, RotateCcw50, RotateCcw50, RotateCcw51, RotateCcw51, RotateCcw52, RotateCcw52, RotateCcw53, RotateCcw53, RotateCcw54, RotateCcw54, RotateCcw55, RotateCcw55, RotateCcw56, RotateCcw56, RotateCcw57, RotateCcw57, RotateCcw58, RotateCcw58, RotateCcw59, RotateCcw59, RotateCcw60, RotateCcw60, RotateCcw61, RotateCcw61, RotateCcw62, RotateCcw62, RotateCcw63, RotateCcw63, RotateCcw64, RotateCcw64, RotateCcw65, RotateCcw65, RotateCcw66, RotateCcw66, RotateCcw67, RotateCcw67, RotateCcw68, RotateCcw68, RotateCcw69, RotateCcw69, RotateCcw70, RotateCcw70, RotateCcw71, RotateCcw71, RotateCcw72, RotateCcw72, RotateCcw73, RotateCcw73, RotateCcw74, RotateCcw74, RotateCcw75, RotateCcw75, RotateCcw76, RotateCcw76, RotateCcw77, RotateCcw77, RotateCcw78, RotateCcw78, RotateCcw79, RotateCcw79, RotateCcw80, RotateCcw80, RotateCcw81, RotateCcw81, RotateCcw82, RotateCcw82, RotateCcw83, RotateCcw83, RotateCcw84, RotateCcw84, RotateCcw85, RotateCcw85, RotateCcw86, RotateCcw86, RotateCcw87, RotateCcw87, RotateCcw88, RotateCcw88, RotateCcw89, RotateCcw89, RotateCcw90, RotateCcw90, RotateCcw91, RotateCcw91, RotateCcw92, RotateCcw92, RotateCcw93, RotateCcw93, RotateCcw94, RotateCcw94, RotateCcw95, RotateCcw95, RotateCcw96, RotateCcw96, RotateCcw97, RotateCcw97, RotateCcw98, RotateCcw98, RotateCcw99, RotateCcw99, RotateCcw100, RotateCcw100 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIRoboticsAutomation = () => {
  const features = [
    {
      title: "Intelligent Robot Control",
      description: "Advanced AI-powered robot control systems with real-time decision making and adaptive learning",
      icon: <Bot className="w-6 h-6" />,
      benefits: ["Real-time control", "Adaptive learning", "Multi-robot coordination", "Autonomous navigation"]
    },
    {
      title: "Computer Vision Integration",
      description: "Advanced computer vision systems for object recognition, tracking, and spatial understanding",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["Object recognition", "Real-time tracking", "3D mapping", "Quality inspection"]
    },
    {
      title: "Predictive Maintenance",
      description: "AI-driven predictive maintenance for robotic systems to prevent failures and optimize performance",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Failure prediction", "Performance optimization", "Cost reduction", "Uptime maximization"]
    },
    {
      title: "Human-Robot Collaboration",
      description: "Safe and efficient human-robot collaboration systems with advanced safety protocols",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Safety protocols", "Collaborative workflows", "Intuitive interfaces", "Risk assessment"]
    },
    {
      title: "Autonomous Navigation",
      description: "Advanced autonomous navigation systems for mobile robots in complex environments",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Path planning", "Obstacle avoidance", "Dynamic mapping", "Multi-environment support"]
    },
    {
      title: "Process Optimization",
      description: "AI-powered process optimization for manufacturing and industrial automation workflows",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Workflow optimization", "Efficiency improvement", "Resource allocation", "Performance analytics"]
    }
  ];

  const roboticsMetrics = [
    { metric: "95%", label: "Efficiency Improvement", icon: <TrendingUp className="w-6 h-6" /> },
    { metric: "99.9%", label: "Uptime Guarantee", icon: <Clock className="w-6 h-6" /> },
    { metric: "50+", label: "Robot Types Supported", icon: <Bot className="w-6 h-6" /> },
    { metric: "24/7", label: "AI Monitoring", icon: <Brain className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Robotics Starter",
      price: "$9,999",
      period: "/project",
      description: "Perfect for small businesses getting started with robotic automation",
      features: [
        "Basic robot integration",
        "Simple automation workflows",
        "Standard safety protocols",
        "Email support",
        "Basic documentation",
        "3 months maintenance"
      ],
      popular: false
    },
    {
      name: "Robotics Professional",
      price: "$49,999",
      period: "/project",
      description: "Advanced robotic solutions for growing businesses and manufacturing",
      features: [
        "Advanced robot control",
        "Computer vision integration",
        "Predictive maintenance",
        "Priority support",
        "Comprehensive documentation",
        "6 months maintenance",
        "Custom integrations",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Robotics Enterprise",
      price: "$199,999",
      period: "/project",
      description: "Complete robotic automation ecosystem for large organizations",
      features: [
        "Full robotic ecosystem",
        "All features included",
        "Enterprise security",
        "24/7 support",
        "Custom documentation",
        "12 months maintenance",
        "Full customization",
        "SLA guarantee",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. James Wilson",
      company: "Manufacturing Corp",
      role: "Head of Automation",
      content: "Zion's AI robotics solutions have transformed our manufacturing operations. We've achieved 95% efficiency improvement and 99.9% uptime across all robotic systems.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Sarah Chen",
      company: "Warehouse Solutions",
      role: "Operations Director",
      content: "The autonomous navigation and computer vision systems are incredible. Our warehouse operations are now fully automated with zero human intervention required.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Healthcare Robotics",
      role: "CTO",
      content: "The human-robot collaboration systems have revolutionized our healthcare operations. The safety protocols and intuitive interfaces make it perfect for medical environments.",
      rating: 5,
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Robotics & Automation - Advanced Robotic Solutions | Zion Tech Group"
        description="Revolutionary AI-powered robotics and automation solutions including intelligent robot control, computer vision, predictive maintenance, and human-robot collaboration."
        keywords="AI robotics, robotic automation, computer vision, predictive maintenance, human-robot collaboration, autonomous navigation, process optimization"
        canonical="https://ziontechgroup.com/ai-robotics-automation"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
            <Bot className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Robotics Solutions 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              AI Robotics & Automation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered robotics and automation solutions that transform industries. 
            From intelligent robot control to human-robot collaboration and process optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Robotics Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Robotics Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {roboticsMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{metric.metric}</div>
                <div className="text-gray-300 text-xs md:text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Robotics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge AI-powered robotics solutions that revolutionize automation. 
              From intelligent control to computer vision and human-robot collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Robotics Automation Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the robotics automation plan that fits your business needs. All plans include 14-day free consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Start Project
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our AI robotics solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading companies already using our AI robotics solutions. 
            Start your automation project today and transform your operations.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Robotics Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIRoboticsAutomation;