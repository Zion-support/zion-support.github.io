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
      </div>
    </div>
  );
}