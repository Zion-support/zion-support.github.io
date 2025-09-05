
import React from 'react';

interface HowItWorksSectionProps {_className?: string;
  style?: React.CSSProperties;}

const _getSteps = (_t: unknown) => [
  {_title: t('how_it_works.post'), _description: t('how_it_works.post_desc'), _icon: Send},
  {_title: t('how_it_works.match'), _description: t('how_it_works.match_desc'), _icon: Search},
  {_title: t('how_it_works.hire_buy'), _description: t('how_it_works.hire_buy_desc'), _icon: Handshake},
  {_title: t('how_it_works.done'), _description: t('how_it_works.done_desc'), _icon: Check}];

export function HowItWorksSection(_{_className, _style}: HowItWorksSectionProps) {_const { t} = useTranslation();
  const _steps = getSteps(t);
  
  return (
    <section className={_cn("py-20 bg-zion-blue", _className)} style={_style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{_t('home.how_it_works_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {_t('home.how_it_works_subtitle')}
          </p>
        </div>

        <div className="relative">
          {_/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>
          
          <div className="space-y-12 md:space-y-0">
            {_steps.map(_(step, _index) => (
              <div 
                key={step.title}
                className={_`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""} relative`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {_index % 2 === 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{_step.description}</p>
                    </div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">
                  <step.icon className="w-6 h-6 text-zion-cyan" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {_index % 2 !== 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{_step.description}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
