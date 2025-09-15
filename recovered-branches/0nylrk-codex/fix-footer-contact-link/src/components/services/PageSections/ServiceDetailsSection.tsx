
<<<<<<< HEAD

import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";

import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",




interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void
}
export function ServiceDetailsSection({
  selectedCountry
  setSelectedCountry
}: ServiceDetailsSectionProps) {
  return (
    <div id="service - details" className="mt - 12">;
      {selected_country ? (
        <CountryServiceSelector;
          selected_country={selected_country}
=======
import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";

interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void;
}

export function ServiceDetailsSection({ selectedCountry, setSelectedCountry }: ServiceDetailsSectionProps) {
  return (
    <div id="service-details" className="mt-12">
      {selectedCountry ? (
        <CountryServiceSelector 
          selectedCountry={selectedCountry}
>>>>>>> origin/auto/autonomy-17186719616
          onCountryChange={setSelectedCountry}
        />
      ) : (
        <div className="text-center">
<<<<<<< HEAD
          <h2 className="text-2xl font-bold text-white mb-4">
            Select a Country for Details
          </h2>
          <p className="text-zion-slate-light mb-6">
            Choose a country from the options above to see service details and
            pricing
          </p>
        </div>



import { CountryPricing } from "@/data/onsiteServicePricing",;
import { CountryServiceSelector } from "../CountryServiceSelector",;
interface ServiceDetailsSectionProps {;
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void;
}
export /**
 * ServiceDetailsSection - Function description
 */
function ServiceDetailsSection() {
  return (
    <div id="service - details" className="mt - 12">;
      {selected_country ? (
        <CountryServiceSelector;
          selected_country={selected_country}
          onCountryChange={setSelectedCountry}

import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";




import { CountryPricing } from "@/data/onsiteServicePricing",;
import { CountryServiceSelector } from "../CountryServiceSelector",;

interface ServiceDetailsSectionProps {;
  selectedCountry: CountryPricing | null,;
  setSelectedCountry: (country: CountryPricing | null) => void;
}

export function ServiceDetailsSection(): any ({ selectedCountry, setSelectedCountry }: ServiceDetailsSectionProps) {;
  return (
    <div id="service-details" className="mt-12">;
      {selectedCountry ? (;
        <CountryServiceSelector
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />;
      ) : (;
        <div className="text-center">;
          <h2 className="text-2xl font-bold text-white mb-4">Select a Country for Details</h2>;
          <p className="text-zion-slate-light mb-6">;
            Choose a country from the options above to see service details and pricing;
          </p>;
        </div>;


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


>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
          <h2 className="text-2xl font-bold text-white mb-4">Select a Country for Details</h2>
          <p className="text-zion-slate-light mb-6">
            Choose a country from the options above to see service details and pricing
          </p>
        </div>
      )}
    </div>
  );
}
>>>>>>> origin/auto/autonomy-17186719616
