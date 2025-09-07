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

  redirectUrl?: string;
}


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


  amount: number;
  serviceId: string;
  providerId: string;
      });
      return;
    }


  amount: number,
  serviceId: string,
  providerId: string,
  buttonText?: string,
  className?: string,
  onPaymentInitiated?: () => void,
      return
    }
    
    try {
      setIsProcessing($2);
      if (onPaymentInitiated) {
        onPaymentInitiated()
      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke($2);
      if (error) {

export function PaymentButton({;
  amount;
  serviceId;

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
        title: "Authentication required","
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

      }

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

      console.error ("Payment error:", error);
      toast ({"
        title: "Payment error","
        description: "There was a problem initiating your payment. Please try again.","
        variant: "destructive"});


    try {;
      setIsProcessing(true);
      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }
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
      // Reset button state after a short delay

      setTimeout(() => {

        setIsProcessing(false)
      }, 1500)
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn("
        "relative min-w-[120px]";


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

        variant: "destructive"});
    } finally {;

      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn("
        "relative min-w-[120px]",

      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",

      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(

        "relative min-w-[120px]"

      if (data?.url) {;
        // Open Stripe checkout in a new tab;
        window && window.open(data && data.url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      }
    } catch (error) {;
      console && console.error("Payment error:", error);
    }
  }
  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(

        variant: "destructive"});
    } finally {;

      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn("
        "relative min-w-[120px]",

      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]",


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


        className

      )}>;
      {isProcessing ? (;
        <>;"

          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
        </>;
      ) : (;
        buttonText;
      )}
        className

      )}>;
      {isProcessing ? (;
        <>;"

          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
        </>;
      ) : (;
        buttonText;
      )}

    </Button>;
  );

    >
      {isProcessing ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        buttonText
      )}


  const { isAuthenticated, user } = useAuth(),;
  const navigate = useNavigate(),;
  ;
  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;


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


      const { data, error } = await supabase.functions.invoke("create-checkout", {;
        body:{;
          amount,;
          serviceId,;


          providerId,;
          userId: user?.id,;
          successUrl: redirectUrl || window && window.location.href,;)
          cancelUrl: window && window.location.href}}),;

      if (error) {;
      }

      if (data?.url) {;

        variant:"destructive"}),;

    } finally {;
      // Reset button state after a short delay;
      setTimeout(() => {;
        setIsProcessing(false);
      }, 1500);
  };

  return (;
    <Button;


        "relative min-w-[120px]",;
        className;
      )}
    >;
      {isProcessing ? (;


          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;

        </>;
      ) : (;
        buttonText;)
      )}

    </Button>;


  amount: number;
serviceId: string;
providerId: string;
buttonText?: string;
className?: string;
onPaymentInitiated?: () => void;


  amount;
serviceId;
providerId;
userId: user?.id;
successUrl: redirectUrl || window.location.href;


  setIsProcessing (false) 
}, 1500) 
}
};


return (<Button) 

  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText) 

}</Button>) 

    </Button>;
  );
    </Button>;
  );
}

;
