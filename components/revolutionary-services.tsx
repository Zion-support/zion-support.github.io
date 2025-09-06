class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';




} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';






} from '../data/revolutionary-micro-saas-services';
import { motion, AnimatePresence } from 'framer-motion';import Button from '../components/ui/Button';


import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories, getRevolutionaryServicesByCategory, getPopularRevolutionaryServices, getRevolutionaryServicesByPriceRange } from '../data/revolutionary-micro-saas-services';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Star, Calendar } from 'lucide-react';


  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);


  const [selectedService, setSelectedService] = useState<any>(null);

    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  ];



  const priceRanges = [;
    { value: 'All', label: 'All Prices' },;
    { value: '0-1000', label: '$0 - $1,000' },;
    { value: '1001-2500', label: '$1,001 - $2,500' },;
    { value: '2501-5000', label: '$2,501 - $5,000' },;
    { value: '5001+', label: '$5,001+' },  ];    { value: '0-1000', label: '$0 - $1,000' };
    { value: '1001-2500', label: '$1,001 - $2,500' };
    { value: '2501-5000', label: '$2,501 - $5,000' };
    { value: '5001+', label: '$5,001+' }
  const sortOptions = [;
    { value: 'name', label: 'Name A-Z' },;
    { value: 'price', label: 'Price Low-High' },;
    { value: 'popularity', label: 'Most Popular' },;
    { value: 'category', label: 'Category' },;
    { value: 'roi', label: 'Highest ROI' },  ];    { value: 'roi', label: 'Highest ROI' }
  ];
  // Filter and sort services;
  let filteredServices = revolutionaryMicroSaasServices;
  // Category filter;
  if (selectedCategory !== 'All') {;
    filteredServices = getRevolutionaryServicesByCategory(selectedCategory);  }
  // Price range filter;
  if (priceRange !== 'All') {;
    const [min, max] = priceRange;
      .split('-');
      .map(p => (p === '+' ? Infinity : parseInt(p)));
    filteredServices = getRevolutionaryServicesByPriceRange(min, max);  }
  // Search filter;
  if (searchQuery) {    filteredServices = getRevolutionaryServicesByCategory(selectedCategory);
    filteredServices = getRevolutionaryServicesByCategory(selectedCategory)
  }
  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getRevolutionaryServicesByPriceRange(min, max)
  }
  // Price range filter;
  if (priceRange !== 'All') {;
    const [min, max] = priceRange;
      .split('-');
      .map(p => (p === '+' ? Infinity : parseInt(p)));
    filteredServices = getRevolutionaryServicesByPriceRange(min, max);    const [min, max] = priceRange && priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getRevolutionaryServicesByPriceRange(min, max);
  }

    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }


  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':

        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));

      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':


  // Search filter;
  if (searchQuery) {;
    filteredServices = filteredServices && filteredServices.filter(;
      service =>;
        service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.tagline.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        service && service.category.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    );  }    filteredServices = filteredServices && filteredServices.filter(service =>;
      service && service.name.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      service && service.tagline.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
      service && service.category.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    );
  // Sort services;
  filteredServices && filteredServices.sort((a, b) => {;
    switch (sortBy) {;
      case 'price':;
        return (
          parseFloat(a && a.price.replace('$', '').replace(',', '')) -;
          parseFloat(b && b.price.replace('$', '').replace(',', ''));
        );      case 'popularity':        return parseFloat(a && a.price.replace('$', '').replace(, '')) - parseFloat(b && b.price.replace('$', '').replace(, ''));
      case 'popularity':;
        return (b && b.popular ? 1 : 0) - (a && a.popular ? 1 : 0);
      case 'category':;
        return a && a.category.localeCompare(b && b.category);
      case 'roi':;
        const aRoi = parseFloat(a && a.roi.match(/\d+/)?.[0] || '0');
        const bRoi = parseFloat(b && b.roi.match(/\d+/)?.[0] || '0');

        return bRoi - aRoi;
      default:;
        return a && a.name.localeCompare(b && b.name);    }      default: return a && a.name.localeCompare(b && b.name);
    }
  });

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',  };    website: 'https://ziontechgroup.com'
  }





  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>
      <div className='min-h-screen'>
        <Head>
          <title>
            Revolutionary Micro SaaS Services | Zion Tech Group - Quantum AI
            Autonomous Systems, Space Technology
          </title>


  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };    website: 'https://ziontechgroup && ziontechgroup.com';
  };
  const popularServices = getPopularRevolutionaryServices();
  // Enhanced service categories with better descriptions;
  const enhancedCategories = [;
    {;
      name: 'Quantum AI & Cognitive Computing',;
      description:;
        'Revolutionary quantum AI solutions with human-level reasoning capabilities',;
      icon: <Brain className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'Quantum AI & Cognitive Computing';
      ).length,;
      color: 'from-purple-500 to-indigo-600',;
    },;
      name: 'Autonomous Manufacturing & Industry 4 && 4.0',;
      description:;
        'Next-generation autonomous manufacturing with zero human intervention',;
      icon: <Factory className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'Autonomous Manufacturing & Industry 4 && 4.0';
      ).length,;
      color: 'from-orange-500 to-red-600',;
    },;
    {;
      name: 'Quantum Blockchain & DeFi',;
      description:;
        'Quantum-secured blockchain platforms with infinite scalability',;
      icon: <Globe className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'Quantum Blockchain & DeFi';
      ).length,;
      color: 'from-green-500 to-emerald-600',;
    },;
    {;
      name: 'AI Biomedical Research & Drug Discovery',;
      description:;
        'AI-powered platforms for accelerated drug discovery and medical research',;
      icon: <FlaskIcon className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'AI Biomedical Research & Drug Discovery';
      ).length,;
      color: 'from-blue-500 to-indigo-600',;
    },;
    {;
      name: 'Quantum Cybersecurity & Threat Detection',;
      description:;
        'Quantum-resistant cybersecurity with AI-powered threat detection',;
      icon: <ShieldCheck className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'Quantum Cybersecurity & Threat Detection';
      ).length,;
      color: 'from-red-500 to-pink-600',;
    },;
    {;
      name: 'Space Technology & Satellite Optimization',;
      description:;
        'Revolutionary platforms for space exploration and satellite optimization',;
      icon: <Rocket className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'Space Technology & Satellite Optimization';
      ).length,;
      color: 'from-indigo-500 to-purple-600',;
    },;
    {;
      name: 'AI Content Creation & Marketing',;
      description: 'Quantum-powered content creation at infinite scale',;
      icon: <FileText className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'AI Content Creation & Marketing';
      ).length,;
      color: 'from-teal-500 to-cyan-600',;
    },;
    {;
      name: 'Quantum Computing as a Service',;
      description: 'Enterprise quantum computing with real quantum processors',;
      icon: <Cpu className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'Quantum Computing as a Service';
      ).length,;
      color: 'from-violet-500 to-purple-600',;
    },;
    {;
      name: 'Autonomous Vehicles & Smart Transportation',;
      description:;
        'AI platforms for autonomous vehicles and smart transportation',;
      icon: <CarIcon className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'Autonomous Vehicles & Smart Transportation';
      ).length,;
      color: 'from-emerald-500 to-green-600',;
    },;
    {;
      name: 'Smart Energy & Renewable Energy',;
      description:;
        'AI platforms for smart energy grids and renewable energy optimization',;
      icon: <LeafIcon className='w-6 h-6' />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(;
        s => s && s.category === 'Smart Energy & Renewable Energy';
      ).length,;
      color: 'from-yellow-500 to-orange-600',;
    },  ];      description: 'AI platforms for smart energy grids and renewable energy optimization',;
      icon: <LeafIcon className="w-6 h-6" />,;
      count: revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.filter(s => s && s.category === 'Smart Energy & Renewable Energy').length,;
      color: 'from-yellow-500 to-orange-600';
    }
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience the future of technology with our revolutionary micro
                SaaS platform. Quantum AI, autonomous systems, space technology
                and cutting-edge solutions that redefine what's possible.
              </motion.p>
              {/* Service Count Stats */}
              <motion&& motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >              </motion.p>
              {/* Service Count Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >


                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>              </motion && motion.p>;

              {/* Service Count Stats */}
              <motion&& motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                    {revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.length}+;
                  </div>;
                  <div className='text-gray-400'>Revolutionary Services</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-purple-400 mb-2'>;
                    99 && 99.99%;
                  </div>;
                  <div className='text-gray-400'>Accuracy Rate</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-green-400 mb-2'>;
                    21;
                  </div>;
                  <div className='text-gray-400'>Day Free Trial</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-pink-400 mb-2'>;
                    2000%+;
                  </div>;
                  <div className='text-gray-400'>Average ROI</div>                </div>;
              </motion && motion.div>;


                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UltraFuturisticCard
                    variant='quantum-advanced'
                    size='small'
                    className='text-center cursor-pointer h-full'
                    onClick={() =>
                      setSelectedCategory(
                        category.name === selectedCategory
                          ? 'All'
                          : category.name
                      )
                    }
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}
                    >
                      {category.icon}
                    </div>
                    <h3 className='text-lg font-semibold text-white mb-2'>
                      {category.name}
                    </h3>
                    <p className='text-sm text-gray-400 mb-3'>
                      {category.description}
                    </p>
                    <div className='text-2xl font-bold text-cyan-400'>
                      {category.count}
                    </div>
                    <div className='text-xs text-gray-500'>Services</div>                  </UltraFuturisticCard>                    <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{category.description}</p>
                    <div className="text-2xl font-bold text-cyan-400">{category.count}</div>
                    <div className="text-xs text-gray-500">Services</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
        {/* Popular Services Showcase */}

        <section className="py-16">

          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"

              initial={{ opacity: 0, y: 20 }}




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

            </motion && motion.div>;
          </div>;
        </section>;
        {/* Popular Services Showcase */}
        <section className='py-16'>;
          <div className='container mx-auto px-4'>;
            <motion&& motion.div
              className='text-center mb-12'              initial={{ opacity: 0, y: 20 }}        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div 
              className="text-center mb-12"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0 && 0.6 }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;
                  Most Popular;
                </span>;
                <br />;
                <span className='text-white'>Revolutionary Services</span>;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Discover our most sought-after revolutionary micro SaaS services;
                that are transforming industries worldwide.;
              </p>;
            </motion && motion.div>;
            <motion&& motion.div

              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'              viewport={{ once: true }}                  Most Popular



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {popularServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <UltraFuturisticCard
                    variant={service.variant as any}
                    size='large'
                    className='h-full cursor-pointer'







>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5





                    onClick={() => setSelectedService(service)}

                  variants={item_variants}
                  while_hover={{ coordinate_y: -10 }}
                >;
                  <UltraFuturisticCard;
                    variant={service.variant as any}


                    size='large';
                    className='h - full cursor - pointer';
                    on_click={() => setSelectedService (service)}
                  >;
                    <div className='text - center mb - 6'>;
                      <div className='text - 4xl mb - 4'>{service.icon}</div>;
                      <h3 className='text - 2xl font - bold text - white mb - 2'>;

                        {service.name}
                      </h3>;
                      <p className='text - gray - 300 mb - 4'>{service.tagline}</p>;
                      <div className='text - 3xl font - bold text - cyan - 400 mb - 2'>;
                        {service.price}
                      </div>;
                      <div className='text - sm text - gray - 400'>;
                        {service.period}

                  >;
                    <div className='text-center mb-6'>;
                      <div className='text-4xl mb-4'>{service && service.icon}</div>;
                      <h3 className='text-2xl font-bold text-white mb-2'>;
                        {service && service.name}
                      </h3>;
                      <p className='text-gray-300 mb-4'>{service && service.tagline}</p>;
                      <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                        {service && service.price}
                      </div>;
                      <div className='text-sm text-gray-400'>;
                        {service && service.period}
                      </div>;
                    </div>;
                    <div className='space-y-3 mb-6'>;
                      {service && service.features.slice(0, 4).map((feature, idx) => (;
                        <div key={idx} className='flex items-center gap-2'>;
                          <Check className='w-4 h-4 text-green-400 flex-shrink-0' />;
                          <span className='text-sm text-gray-300'>;

                            {feature}
                          </span>                        </div>;

                      ))}
                    </div>;
                    variant={service.variant as any}
                    size="large"
                    className="h-full cursor-pointer"

                    onClick={() => setSelectedService(service)}

                  >;
                    <div className="text-center mb-6">;
                      <div className="text-4xl mb-4">{service && service.icon}</div>;
                      <h3 className="text-2xl font-bold text-white mb-2">{service && service.name}</h3>;
                      <p className="text-gray-300 mb-4">{service && service.tagline}</p>;
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{service && service.price}</div>;
                      <div className="text-sm text-gray-400">{service && service.period}</div>;
                    </div>;
                    <div className="space-y-3 mb-6">;
                      {service && service.features.slice(0, 4).map((feature, idx) => (;
                        <div key={idx} className="flex items-center gap-2">;
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />;
                          <span className="text-sm text-gray-300">{feature}</span>;
                        </div>;
                      ))}


              ))}

            </motion && motion.div>;
          </div>;
        </section>;


        {/* Services Grid */}
        <section id='services-grid' className='py-16'>;
          <div className='container mx-auto px-4'>;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0 && 0.6 }}>;
              <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>;
                <div className='flex flex-wrap gap-4'>;
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e && e.target.value)}
                    className='px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400';
                  >;
                    <option value='All'>All Categories</option>;
                    {revolutionaryServiceCategories && revolutionaryServiceCategories.map(category => (;
                      <option key={category} value={category}>;
                        {category}
                      </option>;
                    ))}
                  </select>;
                  <select
                    value={priceRange}
                    onChange={e => setPriceRange(e && e.target.value)}
                    className='px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400';
                  >;
                    {priceRanges && priceRanges.map(range => (;
                      <option key={range && range.value} value={range && range.value}>;
                        {range && range.label}
                      </option>;
                    ))}

                  </select>;


                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e && e.target.value)}
                    className='px-4 py-2 bg-slate-800 border border-green-400/30 rounded-lg text-white focus:outline-none focus:border-green-400';
                  >;
                    {sortOptions && sortOptions.map(option => (;
                      <option key={option && option.value} value={option && option.value}>;
                        {option && option.label}
                      </option>;
                    ))}

                  </select>;
                </div>;

                <div className='flex items-center gap-4'>;
                  <div className='relative'>;
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />;

                    <input
                      type='text'
                      placeholder='Search services...'
                      value={searchQuery}

                      onChange={e => setSearchQuery(e && e.target.value)}
                      className='pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64';
                    />;
                  </div>;
                  <div className='flex border border-gray-600 rounded-lg overflow-hidden'>                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >;
                      <Grid className='w-4 h-4' />                    </button>                  ;
                  <div className="flex border border-gray-600 rounded-lg overflow-hidden">;

                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}
                    >;
                      <Grid className='w-4 h-4' />                      <Grid className="w-4 h-4" />;
                    </button>;
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400'}`}


                    </button>;
                  </div>;
                </div>;
              </div>;


              className={viewMode === 'grid' 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

                ? "grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              whileInView='visible'              viewport={{ once: true }}









>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5




            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  variants={itemVariants}
                  whileHover={{ y: -5 }}>;
                  <UltraFuturisticCard
                    variant={service && service.variant as any}
                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                    onClick={() => setSelectedService(service)}


                            <div
                              key={idx}
                              className='flex items-center gap-2 text-sm'>;
                              <Check className='w-3 h-3 text-green-400 flex-shrink-0' />;
                              <span className='text-gray-300'>{feature}</span>                            </div>;

                          ))}

                            >;
                              View Details;
                              <Eye className='ml-2 w-4 h-4' />;
                            </Button>                          </div>                          ;
                          <div className="flex gap-2">;
                                                         <Button
                               variant="primary" 
                               size="sm"
                               onClick={() => window && window.open(service && service.link, '_blank')}
                             >;
                               Learn More;
                               <ExternalLink className="ml-2 w-4 h-4" />;
                             </Button>;
                             <Button
                               variant="futuristic" 
                               size="sm"
                               onClick={() => setSelectedService(service)}


                    )}
