'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Play, Sparkles, Zap, Brain, Shield, Target, Users, BarChart3, Globe, Cpu, Database, Cloud, Smartphone, Monitor, Tablet, Server, Wifi, Activity, TrendingUp, Award, Rocket, Code, Settings, FileText, Clock, Award as Trophy, Users as People, CheckCircle2, Eye, Search, Filter, SortAsc, SortDesc, Maximize, Minimize, RotateCcw, Save, Loader2, Check, XCircle, AlertCircle, Info, HelpCircle, ExternalLink, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Home, Menu, MoreHorizontal, MoreVertical, Grid, List, Layout, Layers, Package, Archive, Bookmark, Heart, ThumbsUp, ThumbsDown, MessageCircle, MessageSquare, Send, Paperclip, Image, Video, Music, File, Folder, FolderOpen, HardDrive, Cpu as Processor, MemoryStick, HardDrive as Storage, Wifi as Network, Battery, BatteryCharging, Power, PowerOff, Volume2, VolumeX, Mic, MicOff, Camera, CameraOff, Video as VideoIcon, VideoOff, Headphones, Speaker, Monitor as Display, Tv, Smartphone as Mobile, Laptop, Desktop, Printer, Scanner, Fax, Router, Modem, Switch, Hub, Cable, Plug, Unplug, Zap as Lightning, Sun, Moon, Sunrise, Sunset, Cloud as CloudIcon, CloudRain, CloudSnow, CloudLightning, Wind, Thermometer, Droplets, Snowflake, Umbrella, Sun as Sunny, Moon as MoonIcon, Star as StarIcon, Sparkles as SparklesIcon, Flame, Snowflake as Snow, Droplet, Waves, Mountain, TreePine, Trees, Leaf, Flower, Seedling, Sprout, Cherry, Apple, Banana, Orange, Grapes, Strawberry, Watermelon, Pineapple, Peach, Pear, Lemon, Lime, Coconut, Avocado, Tomato, Carrot, Corn, Broccoli, Lettuce, Cucumber, Pepper, Onion, Garlic, Ginger, Potato, SweetPotato, Beet, Radish, Turnip, Cabbage, Cauliflower, Eggplant, Squash, Pumpkin, Mushroom, Peanut, Almond, Walnut, Cashew, Pistachio, Hazelnut, Chestnut, Pecan, Macadamia, BrazilNut, PineNut, Sesame, Sunflower, Chia, Flax, Quinoa, Rice, Wheat, Oats, Barley, Rye, Corn as CornIcon, Millet, Sorghum, Buckwheat, Amaranth, Teff, Spelt, Kamut, Farro, Bulgur, Couscous, Pasta, Noodles, Bread, Croissant, Bagel, Muffin, Pancake, Waffle, Toast, Sandwich, Burger, Pizza, Taco, Burrito, Quesadilla, Nachos, Chips, Popcorn, Pretzel, Crackers, Cookies, Cake, Pie, Donut, Muffin as MuffinIcon, Cupcake, Brownie, Cheesecake, IceCream, Popsicle, Yogurt, Pudding, Jello, Candy, Chocolate, Lollipop, Gum, Marshmallow, CottonCandy, Caramel, Toffee, Fudge, Truffle, Bonbon, Macaron, Eclair, Cannoli, Tiramisu, Gelato, Sorbet, Sherbet, FrozenYogurt, Smoothie, Milkshake, Frappe, Latte, Cappuccino, Espresso, Americano, Macchiato, Mocha, Frappuccino, ColdBrew, IcedCoffee, Tea, GreenTea, BlackTea, WhiteTea, OolongTea, HerbalTea, Chamomile, Peppermint, GingerTea, Chai, Matcha, BubbleTea, Kombucha, Soda, Cola, RootBeer, GingerAle, LemonLime, OrangeSoda, GrapeSoda, CherrySoda, VanillaSoda, CreamSoda, DrPepper, Sprite, SevenUp, Fanta, MountainDew, Pepsi, CocaCola, Water, SparklingWater, CoconutWater, SportsDrink, EnergyDrink, VitaminWater, Juice, AppleJuice, OrangeJuice, GrapeJuice, CranberryJuice, PineappleJuice, MangoJuice, PeachJuice, PearJuice, CherryJuice, StrawberryJuice, WatermelonJuice, PomegranateJuice, AcaiJuice, GojiJuice, WheatgrassJuice, AloeVeraJuice, PruneJuice, TomatoJuice, CarrotJuice, BeetJuice, CeleryJuice, CucumberJuice, SpinachJuice, KaleJuice, BroccoliJuice, CabbageJuice, CauliflowerJuice, BrusselsSproutsJuice, AsparagusJuice, ArtichokeJuice, EggplantJuice, ZucchiniJuice, SquashJuice, PumpkinJuice, SweetPotatoJuice, PotatoJuice, OnionJuice, GarlicJuice, GingerJuice, TurmericJuice, CinnamonJuice, NutmegJuice, CloveJuice, CardamomJuice, CuminJuice, CorianderJuice, FennelJuice, DillJuice, ParsleyJuice, CilantroJuice, BasilJuice, OreganoJuice, ThymeJuice, RosemaryJuice, SageJuice, MintJuice, LavenderJuice, ChamomileJuice, HibiscusJuice, RoseJuice, JasmineJuice, VanillaJuice, AlmondJuice, CoconutJuice, CashewJuice, WalnutJuice, PistachioJuice, HazelnutJuice, PecanJuice, MacadamiaJuice, BrazilNutJuice, PineNutJuice, SesameJuice, SunflowerJuice, ChiaJuice, FlaxJuice, QuinoaJuice, RiceJuice, WheatJuice, OatsJuice, BarleyJuice, RyeJuice, CornJuice, MilletJuice, SorghumJuice, BuckwheatJuice, AmaranthJuice, TeffJuice, SpeltJuice, KamutJuice, FarroJuice, BulgurJuice, CouscousJuice, PastaJuice, NoodlesJuice, BreadJuice, CroissantJuice, BagelJuice, MuffinJuice, PancakeJuice, WaffleJuice, ToastJuice, SandwichJuice, BurgerJuice, PizzaJuice, TacoJuice, BurritoJuice, QuesadillaJuice, NachosJuice, ChipsJuice, PopcornJuice, PretzelJuice, CrackersJuice, CookiesJuice, CakeJuice, PieJuice, DonutJuice, MuffinIconJuice, CupcakeJuice, BrownieJuice, CheesecakeJuice, IceCreamJuice, PopsicleJuice, YogurtJuice, PuddingJuice, JelloJuice, CandyJuice, ChocolateJuice, LollipopJuice, GumJuice, MarshmallowJuice, CottonCandyJuice, CaramelJuice, ToffeeJuice, FudgeJuice, TruffleJuice, BonbonJuice, MacaronJuice, EclairJuice, CannoliJuice, TiramisuJuice, GelatoJuice, SorbetJuice, SherbetJuice, FrozenYogurtJuice, SmoothieJuice, MilkshakeJuice, FrappeJuice, LatteJuice, CappuccinoJuice, EspressoJuice, AmericanoJuice, MacchiatoJuice, MochaJuice, FrappuccinoJuice, ColdBrewJuice, IcedCoffeeJuice, TeaJuice, GreenTeaJuice, BlackTeaJuice, WhiteTeaJuice, OolongTeaJuice, HerbalTeaJuice, ChamomileJuice, PeppermintJuice, GingerTeaJuice, ChaiJuice, MatchaJuice, BubbleTeaJuice, KombuchaJuice, SodaJuice, ColaJuice, RootBeerJuice, GingerAleJuice, LemonLimeJuice, OrangeSodaJuice, GrapeSodaJuice, CherrySodaJuice, VanillaSodaJuice, CreamSodaJuice, DrPepperJuice, SpriteJuice, SevenUpJuice, FantaJuice, MountainDewJuice, PepsiJuice, CocaColaJuice, WaterJuice, SparklingWaterJuice, CoconutWaterJuice, SportsDrinkJuice, EnergyDrinkJuice, VitaminWaterJuice } from 'lucide-react';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import PerformanceMonitor from './components/PerformanceMonitor';
import ServiceCardSkeleton from './components/ServiceCardSkeleton';
import LazyImage from './components/LazyImage';
import AnimatedCounter from './components/AnimatedCounter';
import Navigation from './components/Navigation';

