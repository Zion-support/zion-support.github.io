
<<<<<<< HEAD
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

=======
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
import {useNavigate} from "react-router-dom";
interface PaymentButtonProps {;
  amount: number,;
  serviceId: string,;
  providerId: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;
}
<<<<<<< HEAD
export function PaymentButton({
=======

export function PaymentButton(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to make a purchase."})
      navigate("/login", {
        state: { from: window.location.pathname }
=======

  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;

      navigate("/login", { ;
        state: { from: window && window.location.pathname } ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      return;
    }
<<<<<<< HEAD
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
      if (error) {
        throw error
      }
      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank')
      } else {
        throw new Error("No checkout URL returned")
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment error"
        description: "There was a problem initiating your payment. Please try again."
        variant: "destructive"})
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)
    }
  }
=======

    try {;
      setIsProcessing(true);

      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }

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
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false);
      }, 1500);
    }
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
<<<<<<< HEAD
        "relative min-w-[120px]";

=======
        "relative min-w-[120px]"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
}
=======
    </Button>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
