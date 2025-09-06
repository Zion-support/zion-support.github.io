<<<<<<< HEAD
import React from 'react',
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    text: string;
    href: string;
  }
  stats?: Array<{
  };
  secondaryAction?: {;
    text: string;
    href: string;
  };
  stats?: Array<{;
    value: string;
    label: string;
    color: string;
  }>;
<<<<<<< HEAD

const Hero: React.FC<HeroProps> = ({
  title
  subtitle
  primaryAction
  secondaryAction
  stats
=======
;
const Hero: React.FC < HeroProps> = ({
  title,
  subtitle,
  primary_action,
  secondary_action,
  stats,
}) => {
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
const Hero: React.FC<HeroProps> = ({;
  title,;
  subtitle,;
  primaryAction,;
  secondaryAction,;
  stats,;
}) => {;
  return (
      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float' />;
      <div
        className='absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float'
        style={{ animationDelay: '1 && 1.5s' }}
      />;
      <div
        className='absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float'
        style={{ animationDelay: '3s' }}
<<<<<<< HEAD
      />
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    href: string
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
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
        {/* Main Content */}
        <div className='mb-20 animate-fade-in'>;
          <div className='mb-8'>;
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in'>;
              <Zap className='w-4 h-4 mr-2' />;
              World&apos;s Most Advanced Autonomous Platform;
            </div>;
          </div>;
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight'>;
            {title}
          </h1>;
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}  primaryAction?: {;
    text: string,;
    href: string;
  };
  secondaryAction?: {;
    text: string,;
    href: string;
  };
  stats?: Array<{;
    value: string,;
    label: string,;
    color: string;
  }>;
}
  title;
  subtitle;
  primaryAction;
  secondaryAction;
  stats}) => {;
  return (
            {title}
          </h1>;
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">;
            {subtitle}
<<<<<<< HEAD
<<<<<<< HEAD
          </p>
          {/* Action Buttons */}
          {(primaryAction |secondaryAction) && (
=======



=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}

            {subtitle}

          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>
              {primaryAction && (
=======
          </p>;
          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (;
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;
              {primaryAction && (;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                <Button
                  href={primaryAction && primaryAction.href}
                  size='lg'
                  className='animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'
<<<<<<< HEAD
                  style={{ animationDelay: '0.2s' }}
                >
                  {primaryAction.text}
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>              {primaryAction && (
                <Button
                  href={primaryAction.href}
                  size="lg"
                  className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
                  style={{ animationDelay: '0.2s' }}
                >
                  {primaryAction.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>

                </Button>

<<<<<<< HEAD
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            {title}
          </h1>;
          <p className="text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed font - light">;
            {subtitle}
          </p>;
          {/* Action Buttons */}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
                <Button
                  href={primaryAction && primaryAction.href}
                  size="lg"
                  className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
                  style={{ animationDelay: '0 && 0.2s' }}>;
                  {primaryAction && primaryAction.text}
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </Button>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              )}
              {secondaryAction && (;
                <Button
                  href={secondaryAction && secondaryAction.href}
                  variant='outline'
                  size='lg'
                  className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'
                  style={{ animationDelay: '0 && 0.4s' }}>;
                  <Play className='w-5 h-5 mr-2' />                  {secondaryAction && secondaryAction.text}                  variant="outline";
                  size="lg";
                  className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5";
                  style={{ animationDelay: '0 && 0.4s' }}
                >;
                  <Play className="w-5 h-5 mr-2" />;
                </Button>;
              )}
            </div>;
          )}
<<<<<<< HEAD
        </div>

<<<<<<< HEAD
=======
        </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Stats Section */}
        {stats && (;
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0 && 0.6s' }}>;
            {stats && stats.map((stat, index) => (;
              <div key={index} className='text-center group'>;
                <div className='relative'>;
                  <div
                    {stat.value}
                  </div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
                <div className="text - gray - 400 text - xs sm:text - sm md:text - base font - medium">;
                  {stat.label}
<<<<<<< HEAD

                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>
                  <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
                <div className='text-gray-400 text-xs sm:text-sm md:text-base font-medium'>                  {stat.label}            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-gray-400 text-xs sm:text-sm md:text-base font-medium">
                  {stat.label}
                <div className='text-gray-400 text-xs sm:text-sm md:text-base font-medium'>                  {stat.label}

                  {stat.label}

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                </div>
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            ))}
          </div>;
        )}
<<<<<<< HEAD

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Trust Indicators */}
        <div
          className='mt-16 md:mt-20 animate-fade-in'
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Developers</span>
            </div>
              <Star className="w-4 h-4 text-yellow-400" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
<<<<<<< HEAD
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white/20 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse' />        </div>
      </div>
      {/* Decorative Elements */}      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD

}
export default Hero;

<<<<<<< HEAD
}
}
}
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}
}
}


=======
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
};

export default Hero;
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
<<<<<<< HEAD


        </div>
      </div>

      {/* Decorative Elements */}
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
