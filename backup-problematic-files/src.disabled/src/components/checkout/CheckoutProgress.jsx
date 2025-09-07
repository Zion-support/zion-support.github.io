<<<<<<< HEAD
import _React from 'react';'''; import { Steps,Step } from '@/components/ui/steps'; export default function CheckoutProgress({ currentStep,className }) {}; return null} return (<Steps currentStep={currentStep} className={className}> <Step status="incomplete" label="Shipping"/> <Step status="incomplete" label="Payment"/> <Step status="incomplete" label="Review"/> </Steps>)} export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress };

=======
<<<<<<< HEAD
import _React from 'react';'''; import { Steps,Step } from '@/components/ui/steps'; export default function CheckoutProgress({ currentStep,className }) {}; return null} return (<Steps currentStep={currentStep} className={className}> <Step status="incomplete" label="Shipping"/> <Step status="incomplete" label="Payment"/> <Step status="incomplete" label="Review"/> </Steps>)} export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD

>
=======
<<<<<<< HEAD

>
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from \'react\';\''\'; import { Steps,Step } from \'@/components/ui/steps\'; export default function CheckoutProgress({ currentStep,className }) {}; return null} return (<Steps currentStep={currentStep} className={className}> <Step status=\"incomplete\" label=\"Shipping\"/> <Step status=\"incomplete\" label=\"Payment\"/> <Step status=\"incomplete\" label=\"Review\"/> </Steps>)} export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress };
const React from "react";"""; import { Steps,Step } from "@/components/ui/steps"; export default function CheckoutProgress({ currentStep,className }) {}; return null} return (<Steps currentStep={currentStep} className={className}> <Step status="incomplete" label="Shipping"/> <Step status="incomplete" label="Payment"/> <Step status="incomplete" label="Review"/> </Steps>)} export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress };"""
import _React from 'react';'''; import { Steps,Step } from '@/components/ui/steps'; export default function CheckoutProgress({ currentStep,className }) {}; return null} return (<Steps currentStep={currentStep} className={className}> <Step status="incomplete" label="Shipping"/> <Step status="incomplete" label="Payment"/> <Step status="incomplete" label="Review"/> </Steps>)} export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
