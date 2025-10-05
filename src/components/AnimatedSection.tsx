<<<<<<< HEAD
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
=======
import React from "react";
import React from "react";';
interface, AnimatedSectionProp, s {
animati, o, n?: 'fade, I, n' | 'slide, U, p' | 'slideLe, f, t' | 'slideRig, h, t' | 'sca, l, e';
del, a, y?: numb, e, r;
childr, e, n: Rea, c, t.ReactNo, d, e;
}
const, AnimatedSectio, n: Rea, c, t.FC<AnimatedSectionPro, p, s> = ({ animati, o, n = 'fade, I, n', del, a, y = 0, childr, e, n }) => {
const, styl, e: Rea, c, t.CSSProperti, e, s = {
animationDel, a, y: `${del, a, y`
const, AnimatedSecti, o
  n: Rea, c, t.FC<AnimatedSectionPro, p, s> = ({ animati, o, n = 'fade, I, n', del, a, y = 0, childr, e, n }) => {';
const, styl, e: Rea, c, t.CSSProperti, e, s = {
animationDel, a, y: `${del, a, y`;`
}ms``
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
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
