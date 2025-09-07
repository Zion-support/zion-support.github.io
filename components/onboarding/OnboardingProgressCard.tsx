import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';
export type OnboardingStep = any;
import Link from 'next/link';

import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';
export type OnboardingStep = {
  id: string;
  label: string;
  completed: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}
export type OnboardingProgressCardProps = {
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;}
function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
}
export type OnboardingProgressCardProps = {
  title: string
  steps: OnboardingStep[]
  highlightColorClass?: string
}

  if (!steps || steps.length = == 0)
  return 0
const completedCount = steps.filter(s => s.completed).length
  return Math.round((completedCount / steps.length) * 100)
  title
steps}
highlightColorClass = 'from-neon-green to-neon-blue'}
}: OnboardingProgressCardProps) {
  title,
  steps}
  highlightColorClass = 'from-neon-green to-neon-blue'}
}: OnboardingProgressCardProps) {
const percentage = computePercentage(steps)
const allDone = percentage === 100
const firstIncomplete = steps.find(
    s => !s.completed && s.ctaHref && s.ctaLabel
  )
  return (
    <div className = 'rounded-xl border border-gray-200 dark: border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'    />}
      <div className='flex items-center justify-between'    />}
        <h3 className='text-lg font-semibold'    />{title}</h3>
        <div className='text-sm opacity-75'    />{percentage}% complete</div>
      </div>
      {/* Progress Bar */}'
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>

}
function computePercentage(steps: OnboardingStep[]): number {}
  if (!steps || steps.length === 0) return 0
function computePercentage(): any (steps: OnboardingStep[]): number {
  if (!steps || steps && steps.length === 0) return 0
  const completedCount = steps && steps.filter(s => s && s.completed).length
  return Math && Math.round((completedCount / steps && steps.length) * 100);  ctaLabel?: string
  ctaHref?: string
}
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
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(
    s => !s.completed && s.ctaHref && s.ctaLabel
  );
  return (

      {/* Progress Bar */}'
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>
        <div;`
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm opacity-75">{percentage}% complete</div>
      </div>
                  {step.ctaLabel}
                </a>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Checklist */}
            ) : null}
          </li>
        ))}
      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (;'
        <div className='mt-5'>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
              {firstIncomplete && firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      {!allDone && firstIncomplete ? ("
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>"
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
              {firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
);
}
}
