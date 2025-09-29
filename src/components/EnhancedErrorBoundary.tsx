import React from "react";

type EnhancedErrorBoundaryState = { hasError: boolean };

export default class EnhancedErrorBoundary extends React.Component<React.PropsWithChildren, EnhancedErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): EnhancedErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(): void {}

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <div role="alert">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

