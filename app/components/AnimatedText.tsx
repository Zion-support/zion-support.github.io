import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide' | 'glow' | 'typing';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 1000,
  type = 'fade'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (type === 'typing' && isVisible) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    } else if (isVisible) {
      setDisplayText(text);
    }
  }, [isVisible, text, type]);

  const getAnimationClasses = () => {
    switch (type) {
      case 'fade':
        return `transition-opacity duration-${duration} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide':
        return `transition-transform duration-${duration} ${isVisible ? 'translate-y-0' : 'translate-y-8'}`;
      case 'glow':
        return `transition-all duration-${duration} ${isVisible ? 'opacity-100 shadow-lg shadow-purple-500/50' : 'opacity-0'}`;
      case 'typing':
        return `transition-all duration-${duration} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      default:
        return `transition-opacity duration-${duration} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  return (
    <span className={`${getAnimationClasses()} ${className}`}>
      {displayText}
    </span>
  );
};

export default AnimatedText;