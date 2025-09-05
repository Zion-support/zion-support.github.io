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
  
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
;
    try {;
      setIsProcessing(true),;
      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }
<<<<<<< HEAD
      
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  };
  return (;
    <Button;
      onClick={handlePaymentClick}
      disabled={isProcessing}
<<<<<<< HEAD
      className={cn(
        &quot;relative min-w-[120px]&quot;,
        className
      )}
    >
      {isProcessing ? (
        <>
          <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
          Processing...
        </>
      ) : (
        buttonText
=======
      className={cn(;
        "relative min-w-[120px]";
        className;
      )}
    >;
      {isProcessing ? (;
        <>;
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
        </>;
      ) : (;
        buttonText;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
    </Button>;
  );
}
;