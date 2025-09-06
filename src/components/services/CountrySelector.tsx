import React, { useState, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { onsiteServicePricing, CountryPricing } from '@/data/onsiteServicePricing';

interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void;
  selectedCountry: CountryPricing | null;
}

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);

  // Set top/popular countries
  useEffect(() => {
    const popular = [
      'United States',
      'United Kingdom', 
      'Canada',
      'Germany',
      'Australia',
      'Japan',
      'Singapore'
    ];
    const top = onsiteServicePricing
      .filter(item => popular.includes(item.country))
      .sort((a, b) => a.country.localeCompare(b.country));
    setTopCountries(top);
  }, []);

  const filteredCountries = onsiteServicePricing.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySelect = (country: CountryPricing) => {
    onCountryChange(country);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleClear = () => {
    onCountryChange(null);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between"
      >
        {selectedCountry ? selectedCountry.country : 'Select Country'}
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-hidden">
          <div className="p-2 border-b">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <div className="max-h-48 overflow-y-auto">
            {searchTerm === '' && topCountries.length > 0 && (
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 mb-2">Popular Countries</div>
                {topCountries.map((country) => (
                  <button
                    key={country.country}
                    onClick={() => handleCountrySelect(country)}
                    className="w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded"
                  >
                    {country.country}
                  </button>
                ))}
              </div>
            )}

            <div className="p-2">
              {searchTerm !== '' && (
                <div className="text-xs font-medium text-gray-500 mb-2">All Countries</div>
              )}
              {filteredCountries.map((country) => (
                <button
                  key={country.country}
                  onClick={() => handleCountrySelect(country)}
                  className="w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded"
                >
                  {country.country}
                </button>
              ))}
            </div>
          </div>

          {selectedCountry && (
            <div className="p-2 border-t">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="w-full"
              >
                Clear Selection
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}