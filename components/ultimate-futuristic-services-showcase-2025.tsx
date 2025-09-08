<<<<<<< HEAD


import { motion, AnimatePresence } from 'framer-motion';



  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  Heart,
  Brain,
  Atom,
  Shield,
  Rocket,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Eye,
  Play,
  Sparkles,
  Target,
  Microscope,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Cpu,
  Database,
  Network,
  Server,
  ShieldCheck,
  GlobeIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CpuIcon,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Dna,
  Target as TargetIcon,
  Shield as ShieldIcon,
  BookOpen,
  Sparkles as SparklesIcon,
  Zap as ZapIcon,
=======

import React, { useState } from 'react';
import Head from 'next/head';
const filteredServices = ultimateFuturisticServices2025.filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'price-low': case 'rating': return b.rating - a.rating
case 'customers': const containerVariants = {
  hidden: {
  opacity: 0 


import React, { useState } from 'react';
import Head from 'next/head';


import React, { useState } from 'react',
import Head from 'next/head',
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Star
  TrendingUp
  Users
  Award
  Clock
  Heart
  Brain
  Atom
  Shield
  Rocket
  Zap
  Globe
  CheckCircle
  ArrowRight
  Search
  Filter
  ChevronDown
  ChevronUp
  Eye
  Play
  Sparkles
  Target
  Microscope
  Lock
  Cloud
  BarChart3
  Settings
  Cpu
  Database
  Network
  Server
  ShieldCheck
  GlobeIcon
  StarIcon
  TrendingUpIcon
  UsersIcon
  CheckCircleIcon
  ArrowRightIcon
  CpuIcon
  DollarSign
  Phone
  Mail
  MapPin
  Dna
  Target as TargetIcon
  Shield as ShieldIcon
  BookOpen
  Sparkles as SparklesIcon
  Zap as ZapIcon
  Brain as BrainIcon
  Play as PlayIcon;
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';import {
  Star, TrendingUp, Users, Award, Clock, Heart
  Brain, Atom, Shield, Rocket, Zap, Globe

}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
}
}
const itemVariants = {
  hidden: {
  y: 20, opacity: 0 
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 
}
}
}
return (<Layout> <Head> <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Ultimate Futuristic </span> <br /> <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent" > Services 2025 </span> </h1> </div> </motion.div>) ) 
}</div> </motion.div> </div> </section> </option>) ) 
}</select> {
  /* Sort Options */ 
}<select > <option value="popular" >Most Popular</option> <option value="price-low" >Price: Low to High</option> <option value="price-high" >Price: High to Low</option> <option value="rating" >Highest Rated</option> <option value="customers" >Most Customers</option> </select> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded $ {
  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400' 
}` 
}> <div className="grid grid-cols-2 gap-1 w-4 h-4" > <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> </div> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded $ {
  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400' 
}` 
}> <div className="space-y-1 w-4 h-4" > <div className="bg-current rounded-sm h-0.5" ></div> <div className="bg-current rounded-sm h-0.5" ></div> <div className="bg-current rounded-sm h-0.5" ></div> </div> </button> </div> </div> </div> </div> </section> > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}className= {
  `group relative $ {
  viewMode === 'grid' ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105' : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300' 
}` 
}> Popular </div>) 
}{
  /* Service Header */ 
}<div className= {
  `$ {
  viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center' 
}` 
}> <div className= {
  `$ {
  viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4' 
}` 
}> <div className= {
  `w-16 h-16 rounded-2xl bg-gradient-to-br $ {
  service.color 
}flex items-center justify-center text-3xl` 
}> {
  service.icon 
}</div> </div> </div> </div> </div> + {
  service.features.length - 4 
}more features </div>) 
}</div> </div> </div> </div> </div> > Get Started </a> <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors" > <Eye className="w-5 h-5" /> </button> </div> </a> </div> </div> </div> </motion.div>) ) 
}</motion.div> > Clear Filters </button> </div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> Ready to Experience the Future? </h2> <p className="text-xl text-gray-300 mb-8" > Transform your business with our revolutionary futuristic services. Get in touch with our experts to discuss your specific needs and implementation strategy. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105" > Contact Our Experts </a> <Link href="/pricing" className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors" > View Pricing </a> </div> </motion.div> </div> </section> </Layout>) 
}
import Link from 'next/link';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> origin/cursor/delete-old-data-records-6bba


  CheckCircle, ArrowRight, Search, Filter;

  ChevronDown, ChevronUp, Eye, Play, Sparkles;
  Target, Microscope, Lock, Cloud, BarChart3;
  Settings, Cpu, Database, Network, Server;
  ShieldCheck, GlobeIcon, StarIcon, TrendingUpIcon;
  UsersIcon, CheckCircleIcon, ArrowRightIcon;
  CpuIcon, DollarSign, Phone, Mail, MapPin;
  Dna, Target as TargetIcon, Shield as ShieldIcon;
