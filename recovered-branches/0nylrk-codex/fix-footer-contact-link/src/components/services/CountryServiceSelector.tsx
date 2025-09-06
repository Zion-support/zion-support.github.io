<<<<<<< HEAD
import {
  onsiteServicePricing,
  CountryPricing,
} from "@/data/onsiteServicePricing";
import { CountrySelector } from "./CountrySelector";
import { PaymentSection } from "./PaymentSection";
import { ServiceDetails } from "./ServiceDetails";
interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null;
}

export function CountryServiceSelector({
  onCountryChange,
  selectedCountry: initialCountry,
}: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector
          onCountryChange={onCountryChange || (() => {})}
          selectedCountry={initialCountry || null}
        />

=======


import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";

import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
}
;

<<<<<<< HEAD

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
}
;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { CountrySelector } from "./CountrySelector",;
import { PaymentSection } from "./PaymentSection",;
import { ServiceDetails } from "./ServiceDetails",;
;
interface CountryServiceSelectorProps {;
  onCountryChange?:(country:CountryPricing | null) => void,;
  selectedCountry?:CountryPricing | null;
}
;
export function CountryServiceSelector({ onCountryChange, selectedCountry:initialCountry } CountryServiceSelectorProps) {;
  return (;
    <div className="space-y-6">;
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
        <CountrySelector ;
          onCountryChange={onCountryChange || (() => {})} ;
          selectedCountry={initialCountry || null} ;
        />;
        ;
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>;
      ;
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>;
  ),;}
 interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
selectedCountry?: CountryPricing | null 
}export function CountryServiceSelector ({
  onCountryChange, selectedCountry: initialCountry 
}: CountryServiceSelectorProps) {
  return (<div className="space-y-6" > <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light" > onCountryChange || ( () => {
  
}) 
}selectedCountry= {
  initialCountry || null 
}/> {
  initialCountry && <PaymentSection selectedCountry= {
  initialCountry 
}/> 
}</div> {
  initialCountry && <ServiceDetails country= {
  initialCountry.country 
}/> 
}</div>) 
}
);
}
}
;

  );
}
  )
}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
