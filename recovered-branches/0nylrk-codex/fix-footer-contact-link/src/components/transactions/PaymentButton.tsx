<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {useNavigate} from "react-router-dom";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface PaymentButtonProps {;
  amount: number,;
  serviceId: string,;
  providerId: string,;

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface PaymentButtonProps {

  amount: number
  serviceId: string
  providerId: string
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import {useState} from "react";"
import {Button} from "@/components/ui/button";"
import {cn} from "@/lib/utils";"
import {useAuth} from "@/hooks/useAuth";"
import {toast} from "@/hooks/use-toast";"
import {supabase} from "@/integrations/supabase/client";"
import {Loader2} from "lucide-react";"
import {useNavigate} from "react-router-dom";

"
import { useState } from "react","
import { Button } from "@/components/ui/button","
import { cn } from "@/lib/utils","
import { useAuth } from "@/hooks/useAuth","
import { toast } from "@/hooks/use-toast","
import { supabase } from "@/integrations/supabase/client",";
import { Loader2 } from "lucide-react";"
import { useNavigate } from "react-router-dom";
interface PaymentButtonProps {}
  amount: number;
  serviceId: string;
  providerId: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
<<<<<<< HEAD
import { Loader2 } from "lucide-react",
import { useNavigate } from "react-router-dom",

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======

  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  redirectUrl?: string;
}


<<<<<<< HEAD

  amount;
=======
import {useNavigate} from "react-router-dom";  amount;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {useNavigate} from "react-router-dom";  amount;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function PaymentButton(): any ({;

  amount;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  serviceId;
  providerId;
"
  buttonText = "Purchase";
  className;
  onPaymentInitiated;
  redirectUrl}: PaymentButtonProps) {;
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
<<<<<<< HEAD


  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;

      navigate("/login", { ;
        state: { from: window && window.location.pathname } ;

  amount: number
  serviceId: string
  providerId: string
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;"
        title: "Authentication required",;"
        description: "Please sign in to make a purchase."}),;
"
      navigate("/login", { ;
        state: { from: window && window.location.pathname } ;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  amount: number;
  serviceId: string;
  providerId: string;
      });
      return;
    }
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface PaymentButtonProps {
=======

interface PaymentButtonProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      });
      return;
    }
interface PaymentButtonProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======



=======
  redirectUrl?: string
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  redirectUrl?: string
}



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function PaymentButton({;
  amount;
  serviceId;
<<<<<<< HEAD
  providerId;"
  buttonText = "Purchase";
  className;
  onPaymentInitiated;
export function PaymentButton({};
  amount;
  serviceId;
  providerId;
"
  buttonText = "Purchase";
  className;
  onPaymentInitiated;
  redirectUrl}: PaymentButtonProps) {}
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const handlePaymentClick = async () => {}
    if (!isAuthenticated) {}
      toast({"
        title: "Authentication required""
        description: "Please sign in to make a purchase."})"
      navigate("/login", {}
        state: { from: window.location.pathname }
      });
      return;
    }
    try {}
      setIsProcessing(true);
      if (onPaymentInitiated) {}
        onPaymentInitiated()
      }
      // Call the create-checkout edge function"
      const { data, error } = await supabase.functions.invoke("create-checkout", {}
        body: {}
    }
    
    try {}
      setIsProcessing(true);
=======
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


      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      
      if (onPaymentInitiated) {}
        onPaymentInitiated()"
import { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { cn } from "@/lib/utils",;"
import { useAuth } from "@/hooks/useAuth",;"
import { toast } from "@/hooks/use-toast",;"
import { supabase } from "@/integrations/supabase/client",;"
import { Loader2 } from "lucide-react",;"
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
export function PaymentButton() { return null; }
  const { isAuthenticated, user } = useAuth(),;
  const navigate = useNavigate(),;
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;"
        title: "Authentication required",;"
        description: "Please sign in to make a purchase."}),;"
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
<<<<<<< HEAD


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
=======
      // Call the create-checkout edge function"
      const { data, error } = await supabase.functions.invoke("create-checkout", {}
        body: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          amount,
          serviceId,
          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}}),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      if (error) {
=======
            if (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            if (error) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      
      
      if (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        throw error
      }
      if (data?.url) {
        // Open Stripe checkout in a new tab
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        window.open(data.url, '_blank')
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
      });
      return;
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
        window.open(data.url, '_blank')
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from './react';
import { Button } from '@/components / ui / button';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
import { toast } from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
import { Loader2 } from './lucide-react';
<<<<<<< HEAD
=======



      if (error) {}
        throw error;
      }
      if (data?.url) {}
        // Open Stripe checkout in a new tab;
        window.open(data.url, '_blank')


