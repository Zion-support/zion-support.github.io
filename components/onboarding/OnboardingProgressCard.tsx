

import React from 'react';,
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';

export type OnboardingStep = any;
<<<<<<< HEAD

export type OnboardingProgressCardProps = {;

  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;
};
export type OnboardingStep = {id: string;
import React from 'react';,import Link from 'next/link';}
import { CheckCircle2, Circle, PartyPopper  } from 'lucide-react';
export type OnboardingStep = any;label: string;
  completed: boolean;
}export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;
  if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;


import React from 'react';,
import Link from 'next/link';
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
import { CheckCircle2, Circle, PartyPopper  } from 'lucide-react';'
=======
  label: string;
  completed: boolean
};

export type OnboardingStep = {id: string;import React from 'react';,import Link from 'next/link';}
import { CheckCircle2, Circle, PartyPopper  } from 'lucide-react';
>>>>>>> origin/chore/fix-lint-and-merge

export type OnboardingStep = any;label: string;
  completed: boolean;
}

<<<<<<< HEAD
export type OnboardingProgressCardProps = {"title": string;
  }
  "steps": OnboardingStep[];
  highlightColorClass?: string
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];}
  highlightColorClass?: string}
};

}
export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];}
  highlightColorClass?: string}
}

<<<<<<< HEAD
=======
function computePercentage(steps: OnboardingStep[]): number {
>>>>>>> origin/chore/fix-lint-and-merge

  if (!steps || steps.length = == 0);
  return 0;

const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
<<<<<<< HEAD
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
  title
  steps
  highlightColorClass = 'from-neon-green to-neon-blue'
=======
  title;
steps}
highlightColorClass = 'from-neon-green to-neon-blue'}
>>>>>>> origin/chore/fix-lint-and-merge
}: OnboardingProgressCardProps) {
  title,
<<<<<<< HEAD
  steps,



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
  highlightColorClass = 'from-neon-green to-neon-blue',
}: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(
    s => !s.completed && s.ctaHref && s.ctaLabel
  );
  return (
    <div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div className='text-sm opacity-75'>{percentage}% complete</div>
      </div>
      {/* Progress Bar */}'
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel)
};

function computePercentage(steps: OnboardingStep[]): number {}
  highlightColorClass = 'from-neon-green to-neon-blue}: OnboardingProgressCardProps) {
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find(

        <div className=text-sm opacity-75'>{percentage}% complete</div>
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
  steps: OnboardingStep[],
  highlightColorClass?: string
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
      ) : null}
