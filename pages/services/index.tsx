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
          </div>
        </div>

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
