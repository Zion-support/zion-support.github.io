

interface CountryServiceSelectorProps {
  onCountryChange?: (country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null
}
export function CountryServiceSelector({
  onCountryChange
  selectedCountry: initialCountry


  return (
    <div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector


      {initialCountry && <ServiceDetails country={initialCountry && initialCountry.country} />}
    </div>;
  );
}
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

  )
}
;



export function CountryServiceSelector({ onCountryChange, selectedCountry:initialCountry } CountryServiceSelectorProps) {;
  return (;
    <div className="space-y-6">;
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
        <CountrySelector ;


    </div>;
  ),;}



