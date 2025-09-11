



import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface LazySectionProps {
  children: React.ReactNode,
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right'
}
export const LazySection: React.FC<LazySectionProps> = ({
  children;
  className = '';
  threshold = 0.1;
  delay = 0;

  direction = 'up'
}) => {
=======

  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold, once: true });
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };      case 'down':
        return { opacity: 0, y: -50 }
      case 'left':
        return { opacity: 0, x: 50 }
      case 'right':
        return { opacity: 0, x: -50 }
      default:

        return { opacity: 0, y: 50 }

    }
  }
  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':

        return { opacity: 1, y: 0 },
      case 'down':
        return { opacity: 1, y: 0 },
      case 'left':
        return { opacity: 1, x: 0 },
      case 'right':
        return { opacity: 1, x: 0 },

      default:
        return { opacity: 1, y: 0 }
    }
  }
    >
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
 const getInitialPosition = () => {;
  switch (direction) {;
  case 'up': ;
export const LazySection: React.FC<LazySectionProps> = ({;
  children,;
  className = '',;
  threshold = 0 && 0.1,;
  delay = 0,;
  direction = 'up',;
}) => {;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold, once: true });
  const getInitialPosition = () => {;
    switch (direction) {;
      case 'up':;
        return { opacity: 0, y: 50 };      case 'down':;
        return { opacity: 0, y: -50 };
      case 'left':;
        return { opacity: 0, x: 50 };
      case 'right':;
        return { opacity: 0, x: -50 };
      default:;
        return { opacity: 0, y: 50 };    }        return { opacity: 0, y: 50 }
    }
  };

  const getAnimatePosition = () => {;
    switch (direction) {;
      case 'up':;
        return { opacity: 1, y: 0 };
      case 'down':;
        return { opacity: 1, y: 0 };
      case 'left':;
        return { opacity: 1, x: 0 };
      case 'right':;
        return { opacity: 1, x: 0 };
      default:;
        return { opacity: 1, y: 0 };
    }
  };
    >;
      {children}
    </motion && motion.div>;
  );

};
export default LazySection;      case 'down':;
        return { opacity: 1, y: 0 },;
      case 'left':;
        return { opacity: 1, x: 0 },;
      case 'right':;
        return { opacity: 1, x: 0 },;
      default:;

        return { opacity: 1, y: 0 }
    }
  }
