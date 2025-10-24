<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AnimatedText() {
  return (
    <>
    
  </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
            Service</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional service services coming soon.</p>
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hove,
  r:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></Link>
            Contact Us</Link>
            <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
}
=======


'use client';

interface AnimatedTextProps {text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fade' | 'slide' | 'glow' | 'typing';}

const AnimatedText: React.FC<AnimatedTextProps >= ({text,
  const className = '',
  delay = 0,
  // duration = 1000,
  type = 'fade'}) => {const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);}, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {if (const type = == 'typing' && isVisible) {
      if (currentIndex </AnimatedTextProps >< text.length) {
        const timer = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);}, 50);
        return () => clearTimeout(timer);
      }
    } else if (isVisible) {setDisplayText(text);}
  }, [isVisible, currentIndex, text, type]);

  const getAnimationClasses = () => {const baseClasses = 'transition-all duration-1000';
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

export default function AnimatedText() {return (

      {type === 'typing' ? displayText : text}
      {type === 'typing' && currentIndex
        <span className="animate-pulse">|</span>
  )}
  );
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';

const AnimatedText: React.FC<AnimatedTextProps> = () => {
  return (
    <div className="animatedtext">
      <h2>AnimatedText</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default AnimatedText;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
