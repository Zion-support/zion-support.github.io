
<<<<<<< HEAD
<<<<<<< HEAD
import {
  onsiteServicePricing
  CountryPricing
} from "@/data/onsiteServicePricing";
import { CountrySelector } from "./CountrySelector";

import { PaymentSection } from "./PaymentSection";
import { ServiceDetails } from "./ServiceDetails";
=======
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null
}
export function CountryServiceSelector({
  onCountryChange
  selectedCountry: initialCountry
}: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector
          onCountryChange={onCountryChange |(() => {})}
          selectedCountry={initialCountry |null}
        />
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { CountrySelector } from "./CountrySelector",;
import { PaymentSection } from "./PaymentSection",;
import { ServiceDetails } from "./ServiceDetails",;
interface CountryServiceSelectorProps {;
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null;
}
;
export function CountryServiceSelector({ onCountryChange, selectedCountry: initialCountry }: CountryServiceSelectorProps) {;
  return (;
    <div className="space-y-6">;
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
        <CountrySelector;
          onCountryChange={onCountryChange || (() => {})} ;
          selectedCountry={initialCountry || null} ;
        />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
<<<<<<< HEAD
  );
}
=======
  )
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
