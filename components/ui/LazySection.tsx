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
  direction = 'up'
}) => {
=======
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up',
}) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
        return { opacity: 0, y: 50 };    }        return { opacity: 0, y: 50 }
    }
  }
  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 1, y: 0 }
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
}
export default LazySection;      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
        return { opacity: 1, x: 0 }
      case 'right':
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }
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
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
