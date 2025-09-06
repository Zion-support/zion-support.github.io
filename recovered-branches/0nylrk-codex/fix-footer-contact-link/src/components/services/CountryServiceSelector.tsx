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