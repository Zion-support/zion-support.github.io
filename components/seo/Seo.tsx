<<<<<<< HEAD
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error,,,
  errorInfo) {console.error('Error caught by boundary:', error,,,
  errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
=======

<<<<<<< HEAD
  }
  return <div>Something went wrong.</div>;
=======
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
    }return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD
import React from react';
=======

<<<<<<< HEAD
  return <NextSeo {...props} />;
=======
  return <NextSeo {...props}    />;

>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> origin/main
