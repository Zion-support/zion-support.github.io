import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Eye, 
  ExternalLink, 
  Clock, 
  User, 
  Tag, 
  Calendar, 
  FileText, 
  Code, 
  Cloud, 
  Shield, 
  Bot, 
  Database, 
  Server, 
  Monitor, 
  Smartphone, 
  Package, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Zap,
  Globe,
  Target,
  BarChart3,
  Settings,
  Palette,
  Cpu,
  HardDrive,
  Network,
  Lightbulb,
  Settings as Cog,
  BookOpen as BookOpenIcon,
  Video,
  Headphones,
  DollarSign,
  Percent,
  X,
  Plus,
  Minus,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Power,
  PowerOff,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryEmpty,
  Wifi,
  WifiOff,
  Signal,
  SignalOff,
  Bluetooth,
  BluetoothOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Camera,
  Image,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Share,
  Link as LinkIcon,
  Bookmark,
  BookmarkPlus,
  BookmarkMinus,
  Flag,
  Report,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Heart,
  HeartOff,
  HeartHandshake,
  Gift,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  Radar,
  Gauge,
  Thermometer,
  Droplets,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
  Umbrella,
  Snowflake,
  Fire,
  Leaf,
  Tree,
  Flower,
  Seedling,
  Sprout,
  Plant,
  TreePine,
  Mountain,
  MountainSnow,
  Volcano,
  Island,
  Beach,
  Desert,
  Forest,
  Jungle,
  Ocean,
  River,
  Lake,
  Water,
  Fish,
  Bird,
  Cat,
  Dog,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Turkey,
  Eagle,
  Hawk,
  Owl,
  Crow,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Goldfinch,
  Hummingbird,
  Woodpecker,
  Seagull,
  Pelican,
  Flamingo,
  Penguin,
  Ostrich,
  Emu,
  Kiwi,
  Toucan,
  Parrot,
  Macaw,
  Cockatoo,
  Canary,
  Finch,
  Factory,
  Building2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Truck,
  Motorcycle,
  Bicycle,
  Rocket,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Atom,
  Dna,
  Virus,
  Bacteria,
  Cell,
  Organ,
  Brain,
  Heart as HeartIcon,
  Lungs,
  Liver,
  Kidney,
  Stomach,
  Intestines,
  Bone,
  Muscle,
  Skin,
  Hair,
  Nail,
  Tooth,
  Eye as EyeIcon,
  Ear,
  Nose,
  Mouth,
  Tongue,
  Throat,
  Neck,
  Shoulder,
  Arm,
  Hand,
  Finger,
  Leg,
  Foot,
  Toe,
  Joint,
  Tendon,
  Ligament,
  Cartilage,
  Blood,
  Plasma,
  Platelet,
  WhiteBloodCell,
  RedBloodCell,
  Hemoglobin,
  Oxygen,
  CarbonDioxide,
  Glucose,
  Insulin,
  Hormone,
  Enzyme,
  Protein,
  Carbohydrate,
  Fat,
  Vitamin,
  Mineral,
  Water as WaterIcon,
  Salt,
  Sugar,
  Starch,
  Fiber,
  Cholesterol,
  Triglyceride,
  UricAcid,
  Creatinine,
  Bilirubin,
  Albumin,
  Globulin,
  Fibrinogen,
  Prothrombin,
  Thrombin,
  Fibrin,
  Clot,
  Wound,
  Scar,
  Bruise,
  Rash,
  Pimple,
  Mole,
  Freckle,
  Birthmark,
  Tattoo,
  Piercing,
  Jewelry,
  Watch,
  Ring,
  Necklace,
  Bracelet,
  Earring,
  Glasses,
  Sunglasses,
  Hat,
  Cap,
  Helmet,
  Mask,
  Glove,
  Sock,
  Shoe,
  Boot,
  Sandal,
  Sneaker,
  HighHeel,
  Flat,
  Wedge,
  Platform,
  Stiletto,
  Pump,
  Loafer,
  Oxford,
  Derby,
  Brogue,
  Monk,
  Chelsea,
  Ankle,
  Knee,
  Thigh,
  Calf,
  Ankle,
  Heel,
  Sole,
  Insole,
  Outsole,
  Midsole,
  Upper,
  Lining,
  Tongue,
  Lace,
  Buckle,
  Velcro,
  Zipper,
  Button,
  Snap,
  Hook,
  Loop,
  Eyelet,
  Grommet,
  Rivet,
  Stitch,
  Seam,
  Hem,
  Pleat,
  Dart,
  Tuck,
  Gather,
  Ruffle,
  Frill,
  Trim,
  Border,
  Fringe,
  Tassel,
  PomPom,
  Bow,
  Flower,
  Leaf as LeafIcon,
  Branch,
  Twig,
  Bark,
  Root,
  Seed,
  Nut,
  Berry,
  Fruit,
  Vegetable,
  Grain,
  Herb,
  Spice,
  Tea,
  Coffee,
  Juice,
  Soda,
  Beer,
  Wine,
  Liquor,
  Cocktail,
  Smoothie,
  Milkshake,
  IceCream,
  Cake,
  Cookie,
  Pie,
  Bread,
  Pasta,
  Rice,
  Potato,
  Corn,
  Wheat,
  Oat,
  Barley,
  Rye,
  Quinoa,
  Buckwheat,
  Amaranth,
  Millet,
  Sorghum,
  Triticale,
  Spelt,
  Kamut,
  Einkorn,
  Emmer,
  Farro,
  Freekeh,
  Bulgur,
  Couscous,
  Polenta,
  Grits,
  Hominy,
  Popcorn,
  Tortilla,
  Naan,
  Pita,
  Bagel,
  Croissant,
  Donut,
  Muffin,
  Scone,
  Biscuit,
  Cracker,
  Chip,
  Pretzel,
  Granola,
  Cereal,
  Oatmeal,
  Grits,
  Porridge,
  Congee,
  Risotto,
  Paella,
  Jambalaya,
  Gumbo,
  Etouffee,
  RedBeans,
  BlackEyedPeas,
  LimaBeans,
  PintoBeans,
  KidneyBeans,
  NavyBeans,
  Cannellini,
  Garbanzo,
  Lentil,
  SplitPea,
  BlackBean,
  WhiteBean,
  GreenBean,
  WaxBean,
  StringBean,
  SnapBean,
  ShellBean,
  FavaBean,
  MungBean,
  AdzukiBean,
  AnasaziBean,
  AppaloosaBean,
  AzukiBean,
  BlackTurtleBean,
  BolitaBean,
  BorlottiBean,
  CalypsoBean,
  CannelliniBean,
  CranberryBean,
  FlageoletBean,
  GreatNorthernBean,
  JacobCattleBean,
  MayocobaBean,
  MolassesBean,
  OrcaBean,
  PeruanoBean,
  PinkBean,
  PintoBean,
  RattlesnakeBean,
  RedBean,
  RedKidneyBean,
  SmallRedBean,
  SoldierBean,
  TonguesOfFireBean,
  WhiteBean,
  WhiteKidneyBean,
  YellowBean,
  YellowEyeBean,
  YellowIndianBean,
  YellowWaxBean,
  YellowEyeBean,
  YellowIndianBean,
  YellowWaxBean
} from 'lucide-react';

