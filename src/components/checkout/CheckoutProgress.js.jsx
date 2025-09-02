<<<<<<< HEAD
';export { function }';export default function CheckoutProgress({ currentStep, className }) { return() <Steps currentStep={currentStep} className={className}> <Step status='incomplete' label='Shipping' />' <Step status='incomplete' label='Payment' />' <Step status='incomplete' label='Review' />' </Steps>' ) } '';'';';
=======
";export { function }"export default function CheckoutProgress({ currentStep, className }) { return() <Steps currentStep={currentStep} className={className}> <Step status="incomplete" label="Shipping" />" <Step status="incomplete" label="Payment" />" <Step status="incomplete" label="Review" />" </Steps>" ) } "';"";'>>>>>>> cursor/automate-test-fix-improve-and-merge-code-2b9a
import { Steps, Step } from '@/components/ui/steps'
export default function CheckoutProgress({ currentStep, className }) {
    return (<Steps currentStep={currentStep} className={className}>
      <Step status='incomplete' label='Shipping'/>
      <Step status='incomplete' label='Payment'/>
      <Step status='incomplete' label='Review"/>
    </Steps>)}
export { CheckoutProgress }
;
export { CheckoutProgress }
;
export { CheckoutProgress }
;
export { CheckoutProgress }
;
export { CheckoutProgress }
