import React from "react;";
import { Steps, Step  } from "@/components/ui/steps, ";

<<<<<<< HEAD
interface CheckoutProgressProps {
currentStep: number;
=======
interface CheckoutProgressProps {currentStep: number;
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
className?: string};
export default function CheckoutProgress({ currentStep; className }: CheckoutProgressProps) {
return (
<Steps currentStep={currentStep} className={className}>
<Step status="incomplete" label="Shipping" />
<Step status="incomplete" label="Payment" />
<Step status="incomplete" label="Review" />
</Steps>
);
}
<//Steps><///Steps>