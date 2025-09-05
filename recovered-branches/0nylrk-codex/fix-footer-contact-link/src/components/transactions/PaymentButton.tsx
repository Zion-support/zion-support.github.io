

interface PaymentButtonProps {_amount: number;
  serviceId: string;
  providerId: string;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;}

export function PaymentButton(_{_amount, _serviceId, _providerId, _buttonText = "Purchase", _className, _onPaymentInitiated, _redirectUrl}: PaymentButtonProps) {_const [isProcessing, _setIsProcessing] = useState(false);
  const { isAuthenticated, _user} = useAuth();
  const _navigate = useNavigate();
  
  const _handlePaymentClick = async () => {_if (!isAuthenticated) {
      toast({
        title: "Authentication required", _description: "Please sign in to make a purchase."});
      
      navigate("/login", {_state: { from: window.location.pathname} 
      });
      return;
    }
    
    try {_setIsProcessing(true);
      
      if (onPaymentInitiated) {
        onPaymentInitiated();}
      
      // Call the create-checkout edge function
      const {_data, _error} = await supabase.functions.invoke(_"create-checkout", _{_body: {
          amount, _serviceId, _providerId, _userId: user?.id, _successUrl: redirectUrl || window.location.href, _cancelUrl: window.location.href}});
      
      if (error) {_throw error;}
      
      if (data?.url) {_// Open Stripe checkout in a new tab
        window.open(data.url, _'_blank');} else {_throw new Error("No checkout window.URL returned");}
      
    } catch (error) {_toast({
        title: "Payment error", _description: "There was a problem initiating your payment. Please try again.", _variant: "destructive"});
    } finally {_// Reset button state after a short delay
      setTimeout__(() => {
        setIsProcessing(false);}, 1500);
    }
  };
  
  return (
    <Button
      onClick={_handlePaymentClick}
      disabled={_isProcessing}
      className={_cn(
        "relative min-w-[120px]", _className
      )}
    >
      {_isProcessing ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        buttonText
      )}
    </Button>
  );
}
