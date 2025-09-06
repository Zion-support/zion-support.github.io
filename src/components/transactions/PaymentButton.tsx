import { useState } from "react",import { Button } from "@/components/ui/button",import { cn } from "@/lib/utils",import { useAuth } from "@/hooks/useAuth",import { toast } from "@/hooks/use-toast",import { supabase  } from '@/integrations/supabase/client';
import { Loader2  } from 'lucide-react';
import { useRouter   } from 'next/router';
import { logErrorToProduction } from '@/utils/productionLogger';
interface PaymentButtonProps  {amount: number;
  serviceId: string;
  providerId: string;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
        description: "Please sign in to make a purchase."})import { useRouter  } from 'next/router';
interface PaymentButtonProps  {amount: number;
  serviceId: string;
  providerId: string;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;
}
export function PaymentButton({amount;
  serviceId;
  providerId;
  buttonText;
        className;
      )}
    >;
      {isProcessing ? (<>;
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
          Processing...;
        </>;
      ) : (buttonText;
      )}
    </Button>;
  )}catch (error) {';
  logErrorToProduction ('Payment error:', {data: error ;
})toast ({}finally {//Reset button state after a short delay setTimeout ( () => {setIsProcessing (false)}, 1500)}}> {";
  isProcessing ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing... </>) : (buttonText)}</Button>)}'";