import {

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
          onCountryChange={onCountryChange || (() => {})}
          selected_country={initial_country || null}
        />;
        {initial_country && <PaymentSection selected_country={initial_country} />}
      </div>;
      {initial_country && <ServiceDetails country={initial_country.country} />}
    </div>);
}

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
}
;


=======

import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { CountrySelector } from "./CountrySelector",;
import { PaymentSection } from "./PaymentSection",;
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { ServiceDetails } from "./ServiceDetails",;
;
interface CountryServiceSelectorProps {;
  onCountryChange?:(country:CountryPricing | null) => void,;
  selectedCountry?:CountryPricing | null;
}
;
<<<<<<< HEAD

export function CountryServiceSelector({ onCountryChange, selectedCountry:initialCountry } CountryServiceSelectorProps) {;
  return (;
    <div className="space-y-6">;
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
        <CountrySelector ;

=======
export function CountryServiceSelector() { return null; }
>>>>>>> origin/cursor/delete-old-data-records-6bba
          onCountryChange={onCountryChange || (() => {})} ;
          selectedCountry={initialCountry || null} ;
        />;
        ;
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>;
      ;
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
<<<<<<< HEAD

    </div>;
  ),;}



=======
    </div>
  )
}
 interface CountryServiceSelectorProps {}
  onCountryChange?: (country: CountryPricing | null) => void;

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
});

}
}
;

  );
}
  )
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
