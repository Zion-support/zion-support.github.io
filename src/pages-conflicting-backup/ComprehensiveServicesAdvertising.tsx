import React, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { ;
  Brain,;
  Cloud,;
  Shield,;
  Rocket,;
  Zap,;
  Users,;
  Globe,;
  Cpu,;
  Lock,;
  Heart,;
  Star,;
  ArrowRight,;
  CheckCircle,;
  TrendingUp,;
  Code,;
  Database,;
  Network,;
  Smartphone,;
  BarChart3,;
  MessageSquare,;
  FileText,;
  ShoppingCart,;
  Headphones,;
  Mail,;
  Search,;
  HelpCircle,;
  ShieldCheck,;
  Globe2,;
  Leaf,;
  Sparkles,;
  Target,;
  DollarSign,;
  Clock,;
  Award,;
  Phone,;
  Mail, as, MailIcon,;
  MapPin,;
  Infinity,;
  Bot,;
  CircuitBoard,;
  Satellite,;
  Atom,;
  Blockchain,;
  CpuIcon,;
  DatabaseIcon,;
  BrainCircuit,;
  RocketIcon,;
  ShieldIcon,;
  ZapIcon,;
  UsersIcon,;
  GlobeIcon,;
  LockIcon,;
  HeartIcon,;
  StarIcon,;
  ArrowRightIcon,;
  CheckCircleIcon,;
  TrendingUpIcon,;
  CodeIcon,;
  DatabaseIcon, as, DBIcon,;
  NetworkIcon,;
  SmartphoneIcon,;
  BarChart3Icon,;
  MessageSquareIcon,;
  FileTextIcon,;
  ShoppingCartIcon,;
  HeadphonesIcon,;
  MailIcon, as, MailIcon2,;
  SearchIcon,;
  HelpCircleIcon,;
  ShieldCheckIcon,;
  Globe2Icon,;
  LeafIcon,;
  SparklesIcon,;
  TargetIcon,;
  DollarSignIcon,;
  ClockIcon,;
  AwardIcon,;
  PhoneIconMapPinIconInfinityIcon;
} from "lucide-react";
import { SEO } from "../components/SEO";
import { COMPREHENSIVE_INNOVATIVE_SERVICES_20o30 } from "../data/comprehensiveInnovativeServices20o30";
export, default, function ComprehensiveServicesAdvertising() {
  const [activeCategorysetActiveCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');
  const [sortBysetSortBy] = useState('rating');
  // Get, unique, categories from services;
  const categories = [;
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.lengthico,;
    n: '🚀'colo,;
  r: 'from-cyan-50o0 to-blue-50o0' };
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Business Intelligence').lengthico,;
    n: '🤖'colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'Cybersecurity').lengthico,;
    n: '🛡️'colo,;
  r: 'from-red-50o0 to-orange-50o0' };
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'Cloud & DevOps').lengthico,;
    n: '☁️'colo,;
  r: 'from-blue-50o0 to-cyan-50o0' };
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Marketing').lengthico,;
    n: '📈'colo,;
  r: 'from-green-50o0 to-emerald-50o0' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'Quantum Computing').lengthico,;
    n: '⚛️'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'IoT & Edge Computing').lengthico,;
    n: '🌐'colo,;
  r: 'from-teal-50o0 to-cyan-50o0' };
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'Blockchain & Web3').lengthico,;
    n: '🔗'colo,;
  r: 'from-yellow-50o0 to-orange-50o0' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Healthcare').lengthico,;
    n: '🏥'colo,;
  r: 'from-pink-50o0 to-red-50o0' };
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'FinTech').lengthico,;
    n: '💰'colo,;
  r: 'from-emerald-50o0 to-green-50o0' };
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'Digital Twin').lengthico,;
    n: '🔄'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' };
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'Space Technology').lengthico,;
    n: '🚀'colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'Sustainable Technology').lengthico,;
    n: '🌱'colo,;
  r: 'from-green-50o0 to-teal-50o0' };
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Content').lengthico,;
    n: '✍️'colo,;
  r: 'from-orange-50o0 to-red-50o0' };
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Customer Support').lengthico,;
    n: '💬'colo,;
  r: 'from-blue-50o0 to-purple-50o0' };
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & HR').lengthico,;
    n: '👥'colo,;
  r: 'from-indigo-50o0 to-blue-50o0' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Legal Tech').lengthico,;
    n: '⚖️'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' };
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Research').lengthico,;
    n: '🔬'colo,;
  r: 'from-purple-50o0 to-violet-50o0' };
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Green Tech').lengthico,;
    n: '🌿'colo,;
  r: 'from-green-50o0 to-emerald-50o0' };
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Metaverse').lengthico,;
    n: '🌍'colo,;
  r: 'from-purple-50o0 to-indigo-50o0' };
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Space Tech').lengthico,;
    n: '🛸'colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Operations').lengthico,;
    n: '⚙️'colo,;
  r: 'from-gray-50o0 to-slate-50o0' };
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Development').lengthico,;
    n: '💻'colo,;
  r: 'from-cyan-50o0 to-blue-50o0' };
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Education').lengthico,;
    n: '🎓'colo,;
  r: 'from-blue-50o0 to-indigo-50o0' },;
    { id: 'AI & Entertainment', name: 'AI & Entertainment'count: COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(s => s.category === 'AI & Entertainment').lengthico,;
    n: '🎮'colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
,  ];
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }),;
  const sortedServices = [...filteredServices].sort((ab) => {
    switch() {;
      case 'rating': return b.rating - a.ratingcase 'price':;
        return a.price - b.pricecase 'reviews':;
        return b.reviewCount - a.reviewCount;
      case 'name':;
        return a.title.localeCompare(b.title);
      default: return b.rating - a.rating;
    };
  });
  const getCategoryIcon = (category: string) => {;
    switch() {;
      case 'AI & Business Intelligence': return <Brain className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />,;
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />,;
      case 'AI & Marketing': return <TrendingUp className="w-6 h-6" />,;
      case 'Quantum Computing': return <Atom className="w-6 h-6" />,;
      case 'IoT & Edge Computing': return <Network className="w-6 h-6" />,;
      case 'Blockchain & Web3': return <CircuitBoard className="w-6 h-6" />,;
      case 'AI & Healthcare': return <Heart className="w-6 h-6" />,;
      case 'FinTech': return <DollarSign className="w-6 h-6" />,;
      case 'Digital Twin': return <Globe className="w-6 h-6" />,;
      case 'Space Technology': return <Satellite className="w-6 h-6" />,;
      case 'Sustainable Technology': return <Leaf className="w-6 h-6" />,;
      case 'AI & Content': return <FileText className="w-6 h-6" />,;
      case 'AI & Customer Support': return <MessageSquare className="w-6 h-6" />,;
      case 'AI & HR': return <Users className="w-6 h-6" />,;
      case 'AI & Legal Tech': return <ShieldCheck className="w-6 h-6" />,;
      case 'AI & Research': return <Search className="w-6 h-6" />,;
      case 'AI & Green Tech': return <Leaf className="w-6 h-6" />,;
      case 'AI & Metaverse': return <Globe2 className="w-6 h-6" />,;
      case 'AI & Space Tech': return <Rocket className="w-6 h-6" />,;
      case 'AI & Operations': return <Cpu className="w-6 h-6" />,;
      case 'AI & Development': return <Code className="w-6 h-6" />case 'AI & Education': return <Award className="w-6 h-6" />case 'AI & Entertainment': return <Sparkles className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Comprehensive AI & Technology Services - Zion, Tech, Group";
        description="Discover, our, comprehensive portfolio, of, cutting-edge AI, blockchain, quantum, computingand, emerging technology services. Transform, your, business with, autonomous, solutions.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.h1;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md: text-7xl font-bold text-white mb-6";
          >;
            <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
              Revolutionary;
            </span>;
            <br />;
            <span className="text-white">AI & Technology</span>;
            <br />;
            <span className="bg-gradient-to-r from-emerald-40o0 via-teal-50o0 to-cyan-60o0 bg-clip-text text-transparent">;
              Services;
            </span>;
          </motion.h1>;
          <motion.p;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="text-xl md: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto";
          >;
            Transform, your, business with, our, comprehensive portfolio, of, cutting-edge, autonomous, AI;
            blockchain, quantum computing, and, emerging, technology solutions.;
            <span className="text-cyan-40o0 font-semibold"> 50o0%+ ROI guaranteed.</span>;
          </motion.p>;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
            className="flex flex-col sm: flex-row gap-4 justify-center items-center";
          >;
            <a;
              href="tel: +130o24640950";
              className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg, flex, items-center gap-2 transition-all duration-30o0, transform, hover: scale-10o5";
            >;
              <Phone className="w-5 h-5" />;
              Call No,;
    w: +1, 30o2, 464 0o950;
            </a>;
            <a;
              href="mailto: kleber@ziontechgroup.com";
              className="bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover:from-purple-60o0 hove,;
    r:to-pink-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg, flex, items-center gap-2 transition-all duration-30o0, transform, hove,;
  r:scale-10o5";
            >;
              <Mail className="w-5 h-5" />;
              Email Us;
            </a>;
          </motion.div>;
          {/* Contact, Info, Banner */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
            className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20";
          >;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
              <div className="flex flex-col items-center">;
                <Phone className="w-8 h-8 text-cyan-40o0 mb-2" />;
                <p className="text-white font-semibold">Phone</p>;
                <p className="text-cyan-40o0">+1, 30o2, 464 0o950</p>;
              </div>;
              <div className="flex flex-col items-center">;
                <Mail className="w-8 h-8 text-purple-40o0 mb-2" />;
                <p className="text-white font-semibold">Email</p>;
                <p className="text-purple-40o0">kleber@ziontechgroup.com</p>;
              </div>;
              <div className="flex flex-col items-center">;
                <MapPin className="w-8 h-8 text-emerald-40o0 mb-2" />;
                <p className="text-white font-semibold">Address</p>;
                <p className="text-emerald-40o0">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Overview */}
      <section className="py-20 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">;
                {COMPREHENSIVE_INNOVATIVE_SERVICES_20o30.length}+;
              </span> ;
              Revolutionary Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              From, autonomous, AI platforms, to, quantum computing, solutionsour, comprehensive portfolio;
              covers, every, aspect of, modern, technology innovation. Each, service, is designed, to, deliver;
              exceptional, ROI, and transformative, business, outcomes.;
            </p>;
          </motion.div>;
          {/* Category Filter */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="mb-12";
          >;
            <div className="flex flex-wrap justify-center gap-4">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-30o0, transform, hover: scale-10o5 ${;
                    activeCategory === category.id;
                      ? 'bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white shadow-lg';
                      : 'bg-white/10 text-gray-30o0 hove,;
  r: bg-white/20, border, border-white/20';
                  }`}
                >;
                  <span className="mr-2">{category.icon}</span>;
                  {category.name} ({category.count});
                </button>;
              ))}
            </div>;
          </motion.div>;
          {/* Search, and, Sort */};
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
            className="mb-8, flex, flex-col md:flex-row gap-4 justify-between items-center";
          >;
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
              />;
            </div>;
            ;
            <select;
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
            >;
              <option value="rating">Sort, by, Rating</option>;
              <option value="price">Sort, by, Price</option>;
              <option value="reviews">Sort, by, Reviews</option>;
              <option value="name">Sort, by, Name</option>;
            </select>;
          </motion.div>;
          {/* Services Grid */};
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
          >;
            {sortedServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 hover: border-cyan-50o0/50 transition-all duration-30o0, transform, hove,;
  r:scale-10o5 group";
              >;
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex items-center gap-3">;
                    <div className="p-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-lg">;
                      {getCategoryIcon(service.category)}
                    </div>;
                    <div>;
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-40o0 transition-colors duration-30o0">;
                        {service.title}
                      </h3>;
                      <p className="text-sm text-gray-40o0">{service.category}</p>;
                    </div>;
                  </div>;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                    <span className="text-white font-semibold">{service.rating}</span>;
                  </div>;
                </div>;
                {/* Service Description */}
                <p className="text-gray-30o0 mb-4 line-clamp-3">{service.description}</p>;
                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-4">;
                  {service.tags.slice(0o3).map((tagtagIndex) => (;
                    <span;
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-xs text-cyan-40o0 rounded-full, border, border-cyan-50o0/30";
                    >;
                      {tag}
                    </span>;
                  ))}
                </div>;
                {/* Service Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">;
                  <div className="text-center">;
                    <p className="text-2xl font-bold text-cyan-40o0">${service.price.toLocaleString()}</p>;
                    <p className="text-xs text-gray-40o0">Starting Price</p>;
                  </div>;
                  <div className="text-center">;
                    <p className="text-2xl font-bold text-emerald-40o0">{service.aiScore}</p>;
                    <p className="text-xs text-gray-40o0">AI Score</p>;
                  </div>;
                </div>;
                {/* Market Information */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">;
                  <div className="flex justify-between items-center mb-2">;
                    <span className="text-sm text-gray-40o0">Market Price: </span>;
                    <span className="text-sm text-emerald-40o0 font-semibold">{service.marketPrice}</span>;
                  </div>;
                  <div className="flex justify-between items-center mb-2">;
                    <span className="text-sm text-gray-40o0">ROI:</span>;
                    <span className="text-sm text-cyan-40o0 font-semibold">{service.roi}</span>;
                  </div>;
                  <div className="flex justify-between items-center">;
                    <span className="text-sm text-gray-40o0">Setup Time:</span>;
                    <span className="text-sm text-purple-40o0 font-semibold">{service.setupTime}</span>;
                  </div>;
                </div>;
                {/* Contact & Action */}
                <div className="space-y-3">;
                  <a;
                    href={`tel: +130o24640950`}
                    className="w-full bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white py-3 px-4 rounded-lg font-semibold text-center, block, transition-all duration-30o0, transform, hover:scale-10o5";
                  >;
                    <Phone className="w-4 h-4, inline, mr-2" />;
                    Get, Quote, Now;
                  </a>;
                  <a;
                    href={`mailt,;
  o: kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg font-semibold text-center, block, transition-all duration-30o0, border, border-white/20";
                  >;
                    <Mail className="w-4 h-4, inline, mr-2" />;
                    Email Inquiry;
                  </a>;
                </div>;
                {/* Additional Info */}
                <div className="mt-4 pt-4 border-t border-white/10">;
                  <div className="flex justify-between items-center text-sm">;
                    <span className="text-gray-40o0">Reviews: {service.reviewCount}</span>;
                    <span className="text-gray-40o0">Availability: {service.availability}</span>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Call, to, Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.h2;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md: text-5xl font-bold text-white mb-6";
          >;
            Ready, to, Transform Your Business?;
          </motion.h2>;
          ;
          <motion.p;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="text-xl text-gray-30o0 mb-8";
          >;
            Join, thousands, of businesses, already, leveraging our, revolutionary, AI and, technology, services.;
            Get, started, today with, a, free consultation, and, discover how, we, can accelerate, your, digital transformation.;
          </motion.p>;
;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
            className="flex flex-col sm: flex-row gap-4 justify-center items-center";
          >;
            <a;
              href="tel: +130o24640950";
              className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg, flex, items-center gap-2 transition-all duration-30o0, transform, hover: scale-10o5";
            >;
              <Phone className="w-5 h-5" />;
              Call No,;
    w: +1, 30o2, 464 0o950;
            </a>;
            <a;
              href="mailto: kleber@ziontechgroup.com";
              className="bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover:from-purple-60o0 hove,;
    r:to-pink-70o0 text-white px-8 py-4 rounded-full font-semibold text-lg, flex, items-center gap-2 transition-all duration-30o0, transform, hove,;
  r:scale-10o5";
            >;
              <Mail className="w-5 h-5" />;
              Schedule Consultation;
            </a>;
          </motion.div>;
          {/* Contact Details */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
            className="mt-12, grid, grid-cols-1 md:grid-cols-3 gap-8";
          >;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Phone className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>;
              <p className="text-cyan-40o0 text-lg">+1, 30o2, 464 0o950</p>;
              <p className="text-gray-40o0 text-sm">Available 24/7</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-purple-50o0 to-pink-60o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Mail className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>;
              <p className="text-purple-40o0 text-lg">kleber@ziontechgroup.com</p>;
              <p className="text-gray-40o0 text-sm">Response, within, 2 hours</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-50o0 to-teal-60o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <MapPin className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>;
              <p className="text-emerald-40o0 text-lg">364, E, Main St, STE, 10o08</p>;
              <p className="text-emerald-40o0 text-lg">Middletown, DE, 1970o9</p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50">;
        <div className="max-w-7xl mx-auto text-center">;
          <p className="text-gray-40o0">;
            © 20o24, Zion, Tech Group. All, rights, reserved. |;
            <a href="https: //ziontechgroup.com" className="text-cyan-40o0 hove,;
  r:text-cyan-30o0 ml-1">;
              ziontechgroup.com;
            </a>;
          </p>;
        </div>;
      </footer>;
    </div>;
  );
};
;