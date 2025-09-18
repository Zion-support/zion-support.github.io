import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star } from 'lucide-react';

export function CountryTabs({ popularCountries, filteredCountries, handleCountrySelect, searchQuery, setSearchQuery }) {
  const regions = [
    { id: 'all', name: 'All Regions', count: filteredCountries?.length || 0 },
    { id: 'north-america', name: 'North America', count: filteredCountries?.filter(c => c.region === 'North America').length || 0 },
    { id: 'europe', name: 'Europe', count: filteredCountries?.filter(c => c.region === 'Europe').length || 0 },
    { id: 'asia-pacific', name: 'Asia Pacific', count: filteredCountries?.filter(c => c.region === 'Asia Pacific').length || 0 },
    { id: 'latin-america', name: 'Latin America', count: filteredCountries?.filter(c => c.region === 'Latin America').length || 0 },
    { id: 'africa', name: 'Africa', count: filteredCountries?.filter(c => c.region === 'Africa').length || 0 },
    { id: 'middle-east', name: 'Middle East', count: filteredCountries?.filter(c => c.region === 'Middle East').length || 0 }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search countries or regions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark border border-zion-slate-light rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {regions.map((region) => (
              <button
                key={region.id}
                className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light rounded-lg text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300"
              >
                {region.name}
                <span className="ml-2 bg-zion-slate-light/20 px-2 py-1 rounded-full text-xs">
                  {region.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Countries */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Popular Destinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCountries?.map((country, index) => (
              <motion.div
                key={country.country}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-zion-slate-dark border border-zion-slate-light rounded-xl p-6 hover:border-zion-cyan transition-all duration-300 cursor-pointer"
                onClick={() => handleCountrySelect(country)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <h4 className="text-lg font-semibold text-white">{country.country}</h4>
                  </div>
                  <span className="bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full text-xs">
                    Popular
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Base Price:</span>
                    <span className="text-white">{country.currency} {country.basePrice}/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Travel Fee:</span>
                    <span className="text-white">{country.currency} {country.travelFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Response:</span>
                    <span className="text-white">{country.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Countries Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">All Available Countries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCountries?.map((country, index) => (
              <motion.div
                key={country.country}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                className="bg-zion-slate-dark border border-zion-slate-light rounded-lg p-4 hover:border-zion-cyan transition-all duration-300 cursor-pointer"
                onClick={() => handleCountrySelect(country)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <h4 className="font-medium text-white">{country.country}</h4>
                </div>
                
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Price:</span>
                    <span className="text-white">{country.currency} {country.basePrice}/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Travel:</span>
                    <span className="text-white">{country.currency} {country.travelFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zion-slate-light">Region:</span>
                    <span className="text-zion-slate-light">{country.region}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}