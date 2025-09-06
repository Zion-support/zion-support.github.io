



<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD
interface PaymentButtonProps {;
  amount: number,;
  serviceId: string,;
  providerId: string,;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;
}
<<<<<<< HEAD


export function PaymentButton(): any ({;

=======
export function PaymentButton(): any ({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  amount;
  serviceId;
  providerId;

  buttonText = "Purchase";
  className;
  onPaymentInitiated;
  redirectUrl}: PaymentButtonProps) {;
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;

      navigate("/login", { ;
        state: { from: window && window.location.pathname } ;
<<<<<<< HEAD
=======
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface PaymentButtonProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  amount: number
  serviceId: string
  providerId: string

<<<<<<< HEAD
=======
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
import { Loader2 } from "lucide-react",
import { useNavigate } from "react-router-dom",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
<<<<<<< HEAD

  redirectUrl?: string
}



=======
  redirectUrl?: string
}

export function PaymentButton({;
  amount;
  serviceId;
  providerId;
  buttonText = "Purchase";
  className;
  onPaymentInitiated;
export function PaymentButton({
  amount;
  serviceId;
  providerId;

  buttonText = "Purchase";
  className;
  onPaymentInitiated;
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to make a purchase."})
      navigate("/login", {
        state: { from: window.location.pathname }
      });
      return
    }
    try {
      setIsProcessing(true);
      if (onPaymentInitiated) {
        onPaymentInitiated()
      }
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          amount;
          serviceId;
          providerId
          userId: user?.id
          successUrl: redirectUrl |window.location.href
          cancelUrl: window.location.href}})
  amount,
  serviceId,
  providerId,
  buttonText = "Purchase",
  className,
  onPaymentInitiated,
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false),
  const { isAuthenticated, user } = useAuth(),
  const navigate = useNavigate(),
  
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),
      
      navigate("/login", { 
        state: { from: window.location.pathname } 
      }),
      return
    }
    
    try {
      setIsProcessing(true);
      
      if (onPaymentInitiated) {
        onPaymentInitiated()
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
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
  const navigate = useNavigate(),;
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;
      navigate("/login", {;
        state: { from: window.location.pathname } ;
      }),;
      return;
    }
;
    try {;
      setIsProcessing(true),;
      if (onPaymentInitiated) {;
        onPaymentInitiated();


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          amount,
          serviceId,
          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}}),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      if (error) {
        throw error
      }
      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank')
<<<<<<< HEAD
=======
=======
      });
      return;
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useState } from './react';
import { Button } from '@/components / ui / button';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { Loader2 } from './lucide-react';
import { use_navigate } from './react-router-dom';
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
  const navigate = use_navigate ();
;
  const handlePaymentClick = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),
      navigate ("/login", {
        state: { from: window.location.pathname }
      });
      return;
    }
    try {
      setIsProcessing (true);
;
      // Check condition
if ( {) {
  $2
}
        onPaymentInitiated ();
      }
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
      // Check condition
if ( {) {
  $2
}
        // Open Stripe checkout in a new tab;
        window.open (data.url, '_blank');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } else {
        throw new Error ("No checkout URL returned");
      }
    } catch (error) {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      console.error ("Payment error:", error);
      toast ({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"});
<<<<<<< HEAD

    } finally {


=======
    } finally {
      // Reset button state after a short delay;
      set_timeout (() => {
        setIsProcessing (false);
      }, 1500);
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    try {;
      setIsProcessing(true);

      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }
<<<<<<< HEAD

=======
=======
      } else {
        throw new Error("No checkout URL returned")
      }
    } catch (error) {
      console.error("Payment error:", error),
      toast({
        title: "Payment error"
        description: "There was a problem initiating your payment. Please try again."
        variant: "destructive"})
    } finally {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)

<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

      if (error) {;
        throw error;
      }

=======
      if (error) {;
        throw error;
      }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      if (data?.url) {;
        // Open Stripe checkout in a new tab;
        window && window.open(data && data.url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      }
<<<<<<< HEAD

    } catch (error) {;
      console && console.error("Payment error:", error);
=======
    } catch (error) {;
      console && console.error("Payment error:", error);
    }
  }
  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]";

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
      if (data?.url) {;
        // Open Stripe checkout in a new tab;
        window.open(data.url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      }
;
    } catch (error) {;
      console.error("Payment error:", error),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

  return (;
    <Button;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  return (;
    <Button;
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(

        "relative min-w-[120px]"

<<<<<<< HEAD
=======
  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        className
      )}>;
      {isProcessing ? (;
        <>;
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
        </>;
      ) : (;
        buttonText;
      )}
<<<<<<< HEAD

    </Button>;
  );
=======

    </Button>;
  );
=======
=======
=======
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

    </Button>;
  );

    </Button>
  )
}
    </Button>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </Button>;
  );


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
  return (
    <Button;
      on_click={handlePaymentClick}
      disabled={is_processing}
      className={cn (
        "relative min - w-[120px]";
        class_name)}
    >;
      {is_processing ? (
        <>;
          <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;
          Processing...;
        </>) : (
        button_text)}
    </Button>);
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
;
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
  const navigate = useNavigate(),;
  ;
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title:"Authentication required",;
        description:"Please sign in to make a purchase."}),;
      ;
      navigate("/login", { ;
        state:{ from:window.location.pathname } ;
      }),;
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
      if (data?.url) {;
        // Open Stripe checkout in a new tab;
        window.open(data.url, '_blank'),;
      } else {;
        throw new Error("No checkout URL returned"),;
      }
      ;
    } catch (error) {;
      console.error("Payment error:", error),;
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
  ),; interface PaymentButtonProps {
  amount: number;
serviceId: string;
providerId: string;
buttonText?: string;
className?: string;
onPaymentInitiated?: () => void;
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
  amount;
serviceId;
providerId;
userId: user?.id;
successUrl: redirectUrl || window.location.href;
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
}
    </Button>;
  );
    </Button>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
