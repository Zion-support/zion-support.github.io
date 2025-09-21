import { useState, useEffect } from 'react';
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
      </div>
    </div>
  );
}