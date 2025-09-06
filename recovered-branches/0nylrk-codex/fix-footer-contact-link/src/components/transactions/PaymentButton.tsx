<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx


<<<<<<< HEAD
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
interface PaymentButtonProps {;
  amount: number,;
  serviceId: string,;
  providerId: string,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx


export function PaymentButton(): any ({;

========
export function PaymentButton(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;
      navigate("/login", { ;
        state: { from: window && window.location.pathname } ;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx

      });
      return;
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface PaymentButtonProps {

  amount: number
  serviceId: string
  providerId: string

  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
import { Loader2 } from "lucide-react",
import { useNavigate } from "react-router-dom",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
<<<<<<< HEAD
<<<<<<< HEAD

  redirectUrl?: string
}

<<<<<<< HEAD
export function PaymentButton({

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    
    try {
      setIsProcessing(true);
      
      if (onPaymentInitiated) {
        onPaymentInitiated()
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      if (error) {
        throw error
      }
      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank')
<<<<<<< HEAD
=======
========
      });
      return;
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
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
      } else {
        throw new Error ("No checkout URL returned");
      }
    } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
      console.error ("Payment error:", error);
      toast ({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx

    } finally {


========
    } finally {
      // Reset button state after a short delay;
      set_timeout (() => {
        setIsProcessing (false);
      }, 1500);
    }
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
    try {;
      setIsProcessing(true);
      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
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
      if (data?.url) {;
        // Open Stripe checkout in a new tab;
        window && window.open(data && data.url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      }
    } catch (error) {;
      console && console.error("Payment error:", error);
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx

  return (;
    <Button;

<<<<<<< HEAD
=======
  return (;
    <Button;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(

        "relative min-w-[120px]"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        className
      )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

}
;

=======

    </Button>;
  );
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Button>
  )
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </Button>;
  );
=======
=======
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
    </Button>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/transactions/PaymentButton.tsx
=======
=======
    </Button>;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </Button>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
