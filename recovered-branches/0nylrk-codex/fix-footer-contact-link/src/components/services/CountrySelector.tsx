



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
          </div>"
          <div className="p-2">"
</div>"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>""
              <SelectItem key={item.country} value={item.country} className="text-white">"
</SelectItem>
              </SelectItem>
          </div>
        </SelectContent>
      </Select>
    </div>
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
  const [top_countries, setTopCountries] = useState < CountryPricing[]>([]);
;
  // Set top / popular countries;
  useEffect (() => {"
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"];"
    const top = onsiteServicePricing.filter (item =>;)
      popular.includes (item.country)).sort ((a, b) => a.country.locale_compare (b.country));
    setTopCountries (top);
  }, []);
;
  // Handle country selection;
  const handleCountryChange = (country_name: string) =>: any {
  // TODO: Implement
}
    const country = onsiteServicePricing.find (item => item.country === country_name) || null,
    onCountryChange (country);
  }
;
  return ("
    <div className="mb - 6">;"
</div>"
      <h3 className="text - xl font - semibold text - white mb - 4 flex items - center">;"
</h3>"
        <Globe className="mr - 2 h - 5 w - 5 text - zion - cyan" />;"
</Globe>
      </h3>;
      <Select;
        onValueChange={handleCountryChange}
        value={selected_country?.country}
      >;
</Select>"
        <SelectTrigger className="bg - zion - blue border - zion - blue - light text - white">;"
</SelectTrigger>"
          <SelectValue placeholder="Select a country" />;"
</SelectValue>
        </SelectTrigger>;"
        <SelectContent className="bg - zion - blue - dark border - zion - blue - light max - h-80">;"
</SelectContent>"
          <div className="p - 2 border - b border - zion - blue - light">;"
</div>"
            <p className="text - sm text - zion - slate - light pb - 1">Popular Countries</p>;""
              <SelectItem key={item.country} value={item.country} className="text - white">;"
</SelectItem>)
              </SelectItem>))}
          </div>;"
          <div className="p - 2">;"
</div>"
            <p className="text - sm text - zion - slate - light pb - 1">All Countries</p>;""
              <SelectItem key={item.country} value={item.country} className="text - white">;"
</SelectItem>
              </SelectItem>))}
          </div>;
        </SelectContent>;
      </Select>;
    </div>);
  const [topCountries, setTopCountries] = useState<CountryPricing[]> ([]);
</CountryPricing>"
return (<div className="mb-6" > <h3 className="text-xl font-semibold text-white mb-4 flex items-center" > <Globe className="mr-2 h-5 w-5 text-zion-cyan" /> {"
</div>)"
}> <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white" > <SelectValue placeholder="Select a country" /> </SelectTrigger> </SelectItem>) )"
}</div> </SelectContent> </Select> </div>) "