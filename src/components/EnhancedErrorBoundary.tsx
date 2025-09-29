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

  componentDidCatch(): void {
    // no-op placeholder
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

