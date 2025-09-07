<<<<<<< HEAD


import React from 'react';,
import Button from '../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react';

interface HeroProps {
title: string;
  subtitle: string;
  primaryAction?: {
    text: string;
          <p className = 'text-xl sm: text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light' />}
    color: string}
  }>
}
;
  const Hero: React.FC<HeroProps /> = ({ title;
  subtitle;
  primaryAction;
  secondaryAction;}
}
  stats   }) => {

  return (}
    <section className;}
            {subtitle}

          </p />
          </p>;
          {/* Action Buttons */}

          {(primaryAction || secondaryAction) && (
<div className='flex flex-col sm: flex-row gap-6 justify-center items-center mb-20' />
              {primaryAction && (}
                <Button;}
href={primaryAction && primaryAction.href}
                  size='lg'
                  className='animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'

                  style={{ animationDelay: '0.2s' }}
                 />
                  {primaryAction.text}
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
              
}
              {secondaryAction && (;}
                <Button;}
href={secondaryAction.href}
variant='outline'
                  size='lg'
                  className='animate-scale-in border-white/20 hover: border-white/40 hover:bg-white/5'

                  style={{ animationDelay: '0.4s' }
}
                 />;
                  <Play className='w-5 h-5 mr-2' />;
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
} />;
            {stats && stats.map((stat, index) => (<div key={index} className='text-center group' />;
                <div className='relative' />;

                  <div;
                    {stat.value}

                  </div />
                  <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover: opacity-100 transition-opacity duration-300' />
                </div>
                <div className='text-gray-400 text-xs sm:text-sm md:text-base font-medium' />

                  {stat.labe}
}
                </div>;
              </div>;
            ))}
          </div>;
        )}
        {/* Trust Indicators */}

<div;
className='mt-16 md:mt-20 animate-fade-in'
            </div />
            <div className=\"flex items-center gap-2\" />"
              <Users className=\"w-4 h-4\" />
              <span />10,000+ Developers</span>
            </div>

            <div className='flex items-center gap-2' />
              <Users className='w-4 h-4' />
              <span />10,000+ Developers</span>
            </div>
            <div className='flex items-center gap-2' />
              <Star className='w-4 h-4 text-yellow-400' />
              <span />99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}

<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce' />
        <div className='w-6 h-10 border-2 border-white/20 rounded-full flex justify-center' />
          <div className='w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse' />
        </div>
      </div>

      {/* Decorative Elements */}
<div className='absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse' />;
      <div;
        className='absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse';
        style={{ animationDelay: '1s' }
}
      />;
      <div;
        className='absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse';
        style={{ animationDelay: '2s' }
}

      />
  );
}
}
}

"
      <div className=\"absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse\" />"
      <div className=\"absolute bottom-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse\" style={{ animationDelay: '1s' }} />"
      <div className=\"absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse\" style={{ animationDelay: '2s' }} />
    </section>
  )
};

export default Hero;

"
=======
{
  /* Background Elements */ 
}<div className="absolute inset-0" > <div className="absolute inset-0 bg-[radial-gradient (circle at 50% 50%, rgba (59, 130, 246, 0.1), transparent 50%) ]" /> <div className="absolute inset-0 bg-[radial-gradient (circle at 80% 20%, rgba (59, 130, 246, 0.08), transparent 50%) ]" /> <div className="absolute inset-0 bg-[radial-gradient (circle at 20% 80%, rgba (34, 197, 94, 0.06), transparent 50%) ]" /> </div> <div className="mb-20 animate-fade-in"> <div className="mb-8"> <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in"> <Zap className="w-4 h-4 mr-2" /> 
}{
  secondaryAction && (<Button href= {
  secondaryAction.href 
}</Button>) 
}</div>) 
}</div> </div> <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> </div> </div> </div>) ) 
}</div>) 
}<span>Enterprise Security</span> </div> <div className="flex items-center gap-2" > <Users className="w-4 h-4" /> <span>10, 000+ Developers</span> </div> <div className="flex items-center gap-2" > <Star className="w-4 h-4 text-yellow-400" /> <span>99.9% Uptime</span> </div> </div> </div> </div> </section>) 
}
export default Hero
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
