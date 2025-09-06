
import Head from 'next/head';

} from 'lucide-react';import Button from '../components/ui/Button';import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Target as TargetIcon, Zap as ZapIcon2, Shield as ShieldIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';

import {

} from 'lucide-react';import Button from '../components/ui/Button';import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Target as TargetIcon, Zap as ZapIcon2, Shield as ShieldIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('innovation');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' }
    { value: '0-1000', label: '$0 - $1,000' }
    { value: '1001-2000', label: '$1,001 - $2,000' }
    { value: '2001-3000', label: '$2,001 - $3,000' }
    { value: '3001-5000', label: '$3,001 - $5,000' }
    { value: '5001+', label: '$5,001+' },  ];    { value: '0-1000', label: '$0 - $1,000' }
    { value: '1001-2000', label: '$1,001 - $2,000' }
    { value: '2001-3000', label: '$2,001 - $3,000' }
    { value: '3001-5000', label: '$3,001 - $5,000' }
    { value: '5001+', label: '$5,001+' }
  const sortOptions = [
    { value: 'innovation', label: 'Innovation Level' }
    { value: 'price', label: 'Price Low-High' }
    { value: 'popularity', label: 'Most Popular' }
    { value: 'category', label: 'Category' }
    { value: 'roi', label: 'Highest ROI' },  ];    { value: 'roi', label: 'Highest ROI' }

  ];
  // Filter and sort services
  let filteredServices = innovativeMicroSaasServices;
  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getInnovativeServicesByCategory(selectedCategory);  }
  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange
      .split('-')
      .map(p => (p === '+' ? Infinity : parseInt(p)));
    filteredServices = getInnovativeServicesByPriceRange(min, max);  }
  // Search filter
  if (searchQuery) {    filteredServices = getInnovativeServicesByCategory(selectedCategory)
  }
  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange
      .split('-')
      .map(p => (p === '+' ? Infinity : parseInt(p)));
    filteredServices = getInnovativeServicesByPriceRange(min, max);    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getInnovativeServicesByPriceRange(min, max)
  }
  // Search filter
  if (searchQuery) {

  const popularServices = getPopularInnovativeServices();
  const categories = getInnovativeServiceCategories();

  return (


                  </div>;
                </div>;
              </div>;
            </div>;
          </section>;

          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

                      <input
                        type="text"
                        placeholder="Search innovative services..."
                        value={searchQuery}


                  {/* Category Filter */}

                  <div className="flex-shrink-0">
                    <select
                      value={selectedCategory}
                      onChange={e => setSelectedCategory(e.target.value)}
                      className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                    >
                      <option value='All'>All Categories</option>

                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                    <select
                      value={priceRange}
                      onChange={e => setPriceRange(e.target.value)}
                      className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                    >

                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                    <select
                      value={sortBy}
                      onChange={e => setSortBy(e.target.value)}
                      className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                    >

                          {option.value}
                        </option>
                      ))}
                    </select>
                  </div>

                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-2 rounded-lg transition-all ${;
                          viewMode === 'grid';
                            ? 'bg-cyan-500 text-white';
                            : 'text-gray-400 hover:text-white';
                        }`}

                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-3 py-2 rounded-lg transition-all ${

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
                      >;
                        <List className="w-5 h-5" />;
          {/* Filters and Search */}
          <section className='px - 4 sm:px - 6 lg:px - 8 mb - 12'>;
            <div className='max - w-7xl mx - auto'>;
              <div className='bg - black / 20 backdrop - blur - lg rounded - 2xl p - 6 border border - white / 10'>;
                <div className='flex flex - col lg:flex - row gap - 6'>;
                  {/* Search */}
                  <div className='flex - 1'>;
                    <div className='relative'>;
                      <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
                      <input;
                        type='text';
                        placeholder='Search innovative services...';
                        value={search_query}
                        on_change={e => setSearchQuery (e.target.value)}
                        className='w - full pl - 10 pr - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent'                      />                  {/* Search */}
                  <div className="flex - 1">;
                    <div className="relative">;
                      <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
                      <input;
                        type="text";
                        placeholder="Search innovative services...";
                        value={search_query}
                        on_change={(e) => setSearchQuery (e.target.value)}
                        className="w - full pl - 10 pr - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                      />;
                    </div>;
                  </div>;
                  {/* Category Filter */}
                  <div className='flex - shrink - 0'>;
                    <select;
                      value={selected_category}
                      on_change={e => setSelectedCategory (e.target.value)}
                      className='px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                    >;
                      <option value='All'>All Categories</option>;
                      {categories.map (category => (                        <option key={category.name} value={category.name}>                    <select;
                      value={selected_category}
                      on_change={(e) => setSelectedCategory (e.target.value)}
                      className="px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                    >;
                      <option value="All">All Categories</option>;
                      {categories.map ((category) => (
                        <option key={category.name} value={category.name}>;
                          {category.name} ({category.count});
                        </option>))}
                    </select>;
                  </div>;
                  {/* Price Range Filter */}
                  <div className='flex - shrink - 0'>;
                    <select;
                      value={price_range}
                      on_change={e => setPriceRange (e.target.value)}
                      className='px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                    >;
                      {price_ranges.map (range => (                        <option key={range.value} value={range.value}>                    <select;
                      value={price_range}
                      on_change={(e) => setPriceRange (e.target.value)}
                      className="px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                    >;
                      {price_ranges.map ((range) => (
                        <option key={range.value} value={range.value}>;
                          {range.label}
                        </option>))}
                    </select>;
                  </div>;
                  {/* Sort Options */}
                  <div className='flex - shrink - 0'>;
                    <select;
                      value={sort_by}
                      on_change={e => setSortBy (e.target.value)}
                      className='px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
                    >;
                      {sort_options.map (option => (                        <option key={option.value} value={option.value}>                    <select;
                      value={sort_by}
                      on_change={(e) => setSortBy (e.target.value)}
                      className="px - 4 py - 3 bg - white / 10 border border - white / 20 rounded - xl text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                    >;
                      {sort_options.map ((option) => (
                        <option key={option.value} value={option.value}>;
                          {option.value}
                        </option>))}
                    </select>;
                  </div>;
                  {/* View Mode Toggle */}
                  <div className='flex - shrink - 0'>;
                    <div className='flex bg - white / 10 rounded - xl p - 1 border border - white / 20'>;
                      <button;
                        on_click={() => setViewMode ('grid')}
                        className={`px - 3 py - 2 rounded - lg transition - all ${
                          view_mode === 'grid';
                            ? 'bg - cyan - 500 text - white';
                            : 'text - gray - 400 hover:text - white';
                        }`}
                      >;
                        <Grid className='w - 5 h - 5' />                      </button>                      <button;
                        on_click={() => setViewMode ('list')}
                        className={`px - 3 py - 2 rounded - lg transition - all ${
                          view_mode === 'grid' ? 'bg - cyan - 500 text - white' : 'text - gray - 400 hover:text - white';
                        }`}
                      >;
                        <Grid className="w - 5 h - 5" />;
                      </button>;
                      <button;
                        on_click={() => setViewMode ('list')}
                        className={`px - 3 py - 2 rounded - lg transition - all ${
                          view_mode === 'list';
                            ? 'bg - cyan - 500 text - white';
                            : 'text - gray - 400 hover:text - white';
                        }`}
                      >;
                        <List className='w - 5 h - 5' />                      </button>                          view_mode === 'list' ? 'bg - cyan - 500 text - white' : 'text - gray - 400 hover:text - white';
                        }`}
                      >;
                        <List className="w - 5 h - 5" />;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </section>;


                        </div>;
                        {/* Tagline */}



                        <div className='flex items-start justify-between mb-4'>
                          <div className='flex items-center space-x-3'>
                            <div className='text-3xl'>{service.icon}</div>
                            <div>
                              <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors'>
                                {service.name}
                              </h3>
                              <p className='text-sm text-gray-400'>
                                {service.category}
                              </p>
                            </div>
                          </div>
                          {service.popular && (

                        {/* Tagline */}
                        <p className='text-gray-300 mb-4 font-medium'>
                          {service.tagline}
                        </p>

                        {/* Description */}
                        <p className='text-gray-400 text-sm mb-6 leading-relaxed'>;
                          {service && service.description}
                        </p>;

                        {/* Innovation Level */}
                        <div className='mb-4'>;
                          <div className='flex items-center space-x-2 mb-2'>;
                            <Sparkles className='w-4 h-4 text-yellow-400' />;
                            <span className='text-sm font-medium text-yellow-400'>;
                              Innovation Level;
                            </span>;
                          </div>;
                          <div className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-bold text-center'>                            {service && service.innovationLevel}
                        {/* Description */}

                        <div className="grid grid-cols-2 gap-4 mb-6">

                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">${service.price.monthly.toLocaleString()}</div>
                            <div className="text-xs text-gray-400">per month</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{service.roi.split(' ')[0]}</div>
                            <div className="text-xs text-gray-400">average ROI</div>

                          </div>

                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service && service.description}</p>;

                        {/* Innovation Level */}
                        <div className="mb-4">;
                          <div className="flex items-center space-x-2 mb-2">;
                            <Sparkles className="w-4 h-4 text-yellow-400" />;
                            <span className="text-sm font-medium text-yellow-400">Innovation Level</span>;
                          </div>;
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-bold text-center">;
                            {service && service.innovationLevel}
                          </div>;
                        </div>;

                        {/* Price and ROI */}
                        <div className='grid grid-cols-2 gap-4 mb-6'>;
                          <div className='text-center'>;
                            <div className='text-2xl font-bold text-cyan-400'>;
                              ${service && service.price.monthly && monthly.toLocaleString()}
                            </div>;
                            <div className='text-xs text-gray-400'>;
                              per month;
                            </div>;
                          </div>;
                          <div className='text-center'>;
                            <div className='text-lg font-bold text-green-400'>;
                              {service && service.roi.split(' ')[0]}
                            </div>;
                            <div className='text-xs text-gray-400'>;
                              average ROI;
                            </div>                          </div>;
                        </div>;

                        {/* Key Features */}                        <div className="grid grid-cols-2 gap-4 mb-6">;
                          <div className="text-center">;
                            <div className="text-2xl font-bold text-cyan-400">${service && service.price.monthly && monthly.toLocaleString()}</div>;
                            <div className="text-xs text-gray-400">per month</div>;
                          </div>;
                          <div className="text-center">;
                            <div className="text-lg font-bold text-green-400">{service && service.roi.split(' ')[0]}</div>;
                            <div className="text-xs text-gray-400">average ROI</div>;
                        </div>;

                        {/* Key Features */}

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-xs text-gray-300">{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 3 && (
                              <div className="text-xs text-cyan-400 text-center pt-2">

                            )}
                          </div>
                        </div>

                          <div>
                            <div className='text-gray-400'>Market Size</div>
                            <div className='text-white font-medium'>
                              {service.marketSize}
                            </div>
                          </div>
                          <div>
                            <div className='text-gray-400'>Growth Rate</div>
                            <div className='text-white font-medium'>
                              {service.growthRate}
                            </div>                          </div>
                        </div>
                        {/* CTA Buttons */}
                        <div className='flex space-x-3'>                          <div>
                        <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                          <div>
                            <div className="text-gray-400">Market Size</div>
                            <div className="text-white font-medium">{service.marketSize}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Growth Rate</div>
                            <div className="text-white font-medium">{service.growthRate}</div>
                          </div>
                        </div>
                          </div>;
                        </div>;

                        {/* Market Info */}
                        <div className='grid grid-cols-2 gap-4 mb-6 text-xs'>;
                          <div>;
                            <div className='text-gray-400'>Market Size</div>;
                            <div className='text-white font-medium'>;
                              {service && service.marketSize}
                            </div>;
                          </div>;
                          <div>;
                            <div className='text-gray-400'>Growth Rate</div>;
                            <div className='text-white font-medium'>;
                              {service && service.growthRate}
                            </div>                          </div>;
                        </div>;

                        {/* CTA Buttons */}

                            className='px-4'>;
                            <Mail className='w-4 h-4' />                          </Button>;
                        </div>;

                        {/* CTA Buttons */}
                        <div className='flex space-x-3'>;
                          <Button
                            href={service && service.link}
                            variant='primary'
                            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'>;
                            Learn More;
                            <ArrowRight className='w-4 h-4 ml-2' />;
                          </Button>;
                          <Button
                            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
                            variant='secondary'
                            className='px-4'
                          >
                            <Mail className='w-4 h-4' />                          </Button>
                        </div>
                        {/* Contact Info */}                          <Button
                            href={service && service.link}

                        <div className="flex space-x-3">
                          <Button
                            href={service.link}

                            variant="primary"
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">;
                            Learn More;
                            <ArrowRight className="w-4 h-4 ml-2" />;
                          </Button>;
                          <Button
                            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
                            variant="secondary"


                        {/* Contact Info */}
                        <div className='mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 text-center'>;
                          <div>;
                            Contact: {contactInfo && contactInfo.mobile} | {contactInfo && contactInfo.email}
                          </div>;
                          <div className='mt-1'>{contactInfo && contactInfo.website}</div>                        </div>                        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 text-center">;
                          <div>Contact: {contactInfo && contactInfo.mobile} | {contactInfo && contactInfo.email}</div>;
                          <div className="mt-1">{contactInfo && contactInfo.website}</div>;
                        </div>;
                      </div>;
                    </QuantumHolographicCard>;


                        {/* Contact Info */}
                        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 text-center">
                          <div>Contact: {contactInfo.mobile} | {contactInfo.email}</div>
                          <div className="mt-1">{contactInfo.website}</div>
                        </div>
                      </div>
                    </QuantumHolographicCard>

                  ))}
                </div>;
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className='px-4 sm:px-6 lg:px-8 mb-20'>
            <div className='max-w-4xl mx-auto text-center'>
              <EnhancedFuturisticCard className='p-12'>
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>

                  Ready to Lead the Future?
                </h2>
                <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                  Join the revolution with our breakthrough micro SAAS services.
                  Transform your business with quantum AI, autonomous systems
                  and cutting-edge technology.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            </div>;
          </section>;

          {/* Call to Action */}
          <section className='px-4 sm:px-6 lg:px-8 mb-20'>;
            <div className='max-w-4xl mx-auto text-center'>;
              <EnhancedFuturisticCard className='p-12'>;
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                  Ready to Lead the Future?;
                </h2>;
                <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
                  Join the revolution with our breakthrough micro SAAS services.;
                  Transform your business with quantum AI, autonomous systems,;
                  and cutting-edge technology.;
                </p>;
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
                  <Button
                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    variant='primary'
                    className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg'>;
                    <Phone className='w-5 h-5 mr-2' />                    Call Now: {contactInfo && contactInfo.mobile}
                  </Button>;
                  <Button
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    variant='secondary'

                </div>
              </EnhancedFuturisticCard>
            </div>
          </section>
        </div>
      </QuantumHolographicBackground>
    </>

}

}
}
}

  );

}