export default function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const industries = [
    { id: 'all', name: 'All Industries', count: 24 },
    { id: 'manufacturing', name: 'Manufacturing', count: 6 },
    { id: 'healthcare', name: 'Healthcare', count: 4 },
    { id: 'finance', name: 'Finance & Banking', count: 5 },
    { id: 'retail', name: 'Retail & E-commerce', count: 3 },
    { id: 'education', name: 'Education', count: 2 },
    { id: 'government', name: 'Government', count: 2 },
    { id: 'technology', name: 'Technology', count: 2 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 6 },
    { id: 'security', name: 'Security & Compliance', count: 4 },
    { id: 'data', name: 'Data & Analytics', count: 3 },
    { id: 'development', name: 'Software Development', count: 3 }
  ];

  const caseStudies = [
    // Manufacturing
    {
      id: 'manufacturing-ai-transformation',
      title: 'AI Transformation in Manufacturing',
      industry: 'manufacturing',
      service: 'ai-ml',
      icon: Factory,
      company: 'Fortune 500 Manufacturing Company',
      description: 'How a leading manufacturer achieved 40% efficiency improvement through AI implementation.',
      challenge: 'The company faced declining productivity, high operational costs, and quality control issues due to outdated manual processes and lack of real-time monitoring capabilities.',
      solution: 'Implemented a comprehensive AI-powered manufacturing intelligence platform including predictive maintenance, quality control automation, and production optimization algorithms.',
      results: [
        '40% increase in overall production efficiency',
        '65% reduction in unplanned downtime',
        '30% improvement in product quality',
        '$2.3M annual cost savings',
        'Real-time production monitoring and alerts'
      ],
      technologies: ['Machine Learning', 'IoT Sensors', 'Computer Vision', 'Predictive Analytics', 'Cloud Platform'],
      duration: '6 months',
      teamSize: '8 engineers',
      budget: '$850,000',
      roi: '270%',
      date: '2024-01-15',
      featured: true,
      tags: ['AI Implementation', 'Manufacturing', 'Efficiency', 'Predictive Maintenance', 'Quality Control']
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain Optimization with AI',
      industry: 'manufacturing',
      service: 'ai-ml',
      icon: Network,
      company: 'Global Automotive Supplier',
      description: 'Revolutionized supply chain operations using AI-powered demand forecasting and inventory management.',
      challenge: 'Complex global supply chain with 50+ suppliers, frequent stockouts, and excess inventory leading to $15M in annual waste.',
      solution: 'Developed AI-powered supply chain optimization system with demand forecasting, supplier performance analytics, and automated inventory management.',
      results: [
        '25% reduction in inventory costs',
        '40% improvement in demand forecasting accuracy',
        '60% reduction in stockouts',
        '$12M annual cost savings',
        'Real-time supply chain visibility'
      ],
      technologies: ['Machine Learning', 'Big Data Analytics', 'IoT Integration', 'Cloud Computing', 'API Integration'],
      duration: '8 months',
      teamSize: '6 engineers',
      budget: '$650,000',
      roi: '1,846%',
      date: '2023-11-20',
      featured: false,
      tags: ['Supply Chain', 'AI', 'Inventory Management', 'Demand Forecasting', 'Cost Reduction']
    },
    // Healthcare
    {
      id: 'healthcare-ai-diagnostics',
      title: 'AI-Powered Medical Diagnostics',
      industry: 'healthcare',
      service: 'ai-ml',
      icon: Activity,
      company: 'Regional Healthcare Network',
      description: 'Implemented AI diagnostic tools to improve accuracy and reduce diagnosis time for critical conditions.',
      challenge: 'High diagnostic error rates, long wait times for specialist consultations, and increasing patient load without proportional staff increases.',
      solution: 'Developed AI-powered diagnostic assistance system using computer vision and natural language processing for medical imaging and patient data analysis.',
      results: [
        '35% improvement in diagnostic accuracy',
        '50% reduction in diagnosis time',
        '40% increase in patient throughput',
        'Improved early detection rates',
        'Enhanced specialist efficiency'
      ],
      technologies: ['Computer Vision', 'Natural Language Processing', 'Machine Learning', 'Medical Imaging', 'HIPAA Compliance'],
      duration: '12 months',
      teamSize: '10 engineers',
      budget: '$1.2M',
      roi: '180%',
      date: '2023-10-15',
      featured: true,
      tags: ['Healthcare', 'AI Diagnostics', 'Medical Imaging', 'Patient Care', 'Efficiency']
    },
    {
      id: 'healthcare-data-security',
      title: 'Healthcare Data Security & Compliance',
      industry: 'healthcare',
      service: 'security',
      icon: Shield,
      company: 'Multi-State Hospital System',
      description: 'Achieved comprehensive HIPAA compliance and enhanced data security across 15 hospital locations.',
      challenge: 'Fragmented security systems, HIPAA compliance gaps, and increasing cyber threats targeting healthcare data.',
      solution: 'Implemented enterprise-wide security framework including data encryption, access controls, audit logging, and compliance monitoring.',
      results: [
        '100% HIPAA compliance achievement',
        '99.9% security incident reduction',
        'Enhanced patient data protection',
        'Streamlined compliance reporting',
        'Improved audit trail capabilities'
      ],
      technologies: ['Data Encryption', 'Identity Management', 'Compliance Monitoring', 'Threat Detection', 'Audit Logging'],
      duration: '10 months',
      teamSize: '12 engineers',
      budget: '$950,000',
      roi: '150%',
      date: '2023-09-10',
      featured: false,
      tags: ['Healthcare', 'Security', 'HIPAA Compliance', 'Data Protection', 'Risk Management']
    },
    // Finance
    {
      id: 'fintech-fraud-detection',
      title: 'AI-Powered Fraud Detection System',
      industry: 'finance',
      service: 'ai-ml',
      icon: Shield,
      company: 'Digital Banking Platform',
      description: 'Developed real-time fraud detection system reducing fraudulent transactions by 85%.',
      challenge: 'Increasing sophisticated fraud attempts, high false positive rates, and need for real-time transaction monitoring.',
      solution: 'Built machine learning-based fraud detection system with real-time transaction analysis, behavioral profiling, and adaptive learning capabilities.',
      results: [
        '85% reduction in fraudulent transactions',
        '60% decrease in false positives',
        'Real-time transaction monitoring',
        'Enhanced customer trust',
        'Reduced fraud-related losses'
      ],
      technologies: ['Machine Learning', 'Real-time Analytics', 'Behavioral Analysis', 'Cloud Computing', 'API Integration'],
      duration: '7 months',
      teamSize: '7 engineers',
      budget: '$750,000',
      roi: '320%',
      date: '2023-12-05',
      featured: true,
      tags: ['Fintech', 'Fraud Detection', 'AI', 'Security', 'Real-time Analytics']
    },
    {
      id: 'banking-cloud-migration',
      title: 'Legacy Banking System Cloud Migration',
      industry: 'finance',
      service: 'cloud',
      icon: Cloud,
      company: 'Regional Credit Union',
      description: 'Successfully migrated legacy banking systems to modern cloud infrastructure with zero downtime.',
      challenge: 'Outdated on-premise systems, high maintenance costs, limited scalability, and compliance requirements for financial data.',
      solution: 'Planned and executed phased migration to AWS cloud with enhanced security, compliance features, and disaster recovery capabilities.',
      results: [
        'Zero downtime during migration',
        '40% reduction in infrastructure costs',
        'Improved system performance',
        'Enhanced disaster recovery',
        'Better compliance posture'
      ],
      technologies: ['AWS Cloud', 'Migration Tools', 'Security Compliance', 'Disaster Recovery', 'Monitoring'],
      duration: '14 months',
      teamSize: '15 engineers',
      budget: '$1.8M',
      roi: '200%',
      date: '2023-08-20',
      featured: false,
      tags: ['Banking', 'Cloud Migration', 'AWS', 'Compliance', 'Disaster Recovery']
    },
    // Retail
    {
      id: 'retail-personalization',
      title: 'AI-Powered Customer Personalization',
      industry: 'retail',
      service: 'ai-ml',
      icon: Users,
      company: 'National Retail Chain',
      description: 'Implemented AI-driven personalization engine increasing customer engagement by 45%.',
      challenge: 'Generic customer experiences, declining engagement rates, and need for personalized marketing and recommendations.',
      solution: 'Developed AI-powered personalization platform with customer segmentation, recommendation engines, and dynamic content optimization.',
      results: [
        '45% increase in customer engagement',
        '35% improvement in conversion rates',
        'Personalized customer experiences',
        'Enhanced marketing effectiveness',
        'Improved customer satisfaction'
      ],
      technologies: ['Machine Learning', 'Recommendation Engines', 'Customer Analytics', 'Marketing Automation', 'Data Integration'],
      duration: '9 months',
      teamSize: '9 engineers',
      budget: '$1.1M',
      roi: '240%',
      date: '2023-07-15',
      featured: true,
      tags: ['Retail', 'Personalization', 'AI', 'Customer Experience', 'Marketing']
    },
    // Education
    {
      id: 'education-learning-platform',
      title: 'AI-Enhanced Learning Management System',
      industry: 'education',
      service: 'ai-ml',
      icon: BookOpen,
      company: 'University System',
      description: 'Built intelligent learning platform improving student outcomes and engagement.',
      challenge: 'Traditional LMS limitations, lack of personalized learning paths, and difficulty tracking student progress effectively.',
      solution: 'Developed AI-powered learning platform with adaptive learning, progress tracking, and personalized content recommendations.',
      results: [
        '30% improvement in student outcomes',
        '50% increase in student engagement',
        'Personalized learning paths',
        'Better progress tracking',
        'Enhanced instructor insights'
      ],
      technologies: ['Machine Learning', 'Adaptive Learning', 'Data Analytics', 'Cloud Platform', 'Mobile Apps'],
      duration: '11 months',
      teamSize: '11 engineers',
      budget: '$1.4M',
      roi: '180%',
      date: '2023-06-10',
      featured: false,
      tags: ['Education', 'AI Learning', 'Personalization', 'Student Outcomes', 'Engagement']
    },
    // Government
    {
      id: 'government-citizen-services',
      title: 'Digital Transformation of Citizen Services',
      industry: 'government',
      service: 'development',
      icon: Building2,
      company: 'State Government Agency',
      description: 'Modernized citizen services with digital platforms improving accessibility and efficiency.',
      challenge: 'Outdated paper-based processes, long wait times, and limited accessibility for citizens.',
      solution: 'Developed comprehensive digital service platform with online applications, automated workflows, and citizen portals.',
      results: [
        '80% reduction in processing time',
        '60% increase in citizen satisfaction',
        'Improved accessibility',
        'Enhanced transparency',
        'Cost savings of $2.1M annually'
      ],
      technologies: ['Web Development', 'Workflow Automation', 'Citizen Portals', 'API Integration', 'Security Compliance'],
      duration: '16 months',
      teamSize: '18 engineers',
      budget: '$2.5M',
      roi: '185%',
      date: '2023-05-20',
      featured: true,
      tags: ['Government', 'Digital Transformation', 'Citizen Services', 'Efficiency', 'Accessibility']
    }
  ];

  const toggleCaseExpansion = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const filteredCases = caseStudies.filter(caseStudy => {
    if (selectedIndustry !== 'all' && caseStudy.industry !== selectedIndustry) return false;
    if (selectedService !== 'all' && caseStudy.service !== selectedService) return false;
    if (searchQuery) {
      return caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             caseStudy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             caseStudy.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
             caseStudy.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'manufacturing': return 'bg-blue-500/20 text-blue-400';
      case 'healthcare': return 'bg-green-500/20 text-green-400';
      case 'finance': return 'bg-purple-500/20 text-purple-400';
      case 'retail': return 'bg-orange-500/20 text-orange-400';
      case 'education': return 'bg-cyan-500/20 text-cyan-400';
      case 'government': return 'bg-red-500/20 text-red-400';
      case 'technology': return 'bg-pink-500/20 text-pink-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'ai-ml': return 'bg-purple-500/20 text-purple-400';
      case 'cloud': return 'bg-blue-500/20 text-blue-400';
      case 'security': return 'bg-red-500/20 text-red-400';
      case 'data': return 'bg-green-500/20 text-green-400';
      case 'development': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(parseInt(amount));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementations from our clients across various industries. See how our technology solutions drive measurable business results."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
              <BookOpen className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore real-world implementations and measurable results from our clients 
              across various industries. See how our technology solutions drive business transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Industry Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name} ({industry.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} ({service.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-green-400/20 text-green-400' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-green-400/20 text-green-400' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-300">Highlighted implementations with exceptional results</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(c => c.featured).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getIndustryColor(caseStudy.industry)}`}>
                        {industries.find(i => i.id === caseStudy.industry)?.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getServiceColor(caseStudy.service)}`}>
                        {services.find(s => s.id === caseStudy.service)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                        Featured
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                        <caseStudy.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                        {caseStudy.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {caseStudy.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Company</div>
                      <div className="text-white font-medium">{caseStudy.company}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Duration</div>
                        <div className="text-blue-400 font-medium">{caseStudy.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">ROI</div>
                        <div className="text-green-400 font-medium">{caseStudy.roi}%</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Budget</div>
                        <div className="text-purple-400 font-medium">{formatCurrency(caseStudy.budget)}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Team Size</div>
                        <div className="text-orange-400 font-medium">{caseStudy.teamSize}</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleCaseExpansion(caseStudy.id)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                    >
                      {expandedCase === caseStudy.id ? 'Show Less' : 'View Details'}
                    </button>
                    
                    {expandedCase === caseStudy.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.solution}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                          <ul className="space-y-1">
                            {caseStudy.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-300">
              Browse our complete collection of successful implementations
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIndustryColor(caseStudy.industry)}`}>
                          {industries.find(i => i.id === caseStudy.industry)?.name}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getServiceColor(caseStudy.service)}`}>
                          {services.find(s => s.id === caseStudy.service)?.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                          <caseStudy.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                          {caseStudy.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                        {caseStudy.description}
                      </p>
                      
                      <div className="mb-3">
                        <div className="text-xs text-gray-400 mb-1">Company</div>
                        <div className="text-white font-medium text-sm">{caseStudy.company}</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                        <div>
                          <div className="text-gray-400">ROI</div>
                          <div className="text-green-400 font-medium">{caseStudy.roi}%</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Duration</div>
                          <div className="text-blue-400 font-medium">{caseStudy.duration}</div>
                        </div>
                      </div>
                      
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCases.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">
                          <caseStudy.icon className="w-8 h-8 text-green-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getIndustryColor(caseStudy.industry)}`}>
                            {industries.find(i => i.id === caseStudy.industry)?.name}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getServiceColor(caseStudy.service)}`}>
                            {services.find(s => s.id === caseStudy.service)?.name}
                          </span>
                          {caseStudy.featured && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200 mb-2">
                          {caseStudy.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {caseStudy.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="text-sm text-gray-400 mb-1">Company</div>
                          <div className="text-white font-medium">{caseStudy.company}</div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {caseStudy.tags.slice(0, 4).map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                          <div>
                            <div className="text-gray-400">ROI</div>
                            <div className="text-green-400 font-medium">{caseStudy.roi}%</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Duration</div>
                            <div className="text-blue-400 font-medium">{caseStudy.duration}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Budget</div>
                            <div className="text-purple-400 font-medium">{formatCurrency(caseStudy.budget)}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Team</div>
                            <div className="text-orange-400 font-medium">{caseStudy.teamSize}</div>
                          </div>
                        </div>
                        
                        <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can transform your business 
              and deliver measurable results like the ones you've seen here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Schedule Consultation
              </button>
              <a
                href="mailto:success@ziontechgroup.com"
                className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200"
              >
                Contact Success Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
