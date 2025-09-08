

<<<<<<< HEAD
    value: string;
    label: string;
    color: string;
  }>;


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
      <div'
        className='absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float''
        style={{ animationDelay: '1 && 1.5s' }}
      />;
      <div'
        className='absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float''
        style={{ animationDelay: '3s' }}


  title: string,
  subtitle: string,
  primaryAction?: {
    text: string,


  }
  secondaryAction?: {}
    text: string;

  secondaryAction?: {
    text: string
    href: string;
  }
  stats?: Array<{
    value: string
    label: string


    color: string
  }>
}
const Hero: React.FC<HeroProps> = ({


  title;
=======
}
"title": string;
  "subtitle": string;
  primaryAction?: {
    }
    "text": string;
          <p className = 'text-xl "sm": text-2xl "md":text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>'
    "color": string
  }>
}
;
  const "Hero": React.FC<HeroProps> = ({ title;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  subtitle;
  primaryAction;
  secondaryAction;

<<<<<<< HEAD

      />;
      <div'
        className=absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float'
        style={{ animationDelay: '3s }}
    href: string;
  }
  secondaryAction?: {}
    text: string;


import React from 'react';,
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react';


import Button from ../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react;
interface HeroProps {
title: string;
  subtitle: string;
  primaryAction?: {

  }>
}
const Hero: React.FC<HeroProps> = ({}
  title;
  subtitle;
  primaryAction;
  secondaryAction;'
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}
          <p className = 'text-xl sm: text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light' />;}
    color: string;}
  }>
}

const Hero: React.FC<HeroProps> = ({
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}


  title,
  subtitle,
  primaryAction,
  secondaryAction,
  stats}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Elements */}


            {title}
          </h1>;
          <p className=text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed font - light">;

            {subtitle}
          </p>

          {/* Action Buttons */}
=======
  stats   }) => {



}



