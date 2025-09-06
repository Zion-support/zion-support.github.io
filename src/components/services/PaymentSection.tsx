<<<<<<< HEAD


export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
=======
import { MapPin } from 'lucide-react'
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
interface PaymentSectionProps {
  selectedCountry: CountryPricing
xport function PaymentSection({ selectedCountry }: PaymentSectionProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Handle successful payment

  const handlePaymentInitiated = () => {
    toast({
<<<<<<< HEAD

=======
      title: 'Processing your request'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      description:
        "You'll be redirected to our secure payment portal momentarily."
    })
  }

      title: "Processing your request",
      description: "You'll be redirected to our secure payment portal momentarily."})
  },
<<<<<<< HEAD

  return (
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {selectedCountry.country}
      </h4>
<<<<<<< HEAD

=======
    </div>
  )
}"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <p className="text-2xl font-bold text-zion-cyan mb-6">
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (

        onPaymentInitiated={handlePaymentInitiated}      />;
      <p className='text-xs text-zion-slate-light mt-2'>;
        Price includes transportation and first hour onsite. Additional hours;
        billed separately.;
      </p>;
    </div>;
  );

}"}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    <div className='text - center'>;
      <p className='text - zion - slate - light mb - 2'>Selected Country</p>;
      <h4 className='text - xl font - bold text - white mb - 2 flex items - center justify - center'>;
        <MapPin className='mr - 2 h - 5 w - 5 text - zion - purple' />;
        {selected_country.country}
      </h4>;
      <p className='text - 2xl font - bold text - zion - cyan mb - 6'>;
        ${selected_country.pricePerIncident.to_fixed (2)}
      </p>;
      <PaymentButton;

        amount={selectedCountry.pricePerIncident}
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
      />
      <p className="text-xs text-zion-slate-light mt-2">
        Price includes transportation and first hour onsite. Additional hours billed separately.
      </p>
    </div>
  )
}
;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
