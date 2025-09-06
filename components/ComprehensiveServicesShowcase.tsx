import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


  Award,;
  Target,;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom;
  Search, Filter, Grid, List, ArrowRight, Award, Target;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null),
  const [searchTerm, setSearchTerm] = useState('');
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'price':


  return (


        {/* Header */}
        <motion&& motion.div

    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-7xl mx-auto'>        {/* Header */}

        {/* Header */}


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}


        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
            Revolutionary Micro SAAS Services 2025
          </h2>
          <p className='text-xl text-white/70 max-w-3xl mx-auto mb-8'>
            Discover our cutting-edge micro SAAS solutions that are transforming
            industries and driving the future of technology
          </p>
          <div className='flex items-center justify-center gap-6 text-white/60 mb-8'>
            <div className='flex items-center gap-2'>
              <Shield className='w-5 h-5' />
              <span>Enterprise-grade security</span>
            </div>
            <div className='flex items-center gap-2'>
              <Zap className='w-5 h-5' />
              <span>AI-powered optimization</span>
            </div>
            <div className='flex items-center gap-2'>
              <Globe className='w-5 h-5' />
              <span>Global deployment</span>
            </div>
          </div>
          <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>
              <div>
                <div className='text-3xl font-bold text-blue-400'>
                  {allServices.length}+
                </div>
                <div className='text-white/60'>Services Available</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-green-400'>99.9%</div>
                <div className='text-white/60'>Uptime Guarantee</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-purple-400'>24/7</div>
                <div className='text-white/60'>Support Available</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-orange-400'>500%+</div>
                <div className='text-white/60'>Average ROI</div>              </div>        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Revolutionary Micro SAAS Services 2025
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology
          </p>
          <div className="flex items-center justify-center gap-6 text-white/60 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>AI-powered optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Global deployment</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">{allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-white/60">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-white/60">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">500%+</div>
                <div className="text-white/60">Average ROI</div>
              </div>
            </div>
          </div>
        </motion.div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>;
            Revolutionary Micro SAAS Services 2025;
          </h2>;
          <p className='text-xl text-white/70 max-w-3xl mx-auto mb-8'>;
            Discover our cutting-edge micro SAAS solutions that are transforming;
            industries and driving the future of technology;
          </p>;
          <div className='flex items-center justify-center gap-6 text-white/60 mb-8'>;
            <div className='flex items-center gap-2'>;
              <Shield className='w-5 h-5' />;
              <span>Enterprise-grade security</span>;
            </div>;
            <div className='flex items-center gap-2'>;
              <Zap className='w-5 h-5' />;
              <span>AI-powered optimization</span>;
            </div>;
            <div className='flex items-center gap-2'>;
              <Globe className='w-5 h-5' />;
              <span>Global deployment</span>;
            </div>;
          </div>;
          <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>;
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>;
              <div>;
                <div className='text-3xl font-bold text-blue-400'>;
                  {allServices && allServices.length}+;
                </div>;
                <div className='text-white/60'>Services Available</div>;
              </div>;
              <div>;
                <div className='text-3xl font-bold text-green-400'>99 && 99.9%</div>;
                <div className='text-white/60'>Uptime Guarantee</div>;
              </div>;
              <div>;
                <div className='text-3xl font-bold text-purple-400'>24/7</div>;
                <div className='text-white/60'>Support Available</div>;
              </div>;
              <div>;
                <div className='text-3xl font-bold text-orange-400'>500%+</div>;
                <div className='text-white/60'>Average ROI</div>              </div>        >;
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">;
            Revolutionary Micro SAAS Services 2025;
          </h2>;
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">;
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology;
          </p>;
          <div className="flex items-center justify-center gap-6 text-white/60 mb-8">;
            <div className="flex items-center gap-2">;
              <Shield className="w-5 h-5" />;
              <span>Enterprise-grade security</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <Zap className="w-5 h-5" />;
              <span>AI-powered optimization</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <Globe className="w-5 h-5" />;
              <span>Global deployment</span>;
            </div>;
          </div>;
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">;
              <div>;
                <div className="text-3xl font-bold text-blue-400">{allServices && allServices.length}+</div>;
                <div className="text-white/60">Services Available</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-green-400">99 && 99.9%</div>;
                <div className="text-white/60">Uptime Guarantee</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-purple-400">24/7</div>;
                <div className="text-white/60">Support Available</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-orange-400">500%+</div>;
                <div className="text-white/60">Average ROI</div>;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;


        {/* Search and Filters */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}

        >
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
            {/* Search */}
            <div className='relative flex-1 max-w-md'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5' />;
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />;
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
              >;
                <option value='popularity'>Most Popular</option>;
                <option value='price'>Price: Low to High</option>;
                <option value='rating'>Highest Rated</option>;
                <option value='newest'>Newest First</option>;
              </select>;
              <div className='flex bg-white/10 rounded-xl p-1'>;
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${;
                    viewMode === 'grid';
                      ? 'bg-blue-600 text-white';
                      : 'text-white/60 hover:text-white';
                  }`}
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
              </div>
            </div>
          </div>
        </motion.div>
                  <List className="w-5 h-5" />;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;


        {/* Category Filter */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
                key={category.id}
                on_click={() => setSelectedCategory (category.id)}
                className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selected_category === category.id;
                    ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white shadow - lg';
                    : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
                }`}
              >;
                <span>{category.icon}</span>;
                {category.name}
        {/* Services Display */}
        {viewMode === 'grid' ? (;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <AnimatePresence>;
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>;
                  {/* Popular Badge */}
        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                <span className='text - xs bg - white / 20 px - 2 py - 1 rounded - full'>;
                  {category.count}
                </span>              </button>                <span className="text - xs bg - white / 20 px - 2 py - 1 rounded - full">{category.count}</span>;
              </button>))}
          </div>;
        </motion.div>;
        {/* Services Display */}
        {view_mode === 'grid' ? (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            <AnimatePresence>          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            <AnimatePresence>;
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  exit={{ opacity: 0, coordinate_y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                      <Star className='w-3 h-3' />                      Popular

                      Popular

                    </div>
                  )}
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
                        </div>;
                      </div>;
                    </div>;
                    <h3 className='text - xl font - bold text - white mb - 2'>;
                        </div>
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
                      {service.name}
                    </h3>;
                    <p className='text - white / 70 text - sm mb - 4'>;
                      {service.tagline}
                    {/* Features */}
                    <div className='space-y-2 mb-6'>;
                      {service && service.features.slice(0, 3).map((feature, idx) => (;
                        <div
                          key={idx}
                          className='flex items-center gap-2 text-sm text-white/60'>;
                          <CheckCircle className='w-4 h-4 text-green-400' />                          {feature}                      </div>;
                    </div>;

                    <h3 className="text-xl font-bold text-white mb-2">{service && service.name}</h3>;
                    <p className="text-white/70 text-sm mb-4">{service && service.tagline}</p>;


                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>

                      <div>
                        <div className='text-lg font-bold text-blue-400'>
                          {service.rating}

                    </div>
                      <div>
                        <div className='text-lg font-bold text-blue-400'>
                          {service.rating}
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>

                        <div className="text-lg font-bold text-blue-400">{service.rating}</div>
                        <div className="text-xs text-white/60">Rating</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-400">{service.customers}+</div>
                        <div className="text-xs text-white/60">Customers</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-400">{service.trialDays}d</div>
                        <div className="text-xs text-white/60">Trial</div>
                      </div>
                    </div>
                    </div>;

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6 text-center'>;
                      <div>;
                        <div className='text-lg font-bold text-blue-400'>;
                          {service && service.rating}
                        </div>;
                        <div className='text-xs text-white/60'>Rating</div>;
                      </div>;
                      <div>;
                        <div className='text-lg font-bold text-green-400'>;
                          {service && service.customers}+;
                        </div>;
                        <div className='text-xs text-white/60'>Customers</div>;
                      </div>;
                      <div>;
                        <div className='text-lg font-bold text-purple-400'>;
                          {service && service.trialDays}d;
                        </div>;
                        <div className='text-xs text-white/60'>Trial</div>                      </div>                      <div>;
                        <div className="text-lg font-bold text-blue-400">{service && service.rating}</div>;
                        <div className="text-xs text-white/60">Rating</div>;
                      </div>;
                      <div>;
                        <div className="text-lg font-bold text-green-400">{service && service.customers}+</div>;
                        <div className="text-xs text-white/60">Customers</div>;
                      </div>;
                      <div>;
                        <div className="text-lg font-bold text-purple-400">{service && service.trialDays}d</div>;
                        <div className="text-xs text-white/60">Trial</div>;
                      </div>;
                    </div>;


                    {/* CTA */}
                    <a

                      )}

                >
                  <div className='flex flex-col lg:flex-row gap-6'>
                    {/* Left Side - Icon and Basic Info */}
                    <div className='flex-shrink-0'>
                      <div className='text-6xl mb-4'>{service.icon}</div>
                      {service.popular && (
                      )}
                    </div>
                        <div>
                          <h3 className='text-2xl font-bold text-white mb-2'>
                            {service.name}
                          </h3>;
                          <p className='text - white / 70 text - lg mb - 3'>;
                            {service.tagline}
                          </p>;
                          <p className='text - white / 60 text - sm'>;
                            {service.description}
                          </p>;
                        </div>;
                        <div className='text - right'>;
                          <div className='text - 3xl font - bold text - white'>;
                            {service.price}
                          </div>
                          <div className='text-white/60'>{service.period}</div>                        </div>
                      </div>
                      {/* Features Grid */}                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-white/70 text-lg mb-3">{service.tagline}</p>
                          <p className="text-white/60 text-sm">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{service.price}</div>
                          <div className="text-white/60">{service.period}</div>
                        </div>
                      </div>
                    </div>;

                    {/* Center - Service Details */}
                    <div className='flex-1'>;
                      <div className='flex items-start justify-between mb-4'>;
                        <div>;
                          <h3 className='text-2xl font-bold text-white mb-2'>;
                            {service && service.name}
                          </h3>;
                          <p className='text-white/70 text-lg mb-3'>;
                            {service && service.tagline}
                          </p>;
                          <p className='text-white/60 text-sm'>;
                            {service && service.description}
                          </p>;
                        </div>;
                        <div className='text-right'>;
                          <div className='text-3xl font-bold text-white'>;
                            {service && service.price}
                          </div>;
                          <div className='text-white/60'>{service && service.period}</div>                        </div>;
                      </div>;

                      {/* Features Grid */}                        <div>;
                          <h3 className="text-2xl font-bold text-white mb-2">{service && service.name}</h3>;
                          <p className="text-white/70 text-lg mb-3">{service && service.tagline}</p>;
                          <p className="text-white/60 text-sm">{service && service.description}</p>;
                        </div>;
                        <div className="text-right">;
                          <div className="text-3xl font-bold text-white">{service && service.price}</div>;
                          <div className="text-white/60">{service && service.period}</div>;
                        </div>;
                      </div>;

                      {/* Features Grid */}
                      {/* Stats Row */}
                      <div className='flex items-center gap-6 text-sm text-white/60'>
                        <div className='flex items-center gap-2'>
                          <Star className='w-4 h-4 text-yellow-400' />
                          <span>
                            {service.rating} ({service.reviews} reviews)
                          </span>
                        </div>                        </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>

                          </div>

                        ))}
                      </div>

                      {/* Stats Row */}
                      <div className="flex items-center gap-6 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{service.rating} ({service.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span>{service.customers}+ customers</span>
                        </div>
                          <Clock className="w-4 h-4 text-green-400" />
                          <span>{service.setupTime} setup</span>
                        </div>
                      </div>
                    </div>
                    {/* Right Side - CTA and Category */}
                      <div className="text-right">
                        <div className="text-sm text-white/60 mb-1">Category</div>
                        <div className="flex items-center gap-2 text-white">
                          <span>{getCategoryIcon(service.category)}</span>
                          <span className="text-sm">{service.category}</span>
                      </div>
                      </div>;

                      {/* Stats Row */}
                      <div className='flex items-center gap-6 text-sm text-white/60'>;
                        <div className='flex items-center gap-2'>;
                          <Star className='w-4 h-4 text-yellow-400' />;
                          <span>;
                            {service && service.rating} ({service && service.reviews} reviews);
                          </span>;
                        </div>                        </div>;
                        <div className="flex items-center gap-2">;
                          <Users className="w-4 h-4 text-blue-400" />;
                          <span>{service && service.customers}+ customers</span>;
                        </div>;
                        <div className='flex items-center gap-2'>;
                          <Users className='w-4 h-4 text-blue-400' />;
                          <span>{service && service.customers}+ customers</span>;
                        </div>;
                        <div className='flex items-center gap-2'>;
                          <Clock className='w-4 h-4 text-green-400' />                          <span>{service && service.setupTime} setup</span>                        <div className="flex items-center gap-2">;
                          <Clock className="w-4 h-4 text-green-400" />;
                          <span>{service && service.setupTime} setup</span>;
                        </div>;
                      </div>;
                    </div>;

                    {/* Right Side - CTA and Category */}
                    <div className='flex-shrink-0 flex flex-col items-end gap-4'>;
                      <div className='text-right'>;
                        <div className='text-sm text-white/60 mb-1'>;
                          Category;
                        </div>;
                        <div className='flex items-center gap-2 text-white'>;
                          <span>{getCategoryIcon(service && service.category)}</span>;
                          <span className='text-sm'>{service && service.category}</span>                        </div>                    <div className="flex-shrink-0 flex flex-col items-end gap-4">;
                      <div className="text-right">;
                        <div className="text-sm text-white/60 mb-1">Category</div>;
                        <div className="flex items-center gap-2 text-white">;
                          <span>{getCategoryIcon(service && service.category)}</span>;
                          <span className="text-sm">{service && service.category}</span>;
                      </div>;
              ))}
            </AnimatePresence>;
          </div>;
        )}
        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-20'
          >
            <div className='text-6xl mb-4'>🔍</div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-white/60'>
              Try adjusting your search or filter criteria
            </p>          </motion.div>

          </motion.div>



        )}
            </p>          </motion.div>

          </motion.div>

        )}

        {/* Contact CTA */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}

        >
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>
              Join thousands of companies already using our revolutionary micro
              SAAS services to drive innovation and growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:kleber@ziontechgroup && ziontechgroup.com'
                className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2'>;
                Contact Sales Team;
                <ArrowRight className='w-5 h-5' />;
              </a>;
              <a
                href='tel:+13024640950'
              <a
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
}


                Call +1 302 464 0950;
              </a>;
            </div>;
          </div>;


}
  );
}
        </motion.div>;
      </div>;
    </section>);
              <a
                href=&quot;mailto:kleber@ziontechgroup.com&quot;
                className=&quot;bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2&quot;
              >
                Contact Sales Team
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2&quot;
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Sales Team
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
}
