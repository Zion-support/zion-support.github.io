

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";



import { PaymentSection } from "./PaymentSection";
import { ServiceDetails } from "./ServiceDetails";
=======
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null
}
export function CountryServiceSelector({
  onCountryChange
  selectedCountry: initialCountry
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

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector
        
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
=======
          onCountryChange={onCountryChange |(() => {})}
          selectedCountry={initialCountry |null}
        />

=======
          onCountryChange={onCountryChange |(() => {})}
          selectedCountry={initialCountry |null}
        />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        


        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";
interface CountryServiceSelectorProps {;
  onCountryChange?: (country: CountryPricing | null) => void,;
  selectedCountry?: CountryPricing | null;
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======  onsiteServicePricing,
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
