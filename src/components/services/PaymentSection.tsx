
<<<<<<< HEAD
import { MapPin } from 'lucide-react'
<<<<<<< HEAD
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing",
import { toast } from "@/hooks/use-toast",
=======
import { PaymentButton } from &quot;@/components/transactions/PaymentButton&quot;;
import { CountryPricing } from &quot;@/data/onsiteServicePricing&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PaymentSectionProps {
  selectedCountry: CountryPricing
}
=======

interface PaymentSectionProps {_selectedCountry: CountryPricing;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function PaymentSection(_{_selectedCountry}: PaymentSectionProps) {_// Handle successful payment
  const _handlePaymentInitiated = () => {
    toast({
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Processing your request",
      description: "You'll be redirected to our secure payment portal momentarily."})
  },
=======
      title: &quot;Processing your request&quot;,
      description: &quot;You'll be redirected to our secure payment portal momentarily.&quot;});
=======
      title: "Processing your request", _description: "You'll be redirected to our secure payment portal momentarily."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
<<<<<<< HEAD
    <div className=&quot;text-center&quot;>
      <p className=&quot;text-zion-slate-light mb-2&quot;>Selected Country</p>
      <h4 className=&quot;text-xl font-bold text-white mb-2 flex items-center justify-center&quot;>
        <MapPin className=&quot;mr-2 h-5 w-5 text-zion-purple&quot; />
        {selectedCountry.country}
      </h4>
      <p className=&quot;text-2xl font-bold text-zion-cyan mb-6&quot;>
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton 
        amount={selectedCountry.pricePerIncident}
        serviceId=&quot;it-onsite-service&quot;
        providerId=&quot;zion-tech-group&quot;
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6&quot;
        redirectUrl=&quot;/it-onsite-services?success=true&quot;
        onPaymentInitiated={handlePaymentInitiated}
=======
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {_selectedCountry.country}
      </h4>
      <p className="text-2xl font-bold text-zion-cyan mb-6">
        ${_selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton 
        amount={_selectedCountry.pricePerIncident}
        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={_`Pay for Service in ${selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={_handlePaymentInitiated}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      <p className=&quot;text-xs text-zion-slate-light mt-2&quot;>
        Price includes transportation and first hour onsite. Additional hours billed separately.
      </p>
    </div>
  )
}