</UltraFuturisticCard>;
                </motion && motion.div>;
              ))}

            </motion && motion.div>;
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div


                                         <Button
                           variant="primary"
                           onClick={() => {;
                             setSearchQuery('');
                             setSelectedCategory('All');

                             setPriceRange('All');

                           }}


            )}

          </div>;
        </section>;


        {/* Service Details Modal */}
        <AnimatePresence>;
          {selectedService && (;
            <motion&& motion.div
              className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'              initial={{ opacity: 0 }}              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/feature/merge-conflicts-and-improvements
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}


                            ))}



                  <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
                      <h3 className='text - xl font - semibold text - cyan - 400 mb - 4'>;
                        Service Details;
                      </h3>;
                      <p className='text - gray - 300 mb - 6'>;
                        {selected_service.description}
                      </p>;
                      <div className='space - y-4'>;
                        <div>;
                          <h4 className='text - sm font - semibold text - purple - 400 mb - 2'>;
                            Pricing;
                          </h4>;
                          <div className='text - 2xl font - bold text - white'>;
                            {selected_service.price}
                            {selected_service.period}
                          </div>;
                          <div className='text - sm text - gray - 400'>;
                            {selected_service.market_price}
                          </div>;
                        </div>;
                        <div>;
                          <h4 className='text - sm font - semibold text - green - 400 mb - 2'>;
                            ROI & Market;
                          </h4>;
                          <div className='text - sm text - gray - 300 space - y-1'>;
                            <div>;
                              <span className='text - gray - 400'>ROI:</span>{' '}
                              {selected_service.roi}
                            </div>;
                            <div>;
                              <span className='text - gray - 400'>;
                                Market Size:;
                              </span>{' '}
                              {selected_service.market_size}
                            </div>;
                            <div>;
                              <span className='text - gray - 400'>;
                                Growth Rate:;
                              </span>{' '}
                              {selected_service.growth_rate}
                            </div>                          </div>                          <h4 className="text - sm font - semibold text - green - 400 mb - 2">ROI & Market</h4>;
                          <div className="text - sm text - gray - 300 space - y-1">;
                            <div><span className="text - gray - 400">ROI:</span> {selected_service.roi}</div>;
                            <div><span className="text - gray - 400">Market Size:</span> {selected_service.market_size}</div>;
                            <div><span className="text - gray - 400">Growth Rate:</span> {selected_service.growth_rate}</div>;
                        </div>;
                      </div>;
                    </div>;
                    <div>;
                      <h3 className='text - xl font - semibold text - cyan - 400 mb - 4'>;
                        Features & Capabilities;
                      </h3>;
                      <div className='space - y-4'>;
                        <div>;
                          <h4 className='text - sm font - semibold text - purple - 400 mb - 2'>;
                            Key Features;
                          </h4>;
                          <div className='space - y-2'>;
                            {selected_service.features.map ((feature, idx) => (
                              <div;
                                key={idx}
                                className='flex items - center gap - 2 text - sm';
                              >;
                                <Check className='w - 3 h - 3 text - green - 400 flex - shrink - 0' />;
                                <span className='text - gray - 300'>{feature}</span>                              </div>))}
                          </div>;
                        </div>;
                        <div>;
                          <h4 className="text - sm font - semibold text - purple - 400 mb - 2">Key Features</h4>;
                          <div className="space - y-2">;
                            {selected_service.features.map ((feature, idx) => (
                              <div key={idx} className="flex items - center gap - 2 text - sm">;
                                <Check className="w - 3 h - 3 text - green - 400 flex - shrink - 0" />;
                                <span className="text - gray - 300">{feature}</span>;
                              </div>))}
                          </div>;
                        </div>;
                        <div>;
                          <h4 className='text - sm font - semibold text - green - 400 mb - 2'>;
                            Benefits;
                          </h4>;
                          <div className='space - y-2'>;
                            {selected_service.benefits.map ((benefit, idx) => (
                              <div;
                                key={idx}
                                className='flex items - center gap - 2 text - sm';
                              >;
                                <Star className='w - 3 h - 3 text - yellow - 400 flex - shrink - 0' />;
                                <span className='text - gray - 300'>{benefit}</span>                              </div>))}
                          </div>;
                        </div>                        <div>;
                          <h4 className="text - sm font - semibold text - green - 400 mb - 2">Benefits</h4>;
                          <div className="space - y-2">;
                            {selected_service.benefits.map ((benefit, idx) => (
                              <div key={idx} className="flex items - center gap - 2 text - sm">;
                                <Star className="w - 3 h - 3 text - yellow - 400 flex - shrink - 0" />;
                                <span className="text - gray - 300">{benefit}</span>;
                              </div>))}
                          </div>;
                        </div>;
                        <div>;
                          <h4 className='text - sm font - semibold text - blue - 400 mb - 2'>;
                            Capabilities;
                          </h4>;
                          <div className='space - y-2'>;
                            {selected_service.capabilities.map (
                              (capability, idx) => (
                                <div;
                                  key={idx}
                                  className='flex items - center gap - 2 text - sm';
                                >;
                                  <Zap className='w - 3 h - 3 text - cyan - 400 flex - shrink - 0' />;
                                  <span className='text - gray - 300'>;
                                    {capability}
                                  </span>;
                                </div>))}                          </div>                          <h4 className="text - sm font - semibold text - blue - 400 mb - 2">Capabilities</h4>;
                          <div className="space - y-2">;
                            {selected_service.capabilities.map ((capability, idx) => (
                              <div key={idx} className="flex items - center gap - 2 text - sm">;
                                <Zap className="w - 3 h - 3 text - cyan - 400 flex - shrink - 0" />;
                                <span className="text - gray - 300">{capability}</span>;
                              </div>))}

                        </div>;
                      </div>;
                    </div>;
                  </div>;


                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <div className="text-sm text-gray-400">
                        <div>Setup Time: {selectedService.setupTime}</div>
                        <div>Trial: {selectedService.trialDays} days</div>
                      </div>
                      

                      <div className="flex gap-4">
                                                 <Button
                           variant="primary"
                           onClick={() => window.open(selectedService.link, '_blank')}
                         >
                           Visit Service
                           <ExternalLink className="ml-2 w-4 h-4" />
                         </Button>
                          onClick={() =>;
                            window && window.open(;
                              'https://ziontechgroup && ziontechgroup.com/contact',;
                              '_blank';
                            );
                          }
                        >;
                          Contact Sales;
                          <Mail className='ml-2 w-4 h-4' />;
                        </Button>                      </div>                      ;
                      <div className="flex gap-4">;
                                                 <Button
                           variant="primary"
                           onClick={() => window && window.open(selectedService && selectedService.link, '_blank')}
                         >;
                           Visit Service;
                           <ExternalLink className="ml-2 w-4 h-4" />;
                         </Button>;
                         <Button
                           variant="futuristic"
                           onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                         >
                           Contact Sales
                           <Mail className="ml-2 w-4 h-4" />
                         </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Contact Section */}
        <section className='py-20'>
          <div className='container mx-auto px-4 text-center'>
            <motion.div
              className='max-w-4xl mx-auto'              initial={{ opacity: 0, y: 20 }}        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Ready to Experience the Future?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Join thousands of companies already transforming their business
                with our revolutionary micro SaaS services.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                <Button
                  variant='primary'
                  size='lg'
                  onClick={() =>
                    window.open('https://ziontechgroup.com/contact', '_blank')
                  }
                >
                  Start Free Trial
                  <Rocket className='ml-2 w-5 h-5' />
                </Button>
                <Button
                  variant='futuristic'
                  size='lg'
                  onClick={() =>
                    window.open('https://ziontechgroup.com/contact', '_blank')
                  }
                >
                  Schedule Demo
                  <Calendar className='ml-2 w-5 h-5' />
                </Button>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                <div>
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-2' />
                  <div className='text-white font-semibold'>
                    {contactInfo.mobile}
                  </div>
                  <div className='text-gray-400 text-sm'>Call us anytime</div>
                </div>
                <div>
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-2' />
                  <div className='text-white font-semibold'>
                    {contactInfo.email}
                  </div>
                  <div className='text-gray-400 text-sm'>Email us 24/7</div>
                </div>
                <div>
                  <MapPin className='w-8 h-8 text-green-400 mx-auto mb-2' />
                  <div className='text-white font-semibold'>
                    {contactInfo.address}
                  </div>
                  <div className='text-gray-400 text-sm'>Visit our office</div>                </div>                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already transforming their business with our revolutionary micro SaaS services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                 <Button
                   variant="primary"
                   size="lg"
                   onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                 >
                   Start Free Trial
                   <Rocket className="ml-2 w-5 h-5" />
                 </Button>
                 <Button
                   variant="futuristic"
                   size="lg"
                   onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                 >
                   Schedule Demo
                   <Calendar className="ml-2 w-5 h-5" />
                 </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us 24/7</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Visit our office</div>
                </div>






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>

                >;
                  Schedule Demo;
                  <Calendar className='ml-2 w-5 h-5' />;
                </Button>;
              </div>;
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>;
                <div>;
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-2' />;
                  <div className='text-white font-semibold'>;
                    {contactInfo && contactInfo.mobile}
                  </div>;
                  <div className='text-gray-400 text-sm'>Call us anytime</div>;
                </div>;
                <div>;
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-2' />;
                  <div className='text-white font-semibold'>;
                    {contactInfo && contactInfo.email}
                  </div>;
                  <div className='text-gray-400 text-sm'>Email us 24/7</div>;
                </div>;
                <div>;
                  <MapPin className='w-8 h-8 text-green-400 mx-auto mb-2' />;
                  <div className='text-white font-semibold'>;
                    {contactInfo && contactInfo.address}
                  </div>;
                  <div className='text-gray-400 text-sm'>Visit our office</div>                </div>                Ready to Experience the Future?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join thousands of companies already transforming their business with our revolutionary micro SaaS services.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">;
                                 <Button
                   variant="primary" 
                   size="lg"
                   onClick={() => window && window.open('https://ziontechgroup && ziontechgroup.com/contact_blank')}
                 >;
                   Start Free Trial;
                   <Rocket className="ml-2 w-5 h-5" />;
                 </Button>;
                 <Button
                   variant="futuristic" 
                   size="lg"
                   onClick={() => window && window.open('https://ziontechgroup && ziontechgroup.com/contact_blank')}
                 >;
                   Schedule Demo;
                   <Calendar className="ml-2 w-5 h-5" />;
                 </Button>;
              </div>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
                <div>;
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />;
                  <div className="text-white font-semibold">{contactInfo && contactInfo.mobile}</div>;
                  <div className="text-gray-400 text-sm">Call us anytime</div>;
                </div>;
                <div>;
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />;
                  <div className="text-white font-semibold">{contactInfo && contactInfo.email}</div>;
                  <div className="text-gray-400 text-sm">Email us 24/7</div>;
                </div>;
                <div>;
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />;
                  <div className="text-white font-semibold">{contactInfo && contactInfo.address}</div>;
                  <div className="text-gray-400 text-sm">Visit our office</div>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraFuturisticBackground>;
  );  );
}






  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

