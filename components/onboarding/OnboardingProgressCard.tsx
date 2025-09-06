

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

import Link from 'next/link';



export type OnboardingStep = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id: string;
  label: string;
  completed: boolean;
<<<<<<< HEAD


};

export type OnboardingProgressCardProps = {;


=======
  ctaLabel?: string;
  ctaHref?: string;
<<<<<<< HEAD
}
export type OnboardingProgressCardProps = {
=======
};

export type OnboardingProgressCardProps = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;}
function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return Math.round((completedCount / steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
}
export type OnboardingProgressCardProps = {
  title: string
  steps: OnboardingStep[]
  highlightColorClass?: string
}
=======
<<<<<<< HEAD
  return Math.round((completedCount / steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
};
=======
  return Math.round((completedCount / steps.length) * 100);
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
<<<<<<< HEAD


=======
<<<<<<< HEAD
export default function OnboardingProgressCard({
<<<<<<< HEAD
  title
  steps
  highlightColorClass = 'from-neon-green to-neon-blue'
}: OnboardingProgressCardProps) {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  title,
  steps,
  highlightColorClass = 'from-neon-green to-neon-blue',
}: OnboardingProgressCardProps) {;
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

    <div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>;
      <div className='flex items-center justify-between'>;
        <h3 className='text-lg font-semibold'>{title}</h3>;
        <div className='text-sm opacity-75'>{percentage}% complete</div>;
      </div>;
=======
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      {/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>;
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}


      {/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">;
        <div
=======
  cta_label?: string;
  cta_href?: string;
}
;
export type OnboardingProgressCardProps = {
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;}
;
function compute_percentage (steps: OnboardingStep[]): number {
  // Check condition
if (return 0) {
  $2
}
  const completed_count = steps.filter (string => s.completed).length;
  return Math.round ((completed_count / steps.length) * 100);  cta_label?: string;
  cta_href?: string;
}
;
export type OnboardingProgressCardProps = {
  title: string,
  steps: OnboardingStep[],
  highlightColorClass?: string;
}
;
function compute_percentage (steps: OnboardingStep[]): number {
  // Check condition
if (return 0) {
  $2
}
  const completed_count = steps.filter (string => s.completed).length;
  return Math.round ((completed_count / steps.length) * 100);
;
export default /**
 * OnboardingProgressCard - Function description
 */
function OnboardingProgressCard() {
  const percentage = compute_percentage (steps);
  const all_done = percentage === 100;
;
  const first_incomplete = steps.find (
    string => !s.completed && s.cta_href && s.cta_label);
;
  return (
    <div className='rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 70 dark:bg - black / 40 p - 5 shadow - sm'>;
      <div className='flex items - center justify - between'>;
        <h3 className='text - lg font - semibold'>{title}</h3>;
        <div className='text - sm opacity - 75'>{percentage}% complete</div>;
      </div>;
      {/* Progress Bar */}
      <div className='mt - 3 h - 2 w - full rounded - full bg - gray - 200 dark:bg - gray - 800 overflow - hidden'>;
        <div;
          className={`h - 2 rounded - full bg - gradient - to - r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
export default /**
 * OnboardingProgressCard - Function description
 */
function OnboardingProgressCard() {
  const percentage = compute_percentage (steps);
  const all_done = percentage === 100;
;
  const first_incomplete = steps.find ((s) => !s.completed && s.cta_href && s.cta_label);
;
  return (
    <div className="rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 70 dark:bg - black / 40 p - 5 shadow - sm">;
      <div className="flex items - center justify - between">;
        <h3 className="text - lg font - semibold">{title}</h3>;
        <div className="text - sm opacity - 75">{percentage}% complete</div>;
      </div>;
      {/* Progress Bar */}
      <div className="mt - 3 h - 2 w - full rounded - full bg - gray - 200 dark:bg - gray - 800 overflow - hidden">;
        <div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          className={
            `h - 2 rounded - full bg - gradient - to - r ${highlightColorClass}`;
          }
          style={{ width: `${percentage}%` }}

        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">

          <PartyPopper size={18} />
          <span className="text-sm">All steps completed — great job!</span>
        </div>
<<<<<<< HEAD
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

=======
      <ul className="mt-4 space-y-2">
        {steps.map((step) => (
          <li key={step.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {step.completed ? (
                <CheckCircle2 className="text-green-600 dark:text-green-400" size={18} />
=======
      ) : null}
<<<<<<< HEAD
      {/* Checklist */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <ul className='mt-4 space-y-2'>
        {steps.map(step => (
          <li key={step.id} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <CheckCircle2
                  className='text-green-600 dark:text-green-400'
                  size={18}
                />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              ) : (
                <Circle className="text-gray-400" size={18} />
              )}
              <span className={step.completed ? 'line-through opacity-70' : ''}>{step.label}</span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>
                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
=======

<<<<<<< HEAD


=======
<<<<<<< HEAD
      {/* Checklist */}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  {step.ctaLabel}
                </a>
              </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ) : null}
          </li>;
        ))}

      </ul>;


=======

<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      {/* Primary CTA for next step */}


      ) : null}
    </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  );

}
=======
}
=======

  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
        />;
      </div>;
      {all_done ? (
        <div className='mt - 4 flex items - center gap - 2 text - green - 600 dark:text - green - 400'>;
          <PartyPopper size={18} />;
          <span className='text - sm'>All steps completed — great job!</span>        </div>) : null}
      {/* Checklist */}        <div className="mt - 4 flex items - center gap - 2 text - green - 600 dark:text - green - 400">;
          <PartyPopper size={18} />;
          <span className="text - sm">All steps completed — great job!</span>;
        </div>) : null}
      {/* Checklist */}
      <ul className='mt - 4 space - y-2'>;
        {steps.map (step => (
          <li key={step.id} className='flex items - center justify - between'>;
            <div className='flex items - center gap - 2'>;
                <CheckCircle2;
                  className='text - green - 600 dark:text - green - 400';
                  size={18}
                />) : (
                <Circle className='text - gray - 400' size={18} />)}
              <span className={step.completed ? 'line - through opacity - 70' : ''}>;
                {step.label}
              </span>;
            </div>;
            {!step.completed && step.cta_href && step.cta_label ? (
              <Link href={step.cta_href}>;
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition">;
                  {step.cta_label}
                </a>;
              </Link>) : null}
          </li>))}
      </ul>;
      {/* Primary CTA for next step */}
      {!all_done && first_incomplete ? (
        <div className='mt - 5'>;
          <Link href={first_incomplete.cta_href!}>;
            <a className='inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition'>              {first_incomplete.cta_label}        <div className="mt - 5">;
          <Link href={first_incomplete.cta_href!}>;
            <a className="inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition">;
              {first_incomplete.cta_label}
            </a>;
          </Link>;
        </div>) : null}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
