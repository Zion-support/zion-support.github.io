<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react",
import { Globe } from "lucide-react",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CountrySelectorProps {
=======

import { useState, useEffect } from "react","
import { Globe } from "lucide-react",";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";"
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface CountrySelectorProps {};
  onCountryChange: (country: CountryPricing | null) => void;
  selectedCountry: CountryPricing | null;
}


export function CountrySelector() { return null; }
export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {};
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
<<<<<<< HEAD
=======
interface CountrySelectorProps {

  onCountryChange: (country: CountryPricing | null) => void

  selectedCountry: CountryPricing | null
}

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
  // Set top/popular countries
  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
  // Set top/popular countries;
  useEffect(() => {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];
    const top = onsiteServicePricing.filter(item =>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
  
<<<<<<< HEAD
  // Set top/popular countries;
  useEffect(() => {"
=======
=======
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];
    const top = onsiteServicePricing.filter(item =>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Set top/popular countries
  useEffect(() => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 


<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country));
    setTopCountries(top)

  }, []),


popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country)),
    setTopCountries(top)
  }, []);
  }, []),
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country));
    setTopCountries(top)
<<<<<<< HEAD

=======
=======
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country));
    setTopCountries(top)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }, []);
  }, []),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Handle country selection
=======
    // Handle country selection
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) |null
=======

  // Handle country selection;
  const handleCountryChange = (countryName: string) => {}
    const country = onsiteServicePricing.find(item => item.country === countryName) |null;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    onCountryChange(country)
