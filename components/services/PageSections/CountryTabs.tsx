import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface CountryPricing {
  country: string;
  currency: string;
  price: number;
}

interface CountryTabsProps {
  popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function CountryTabs({
  popularCountries,
  filteredCountries,
  handleCountrySelect,
  onQuote,
  searchQuery,
  setSearchQuery,
}: CountryTabsProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan"
        />
      </div>

      {/* Popular Countries */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Popular Countries</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {popularCountries.map((country) => (
            <button
              key={country}
              className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-zion-cyan/50 rounded-lg text-gray-300 hover:text-white transition-all duration-200"
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      {/* All Countries */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">All Countries</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCountries.map((country) => (
            <div
              key={country.country}
              className="p-4 bg-slate-800 border border-slate-600 rounded-lg hover:border-zion-cyan/50 transition-all duration-200"
            >
              <h4 className="font-medium text-white mb-2">{country.country}</h4>
              <p className="text-gray-400 mb-3">{country.currency} {country.price}/month</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleCountrySelect(country)}
                  className="flex-1 bg-zion-cyan hover:bg-zion-cyan/90 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
                >
                  Select
                </button>
                {onQuote && (
                  <button
                    onClick={() => onQuote(country)}
                    className="flex-1 bg-transparent border border-slate-600 hover:border-zion-cyan text-zion-cyan py-2 px-3 rounded text-sm font-medium transition-colors"
                  >
                    Quote
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}