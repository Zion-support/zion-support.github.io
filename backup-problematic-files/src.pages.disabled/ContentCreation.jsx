<<<<<<< HEAD
}
}
<
=======
<<<<<<< HEAD
}
}
<
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
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from 'react';
interface EmailautomationProps {
  // Add props here as needed
}
export default function Emailautomation({ }: EmailautomationProps) {
  return (
    <div>
      <h1>Emailautomation</h1>
      <p>This component is currently under development.</p>
    </div>
  );