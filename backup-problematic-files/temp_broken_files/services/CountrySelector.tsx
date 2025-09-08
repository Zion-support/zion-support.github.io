
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;

;
interface CountrySelectorProps {;
  onCountryChange: (country:CountryPricing | null) => void;,;
  selectedCountry:CountryPricing | null;
}
export function CountrySelector({ onCountryChange, selectedCountry } CountrySelectorProps) {;
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),;
"
    <div className="mb-6">;"
</div>"
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">;"
</h3>"
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />;"

      </h3>;















}value= {;
  selectedCountry?.country ";
}> <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white" > <SelectValue placeholder="Select a country" /> </SelectTrigger> </SelectItem>) ) ;
}</div> </SelectContent> </Select> </div>) ;
}"



