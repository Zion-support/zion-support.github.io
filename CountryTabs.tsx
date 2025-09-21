import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface CountryTabsProps {
  popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

interface CountryPricing {
  name: string;
  code: string;
  currency: string;
  multiplier: number;
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
          className="w-full pl-10 pr-4 py-3 bg-blue-900 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Popular Countries */}
      {popularCountries.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Countries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularCountries.map((country) => (
              <button
                key={country}
                onClick={() => {
                  const countryData = filteredCountries.find(c => c.name === country);
                  if (countryData) {
                    handleCountrySelect(countryData);
                  }
                }}
                className="p-4 bg-blue-900 border border-blue-700 rounded-lg text-white hover:bg-blue-800 transition-colors text-left"
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* All Countries */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">All Countries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCountries.map((country) => (
            <button
              key={country.name}
              onClick={() => handleCountrySelect(country)}
              className="p-4 bg-blue-900 border border-blue-700 rounded-lg text-white hover:bg-blue-800 transition-colors text-left"
            >
              {country.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}