<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:services/layout.tsx
export default function ServicesLayout({

  children: React.ReactNode;
}) {
=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/layout.tsx
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
<<<<<<<< HEAD:services/layout.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/layout.tsx
export default /**
 * ServicesLayout - Function description
 */
function ServicesLayout() {
<<<<<<<< HEAD:services/layout.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/layout.tsx
  return <div>{children}</div>;
}
=======
},;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
export default function ServicesLayout({
<<<<<<< HEAD
  children
}: {
=======
  children,
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
