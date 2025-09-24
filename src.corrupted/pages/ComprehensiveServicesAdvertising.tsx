import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ;
  Brain,;
  Cloud, ;
  Shield, ;
  Rocket, ;
  Zap, ;
  Users, ;
  Globe, ;
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
  Mail as MailIcon,;
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
  DatabaseIcon as DBIcon,;
  NetworkIcon,;
  SmartphoneIcon,;
  BarChart3Icon,;
  MessageSquareIcon,;
  FileTextIcon,;
  ShoppingCartIcon,;
  HeadphonesIcon,;
  MailIcon as MailIcon2,;
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
  PhoneIcon,;
  MapPinIcon,;
  InfinityIcon;
} from "lucide-react"
import { SEO } from "../components/SEO"
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from "../data/comprehensiveInnovativeServices2030"
export default function ComprehensiveServicesAdvertising() {;
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  //[^;]*
  const categories = [;
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' };
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' };
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' };
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' };
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' };
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' };
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' };
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' };
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' };
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' };
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' };
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' };
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' };
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' };
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' };
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' };
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' };
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' };
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' };
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' };
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' };
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' };
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' };
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' };
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' };
  ];
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {;
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
    return matchesCategory && matchesSearch,;&& matchesSearch,; matchesSearch,
  }),;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'rating':;
        return b.rating - a.rating,;
      case 'price':;
        return a.price - b.price,;
      case 'reviews':;
        return b.reviewCount - a.reviewCount,;
      case 'name':;
        return a.title.localeCompare(b.title),;
      default: return b.rating - a.rating
    };
  });
  const getCategoryIcon = (category: string) => {;
    switch (category) {;
      case 'AI & Business Intelligence': return <[^>]*/>
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
      case 'AI & Development': return <Code className="w-6 h-6" />,;
      case 'AI & Education': return <Award className="w-6 h-6" />,;
      case 'AI & Entertainment': return <Sparkles className="w-6 h-6" />,;
      default: return <[^>]*/>
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Comprehensive AI & Technology Services - Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge AI, blockchain, quantum computing, and emerging technology services. Transform your business with autonomous solutions."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 px-4 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.h1 ;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              Revolutionary;
            </[^>]*>
            <[^>]*/>
            <span className="text-white">AI & Technology</[^>]*>
            <[^>]*/>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">;
              Services;
            </[^>]*>
          </[^>]*>
          ;
          <motion.p ;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            className="[^"]*"
          >;
            Transform your business with our comprehensive portfolio of cutting-edge autonomous AI;
            blockchain, quantum computing, and emerging technology solutions. ;
            <span className="text-cyan-400 font-semibold"> 500%+ ROI guaranteed.</[^>]*>
          </[^>]*>

          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
            className="[^"]*"
          >;
            <a ;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              <[^>]*/>
              Call Now: +1 302 464 0950;
            </[^>]*>
            <a ;
              href="mailto:kleber@ziontechgroup.com"
              className="[^"]*"
            >;
              <[^>]*/>
              Email Us;
            </[^>]*>
          </[^>]*>

          {/* Contact Info Banner */};
          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
            className="[^"]*"
          >;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
              <div className="flex flex-col items-center">;
                <[^>]*/>
                <p className="text-white font-semibold">Phone</[^>]*>
                <p className="text-cyan-400">+1 302 464 0950</[^>]*>
              </[^>]*>
              <div className="flex flex-col items-center">;
                <[^>]*/>
                <p className="text-white font-semibold">Email</[^>]*>
                <p className="text-purple-400">kleber@ziontechgroup.com</[^>]*>
              </[^>]*>
              <div className="flex flex-col items-center">;
                <[^>]*/>
                <p className="text-white font-semibold">Address</[^>]*>
                <p className="text-emerald-400">364 E Main St STE 1008<br />Middletown DE 19709</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Overview */};
      <section className="py-20 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                {COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length}+;
              </span> ;
              Revolutionary Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              From autonomous AI platforms to quantum computing solutions, our comprehensive portfolio ;
              covers every aspect of modern technology innovation. Each service is designed to deliver ;
              exceptional ROI and transformative business outcomes.;
            </[^>]*>
          </[^>]*>

          {/* Category Filter */};
          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            className="[^"]*"
          >;
            <div className="flex flex-wrap justify-center gap-4">;
              {categories.map((category) => (;
                <button;
                  key={category.id};
                  onClick={() => setActiveCategory(category.id)};
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${;
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`};
                >;
                  <span className="mr-2">{category.icon}</[^>]*>
                  {category.name} ({category.count});
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>

          {/* Search and Sort */};
          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
            className="[^"]*"
          >;
            <div className="relative flex-1 max-w-md">;
              <[^>]*/>
              <input;
                type="text"
                placeholder="Search services..."
                value={searchTerm};
                onChange={(e) => setSearchTerm(e.target.value)};
                className="[^"]*"
              />;
            </[^>]*>
            ;
            <select;
              value={sortBy};
              onChange={(e) => setSortBy(e.target.value)};
              className="[^"]*"
            >;
              <option value="rating">Sort by Rating</[^>]*>
              <option value="price">Sort by Price</[^>]*>
              <option value="reviews">Sort by Reviews</[^>]*>
              <option value="name">Sort by Name</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Services Grid */};
          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
            className="[^"]*"
          >;
            {sortedServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                {/* Service Header */};
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex items-center gap-3">;
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">;
                      {getCategoryIcon(service.category)};
                    </[^>]*>
                    <div>;
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">;
                        {service.title};
                      </[^>]*>
                      <p className="text-sm text-gray-400">{service.category}</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  <div className="flex items-center gap-1">;
                    <[^>]*/>
                    <span className="text-white font-semibold">{service.rating}</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Service Description */};
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</[^>]*>

                {/* Service Tags */};
                <div className="flex flex-wrap gap-2 mb-4">;
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (;
                    <span;
                      key={tagIndex};
                      className="[^"]*"
                    >;
                      {tag};
                    </[^>]*>
                  ))};
                </[^>]*>

                {/* Service Metrics */};
                <div className="grid grid-cols-2 gap-4 mb-6">;
                  <div className="text-center">;
                    <p className="text-2xl font-bold text-cyan-400">${service.price.toLocaleString()}</[^>]*>
                    <p className="text-xs text-gray-400">Starting Price</[^>]*>
                  </[^>]*>
                  <div className="text-center">;
                    <p className="text-2xl font-bold text-emerald-400">{service.aiScore}</[^>]*>
                    <p className="text-xs text-gray-400">AI Score</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Market Information */};
                <div className="bg-white/5 rounded-lg p-4 mb-4">;
                  <div className="flex justify-between items-center mb-2">;
                    <span className="text-sm text-gray-400">Market Price:</[^>]*>
                    <span className="text-sm text-emerald-400 font-semibold">{service.marketPrice}</[^>]*>
                  </[^>]*>
                  <div className="flex justify-between items-center mb-2">;
                    <span className="text-sm text-gray-400">ROI:</[^>]*>
                    <span className="text-sm text-cyan-400 font-semibold">{service.roi}</[^>]*>
                  </[^>]*>
                  <div className="flex justify-between items-center">;
                    <span className="text-sm text-gray-400">Setup Time:</[^>]*>
                    <span className="text-sm text-purple-400 font-semibold">{service.setupTime}</[^>]*>
                  </[^>]*>
                </[^>]*>

                {/* Contact & Action */};
                <div className="space-y-3">;
                  <a;
                    href={`tel:+13024640950`};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    Get Quote Now;
                  </[^>]*>
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    Email Inquiry;
                  </[^>]*>
                </[^>]*>

                {/* Additional Info */};
                <div className="mt-4 pt-4 border-t border-white/10">;
                  <div className="flex justify-between items-center text-sm">;
                    <span className="text-gray-400">Reviews: {service.reviewCount}</[^>]*>
                    <span className="text-gray-400">Availability: {service.availability}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Call to Action */};
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.h2 ;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            Ready to Transform Your Business?;
          </[^>]*>
          ;
          <motion.p ;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
            className="[^"]*"
          >;
            Join thousands of businesses already leveraging our revolutionary AI and technology services. ;
            Get started today with a free consultation and discover how we can accelerate your digital transformation.;
          </[^>]*>

          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
            className="[^"]*"
          >;
            <a ;
              href="tel:+13024640950"
              className="[^"]*"
            >;
              <[^>]*/>
              Call Now: +1 302 464 0950;
            </[^>]*>
            <a ;
              href="mailto:kleber@ziontechgroup.com"
              className="[^"]*"
            >;
              <[^>]*/>
              Schedule Consultation;
            </[^>]*>
          </[^>]*>

          {/* Contact Details */};
          <motion.div ;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.6 }};
            className="[^"]*"
          >;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</[^>]*>
              <p className="text-cyan-400 text-lg">+1 302 464 0950</[^>]*>
              <p className="text-gray-400 text-sm">Available 24/7</[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Email</[^>]*>
              <p className="text-purple-400 text-lg">kleber@ziontechgroup.com</[^>]*>
              <p className="text-gray-400 text-sm">Response within 2 hours</[^>]*>
            </[^>]*>
            ;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Address</[^>]*>
              <p className="text-emerald-400 text-lg">364 E Main St STE 1008</[^>]*>
              <p className="text-emerald-400 text-lg">Middletown DE 19709</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Footer */};
      <footer className="py-12 px-4 bg-black/50">;
        <div className="max-w-7xl mx-auto text-center">;
          <p className="text-gray-400">;
            © 2024 Zion Tech Group. All rights reserved. | ;
            <a href="https: //[^;]*
              ziontechgroup.com
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};