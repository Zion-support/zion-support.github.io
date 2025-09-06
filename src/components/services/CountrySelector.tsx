=======

import { useState, useEffect } from "react",
import { Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void
  selectedCountry: CountryPricing | null
export function CountrySelector({;
  onCountryChange,;
  selectedCountry;
}: CountrySelectorProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null,) => void

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
=======
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
    const top = onsiteServicePricing.filter(item => 
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country)),
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setTopCountries(top)
  }, [])
  // Handle country selection
  const handleCountryChange = (countryName: string) => {
    onCountryChange(country)

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
      </h3>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
=======
          </div>;
        </SelectContent>;
      </Select>;
    </div>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
