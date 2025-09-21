import { useState, useEffect } from 'react';
import { Search } from 'lucide-react'

interface CountryPricing {
  country: string;
  pricePerIncident: number;
  currency: string;
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
  const [activeTab, setActiveTab] = useState<'popular' | 'all'>('popular');

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('popular')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'popular'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Popular Countries
        </button>
        <button
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          All Countries
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'popular' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCountries.map((countryName) => {
              const country = filteredCountries.find(c => c.country === countryName);
              if (!country) return null;
              
              return (
                <div
                  key={country.country}
                  onClick={() => handleCountrySelect(country)}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{country.country}</h3>
                  <p className="text-blue-400 font-bold">${country.pricePerIncident.toFixed(2)}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country) => (
              <div
                key={country.country}
                onClick={() => handleCountrySelect(country)}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{country.country}</h3>
                <p className="text-blue-400 font-bold">${country.pricePerIncident.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}