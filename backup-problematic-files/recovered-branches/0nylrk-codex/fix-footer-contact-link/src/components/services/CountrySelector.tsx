
import { useState, useEffect } from "react",;""
import { Globe } from "lucide-react",;""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;""
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;"
;
interface CountrySelectorProps {;
  onCountryChange:(country:CountryPricing | null) => void,;
  selectedCountry:CountryPricing | null;
}
;
export function CountrySelector({ onCountryChange, selectedCountry } CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),;
</CountryPricing>"
    <div className="mb-6">;"
</div>"
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">;"
</h3>"
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />;"
</Globe>
      </h3>;
      <Select ;
        onValueChange={handleCountryChange} ;
        value={selectedCountry?.country}
      >;
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
              <SelectItem key={item.country} value={item.country} className="text-white">;                {item.country} - ${item.pricePerIncident.toFixed(2)}"
</SelectItem>
              </SelectItem>;
          </div>;"
          <div className="p-2">;"
</div>"
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>;""
              <SelectItem key={item.country} value={item.country} className="text-white">;"
</SelectItem>
              </SelectItem>;
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
  const [topCountries, setTopCountries] = useState<CountryPricing[]> ([]);
</CountryPricing>"