import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

interface CountryPricing {
  name: string;
  code: string;
  price: number;
  currency: string;
}

interface CountrySelectorProps {
  selectedCountry: CountryPricing | null;
  onCountrySelect: (country: CountryPricing) => void;
}

export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);

  // Set top/popular countries
  useEffect(() => {
    setTopCountries([
      { name: 'United States', code: 'US', price: 150, currency: 'USD' },
      { name: 'United Kingdom', code: 'GB', price: 120, currency: 'GBP' },
      { name: 'Canada', code: 'CA', price: 130, currency: 'CAD' },
      { name: 'Australia', code: 'AU', price: 140, currency: 'AUD' },
      { name: 'Germany', code: 'DE', price: 110, currency: 'EUR' },
    ]);
  }, []);

  const handleCountryChange = (value: string) => {
    const country = topCountries.find(c => c.name === value);
    if (country) {
      onCountrySelect(country);
    }
  };

  return (
    <div className='mb-6'>
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
        <Globe className='mr-2 h-5 w-5 text-zion-cyan' />
        {selectedCountry
          ? `IT Onsite Service in ${selectedCountry.name}`
          : 'Select Country for IT Onsite Service'}
      </h3>
      <select 
        onChange={(e) => handleCountryChange(e.target.value)} 
        value={selectedCountry?.name || ''}
        className='w-full bg-zion-blue border border-zion-blue-light text-white rounded-md px-3 py-2'
      >
        <option value=''>Select a country</option>
        {topCountries.map(item => (
          <option key={item.name} value={item.name}>
            {item.name} - ${item.price.toFixed(2)}
          </option>
        ))}
      </select>
    </div>
  )
}