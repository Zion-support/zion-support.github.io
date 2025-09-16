
import { GradientHeading } from "./GradientHeading";
import { Check, Handshake, Search, Send } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface HowItWorksSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const getSteps = (t: any) => [
  {
    title: t('how_it_works.post'),
    description: t('how_it_works.post_desc'),
    icon: Send,
  },
  {
    title: t('how_it_works.match'),
    description: t('how_it_works.match_desc'),
    icon: Search,
  },
  {
    title: t('how_it_works.hire_buy'),
    description: t('how_it_works.hire_buy_desc'),
    icon: Handshake,
  },
  {
    title: t('how_it_works.done'),
    description: t('how_it_works.done_desc'),
    icon: Check,
  },
];

export function HowItWorksSection({ className, style }: HowItWorksSectionProps) {
  const { t } = useTranslation();
  const steps = getSteps(t);
  
  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.how_it_works_subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
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
  );
}
