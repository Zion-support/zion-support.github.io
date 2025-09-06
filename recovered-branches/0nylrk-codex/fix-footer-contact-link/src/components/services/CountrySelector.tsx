<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountrySelector.tsx

<<<<<<< HEAD

import { useState, useEffect } from "react",
import { Globe } from "lucide-react",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";
import { useState, useEffect } from "react",
import { Globe } from "lucide-react",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface CountrySelectorProps {

  onCountryChange: (country: CountryPricing | null) => void

  selectedCountry: CountryPricing | null
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
  // Set top/popular countries
  useEffect(() => {

    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];
    const top = onsiteServicePricing.filter(item =>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Set top/popular countries
  useEffect(() => {
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country));
    setTopCountries(top)

<<<<<<< HEAD
=======

  }, []),
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country)),
    setTopCountries(top)
  }, []);
  }, []),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Handle country selection
  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) |null
    onCountryChange(country)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      <Select 
        onValueChange={handleCountryChange} 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Select
        onValueChange={handleCountryChange}
      <Select 
        onValueChange={handleCountryChange} 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountrySelector.tsx
import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountrySelector.tsx

=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from "react",;
import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountrySelector.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null) => void,;
  selectedCountry: CountryPricing | null;
}
<<<<<<< HEAD
export function CountrySelector(): any ({ onCountryChange, selectedCountry }: CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
  // Set top/popular countries;
  useEffect(() => {;
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];
    const top = onsiteServicePricing && onsiteServicePricing.filter(item => ;
      popular && popular.includes(item && item.country);
    ).sort((a, b) => a && a.country.localeCompare(b && b.country));
    setTopCountries(top);
  }, []);
  // Handle country selection;
  const handleCountryChange = (countryName: string) => {;
    const country = onsiteServicePricing && onsiteServicePricing.find(item => item && item.country === countryName) || null,;
    onCountryChange(country);
  };
  return (
    <div className="mb-6">;
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">;
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />;
        {selectedCountry ? `IT Onsite Service in ${selectedCountry && selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>;
      <Select
        onValueChange={handleCountryChange} 
        value={selectedCountry?.country}>;
=======

import { useState, useEffect } from "react",;
import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
;
interface CountrySelectorProps {;
  onCountryChange:(country:CountryPricing | null) => void,;
  selectedCountry:CountryPricing | null;
}
;
export function CountrySelector({ onCountryChange, selectedCountry } CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),;
  ;
  // Set top/popular countries;
  useEffect(() => {;
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],;
    const top = onsiteServicePricing.filter(item => ;
      popular.includes(item.country);
    ).sort((a, b) => a.country.localeCompare(b.country)),;
    setTopCountries(top),;
  }, []),;
  ;
  // Handle country selection;
  const handleCountryChange = (countryName:string) => {;
    const country = onsiteServicePricing.find(item => item.country === countryName) || null,;
    onCountryChange(country);
  },;
;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <div className="mb-6">;
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">;
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />;
<<<<<<< HEAD
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` :"Select Country for IT Onsite Service"}
      </h3>;
      ;
      <Select ;
        onValueChange={handleCountryChange} ;
        value={selectedCountry?.country}
      >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>;
      <Select;
        onValueChange={handleCountryChange} ;
        value={selectedCountry?.country}
      >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;
          <SelectValue placeholder="Select a country" />;
        </SelectTrigger>;
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">;
          <div className="p-2 border-b border-zion-blue-light">;
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountrySelector.tsx

            {topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            {topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>
          <div className="p-2">
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>
            {onsiteServicePricing
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((item) => (
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>
        </SelectContent>
      </Select>
    </div>
  )
<<<<<<< HEAD
}
=======
========
<<<<<<< HEAD
            {topCountries && topCountries.map((item) => (;
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;
                {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
=======
            {topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;                {item.country} - ${item.pricePerIncident.toFixed(2)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </SelectItem>;
            ))}
          </div>;
          <div className="p-2">;
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;
            {onsiteServicePricing;
<<<<<<< HEAD
              .sort((a, b) => a && a.country.localeCompare(b && b.country));
              .map((item) => (;
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;
                {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
=======
              .sort((a, b) => a.country.localeCompare(b.country));
              .map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;
                {item.country} - ${item.pricePerIncident.toFixed(2)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </SelectItem>;
            ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountrySelector.tsx
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
<<<<<<< HEAD
  );
}
import { useState, useEffect } from './react';
import { Globe } from './lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { CountryPricing, onsiteServicePricing } from '@/data / onsiteServicePricing';
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void,
  selected_country: CountryPricing | null;
}
export /**
 * CountrySelector - Function description
 */
function CountrySelector() {
  const [top_countries, setTopCountries] = useState < CountryPricing[]>([]);
;
  // Set top / popular countries;
  useEffect (() => {
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];
    const top = onsiteServicePricing.filter (item =>;
      popular.includes (item.country)).sort ((a, b) => a.country.locale_compare (b.country));
    setTopCountries (top);
  }, []);
;
  // Handle country selection;
  const handleCountryChange = (country_name: string) =>: any {
    const country = onsiteServicePricing.find (item => item.country === country_name) || null,
    onCountryChange (country);
  }
;
  return (
    <div className="mb - 6">;
      <h3 className="text - xl font - semibold text - white mb - 4 flex items - center">;
        <Globe className="mr - 2 h - 5 w - 5 text - zion - cyan" />;
        {selected_country ? `IT Onsite Service in ${selected_country.country}` : "Select Country for IT Onsite Service"}
      </h3>;
      <Select;
        onValueChange={handleCountryChange}
        value={selected_country?.country}
      >;
        <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;
          <SelectValue placeholder="Select a country" />;
        </SelectTrigger>;
        <SelectContent className="bg - zion - blue - dark border - zion - blue - light max - h-80">;
          <div className="p - 2 border - b border - zion - blue - light">;
            <p className="text - sm text - zion - slate - light pb - 1">Popular Countries</p>;
            {top_countries.map ((item) => (
              <SelectItem key={item.country} value={item.country} className="text - white">;
                {item.country} - ${item.pricePerIncident.to_fixed (2)}
              </SelectItem>))}
          </div>;
          <div className="p - 2">;
            <p className="text - sm text - zion - slate - light pb - 1">All Countries</p>;
            {onsiteServicePricing;
              .sort ((a, b) => a.country.locale_compare (b.country));
              .map ((item) => (
              <SelectItem key={item.country} value={item.country} className="text - white">;
                {item.country} - ${item.pricePerIncident.to_fixed (2)}
              </SelectItem>))}
          </div>;
        </SelectContent>;
      </Select>;
    </div>);
}
=======
  ),;}
 interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void;
selectedCountry: CountryPricing | null 
}export function CountrySelector ({
  onCountryChange, selectedCountry 
}: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]> ([]);
//Set top/popular countries useEffect ( () => {
  const top = onsiteServicePricing.filter (item => popular.includes (item.country) ) .sort ( (a, b) => a.country.localeCompare (b.country) );
setTopCountries (top) 
}, []);
//Handle country selection const handleCountryChange = (countryName: string) => {
  const country = onsiteServicePricing.find (item => item.country === countryName) || null;
onCountryChange (country) 
};
return (<div className="mb-6" > <h3 className="text-xl font-semibold text-white mb-4 flex items-center" > <Globe className="mr-2 h-5 w-5 text-zion-cyan" /> {
  selectedCountry ? `IT Onsite Service in $ {
  selectedCountry.country 
}` : "Select Country for IT Onsite Service" 
}handleCountryChange 
}value= {
  selectedCountry?.country 
}> <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white" > <SelectValue placeholder="Select a country" /> </SelectTrigger> </SelectItem>) ) 
}</div> </SelectContent> </Select> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
