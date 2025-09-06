
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
declare module 'react' {
  const React: any;
  export const Fragment: any;
  export const StrictMode: any;
  export const clone_element: any;
  export type ReactNode = any;
}
declare module 'react-dom' {
  export * from 'react-dom / index';
}
}