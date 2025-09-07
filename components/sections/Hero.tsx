

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
  subtitle;
  primaryAction;
  secondaryAction;

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
                  variant="outline"
                  variant="outline"
                  size="lg"
                  className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          )}

        </div>
        {/* Stats Section */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            style={{ animationDelay: '0 && 0.6s' }}>;
            {stats && stats.map((stat, index) => (<div key={index} className='text-center group'>;
                <div className='relative'>;
                  <div;
                    {stat.value}</div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
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
                  </div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
                <div className="text - gray - 400 text - xs sm:text - sm md:text - base font - medium">;

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
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Developers</span>
            </div>


            <div className='flex items-center gap-2'>'
              <Users className='w-4 h-4' />'
              <span>10,000+ Developers</span>
            </div>"
              <Star className="w-4 h-4 text-yellow-400" />
            <div className='flex items-center gap-2'>
              <Users className='w-4 h-4' />
              <span>10,000+ Developers</span>
<div;
className='mt-16 md:mt-20 animate-fade-in'
            </div    />
            <div className=\"flex items-center gap-2\"    />"
              <Users className=\"w-4 h-4\"    />
              <span    />10,000+ Developers</span>
            </div>

            <div className='flex items-center gap-2'    />
              <Users className='w-4 h-4'    />
              <span    />10,000+ Developers</span>
            </div>
            <div className='flex items-center gap-2'    />
              <Star className='w-4 h-4 text-yellow-400'    />
              <span    />99.9% Uptime</span>
            <div className='flex items-center gap-2'>
              <Star className='w-4 h-4 text-yellow-400' />
origin/cursor/automate-test-improve-and-merge-code-2533
              <span>99.9% Uptime</span>
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

<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'    />
        <div className='w-6 h-10 border-2 border-white/20 rounded-full flex justify-center'    />
          <div className='w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse'    />
        </div>
      </div>

      {/* Decorative Elements */}
<div className='absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse'    />
      <div
        className='absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse'
        style={{ animationDelay: '1s' }



}
}
}



"
      <div className=\"absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse\"    />"
      <div className=\"absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse\" style={{ animationDelay: '1s' }}    />"
      <div className=\"absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse\" style={{ animationDelay: '2s' }}    />
    </section>
  )
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


"
