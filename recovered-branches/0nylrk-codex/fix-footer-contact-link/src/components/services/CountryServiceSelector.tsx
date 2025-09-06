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
}: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector
          onCountryChange={onCountryChange || (() => {})}
          selectedCountry={initialCountry || null}
        />

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
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
