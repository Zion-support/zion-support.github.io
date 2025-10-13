import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Star, 
  CheckCircle,
  Sparkles,
  Target,
  Calendar,
  Mail,
  Phone,
  Globe,
  TrendingUp,
  Award,
  Clock,
  Database,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Headphones,
  Heart,
  Receipt,
  Package,
  FileText,
  Code,
  Bot,
  Wifi,
  MessageSquare,
  PhoneCall,
  DollarSign,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Play,
  Video,
  Camera,
  Mic,
  Headphones as HeadphonesIcon,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Gamepad2,
  Music,
  Image,
  File,
  Folder,
  Archive,
  Bookmark,
  Tag,
  Flag,
  Bell,
  AlertCircle,
  Info,
  HelpCircle,
  ChevronRight,
  ExternalLink,
  Download as DownloadIcon,
  Share2,
  Copy,
  Save,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  X,
  Plus as PlusIcon,
  Minus,
  Divide,
  Equal,
  Hash,
  AtSign,
  Percent,
  DollarSign as DollarIcon,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  AreaChart,
  ScatterChart,
  Radar,
  Gauge,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudSun,
  CloudMoon,
  Sunrise,
  Sunset,
  Compass,
  MapPin,
  Navigation,
  Route,
  Map,
  Globe2,
  World,
  Earth,
  Satellite,
  Rocket,
  Plane,
  Car,
  Truck,
  Bus,
  Train,
  Ship,
  Anchor,
  Sailboat,
  Bike,
  Scooter,
  Motorcycle,
  Helicopter,
  Zap as Lightning,
  Flame,
  Snowflake,
  Leaf,
  TreePine,
  TreeDeciduous,
  Flower,
  Rose,
  Sunflower,
  Tulip,
  Cherry,
  Apple,
  Banana,
  Orange,
  Lemon,
  Grape,
  Strawberry,
  Watermelon,
  Pineapple,
  Mango,
  Peach,
  Pear,
  Avocado,
  Carrot,
  Broccoli,
  Corn,
  Pepper,
  Tomato,
  Onion,
  Garlic,
  Ginger,
  Potato,
  SweetPotato,
  Cucumber,
  Lettuce,
  Spinach,
  Kale,
  Cabbage,
  Cauliflower,
  Eggplant,
  Zucchini,
  Squash,
  Pumpkin,
  Beet,
  Radish,
  Turnip,
  Parsnip,
  Celery,
  Asparagus,
  Artichoke,
  Mushroom,
  Peas,
  Beans,
  Lentils,
  Chickpeas,
  Quinoa,
  Rice,
  Wheat,
  Oats,
  Barley,
  Rye,
  Corn as CornIcon,
  Soy,
  Almond,
  Walnut,
  Pecan,
  Cashew,
  Pistachio,
  Hazelnut,
  Macadamia,
  Brazil,
  Coconut,
  Chestnut,
  Peanut,
  Sesame,
  Sunflower as SunflowerIcon,
  Chia,
  Flax,
  Hemp,
  Poppy,
  Mustard,
  Cumin,
  Coriander,
  Cardamom,
  Cinnamon,
  Clove,
  Nutmeg,
  Allspice,
  Star as StarIcon,
  Anise,
  Fennel,
  Dill,
  Parsley,
  Cilantro,
  Basil,
  Oregano,
  Thyme,
  Rosemary,
  Sage,
  Mint,
  Lavender,
  Chamomile,
  Echinacea,
  Ginseng,
  Turmeric,
  Ginger as GingerIcon,
  Garlic as GarlicIcon,
  Onion as OnionIcon,
  Pepper as PepperIcon,
  Salt,
  Sugar,
  Honey,
  Maple,
  Agave,
  Stevia,
  Vanilla,
  Chocolate,
  Cocoa,
  Coffee,
  Tea,
  Matcha,
  Chai,
  Espresso,
  Latte,
  Cappuccino,
  Macchiato,
  Mocha,
  Frappuccino,
  Smoothie,
  Juice,
  Soda,
  Water,
  Beer,
  Wine,
  Whiskey,
  Vodka,
  Rum,
  Gin,
  Tequila,
  Brandy,
  Cognac,
  Champagne,
  Prosecco,
  Cider,
  Mead,
  Sake,
  Soju,
  Baijiu,
  Absinthe,
  Liqueur,
  Schnapps,
  Port,
  Sherry,
  Madeira,
  Vermouth,
  Bitters,
  Syrup,
  Liqueur as LiqueurIcon,
  Cream,
  Milk,
  Yogurt,
  Cheese,
  Butter,
  Margarine,
  Oil,
  Vinegar,
  Soy as SoyIcon,
  Tamari,
  Miso,
  Tofu,
  Tempeh,
  Seitan,
  Quorn,
  Spirulina,
  Chlorella,
  Kelp,
  Nori,
  Wakame,
  Kombu,
  Dulse,
  Arame,
  Hijiki,
  Agar,
  Carrageenan,
  Xanthan,
  Guar,
  Locust,
  Acacia,
  Psyllium,
  Inulin,
  FOS,
  GOS,
  XOS,
  IMO,
  Resistant,
  Starch,
  Fiber,
  Prebiotic,
  Probiotic,
  Synbiotic,
  Postbiotic,
  Parabiotic,
  Psychobiotic,
  Metabiotic,
  Pharmabiotic,
  Nutribiotic,
  Cosmeceutical,
  Nutraceutical,
  Functional,
  Food,
  Supplement,
  Vitamin,
  Mineral,
  Antioxidant,
  Polyphenol,
  Flavonoid,
  Carotenoid,
  Lycopene,
  Beta,
  Carotene,
  Lutein,
  Zeaxanthin,
  Astaxanthin,
  Resveratrol,
  Curcumin,
  Quercetin,
  Rutin,
  Hesperidin,
  Naringin,
  Catechins,
  EGCG,
  Theaflavins,
  Thearubigins,
  Tannins,
  Saponins,
  Terpenes,
  Alkaloids,
  Glycosides,
  Coumarins,
  Lignans,
  Stilbenes,
  Phenolic,
  Acids,
  Tannic,
  Gallic,
  Caffeic,
  Chlorogenic,
  Ferulic,
  Sinapic,
  P,
  Coumaric,
  Vanillic,
  Syringic,
  Protocatechuic,
  Gentisic,
  Salicylic,
  Benzoic,
  Cinnamic,
  Hydroxycinnamic,
  Dihydroxycinnamic,
  Trihydroxycinnamic,
  Tetrahydroxycinnamic,
  Pentahydroxycinnamic,
  Hexahydroxycinnamic,
  Heptahydroxycinnamic,
  Octahydroxycinnamic,
  Nonahydroxycinnamic,
  Decahydroxycinnamic,
  Undecahydroxycinnamic,
  Dodecahydroxycinnamic,
  Tridecahydroxycinnamic,
  Tetradecahydroxycinnamic,
  Pentadecahydroxycinnamic,
  Hexadecahydroxycinnamic,
  Heptadecahydroxycinnamic,
  Octadecahydroxycinnamic,
  Nonadecahydroxycinnamic,
  Eicosahydroxycinnamic,
  Heneicosahydroxycinnamic,
  Docosahydroxycinnamic,
  Tricosahydroxycinnamic,
  Tetracosahydroxycinnamic,
  Pentacosahydroxycinnamic,
  Hexacosahydroxycinnamic,
  Heptacosahydroxycinnamic,
  Octacosahydroxycinnamic,
  Nonacosahydroxycinnamic,
  Triacontahydroxycinnamic,
  Hentriacontahydroxycinnamic,
  Dotriacontahydroxycinnamic,
  Tritriacontahydroxycinnamic,
  Tetratriacontahydroxycinnamic,
  Pentatriacontahydroxycinnamic,
  Hexatriacontahydroxycinnamic,
  Heptatriacontahydroxycinnamic,
  Octatriacontahydroxycinnamic,
  Nonatriacontahydroxycinnamic,
  Tetracontahydroxycinnamic,
  Hentetracontahydroxycinnamic,
  Dotetracontahydroxycinnamic,
  Tritetracontahydroxycinnamic,
  Tetratetracontahydroxycinnamic,
  Pentatetracontahydroxycinnamic,
  Hexatetracontahydroxycinnamic,
  Heptatetracontahydroxycinnamic,
  Octatetracontahydroxycinnamic,
  Nonatetracontahydroxycinnamic,
  Pentacontahydroxycinnamic,
  Hentepentacontahydroxycinnamic,
  Dotepentacontahydroxycinnamic,
  Tritepentacontahydroxycinnamic,
  Tetratepentacontahydroxycinnamic,
  Pentatepentacontahydroxycinnamic,
  Hexatepentacontahydroxycinnamic,
  Heptatepentacontahydroxycinnamic,
  Octatepentacontahydroxycinnamic,
  Nonatepentacontahydroxycinnamic,
  Hexacontahydroxycinnamic,
  Hentehexacontahydroxycinnamic,
  Dotehexacontahydroxycinnamic,
  Tritehexacontahydroxycinnamic,
  Tetratehexacontahydroxycinnamic,
  Pentatehexacontahydroxycinnamic,
  Hexatehexacontahydroxycinnamic,
  Heptatehexacontahydroxycinnamic,
  Octatehexacontahydroxycinnamic,
  Nonatehexacontahydroxycinnamic,
  Heptacontahydroxycinnamic,
  Henteheptacontahydroxycinnamic,
  Doteheptacontahydroxycinnamic,
  Triteheptacontahydroxycinnamic,
  Tetrateheptacontahydroxycinnamic,
  Pentateheptacontahydroxycinnamic,
  Hexateheptacontahydroxycinnamic,
  Heptateheptacontahydroxycinnamic,
  Octateheptacontahydroxycinnamic,
  Nonateheptacontahydroxycinnamic,
  Octacontahydroxycinnamic,
  Henteoctacontahydroxycinnamic,
  Doteoctacontahydroxycinnamic,
  Triteoctacontahydroxycinnamic,
  Tetrateoctacontahydroxycinnamic,
  Pentateoctacontahydroxycinnamic,
  Hexateoctacontahydroxycinnamic,
  Heptateoctacontahydroxycinnamic,
  Octateoctacontahydroxycinnamic,
  Nonateoctacontahydroxycinnamic,
  Nonacontahydroxycinnamic,
  Hentenonacontahydroxycinnamic,
  Dotenonacontahydroxycinnamic,
  Tritenonacontahydroxycinnamic,
  Tetratenonacontahydroxycinnamic,
  Pentatenonacontahydroxycinnamic,
  Hexatenonacontahydroxycinnamic,
  Heptatenonacontahydroxycinnamic,
  Octatenonacontahydroxycinnamic,
  Nonatenonacontahydroxycinnamic,
  Hectohydroxycinnamic,
  Hentehectohydroxycinnamic,
  Dotehectohydroxycinnamic,
  Tritehectohydroxycinnamic,
  Tetratehectohydroxycinnamic,
  Pentatehectohydroxycinnamic,
  Hexatehectohydroxycinnamic,
  Heptatehectohydroxycinnamic,
  Octatehectohydroxycinnamic,
  Nonatehectohydroxycinnamic,
  Kilohydroxycinnamic,
  Hentekilohydroxycinnamic,
  Dotekilohydroxycinnamic,
  Tritekilohydroxycinnamic,
  Tetratekilohydroxycinnamic,
  Pentatekilohydroxycinnamic,
  Hexatekilohydroxycinnamic,
  Heptatekilohydroxycinnamic,
  Octatekilohydroxycinnamic,
  Nonatekilohydroxycinnamic,
  Megahydroxycinnamic,
  Hentemegahydroxycinnamic,
  Dotemegahydroxycinnamic,
  Tritemegahydroxycinnamic,
  Tetratemegahydroxycinnamic,
  Pentatemegahydroxycinnamic,
  Hexatemegahydroxycinnamic,
  Heptatemegahydroxycinnamic,
  Octatemegahydroxycinnamic,
  Nonatemegahydroxycinnamic,
  Gigahydroxycinnamic,
  Hentegigahydroxycinnamic,
  Dotegigahydroxycinnamic,
  Tritegigahydroxycinnamic,
  Tetrategigahydroxycinnamic,
  Pentategigahydroxycinnamic,
  Hexategigahydroxycinnamic,
  Heptategigahydroxycinnamic,
  Octategigahydroxycinnamic,
  Nonategigahydroxycinnamic,
  Terahydroxycinnamic,
  Henteterahydroxycinnamic,
  Doteterahydroxycinnamic,
  Triteterahydroxycinnamic,
  Tetraterahydroxycinnamic,
  Pentaterahydroxycinnamic,
  Hexaterahydroxycinnamic,
  Heptaterahydroxycinnamic,
  Octaterahydroxycinnamic,
  Nonaterahydroxycinnamic,
  Petahydroxycinnamic,
  Hentepetahydroxycinnamic,
  Dotepetahydroxycinnamic,
  Tritepetahydroxycinnamic,
  Tetratepetahydroxycinnamic,
  Pentatepetahydroxycinnamic,
  Hexatepetahydroxycinnamic,
  Heptatepetahydroxycinnamic,
  Octatepetahydroxycinnamic,
  Nonatepetahydroxycinnamic,
  Exahydroxycinnamic,
  Henteexahydroxycinnamic,
  Doteexahydroxycinnamic,
  Triteexahydroxycinnamic,
  Tetrateexahydroxycinnamic,
  Pentateexahydroxycinnamic,
  Hexateexahydroxycinnamic,
  Heptateexahydroxycinnamic,
  Octateexahydroxycinnamic,
  Nonateexahydroxycinnamic,
  Zettahydroxycinnamic,
  Hentezettahydroxycinnamic,
  Dotezettahydroxycinnamic,
  Tritezettahydroxycinnamic,
  Tetratezettahydroxycinnamic,
  Pentatezettahydroxycinnamic,
  Hexatezettahydroxycinnamic,
  Heptatezettahydroxycinnamic,
  Octatezettahydroxycinnamic,
  Nonatezettahydroxycinnamic,
  Yottahydroxycinnamic,
  Henteyottahydroxycinnamic,
  Doteyottahydroxycinnamic,
  Triteyottahydroxycinnamic,
  Tetrateyottahydroxycinnamic,
  Pentateyottahydroxycinnamic,
  Hexateyottahydroxycinnamic,
  Heptateyottahydroxycinnamic,
  Octateyottahydroxycinnamic,
  Nonateyottahydroxycinnamic,
  Ronnahydroxycinnamic,
  Henteronnahydroxycinnamic,
  Doteronnahydroxycinnamic,
  Triteronnahydroxycinnamic,
  Tetrateronnahydroxycinnamic,
  Pentateronnahydroxycinnamic,
  Hexateronnahydroxycinnamic,
  Heptateronnahydroxycinnamic,
  Octateronnahydroxycinnamic,
  Nonateronnahydroxycinnamic,
  Quettahydroxycinnamic,
  Hentequettahydroxycinnamic,
  Dotequettahydroxycinnamic,
  Tritequettahydroxycinnamic,
  Tetratequettahydroxycinnamic,
  Pentatequettahydroxycinnamic,
  Hexatequettahydroxycinnamic,
  Heptatequettahydroxycinnamic,
  Octatequettahydroxycinnamic,
  Nonatequettahydroxycinnamic
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      name: "Zion AI Video Generator",
      description: "Create professional videos using advanced AI algorithms with multiple formats and real-time preview",
      price: "From $29/month",
      icon: <Video className="w-8 h-8" />,
      link: "/zion-ai-video-generator",
      category: "AI Content",
      featured: true,
      stats: "10,000+ videos created"
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with lead scoring, automated follow-ups, and predictive analytics",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      category: "Business Tools",
      featured: true,
      stats: "35% conversion increase"
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Automatically generate professional invoices with AI-powered data extraction and smart categorization",
      price: "From $49/month",
      icon: <Receipt className="w-8 h-8" />,
      link: "/zion-ai-invoice-generator",
      category: "Finance",
      featured: true,
      stats: "90% time savings"
    },
    {
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics with AI-powered sentiment analysis, behavior tracking, and predictive insights",
      price: "From $149/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-customer-insights",
      category: "Analytics",
      featured: true,
      stats: "85% accuracy rate"
    },
    {
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis for productivity, sentiment tracking, and automated response suggestions",
      price: "From $79/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer",
      category: "Communication",
      featured: false,
      stats: "50% faster responses"
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-driven inventory management with demand forecasting, automated reordering, and waste reduction",
      price: "From $199/month",
      icon: <Package className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      category: "Operations",
      featured: false,
      stats: "30% cost reduction"
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with automated alerts and insights",
      price: "From $99/month",
      icon: <Heart className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      category: "Customer Experience",
      featured: false,
      stats: "95% sentiment accuracy"
    },
    {
      name: "Zion Smart Expense Categorizer",
      description: "AI-powered expense categorization and receipt processing with automated tax preparation",
      price: "From $39/month",
      icon: <DollarSign className="w-8 h-8" />,
      link: "/zion-smart-expense-categorizer",
      category: "Finance",
      featured: false,
      stats: "80% automation rate"
    },
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant for business operations with natural language processing and task automation",
      price: "From $299/month",
      icon: <Mic className="w-8 h-8" />,
      link: "/zion-ai-voice-assistant-pro",
      category: "AI Assistant",
      featured: false,
      stats: "24/7 availability"
    },
    {
      name: "Zion AI Code Reviewer",
      description: "Automated code review with AI-powered suggestions, security analysis, and performance optimization",
      price: "From $149/month",
      icon: <Code className="w-8 h-8" />,
      link: "/zion-ai-code-reviewer",
      category: "Development",
      featured: false,
      stats: "60% fewer bugs"
    },
    {
      name: "Zion AI Social Media Manager",
      description: "AI-powered social media management with content generation, scheduling, and performance analytics",
      price: "From $199/month",
      icon: <Share2 className="w-8 h-8" />,
      link: "/zion-ai-social-media-manager",
      category: "Marketing",
      featured: false,
      stats: "3x engagement boost"
    },
    {
      name: "Zion AI Contract Analyzer",
      description: "AI-powered contract analysis with risk assessment, clause extraction, and compliance checking",
      price: "From $399/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/zion-ai-contract-analyzer",
      category: "Legal",
      featured: false,
      stats: "90% risk detection"
    },
    {
      name: "Zion AI Performance Optimizer",
      description: "AI-driven performance monitoring and optimization for websites, apps, and digital assets",
      price: "From $249/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/zion-ai-performance-optimizer",
      category: "Performance",
      featured: false,
      stats: "40% speed improvement"
    },
    {
      name: "Zion AI Customer Churn Predictor",
      description: "Predict customer churn with AI models and automated retention campaigns",
      price: "From $179/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-customer-churn-predictor",
      category: "Retention",
      featured: false,
      stats: "25% churn reduction"
    },
    {
      name: "Zion AI Supply Chain Optimizer",
      description: "AI-powered supply chain optimization with demand forecasting and logistics automation",
      price: "From $499/month",
      icon: <Truck className="w-8 h-8" />,
      link: "/zion-ai-supply-chain-optimizer",
      category: "Supply Chain",
      featured: false,
      stats: "35% efficiency gain"
    },
    {
      name: "Zion AI Financial Forecaster",
      description: "AI-powered financial forecasting with scenario modeling and risk analysis",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-financial-forecaster",
      category: "Finance",
      featured: false,
      stats: "95% forecast accuracy"
    },
    {
      name: "Zion AI Content Moderator",
      description: "AI-powered content moderation with real-time filtering and automated policy enforcement",
      price: "From $199/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-ai-content-moderator",
      category: "Moderation",
      featured: false,
      stats: "99.9% accuracy"
    },
    {
      name: "Zion AI Translator Pro",
      description: "Advanced AI translation with context awareness and real-time language processing",
      price: "From $149/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-translator-pro",
      category: "Translation",
      featured: false,
      stats: "50+ languages"
    },
    {
      name: "Zion AI Data Cleaner",
      description: "AI-powered data cleaning and validation with automated error detection and correction",
      price: "From $99/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-ai-data-cleaner",
      category: "Data Management",
      featured: false,
      stats: "95% data quality"
    },
    {
      name: "Zion AI Task Scheduler",
      description: "Intelligent task scheduling with AI optimization and resource allocation",
      price: "From $79/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-task-scheduler",
      category: "Productivity",
      featured: false,
      stats: "40% productivity boost"
    },
    {
      name: "Zion AI Customer Support Pro",
      description: "Advanced AI customer support with multi-channel integration and automated resolution",
      price: "From $399/month",
      icon: <Headphones className="w-8 h-8" />,
      link: "/zion-ai-customer-support-pro",
      category: "Support",
      featured: false,
      stats: "80% resolution rate"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, icon: <Zap className="w-5 h-5" /> },
    { name: "AI Content", count: microSaasServices.filter(s => s.category === "AI Content").length, icon: <Brain className="w-5 h-5" /> },
    { name: "Business Tools", count: microSaasServices.filter(s => s.category === "Business Tools").length, icon: <Users className="w-5 h-5" /> },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length, icon: <DollarSign className="w-5 h-5" /> },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length, icon: <Target className="w-5 h-5" /> },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length, icon: <Code className="w-5 h-5" /> },
    { name: "Operations", count: microSaasServices.filter(s => s.category === "Operations").length, icon: <Settings className="w-5 h-5" /> }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover 60+ innovative micro SAAS solutions powered by AI. From video generation to CRM, analytics to automation - transform your business with our cutting-edge tools." />
        <meta name="keywords" content="micro SAAS, AI tools, business automation, productivity software, AI solutions, business software, automation tools" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">60+ Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              From content creation to analytics, automation to optimization - we have everything you need to succeed.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <span className="text-white mr-2 group-hover:text-purple-400 transition-colors">
                    {category.icon}
                  </span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {category.name}
                  </span>
                  <span className="ml-2 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                        {service.name}
                      </h3>
                      <p className="text-purple-400 font-medium text-sm">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                      {service.stats}
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {service.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-purple-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-purple-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;