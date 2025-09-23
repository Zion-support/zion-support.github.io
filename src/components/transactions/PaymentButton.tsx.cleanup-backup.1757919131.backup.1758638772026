<<<<<<< HEAD
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router',
import {logErrorToProduction} from '@/utils/productionLogger',


interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
  redirectUrl?: string
}
=======
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router';
import {logErrorToProduction} from '@/utils/productionLogger';


interface PaymentButtonProps {
  amount: number;
  serviceId: string;
  providerId: string;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;
}

>>>>>>> origin/auto/autonomy-17186719616
export function PaymentButton({
  amount,
  serviceId,
  providerId,
  buttonText = "Purchase",
  className,
  onPaymentInitiated,
<<<<<<< HEAD
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false),
  const { isAuthenticated, user } = useAuth(),
  const router = useRouter(),
=======
  redirectUrl,
}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
>>>>>>> origin/auto/autonomy-17186719616
  
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
<<<<<<< HEAD
        description: "Please sign in to make a purchase."}),

      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return,
    }
    
    try {
      setIsProcessing(true),
      
      if (onPaymentInitiated) {
        onPaymentInitiated(),
=======
        description: "Please sign in to make a purchase.",
      });

      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`);
      router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }
    
    try {
      setIsProcessing(true);
      
      if (onPaymentInitiated) {
        onPaymentInitiated();
>>>>>>> origin/auto/autonomy-17186719616
      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          amount,
          serviceId,
          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
<<<<<<< HEAD
          cancelUrl: window.location.href}}),
      
      if (error) {
        throw error,
=======
          cancelUrl: window.location.href,
        },
      });
      
      if (error) {
        throw error;
>>>>>>> origin/auto/autonomy-17186719616
      }
      
      // Type assertion needed for mock Supabase client compatibility
      if ((data as any)?.url) {
        // Open Stripe checkout in a new tab
<<<<<<< HEAD
        window.open((data as any).url, '_blank'),
      } else {
        throw new Error("No checkout URL returned"),
      }
      
    } catch (error) {
      logErrorToProduction('Payment error:', { data: error }),
      toast({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"}),
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false),
      }, 1500),
    }
  },
=======
        window.open((data as any).url, '_blank');
      } else {
        throw new Error("No checkout URL returned");
      }
      
    } catch (error) {
      logErrorToProduction('Payment error:', { data: error });
      toast({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false);
      }, 1500);
    }
  };
>>>>>>> origin/auto/autonomy-17186719616
  
  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",
        className
      )}
    >
      {isProcessing ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        buttonText
      )}
    </Button>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
