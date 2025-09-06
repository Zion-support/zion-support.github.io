<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from "react",
import { Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void
  selectedCountry: CountryPricing | null
export function CountrySelector({;
  onCountryChange,;
  selectedCountry;
}: CountrySelectorProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>   const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {
>>>>>>>   onCountryChange: (country: CountryPricing | null,) => void

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country)),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>     setTopCountries(top)
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    setTopCountries(top)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }, [])
  // Handle country selection
  const handleCountryChange = (countryName: string) => {
    const country =
      onsiteServicePricing.find(item => item.country === countryName) |null
    const country = null;
      onsiteServicePricing.find(item => item.country === countryName) || null
    onCountryChange(country)
  }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    setTopCountries(top)
  }, [])
  // Handle country selection
  const handleCountryChange = (countryName: string) => {

<<<<<<< HEAD
    onCountryChange(country)

=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     <div className="mb-6">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },

  return (
    <div className="mb-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Select
        onValueChange={handleCountryChange}
        value={selectedCountry?.country}      >
        <SelectTrigger className='bg-zion-blue border-zion-blue-light text-white'>
          <SelectValue placeholder='Select a country' />
<<<<<<< HEAD
=======
        </SelectTrigger>
        <SelectContent className='bg-zion-blue-dark border-zion-blue-light max-h-80'>
          <div className='p-2 border-b border-zion-blue-light'>
            <p className='text-sm text-zion-slate-light pb-1'>
              Popular Countries
            </p>
            {topCountries.map(item => (
              <SelectItem
                key={item.country}
                value={item.country}
                className='text-white'
              >                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">
          <div className="p-2 border-b border-zion-blue-light">
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>
            {topCountries.map((item,) => (
              <SelectItem key={item.country} value={item.country} className="text-white">
              </SelectItem>
            ))}
          </div>
          <div className='p-2'>
            <p className='text-sm text-zion-slate-light pb-1'>All Countries</p>
            {onsiteServicePricing
              .sort((a, b) => a.country.localeCompare(b.country))
              .map(item => (
                <SelectItem
                  key={item.country}
                  value={item.country}
                  className='text-white'
                >
                  {item.country} - ${item.pricePerIncident.toFixed(2)}
                </SelectItem>
              ))}          </div>              .map((item) => (
              .sort((a, b,) => a.country.localeCompare(b.country))
              .map((item,) => (
      
      <Select 
        onValueChange={handleCountryChange} 
        value={selectedCountry?.country}
      >
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
          <SelectValue placeholder="Select a country" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </SelectTrigger>
        <SelectContent className='bg-zion-blue-dark border-zion-blue-light max-h-80'>
          <div className='p-2 border-b border-zion-blue-light'>
            <p className='text-sm text-zion-slate-light pb-1'>
              Popular Countries
            </p>
            {topCountries.map(item => (
              <SelectItem
                key={item.country}
                value={item.country}
                className='text-white'
              >                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">
          <div className="p-2 border-b border-zion-blue-light">
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>
            {topCountries.map((item,) => (
              <SelectItem key={item.country} value={item.country} className="text-white">
<<<<<<< HEAD
              </SelectItem>
=======
import { useState, useEffect } from "react",;
import { Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null) => void,;
  selectedCountry: CountryPricing | null;
}
;
export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),;
  // Set top/popular countries;
  useEffect(() => {;
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],;
    const top = onsiteServicePricing.filter(item =>;
      popular.includes(item.country);
    ).sort((a, b) => a.country.localeCompare(b.country)),;
    setTopCountries(top);
  }, []),;
  // Handle country selection;
  const handleCountryChange = (countryName: string) => {;
    const country = onsiteServicePricing.find(item => item.country === countryName) || null;
    onCountryChange(country);
  };
  return (;
    <div className="mb-6">;
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">;
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />;
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>;
      <Select;
        onValueChange={handleCountryChange} ;
        value={selectedCountry?.country}
      >;
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
          <SelectValue placeholder="Select a country" />;
        </SelectTrigger>;
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">;
          <div className="p-2 border-b border-zion-blue-light">;
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>;
            {topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ))}
          </div>
          <div className='p-2'>
            <p className='text-sm text-zion-slate-light pb-1'>All Countries</p>
            {onsiteServicePricing
              .sort((a, b) => a.country.localeCompare(b.country))
<<<<<<< HEAD
              .map(item => (
                <SelectItem
                  key={item.country}
                  value={item.country}
                  className='text-white'
                >
                  {item.country} - ${item.pricePerIncident.toFixed(2)}
                </SelectItem>
              ))}          </div>              .map((item) => (
              .sort((a, b,) => a.country.localeCompare(b.country))
              .map((item,) => (
>>>>>>>               <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              .map((item) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
  // Set top / popular countries;
  useEffect (() => {
    const popular = [;
      'United States',
      'United Kingdom',
      'Canada',
      'Germany',
      'Australia',
      'Japan',
      'Singapore',
    ];
    const top = onsiteServicePricing;
      .filter (item => popular.includes (item.country));
      .sort ((a, b) => a.country.locale_compare (b.country));
    setTopCountries (top);
  }, []);
  // Handle country selection;
  const handleCountryChange = (country_name: string) =>: any {
    const country =;
      onsiteServicePricing.find (item => item.country === country_name) || null;
    onCountryChange (country);
  }
  return (
    <div className='mb - 6'>;
      <h3 className='text - xl font - semibold text - white mb - 4 flex items - center'>;
        <Globe className='mr - 2 h - 5 w - 5 text - zion - cyan' />;
        {selected_country;
          ? `IT Onsite Service in ${selected_country.country}`;
          : 'Select Country for IT Onsite Service'}
      </h3>;
      <Select;
        onValueChange={handleCountryChange}
        value={selected_country?.country}      >;
        <SelectTrigger className='bg - zion - blue border - zion - blue - light text - white'>;
          <SelectValue placeholder='Select a country' />;
        </SelectTrigger>;
        <SelectContent className='bg - zion - blue - dark border - zion - blue - light max - h-80'>;
          <div className='p - 2 border - b border - zion - blue - light'>;
            <p className='text - sm text - zion - slate - light pb - 1'>;
              Popular Countries;
            </p>;
            {top_countries.map (item => (
              <SelectItem;
                key={item.country}
                value={item.country}
                className='text - white';
              >                {item.country} - ${item.pricePerIncident.to_fixed (2)}
              </SelectItem>))}
          </div>        <SelectContent className="bg - zion - blue - dark border - zion - blue - light max - h-80">;
          <div className="p - 2 border - b border - zion - blue - light">;
            <p className="text - sm text - zion - slate - light pb - 1">Popular Countries</p>;
            {top_countries.map ((item, ) => (
              <SelectItem key={item.country} value={item.country} className="text - white">;
              </SelectItem>))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </SelectContent>
      </Select>
    </div>
  )
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}
<<<<<<< HEAD

;

>>>>>>>           </div>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
