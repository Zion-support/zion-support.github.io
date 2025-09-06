import { MapPin } from 'lucide-react'
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
interface PaymentSectionProps {
  selectedCountry: CountryPricing
xport function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  }

      title: "Processing your request",
      description: "You'll be redirected to our secure payment portal momentarily."})
  },
  
;
