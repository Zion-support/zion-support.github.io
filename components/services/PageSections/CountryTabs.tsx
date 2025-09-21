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
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Popular Countries */}
      <div>
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
        <h3 className="text-lg font-semibold text-white mb-3">All Countries</h3>
        <div className="max-h-64 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {filteredCountries.map((country) => (
              <button
                key={country}
                onClick={() => onCountrySelect(country)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors text-left ${
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
=======
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
>>>>>>> origin/main
      </div>
    </div>
  );
}