<<<<<<< HEAD



  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;


  Brain as BrainIcon, Play as PlayIcon;

=======
  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;
  Brain as BrainIcon, Play as PlayIcon
} from 'lucide-react;
import Layout from ../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services;
const contactInfo = {
  mobile: +1 302 464 0950',
  email: 'kleber@ziontechgroup.com,
  address: 364 E Main St STE 1008 Middletown DE 19709',
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services;import {
  Star, TrendingUp, Users, Award, Clock, Heart
  Brain, Atom, Shield, Rocket, Zap, Globe
  website: https://ziontechgroup.com'
}

  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;

  Brain as BrainIcon, Play as PlayIcon;
 } from 'lucide-react';

const contactInfo = null;
visible: {opacity: 1, transition: {staggerChildren: 0.1;}
}

const itemVariants = {hidden: {y: 20, opacity: 0;}
}
visible: {y: 0, opacity: 1, transition: {duration: 0.5;
];


const stats = [
  {

export default function UltimateFuturisticServicesShowcase2025() {

>>>>>>> origin/cursor/delete-old-data-records-6bba

export default function UltimateFuturisticServicesShowcase2025() {;

<<<<<<< HEAD




=======
export default function UltimateFuturisticServicesShowcase2025() {

export default function UltimateFuturisticServicesShowcase2025() {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
<<<<<<< HEAD


  const filteredServices = ultimateFuturisticServices2025.filter(service => {

=======

  const filteredServices = ultimateFuturisticServices2025.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory
    number: '15+',
  label: 'Revolutionary Services',
    icon: Star,}
    color: 'text-cyan-400',}
  },
  {
    number: '1000%+',
  label: 'Average ROI',
    icon: TrendingUp,}
    color: 'text-purple-400',}
  },
  {
    number: '99.9%',
  label: 'Success Rate',
    icon: Award,}
    color: 'text-green-400',}
  },
  {
    number: '24/7',
  label: 'Expert Support',
    icon: Clock,}
    color: 'text-pink-400',}
  },
];

export default function UltimateFuturisticServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');


const [selectedCategory, setSelectedCategory] = useState('all');

const [sortBy, setSortBy] = useState('popular');

const [viewMode, setViewMode] = useState('grid');

const filteredServices = ultimateFuturisticServices2025.filter(service => {;
  const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());

const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;}
    return matchesSearch && matchesCategory;}
  });

const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
        );
      case 'price-high':;
        return (

          parseFloat(b.price.replace(/[^0-9.]/g, '')) -
          parseFloat(a.price.replace(/[^0-9.]/g, ''))
        );
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return b.customers - a.customers;
default:}
        return b.popular ? 1 : -1;}
    }
  });
<<<<<<< HEAD



=======
const containerVariants = {}
    hidden: { opacity: 0,}
}
    "visible": {
      }
      "opacity": 1,
"transition": {
}
"staggerChildren": 0.1

      }
    }
  }
    visible: {
      opacity: 1;
transition: {}
staggerChildren: 0.1,}
      },
    }}
