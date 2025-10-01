import React from "react";

type Props = React.PropsWithChildren;

interface State {
  hasError: boolean;
}

export default class EnhancedErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(_error: unknown) {
    // no-op stub
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

