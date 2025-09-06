<<<<<<< HEAD
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
import _React from 'react'; import { Link } from 'react-router-dom'; export default function Training() {}; return null} }; export default Training; export { Training }; export { Training }; export { Training }; export { Training }; export { Training };
import _React from 'react'; import { Link } from 'react-router-dom'; export default function Training() {}; return null} }; export default Training; export { Training }; export { Training }; export { Training }; export { Training }; export { Training };
=======
import React from 'react';

const Training = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Training</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Training;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
