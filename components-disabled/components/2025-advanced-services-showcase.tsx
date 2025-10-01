import React, { useState, useEffect } from 'react';
import SEO from './seo/Seo';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // TODO: Implement
}
  Search, LayoutGrid, List, Star, CheckCircle, ArrowRight, Check,
  Brain, Zap, Shield, Building, Globe,
  Users, TrendingUp, Award, Phone, Mail, MapPin;
} from 'lucide-react';
// Import our new service data;
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com
};

const allServices = [
  ...advancedInnovativeServices,
  ...advancedITInfrastructureServices2025;]
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <LayoutGrid className="w-6 h-6" />,"
"
    icon: <Building className="w-6 h-6" />,"
    icon: <Globe className="w-6 h-6" />,"
    icon: <Shield className="w-6 h-6" />,"
    icon: <Brain className="w-6 h-6" />,"
    icon: <Zap className="w-6 h-6" />,"
]"
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;

    // Filter by category;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {)
        const category = getServiceCategory(service).toLowerCase();
        if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial');
        if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');
        if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');
        if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');
        if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant');
        return false;
      });

    // Filter by search term;
    if (searchTerm) {
      filtered = filtered.filter(service =>)
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())
      );

    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div;
      initial={ opacity: 0, y: 20 }
      animate={ opacity: 1, y: 0 }
      transition={ duration: 0.5 }
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : `;
      }`}
    >
