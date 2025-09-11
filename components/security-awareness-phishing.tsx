
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
import React from 'react';
export default function SecurityAwarenessPhishingPage() {

  const service = extraServices.find(s =>
    s.link.endsWith('/security-awareness-phishing')
  );  if (!service) return null;export default function SecurityAwarenessPhishingPage() {
  const service = extraServices.find(s => s.link.endsWith('/security-awareness-phishing'));