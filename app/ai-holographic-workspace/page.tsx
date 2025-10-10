'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  BarChart3,
  Activity,
  Shield,
  Lock,
  Cpu,
  Database,
  Smartphone,
  Monitor,
  Tablet,
  Cloud,
  Server,
  Wifi,
  RefreshCw,
  Play,
  Pause,
  Square,
  Settings,
  Bell,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Download,
  Upload,
  Share2,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Eye,
  EyeOff,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Loader2,
  Check,
  XCircle,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Layers,
  Package,
  Archive,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MessageSquare,
  Send,
  Paperclip,
  Image,
  Video,
  Music,
  File,
  Folder,
  FolderOpen,
  HardDrive,
  Cpu as Processor,
  MemoryStick,
  HardDrive as Storage,
  Wifi as Network,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Video as VideoIcon,
  VideoOff,
  Headphones,
  Speaker,
  Monitor as Display,
  Tv,
  Smartphone as Mobile,
  Laptop,
  Desktop,
  Printer,
  Scanner,
  Fax,
  Router,
  Modem,
  Switch,
  Hub,
  Cable,
  Plug,
  Unplug,
  Zap as Lightning,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Umbrella,
  Sun as Sunny,
  Moon as MoonIcon,
  Star as StarIcon,
  Sparkles,
  Flame,
  Snowflake as Snow,
  Droplet,
  Waves,
  Mountain,
  TreePine,
  Trees,
  Leaf,
  Flower,
  Seedling,
  Sprout,
  Cherry,
  Apple,
  Banana,
  Orange,
  Grapes,
  Strawberry,
  Watermelon,
  Pineapple,
  Peach,
  Pear,
  Lemon,
  Lime,
  Coconut,
  Avocado,
  Tomato,
  Carrot,
  Corn,
  Broccoli,
  Lettuce,
  Cucumber,
  Pepper,
  Onion,
  Garlic,
  Ginger,
  Potato,
  SweetPotato,
  Beet,
  Radish,
  Turnip,
  Cabbage,
  Cauliflower,
  Eggplant,
  Squash,
  Pumpkin,
  Mushroom,
  Peanut,
  Almond,
  Walnut,
  Cashew,
  Pistachio,
  Hazelnut,
  Chestnut,
  Pecan,
  Macadamia,
  BrazilNut,
  PineNut,
  Sesame,
  Sunflower,
  Chia,
  Flax,
  Quinoa,
  Rice,
  Wheat,
  Oats,
  Barley,
  Rye,
  Corn as CornIcon,
  Millet,
  Sorghum,
  Buckwheat,
  Amaranth,
  Teff,
  Spelt,
  Kamut,
  Farro,
  Bulgur,
  Couscous,
  Pasta,
  Noodles,
  Bread,
  Croissant,
  Bagel,
  Muffin,
  Pancake,
  Waffle,
  Toast,
  Sandwich,
  Burger,
  Pizza,
  Taco,
  Burrito,
  Quesadilla,
  Nachos,
  Chips,
  Popcorn,
  Pretzel,
  Crackers,
  Cookies,
  Cake,
  Pie,
  Donut,
  Muffin as MuffinIcon,
  Cupcake,
  Brownie,
  Cheesecake,
  IceCream,
  Popsicle,
  Yogurt,
  Pudding,
  Jello,
  Candy,
  Chocolate,
  Lollipop,
  Gum,
  Marshmallow,
  CottonCandy,
  Caramel,
  Toffee,
  Fudge,
  Truffle,
  Bonbon,
  Macaron,
  Eclair,
  Cannoli,
  Tiramisu,
  Gelato,
  Sorbet,
  Sherbet,
  FrozenYogurt,
  Smoothie,
  Milkshake,
  Frappe,
  Latte,
  Cappuccino,
  Espresso,
  Americano,
  Macchiato,
  Mocha,
  Frappuccino,
  ColdBrew,
  IcedCoffee,
  Tea,
  GreenTea,
  BlackTea,
  WhiteTea,
  OolongTea,
  HerbalTea,
  Chamomile,
  Peppermint,
  GingerTea,
  Chai,
  Matcha,
  BubbleTea,
  Kombucha,
  Soda,
  Cola,
  RootBeer,
  GingerAle,
  LemonLime,
  OrangeSoda,
  GrapeSoda,
  CherrySoda,
  VanillaSoda,
  CreamSoda,
  DrPepper,
  Sprite,
  SevenUp,
  Fanta,
  MountainDew,
  Pepsi,
  CocaCola,
  Water,
  SparklingWater,
  CoconutWater,
  SportsDrink,
  EnergyDrink,
  VitaminWater,
  Juice,
  AppleJuice,
  OrangeJuice,
  GrapeJuice,
  CranberryJuice,
  PineappleJuice,
  MangoJuice,
  PeachJuice,
  PearJuice,
  CherryJuice,
  StrawberryJuice,
  WatermelonJuice,
  PomegranateJuice,
  AcaiJuice,
  GojiJuice,
  WheatgrassJuice,
  AloeVeraJuice,
  PruneJuice,
  TomatoJuice,
  CarrotJuice,
  BeetJuice,
  CeleryJuice,
  CucumberJuice,
  SpinachJuice,
  KaleJuice,
  BroccoliJuice,
  CabbageJuice,
  CauliflowerJuice,
  BrusselsSproutsJuice,
  AsparagusJuice,
  ArtichokeJuice,
  EggplantJuice,
  ZucchiniJuice,
  SquashJuice,
  PumpkinJuice,
  SweetPotatoJuice,
  PotatoJuice,
  OnionJuice,
  GarlicJuice,
  GingerJuice,
  TurmericJuice,
  CinnamonJuice,
  NutmegJuice,
  CloveJuice,
  CardamomJuice,
  CuminJuice,
  CorianderJuice,
  FennelJuice,
  DillJuice,
  ParsleyJuice,
  CilantroJuice,
  BasilJuice,
  OreganoJuice,
  ThymeJuice,
  RosemaryJuice,
  SageJuice,
  MintJuice,
  LavenderJuice,
  ChamomileJuice,
  HibiscusJuice,
  RoseJuice,
  JasmineJuice,
  VanillaJuice,
  AlmondJuice,
  CoconutJuice,
  CashewJuice,
  WalnutJuice,
  PistachioJuice,
  HazelnutJuice,
  PecanJuice,
  MacadamiaJuice,
  BrazilNutJuice,
  PineNutJuice,
  SesameJuice,
  SunflowerJuice,
  ChiaJuice,
  FlaxJuice,
  QuinoaJuice,
  RiceJuice,
  WheatJuice,
  OatsJuice,
  BarleyJuice,
  RyeJuice,
  CornJuice,
  MilletJuice,
  SorghumJuice,
  BuckwheatJuice,
  AmaranthJuice,
  TeffJuice,
  SpeltJuice,
  KamutJuice,
  FarroJuice,
  BulgurJuice,
  CouscousJuice,
  PastaJuice,
  NoodlesJuice,
  BreadJuice,
  CroissantJuice,
  BagelJuice,
  MuffinJuice,
  PancakeJuice,
  WaffleJuice,
  ToastJuice,
  SandwichJuice,
  BurgerJuice,
  PizzaJuice,
  TacoJuice,
  BurritoJuice,
  QuesadillaJuice,
  NachosJuice,
  ChipsJuice,
  PopcornJuice,
  PretzelJuice,
  CrackersJuice,
  CookiesJuice,
  CakeJuice,
  PieJuice,
  DonutJuice,
  MuffinIconJuice,
  CupcakeJuice,
  BrownieJuice,
  CheesecakeJuice,
  IceCreamJuice,
  PopsicleJuice,
  YogurtJuice,
  PuddingJuice,
  JelloJuice,
  CandyJuice,
  ChocolateJuice,
  LollipopJuice,
  GumJuice,
  MarshmallowJuice,
  CottonCandyJuice,
  CaramelJuice,
  ToffeeJuice,
  FudgeJuice,
  TruffleJuice,
  BonbonJuice,
  MacaronJuice,
  EclairJuice,
  CannoliJuice,
  TiramisuJuice,
  GelatoJuice,
  SorbetJuice,
  SherbetJuice,
  FrozenYogurtJuice,
  SmoothieJuice,
  MilkshakeJuice,
  FrappeJuice,
  LatteJuice,
  CappuccinoJuice,
  EspressoJuice,
  AmericanoJuice,
  MacchiatoJuice,
  MochaJuice,
  FrappuccinoJuice,
  ColdBrewJuice,
  IcedCoffeeJuice,
  TeaJuice,
  GreenTeaJuice,
  BlackTeaJuice,
  WhiteTeaJuice,
  OolongTeaJuice,
  HerbalTeaJuice,
  ChamomileJuice,
  PeppermintJuice,
  GingerTeaJuice,
  ChaiJuice,
  MatchaJuice,
  BubbleTeaJuice,
  KombuchaJuice,
  SodaJuice,
  ColaJuice,
  RootBeerJuice,
  GingerAleJuice,
  LemonLimeJuice,
  OrangeSodaJuice,
  GrapeSodaJuice,
  CherrySodaJuice,
  VanillaSodaJuice,
  CreamSodaJuice,
  DrPepperJuice,
  SpriteJuice,
  SevenUpJuice,
  FantaJuice,
  MountainDewJuice,
  PepsiJuice,
  CocaColaJuice,
  WaterJuice,
  SparklingWaterJuice,
  CoconutWaterJuice,
  SportsDrinkJuice,
  EnergyDrinkJuice,
  VitaminWaterJuice
} from 'lucide-react';

