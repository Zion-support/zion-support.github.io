<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect } from "react",
import { Globe } from "lucide-react",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",

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
export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);
  // Set top/popular countries
  useEffect(() => {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
  // Set top/popular countries;
  useEffect(() => {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];
    const top = onsiteServicePricing.filter(item =>
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
  
  // Set top/popular countries;
  useEffect(() => {"
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country));
    setTopCountries(top)

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
  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) |null
    onCountryChange(country)

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
            {topCountries.map((item) => ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <SelectItem key={item.country} value={item.country} className="text-white">

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
import {useState, useEffect} from "react";
import {Globe} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";

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
interface CountrySelectorProps {;
  onCountryChange: (country: CountryPricing | null) => void,;
  selectedCountry: CountryPricing | null;
}
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
            {topCountries.map((item) => (;
              <SelectItem key={item.country} value={item.country} className="text-white">;


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
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}

          </div>
        </SelectContent>
      </Select>
    </div>
  )
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
              <SelectItem key={item && item.country} value={item && item.country} className="text-white">;
                {item && item.country} - ${item && item.pricePerIncident.toFixed(2)}
              </SelectItem>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}
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
