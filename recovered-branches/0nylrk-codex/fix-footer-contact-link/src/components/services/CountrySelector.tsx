

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

interface CountrySelectorProps {

import { useState, useEffect } from "react","
import { Globe } from "lucide-react",";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";"
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",


interface CountrySelectorProps {};
  onCountryChange: (country: CountryPricing | null) => void;
  selectedCountry: CountryPricing | null;
}

export function CountrySelector() { return null; }
export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {};
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
  // Set top/popular countries
  useEffect(() => {

    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];
    const top = onsiteServicePricing.filter(item =>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),

// Set top/popular countries;
  useEffect(() => {"
  // Set top/popular countries
  useEffect(() => {
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 


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

  }, []);
  }, []),

  // Handle country selection
  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) |null
    onCountryChange(country)

  },

    // Handle country selection

  // Handle country selection
  // Handle country selection
    // Handle country selection
  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) |null
    onCountryChange(country)

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>
<Select
        onValueChange={handleCountryChange} 


      <Select
        onValueChange={handleCountryChange}
      <Select 
        onValueChange={handleCountryChange} 


<Select
        onValueChange={handleCountryChange}
      <Select 
        onValueChange={handleCountryChange}
        value={selectedCountry?.country}
      >"
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">"
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>"
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">"
          <div className="p-2 border-b border-zion-blue-light">"
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>
{topCountries.map((item) => (
              <SelectItem key={item.country} value={item.country} className="text-white">

import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";
import { useState, useEffect } from "react",;
              <SelectItem key={item.country} value={item.country} className="text-white">import { useState, useEffect } from "react",;
              <SelectItem key={item.country} value={item.country} className="text-white">import { useState, useEffect } from "react",;
import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;

"
import { useState, useEffect } from "react",;"
import { Globe } from "lucide-react",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;

import { useState, useEffect } from "react",;
import { Globe } from "lucide-react",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;

interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null) => void,;
  selectedCountry: CountryPricing | null;
}

"
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;"
          <SelectValue placeholder="Select a country" />;
        </SelectTrigger>;"
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">;"
          <div className="p-2 border-b border-zion-blue-light">;"
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
{topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;
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

          </div>
        </SelectContent>
      </Select>
    </div>
  )
}
          </div>;
          <div className="p-2">;
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;
            {onsiteServicePricing;
              .sort((a, b) => a && a.country.localeCompare(b && b.country));
              .map((item) => (;"
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
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;
                {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}
          </div>;"
          <div className="p-2">;"
</div>"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;""
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;"
</SelectItem>
              </SelectItem>;

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

  ),;}
 interface CountrySelectorProps {}
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

"`

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
