<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
=======
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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

export function PaymentButton({
  amount,
  serviceId,
  providerId,
  buttonText = &quot;Purchase&quot;,
  className,
  onPaymentInitiated,
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false),
  const { isAuthenticated, user } = useAuth(),
  const router = useRouter(),
=======


interface PaymentButtonProps {_amount: number;
  serviceId: string;
  providerId: string;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;}

export function PaymentButton(_{_amount, _serviceId, _providerId, _buttonText = "Purchase", _className, _onPaymentInitiated, _redirectUrl}: PaymentButtonProps) {_const [isProcessing, _setIsProcessing] = useState(false);
  const { isAuthenticated, _user} = useAuth();
  const _router = useRouter();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handlePaymentClick = async () => {_if (!isAuthenticated) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to make a purchase.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
    }
    
    try {
      setIsProcessing(true),
      
      if (onPaymentInitiated) {
        onPaymentInitiated()
      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke(&quot;create-checkout&quot;, {
        body: {
          amount,
          serviceId,
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
<<<<<<< HEAD
        throw new Error("No checkout URL returned")
=======
        throw new Error(&quot;No checkout URL returned&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
    } catch (error) {
      logErrorToProduction('Payment error:', { data: error }),
      toast({
<<<<<<< HEAD
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Payment error&quot;,
        description: &quot;There was a problem initiating your payment. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)
=======
        title: "Authentication required", _description: "Please sign in to make a purchase."});

      const _returnTo = encodeURIComponent(`/checkout?sku=${_serviceId}`);
      router.push(`/auth/login?returnTo=${_returnTo}`);
      return;
    }
    
    try {_setIsProcessing(true);
      
      if (onPaymentInitiated) {
        onPaymentInitiated();}
      
      // Call the create-checkout edge function
      const {_data, _error} = await supabase.functions.invoke(_"create-checkout", _{_body: {
          amount, _serviceId, _providerId, _userId: user?.id, _successUrl: redirectUrl || window.location.href, _cancelUrl: window.location.href}});
      
      if (error) {_throw error;}
      
      // Type assertion needed for mock Supabase client compatibility
      if ((data as any)?.url) {_// Open Stripe checkout in a new tab
        window.open((data as any).url, _'_blank');} else {_throw new Error("No checkout window.URL returned");}
      
    } catch (error) {_logErrorToProduction('Payment error:', _{ data: error});
      toast({_title: "Payment error", _description: "There was a problem initiating your payment. Please try again.", _variant: "destructive"});
    } finally {_// Reset button state after a short delay
      setTimeout__(() => {
        setIsProcessing(false);}, 1500);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
  return (
    <Button
<<<<<<< HEAD
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        &quot;relative min-w-[120px]&quot;,
        className
=======
      onClick={_handlePaymentClick}
      disabled={_isProcessing}
      className={_cn(
        "relative min-w-[120px]", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    >
      {_isProcessing ? (
        <>
          <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
          Processing...
        </>
      ) : (
        buttonText
      )}
    </Button>
  )
}
