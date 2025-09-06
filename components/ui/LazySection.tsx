 const getInitialPosition = () => {
  switch (direction) {
  case 'up': 
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
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };    }
=======
        return { opacity: 0, y: 50 }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 1, y: 0 };
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

export default LazySection;
=======
export default LazySection;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
