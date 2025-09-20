import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import { Link   } from "react-router-dom";
import {
  Users;
  Search,
  Filter,
  Grid,
  List,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Briefcase;
  GraduationCap;
  Award;
  CheckCircle;
  ArrowRight;
  ChevronDown;
  ChevronUp;
  Zap;
  Globe;
  Target;
  BarChart3;
  Settings;
  Palette;
  Cpu;
  HardDrive;
  Network;
  Lightbulb;
  BookOpen;
  Video;
  Headphones;
  Percent;
  X;
  Plus;
  Minus;
  RefreshCw;
  RotateCcw;
  Maximize2;
  Minimize2;
  Volume2;
  VolumeX;
  Power;
  PowerOff;
  Battery;
  BatteryCharging;
  BatteryFull;
  BatteryLow;
  BatteryMedium;
  BatteryEmpty;
  Wifi;
  WifiOff;
  Signal;
  SignalOff;
  Bluetooth;
  BluetoothOff;
  Lock;
  Unlock;
  Key;
  Fingerprint;
  QrCode;
  Barcode;
  Camera;
  Image;
  File;
  Folder;
  Archive;
  Trash2;
  Edit;
  Copy;
  Share;
  Link as LinkIcon;
  Bookmark;
  BookmarkPlus;
  BookmarkMinus;
  Flag;
  Report;
  ThumbsUp;
  ThumbsDown;
  Smile;
  Frown;
  Meh;
  Heart;
  HeartOff;
  HeartHandshake;
  Gift;
  CreditCard;
  Wallet;
  Receipt;
  Calculator;
  TrendingDown;
  Activity;
  PieChart;
  LineChart;
  BarChart;
  ScatterChart;
  Radar;
  Gauge;
  Thermometer;
  Droplets;
  Sun;
  Moon;
  Cloud as CloudIcon;
  CloudRain;
  CloudLightning;
  CloudSnow;
  Wind;
  Umbrella;
  Snowflake;
  Fire;
  Leaf;
  Tree;
  Flower;
  Seedling;
  Sprout;
  Plant;
  TreePine;
  Mountain;
  MountainSnow;
  Volcano;
  Island;
  Beach;
  Desert;
  Forest;
  Jungle;
  Ocean;
  River;
  Lake;
  Water;
  Fish;
  Bird;
  Cat;
  Dog;
  Horse;
  Cow;
  Pig;
  Sheep;
  Goat;
  Chicken;
  Duck;
  Turkey;
  Eagle;
  Hawk;
  Owl;
  Crow;
  Sparrow;
  Robin;
  Bluebird;
  Cardinal;
  Goldfinch;
  Hummingbird;
  Woodpecker;
  Seagull;
  Pelican;
  Flamingo;
  Penguin;
  Ostrich;
  Emu;
  Kiwi;
  Toucan;
  Parrot;
  Macaw;
  Cockatoo;
  Canary;
  Finch;
  Factory;
  Building2;
  Car;
  Plane;
  Ship;
  Train;
  Bus;
  Truck;
  Motorcycle;
  Bicycle;
  Rocket;
  Satellite;
  Telescope;
  Microscope;
  Flask;
  TestTube;
  Beaker;
  Atom;
  Dna;
  Virus;
  Bacteria;
  Cell;
  Organ;
  Brain;
  Heart as HeartIcon;
  Lungs;
  Liver;
  Kidney;
  Stomach;
  Intestines;
  Bone;
  Muscle;
  Skin;
  Hair;
  Nail;
  Tooth;
  Eye as EyeIcon;
  Ear;
  Nose;
  Mouth;
  Tongue;
  Throat;
  Neck;
  Shoulder;
  Arm;
  Hand;
  Finger;
  Leg;
  Foot;
  Toe;
  Joint;
  Tendon;
  Ligament;
  Cartilage;
  Blood;
  Plasma;
  Platelet;
  WhiteBloodCell;
  RedBloodCell;
  Hemoglobin;
  Oxygen;
  CarbonDioxide;
  Glucose;
  Insulin;
  Hormone;
  Enzyme;
  Protein;
  Carbohydrate;
  Fat;
  Vitamin;
  Mineral;
  Water as WaterIcon;
  Salt;
  Sugar;
  Starch;
  Fiber;
  Cholesterol;
  Triglyceride;
  UricAcid;
  Creatinine;
  Bilirubin;
  Albumin;
  Globulin;
  Fibrinogen;
  Prothrombin;
  Thrombin;
  Fibrin;
  Clot;
  Wound;
  Scar;
  Bruise;
  Rash;
  Pimple;
  Mole;
  Freckle;
  Birthmark;
  Tattoo;
  Piercing;
  Jewelry;
  Watch;
  Ring;
  Necklace;
  Bracelet;
  Earring;
  Glasses;
  Sunglasses;
  Hat;
  Cap;
  Helmet;
  Mask;
  Glove;
  Sock;
  Shoe;
  Boot;
  Sandal;
  Sneaker;
  HighHeel;
  Flat;
  Wedge;
  Platform;
  Stiletto;
  Pump;
  Loafer;
  Oxford;
  Derby;
  Brogue;
  Monk;
  Chelsea;
  Ankle;
  Knee;
  Thigh;
  Calf;
  Ankle;
  Heel;
  Sole;
  Insole;
  Outsole;
  Midsole;
  Upper;
  Lining;
  Tongue;
  Lace;
  Buckle;
  Velcro;
  Zipper;
  Button;
  Snap;
  Hook;
  Loop;
  Eyelet;
  Grommet;
  Rivet;
  Stitch;
  Seam;
  Hem;
  Pleat;
  Dart;
  Tuck;
  Gather;
  Ruffle;
  Frill;
  Trim;
  Border;
  Fringe;
  Tassel;
  PomPom;
  Bow;
  Flower;
  Leaf as LeafIcon;
  Branch;
  Twig;
  Bark;
  Root;
  Seed;
  Nut;
  Berry;
  Fruit;
  Vegetable;
  Grain;
  Herb;
  Spice;
  Tea;
  Coffee;
  Juice;
  Soda;
  Beer;
  Wine;
  Liquor;
  Cocktail;
  Smoothie;
  Milkshake;
  IceCream;
  Cake;
  Cookie;
  Pie;
  Bread;
  Pasta;
  Rice;
  Potato;
  Corn;
  Wheat;
  Oat;
  Barley;
  Rye;
  Quinoa;
  Buckwheat;
  Amaranth;
  Millet;
  Sorghum;
  Triticale;
  Spelt;
  Kamut;
  Einkorn;
  Emmer;
  Farro;
  Freekeh;
  Bulgur;
  Couscous;
  Polenta;
  Grits;
  Hominy;
  Popcorn;
  Tortilla;
  Naan;
  Pita;
  Bagel;
  Croissant;
  Donut;
  Muffin;
  Scone;
  Biscuit;
  Cracker;
  Chip;
  Pretzel;
  Granola;
  Cereal;
  Oatmeal;
  Grits;
  Porridge;
  Congee;
  Risotto;
  Paella;
  Jambalaya;
  Gumbo;
  Etouffee;
  RedBeans;
  BlackEyedPeas;
  LimaBeans;
  PintoBeans;
  KidneyBeans;
  NavyBeans;
  Cannellini;
  Garbanzo;
  Lentil;
  SplitPea;
  BlackBean;
  WhiteBean;
  GreenBean;
  WaxBean;
  StringBean;
  SnapBean;
  ShellBean;
  FavaBean;
  MungBean;
  AdzukiBean;
  AnasaziBean;
  AppaloosaBean;
  AzukiBean;
  BlackTurtleBean;
  BolitaBean;
  BorlottiBean;
  CalypsoBean;
  CannelliniBean;
  CranberryBean;
  FlageoletBean;
  GreatNorthernBean;
  JacobCattleBean;
  MayocobaBean;
  MolassesBean;
  OrcaBean;
  PeruanoBean;
  PinkBean;
  PintoBean;
  RattlesnakeBean;
  RedBean;
  RedKidneyBean;
  SmallRedBean;
  SoldierBean;
  TonguesOfFireBean;
  WhiteBean;
  WhiteKidneyBean;
  YellowBean;
  YellowEyeBean;
  YellowIndianBean;
  YellowWaxBean;
  YellowEyeBean;
  YellowIndianBean;
  YellowWaxBean;
}
}
 } from "lucide-react";
