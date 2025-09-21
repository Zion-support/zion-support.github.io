import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Search } from 'lucide-react';

interface CountryTabsProps {
  popularCountries: string[];
  allCountries: string[];
  selectedCountry: string | null;
  onCountrySelect: (country: string) => void;
}

export default function CountryTabs({ 
  popularCountries, 
  allCountries, 
  selectedCountry, 
  onCountrySelect 
}: CountryTabsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(allCountries);

  useEffect(() => {
    if (searchTerm) {
      const filtered = allCountries.filter(country =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(allCountries);
    }
  }, [searchTerm, allCountries]);

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Popular Countries */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Popular Countries</h3>
        <div className="flex flex-wrap gap-2">
          {popularCountries.map((country) => (
            <button
              key={country}
              onClick={() => onCountrySelect(country)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCountry === country
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      {/* All Countries */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">
          {searchTerm ? `Search Results (${filteredCountries.length})` : 'All Countries'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredCountries.map((country) => (
            <button
              key={country}
              onClick={() => onCountrySelect(country)}
              className={`p-3 rounded-lg transition-colors text-left ${
                selectedCountry === country
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
        {filteredCountries.length === 0 && searchTerm && (
          <p className="text-gray-400 text-center py-8">
            No countries found matching "{searchTerm}"
          </p>
        )}
=======
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
>>>>>>> pr-22753
      </div>
    </div>
  );
}