<<<<<<< HEAD
export type OnboardingStep = {;
  id: string;
<<<<<<< HEAD
  label: string;
  completed: boolean
=======
import React from 'react',
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';

export type OnboardingStep = any;

<<<<<<< HEAD
export type OnboardingProgressCardProps = {;

  title: string;
  steps: OnboardingStep[];
<<<<<<< HEAD
  highlightColorClass?: string;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
};
=======
  highlightColorClass?: string;}
function computePercentage(steps: OnboardingStep[]): number {}
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;

<<<<<<< HEAD
export type OnboardingStep = {id: string;import React from 'react',import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper  } from 'lucide-react';
export type OnboardingStep = any;label: string;
  completed: boolean;
}export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
=======
<<<<<<< HEAD
<<<<<<< HEAD


import React from 'react';,
import Link from 'next/link';
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';
export type OnboardingStep = any;
import Link from 'next/link';

import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';
export type OnboardingStep = {
  id: string;
  label: string;
  completed: boolean;
<<<<<<< HEAD
=======
<div className= {
  `h-2 rounded-full bg-gradient-to-r $ {
  highlightColorClass 
}` 
}style= {
  {
  width: `$ {
  percentage 
}%` 
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
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
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
  title
  steps
  highlightColorClass = 'from-neon-green to-neon-blue'
}: OnboardingProgressCardProps) {
  title,
  steps,
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

function computePercentage(steps: OnboardingStep[]): number {}
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  if (!steps || steps.length === 0) return 0;
const completedCount = steps.filter(s => s.completed).length;
origin/cursor/automate-test-improve-and-merge-code-2533
  return Math.round((completedCount / steps.length) * 100);
  title;
  steps;
  highlightColorClass = 'from-neon-green to-neon-blue'
}: OnboardingProgressCardProps) {}
  title,
  steps,'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  highlightColorClass = 'from-neon-green to-neon-blue',
}: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(
<<<<<<< HEAD
    s => !s.completed && s.ctaHref && s.ctaLabel
  );
  return (
    <div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>{title}</h3>
=======
    s => !s.completed && s.ctaHref && s.ctaLabel;
  );
  return ('
    <div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>'
      <div className='flex items-center justify-between'>'
        <h3 className='text-lg font-semibold'>{title}</h3>'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <div className='text-sm opacity-75'>{percentage}% complete</div>
      </div>
      {/* Progress Bar */}'
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>
<<<<<<< HEAD
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel)
=======
        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}'
export default function OnboardingProgressCard() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};

