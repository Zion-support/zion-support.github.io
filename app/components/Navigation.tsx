import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown,
  Settings,
  Package,
  Wifi,
  ArrowRight,
  Star,
  Users,
  Award,
  BarChart3,
  Cloud,
  Sparkles,
  Mail,
  Smartphone,
  Monitor,
  Phone,
  Code,
  Database,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  Target,
  Calendar,
  Clock,
  FileText,
  Bot,
  Lock,
  Mobile,
  Laptop,
  Server,
  HardDrive,
  Terminal,
  GitBranch,
  Layers,
  Workflow,
  MessageSquare,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Activity,
  Trending,
  PieChart,
  BarChart,
  LineChart,
  Globe2,
  NetworkIcon,
  Processor,
  MemoryStick,
  Storage,
  DataIcon,
  Security,
  Privacy,
  Key,
  Fingerprint,
  Scan,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  HelpCircle,
  BookOpen,
  Video,
  Image,
  Music,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Share,
  ExternalLink,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  VideoIcon,
  VideoOff,
  PhoneIcon,
  PhoneOff,
  MessageCircle,
  Send,
  Reply,
  Forward,
  Flag,
  Bookmark,
  Like,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Wink,
  Kiss,
  Hug,
  Clap,
  Wave,
  ThumbUp,
  ThumbDown,
  StarIcon,
  StarOff,
  Plus,
  Minus,
  Times,
  Divide,
  Equals,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard,
  Wallet,
  ShoppingCart,
  ShoppingBag,
  Tag,
  Tags,
  PriceTag,
  ReceiptIcon,
  Calculator,
  CalendarIcon,
  ClockIcon,
  Timer,
  Stopwatch,
  Hourglass,
  DateIcon,
  Sun,
  Moon,
  CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Sunny,
  MoonIcon,
  Sunrise,
  Sunset,
  Compass,
  Map,
  MapPin,
  Navigation as NavIcon,
  Route,
  Car,
  Bus,
  Train,
  Plane,
  Ship,
  Bike,
  Walking,
  Running,
  Swimming,
  Skiing,
  Snowboarding,
  Surfing,
  Climbing,
  Hiking,
  Camping,
  Backpack,
  Tent,
  SleepingBag,
  Flashlight,
  Candle,
  Fire,
  Water,
  Tree,
  Mountain,
  Home,
  Building,
  Factory,
  Store,
  Hospital,
  School,
  Church,
  Bank,
  PostOffice,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Forest,
  Desert,
  Ocean,
  River,
  Lake,
  Island,
  Bridge,
  Tower,
  Castle,
  Palace,
  Temple,
  Monument,
  Statue,
  Fountain,
  Garden,
  Farm,
  Barn,
  Windmill,
  Lighthouse,
  Observatory,
  Laboratory,
  Office,
  Desk,
  Chair,
  Table,
  Bed,
  Sofa,
  Lamp,
  Lightbulb,
  CandleIcon,
  FlashlightIcon,
  Battery,
  Plug,
  Power,
  WifiIcon,
  Bluetooth,
  Radio,
  Tv,
  Computer,
  LaptopIcon,
  MonitorIcon,
  Keyboard,
  Mouse,
  Headphones,
  Speaker,
  Microphone,
  CameraIcon,
  VideoIcon2,
  PhoneIcon2,
  SmartphoneIcon,
  Tablet,
  Watch,
  Gamepad2,
  Joystick,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Puzzle,
  Rubik,
  Chess,
  Cards,
  Spade,
  Heart,
  Diamond,
  Club,
  Crown,
  Gem,
  Ring,
  Necklace,
  Bracelet,
  Earrings,
  Glasses,
  Sunglasses,
  Mask,
  Hat,
  Cap,
  Helmet,
  Shirt,
  Dress,
  Pants,
  Shorts,
  Skirt,
  Jacket,
  Coat,
  Sweater,
  Hoodie,
  Vest,
  Tie,
  Belt,
  Sock,
  Shoe,
  Boot,
  Sandal,
  Sneaker,
  HighHeel,
  FlipFlop,
  Slipper,
  Glove,
  Mittens,
  Scarf,
  Shawl,
  Poncho,
  Kimono,
  Sari,
  Kilt,
  Toga,
  Uniform,
  Suit,
  Tuxedo,
  Gown,
  Robe,
  Pajamas,
  Underwear,
  Bra,
  Panties,
  Boxers,
  Briefs,
  Thong,
  Bikini,
  Swimsuit,
  Wetsuit,
  DivingSuit,
  SpaceSuit,
  Armor,
  Chainmail,
  Plate,
  ShieldIcon,
  Sword,
  Dagger,
  Axe,
  Bow,
  Arrow,
  Spear,
  Mace,
  Flail,
  Whip,
  Staff,
  Wand,
  Scepter,
  CrownIcon,
  Tiara,
  Diadem,
  Circlet,
  Headband,
  Hairpin,
  Comb,
  Brush,
  Mirror,
  Perfume,
  Lipstick,
  Mascara,
  Eyeshadow,
  Blush,
  Foundation,
  Concealer,
  Powder,
  Primer,
  Serum,
  Moisturizer,
  Sunscreen,
  Cleanser,
  Toner,
  Exfoliant,
  FaceMask,
  Scrub,
  Peel,
  Treatment,
  Therapy,
  Massage,
  Acupuncture,
  Chiropractic,
  Physical,
  Mental,
  Emotional,
  Spiritual,
  Psychological,
  Psychiatric,
  Neurological,
  Cardiovascular,
  Respiratory,
  Digestive,
  Endocrine,
  Immune,
  Reproductive,
  Urinary,
  Muscular,
  Skeletal,
  Nervous,
  Circulatory,
  Lymphatic,
  Integumentary,
  Sensory,
  Motor,
  Cognitive,
  Behavioral,
  Social,
  Cultural,
  Educational,
  Professional,
  Personal,
  Private,
  Public,
  Corporate,
  Government,
  Military,
  Law,
  Medicine,
  Science,
  Technology,
  Engineering,
  Mathematics,
  Physics,
  Chemistry,
  Biology,
  Geology,
  Astronomy,
  Meteorology,
  Oceanography,
  Ecology,
  Environmental,
  Conservation,
  Sustainability,
  Renewable,
  Green,
  Clean,
  Pure,
  Natural,
  Organic,
  Synthetic,
  Artificial,
  Digital,
  Virtual,
  Augmented,
  Mixed,
  Extended,
  Immersive,
  Interactive,
  Responsive,
  Adaptive,
  Intelligent,
  Smart,
  Automated,
  Robotic,
  Autonomous,
  SelfDriving,
  Electric,
  Hybrid,
  Solar,
  Wind,
  Hydro,
  Nuclear,
  Fossil,
  Coal,
  Oil,
  Gas,
  Biomass,
  Geothermal,
  Tidal,
  Wave,
  Fusion,
  Fission,
  Plasma,
  Ion,
  Electron,
  Proton,
  Neutron,
  Atom,
  Molecule,
  Compound,
  Element,
  Metal,
  Nonmetal,
  Metalloid,
  Alloy,
  Crystal,
  Mineral,
  Rock,
  Stone,
  GemIcon,
  Pearl,
  DiamondIcon,
  Ruby,
  Sapphire,
  Emerald,
  Topaz,
  Amethyst,
  Citrine,
  Garnet,
  Opal,
  Jade,
  Turquoise,
  Lapis,
  Malachite,
  Agate,
  Jasper,
  Onyx,
  Obsidian,
  Quartz,
  Feldspar,
  Mica,
  Talc,
  Gypsum,
  Calcite,
  Aragonite,
  Dolomite,
  Magnesite,
  Siderite,
  Rhodochrosite,
  Smithsonite,
  Azurite,
  Chrysocolla,
  Dioptase,
  Wulfenite,
  Vanadinite,
  Pyromorphite,
  Mimetite,
  Crocoite,
  WulfeniteIcon,
  VanadiniteIcon,
  PyromorphiteIcon,
  MimetiteIcon,
  CrocoiteIcon,
  WulfeniteIcon2,
  VanadiniteIcon2,
  PyromorphiteIcon2,
  MimetiteIcon2,
  CrocoiteIcon2
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen);
  }, [isServicesOpen]);

  const toggleAIServices = useCallback(() => {
    setIsAIServicesOpen(!isAIServicesOpen);
  }, [isAIServicesOpen]);

  const toggleITServices = useCallback(() => {
    setIsITServicesOpen(!isITServicesOpen);
  }, [isITServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const toggle5GServices = useCallback(() => {
    setIs5GServicesOpen(!is5GServicesOpen);
  }, [is5GServicesOpen]);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-4 h-4" />,
      hasDropdown: false
    },
    {
      name: 'About',
      path: '/about',
      icon: <Info className="w-4 h-4" />,
      hasDropdown: false
    },
    {
      name: 'Services',
      path: '/services',
      icon: <Settings className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Package className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Wifi className="w-4 h-4" />,
      hasDropdown: true
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Mail className="w-4 h-4" />,
      hasDropdown: false
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <BookOpen className="w-4 h-4" />,
      hasDropdown: false
    }
  ];

  const serviceDropdownItems = [
    {
      name: 'AI Analytics',
      path: '/ai-analytics',
      description: 'Advanced data analytics and insights',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'AI Cybersecurity',
      path: '/ai-cybersecurity',
      description: 'AI-powered security solutions',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Cloud Migration',
      path: '/cloud-migration',
      description: 'Seamless cloud transition',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      name: 'Web Development',
      path: '/web-development',
      description: 'Custom web applications',
      icon: <Code className="w-4 h-4" />
    },
    {
      name: 'DevOps',
      path: '/devops',
      description: 'CI/CD and automation',
      icon: <GitBranch className="w-4 h-4" />
    },
    {
      name: 'IT Consulting',
      path: '/it-consulting',
      description: 'Strategic technology guidance',
      icon: <Users className="w-4 h-4" />
    }
  ];

  const aiServicesItems = [
    {
      name: 'AI Analytics Dashboard',
      path: '/ai-analytics',
      description: 'Real-time AI-powered analytics',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'AI Content Generation',
      path: '/ai-content-generation',
      description: 'Automated content creation',
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: 'AI Customer Support',
      path: '/ai-customer-support',
      description: 'Intelligent customer service',
      icon: <MessageCircle className="w-4 h-4" />
    },
    {
      name: 'AI Cybersecurity',
      path: '/ai-cybersecurity',
      description: 'AI-powered security solutions',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'AI Data Analytics',
      path: '/ai-data-analytics',
      description: 'Advanced data insights',
      icon: <Database className="w-4 h-4" />
    },
    {
      name: 'AI Workflow Automation',
      path: '/ai-workflow-automation',
      description: 'Automated business processes',
      icon: <Workflow className="w-4 h-4" />
    }
  ];

  const microSaasItems = [
    {
      name: 'Zion Analytics Pro',
      path: '/zion-analytics-pro',
      description: 'AI-powered business intelligence',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      name: 'Zion Security Shield',
      path: '/zion-security-shield',
      description: 'Advanced cybersecurity protection',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Zion AI CRM Pro',
      path: '/zion-ai-crm-pro',
      description: 'AI-powered customer management',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Zion Cloud Vault',
      path: '/zion-cloud-vault',
      description: 'Secure cloud storage solution',
      icon: <Cloud className="w-4 h-4" />
    },
    {
      name: 'Zion AI Marketing',
      path: '/zion-ai-marketing-automation',
      description: 'AI marketing automation',
      icon: <Target className="w-4 h-4" />
    },
    {
      name: 'Zion AI Video Generator',
      path: '/zion-ai-video-generator',
      description: 'AI-powered video creation',
      icon: <Video className="w-4 h-4" />
    }
  ];

  const fiveGServicesItems = [
    {
      name: '5G Network Infrastructure',
      path: '/5g-network-infrastructure',
      description: 'Next-gen network deployment',
      icon: <Network className="w-4 h-4" />
    },
    {
      name: '5G Edge Computing',
      path: '/5g-edge-computing',
      description: 'Ultra-low latency computing',
      icon: <Cpu className="w-4 h-4" />
    },
    {
      name: '5G IoT Solutions',
      path: '/5g-iot-solutions',
      description: 'Connected device management',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: '5G Smart City',
      path: '/5g-smart-city-solutions',
      description: 'Intelligent city infrastructure',
      icon: <Building className="w-4 h-4" />
    },
    {
      name: '5G Private Networks',
      path: '/5g-private-networks',
      description: 'Dedicated enterprise networks',
      icon: <Lock className="w-4 h-4" />
    },
    {
      name: '5G Mobile Apps',
      path: '/5g-mobile-applications',
      description: 'High-speed mobile applications',
      icon: <Smartphone className="w-4 h-4" />
    }
  ];

  return (
    <nav className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 shadow-2xl">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                  
                  {/* Services Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-2xl border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-3 text-sm">{item.name}</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {item.name === 'Services' && serviceDropdownItems.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center p-3 rounded-lg hover:bg-purple-600/20 transition-colors group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                                {service.icon}
                              </div>
                              <div>
                                <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                          {item.name === 'AI Services' && aiServicesItems.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center p-3 rounded-lg hover:bg-purple-600/20 transition-colors group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                                {service.icon}
                              </div>
                              <div>
                                <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                          {item.name === 'Micro SAAS' && microSaasItems.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center p-3 rounded-lg hover:bg-purple-600/20 transition-colors group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                                {service.icon}
                              </div>
                              <div>
                                <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                          {item.name === '5G Solutions' && fiveGServicesItems.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="flex items-center p-3 rounded-lg hover:bg-purple-600/20 transition-colors group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                                {service.icon}
                              </div>
                              <div>
                                <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-purple-500/20">
                          <Link
                            to={item.path}
                            className="block text-center text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                          >
                            View All {item.name} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-600/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-lg border-t border-purple-500/20">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
                onClick={toggleMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}