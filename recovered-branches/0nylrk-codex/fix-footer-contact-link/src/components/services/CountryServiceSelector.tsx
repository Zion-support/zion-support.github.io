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

          onCountryChange={onCountryChange || (() => {})}
          selectedCountry={initialCountry || null}
        />

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>

        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
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

          onCountryChange={onCountryChange || (() => {})} ;
          selectedCountry={initialCountry || null} ;
        />;
        ;
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>;

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
export function CountryServiceSelector() { return null; }
          onCountryChange={onCountryChange || (() => {})} ;
          selectedCountry={initialCountry || null} ;
        />;
        ;
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>;
      ;
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
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
