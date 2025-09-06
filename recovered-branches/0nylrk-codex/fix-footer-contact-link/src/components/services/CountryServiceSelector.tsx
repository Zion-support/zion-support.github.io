<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountryServiceSelector.tsx

=======


import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import {
  onsiteServicePricing
  CountryPricing
} from "@/data/onsiteServicePricing";
import { CountrySelector } from "./CountrySelector";

import { PaymentSection } from "./PaymentSection";
import { ServiceDetails } from "./ServiceDetails";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null
}
export function CountryServiceSelector({
  onCountryChange
  selectedCountry: initialCountry
<<<<<<< HEAD
=======

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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector
<<<<<<< HEAD
          onCountryChange={onCountryChange |(() => {})}
          selectedCountry={initialCountry |null}
        />

<<<<<<< HEAD
=======
onCountryChange={onCountryChange |(() => {})}
          selectedCountry={initialCountry |null}
        />

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

        

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountryServiceSelector.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountryServiceSelector.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountryServiceSelector.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountryServiceSelector.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/CountryServiceSelector.tsx
=======
);
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
