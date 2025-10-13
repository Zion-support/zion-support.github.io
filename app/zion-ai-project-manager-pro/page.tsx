import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Calendar, Users, Target, BarChart3, Clock, Zap, Sparkles, Award, Globe, Smartphone, Monitor, Headphones, Mic, Camera, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Settings, FileText, MessageSquare, Database, Shield, Cpu, Wifi, Battery, Camera as CameraIcon, Headphones as HeadphonesIcon, Mic as MicIcon, Video, Image as ImageIcon, Music as MusicIcon, BookOpen as BookOpenIcon, Lightbulb as LightbulbIcon, Puzzle as PuzzleIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Wallet as WalletIcon, Banknote as BanknoteIcon, Coins as CoinsIcon, Gift as GiftIcon, Tag as TagIcon, Percent as PercentIcon, Calculator as CalculatorIcon, PieChart as PieChartIcon, LineChart as LineChartIcon, Activity as ActivityIcon, Layers as LayersIcon, Grid as GridIcon, List as ListIcon, Map as MapIcon, Compass as CompassIcon, Navigation as NavigationIcon, Globe2 as Globe2Icon, WifiOff as WifiOffIcon, Signal as SignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon, HardDrive as HardDriveIcon, MemoryStick as MemoryStickIcon, Printer as PrinterIcon, Scanner as ScannerIcon, Fax as FaxIcon, Phone as PhoneIcon, Voicemail as VoicemailIcon, Headset as HeadsetIcon, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon2, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, Shuffle2 as Shuffle2Icon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon, Hexagon as HexagonIcon, Octagon as OctagonIcon, Diamond as DiamondIcon, Star as StarIcon2, Moon as MoonIcon, Sun as SunIcon, Sunrise as SunriseIcon, Sunset as SunsetIcon, CloudRain as CloudRainIcon, CloudSnow as CloudSnowIcon, CloudLightning as CloudLightningIcon, Wind as WindIcon, Droplets as DropletsIcon, Thermometer as ThermometerIcon, Gauge as GaugeIcon, Timer as TimerIcon, Stopwatch as StopwatchIcon, Hourglass as HourglassIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function ZionAiProjectManagerPro() {
  const features = [
    "AI-powered task prioritization and scheduling",
    "Intelligent resource allocation and workload balancing",
    "Predictive project timeline and risk assessment",
    "Automated progress tracking and reporting",
    "Smart collaboration tools and team communication",
    "Real-time project analytics and insights",
    "Custom workflow automation and templates",
    "Integration with 100+ popular tools (Slack, Trello, Asana, etc.)",
    "Mobile app for on-the-go project management",
    "Advanced security and data protection",
    "White-label options for agencies",
    "24/7 AI-powered project assistance"
  ];

  const benefits = [
    "Complete projects 40% faster with AI optimization",
    "Reduce project delays by 60% through predictive analytics",
    "Improve team productivity by 50% with smart automation",
    "Save 15+ hours weekly on project management tasks",
    "Increase project success rate by 35%",
    "Eliminate manual reporting and status updates"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small teams and freelancers",
      features: [
        "Up to 5 projects",
        "10 team members",
        "Basic AI features",
        "Standard templates",
        "Email support",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing teams and agencies",
      features: [
        "Unlimited projects",
        "50 team members",
        "Advanced AI features",
        "Custom templates",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited everything",
        "Unlimited team members",
        "Full AI capabilities",
        "Custom AI training",
        "24/7 dedicated support",
        "Enterprise analytics",
        "Full API access",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Tech Startup",
      role: "CEO",
      content: "Zion AI Project Manager Pro has transformed how we manage projects. The AI predictions are incredibly accurate, and we've reduced project delays by 70%.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Digital Agency",
      role: "Project Director",
      content: "The AI-powered resource allocation is a game-changer. We're now completing 40% more projects with the same team size while maintaining quality.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Consulting Firm",
      role: "Senior Manager",
      content: "The predictive analytics help us identify potential issues before they become problems. This tool has saved us countless hours and headaches.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const aiCapabilities = [
    {
      title: "Smart Task Prioritization",
      description: "AI analyzes project requirements, deadlines, and team capacity to automatically prioritize tasks for optimal efficiency",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Timeline Management",
      description: "Machine learning algorithms predict project completion dates and identify potential delays before they happen",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intelligent Resource Allocation",
      description: "AI automatically assigns team members to tasks based on skills, availability, and workload for maximum productivity",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Assessment & Mitigation",
      description: "Advanced analytics identify potential project risks and suggest proactive mitigation strategies",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Automated Progress Tracking",
      description: "AI continuously monitors project progress and provides real-time insights and recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Smart Collaboration",
      description: "AI-powered communication tools facilitate seamless team collaboration and knowledge sharing",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const integrations = [
    { name: "Slack", icon: <MessageSquare className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { name: "Microsoft Teams", icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { name: "Google Workspace", icon: <Globe className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    { name: "Trello", icon: <Grid className="w-6 h-6" />, color: "from-blue-500 to-indigo-500" },
    { name: "Asana", icon: <Target className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    { name: "Jira", icon: <Settings className="w-6 h-6" />, color: "from-blue-500 to-purple-500" },
    { name: "Notion", icon: <FileText className="w-6 h-6" />, color: "from-gray-500 to-slate-500" },
    { name: "Monday.com", icon: <Calendar className="w-6 h-6" />, color: "from-pink-500 to-rose-500" },
    { name: "Basecamp", icon: <Monitor className="w-6 h-6" />, color: "from-green-500 to-teal-500" },
    { name: "ClickUp", icon: <Zap className="w-6 h-6" />, color: "from-purple-500 to-violet-500" },
    { name: "GitHub", icon: <Database className="w-6 h-6" />, color: "from-gray-700 to-slate-700" },
    { name: "Figma", icon: <Image className="w-6 h-6" />, color: "from-pink-500 to-purple-500" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Project Manager Pro - AI-Powered Project Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered project management tool with intelligent task prioritization, predictive analytics, and automated workflow optimization. Complete projects 40% faster!"
        />
        <meta
          name="keywords"
          content="AI project management, project management software, task management, team collaboration, project analytics, workflow automation, AI productivity"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-project-manager-pro" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Project Manager Pro - AI-Powered Project Management | Zion Tech Group"
        description="Revolutionary AI-powered project management tool with intelligent task prioritization, predictive analytics, and automated workflow optimization. Complete projects 40% faster!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Project Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion AI Project Manager Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The future of project management is here. Our AI-powered platform intelligently manages tasks, 
              predicts timelines, and optimizes team productivity for unprecedented project success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 text-sm">Faster Completion</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">25K+</div>
                <div className="text-gray-300 text-sm">Active Teams</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">15hrs</div>
                <div className="text-gray-300 text-sm">Saved Weekly</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our advanced AI technology transforms traditional project management into an intelligent, 
                predictive, and highly efficient system that adapts to your team's needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Project Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage projects efficiently, all in one intelligent platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms for a unified project management experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${integration.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {integration.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white text-center group-hover:text-cyan-300 transition-colors">
                    {integration.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your team and project needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-cyan-500/50 hover:border-cyan-400/70"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Project Manager Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of project management with our cutting-edge AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {benefit}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Project Managers Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion AI Project Manager Pro
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
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of teams who are already using Zion AI Project Manager Pro to complete 
              projects faster and more efficiently. Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}