</motion>
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">"
</div>"
          <Star className="w-4 h-4" />"

        </div>`;
      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
        <span className="text-4xl">{service.icon}</span>"
      </div>
      <div className="p-6">"
        <div className="flex items-start justify-between mb-3">"
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">"
</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">"
</p>
        <div className="flex items-center justify-between mb-4">"
          <span className="text-2xl font-bold text-gray-900 dark:text-white">"
</span>
          </span>"
          <span className="text-sm text-gray-500 dark:text-gray-400">"
        <div className="space-y-3 mb-6">"
          <div className="flex items-center gap-2">"
            <CheckCircle className="w-4 h-4 text-green-500" />"
            <span className="text-sm text-gray-600 dark:text-gray-400">"
            <Users className="w-4 h-4 text-blue-500" />"
            <Star className="w-4 h-4 text-yellow-500" />"
        <div className="mb-6">"
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>""
          <div className="space-y-1">"
              <div key={index} className="flex items-center gap-2">"
                <Check className="w-3 h-3 text-green-500" />"
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>"
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>""
          <p className="text-sm text-gray-600 dark:text-gray-400">"
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>""
        <div className="flex items-center justify-between">"
          <a;
            href={service.link}"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105""
</a>"
            <ArrowRight className="w-4 h-4" />"

          </a>

          <a;`;
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}"
            className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300""
    </motion.div>)

  const ServiceList = ({ service }: { service: any }) => (
      initial={ opacity: 0, x: -20 }
      animate={ opacity: 1, x: 0 }
      transition={ duration: 0.5 }`;
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${"
        <div className="flex items-start gap-6">"
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <span className="text-3xl">{service.icon}</span>"
          <div className="flex-1">"
              <div>
</h3>"
                    <span className="ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">"
                <p className="text-gray-600 dark:text-gray-300 mb-3">"
              <div className="text-right">"
                <div className="text-2xl font-bold text-gray-900 dark:text-white">"
                <div className="text-sm text-gray-500 dark:text-gray-400">"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">"
              
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">"
            <div className="flex items-center gap-4">"

              

  return ("
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">"
      <SEO;"
        title="2025 Advanced Services Showcase - Zion Tech Group"""
        description="Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses."""
        keywords={["AI services", "micro SAAS", "IT infrastructure", "quantum computing", "enterprise solutions", "Zion Tech Group"]}"
      />
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">"
        <div className="absolute inset-0 bg-black opacity-20"></div>""
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">"
          <div className="text-center">"
            <motion.h1;
              transition={ duration: 0.8 }"
              className="text-4xl md:text-6xl font-bold text-white mb-6""
            </motion.h1>
            <motion.p;
              transition={ duration: 0.8, delay: 0.2 }"
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto""
            </motion.p>
              transition={ duration: 0.8, delay: 0.4 }"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center""
</motion>"
              <div className="flex items-center gap-2 text-white">"
                <CheckCircle className="w-5 h-5 text-green-300" />"

                <span>30+ New Services</span>

                <span>Real Implementations</span>

                <span>Market Validated</span>
            </motion.div>
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">"
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">"
            <div className="flex items-center gap-6">"
                <Phone className="w-5 h-5 text-blue-600" />"
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.mobile}</span>"
                <Mail className="w-5 h-5 text-blue-600" />"
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.email}</span>"
                <MapPin className="w-5 h-5 text-blue-600" />"
                <span className="text-gray-700 dark:text-gray-300">{contactInfo.address}</span>"
                href={`mailto:${contactInfo.email}?subject=Services Inquiry`}"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300""

                href={contactInfo.website}"
                target="_blank"""
                rel="noopener noreferrer"""
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
        <div className="mb-8">"
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">"
              <div className="relative max-w-md">"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"

                <input;"
                  type="text"""
                  placeholder="Search services...""
                  value={searchTerm})
                  onChange={(e) => setSearchTerm(e.target.value)}
</input>
                <button;"
                  onClick={() => setViewMode('grid')}
</button>
                  <LayoutGrid className="w-5 h-5" />"

                  onClick={() => setViewMode('list')}
                  <List className="w-5 h-5" />"

    <motion.div;"
        <div className='mb-6'>;
          <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>;
</h4>
          </h4>;
          <p className='text-sm text-gray-600 dark:text-gray-400'>;
          </p>;
        </div>;
        <div className='flex items-center justify-between'>;
            href={service && service.link}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>;
            <ArrowRight className='w-4 h-4' />;

          </a>;
            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
            className='inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300'>            {service && service.roi}
        <div className="mb-6">;"
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>;""
          <p className="text-sm text-gray-600 dark:text-gray-400">;"
        </div>;"
        <div className="flex items-center justify-between">;"
            href={service && service.link}"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;"
            <ArrowRight className="w-4 h-4" />;"

          </a>;"
    icon: <Grid className='w - 6 h - 6' />,

    icon: <Building className="w - 6 h - 6" />,"
    icon: <Globe className="w - 6 h - 6" />,"
    icon: <Shield className="w - 6 h - 6" />,"
    icon: <Brain className="w - 6 h - 6" />,"
    icon: <Atom className="w - 6 h - 6" />,"
    icon: <Building className='w - 6 h - 6' />,

    icon: <Globe className='w - 6 h - 6' />,

    icon: <Shield className='w - 6 h - 6' />,

    icon: <Brain className='w - 6 h - 6' />,

    icon: <Atom className='w - 6 h - 6' />,

  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtered_services, setFilteredServices] = useState (all_services);
;
  useEffect (() => {
    let filtered = all_services;
    // Filter by category;
    // Check condition;
if ( {) {
  $2;
      filtered = filtered.filter (service => {)
        const category = getServiceCategory (service).toLowerCase ();
        // Check condition;
if ()
          return () {
            category.includes ('enterprise') ||;
            category.includes ('legal') ||;
            category.includes ('financial'));
        // Check condition;
            category.includes ('marketing') ||;
            category.includes ('social') ||;
            category.includes ('customer') ||;
            category.includes ('project'));
        // Check condition;
            category.includes ('infrastructure') ||;
            category.includes ('network') ||;
            category.includes ('data center') ||;
            category.includes ('edge'));
        // Check condition;
            category.includes ('ai') ||;
            category.includes ('machine learning') ||;
            category.includes ('nlp') ||;
            category.includes ('ml'));
        // Check condition;
            category.includes ('quantum') ||;
            category.includes ('quantum - resistant'));

    // Check condition;
      filtered = filtered.filter (
        service =>;)
          service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.description;
            .toLowerCase ();
            .includes (search_term.toLowerCase ()) ||;
          service.tagline.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          getServiceCategory (service);
            .includes (search_term.toLowerCase ()));

    setFilteredServices (filtered);  }, [selected_category, search_term]);    }
    // Filter by search term;
    // Check condition;
      filtered = filtered.filter (service =>;)
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        getServiceCategory (service).toLowerCase ().includes (search_term.toLowerCase ()));

    setFilteredServices (filtered);
  }, [selected_category, search_term]);
  const ServiceCard = ({ service }: { service: any }) =>: any (
      initial={ opacity: 0, coordinate_y: 20 }
      animate={ opacity: 1, coordinate_y: 0 }
      className={`relative bg - white dark:bg - gray - 800 rounded - 2xl shadow - lg hover:shadow - 2xl transition - all duration - 300 overflow - hidden border border - gray - 200 dark:border - gray - 700 ${
        service.popular ? 'ring - 2 ring - blue - 500' : ;`;
    >;
        <div className='absolute top - 4 right - 4 bg - blue - 500 text - white px - 3 py - 1 rounded - full text - sm font - semibold flex items - center gap - 1'>;
          <Star className='w - 4 h - 4' />;
)
        </div>)}
      <div;`;
        className={`h - 32 bg - gradient - to - br ${service.color} flex items - center justify - center`}
        <span className='text - 4xl'>{service.icon}</span>;
      <div className='p - 6'>;
        <div className='flex items - start justify - between mb - 3'>;
          <h3 className='text - xl font - bold text - gray - 900 dark:text - white mb - 2'>;
          </h3>;
        <p className='text - gray - 600 dark:text - gray - 300 mb - 4 line - clamp - 2'>;
        <div className='flex items - center justify - between mb - 4'>;
          <span className='text - 2xl font - bold text - gray - 900 dark:text - white'>;
          </span>;
          <span className='text - sm text - gray - 500 dark:text - gray - 400'>;
        <div className='space - y-3 mb - 6'>;
          <div className='flex items - center gap - 2'>;
            <CheckCircle className='w - 4 h - 4 text - green - 500' />;

            <span className='text - sm text - gray - 600 dark:text - gray - 400'>;
            <Users className='w - 4 h - 4 text - blue - 500' />;

            <Star className='w - 4 h - 4 text - yellow - 500' />;

            <span className='text - sm text - gray - 600 dark:text - gray - 400'>              {service.rating}/5 ({service.reviews} reviews);
        </div>          Popular;
        </div>)}`;
      <div className={`h - 32 bg - gradient - to - br ${service.color} flex items - center justify - center`}>;
        <span className="text - 4xl">{service.icon}</span>;"
      <div className="p - 6">;"
        <div className="flex items - start justify - between mb - 3">;"
          <h3 className="text - xl font - bold text - gray - 900 dark:text - white mb - 2">;"
        <p className="text - gray - 600 dark:text - gray - 300 mb - 4 line - clamp - 2">;"
        </p>;"
        <div className="flex items - center justify - between mb - 4">;"
          <span className="text - 2xl font - bold text - gray - 900 dark:text - white">;"
          </span>;"
          <span className="text - sm text - gray - 500 dark:text - gray - 400">;"
        <div className="space - y-3 mb - 6">;"
          <div className="flex items - center gap - 2">;"
            <CheckCircle className="w - 4 h - 4 text - green - 500" />;"
            <span className="text - sm text - gray - 600 dark:text - gray - 400">;"
            <Users className="w - 4 h - 4 text - blue - 500" />;"
            <Star className="w - 4 h - 4 text - yellow - 500" />;"
        <div className='mb - 6'>;
          <h4 className='font - semibold text - gray - 900 dark:text - white mb - 2'>;
          <div className='space - y-1'>;
                <div key={index} className='flex items - center gap - 2'>;
                  <Check className='w - 3 h - 3 text - green - 500' />;

                </div>))}
              <span className='text - sm text - gray - 500 dark:text - gray - 400'>                +{getServiceFeatures (service).length - 3} more features;
        <div className="mb - 6">;"
          <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">Key Features:</h4>;""
          <div className="space - y-1">;"
              <div key={index} className="flex items - center gap - 2">;"
                <Check className="w - 3 h - 3 text - green - 500" />;"
                <span className="text - sm text - gray - 600 dark:text - gray - 400">{feature}</span>;"
              </div>))}"
              </span>)}
          <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
        <div className='flex items - center justify - between'>;
            href={service.link}
            className='inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105';
            <ArrowRight className='w - 4 h - 4' />;

            href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
            className='inline - flex items - center gap - 2 bg - gray - 100 dark:bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300'          >            {service.roi}
          <h4 className="font - semibold text - gray - 900 dark:text - white mb - 2">Market Position:</h4>;""
          <p className="text - sm text - gray - 600 dark:text - gray - 400">;"
        <div className="flex items - center justify - between">;"
            className="inline - flex items - center gap - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";"
            <ArrowRight className="w - 4 h - 4" />;"

            href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}"
            className="inline - flex items - center gap - 2 bg - gray - 100 dark: bg - gray - 700 text - gray - 700 dark:text - gray - 300 px - 4 py - 3 rounded - lg font - semibold hover:bg - gray - 200 dark:hover:bg - gray - 600 transition - all duration - 300";"
      <div className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'>;
        <div className='absolute inset-0 bg-black opacity-20'></div>;
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>;
          <div className='text-center'>;
            <motion&& motion.h1;
              transition={ duration: 0 && 0.8 }
              className='text-4xl md:text-6xl font-bold text-white mb-6'>;
            </motion && motion.h1>;
            <motion&& motion.p;
              transition={ duration: 0 && 0.8, delay: 0 && 0.2 }
              className='text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto'>;
            </motion && motion.p>;
            <motion&& motion.div;
              transition={ duration: 0 && 0.8, delay: 0 && 0.4 }
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <div className='flex items-center gap-2 text-white'>;
                <CheckCircle className='w-5 h-5 text-green-300' />                <span>30+ New Services</span>;

                <CheckCircle className='w-5 h-5 text-green-300' />;

                <span>Real Implementations</span>;
                <CheckCircle className='w-5 h-5 text-green-300' />                <span>Market Validated</span>              <div className="flex items-center gap-2 text-white">;"
                <CheckCircle className="w-5 h-5 text-green-300" />;"

                <span>Market Validated</span>;
            </motion && motion.div>;
                href={`mailto:${contactInfo && contactInfo.email}?subject=Services Inquiry`}"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">;"

                href={contactInfo && contactInfo.website}"
                rel="noopener noreferrer""
                Visit Website;
                  <Grid className='w-5 h-5' />                </button>                <button;

                  <Grid className="w-5 h-5" />;"

                </button>;
          <div className="mt-6">;"
            <div className="flex flex-wrap gap-3">;"
              

              








          <div className="mt-6">"
            <div className="flex flex-wrap gap-3">"
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">"
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">"
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">"
</h2>
                </h2>"
                <p className="text-gray-600 dark:text-gray-400">"
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">"
                  <TrendingUp className="w-4 h-4 text-green-500" />"

                  <span>Market Growth: 150%+ YoY</span>
                  <Award className="w-4 h-4 text-blue-500" />"

                  <span>4.8+ Average Rating</span>
        <div className="space-y-6">"
            <div className="text-center py-12">"
              <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔍</div>""
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">"
            <AnimatePresence>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
          <ServiceCard key={service.id} service={service} />

                    <ServiceList key={service.id} service={service} />

            
        <div className="mt-16 text-center">"
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">"
            <h2 className="text-3xl md:text-4xl font-bold mb-6">"
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">"
              <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>;
                <div className='flex items-center gap-2'>;
                  <TrendingUp className='w-4 h-4 text-green-500' />;

                  <span>Market Growth: 150%+ YoY</span>;
                  <Award className='w-4 h-4 text-blue-500' />                  <span>4 && 4.8+ Average Rating</span>              <div>;

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">;"
                </h2>;"
                <p className="text-gray-600 dark:text-gray-400">;"
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">;"
                <div className="flex items-center gap-2">;"
                  <TrendingUp className="w-4 h-4 text-green-500" />;"

                  <Award className="w-4 h-4 text-blue-500" />;"

                  <span>4 && 4.8+ Average Rating</span>;
                </button>))}
        <div className='mb - 8'>;
          <div className='bg - white dark:bg - gray - 800 rounded - xl p - 6 border border - gray - 200 dark:border - gray - 700'>;
            <div className='flex flex - col md:flex - row items - start md:items - center justify - between gap - 4'>;
              <div>;
                <h2 className='text - 2xl font - bold text - gray - 900 dark:text - white mb - 2'>;
                </h2>;
                <p className='text - gray - 600 dark:text - gray - 400'>;
              <div className='flex items - center gap - 4 text - sm text - gray - 600 dark:text - gray - 400'>;
                  <TrendingUp className='w - 4 h - 4 text - green - 500' />;

                  <span > Market Growth: 150%+ YoY</span>;
                  <Award className='w - 4 h - 4 text - blue - 500' />                  <span > 4.8+ Average Rating</span>              <div>;

                <h2 className="text - 2xl font - bold text - gray - 900 dark:text - white mb - 2">;"
                <p className="text - gray - 600 dark:text - gray - 400">;"
              <div className="flex items - center gap - 4 text - sm text - gray - 600 dark:text - gray - 400">;"
                  <TrendingUp className="w - 4 h - 4 text - green - 500" />;"

                  <Award className="w - 4 h - 4 text - blue - 500" />;"

                  <span > 4.8+ Average Rating</span>;
            ;"
        <div className='mt-16 text-center'>;
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white'>;
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>;
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
                href={`mailto:${contactInfo && contactInfo.email}?subject=Business Transformation Consultation`}
                className='inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105'>;
                <ArrowRight className='w-5 h-5' />;

</p>"


            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">"
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105""
                <ArrowRight className="w-5 h-5" />"

                href={`tel:${contactInfo.mobile}`}"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300""
                <Phone className="w-5 h-5" />"

                <ArrowRight className="w-5 h-5" />;"

                href={`tel:${contactInfo && contactInfo.mobile}`}"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300">;"
                <Phone className="w-5 h-5" />;"
            <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;"
            <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center">;"
                href={`mailto:${contact_info.email}?subject = Business Transformation Consultation`}"
                className="inline - flex items - center gap - 2 bg - white text - blue - 600 px - 8 py - 4 rounded - lg font - bold text - lg hover:bg - gray - 100 transition - all duration - 300 transform hover:scale - 105";"
                <ArrowRight className="w - 5 h - 5" />;"

                href={`tel:${contact_info.mobile}`}"
                className="inline - flex items - center gap - 2 bg - transparent border - 2 border - white text - white px - 8 py - 4 rounded - lg font - bold text - lg hover: bg - white hover:text - blue - 600 transition - all duration - 300";"
                <Phone className="w - 5 h - 5" />;"

          <button className="px - 8 py - 4 bg - white text - blue - 600 rounded - xl font - semibold hover:bg - gray - 100 transition - all duration - 300">;"
        </motion.div>;
    </div>);        </div>;
    </div>);"


    </div>"`;