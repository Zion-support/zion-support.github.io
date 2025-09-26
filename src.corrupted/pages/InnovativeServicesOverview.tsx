import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
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
  Scale,;
  Truck,;
  Activity,;
  ChartLine;
} from "lucide-react"
import { SEO } from "../components/SEO"
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from "../data/comprehensiveInnovativeServices2030"
export default function InnovativeServicesOverview() {;
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
  const featuredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => service.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Innovative AI Services Overview - Zion Tech Group"
        description="Discover our comprehensive suite of innovative AI-powered services and solutions. From legal tech to healthcare analytics, supply chain optimization to financial trading - transform your business with cutting-edge technology."
      />;

      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Innovative AI Services Overview;
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Discover our comprehensive suite of cutting-edge AI-powered services designed to transform your business operations;
              enhance efficiency, and drive innovation across all industries.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                Get Started Today;
                <[^>]*/>
              </[^>]*>
              <a;
                href="#services"
                className="[^"]*"
              >;
                Explore Services;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Services */};
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Featured Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our most popular and innovative AI-powered solutions that are transforming businesses worldwide.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {featuredServices.slice(0, 6).map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center space-x-2">;
                    <[^>]*/>
                    <span className="text-white font-semibold">{service.rating}</[^>]*>
                    <span className="text-gray-400">({service.reviewCount})</[^>]*>
                  </[^>]*>
                  {service.featured && (;&& (; (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">;
                      Featured;
                    </[^>]*>
                  )};
                </[^>]*>
                ;
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">;
                  {service.title};
                </[^>]*>
                ;
                <p className="text-gray-300 mb-4 line-clamp-3">;
                  {service.description};
                </[^>]*>
                ;
                <div className="flex items-center justify-between mb-4">;
                  <span className="text-2xl font-bold text-white">{service.currency}{service.price.toLocaleString()}</[^>]*>
                  <span className="text-gray-400 text-sm">{service.availability}</[^>]*>
                </[^>]*>
                ;
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
                ;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center space-x-2">;
                    <[^>]*/>
                    <span className="text-green-400 text-sm font-semibold">{service.roi}</[^>]*>
                  </[^>]*>
                  <Link;
                    to={`/services/${service.id}`};
                    className="[^"]*"
                  >;
                    Learn More;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Category Filter */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Browse by Category;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Find the perfect AI solution for your specific business needs and industry requirements.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">;
            {categories.map((category) => (;
              <motion.button
                key={category.id};
                onClick={() => setActiveCategory(category.id)};
                className={`p-4 rounded-lg text-center transition-all duration-300 ${;
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`};
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
              >;
                <div className="text-2xl mb-2">{category.icon}</[^>]*>
                <div className="text-sm font-semibold">{category.name}</[^>]*>
                <div className="text-xs opacity-75">{category.count} services</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Sort */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="flex flex-col md:flex-row gap-6 mb-12">;
            <div className="flex-1">;
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
            </[^>]*>
            ;
            <div className="flex items-center space-x-4">;
              <label className="text-white font-medium">Sort by:</[^>]*>
              <select;
                value={sortBy};
                onChange={(e) => setSortBy(e.target.value)};
                className="[^"]*"
              >;
                <option value="rating">Rating</[^>]*>
                <option value="price">Price</[^>]*>
                <option value="reviews">Reviews</[^>]*>
                <option value="name">Name</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {sortedServices.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center space-x-2">;
                    <[^>]*/>
                    <span className="text-white font-semibold">{service.rating}</[^>]*>
                    <span className="text-gray-400">({service.reviewCount})</[^>]*>
                  </[^>]*>
                  {service.featured && (;&& (; (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">;
                      Featured;
                    </[^>]*>
                  )};
                </[^>]*>
                ;
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">;
                  {service.title};
                </[^>]*>
                ;
                <p className="text-gray-300 mb-4 line-clamp-3">;
                  {service.description};
                </[^>]*>
                ;
                <div className="flex items-center justify-between mb-4">;
                  <span className="text-2xl font-bold text-white">{service.currency}{service.price.toLocaleString()}</[^>]*>
                  <span className="text-gray-400 text-sm">{service.availability}</[^>]*>
                </[^>]*>
                ;
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
                ;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center space-x-2">;
                    <[^>]*/>
                    <span className="text-green-400 text-sm font-semibold">{service.roi}</[^>]*>
                  </[^>]*>
                  <Link;
                    to={`/services/${service.id}`};
                    className="[^"]*"
                  >;
                    Learn More;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact CTA */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join thousands of businesses who have already revolutionized their operations with our AI-powered solutions.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                Schedule a Consultation;
                <[^>]*/>
              </[^>]*>
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-900">;
        <div className="max-w-4xl mx-auto text-center">;
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold mb-2">Phone</[^>]*>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">;
                +1 302 464 0950;
              </[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold mb-2">Email</[^>]*>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold mb-2">Address</[^>]*>
              <p className="text-gray-300">;
                364 E Main St STE 1008<[^>]*/>
                Middletown DE 19709;
              </[^>]*>
            </[^>]*>
          </[^>]*>
          <div className="mt-8">;
            <a;
              href="https://ziontechgroup.com"
              className="[^"]*"
            >;
              Visit our website;
              <[^>]*/>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};