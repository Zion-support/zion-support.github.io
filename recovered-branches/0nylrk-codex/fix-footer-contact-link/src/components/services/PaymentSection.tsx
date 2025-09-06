        serviceId="it-onsite-service"
        providerId="zion-tech-group"
        buttonText={`Pay for Service in ${selectedCountry && selectedCountry.country}`}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"
        redirectUrl="/it-onsite-services?success=true"
        onPaymentInitiated={handlePaymentInitiated}
export /**
 * PaymentSection - Function description
 */
function PaymentSection() {
  // Handle successful payment;
  const handlePaymentInitiated = () =>: any {
    toast ({
      title: "Processing your request",
      description:;
        "You'll be redirected to our secure payment portal momentarily.",
    });
  }
;
