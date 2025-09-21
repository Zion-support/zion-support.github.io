import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

interface CountrySelectorProps {
  selectedCountry: CountryPricing | null;
  onCountrySelect: (country: CountryPricing) => void;
}

interface CountryPricing {
  name: string;
  code: string;
  currency: string;
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
}

export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  const [countries] = useState<CountryPricing[]>([
    {
      name: 'United States',
      code: 'US',
      currency: 'USD',
      pricing: { basic: 100, premium: 200, enterprise: 500 }
    },
    {
      name: 'Canada',
      code: 'CA',
      currency: 'CAD',
      pricing: { basic: 120, premium: 240, enterprise: 600 }
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      currency: 'GBP',
      pricing: { basic: 90, premium: 180, enterprise: 450 }
    }
  ]);

  const handleCountryChange = (countryName: string) => {
    const country = countries.find(c => c.name === countryName);
    if (country) {
      onCountrySelect(country);
    }
  };

  return (
    <div className='mb-6'>
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
        <Globe className='mr-2 h-5 w-5 text-blue-500' />
        {selectedCountry
          ? `IT Onsite Service in ${selectedCountry.name}`
          : 'Select Country for IT Onsite Service'}
      </h3>
      <select
        onChange={(e) => handleCountryChange(e.target.value)}
        value={selectedCountry?.name || ''}
        className='w-full p-3 bg-blue-900 border border-blue-700 text-white rounded-lg'
      >
        <option value=''>Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name} - {country.currency} {country.pricing.basic}+
          </option>
        ))}
      </select>
    </div>
  );
}