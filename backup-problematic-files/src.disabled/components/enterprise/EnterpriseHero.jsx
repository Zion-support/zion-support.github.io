<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from 'react';

const EnterpriseHero = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterpriseHero</h1>
      <p>This component is under development.</p>
    </div>
  );
};

<<<<<<< HEAD
export default EnterpriseHero;
=======
export default EnterpriseHero;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
