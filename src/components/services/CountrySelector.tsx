
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",
=======
import { useState, useEffect } from &quot;react&quot;;
import { Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { CountryPricing, onsiteServicePricing } from &quot;@/data/onsiteServicePricing&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void,
  selectedCountry: CountryPricing | null
}

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
  
  // Set top/popular countries
  useEffect(() => {
<<<<<<< HEAD
    const popular = ["United States", "United Kingdom", "Canada", "Germany", "Australia", "Japan", "Singapore"],
=======
    const popular = [&quot;United States&quot;, &quot;United Kingdom&quot;, &quot;Canada&quot;, &quot;Germany&quot;, &quot;Australia&quot;, &quot;Japan&quot;, &quot;Singapore&quot;];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    const top = onsiteServicePricing.filter(item => 
      popular.includes(item.country)
    ).sort((a, b) => a.country.localeCompare(b.country)),
    setTopCountries(top)
  }, []),
  
  // Handle country selection
  const handleCountryChange = (countryName: string) => {
    const country = onsiteServicePricing.find(item => item.country === countryName) || null,
    onCountryChange(country)
  },

  return (
    <div className=&quot;mb-6&quot;>
      <h3 className=&quot;text-xl font-semibold text-white mb-4 flex items-center&quot;>
        <Globe className=&quot;mr-2 h-5 w-5 text-zion-cyan&quot; />
        {selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : &quot;Select Country for IT Onsite Service&quot;}
=======

interface CountrySelectorProps {_onCountryChange: (_country: CountryPricing | null) => void;
  selectedCountry: CountryPricing | null;}

export function CountrySelector(_{_onCountryChange, _selectedCountry}: CountrySelectorProps) {_const [topCountries, _setTopCountries] = useState<CountryPricing[]>([]);
  
  // Set top/popular countries
  useEffect__(() => {
    const _popular = ["United States", _"United Kingdom", _"Canada", _"Germany", _"Australia", _"Japan", _"Singapore"];
    const _top = onsiteServicePricing.filter(item => 
      popular.includes(item.country)
    ).sort(_(a, _b) => a.country.localeCompare(b.country));
    setTopCountries(top);}, []);
  
  // Handle country selection
  const _handleCountryChange = (_countryName: string) => {_const _country = onsiteServicePricing.find(item => item.country === countryName) || null;
    onCountryChange(country);};

  return (_<div className="mb-6">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Globe className="mr-2 h-5 w-5 text-zion-cyan" />
        {_selectedCountry ? `IT Onsite Service in ${selectedCountry.country}` : "Select Country for IT Onsite Service"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </h3>
      
      <Select 
        onValueChange={_handleCountryChange} 
        value={_selectedCountry?.country}
      >
        <SelectTrigger className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;>
          <SelectValue placeholder=&quot;Select a country&quot; />
        </SelectTrigger>
<<<<<<< HEAD
        <SelectContent className=&quot;bg-zion-blue-dark border-zion-blue-light max-h-80&quot;>
          <div className=&quot;p-2 border-b border-zion-blue-light&quot;>
            <p className=&quot;text-sm text-zion-slate-light pb-1&quot;>Popular Countries</p>
            {topCountries.map((item) => (
              <SelectItem key={item.country} value={item.country} className=&quot;text-white&quot;>
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>
          <div className=&quot;p-2&quot;>
            <p className=&quot;text-sm text-zion-slate-light pb-1&quot;>All Countries</p>
            {onsiteServicePricing
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((item) => (
              <SelectItem key={item.country} value={item.country} className=&quot;text-white&quot;>
                {item.country} - ${item.pricePerIncident.toFixed(2)}
=======
        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">
          <div className="p-2 border-b border-zion-blue-light">
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>
            {_topCountries.map((item) => (
              <SelectItem key={item.country} value={_item.country} className="text-white">
                {_item.country} - ${_item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>
          <div className="p-2">
            <p className="text-sm text-zion-slate-light pb-1">All Countries</p>
            {_onsiteServicePricing
              .sort(_(a, _b) => a.country.localeCompare(b.country))
              .map(_(item) => (
              <SelectItem key={item.country} value={_item.country} className="text-white">
                {_item.country} - ${_item.pricePerIncident.toFixed(2)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </SelectItem>
            ))}
          </div>
        </SelectContent>
      </Select>
    </div>
  )
}
