<<<<<<< HEAD
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
  amount: number,
  serviceId: string,
  providerId: string,
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
  buttonText?: string
  className?: string
  onPaymentInitiated?: () => void

        description: "Please sign in to make a purchase."}),
import { useRouter } from 'next/router'
import {logErrorToProduction} from '@/utils/productionLogger'
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
  buttonText?: string
  className?: string
  onPaymentInitiated?: () => void
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
  redirectUrl?: string
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
redirectUrl?: string
}
export function PaymentButton({

<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

        description: "Please sign in to make a purchase."}),
import { use_router } from 'next / router';
import {logErrorToProduction} from '@/utils / production_logger';
interface PaymentButtonProps {
  amount: number,
  service_id: string,
  provider_id: string,
  button_text?: string;
  class_name?: string;
  onPaymentInitiated?: () => void;
  redirect_url?: string;
}
export /**
 * PaymentButton - Function description
 */
function PaymentButton() {
  const [is_processing, setIsProcessing] = useState (false);
  const { is_authenticated, user } = use_auth ();
  const router = use_router ();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
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
      setIsProcessing(true)
      if (onPaymentInitiated) {
        onPaymentInitiated()
=======
    }
    try {
      setIsProcessing (true);
      // Check condition
if ( {) {
  $2
}
        onPaymentInitiated ();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }



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
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),

      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`)
      router.push(`/auth/login?returnTo=${returnTo}`)
      return;
    }
    
    try {
      setIsProcessing(true)
      if (onPaymentInitiated) {
        onPaymentInitiated()
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
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          amount,
          serviceId,
          amount
          serviceId
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}}),
      
      if (error) {
        throw error
      }
      
      // Type assertion needed for mock Supabase client compatibility
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
      

    } catch (error) {
      logErrorToProduction('Payment error:', { data: error })
  
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
redirectUrl?: string
}
export function PaymentButton({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
<<<<<<< HEAD
          amount,
          serviceId,
<<<<<<< HEAD
          amount
          serviceId
          amount,
          serviceId,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      logErrorToProduction('Payment error:', { data: error })
      toast({
        title: "Payment error"
        description: "There was a problem initiating your payment. Please try again."
        variant: "destructive"})
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
<<<<<<< HEAD
<<<<<<< HEAD
      }, 1500)
    }
  }
  return (
    <Button;
      onClick={handlePaymentClick};
      disabled={isProcessing};
      className={cn(;
        "relative min-w-[120px]";        className
      ),}

      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)

;

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
=======
      }, 1500)


;
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {;
      logErrorToProduction('Payment error:', { data: error }),;
      toast({;
        title: "Payment error",;
        description: "There was a problem initiating your payment. Please try again.",;
        variant: "destructive"});
    } finally {;
      // Reset button state after a short delay;
<<<<<<< HEAD
      setTimeout(() => {;
=======
      setTimeout((,) => {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setIsProcessing(false);
      }, 1500);
    }
  };
<<<<<<< HEAD
  return (;
    <Button;
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",
        className
      )}
ursor/fix-website-loading-errors-and-merge-6662


    >
=======

  return (

        "relative min-w-[120px]",
        className
      )}



    >
      {isProcessing ? (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        buttonText
      )}
<<<<<<< HEAD
=======

        "relative min-w-[120px]"        className
      ),}>;
      {isProcessing ? (;
        <>;
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
        </>;
      ) : (;
        buttonText;
      )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </Button>;
  );

}catch (error) {';
  logErrorToProduction ('Payment error:', {;
  data: error ;
});
toast ({;

}finally {;
  //Reset button state after a short delay setTimeout ( () => {;
  setIsProcessing (false) ;
}, 1500) ;

};

}> {";
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText) ;
}</Button>) ;
}'"  );

}

}> {"
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText)
}</Button>)
}'"  )
}



;

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
<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
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
    </Button>;
  );
}
;
;
=======
      }, 1500)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