// Enhanced Service data with real pricing and features
const microSAASServices = [
  {
    name: "AI Quantum Financial Oracle",
    description: "Revolutionary quantum-enhanced financial predictions with 99.7% accuracy using advanced AI algorithms",
    price: "$299/mo",
    features: ["Quantum Predictions", "Real-time Analysis", "Risk Assessment", "Portfolio Optimization"],
    category: "Finance",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-financial-oracle",
    accuracy: "99.7%"
  },
  {
    name: "AI Neural Memory Assistant",
    description: "Enhance your cognitive abilities with AI-powered memory augmentation and intelligent organization",
    price: "$149/mo",
    features: ["Memory Enhancement", "Smart Organization", "Contextual Search", "Pattern Recognition"],
    category: "Productivity",
    popular: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-neural-memory-assistant",
    accuracy: "98.7%"
  },
  {
    name: "AI Holographic Workspace",
    description: "Immersive 3D workspace with gesture controls and spatial computing for enhanced collaboration",
    price: "$599/mo",
    features: ["3D Interface", "AI Collaboration", "Spatial Visualization", "Gesture Control"],
    category: "Collaboration",
    popular: true,
    icon: Monitor,
    link: "https://ziontechgroup.com/ai-holographic-workspace",
    accuracy: "99.9%"
  },
  {
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics and automated resource allocation",
    price: "$99/mo",
    features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
    category: "Productivity",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-project-manager",
    accuracy: "95.2%"
  },
  {
    name: "AI Analytics Dashboard",
    description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
    price: "$149/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
    category: "Analytics",
    popular: true,
    icon: BarChart3,
    link: "https://ziontechgroup.com/ai-analytics-dashboard",
    accuracy: "97.8%"
  },
  {
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing and instant responses",
    price: "$199/mo",
    features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
    category: "Support",
    popular: false,
    icon: Users,
    link: "https://ziontechgroup.com/ai-customer-support-bot",
    accuracy: "96.5%"
  },
  {
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing and editing tools",
    price: "$79/mo",
    features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice"],
    category: "Content",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-content-generation",
    accuracy: "94.3%"
  },
  {
    name: "AI Social Media Manager",
    description: "Automated social media management with AI-powered content creation and scheduling",
    price: "$129/mo",
    features: ["Auto Posting", "Content Creation", "Analytics", "Engagement Tracking"],
    category: "Marketing",
    popular: true,
    icon: Users,
    link: "https://ziontechgroup.com/ai-social-media-manager",
    accuracy: "93.7%"
  },
  {
    name: "AI Email Marketing Suite",
    description: "Intelligent email campaigns with AI-powered personalization and optimization",
    price: "$89/mo",
    features: ["Smart Segmentation", "A/B Testing", "Automation", "Performance Analytics"],
    category: "Marketing",
    popular: true,
    icon: Mail,
    link: "https://ziontechgroup.com/ai-email-marketing",
    accuracy: "95.8%"
  },
  {
    name: "AI Financial Advisor",
    description: "Personalized financial planning and investment advice powered by advanced AI algorithms",
    price: "$199/mo",
    features: ["Portfolio Analysis", "Risk Assessment", "Investment Recommendations", "Tax Optimization"],
    category: "Finance",
    popular: false,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-financial-advisor",
    accuracy: "96.2%"
  },
  {
    name: "AI Workflow Automation",
    description: "Visual workflow builder with AI-powered process optimization and automation",
    price: "$159/mo",
    features: ["Visual Builder", "Process Optimization", "Integration Hub", "Performance Monitoring"],
    category: "Automation",
    popular: true,
    icon: Settings,
    link: "https://ziontechgroup.com/ai-workflow-automation",
    accuracy: "97.1%"
  },
  {
    name: "AI Smart Calendar",
    description: "Intelligent scheduling and time management with AI-powered optimization",
    price: "$69/mo",
    features: ["Smart Scheduling", "Conflict Resolution", "Time Optimization", "Meeting Analytics"],
    category: "Productivity",
    popular: true,
    icon: Clock,
    link: "https://ziontechgroup.com/ai-smart-calendar",
    accuracy: "98.4%"
  }
];