const AIHolographicWorkspace: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [workspaceData, setWorkspaceData] = useState<any>(null);
  const [activeProjects, setActiveProjects] = useState<any[]>([]);
  const [selectedView, setSelectedView] = useState('3d');
  const [collaborators, setCollaborators] = useState<any[]>([]);

  useEffect(() => {
    // Simulate real-time workspace data fetching
    const fetchWorkspaceData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock real workspace data
        const mockData = {
          totalProjects: 47,
          activeUsers: 12,
          holographicSessions: 156,
          productivityBoost: 340,
          lastSync: new Date().toISOString(),
          projects: [
            { id: 1, name: 'Quantum UI Design', status: 'active', progress: 75, collaborators: 4, lastModified: '2 hours ago', type: 'design' },
            { id: 2, name: 'Neural Network Architecture', status: 'active', progress: 60, collaborators: 6, lastModified: '4 hours ago', type: 'development' },
            { id: 3, name: 'Holographic Prototype', status: 'review', progress: 90, collaborators: 3, lastModified: '1 hour ago', type: 'prototype' },
            { id: 4, name: 'AI Integration Module', status: 'active', progress: 45, collaborators: 5, lastModified: '3 hours ago', type: 'development' },
            { id: 5, name: 'User Experience Flow', status: 'planning', progress: 25, collaborators: 2, lastModified: '6 hours ago', type: 'design' }
          ],
          collaborators: [
            { id: 1, name: 'Sarah Chen', role: 'Lead Designer', avatar: 'SC', status: 'online' },
            { id: 2, name: 'Marcus Johnson', role: 'AI Engineer', avatar: 'MJ', status: 'online' },
            { id: 3, name: 'Elena Rodriguez', role: 'UX Researcher', avatar: 'ER', status: 'away' },
            { id: 4, name: 'David Kim', role: 'Full Stack Dev', avatar: 'DK', status: 'online' }
          ]
        };
        
        setWorkspaceData(mockData);
        setActiveProjects(mockData.projects);
        setCollaborators(mockData.collaborators);
      } catch (error) {
        console.error('Error fetching workspace data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkspaceData();
    const interval = setInterval(fetchWorkspaceData, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "3D Holographic Interface",
      description: "Immersive 3D workspace with gesture controls and spatial computing for enhanced productivity",
      icon: Monitor,
      accuracy: "99.9%"
    },
    {
      title: "AI-Powered Collaboration",
      description: "Intelligent collaboration tools with real-time translation and context-aware suggestions",
      icon: Users,
      accuracy: "98.5%"
    },
    {
      title: "Spatial Data Visualization",
      description: "Transform complex data into interactive 3D visualizations and holographic charts",
      icon: BarChart3,
      accuracy: "99.2%"
    },
    {
      title: "Neural Gesture Control",
      description: "Control your workspace with natural gestures and eye tracking for hands-free operation",
      icon: Target,
      accuracy: "97.8%"
    }
  ];

  const pricingTiers = [
    {
      name: "Individual",
      price: "$199",
      period: "month",
      description: "Perfect for solo creators and developers",
      features: [
        "Personal holographic workspace",
        "Basic AI collaboration",
        "5GB holographic storage",
        "Email support",
        "Standard rendering (60fps)"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$599",
      period: "month",
      description: "Ideal for small teams and startups",
      features: [
        "Shared holographic workspace",
        "Advanced AI collaboration",
        "50GB holographic storage",
        "Priority support",
        "High rendering (120fps)",
        "Team analytics",
        "Custom avatars"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited holographic workspaces",
        "Custom AI training",
        "Unlimited storage",
        "Maximum rendering (240fps)",
        "White-label solutions",
        "Dedicated support",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Holographic Workspace - 3D Immersive Collaboration Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary 3D holographic workspace with AI-powered collaboration. Experience immersive productivity with gesture controls and spatial computing." />
        <meta name="keywords" content="holographic workspace, 3D collaboration, spatial computing, gesture control, immersive productivity, AI collaboration" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-holographic-workspace" />
      </Helmet>

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
                  <Monitor className="w-4 h-4 mr-2" />
                  3D Holographic Workspace
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                  AI Holographic Workspace
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Step into the future of productivity with immersive 3D holographic workspaces. 
                  Collaborate in virtual reality with AI-powered intelligence and gesture controls.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="cyber-button text-lg px-8 py-4 hover:scale-105 transition-transform">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                    Experience Demo
                    <Play className="w-5 h-5 ml-2 inline" />
                  </button>
                </div>
              </div>

              {/* Real-time Stats */}
              {workspaceData && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Active Projects</span>
                      <Monitor className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{workspaceData.totalProjects}</div>
                    <div className="text-cyan-400 text-sm">In Progress</div>
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Active Users</span>
                      <Users className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{workspaceData.activeUsers}</div>
                    <div className="text-purple-400 text-sm">Collaborating</div>
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Holographic Sessions</span>
                      <Activity className="w-5 h-5 text-pink-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{workspaceData.holographicSessions}</div>
                    <div className="text-pink-400 text-sm">This Month</div>
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Productivity Boost</span>
                      <Zap className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">+{workspaceData.productivityBoost}%</div>
                    <div className="text-cyan-400 text-sm">Efficiency Gain</div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Holographic Workspace Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future of collaboration with cutting-edge holographic technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {feature.accuracy} Accuracy
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Live Workspace Dashboard */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Live Workspace Dashboard
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real-time holographic workspace management and collaboration
                </p>
              </div>

              {/* View Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-slate-800/50 rounded-lg p-1 border border-cyan-400/20">
                  <button
                    onClick={() => setSelectedView('3d')}
                    className={`px-6 py-3 rounded-md transition-all ${
                      selectedView === '3d' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    3D View
                  </button>
                  <button
                    onClick={() => setSelectedView('list')}
                    className={`px-6 py-3 rounded-md transition-all ${
                      selectedView === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    List View
                  </button>
                </div>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeProjects.map((project, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'review' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.collaborators} collaborators
                        </span>
                        <span className="capitalize">{project.type}</span>
                      </div>

                      <div className="text-xs text-gray-500 mb-4">
                        Last modified: {project.lastModified}
                      </div>

                      <div className="flex items-center justify-between">
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-purple-400 hover:text-purple-300 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Collaborators Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Active Collaborators</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {collaborators.map((collaborator, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                          {collaborator.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium">{collaborator.name}</div>
                          <div className="text-gray-400 text-sm">{collaborator.role}</div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${
                          collaborator.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Holographic Workspace Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your holographic collaboration needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    tier.popular 
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/25' 
                      : 'border-gray-600/50'
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-4">{tier.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {tier.price}
                        <span className="text-lg text-gray-400">/{tier.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10'
                    }`}>
                      Get Started
                    </button>
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
                  Ready to Step Into the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of teams using holographic workspaces for unprecedented collaboration
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="cyber-button text-lg px-8 py-4 hover:scale-105 transition-transform">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                    Schedule Demo
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

export default AIHolographicWorkspace;