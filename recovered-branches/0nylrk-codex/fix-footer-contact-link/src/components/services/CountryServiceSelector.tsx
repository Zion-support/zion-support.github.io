
<<<<<<< HEAD
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { CountrySelector } from "./CountrySelector",
import { PaymentSection } from "./PaymentSection",
import { ServiceDetails } from "./ServiceDetails",
=======
import { onsiteServicePricing, CountryPricing } from &quot;@/data/onsiteServicePricing&quot;;
import { CountrySelector } from &quot;./CountrySelector&quot;;
import { PaymentSection } from &quot;./PaymentSection&quot;;
import { ServiceDetails } from &quot;./ServiceDetails&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void,
  selectedCountry?: CountryPricing | null
}

export function CountryServiceSelector({ onCountryChange, selectedCountry: initialCountry }: CountryServiceSelectorProps) {
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light&quot;>
        <CountrySelector 
          onCountryChange={onCountryChange || (() => {})} 
          selectedCountry={initialCountry || null} 
        />
        
        {initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>
      
      {initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  )
}
