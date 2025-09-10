import React from 'react';
import { Steps, Step } from '@/components/ui/steps';
export default function CheckoutProgress(_{ currentStep, _className }) {
    return (<Steps currentStep={currentStep} className={className}>
      <Step status="incomplete" label="Shipping"/>
      <Step status="incomplete" label="Payment"/>
      <Step status="incomplete" label="Review"/>
    </Steps>);
}