function computePercentage(steps: OnboardingStep[]): number {}
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
  steps,;'
  highlightColorClass = 'from-neon-green to-neon-blue',;
}: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;

  const firstIncomplete = steps && steps.find(;
    s => !s && s.completed && s && s.ctaHref && s && s.ctaLabel;
  );
  return (

      {/* Progress Bar */}'
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>;
        <div;`
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
      {/* Progress Bar */}
<<<<<<< HEAD
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>
        <div
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
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';
export type OnboardingStep = $2;
  label: string,
  completed: boolean,
  ctaLabel?: string,
  ctaHref?: string
},

export type OnboardingProgressCardProps = $2;
  steps: OnboardingStep[],
  highlightColorClass?: string
},

}function computePercentage(steps: OnboardingStep[]): number {if (!steps |steps.length === 0) return 0;
  const completedCount  = steps.filter(s => s.completed).length;function computePercentage(steps: OnboardingStep[]): number {if (!steps |steps.length === 0) return 0;
  const completedCount  = steps.filter(s => s.completed).length;if (!steps || steps.length === 0) return 0;
const completedCount  = steps.filter(s => s.completed).length;return Math.round((completedCount / steps.length) * 100)title;
  steps;
  highlightColorClass = 'from-neon-green to-neon-blue';
}: OnboardingProgressCardProps) {title,steps,highlightColorClass = 'from-neon-green to-neon-blue',}: OnboardingProgressCardProps) {const percentage = computePercentage(steps)const allDone = percentage === 100;
  const firstIncomplete = steps.find(s => !s.completed && s.ctaHref && s.ctaLabel;
  )return (<div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>;
      <div className='flex items-center justify-between'>;
        <h3 className='text-lg font-semibold'>{title}</h3>;
        <div className='text-sm opacity-75'>{percentage}% complete</div>;
      </div>;
      {/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>;
=======
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">;
        <div;
  cta_label?: string;
  cta_href?: string;
}
  const completed_count = steps.filter (string => s.completed).length;
  return Math.round ((completed_count / steps.length) * 100);  cta_label?: string;
  cta_href?: string;
}
;
export type OnboardingProgressCardProps = {}
  title: string,
  steps: OnboardingStep[],;
  highlightColorClass?: string;
}

export type OnboardingProgressCardProps = {}
  title: string,
<<<<<<< HEAD
  steps: OnboardingStep[],
  highlightColorClass?: string
=======
  steps: OnboardingStep[],;
  highlightColorClass?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};

function computePercentage(steps: OnboardingStep[]): number {}
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(
    s => !s.completed && s.ctaHref && s.ctaLabel;
  );
  return ('
    <div className='rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 70 dark:bg - black / 40 p - 5 shadow - sm'>;'
      <div className='flex items - center justify - between'>;'
        <h3 className='text - lg font - semibold'>{title}</h3>;'
        <div className='text - sm opacity - 75'>{percentage}% complete</div>;
      </div>;
      {/* Progress Bar */}"
      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">;
          <PartyPopper size={18} />;"
          <span className="text-sm">All steps completed — great job!</span>;
        </div>;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      ) : null}
"
      <ul className="mt-4 space-y-2">
        {steps.map((step) => ("
          <li key={step.id} className="flex items-center justify-between">"
            <div className="flex items-center gap-2">
<<<<<<< HEAD
              {step.completed ? ("
                <CheckCircle2 className="text-green-600 dark:text-green-400" size={18} />'
=======
              {step.completed ? (
                <CheckCircle2 className="text-green-600 dark: text-green-400" size={18;} />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <ul className='mt-4 space-y-2'>
        {steps.map(step => ('
          <li key={step.id} className='flex items-center justify-between'>'
            <div className='flex items-center gap-2'>
                <CheckCircle2'
                  className='text-green-600 dark:text-green-400'
                  size={18}
                />
              ) : ("
                <Circle className="text-gray-400" size={18} />
              )}'
              <span className={step.completed ? 'line-through opacity-70' : ''}>{step.label}</span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (
<<<<<<< HEAD
              <Link href={step.ctaHref}>'"
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
=======
              <Link href={step.ctaHref}>
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark: border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel;}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
      {!allDone && firstIncomplete ? (;'
        <div className='mt-5'>;
<<<<<<< HEAD
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;'"
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete && firstIncomplete.ctaLabel}        <div className="mt-5">;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;"
=======
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark: text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete && firstIncomplete.ctaLabel;}        <div className="mt-5">;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">;
              {firstIncomplete && firstIncomplete.ctaLabel}
            </a>;
          </Link>;
        </div>;
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
        />;
      </div>;
      {all_done ? ('
        <div className='mt - 4 flex items - center gap - 2 text - green - 600 dark:text - green - 400'>;
<<<<<<< HEAD
          <PartyPopper size={18} />;
          <span className='text - sm'>All steps completed — great job!</span>        </div>) : null}
      {/* Checklist */}        <div className="mt - 4 flex items - center gap - 2 text - green - 600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
=======
          <PartyPopper size={18} />;'
          <span className='text - sm'>All steps completed — great job!</span>        </div>) : null}"
      {/* Checklist */}        <div className="mt - 4 flex items - center gap - 2 text - green - 600 dark:text - green - 400">;
          <PartyPopper size={18} />;"
          <span className="text - sm">All steps completed — great job!</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </div>) : null}
      {/* Checklist */}'
      <ul className='mt - 4 space - y-2'>;
        {steps.map (step => ('
          <li key={step.id} className='flex items - center justify - between'>;'
            <div className='flex items - center gap - 2'>;
                <CheckCircle2;'
                  className='text - green - 600 dark:text - green - 400';
                  size={18}
                />) : ('
                <Circle className='text - gray - 400' size={18} />)}'
              <span className={step.completed ? 'line - through opacity - 70' : ''}>;
                {step.label}
              </span>;
            </div>;
            {!step.completed && step.cta_href && step.cta_label ? (
<<<<<<< HEAD
              <Link href={step.cta_href}>;
<<<<<<< HEAD
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg-gray-900 transition">;
=======
              <Link href={step.cta_href}>;'"
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark: border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label;}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg-gray-900 transition">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  {step.cta_label}
                </a>;
              </Link>) : null}
          </li>))}
      </ul>;
      {/* Primary CTA for next step */}
      {!all_done && first_incomplete ? ('
        <div className='mt - 5'>;
<<<<<<< HEAD
          <Link href={first_incomplete.cta_href!}>;
            <a className='inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark: text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition'>              {first_incomplete.cta_label;}        <div className="mt-5">;
          <Link href={first_incomplete.cta_href!}>;
            <a className="inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon-blue hover:opacity-90 transition">;
=======
          <Link href={first_incomplete.cta_href!}>;'"
            <a className='inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition'>              {first_incomplete.cta_label}        <div className="mt - 5">;
          <Link href={first_incomplete.cta_href!}>;"
            <a className="inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {first_incomplete.cta_label}
            </a>;
          </Link>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
=======
  return ("
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">"
      <div className="flex items-center justify-between">"
        <h3 className="text-lg font-semibold">{title}</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="text-sm opacity-75">{percentage}% complete</div>
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden' />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
export default function OnboardingProgressCard() {const percentage = computePercentage(steps)const allDone = percentage === 100;
  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel)}function computePercentage(steps: OnboardingStep[]): number {if (!steps || steps.length === 0) return 0;function computePercentage(): any (steps: OnboardingStep[]): number {if (!steps || steps && steps.length === 0) return 0;
  const completedCount = steps && steps.filter(s => s && s.completed).length;
  return Math && Math.round((completedCount / steps && steps.length) * 100)ctaLabel?: string;
  ctaHref?: string;
}export type OnboardingProgressCardProps = {title: string,steps: OnboardingStep[],highlightColorClass?: string;
}function computePercentage(): any (steps: OnboardingStep[]): number {if (!steps || steps && steps.length === 0) return 0;
  const completedCount = steps && steps.filter(s => s && s.completed).length;
  return Math && Math.round((completedCount / steps && steps.length) * 100)export default function OnboardingProgressCard(): any ({title,steps,highlightColorClass = 'from-neon-green to-neon-blue',}: OnboardingProgressCardProps) {const percentage = computePercentage(steps)const allDone  = percentage === 100;const firstIncomplete = steps && steps.find(s => !s && s.completed && s && s.ctaHref && s && s.ctaLabel;
  )return ({/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>;
        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
      {/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">;
        <div;
  cta_label?: string;
  cta_href?: string;
}
<<<<<<< HEAD
  const completed_count = steps.filter (string => s.completed).length;
  return Math.round ((completed_count / steps.length) * 100)cta_label?: string;
  cta_href?: string;
}export type OnboardingProgressCardProps = {title: string,steps: OnboardingStep[],highlightColorClass?: string;
}export type OnboardingProgressCardProps = {title: string,steps: OnboardingStep[],highlightColorClass?: string;
}function computePercentage(steps: OnboardingStep[]): number {if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100)const percentage = computePercentage(steps)const allDone = percentage === 100;
  const firstIncomplete = steps.find(s => !s.completed && s.ctaHref && s.ctaLabel;
  )return (<div className='rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 70 dark:bg - black / 40 p - 5 shadow - sm'>;
      <div className='flex items - center justify - between'>;
        <h3 className='text - lg font - semibold'>{title}</h3>;
        <div className='text - sm opacity - 75'>{percentage}% complete</div>;
      </div>;
      {/* Progress Bar */}
      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
        </div>;
      ) : null}<ul className="mt-4 space-y-2">;
        {steps.map((step) => (<li key={step.id} className="flex items-center justify-between">;
            <div className="flex items-center gap-2">;
              {step.completed ? (<CheckCircle2 className="text-green-600 dark:text-green-400" size={18} />;
      <ul className='mt-4 space-y-2'>;
        {steps.map(step => (<li key={step.id} className='flex items-center justify-between'>;
            <div className='flex items-center gap-2'>;
=======
 ;
  return (
    <div className=\"rounded-xl border border-gray-200 dark: border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm\" />"
      <div className=\"flex items-center justify-between\" />"
        <h3 className=\"text-lg font-semibold\" />{title}</h3>"
        <div className=\"text-sm opacity-75\" />{percentage}% complete</div>
      </div>
<<<<<<< HEAD
      {/* Progress Bar */}"
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <div;
          className={}`
            `h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`
          }`
          style={{ width: `${percentage}%` }}
        />
      </div>
<<<<<<< HEAD
      {allDone ? (
<div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>
=======
      {allDone ? ('
        <div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>
          <PartyPopper size={18} />'
          <span className='text-sm'>All steps completed — great job!</span>        </div>
      ) : null}"
      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
          <PartyPopper size={18} />"
          <span className="text-sm">All steps completed — great job!</span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </div>
      ) : null}'
      <ul className='mt-4 space-y-2'>
<<<<<<< HEAD
=======

      {/* Progress Bar *}
}"
      <div className=\"mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden\" />;
        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`;
          }
          style={{ width: `${percentage;}%` }}

        />
      </div>
      {allDone ? (}
<div className='mt-4 flex items-center gap-2 text-green-600 dark: text-green-400' />;}
          <PartyPopper size={18} />
          <span className='text-sm' />All steps completed — great job!</span>
        </div>
      ) : null}
      <ul className='mt-4 space-y-2'>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Checklist */}
