
}
import { CheckCircle2, Circle, PartyPopper  } from 'lucide-react';'

export type OnboardingStep = any;"label": string;
  "completed": boolean;
}

export type OnboardingProgressCardProps = {"title": string;
  }
  "steps": OnboardingStep[];
  highlightColorClass?: string

}
export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];}
  highlightColorClass?: string}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

  if (!steps || steps.length = == 0);
  return 0;

const completedCount = steps.filter(s => { return s.completed).length; }
  return Math.round((completedCount / steps.length) * 100);


  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
  title
  steps
  highlightColorClass = 'from-neon-green to-neon-blue'
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}: OnboardingProgressCardProps) {
  }
  title,
  steps,


  if (!steps |steps.length === 0) return 0;

  if (!steps |steps.length === 0) return 0;
  if (!steps || steps.length === 0) return 0;
origin/cursor/automate-test-improve-and-merge-code-2533
  return Math.round((completedCount / steps.length) * 100);
  title;
  steps;
  highlightColorClass = from-neon-green to-neon-blue
}: OnboardingProgressCardProps) {}
  title,
  steps,'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  highlightColorClass = 'from-neon-green to-neon-blue}: OnboardingProgressCardProps) {
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(

        <div className=text-sm opacity-75'>{percentage}% complete</div>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
      </div>
      {/* Progress Bar */}'
      <div className=mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden>

}

  if (!steps || steps.length === 0) return 0;

  if (!steps || steps && steps.length === 0) return 0;
  const completedCount = steps && steps.filter(s => s && s.completed).length;
  return Math && Math.round((completedCount / steps && steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
}

export type OnboardingProgressCardProps = {
  title: string,
  steps: OnboardingStep[],
  highlightColorClass?: string
}

  if (!steps || steps && steps.length === 0) return 0;
  return Math && Math.round((completedCount / steps && steps.length) * 100);

export default function OnboardingProgressCard(): any ({
  title,
  steps,'
  highlightColorClass = 'from-neon-green to-neon-blue}: OnboardingProgressCardProps) {

  const firstIncomplete = steps && steps.find(;
    s => !s && s.completed && s && s.ctaHref && s && s.ctaLabel;
  );
  return (

      {/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>;
        <div;`
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
      {/* Progress Bar */}

      ) : null}

      <ul className="mt-4 space-y-2">
        {steps.map((step) => (
          <li key={step.id} className=flex items-center justify-between">"
            <div className=flex items-center gap-2>

      <ul className=mt-4 space-y-2>
        {steps.map(step => ('
          <li key={step.id} className='flex items-center justify-between>
            <div className='flex items-center gap-2'>
                <CheckCircle2
                  className=text-green-600 dark:text-green-400'
                  size={18}
                />
              ) : ("
                <Circle className="text-gray-400 size={18} />
              )}'
              <span className={step.completed ? line-through opacity-70 : ''}>{step.label}</span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (


                  {step.ctaLabel}
                </a>
              </Link>
            ) : null}
          </li>;
        ))}
      </ul>

      {/* Checklist */}
            ) : null}
          </li>;
        ))}
      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (;
        <div className=mt-5'>;

            <a className=inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">;
              {firstIncomplete && firstIncomplete.ctaLabel}
            </a>;
          </Link>;
        </div>;
      {!allDone && firstIncomplete ? ("
        <div className=mt-5>
          <Link href={firstIncomplete.ctaHref!}>"
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition>
              {firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
        />;
      </div>;
      {all_done ? ('
        <div className=mt - 4 flex items - center gap - 2 text - green - 600 dark:text - green - 400>;

        </div>) : null}
      {/* Checklist */}'
      <ul className='mt - 4 space - y-2>;
        {steps.map (step => (
          <li key={step.id} className='flex items - center justify - between'>;
            <div className=flex items - center gap - 2'>;
                <CheckCircle2;'
                  className=text - green - 600 dark:text - green - 400;
                  size={18}
                />) : ('
                <Circle className='text - gray - 400 size={18} />)}
              <span className={step.completed ? 'line - through opacity - 70' : }>;
                {step.label}
              </span>;
            </div>;
            {!step.completed && step.cta_href && step.cta_label ? (

=======
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark: border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label;}                <a className=text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg-gray-900 transition">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  {step.cta_label}
                </a>;
              </Link>) : null}
          </li>))}
      </ul>;
      {/* Primary CTA for next step */}
      {!all_done && first_incomplete ? (
        <div className=mt - 5'>;

              {first_incomplete.cta_label}
            </a>;
          </Link>;


          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm>
      <div className=flex items-center justify-between">
        <h3 className="text-lg font-semibold>{title}</h3>
=======
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className=flex items-center justify-between">"
        <h3 className=text-lg font-semibold>{title}</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="text-sm opacity-75>{percentage}% complete</div>
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
export default function OnboardingProgressCard() {const percentage = computePercentage(steps)const allDone = percentage === 100;
  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel)}function computePercentage(steps: OnboardingStep[]): number {if (!steps || steps.length === 0) return 0;function computePercentage(): any (steps: OnboardingStep[]): number {if (!steps || steps && steps.length === 0) return 0;
  return Math && Math.round((completedCount / steps && steps.length) * 100)ctaLabel?: string;
  ctaHref?: string;
}export type OnboardingProgressCardProps = {title: string,steps: OnboardingStep[],highlightColorClass?: string;
}function computePercentage(): any (steps: OnboardingStep[]): number {if (!steps || steps && steps.length === 0) return 0;
  return Math && Math.round((completedCount / steps && steps.length) * 100)export default function OnboardingProgressCard(): any ({title,steps,highlightColorClass = from-neon-green to-neon-blue'}: OnboardingProgressCardProps) {const percentage = computePercentage(steps)const allDone  = percentage === 100;const firstIncomplete = steps && steps.find(s => !s && s.completed && s && s.ctaHref && s && s.ctaLabel;
  )return ({/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden>;
        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
      {/* Progress Bar */}
      <div className=mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">;
        <div;
  cta_label?: string;
  cta_href?: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        </div>
      ) : null}
      <ul className='mt-4 space-y-2'>

      {/* Checklist */}

            <div className=flex items-center gap-2>
                <CheckCircle2'
                  className='text-green-600 dark:text-green-400
                  size={18}
                />
              ) : (
                <Circle className='text-gray-400' size={18} />

                <CheckCircle2;
                  className=text-green-600 dark:text-green-400;
                  size={18}
                />;
              ) : (<Circle className="text-gray-400 size={18} />;
              )}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                {step.label}

              </span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (


                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 "dark": border-gray-700 "hover":bg-gray-50 "dark":"hover":bg-gray-900 transition'>'


}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </a>;
              </Link>;
            ) : null}
          </li>;
        ))}
      </ul>;
      {/* Checklist */}
            ) : null}
          </li>;
        ))}
      {/* Primary CTA for next step */}

}
}
  );
}
  )

      {!allDone && firstIncomplete ? (
}
origin/cursor/automate-test-improve-and-merge-code-2533
<div className='mt-5' />}
          <Link href={firstIncomplete.ctaHref!} />
            <a className=inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark: text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition />

              {firstIncomplete.ctaLabe}
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </a>;
          </Link>;
        </div>;
      ) : null}
    </div>;
  )}
        />;
      </div>;
      {all_done ? (<div className='mt - 4 flex items - center gap - 2 text - green - 600 dark:text - green - 400'>;
          <PartyPopper size={18} />;
          <span className=text - sm>All steps completed — great job!</span>        </div>) : null}
      {/* Checklist */}        <div className="mt - 4 flex items - center gap - 2 text - green - 600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className=text-sm>All steps completed — great job!</span>;
        </div>) : null}
      {/* Checklist */}
      <ul className='mt - 4 space - y-2'>;
        {steps.map (step => (<li key={step.id} className=flex items - center justify - between>;
            <div className='flex items - center gap - 2'>;
                <CheckCircle2;
                  className=text - green - 600 dark:text - green - 400;
                  size={18}
                />) : (<Circle className='text - gray - 400' size={18} />)}
              <span className={step.completed ? line - through opacity - 70 : ''}>;
                {step.label}
              </span>;
            </div>;
            {!step.completed && step.cta_href && step.cta_label ? (<Link href={step.cta_href}>;
                <a className=text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition>                  {step.cta_label}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg-gray-900 transition">;
                  {step.cta_label}
                </a>;
              </Link>) : null}
          </li>))}
      </ul>;
      {/* Primary CTA for next step */}
      {!all_done && first_incomplete ? (<div className='mt - 5'>;
          <Link href={first_incomplete.cta_href!}>;
            <a className=inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition>              {first_incomplete.cta_label}        <div className=mt-5>;
          <Link href={first_incomplete.cta_href!}>;
            <a className="inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon-blue hover:opacity-90 transition">;
              {first_incomplete.cta_label}
            </a>;
          </Link>;className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}return (<div className=rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm>;
      <div className="flex items-center justify-between">;
        <h3 className=text-lg font-semibold>{title}</h3>;
        <div className="text-sm opacity-75">{percentage}% complete</div>;
      </div>;
          </Link>;

  if (!steps || steps.length = $2;
  const completedCount = $2;
  return Math.round((completedCount / steps.length) * 100)
}

export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {
  const percentage = computePercentage($2);
  const allDone = $2;
  const firstIncomplete = $2;
  return (
    <div className=rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm>
      <div className="flex items-center justify-between">
        <h3 className=text-lg font-semibold>{title}</h3>
        <div className="text-sm opacity-75">{percentage}% complete</div>
      </div>

                  {step.ctaLabel}
                </a>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (<div className=mt-5>;
          <Link href={firstIncomplete.ctaHref!}>;
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">;
<div className=mt-5>;
          <Link href={firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>;
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className=text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition>

                  {step.ctaLabel}
                </a>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className=inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition>
      {!allDone && firstIncomplete ? (
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
              {firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
    </div>;
    </div>
}
}
  );
}
  )

}

  );
}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
