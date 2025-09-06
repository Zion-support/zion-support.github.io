
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
import {useNavigate} from "react-router-dom";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { cn } from "@/lib/utils",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface PaymentButtonProps {

  amount: number
  serviceId: string
  providerId: string

  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
<<<<<<< HEAD
  redirectUrl?: string;
}
export function PaymentButton({
=======
=======
import { Loader2 } from "lucide-react",
import { useNavigate } from "react-router-dom",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,

  redirectUrl?: string
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function PaymentButton({;
  amount;
  serviceId;
  providerId;
  buttonText = "Purchase";
  className;
  onPaymentInitiated;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function PaymentButton({
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  amount;
  serviceId;
  providerId;

  buttonText = "Purchase";
  className;
  onPaymentInitiated;
<<<<<<< HEAD
  redirectUrl}: PaymentButtonProps) {;
=======
  redirectUrl}: PaymentButtonProps) {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    }
    try {
      setIsProcessing(true);
      if (onPaymentInitiated) {
        onPaymentInitiated()
<<<<<<< HEAD
=======
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
=======
  amount,
  serviceId,
  providerId,
  buttonText = "Purchase",
  className,
  onPaymentInitiated,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
=======
<<<<<<< HEAD
    }
    
    try {
      setIsProcessing(true);
      
      if (onPaymentInitiated) {
        onPaymentInitiated()
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
      if (error) {
        throw error
      }
      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank')
      } else {
        throw new Error ("No checkout URL returned");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment error"
        description: "There was a problem initiating your payment. Please try again."
        variant: "destructive"})
    } finally {
<<<<<<< HEAD
=======


    try {;
      setIsProcessing(true);

      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }

=======
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)
<<<<<<< HEAD
    }
  }
  return (
    <Button
<<<<<<< HEAD
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]";

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      // Reset button state after a short delay;
      set_timeout (() => {
        setIsProcessing (false);
      }, 1500);
    }
<<<<<<< HEAD
  }
  return (
    <Button
=======
  };

  return (;
    <Button;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]";

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
}
=======
<<<<<<< HEAD
    </Button>
  )
<<<<<<< HEAD
}
=======
    </Button>;
  );
=======
=======
    </Button>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
}
