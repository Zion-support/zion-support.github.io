import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ZION_SERVICES } from '../../src/data/services';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'Micro SaaS',
  'IT Services',
  'AI Services'
];

export default function ServicesIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = ZION_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.name?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const byCategory: Record<string, typeof ZION_SERVICES> = {};
  for (const c of categories) byCategory[c] = [];
  
  for (const service of ZION_SERVICES) {
    const category = service.category;
    if (category && byCategory[category]) {
      byCategory[category].push(service);
    }
  }

  const anchorMap: Record<string, string> = {
    'Micro SaaS': 'micro-saas',
    'IT Services': 'it-services',
    'AI Services': 'ai-services',
  };

  const [shownCounts, setShownCounts] = useState<Record<string, number>>(() => 
    Object.fromEntries(categories.map(c => [c, 12]))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, Micro SaaS, and IT services." />
      </Head>
      
      <div className="relative">
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />
        
        {/* Header */}
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of AI, Micro SaaS, and IT services designed to transform your business.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology services
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-400">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <service.icon className="w-5 h-5 text-cyan-400 mr-2" />
                          <h4 className="font-semibold text-white">{service.name}</h4>
                        </div>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </div>
                      
                      <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-slate-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-1" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link
                    href={`/services/${category.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <span className="font-medium">View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-sm text-cyan-400 mb-2">{service.category}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title || service.name}</h3>
                <p className="text-white/70 mb-4 line-clamp-3">{service.description}</p>
                
                {service.price && (
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    ${service.price.monthly}/mo
                  </div>
                )}
                
                {service.features && service.features.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-white/70">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-white/50 text-sm">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex gap-3">
                  <Link
                    href={`/services/${service.id}`}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
