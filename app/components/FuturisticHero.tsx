import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  className?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  className = ''
}) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            {title}
          </span>
          <br />
          <span className="text-white">{subtitle}</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
            <Link
              to={primaryAction.href}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              {primaryAction.text}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          )}
          {secondaryAction && (
            <Link
              to={secondaryAction.href}
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              {secondaryAction.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero;
