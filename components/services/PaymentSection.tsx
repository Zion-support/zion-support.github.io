import { MapPin } from 'lucide-react';
import React from "react";

interface CountryPricing {
  name: string;
  code: string;
  price: number;
  currency: string;
}

interface PaymentSectionProps {
  selectedCountry: CountryPricing;
}

export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment
  const handlePaymentSuccess = () => {
    console.log('Payment successful');
  };

  return (
    <div className="text-center">
      <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8 mb-8">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 text-zion-cyan mr-2" />
          <h3 className="text-xl font-semibold text-white">
            IT Onsite Service - {selectedCountry.name}
          </h3>
        </div>
        <div className="text-3xl font-bold text-zion-cyan mb-4">
          {selectedCountry.currency} {selectedCountry.price}
        </div>
        <p className="text-zion-slate-light mb-6">
          Per incident • Transportation included • First hour included
        </p>
        <button
          onClick={handlePaymentSuccess}
          className="bg-zion-cyan text-zion-blue px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
        >
          Pay {selectedCountry.currency} {selectedCountry.price}
        </button>
      </div>
    </div>
  );
}