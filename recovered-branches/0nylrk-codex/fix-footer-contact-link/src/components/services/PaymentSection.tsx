
<<<<<<< HEAD
import { MapPin } from "lucide-react",;
import { PaymentButton } from "@/components/transactions/PaymentButton",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
import { toast } from "@/hooks/use-toast",;
;
interface PaymentSectionProps {;
  selectedCountry:CountryPricing;
}
;
export function PaymentSection({ selectedCountry } PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
    toast({;
      title:"Processing your request",;
      description:"You'll be redirected to our secure payment portal momentarily."}),;
  },;
  ;
  return (;
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
        {selectedCountry.country}
      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
=======
import { MapPin } from "lucide-react",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing",
import { toast } from "@/hooks/use-toast",interface PaymentSectionProps {
  selectedCountry: CountryPricing
}

interface PaymentSectionProps {_selectedCountry: CountryPricing;}

export function PaymentSection(_{_selectedCountry}: PaymentSectionProps) {_// Handle successful payment
  const _handlePaymentInitiated = () => {
    toast({
      title: "Processing your request",
      description: "You'll be redirected to our secure payment portal momentarily."})
  },  };
  
  return (
    <div className=&quot;text-center&quot;>
      <p className=&quot;text-zion-slate-light mb-2&quot;>Selected Country</p>
      <h4 className=&quot;text-xl font-bold text-white mb-2 flex items-center justify-center&quot;>
        <MapPin className=&quot;mr-2 h-5 w-5 text-zion-purple&quot; />
        {selectedCountry.country}
      </h4>
      <p className=&quot;text-2xl font-bold text-zion-cyan mb-6&quot;>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>;
      <PaymentButton ;
        amount={selectedCountry.pricePerIncident}
<<<<<<< HEAD
        serviceId="it-onsite-service";
        providerId="zion-tech-group";
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6";
        redirectUrl="/it-onsite-services?success=true";
        onPaymentInitiated={handlePaymentInitiated}
      />;
      <p className="text-xs text-zion-slate-light mt-2">;
        Price includes transportation and first hour onsite. Additional hours billed separately.;
      </p>;
    </div>;
  ),;
=======
        serviceId=&quot;it-onsite-service&quot;
        providerId=&quot;zion-tech-group&quot;
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6&quot;
        redirectUrl=&quot;/it-onsite-services?success=true&quot;
        onPaymentInitiated={handlePaymentInitiated}      />
      <p className=&quot;text-xs text-zion-slate-light mt-2&quot;>
        Price includes transportation and first hour onsite. Additional hours billed separately.
      </p>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