>>>>>>> origin/cursor/delete-old-data-records-6bba

const itemVariants = {}
    hidden: { y: 20, opacity: 0,}
},
<<<<<<< HEAD



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


=======
    "visible": {
      }
      "y": 0,
      "opacity": 1,
      "transition": {
}
"duration": 0.5
      }
    }
  }


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
=======
  const _filteredServices = ultimateFuturisticServices2025.filter(service => {
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  }),
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (_<Layout>
      <Head>
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Ultimate Futuristic Services Showcase 2025 | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Ultimate Futuristic
              </span>
              <br />
              <span className=&quot;bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent&quot;>
                Services 2025
              </span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Experience the future of technology with our revolutionary services that combine AI consciousness, 
              quantum computing, space technology, and breakthrough innovations to transform your business.
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              {stats.map((stat, index) => (
                <motion.div

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}

      {/* Search and Filter Section */}

      {/* Search and Filter Section */}
      <section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>

              ))}
      {/* Search and Filter Section */}
      <section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'    />;
            {/* Search */}
            <div className='relative flex-1 max-w-md'    />;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'    />;

              <input;
type='text'
                placeholder='Search futuristic services...'
                value={searchTerm}

                onChange={e =    /> setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>

            {/* Category Filter *,}
}
<div className='flex flex-wrap gap-3'    />;
              <select;

<<<<<<< HEAD
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search futuristic services...'
                value={searchTerm}


                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />;
            </div>;


            {/* Category Filter */}


              <input
                type="text"
                placeholder="Search futuristic services..."
                value={searchTerm}




            {/* Category Filter */}
            <div className='flex flex-wrap gap-3'>;
              <select

                value={selectedCategory}
                onChange={e =    /> setSelectedCategory(e.target.value)}



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              />
            </div>

            {/* Category Filter */}

<<<<<<< HEAD

                  <option key={category.title} value={category.title}>



                ))}

=======
            <div className="flex flex-wrap gap-3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"><option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.title} value={category.title}>
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


                >;
                  <div className='grid grid-cols-2 gap-1 w-4 h-4'>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>                  </div>                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
                  <div className="space-y-1 w-4 h-4">
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
                  className='flex items - center space - x-2 bg - white / 10 backdrop - blur - sm rounded - full px - 6 py - 3 border border - white / 20';
                >;
                  <stat.icon className={`w - 6 h - 6 ${stat.color}`} />;
                  <div className='text - left'>;
                    <div className='text - 2xl font - bold text - white'>;
                      {stat.number}
                    </div>;
                    <div className='text - sm text - gray - 300'>{stat.label}</div>                  </div>                  className="flex items - center space - x-2 bg - white / 10 backdrop - blur - sm rounded - full px - 6 py - 3 border border - white / 20";
                >;
                  <stat.icon className={`w - 6 h - 6 ${stat.color}`} />;
                  <div className="text - left">;
                    <div className="text - 2xl font - bold text - white">{stat.number}</div>;
                    <div className="text - sm text - gray - 300">{stat.label}</div>;
                </motion.div>))}
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search and Filter Section */}
      <section className='py - 12 bg - gradient - to - r from - black via - purple - 900 / 10 to - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex flex - col lg:flex - row gap - 6 items - center justify - between'>;
            {/* Search */}
            <div className='relative flex - 1 max - w-md'>;
              <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
              <input;
                type='text';
                placeholder='Search futuristic services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full pl - 10 pr - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent'              />;
            </div>;
            {/* Category Filter */}
            <div className='flex flex - wrap gap - 3'>            {/* Search */}
            <div className="relative flex - 1 max - w-md">;
              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
              <input;
                type="text";
                placeholder="Search futuristic services...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full pl - 10 pr - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
>>>>>>> origin/cursor/delete-old-data-records-6bba
              />;
            </div>;
            {/* Category Filter */}
