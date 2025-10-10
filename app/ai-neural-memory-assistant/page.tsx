'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  MemoryStick, 
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
  MemoryStick as Memory,
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

const AINeuralMemoryAssistant: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memoryStats, setMemoryStats] = useState<any>(null);
  const [activeMemories, setActiveMemories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate real-time memory data fetching
    const fetchMemoryData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock real memory data
        const mockData = {
          totalMemories: 12547,
          activeMemories: 3421,
          memoryAccuracy: 98.7,
          neuralConnections: 89234,
          lastSync: new Date().toISOString(),
          memories: [
            { id: 1, title: 'Project Alpha Meeting Notes', category: 'work', importance: 'high', lastAccessed: '2 hours ago', tags: ['meeting', 'project', 'alpha'] },
            { id: 2, title: 'Grocery List - Weekend', category: 'personal', importance: 'medium', lastAccessed: '1 day ago', tags: ['grocery', 'weekend', 'shopping'] },
            { id: 3, title: 'Client Presentation Ideas', category: 'work', importance: 'high', lastAccessed: '3 hours ago', tags: ['presentation', 'client', 'ideas'] },
            { id: 4, title: 'Birthday Party Planning', category: 'personal', importance: 'low', lastAccessed: '1 week ago', tags: ['birthday', 'party', 'planning'] },
            { id: 5, title: 'Code Review Notes', category: 'work', importance: 'high', lastAccessed: '4 hours ago', tags: ['code', 'review', 'development'] }
          ]
        };
        
        setMemoryStats(mockData);
        setActiveMemories(mockData.memories);
      } catch (error) {
        console.error('Error fetching memory data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemoryData();
    const interval = setInterval(fetchMemoryData, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Neural Memory Enhancement",
      description: "Boost your cognitive abilities with AI-powered memory augmentation and recall optimization",
      icon: Brain,
      accuracy: "98.7%"
    },
    {
      title: "Intelligent Memory Organization",
      description: "Automatically categorize and tag memories for instant retrieval and better organization",
      icon: Target,
      accuracy: "99.2%"
    },
    {
      title: "Contextual Memory Search",
      description: "Find any memory instantly with natural language search and contextual understanding",
      icon: Search,
      accuracy: "99.5%"
    },
    {
      title: "Memory Pattern Recognition",
      description: "Learn from your memory patterns to predict and suggest relevant information",
      icon: Activity,
      accuracy: "97.8%"
    }
  ];

  const pricingTiers = [
    {
      name: "Personal",
      price: "$49",
      period: "month",
      description: "Perfect for personal memory enhancement",
      features: [
        "10,000 memory storage",
        "Basic AI organization",
        "Mobile app access",
        "Email support",
        "Standard accuracy (95%)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Ideal for professionals and students",
      features: [
        "Unlimited memory storage",
        "Advanced AI organization",
        "Cross-platform sync",
        "Priority support",
        "High accuracy (98.7%)",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "For organizations and teams",
      features: [
        "Unlimited everything",
        "Custom AI training",
        "White-label solutions",
        "Maximum accuracy (99.5%)",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const filteredMemories = activeMemories.filter(memory => {
    const matchesCategory = selectedCategory === 'all' || memory.category === selectedCategory;
    const matchesSearch = memory.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         memory.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Neural Memory Assistant - Enhance Your Cognitive Abilities | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered memory enhancement platform. Boost your cognitive abilities with 98.7% accurate memory augmentation and intelligent organization." />
        <meta name="keywords" content="AI memory, cognitive enhancement, neural memory, memory augmentation, brain training, memory organization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-neural-memory-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                  <Brain className="w-4 h-4 mr-2" />
                  Neural Memory Enhancement
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                  AI Neural Memory Assistant
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Enhance your cognitive abilities with AI-powered memory augmentation. 
                  Achieve 98.7% accuracy in memory recall and intelligent organization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="cyber-button text-lg px-8 py-4 hover:scale-105 transition-transform">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border border-purple-400/50 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors">
                    Watch Demo
                    <Play className="w-5 h-5 ml-2 inline" />
                  </button>
                </div>
              </div>

              {/* Real-time Stats */}
              {memoryStats && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Total Memories</span>
                      <MemoryStick className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{memoryStats.totalMemories.toLocaleString()}</div>
                    <div className="text-purple-400 text-sm">Stored</div>
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Active Memories</span>
                      <Activity className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{memoryStats.activeMemories.toLocaleString()}</div>
                    <div className="text-cyan-400 text-sm">Currently Active</div>
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Memory Accuracy</span>
                      <Target className="w-5 h-5 text-pink-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{memoryStats.memoryAccuracy}%</div>
                    <div className="text-pink-400 text-sm">AI Enhanced</div>
                  </div>
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Neural Connections</span>
                      <Brain className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{memoryStats.neuralConnections.toLocaleString()}</div>
                    <div className="text-purple-400 text-sm">Active Links</div>
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
                  Neural Enhancement Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Harness the power of AI and neuroscience for unparalleled memory enhancement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

          {/* Live Memory Dashboard */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Live Memory Dashboard
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real-time memory management and intelligent organization
                </p>
              </div>

              {/* Search and Filter */}
              <div className="mb-8 flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search memories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-purple-400/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400/40 focus:outline-none"
                    />
                  </div>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-purple-400/20 rounded-lg text-white focus:border-purple-400/40 focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                  <option value="learning">Learning</option>
                  <option value="creative">Creative</option>
                </select>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMemories.map((memory, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{memory.title}</h3>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          memory.importance === 'high' ? 'bg-red-500/20 text-red-400' :
                          memory.importance === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {memory.importance}
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm mb-4">
                        Last accessed: {memory.lastAccessed}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {memory.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 capitalize">{memory.category}</span>
                        <button className="text-purple-400 hover:text-purple-300 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Neural Enhancement Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your memory enhancement needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    tier.popular 
                      ? 'border-purple-400/50 shadow-lg shadow-purple-400/25' 
                      : 'border-gray-600/50'
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-4">{tier.description}</p>
                      <div className="text-4xl font-bold text-purple-400 mb-2">
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
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'border border-purple-400/50 text-purple-400 hover:bg-purple-400/10'
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
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-12 border border-purple-400/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Enhance Your Memory?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of users using AI-powered memory enhancement for superior cognitive performance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="cyber-button text-lg px-8 py-4 hover:scale-105 transition-transform">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border border-purple-400/50 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors">
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

export default AINeuralMemoryAssistant;