'
import { useState } from './react';'
import { Button } from '@/components / ui / button';'
import { cn } from '@/lib / utils';'
import { use_auth } from '@/hooks / use_auth';'
import { toast } from '@/hooks / use - toast';'
import { supabase } from '@/integrations / supabase / client';'
import { Loader2 } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { use_navigate } from './react-router-dom';
interface PaymentButtonProps {}
=======
import { use_navigate } from './react-router-dom';
interface PaymentButtonProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  amount: number,
  service_id: string,
  provider_id: string,
  button_text?: string;
  class_name?: string;
  onPaymentInitiated?: () => void;
  redirect_url?: string;
}
<<<<<<< HEAD
export /**;
 * PaymentButton - Function description;
 */
function PaymentButton() {}
=======
export /**
 * PaymentButton - Function description
 */
function PaymentButton() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [is_processing, setIsProcessing] = useState (false);
  const { is_authenticated, user } = use_auth ();
  const navigate = use_navigate ();
;
<<<<<<< HEAD
  const handlePaymentClick = async () => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "Please sign in to make a purchase."}),"
      navigate ("/login", {}
=======
  const handlePaymentClick = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),
      navigate ("/login", {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        state: { from: window.location.pathname }
      });
      return;
    }
<<<<<<< HEAD
    try {}
      setIsProcessing (true);
;
      // Check condition;
if ( {) {}
  $2;
}
        onPaymentInitiated ();
      }
      // Call the create - checkout edge function;"
      const { data, error } = await supabase.functions.invoke ("create - checkout", {}
        body: {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          amount;
          service_id;
          provider_id,
          user_id: user?.id,
          success_url: redirect_url || window.location.href,
          cancel_url: window.location.href}}),
<<<<<<< HEAD
      // Check condition;
if ( {) {}
  $2;
}
        throw error;
      }
      // Check condition;
if ( {) {}
  $2;
}
        // Open Stripe checkout in a new tab;'
        window.open (data.url, '_blank');
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      } else {
=======
      } else {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        throw new Error ("No checkout URL returned");
      }
    } catch (error) {}
"
      console.error ("Payment error:", error);
      toast ({"
        title: "Payment error","
        description: "There was a problem initiating your payment. Please try again.","
        variant: "destructive"});

=======
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

      console.error ("Payment error:", error);
      toast ({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"});

    } finally {


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    try {;
      setIsProcessing(true);

      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Reset button state after a short delay
=======
        window.open(data.url, '_blank')      // Reset button state after a short delay
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        window.open(data.url, '_blank')      // Reset button state after a short delay
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      // Reset button state after a short delay
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setTimeout(() => {
=======


      // Reset button state after a short delay;
      setTimeout(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setIsProcessing(false)
      }, 1500)
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn("
        "relative min-w-[120px]";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;

      // Call the create-checkout edge function;"
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
<<<<<<< HEAD
      }      toast({;
        title: "Payment error",,
  description: "There was a problem initiating your payment. Please try again.",;
=======


      if (data?.url) {;
        // Open Stripe checkout in a new tab;'
        window && window.open(data && data.url, '_blank');
      } else {;"
        throw new Error("No checkout URL returned");
      }



      toast({;"
        title: "Payment error",;"
        description: "There was a problem initiating your payment. Please try again.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"});
    } finally {;
<<<<<<< HEAD
<<<<<<< HEAD
      // Reset button state after a short delay;

<<<<<<< HEAD
  return (;
    <Button;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  return (;
    <Button;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn("
        "relative min-w-[120px]",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
      // Reset button state after a short delay;      onClick={handlePaymentClick}
=======
      }

      if (data?.url) {;
        // Open Stripe checkout in a new tab;
        window && window.open(data && data.url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      }

    } catch (error) {;
      console && console.error("Payment error:", error);
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



  return (;
    <Button;
      onClick={handlePaymentClick}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      // Reset button state after a short delay;      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(

        "relative min-w-[120px]"

  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
=======

  return (
    <Button;
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(

        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      )}>;
      {isProcessing ? (;
        <>;"
=======
        className
      )}>;
      {isProcessing ? (;
        <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
        </>;
      ) : (;
        buttonText;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======

    </Button>;
  );
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </Button>;
  );
=======
=======
=======
        className
      )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

    </Button>;
  );

    </Button>
  )
}
    </Button>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </Button>;
  );
=======
    </Button>;
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
    </Button>;
  );
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </Button>;
  );
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
}

    </Button>;
  );

    </Button>;
  );
