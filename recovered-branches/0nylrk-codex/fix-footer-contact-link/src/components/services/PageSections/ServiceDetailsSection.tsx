import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";
interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void;
}

export function ServiceDetailsSection({
  selectedCountry,
  setSelectedCountry,
}: ServiceDetailsSectionProps) {
  return (
    <div id="service-details" className="mt-12">
      {selectedCountry ? (
        <CountryServiceSelector
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Select a Country for Details
          </h2>
          <p className="text-zion-slate-light mb-6">
            Choose a country from the options above to see service details and
            pricing
          </p>
        </div>
<<<<<<< HEAD
  return (
    <div id="service - details" className="mt - 12">;
      {selected_country ? (
        <CountryServiceSelector;
          selected_country={selected_country}
          onCountryChange={setSelectedCountry}
        />) : (
        <div className="text - center">;
          <h2 className="text - 2xl font - bold text - white mb - 4">;
            Select a Country for Details;
          </h2>;
          <p className="text - zion - slate - light mb - 6">;
            Choose a country from the options above to see service details and;
            pricing;
          </p>;
        </div>)}
    </div>);

=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      )}
    </div>
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