"
      <ul className="mt-4 space-y-2">
        {steps.map((step) => ("
          <li key={step.id} className="flex items-center justify-between">"
            <div className="flex items-center gap-2">
              {step.completed ? ("
                <CheckCircle2 className="text-green-600 dark:text-green-400" size={18} />'
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
              <Link href={step.ctaHref}>'"
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">

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
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;'"
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete && firstIncomplete.ctaLabel}        <div className="mt-5">;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;"
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
          <PartyPopper size={18} />;
          <span className='text - sm'>All steps completed — great job!</span>        </div>) : null}
      {/* Checklist */}        <div className="mt - 4 flex items - center gap - 2 text - green - 600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
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
              <Link href={step.cta_href}>;
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg-gray-900 transition">;
                <a className='text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark: border - gray - 700 hover:bg - gray - 50 dark:hover:bg - gray - 900 transition'>                  {step.cta_label;}                <a className="text - xs px - 3 py - 1.5 rounded - md border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 50 dark:hover:bg-gray-900 transition">;
                  {step.cta_label}
                </a>;
              </Link>) : null}
          </li>))}
      </ul>;
      {/* Primary CTA for next step */}
      {!all_done && first_incomplete ? ('
        <div className='mt - 5'>;
          <Link href={first_incomplete.cta_href!}>;
            <a className='inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark: text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon - blue hover:opacity - 90 transition'>              {first_incomplete.cta_label;}        <div className="mt-5">;
          <Link href={first_incomplete.cta_href!}>;
            <a className="inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon-blue hover:opacity-90 transition">;
              {first_incomplete.cta_label}
            </a>;
          </Link>;

          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
  return ("
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">"
      <div className="flex items-center justify-between">"
        <h3 className="text-lg font-semibold">{title}</h3>"
        <div className="text-sm opacity-75">{percentage}% complete</div>
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden' />
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
      {/* Progress Bar */}"
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`;
          }
          style={{ width: `${percentage}%` }}

           />
      </div>
<<<<<<< HEAD
      {allDone ? (
<div className='mt-4 flex items-center gap-2 text-green-600 "dark":text-green-400'>'
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>
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
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className=flex items-center justify-between">"
        <h3 className=text-lg font-semibold>{title}</h3>"
        <div className="text-sm opacity-75>{percentage}% complete</div>
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden />
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

        </div>
      ) : null}'
      <ul className='mt-4 space-y-2'>
      {/* Checklist */}
<ul className='mt-4 space-y-2'>'
        {steps.map(step => (
          <li key={step.id} className='flex items-center justify-between'>
        {steps.map(step => ('
          <li key={step.id} className='flex items-center justify-between'>'
            <div className='flex items-center gap-2'>
                <CheckCircle2'
                  className='text-green-600 dark:text-green-400'
                  size={18}
                />
              ) : ('
                <Circle className='text-gray-400' size={18} />
              )}'
              <span className={step.completed ? 'line-through opacity-70' : ''}>
                <CheckCircle2;
                  className='text-green-600 dark:text-green-400';
                  size={18}
                />;
              ) : (<Circle className="text-gray-400" size={18} />;
              )}
              <span className={step.completed ? 'line-through opacity-70' : ''}>{step.label}</span>;
            </div>;
            {!step.completed && step.ctaHref && step.ctaLabel ? (<Link href={step.ctaHref}>;
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">;
                  {step.ctaLabel}
=======
      {allDone ? (}
<div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'    />}
          <PartyPopper size={18}    />
          <span className='text-sm'    />All steps completed — great job!</span>
        </div>
      ) : null}

      {/* Checklist */}
<ul className='mt-4 space-y-2'    />
        {steps.map(step => (}
          <li key={step.id} className='flex items-center justify-between'    />
            <div className='flex items-center gap-2'    />
                <CheckCircle2;
className='text-green-600 dark:text-green-400'

                  size={1}
}
                   />;
              ) : (<Circle className='text-gray-400' size={18}    />;
              )}
              <span className={step.completed ? 'line-through opacity-70' : ''}    />;
>>>>>>> origin/chore/fix-lint-and-merge
                {step.label}

              </span>
            </div>
<<<<<<< HEAD
            {!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>'"
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
=======
            {!step.completed && step.ctaHref && step.ctaLabel ? (}
              <Link href={step.ctaHref}    />
>>>>>>> origin/chore/fix-lint-and-merge

                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark: border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'    />

<<<<<<< HEAD

=======
                  {step.ctaLabe}
>>>>>>> origin/chore/fix-lint-and-merge
}
                </a>;
              </Link>;
            ) : null}
          </li>;
        ))}
      </ul>;
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
      {!allDone && firstIncomplete ? ("
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>"
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
<div className='mt-5'>
          <Link href={firstIncomplete.ctaHref!}>
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black "dark": text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue "hover":opacity-90 transition'>'

              {firstIncomplete.ctaLabe
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
=======

      {!allDone && firstIncomplete ? (
}
<div className='mt-5'    />}
          <Link href={firstIncomplete.ctaHref!}    />
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark: text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'    />
>>>>>>> origin/chore/fix-lint-and-merge

              {firstIncomplete.ctaLabe}
}
            </a>;
          </Link>;
        </div>;
      ) : null}
<<<<<<< HEAD
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
=======

>>>>>>> origin/chore/fix-lint-and-merge
    </div>

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
'"`
=======

"
>>>>>>> origin/chore/fix-lint-and-merge
