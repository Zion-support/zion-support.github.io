<<<<<<< HEAD
<<<<<<< HEAD
export default function ServicesLayout({
  children
}: {
  children,
}: {;
  children: React.ReactNode;
}) {
=======

=======
  children: React.ReactNode;
}) {
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

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
export default function ServicesLayout(): any ({;
  children,;
}: {;
  children: React && React.ReactNode;
}) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export default /**
 * ServicesLayout - Function description
 */
function ServicesLayout() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return <div>{children}</div>;
}
