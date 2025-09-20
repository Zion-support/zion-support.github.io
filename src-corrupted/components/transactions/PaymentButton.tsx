redirectUrl?: string
}
export function PaymentButton({}
,
      // Call the create-checkout edge function,
      const { data, error } = await supabase.functions.invoke("create-checkout", {,
        body: {,
          amount,
          serviceId,
          providerId,
          userId: user?.id,
          successUrl: redirectUrl || window.location.href,
          cancelUrl: window.location.href}}),
      if (error) {,
        throw error
      }
,
      // Type assertion needed for mock Supabase client compatibility,
      if ((data as any)?.url) {,
        // Open Stripe checkout in a new tab,
        window.open((data as any).url, '_blank')
      } else {,
        throw new Error ("No checkout URL returned"),
      }

    } catch (error) {,
      logErrorToProduction('Payment error:', { data: error }),
      toast({,
        title: "Payment error",
        description: "There was a problem initiating your payment. Please try again.",
        variant: "destructive"})
    } finally {,
      // Reset button state after a short delay,
      setTimeout(() => {,
        setIsProcessing(false),))