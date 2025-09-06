<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { MapPin  } from './lucide-react';
import { PaymentButton  } from '@/components / transactions / PaymentButton';
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { toast  } from '@/hooks / use - toast';

=======
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface PaymentSectionProps {
  selected_country: CountryPricing;
=======
import { MapPin } from "lucide-react",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing",
import { toast } from "@/hooks/use-toast",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import { MapPin } from "lucide-react";
import { PaymentButton } from "@/components/transactions/PaymentButton";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
>>>>>>> main
interface PaymentSectionProps {
  selectedCountry: CountryPricing;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


      title: "Processing your request",
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
      description: "You'll be redirected to our secure payment portal momentarily."});
  };
      description: "You'll be redirected to our secure payment portal momentarily."})
  },
  
=======
      description:
        "You'll be redirected to our secure payment portal momentarily.",
    });
  };

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      title: "Processing your request";
      description: "You'll be redirected to our secure payment portal momentarily."});
  };
  return (;
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
        {selectedCountry.country}
      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton
        amount={selectedCountry.pricePerIncident}
<<<<<<< HEAD
=======
=======
interface PaymentSectionProps {
  selected_country: CountryPricing;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

  return (
=======
  return (

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
<<<<<<< HEAD
        {selectedCountry && selectedCountry.country}
      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
        ${selectedCountry && selectedCountry.pricePerIncident.toFixed(2)}
      </p>;
      <PaymentButton
        amount={selectedCountry && selectedCountry.pricePerIncident}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
<<<<<<< HEAD

      />;
      <p className="text-xs text-zion-slate-light mt-2">;
        Price includes transportation and first hour onsite. Additional hours billed separately.;
      </p>;
    </div>;
=======
      />
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours
        billed separately.
      </p>
    </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
<<<<<<< HEAD
=======
  return (
    <div className="text - center">;
      <p className="text - zion - slate - light mb - 2">Selected Country</p>;
      <h4 className="text - xl font - bold text - white mb - 2 flex items - center justify - center">;
        <MapPin className="mr - 2 h - 5 w - 5 text - zion - purple" />;
        {selected_country.country}
      </h4>;
      <p className="text - 2xl font - bold text - zion - cyan mb - 6">;
        ${selected_country.pricePerIncident.to_fixed (2)}
      </p>;
      <PaymentButton;
        amount={selected_country.pricePerIncident}
        service_id="it - onsite - service";
        provider_id="zion - tech - group";
        button_text={`Pay for Service in ${selected_country.country}`}
        className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white w - full py - 6";
        redirect_url="/it - onsite - services?success = true";
        onPaymentInitiated={handlePaymentInitiated}
      />;
      <p className="text - xs text - zion - slate - light mt - 2">;
        Price includes transportation and first hour onsite. Additional hours;
        billed separately.;
      </p>;
    </div>);
}
  ),;}
 interface PaymentSectionProps {
  selectedCountry: CountryPricing 
}selectedCountry 
}: PaymentSectionProps) {
  //Handle successful payment const handlePaymentInitiated = () => {
  toast ({
  
};
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  );
}
}
;

<<<<<<< HEAD

=======
  )
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
