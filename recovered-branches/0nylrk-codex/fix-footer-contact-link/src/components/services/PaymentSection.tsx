<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface PaymentSectionProps {
  selected_country: CountryPricing;
}

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
  
=======
import { MapPin } from "lucide-react";
import { PaymentButton } from "@/components/transactions/PaymentButton";
import { CountryPricing } from "@/data/onsiteServicePricing";
=======
import { MapPin } from "lucide-react";"
import { PaymentButton } from "@/components/transactions/PaymentButton";"
import { CountryPricing } from "@/data/onsiteServicePricing";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { MapPin  } from './lucide-react';
import { PaymentButton  } from '@/components / transactions / PaymentButton';
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { toast  } from '@/hooks / use - toast';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
=======
  return ("
    <div className="text-center">"
      <p className="text-zion-slate-light mb-2">Selected Country</p>"
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {selectedCountry.country}
      </h4>"
      <p className="text-2xl font-bold text-zion-cyan mb-6">

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { MapPin } from "lucide-react",;
import { PaymentButton } from "@/components/transactions/PaymentButton",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
=======
"
import { MapPin } from "lucide-react",;"
import { PaymentButton } from "@/components/transactions/PaymentButton",;"
import { CountryPricing } from "@/data/onsiteServicePricing",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "@/hooks/use-toast",;
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;
}
;
<<<<<<< HEAD
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
    toast({;
      title: "Processing your request",
  description: "You'll be redirected to our secure payment portal momentarily."})
};
  return (;
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
=======
export function PaymentSection() { return null; }
      description: "You'll be redirected to our secure payment portal momentarily."});
  };
  return (;"
    <div className="text-center">;"
      <p className="text-zion-slate-light mb-2">Selected Country</p>;"
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
        {selectedCountry.country}
      </h4>;"
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton;
        amount={selectedCountry.pricePerIncident}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import {MapPin} from "lucide-react";
import {PaymentButton} from "@/components/transactions/PaymentButton";
import {CountryPricing} from "@/data/onsiteServicePricing";
=======
======="
import {MapPin} from "lucide-react";"
import {PaymentButton} from "@/components/transactions/PaymentButton";"
import {CountryPricing} from "@/data/onsiteServicePricing";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {toast} from "@/hooks/use-toast";
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;
}

export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
    toast({;"
      title: "Processing your request",;'"
      description: "You'll be redirected to our secure payment portal momentarily."});
  };

  return ("
    <div className="text-center">;"
      <p className="text-zion-slate-light mb-2">Selected Country</p>;"
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;"
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
        {selectedCountry && selectedCountry.country}
      </h4>;"
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
        ${selectedCountry && selectedCountry.pricePerIncident.toFixed(2)}
      </p>;
      <PaymentButton;
        amount={selectedCountry && selectedCountry.pricePerIncident}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        serviceId="it-onsite-service"
=======
=======        serviceId="it-onsite-service"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======        serviceId="it-onsite-service"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a"
        serviceId="it-onsite-service""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry && selectedCountry.country}`}"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6""
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
      />"
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours;
        billed separately.
      </p>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )

}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export /**;
 * PaymentSection - Function description;
 */
function PaymentSection() {}
  // Handle successful payment;
  const handlePaymentInitiated = () =>: any {}
    toast ({"
      title: "Processing your request",
      description:;'"
        "You'll be redirected to our secure payment portal momentarily.",
    });
  }
;
<<<<<<< HEAD
=======



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
