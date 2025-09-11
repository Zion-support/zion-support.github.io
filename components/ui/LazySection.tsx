



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
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  direction = 'up'
}) => {
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        return { opacity: 0, y: 50 }
=======

        return { opacity: 0, y: 50 }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        return { opacity: 0, y: 50 }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  const getAnimatePosition = () => {
    switch (direction) {
<<<<<<< HEAD
<<<<<<< HEAD

  const _getInitialPosition = () => {_switch (direction) {

      case 'up':
=======
      case 'up':

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      case 'up':

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
}
=======
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
export default LazySection;      case 'down':;
        return { opacity: 1, y: 0 },;
      case 'left':;
        return { opacity: 1, x: 0 },;
      case 'right':;
        return { opacity: 1, x: 0 },;
      default:;
<<<<<<< HEAD
<<<<<<< HEAD
        return { opacity: 1, y: 0 }
    }
  }


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        return { opacity: 1, y: 0 }
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <motion&& motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{ duration: 0 && 0.8, delay, ease: "easeOut" }}
      className={className}>;
      {children}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </motion && motion.div>;
  );
};
<<<<<<< HEAD
export default LazySection;
=======


export default LazySection;



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