export default function Talent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [expandedTalent, setExpandedTalent] = useState<string | null>(null)
  const categories = [
  { id: 'all', na,
  m: e: 'All Categories', cou,
  n: t: 45 },
  },
  { id: 'ai-ml', na,
  m: e: 'AI & Machine Learning', cou,
  n: t: 12 },
  },
  { id: 'cloud', na,
  m: e: 'Cloud & DevOps', cou,
  n: t: 8 },
  },
  { id: 'security', na,
  m: e: 'Security & Compliance', cou,
  n: t: 6 },
  },
  { id: 'data', na,
  m: e: 'Data & Analytics', cou,
  n: t: 7 },
  },
  { id: 'development', na,
  m: e: 'Software Development', cou,
  n: t: 12 },
  },
  ]
  const experienceLevels = [
  { id: 'all', na,
  m: e: 'All Levels', cou,
  n: t: 45 },
  },
  { id: 'junior', na,
  m: e: 'Junior (0-2 years)', cou,
  n: t: 15 },
  },
  { id: 'mid', na,
  m: e: 'Mid-Level (3-5 years)', cou,
  n: t: 18 },
  },
  { id: 'senior', na,
  m: e: 'Senior (6-10 years)', cou,
  n: t: 8 },
  },
  { id: 'lead', na,
  m: e: 'Lead/Architect (10+ years)', cou,
  n: t: 4 },
  },
  ]
  const talentPool = [
  // AI & ML;
    {
  id: 'ai-engineer-senior',na,
  m: e: 'Dr. Sarah Chen',tit,
  l: e: 'Senior AI Engineer',catego,
  r: y: 'ai-ml',experien,
  c: e: 'senior',avat,
  a: r: 'http,
  s://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',locati,
  o: n: 'San Francisco, CA'
      ra,
  t: e: '$120-150/hr',availabili,
  t: y: 'Available',skil,
  l: s: ['Machine LearningDeep Learning', 'PythonTensorFlow', 'PyTorchNLP', 'Computer Vision']
      b,
  i: o: 'PhD in Computer Science with 8+ years of experience in AI/ML. Led teams developing production ML systems for Fortune 500 companies.',certificatio,
  n: s: ['AWS Machine Learning SpecialtyGoogle Cloud ML Engineer', 'Microsoft Azure AI Engineer']
      projec,
  t: s: ['Fraud Detection SystemRecommendation Engine', 'Computer Vision Platform']
      rati,
  n: g: 4.9,revie,
  w: s: 23,featur,
  e: d: true;
},
  {
  id: 'ml-engineer-mid',na,
  m: e: 'Alex Rodriguez',tit,
  l: e: 'ML Engineer',catego,
  r: y: 'ai-ml',experien,
  c: e: 'mid',avat,
  a: r: 'http,
  s://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',locati,
  o: n: 'Austin, TX'
      ra,
  t: e: '$80-100/hr',availabili,
  t: y: 'Available',skil,
  l: s: ['Machine LearningPython', 'Scikit-learnData Engineering', 'SQLAWS', 'Docker']
      b,
  i: o: 'Experienced ML engineer with strong background in data engineering and production ML systems.',certificatio,
  n: s: ['AWS Solutions ArchitectGoogle Cloud Professional Data Engineer'],projec,
  t: s: ['Customer Segmentation ModelPredictive Analytics Platform', 'Data Pipeline Optimization']
      rati,
  n: g: 4.7,revie,
  w: s: 18,featur,
  e: d: false;
}
    // Cloud & DevOps;
    {
  id: 'devops-architect',na,
  m: e: 'Michael Thompson',tit,
  l: e: 'DevOps Architect',catego,
  r: y: 'cloud',experien,
  c: e: 'lead',avat,
  a: r: 'http,
  s://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',locati,
  o: n: 'Seattle, WA'
      ra,
  t: e: '$140-180/hr',availabili,
  t: y: 'Available',skil,
  l: s: ['AWSKubernetes', 'DockerTerraform', 'JenkinsGitLab CI/CD', 'Monitoring']
      b,
  i: o: '15+ years of experience designing and implementing cloud-native architectures and CI/CD pipelines.',certificatio,
  n: s: ['AWS Solutions Architect ProfessionalKubernetes Administrator', 'Terraform Associate']
      projec,
  t: s: ['Multi-cloud MigrationMicroservices Architecture', 'DevOps Transformation']
      rati,
  n: g: 4.9,revie,
  w: s: 31,featur,
  e: d: true;
}
    // Security;
    {
  id: 'security-engineer',na,
  m: e: 'Jennifer Park',tit,
  l: e: 'Security Engineer',catego,
  r: y: 'security',experien,
  c: e: 'senior',avat,
  a: r: 'http,
  s://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',locati,
  o: n: 'New York, NY'
      ra,
  t: e: '$100-130/hr',availabili,
  t: y: 'Available',skil,
  l: s: ['Penetration TestingSecurity Auditing', 'ComplianceSIEM', 'FirewallVPN', 'IAM']
      b,
  i: o: 'Certified security professional with expertise in enterprise security, compliance, and threat detection.'
      certificatio,
  n: s: ['CISSPCEH', 'OSCPCompTIA Security+']
      projec,
  t: s: ['Security Infrastructure DesignCompliance Framework Implementation', 'Incident Response']
      rati,
  n: g: 4.8,revie,
  w: s: 25,featur,
  e: d: false;
}
    // Data & Analytics;
    {
  id: 'data-scientist',na,
  m: e: 'David Kim',tit,
  l: e: 'Data Scientist',catego,
  r: y: 'data',experien,
  c: e: 'mid',avat,
  a: r: 'http,
  s://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',locati,
  o: n: 'Chicago, IL'
      ra,
  t: e: '$90-110/hr',availabili,
  t: y: 'Available',skil,
  l: s: ['PythonR', 'SQLStatistics', 'Data VisualizationTableau', 'Power BI']
      b,
  i: o: 'Data scientist with strong statistical background and experience in business intelligence and analytics.',certificatio,
  n: s: ['Google Data AnalyticsMicrosoft Power BI Data Analyst'],projec,
  t: s: ['Customer Analytics DashboardPredictive Modeling', 'Business Intelligence Platform']
      rati,
  n: g: 4.6,revie,
  w: s: 16,featur,
  e: d: false;
}
    // Software Development;
    {
  id: 'fullstack-developer',na,
  m: e: 'Emily Watson',tit,
  l: e: 'Full Stack Developer',catego,
  r: y: 'development',experien,
  c: e: 'mid',avat,
  a: r: 'http,
  s://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',locati,
  o: n: 'Denver, CO'
      ra,
  t: e: '$75-95/hr',availabili,
  t: y: 'Available',skil,
  l: s: ['ReactNode.js', 'TypeScriptPython', 'PostgreSQLAWS', 'Docker']
      b,
  i: o: 'Versatile full-stack developer with experience building scalable web applications and APIs.',certificatio,
  n: s: ['AWS Developer AssociateMongoDB Developer'],projec,
  t: s: ['E-commerce PlatformAPI Development', 'Real-time Chat Application']
      rati,
  n: g: 4.7,revie,
  w: s: 19,featur,
  e: d: false;
},
  ]
  const toggleTalentExpansion = (talent,
  I: d: string) () => {
  setExpandedTalent(expandedTalent === talentId ? null : talentId)
  }
  const filteredTalent = talentPool.filter(talent () => {
  if (selectedCategory !== 'all' && talent.category !== selectedCategory) return false;
    if (selectedExperience !== 'all' && talent.experience !== selectedExperience) return false;
    if (if (searchQuery) {
  ) {
      return talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return true;
})

  const getCategoryColor = (catego,
  r: y: string) () => {
  switch (category) {
  case 'ai-ml': return 'bg-purple-500/20 text-purple-400'
      case 'cloud': return 'bg-blue-500/20 text-blue-400'
      case 'security': return 'bg-red-500/20 text-red-400'
      case 'data': return 'bg-green-500/20 text-green-400'
      case 'development': return 'bg-orange-500/20 text-orange-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
  }
  const getExperienceColor = (experien,
  c: e: string) () => {
  switch (experience) {
  case 'junior': return 'bg-green-500/20 text-green-400'
      case 'mid': return 'bg-blue-500/20 text-blue-400'
      case 'senior': return 'bg-purple-500/20 text-purple-400'
      case 'lead': return 'bg-orange-500/20 text-orange-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
  }
  const getAvailabilityColor = (availabili,
  t: y: string) () => {
  return availability === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
}
  const renderStars = (rati,
  n: g: number) () => {
  return Array.from({ lengt,
  h: 5 }, (_, i) => (
  <Star;
        key={i},
  }
        className={`w-4 h-4 ${
  i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Talent Pool - Zion Tech Group"
        description="Access our curated network of top-tier technology professionals. Find skilled developers, engineers, and specialists for your projects."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6">
              <Users className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Elite <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent">Talent</span> Pool;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access our curated network of top-tier technology professionals. 
              Find skilled developers, engineers, and specialists ready to elevate your projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */},
  }
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col,
  l: g:flex-row gap-6 mb-8">
              {/* Search */},
  }
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input;
                    type="text"
                    placeholder="Search by name, skills, or expertise..."
                    value={searchQuery},
  }
                    onChange={(e) => setSearchQuery(e.target.value)},
  }
                    className="className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-blue-400,
  focu: s:ring-2 focu,
  s:ring-blue-400/20 transition-all duration-200";"
                  />
                </div>
              </div>

              {/* Category Filter */},
  }
              <div className="lg:w-48">
                <select;
                  value={selectedCategory},
  }
                  onChange={(e) => setSelectedCategory(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-blue-400,
  focu: s:ring-2 focu,
  s:ring-blue-400/20 transition-all duration-200";"
                >
                  {categories.map((category) => (
  <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */},
  }
              <div className="lg:w-48">
                <select;
                  value={selectedExperience},
  }
                  onChange={(e) => setSelectedExperience(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-blue-400,
  focu: s:ring-2 focu,
  s:ring-blue-400/20 transition-all duration-200";"
                >
                  {experienceLevels.map((level) => (
  <option key={level.id} value={level.id}>
                      {level.name} ({level.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */},
  }
              <div className="flex items-center gap-2">
                <button;
                  onClick={onClick={() => setViewMode('grid')},
  },
  }
                  className={`p-2 rounded-lg transition-all duration-200 ${
  viewMode === 'grid' 
                      ? 'bg-blue-400/20 text-blue-400' 
                      : 'bg-slate-800/50 text-gray-400,
  hove: r:text-white'
}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button;
                  onClick={onClick={() => setViewMode('list')},
  },
  }
                  className={`p-2 rounded-lg transition-all duration-200 ${
  viewMode === 'list' 
                      ? 'bg-blue-400/20 text-blue-400' 
                      : 'bg-slate-800/50 text-gray-400,
  hove: r:text-white'
}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Talent */},
  }
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Professionals</h2>
            <p className="text-xl text-gray-300">Top-tier talent with exceptional track records</p>
          </motion.div>

          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
            {talentPool.filter(t => t.featured).map((talent, index) => (
  <motion.div;
                key={talent.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="group";"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50,
  hove: r: border-blue-400/50 transition-all duration-300 hove,
  r:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(talent.category)}`}>
                        {categories.find(c => c.id === talent.category)?.name},
  }
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getExperienceColor(talent.experience)}`}>
                        {experienceLevels.find(e => e.id === talent.experience)?.name},
  }
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(talent.availability)}`}>
                        {talent.availability},
  }
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                        Featured;
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <img;
                        src={talent.avatar} 
                        alt={talent.name},
  }
                        className="className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/20";"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-blue-400 transition-colors duration-200">
                          {talent.name},
  }
                        </h3>
                        <p className="text-gray-300">{talent.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">{talent.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {talent.bio},
  }
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Skills</div>
                      <div className="flex flex-wrap gap-2">
                        {talent.skills.slice(0, 5).map((skill, skillIndex) => (
  <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {skill},
  }
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Rate</div>
                        <div className="text-blue-400 font-medium">{talent.rate}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Rating</div>
                        <div className="flex items-center gap-1">
                          {renderStars(talent.rating)},
  }
                          <span className="text-gray-300 text-xs">({talent.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <button;
                      onClick={onClick={() => toggleTalentExpansion(talent.id)},
  },
  }
                      className="className="w-full px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg,
  hove: r: from-blue-500,
  hove: r:to-purple-600 transition-all duration-200 hove,
  r:scale-105";"
                    >
                      {expandedTalent === talent.id ? 'Show Less' : 'View Full Profile'},
  }
                    </button>
                    
                    {expandedTalent === talent.id && (
  <motion.div;
                        initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                        animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                        exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                        transition={ durati,
  o: n: 0.3 },
  }
                        className="className="mt-4 pt-4 border-t border-slate-600/50";"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Certificatio,
  n: s:</h4>
                          <div className="flex flex-wrap gap-2">
                            {talent.certifications.map((cert, certIndex) => (
  <span key={certIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                                {cert},
  }
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Recent,
  Project: s:</h4>
                          <ul className="space-y-1">
                            {talent.projects.map((project, projectIndex) => (
  <li key={projectIndex} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                {project},
  }
                              </li>
                            ))}
                          </ul>
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

      {/* All Talent */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Available Talent</h2>
            <p className="text-xl text-gray-300">
              Browse our complete network of skilled professionals;
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
  <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
              {filteredTalent.map((talent, index) => (
  <motion.div;
                  key={talent.id},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.05 },
  }
                  className="className="group";"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50,
  hove: r: border-blue-400/50 transition-all duration-300 hove,
  r:scale-105 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(talent.category)}`}>
                          {categories.find(c => c.id === talent.category)?.name},
  }
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getExperienceColor(talent.experience)}`}>
                          {experienceLevels.find(e => e.id === talent.experience)?.name},
  }
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <img;
                          src={talent.avatar} 
                          alt={talent.name},
  }
                          className="className="w-12 h-12 rounded-full object-cover border border-blue-400/20";"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-white group-hov,
  e: r:text-blue-400 transition-colors duration-200">
                            {talent.name},
  }
                          </h3>
                          <p className="text-gray-300 text-sm">{talent.title}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="text-xs text-gray-400 mb-1">Skills</div>
                        <div className="flex flex-wrap gap-1">
                          {talent.skills.slice(0, 3).map((skill, skillIndex) => (
  <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {skill},
  }
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                        <div>
                          <div className="text-gray-400">Rate</div>
                          <div className="text-blue-400 font-medium">{talent.rate}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Rating</div>
                          <div className="flex items-center gap-1">
                            {renderStars(talent.rating)},
  }
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg,
  hove: r: from-blue-500,
  hove: r:to-purple-600 transition-all duration-200 hove,
  r:scale-105 text-sm">
                        View Profile;
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
  <div className="space-y-4">
              {filteredTalent.map((talent, index) => (
  <motion.div;
                  key={talent.id},
  }
                  initial={ opaci,
  t: y: 0, x: -20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.05 },
  }
                  className="className="group";"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50,
  hove: r:border-blue-400/50 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <img;
                          src={talent.avatar} 
                          alt={talent.name},
  }
                          className="className="w-20 h-20 rounded-full object-cover border-2 border-blue-400/20";"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(talent.category)}`}>
                            {categories.find(c => c.id === talent.category)?.name},
  }
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getExperienceColor(talent.experience)}`}>
                            {experienceLevels.find(e => e.id === talent.experience)?.name},
  }
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(talent.availability)}`}>
                            {talent.availability},
  }
                          </span>
                          {talent.featured && (
  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                              Featured;
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-blue-400 transition-colors duration-200 mb-2">
                          {talent.name},
  }
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {talent.bio},
  }
                        </p>
                        
                        <div className="mb-3">
                          <div className="text-sm text-gray-400 mb-1">Skills</div>
                          <div className="flex flex-wrap gap-2">
                            {talent.skills.slice(0, 6).map((skill, skillIndex) => (
  <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                {skill},
  }
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                          <div>
                            <div className="text-gray-400">Rate</div>
                            <div className="text-blue-400 font-medium">{talent.rate}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Rating</div>
                            <div className="flex items-center gap-1">
                              {renderStars(talent.rating)},
  }
                              <span className="text-gray-300 text-xs">({talent.reviews})</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400">Location</div>
                            <div className="text-purple-400 font-medium text-sm">{talent.location}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Experience</div>
                            <div className="text-green-400 font-medium text-sm">
                              {experienceLevels.find(e => e.id === talent.experience)?.name.split(' ')[0],
  },
  }
                            </div>
                          </div>
                        </div>
                        
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg,
  hove: r: from-blue-500,
  hove: r:to-purple-600 transition-all duration-200 hove,
  r:scale-105">
                          View Profile;
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

      {/* Call to Action */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect with Top Talent?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need a single specialist or a complete team;
              our talent pool is ready to help you achieve your goals.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg,
  hove: r:from-blue-500,
  hove: r:to-purple-600 transition-all duration-200,
  hove: r:scale-105">
                Hire Talent;
              </button>
              <a;
                href="mail,
  t: o:talent@ziontechgroup.com"
                className="className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg,
  hove: r:bg-blue-400 hove,
  r:text-white transition-all duration-200";"
              >
                Contact Talent Team;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}