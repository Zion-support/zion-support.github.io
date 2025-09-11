




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

  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
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

interface PaymentButtonProps {
  amount: number,
  serviceId: string,
  providerId: string,
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
  redirectUrl?: string
}



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
=======
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

=======
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)


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
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false);
      }, 1500);
    }
  };

  return (;
    <Button;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

    </Button>;
  );
=======

    </Button>;
  );
=======
=======
    </Button>;
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
