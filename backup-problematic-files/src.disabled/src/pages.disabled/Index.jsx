<<<<<<< HEAD
import React from 'react';
interface IndexProps {
  // Add props here as needed
}
export default function Index({ }: IndexProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
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

const Index = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
