<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useState, useEffect } from "react",
import { Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null,) => void
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void,
=======
=======
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void;
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
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null,) => void
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  selectedCountry: CountryPricing | null
}

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
  
  // Set top/popular countries
  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f




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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country)),
<<<<<<< HEAD
    setTopCountries(top)
  }, []),
  
  // Handle country selection
  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) || null,
    onCountryChange(country)
  },
=======



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
=======
    const popular = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
=======
                key={item.country}
                value={item.country}
                className='text-white'
              >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            ))}
          </div>
<<<<<<< HEAD
          <div className="p-2">
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>
            {onsiteServicePricing
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((item) => (
<<<<<<< HEAD
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}
<<<<<<< HEAD
=======
=======



              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}
<<<<<<< HEAD
=======
=======
          </div>;
          <div className='p - 2'>;
            <p className='text - sm text - zion - slate - light pb - 1'>All Countries</p>;
            {onsiteServicePricing;
              .sort ((a, b) => a.country.locale_compare (b.country));
              .map (item => (
                <SelectItem;
                  key={item.country}
                  value={item.country}
                  className='text - white';
                >;
                  {item.country} - ${item.pricePerIncident.to_fixed (2)}
                </SelectItem>))}          </div>              .map ((item) => (
              .sort ((a, b, ) => a.country.locale_compare (b.country));
              .map ((item, ) => (
              <SelectItem key={item.country} value={item.country} className="text - white">;
                {item.country} - ${item.pricePerIncident.to_fixed (2)}
              </SelectItem>))}
        </SelectContent>;
      </Select>;
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2


;

          </div>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
;
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
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
              ))}
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {}
  onCountryChange: (country: CountryPricing | null,) => void;
  selectedCountry: CountryPricing | null;
}
  // Set top/popular countries;
  useEffect(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
