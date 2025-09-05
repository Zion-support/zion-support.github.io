

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
      </h3>
      
      <Select 
        onValueChange={_handleCountryChange} 
        value={_selectedCountry?.country}
      >
        <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
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
              </SelectItem>
            ))}
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}
