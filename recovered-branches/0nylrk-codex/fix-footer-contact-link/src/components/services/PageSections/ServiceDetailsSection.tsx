
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
=======

import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

=======
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";
=======
import { CountryPricing } from "@/data/onsiteServicePricing",
import { CountryServiceSelector } from "../CountryServiceSelector",

import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceSelector } from "../CountryServiceSelector";
interface ServiceDetailsSectionProps {
  selectedCountry: CountryPricing | null;
  setSelectedCountry: (country: CountryPricing | null) => void;
}

export function ServiceDetailsSection({
  selectedCountry,
  setSelectedCountry,

=======}: ServiceDetailsSectionProps) {
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
import {CountryPricing} from "@/data/onsiteServicePricing";
import {CountryServiceSelector} from "../CountryServiceSelector";
=======
import { CountryPricing } from "@/data/onsiteServicePricing",;
import { CountryServiceSelector } from "../CountryServiceSelector",;

interface ServiceDetailsSectionProps {;
  selectedCountry: CountryPricing | null,;
  setSelectedCountry: (country: CountryPricing | null) => void;
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ServiceDetailsSection(): any ({ selectedCountry, setSelectedCountry }: ServiceDetailsSectionProps) {;
  return (
    <div id="service-details" className="mt-12">;
      {selectedCountry ? (;
        <CountryServiceSelector
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />;
      ) : (;
}
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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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

      )}
    </div>
  )

}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
