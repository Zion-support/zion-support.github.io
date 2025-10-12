

'use client';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide' | 'glow' | 'typing';
}

const AnimatedText: React.FC<AnimatedTextProps >= ({
  text,
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);
</AnimatedTextProps>
  useEffect(() => {</AnimatedTextProps>
    if (
          setCurrentIndex(currentIndex + 1);
        }, 50);
        return () => clearTimeout(timer);
      }
    } else if (isVisible) {
      setDisplayText(text);
    }
  }, [isVisible, currentIndex, text, type]);

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
    }
  };

export default function AnimatedText() {
  return (

      {type === 'typing' ? displayText : text}
      {type === 'typing' && currentIndex 
        <span className="animate-pulse">|</span>

      )}

}}