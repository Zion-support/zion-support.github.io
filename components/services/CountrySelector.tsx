import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

interface CountryPricing {
  country: string;
  currency: string;
  multiplier: number;
  pricePerIncident: number;
}

interface CountrySelectorProps {
  selectedCountry: CountryPricing | null;
  onCountrySelect: (country: CountryPricing) => void;
}

const onsiteServicePricing: CountryPricing[] = [
  { country: 'United States', currency: 'USD', multiplier: 1.0, pricePerIncident: 150 },
  { country: 'Canada', currency: 'CAD', multiplier: 1.2, pricePerIncident: 180 },
  { country: 'United Kingdom', currency: 'GBP', multiplier: 1.3, pricePerIncident: 195 },
  { country: 'Germany', currency: 'EUR', multiplier: 1.2, pricePerIncident: 180 },
  { country: 'France', currency: 'EUR', multiplier: 1.2, pricePerIncident: 180 },
  { country: 'Australia', currency: 'AUD', multiplier: 1.4, pricePerIncident: 210 },
  { country: 'Japan', currency: 'JPY', multiplier: 1.1, pricePerIncident: 165 },
  { country: 'Singapore', currency: 'SGD', multiplier: 1.3, pricePerIncident: 195 },
  { country: 'Brazil', currency: 'BRL', multiplier: 0.8, pricePerIncident: 120 },
  { country: 'India', currency: 'INR', multiplier: 0.6, pricePerIncident: 90 }
];

export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  const [topCountries] = useState(onsiteServicePricing.slice(0, 4));

  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(c => c.country === countryName);
    if (country) {
      onCountrySelect(country);
    }
  };

  return (
    <div className='mb-6'>
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
        <Globe className='mr-2 h-5 w-5 text-blue-40o0'  />
        {selectedCountry
          ? `IT Onsite Service in ${selectedCountry.country}`
          : 'Select Country for IT Onsite Service'}
      </h3>
      <select
        onChange={(e) => handleCountryChange(e.target.value)}
        value={selectedCountry?.country || ''}
        className='bg-zion-blue border border-zion-blue-light text-white rounded px-3 py-2 w-full'
      >
        <option value=''>Select a country</option>
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
  );
}