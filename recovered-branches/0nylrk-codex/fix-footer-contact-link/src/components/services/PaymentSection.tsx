<<<<<<< HEAD
import { MapPin } from "lucide-react",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
import { MapPin } from "lucide-react";
import { PaymentButton } from "@/components/transactions/PaymentButton";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
interface PaymentSectionProps {
  selectedCountry: CountryPricing}

export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment
  const handlePaymentInitiated = $2;
      description: "You'll be redirected to our secure payment portal momentarily."})
  },
  
      description:
=======
<<<<<<< HEAD
=======
import { toast } from "@/hooks/use-toast";
interface PaymentSectionProps {}
  selectedCountry: CountryPricing;
}

"
      title: "Processing your request",
      description:"

>>>>>>> merged-prs-20250907-203621
        "You'll be redirected to our secure payment portal momentarily.",
    });
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
import { MapPin  } from './lucide-react';
import { PaymentButton  } from '@/components / transactions / PaymentButton';
import { CountryPricing  } from '@/data / onsiteServicePricing';
import { toast  } from '@/hooks / use - toast';

<<<<<<< HEAD
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface PaymentSectionProps {
  selected_country: CountryPricing;
}


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
      title: "Processing your request",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  return (
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
<<<<<<< HEAD
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {selectedCountry.country}
      </h4>
      <p className="text-2xl font-bold text-zion-cyan mb-6">
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton
        amount={selectedCountry.pricePerIncident}
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
      />
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours
        billed separately.
      </p>
    </div>
  )
}
=======

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton;
        amount={selectedCountry.pricePerIncident}
<<<<<<< HEAD

=======
<<<<<<< HEAD
interface PaymentSectionProps {
  selected_country: CountryPricing;
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {MapPin} from "lucide-react";
import {PaymentButton} from "@/components/transactions/PaymentButton";
import {CountryPricing} from "@/data/onsiteServicePricing";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {toast} from "@/hooks/use-toast";
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
<<<<<<< HEAD

        serviceId="it-onsite-service""

        providerId="zion-tech-group"
>>>>>>> origin/chore/fix-lint-and-merge

      </p>
    </div>
  );
}

=======
    toast({;
      title: "Processing your request",;
      description: "You'll be redirected to our secure payment portal momentarily."});
  };
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
    <div className="text-center">;
      <p className="text-zion-slate-light mb-2">Selected Country</p>;
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">;
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />;
<<<<<<< HEAD
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
      />
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours
        billed separately.
      </p>
    </div>

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
export /**
 * PaymentSection - Function description
 */
function PaymentSection() {
  // Handle successful payment;
  const handlePaymentInitiated = () =>: any {
    toast ({
      title: "Processing your request",
      description:;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

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
=======
  }
;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
