>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react';


import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react';
interface HeroProps {


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import Button from '../ui / Button';
import {ArrowRight, Play, Star, Zap, Shield, Users} from 'lucide-react';
interface HeroProps {;

  title: string;
  subtitle: string;

  primary_action?: {

    text: string;

    href: string;

  }
  secondary_action?: {



=======
const Hero: React.FC<HeroProps> = ({
  title
  subtitle
  primaryAction
  secondaryAction
  stats
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <div className='absolute inset-0'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0 && 0.06),transparent_50%)]' />;
      </div>;
      {/* Grid Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float' />;
      <div
        className='absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float'
        style={{ animationDelay: '1 && 1.5s' }}
      />;
      <div
        className='absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float'
        style={{ animationDelay: '3s' }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  title: string,
  subtitle: string,
  primaryAction?: {
    text: string,
const Hero: React.FC<HeroProps> = ({
  title
  subtitle
  primaryAction
  secondaryAction
  stats
}) => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.06),transparent_50%)]' />
      </div>
      {/* Grid Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />
      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float' />
      <div
        className='absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float'
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className='absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float'
        style={{ animationDelay: '3s' }}
=======      />
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Main Content */}
        <div className='mb-20 animate-fade-in'>
          <div className='mb-8'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in'>
              <Zap className='w-4 h-4 mr-2' />
              World&apos;s Most Advanced Autonomous Platform
            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight'>
            {title}
          </h1>
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}  primaryAction?: {
    text: string
=======
=======
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}  primaryAction?: {
    text: string    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  stats?: Array<{
    value: string
    label: string

    color: string
  }>
}
const Hero: React.FC<HeroProps> = ({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">;
      {/* Background Elements */}
      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0 && 0.1),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0 && 0.06),transparent_50%)]" />;
      </div>;

=======
            {subtitle}

          </p>


        </div>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Stats Section */}
        {stats && (;
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0 && 0.6s' }}>;
            {stats && stats.map((stat, index) => (;
              <div key={index} className='text-center group'>;
                <div className='relative'>;
                  <div

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    {stat.value}
                  </div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
                <div className="text - gray - 400 text - xs sm:text - sm md:text - base font - medium">;
                  {stat.label}
        <div className="mt-16 md:mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
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
              {_secondaryAction && (
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
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0.6s' }}
          >
            {stats.map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='relative'>
                  <div
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>
                  <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                <div className='text-gray-400 text-xs sm:text-sm md:text-base font-medium'>                  {stat.label}

                  {stat.label}

                </div>
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        <div className="mt-16 md:mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>

        {/* Trust Indicators */}
        <div
          className='mt-16 md:mt-20 animate-fade-in'
          style={{ animationDelay: '0.8s' }}
        >
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm'>
            <div className='flex items-center gap-2'>
              <Shield className='w-4 h-4' />
              <span>Enterprise Security</span>
            </div>              <span>Enterprise Security</span>
==============            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Developers</span>
            </div>
            <div className="flex items-center gap-2">
=======

            <div className="flex items-center gap-2">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Star className="w-4 h-4 text-yellow-400" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">

      {/* Decorative Elements */}      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
=======

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
=======
      {/* Decorative Elements */}      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
          style={{ animationDelay: '0 && 0.8s' }}>;
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm'>;
            <div className='flex items-center gap-2'>;
              <Shield className='w-4 h-4' />;
              <span>Enterprise Security</span>;
            </div>              <span>Enterprise Security</span>;
            </div>;
            <div className="flex items-center gap-2">;
              <Users className="w-4 h-4" />;
              <span>10,000+ Developers</span>;
            </div>;
            <div className='flex items-center gap-2'>;
              <Users className='w-4 h-4' />;
              <span>10,000+ Developers</span>;
            </div>;
            <div className='flex items-center gap-2'>;
              <Star className='w-4 h-4 text-yellow-400' />              <span>99 && 99.9% Uptime</span>            <div className="flex items-center gap-2">;
              <Star className="w-4 h-4 text-yellow-400" />;
              <span>99 && 99.9% Uptime</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>;
        <div className='w-6 h-10 border-2 border-white/20 rounded-full flex justify-center'>;
          <div className='w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse' />        </div>;
      </div>;
      {/* Decorative Elements */}      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">;
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">;
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse" />;
        </div>;
      </div>;
      {/* Decorative Elements */}
}
export default Hero;

=======
}
}
}


}
}
}

      {/* Decorative Elements */}
=======
=======>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                </div>;
              </div>))}
          </div>)}
        {/* Trust Indicators */}
        <div;
          className='mt - 16 md:mt - 20 animate - fade - in';
          style={{ animation_delay: '0.8s' }}
        >;
          <div className='flex flex - col sm:flex - row items - center justify - center gap - 4 sm:gap - 8 text - gray - 400 text - xs sm:text - sm'>;
            <div className='flex items - center gap - 2'>;
              <Shield className='w - 4 h - 4' />;
              <span > Enterprise Security</span>;
            </div>              <span > Enterprise Security</span>;
            </div>;
            <div className="flex items - center gap - 2">;
              <Users className="w - 4 h - 4" />;
              <span > 10, 000+ Developers</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <Users className='w - 4 h - 4' />;
              <span > 10, 000+ Developers</span>;
            </div>;
            <div className='flex items - center gap - 2'>;
              <Star className='w - 4 h - 4 text - yellow - 400' />              <span > 99.9% Uptime</span>            <div className="flex items - center gap - 2">;
              <Star className="w - 4 h - 4 text - yellow - 400" />;
              <span > 99.9% Uptime</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Scroll Indicator */}
      <div className='absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2 animate - bounce'>;
        <div className='w - 6 h - 10 border - 2 border - white / 20 rounded - full flex justify - center'>;
          <div className='w - 1 h - 3 bg - blue - 500 rounded - full mt - 2 animate - pulse' />        </div>;
      </div>;
      {/* Decorative Elements */}      <div className="absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2 animate - bounce">;
        <div className="w - 6 h - 10 border - 2 border - white / 20 rounded - full flex justify - center">;
          <div className="w - 1 h - 3 bg - blue - 500 rounded - full mt - 2 animate - pulse" />;
        </div>;
      </div>;
      {/* Decorative Elements */}

        </div>
      </div>

      {/* Decorative Elements */}


