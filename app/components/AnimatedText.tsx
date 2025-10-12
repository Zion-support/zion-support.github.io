import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  showButton = false,
  buttonText = 'Learn More',
  buttonLink = '/contact'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  return (
    <div className={`${className}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        {displayedText}
        <span className="animate-pulse">|</span>
      </h1>
      
      {showButton && currentIndex >= text.length && (
        <div className="mt-8">
          <Link
            to={buttonLink}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AnimatedText;