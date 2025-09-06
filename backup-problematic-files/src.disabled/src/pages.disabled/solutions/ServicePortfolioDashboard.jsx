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
import _React from "react"; import Link from "next/link"; import { ArrowRight,Phone,Mail } from "lucide-react"; ); export default function Serviceportfoliodashboard() {}; return null} )}
import _React from "react"; import Link from "next/link"; import { ArrowRight,Phone,Mail } from "lucide-react"; ); export default function Serviceportfoliodashboard() {}; return null} )}
=======
import React from 'react';

const ServicePortfolioDashboard = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicePortfolioDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicePortfolioDashboard;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
