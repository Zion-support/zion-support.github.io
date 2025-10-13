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
  Gem,
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

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/ziontechgroup",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ziontechgroup",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/ziontechgroup",
      icon: <Youtube className="w-5 h-5" />,
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
    { name: "Blog", path: "/blog" }
  ];

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant" },
    { name: "AI Document Processing", path: "/ai-document-processing" }
  ];

  const itServices = [
    { name: "Cloud Migration", path: "/cloud-migration" },
    { name: "Web Development", path: "/web-development" },
    { name: "DevOps", path: "/devops" },
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "Network Security", path: "/network-security" },
    { name: "System Integration", path: "/system-integration" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "Data Management", path: "/data-management" }
  ];

  const microSaasServices = [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion AI Marketing", path: "/zion-ai-marketing-automation" },
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "Zion AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights" }
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Mobile Apps", path: "/5g-mobile-applications" },
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Implementation", path: "/5g-implementation" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
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
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-cyan-400" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS & 5G Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 mr-2 text-green-400" />
              Micro SAAS & 5G
            </h3>
            <ul className="space-y-2 mb-6">
              {microSaasServices.slice(0, 4).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
              {fiveGServices.slice(0, 4).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-cyan-400" />
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
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