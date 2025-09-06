<<<<<<< HEAD
<<<<<<< HEAD

import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

=======
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";
=======
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void
}
export function ServiceDetailsSection({
  selectedCountry
  setSelectedCountry
}: ServiceDetailsSectionProps) {
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { CountryServiceSelector  } from '../CountryServiceSelector';
interface ServiceDetailsSectionProps {
  selected_country: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void;
}
export /**
 * ServiceDetailsSection - Function description
 */
function ServiceDetailsSection() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div id="service - details" className="mt - 12">;
      {selected_country ? (
        <CountryServiceSelector;
          selected_country={selected_country}
          onCountryChange={setSelectedCountry}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="text-center">;
          <h2 className="text-2xl font-bold text-white mb-4">Select a Country for Details</h2>;
          <p className="text-zion-slate-light mb-6">;
            Choose a country from the options above to see service details and pricing;
          </p>;
        </div>;
<<<<<<< HEAD
      )}
    </div>
  );
}
=======
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
=======
      )}
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      )}
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;}
 interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
setSelectedCountry: (country: CountryPricing | null) => void 
}export function ServiceDetailsSection ({
  selectedCountry, setSelectedCountry 
}: ServiceDetailsSectionProps) {
  return (<div id="service-details" className="mt-12" > selectedCountry ? (<CountryServiceSelector selectedCountry= {
  selectedCountry 
}onCountryChange= {
  setSelectedCountry 
}/>) : (<div className="text-center" > <h2 className="text-2xl font-bold text-white mb-4" >Select a Country for Details</h2> <p className="text-zion-slate-light mb-6" > Choose a country from the options above to see service details and pricing </p> </div>) 
}</div>) 
}

      )}
    </div>
  );
}
      )}
    </div>
=======

      )}
    </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  )

}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
