

import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router',
import {logErrorToProduction} from '@/utils/productionLogger',
<<<<<<< HEAD

interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,

  redirectUrl?: string
=======
>>>>>>> interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
  buttonText?: string
  className?: string
  onPaymentInitiated?: () => void
>>>>>>>   redirectUrl?: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export function PaymentButton({

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
<<<<<<< HEAD

=======
  const handlePaymentClick = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),
      const return_to = encodeURIComponent (`/checkout?sku=${service_id}`);
      router.push (`/auth / login?return_to=${return_to}`);
      return;

    }
    try {
      setIsProcessing (true);
      // Check condition
if ( {) {
  $2
}
        onPaymentInitiated ();
      }
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          amount
          serviceId
          providerId
          userId: user?.id
          successUrl: redirectUrl |window.location.href
          cancelUrl: window.location.href}})
      if (error) {
        throw error
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

  const handlePaymentClick = async () => {
=======
  
>>>>>>>   const handlePaymentClick = async () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),

<<<<<<< HEAD
=======
      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`)
      router.push(`/auth/login?returnTo=${returnTo}`)
      return;
    }
    
    try {
      setIsProcessing(true)
      if (onPaymentInitiated) {
        onPaymentInitiated()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

      }
=======
>>>>>>>       }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
<<<<<<< HEAD

          providerId,
=======
          amount,
          serviceId,
          amount
          serviceId
>>>>>>>           providerId,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}}),
      
      if (error) {
        throw error
      }
<<<<<<< HEAD

=======
      
>>>>>>>       // Type assertion needed for mock Supabase client compatibility
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Type assertion needed for mock Supabase client compatibility
>>>>>>>       if ((data as any)?.url) {
        // Open Stripe checkout in a new tab
        window.open((data as any).url, '_blank')

      // Call the create - checkout edge function;
      const { data, error } = await supabase.functions.invoke ("create - checkout", {
        body: {
          amount;
          service_id;
          provider_id,
          user_id: user?.id,
          success_url: redirect_url || window.location.href,
          cancel_url: window.location.href}}),
      // Check condition
if ( {) {
  $2
}
        throw error;
      }
      // Type assertion needed for mock Supabase client compatibility;
      // Check condition
if (?.url) {) {
  $2
}
        // Open Stripe checkout in a new tab;
        window.open ((data as any).url, '_blank');

      } else {
        throw new Error ("No checkout URL returned");
      }
      } else {
        throw new Error("No checkout URL returned")
      }
<<<<<<< HEAD

    } catch (error) {
      logErrorToProduction('Payment error:', { data: error })
      toast({
        title: "Payment error"
        description: "There was a problem initiating your payment. Please try again."
        variant: "destructive"})
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     } catch (error) {

      logErrorToProduction ('Payment error:', { data: error }),
      toast ({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"});

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    } finally {


        description: "Please sign in to make a purchase."}),;
import { useRouter } from 'next/router';
import {logErrorToProduction} from '@/utils/productionLogger';
interface PaymentButtonProps {;
  amount: number,;
  serviceId: string,;
  providerId: string,;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;
}

export function PaymentButton(): any ({;
  amount;
  serviceId;
  providerId;
  buttonText = "Purchase";
  className;
  onPaymentInitiated;
  redirectUrl}: PaymentButtonProps) {;
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;

      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`);
      router && router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }

    try {;
      setIsProcessing(true);

      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }

      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)

;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      // Call the create-checkout edge function;
      const { data, error } = await supabase && supabase.functions.invoke("create-checkout", {;
        body: {;
          amount;
          serviceId;
          providerId,;
          userId: user?.id,;
          successUrl: redirectUrl || window && window.location.href,;
          cancelUrl: window && window.location.href}}),;
      if (error) {;
        throw error;
      }

      // Type assertion needed for mock Supabase client compatibility;
      if ((data as any)?.url) {;
        // Open Stripe checkout in a new tab;
        window && window.open((data as any).url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      }

    } catch (error) {;
      logErrorToProduction('Payment error:', { data: error }),;
      toast({;
        title: "Payment error",;
        description: "There was a problem initiating your payment. Please try again.",;
        variant: "destructive"});
    } finally {;
      // Reset button state after a short delay;
      setTimeout((,) => {;
        setIsProcessing(false);
      }, 1500);
    }
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

        "relative min-w-[120px]",
        className
      )}
<<<<<<< HEAD

=======
>>>>>>>     >
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    >
>>>>>>>       {isProcessing ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        buttonText
      )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    </Button>;
  );
ursor/fix-website-loading-errors-and-merge-6662
    <Button;
      on_click={handlePaymentClick}
      disabled={is_processing}
      className={cn (
        "relative min - w-[120px]";        class_name), }
    >;
      {is_processing ? (
        <>;
          <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;
          Processing...;
        </>) : (
        button_text)}
    </Button>);
}catch (error) {';
  logErrorToProduction ('Payment error:', {
  data: error;
});
toast ({
}finally {
  //Reset button state after a short delay set_timeout ( () => {
  setIsProcessing (false);
}, 1500);
>>>>>>> }

;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
