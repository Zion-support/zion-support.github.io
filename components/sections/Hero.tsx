import React from 'react;,
=======
import React from react',
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
    text: string;
    href: string;
  }
  stats?: Array<{}
    value: string;
    label: string;
    color: string;
  }>;
const Hero: React.FC<HeroProps> = ({}
  title;
  subtitle;
  primaryAction;
  secondaryAction;
  stats;
}) => {}
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  stats}) => {
  return (
      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float />;
      <div
        className='absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float'
        style={{ animationDelay: 1 && 1.5s' }}
      />;
      <div'
        className=absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float'
        style={{ animationDelay: '3s }}
    href: string;
  }
  secondaryAction?: {}
    text: string;
=======

  secondaryAction?: {
    text: string
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    href: string;
  }

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import Button from ../ui/Button';
import { ArrowRight, Play, Star, Zap, Shield, Users } from 'lucide-react;
interface HeroProps {
  title: string,
  subtitle: string,
  primaryAction?: {


    text: string;

  }>
}
const Hero: React.FC<HeroProps> = ({}
  title;
  subtitle;
  primaryAction;
  secondaryAction;
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}
=======
          <p className = text-xl sm: text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light />;}
    color: string;}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}


  return (}
    <section className;}
            {subtitle}

          </p />
          </p>;
          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (;'
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20>;
              {primaryAction && (;

                  className=animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'

                  style={{ animationDelay: '0.2s }}
                >
                  {primaryAction.text}
                  <ArrowRight className="w-5 h-5 ml-2 />
                </Button>

}
              {secondaryAction && (;}
                <Button;}
href={secondaryAction.href}
variant=outline'
                  size='lg
                  className=animate-scale-in border-white/20 hover: border-white/40 hover:bg-white/5'

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
}) => {const Hero: React.FC<HeroProps> = ({title,subtitle,primaryAction,secondaryAction,stats}) => {return ({/* Floating Elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float />;
      <div;
        className=absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float';
        style={{ animationDelay: '1 && 1.5s }}
      />;
      <div;
        className=absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/8 rounded-full blur-3xl animate-float';
        style={{ animationDelay: '3s }}
    href: string;
  }
  secondaryAction?: {text: string;
    href: string;
  }
  stats?: Array<{value: string;
    label: string;
import React from react',import Button from '../ui/Button;
import { ArrowRight, Play, Star, Zap, Shield, Users  } from lucide-react';
interface HeroProps  {title: string;
  subtitle: string;
  primaryAction?: {text: string;
          <p className='text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light>;
    color: string;
  }>;
}
const Hero: React.FC<HeroProps> = ({title;
  subtitle;
  primaryAction;
  secondaryAction;<p className=text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light'>            {subtitle}stats}) => {return (<section className;{subtitle}</p>;
          </p>;
          {/* Action Buttons */}{(primaryAction || secondaryAction) && (<div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20>;
              {primaryAction && ({(primaryAction || secondaryAction) && (<div className=flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;
              {primaryAction && (<Button;
                  href={primaryAction && primaryAction.href}
                  size='lg;
                  className=animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40';
            {title}
          </h1>;
          <p className=text - xl sm:text - 2xl md:text - 3xl text - gray - 300 max - w-4xl mx - auto mb - 16 leading - relaxed font - light">;
            {subtitle}
          </p>;
          {/* Action Buttons */}
                <Button;
                  href={primaryAction && primaryAction.href}
                  size="lg;
                  className=animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40";
                  style={{ animationDelay: '0 && 0.2s }}>;
                  {primaryAction && primaryAction.text}
                  <ArrowRight className="w-5 h-5 ml-2 />;
                </Button>;style={{ animationDelay: 0.2s' }}
                >;
                  {primaryAction.text}
                  <ArrowRight className='w-5 h-5 ml-2 />;
                </Button>;
              )}
              {secondaryAction && (<Button;
                </Button>;
              )}
              {secondaryAction && (;
                <Button
                  href={secondaryAction && secondaryAction.href}
                  variant=outline';
                  size='lg;
                  className=animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5';
                  style={{ animationDelay: '0 && 0.4s }}>;
                  <Play className=w-5 h-5 mr-2' />                  {secondaryAction && secondaryAction.text}                  variant=outline";
                  size="lg;
                  className=animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5";
                  style={{ animationDelay: '0 && 0.4s }}
                >;
                  <Play className="w-5 h-5 mr-2 />;
                </Button>;href={secondaryAction.href}
variant=outline';
                  size='lg;
                  className=animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5';
                  style={{ animationDelay: '0.4s }}
                >;
                  <Play className=w-5 h-5 mr-2' />;
                  {secondaryAction.text}
                </Button>;
=======
origin/cursor/automate-test-improve-and-merge-code-2533
              )}
              {secondaryAction && (;
                <Button;
                  href={secondaryAction && secondaryAction.href}'
                  variant=outline'
                  size='lg
                  className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'
                  style={{ animationDelay: 0 && 0.4s' }}>;'
                  <Play className=w-5 h-5 mr-2 />                  {secondaryAction && secondaryAction.text}                  variant="outline";
                  size=lg";"
                  className=animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5;'
                  style={{ animationDelay: '0 && 0.4s }}
                >;"
                  <Play className="w-5 h-5 mr-2 />;
                </Button>;
                  href={secondaryAction.href}
variant=outline'
                  size='lg
                  className=animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'
                  style={{ animationDelay: '0.4s }}
                >
                  <Play className=w-5 h-5 mr-2' />
                  {secondaryAction.text}
                </Button>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              )}
            </div>;
          )}
        {/* Stats Section */}
        {stats && (;

            style={{ animationDelay: '0 && 0.6s }}>;
            {stats && stats.map((stat, index) => (;
              <div key={index} className='text-center group'>;
                <div className=relative'>;
                  <div;
                    {stat.value}
                  </div>;
                  <div className="absolute -inset - 2 bg - gradient - to - r from - transparent via - blue - 500 / 5 to - transparent rounded - lg opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                </div>;
                <div className=text - gray - 400 text - xs sm:text - sm md:text - base font - medium">;
                  </div>
                  <div className='absolute -inset-2 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 />
                </div>
                <div className=text-gray-400 text-xs sm:text-sm md:text-base font-medium'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Indicators */}

              <Users className="w-4 h-4 />
              <span>10,000+ Developers</span>
            </div>
              <Star className=w-4 h-4 text-yellow-400" />

          className='mt-16 md:mt-20 animate-fade-in
            </div>"
            <div className=flex items-center gap-2>"
              <Users className="w-4 h-4 />
              <span>10,000+ Developers</span>
            </div>
              <Star className="w-4 h-4 text-yellow-400" />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <div className=flex items-center gap-2'>
              <Users className='w-4 h-4 />
              <span>10,000+ Developers</span>
            </div>

            </div>
          </div>
        </div>
      </div>

}

      <div className=absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse style={{ animationDelay: 2s' }} />
    </section>
  )
}
export default Hero;

                </div>;
              </div>))}
          </div>)}
        {/* Trust Indicators */}

              <Star className="w - 4 h - 4 text - yellow - 400" />;
              <span > 99.9% Uptime</span>;
            </div>;
          </div>;
        </div>;
      </div>;


"