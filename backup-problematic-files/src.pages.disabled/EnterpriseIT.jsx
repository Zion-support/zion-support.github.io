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
<<<<<<< HEAD
interface EnterpriseITProps {
  // Add props here as needed
export default function EnterpriseIT({ }: EnterpriseITProps) {
=======

const EnterpriseIT = ({ className }) => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className={className || ''}>
      <h1>EnterpriseIT</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
}
}
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
