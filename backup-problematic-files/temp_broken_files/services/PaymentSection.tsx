<<<<<<< HEAD

=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
<<<<<<< HEAD

        onPaymentInitiated={handlePaymentInitiated}
      />;
      <p className="text-xs text-zion-slate-light mt-2">;
        Price includes transportation and first hour onsite. Additional hours billed separately.;
      </p>;
    </div>;

=======
 interface PaymentSectionProps {;
  selectedCountry: CountryPricing ;
}selectedCountry ;
}: PaymentSectionProps) {;
  //Handle successful payment const handlePaymentInitiated = () => {;
  toast ({;
  ;
};

}"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
