<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PaymentSection.tsx

<<<<<<< HEAD

import { MapPin } from "lucide-react",
import { PaymentButton } from "@/components/transactions/PaymentButton",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PaymentSection.tsx
import { MapPin  } from './lucide-react';
import { PaymentButton  } from '@/components / transactions / PaymentButton';
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { toast  } from '@/hooks / use - toast';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PaymentSection.tsx

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface PaymentSectionProps {
  selected_country: CountryPricing;
}

<<<<<<< HEAD
  const handlePaymentInitiated = () => {
    toast({

=======

      title: "Processing your request",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { MapPin } from "lucide-react",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";

import { MapPin } from "lucide-react";
import { PaymentButton } from "@/components/transactions/PaymentButton";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";

interface PaymentSectionProps {
  selectedCountry: CountryPricing;
}
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment

  const handlePaymentInitiated = () => {
    toast({
title: "Processing your request"
      description:
        "You'll be redirected to our secure payment portal momentarily."
    });
  }

      description:
        "You'll be redirected to our secure payment portal momentarily.",
    });
  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton
        amount={selectedCountry.pricePerIncident}
<<<<<<< HEAD
=======
========
interface PaymentSectionProps {
  selected_country: CountryPricing;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PaymentSection.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry && selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PaymentSection.tsx
        onPaymentInitiated={handlePaymentInitiated}
<<<<<<< HEAD
=======
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours
        billed separately.
      </p>
    </div>
<<<<<<< HEAD
=======

========
=======
        {selectedCountry.country}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onPaymentInitiated={handlePaymentInitiated}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PaymentSection.tsx
      />;
      <p className="text-xs text-zion-slate-light mt-2">;
        Price includes transportation and first hour onsite. Additional hours billed separately.;
      </p>;
    </div>;
<<<<<<< HEAD
  );
=======

  )

}
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PaymentSection.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
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
=======
  ),;}
 interface PaymentSectionProps {
  selectedCountry: CountryPricing 
}selectedCountry 
}: PaymentSectionProps) {
  //Handle successful payment const handlePaymentInitiated = () => {
  toast ({
  
};
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/services/PaymentSection.tsx
=======

  );
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
