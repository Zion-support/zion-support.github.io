import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import { Link   } from "react-router-dom";
import {
  Server;
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
export default function Equipment() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCondition, setSelectedCondition] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [expandedEquipment, setExpandedEquipment] = useState<string | null>(null)
  const categories = [
  { id: 'all', na,
  m: e: 'All Categories', cou,
  n: t: 38 },
  },
  { id: 'servers', na,
  m: e: 'Servers & Storage', cou,
  n: t: 12 },
  },
  { id: 'networking', na,
  m: e: 'Networking', cou,
  n: t: 8 },
  },
  { id: 'workstations', na,
  m: e: 'Workstations', cou,
  n: t: 6 },
  },
  { id: 'peripherals', na,
  m: e: 'Peripherals', cou,
  n: t: 5 },
  },
  { id: 'mobile', na,
  m: e: 'Mobile Devices', cou,
  n: t: 4 },
  },
  { id: 'specialized', na,
  m: e: 'Specialized Equipment', cou,
  n: t: 3 },
  },
  ]
  const conditions = [
  { id: 'all', na,
  m: e: 'All Conditions', cou,
  n: t: 38 },
  },
  { id: 'new', na,
  m: e: 'New', cou,
  n: t: 15 },
  },
  { id: 'refurbished', na,
  m: e: 'Refurbished', cou,
  n: t: 12 },
  },
  { id: 'used', na,
  m: e: 'Used - Excellent', cou,
  n: t: 8 },
  },
  { id: 'good', na,
  m: e: 'Used - Good', cou,
  n: t: 3 },
  },
  ]
  const equipmentInventory = [
  // Servers & Storage;
    {
  id: 'dell-poweredge-r750',na,
  m: e: 'Dell PowerEdge R750 Server',catego,
  r: y: 'servers',conditi,
  o: n: 'new',ic,
  o: n: Server,ima,
  g: e: 'http,
  s://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',descripti,
  o: n: 'High-performance dual-socket server with enterprise-grade reliability and scalability.',spe,
  c: s: {
  processo,
  r: '2x Intel Xeon Silver 4314 (16 cores, 32 threads)'
        memo,
  r: y: '128GB DDR4 ECC Registered',stora,
  g: e: '4x 1.92TB SSD + 2x 4TB HDD',networki,
  n: g: '4x 1GbE + 2x 10GbE',pow,
  e: r: '750W Platinum PSU'
}
      featur,
  e: s: ['Redundant Power SuppliesiDRAC9 Management', 'Hot-swappable DrivesRAID Support', 'Enterprise Warranty']
      pri,
  c: e: '$8,499'
      originalPri,
  c: e: '$12,999'
      discou,
  n: t: '35%',availabili,
  t: y: 'In Stock',locati,
  o: n: 'Austin, TX'
      warran,
  t: y: '3 Years',rati,
  n: g: 4.8,revie,
  w: s: 42,featur,
  e: d: true,ta,
  g: s: [['ServerEnterprise', 'High PerformanceScalable', 'Reliable'],
  ],
  },
  {
  id: 'hp-proliant-dl380',na,
  m: e: 'HP ProLiant DL380 Gen10 Plus',catego,
  r: y: 'servers',conditi,
  o: n: 'refurbished',ic,
  o: n: Server,ima,
  g: e: 'http,
  s://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',descripti,
  o: n: 'Refurbished enterprise server with proven reliability and comprehensive support.',spe,
  c: s: {
  processo,
  r: '2x Intel Xeon Gold 6338 (32 cores, 64 threads)'
        memo,
  r: y: '256GB DDR4 ECC Registered',stora,
  g: e: '8x 900GB SAS HDD + 2x 480GB SSD',networki,
  n: g: '4x 1GbE + 2x 25GbE',pow,
  e: r: '800W Platinum PSU'
}
      featur,
  e: s: ['HP iLO AdvancedSmart Array Controller', 'Flexible StorageEnergy Efficient', 'Certified Refurbished']
      pri,
  c: e: '$6,299'
      originalPri,
  c: e: '$15,999'
      discou,
  n: t: '61%',availabili,
  t: y: 'In Stock',locati,
  o: n: 'Dallas, TX'
      warran,
  t: y: '1 Year',rati,
  n: g: 4.6,revie,
  w: s: 28,featur,
  e: d: false,ta,
  g: s: [['ServerRefurbished', 'EnterpriseHigh Memory', 'Cost Effective'],
  ],
  }
    // Networking;
    {
  id: 'cisco-catalyst-9300',na,
  m: e: 'Cisco Catalyst 9300-48P Switch',catego,
  r: y: 'networking',conditi,
  o: n: 'new',ic,
  o: n: Network,ima,
  g: e: 'http,
  s://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',descripti,
  o: n: 'Next-generation enterprise switch with PoE+ support and advanced security features.',spe,
  c: s: {
  port,
  s: '48x PoE+ Gigabit + 4x SFP+',p,
  o: e: '370W PoE+ Budget',switchi,
  n: g: '176 Gbps',forwardi,
  n: g: '130 Mpps',pow,
  e: r: 'AC Power Supply'
}
      featur,
  e: s: ['PoE+ SupportCisco DNA Ready', 'Advanced SecurityStackable', 'Energy Efficient']
      pri,
  c: e: '$4,999'
      originalPri,
  c: e: '$7,499'
      discou,
  n: t: '33%',availabili,
  t: y: 'In Stock',locati,
  o: n: 'San Francisco, CA'
      warran,
  t: y: 'Lifetime',rati,
  n: g: 4.9,revie,
  w: s: 67,featur,
  e: d: true,ta,
  g: s: [['SwitchPoE+', 'EnterpriseCisco', 'High Performance'],
  ],
  }
    // Workstations;
    {
  id: 'dell-precision-5820',na,
  m: e: 'Dell Precision 5820 Workstation',catego,
  r: y: 'workstations',conditi,
  o: n: 'new',ic,
  o: n: Cpu,ima,
  g: e: 'http,
  s://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',descripti,
  o: n: 'Professional workstation designed for demanding applications and creative workflows.',spe,
  c: s: {
  processo,
  r: 'Intel Xeon W-3335 (12 cores, 24 threads)'
        memo,
  r: y: '64GB DDR4 ECC',graphi,
  c: s: 'NVIDIA RTX A4000 (16GB)',stora,
  g: e: '1TB NVMe SSD + 2TB HDD',pow,
  e: r: '750W 80+ Gold'
}
      featur,
  e: s: ['ISV CertifiedECC Memory', 'Professional GraphicsFast Storage', 'Expandable']
      pri,
  c: e: '$3,299'
      originalPri,
  c: e: '$4,999'
      discou,
  n: t: '34%',availabili,
  t: y: 'In Stock',locati,
  o: n: 'Seattle, WA'
      warran,
  t: y: '3 Years',rati,
  n: g: 4.7,revie,
  w: s: 35,featur,
  e: d: false,ta,
  g: s: [['WorkstationProfessional', 'GraphicsPerformance', 'Reliable'],
  ],
  }
    // Peripherals;
    {
  id: 'dell-ultrasharp-u2720q',na,
  m: e: 'Dell UltraSharp U2720Q Monitor',catego,
  r: y: 'peripherals',conditi,
  o: n: 'refurbished',ic,
  o: n: Monitor,ima,
  g: e: 'http,
  s://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',descripti,
  o: n: '27-inch 4K monitor with exceptional color accuracy and connectivity options.',spe,
  c: s: {
  resolutio,
  n: '3840 x 2160 (4K UHD)',pan,
  e: l: 'IPS',col,
  o: r: '99% sRGB, 95% DCI-P3'
        por,
  t: s: 'HDMI, DisplayPort, USB-C'
        respon,
  s: e: '5ms'
}
      featur,
  e: s: ['4K ResolutionColor Accurate', 'USB-C HubVESA Mount', 'Height Adjustable']
      pri,
  c: e: '$399',originalPri,
  c: e: '$699',discou,
  n: t: '43%',availabili,
  t: y: 'In Stock',locati,
  o: n: 'Chicago, IL'
      warran,
  t: y: '1 Year',rati,
  n: g: 4.8,revie,
  w: s: 89,featur,
  e: d: false,ta,
  g: s: [['Monitor4K', 'Color AccurateProfessional', 'USB-C'],
  ],
  }
    // Mobile Devices;
    {
  id: 'dell-latitude-5520',na,
  m: e: 'Dell Latitude 5520 Laptop',catego,
  r: y: 'mobile',conditi,
  o: n: 'refurbished',ic,
  o: n: Laptop,ima,
  g: e: 'http,
  s://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',descripti,
  o: n: 'Business laptop with enterprise security features and long battery life.',spe,
  c: s: {
  processo,
  r: 'Intel Core i7-1185G7 (4 cores, 8 threads)'
        memo,
  r: y: '16GB DDR4',stora,
  g: e: '512GB NVMe SSD',displ,
  a: y: '15.6" FHD (1920x1080)',batte,
  r: y: '68Whr (up to 12 hours)'
}
      featur,
  e: s: ['Enterprise SecurityLong Battery Life', 'Fast PerformanceDurable Design', 'Windows 11 Pro']
      pri,
  c: e: '$799',originalPri,
  c: e: '$1,499'
      discou,
  n: t: '47%',availabili,
  t: y: 'In Stock',locati,
  o: n: 'New York, NY'
      warran,
  t: y: '1 Year',rati,
  n: g: 4.5,revie,
  w: s: 56,featur,
  e: d: false,ta,
  g: s: [['LaptopBusiness', 'SecurityLong Battery', 'Windows 11'],
  ],
  },
  ]

  const toggleEquipmentExpansion = (equipment,
  I: d: string) () => {
  setExpandedEquipment(expandedEquipment === equipmentId ? null : equipmentId)
  }
  const filteredEquipment = equipmentInventory.filter(equipment () => {
  if (selectedCategory !== 'all' && equipment.category !== selectedCategory) return false;
    if (selectedCondition !== 'all' && equipment.condition !== selectedCondition) return false;
    if (if (searchQuery) {
  ) {
      return equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             equipment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             equipment.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return true;
})

  const getCategoryColor = (catego,
  r: y: string) () => {
  switch (category) {
  case 'servers': return 'bg-purple-500/20 text-purple-400'
      case 'networking': return 'bg-blue-500/20 text-blue-400'
      case 'workstations': return 'bg-green-500/20 text-green-400'
      case 'peripherals': return 'bg-orange-500/20 text-orange-400'
      case 'mobile': return 'bg-pink-500/20 text-pink-400'
      case 'specialized': return 'bg-red-500/20 text-red-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
  }
  const getConditionColor = (conditi,
  o: n: string) () => {
  switch (condition) {
  case 'new': return 'bg-green-500/20 text-green-400'
      case 'refurbished': return 'bg-blue-500/20 text-blue-400'
      case 'used': return 'bg-yellow-500/20 text-yellow-400'
      case 'good': return 'bg-orange-500/20 text-orange-400'
      defaul,
  t: return 'bg-slate-500/20 text-slate-400'
},
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
        title="Technology Equipment - Zion Tech Group"
        description="Browse our comprehensive inventory of enterprise-grade technology equipment, servers, networking gear, and professional workstations."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10"></div>
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Server className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-600 bg-clip-text text-transparent">Equipment</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade servers, networking equipment, workstations, and peripherals. 
              Quality technology solutions for businesses of all sizes.
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
                    placeholder="Search equipment by name, specs, or features..."
                    value={searchQuery},
  }
                    onChange={(e) => setSearchQuery(e.target.value)},
  }
                    className="className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-purple-400,
  focu: s:ring-2 focu,
  s:ring-purple-400/20 transition-all duration-200";"
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
  focu: s:border-purple-400,
  focu: s:ring-2 focu,
  s:ring-purple-400/20 transition-all duration-200";"
                >
                  {categories.map((category) => (
  <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition Filter */},
  }
              <div className="lg:w-48">
                <select;
                  value={selectedCondition},
  }
                  onChange={(e) => setSelectedCondition(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-purple-400,
  focu: s:ring-2 focu,
  s:ring-purple-400/20 transition-all duration-200";"
                >
                  {conditions.map((condition) => (
  <option key={condition.id} value={condition.id}>
                      {condition.name} ({condition.count})
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
                      ? 'bg-purple-400/20 text-purple-400' 
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
                      ? 'bg-purple-400/20 text-purple-400' 
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

      {/* Featured Equipment */},
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
            <h2 className="text-3xl font-bold text-white mb-4">Featured Equipment</h2>
            <p className="text-xl text-gray-300">Premium technology solutions with exceptional value</p>
          </motion.div>

          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
            {equipmentInventory.filter(e => e.featured).map((equipment, index) => (
  <motion.div;
                key={equipment.id},
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
  hove: r: border-purple-400/50 transition-all duration-300 hove,
  r:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(equipment.category)}`}>
                        {categories.find(c => c.id === equipment.category)?.name},
  }
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(equipment.condition)}`}>
                        {conditions.find(con => con.id === equipment.condition)?.name},
  }
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                        Featured;
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                        <equipment.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-purple-400 transition-colors duration-200">
                        {equipment.name},
  }
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {equipment.description},
  }
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features</div>
                      <div className="flex flex-wrap gap-2">
                        {equipment.features.slice(0, 4).map((feature, featureIndex) => (
  <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {feature},
  }
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Price</div>
                        <div className="text-purple-400 font-medium">{equipment.price}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Rating</div>
                        <div className="flex items-center gap-1">
                          {renderStars(equipment.rating)},
  }
                          <span className="text-gray-300 text-xs">({equipment.reviews})</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400">Warranty</div>
                        <div className="text-green-400 font-medium">{equipment.warranty}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Location</div>
                        <div className="text-blue-400 font-medium text-sm">{equipment.location}</div>
                      </div>
                    </div>
                    
                    <button;
                      onClick={onClick={() => toggleEquipmentExpansion(equipment.id)},
  },
  }
                      className="className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-purple-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105";"
                    >
                      {expandedEquipment === equipment.id ? 'Show Less' : 'View Full Specs'},
  }
                    </button>
                    
                    {expandedEquipment === equipment.id && (
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
                          <h4 className="text-sm font-semibold text-white mb-2">Technical,
  Specification: s:</h4>
                          <div className="space-y-2 text-sm">
                            {Object.entries(equipment.specs).map(([key, value]) => (
  <div key={key} className="flex justify-between">
                                <span className="text-gray-400 capitalize">{key}:</span>
                                <span className="text-gray-300">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">All,
  Feature: s:</h4>
                          <div className="flex flex-wrap gap-2">
                            {equipment.features.map((feature, featureIndex) => (
  <span key={featureIndex} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">
                                {feature},
  }
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <span className="text-gray-400">Original,
  Pric: e:</span>
                            <span className="text-gray-500 line-through ml-2">{equipment.originalPrice}</span>
                          </div>
                          <div className="text-green-400 font-medium">
                            Save {equipment.discount},
  }
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

      {/* All Equipment */},
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
            <h2 className="text-4xl font-bold text-white mb-4">Complete Equipment Inventory</h2>
            <p className="text-xl text-gray-300">
              Browse our full catalog of technology solutions;
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
  <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
              {filteredEquipment.map((equipment, index) => (
  <motion.div;
                  key={equipment.id},
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
  hove: r: border-purple-400/50 transition-all duration-300 hove,
  r:scale-105 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(equipment.category)}`}>
                          {categories.find(c => c.id === equipment.category)?.name},
  }
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(equipment.condition)}`}>
                          {conditions.find(con => con.id === equipment.condition)?.name},
  }
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
                          <equipment.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hov,
  e: r:text-purple-400 transition-colors duration-200">
                          {equipment.name},
  }
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                        {equipment.description},
  }
                      </p>
                      
                      <div className="mb-3">
                        <div className="text-xs text-gray-400 mb-1">Features</div>
                        <div className="flex flex-wrap gap-1">
                          {equipment.features.slice(0, 3).map((feature, featureIndex) => (
  <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {feature},
  }
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                        <div>
                          <div className="text-gray-400">Price</div>
                          <div className="text-purple-400 font-medium">{equipment.price}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Rating</div>
                          <div className="flex items-center gap-1">
                            {renderStars(equipment.rating)},
  }
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-purple-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105 text-sm">
                        View Details;
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
  <div className="space-y-4">
              {filteredEquipment.map((equipment, index) => (
  <motion.div;
                  key={equipment.id},
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
  hove: r:border-purple-400/50 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                          <equipment.icon className="w-10 h-10 text-purple-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(equipment.category)}`}>
                            {categories.find(c => c.id === equipment.category)?.name},
  }
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(equipment.condition)}`}>
                            {conditions.find(con => con.id === equipment.condition)?.name},
  }
                          </span>
                          {equipment.featured && (
  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                              Featured;
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-purple-400 transition-colors duration-200 mb-2">
                          {equipment.name},
  }
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {equipment.description},
  }
                        </p>
                        
                        <div className="mb-3">
                          <div className="text-sm text-gray-400 mb-1">Key Features</div>
                          <div className="flex flex-wrap gap-2">
                            {equipment.features.slice(0, 5).map((feature, featureIndex) => (
  <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                {feature},
  }
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                          <div>
                            <div className="text-gray-400">Price</div>
                            <div className="text-purple-400 font-medium">{equipment.price}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Rating</div>
                            <div className="flex items-center gap-1">
                              {renderStars(equipment.rating)},
  }
                              <span className="text-gray-300 text-xs">({equipment.reviews})</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400">Warranty</div>
                            <div className="text-green-400 font-medium text-sm">{equipment.warranty}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Location</div>
                            <div className="text-blue-400 font-medium text-sm">{equipment.location}</div>
                          </div>
                        </div>
                        
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-purple-500,
  hove: r:to-blue-600 transition-all duration-200 hove,
  r:scale-105">
                          View Details;
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
              Need Custom Equipment Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect technology solutions;
              or customize equipment to meet your specific requirements.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-purple-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105">
                Get Quote;
              </button>
              <a;
                href="mail,
  t: o:equipment@ziontechgroup.com"
                className="className="px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg,
  hove: r:bg-purple-400 hove,
  r:text-white transition-all duration-200";"
              >
                Contact Equipment Team;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}