import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 100
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + speed);

      return () => clearTimeout(timeout);
    }, [currentIndex, text, delay, speed]);

  return (
    <span className={className}></span>
      {displayedText}
    </span>
  );
};

export default AnimatedText;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <div className={`animated-text ${className}`} style={ animationDelay: `${delay}ms` }></div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
        {text}
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
        Transform your business with cutting-edge AI and IT solutions
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
  );
}
