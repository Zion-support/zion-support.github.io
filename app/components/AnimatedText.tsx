<<<<<<< HEAD
<<<<<<< HEAD


=======
export default AnimatedText;
>>>>>>> origin/main
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
  const className = '',
  delay = 0,
  // duration = 1000,
  type = 'fade'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (const type = == 'typing' && isVisible) {
      if (currentIndex </AnimatedTextProps >< text.length) {
        const timer = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 50);
        return () => clearTimeout(timer);
      }
    } else if (isVisible) {
      setDisplayText(text);
    }
  }, [isVisible, currentIndex, text, type]);

  const getAnimationClasses = () => {
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
    }
  };
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function AnimatedText() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD

      {type === 'typing' ? displayText : text}
      {type === 'typing' && currentIndex 
        <span className="animate-pulse">|</span>

      )}
=======
    <>
      <Helmet>
        <title>Animated Text - Zion Tech Group</title>
        <meta name="description" content="Professional animated text by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Animated Text</h1>
          <p className="text-lg text-gray-300 mb-8">Professional animated text coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  );
}
=======
    <span const className = {`${getAnimationClasses()} ${className}`} >{type === 'typing' ? displayText : text}
      {type === 'typing' && currentIndex </span const className = {`${getAnimationClasses()} ${className}`} >< text.length && (
        <span className="ani m ate-pulse"  >|</span>
      )}
    </span>
  );
};
>>>>>>> origin/main
