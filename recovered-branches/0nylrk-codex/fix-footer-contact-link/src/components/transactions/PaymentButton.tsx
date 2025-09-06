



<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
import {useNavigate} from "react-router-dom";
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
interface PaymentButtonProps {;
  amount: number,;
  serviceId: string,;
  providerId: string,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
  const navigate = useNavigate();


  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;

      navigate("/login", { ;
        state: { from: window && window.location.pathname } ;

      });
      return;
    }

<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

      console.error ("Payment error:", error);
      toast ({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"});

    } finally {


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


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false);
      }, 1500);
    }
  };

  return (;
    <Button;


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    </Button>;
  );
=======
=======
    </Button>;
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    </Button>;
  );

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
;
