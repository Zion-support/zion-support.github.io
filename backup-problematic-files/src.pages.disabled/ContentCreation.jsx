<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
<<<<<<<< HEAD:backup-problematic-files/src.pages.disabled/ContentCreation.jsx
========
<<<<<<< HEAD
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/email-automation.tsx
}
}
<<<<<<<< HEAD:backup-problematic-files/src.pages.disabled/ContentCreation.jsx
}
}
========
=======
=======
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/email-automation.tsx
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

const ContentCreation = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContentCreation</h1>
      <p>This component is under development.</p>
    </div>
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
