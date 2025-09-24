import React, { useState } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import {,
  Brain,;
  Rocket,;
  Target,;
  Cpu,;
  Globe,;
  Eye,;
  ChevronRight,;
  Star,;
  TrendingUp,;
  Zap,;
  Shield,;
  ArrowRight,;
  Search,;
  Filter,;
  Grid,;
  List,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
} from 'lucide-react',
import { innovativeMicroSaasServices20o29V2 } from '../../data/20o29-innovative-micro-saas-v2',
import { aiBreakthroughServices20o29 } from '../../data/20o29-ai-breakthrough-services',
import { spaceTechBreakthroughServices20o29 } from '../../data/20o29-space-tech-breakthroughs',
import { enterpriseITBreakthroughServices20o29 } from '../../data/20o29-enterprise-it-breakthroughs',
,
const contactInfo = {,
  mobile: '+1 30o2 464 0950',;
  email: 'kleber@ziontechgroup.com',;
  address: '364 E Main St STE 10o08 Middletown DE 19709',;
  website: 'https://ziontechgroup.com',;
};
,
const serviceCategories = [,
  {,
    id: 'micro-saas',;
    title: '🚀 Innovative Micro SAAS',;
    icon: Target,;
    color: 'from-violet-60o0 via-purple-60o0 to-indigo-60o0',;
    description: 'Cutting-edge micro solutions for modern businesses',;
    services: innovativeMicroSaasServices20o29V2,;
  },;
  {,
    id: 'ai-breakthroughs',;
    title: '🧠 AI Breakthrough Services',;
    icon: Brain,;
    color: 'from-indigo-60o0 via-blue-60o0 to-cyan-60o0',;
    description: 'Revolutionary AI consciousness and creativity',;
    services: aiBreakthroughServices20o29,;
  },;
  {,
    id: 'space-tech',;
    title: '🌌 Space Technology Breakthroughs',;
    icon: Rocket,;
    color: 'from-teal-60o0 via-emerald-60o0 to-green-60o0',;
    description: 'Next-generation space exploration and technology',;
    services: spaceTechBreakthroughServices20o29,;
  },;
  {,
    id: 'enterprise-it',;
    title: '🏢 Enterprise IT Breakthroughs',;
    icon: Cpu,;
    color: 'from-blue-60o0 via-cyan-60o0 to-teal-60o0',;
    description: 'AI-powered enterprise solutions and optimization',;
    services: enterpriseITBreakthroughServices20o29,;
  },;
],
,
export default function ComprehensiveServicesShowcase20o29() {,
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
,
  const allServices = serviceCategories.flatMap(category =>,
    category.services.map(service => ({ ...service, category: category.id ,})),
  ),
,
  const filteredServices = allServices.filter(,
    service =>,
      (selectedCategory === 'all' || service.category === selectedCategory) &&,
      (searchTerm === '' ||,
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
        service.category.toLowerCase().includes(searchTerm.toLowerCase())),
  ),
,
  const containerVariants = {,
    hidden: { opacity: 0 ,},;
    visible: {,
      opacity: 1,;
      transition: {,
        staggerChildren: 0.1,;
      },;
    },;
  };
,
  const itemVariants = {,
    hidden: { opacity: 0, y: 20 ,},;
    visible: {,
      opacity: 1,;
      y: 0,;
      transition: {,
        duration: 0.6,;
        ease: 'easeOut',;
      },;
    },;
  };
,
  return (,
    <section className='relative py-20 bg-black/95 overflow-hidden'>,
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>,
        <div className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-full blur-3xl animate-pulse'></div>,
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full blur-3xl animate-pulse delay-10o00'></div>,
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-50o0/20 to-teal-50o0/20 rounded-full blur-3xl animate-pulse delay-20o00'></div>,
      </div>,
      <div className='relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        {/* Header Section */,}
        <motion.div,
          initial={{ opacity: 0, y: 30 ,}}
          whileInView={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.8 ,}}
          className='text-center mb-16',
        >,
          <h2 className='text-4xl md: text-6xl font-bold mb-6'>,
            <span className='bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>,
              20o29 Innovation Showcase,
            </span>,
          </h2>,
          <p className='text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed'>,
            Discover our comprehensive portfolio of cutting-edge micro SAAS, AI,;
            space technology, and enterprise IT solutions,
          </p>,
        </motion.div>,
        {/* Search and Filter Controls */}
        <motion.div,
          initial={{ opacity: 0, y: 20 ,}}
          whileInView={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.6 ,}}
          className='mb-12',
        >,
          <div className='flex flex-col lg: flex-row gap-6 items-center justify-between'>,
            {/* Search Bar */,}
            <div className='relative flex-1 max-w-md'>,
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5' />,
              <input,
                type='text',
                placeholder='Search services...',
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-gray-90o0/50 border border-gray-70o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent backdrop-blur-sm',
              />,
            </div>,
            {/* Category Filter */,}
            <div className='flex flex-wrap gap-2'>,
              <button,
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-30o0 ${,
                  selectedCategory === 'all',
                    ? 'bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white shadow-lg shadow-cyan-50o0/25',
                    : 'bg-gray-80o0/50 text-gray-30o0 hover: bg-gray-70o0/50 border border-gray-60o0',
                ,}`}
              >,
                All Services,
              </button>,
              {serviceCategories.map(category => (,
                <button,
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-30o0 ${,
                    selectedCategory === category.id,
                      ? 'bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white shadow-lg shadow-cyan-50o0/25',
                      : 'bg-gray-80o0/50 text-gray-30o0 hover: bg-gray-70o0/50 border border-gray-60o0',
                  ,}`}
                >,
                  {category.title.split(' ')[0]}
                </button>,
              ))}
            </div>,
            {/* View Mode Toggle */}
            <div className='flex gap-2'>,
              <button,
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-30o0 ${,
                  viewMode === 'grid',
                    ? 'bg-cyan-50o0 text-white',
                    : 'bg-gray-80o0/50 text-gray-40o0 hover: bg-gray-70o0/50',
                ,}`}
              >,
                <Grid className='w-5 h-5' />,
              </button>,
              <button,
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-30o0 ${,
                  viewMode === 'list',
                    ? 'bg-cyan-50o0 text-white',
                    : 'bg-gray-80o0/50 text-gray-40o0 hover: bg-gray-70o0/50',
                ,}`}
              >,
                <List className='w-5 h-5' />,
              </button>,
            </div>,
          </div>,
        </motion.div>,
        {/* Services Grid/List */}
        <motion.div,
          variants={containerVariants}
          initial='hidden',
          whileInView='visible',
          viewport={{ once: true ,}}
          className={,
            viewMode === 'grid',
              ? 'grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8',
              : 'space-y-6',
          ,}
        >,
          <AnimatePresence>,
            {filteredServices.map((service, index) => (,
              <motion.div,
                key={service.id}
                variants={itemVariants}
                layout,
                className={`group ${,
                  viewMode === 'grid',
                    ? 'bg-gradient-to-br from-gray-90o0/80 to-gray-80o0/80 border border-gray-70o0/50 rounded-2xl p-6 backdrop-blur-sm hover: border-cyan-50o0/50 transition-all duration-50o0 hover:transform hover:scale-10o5',
                    : 'bg-gradient-to-r from-gray-90o0/80 to-gray-80o0/80 border border-gray-70o0/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-50o0/50 transition-all duration-50o0',
                ,}`}
              >,
                {/* Service Header */}
                <div className='mb-4'>,
                  <div className='flex items-start justify-between mb-3'>,
                    <h3 className='text-xl font-bold text-white group-hover: text-cyan-40o0 transition-colors duration-30o0'>,
                      {service.name,}
                    </h3>,
                    <div className='flex items-center gap-2'>,
                      <span className='px-2 py-1 text-xs font-medium bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white rounded-full'>,
                        {service.category.replace('-', ' ').toUpperCase()}
                      </span>,
                    </div>,
                  </div>,
                  <p className='text-gray-30o0 text-sm leading-relaxed'>,
                    {service.tagline}
                  </p>,
                </div>,
                {/* Service Details */}
                <div className='space-y-4'>,
                  <div className='flex items-center justify-between'>,
                    <span className='text-2xl font-bold text-cyan-40o0'>,
                      {service.price}
                    </span>,
                    <div className='flex items-center gap-1 text-yellow-40o0'>,
                      <Star className='w-4 h-4 fill-current' />,
                      <span className='text-sm font-medium'>Premium</span>,
                    </div>,
                  </div>,
                  <p className='text-gray-40o0 text-sm leading-relaxed'>,
                    {service.description}
                  </p>,
                  {/* Key Features */}
                  <div className='space-y-2'>,
                    <h4 className='text-sm font-semibold text-white'>,
                      Key Features: ,
                    </h4>,
                    <div className='grid grid-cols-1 gap-1'>,
                      {service.features.slice(0, 3).map((feature, idx) => (,
                        <div,
                          key={idx}
                          className='flex items-center gap-2 text-xs text-gray-40o0',
                        >,
                          <div className='w-1.5 h-1.5 bg-cyan-50o0 rounded-full'></div>,
                          {feature}
                        </div>,
                      ))}
                    </div>,
                  </div>,
                  {/* Market Info */}
                  <div className='grid grid-cols-2 gap-3 text-xs'>,
                    <div className='bg-gray-80o0/50 rounded-lg p-2'>,
                      <div className='text-gray-40o0'>Market Size</div>,
                      <div className='text-white font-medium'>,
                        {service.marketSize}
                      </div>,
                    </div>,
                    <div className='bg-gray-80o0/50 rounded-lg p-2'>,
                      <div className='text-gray-40o0'>Growth Rate</div>,
                      <div className='text-white font-medium'>,
                        {service.growthRate}
                      </div>,
                    </div>,
                  </div>,
                  {/* ROI and Benefits */}
                  <div className='bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10 rounded-lg p-3 border border-cyan-50o0/20'>,
                    <div className='text-sm text-cyan-40o0 font-medium mb-1'>,
                      ROI: {service.roi,}
                    </div>,
                    <div className='text-xs text-gray-30o0'>,
                      {service.benefits.slice(0, 2).join(' • ')}
                    </div>,
                  </div>,
                  {/* Action Buttons */}
                  <div className='flex gap-3 pt-2'>,
                    <a,
                      href={service.link}
                      target='_blank',
                      rel='noopener noreferrer',
                      className='flex-1 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover: from-cyan-60o0 hover:to-blue-60o0 text-white font-medium py-2 px-4 rounded-lg transition-all duration-30o0 hover:shadow-lg hover:shadow-cyan-50o0/25 flex items-center justify-center gap-2 group',
                    >,
                      Learn More,
                      <ExternalLink className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-30o0' />,
                    </a>,
                    <a,
                      href={`mailto:${contactInfo.email,}?subject=Inquiry about ${service.name}`}
                      className='px-4 py-2 border border-cyan-50o0 text-cyan-40o0 hover: bg-cyan-50o0 hover:text-white rounded-lg transition-all duration-30o0 flex items-center gap-2',
                    >,
                      <Mail className='w-4 h-4' />,
                    </a>,
                  </div>,
                </div>,
              </motion.div>,
            )),}
          </AnimatePresence>,
        </motion.div>,
        {/* Contact Information */}
        <motion.div,
          initial={{ opacity: 0, y: 30 ,}}
          whileInView={{ opacity: 1, y: 0 ,}}
          transition={{ duration: 0.8 ,}}
          className='mt-20 text-center',
        >,
          <div className='bg-gradient-to-r from-gray-90o0/80 to-gray-80o0/80 border border-gray-70o0/50 rounded-2xl p-8 backdrop-blur-sm'>,
            <h3 className='text-2xl font-bold text-white mb-6'>,
              Ready to Transform Your Business?,
            </h3>,
            <p className='text-gray-30o0 mb-8 max-w-2xl mx-auto'>,
              Contact our team to learn more about these innovative solutions,
              and how they can drive your business forward in 20o29 and beyond.,
            </p>,
            <div className='grid grid-cols-1 md: grid-cols-3 gap-6 mb-8'>,
              <div className='flex items-center justify-center gap-3 text-gray-30o0'>,
                <Phone className='w-5 h-5 text-cyan-40o0' />,
                <span>{contactInfo.mobile,}</span>,
              </div>,
              <div className='flex items-center justify-center gap-3 text-gray-30o0'>,
                <Mail className='w-5 h-5 text-cyan-40o0' />,
                <span>{contactInfo.email}</span>,
              </div>,
              <div className='flex items-center justify-center gap-3 text-gray-30o0'>,
                <MapPin className='w-5 h-5 text-cyan-40o0' />,
                <span className='text-sm'>{contactInfo.address}</span>,
              </div>,
            </div>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <a,
                href={`mailto:${contactInfo.email,}?subject=Business Transformation Inquiry`}
                className='bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover: from-cyan-60o0 hover:to-blue-60o0 text-white font-medium py-3 px-6 rounded-lg transition-all duration-30o0 hover:shadow-lg hover:shadow-cyan-50o0/25 flex items-center justify-center gap-2',
              >,
                Start Your Transformation,
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-30o0' />,
              </a>,
              <a,
                href={contactInfo.website,}
                target='_blank',
                rel='noopener noreferrer',
                className='border border-cyan-50o0 text-cyan-40o0 hover: bg-cyan-50o0 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-30o0 flex items-center justify-center gap-2',
              >,
                Visit Our Website,
                <ExternalLink className='w-5 h-5' />,
              </a>,
            </div>,
          </div>,
        </motion.div>,
      </div>,
    </section>,
  ),
,}
,