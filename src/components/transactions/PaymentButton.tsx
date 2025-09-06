<<<<<<< HEAD
        description: "Please sign in to make a purchase."}),
import { useRouter } from 'next/router'
import {logErrorToProduction} from '@/utils/productionLogger'
=======
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router',
import {logErrorToProduction} from '@/utils/productionLogger',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,
<<<<<<< HEAD
  buttonText?: string
  className?: string
  onPaymentInitiated?: () => void
=======
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  redirectUrl?: string
}

export function PaymentButton({
<<<<<<< HEAD
  amount
  serviceId
  providerId
  buttonText = "Purchase"
  className
  onPaymentInitiated
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()
=======
  amount,
  serviceId,
  providerId,
  buttonText = "Purchase",
  className,
  onPaymentInitiated,
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false),
  const { isAuthenticated, user } = useAuth(),
  const router = useRouter(),
  
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),

<<<<<<< HEAD
      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`)
      router.push(`/auth/login?returnTo=${returnTo}`)
      return;
    }
    
    try {
      setIsProcessing(true)
      if (onPaymentInitiated) {
        onPaymentInitiated()
=======
      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/router',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface PaymentButtonProps {;
  amount: number,;
  serviceId: string,;
  providerId: string,;
  buttonText?: string,;
  className?: string,;
  onPaymentInitiated?: () => void,;
  redirectUrl?: string;
}
;
export function PaymentButton({;
  amount,;
  serviceId,;
  providerId,;
  buttonText = "Purchase",;
  className,;
  onPaymentInitiated,;
  redirectUrl}: PaymentButtonProps) {;
  const [isProcessing, setIsProcessing] = useState(false),;
  const { isAuthenticated, user } = useAuth(),;
  const router = useRouter(),;
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;
      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`),;
      router.push(`/auth/login?returnTo=${returnTo}`),;
      return;
    }
;
    try {;
      setIsProcessing(true),;
      if (onPaymentInitiated) {;
        onPaymentInitiated();
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
<<<<<<< HEAD
          amount
          serviceId
=======
          amount,
          serviceId,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}}),
      
      if (error) {
        throw error
      }
      
      // Type assertion needed for mock Supabase client compatibility
      if ((data as any)?.url) {
        // Open Stripe checkout in a new tab
        window.open((data as any).url, '_blank')
      } else {
        throw new Error("No checkout URL returned")
      }
      
    } catch (error) {
      logErrorToProduction('Payment error:', { data: error }),
      toast({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"})
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)
<<<<<<< HEAD
    }
  }
  return (
    <Button;
      onClick={handlePaymentClick};
      disabled={isProcessing};
      className={cn(;
        "relative min-w-[120px]";        className
      ),}
=======
;
      // Call the create-checkout edge function;
      const { data, error } = await supabase.functions.invoke("create-checkout", {;
        body: {;
          amount,;
          serviceId,;
          providerId,;
          userId: user?.id,;
          successUrl: redirectUrl || window.location.href,;
          cancelUrl: window.location.href}}),;
      if (error) {;
        throw error;
      }
;
      // Type assertion needed for mock Supabase client compatibility;
      if ((data as any)?.url) {;
        // Open Stripe checkout in a new tab;
        window.open((data as any).url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      }
;
    } catch (error) {;
      logErrorToProduction('Payment error:', { data: error }),;
      toast({;
        title: "Payment error",;
        description: "There was a problem initiating your payment. Please try again.",;
        variant: "destructive"});
    } finally {;
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false);
      }, 1500);
    }
  };
  return (;
    <Button;
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",
        className
      )}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    >
      {isProcessing ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        buttonText
      )}
<<<<<<< HEAD
    </Button>
  )
}catch (error) {'
  logErrorToProduction ('Payment error:', {
  data: error 
})
toast ({
}finally {
  //Reset button state after a short delay setTimeout ( () => {
  setIsProcessing (false) 
}, 1500) 
}
}> {"
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText) 
}</Button>) 
}'"  )
}
;
=======
    </Button>;
  );
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
