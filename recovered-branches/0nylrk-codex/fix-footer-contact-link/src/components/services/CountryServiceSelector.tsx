<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import {
  onsiteServicePricing
  CountryPricing
} from "@/data/onsiteServicePricing";
import { CountrySelector } from "./CountrySelector";

import { PaymentSection } from "./PaymentSection";
import { ServiceDetails } from "./ServiceDetails";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import {
=======
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
}: CountryServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          onCountryChange={onCountryChange |(() => {})}
          selectedCountry={initialCountry |null}
        />
<<<<<<< HEAD
        
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


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
}: CountryServiceSelectorProps) {}
  return ("
    <div className="space-y-6">"
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
        <CountrySelector;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          onCountryChange={onCountryChange || (() => {})}
          selectedCountry={initialCountry || null}
        />

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
<<<<<<< HEAD
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {CountrySelector} from "./CountrySelector";
import {PaymentSection} from "./PaymentSection";
import {ServiceDetails} from "./ServiceDetails";

import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { CountrySelector } from "./CountrySelector",;
import { PaymentSection } from "./PaymentSection",;
import { ServiceDetails } from "./ServiceDetails",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
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
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>;

<<<<<<< HEAD
      {initialCountry && <ServiceDetails country={initialCountry && initialCountry.country} />}
    </div>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======



      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
}
;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
}
;

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { CountrySelector } from "./CountrySelector",;
import { PaymentSection } from "./PaymentSection",;
=======
"
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;"
import { CountrySelector } from "./CountrySelector",;"
import { PaymentSection } from "./PaymentSection",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
selectedCountry?: CountryPricing | null;
}export function CountryServiceSelector() { return null; }
  return (<div className="space-y-6" > <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light" > onCountryChange || ( () => {}
=======
selectedCountry?: CountryPricing | null 
}export function CountryServiceSelector ({
  onCountryChange, selectedCountry: initialCountry 
}: CountryServiceSelectorProps) {
  return (<div className="space-y-6" > <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light" > onCountryChange || ( () => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
}
  )
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
