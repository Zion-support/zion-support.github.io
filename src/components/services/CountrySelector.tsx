

interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void
  selectedCountry: CountryPricing | null
export function CountrySelector({;
  onCountryChange,;
  selectedCountry;
}: CountrySelectorProps) {;

  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]);interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null,) => void

  selectedCountry: CountryPricing | null
}
  // Set top/popular countries
  useEffect(() => {
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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


              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
=======
        </SelectContent>
      </Select>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
