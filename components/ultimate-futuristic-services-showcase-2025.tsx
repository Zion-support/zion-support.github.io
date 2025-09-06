
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {

  CheckCircle, ArrowRight, Search, Filter;
  ChevronDown, ChevronUp, Eye, Play, Sparkles;
  Target, Microscope, Lock, Cloud, BarChart3;
  Settings, Cpu, Database, Network, Server;
  ShieldCheck, GlobeIcon, StarIcon, TrendingUpIcon;
  UsersIcon, CheckCircleIcon, ArrowRightIcon;
  CpuIcon, DollarSign, Phone, Mail, MapPin;
  Dna, Target as TargetIcon, Shield as ShieldIcon;
  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;

  Brain as BrainIcon, Play as PlayIcon;
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';

  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1
}
const itemVariants = {
  hidden: {
  y: 20, opacity: 0
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5
];
const stats = [
  {
    number: '15+'
    label: 'Revolutionary Services'
    icon: Star
    color: 'text-cyan-400'
  }
  {
    number: '1000%+'
    label: 'Average ROI'
    icon: TrendingUp
    color: 'text-purple-400'
  }
  {
    number: '99.9%'
    label: 'Success Rate'
    icon: Award
    color: 'text-green-400'
  }
  {
    number: '24/7'
    label: 'Expert Support'
    icon: Clock
    color: 'text-pink-400'
  },];  { number: '15+', label: 'Revolutionary Services', icon: Star, color: 'text-cyan-400' }
  { number: '1000%+', label: 'Average ROI', icon: TrendingUp, color: 'text-purple-400' }
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text-green-400' }
  { number: '24/7', label: 'Expert Support', icon: Clock, color: 'text-pink-400' }

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');


  const filteredServices = ultimateFuturisticServices2025.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||

                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory


  const filteredServices = ultimateFuturisticServices2025 && ultimateFuturisticServices2025.filter(service => {;
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;
    return matchesSearch && matchesCategory;  });    const matchesSearch = service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
    return matchesSearch && matchesCategory;

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price-low':;

        return (
          parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;
          parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
        );
      case 'price-high':;
        return (
          parseFloat(b && b.price.replace(/[^0-9.]/g, '')) -;
          parseFloat(a && a.price.replace(/[^0-9.]/g, ''));
        );      case 'rating':;
        return b && b.rating - a && a.rating;
      case 'customers':;
        return b && b.customers - a && a.customers;
      default:;
        return b && b.popular ? 1 : -1;    }        return parseFloat(a && a.price.replace(/[^0-9.]/g, '')) - parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':;
        return parseFloat(b && b.price.replace(/[^0-9.]/g, '')) - parseFloat(a && a.price.replace(/[^0-9.]/g, ''));
      case 'rating':;
        return b && b.rating - a && a.rating;
      case 'customers':;
        return b && b.customers - a && a.customers;
      default:;
        return b && b.popular ? 1 : -1;      default: return b && b.popular ? 1 : -1;
    }
  });


  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;

      }
    }
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {

  return (


    <Layout>;
      <Head>;
        <title>;
          Ultimate Futuristic Services Showcase 2025 | Zion Tech Group;
        </title>;

    <Layout>
      <Head>
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>

        <meta name="description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group" />
        <meta property="og:title" content="Ultimate Futuristic Services Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
      </Head>
          href='https://ziontechgroup && ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
        />;
      </Head>;

      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>;
        <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion && motion.div        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>;
        <meta name="description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology." />;
        <meta name="keywords" content="futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group" />;
        <meta property="og:title" content="Ultimate Futuristic Services Showcase 2025 | Zion Tech Group" />;
        <meta property="og:description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations." />;
        <meta property="og:url" content="https://ziontechgroup && ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />;
      </Head>;

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Futuristic

              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary services that combine AI consciousness
              quantum computing, space technology, and breakthrough innovations to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div

            transition={{ duration: 0 && 0.8 }}
          >;
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Ultimate Futuristic;
              </span>;
              <br />;
              <span className='bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'>;
                Services 2025;
              </span>;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
        <meta;
          name='description';
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting - edge technology.';
        />;
        <meta;
          name='keywords';
          content='futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group';
        />;
        <meta;
          property='og:title';
          content='Ultimate Futuristic Services Showcase 2025 | Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / ultimate - futuristic - services - showcase - 2025';
        />;
        <meta property='og:type' content='website' />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / ultimate - futuristic - services - showcase - 2025';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='relative py - 20 lg:py - 32 overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - black'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div        <title > Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>;
        <meta name="description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting - edge technology." />;
        <meta name="keywords" content="futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group" />;
        <meta property="og:title" content="Ultimate Futuristic Services Showcase 2025 | Zion Tech Group" />;
        <meta property="og:description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations." />;
        <meta property="og:url" content="https://ziontechgroup.com / ultimate - futuristic - services - showcase - 2025" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup.com / ultimate - futuristic - services - showcase - 2025" />;
      </Head>;
      {/* Hero Section */}
      <section className="relative py - 20 lg:py - 32 overflow - hidden">;
        <div className="absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - black"></div>;
        <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className='text - 4xl md:text - 6xl lg:text - 7xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Ultimate Futuristic;
              </span>;
              <br />;
              <span className='bg - gradient - to - r from - blue - 400 via - indigo - 400 to - violet - 400 bg - clip - text text - transparent'>;
                Services 2025;
              </span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;

              Experience the future of technology with our revolutionary;
              services that combine AI consciousness, quantum computing, space;
              technology, and breakthrough innovations to transform your;
              business.;
            </p>;


                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'>;
                  <stat && stat.icon className={`w-6 h-6 ${stat && stat.color}`} />;
                  <div className='text-left'>;
                    <div className='text-2xl font-bold text-white'>;
                      {stat && stat.number}
                    </div>;
                    <div className='text-sm text-gray-300'>{stat && stat.label}</div>                  </div>                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20";
                >;
                  <stat && stat.icon className={`w-6 h-6 ${stat && stat.color}`} />;
                  <div className="text-left">;
                    <div className="text-2xl font-bold text-white">{stat && stat.number}</div>;
                    <div className="text-sm text-gray-300">{stat && stat.label}</div>;
                </motion && motion.div>;

            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>              {stats.map ((stat, index) => (                Ultimate Futuristic;
              </span>;
              <br />;
              <span className="bg - gradient - to - r from - blue - 400 via - indigo - 400 to - violet - 400 bg - clip - text text - transparent">;
                Services 2025;
              </span>;
            </h1>;
            <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
              Experience the future of technology with our revolutionary services that combine AI consciousness,
              quantum computing, space technology, and breakthrough innovations to transform your business.;
            </p>;
            <div className="flex flex - wrap justify - center gap - 4 mb - 12">;
              {stats.map ((stat, index) => (
                <motion.div;

                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-white'>
                      {stat.number}
                    </div>
                    <div className='text-sm text-gray-300'>{stat.label}</div>                  </div>                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>

            {/* Search */}
            <div className='relative flex-1 max-w-md'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />;
              <input
                type='text'
                placeholder='Search futuristic services...'
                value={searchTerm}

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />;
            </div>;


            {/* Category Filter */}

                    {category.title} ({category.count})
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'

              >
                <option value='popular'>Most Popular</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Highest Rated</option>
                <option value='customers'>Most Customers</option>
              </select>
              </select>;

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e && e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
              >;
                <option value='popular'>Most Popular</option>;
                <option value='price-low'>Price: Low to High</option>;
                <option value='price-high'>Price: High to Low</option>;
                <option value='rating'>Highest Rated</option>;
                <option value='customers'>Most Customers</option>;
              </select>;

              {/* View Mode Toggle */}
              <div className='flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1'>                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}

                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >

                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="customers">Most Customers</option>
              </select>
                >              >;
                <option value="popular">Most Popular</option>;
                <option value="price-low">Price: Low to High</option>;
                <option value="price-high">Price: High to Low</option>;
                <option value="rating">Highest Rated</option>;
                <option value="customers">Most Customers</option>;
              </select>;

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >

            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative ${

                  viewMode === 'grid'                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'                  viewMode === 'grid'
          >
            {sortedServices.map((service, index) => (
              <motion.div
      {/* Services Grid */}
      <section className='py - 16'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <motion.div;
            variants={container_variants}
            initial='hidden';
            animate='visible';
            className={
              view_mode === 'grid';
                ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8';
                : 'space - y-6';
            }          >      <section className="py - 16">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8' : 'space - y-6'}
            {sorted_services.map ((service, index) => (
              <motion.div;

                key={service.id}
                variants={item_variants}
                className={`group relative ${

                  view_mode === 'grid'                    ? 'bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 6 hover:border - purple - 500 / 50 transition - all duration - 300 hover:scale - 105'                  view_mode === 'grid';
                    ? 'bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 6 hover:border - purple - 500 / 50 transition - all duration - 300 hover:scale - 105';
                    : 'bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 8 hover:border - purple - 500 / 50 transition - all duration - 300';
                }`}
              >;

                {/* Popular Badge */}
                {service.popular && (
                  <div className='absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>                    Popular                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Service Header */}
                <div
                  className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}
                >
                  <div
                    className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}
                    >

                      {service.icon}
                    </div>
                  </div>
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                  <div className='absolute top - 4 right - 4 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white text - xs font - semibold px - 3 py - 1 rounded - full'>                    Popular                  <div className="absolute top - 4 right - 4 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white text - xs font - semibold px - 3 py - 1 rounded - full">;
                    Popular;
                  </div>)}
                {/* Service Header */}
                <div;
                  className={`${view_mode === 'list' ? 'flex items - start space - x-6' : 'text - center'}`}
                >;
                  <div;
                    className={`${view_mode === 'list' ? 'flex - shrink - 0' : 'mx - auto mb - 4'}`}
                  >;
                    <div;
                      className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br ${service.color} flex items - center justify - center text - 3xl`}
                    >;
                      {service.icon}
                    </div>;
                  </div>;
                  <div className={`${view_mode === 'list' ? 'flex - 1' : ''}`}>;
                    <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - purple - 400 transition - colors'>;
                      {service.name}
                    </h3>;
                    <p className='text - gray - 300 text - sm mb - 3'>;
                      {service.tagline}
                    </p>
                    {/* Price */}
                    <div className='flex items - center justify - center space - x-2 mb - 4'>;
                      <span className='text - 3xl font - bold text - white'>;
                        {service.price}
                      </span>
                      <span className='text-gray-400'>{service.period}</span>                    </div>                      {service.icon}
                    </div>
                  </div>
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                    {/* Price */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                  </div>
                </div>
                {/* Description */}
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {service.description}
                </p>
                {/* Features */}
                <div className='mb-6'>;
                  <h4 className='text-white font-semibold mb-3 flex items-center'>;
                    <Sparkles className='w-4 h-4 mr-2 text-purple-400' />;
                    Key Features;
                  </h4>;
                  <div className='grid grid-cols-1 gap-2'>;
                    {service && service.features.slice(0, 4).map((feature, idx) => (;
                      <div
                        key={idx}
                        className='flex items-center text-sm text-gray-300'>;
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                        {feature}
                      </div>;
                    ))}

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                      </span>;
                      <span className='text - gray - 400'>{service.period}</span>                    </div>                      {service.icon}
                    </div>;
                  </div>;
                  <div className={`${view_mode === 'list' ? 'flex - 1' : ''}`}>;
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - purple - 400 transition - colors">;
                      {service.name}
                    </h3>;
                    <p className="text - gray - 300 text - sm mb - 3">{service.tagline}</p>;
                    {/* Price */}
                    <div className="flex items - center justify - center space - x-2 mb - 4">;
                      <span className="text - 3xl font - bold text - white">{service.price}</span>;
                      <span className="text - gray - 400">{service.period}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Description */}
                <p className='text - gray - 300 mb - 6 leading - relaxed'>;
                  {service.description}
                </p>;
                {/* Features */}
                <div className="mb-6">;
                  <h4 className="text-white font-semibold mb-3 flex items-center">;
                    <Sparkles className="w-4 h-4 mr-2 text-purple-400" />;
                    Key Features;
                  </h4>;
                  <div className='grid grid - cols - 1 gap - 2'>;
                    {service.features.slice (0, 4).map ((feature, idx) => (
                      <div;
                        key={idx}
                        className='flex items - center text - sm text - gray - 300';
                      >;
                        <CheckCircle className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />                        {feature}
                      </div>))}
                    {service.features.length > 4 && (
                      <div className='text - sm text - purple - 400 mt - 2'>                        +{service.features.length - 4} more features;

                {/* Features */}
                <div className="mb - 6">;
                  <h4 className="text - white font - semibold mb - 3 flex items - center">;
                    <Sparkles className="w - 4 h - 4 mr - 2 text - purple - 400" />;
                    Key Features;
                  </h4>;
                  <div className="grid grid - cols - 1 gap - 2">;
                    {service.features.slice (0, 4).map ((feature, idx) => (
                      <div key={idx} className="flex items - center text - sm text - gray - 300">;
                        <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
                        {feature}
                      </div>))}
                    {service.features.length > 4 && (

                    {service.features.length > 4 && (
                      <div className='text-sm text-purple-400 mt-2'>                        +{service.features.length - 4} more features

                {/* Service Details */}
                <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>
                  <div className='text-gray-400'>
                    <span className='block'>Setup Time</span>
                    <span className='text-white font-medium'>
                      {service.setupTime}
                    </span>

                  </div>
                  <div className='text-gray-400'>
                    <span className='block'>Trial</span>
                    <span className='text-white font-medium'>
                      {service.trialDays} days
                    </span>
                  </div>
                  <div className='text-gray-400'>
                    <span className='block'>Rating</span>
                    <div className='flex items-center'>
                      <span className='text-white font-medium mr-1'>
                        {service.rating}
                      </span>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                    </div>
                  </div>
                  <div className='text-gray-400'>
                    <span className='block'>Customers</span>
                    <span className='text-white font-medium'>
                      {service.customers}+
                    </span>                  </div>
                </div>
                {/* ROI and Market Info */}                  </div>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-gray-400">
                    <span className="block">Setup Time</span>
                    <span className="text-white font-medium">{service.setupTime}</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Trial</span>
                    <span className="text-white font-medium">{service.trialDays} days</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Rating</span>
                    <div className="flex items-center">
                      <span className="text-white font-medium mr-1">{service.rating}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Customers</span>
                    <span className="text-white font-medium">{service.customers}+</span>
                  </div>
                </div>

                  </div>;
                </div>;

                {/* Service Details */}
                <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>;
                  <div className='text-gray-400'>;
                    <span className='block'>Setup Time</span>;
                    <span className='text-white font-medium'>;
                      {service && service.setupTime}
                    </span>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Trial</span>;
                    <span className='text-white font-medium'>;
                      {service && service.trialDays} days;
                    </span>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Rating</span>;
                    <div className='flex items-center'>;
                      <span className='text-white font-medium mr-1'>;
                        {service && service.rating}
                      </span>;
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                    </div>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Customers</span>;
                    <span className='text-white font-medium'>;
                      {service && service.customers}+;
                    </span>                  </div>;
                </div>;

                {/* ROI and Market Info */}                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Trial</span>;
                    <span className="text-white font-medium">{service && service.trialDays} days</span>;
                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Rating</span>;
                    <div className="flex items-center">;
                      <span className="text-white font-medium mr-1">{service && service.rating}</span>;
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                    </div>;
                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Customers</span>;
                    <span className="text-white font-medium">{service && service.customers}+</span>;
                  </div>;
                </div>;


                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20'>;
                  <div className='text-sm'>;
                    <div className='text-gray-300 mb-2'>;
                      <span className='font-semibold text-white'>ROI:</span>{' '}
                      {service && service.roi}
                    </div>;
                    <div className='text-gray-300'>;
                      <span className='font-semibold text-white'>;
                        Market Size:;
                      </span>{' '}


                {/* ROI and Market Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">

                  <div className="text-sm">
                    <div className="text-gray-300 mb-2">
                      <span className="font-semibold text-white">ROI: </span> {service.roi}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">Market Size: </span> {service.marketSize}

                    </div>

                  </div>
                </div>
                      {service && service.marketSize}                    </div>                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">;
                  <div className="text-sm">;
                    <div className="text-gray-300 mb-2">;
                      <span className="font-semibold text-white">ROI: </span> {service && service.roi}
                    </div>;
                    <div className="text-gray-300">;
                      <span className="font-semibold text-white">Market Size: </span> {service && service.marketSize}
                  </div>;
                </div>;

                {/* Action Buttons */}

                    href={service && service.link}
                    className='flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'>;
                    Get Started;
                  </Link>;
                  <button className='px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors'>;
                    <Eye className='w-5 h-5' />                  </button>;
                </div>;


                {/* Contact Info */}
                <div className='mt-6 pt-6 border-t border-white/10'>;
                  <div className='text-center text-sm text-gray-400'>                  <Link

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link

                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                {/* Contact Info */}
                <div className='mt-6 pt-6 border-t border-white/10'>
                  <div className='text-center text-sm text-gray-400'>

                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
              <button
                onClick={() => {;
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300'              >              <button
                onClick={() => {;
                  setSearchTerm('');

                  setSelectedCategory('all')
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300";
              >;
                Clear Filters;
              </button>;
            </div>;
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our revolutionary futuristic services.
              Get in touch with our experts to discuss your specific needs and implementation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'>              Ready to Experience the Future?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8">;
              Transform your business with our revolutionary futuristic services. ;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;


              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </Link>
              <Link
                href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'                href="/pricing"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>

}

}

  );
}

