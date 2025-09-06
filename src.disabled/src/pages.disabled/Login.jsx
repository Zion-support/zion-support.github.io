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
interface LoginProps {
  // Add props here as needed
<<<<<<< HEAD

}

=======export default function Login({ }: LoginProps) {
=======


}

export default function Login({ }: LoginProps) {
>>>>>>> origin/main
  return (
    <div>
      <h1>Login</h1>
      <p>This component is currently under development.</p>
    </div>
<<<<<<< HEAD
  );}
=======
=======
  );

}
:src.disabled/src/pages.disabled/Login.jsx
}
}
>>>>>>> origin/main
