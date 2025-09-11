
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { MapPin  } from './lucide-react';
import { PaymentButton  } from '@/components / transactions / PaymentButton';
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { toast  } from '@/hooks / use - toast';

=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface PaymentSectionProps {
  selected_country: CountryPricing;
}

<<<<<<< HEAD

<<<<<<< HEAD
      title: "Processing your request",


import { MapPin } from "lucide-react",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";

import { MapPin } from "lucide-react";
import { PaymentButton } from "@/components/transactions/PaymentButton";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";

import {MapPin} from "lucide-react";
import {PaymentButton} from "@/components/transactions/PaymentButton";
import {CountryPricing} from "@/data/onsiteServicePricing";
import {toast} from "@/hooks/use-toast";
import { MapPin } from "lucide-react",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
import { CountryPricing } from "@/data/onsiteServicePricing",
import { toast } from "@/hooks/use-toast",
interface PaymentSectionProps {
  selectedCountry: CountryPricing;
}
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handlePaymentInitiated = () => {
    toast({
      title: "Processing your request"
      description:
        "You'll be redirected to our secure payment portal momentarily."
    });
  }

      title: "Processing your request",
      description: "You'll be redirected to our secure payment portal momentarily."});
  };
      description: "You'll be redirected to our secure payment portal momentarily."})
  },
  
<<<<<<< HEAD
=======
      title: "Processing your request",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {selectedCountry.country}
      </h4>
      <p className="text-2xl font-bold text-zion-cyan mb-6">
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton
        amount={selectedCountry.pricePerIncident}
<<<<<<< HEAD
<<<<<<< HEAD
interface PaymentSectionProps {
  selected_country: CountryPricing;
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {MapPin} from "lucide-react";
import {PaymentButton} from "@/components/transactions/PaymentButton";
import {CountryPricing} from "@/data/onsiteServicePricing";
import {toast} from "@/hooks/use-toast";
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
    toast({;
      title: "Processing your request",;
      description: "You'll be redirected to our secure payment portal momentarily."});
  };
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
<<<<<<< HEAD
<<<<<<< HEAD
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry.country}`}
=======
        {selectedCountry && selectedCountry.country}
      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
        ${selectedCountry && selectedCountry.pricePerIncident.toFixed(2)}
      </p>;
      <PaymentButton
        amount={selectedCountry && selectedCountry.pricePerIncident}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry && selectedCountry.country}`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
      />
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours
        billed separately.
      </p>
    </div>
<<<<<<< HEAD

        {selectedCountry.country}
=======
        {selectedCountry && selectedCountry.country}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>;
      <PaymentButton ;
        amount={selectedCountry.pricePerIncident}
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
  );

  )

}
=======
  );
}
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  );
}
}
;

<<<<<<< HEAD
  )
}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
