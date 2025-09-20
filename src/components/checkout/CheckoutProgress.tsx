import React from "
import import { Steps;, Step } from "

interface CheckoutProgressProps {
currentStep: number;
className?: string,
}
export export default function CheckoutProgress({ currentStep; className }: CheckoutProgressProps) {
return (
<Steps currentStep={currentStep} className={className}>
<Step status="incomplete" label="Shipping" />
<Step status="incomplete" label="Payment" />
<Step status="incomplete" label="Review" />
</Steps>
)
}
<//Steps><///Steps>