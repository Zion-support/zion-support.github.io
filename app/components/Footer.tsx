import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook, 
  Instagram, 
  Youtube,
  Zap,
  Brain,
  Shield,
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
  Smartphone,
  Monitor,
  Code,
  Database,
  Lock,
  Eye,
  Activity,
  TrendingUp,
  Cpu,
  Network,
  Target,
  Calendar,
  Clock,
  FileText,
  Bot,
  Heart,
  Receipt,
  TrendingDown,
  PieChart,
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
  Wind as WindIcon,
  Thermometer,
  Droplets,
  Umbrella,
  Sunny,
  MoonIcon,
  Sunrise,
  Sunset,
  Compass,
  Map,
  MapPin as MapPinIcon,
  Navigation,
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
  Candle as CandleIcon,
  Flashlight as FlashlightIcon,
  Battery,
  Plug,
  Power,
  WifiIcon,
  Bluetooth,
  Radio,
  Tv,
  Computer,
  Laptop,
  Monitor as MonitorIcon,
  Keyboard,
  Mouse,
  Headphones,
  Speaker,
  Microphone,
  Camera as CameraIcon,
  Video as VideoIcon2,
  Phone as PhoneIcon2,
  Smartphone as SmartphoneIcon,
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
  Heart as HeartIcon,
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
  Shield as ShieldIcon,
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
  Crown as CrownIcon,
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
  Wind as WindIcon2,
  Hydro,
  Nuclear,
  Fossil,
  Coal,
  Oil,
  Gas,
  Biomass,
  Geothermal,
  Tidal,
  Wave as WaveIcon,
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
  Gem as GemIcon,
  Pearl,
  Diamond as DiamondIcon,
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-analytics" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/ai-content-generation" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Content Generation
                </Link>
              </li>
              <li>
                <Link to="/ai-customer-support" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Customer Support
                </Link>
              </li>
              <li>
                <Link to="/ai-cybersecurity" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/ai-data-analytics" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/ai-workflow-automation" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link to="/data-management" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Data Management
                </Link>
              </li>
              <li>
                <Link to="/network-solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Network Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-consulting" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/system-integration" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  System Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS & 5G */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Package className="w-5 h-5 mr-2 text-green-400" />
              Micro SAAS & 5G
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/project-management-tool" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/team-collaboration" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Team Collaboration
                </Link>
              </li>
              <li>
                <Link to="/analytics-dashboard" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/5g-network-infrastructure" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  5G Network Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/5g-iot-solutions" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  5G IoT Solutions
                </Link>
              </li>
              <li>
                <Link to="/5g-smart-city" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  5G Smart City
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
