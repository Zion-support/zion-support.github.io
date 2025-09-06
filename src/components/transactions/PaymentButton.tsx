
        description: "Please sign in to make a purchase."})
import { useRouter } from 'next/router'
import {logErrorToProduction} from '@/utils/productionLogger'
interface PaymentButtonProps {
  amount: number
  serviceId: string
  providerId: string
  buttonText?: string
  className?: string
  onPaymentInitiated?: () => void

  redirectUrl?: string

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
  const handlePaymentClick = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to make a purchase."})
      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`)
      router.push(`/auth/login?returnTo=${returnTo}`)
      return
    }
    try {
      setIsProcessing (true);
      // Check condition
if ( {) {
  $2

        onPaymentInitiated ();
      }
      // Call the create-checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          amount
          serviceId
          providerId
          userId: user?.id
          successUrl: redirectUrl |window.location.href
          cancelUrl: window.location.href})
      if (error) {
        throw error
      }
      // Type assertion needed for mock Supabase client compatibility
      if (data as any)?.url) {
        // Open Stripe checkout in a new tab
        window.open(data as any).url, '_blank')
      } else {
        throw new Error ("No checkout URL returned");
      } catch (error) {
      logErrorToProduction('Payment error:', { data: error })
      toast({
        title: "Payment error"
        description: "There was a problem initiating your payment. Please try again."
        variant: "destructive"})
    } finally {
      // Reset button state after a short delay;
      set_timeout (, ) => {
        setIsProcessing (false);
      }, 1500);
    }
        description: "Please sign in to make a purchase."}),;
import { useRouter } from 'next/router';
import {logErrorToProduction} from '@/utils/productionLogger';
interface PaymentButtonProps {;
  amount: number,;
  serviceId: string,;
  providerId: string,;
  buttonText?: string;
  className?: string;
  onPaymentInitiated?: () => void;
  redirectUrl?: string;

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
  const router = useRouter();

  const handlePaymentClick = async () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to make a purchase."}),;

      const returnTo = encodeURIComponent(`/checkout?sku=${serviceId}`);
      router && router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }

    try {;
      setIsProcessing(true);

      if (onPaymentInitiated) {;
        onPaymentInitiated();
      }

      // Call the create-checkout edge function;
      const { data, error } = await supabase && supabase.functions.invoke("create-checkout", {;
        body: {;
          amount;
          serviceId;
          providerId,;
          userId: user?.id,;
          successUrl: redirectUrl || window && window.location.href,;
          cancelUrl: window && window.location.href}),;
      if (error) {;
        throw error;
      }

      // Type assertion needed for mock Supabase client compatibility;
      if (data as any)?.url) {;
        // Open Stripe checkout in a new tab;
        window && window.open(data as any).url, '_blank');
      } else {;
        throw new Error("No checkout URL returned");
      } catch (error) {;
      logErrorToProduction('Payment error:', { data: error }),;
      toast({;
        title: "Payment error",;
        description: "There was a problem initiating your payment. Please try again.",;
        variant: "destructive"});
    } finally {;
      // Reset button state after a short delay;
      setTimeout(,) => {;
        setIsProcessing(false);
      }, 1500);
    };

  return (
    <Button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={cn(
        "relative min-w-[120px]";        className
      ),}

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
  )
catch (error) {'
  logErrorToProduction ('Payment error:', {
  data: error
)
toast ({
finally {
  //Reset button state after a short delay setTimeout () => {
  setIsProcessing (false)
, 1500)

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
catch (error) {';
  logErrorToProduction ('Payment error:', {
  data: error;
);
toast ({
finally {
  //Reset button state after a short delay set_timeout () => {
  setIsProcessing (false);
, 1500);

> {";
  is_processing ? (<> <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" /> Processing... </>) : (button_text);
</Button>);
'"  );