return (;
    <section className;
            {subtitle}
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}

            {subtitle}

          </p>


          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>
              {primaryAction && (
          </p />
          </p>;
          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (;
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;
              {primaryAction && (;
                <Button
                  href={primaryAction && primaryAction.href}
                  size='lg'
                  className='animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'


                </Button>
              
}
              {secondaryAction && (;
                <Button
}
href={secondaryAction.href}
variant='outline';'
                  size='lg''
                  className='animate-scale-in border-white/20 "hover": border-white/40 "hover":bg-white/5''
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  style={{ "animationDelay": '0.4s' ,'
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
            {title}
          </h1>;
          <p className=text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed font - light">;
            {subtitle}
          </p>

          {/* Action Buttons */}

              )}
              {secondaryAction && (;
                <Button
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
                </Button>;href={secondaryAction.href}
variant='outline';
                  size='lg';
                  className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5';
                  style={{ animationDelay: '0.4s' }}
                >;
                  <Play className='w-5 h-5 mr-2' />;'
                  {secondaryAction.text}
                </Button>;
              )}
            </div>;
          )}
        {/* Stats Section */}
        {stats && (;
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in'
                </Button>;
              )}
            </div>;
          )}
        {/* Stats Section */}{stats && (<div;
        {stats && (<div;
            className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in';
<<<<<<< HEAD

                  variant="outline"

=======
                  variant="outline"
                  variant="outline"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  size="lg"
                  className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Play className="w-5 h-5 mr-2" />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          )}

<<<<<<< HEAD
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </div>
        {/* Stats Section */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
<<<<<<< HEAD

          {(primary_action || secondary_action) && (
            <div className='flex flex - col sm:flex - row gap - 6 justify - center items - center mb - 20'>;
              {primary_action && (
                <Button;
                  href={primary_action.href}
                  size='lg';
                  className='animate - scale - in shadow - 2xl shadow - blue - 500 / 25 hover:shadow - blue - 500 / 40';
                  style={{ animation_delay: '0.2s' }}
                >;
                  {primary_action.text}
                  <ArrowRight className='w - 5 h - 5 ml - 2' />                </Button>              {primary_action && (
                <Button;
                  href={primary_action.href}
                  size="lg";
                  className="animate - scale - in shadow - 2xl shadow - blue - 500 / 25 hover:shadow - blue - 500 / 40";
                  style={{ animation_delay: '0.2s' }}
                >;
                  {primary_action.text}
                  <ArrowRight className="w - 5 h - 5 ml - 2" />;
                </Button>)}
              {secondary_action && (
                <Button;
                  href={secondary_action.href}
                  variant='outline';
                  size='lg';
                  className='animate - scale - in border - white / 20 hover:border - white / 40 hover:bg - white / 5';
                  style={{ animation_delay: '0.4s' }}
                >;
                  <Play className='w - 5 h - 5 mr - 2' />                  {secondary_action.text}                  variant="outline";
                  size="lg";
                  className="animate - scale - in border - white / 20 hover:border - white / 40 hover:bg - white / 5";
                  style={{ animation_delay: '0.4s' }}
                >;
                  <Play className="w - 5 h - 5 mr - 2" />;
                </Button>)}
            </div>)}
        </div>;
        {/* Stats Section */}
        {stats && (
          <div;
            className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 md:gap - 8 max - w-5xl mx - auto animate - fade - in';
            style={{ animation_delay: '0.6s' }}
          >;
            {stats.map ((stat, index) => (
              <div key={index} className='text - center group'>;

=======
                    {stat.value}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            style={{ animationDelay: '0 && 0.6s' }}>;
            {stats && stats.map((stat, index) => (<div key={index} className='text-center group'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className='relative'>;
                  <div;
                    {stat.value}</div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
<<<<<<< HEAD

                <div className='text - gray - 400 text - xs sm:text - sm md:text - base font - medium'>                  {stat.label}            {stats.map ((stat, index) => (
              <div key={index} className="text - center group">;
                <div className="relative">;
                  <div className={`text - 2xl sm:text - 3xl md:text - 4xl font - bold mb - 2 md:mb - 3 ${stat.color} group - hover:scale - 110 transition - transform duration - 300`}>;

=======
                <div className="text - gray - 400 text - xs sm:text - sm md:text - base font - medium">;</div>;
                  <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />;
                </div>;
                <div className='text-gray-400 text-xs sm:text-sm md:text-base font-medium'>;
        </div>
        {/* Stats Section */}
        {stats && (
<div
}
className='grid grid-cols-2 "md": grid-cols-4 gap-6 "md":gap-8 max-w-5xl mx-auto animate-fade-in''

            style={{ "animationDelay": '0 && 0.6s' ,'
}>;
            {stats && stats.map((stat, index) => (<div key={index} className='text-center group'>;'
                <div className='relative'>;'

                  <div
                    {stat.value}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
                <div className="text - gray - 400 text - xs sm:text - sm md:text - base font - medium">;
<<<<<<< HEAD

                  {stat.label}


                    {stat.value}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>


                </div>
              </div>

            ))}
          </div>
        )}
        {/* Trust Indicators */}




        <div
          className='mt-16 md:mt-20 animate-fade-in'



        <div className="mt-16 md:mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>



=======

                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

variant='outline'
                  size='lg'
                  className='animate-scale-in border-white/20 hover: border-white/40 hover:bg-white/5'
                <div className='text-gray-400 text-xs "sm":text-sm "md":text-base font-medium'>'

                  style={{ animationDelay: '0.4s' }
}
                    />;
                  <Play className='w-5 h-5 mr-2'    />;
                  {secondaryAction.text}

                </Button>
              )}
            </div>;
          )}
        {/* Stats Section */}

        {stats && (
<div;
className='grid grid-cols-2 md: grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in'
}
            style={{ animationDelay: '0 && 0.6s' }
}    />;
            {stats && stats.map((stat, index) => (<div key={index} className='text-center group'    />;
                <div className='relative'    />;

                  <div;
                    {stat.value}

                  </div    />
                  <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover: opacity-100 transition-opacity duration-300'    />
                </div>
                <div className='text-gray-400 text-xs sm:text-sm md:text-base font-medium'    />

                  {stat.labe}
}
                </div>;
              </div>;
            ))}
          </div>
        )}
        {/* Trust Indicators */}


<div,
className='mt-16 "md":mt-20 animate-fade-in''
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Developers</span>
            </div>


<<<<<<< HEAD
              <Star className="w-4 h-4 text-yellow-400" />
              <span>99.9% Uptime</span>
          className='mt-16 md:mt-20 animate-fade-in'
            </div>"
            <div className="flex items-center gap-2">"
              <Users className="w-4 h-4" />
=======
            <div className='flex items-center gap-2'>'
              <Users className='w-4 h-4' />'
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <span>10,000+ Developers</span>
            </div>"
              <Star className="w-4 h-4 text-yellow-400" />
            <div className='flex items-center gap-2'>
              <Users className='w-4 h-4' />
              <span>10,000+ Developers</span>
<<<<<<< HEAD

=======
<div;
className='mt-16 md:mt-20 animate-fade-in'
            </div    />
            <div className=\"flex items-center gap-2\"    />"
              <Users className=\"w-4 h-4\"    />
              <span    />10,000+ Developers</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>

            <div className='flex items-center gap-2'    />
              <Users className='w-4 h-4'    />
              <span    />10,000+ Developers</span>
            </div>
            <div className='flex items-center gap-2'    />
              <Star className='w-4 h-4 text-yellow-400'    />
              <span    />99.9% Uptime</span>
<<<<<<< HEAD



=======
            <div className='flex items-center gap-2'>
              <Star className='w-4 h-4 text-yellow-400' />
origin/cursor/automate-test-improve-and-merge-code-2533
              <span>99.9% Uptime</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
            <div className='flex items-center gap-2'>'
              <Star className='w-4 h-4 text-yellow-400' />'
              <span>99.9% Uptime</span>
            </div>
      {/* Scroll Indicator */}
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse" />
        </div>

      </div>
      {/* Scroll Indicator */}




<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
}
}
}



<<<<<<< HEAD
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

=======
"
      <div className=\"absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse\"    />"
      <div className=\"absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse\" style={{ animationDelay: '1s' }}    />"
      <div className=\"absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse\" style={{ animationDelay: '2s' }}    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </section>
  )
};
export default Hero;
<<<<<<< HEAD

      <div className='absolute top - 1/4 right - 1/4 w - 2 h - 2 bg - blue - 500 rounded - full animate - pulse' />;
      <div;
        className='absolute bottom - 1/4 left - 1/4 w - 1 h - 1 bg - green - 500 rounded - full animate - pulse';
        style={{ animation_delay: '1s' }}
      />;
      <div;
        className='absolute top - 1/2 right - 1/3 w - 1.5 h - 1.5 bg - purple - 500 rounded - full animate - pulse';
        style={{ animation_delay: '2s' }}
      />);
}
;
export default Hero;
;

}
}
}

      {/* Decorative Elements */}

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      {/* Scroll Indicator */}
      <div className='absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2 animate - bounce'>;
        <div className='w - 6 h - 10 border - 2 border - white / 20 rounded - full flex justify - center'>;
          <div className='w - 1 h - 3 bg - blue - 500 rounded - full mt - 2 animate - pulse' />        </div>;
      </div>;
      {/* Decorative Elements */}      <div className="absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2 animate - bounce">;
        <div className="w - 6 h - 10 border - 2 border - white / 20 rounded - full flex justify - center">;
          <div className="w - 1 h - 3 bg - blue - 500 rounded - full mt - 2 animate - pulse" />;
        </div>;
      {/* Decorative Elements */}</div>;
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


<<<<<<< HEAD

=======
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
