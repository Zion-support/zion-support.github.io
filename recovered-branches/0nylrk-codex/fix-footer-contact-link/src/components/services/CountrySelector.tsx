<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect } from "react",
import { Globe } from "lucide-react",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
<<<<<<< HEAD

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",



=======
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void,
  selectedCountry: CountryPricing | null
}
import { useState, useEffect } from "react",
import { Globe } from "lucide-react",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface CountrySelectorProps {

interface CountrySelectorProps {};
  onCountryChange: (country: CountryPricing | null) => void;
  selectedCountry: CountryPricing | null;
}


<<<<<<< HEAD

=======
export function CountrySelector() { return null; }
export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {};
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
  // Set top/popular countries
  useEffect(() => {

    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];
    const top = onsiteServicePricing.filter(item =>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),

  // Set top/popular countries
  useEffect(() => {

    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 

      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country));
    setTopCountries(top)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }, []),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country)),
    setTopCountries(top)
  }, []);
  }, []),
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country));
    setTopCountries(top)

  }, []);
  }, []),


  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) |null

    onCountryChange(country)

  },

<<<<<<< HEAD





=======

  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) |null
    onCountryChange(country)

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>

<<<<<<< HEAD


=======
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
      <Select 
        onValueChange={handleCountryChange} 


      <Select
        onValueChange={handleCountryChange}
      <Select 
        onValueChange={handleCountryChange} 
>>>>>>> origin/cursor/delete-old-data-records-6bba
        value={selectedCountry?.country}
      >"
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>"
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">"
          <div className="p-2 border-b border-zion-blue-light">"
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>

<<<<<<< HEAD

              <SelectItem key={item.country} value={item.country} className="text-white">

=======
              <SelectItem key={item.country} value={item.country} className="text-white">

              <SelectItem key={item.country} value={item.country} className="text-white">
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";


import { useState, useEffect } from "react",;

import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
<<<<<<< HEAD


=======

interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null) => void,;
  selectedCountry: CountryPricing | null;
}

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
              </SelectItem>
            ))}
          </div>"
          <div className="p-2">"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>
            {onsiteServicePricing;
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((item) => ("

                {item.country} - ${item.pricePerIncident.toFixed(2)}
        onValueChange={handleCountryChange} 
        value={selectedCountry?.country}>;
</Select>"
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;"
</SelectTrigger>"
          <SelectValue placeholder="Select a country" />;"
</SelectValue>
        </SelectTrigger>;"
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">;"
</SelectContent>"
          <div className="p-2 border-b border-zion-blue-light">;"
</div>"
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>;""
              <SelectItem key={item.country} value={item.country} className="text-white">;"
</SelectItem>
              </SelectItem>

              </SelectItem>
            ))}
>>>>>>> origin/cursor/delete-old-data-records-6bba


          </div>
        </SelectContent>
      </Select>
    </div>
  )
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;
            {onsiteServicePricing;
              .sort((a, b) => a && a.country.localeCompare(b && b.country));
              .map((item) => (;"

              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;
                {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}


>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
<<<<<<< HEAD
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

}



=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
