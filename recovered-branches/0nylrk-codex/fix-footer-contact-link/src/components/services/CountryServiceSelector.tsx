
import {
  onsiteServicePricing
  CountryPricing
} from "@/data/onsiteServicePricing";
import { CountrySelector } from "./CountrySelector";

import { PaymentSection } from "./PaymentSection";
import { ServiceDetails } from "./ServiceDetails";

import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";

import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",
interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null
}
export function CountryServiceSelector({
  onCountryChange
  selectedCountry: initialCountry
import {
import {}
  onsiteServicePricing,
  CountryPricing,;
} from "@/data/onsiteServicePricing";"
import { CountrySelector } from "./CountrySelector";"
import { PaymentSection } from "./PaymentSection";"
import { ServiceDetails } from "./ServiceDetails";
interface CountryServiceSelectorProps {}
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null;
}

export function CountryServiceSelector({}
  onCountryChange,
  selectedCountry: initialCountry,
}: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector
          onCountryChange={onCountryChange |(() => {})}
          selectedCountry={initialCountry |null}
        />

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
          onCountryChange={onCountryChange || (() => {})}
          selectedCountry={initialCountry || null}
        />

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

import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";

import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",

import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { CountrySelector } from "./CountrySelector",;
import { PaymentSection } from "./PaymentSection",;
import { ServiceDetails } from "./ServiceDetails",;
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
{initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>;

{initialCountry && <ServiceDetails country={initialCountry && initialCountry.country} />}
    </div>;
  );
}
;

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
}
;

import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { CountrySelector } from "./CountrySelector",;
import { PaymentSection } from "./PaymentSection",;
"
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;"
import { CountrySelector } from "./CountrySelector",;"
import { PaymentSection } from "./PaymentSection",;"
import { ServiceDetails } from "./ServiceDetails",;
;
interface CountryServiceSelectorProps {;
  onCountryChange?:(country:CountryPricing | null) => void,;
  selectedCountry?:CountryPricing | null;
}
;
export function CountryServiceSelector() { return null; }
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
 interface CountryServiceSelectorProps {}
  onCountryChange?: (country: CountryPricing | null) => void;
selectedCountry?: CountryPricing | null;
}export function CountryServiceSelector() { return null; }
  return (<div className="space-y-6" > <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light" > onCountryChange || ( () => {}
}) 
}selectedCountry= {}
  initialCountry || null;
}/> {}
  initialCountry && <PaymentSection selectedCountry= {}
  initialCountry;
}/> 
}</div> {}
  initialCountry && <ServiceDetails country= {}
  initialCountry.country;
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

"
import {

  // TODO: Implement
}
  onsiteServicePricing,
  CountryPricing,
} from "@/data/onsiteServicePricing";""
import { CountrySelector } from "./CountrySelector";""
import { PaymentSection } from "./PaymentSection";""
import { ServiceDetails } from "./ServiceDetails";"
interface CountryServiceSelectorProps {
  // TODO: Implement
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null;

export function CountryServiceSelector({
  onCountryChange,
  selectedCountry: initialCountry,)
}: CountryServiceSelectorProps) {
  return ("
    <div className="space-y-6">"
</div>"
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">"
</div>
        <CountrySelector;)
          onCountryChange={onCountryChange || (() => {})}
</CountrySelector>

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}

      {initialCountry && <ServiceDetails country={initialCountry.country} />}

    <div className="space-y-6">;"
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;"
        <CountrySelector ;
          onCountryChange={onCountryChange || (() => {})} ;

      </div>;

    </div>;"
  return (<div className="space-y-6" > <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light" > onCountryChange || ( () => {"
  initialCountry && <PaymentSection selectedCountry= {
  initialCountry;
}/> 

}</div> {
  initialCountry && <ServiceDetails country= {
  initialCountry.country;

}</div>) "
pr-12325

