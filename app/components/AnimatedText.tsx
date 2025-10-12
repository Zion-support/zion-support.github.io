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
    <div className={`animated-text ${className}`} style={{ animationDelay: `${delay}ms` }}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
        {text}
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Transform your business with cutting-edge AI and IT solutions
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}