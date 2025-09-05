import React, {_Component, _ErrorInfo, _ReactNode} from 'react';

interface Props {_children: ReactNode;}

interface State {_hasError: boolean;}

export default class ErrorBoundary extends Component<Props, State> {_public state: State = {
    hasError: false, };

  public static getDerivedStateFromError(_: Error): State {_return { hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  public render() {_if (this.state.hasError) {
      return <h1>Sorry, _something went wrong.</h1>;}

    return this.props.children;
  }
}