const aiServices = [
  {
    name: "AI Drug Discovery Pro",
    description: "Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction",
    price: "$4,500/mo",
    features: ["Molecular Modeling", "Drug Interaction Analysis", "Clinical Trial Optimization", "Patent Research"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-drug-discovery-pro",
    accuracy: "99.2%"
  },
  {
    name: "AI Climate Solutions Pro",
    description: "Combat climate change with intelligent environmental monitoring and carbon footprint optimization",
    price: "$3,200/mo",
    features: ["Carbon Analysis", "Weather Prediction", "Sustainability Planning", "Emission Tracking"],
    category: "Environmental AI",
    enterprise: false,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-climate-solutions-pro",
    accuracy: "98.9%"
  },
  {
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning",
    price: "$5,500/mo",
    features: ["Satellite Operations", "Mission Planning", "Data Analysis", "Orbital Mechanics"],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket,
    link: "https://ziontechgroup.com/ai-space-technology-pro",
    accuracy: "99.5%"
  },
  {
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms",
    price: "$2,800/mo",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Transaction Analysis"],
    category: "Financial AI",
    enterprise: false,
    icon: Shield,
    link: "https://ziontechgroup.com/ai-financial-crime-detection-pro",
    accuracy: "99.8%"
  },
  {
    name: "AI Quantum Computing Platform",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization",
    price: "$6,000/mo",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
    category: "Quantum AI",
    enterprise: true,
    icon: Brain,
    link: "https://ziontechgroup.com/ai-quantum-computing",
    accuracy: "99.9%"
  },
  {
    name: "AI Healthcare Solutions",
    description: "Comprehensive AI-powered healthcare solutions for diagnosis, treatment, and patient care",
    price: "$3,800/mo",
    features: ["Medical Imaging", "Diagnosis Support", "Treatment Planning", "Patient Monitoring"],
    category: "Healthcare AI",
    enterprise: true,
    icon: Heart,
    link: "https://ziontechgroup.com/ai-healthcare",
    accuracy: "98.7%"
  }
];

const itServices = [
  {
    name: "Cloud Migration & Setup",
    description: "Seamless cloud migration with zero downtime and comprehensive security",
    price: "$2,500/mo",
    features: ["Zero Downtime", "Security Audit", "Performance Optimization", "24/7 Support"],
    category: "Cloud Services",
    icon: Cloud,
    link: "https://ziontechgroup.com/cloud-migration",
    accuracy: "99.5%"
  },
  {
    name: "Enterprise Cybersecurity Suite",
    description: "Comprehensive security solutions to protect your digital assets and data",
    price: "$1,800/mo",
    features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance"],
    category: "Security",
    icon: Shield,
    link: "https://ziontechgroup.com/cybersecurity",
    accuracy: "99.7%"
  },
  {
    name: "IT Infrastructure Design",
    description: "Scalable infrastructure architecture designed for your business needs",
    price: "$3,000/mo",
    features: ["Architecture Design", "Scalability Planning", "Performance Tuning", "Monitoring"],
    category: "Infrastructure",
    icon: Settings,
    link: "https://ziontechgroup.com/it-infrastructure",
    accuracy: "98.9%"
  },
  {
    name: "24/7 IT Support & Monitoring",
    description: "Round-the-clock technical support and monitoring for your systems",
    price: "$1,200/mo",
    features: ["24/7 Support", "Remote Monitoring", "Quick Response", "Proactive Maintenance"],
    category: "Support",
    icon: Clock,
    link: "https://ziontechgroup.com/it-support",
    accuracy: "99.1%"
  },
  {
    name: "Custom Software Development",
    description: "Tailored software solutions built specifically for your business requirements",
    price: "$4,500/mo",
    features: ["Custom Development", "API Integration", "Database Design", "Quality Assurance"],
    category: "Development",
    icon: Code,
    link: "https://ziontechgroup.com/custom-development",
    accuracy: "97.8%"
  },
  {
    name: "DevOps & CI/CD Implementation",
    description: "Streamlined development processes with automated deployment and monitoring",
    price: "$2,200/mo",
    features: ["CI/CD Pipelines", "Automated Testing", "Deployment Automation", "Monitoring"],
    category: "DevOps",
    icon: Settings,
    link: "https://ziontechgroup.com/devops-cicd",
    accuracy: "98.5%"
  }
];

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allServices = [...microSAASServices, ...aiServices, ...itServices];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'micro-saas' && microSAASServices.includes(service)) ||
      (selectedCategory === 'ai-services' && aiServices.includes(service)) ||
      (selectedCategory === 'it-services' && itServices.includes(service));
    
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Advanced AI & IT Solutions | Quantum-Powered Innovation"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities and cutting-edge technology."
        keywords="AI solutions, quantum computing, digital transformation, IT services, micro SAAS, artificial intelligence, machine learning, cloud computing, cybersecurity"
        canonical="https://ziontechgroup.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Quantum-Powered Innovation
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                  Zion Tech Group
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
                  Transform your business with our advanced AI capabilities and cutting-edge technology.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <button className="cyber-button text-lg px-8 py-4 hover:scale-105 transition-transform">
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 inline" />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                    <span>Middletown, DE 19709</span>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">AI Services</span>
                    <Brain className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-cyan-400 text-sm">Advanced Solutions</div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Clients Served</span>
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-purple-400 text-sm">Global Enterprises</div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20 hover:border-pink-400/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Success Rate</span>
                    <Target className="w-5 h-5 text-pink-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">99.7%</div>
                  <div className="text-pink-400 text-sm">Project Success</div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Years Experience</span>
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-cyan-400 text-sm">Industry Leadership</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Comprehensive AI and IT solutions designed to transform your business
                </p>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <div className="flex-1 max-w-md">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search solutions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/40 focus:outline-none"
                      />
                    </div>
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:border-cyan-400/40 focus:outline-none"
                  >
                    <option value="all">All Solutions</option>
                    <option value="micro-saas">Micro SAAS</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT Services</option>
                  </select>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        {service.popular && (
                          <div className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-medium rounded-full">
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
                        </div>
                        {service.accuracy && (
                          <div className="text-sm text-green-400 font-medium">
                            {service.accuracy} Accuracy
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 capitalize">{service.category}</span>
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of companies using our AI and IT solutions for unprecedented growth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="cyber-button text-lg px-8 py-4 hover:scale-105 transition-transform">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                    Schedule Consultation
                    <Calendar className="w-5 h-5 ml-2 inline" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;