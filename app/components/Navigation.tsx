import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
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
  ChevronDown,
  SidebarIcon,
  Package,
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
  Settings,
  Wifi,
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
  HeartIcon,
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
              {/* Home */}
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServices}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600/10 transition-all duration-300"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-2xl border border-purple-500/20 z-50">
                    <div className="py-2">
                      {/* AI Services */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleAIServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Brain className="w-4 h-4 mr-2" />
                          AI Services
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isAIServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/ai-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Business Intelligence Pro
                            </Link>
                            <Link to="/ai-content-generation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Content Generation Studio
                            </Link>
                            <Link to="/ai-customer-support" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Customer Support Suite
                            </Link>
                            <Link to="/ai-cybersecurity" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Cybersecurity Defense
                            </Link>
                            <Link to="/ai-data-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Data Analytics Platform
                            </Link>
                            <Link to="/ai-workflow-automation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Workflow Automation Hub
                            </Link>
                            <Link to="/ai-marketing-automation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Marketing Automation Pro
                            </Link>
                            <Link to="/ai-document-processing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Document Intelligence
                            </Link>
                            <Link to="/ai-voice-assistant" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Voice Assistant Enterprise
                            </Link>
                            <Link to="/ai-computer-vision" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Computer Vision Suite
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* IT Services */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleITServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          IT Services
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isITServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isITServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Cloud Infrastructure Pro
                            </Link>
                            <Link to="/cybersecurity" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Advanced Cybersecurity
                            </Link>
                            <Link to="/data-management" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Enterprise Data Management
                            </Link>
                            <Link to="/network-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Network Infrastructure
                            </Link>
                            <Link to="/it-consulting" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Strategic IT Consulting
                            </Link>
                            <Link to="/system-integration" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              System Integration
                            </Link>
                            <Link to="/ai-it-help-desk" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI-Powered IT Help Desk
                            </Link>
                            <Link to="/soc-services" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Security Operations Center
                            </Link>
                            <Link to="/zero-trust-security" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Zero Trust Security
                            </Link>
                            <Link to="/ai-it-automation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI-Driven IT Automation
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* Micro SAAS */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggleMicroSaas}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Package className="w-4 h-4 mr-2" />
                          Micro SAAS
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMicroSaasOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/zion-analytics-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Zion Analytics Pro
                            </Link>
                            <Link to="/zion-security-shield" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Zion Security Shield
                            </Link>
                            <Link to="/zion-cloud-vault" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Zion Cloud Vault
                            </Link>
                            <Link to="/zion-ai-crm-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              Zion AI CRM Pro
                            </Link>
                            <Link to="/zion-ai-marketing-automation-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Marketing Automation Pro
                            </Link>
                            <Link to="/zion-ai-project-manager-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Project Manager Pro
                            </Link>
                            <Link to="/zion-ai-accounting-assistant" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Accounting Assistant
                            </Link>
                            <Link to="/zion-ai-inventory-manager" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Inventory Manager
                            </Link>
                            <Link to="/zion-ai-hr-assistant" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI HR Assistant
                            </Link>
                            <Link to="/zion-ai-customer-support-bot" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              AI Customer Support Bot
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* 5G Solutions */}
                      <div className="px-4 py-2">
                        <button
                          onClick={toggle5GServices}
                          className="flex items-center w-full text-left text-sm font-medium text-purple-200 hover:text-white transition-colors duration-200"
                        >
                          <Wifi className="w-4 h-4 mr-2" />
                          5G Solutions
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-300 ${is5GServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {is5GServicesOpen && (
                          <div className="ml-6 mt-2 space-y-1">
                            <Link to="/5g-network-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Network Infrastructure
                            </Link>
                            <Link to="/5g-iot-solutions" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G IoT Solutions
                            </Link>
                            <Link to="/5g-smart-city" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Smart City Solutions
                            </Link>
                            <Link to="/5g-edge-computing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Edge Computing
                            </Link>
                            <Link to="/5g-mobile-apps" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Mobile Applications
                            </Link>
                            <Link to="/5g-data-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Data Analytics
                            </Link>
                            <Link to="/5g-private-networks" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Private Networks
                            </Link>
                            <Link to="/5g-implementation" className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 rounded transition-colors duration-200">
                              5G Implementation Services
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Contact
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive('/blog') 
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
                }`}
              >
                Blog
              </Link>
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
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/services') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/ai-services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/ai-services') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              AI Services
            </Link>
            <Link
              to="/micro-saas"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/micro-saas') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Micro SAAS
            </Link>
            <Link
              to="/5g-solutions"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/5g-solutions') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              5G Solutions
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/blog') 
                  ? 'bg-purple-600/20 text-purple-200 border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-purple-600/10'
              }`}
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
