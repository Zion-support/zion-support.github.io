<<<<<<< HEAD
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

import { CountryPricing } from "@/data/onsiteServicePricing";

import { CountryServiceSelector } from "../CountryServiceSelector";
interface ServiceDetailsSectionProps {}
  selectedCountry: CountryPricing | null;

  setSelectedCountry: (country: CountryPricing | null) => void;
}

=======
<<<<<<< HEAD
import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";
interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null,
  setSelectedCountry: (country: CountryPricing | null) => void
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
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

import { CountryPricing } from "@/data/onsiteServicePricing";

<<<<<<< HEAD
import { CountryServiceSelector } from "../CountryServiceSelector";
interface ServiceDetailsSectionProps {}
  selectedCountry: CountryPricing | null;

  setSelectedCountry: (country: CountryPricing | null) => void;
}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ServiceDetailsSection({}
  selectedCountry,
  setSelectedCountry,
}: ServiceDetailsSectionProps) {}
  return ("
    <div id="service-details" className="mt-12">
      {selectedCountry ? (;
        <CountryServiceSelector;
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />
      ) : ("
        <div className="text-center">"
          <h2 className="text-2xl font-bold text-white mb-4">
            Select a Country for Details;
          </h2>"
          <p className="text-zion-slate-light mb-6">
            Choose a country from the options above to see service details and;
            pricing;
<<<<<<< HEAD
          </p>
        </div>

  return (
=======
>>>>>>> merged-prs-20250907-203621
          </p>
        </div>

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void
}
export function ServiceDetailsSection({
  selectedCountry
  setSelectedCountry
<<<<<<< HEAD

import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";
interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void;
}
<<<<<<< HEAD
;
=======

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
import { CountryPricing } from "@/data/onsiteServicePricing",;
import { CountryServiceSelector } from "../CountryServiceSelector",;
interface ServiceDetailsSectionProps {;
  selectedCountry: CountryPricing | null;
=======
}: ServiceDetailsSectionProps) {
=======
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { CountryServiceSelector  } from '../CountryServiceSelector';
interface ServiceDetailsSectionProps {
  selected_country: CountryPricing | null;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  setSelectedCountry: (country: CountryPricing | null) => void;
}
export /**
 * ServiceDetailsSection - Function description
 */
function ServiceDetailsSection() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div id="service - details" className="mt - 12">;

      {selected_country ? (
        <CountryServiceSelector;
          selected_country={selected_country}
          onCountryChange={setSelectedCountry}
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";

import { CountryPricing } from "@/data/onsiteServicePricing",;
import { CountryServiceSelector } from "../CountryServiceSelector",;

interface ServiceDetailsSectionProps {;
  selectedCountry: CountryPricing | null,;
  setSelectedCountry: (country: CountryPricing | null) => void;
}
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="text-center">;
          <h2 className="text-2xl font-bold text-white mb-4">Select a Country for Details</h2>;
          <p className="text-zion-slate-light mb-6">;
            Choose a country from the options above to see service details and pricing;
          </p>;
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      )}
    </div>
  );

}

        />) : (
        <div className="text-center">;
          <h2 className="text - 2xl font - bold text - white mb-4">;
            Select a Country for Details;
          </h2>;

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      )}
    </div>
  );
}

  )

}
<<<<<<< HEAD

;
=======
<<<<<<< HEAD

;
=======
<<<<<<< HEAD
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
  )
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
