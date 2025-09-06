redirectUrl?: string
}
export function PaymentButton({




  amount
  serviceId
  providerId
  buttonText = "Purchase"
  className
  onPaymentInitiated
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()

        description: "Please sign in to make a purchase."}),
import { use_router } from 'next / router';
import {logErrorToProduction} from '@/utils / production_logger';
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
  const router = use_router ();
  const handlePaymentClick = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),
      const return_to = encodeURIComponent (`/checkout?sku=${service_id}`);
      router.push (`/auth / login?return_to=${return_to}`);
      return;

    }
    try {
      setIsProcessing (true);
      // Check condition
if ( {) {
  $2
}
        onPaymentInitiated ();
      }



  amount,
  serviceId,
  providerId,
  buttonText = "Purchase",
  className,
  onPaymentInitiated,
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false),
  const { isAuthenticated, user } = useAuth(),
  const router = useRouter(),
  



  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to make a purchase."}),



      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {


          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}}),
      
      if (error) {
        throw error
      }
      
      // Type assertion needed for mock Supabase client compatibility
      if ((data as any)?.url) {
        // Open Stripe checkout in a new tab
        window.open((data as any).url, '_blank')
      } else {
        throw new Error("No checkout URL returned")
      }
      
    } catch (error) {
      logErrorToProduction('Payment error:', { data: error })
      toast({
        title: "Payment error"
        description: "There was a problem initiating your payment. Please try again."
        variant: "destructive"})
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false)
      }, 1500)


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

      // Type assertion needed for mock Supabase client compatibility;
      if ((data as any)?.url) {;
        // Open Stripe checkout in a new tab;
        window && window.open((data as any).url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      }

    } catch (error) {;
      logErrorToProduction('Payment error:', { data: error }),;
      toast({;
        title: "Payment error",;
        description: "There was a problem initiating your payment. Please try again.",;
        variant: "destructive"});
    } finally {;
      // Reset button state after a short delay;
      setTimeout((,) => {;
        setIsProcessing(false);
      }, 1500);
    }
  };

  return (

        "relative min-w-[120px]",
        className
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

        "relative min-w-[120px]"        className
      ),}>;
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

}catch (error) {';
  logErrorToProduction ('Payment error:', {;
  data: error ;
});
toast ({;

}finally {;
  //Reset button state after a short delay setTimeout ( () => {;
  setIsProcessing (false) ;
}, 1500) ;

};

}> {";
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText) ;
}</Button>) ;
}'"  );

}

}> {"
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText)
}</Button>)
}'"  )
}



;

    <Button;
      on_click={handlePaymentClick}
      disabled={is_processing}
      className={cn (
        "relative min - w-[120px]";        class_name), }
    >;
      {is_processing ? (
        <>;
          <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;
          Processing...;
        </>) : (
        button_text)}
    </Button>);
}catch (error) {';
  logErrorToProduction ('Payment error:', {
  data: error;
});
toast ({
}finally {
  //Reset button state after a short delay set_timeout ( () => {
  setIsProcessing (false);
}, 1500);
}

;
