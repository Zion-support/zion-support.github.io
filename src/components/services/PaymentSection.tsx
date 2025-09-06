

export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment

  const handlePaymentInitiated = () => {
    toast({

      description:
        "You'll be redirected to our secure payment portal momentarily."
    })
  }

  return (
    <div className="text-center">
      <p className="text-zion-slate-light mb-2">Selected Country</p>
      <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
        <MapPin className="mr-2 h-5 w-5 text-zion-purple" />
        {selectedCountry.country}
      </h4>
