

interface CountryServiceSelectorProps {_onCountryChange?: (_country: CountryPricing | null) => void;
  selectedCountry?: CountryPricing | null;}

export function CountryServiceSelector(_{_onCountryChange, _selectedCountry: initialCountry}: CountryServiceSelectorProps) {_return (_<div className="space-y-6">
      <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
        <CountrySelector 
          onCountryChange={onCountryChange || (() => {})} 
          selectedCountry={_initialCountry || null} 
        />
        
        {_initialCountry && <PaymentSection selectedCountry={initialCountry} />}
      </div>
      
      {_initialCountry && <ServiceDetails country={initialCountry.country} />}
    </div>
  );
}
