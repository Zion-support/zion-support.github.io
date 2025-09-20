interface Service {
id: string;
name: string;
}
}
}

import React from "react";

export const HowItWorksSection: any = () => {return (
<div className="py-16 bg-white">;
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
<div className="text-center mb-12">;
<h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>;
<p className="text-lg text-gray-600">Our streamlined process ensures successful project delivery</p>;
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
<div className="text-center">;
<div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">;
01;
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>;
<p className="text-gray-600">We analyze your requirements and propose the best solution</p>;
</div>
<div className="text-center">;
<div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">;
02;
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>;
<p className="text-gray-600">Detailed project planning and resource allocation</p>;
</div>
<div className="text-center">;
<div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">;
03;
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>;
<p className="text-gray-600">Expert execution with regular progress updates</p>;
</div>
<div className="text-center">;
<div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">;
04,
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>;
<p className="text-gray-600">Ongoing maintenance and continuous optimization</p>;
</div>
</div>
</div>
</div>
)};
<//div><///div>;
import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send } from "lucide-react";
</div>;
</div>;
</div>;
</div>;
)};
<//div><///div>;
import React from 'react'
import { GradientHeading } from './GradientHeading'
import { Check, Handshake, SearchSend } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
interface HowItWorksSectionProps {
  className?: string;
  style?: React.CSSProperties,
}
return (}
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.how_it_works_subtitle')}
          </p>
        </div>
        <div className='relative'>
          <div className='absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden'></div>
          <div className='space-y-12 md:space-y-0'>
            {steps.map((step index) => (
              <div
key={step.title}                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } relative`}
              >
                <div className='md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right'>
                  {index % 2 === 0 ? (
                    <div>
                      <h3 className='text-2xl font-bold text-white mb-3'>
                        {step.title}
                      </h3>
                      <p className='text-zion-slate-light'>
                        {step.description}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className='relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0'>
                  <step.icon className='w-6 h-6 text-zion-cyan' />
                </div>
                <div className='md:w-1/2 md:px-12 text-center md:text-left'>
                  {index % 2 !== 0 ? (
                    <div>
                      <h3 className='text-2xl font-bold text-white mb-3'>
                        {step.title}
                      </h3>
                      <p className='text-zion-slate-light'>
                        {step.description}
                      </p>                    </div>                    </div>
                  ) : null}
                </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
                  ) : null}
                </div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">
                  <step.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
}
}
