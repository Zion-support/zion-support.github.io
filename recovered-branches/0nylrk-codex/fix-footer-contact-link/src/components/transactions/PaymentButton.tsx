





import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useAuth} from "@/hooks/useAuth";
import {toast} from "@/hooks/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {Loader2} from "lucide-react";
import {useNavigate} from "react-router-dom";




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



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


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





    </Button>;
  );

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a


;
