class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
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
<<<<<<< HEAD:src.disabled/src/components/checkout/CheckoutProgress.jsx
import _React from 'react';'''; import { Steps,Step } from '@/components/ui/steps'; export default function CheckoutProgress({ currentStep,className }) {}; return null} return (<Steps currentStep={currentStep} className={className}> <Step status="incomplete" label="Shipping"/> <Step status="incomplete" label="Payment"/> <Step status="incomplete" label="Review"/> </Steps>)} export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress };
=======
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/components/checkout/CheckoutProgress.jsx
import _React from 'react';'''; import { Steps,Step } from '@/components/ui/steps'; export default function CheckoutProgress({ currentStep,className }) {}; return null} return (<Steps currentStep={currentStep} className={className}> <Step status="incomplete" label="Shipping"/> <Step status="incomplete" label="Payment"/> <Step status="incomplete" label="Review"/> </Steps>)} export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress };
=======
import _React from 'react';'''; import { Steps,Step } from '@/components/ui/steps'; export default function CheckoutProgress({ currentStep,className }) {}; return null} return (<Steps currentStep={currentStep} className={className}> <Step status="incomplete" label="Shipping"/> <Step status="incomplete" label="Payment"/> <Step status="incomplete" label="Review"/> </Steps>)} export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress }; export { CheckoutProgress };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:src.disabled/src/components/checkout/CheckoutProgress.jsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src.disabled/src/components/checkout/CheckoutProgress.jsx
