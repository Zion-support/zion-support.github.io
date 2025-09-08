

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
import {useNavigate} from "react-router-dom";  amount;
  serviceId;
  providerId;
=======


  serviceId;
  providerId;
"
>>>>>>> origin/cursor/delete-old-data-records-6bba

  buttonText = "Purchase";
  className;
  onPaymentInitiated;
  redirectUrl}: PaymentButtonProps) {;
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  amount: number
  serviceId: string
  providerId: string
      
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
        window.open(data.url, '_blank')      // Reset button state after a short delay
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

      if (error) {;
        throw error;
      }      toast({;
        title: "Payment error",,
  description: "There was a problem initiating your payment. Please try again.",;
        variant: "destructive"});
    } finally {;
      // Reset button state after a short delay;      onClick={handlePaymentClick}
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

    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]"
    </Button>;
  );
    </Button>;
  );
}
}

    </Button>;
  );

    </Button>;
  );
    </Button>;
  );
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
