  onCountryChange: (country: CountryPricing | null,) => void

  selectedCountry: CountryPricing | null
}
  // Set top/popular countries
  useEffect(() => {




    const popular = [
      'United States'
      'United Kingdom'
      'Canada'
      'Germany'
      'Australia'
      'Japan'
      'Singapore'
    ]
    const top = onsiteServicePricing
      .filter(item => popular.includes(item.country))
      .sort((a, b) => a.country.localeCompare(b.country))
    setTopCountries(top)
  }, [])
  // Handle country selection
  const handleCountryChange = (countryName: string) => {

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import {;
  CountryPricing,;
  onsiteServicePricing,;
} from '@/data/onsiteServicePricing';

interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null) => void;
  selectedCountry: CountryPricing | null;

export function CountrySelector(): any ({;
  onCountryChange,;
  selectedCountry,;
}: CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null,) => void,;
  selectedCountry: CountryPricing | null;
}

  // Set top/popular countries;
  useEffect(() => {;
    const popular = [;
      'United States',;
      'United Kingdom',;
      'Canada',;
      'Germany',;
      'Australia',;
      'Japan',;
      'Singapore',;
    ];
    const top = onsiteServicePricing;
      .filter(item => popular && popular.includes(item && item.country));
      .sort((a, b) => a && a.country.localeCompare(b && b.country));
    setTopCountries(top);
  }, []);

  // Handle country selection;
  const handleCountryChange = (countryName: string) => {;
    const country =;
      onsiteServicePricing && onsiteServicePricing.find(item => item && item.country === countryName) || null;
    onCountryChange(country);
  };
  return (
        </SelectTrigger>;
        <SelectContent className='bg-zion-blue-dark border-zion-blue-light max-h-80'>;
          <div className='p-2 border-b border-zion-blue-light'>;
            <p className='text-sm text-zion-slate-light pb-1'>;
              Popular Countries;
            </p>;
            {topCountries && topCountries.map(item => (;
              <SelectItem
                key={item && item.country}
                value={item && item.country}
                className='text-white'>                {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
}
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}
