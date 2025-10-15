import React from 'react';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import FuturisticBackground from './FuturisticBackground';
import FuturisticButton from './FuturisticButton';
import FuturisticText from './FuturisticText';

interface FuturisticHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  stats?: Array<{
    number: string;
    label: string;
  }>;
  features?: string[];
  className?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  features = [],
  className = ''
}) => {
  return (
    <FuturisticBackground variant="hero" intensity="high" className={className}>
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated sparkles */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              <Zap className="w-6 h-6 text-purple-400 animate-pulse delay-100" />
              <Star className="w-6 h-6 text-pink-400 animate-pulse delay-200" />
            </div>
          </div>

          {/* Subtitle */}
          <FuturisticText variant="neon" size="lg" glow animate className="mb-4">
            {subtitle}
          </FuturisticText>

          {/* Main title */}
          <FuturisticText variant="gradient" size="7xl" glow className="mb-8 leading-tight">
            {title}
          </FuturisticText>

          {/* Description */}
          <FuturisticText variant="body" size="2xl" className="mb-12 max-w-4xl mx-auto leading-relaxed">
            {description}
          </FuturisticText>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <FuturisticButton
              href={primaryAction.href}
              variant="primary"
              size="xl"
              className="group"
            >
              {primaryAction.text}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </FuturisticButton>
            
            {secondaryAction && (
              <FuturisticButton
                href={secondaryAction.href}
                variant="outline"
                size="xl"
              >
                {secondaryAction.text}
              </FuturisticButton>
            )}
          </div>

          {/* Stats */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <FuturisticText variant="neon" size="4xl" glow className="mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </FuturisticText>
                  <FuturisticText variant="caption" size="base" className="group-hover:text-cyan-300 transition-colors">
                    {stat.label}
                  </FuturisticText>
                </div>
              ))}
            </div>
          )}

          {/* Features */}
          {features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-slate-800/20 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform"></div>
                  <FuturisticText variant="body" size="sm" className="group-hover:text-white transition-colors">
                    {feature}
                  </FuturisticText>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </FuturisticBackground>
  );
};

export default FuturisticHero;