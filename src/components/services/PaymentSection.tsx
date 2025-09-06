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
      </h4>;
      <p className='text - 2xl font - bold text - zion - cyan mb - 6'>;
        ${selected_country.pricePerIncident.to_fixed (2)}
      </p>;
      <PaymentButton;
        amount={selected_country.pricePerIncident}
        service_id='it - onsite - service';
        provider_id='zion - tech - group';
        button_text={`Pay for Service in ${selected_country.country}`}
        className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white w - full py - 6';
        redirect_url='/it - onsite - services?success = true';
        onPaymentInitiated={handlePaymentInitiated}      />;
      <p className='text - xs text - zion - slate - light mt - 2'>;
        Price includes transportation and first hour onsite. Additional hours;
        billed separately.;
      </p>;
    </div>);
}"}