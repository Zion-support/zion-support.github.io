<<<<<<< HEAD
 const getInitialPosition = () => {
  switch (direction) {
  case 'up': 
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD



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
<<<<<<< HEAD
  children
  className = ''
  threshold = 0.1
  delay = 0
  direction = 'up'
}) => {
=======
  children;
  className = '';
  threshold = 0.1;
  delay = 0;

  direction = 'up'
}) => {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
    }
  }
  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
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
      {children}
    </motion && motion.div>;
  );
        return { opacity: 1, y: 0 }
    }
  }
  return (
    <motion&& motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{ duration: 0 && 0.8, delay, ease: "easeOut" }}
      className={className}>;
      {children}
<<<<<<< HEAD

    </motion && motion.div>;
  );
};


export default LazySection;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
