
import { toast } from "@/hooks/use-toast";
interface PaymentSectionProps {}
  selectedCountry: CountryPricing;
}

"
      title: "Processing your request",
      description:"

        "You'll be redirected to our secure payment portal momentarily.",
    });
  };

import { MapPin  } from './lucide-react';
import { PaymentButton  } from '@/components / transactions / PaymentButton';
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { toast  } from '@/hooks / use - toast';


  return (
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">


        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />

import { MapPin } from \"lucide-react\";
import { PaymentButton } from \"@/components/transactions/PaymentButton\";
import { CountryPricing } from \"@/data/onsiteServicePricing\";
import { toast } from \"@/hooks/use-toast\";
interface PaymentSectionProps {}
  selectedCountry: CountryPricing;}
}

export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment;
const handlePaymentInitiated = (
    toast({
      title: \"Processing your request\",
      description:
        \"You'll be redirected to our secure payment portal momentarily.\",) => {
  return $3;}
}
    });
  };

return (
    <div className=\"text-center\" />
      <p className=\"text-zion-slate-light mb-2\" />Selected Country</p>
      <h4 className=\"text-xl font-bold text-white mb-2 flex items-center justify-center\" />
        <MapPin className=\"mr-2 h-5 w-5 text-zion-purple\" />
        {selectedCountry.country}


import { MapPin } from "lucide-react",;
import { PaymentButton } from "@/components/transactions/PaymentButton",;
import { CountryPricing } from "@/data/onsiteServicePricing",;

import { toast } from "@/hooks/use-toast",;
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;
}
;

        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
        {selectedCountry.country}
      </h4>;"
      <p className="text-2xl font-bold text-zion-cyan mb-6">;

        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton;
        amount={selectedCountry.pricePerIncident}


import {toast} from "@/hooks/use-toast";
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;
}

export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;

        "You'll be redirected to our secure payment portal momentarily.",
origin/cursor/automate-test-improve-and-merge-code-382a

import { MapPin } from "lucide-react";""
import { PaymentButton } from "@/components/transactions/PaymentButton";""
import { CountryPricing } from "@/data/onsiteServicePricing";""
import { toast } from "@/hooks/use-toast";"
interface PaymentSectionProps {
  // TODO: Implement
}
  selectedCountry: CountryPricing;

"
      title: "Processing your request","
      description:"
        "You'll be redirected to our secure payment portal momentarily.","
    });


  return ("
    <div className="text-center">"
</div>"
      <p className="text-zion-slate-light mb-2">Selected Country</p>""
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">"
</h4>"
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />"

      <p className="text-2xl font-bold text-zion-cyan mb-6">"
</p>"
    <div className="text-center">;"
      <p className="text-zion-slate-light mb-2">Selected Country</p>;""
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;"
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;"

      </h4>;"
      <p className="text-2xl font-bold text-zion-cyan mb-6">;"
</p>
      <PaymentButton;
        amount={selectedCountry.pricePerIncident}"
import {MapPin} from "lucide-react";""
import {PaymentButton} from "@/components/transactions/PaymentButton";""
import {CountryPricing} from "@/data/onsiteServicePricing";""
import {toast} from "@/hooks/use-toast";"
interface PaymentSectionProps {;
)
export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;

      </p>;
        amount={selectedCountry && selectedCountry.pricePerIncident}"
        serviceId="it-onsite-service"""
        providerId="zion-tech-group""
        buttonText={`Pay for Service in ${selectedCountry && selectedCountry.country}`}"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"""
        redirectUrl="/it-onsite-services?success=true""
        onPaymentInitiated={handlePaymentInitiated}
      />
      <p className="text-xs text-zion-slate-light mt-2">"
    </div>"`;
pr-12325
</p>
      </p>

    </div>"
