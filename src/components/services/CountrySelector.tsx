<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
<<<<<<< HEAD
=======
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
  CountryPricing,
  onsiteServicePricing,
} from '@/data/onsiteServicePricing'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


<<<<<<< HEAD
import {
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
  CountryPricing
  onsiteServicePricing
} from '@/data/onsiteServicePricing'
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void
  selectedCountry: CountryPricing | null
export function CountrySelector({
  onCountryChange
  selectedCountry
}: CountrySelectorProps) {
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void
  selectedCountry: CountryPricing | null
export function CountrySelector({;
  onCountryChange,;
  selectedCountry;
}: CountrySelectorProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null,) => void

  selectedCountry: CountryPricing | null
}
  // Set top/popular countries
  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

=======
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country)),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setTopCountries(top)
  }, [])
  // Handle country selection
  const handleCountryChange = (countryName: string) => {
<<<<<<< HEAD
    const country =
      onsiteServicePricing.find(item => item.country === countryName) |null
=======
    const country = null;
      onsiteServicePricing.find(item => item.country === countryName) || null
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    onCountryChange(country)
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (

      </h3>;


      <Select
        onValueChange={handleCountryChange}
        value={selectedCountry?.country}>;
        <SelectTrigger className='bg-zion-blue border-zion-blue-light text-white'>;
          <SelectValue placeholder='Select a country' />;
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
          </div>        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">;
          <div className="p-2 border-b border-zion-blue-light">;
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>;
            {topCountries && topCountries.map((item,) => (;
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;
              </SelectItem>;
            ))}
          </div>;
          <div className='p-2'>;
            <p className='text-sm text-zion-slate-light pb-1'>All Countries</p>;
            {onsiteServicePricing;
              .sort((a, b) => a && a.country.localeCompare(b && b.country));
              .map(item => (;
                <SelectItem
                  key={item && item.country}
                  value={item && item.country}
                  className='text-white'>;
                  {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
                </SelectItem>;
              ))}          </div>              .map((item) => (;
              .sort((a, b,) => a && a.country.localeCompare(b && b.country));
              .map((item,) => (;
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;
                {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}

        </SelectContent>;
      </Select>;
    </div>;

  return (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>



      
      <Select 
        onValueChange={handleCountryChange} 
        value={selectedCountry?.country}
      >
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">
          <div className="p-2 border-b border-zion-blue-light">
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>
            {topCountries.map((item) => (
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>
          <div className="p-2">
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>
            {onsiteServicePricing
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((item) => (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
  CountryPricing,
  onsiteServicePricing,
} from '@/data / onsiteServicePricing';
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void;
  selected_country: CountryPricing | null;
export /**
 * CountrySelector - Function description
 */
function CountrySelector() {
  const [top_countries, setTopCountries] = useState < CountryPricing[]>([]);interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null, ) => void,
  selected_country: CountryPricing | null;
}
<<<<<<< HEAD
=======

;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
