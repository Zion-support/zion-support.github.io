
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Loader2 } from &quot;lucide-react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;

interface PaymentButtonProps {
  amount: number;
  serviceId: string;
  providerId: string;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;
}

export function PaymentButton({
  amount,
  serviceId,
  providerId,
  buttonText = &quot;Purchase&quot;,
  className,
  onPaymentInitiated,
  redirectUrl}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to make a purchase.&quot;});
      
      navigate(&quot;/login&quot;, { 
        state: { from: window.location.pathname } 
      });
      return;
    }
    
    try {
      setIsProcessing(true);
      
      if (onPaymentInitiated) {
        onPaymentInitiated();
      }
      
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke(&quot;create-checkout&quot;, {
        body: {
          amount,
          serviceId,
          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}});
      
      if (error) {
        throw error;
      }
      
      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      } else {
        throw new Error(&quot;No checkout URL returned&quot;);
      }
      
    } catch (error) {
      console.error(&quot;Payment error:&quot;, error);
      toast({
        title: &quot;Payment error&quot;,
        description: &quot;There was a problem initiating your payment. Please try again.&quot;,
        variant: &quot;destructive&quot;});
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false);
      }, 1500);
    }
  };
  
  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        &quot;relative min-w-[120px]&quot;,
        className
      )}
    >
      {isProcessing ? (
        <>
          <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
          Processing...
        </>
      ) : (
        buttonText
      )}
    </Button>
  );
}