<div className=flex flex-wrap gap-3'>;
              <select;
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className=px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all>All Categories</option>
                {serviceCategories.map((category) => (
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent;
              >;
                <option value=all'>All Categories</option>;
                {serviceCategories.map(category => (<option key={category.title} value={category.title}>;
            <div className='flex flex-wrap gap-3>;
              />;
            </div>;
            {/* Category Filter */}<option key={category.title} value={category.title}>;
                    {category.title} ({category.count})</option>;
                  <option key={category.title} value={category.title}>

<<<<<<< HEAD
=======
                  <option key={category.title} value={category.title}    />

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {category.title} ({category.count})
                  </option>

                ),
}
              </select>;
              {/* Sort Options */}
              <select;
                value={sortBy}
onChange={e =    /> setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'>

                <option value='popular'    />Most Popular</option>;
                <option value='price-low'    />Price: Low to High</option>;
                <option value='price-high'    />Price: High to Low</option>;
                <option value='rating'    />Highest Rated</option>;
                <option value='customers'    />Most Customers</option>;
              </select>;
              {/* Sort Options */}
              <select;
                value={sortBy}
                onChange={e =    /> setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
                ))}

<<<<<<< HEAD

              <div className='flex bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg p - 1'>                <button;
                  on_click={() => setViewMode ('grid')}
                  className={`p - 2 rounded ${view_mode === 'grid' ? 'bg - purple - 500 text - white' : 'text - gray - 400'}`}
                >              >;
                <option value="popular">Most Popular</option>;
                <option value="price - low">Price: Low to High</option>;
                <option value="price - high">Price: High to Low</option>;
                <option value="rating">Highest Rated</option>;
                <option value="customers">Most Customers</option>;
              </select>;
              {/* View Mode Toggle */}
              <div className="flex bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg p - 1">;
                <button;
                  on_click={() => setViewMode ('grid')}
                  className={`p - 2 rounded ${view_mode === 'grid' ? 'bg - purple - 500 text - white' : 'text - gray - 400'}`}
                >;
                  <div className='grid grid - cols - 2 gap - 1 w - 4 h - 4'>;
                    <div className='bg - current rounded - sm'></div>;
                    <div className='bg - current rounded - sm'></div>;
                    <div className='bg - current rounded - sm'></div>;
                    <div className='bg - current rounded - sm'></div>                  </div>                  <div className="grid grid - cols - 2 gap - 1 w - 4 h - 4">;
                    <div className="bg - current rounded - sm"></div>;
                    <div className="bg - current rounded - sm"></div>;
                    <div className="bg - current rounded - sm"></div>;
                    <div className="bg - current rounded - sm"></div>;
                </button>;
                <button;
                  on_click={() => setViewMode ('list')}
                  className={`p - 2 rounded ${view_mode === 'list' ? 'bg - purple - 500 text - white' : 'text - gray - 400'}`}
                >;
                  <div className='space - y-1 w - 4 h - 4'>;
                    <div className='bg - current rounded - sm h - 0.5'></div>;
                    <div className='bg - current rounded - sm h - 0.5'></div>;
                    <div className='bg - current rounded - sm h - 0.5'></div>                  </div>                  <div className="space - y-1 w - 4 h - 4">;
                    <div className="bg - current rounded - sm h - 0.5"></div>;
                    <div className="bg - current rounded - sm h - 0.5"></div>;
                    <div className="bg - current rounded - sm h - 0.5"></div>;

                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;




            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}



            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}

                variants={itemVariants}
                className={`group relative ${

                  viewMode === 'grid'                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'                  viewMode === 'grid'
          >

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
            }          >      <section className="py-16">;
        <div className="max - w-7xl mx - auto px - 4 sm:px-6 lg:px-8">;
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
                      {service.icon}
                    </div>
                  </div>
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                    Popular;
                  </div>;
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full>
                    Popular
                  </div>
                )}

>>>>>>> origin/cursor/delete-old-data-records-6bba

                    </div>
                  </div>
                </div>
                {/* Description */}
<<<<<<< HEAD


                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>;
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-300 text-sm mb-3'>;
                      {service && service.tagline}
                    </p>;

                    {/* Price */}
                    <div className='flex items-center justify-center space-x-2 mb-4'>;
                      <span className='text-3xl font-bold text-white'>;
                        {service && service.price}
                      </span>;
                      <span className='text-gray-400'>{service && service.period}</span>                    </div>                      {service && service.icon}
                    </div>;
                  </div>;

                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">;
                      {service && service.name}
                    </h3>;
                    <p className="text-gray-300 text-sm mb-3">{service && service.tagline}</p>;

                    {/* Price */}
                    <div className="flex items-center justify-center space-x-2 mb-4">;
                      <span className="text-3xl font-bold text-white">{service && service.price}</span>;
                      <span className="text-gray-400">{service && service.period}</span>;
                    </div>;
                  </div>;
                </div>;

                {/* Description */}
                <p className='text-gray-300 mb-6 leading-relaxed'>;
                  {service && service.description}
                </p>;


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
                    )}
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
                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20'>;
                  <div className='text-sm'>;
                    <div className='text-gray-300 mb-2'>;
                      <span className='font-semibold text-white'>ROI:</span>{' '}
                      {service && service.roi}
                    </div>;
                  </div>;
                </div>;
                {/* Description */}<p className=text-gray-300 mb-6 leading-relaxed'>;
                  {service.description}
                </p>;


<p className='text-gray-300 mb-6 leading-relaxed'    />
<<<<<<< HEAD

                  {service.description}
                </p>

                  </div>
                </div>

                      {service && service.marketSize}                    </div>                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">;
                  <div className="text-sm">;
                    <div className="text-gray-300 mb-2">;
                      <span className="font-semibold text-white">ROI: </span> {service && service.roi}

=======
                  {service.description}
                </p>

                {/* Features */}

                  <div className='grid grid-cols-1 gap-2'    />;

                    {service && service.features.slice(0, 4).map((feature, idx) => (;}
                      <div;}
key={idx}


                        className='flex items-center text-sm text-gray-300'
                          />
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0'    />

                        {feature}
                      </div>;
                    ))}


                  </div>
                </div>

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </div>;
                    <div className=text-gray-300">;
                      <span className="font-semibold text-white>Market Size: </span> {service.marketSize}
                      {service && service.marketSize}                    </div>                <div className=mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">;
                  <div className="text-sm>;
                    <div className=text-gray-300 mb-2">;
                      <span className="font-semibold text-white>ROI: </span> {service && service.roi}
                    </div>;
                    <div className=text-gray-300">;
                      <span className="font-semibold text-white>Market Size: </span> {service && service.marketSize}
                  </div>;
                </div>;
<<<<<<< HEAD

                {/* Action Buttons */}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    href={service.link}
                    className=flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105";
                  >;
                    Get Started;
                  </Link>;
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors>;
                    <Eye className=w-5 h-5" />;
                  </button>;
                </div>;

<<<<<<< HEAD


=======
                {/* Contact Info */}
                <div className=mt-6 pt-6 border-t border-white/10'>;
                  <div className='text-center text-sm text-gray-400>;
                    <p>Contact us for custom pricing and implementation</p>;
                    <div className=flex items-center justify-center space-x-4 mt-2'>;{service.marketSize}
                    </div>;
                  </div>;
                </div>;
                {/* Action Buttons */}

                  </div>
                </div>


                {/* Service Details */}
<div className='grid grid-cols-2 gap-4 mb-6 text-sm'    />;
                  <div className='text-gray-400'    />;
                    <span className='block'    />Setup Time</span>;
                    <span className='text-white font-medium'    />;
                      {service.setupTime}
                    </span>;
                  </div>;
                  <div className='text-gray-400'    />;
                    <span className='block'    />Trial</span>;
                    <span className='text-white font-medium'    />;
                      {service.trialDays} days;
                    </span>;
                  </div>;
                  <div className='text-gray-400'    />;
                    <span className='block'    />Rating</span>;
                    <div className='flex items-center'    />;
                      <span className='text-white font-medium mr-1'    />;
                        {service.rating}

                      </span>
                      <Star className='w-4 h-4 text-yellow-400 fill-current'    />
                    </div>
                  </div>
                  <div className='text-gray-400'    />
                    <span className='block'    />Customers</span>
                    <span className='text-white font-medium'    />
                      {service.customers}+

                    </span>
                  </div>
                </div>
                {/* ROI and Market Info */}
<div className='mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20'    />
                  <div className='text-sm'    />
                    <div className='text-gray-300 mb-2'    />

                      <span className='font-semibold text-white'    />ROI: </span>{' '}
                      {service && service.ro,}
}
                    </div>;
                    <div className='text-gray-300'    />;
                      <span className='font-semibold text-white'    />;
                        Market Size:;

                      </span>{' '}

                      {service.marketSize}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
<div className='flex flex-col sm:flex-row gap-3'    />;
                  <Link;
                    href={service.link}
                    className='flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'    />

                    Get Started;
                  </Link>;
                  <button className='px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors'    />;
                    <Eye className='w-5 h-5'    />;
                  </button>;
                </div>;
                {/* Contact Info */}

<div className='mt-6 pt-6 border-t border-white/10'    />
                  <div className='text-center text-sm text-gray-400'    />
                    <p    />Contact us for custom pricing and implementation</p>
                    <div className='flex items-center justify-center space-x-4 mt-2'    />
                      <a;
href={`tel: ${contactInfo && contactInfo.mobile},
}
                        className='flex items-center text-purple-400 hover:text-purple-300'    />;
                        <Phone className='w-4 h-4 mr-1'    />;
                        {contactInfo && contactInfo.mobile}
                      </a>;

                      <a;
href={`mailto: ${contactInfo.email}`}
                        className='flex items-center text-purple-400 hover:text-purple-300'
                          />
                        <Mail className='w-4 h-4 mr-1'    />
                        {contactInfo.email}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


<<<<<<< HEAD
=======





          {/* No Results */}

          {sortedServices.length === 0 && (
          {/* No Results */}

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
              <button
                onClick={() => {

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  setSearchTerm('');

                  setSelectedCategory('all');

                }}


          )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </div>;
      </section>;

<<<<<<< HEAD



            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'>;
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">;
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Experience the Future?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8'>;
              Transform your business with our revolutionary futuristic;
              services. Get in touch with our experts to discuss your specific;
              needs and implementation strategy.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link
                href='/contact'
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'>;
                Contact Our Experts;
              </Link>;
              <Link
                href='/pricing'
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our revolutionary futuristic services.
              Get in touch with our experts to discuss your specific needs and implementation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">


                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'>              Ready to Experience the Future?;

=======




            <div className='text-center py-16'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                No services found
              </h3>
              <p className='text-gray-400 mb-6'>
                Try adjusting your search criteria or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Clear Filters;
              </button>
            </div>
          )}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
              >
                Clear Filters;
              </button>
            </div>

          )}
      {/* CTA Section *,}
}
<section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'    />;
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'    />;
          <motion.div;
            initial={{ opacity: 0, y: 30 ,}
}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true ,}
}


              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
          >;
          >
          >;
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20>;
        <div className=max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20>;
        <div className=max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6>;
              Ready to Experience the Future?;
            </h2>;
            <p className=text-xl text-gray-300 mb-8'>;
              Transform your business with our revolutionary futuristic;
              services. Get in touch with our experts to discuss your specific;
              needs and implementation strategy.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center>;
              <Link;
                href=/contact';
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105>;
                Contact Our Experts;
              </Link>;

              <Link;
                href=/pricing';
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </h2>;
            <p className="text-xl text-gray-300 mb-8>;
              Transform your business with our revolutionary futuristic services.;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
            <div className=flex flex-col sm:flex-row gap-4 justify-center">;
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors>              Ready to Experience the Future?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8>;
              Transform your business with our revolutionary futuristic services. ;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
<<<<<<< HEAD

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
  );
}
}
  );
}
                      <div className='text - sm text - purple - 400 mt - 2'>                      <div className="text - sm text - purple-400 mt-2">;
                        +{service.features.length - 4} more features;
                      </div>)}
                  </div>;
                </div>;
                {/* Service Details */}
                <div className='grid grid - cols - 2 gap - 4 mb - 6 text - sm>;
                  <div className=text - gray - 400'>;
                    <span className='block>Setup Time</span>;
                    <span className=text - white font - medium'>;
                      {service.setup_time}
                    </span>;
                  </div>;
                  <div className='text - gray - 400>;
                    <span className=block'>Trial</span>;
                    <span className='text - white font - medium>;
                      {service.trial_days} days;
                    </span>;
                  </div>;
                  <div className=text - gray - 400'>;
                    <span className='block>Rating</span>;
                    <div className=flex items - center'>;
                      <span className='text - white font - medium mr - 1>;
                        {service.rating}
                      </span>;
                      <Star className=w - 4 h - 4 text - yellow - 400 fill - current' />;
                    </div>;
                  </div>;
                  <div className='text - gray - 400>;
                    <span className=block'>Customers</span>;
                    <span className='text - white font - medium>;
                      {service.customers}+;
                    </span>                  </div>;
                </div>;
                {/* ROI and Market Info */}                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Trial</span>;
                    <span className="text-white font-medium">{service.trial_days} days</span>;
                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Rating</span>;
                    <div className="flex items-center">;
                      <span className="text - white font-medium mr-1">{service.rating}</span>;
                      <Star className="w - 4 h - 4 text - yellow-400 fill-current" />;
                    </div>;
                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Customers</span>;
                    <span className="text-white font-medium">{service.customers}+</span>;
                  </div>;
                </div>;
                {/* ROI and Market Info */}
                <div className=mb - 6 p - 4 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - lg border border - purple - 500 / 20'>;
                  <div className='text - sm>;
                    <div className=text - gray - 300 mb - 2'>;
                      <span className='font - semibold text - white>ROI:</span>{ '}
                      {service.roi}
                    </div>;
                    <div className='text - gray - 300>;
                      <span className=font - semibold text - white'>;
                        Market Size:;
                      </span>{' '}
                      {service.market_size}                    </div>                <div className="mb - 6 p - 4 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - lg border border-purple-500 / 20">;
                  <div className="text-sm">;
                    <div className="text - gray-300 mb-2">;
                      <span className="font-semibold text-white">ROI: </span> {service.roi}
                    </div>;
                    <div className="text-gray-300">;
                      <span className="font-semibold text-white">Market Size: </span> {service.market_size}
                  </div>;
                </div>;
                {/* Action Buttons */}
                <div className=flex flex - col sm:flex - row gap - 3'>;
                  <Link;
                    href={service.link}
                    className='flex - 1 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg text - center hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105;
                  >;
                    Get Started;
                  </Link>;
                  <button className=px - 4 py - 3 border border - white / 20 text - white rounded - lg hover:border - purple - 500 / 50 transition - colors'>;
                    <Eye className='w - 5 h - 5 />                  </button>;
                </div>;
                {/* Contact Info */}
                <div className=mt - 6 pt - 6 border - t border - white / 10'>;
                  <div className='text - center text - sm text - gray - 400>                  <Link;
                    href={service.link}
                    className="flex - 1 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg text - center hover:from - purple - 600 hover:to - pink - 600 transition - all duration-300 transform hover:scale-105";
                  >;
                    Get Started;
                  </Link>;
                  <button className="px - 4 py - 3 border border - white / 20 text - white rounded - lg hover:border - purple-500 / 50 transition-colors">;
                    <Eye className="w-5 h-5" />;
                  </button>;
                </div>;
                {/* Contact Info */}
                <div className=mt - 6 pt - 6 border - t border - white / 10'>;
                  <div className='text - center text - sm text - gray - 400>;
                    <p > Contact us for custom pricing and implementation</p>;
                    <div className=flex items - center justify - center space - x-4 mt - 2'>;
                      <a;
                        href={`tel:${contact_info.mobile}`}
                        className='flex items - center text - purple - 400 hover:text - purple - 300;
                      >;
                        <Phone className=w - 4 h - 4 mr - 1' />;
                        {contact_info.mobile}
                      </a>;
                      <a;
                        href={`mailto:${contact_info.email}`}
                        className='flex items - center text - purple - 400 hover:text - purple - 300;
                      >;
                        <Mail className='w - 4 h - 4 mr - 1' />                        {contact_info.email}                    <p > Contact us for custom pricing and implementation</p>;
                    <div className="flex items - center justify - center space-x-4 mt-2">;
                      <a href={`tel:${contact_info.mobile}`} className="flex items - center text - purple - 400 hover:text-purple-300">;
                        <Phone className="w - 4 h-4 mr-1" />;
                        {contact_info.mobile}
                      </a>;
                      <a href={`mailto:${contact_info.email}`} className="flex items - center text - purple - 400 hover:text-purple-300">;
                        <Mail className="w - 4 h-4 mr-1" />;
                        {contact_info.email}
                      </a>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* No Results */}
          {sorted_services.length === 0 && (<div className='text - center py - 16>;
              <div className=text - 6xl mb - 4'>🔍</div>;
              <h3 className='text - 2xl font - bold text - white mb - 2>;
                No services found;
              </h3>;
              <p className=text - gray - 400 mb - 6'>;
                Try adjusting your search criteria or category filter;
              </p>;
              <button;
                on_click={() => {
                  setSearchTerm ('');
                  setSelectedCategory ('all');
                }}
                className='bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300'              >              <button;
                on_click={() => {
                  setSearchTerm ('');
                  setSelectedCategory ('all');
                }}
                className="bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg hover:from - purple - 600 hover:to - pink - 600 transition-all duration-300";
              >;
                Clear Filters;
              </button>;
            </div>)}
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - purple - 900 / 20 via - black to - pink - 900 / 20'>;
        <div className='max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - gradient - to - r from - purple - 900 / 20 via - black to-pink-900 / 20">;
        <div className="max - w-4xl mx - auto text - center px - 4 sm:px-6 lg:px-8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className=text - 3xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Experience the Future?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8>;
              Transform your business with our revolutionary futuristic;
              services. Get in touch with our experts to discuss your specific;
              needs and implementation strategy.;
            </p>;
            <div className=flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;
                href='/contact;
                className=bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105'              >;
                Contact Our Experts;
              </Link>;
              <Link;
                href='/pricing;
                className=border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple - 500 / 50 transition - colors'              >              Ready to Experience the Future?;
            </h2>;
            <p className="text - xl text - gray-300 mb-8">;
              Transform your business with our revolutionary futuristic services.;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
            <div className="flex flex - col sm:flex - row gap-4 justify-center">;
              <Link;
                href="/contact";
                className="bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration-300 transform hover:scale-105";
              >;
                Contact Our Experts;
              </Link>;
              <Link;
                href='/pricing';
                className='border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple - 500 / 50 transition - colors'                href="/pricing";
                className="border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple-500 / 50 transition-colors";
              >;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>)}<h2 className='text-3xl md:text-5xl font-bold text-white mb-6>;
              Ready to Experience the Future?;
            </h2>;
            <p className=text-xl text-gray-300 mb-8'>;
              Transform your business with our revolutionary futuristic;
              services. Get in touch with our experts to discuss your specific;
              needs and implementation strategy.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center>;
              <Link;
                href=/contact';
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105;
              >;
                Contact Our Experts;
              </Link>;
              <Link;
href=/pricing';
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors';
              >;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>;
    </Layout>);
}

  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


