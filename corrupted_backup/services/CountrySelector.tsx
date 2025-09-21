import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

interface CountryPricing {
  country: string;
  pricePerIncident: number;
}

interface CountrySelectorProps {
  selectedCountry: CountryPricing | null;
  onCountrySelect: (country: CountryPricing) => void;
}

// Mock data for countries and pricing
const onsiteServicePricing: CountryPricing[] = [
  { country: 'United States', pricePerIncident: 150 },
  { country: 'Canada', pricePerIncident: 140 },
  { country: 'United Kingdom', pricePerIncident: 130 },
  { country: 'Germany', pricePerIncident: 125 },
  { country: 'France', pricePerIncident: 120 },
  { country: 'Australia', pricePerIncident: 135 },
  { country: 'Japan', pricePerIncident: 145 },
  { country: 'Singapore', pricePerIncident: 110 },
];

export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);

  useEffect(() => {
    // Set top/popular countries
    setTopCountries(onsiteServicePricing.slice(0, 4));
  }, []);

  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(c => c.country === countryName);
    if (country) {
      onCountrySelect(country);
    }
  };

  return (
    <div className='mb-6'>
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
        <Globe className='mr-2 h-5 w-5 text-blue-400' />
        {selectedCountry
          ? `IT Onsite Service in ${selectedCountry.country}`
          : 'Select Country for IT Onsite Service'}
      </h3>
      <select
        onChange={(e) => handleCountryChange(e.target.value)}
        value={selectedCountry?.country || ''}
        className='bg-slate-800 border border-slate-600 text-white rounded-lg px-4 py-2 w-full'
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