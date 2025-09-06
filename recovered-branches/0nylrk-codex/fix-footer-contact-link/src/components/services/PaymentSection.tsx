<<<<<<< HEAD
import { MapPin } from "lucide-react";
import { PaymentButton } from "@/components/transactions/PaymentButton";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
interface PaymentSectionProps {
  selectedCountry: CountryPricing;
}


      title: "Processing your request",
      description:
        "You'll be redirected to our secure payment portal momentarily.",
    });
  };

=======
import { MapPin  } from './lucide-react';
import { PaymentButton  } from '@/components / transactions / PaymentButton';
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { toast  } from '@/hooks / use - toast';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {selectedCountry.country}
      </h4>
      <p className="text-2xl font-bold text-zion-cyan mb-6">

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { MapPin } from "lucide-react",;
import { PaymentButton } from "@/components/transactions/PaymentButton",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
import { toast } from "@/hooks/use-toast",;
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;
}
;
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
    toast({;
<<<<<<< HEAD
      title: "Processing your request";
      description: "You'll be redirected to our secure payment portal momentarily."});
  };
=======
      title: "Processing your request",
  description: "You'll be redirected to our secure payment portal momentarily."})
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (;
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
        {selectedCountry.country}
      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton
        amount={selectedCountry.pricePerIncident}
<<<<<<< HEAD
import {MapPin} from "lucide-react";
import {PaymentButton} from "@/components/transactions/PaymentButton";
import {CountryPricing} from "@/data/onsiteServicePricing";
import {toast} from "@/hooks/use-toast";
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;
}

export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
    toast({;
      title: "Processing your request",;
      description: "You'll be redirected to our secure payment portal momentarily."});
  };

  return (
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
        {selectedCountry && selectedCountry.country}
      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
        ${selectedCountry && selectedCountry.pricePerIncident.toFixed(2)}
      </p>;
      <PaymentButton
        amount={selectedCountry && selectedCountry.pricePerIncident}
        serviceId="it-onsite-service"
=======
=======        serviceId="it-onsite-service"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry && selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
      />
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours
        billed separately.
      </p>
    </div>
  );
}
<<<<<<< HEAD
export /**
 * PaymentSection - Function description
 */
function PaymentSection() {
  // Handle successful payment;
  const handlePaymentInitiated = () =>: any {
    toast ({
      title: "Processing your request",
      description:;
        "You'll be redirected to our secure payment portal momentarily.",
    });
  }
;



=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
