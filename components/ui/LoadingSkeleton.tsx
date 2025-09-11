
    <motion.div;
      className={`bg - white / 10 animate - pulse ${height} ${width} ${rounded} ${class_name}`}

      animate={{
        opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
      transition={{

    />);
}
=======
=======class ErrorBoundary extends React.Component {
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
import { motion } from 'framer-motion';

  return (

    <motion.div;
      className={`bg - white / 10 animate - pulse ${height} ${width} ${rounded} ${class_name}`}

      animate={{
        opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
      transition={{

    />);
}
interface ServiceCardSkeletonProps {
  class_name?: string;
}

  );
};


interface HeroSkeletonProps {
  className?: string

}
;
interface HeroSkeletonProps {
  class_name?: string;
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
