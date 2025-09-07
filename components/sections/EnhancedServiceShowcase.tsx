import React, { useState, useMemo } from 'react;

import { Star, Users, TrendingUp, DollarSign, Clock;
  CheckCircle, ArrowRight, Zap, Shield, Rocket;


  Star
  Users
  TrendingUp
  DollarSign
  Clock
  CheckCircle
  ArrowRight
  Zap
  Shield
  Rocket
  Brain
  Globe
  Lock
  Code
  Database
  Cloud;
  Brain, Globe, Lock, Code, Database, Cloud;
  } from lucide-react';
import {Star;
  Users;
  TrendingUp;
  DollarSign;
  Clock;
  CheckCircle;
  ArrowRight;
  Zap;
  Shield;
  Rocket;
  Brain;
  Globe;
  Lock;
  Code;
  Database;
  Cloud;Star,Users,TrendingUp,DollarSign,Clock,CheckCircle,ArrowRight,Zap,Shield,Rocket,Brain,Globe,Lock,Code,Database,Cloud,Star,Users,TrendingUp,DollarSign,Clock,CheckCircle,ArrowRight,Zap,Shield,Rocket,Brain,Globe,Lock,Code,Database,Cloud,import Button from '../ui/Button;
interface Service  {id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  text_color: string;
  link: string;
  market_position: string;
  target_audience: string;
  trial_days: number;
  setup_time: string;
  category: string;
  real_service: boolean;
  technology: string[];
  integrations: string[];
  use_cases: string[];
  roi: string;
  competitors: string[];
  market_size: string;
  growth_rate: string;
  variant: string;contactInfo: {mobile: string;
  variant: string;contactInfo: {mobile: string;
    email: string;

  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;


  title: string;
  subtitle: string;
  show_filters?: boolean;
  services?: Service[];

  maxServices?: number
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

interface EnhancedServiceShowcaseProps {
  title: string,
  subtitle: string,
  showFilters?: boolean,
  services?: Service[],
  maxServices?: number
}

const EnhancedServiceShowcase: React.FC<EnhancedServiceShowcaseProps> = ({
  subtitle;

  const [sortBy, setSortBy] = useState<string>(popular');
  const categories = []
  const filteredServices = useMemo(() => {}
    const filtered = services.filter(service => {'
      const matchesCategory = selectedCategory === all |'
                             (selectedCategory === 'ai && (service.category.includes(AI') |service.category.includes('Machine Learning))) |
                             (selectedCategory === 'quantum' && (service.category.includes(Quantum) |service.category.includes('Space'))) |
                             (selectedCategory === blockchain' && (service.category.includes('Blockchain) |service.category.includes(DeFi') |service.category.includes('NFT))) |
                             (selectedCategory === 'enterprise' && (service.category.includes(Enterprise) |service.category.includes('IT'))) |
                             (selectedCategory === emerging' && (service.category.includes('Neural) |service.category.includes(Autonomous') |service.category.includes('Space) |service.category.includes(Biotech')));'
      const matchesPrice = selectedPriceRange === all |'
                          (selectedPriceRange === 'low && parseFloat(service.price.replace(/[$]/g, ')) < 1000) |'
                          (selectedPriceRange === medium && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, )) < 5000) |'
                          (selectedPriceRange === 'high && parseFloat(service.price.replace(/[$]/g, ')) >= 5000 && parseFloat(service.price.replace(/[$]/g, ')) < 20000) |
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, )) >= 20000);

  const priceRanges = [
    { id: 'all', name: All Prices },
    { id: 'low', name: Under $1K/month },
    { id: 'medium', name: $1K - $5K/month },
    { id: 'high', name: $5K - $20K/month },

  const sortOptions = [
    { id: 'popular', name: Most Popular },
    { id: 'rating', name: Highest Rated },
    { id: 'roi', name: Best ROI },
    { id: 'price-low', name: Price Low to High }});
    // Sort services;
    switch (sortBy) {'
      case 'popular:
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating |0) - (a.rating |0));
        break;
      case roi':
        filtered.sort((a, b) => {}
  subtitle;
  showFilters = false;
  services = [],
  maxServices = 12;'
  const [selectedCategory, setSelectedCategory] = useState<string>(all);'
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all);
  const [sortBy, setSortBy] = useState<string>('popular');
  const categories = [;
    { id: all', name: 'All Services, icon: 🚀' },'
    { id: ai, name: 'AI & ML', icon: 🧠 },'
    { id: 'quantum, name: Quantum', icon: '⚛️ },
    { id: 'blockchain', name: Blockchain, icon: '⛓️' },
    { id: enterprise', name: 'Enterprise, icon: 🏢' },'
    { id: emerging, name: 'Emerging Tech', icon: 🌟 }];    { id: 'emerging', name: Emerging Tech, icon: '🌟' }
  ];
  const priceRanges = [;
    { id: all', name: 'All Prices },
    { id: 'low', name: Under $1K/month },'
    { id: 'medium, name: $1K - $5K/month' },'
    { id: high, name: '$5K - $20K/month' },
    { id: premium', name: '$20K+/month }];    { id: premium', name: '$20K+/month }
  ];
  const sortOptions = [;
    { id: 'popular', name: Most Popular },'
    { id: 'rating, name: Highest Rated' },'
    { id: roi, name: 'Best ROI' },
    { id: price-low', name: 'Price Low to High },
    { id: 'price-high', name: Price High to Low }];
  const filteredServices = useMemo(() => {
    let filtered = services && services.filter(service => {
      const matchesCategory =;'
        selectedCategory === 'all ||;
        (selectedCategory === 'ai' &&;
          (service && service.category.includes(AI') ||;'
            service && service.category.includes(Machine Learning))) ||;'
        (selectedCategory === 'quantum &&;
          (service && service.category.includes('Quantum') ||;
            service && service.category.includes(Space'))) ||;'
        (selectedCategory === blockchain &&;'
          (service && service.category.includes('Blockchain) ||;
            service && service.category.includes('DeFi') ||;
            service && service.category.includes(NFT'))) ||;'
        (selectedCategory === enterprise &&;'
          (service && service.category.includes('Enterprise) ||;
            service && service.category.includes('IT'))) ||;
        (selectedCategory === emerging' &&;'
          (service && service.category.includes(Neural) ||;'
            service && service.category.includes('Autonomous) ||;
            service && service.category.includes('Space') ||;
            service && service.category.includes(Biotech')));
      const matchesPrice =;'
        selectedPriceRange === all ||;'
        (selectedPriceRange === 'low &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) < 1000) ||;
        (selectedPriceRange === medium' &&;'
          parseFloat(service && service.price.replace(/[$]/g, )) >= 1000 &&;'
          parseFloat(service && service.price.replace(/[$]/g, ')) < 5000) ||;
        (selectedPriceRange === 'high' &&;
          parseFloat(service && service.price.replace(/[$]/g, ')) >= 5000 &&;'
          parseFloat(service && service.price.replace(/[$]/g, )) < 20000) ||;'
        (selectedPriceRange === 'premium &&;
          parseFloat(service && service.price.replace(/[$]/g, '')) >= 20000);
  const filteredServices = useMemo(() => {
    const filtered = services && services.filter(service => {
      const matchesCategory = selectedCategory === all' || ;'
                             (selectedCategory === ai && (service && service.category.includes('AI') || service && service.category.includes(Machine Learning))) ||;'
                             (selectedCategory === 'quantum && (service && service.category.includes(Quantum') || service && service.category.includes('Space))) ||;
                             (selectedCategory === 'blockchain' && (service && service.category.includes(Blockchain) || service && service.category.includes('DeFi') || service && service.category.includes(NFT))) ||;'
                             (selectedCategory === 'enterprise && (service && service.category.includes(Enterprise') || service && service.category.includes('IT))) ||;
                             (selectedCategory === 'emerging' && (service && service.category.includes(Neural) || service && service.category.includes('Autonomous') || service && service.category.includes(Space) || service && service.category.includes('Biotech')));
      const matchesPrice = selectedPriceRange === all' ||;'
                          (selectedPriceRange === low && parseFloat(service && service.price.replace(/[$]/g, '')) < 1000) ||;
                          (selectedPriceRange === medium' && parseFloat(service && service.price.replace(/[$]/g, ')) >= 1000 && parseFloat(service && service.price.replace(/[$]/g, ')) < 5000) ||;'
                          (selectedPriceRange === high && parseFloat(service && service.price.replace(/[$]/g, '')) >= 5000 && parseFloat(service && service.price.replace(/[$]/g, )) < 20000) ||;'
                          (selectedPriceRange === 'premium && parseFloat(service && service.price.replace(/[$]/g, ')) >= 20000);
    // Sort services;
    switch (sortBy) {'
      case popular:;
        filtered && filtered.sort((a, b) => (b && b.popular ? 1 : 0) - (a && a.popular ? 1 : 0));
        break;'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      case 'rating:;
        filtered && filtered.sort((a, b) => (b && b.rating || 0) - (a && a.rating || 0));
        break;
      case 'roi':;

      case price - low:;
        filtered.sort (
          (a, b) =>;'
            parse_float (a.price.replace (/[$]/g, ')) -;
            parse_float (b.price.replace (/[$]/g, '')));
        break;
      case price - high':;
        filtered.sort (
          (a, b) =>;'
            parse_float (b.price.replace (/[$]/g, )) -;'
            parse_float (a.price.replace (/[$]/g, ')));
        break;
      default:;
        break;
    }
        break;
      case 'price - low':;
        filtered.sort ((a, b) => parse_float (a.price.replace (/[$]/g, ')) - parse_float (b.price.replace (/[$]/g, ')));
        break;
      case 'price - high':;
        filtered.sort ((a, b) => parse_float (b.price.replace (/[$]/g, ')) - parse_float (a.price.replace (/[$]/g, ')));
        break;

            {title}
          </motion && motion.h2>;
          <motion&& motion.p;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

          >
            {subtitle}
          </motion.p>
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >

          >

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            {subtitle}
          </motion.p>

            {subtitle}
          {/* Stats */}
          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}

          <motion.p;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          {/* Stats */}
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

          >
            {stats.map((stat, index) => (
              <div key={index} className=text-center'>
                <div className={`${stat.color} mb-2 flex justify-center`}>'
                  <stat.icon className=w-8 h-8 />
                </div>'
                <div className='text-2xl font-bold text-white>
                  {stat.value}

              </div>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            ))}
          </motion.div>
        </div>

            ))}
        {/* Filters */}

              <div className=grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* Category Filter */}
                <div>'
                  <label className=block text-sm font-medium text-gray-300 mb-3>
                    Category;
                  </label>
                  <select;
                    value={selectedCategory}
                {/* Category Filter */}
                <div>;"
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select;
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
origin/cursor/automate-test-improve-and-merge-code-2533
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                  </select>;
                </div>;


                {/* Price Range Filter */}

                  </label>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  <select;
                    value={selectedCategory}{/* Category Filter */}
                <div>;
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select;
                    value={selectedCategory}onChange={e => setSelectedCategory(e.target.value)}
                    className=w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent;
                  >;
                    {categories.map(category => (<option key={category.id} value={category.id}>;
                {/* Category Filter */}
                <div>;
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select
                    value={selectedCategory}
                        {category.icon} {category.name}
                      </option>
                    ))}
          whileInView={{ opacity: 1, y: 0 }}

                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className=block text-sm font-medium text-gray-300 mb-3>Price Range</label>
                  <select
                    value={selectedPriceRange}

                      <option key={range.id} value={range.id}>
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>


                  </label>
                  <select;
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}'
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                  >

                      <option key={option.id} value={option.id}>
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                        {option.name}
                      </option>
                    ))}
                {/* Price Range Filter */}

                        {range && range.name}
                      </option>
                    value={selectedPriceRange}
                    on_change={(e) => setSelectedPriceRange (e.target.value)}"

          </motion.div>)}
        {/* Services Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}

=======
          transition={{ duration: 0.8, delay: 0.8 }}"
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'        >          className=grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8;
        >;
          <AnimatePresence>;
            {filtered_services.map ((service, index) => (
              <motion.div;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                key={service.id}
                initial={{ opacity: 0, coordinate_y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className=absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full>                      ⭐ Most Popular


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    </div>
                  )}

                  {/* Header */}

<div className='mb-6'>
                    <div className=flex items-center justify-between mb-4>
                      <div className='text-3xl'>{service.icon}</div>
                      <div className=text-right>
                        <div className='text-2xl font-bold text-white'>

                      {service.name}
                    </h3>
                    <p className=text-gray-300 text-sm leading-relaxed>                      {service.tagline}

                  <div className="mb-6">
                    <div className=flex items-center justify-between mb-4>
                      <div className="text-3xl">{service.icon}</div>
                      <div className=text-right>
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className=text-sm text-gray-400>{service.period}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className=text-gray-300 text-sm leading-relaxed>
=======
origin/cursor/automate-test-improve-and-merge-code-2533
                          {service.price}
                        </div>;'
                        <div className='text - sm text - gray - 400>;
                          {service.period}
                    </h3>;
                    <p className='text - gray - 300 text - sm leading - relaxed'>                      {service.tagline}                      </div>;
                    </div>;"
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors>;
                      {service.name}
                    </h3>;
                    <p className="text - gray - 300 text - sm leading - relaxed">;
                      {service.tagline}




                      </div>
                    </div>
                    <h3 className=text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                      {service.name}
                    </h3>'
                    <p className=text-gray-300 text-sm leading-relaxed>                      {service.tagline}

                    <p className='text-gray-300 text-sm leading-relaxed'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      {service.tagline}
                    </p>
                  </div>

                  {/* Features */}

                  {/* Features */}
                  <div className=mb-6>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className=w-4 h-4 mr-2 text-green-400 />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className=text-sm text-gray-400 flex items-start>
                          <span className="text-cyan-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
<div className=mb-6>;
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>;
                      <CheckCircle className=w-4 h-4 mr-2 text-green-400 />;
                      Key Features;
                    </h4>;
                    <ul className=space-y-2>;
                      {service.features.slice(0, 4).map((feature, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">;
                          <span className=text-cyan-400 mr-2>•</span>;
                    <ul className='space-y-2'>;
                      {service.features.slice(0, 4).map((feature, idx) => (<li;
                          key={idx}
                          className=text-sm text-gray-400 flex items-start;
                        >;
                          <span className='text-cyan-400 mr-2'>•</span>;
                          {feature}
                        </li>;
                      ))}{/* Stats */}<div className=grid grid-cols-3 gap-4 mb-6 text-center>;
<div className='grid grid-cols-3 gap-4 mb-6 text-center'>;
                    <div>;
                      <div className=text-lg font-bold text-white>;
                        {service.rating}
                      </div>;
                      <div className='text-xs text-gray-400'>Rating</div>;
                    </div>;
                    <div>;
                      <div className=text-lg font-bold text-white>;
                        {service.customers?.toLocaleString() |'0'}
                      </div>;
                      <div className=text-xs text-gray-400>Customers</div>;
                    </div>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;
                        {service.trialDays}
                  <div className=grid grid-cols-3 gap-4 mb-6 text-center>

                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.rating}
                      </div>
                      <div className=text-xs text-gray-400>Rating</div>
                    </div>
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.customers?.toLocaleString() |0}
                      </div>
                      <div className='text-xs text-gray-400'>Customers</div>
                    </div>
                    <div>
                      <div className=text-lg font-bold text-white>
                        {service.trialDays}
                      </div>
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>
                  </div>
                  {/* ROI Highlight */}                    <div>
                          {feature}
                        </li>;
                      ))}
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className=text-xs text-gray-400>Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() |0}</div>
                      <div className=text-xs text-gray-400>Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.trialDays}</div>
=======
                  {/* Features */}'
                  <div className='mb-6>
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>
                      <CheckCircle className=w-4 h-4 mr-2 text-green-400' />

                      Key Features;
                    </h4>'
                    <ul className=space-y-2>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li;
                          key={idx}'
                          className='text-sm text-gray-400 flex items-start>;
                          <span className='text-cyan-400 mr-2'>•</span>                          {feature}                      Key Features;
                    </h4>;
                    <ul className=space-y-2">;
                      {service && service.features.slice(0, 4).map((feature, idx) => (;"
                        <li key={idx} className=text-sm text-gray-400 flex items-start>;
                    </p>
                  </div>

                      <CheckCircle className=w-4 h-4 mr-2 text-green-400 />
                      Key Features;
                    </h4>"
                    <ul className="space-y-2>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className=text-cyan-400 mr-2">•</span>

                    <ul className='space-y-2'>
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className=text-sm text-gray-400 flex items-start
                        >
                          <span className='text-cyan-400 mr-2'>•</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                          {feature}
                        </li>;
                      ))}

                  {/* Stats */}
                  <div className=grid grid-cols-3 gap-4 mb-6 text-center'>


                      <div className='text-lg font-bold text-white>
                        {service.rating}
                      </div>
                      <div className='text-xs text-gray-400'>Rating</div>
                    </div>
                    <div>
                      <div className=text-lg font-bold text-white'>'
                        {service.customers?.toLocaleString() |0}
                      </div>'
                      <div className='text-xs text-gray-400>Customers</div>
                    </div>
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.trialDays}
                      </div>
                      <div className=text-xs text-gray-400'>Trial Days</div>                    </div>
                  </div>
                  {/* ROI Highlight */}                    <div>
                          {feature}
                        </li>;
                      ))}"
                      <div className=text-lg font-bold text-white>{service.rating}</div>"
                      <div className="text-xs text-gray-400>Rating</div>
                    </div>
                    <div>'
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() |0}</div>
                      <div className=text-xs text-gray-400">Customers</div>
                    </div>
                    <div>"
                      <div className=text-lg font-bold text-white>{service.trialDays}</div>"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      <div className="text-xs text-gray-400>Trial Days</div>
                    </div>
                  </div>
                  {/* ROI Highlight */}



                      {service.roi}

                    </div>
                  </div>
                  {/* Market Position */}

                      {service.marketPosition}
                    </div>
                  </div>
                  {/* Stats */}'
                  <div className='grid grid-cols-3 gap-4 mb-6 text-center>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;
                        {service && service.rating}
                      </div>;
                      <div className=text-xs text-gray-400'>Rating</div>;
                    </div>;
                    <div>;'
                      <div className=text-lg font-bold text-white>;'
                        {service && service.customers?.toLocaleString() || '0}
                      </div>;
                      <div className='text-xs text-gray-400'>Customers</div>;
                    </div>;
                    <div>;
                      <div className=text-lg font-bold text-white'>;
                        {service && service.trialDays}
                      </div>;'
                      <div className=text-xs text-gray-400>Trial Days</div>                    </div>;
                  </div>;
                  {/* ROI Highlight */}                    <div>;
                      <div className="text-lg font-bold text-white">{service && service.rating}</div>;
                      <div className=text-xs text-gray-400">Rating</div>;
                    </div>;
                    <div>;'"
                      <div className=text-lg font-bold text-white>{service && service.customers?.toLocaleString() || '0}</div>;"
                      <div className="text-xs text-gray-400>Customers</div>;
                    </div>;
                    <div>;
                      <div className="text-lg font-bold text-white">{service && service.trialDays}</div>;
                      <div className=text-xs text-gray-400">Trial Days</div>;
                    </div>;
                  </div>;

                    <div className="text-xs text-gray-300 leading-relaxed>;
                      {service && service.roi}
                    </div>;
                  </div>;

                      <span className=text-cyan-400'>;
                        {service && service.contactInfo.mobile}
                      </span>;
                    </div>;'
                    <div className=text-xs text-gray-500>;'
                      Email:{' }
                      <span className='text-cyan-400'>;
                        {service && service.contactInfo.email}
                      </span>                    </div>                  <div className="mt-4 text-center">;
                    <div className=text-xs text-gray-500">;"
                      Contact: <span className=text-cyan-400>{service && service.contactInfo.mobile}</span>;
                    </div>;"
                    <div className="text-xs text-gray-500>;
                      Email: <span className="text-cyan-400">{service && service.contactInfo.email}</span>;
                  </div>;
                </div>;
              </motion && motion.div>;
          </AnimatePresence>;
        </motion && motion.div>;


                      <span className=text-cyan-400>
                        {service.contactInfo.email}
                      </span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Call to Action */}

                className='text-lg px-8 py-4'>;
                Schedule a Consultation;
                <ArrowRight className=ml-2 w-5 h-5' />;
              </Button>;
              <Button'
                href=/pricing'
                variant='secondary
                className='text-lg px-8 py-4'>;
                View Pricing Plans;
                <DollarSign className=ml-2 w-5 h-5' />;
              </Button>;
            </div>;'
            <div className=mt-6 text-sm text-gray-400>;
              <p>;'
                📞 Call us:{' }
                <span className='text-cyan-400'>+1 302 464 0950</span>;
              </p>;
              <p>;
                📧 Email:{ '}'
                <span className=text-cyan-400>kleber@ziontechgroup && ziontechgroup.com</span>;
              </p>;
              <p>;'
                🌐 Visit:{' }
                <span className='text-cyan-400'>https://ziontechgroup && ziontechgroup.com</span>;
              </p>            </div>            <div className=mt-6 text-sm text-gray-400">;"
              <p>📞 Call us: <span className=text-cyan-400>+1 302 464 0950</span></p>;"
              <p>📧 Email: <span className="text-cyan-400>kleber@ziontechgroup && ziontechgroup.com</span></p>;
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup && ziontechgroup.com</span></p>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );
}

export default EnhancedServiceShowcase;  );
}
export default EnhancedServiceShowcase;
                    </p>;
                  </div>;
                  {/* Features */}
                  <div className=mb - 6'>;'
                    <h4 className=text - sm font - semibold text - gray - 300 mb - 3 flex items - center>;'
                      <CheckCircle className='w - 4 h - 4 mr - 2 text - green - 400 />;
                      Key Features;
                    </h4>;
                    <ul className='space - y-2'>;
                      {service.features.slice (0, 4).map ((feature, idx) => (
                        <li;
                          key={idx}
                          className=text - sm text - gray - 400 flex items - start';
                        >;'
                          <span className=text - cyan - 400 mr - 2>•</span>                          {feature}                      Key Features;
                    </h4>;
                    <ul className=space - y-2">;
                      {service.features.slice (0, 4).map ((feature, idx) => ("
                        <li key={idx} className=text - sm text - gray - 400 flex items - start>;"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                          <span className="text - cyan - 400 mr - 2>•</span>;
                          {feature}
                        </li>))}
                    </ul>;
                  </div>;

                    <div className=text - xs text - gray - 300 leading - relaxed">;
                      {service.roi}
                    </div>;
                  </div>;

                    <div className="text - xs text - gray - 300 leading - relaxed>;
                      {service.market_position}
                    </div>;
                  </div>;

                      Email: <span className=text - cyan - 400">{service.contact_info.email}</span>;
                  </div>;
                </div>;
              </motion.div>))}
          </AnimatePresence>;
        </motion.div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}

            <p className='text - gray - 300 mb - 6 max - w-2xl mx - auto'>;
              Join thousands of companies already achieving breakthrough results;
              with our cutting - edge AI, quantum, and blockchain solutions. Get;
              started today and see the future of business technology.;

              <p>🌐 Visit: <span className="text - cyan - 400">https://ziontechgroup.com</span></p>;
          </div>;
        </motion.div>;
      </div>;

    </section>);
}
export default EnhancedServiceShowcase);
}
export default EnhancedServiceShowcase;
  );

}



          </div>
        </motion.div>
      </div>
    </section>

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
);
}
export default EnhancedServiceShowcase;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
