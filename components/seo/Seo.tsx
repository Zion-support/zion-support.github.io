=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

  return <NextSeo {...props} />;

  return <NextSeo {...props} />;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return <NextSeo {...props} />;
}
=======

}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
