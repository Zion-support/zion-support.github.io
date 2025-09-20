import React from "react;";
<<<<<<< HEAD
import { Steps, Step  } from "@/components/ui/steps, ";

interface CheckoutProgressProps {
currentStep: number;
className?: string};
export default function CheckoutProgress({ currentStep; className }: CheckoutProgressProps) {
return (
<Steps currentStep={currentStep} className={className}>
<Step status="incomplete" label="Shipping" />
<Step status="incomplete" label="Payment" />
<Step status="incomplete" label="Review" />
</Steps>
);
=======
import { Steps, Step } from "@/components/ui/steps, ";

interface CheckoutProgressProps {
  currentStep: number,
    className?: string,
};
export default function CheckoutProgress({ currentStep, className }: CheckoutProgressProps) {
  return (
    <Steps currentStep={currentStep} className={className}>
      <Step status="incomplete" label="Shipping" />
      <Step status="incomplete" label="Payment" />
      <Step status="incomplete" label="Review" />
    </Steps>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}
<//Steps><///Steps>