<<<<<<< HEAD
    </Button>;
  );

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
          <Loader2 className="h - 4 w - 4 mr - 2 animate-spin" />;
          Processing...;
        </>) : (
        button_text)}
    </Button>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======

    </Button>;
  );


}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
import { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { cn } from "@/lib/utils",;"
import { useAuth } from "@/hooks/useAuth",;"
import { toast } from "@/hooks/use-toast",;"
import { supabase } from "@/integrations/supabase/client",;"
import { Loader2 } from "lucide-react",;"
=======

import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { cn } from "@/lib/utils",;
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "@/hooks/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { Loader2 } from "lucide-react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
export function PaymentButton() { return null; }
=======
export function PaymentButton({;
  amount,;
  serviceId,;
  providerId,;
  buttonText = "Purchase",;
  className,;
  onPaymentInitiated,;
  redirectUrl} PaymentButtonProps) {;
  const [isProcessing, setIsProcessing] = useState(false),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { isAuthenticated, user } = useAuth(),;
  const navigate = useNavigate(),;
  ;
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
<<<<<<< HEAD
      toast({;"
        title:"Authentication required",;"
        description:"Please sign in to make a purchase."}),;
      ;"
=======
      toast({;
        title:"Authentication required",;
        description:"Please sign in to make a purchase."}),;
      ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      // Call the create-checkout edge function;"
=======
      // Call the create-checkout edge function;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const { data, error } = await supabase.functions.invoke("create-checkout", {;
        body:{;
          amount,;
          serviceId,;
=======
      className={cn("
        "relative min-w-[120px]";"

      // Call the create-checkout edge function;"
      const { data, error } = await supabase && supabase.functions.invoke("create-checkout", {;"
        body: {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          providerId,;
          userId: user?.id,;
          successUrl: redirectUrl || window && window.location.href,;)
          cancelUrl: window && window.location.href}}),;

      if (error) {;
      }

      if (data?.url) {;
<<<<<<< HEAD
<<<<<<< HEAD
        // Open Stripe checkout in a new tab;'
        window.open(data.url, '_blank'),;
      } else {;"
        throw new Error("No checkout URL returned"),;
      }
      ;
    } catch (error) {;"
      console.error("Payment error:", error),;
      toast({;"
        title:"Payment error",;"
        description:"There was a problem initiating your payment. Please try again.",;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant:"destructive"}),;
=======
        // Open Stripe checkout in a new tab;"
        window && window.open(data && data.url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");"

    } catch (error) {;"
      console && console.error("Payment error:", error);"
        title: "Payment error",;""
        description: "There was a problem initiating your payment. Please try again.",;")"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } finally {;
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false);
      }, 1500);
  };

  return (;
    <Button;
<<<<<<< HEAD
      onClick={handlePaymentClick}
      disabled={isProcessing}
<<<<<<< HEAD
      className={cn(;"
=======
      className={cn(;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        "relative min-w-[120px]",;
        className;
      )}
    >;
      {isProcessing ? (;
<<<<<<< HEAD
        <>;"
=======
        <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
=======



        "relative min-w-[120px]","
      className={cn(
        "relative min-w-[120px]""
  return (
        className;)
      )}>;

        <>;"
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
</Loader2>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </>;
      ) : (;
        buttonText;)
      )}

    </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
  ),; interface PaymentButtonProps {}
=======
  ),; interface PaymentButtonProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  amount: number;
serviceId: string;
providerId: string;
buttonText?: string;
className?: string;
onPaymentInitiated?: () => void;
<<<<<<< HEAD
redirectUrl?: string;
}export function PaymentButton ({};
  amount;
serviceId;
providerId;"
buttonText = "Purchase";
className;
onPaymentInitiated;
redirectUrl;
}: PaymentButtonProps) {}
  const [isProcessing, setIsProcessing] = useState (false);
const {}
  isAuthenticated, user;
}= useAuth ();
const navigate = useNavigate ();
if (!isAuthenticated) {}
  toast ({"
  navigate ("/login", {}
  state: {}
  from: window.location.pathname;
}
});
return;
}try {}
  setIsProcessing (true);
if (onPaymentInitiated) {}
  onPaymentInitiated () 
}//Call the create-checkout edge function const {}
  data, error "
}= await supabase.functions.invoke ("create-checkout", {}
  body: {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  amount;
serviceId;
providerId;
userId: user?.id;
successUrl: redirectUrl || window.location.href;
<<<<<<< HEAD
cancelUrl: window.location.href;
}
});
if (error) {}
  throw error;
}if (data?.url) {'
  //Open Stripe checkout in a new tab window.open (data.url, 'blank') 
}else {}
}finally {}
  //Reset button state after a short delay setTimeout ( () => {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  setIsProcessing (false) 
}, 1500) 
}
};
=======
    </Button>;
    </Button>;
    </Button>;

    </Button>;
    </Button>;

    <Button;
      on_click={handlePaymentClick}
      disabled={is_processing}
      className={cn ("
        "relative min - w-[120px]";")
        class_name)}
    >;

          <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;"
        </>) : ()
        button_text)}
    );
      className={cn(;"
        "relative min-w-[120px]",;"

      ) :(;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
return (<Button) 
<<<<<<< HEAD
}> {"
=======
}> {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText) 
=======
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText)"
    ;"
pr-12325
</Loader2>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}</Button>) 
    </Button>;
  );
    </Button>;
  );
}
;
<<<<<<< HEAD


;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </Button>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
