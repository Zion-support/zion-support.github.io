import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

interface CountryPricing {
  country: string;
  currency: string;
  price: number;
}

interface CountrySelectorProps {
  selectedCountry: CountryPricing | null;
  onCountrySelect: (country: CountryPricing) => void;
}

export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  const [countries] = useState<CountryPricing[]>([
    { country: 'United States', currency: 'USD', price: 299 },
    { country: 'Canada', currency: 'CAD', price: 399 },
    { country: 'United Kingdom', currency: 'GBP', price: 249 },
    { country: 'Germany', currency: 'EUR', price: 279 },
    { country: 'Australia', currency: 'AUD', price: 449 },
  ]);

  return (
    <div className='mb-6'>
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
        <Globe className='mr-2 h-5 w-5 text-zion-cyan' />
        Select Your Country
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {countries.map((country) => (
          <button
            key={country.country}
            onClick={() => onCountrySelect(country)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedCountry?.country === country.country
                ? 'border-zion-cyan bg-zion-cyan/10 text-white'
                : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-zion-cyan/50 hover:bg-gray-700/50'
            }`}
          >
            <div className='text-left'>
              <div className='font-medium'>{country.country}</div>
              <div className='text-sm opacity-75'>
                {country.currency} {country.price}/month
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}