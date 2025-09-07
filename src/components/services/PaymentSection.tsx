<<<<<<< HEAD
<<<<<<<< HEAD:src/components/services/PaymentSection.tsx
========
import { MapPin  } from 'lucide-react;
import { PaymentButton  } from @/components/transactions/PaymentButton';
import { CountryPricing  } from '@/data/onsiteServicePricing;
import { toast  } from @/hooks/use-toast';
interface PaymentSectionProps  {selectedCountry: CountryPricing;
export function PaymentSection() {// Handle successful payment;
  const handlePaymentInitiated = null;
  return (<div className='text-center>;
      <p className=text-zion-slate-light mb-2'>Selected Country</p>;
      <h4 className='text-xl font-bold text-white mb-2 flex items-center justify-center>;
        <MapPin className=mr-2 h-5 w-5 text-zion-purple' />;
        {selectedCountry.country}
      </h4>;
      <p className='text-2xl font-bold text-zion-cyan mb-6>;
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>;
      <PaymentButton;
        amount={selectedCountry.pricePerIncident}
        serviceId=it-onsite-service';
        providerId='zion-tech-group;
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className=bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6';
        redirectUrl='/it-onsite-services?success=true;
        onPaymentInitiated={handlePaymentInitiated}      />;
      <p className=text-xs text-zion-slate-light mt-2'>;
        Price includes transportation and first hour onsite. Additional hours;
        billed separately.;
      </p>;
    </div>;
>>>>>>>> merged-prs-20250907-203621:src_disabled_1757239864/components/services/PaymentSection.tsx

import { MapPin } from 'lucide-react'
import { PaymentButton } from "@/components/transactions/PaymentButton;
import { CountryPricing } from @/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast;
=======
<<<<<<< HEAD
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
import { MapPin } from 'lucide-react'
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
interface PaymentSectionProps {
  selectedCountry: CountryPricing

import { MapPin } from 'lucide-react'
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing",
import { toast } from "@/hooks/use-toast",
>>>>>>> merged-prs-20250907-203621
interface PaymentSectionProps {
  selectedCountry: CountryPricing
}

<<<<<<< HEAD
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment
  const handlePaymentInitiated = () => {
    toast({
      title: Processing your request",
      description: "You'll be redirected to our secure payment portal momentarily.})
  }
  
  return (
    <div className=text-center">
      <p className="text-zion-slate-light mb-2>Selected Country</p>
      <h4 className=text-xl font-bold text-white mb-2 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-zion-purple />
        {selectedCountry.country}
      </h4>
      <p className=text-2xl font-bold text-zion-cyan mb-6">
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton 
        amount={selectedCountry.pricePerIncident}
        serviceId="it-onsite-service
        providerId=zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6
        redirectUrl=/it-onsite-services?success=true"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment

  const handlePaymentInitiated = () => {
    toast({
<<<<<<< HEAD
      title: 'Processing your request'
      description:
        "You'll be redirected to our secure payment portal momentarily."
    })
  
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {selectedCountry.country}
      </h4>
    </div>
  )
}"}
      <p className="text-2xl font-bold text-zion-cyan mb-6">
=======


      title: 'Processing your request',


      description:
        "You'll be redirected to our secure payment portal momentarily."
    })
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { MapPin } from 'lucide-react';
import { PaymentButton } from '@/components / transactions / PaymentButton';
import { CountryPricing } from '@/data / onsiteServicePricing';
import { toast } from '@/hooks / use - toast';
interface PaymentSectionProps {
  selected_country: CountryPricing;
export /**
 * PaymentSection - Function description
 */
function PaymentSection() {
  // Handle successful payment;
  const handlePaymentInitiated = () =>: any {
    toast ({
      title: 'Processing your request',
      description:;
        "You'll be redirected to our secure payment portal momentarily.",
    });
  }


import { MapPin } from 'lucide-react';
import { PaymentButton } from '@/components/transactions/PaymentButton';
import { CountryPricing } from '@/data/onsiteServicePricing';
import { toast } from '@/hooks/use-toast';
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;

export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
    toast({;
      title: 'Processing your request',;
      description:;
        "You'll be redirected to our secure payment portal momentarily.",;
    });
  };

  return (

        onPaymentInitiated={handlePaymentInitiated}      />;
      <p className='text-xs text-zion-slate-light mt-2'>;
        Price includes transportation and first hour onsite. Additional hours;
        billed separately.;
      </p>;
    </div>;
  );

}"}


    <div className='text - center'>;
      <p className='text - zion - slate - light mb - 2'>Selected Country</p>;
      <h4 className='text - xl font - bold text - white mb - 2 flex items - center justify - center'>;
        <MapPin className='mr - 2 h - 5 w - 5 text - zion - purple' />;
        {selected_country.country}
<<<<<<< HEAD
      title: 'Processing your request'
      title: 'Processing your request',
      description:
        "You'll be redirected to our secure payment portal momentarily."
    })
  }

      title: "Processing your request",
      description: "You'll be redirected to our secure payment portal momentarily."})
  },
  
  return (
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {selectedCountry.country}
      </h4>
      <p className='text-2xl font-bold text-zion-cyan mb-6'>
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton
        amount={selectedCountry.pricePerIncident}
        serviceId='it-onsite-service'
        providerId='zion-tech-group'
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6'
        redirectUrl='/it-onsite-services?success=true'
        onPaymentInitiated={handlePaymentInitiated}      />
      <p className='text-xs text-zion-slate-light mt-2'>
        Price includes transportation and first hour onsite. Additional hours
        billed separately.
      </p>
    </div>
  )
}"}
    </div>;
  );
}"};
      <p className="text-2xl font-bold text-zion-cyan mb-6">
import { MapPin } from 'lucide-react';
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>;
      <PaymentButton;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        amount={selectedCountry.pricePerIncident}
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
>>>>>>> merged-prs-20250907-203621
        onPaymentInitiated={handlePaymentInitiated}
      />
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours billed separately.
      </p>
    </div>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
