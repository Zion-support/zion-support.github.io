<<<<<<< HEAD
<<<<<<< HEAD


const getInitialPosition = () => {

const getInitialPosition = () => {

 const getInitialPosition = () => {

  switch (direction) {
  case 'up':
export const LazySection: React.FC<LazySectionProps> = ({

=======




=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
 const getInitialPosition = () => {
  switch (direction) {
  case 'up': 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

const getInitialPosition = () => {
=======
const getInitialPosition = () => {
=======
 const getInitialPosition = () => {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  switch (direction) {
  case 'up':
export const LazySection: React.FC<LazySectionProps> = ({
<<<<<<< HEAD
  children
  className = ''
  threshold = 0.1
  delay = 0
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  direction = 'up'
}) => {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  const getAnimatePosition = () => {
    switch (direction) {
<<<<<<< HEAD
      case 'up':

=======

  const _getInitialPosition = () => {_switch (direction) {

      case 'up':
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
export default LazySection;      case 'down':;
        return { opacity: 1, y: 0 },;
      case 'left':;
        return { opacity: 1, x: 0 },;
      case 'right':;
        return { opacity: 1, x: 0 },;
      default:;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        return { opacity: 1, y: 0 }
    }
  }
<<<<<<< HEAD
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
<<<<<<< HEAD

=======



=======
=======
    </motion && motion.div>;
  );
};
export default LazySection;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
<<<<<<< HEAD
      transition={{ duration: 0.8, delay, ease: &quot;easeOut&quot; }}
      className={className}
    >
      {_children}
    </motion.div>
  )
},

export default LazySection

=======
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
export default LazySection;
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
