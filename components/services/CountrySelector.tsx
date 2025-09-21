import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

interface CountrySelectorProps {
  selectedCountry: CountryPricing | null,
  onCountrySelect: (country: CountryPricing) => void
}

interface CountryPricing {
  name: string;
  code: string;
  multiplier: number;
  country: string;
  pricePerIncident: number;
}

export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
  
  // Set top/popular countries
  useEffect(() => {
    const popularCountries = [
      { name: 'United States', code: 'US', country: 'United States', multiplier: 1.0, pricePerIncident: 150.00 },
      { name: 'United Kingdom', code: 'GB', country: 'United Kingdom', multiplier: 1.2, pricePerIncident: 180.00 },
      { name: 'Canada', code: 'CA', country: 'Canada', multiplier: 1.1, pricePerIncident: 165.00 },
      { name: 'Australia', code: 'AU', country: 'Australia', multiplier: 1.3, pricePerIncident: 195.00 },
      { name: 'Germany', code: 'DE', country: 'Germany', multiplier: 1.2, pricePerIncident: 180.00 },
    ];
    setTopCountries(popularCountries);
  }, []);

  const onsiteServicePricing: CountryPricing[] = [
    { name: 'United States', code: 'US', country: 'United States', multiplier: 1.0, pricePerIncident: 150.00 },
    { name: 'United Kingdom', code: 'GB', country: 'United Kingdom', multiplier: 1.2, pricePerIncident: 180.00 },
    { name: 'Canada', code: 'CA', country: 'Canada', multiplier: 1.1, pricePerIncident: 165.00 },
    { name: 'Australia', code: 'AU', country: 'Australia', multiplier: 1.3, pricePerIncident: 195.00 },
    { name: 'Germany', code: 'DE', country: 'Germany', multiplier: 1.2, pricePerIncident: 180.00 },
  ];

  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(c => c.country === countryName);
    if (country) {
      onCountrySelect(country);
    }
  };

  return (
    <div className='mb-6'>
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
        <Globe className='mr-2 h-5 w-5 text-zion-cyan' />
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
  )
}