<ul className='mt-4 space-y-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
        {steps.map(step => (
          <li key={step.id} className='flex items-center justify-between'>
=======
        {steps.map(step => ('
          <li key={step.id} className='flex items-center justify-between'>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className='flex items-center gap-2'>
                <CheckCircle2'
                  className='text-green-600 dark:text-green-400'
                  size={18}
                />
              ) : ('
                <Circle className='text-gray-400' size={18} />
<<<<<<< HEAD
              )}'
              <span className={step.completed ? 'line-through opacity-70' : ''}>
=======

      {/* Checklist */}
<ul className='mt-4 space-y-2' />
        {steps.map(step => (}
          <li key={step.id} className='flex items-center justify-between' />
            <div className='flex items-center gap-2' />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                <CheckCircle2;
                  className='text-green-600 dark:text-green-400';
                  size={18}
                />;
              ) : (<Circle className="text-gray-400" size={18} />;
              )}
<<<<<<< HEAD
              <span className={step.completed ? 'line-through opacity-70' : ''}>{step.label}</span>;
            </div>;
            {!step.completed && step.ctaHref && step.ctaLabel ? (<Link href={step.ctaHref}>;
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">;
                  {step.ctaLabel}
=======
              <span className={step.completed ? 'line-through opacity-70' : ''} />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                {step.label}

              </span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (
<<<<<<< HEAD
              <Link href={step.ctaHref}>'"
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
=======
              <Link href={step.ctaHref}>
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark: border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel;}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {step.ctaLabel}
                </a>
              </Link>
            {!step.completed && step.ctaHref && step.ctaLabel ? (}
              <Link href={step.ctaHref} />

                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark: border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition' />

                  {step.ctaLabe}
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
<<<<<<< HEAD
      {!allDone && firstIncomplete ? (<div className='mt-5'>;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete && firstIncomplete.ctaLabel}        <div className="mt-5">;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">;
              {firstIncomplete && firstIncomplete.ctaLabel}
            </a>;
          </Link>;
        </div>;
      {!allDone && firstIncomplete ? (<div className="mt-5">;
          <Link href={firstIncomplete.ctaHref!}>;
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">;
              {firstIncomplete.ctaLabel}
=======
<<<<<<< HEAD
      {!allDone && firstIncomplete ? ("
=======
      {!allDone && firstIncomplete ? (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>"
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
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
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark: text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition' />

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
          <span className='text - sm'>All steps completed — great job!</span>        </div>) : null}
      {/* Checklist */}        <div className="mt - 4 flex items - center gap - 2 text - green - 600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
        </div>) : null}
      {/* Checklist */}
      <ul className='mt - 4 space - y-2'>;
        {steps.map (step => (<li key={step.id} className='flex items - center justify - between'>;
            <div className='flex items - center gap - 2'>;
                <CheckCircle2;
                  className='text - green - 600 dark:text - green - 400';
                  size={18}
                />) : (<Circle className='text - gray - 400' size={18} />)}
              <span className={step.completed ? 'line - through opacity - 70' : ''}>;
                {step.label}
              </span>;
            </div>;
            {!step.completed && step.cta_href && step.cta_label ? (<Link href={step.cta_href}>;
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg-gray-900 transition">;
                  {step.cta_label}
                </a>;
              </Link>) : null}
          </li>))}
      </ul>;
      {/* Primary CTA for next step */}
      {!all_done && first_incomplete ? (<div className='mt - 5'>;
          <Link href={first_incomplete.cta_href!}>;
            <a className='inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition'>              {first_incomplete.cta_label}        <div className="mt-5">;
          <Link href={first_incomplete.cta_href!}>;
            <a className="inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon-blue hover:opacity-90 transition">;
              {first_incomplete.cta_label}
            </a>;
          </Link>;className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}return (<div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">;
      <div className="flex items-center justify-between">;
        <h3 className="text-lg font-semibold">{title}</h3>;
        <div className="text-sm opacity-75">{percentage}% complete</div>;
      </div>;
          </Link>;

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length = $2;
  const completedCount = $2;
  return Math.round((completedCount / steps.length) * 100)
}

export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {
  const percentage = computePercentage($2);
  const allDone = $2;
  const firstIncomplete = $2;
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm opacity-75">{percentage}% complete</div>
      </div>
<<<<<<< HEAD

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
        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
          <PartyPopper size={18} />
          <span className="text-sm">All steps completed — great job!</span>
        </div>
      ) : null}
      <ul className='mt-4 space-y-2'>
        {steps.map(step => (
          <li key={step.id} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <CheckCircle2
                  className='text-green-600 dark:text-green-400'
        />;
      </div>;
      {allDone ? (<div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>;
          <PartyPopper size={18} />;
          <span className='text-sm'>All steps completed — great job!</span>;
        </div>;
      ) : null}<ul className='mt-4 space-y-2'>;
      {/* Checklist */}
<ul className='mt-4 space-y-2'>;
        {steps.map(step => (<li key={step.id} className='flex items-center justify-between'>;
            <div className='flex items-center gap-2'>;
                <CheckCircle2;
                  className='text-green-600 dark:text-green-400';
                  size={18}
                />;
              ) : (<Circle className='text-gray-400' size={18} />;
              )}
              <span className={step.completed ? 'line-through opacity-70' : ''}>;
                {step.label}
              </span>;
            </div>;
            {!step.completed && step.ctaHref && step.ctaLabel ? (<Link href={step.ctaHref}>;
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">;
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>;

      {/* Checklist */}
      <ul className="mt-4 space-y-2">
        {steps.map((step) => (
          <li key={step.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {step.completed ? (
                <CheckCircle2 className="text-green-600 dark:text-green-400" size={18} />
              ) : (
                <Circle className="text-gray-400" size={18} />
              )}
              <span className={step.completed ? 'line-through opacity-70' : ''}>{step.label}</span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>
                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark: hover: bg-gray-900 transition">
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                  {step.ctaLabel}
                </a>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (<div className="mt-5">;
          <Link href={firstIncomplete.ctaHref!}>;
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">;
<div className='mt-5'>;
          <Link href={firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>;
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">

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
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
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
<<<<<<< HEAD
}
  )}
  )})}
    </div>;
}
}
  )}
  )})}
    </div>
  )
}
=======
<<<<<<< HEAD
'"`
=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
