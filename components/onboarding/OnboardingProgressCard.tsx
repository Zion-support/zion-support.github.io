<<<<<<< HEAD
import React from 'react',
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import Link from 'next/link';

<<<<<<< HEAD
import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';
export type OnboardingStep = {
=======
export type OnboardingStep = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id: string;
  label: string;
  completed: boolean;
  ctaLabel?: string;
  ctaHref?: string;
<<<<<<< HEAD
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
=======
};

export type OnboardingProgressCardProps = {;
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;};

function computePercentage(): any (steps: OnboardingStep[]): number {;
  if (!steps || steps && steps.length === 0) return 0;
  const completedCount = steps && steps.filter(s => s && s.completed).length;
  return Math && Math.round((completedCount / steps && steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string;
};

export type OnboardingProgressCardProps = {;
  title: string,;
  steps: OnboardingStep[],;
  highlightColorClass?: string;
};

function computePercentage(): any (steps: OnboardingStep[]): number {;
  if (!steps || steps && steps.length === 0) return 0;
  const completedCount = steps && steps.filter(s => s && s.completed).length;
  return Math && Math.round((completedCount / steps && steps.length) * 100);

export default function OnboardingProgressCard(): any ({;
  title,;
  steps,;
  highlightColorClass = 'from-neon-green to-neon-blue',;
}: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;

  const firstIncomplete = steps && steps.find(;
    s => !s && s.completed && s && s.ctaHref && s && s.ctaLabel;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  return (
<<<<<<< HEAD
    <div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div className='text-sm opacity-75'>{percentage}% complete</div>
      </div>
=======
    <div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>;
      <div className='flex items-center justify-between'>;
        <h3 className='text-lg font-semibold'>{title}</h3>;
        <div className='text-sm opacity-75'>{percentage}% complete</div>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>;
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
<<<<<<< HEAD
export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm opacity-75">{percentage}% complete</div>
      </div>
=======
export default function OnboardingProgressCard(): any ({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {
  const percentage = computePercentage(steps)
  const allDone = percentage === 100

  const firstIncomplete = steps && steps.find((s) => !s && s.completed && s && s.ctaHref && s && s.ctaLabel);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">;
      <div className="flex items-center justify-between">;
        <h3 className="text-lg font-semibold">{title}</h3>;
        <div className="text-sm opacity-75">{percentage}% complete</div>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">;
        <div
          className={
            `h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`
          }
          style={{ width: `${percentage}%` }}
<<<<<<< HEAD
        />
      </div>
      {allDone ? (
        <div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>        </div>
      ) : null}
      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
          <PartyPopper size={18} />
          <span className="text-sm">All steps completed — great job!</span>
        </div>
=======
        />;
      </div>;

      {allDone ? (;
        <div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>;
          <PartyPopper size={18} />;
          <span className='text-sm'>All steps completed — great job!</span>        </div>;
      ) : null}

      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
        </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ) : null}
      {/* Checklist */}
      <ul className='mt-4 space-y-2'>;
        {steps && steps.map(step => (;
          <li key={step && step.id} className='flex items-center justify-between'>;
            <div className='flex items-center gap-2'>;
                <CheckCircle2
                  className='text-green-600 dark:text-green-400'
                  size={18}
                />;
              ) : (;
                <Circle className='text-gray-400' size={18} />;
              )}
              <span className={step && step.completed ? 'line-through opacity-70' : ''}>;
                {step && step.label}
              </span>;
            </div>;
            {!step && step.completed && step && step.ctaHref && step && step.ctaLabel ? (;
              <Link href={step && step.ctaHref}>;
                <a className='text-xs px-3 py-1 && 1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step && step.ctaLabel}                <a className="text-xs px-3 py-1 && 1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">;
                  {step && step.ctaLabel}
                </a>;
              </Link>;
            ) : null}
          </li>;
        ))}
<<<<<<< HEAD
      </ul>
=======
      </ul>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (;
        <div className='mt-5'>;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete && firstIncomplete.ctaLabel}        <div className="mt-5">;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">;
              {firstIncomplete && firstIncomplete.ctaLabel}
            </a>;
          </Link>;
        </div>;
      ) : null}
<<<<<<< HEAD
    </div>
);
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
