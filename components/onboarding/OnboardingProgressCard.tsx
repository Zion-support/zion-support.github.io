<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import Link from 'next/link';

import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export type OnboardingStep = {;
  id: string;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React from 'react',
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';
export type OnboardingStep = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  label: string;
<<<<<<< HEAD
<<<<<<< HEAD
  completed: boolean;
<<<<<<< HEAD
  ctaLabel?: string;
  ctaHref?: string;
}
export type OnboardingProgressCardProps = {
};

export type OnboardingProgressCardProps = {;
=======


=======
  completed: boolean
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  completed: boolean
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};

export type OnboardingProgressCardProps = {;

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;
};

function computePercentage(steps: OnboardingStep[]): number {
<<<<<<< HEAD
<<<<<<< HEAD
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
<<<<<<< HEAD
  return Math.round((completedCount / steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
}
export type OnboardingProgressCardProps = {
  title: string
  steps: OnboardingStep[]
  highlightColorClass?: string
}
  return Math.round((completedCount / steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
};
  return Math.round((completedCount / steps.length) * 100);
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
  if (!steps || steps.length === 0) return 0;
const completedCount = steps.filter(s => s.completed).length;
origin/cursor/automate-test-improve-and-merge-code-2533
  return Math.round((completedCount / steps.length) * 100);
<<<<<<< HEAD
export default function OnboardingProgressCard({
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title
  steps
  highlightColorClass = 'from-neon-green to-neon-blue'
}: OnboardingProgressCardProps) {
  title,
  steps,
  highlightColorClass = 'from-neon-green to-neon-blue',
}: OnboardingProgressCardProps) {;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(
    s => !s.completed && s.ctaHref && s.ctaLabel
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  );
  return (
    <div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div className='text-sm opacity-75'>{percentage}% complete</div>
      </div>
      {/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>
        <div
<<<<<<< HEAD
<<<<<<< HEAD
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel)
};

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length === 0) return 0;

function computePercentage(): any (steps: OnboardingStep[]): number {;
  if (!steps || steps && steps.length === 0) return 0;
  const completedCount = steps && steps.filter(s => s && s.completed).length;
  return Math && Math.round((completedCount / steps && steps.length) * 100);  ctaLabel?: string;
  ctaHref?: string
};

export type OnboardingProgressCardProps = {;
  title: string,;
  steps: OnboardingStep[],;
  highlightColorClass?: string
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
  );
  return (

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>;
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
      {/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">;
        <div
  cta_label?: string;
  cta_href?: string;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
;
export type OnboardingProgressCardProps = {

  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

export type OnboardingProgressCardProps = {
  title: string,
  steps: OnboardingStep[],
  highlightColorClass?: string
};

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(
    s => !s.completed && s.ctaHref && s.ctaLabel
  );
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className='rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 70 dark:bg - black / 40 p - 5 shadow - sm'>;
      <div className='flex items - center justify - between'>;
        <h3 className='text - lg font - semibold'>{title}</h3>;
        <div className='text - sm opacity - 75'>{percentage}% complete</div>;
      </div>;
      {/* Progress Bar */}
<<<<<<< HEAD
=======
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
          className={
            `h - 2 rounded - full bg - gradient - to - r ${highlightColorClass}`;
          }
          style={{ width: `${percentage}%` }}

        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">

          <PartyPopper size={18} />
          <span className="text-sm">All steps completed — great job!</span>
        </div>
        />;
      </div>;
      {allDone ? (;
        <div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>;
          <PartyPopper size={18} />;
          <span className='text-sm'>All steps completed — great job!</span>        </div>;
      ) : null}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
        </div>;
      ) : null}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
      <ul className="mt-4 space-y-2">
        {steps.map((step) => (
          <li key={step.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {step.completed ? (
                <CheckCircle2 className="text-green-600 dark:text-green-400" size={18} />
      <ul className='mt-4 space-y-2'>
        {steps.map(step => (
          <li key={step.id} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <CheckCircle2
                  className='text-green-600 dark:text-green-400'
                  size={18}
                />
              ) : (
                <Circle className="text-gray-400" size={18} />
              )}
              <span className={step.completed ? 'line-through opacity-70' : ''}>{step.label}</span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  {step.ctaLabel}
                </a>
              </Link>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ) : null}
          </li>;
        ))}
      </ul>

<<<<<<< HEAD
=======
      </ul>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
      {/* Checklist */}
            ) : null}
          </li>;
        ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      {!allDone && firstIncomplete ? (
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
              {firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
<<<<<<< HEAD
);
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  );
}
        />;
      </div>;
      {all_done ? (
        <div className='mt - 4 flex items - center gap - 2 text - green - 600 dark:text - green - 400'>;
          <PartyPopper size={18} />;
          <span className='text - sm'>All steps completed — great job!</span>        </div>) : null}
      {/* Checklist */}        <div className="mt - 4 flex items - center gap - 2 text - green - 600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
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
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg-gray-900 transition">;
                  {step.cta_label}
                </a>;
              </Link>) : null}
          </li>))}
      </ul>;
      {/* Primary CTA for next step */}
      {!all_done && first_incomplete ? (
        <div className='mt - 5'>;
          <Link href={first_incomplete.cta_href!}>;
            <a className='inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition'>              {first_incomplete.cta_label}        <div className="mt-5">;
          <Link href={first_incomplete.cta_href!}>;
            <a className="inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon-blue hover:opacity-90 transition">;
              {first_incomplete.cta_label}
            </a>;
          </Link>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm opacity-75">{percentage}% complete</div>
      </div>
      {/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <div
          className={
            `h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`
          }
          style={{ width: `${percentage}%` }}
        />
      </div>
      {allDone ? (
<div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>
        </div>
      ) : null}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <ul className='mt-4 space-y-2'>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      {/* Checklist */}
<ul className='mt-4 space-y-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
        {steps.map(step => (
          <li key={step.id} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <CheckCircle2
                  className='text-green-600 dark:text-green-400'
                  size={18}
                />
              ) : (
                <Circle className='text-gray-400' size={18} />
              )}
              <span className={step.completed ? 'line-through opacity-70' : ''}>
                {step.label}
              </span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {step.ctaLabel}
                </a>
              </Link>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ) : null}
          </li>
        ))}
      </ul>
<<<<<<< HEAD

      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (
        <div className='mt-5'>
          <Link href={firstIncomplete.ctaHref!}>
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete.ctaLabel}        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
=======
      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<div className='mt-5'>
          <Link href={firstIncomplete.ctaHref!}>
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>
origin/cursor/automate-test-improve-and-merge-code-2533
              {firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
}
  );
}
  )

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
