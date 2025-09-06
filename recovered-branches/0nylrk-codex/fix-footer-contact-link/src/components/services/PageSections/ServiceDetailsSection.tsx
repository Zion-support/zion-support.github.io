<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PageSections/ServiceDetailsSection.tsx


<<<<<<< HEAD
<<<<<<< HEAD
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

<<<<<<< HEAD
=======
=======
=======
import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void
}
export function ServiceDetailsSection({
  selectedCountry
  setSelectedCountry
<<<<<<< HEAD
}: ServiceDetailsSectionProps) {
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

      )}
    </div>
  );
}
<<<<<<< HEAD
=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PageSections/ServiceDetailsSection.tsx
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { CountryServiceSelector  } from '../CountryServiceSelector';
interface ServiceDetailsSectionProps {
  selected_country: CountryPricing | null;
=======
import { CountryPricing } from "@/data/onsiteServicePricing",;
import { CountryServiceSelector } from "../CountryServiceSelector",;
interface ServiceDetailsSectionProps {;
  selectedCountry: CountryPricing | null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PageSections/ServiceDetailsSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PageSections/ServiceDetailsSection.tsx
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="text-center">;
          <h2 className="text-2xl font-bold text-white mb-4">Select a Country for Details</h2>;
          <p className="text-zion-slate-light mb-6">;
            Choose a country from the options above to see service details and pricing;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PageSections/ServiceDetailsSection.tsx

========
      )}
    </div>;
<<<<<<< HEAD
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PageSections/ServiceDetailsSection.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      )}
    </div>
  )

}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PageSections/ServiceDetailsSection.tsx
<<<<<<< HEAD
;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PageSections/ServiceDetailsSection.tsx
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      )}
    </div>
  );
}
<<<<<<< HEAD
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      )}
    </div>
  )
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
