import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

interface CountrySelectorProps {
  selectedCountry: CountryPricing | null,
  onCountrySelect: (country: CountryPricing) => void
}

interface CountryPricing {
  name: string;
  code: string;
  currency: string;
  multiplier: number;
}

export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  const [topCountries] = useState([
    { country: 'United States', pricePerIncident: 150 },
    { country: 'United Kingdom', pricePerIncident: 120 },
    { country: 'Canada', pricePerIncident: 130 },
    { country: 'Germany', pricePerIncident: 110 },
    { country: 'Australia', pricePerIncident: 140 }
  ]);

  const [onsiteServicePricing] = useState([
    { country: 'United States', pricePerIncident: 150 },
    { country: 'United Kingdom', pricePerIncident: 120 },
    { country: 'Canada', pricePerIncident: 130 },
    { country: 'Germany', pricePerIncident: 110 },
    { country: 'Australia', pricePerIncident: 140 },
    { country: 'France', pricePerIncident: 115 },
    { country: 'Japan', pricePerIncident: 125 },
    { country: 'Singapore', pricePerIncident: 135 }
  ]);

  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(c => c.country === countryName);
    if (country) {
      onCountrySelect({
        name: country.country,
        code: country.country.substring(0, 2).toUpperCase(),
        currency: 'USD',
        multiplier: 1
      });
    }
  };

  return (
    <div className='mb-6'>
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
        <Globe className='mr-2 h-5 w-5 text-blue-400' />
        {selectedCountry
          ? `IT Onsite Service in ${selectedCountry.name}`
          : 'Select Country for IT Onsite Service'}
      </h3>
      <select 
        onChange={(e) => handleCountryChange(e.target.value)}
        value={selectedCountry?.name || ''}
        className='bg-blue-900 border border-blue-700 text-white p-2 rounded w-full'
      >
        <option value="">Select a country</option>
        <optgroup label="Popular Countries">
          {topCountries.map(item => (
            <option key={item.country} value={item.country}>
              {item.country} - ${item.pricePerIncident.toFixed(2)}
            </option>
          ))}
        </optgroup>
        <optgroup label="All Countries">
          {onsiteServicePricing
            .sort((a, b) => a.country.localeCompare(b.country))
            .map(item => (
              <option key={item.country} value={item.country}>
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </option>
            ))}
        </optgroup>
      </select>
    </div>
  )
}