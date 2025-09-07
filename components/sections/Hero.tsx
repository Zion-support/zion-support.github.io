<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react';
interface HeroProps {
title: string;
  subtitle: string;
  primaryAction?: {
    text: string;
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    text: string;
    href: string;
  }
  stats?: Array<{
    value: string;
    label: string;
    color: string;
  }>;
const Hero: React.FC<HeroProps> = ({
  title
  subtitle
  primaryAction
  secondaryAction
  stats
}) => {
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
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  stats?: Array<{
    value: string
    label: string
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    color: string
  }>
}
const Hero: React.FC<HeroProps> = ({
  title;
  subtitle;
  primaryAction;
  secondaryAction;
<<<<<<< HEAD
  stats}) => {
  return (
    <section className;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
            {subtitle}

          </p>
          </p>;
          {/* Action Buttons */}
<<<<<<< HEAD
          {(primaryAction || secondaryAction) && (
<div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>
              {primaryAction && (
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          {(primaryAction || secondaryAction) && (;
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;
              {primaryAction && (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
                <Button
                  href={primaryAction && primaryAction.href}
                  size='lg'
                  className='animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'
<<<<<<< HEAD
                  style={{ animationDelay: '0.2s' }}
                >
                  {primaryAction.text}
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
origin/cursor/automate-test-improve-and-merge-code-2533
              )}
              {secondaryAction && (;
                <Button
                  href={secondaryAction.href}
variant='outline'
                  size='lg'
                  className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'
=======

    text: string;
    href: string;
  }
  stats?: Array<{value: string;
    label: string;
    color: string;
  }>;
const Hero: React.FC<HeroProps> = ({title;
  subtitle;
  primaryAction;
  secondaryAction;
  stats;
}) => {const Hero: React.FC<HeroProps> = ({title,subtitle,primaryAction,secondaryAction,stats,}) => {return ({/* Floating Elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float' />;
      <div;
        className='absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float';
        style={{ animationDelay: '1 && 1.5s' }}
      />;
      <div;
        className='absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float';
        style={{ animationDelay: '3s' }}
    href: string;
  }
  secondaryAction?: {text: string;
    href: string;
  }
  stats?: Array<{value: string;
    label: string;
import React from 'react',import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users  } from 'lucide-react';
interface HeroProps  {title: string;
  subtitle: string;
  primaryAction?: {text: string;
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>;
    color: string;
  }>;
}
const Hero: React.FC<HeroProps> = ({title;
  subtitle;
  primaryAction;
  secondaryAction;<p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}stats}) => {return (<section className;{subtitle}</p>;
          </p>;
          {/* Action Buttons */}{(primaryAction || secondaryAction) && (<div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;
              {primaryAction && ({(primaryAction || secondaryAction) && (<div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;
              {primaryAction && (<Button;
                  href={primaryAction && primaryAction.href}
                  size='lg';
                  className='animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
            {title}
          </h1>;
          <p className="text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed font - light">;
            {subtitle}
          </p>;
          {/* Action Buttons */}
                <Button;
                  href={primaryAction && primaryAction.href}
                  size="lg";
                  className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40";
                  style={{ animationDelay: '0 && 0.2s' }}>;
                  {primaryAction && primaryAction.text}
                  <ArrowRight className="w-5 h-5 ml-2" />;
<<<<<<< HEAD
                </Button>;style={{ animationDelay: '0.2s' }}
                >;
                  {primaryAction.text}
                  <ArrowRight className='w-5 h-5 ml-2' />;
                </Button>;
              )}
              {secondaryAction && (<Button;
=======
                </Button>;
              )}
              {secondaryAction && (;
                <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
                  href={secondaryAction && secondaryAction.href}
                  variant='outline';
                  size='lg';
                  className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5';
                  style={{ animationDelay: '0 && 0.4s' }}>;
                  <Play className='w-5 h-5 mr-2' />                  {secondaryAction && secondaryAction.text}                  variant="outline";
                  size="lg";
                  className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5";
                  style={{ animationDelay: '0 && 0.4s' }}
                >;
                  <Play className="w-5 h-5 mr-2" />;
<<<<<<< HEAD
                </Button>;href={secondaryAction.href}
variant='outline';
                  size='lg';
                  className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
                  style={{ animationDelay: '0.4s' }}
                >;
                  <Play className='w-5 h-5 mr-2' />;
                  {secondaryAction.text}
<<<<<<< HEAD
                </Button>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                </Button>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
              )}
            </div>;
          )}
        {/* Stats Section */}
<<<<<<< HEAD
        {stats && (
<div
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        {stats && (;
          <div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
            className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in'
=======
                </Button>;
              )}
            </div>;
          )}
        {/* Stats Section */}{stats && (<div;
        {stats && (<div;
            className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
            style={{ animationDelay: '0 && 0.6s' }}>;
            {stats && stats.map((stat, index) => (<div key={index} className='text-center group'>;
                <div className='relative'>;
<<<<<<< HEAD
                  <div
                    {stat.value}
<<<<<<< HEAD
                  </div>
                  <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
                <div className='text-gray-400 text-xs sm:text-sm md:text-base font-medium'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                  <div;
                    {stat.value}</div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
                <div className="text - gray - 400 text - xs sm:text - sm md:text - base font - medium">;</div>;
                  <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />;
                </div>;
                <div className='text-gray-400 text-xs sm:text-sm md:text-base font-medium'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
                  </div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
                <div className="text - gray - 400 text - xs sm:text - sm md:text - base font - medium">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
                  {stat.label}
                </div>;
              </div>;
            ))}
          </div>;
        )}
        {/* Trust Indicators */}
<<<<<<< HEAD
<div
          className='mt-16 md:mt-20 animate-fade-in'
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Developers</span>
            </div>
<<<<<<< HEAD
            <div className='flex items-center gap-2'>
              <Users className='w-4 h-4' />
              <span>10,000+ Developers</span>
            </div>
            <div className='flex items-center gap-2'>
              <Star className='w-4 h-4 text-yellow-400' />
origin/cursor/automate-test-improve-and-merge-code-2533
=======
              <Star className="w-4 h-4 text-yellow-400" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
<<<<<<< HEAD
<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white/20 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse' />
=======
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        </div>
      </div>
=======
<div;
          className='mt-16 md:mt-20 animate-fade-in';
            </div>;
            <div className="flex items-center gap-2">;
              <Users className="w-4 h-4" />;
              <span>10,000+ Developers</span>;
            </div>;
              <Star className="w-4 h-4 text-yellow-400" />;
            <div className='flex items-center gap-2'>;
              <Users className='w-4 h-4' />;
              <span>10,000+ Developers</span>;
            </div>;
            <div className='flex items-center gap-2'>;
              <Star className='w-4 h-4 text-yellow-400' />;
              <span>99.9% Uptime</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Scroll Indicator */}<div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">;
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse" />;
        </div>;
      </div>;
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
      </div>;<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>;
        <div className='w-6 h-10 border-2 border-white/20 rounded-full flex justify-center'>;
          <div className='w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse' />;
        </div>;
      </div>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      {/* Decorative Elements */}
<div className='absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse' />;
      <div;
        className='absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse';
        style={{ animationDelay: '1s' }}
      />;
      <div;
        className='absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse';
        style={{ animationDelay: '2s' }}
<<<<<<< HEAD
      />
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}
}
}


      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
};

export default Hero;
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      />;
  )}
}
}<div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />;
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />;
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />;
    </section>;
  )}export default Hero;</div>;
=======
                </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
      {/* Decorative Elements */}</div>;
      </div>;
      {/* Decorative Elements */}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

        </div>
      </div>

      {/* Decorative Elements */}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
