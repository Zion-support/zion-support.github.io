
import React, { useState } from 'react';
import Head from 'next/head';


import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  Search,Star,Users,TrendingUp,DollarSign,Clock,CheckCircle,ArrowRight,Rocket,Brain,Atom,Globe,Zap,Sparkles,Shield,Target,Cpu,Database,Cloud,Lock,ShieldCheck,Eye,Heart,Share2,Download,Phone,class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { "hasError": false }}static getDerivedStateFromError(error) {return { "hasError": true 
}componentDidCatch(error, errorInfo) {console.error('Error caught by "boundary":', error, errorInfo)}render() {if (this.state.hasError) ;'
  }
  return <div>Something went wrong.</div>;
  Phone;}
  Mail;}
  MapPin;} from 'lucide-react';import {Search, Star, Users, TrendingUp, DollarSign, Clock;
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe;}
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud;}
  Search,Star,Users,TrendingUp,DollarSign,Clock,CheckCircle,ArrowRight,Rocket,Brain,Atom,Globe,Zap,Sparkles,Shield,Target,Cpu,Database,Cloud,Lock,ShieldCheck,Eye,Heart,Share2,Download,Phone,class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) {return <div    />Something went wrong.</div>;}
  Search,Star,Users,TrendingUp,DollarSign,Clock,CheckCircle,ArrowRight,Rocket,Brain,Atom,Globe,Zap,Sparkles,Shield,Target,Cpu,Database,Cloud,Lock,ShieldCheck,Eye,Heart,Share2,Download,Phone,class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
    }return this.props.children;
  }
}
import React, { useState } from 'react';
import Head from 'next / head';


  Search
  Star
  Users
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Rocket
  Brain
  Atom
  Globe
  Zap
  Sparkles
  Shield
  Target
  Cpu
  Database
  Cloud
  Lock
  ShieldCheck
  Eye
  Heart
  Share2
  Download
  Phone
  Mail
  MapPin;} from 'lucide-react';import {
  Search, Star, Users, TrendingUp, DollarSign, Clock
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud

import {


  Lock, ShieldCheck, Eye, Heart, Share2, Download, Phone, Mail, MapPin
 } from 'lucide-react';
import { cuttingEdge2027Innovations  } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027  } from '../data/2027-practical-micro-saas';
  Search,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Rocket,
  Brain,
  Atom,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Target,
  Cpu,
  Database,
  Cloud,
  Lock,
  ShieldCheck,
  Eye,
  Heart,
  Share2,
  Download,
  Phone,
  Mail,
  MapPin,} from 'lucide-react';import {
  Search, Star, Users, TrendingUp, DollarSign, Clock,
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe,
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud,
  Lock, ShieldCheck, Eye, Heart, Share2, Download, Phone, Mail, MapPin;

import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  // Sort options
  const sortOptions = [
    { value: 'name', label: 'Sort by Name' }
    { value: 'price', label: 'Sort by Price' }

    { value: 'roi', label: 'Sort by ROI' }
  ];

  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||

import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';
export default function ServicesShowcase2027() {;
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  // Sort options
  const sortOptions = [
    { value: 'name', label: 'Sort by Name' }
    { value: 'price', label: 'Sort by Price' }
    { value: 'roi', label: 'Sort by ROI' }
  ];
  const allServices = [
    ...cuttingEdge2027Innovations
    ...practicalMicroSaas2027,    { value: 'roi', label: 'Sort by ROI' }
  ];
  const allServices = [
    ...cuttingEdge2027Innovations;
    ...practicalMicroSaas2027
  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' |service.category.includes(selectedCategory);
    const matchesPrice =
      selectedPriceRange === 'all' |
      (selectedPriceRange === 'low' &&
        parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) |
      (selectedPriceRange === 'medium' &&
        parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 &&
        parseInt(service.price.replace(/[^0-9]/g, '')) < 10000) |
      (selectedPriceRange === 'high' &&
        parseInt(service.price.replace(/[^0-9]/g, '')) >= 10000);
    return matchesSearch && matchesCategory && matchesPrice;  });    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' |service.category.includes(selectedCategory);
    const matchesPrice = selectedPriceRange === 'all' |
                        (selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) |
                        (selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 10000) |
                        (selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 10000);
    return matchesSearch && matchesCategory && matchesPrice

  });
      {/* Search and Filters */}

      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2'
              >
                <Rocket className='w-5 h-5' />
                <span>Get Started</span>
              </Link>
              <Link
                href='/pricing'
                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2'
              >
                <DollarSign className='w-5 h-5' />                <span>View Pricing</span>              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2"><Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2"><DollarSign className="w-5 h-5" />
                <DollarSign className="w-5 h-5" />

                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className='px-4 sm:px-6 lg:px-8 mb-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20'>
            {/* Search Bar */}
            <div className='mb-6'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400' />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-12 pr-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'                />            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}


            {/* Filters */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-cyan-400 font-medium mb-2" htmlFor="input-Category">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400">{categories.map((category) => (
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name} ({category.count})
                    </option>

                  ))}

                </select>;
              </div>;





              {/* Price Range Filter */}


                  ))}

                </select>;
              </div>;
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-cyan-400 font-medium mb-2" htmlFor="input-Price Range">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400">{priceRanges.map(range => (
                <label className="block text-cyan-400 font-medium mb-2" htmlFor="input-Price Range">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400">{priceRanges.map((range) => (
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} ({range.count})
                    </option>
                  ))}
                </select>
              </div>




              {/* Sort By */}
              <div>
                <label className="block text-cyan-400 font-medium mb-2" htmlFor="input-Sort By">Sort By</label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}
                  className='w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400';
                >;
                  <option value='name'>Name</option>;
                  <option value='price'>Price</option>;
                  <option value='roi'>ROI</option>                </select>                <select
                  value={sortBy}

                  onChange={(e) => setSortBy(e && e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400";
                >;
                  <option value="name">Name</option>;
                  <option value="price">Price</option>;
                  <option value="roi">ROI</option>;
                </select>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

                    <div className='flex items-start justify-between mb-4'>;
                      <div className='text-4xl'>🚀</div>;
                    </div>;

                    {/* Service Info */}
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-cyan-300 text-sm mb-4 line-clamp-3'>                      {service && service.description}
                    </p>;


                    {/* Price */}


      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <motion.div
      {/* Services Grid */}
      <section className='px - 4 sm:px - 6 lg:px - 8 mb - 20'>;
        <div className='max - w-7xl mx - auto'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            <AnimatePresence>      <section className="px - 4 sm:px - 6 lg:px-8 mb-20">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-8">;
            <AnimatePresence>;
              {sorted_services.map ((service, index) => (
                <motion.div;

                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}

                  exit={{ opacity: 0, coordinate_y: -30, scale: 0.9 }}
                  className='group';
                >;
                  <div className='bg - black / 40 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 6 h - full hover:border - cyan - 400 / 50 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - 2xl shadow - cyan - 500 / 20'>;
                    {/* Service Header */}
                    <div className='flex items - start justify - between mb - 4'>;
                      <div className='text - 4xl'>🚀</div>;
                    </div>;
                    {/* Service Info */}
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition-colors duration-300">;
                      {service.name}
                    </h3>;
                    <p className='text - cyan - 300 text - sm mb - 4 line - clamp - 3'>                      {service.description}
                    </p>;
                    {/* Price */}
                    <div className='mb - 4'>;
                      <div className='text - 2xl font - bold text - white'>                        {service.price}                >;
                  <div className="bg - black / 40 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 6 h - full hover:border - cyan - 400 / 50 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - 2xl shadow - cyan - 500 / 20">;
                    {/* Service Header */}
                    <div className="flex items - start justify - between mb - 4">;
                      <div className="text - 4xl">🚀</div>;
                    </div>;

                    {/* Service Info */}
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                      {service.name}
                    </h3>;
                    <p className="text - cyan - 300 text - sm mb - 4 line - clamp - 3">;
                      {service.description}

                    <div className="mb-4">

                      <div className="text-2xl font-bold text-white">
                        {service.price}
                      <div className='text-2xl font-bold text-white'>                        {service.price}

                      {service.description}
                    </p>

                    {/* Price */}

                        {service.price}

                        {service.features.length > 3 && (
                          <div className="text-cyan-400 text-sm">
                            +{service.features.length - 3} more features
                          </div>
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                        href="/contact"
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                      >                    </div>
                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Link
                        href={service.link}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm"
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                      >

                      >
                        Learn More
                      </Link>
                      <Link
                        href="/contact"
                        className="px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm"
                      >
                        Contact
                      </Link>
                    </div>

                        className="px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm">;
                        Contact;

                        Learn More;
                      </Link>;
                      <Link;

                      >;
                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg 'hover':bg-cyan-500/10 transition-all duration-300 text-sm'>'

                        Contact;
                    </div>;







                        className='px-4 py-2 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-sm'                        href="/contact"
                    {/* Category Badge */}
                    <div className='mt-4'>;
                      <span className='inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30'>                        {service && service.category}                    <div className="mt-4">;
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">;
                        {service && service.category}
                      </span>;
                    </div>;
                  </div>;
                </motion && motion.div>;

                    {/* Category Badge */}
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </motion.div>

              ))}
              ))}
            </AnimatePresence>
          </div>

            </AnimatePresence>;
          </div>;







              ))}
          {/* No Results */}
          {sortedServices && sortedServices.length === 0 && (;
            <motion&& motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'                  setSelectedPriceRange('all')

                  setSelectedPriceRange('all')
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
          )}
        </div>
      </section>

          )}
      {/* Contact Section */}
      <section className='px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/20'>
            <h2 className='text-3xl font-bold text-white mb-4'>
          )}





      {/* Contact Section */}










              Ready to Transform Your Business?
            </h2>
            <p className='text-cyan-300 mb-8 text-lg'>
              Contact our team to discuss how our 2027 services can
              revolutionize your operations and drive unprecedented growth.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='flex items-center justify-center space-x-3'>
                <Phone className='w-5 h-5 text-cyan-400' />
                <span className='text-white'>{contactInfo.mobile}</span>
              </div>
              <div className='flex items-center justify-center space-x-3'>
                <Mail className='w-5 h-5 text-purple-400' />
                <span className='text-white'>{contactInfo.email}</span>
              </div>
              <div className='flex items-center justify-center space-x-3'>
                <MapPin className='w-5 h-5 text-pink-400' />
                <span className='text-white'>{contactInfo.address}</span>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          )}
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25'              >
                Get Started Today
              </Link>
              <Link
                href='/pricing'


                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'>              Ready to Transform Your Business?;
            </h2>;
            <p className=\"text-cyan-300 mb-8 text-lg\"    />;
              Contact our team to discuss how our 2027 services can revolutionize your operations and drive unprecedented growth.;
            </p>;

              <Link
                href='/pricing'
                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'                href="/pricing"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Zion Tech Group
            </h3>
            <p className="text-cyan-300">2027 Innovation Hub</p>
          </div>
          <div className="text-cyan-300 text-sm">
            <p>&copy, 2027 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>

          <div className="text-cyan-300 text-sm">;
            <p>&copy, 2027 Zion Tech Group. All rights reserved.</p>;
            <p className="mt-2">;
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>;
              {' • '}
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link>;
              {' • '}


