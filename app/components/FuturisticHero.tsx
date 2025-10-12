import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface FuturisticHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-cyan-400 mb-8">
          {subtitle}
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && (
              <a
                href={primaryAction.href}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                {primaryAction.text}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                {secondaryAction.text}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FuturisticHero;