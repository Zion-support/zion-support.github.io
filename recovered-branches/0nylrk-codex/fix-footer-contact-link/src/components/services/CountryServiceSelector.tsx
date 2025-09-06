<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";

import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null
}
export function CountryServiceSelector({
  onCountryChange
  selectedCountry: initialCountry
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector
<<<<<<< HEAD
<<<<<<< HEAD
          onCountryChange={onCountryChange |(() => {})}
          selectedCountry={initialCountry |null}
        />


=======
          onCountryChange={onCountryChange || (() => {})}
          selectedCountry={initialCountry || null}
        />
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        


        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>
<<<<<<< HEAD
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>

import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";
interface CountryServiceSelectorProps {;
  onCountryChange?: (country: CountryPricing | null) => void,;
  selectedCountry?: CountryPricing | null;
}

export function CountryServiceSelector(): any ({ onCountryChange, selectedCountry: initialCountry }: CountryServiceSelectorProps) {;
  return (
    <div className="space-y-6">;
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
        <CountrySelector
          onCountryChange={onCountryChange || (() => {})} ;
          selectedCountry={initialCountry || null} ;
        />;

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>;

      {initialCountry && <ServiceDetails country={initialCountry && initialCountry.country} />}
    </div>;
  );
}

=======
  onsiteServicePricing,
  CountryPricing,
} from '@/data / onsiteServicePricing';
import { CountrySelector  } from './CountrySelector';
import { PaymentSection  } from './PaymentSection';
import { ServiceDetails  } from './ServiceDetails';
interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selected_country?: CountryPricing | null;
}
export /**
 * CountryServiceSelector - Function description
 */
function CountryServiceSelector() {
  return (
    <div className="space - y-6">;
      <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light">;
        <CountrySelector;
          onCountryChange={onCountryChange || (() => {})}
          selected_country={initial_country || null}
        />;
        {initial_country && <PaymentSection selected_country={initial_country} />}
      </div>;
      {initial_country && <ServiceDetails country={initial_country.country} />}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
}
;


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
