import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface CountryPricing {
  name: string;
  code: string;
  price: number;
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
  setSearchQuery
}: CountryTabsProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-zion-blue border border-zion-blue-light text-white rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
        />
      </div>

      {/* Popular Countries */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Popular Countries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCountries
            .filter(country => popularCountries.includes(country.name))
            .map((country) => (
              <div key={country.name} className="bg-zion-blue border border-zion-blue-light rounded-lg p-4 hover:border-zion-cyan transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold">{country.name}</h4>
                  <span className="text-zion-cyan font-bold">{country.currency} {country.price}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCountrySelect(country)}
                    className="flex-1 bg-zion-cyan text-zion-blue px-3 py-1 rounded text-sm font-semibold hover:bg-zion-cyan-light transition-colors"
                  >
                    Select
                  </button>
                  {onQuote && (
                    <button
                      onClick={() => onQuote(country)}
                      className="flex-1 border border-zion-cyan text-zion-cyan px-3 py-1 rounded text-sm font-semibold hover:bg-zion-cyan hover:text-zion-blue transition-colors"
                    >
                      Quote
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* All Countries */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">All Countries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCountries.map((country) => (
            <div key={country.name} className="bg-zion-blue border border-zion-blue-light rounded-lg p-4 hover:border-zion-cyan transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-semibold">{country.name}</h4>
                <span className="text-zion-cyan font-bold">{country.currency} {country.price}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCountrySelect(country)}
                  className="flex-1 bg-zion-cyan text-zion-blue px-3 py-1 rounded text-sm font-semibold hover:bg-zion-cyan-light transition-colors"
                >
                  Select
                </button>
                {onQuote && (
                  <button
                    onClick={() => onQuote(country)}
                    className="flex-1 border border-zion-cyan text-zion-cyan px-3 py-1 rounded text-sm font-semibold hover:bg-zion-cyan hover:text-zion-blue transition-colors"
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