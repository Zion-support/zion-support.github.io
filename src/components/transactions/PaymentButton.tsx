<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
        description: "Please sign in to make a purchase."})
import { useRouter } from 'next/router'
import {logErrorToProduction} from '@/utils/productionLogger'
interface PaymentButtonProps {
  amount: number
  serviceId: string
  providerId: string
  buttonText?: string
  className?: string
  onPaymentInitiated?: () => void

=======

=======
        description: "Please sign in to make a purchase."}),
import { useRouter } from 'next/router'
import {logErrorToProduction} from '@/utils/productionLogger'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,
<<<<<<< HEAD
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  buttonText?: string
  className?: string
  onPaymentInitiated?: () => void
=======
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  redirectUrl?: string
}
export function PaymentButton({
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to make a purchase."})
      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`)
      router.push(`/auth/login?returnTo=${returnTo}`)
      return
    }
    try {
      setIsProcessing (true);
      // Check condition
if ( {) {
  $2
}
        onPaymentInitiated ();
      }
<<<<<<< HEAD
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          amount
          serviceId
          providerId
          userId: user?.id
          successUrl: redirectUrl |window.location.href
          cancelUrl: window.location.href}})
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),

<<<<<<< HEAD
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
<<<<<<< HEAD
          amount,
          serviceId,
=======
<<<<<<< HEAD
          amount
          serviceId
=======
          amount,
          serviceId,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}}),
      
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      if (error) {
        throw error
      }
      // Type assertion needed for mock Supabase client compatibility
      if ((data as any)?.url) {
        // Open Stripe checkout in a new tab
        window.open((data as any).url, '_blank')
      } else {
        throw new Error ("No checkout URL returned");
      }
    } catch (error) {
      logErrorToProduction('Payment error:', { data: error })
      toast({
        title: "Payment error"
        description: "There was a problem initiating your payment. Please try again."
        variant: "destructive"})
    } finally {
      // Reset button state after a short delay;
      set_timeout ((, ) => {
        setIsProcessing (false);
      }, 1500);
    }
  }
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

<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]";        className
      ),}

<<<<<<< HEAD
=======
        "relative min-w-[120px]",
        className
      )}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======

}> {"
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText)
}</Button>)
}'"  )
}
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
}
<<<<<<< HEAD
}> {";
  is_processing ? (<> <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" /> Processing... </>) : (button_text);
}</Button>);
}'"  );
}
=======

;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
