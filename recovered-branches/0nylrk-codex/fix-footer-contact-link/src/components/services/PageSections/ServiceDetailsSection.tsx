
<<<<<<< HEAD
import { CountryPricing } from "@/data/onsiteServicePricing",;
import { CountryServiceSelector } from "../CountryServiceSelector",;
;
interface ServiceDetailsSectionProps {;
  selectedCountry:CountryPricing | null,;
  setSelectedCountry:(country:CountryPricing | null) => void;
}
;
export function ServiceDetailsSection({ selectedCountry, setSelectedCountry } ServiceDetailsSectionProps) {;
  return (;
    <div id="service-details" className="mt-12">;
      {selectedCountry ? (;
        <CountryServiceSelector ;
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />;
      ) :(;
        <div className="text-center">;
          <h2 className="text-2xl font-bold text-white mb-4">Select a Country for Details</h2>;
          <p className="text-zion-slate-light mb-6">;
            Choose a country from the options above to see service details and pricing;
          </p>;
        </div>;
      )}
    </div>;
  ),;
=======
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null,
  setSelectedCountry: (country: CountryPricing | null) => void
}

export function ServiceDetailsSection({ selectedCountry, setSelectedCountry }: ServiceDetailsSectionProps) {
  return (
    <div id=&quot;service-details&quot; className=&quot;mt-12&quot;>

interface ServiceDetailsSectionProps {_selectedCountry: CountryPricing | null;
  setSelectedCountry: (_country: CountryPricing | null) => void;}

export function ServiceDetailsSection(_{_selectedCountry, _setSelectedCountry}: ServiceDetailsSectionProps) {_return (
    <div id="service-details" className="mt-12">
      {selectedCountry ? (
        <CountryServiceSelector 
          selectedCountry={selectedCountry}
          onCountryChange={_setSelectedCountry}
        />
      ) : (
        <div className=&quot;text-center&quot;>
          <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>Select a Country for Details</h2>
          <p className=&quot;text-zion-slate-light mb-6&quot;>
            Choose a country from the options above to see service details and pricing
          </p>
        </div>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
