
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
}
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null;
}

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
</PaymentSection>
      </div>


      {initialCountry && <ServiceDetails country={initialCountry.country} />}
</ServiceDetails>
    </div>
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
</PaymentSection>
      </div>

      {initialCountry && <ServiceDetails country={initialCountry.country} />}
</ServiceDetails>
    </div>"
    <div className="space-y-6">;"
</div>"
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;"
</div>
        <CountrySelector ;
          onCountryChange={onCountryChange || (() => {})} ;
</CountrySelector>
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
</PaymentSection>
      </div>;
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
</ServiceDetails>
    </div>;"
  return (<div className="space-y-6" > <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light" > onCountryChange || ( () => {"
</div>
  initialCountry && <PaymentSection selectedCountry= {
  initialCountry;
}/> 
</PaymentSection>
}</div> {
  initialCountry && <ServiceDetails country= {
  initialCountry.country;
}/> 
</ServiceDetails>
}</div>) "

