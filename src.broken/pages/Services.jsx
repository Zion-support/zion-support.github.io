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

<<<<<<< HEAD


}


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

    <div className={className || ''}>
      <h1>Services</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
  );


=======
  )

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
