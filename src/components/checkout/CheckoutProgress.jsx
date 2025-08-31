import React from 'react';
import { Steps, Step } from '@/components/ui/steps';
export default function CheckoutProgress({ currentStep, className }) {
    return (<Steps currentStep={currentStep} className={className}>
      <Step status="incomplete" label="Shipping"/>
      <Step status="incomplete" label="Payment"/>
      <Step status="incomplete" label="Review"/>
    </Steps>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
