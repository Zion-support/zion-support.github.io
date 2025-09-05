import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
    color: string;
  }>;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  stats}) => {
  return (
    <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
      {/* Background Elements */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.06),transparent_50%)]&quot; />
      </div>

      {/* Grid Pattern */}
      <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20&quot; />

      {/* Floating Elements */}
      <div className=&quot;absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float&quot; />
      <div className=&quot;absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float&quot; style={{ animationDelay: '1.5s' }} />
      <div className=&quot;absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float&quot; style={{ animationDelay: '3s' }} />

      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        {/* Main Content */}
        <div className=&quot;mb-20 animate-fade-in&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in&quot;>
              <Zap className=&quot;w-4 h-4 mr-2&quot; />
              World's Most Advanced Autonomous Platform
            </div>
          </div>
          
          <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight&quot;>
            {title}
          </h1>
          <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light&quot;>
            {subtitle}
          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
              {primaryAction && (
                <Button
                  href={primaryAction.href}
                  size=&quot;lg&quot;
                  className=&quot;animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40&quot;
                  style={{ animationDelay: '0.2s' }}
                >
                  {primaryAction.text}
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant=&quot;outline&quot;
                  size=&quot;lg&quot;
                  className=&quot;animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5&quot;
                  style={{ animationDelay: '0.4s' }}
                >
                  <Play className=&quot;w-5 h-5 mr-2&quot; />
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Stats Section */}
        {stats && (
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in&quot; style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className=&quot;text-center group&quot;>
                <div className=&quot;relative&quot;>
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className=&quot;absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot; />
                </div>
                <div className=&quot;text-gray-400 text-xs sm:text-sm md:text-base font-medium&quot;>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Indicators */}
        <div className=&quot;mt-16 md:mt-20 animate-fade-in&quot; style={{ animationDelay: '0.8s' }}>
          <div className=&quot;flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <Shield className=&quot;w-4 h-4&quot; />
              <span>Enterprise Security</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <Users className=&quot;w-4 h-4&quot; />
              <span>10,000+ Developers</span>
            </div>
            <div className=&quot;flex items-center gap-2&quot;>
              <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className=&quot;absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce&quot;>
        <div className=&quot;w-6 h-10 border-2 border-white/20 rounded-full flex justify-center&quot;>
          <div className=&quot;w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse&quot; />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className=&quot;absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse&quot; />
      <div className=&quot;absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse&quot; style={{ animationDelay: '1s' }} />
      <div className=&quot;absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse&quot; style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;