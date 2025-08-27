import React, { useState } from 'react';

export const CountryTabs = ({ countries, onCountrySelect }) => {
  const [activeCountry, setActiveCountry] = useState(countries?.[0]?.code || 'US');

  const handleCountrySelect = (countryCode) => {
    setActiveCountry(countryCode);
    if (onCountrySelect) {
      onCountrySelect(countryCode);
    }
  };

  const defaultCountries = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'FR', name: 'France', flag: '🇫🇷' }
  ];

  const countriesToUse = countries || defaultCountries;

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">
          Select Your Country
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {countriesToUse.map((country) => (
            <button
              key={country.code}
              onClick={() => handleCountrySelect(country.code)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
                activeCountry === country.code
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
              }`}
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="font-medium">{country.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};