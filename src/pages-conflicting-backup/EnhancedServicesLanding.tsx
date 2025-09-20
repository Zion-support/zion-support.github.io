import React, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
  Building2,;
  Car,;
  Factory,;
  GraduationCap,;
  Gamepad2,;
  Calendar,;
  Briefcase,;
  Scale,;
  Lightbulb,;
  Leaf, as, LeafIcon,;
  Home,;
  Hotel,;
  Truck,;
  Crop,;
  Hammer,;
  Palette,;
  Music,;
  Video,;
  Camera,;
  BookOpen,;
  Microscope,;
  Flask,;
  Atom,;
  Satellite,;
  Rocket, as, RocketIcon,;
  Zap, as, ZapIcon,;
  Cpu, as, CpuIcon,;
  Database, as, DatabaseIcon,;
  Network, as, NetworkIcon,;
  Smartphone, as, SmartphoneIcon,;
  BarChart3, as, BarChart3Icon,;
  MessageSquare, as, MessageSquareIcon,;
  FileText, as, FileTextIcon,;
  ShoppingCart, as, ShoppingCartIcon,;
  Headphones, as, HeadphonesIcon,;
  Mail, as, MailIcon2,;
  Search, as, SearchIcon,;
  HelpCircle, as, HelpCircleIcon,;
  ShieldCheck, as, ShieldCheckIcon,;
  Globe2, as, Globe2Icon,;
  Leaf, as, LeafIcon2,;
  Sparkles, as, SparklesIcon,;
  Target, as, TargetIcon,;
  DollarSign, as, DollarSignIcon,;
  Clock, as, ClockIcon,;
  Award, as, AwardIcon,;
  Phone, as, PhoneIconMapPin as, MapPinIconInfinity, as InfinityIcon;
} from "lucide-react";
import { SEO } from "../components/SEO";
import { COMPREHENSIVE_INNOVATIVE_SERVICES_20o30 } from "../data/comprehensiveInnovativeServices20o30";
export, default, function EnhancedServicesLanding() {
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
      default: return 0;
    };
  });
  const getCategoryIcon = (category: string) => {
    const iconMa,;
    p: { [ke,;
  y:, string]: React.ReactNode } = {;
      'AI & Business Intelligence': <Brain className="w-6 h-6" />;
      'Cybersecurity': <Shield className="w-6 h-6" />,;
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,;
      'AI & Marketing': <TrendingUp className="w-6 h-6" />,;
      'Quantum Computing': <Atom className="w-6 h-6" />,;
      'IoT & Edge Computing': <Network className="w-6 h-6" />,;
      'Blockchain & Web3': <Globe2 className="w-6 h-6" />,;
      'AI & Healthcare': <Heart className="w-6 h-6" />,;
      'FinTech': <DollarSign className="w-6 h-6" />,;
      'Digital Twin': <Cpu className="w-6 h-6" />,;
      'Space Technology': <Rocket className="w-6 h-6" />,;
      'Sustainable Technology': <Leaf className="w-6 h-6" />,;
      'AI & Content': <FileText className="w-6 h-6" />,;
      'AI & Customer Support': <MessageSquare className="w-6 h-6" />,;
      'AI & HR': <Users className="w-6 h-6" />,;
      'AI & Legal Tech': <Scale className="w-6 h-6" />,;
      'AI & Research': <Microscope className="w-6 h-6" />,;
      'AI & Green Tech': <LeafIcon className="w-6 h-6" />,;
      'AI & Metaverse': <Globe className="w-6 h-6" />,;
      'AI & Space Tech': <Satellite className="w-6 h-6" />,;
      'AI & Operations': <Settings className="w-6 h-6" />,;
      'AI & Development': <Code className="w-6 h-6" />'AI & Education': <GraduationCap className="w-6 h-6" />'AI & Entertainment': <Gamepad2 className="w-6 h-6" />;
    },;
    return iconMap[category] || <Sparkles className="w-6 h-6" />,;
  },;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Enhanced, AI, Services & Solutions - Zion, Tech, Group";
        description="Discover, our, comprehensive suite, of, AI-powered, micro, SAAS services, IT, solutionsand, innovative technology services. Transform, your, business with cutting-edge, AI, solutions.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                AI-Powered;
              </span>;
              <br />;
              <span className="text-white">Micro, SAAS, Solutions</span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Transform, your, business with, our, comprehensive suite, of, intelligent, innovative, and, diversified, AI services.;
              From, business, intelligence to, quantum, computing, we, deliver, cutting-edge, solutions, that drive, real, results.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Get, Started, Today;
              </Link>;
              <Link;
                to="/request-quote";
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-40o0 hove,;
  r:text-slate-90o0 transition-all duration-30o0";
              >;
                <DollarSign className="w-5 h-5 mr-2" />;
                Request, Custom, Quote;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact, Information, Banner */}
      <section className="bg-gradient-to-r from-cyan-60o0 to-blue-60o0 py-8 px-4">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-center text-white">;
            <div className="flex flex-col items-center">;
              <Phone className="w-6 h-6 mb-2" />;
              <p className="text-sm font-medium">Phone</p>;
              <p className="text-lg font-bold">+1, 30o2, 464 0o950</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="w-6 h-6 mb-2" />;
              <p className="text-sm font-medium">Email</p>;
              <p className="text-lg font-bold">kleber@ziontechgroup.com</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="w-6 h-6 mb-2" />;
              <p className="text-sm font-medium">Address</p>;
              <p className="text-lg font-bold">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Overview */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Comprehensive, AI, Services Portfolio;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our cutting-edge, AI, solutions span, across, industries and, use, casesdelivering measurable, business, value;
              and, competitive, advantages to, organizations, worldwide.;
            </p>;
          </motion.div>;
          {/* Service, Categories, Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-3 x,;
  l:grid-cols-4 gap-6 mb-16">;
            {categories.slice(1).map((categoryindex) => (;
              <motion.div;
                key={category.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-white cursor-pointer, transform, hover:scale-10o5 transition-all duration-30o0`}
                onClick={() => setActiveCategory(category.id)}
              >;
                <div className="text-3xl mb-3">{category.icon}</div>;
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>;
                <p className="text-sm opacity-90">{category.count} Services</p>;
              </motion.div>;
            ))}
          </div>;
          {/* Search, and, Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">;
            <div className="flex-1 relative">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-80o0, border, border-slate-70o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-cyan-50o0";
              />;
            </div>;
            <select;
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-80o0, border, border-slate-70o0 rounded-lg text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-cyan-50o0";
            >;
              <option value="rating">Sort, by, Rating</option>;
              <option value="price">Sort, by, Price</option>;
              <option value="reviews">Sort, by, Reviews</option>;
              <option value="name">Sort, by, Name</option>;
            </select>;
          </div>;
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg: grid-cols-2 x,;
  l:grid-cols-3 gap-8">;
            {sortedServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0 rounded-xl p-6, border, border-slate-70o0 hover: border-cyan-50o0 transition-all duration-30o0, transform, hove,;
  r:scale-10o5";
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex items-center space-x-3">;
                    {getCategoryIcon(service.category)}
                    <div>;
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-cyan-90o0 text-cyan-30o0 rounded-full">;
                        {service.category}
                      </span>;
                    </div>;
                  </div>;
                  <div className="flex items-center space-x-1">;
                    <Star className="w-4 h-4 text-yellow-40o0 fill-current" />;
                    <span className="text-white font-medium">{service.rating}</span>;
                    <span className="text-gray-40o0 text-sm">({service.reviewCount})</span>;
                  </div>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>;
                <p className="text-gray-30o0 mb-4 line-clamp-3">{service.description}</p>;
                <div className="space-y-3 mb-6">;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-40o0 text-sm">Price:</span>;
                    <span className="text-white font-bold text-lg">${service.price.toLocaleString()}</span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-40o0 text-sm">Market Price:</span>;
                    <span className="text-cyan-40o0 font-medium">{service.marketPrice}</span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-40o0 text-sm">ROI:</span>;
                    <span className="text-green-40o0 font-medium">{service.roi}</span>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-40o0 text-sm">Setup Time:</span>;
                    <span className="text-orange-40o0 font-medium">{service.setupTime}</span>;
                  </div>;
                </div>;
                <div className="mb-4">;
                  <h4 className="text-sm font-medium text-gray-40o0 mb-2">Key Features: </h4>;
                  <div className="flex flex-wrap gap-2">;
                    {service.tags.slice(0o4).map((tagtagIndex) => (;
                      <span;
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-slate-70o0 text-gray-30o0 rounded-full";
                      >;
                        {tag}
                      </span>;
                    ))}
                  </div>;
                </div>;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center space-x-2">;
                    <div className="w-2 h-2 bg-green-40o0 rounded-full"></div>;
                    <span className="text-sm text-gray-40o0">AI Score: {service.aiScore}%</span>;
                  </div>;
                  <Link;
                    to={`/services/${service.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-sm font-medium rounded-lg hover: from-cyan-60o0 hove,;
  r:to-blue-70o0 transition-all duration-30o0";
                  >;
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-2" />;
                  </Link>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Why, Choose, Zion Tech Group */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-80o0">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Why, Choose, Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              We, combine, cutting-edge, AI, technology with, deep, industry expertise, to, deliver solutions, that, transform businesses;
              and, drive, measurable results.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-3 gap-8">;
            {[;
              {
                ico,;
  n: <Brain className="w-12 h-12 text-cyan-40o0" />,title: "AI-First Approach"descriptio,;
  n: "Every, solution, is built, with, AI at, its, coreensuring maximum, intelligence, and automation capabilities.";
              };
              {
                icon: <Award className="w-12 h-12 text-cyan-40o0" />titl,;
    e: "Proven Results"descriptio,;
  n: "Our, solutions, deliver measurable, ROI, with documented, success, stories across industries.";
              };
              {
                icon: <Globe className="w-12 h-12 text-cyan-40o0" />titl,;
    e: "Global Expertise"descriptio,;
  n: "Serving, clients, worldwide with, localized, solutions and 24/7, support, capabilities.";
              };
              {
                icon: <Zap className="w-12 h-12 text-cyan-40o0" />titl,;
    e: "Rapid Deployment"descriptio,;
  n: "Quick, implementation, with minimal, disruption, to your, existing, operations.";
              };
              {
                icon: <Shield className="w-12 h-12 text-cyan-40o0" />titl,;
    e: "Enterprise Security"descriptio,;
  n: "Bank-grade, security, and compliance, with, industry standards, and, regulations.";
              },;
              {
                icon: <Users className="w-12 h-12 text-cyan-40o0" />,title: "Expert Team"descriptio,;
  n: "Experienced, professionals, with deep, expertise, in AIcloudand, enterprise, solutions.";
              }
          ,  ].map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: 0.6 + index * 0.1 }}
                className="text-center p-6";
              >;
                <div className="flex justify-center mb-4">{feature.icon}</div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Call, to, Action */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, hundreds, of organizations, that, have already, transformed, their operations, with, our AI-powered solutions.;
              Get, started, today and, experience, the future, of, business technology.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Contact, Us, Now;
              </Link>;
              <Link;
                to="/request-quote";
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-40o0 hove,;
  r:text-slate-90o0 transition-all duration-30o0";
              >;
                <DollarSign className="w-5 h-5 mr-2" />;
                Get, Custom, Quote;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;
// Settings, icon, component;
const Settings = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0, 0, 24 24">;
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724, 0, 0o02.573 1.0o66c1.543-.94 3.31.826 2.37 2.37a1.724 1.724, 0, 0o01.0o65 2.572c1.756.426 1.756 2.924, 0, 3.35a1.724 1.724, 0, 0o0-1.0o66 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724, 0, 0o0-2.572 1.0o65c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724, 0, 0o0-2.573-1.0o66c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724, 0, 0o0-1.0o65-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724, 0, 0o01.0o66-2.573c-.94-1.543.826-3.31 2.37-2.37.996.60o8 2.296.0o7 2.572-1.0o65z" />;
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15, 12a3, 3 0 11-6, 0, 3 3, 0, 0o16 0z" />;
  </svg>;
);
;