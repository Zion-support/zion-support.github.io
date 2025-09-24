import { useState } from 'react',
import { Globe } from 'lucide-react',
interface CountryPricing {
  country: string,
  currency: string,
  multiplier: number,
  pricePerIncident: number}
,
interface CountrySelectorProps {
  selectedCountry: CountryPricing | null,
  onCountrySelect: (country: CountryPricing) => void}
,
const onsiteServicePricing: CountryPricing[] = [
  {
    country: 'United States';
    currency: 'USD';
    multiplier: 1.0;
    pricePerIncident: 150;
  };
  {
    country: 'Canada';
    currency: 'CAD';
    multiplier: 1.35;
    pricePerIncident: 203;
  };
  {
    country: 'United Kingdom';
    currency: 'GBP';
    multiplier: 0.79;
    pricePerIncident: 119;
  };
  {
    country: 'Germany';
    currency: 'EUR';
    multiplier: 0.92;
    pricePerIncident: 138;
  };
  {
    country: 'France';
    currency: 'EUR';
    multiplier: 0.92;
    pricePerIncident: 138;
  };
  {
    country: 'Australia';
    currency: 'AUD';
    multiplier: 1.52;
    pricePerIncident: 228;
  };
  {
    country: 'Japan';
    currency: 'JPY';
    multiplier: 150;
    pricePerIncident: 22500;
  };
  {
    country: 'Singapore';
    currency: 'SGD';
    multiplier: 1.35;
    pricePerIncident: 203;
  };
],
export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false),
  const handleCountrySelect = (countryName: string) => {
    const selectedCountry = onsiteServicePricing.find(c => c.country === countryName),
    if (selectedCountry) {
      onCountrySelect(selectedCountry)}
    setIsOpen(false)};
  return (
    <div className="relative">,
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover: border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">,
        <div className="flex items-center space-x-3">,
          <Globe className="w-5 h-5 text-gray-500" />,
          <span className="text-gray-900">,
            {selectedCountry ? selectedCountry.country : 'Select Country'}
          </span>,
        </div>,
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none",
          stroke="currentColor",
          viewBox="0 0 24 24">,
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />,
        </svg>,
      </button>,
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">,
          {onsiteServicePricing.map((country) => (
            <button
              key={country.country}
              onClick={() => handleCountrySelect(country.country)}
              className="w-full px-4 py-3 text-left hover: bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors">,
              <div className="flex justify-between items-center">,
                <span className="text-gray-900">{country.country}</span>,
                <span className="text-sm text-gray-500">,
                  {country.currency} {country.pricePerIncident}
                </span>,
              </div>,
            </button>))}
        </div>)}
    </div>)}