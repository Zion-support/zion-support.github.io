import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {,
  Brain;
  Cloud;
  Shield;
  Rocket;
  Zap;
  Users;
  Globe;
  Cpu;
  Lock;
  Heart;
  Star;
  ArrowRight;
  CheckCircle;
  TrendingUp;
  Code;
  Database;
  Network;
  Smartphone;
  BarChart3;
  MessageSquare;
  FileText;
  ShoppingCart;
  Headphones;
  Mail;
  Search;
  HelpCircle;
  ShieldCheck;
  Globe2;
  Leaf;
  Sparkles;
  Target;
  DollarSign;
  Clock;
  Award;
  Phone;
  Mail as MailIcon;
  MapPin;
  Infinity;
  Link as LinkIcon;
  Atom;
  Leaf as LeafIcon;
  Factory;
  Microscope;
  Gauge;
  Palette;
  BookOpen;
  Lightbulb;
  Zap as ZapIcon;
  Shield as ShieldIcon;
  Users as UsersIcon;
  Database as DatabaseIcon;
  Globe as GlobeIcon;
  Cpu as CpuIcon;
  Lock as LockIcon;
  Heart as HeartIcon;
  Star as StarIcon;
  ArrowRight as ArrowRightIcon;
  CheckCircle as CheckCircleIcon;
  TrendingUp as TrendingUpIcon;
  Code as CodeIcon;
  Network as NetworkIcon;
  Smartphone as SmartphoneIcon;
  BarChart3 as BarChart3Icon;
  MessageSquare as MessageSquareIcon;
  FileText as FileTextIcon;
  ShoppingCart as ShoppingCartIcon;
  Headphones as HeadphonesIcon;
  Mail as MailIcon2;
  Search as SearchIcon;
  HelpCircle as HelpCircleIcon;
  ShieldCheck as ShieldCheckIcon;
  Globe2 as Globe2Icon;
  Leaf as LeafIcon2;
  Sparkles as SparklesIcon;
  Target as TargetIcon;
  DollarSign as DollarSignIcon;
  Clock as ClockIcon;
  Award as AwardIcon;
  Phone as PhoneIcon;
  MapPin as MapPinIcon;
  Infinity as InfinityIcon,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '@/data/comprehensiveInnovativeServices2030';
export default function ComprehensiveServicesAdvertising() {,
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  // Enhanced categories with new services,
  const categories = [,
    { id: 'all', name: 'All Services', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.length, icon: '🚀', color: 'from-cyan-500 to-blue-500' ,};
    { id: 'AI & Business Intelligence', name: 'AI & Business Intelligence', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Business Intelligence').length, icon: '🤖', color: 'from-purple-500 to-pink-500' ,};
    { id: 'Cybersecurity', name: 'Cybersecurity', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-red-500 to-orange-500' ,};
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Cloud & DevOps').length, icon: '☁️', color: 'from-blue-500 to-cyan-500' ,};
    { id: 'AI & Marketing', name: 'AI & Marketing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Marketing').length, icon: '📈', color: 'from-green-500 to-emerald-500' ,};
    { id: 'Quantum Computing', name: 'Quantum Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-indigo-500 to-purple-500' ,};
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'IoT & Edge Computing').length, icon: '🌐', color: 'from-teal-500 to-cyan-500' ,};
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Blockchain & Web3').length, icon: '🔗', color: 'from-yellow-500 to-orange-500' ,};
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-pink-500 to-red-500' ,};
    { id: 'FinTech', name: 'FinTech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'FinTech').length, icon: '💰', color: 'from-emerald-500 to-green-500' ,};
    { id: 'Digital Twin', name: 'Digital Twin', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Digital Twin').length, icon: '🔄', color: 'from-blue-500 to-indigo-500' ,};
    { id: 'Space Technology', name: 'Space Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Space Technology').length, icon: '🚀', color: 'from-purple-500 to-pink-500' ,};
    { id: 'Sustainable Technology', name: 'Sustainable Technology', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'Sustainable Technology').length, icon: '🌱', color: 'from-green-500 to-teal-500' ,};
    { id: 'AI & Content', name: 'AI & Content', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-orange-500 to-red-500' ,};
    { id: 'AI & Customer Support', name: 'AI & Customer Support', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Customer Support').length, icon: '💬', color: 'from-blue-500 to-purple-500' ,};
    { id: 'AI & HR', name: 'AI & HR', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-indigo-500 to-blue-500' ,};
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Legal Tech').length, icon: '⚖️', color: 'from-blue-500 to-indigo-500' ,};
    { id: 'AI & Research', name: 'AI & Research', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Research').length, icon: '🔬', color: 'from-purple-500 to-violet-500' ,};
    { id: 'AI & Green Tech', name: 'AI & Green Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Green Tech').length, icon: '🌿', color: 'from-green-500 to-emerald-500' ,};
    { id: 'AI & Metaverse', name: 'AI & Metaverse', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Metaverse').length, icon: '🌍', color: 'from-purple-500 to-indigo-500' ,};
    { id: 'AI & Space Tech', name: 'AI & Space Tech', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Space Tech').length, icon: '🛸', color: 'from-indigo-500 to-purple-500' ,};
    { id: 'AI & Operations', name: 'AI & Operations', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Operations').length, icon: '⚙️', color: 'from-gray-500 to-slate-500' ,};
    { id: 'AI & Development', name: 'AI & Development', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Development').length, icon: '💻', color: 'from-cyan-500 to-blue-500' ,};
    { id: 'AI & Education', name: 'AI & Education', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Education').length, icon: '🎓', color: 'from-blue-500 to-indigo-500' ,};
    { id: 'AI & Entertainment', name: 'AI & Entertainment', count: COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(s => s.category === 'AI & Entertainment').length, icon: '🎮', color: 'from-purple-500 to-pink-500' ,}
  ];
  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {,
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {,
    switch (sortBy) {,
      case 'rating':,
        return b.rating - a.rating;
      case 'price':,
        return a.price - b.price;
      case 'reviews':,
        return b.reviewCount - a.reviewCount;
      case 'name':,
        return a.title.localeCompare(b.title);
      default:  ,}
  const getCategoryIcon = (category: string) => {,
    switch (category) {,
      case 'AI & Business Intelligence':,
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity':,
        return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps':,
        return <Cloud className="w-6 h-6" />;
      case 'AI & Marketing':,
        return <TrendingUp className="w-6 h-6" />;
      case 'Quantum Computing':,
        return <Atom className="w-6 h-6" />;
      case 'IoT & Edge Computing':,
        return <Network className="w-6 h-6" />;
      case 'Blockchain & Web3':,
        return <LinkIcon className="w-6 h-6" />;
      case 'AI & Healthcare':,
        return <Heart className="w-6 h-6" />;
      case 'FinTech':,
        return <DollarSign className="w-6 h-6" />;
      case 'Digital Twin':,
        return <Globe className="w-6 h-6" />;
      case 'Space Technology':,
        return <Rocket className="w-6 h-6" />;
      case 'Sustainable Technology':,
        return <Leaf className="w-6 h-6" />;
      case 'AI & Content':,
        return <FileText className="w-6 h-6" />;
      case 'AI & Customer Support':,
        return <MessageSquare className="w-6 h-6" />;
      case 'AI & HR':,
        return <Users className="w-6 h-6" />;
      case 'AI & Legal Tech':,
        return <ShieldCheck className="w-6 h-6" />;
      case 'AI & Research':,
        return <Microscope className="w-6 h-6" />;
      case 'AI & Green Tech':,
        return <LeafIcon className="w-6 h-6" />;
      case 'AI & Metaverse':,
        return <Globe2 className="w-6 h-6" />;
      case 'AI & Space Tech':,
      case 'AI & Operations':,
        return <Factory className="w-6 h-6" />;
      case 'AI & Development':,
        return <Code className="w-6 h-6" />;
      case 'AI & Education':,
        return <BookOpen className="w-6 h-6" />;
      case 'AI & Entertainment':,
        return <Palette className="w-6 h-6" />;
        return <Star className="w-6 h-6" />,
  };
  return (,
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">,
      <SEO,
        title="Comprehensive Services Advertising - Zion Tech Group",
        description="Discover our comprehensive portfolio of innovative AI, blockchain, quantum computing, and technology services. Transform your business with cutting-edge solutions from Zion Tech Group.",
      />,
      {/* Hero Section */}
      <div className="relative overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>,
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">,
          <motion.div,
            initial={{ opacity: 0, y: 20 ,}}
            animate={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            className="text-center",
          >,
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">,
                Revolutionary,
              </span>,
              <br />,
              <span className="text-white">Technology Services</span>,
            </h1>,
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">,
              Transform your business with our comprehensive portfolio of AI-powered, blockchain-enabled, and quantum computing solutions.,
              From autonomous operations to sustainable technology, we deliver the future today.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link,
                to="/contact",
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105",
              >,
                <Phone className="w-5 h-5 mr-2" />,
                Get Started Today,
              </Link>,
                to="/pricing",
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300",
                <DollarSign className="w-5 h-5 mr-2" />,
                View Pricing,
            </div>,
          </motion.div>,
        </div>,
      </div>,
      {/* Contact Information Banner */,}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-8">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">,
            <div className="flex flex-col items-center">,
              <Phone className="w-8 h-8 text-blue-400 mb-2" />,
              <p className="text-white font-semibold">Call Us</p>,
              <a href="tel:+13024640950" className="text-blue-300 hover:text-white transition-colors">,
                +1 302 464 0950,
              </a>,
              <Mail className="w-8 h-8 text-purple-400 mb-2" />,
              <p className="text-white font-semibold">Email Us</p>,
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-white transition-colors">,
                kleber@ziontechgroup.com,
              <MapPin className="w-8 h-8 text-pink-400 mb-2" />,
              <p className="text-white font-semibold">Visit Us</p>,
              <p className="text-pink-300">,
                364 E Main St STE 1008<br />,
                Middletown DE 19709,
              </p>,
          </div>,
      {/* Services Overview */,}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,
        <motion.div,
          initial={{ opacity: 0, y: 20 ,}}
          animate={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.8, delay: 0.2 ,}}
          className="text-center mb-16",
        >,
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">,
              Comprehensive Service Portfolio,
            </span>,
          </h2>,
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
            Our cutting-edge services span across AI, blockchain, quantum computing, and sustainable technology.,
            Each solution is designed to deliver measurable business value and competitive advantage.,
          </p>,
        </motion.div>,
        {/* Category Filter */}
        <div className="mb-12">,
          <div className="flex flex-wrap justify-center gap-4">,
            {categories.map((category) => (,
              <button,
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover: scale-105 ${,
                  activeCategory === category.id,
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg',
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700',}`}
                <span className="mr-2">{category.icon}</span>,
                {category.name} ({category.count}),
              </button>,
            ))}
        {/* Search and Sort */}
        <div className="flex flex-col md: flex-row gap-4 mb-8 justify-center items-center">,
          <div className="relative">,
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />,
            <input,
              type="text",
              placeholder="Search services...",
              value={searchTerm,}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80",
            />,
          <select,
            value={sortBy,}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            <option value="rating">Sort by Rating</option>,
            <option value="price">Sort by Price</option>,
            <option value="reviews">Sort by Reviews</option>,
            <option value="name">Sort by Name</option>,
          </select>,
        {/* Services Grid */,}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
          <AnimatePresence>,
            {sortedServices.map((service, index) => (,
              <motion.div,
                key={service.id}
                initial={{ opacity: 0, y: 20 ,}}
                animate={{ opacity: 1, y: 0 ,}}
                exit={{ opacity: 0, y: -20 ,}}
                transition={{ duration: 0.5, delay: index * 0.1 ,}}
                className="bg-gray-800 rounded-xl p-6 hover: bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500",
                <div className="flex items-center justify-between mb-4">,
                  <div className="flex items-center space-x-3">,
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">,
                      {getCategoryIcon(service.category),}
                    </div>,
                    <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">,
                      {service.subcategory}
                    </span>,
                  </div>,
                  <div className="flex items-center space-x-1">,
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />,
                    <span className="text-white font-semibold">{service.rating}</span>,
                    <span className="text-gray-400">({service.reviewCount})</span>,
                </div>,
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>,
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>,
                <div className="space-y-3 mb-6">,
                  <div className="flex items-center justify-between">,
                    <span className="text-gray-400">Price: </span>,
                    <span className="text-white font-semibold">{service.currency,}{service.price.toLocaleString()}</span>,
                    <span className="text-gray-400">Market Price: </span>,
                    <span className="text-blue-400">{service.marketPrice,}</span>,
                    <span className="text-gray-400">ROI: </span>,
                    <span className="text-green-400 font-semibold">{service.roi,}</span>,
                    <span className="text-gray-400">Setup Time: </span>,
                    <span className="text-yellow-400">{service.setupTime,}</span>,
                <div className="mb-4">,
                  <div className="flex items-center justify-between mb-2">,
                    <span className="text-gray-400 text-sm">AI Score</span>,
                    <span className="text-white font-semibold">{service.aiScore}/100</span>,
                  <div className="w-full bg-gray-700 rounded-full h-2">,
                    <div,
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300",
                      style={{ width: `${service.aiScore,}%` }}
                    ></div>,
                  <p className="text-gray-400 text-sm mb-2">Key Features: </p>,
                  <div className="flex flex-wrap gap-2">,
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (,
                      <span,
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded",
                      >,
                        {tag}
                      </span>,
                    ))}
                <div className="space-y-3">,
                  <Link,
                    to={`/services/${service.id}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center",
                  >,
                    <span>Learn More</span>,
                    <ArrowRight className="w-4 h-4 ml-2" />,
                  </Link>,
                  <a,
                    href={`https://ziontechgroup.com/services/${service.id,}`}
                    target="_blank",
                    rel="noopener noreferrer",
                    className="w-full border border-blue-500 text-blue-400 font-semibold py-3 px-4 rounded-lg hover: bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center",
                    <span>Visit Service Page</span>,
                    <Globe className="w-4 h-4 ml-2" />,
                  </a>,
              </motion.div>,
          </AnimatePresence>,
        {/* Call to Action */,}
          transition={{ duration: 0.8, delay: 0.4 ,}}
          className="text-center mt-16",
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">,
            <h3 className="text-3xl md: text-4xl font-bold text-white mb-6">,
              Ready to Transform Your Business?,
            </h3>,
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">,
              Join thousands of businesses already leveraging our cutting-edge technology solutions.,
              Get started today and experience the future of business innovation.,
                Schedule Consultation,
              <a,
                href="mailto:kleber@ziontechgroup.com",
                <Mail className="w-5 h-5 mr-2" />,
                Get Quote,
      {/* Footer Contact Section */,}
      <div className="bg-gray-900 py-16">,
          <div className="grid grid-cols-1 md: grid-cols-2 gap-12">,
            <div>,
              <h3 className="text-3xl font-bold text-white mb-6">,
                Let's Build the Future Together,
              </h3>,
              <p className="text-gray-300 mb-8 text-lg">,
                Our team of technology experts is ready to help you implement cutting-edge solutions,
                that will transform your business operations and drive unprecedented growth.,
              <div className="space-y-4">,
                <div className="flex items-center space-x-3">,
                  <CheckCircle className="w-5 h-5 text-green-400" />,
                  <span className="text-white">24/7 Technical Support</span>,
                  <span className="text-white">Custom Implementation</span>,
                  <span className="text-white">Ongoing Optimization</span>,
                  <span className="text-white">ROI Guarantee</span>,
              </div>,
            <div className="bg-gray-800 rounded-xl p-8">,
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>,
                  <Phone className="w-5 h-5 text-blue-400" />,
                  <div>,
                    <p className="text-white font-semibold">Phone</p>,
                    <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">,
                      +1 302 464 0950,
                    </a>,
                  <Mail className="w-5 h-5 text-purple-400" />,
                    <p className="text-white font-semibold">Email</p>,
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">,
                      kleber@ziontechgroup.com,
                  <MapPin className="w-5 h-5 text-pink-400" />,
                    <p className="text-white font-semibold">Address</p>,
                    <p className="text-pink-400">,
                      364 E Main St STE 1008<br />,
                      Middletown DE 19709,
                    </p>,
                  <Globe className="w-5 h-5 text-green-400" />,
                    <p className="text-white font-semibold">Website</p>,
                    <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">,
                      ziontechgroup.com,
    </div>,
  ),}
,
}}})))