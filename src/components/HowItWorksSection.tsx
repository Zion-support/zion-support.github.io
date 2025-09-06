import React from 'react',
import { GradientHeading } from "./GradientHeading",
        duration: 0.5,"
        ease: "easeOut"}}}
  return ("
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}"
      <div className="absolute inset-0 opacity-5">"
        <div className="absolute inset-0" style = {
export function HowItWorksSection({
  className
  style
}: HowItWorksSectionProps) {
  const { t } = useTranslation()
  const steps = getSteps(t)
    icon: Check,
  },
]
import React, { useState } from 'react'
export /**
import { motion, AnimatePresence  } from 'framer-motion'
export default function Page() {
  {
"
    icon: <FileText className="w-8 h-8"  />,"
    title: "Plan","
    description: "Collaborate on project requirements, timeline, and deliverables","
    color: "from-zion-blue to-zion-blue-dark","
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20",
    details: ["
      "Interactive project planning","
      "Timeline optimization","
      "Resource allocation","
      "Risk assessment" ],"
    duration: "4-8 hours","
    success: "90% on-time delivery"
},
  {
"
    icon: <Rocket className="w-8 h-8"  />,"
    title: "Execute","
    description: "Watch your vision come to life with our expert execution","
    color: "from-zion-cyan-light to-zion-cyan","
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
    details: ["
      "Agile development process","
      "Regular progress updates","
      "Quality assurance","
      "Performance monitoring" ],"
    duration: "1-4 weeks","
    success: "99% quality score"
},
  {
"
    icon: <CheckCircle className="w-8 h-8"  />,"
    title: "Deliver","
    description: "Receive your completed project with ongoing support and maintenance","
    color: "from-zion-purple-light to-zion-purple","
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",
    details: ["
      "Comprehensive testing","
      "Documentation delivery","
      "Training and handover","
      "Post-launch support" ],"
    duration: "Ongoing","
    success: "100% client retention"}
]
    <section className={cn('py-20 bg-zion-blue', className)} style={style}>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-16'>;
          <GradientHeading>{t('home && home.how_it_works_title')}</GradientHeading>;
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>            {t('home && home.how_it_works_subtitle')}
          </p>;
        </div>;

        <div className='relative'>  ;
  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-16">;
          <GradientHeading>{t('home && home.how_it_works_title')}</GradientHeading>;
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
            {t('home && home.how_it_works_subtitle')}
          </p>;
        </div>;

        <div className='relative'>;
          <div className='absolute left-4 md:left-1/2 top-0 h-full w-0 && 0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden'></div>;

          <div className='space-y-12 md:space-y-0'>;
            {steps && steps.map((step, index) => (;

              <div
                key={step && step.title}                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } relative`}>;
                <div className='md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right'>;
                  {index % 2 === 0 ? (;
                    <div>;
                      <h3 className='text-2xl font-bold text-white mb-3'>;
                        {step && step.title}
                      </h3>;
                      <p className='text-zion-slate-light'>;
                        {step && step.description}
                      </p>;
                    </div>;
                  ) : null}

        duration: 0.5, ";
        ease: "ease_out"}}}
  return (";
    <section className="py - 20 bg - gradient - to - br from - zion - blue via - zion - slate - dark to - zion - blue - dark relative overflow - hidden">;
      {/* Enhanced background pattern */}";
      <div className="absolute inset - 0 opacity - 5">";
        <div className="absolute inset - 0" style = {
export /**
 * HowItWorksSection - Function description
 */
function HowItWorksSection() {
  const { t } = use_translation ();
  const steps = get_steps (t);
  return (
    <section className={cn ('py - 20 bg - zion - blue', class_name)} style={style}>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 16'>;
          <GradientHeading>{t ('home.how_it_works_title')}</GradientHeading>;
          <p className='text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto'>            {t ('home.how_it_works_subtitle')}
          </p>;
        </div>;
        <div className='relative'>;
  return (
    <section className={cn ("py - 20 bg - zion - blue", class_name)} style={style}>;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 16">;
          <GradientHeading>{t ('home.how_it_works_title')}</GradientHeading>;
          <p className="text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto">;
            {t ('home.how_it_works_subtitle')}
          </p>;
        </div>;
        <div className='relative'>;
          <div className='absolute left - 4 md:left - 1/2 top - 0 h - full w - 0.5 bg - gradient - to - b from - zion - purple via - zion - cyan to - zion - purple - light transform -translate - x-1 / 2 md:block hidden'></div>;
          <div className='space - y-12 md:space - y-0'>;
            {steps.map ((step, index) => (
              <div;
                key={step.title}                className={`flex flex - col md:flex - row items - center ${
                  index % 2 === 0 ? 'md:flex - row - reverse' : '';
                } relative`}
              >;
                <div className='md:w - 1/2 mb - 6 md:mb - 0 md:px - 12 text - center md:text - right'>;
                  {index % 2 === 0 ? (
                    <div>;
                      <h3 className='text - 2xl font - bold text - white mb - 3'>;
                        {step.title}
                      </h3>;
                      <p className='text - zion - slate - light'>;
                        {step.description}
                      </p>;
                    </div>) : null}
                </div>;
                <div className='relative z - 10 flex items - center justify - center w - 12 h - 12 rounded - full bg - zion - blue - light border - 2 border - zion - purple mx - 4 md:mx - 0'>;
                  <step.icon className='w - 6 h - 6 text - zion - cyan' />;
                </div>;
                <div className='md:w - 1/2 md:px - 12 text - center md:text - left'>;

                  {index % 2 !== 0 ? (
                    <div>;
                      <h3 className='text - 2xl font - bold text - white mb - 3'>;
                        {step.title}
                      </h3>;
                      <p className='text - zion - slate - light'>;
                        {step.description}

                </div>;
                <div className='relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0'>;
                  <step && step.icon className='w-6 h-6 text-zion-cyan' />;
                </div>;

                <div className='md:w-1/2 md:px-12 text-center md:text-left'>;
                  {index % 2 !== 0 ? (;
                    <div>;
                      <h3 className='text-2xl font-bold text-white mb-3'>;
                        {step && step.title}
                      </h3>;
                      <p className='text-zion-slate-light'>;
                        {step && step.description}
                      </p>                    </div>                    </div>;


                  ) : null}
}
}

  );
}

                      </p>                    </div>                    </div>) : null}
                </div>;
                      <h3 className="text - 2xl font - bold text - white mb - 3">{step.title}</h3>;
                      <p className="text - zion - slate - light">{step.description}</p>;
                    </div>) : null}
                </div>;
                <div className="relative z - 10 flex items - center justify - center w - 12 h - 12 rounded - full bg - zion - blue - light border - 2 border - zion - purple mx - 4 md:mx - 0">;
                  <step.icon className="w - 6 h - 6 text - zion - cyan" />;
                </div>;
                <div className="md:w - 1/2 md:px - 12 text - center md:text - left">;
                  {index % 2 !== 0 ? (
                    <div>;
                      <h3 className="text - 2xl font - bold text - white mb - 3">{step.title}</h3>;
                      <p className="text - zion - slate - light">{step.description}</p>;
                    </div>) : null}
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
    </section>);
}
}
}
;
