<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
<<<<<<< HEAD
import { Loader2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
;
=======
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/router',;
import {logErrorToProduction} from '@/utils/productionLogger',;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface PaymentButtonProps {;
  amount:number,;
  serviceId:string,;
  providerId:string,;
  buttonText?:string,;
  className?:string,;
  onPaymentInitiated?:() => void,;
  redirectUrl?:string;
}
;
export function PaymentButton({;
  amount,;
  serviceId,;
  providerId,;
  buttonText = "Purchase",;
  className,;
  onPaymentInitiated,;
  redirectUrl} PaymentButtonProps) {;
  const [isProcessing, setIsProcessing] = useState(false),;
  const { isAuthenticated, user } = useAuth(),;
<<<<<<< HEAD
  const navigate = useNavigate(),;
=======
  const router = useRouter(),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ;
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title:"Authentication required",;
        description:"Please sign in to make a purchase."}),;
<<<<<<< HEAD
      ;
      navigate("/login", { ;
        state:{ from:window.location.pathname } ;
      }),;
=======
;
      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`),;
      router.push(`/auth/login?returnTo=${returnTo}`),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      return,;
    }
    ;
    try {;
      setIsProcessing(true),;
      ;
      if (onPaymentInitiated) {;
        onPaymentInitiated(),;
      }
      ;
      // Call the create-checkout edge function;
      const { data, error } = await supabase.functions.invoke("create-checkout", {;
        body:{;
          amount,;
          serviceId,;
          providerId,;
          userId:user?.id,;
          successUrl:redirectUrl || window.location.href,;
          cancelUrl:window.location.href}}),;
      ;
      if (error) {;
        throw error,;
      }
      ;
<<<<<<< HEAD
      if (data?.url) {;
        // Open Stripe checkout in a new tab;
        window.open(data.url, '_blank'),;
=======
      // Type assertion needed for mock Supabase client compatibility;
      if ((data as any)?.url) {;
        // Open Stripe checkout in a new tab;
        window.open((data as any).url, '_blank'),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      } else {;
        throw new Error("No checkout URL returned"),;
      }
      ;
    } catch (error) {;
<<<<<<< HEAD
      console.error("Payment error:", error),;
=======
      logErrorToProduction('Payment error:', { data:error }),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({;
        title:"Payment error",;
        description:"There was a problem initiating your payment. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false),;
      }, 1500),;
    }
  },;
  ;
  return (;
    <Button;
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(;
        "relative min-w-[120px]",;
        className;
      )}
    >;
      {isProcessing ? (;
        <>;
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
        </>;
      ) :(;
        buttonText;
      )}
    </Button>;
<<<<<<< HEAD
  ),; interface PaymentButtonProps {
=======
  ),; import { ;
  {;
  {;
  Loader2 ;
 } from "lucide-react";
import {;
  {;
  {;
  useRouter ';
}from 'next/router';
import {;
  {;
  {;
  logErrorToProduction ';
}from '@/utils/productionLogger';
interface PaymentButtonProps {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  amount: number;
serviceId: string;
providerId: string;
buttonText?: string;
className?: string;
onPaymentInitiated?: () => void;
<<<<<<< HEAD
redirectUrl?: string 
}export function PaymentButton ({
  amount;
serviceId;
providerId;
buttonText = "Purchase";
className;
onPaymentInitiated;
redirectUrl 
}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState (false);
const {
  isAuthenticated, user 
}= useAuth ();
const navigate = useNavigate ();
if (!isAuthenticated) {
  toast ({
  navigate ("/login", {
  state: {
  from: window.location.pathname 
}
});
return 
}try {
  setIsProcessing (true);
if (onPaymentInitiated) {
  onPaymentInitiated () 
}//Call the create-checkout edge function const {
  data, error 
}= await supabase.functions.invoke ("create-checkout", {
  body: {
=======
redirectUrl?: string ;
}export function PaymentButton ({;
  amount;
serviceId;
providerId;"buttonText = "Purchase";
className;
onPaymentInitiated;
redirectUrl ;
}: PaymentButtonProps) {;
  const [isProcessing,  setIsProcessing] = useState (false);
const { ;
  isAuthenticated, user ;
 } = useAuth ();
const router = useRouter ();
if (!isAuthenticated) {;
  toast ({;
  const returnTo = encodeURIComponent (`/checkout?sku=$ {;
  serviceId ;
}`);
router.push (`/auth/login?returnTo=$ {;
  returnTo ;
}`);
return ;
}try {;
  setIsProcessing (true);
if (onPaymentInitiated) {;
  onPaymentInitiated () ;
}//Call the create-checkout edge function const { ;"  data, error ";" } = await supabase.functions.invoke ("create-checkout", {;
  body: {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  amount;
serviceId;
providerId;
userId: user?.id;
successUrl: redirectUrl || window.location.href;
<<<<<<< HEAD
cancelUrl: window.location.href 
}
});
if (error) {
  throw error 
}if (data?.url) {
  //Open Stripe checkout in a new tab window.open (data.url, 'blank') 
}else {
  
}finally {
  //Reset button state after a short delay setTimeout ( () => {
  setIsProcessing (false) 
}, 1500) 
}
};
return (<Button) 
}> {
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText) 
}</Button>) 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
=======
cancelUrl: window.location.href ;
}
});
if (error) {;
  throw error ;
}//Type assertion needed for mock Supabase client compatibility if ( (data as any) ?.url) {';
  //Open Stripe checkout in a new tab window.open ( (data as any) .url, 'blank') ;
}else {;
  ;
}
}catch (error) {';
  logErrorToProduction ('Payment error:', {;
  data: error ;
});
toast ({;
  ;
}finally {;
  //Reset button state after a short delay setTimeout ( () => {;
  setIsProcessing (false) ;
}, 1500) ;
}
};
return (<Button ) ;"}>{";"  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText) ;
}</Button>) ;"}'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
