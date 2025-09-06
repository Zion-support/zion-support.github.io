import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right'
}

export const LazySection: React.FC<LazySectionProps> = ({
  children;
  className;
    }
  }
  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
return { opacity: 1, y: 0 };
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
        return { opacity: 1, x: 0 }
      case 'right':
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }
    >
      {children}
    </motion.div>
  );
};

export default LazySection;
