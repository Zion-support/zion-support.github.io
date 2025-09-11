



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
import {useNavigate} from "react-router-dom";
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
  amount: number
  serviceId: string
  providerId: string

      console.error ("Payment error:", error);
      toast ({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"});
==============

    } finally {


    try {;
      setIsProcessing(true);

      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }

=======      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)

==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

    } catch (error) {;
      console && console.error("Payment error:", error);=======

    } catch (error) {;
      console && console.error("Payment error:", error);      toast({;
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

=======
=======
  return (;
    <Button;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        "relative min-w-[120px]"

    </Button>
  )
}
    </Button>;
  );
    </Button>;
  );
=======
=======
}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
