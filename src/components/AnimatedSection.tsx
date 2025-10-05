import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-0 transform translate-y-8`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 transform translate-x-8`;
        case 'slideRight':
          return `${baseClasses} opacity-0 transform -translate-x-8`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    switch (animation) {
      case 'fadeIn':
        return `${baseClasses} opacity-100`;
      case 'slideUp':
        return `${baseClasses} opacity-100 transform translate-y-0`;
      case 'slideLeft':
        return `${baseClasses} opacity-100 transform translate-x-0`;
      case 'slideRight':
        return `${baseClasses} opacity-100 transform translate-x-0`;
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
