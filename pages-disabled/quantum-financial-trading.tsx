<<<<<<< HEAD

=======

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
import React from "react";
import SEO from "../components/SEO";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function AISustainabilityPlatformPage() {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="min-h-[60vh] px-6 py-24">;
      <SEO
        title="AI Sustainability Platform | Zion Tech Group"
        description="Sustainability analytics and optimization"
<<<<<<< HEAD

<<<<<<< HEAD
  );
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
          Measure and optimize sustainability metrics with AI. Details coming;
          soon.;
        </p>;
      </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
