import { useState, useEffect } from 'react';
import { Search } from 'lucide-react'

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
  country: string;
  pricePerIncident: number;
  responseTime: string;
  coverage: string;
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
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
        />
      </div>

      {/* Popular Countries */}
      {popularCountries.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Countries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularCountries.map((countryName, index) => {
              const country = filteredCountries.find(c => c.country === countryName);
              if (!country) return null;
              
              return (
                <div key={index} className="bg-gradient-to-br from-zion-blue to-zion-blue-dark border border-zion-blue-light rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-white font-medium mb-2">{country.country}</h4>
                  <p className="text-zion-cyan font-semibold mb-3">${country.pricePerIncident.toFixed(2)}/incident</p>
                  <button
                    onClick={() => handleCountrySelect(country)}
                    className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white py-2 rounded transition-colors"
                  >
                    Select
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* All Countries */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">All Countries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCountries.map((country, index) => (
            <div key={index} className="bg-gradient-to-br from-zion-blue to-zion-blue-dark border border-zion-blue-light rounded-lg p-4 hover:shadow-lg transition-all duration-300">
              <h4 className="text-white font-medium mb-2">{country.country}</h4>
              <p className="text-zion-cyan font-semibold mb-3">${country.pricePerIncident.toFixed(2)}/incident</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleCountrySelect(country)}
                  className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white py-2 rounded transition-colors text-sm"
                >
                  Select
                </button>
                {onQuote && (
                  <button
                    onClick={() => onQuote(country)}
                    className="flex-1 bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white py-2 rounded transition-colors text-sm"
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