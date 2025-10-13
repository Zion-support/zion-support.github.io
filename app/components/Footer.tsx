import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Cloud,
  Code,
  Database,
  Users,
  Award,
  Star,
  Facebook,
  Instagram,
  Youtube,
  MessageSquare,
  Send,
  Heart,
  ThumbsUp,
  Share2,
  ExternalLink,
  ChevronRight,
  Home,
  Briefcase,
  FileText,
  Settings,
  HelpCircle,
  Info,
  Lock,
  Eye,
  EyeOff,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  Check,
  X,
  AlertCircle,
  CheckCircle,
  Info as InfoIcon,
  AlertTriangle,
  Wifi,
  WifiOff,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Calendar as CalendarIcon,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarSearch,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarUser,
  CalendarEdit,
  CalendarTrash,
  CalendarSettings,
  CalendarImport,
  CalendarExport,
  CalendarShare,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarShield,
  CalendarAlert,
  CalendarBell,
  CalendarZap,
  CalendarSparkles,
  CalendarGift,
  CalendarAward,
  CalendarTrophy,
  CalendarMedal,
  CalendarCrown,
  CalendarGem,
  CalendarDiamond,
  CalendarPearl,
  CalendarRuby,
  CalendarSapphire,
  CalendarEmerald,
  CalendarTopaz,
  CalendarAmethyst,
  CalendarQuartz,
  CalendarCrystal,
  CalendarJewel,
  CalendarTreasure,
  CalendarGold,
  CalendarSilver,
  CalendarBronze,
  CalendarPlatinum,
  CalendarTitanium,
  CalendarSteel,
  CalendarIron,
  CalendarCopper,
  CalendarAluminum,
  CalendarZinc,
  CalendarTin,
  CalendarLead,
  CalendarMercury,
  CalendarUranium,
  CalendarPlutonium,
  CalendarRadium,
  CalendarThorium,
  CalendarActinium,
  CalendarProtactinium,
  CalendarNeptunium,
  CalendarAmericium,
  CalendarCurium,
  CalendarBerkelium,
  CalendarCalifornium,
  CalendarEinsteinium,
  CalendarFermium,
  CalendarMendelevium,
  CalendarNobelium,
  CalendarLawrencium,
  CalendarRutherfordium,
  CalendarDubnium,
  CalendarSeaborgium,
  CalendarBohrium,
  CalendarHassium,
  CalendarMeitnerium,
  CalendarDarmstadtium,
  CalendarRoentgenium,
  CalendarCopernicium,
  CalendarNihonium,
  CalendarFlerovium,
  CalendarMoscovium,
  CalendarLivermorium,
  CalendarTennessine,
  CalendarOganesson,
  Package,
  Receipt,
  ClipboardList,
  Workflow,
  DollarSign,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Grid,
  List,
  Map,
  Compass,
  Navigation as NavIcon,
  Globe2,
  Cpu,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  Router,
  Switch,
  Hub,
  Modem,
  Antenna,
  Satellite,
  Radar,
  Telescope,
  Microscope,
  Camera,
  Video,
  Image,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  ShoppingCart,
  CreditCard as CreditCardIcon,
  Wallet as WalletIcon,
  Banknote as BanknoteIcon,
  Coins as CoinsIcon,
  Gift as GiftIcon,
  Tag as TagIcon,
  Percent as PercentIcon,
  Calculator as CalculatorIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Layers as LayersIcon,
  Grid as GridIcon,
  List as ListIcon,
  Map as MapIcon,
  Compass as CompassIcon,
  Navigation as NavigationIcon,
  Globe2 as Globe2Icon,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  Signal as SignalIcon,
  Bluetooth as BluetoothIcon,
  Usb as UsbIcon,
  HardDrive as HardDriveIcon,
  MemoryStick as MemoryStickIcon,
  Printer as PrinterIcon,
  Scanner as ScannerIcon,
  Fax as FaxIcon,
  Voicemail as VoicemailIcon,
  Headset as HeadsetIcon,
  Speaker as SpeakerIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle2 as Shuffle2Icon,
  Maximize as MaximizeIcon,
  Minimize as MinimizeIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Diamond as DiamondIcon,
  Star as StarIcon2,
  Moon as MoonIcon,
  Sun as SunIcon,
  Sunrise as SunriseIcon,
  Sunset as SunsetIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  Wind as WindIcon,
  Droplets as DropletsIcon,
  Thermometer as ThermometerIcon,
  Gauge as GaugeIcon,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Hourglass as HourglassIcon,
  Clock3 as Clock3Icon,
  Clock4 as Clock4Icon,
  Clock5 as Clock5Icon,
  Clock6 as Clock6Icon,
  Clock7 as Clock7Icon,
  Clock8 as Clock8Icon,
  Clock9 as Clock9Icon,
  Clock10 as Clock10Icon,
  Clock11 as Clock11Icon,
  Clock12 as Clock12Icon,
  Calendar as CalendarIcon2,
  CalendarDays as CalendarDaysIcon,
  CalendarCheck as CalendarCheckIcon,
  CalendarX as CalendarXIcon,
  CalendarPlus as CalendarPlusIcon,
  CalendarMinus as CalendarMinusIcon,
  CalendarRange as CalendarRangeIcon,
  CalendarSearch as CalendarSearchIcon,
  CalendarHeart as CalendarHeartIcon,
  CalendarStar as CalendarStarIcon,
  CalendarClock as CalendarClockIcon,
  CalendarUser as CalendarUserIcon,
  CalendarEdit as CalendarEditIcon,
  CalendarTrash as CalendarTrashIcon,
  CalendarSettings as CalendarSettingsIcon,
  CalendarImport as CalendarImportIcon,
  CalendarExport as CalendarExportIcon,
  CalendarShare as CalendarShareIcon,
  CalendarLock as CalendarLockIcon,
  CalendarUnlock as CalendarUnlockIcon,
  CalendarKey as CalendarKeyIcon,
  CalendarShield as CalendarShieldIcon,
  CalendarAlert as CalendarAlertIcon,
  CalendarBell as CalendarBellIcon,
  CalendarZap as CalendarZapIcon,
  CalendarSparkles as CalendarSparklesIcon,
  CalendarGift as CalendarGiftIcon,
  CalendarAward as CalendarAwardIcon,
  CalendarTrophy as CalendarTrophyIcon,
  CalendarMedal as CalendarMedalIcon,
  CalendarCrown as CalendarCrownIcon,
  CalendarGem as CalendarGemIcon,
  CalendarDiamond as CalendarDiamondIcon,
  CalendarPearl as CalendarPearlIcon,
  CalendarRuby as CalendarRubyIcon,
  CalendarSapphire as CalendarSapphireIcon,
  CalendarEmerald as CalendarEmeraldIcon,
  CalendarTopaz as CalendarTopazIcon,
  CalendarAmethyst as CalendarAmethystIcon,
  CalendarQuartz as CalendarQuartzIcon,
  CalendarCrystal as CalendarCrystalIcon,
  CalendarJewel as CalendarJewelIcon,
  CalendarTreasure as CalendarTreasureIcon,
  CalendarGold as CalendarGoldIcon,
  CalendarSilver as CalendarSilverIcon,
  CalendarBronze as CalendarBronzeIcon,
  CalendarPlatinum as CalendarPlatinumIcon,
  CalendarTitanium as CalendarTitaniumIcon,
  CalendarSteel as CalendarSteelIcon,
  CalendarIron as CalendarIronIcon,
  CalendarCopper as CalendarCopperIcon,
  CalendarAluminum as CalendarAluminumIcon,
  CalendarZinc as CalendarZincIcon,
  CalendarTin as CalendarTinIcon,
  CalendarLead as CalendarLeadIcon,
  CalendarMercury as CalendarMercuryIcon,
  CalendarUranium as CalendarUraniumIcon,
  CalendarPlutonium as CalendarPlutoniumIcon,
  CalendarRadium as CalendarRadiumIcon,
  CalendarThorium as CalendarThoriumIcon,
  CalendarActinium as CalendarActiniumIcon,
  CalendarProtactinium as CalendarProtactiniumIcon,
  CalendarNeptunium as CalendarNeptuniumIcon,
  CalendarAmericium as CalendarAmericiumIcon,
  CalendarCurium as CalendarCuriumIcon,
  CalendarBerkelium as CalendarBerkeliumIcon,
  CalendarCalifornium as CalendarCaliforniumIcon,
  CalendarEinsteinium as CalendarEinsteiniumIcon,
  CalendarFermium as CalendarFermiumIcon,
  CalendarMendelevium as CalendarMendeleviumIcon,
  CalendarNobelium as CalendarNobeliumIcon,
  CalendarLawrencium as CalendarLawrenciumIcon,
  CalendarRutherfordium as CalendarRutherfordiumIcon,
  CalendarDubnium as CalendarDubniumIcon,
  CalendarSeaborgium as CalendarSeaborgiumIcon,
  CalendarBohrium as CalendarBohriumIcon,
  CalendarHassium as CalendarHassiumIcon,
  CalendarMeitnerium as CalendarMeitneriumIcon,
  CalendarDarmstadtium as CalendarDarmstadtiumIcon,
  CalendarRoentgenium as CalendarRoentgeniumIcon,
  CalendarCopernicium as CalendarCoperniciumIcon,
  CalendarNihonium as CalendarNihoniumIcon,
  CalendarFlerovium as CalendarFleroviumIcon,
  CalendarMoscovium as CalendarMoscoviumIcon,
  CalendarLivermorium as CalendarLivermoriumIcon,
  CalendarTennessine as CalendarTennessineIcon,
  CalendarOganesson as CalendarOganessonIcon,
  Package as PackageIcon,
  Receipt as ReceiptIcon,
  ClipboardList as ClipboardListIcon,
  Workflow as WorkflowIcon
} from "lucide-react";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(() => [
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-gray-300"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/ziontechgroup",
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ziontechgroup",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:text-pink-500"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@ziontechgroup",
      icon: <Youtube className="w-5 h-5" />,
      color: "hover:text-red-500"
    }
  ], []);

  const services = useMemo(() => [
    { name: "AI Services", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
    { name: "IT Services", path: "/it-services", icon: <Shield className="w-4 h-4" /> },
    { name: "Micro SAAS", path: "/micro-saas", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Solutions", path: "/5g-solutions", icon: <Wifi className="w-4 h-4" /> },
    { name: "Cloud Solutions", path: "/cloud-solutions", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity", path: "/cybersecurity", icon: <Lock className="w-4 h-4" /> },
    { name: "Software Development", path: "/software-development", icon: <Code className="w-4 h-4" /> },
    { name: "Data Analytics", path: "/data-analytics", icon: <BarChart3 className="w-4 h-4" /> }
  ], []);

  const company = useMemo(() => [
    { name: "About Us", path: "/about", icon: <Users className="w-4 h-4" /> },
    { name: "Our Team", path: "/team", icon: <Award className="w-4 h-4" /> },
    { name: "Careers", path: "/careers", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Press", path: "/press", icon: <FileText className="w-4 h-4" /> },
    { name: "Partners", path: "/partners", icon: <Globe className="w-4 h-4" /> },
    { name: "Investors", path: "/investors", icon: <TrendingUp className="w-4 h-4" /> }
  ], []);

  const support = useMemo(() => [
    { name: "Help Center", path: "/help", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Documentation", path: "/docs", icon: <FileText className="w-4 h-4" /> },
    { name: "API Reference", path: "/api", icon: <Code className="w-4 h-4" /> },
    { name: "Tutorials", path: "/tutorials", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Community", path: "/community", icon: <Users className="w-4 h-4" /> },
    { name: "Status", path: "/status", icon: <Activity className="w-4 h-4" /> }
  ], []);

  const legal = useMemo(() => [
    { name: "Privacy Policy", path: "/privacy", icon: <Lock className="w-4 h-4" /> },
    { name: "Terms of Service", path: "/terms", icon: <FileText className="w-4 h-4" /> },
    { name: "Cookie Policy", path: "/cookies", icon: <Settings className="w-4 h-4" /> },
    { name: "GDPR", path: "/gdpr", icon: <Shield className="w-4 h-4" /> },
    { name: "Compliance", path: "/compliance", icon: <CheckCircle className="w-4 h-4" /> },
    { name: "Security", path: "/security", icon: <Lock className="w-4 h-4" /> }
  ], []);

  const contactInfo = useMemo(() => [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+1 302 464 0950",
      href: "tel:+13024640950"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "364 E Main St STE 1008 Middletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Mon-Fri 9AM-6PM EST",
      href: null
    }
  ], []);

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Particle System */}
      <div className="particle-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white neon-text">Zion Tech Group</h3>
                <p className="text-purple-300 font-medium">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
              Transforming the future with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-purple-400">{contact.icon}</div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{contact.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {service.icon}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {item.icon}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-purple-400" />
              Support
            </h4>
            <ul className="space-y-3 mb-6">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {item.icon}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-400" />
              Legal
            </h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {item.icon}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-8 mb-12 border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on AI breakthroughs, new services, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 futuristic-btn">
                Subscribe
                <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:glow-purple`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with <Heart className="w-3 h-3 inline text-red-500" /> in Delaware, USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;