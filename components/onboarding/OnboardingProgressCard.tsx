
import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';

import { CheckCircle2, Circle, PartyPopper  } from 'lucide-react';'

      {/* Progress Bar */}

  cta_label?: string;
  cta_href?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

;
export type OnboardingProgressCardProps = {
};

export type OnboardingProgressCardProps = {;
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;}
function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
}

  const completed_count = steps.filter (string => s.completed).length;
  return Math.round ((completed_count / steps.length) * 100)cta_label?: string;
  cta_href?: string;

}
;
export type OnboardingProgressCardProps = {
  title: string,
  steps: OnboardingStep[],
  highlightColorClass?: string;
}
  return Math.round((completedCount / steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
};
  return Math.round((completedCount / steps.length) * 100);

export type OnboardingProgressCardProps = {
  title: string,
  steps: OnboardingStep[],
  highlightColorClass?: string;
};

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
export default function OnboardingProgressCard({
  title
  steps
  highlightColorClass = 'from-neon-green to-neon-blue'
}: OnboardingProgressCardProps) {
  title,
  steps,
  highlightColorClass = 'from-neon-green to-neon-blue',
}: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(
    s => !s.completed && s.ctaHref && s.ctaLabel
  );
  return (
    <div className='rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 70 dark:bg - black / 40 p - 5 shadow - sm'>;

      <div className='flex items - center justify - between'>;
        <h3 className='text - lg font - semibold'>{title}</h3>;
        <div className='text - sm opacity - 75'>{percentage}% complete</div>;
      </div>;
      {/* Progress Bar */}


      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
        </div>;

  steps}
  highlightColorClass = 'from-neon-green to-neon-blue'}
}: OnboardingProgressCardProps) {;

const percentage = computePercentage(steps);

const allDone = percentage === 100;

const firstIncomplete = steps.find(
    s => !s.completed && s.ctaHref && s.ctaLabel;
  );
  return (
    <div className = 'rounded-xl border border-gray-200 dark: border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'    />}
      <div className='flex items-center justify-between'    />}
        <h3 className='text-lg font-semibold'    />{title}</h3>
        <div className='text-sm opacity-75'    />{percentage}% complete</div>
      </div>
      {/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'    />
        <div;
className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}
}
 ;
  return (
    <div className=\"rounded-xl border border-gray-200 dark: border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm\"    />"
      <div className=\"flex items-center justify-between\"    />"
        <h3 className=\"text-lg font-semibold\"    />{title}</h3>"
        <div className=\"text-sm opacity-75\"    />{percentage}% complete</div>
      </div>

      {/* Progress Bar *}
}"
      <div className=\"mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden\"    />;

        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`;
          }
          style={{ width: `${percentage}%` }}

           />
      </div>



    </div>;



        <div className=&quot;mt-5&quot;>
          <Link href={firstIncomplete.ctaHref!}>
            <a className=&quot;inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition&quot;>
              {firstIncomplete.ctaLabel}
            </a>
          </a>
        </div>
      ) : null}