<<<<<<< HEAD
=======
  }
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // Handle country selection
=======
  
  // Handle country selection
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // Handle country selection
    // Handle country selection
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) |null
    onCountryChange(country)

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD
  },



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      <Select 
=======

  return ("
    <div className="mb-6">"
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">"
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />"
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>





      <Select;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        onValueChange={handleCountryChange} 

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Select
        onValueChange={handleCountryChange}
      <Select 
        onValueChange={handleCountryChange} 
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Select
        onValueChange={handleCountryChange}
      <Select 
        onValueChange={handleCountryChange}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        value={selectedCountry?.country}
      >"
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>"
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">"
          <div className="p-2 border-b border-zion-blue-light">"
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>
<<<<<<< HEAD
            {topCountries.map((item) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            {topCountries.map((item) => ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <SelectItem key={item.country} value={item.country} className="text-white">

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
              <SelectItem key={item.country} value={item.country} className="text-white">

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from "react",;
=======
              <SelectItem key={item.country} value={item.country} className="text-white">import { useState, useEffect } from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <SelectItem key={item.country} value={item.country} className="text-white">import { useState, useEffect } from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
=======

"
import { useState, useEffect } from "react",;"
import { Globe } from "lucide-react",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { useState, useEffect } from "react",;
import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <SelectItem key={item.country} value={item.country} className="text-white">import { useState, useEffect } from "react",;
import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null) => void,;
  selectedCountry: CountryPricing | null;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



"
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;"
          <SelectValue placeholder="Select a country" />;
        </SelectTrigger>;"
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">;"
          <div className="p-2 border-b border-zion-blue-light">;"
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>;

<<<<<<< HEAD
=======

export function CountrySelector(): any ({ onCountryChange, selectedCountry }: CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);


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
import { useState, useEffect } from "react",;
import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
;
interface CountrySelectorProps {;
  onCountryChange:(country:CountryPricing | null) => void,;
  selectedCountry:CountryPricing | null;
import {useState, useEffect} from "react";""
import {Globe} from "lucide-react";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";""
import { useState, useEffect } from "react",""
import { Globe } from "lucide-react",""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";""
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",""
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing","
interface CountrySelectorProps {
  // TODO: Implement
}
  onCountryChange: (country: CountryPricing | null) => void;,
  selectedCountry: CountryPricing | null;
}

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
</CountryPricing>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
</CountryPricing>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
</CountryPricing>"
    <div className="mb-6">"
</div>"
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">"
</h3>"
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />"
</Globe>
      </h3>



      <Select;
        onValueChange={handleCountryChange} 


        value={selectedCountry?.country}
      >
</Select>"
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
</SelectTrigger>"
          <SelectValue placeholder="Select a country" />"
</SelectValue>
        </SelectTrigger>"
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">"
</SelectContent>"
          <div className="p-2 border-b border-zion-blue-light">"
</div>"
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>""
              <SelectItem key={item.country} value={item.country} className="text-white">"
</SelectItem>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
</CountryPricing>"
    <div className="mb-6">;"
</div>"
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">;"
</h3>"
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />;"
</Globe>
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;

<<<<<<< HEAD

<<<<<<< HEAD
=======
            {topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>"
          <div className="p-2">"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>
            {onsiteServicePricing;
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((item) => ("
=======
=======
{topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
            ))}
          </div>
          <div className="p-2">
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>
            {onsiteServicePricing
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((item) => (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
=======
          </div>"
          <div className="p-2">"
</div>"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>""
              <SelectItem key={item.country} value={item.country} className="text-white">"
</SelectItem>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </SelectItem>
            ))}
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>
        </SelectContent>
      </Select>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
=======
            {topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}
=======
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </div>;
          <div className="p-2">;
=======

          </div>;"
          <div className="p-2">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;
            {onsiteServicePricing;
              .sort((a, b) => a && a.country.localeCompare(b && b.country));
              .map((item) => (;"
=======
}
{topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>;
          <div className="p-2">;
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;
            {onsiteServicePricing;
              .sort((a, b) => a && a.country.localeCompare(b && b.country));
              .map((item) => (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;
                {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          </div>;"
          <div className="p-2">;"
</div>"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;""
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;"
</SelectItem>
              </SelectItem>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
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
  ),;}
 interface CountrySelectorProps {
=======


  ),;}
 interface CountrySelectorProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  onCountryChange: (country: CountryPricing | null) => void;
selectedCountry: CountryPricing | null;
}export function CountrySelector ({};
  onCountryChange, selectedCountry;
}: CountrySelectorProps) {}
  const [topCountries, setTopCountries] = useState<CountryPricing[]> ([]);
//Set top/popular countries useEffect ( () => {}
  const top = onsiteServicePricing.filter (item => popular.includes (item.country) ) .sort ( (a, b) => a.country.localeCompare (b.country) );
setTopCountries (top) 
}, []);
//Handle country selection const handleCountryChange = (countryName: string) => {}
  const country = onsiteServicePricing.find (item => item.country === countryName) || null;
onCountryChange (country) 
};"
return (<div className="mb-6" > <h3 className="text-xl font-semibold text-white mb-4 flex items-center" > <Globe className="mr-2 h-5 w-5 text-zion-cyan" /> {}`
  selectedCountry ? `IT Onsite Service in $ {}
  selectedCountry.country "`
}` : "Select Country for IT Onsite Service" 
}handleCountryChange;
}value= {}
  selectedCountry?.country "
}> <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white" > <SelectValue placeholder="Select a country" /> </SelectTrigger> </SelectItem>) ) 
}</div> </SelectContent> </Select> </div>) 
}
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


import {useState, useEffect} from "react";""
import {Globe} from "lucide-react";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";""
import { useState, useEffect } from "react",""
import { Globe } from "lucide-react",""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";""
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",""
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing","
interface CountrySelectorProps {
  // TODO: Implement
}
  onCountryChange: (country: CountryPricing | null) => void;,
  selectedCountry: CountryPricing | null;

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);


  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
"
    <div className="mb-6">"
</div>"
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">"
</h3>"
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />"

      </h3>



      <Select;
        onValueChange={handleCountryChange} 


        value={selectedCountry?.country}
      >
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
          <SelectValue placeholder="Select a country" />"

        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">"
          <div className="p-2 border-b border-zion-blue-light">"
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>""
              <SelectItem key={item.country} value={item.country} className="text-white">"

    <div className="mb-6">;"
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">;"
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />;"

      </h3>;
        value={selectedCountry?.country}>;
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;"
          <SelectValue placeholder="Select a country" />;"

        ;"
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">;"
          <div className="p-2 border-b border-zion-blue-light">;"
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>;""
              <SelectItem key={item.country} value={item.country} className="text-white">;"

          <div className="p-2">"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>""

          </div>
          </div>;"
          <div className="p-2">;"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;""
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;"

              ;
          </div>;

  const [top_countries, setTopCountries] = useState < CountryPricing[]>([]);
  // Set top / popular countries;
  useEffect (() => {"
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];"
    const top = onsiteServicePricing.filter (item =>;)
      popular.includes (item.country)).sort ((a, b) => a.country.locale_compare (b.country));
    setTopCountries (top);
  }, []);
  // Handle country selection;
  const handleCountryChange = (country_name: string) =>: any {
  // TODO: Implement
    const country = onsiteServicePricing.find (item => item.country === country_name) || null,
    onCountryChange (country);
  return ("
    <div className="mb - 6">;"
      <h3 className="text - xl font - semibold text - white mb - 4 flex items - center">;"
        <Globe className="mr - 2 h - 5 w - 5 text - zion - cyan" />;"

        value={selected_country?.country}
      >;
        <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;"

        <SelectContent className="bg - zion - blue - dark border - zion - blue - light max - h-80">;"
          <div className="p - 2 border - b border - zion - blue - light">;"
            <p className="text - sm text - zion - slate - light pb - 1">Popular Countries</p>;""
              <SelectItem key={item.country} value={item.country} className="text - white">;"
)
              ))}
          <div className="p - 2">;"
            <p className="text - sm text - zion - slate - light pb - 1">All Countries</p>;""

    </div>);
  const [topCountries, setTopCountries] = useState<CountryPricing[]> ([]);
return (<div className="mb-6" > <h3 className="text-xl font-semibold text-white mb-4 flex items-center" > <Globe className="mr-2 h-5 w-5 text-zion-cyan" /> {"
</div>)"
}> <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white" > <SelectValue placeholder="Select a country" />  ) )"
}</div>   </div>) "
pr-12325
}
 interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void;}
selectedCountry: CountryPricing | null }
}export function CountrySelector ({}
  onCountryChange, selectedCountry }
}: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[] /> ([]);
//Set top/popular countries useEffect ( () => {
  const top = onsiteServicePricing.filter (item => popular.includes (item.country) ) .sort ( (a, b) => a.country.localeCompare (b.country) );}
setTopCountries (top) }
}, []);
//Handle country selection const handleCountryChange = (
  const country = onsiteServicePricing.find (item => item.country === countryName) || null;
onCountryChange (country) ) => {
  return $3;}
}
};
return (<div className=\"mb-6\"  /> <h3 className=\"text-xl font-semibold text-white mb-4 flex items-center\"  /> <Globe className=\"mr-2 h-5 w-5 text-zion-cyan\" /> {
  selectedCountry ? `IT Onsite Service in $ {}
  selectedCountry.country }
}` : \"Select Country for IT Onsite Service\" 
}handleCountryChange;
}value= {}
  selectedCountry?.country }
}> <SelectTrigger className=\"bg-zion-blue border-zion-blue-light text-white\"  /> <SelectValue placeholder=\"Select a country\" /> </SelectTrigger> </SelectItem>) ) 
}</div> </SelectContent> </Select> </div>) 
}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
