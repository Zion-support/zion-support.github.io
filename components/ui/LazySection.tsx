<<<<<<< HEAD
 const getInitialPosition = () => {
  switch (direction) {
  case 'up': 
=======
<<<<<<< HEAD
<<<<<<< HEAD
 const getInitialPosition = () => {
  switch (direction) {
  case 'up': 
=======
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface LazySectionProps {
  children: React.ReactNode,
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right'
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold, once: true });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
<<<<<<< HEAD
=======
        return { opacity: 0, y: 50 },
      case 'down':
        return { opacity: 0, y: -50 },
      case 'left':
        return { opacity: 0, x: 50 },
      case 'right':
        return { opacity: 0, x: -50 },
      default:
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
<<<<<<< HEAD
        return { opacity: 0, y: 50 };    }
=======
        return { opacity: 0, y: 50 }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return { opacity: 0, y: 50 }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
<<<<<<< HEAD
        return { opacity: 1, y: 0 };
=======
<<<<<<< HEAD
<<<<<<< HEAD
        return { opacity: 1, y: 0 };
=======
        return { opacity: 1, y: 0 },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
        return { opacity: 1, x: 0 };
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  
    >
      {children}
    </motion.div>
  );
};

<<<<<<< HEAD
export default LazySection;
=======
<<<<<<< HEAD
export default LazySection;
=======
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
  };

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
};

export default LazySection;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default LazySection;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
