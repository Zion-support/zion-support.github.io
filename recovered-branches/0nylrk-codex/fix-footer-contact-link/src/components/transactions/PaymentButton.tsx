
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  buttonText = "Purchase",
  className,
  onPaymentInitiated,
<<<<<<< HEAD
  redirectUrl}: PaymentButtonProps) {
  const [isProcessingsetIsProcessing] = useState(false);
  const { isAuthenticateduser } = useAuth();
=======
  redirectUrl,
}: PaymentButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { isAuthenticated, user } = useAuth();
>>>>>>> origin/auto/autonomy-17186719616
  const navigate = useNavigate();
  
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
<<<<<<< HEAD
        description: "Please sign in to make a purchase."});
      
      navigate("/login"{ 
=======
        description: "Please sign in to make a purchase.",
      });
      
      navigate("/login", { 
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
      const { dataerror } = await supabase.functions.invoke("create-checkout"{
=======
      const { data, error } = await supabase.functions.invoke("create-checkout", {
>>>>>>> origin/auto/autonomy-17186719616
        body: {
          amount,
          serviceId,
          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
<<<<<<< HEAD
          cancelUrl: window.location.href}});
=======
          cancelUrl: window.location.href,
        },
      });
>>>>>>> origin/auto/autonomy-17186719616
      
      if (error) {
        throw error;
      }
      
      if (data?.url) {
        // Open Stripe checkout in a new tab
<<<<<<< HEAD
        window.open(data.url'_blank');
=======
        window.open(data.url, '_blank');
>>>>>>> origin/auto/autonomy-17186719616
      } else {
        throw new Error("No checkout URL returned");
      }
      
    } catch (error) {
<<<<<<< HEAD
      console.error("Payment error:"error);
      toast({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"});
=======
      console.error("Payment error:", error);
      toast({
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive",
      });
>>>>>>> origin/auto/autonomy-17186719616
    } finally {
      // Reset button state after a short delay
      setTimeout(() => {
        setIsProcessing(false);
<<<<<<< HEAD
      }1500);
=======
      }, 1500);
>>>>>>> origin/auto/autonomy-17186719616
    }
  };
  
  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
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
    </Button>
  );
}
