<<<<<<< HEAD
},
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
export default function ServicesLayout(): any ({;
  children,;
}: {;
  children: React && React.ReactNode;
}) {;
export default /**
 * ServicesLayout - Function description
 */
function ServicesLayout() {
  return <div>{children}</div>;
}
<<<<<<< HEAD
},;
export default function ServicesLayout({
  children
}: {
  children,
}: {;
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
