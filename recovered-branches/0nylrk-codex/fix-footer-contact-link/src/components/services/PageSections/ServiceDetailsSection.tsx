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

import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { CountryPricing } from "@/data/onsiteServicePricing";
=======
import { CountryPricing } from "@/data/onsiteServicePricing";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { CountryServiceSelector } from "../CountryServiceSelector";
interface ServiceDetailsSectionProps {}
  selectedCountry: CountryPricing | null;
=======

interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;

import { CountryPricing } from "@/data/onsiteServicePricing";""
import { CountryServiceSelector } from "../CountryServiceSelector";"
interface ServiceDetailsSectionProps {
  // TODO: Implement
}
  selectedCountry: CountryPricing | null;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  setSelectedCountry: (country: CountryPricing | null) => void;
}

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
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div id="service - details" className="mt - 12">;
=======
  return (
    <div id="service - details" className="mt-12">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (
    <div id="service - details" className="mt-12">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
    <div id="service - details" className="mt-12">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {selected_country ? (
        <CountryServiceSelector;
          selected_country={selected_country}
          onCountryChange={setSelectedCountry}
<<<<<<< HEAD
<<<<<<< HEAD
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

      )}
    </div>
  );
}

        />) : (
        <div className="text-center">;
          <h2 className="text - 2xl font - bold text - white mb-4">;
            Select a Country for Details;
          </h2>;
<p className="text - zion - slate - light mb - 6">;
=======
          <p className="text - zion - slate - light mb-6">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            Choose a country from the options above to see service details and;
            pricing;
          </p>;
        </div>)}
    </div>);
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      )}
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  )

}
;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  selectedCountry: CountryPricing | null;,
  setSelectedCountry: (country: CountryPricing | null) => void;

export function ServiceDetailsSection({
  selectedCountry,
  setSelectedCountry,)
}: ServiceDetailsSectionProps) {
  return ("
    <div id="service-details" className="mt-12">"
</div>
        <CountryServiceSelector;
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />
"
        <div className="text-center">"
</div>"
          <h2 className="text-2xl font-bold text-white mb-4">"
</h2>
          </h2>"
          <p className="text-zion-slate-light mb-6">"
</p>
    </div>)"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
