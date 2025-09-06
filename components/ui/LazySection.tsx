



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

<<<<<<< HEAD
  direction = 'up'
}) => {
=======

=======
 const getInitialPosition = () => {
  switch (direction) {
  case 'up': 

const getInitialPosition = () => {
const getInitialPosition = () => {
 const getInitialPosition = () => {
  switch (direction) {
  case 'up':
export const LazySection: React.FC<LazySectionProps> = ({
  children
  className = ''
  threshold = 0.1
  delay = 0
  direction = 'up'
}) => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

        return { opacity: 0, y: 50 }

=======
        return { opacity: 0, y: 50 }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  }
  const getAnimatePosition = () => {
    switch (direction) {
<<<<<<< HEAD
      case 'up':

=======

  const _getInitialPosition = () => {_switch (direction) {

      case 'up':
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
  }
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    >
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {children}
    </motion && motion.div>;
  );
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
};

export default LazySection;      case 'down':;
        return { opacity: 1, y: 0 },;
      case 'left':;
        return { opacity: 1, x: 0 },;
      case 'right':;
        return { opacity: 1, x: 0 },;
      default:;
<<<<<<< HEAD

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
=======
        return { opacity: 1, y: 0 }
    }
  }


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    </motion && motion.div>;
  );
};
<<<<<<< HEAD


export default LazySection;



=======
=======
export default LazySection;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const getInitialPosition = () =>: any {
  switch (direction) {
  case 'up':;
export const LazySection: React.FC < LazySectionProps> = ({
  children,
  class_name = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {
  const ref = useRef < HTMLDivElement>(null);
  const isInView = useInView (ref, { threshold, once: true });
;
  const getInitialPosition = () =>: any {
    switch (direction) {
      case 'up':;
        return { opacity: 0, coordinate_y: 50 }      case 'down':;
        return { opacity: 0, coordinate_y: -50 }
      case 'left':;
        return { opacity: 0, coordinate_x: 50 }
      case 'right':;
        return { opacity: 0, coordinate_x: -50 }
      default:;
        return { opacity: 0, coordinate_y: 50 }    }        return { opacity: 0, coordinate_y: 50 }
    }
  }
;
  const getAnimatePosition = () =>: any {
    switch (direction) {
      case 'up':;
        return { opacity: 1, coordinate_y: 0 }
      case 'down':;
        return { opacity: 1, coordinate_y: 0 }
      case 'left':;
        return { opacity: 1, coordinate_x: 0 }
      case 'right':;
        return { opacity: 1, coordinate_x: 0 }
      default:;
        return { opacity: 1, coordinate_y: 0 }
    }
  }
;
    >;
      {children}
    </motion.div>);
}
;
export default LazySection;      case 'down':;
        return { opacity: 1, coordinate_y: 0 },
      case 'left':;
        return { opacity: 1, coordinate_x: 0 },
      case 'right':;
        return { opacity: 1, coordinate_x: 0 },
      default:;
        return { opacity: 1, coordinate_y: 0 }
    }
  }
;
  return (
    <motion.div;
      ref={ref}
      initial={getInitialPosition ()}
      animate={isInView ? getAnimatePosition () : getInitialPosition ()}
      transition={{ duration: 0.8, delay, ease: "ease_out" }}
      className={class_name}
    >;
      {children}
    </motion.div>);
}
;
export default LazySection;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
export default LazySection;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
