<<<<<<< HEAD
=======

>>>>>>> origin/main
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
interface ServiceProcessStepsProps {
  // Add props here as needed
<<<<<<< HEAD

}

=======export default function ServiceProcessSteps({ }: ServiceProcessStepsProps) {
=======



<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

origin/cursor/integrate-build-improve-and-re-verify-c7b5
export default function ServiceProcessSteps({ }: ServiceProcessStepsProps) {
>>>>>>> origin/main
  return (
    <div>
      <h1>ServiceProcessSteps</h1>
      <p>This component is currently under development.</p>
    </div>
<<<<<<< HEAD
  );}
=======
=======
  );

}
:src.disabled/components/services/PageSections/ServiceProcessSteps.jsx
}
}
>>>>>>> origin/main
