
'use client';
import { useEffect, useState} from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide' | 'glow' | 'typing';

const AnimatedText: React.FC<AnimatedTextProps /> = ({
  text,
  const className = '',
  delay = 0,
  // duration = 1000,
  type = 'fade'
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

      setIsVisible(true);
    }, delay);

 clearTimeout(timer);
  }, [delay]);

    if (const type = == 'typing' && isVisible) {
      if (currentIndex 
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 50);
 clearTimeout(timer);
    } else if (isVisible) {
      setDisplayText(text);
  }, [isVisible, currentIndex, text, type]);

    const baseClasses = 'transition-all duration-1000';
    switch (type) {
      case 'fade':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide':
        return `${baseClasses} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;
      case 'glow':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'} ${isVisible ? 'drop-shadow-[0 _0 _10 px_rgba(59,130,246,0.5)]' : ''}`;
      case 'typing':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      default: return baseClasses;
  };

  return (
      {type === 'typing' ? displayText : text}
      {type === 'typing' && currentIndex 
        <span className="animate-pulse">|</span>
      )}
  );
};

export default AnimatedText;