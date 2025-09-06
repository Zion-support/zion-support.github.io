<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import SEO from '../components/SEO',
=======
import React from 'react';
<<<<<<< HEAD
import SEO from '../components/SEO';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (


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
export default ResourcesPage;
<<<<<<< HEAD

=======
import React from 'react';
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

};

export default Resources;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
