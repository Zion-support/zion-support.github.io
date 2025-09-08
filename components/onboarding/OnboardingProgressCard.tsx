
<<<<<<< HEAD

import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';
=======
import React from 'react',
import React from 'react';
import Link from 'next/link';


import React from 'react','
import Link from 'next/link';'
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';'

};

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';
export type OnboardingStep = {
  id: string;
  label: string;
  completed: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}
<<<<<<< HEAD

import { CheckCircle2, Circle, PartyPopper  } from 'lucide-react';'

      {/* Progress Bar */}
=======
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


export type OnboardingStep = any;label: string;
  completed: boolean;
}

export type OnboardingProgressCardProps = {"title": string;
  }
  'steps': OnboardingStep[];
  highlightColorClass?: string

export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];}
  highlightColorClass?: string}
};

}
export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];}
  highlightColorClass?: string}
}


  if (!steps || steps.length = == 0);
  return 0;

const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
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
}: OnboardingProgressCardProps) {
  title,
  steps,

function computePercentage(steps: OnboardingStep[]): number {}
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

      {/* Progress Bar */}'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {allDone ? (}
<div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'    />}
          <PartyPopper size={18}    />
          <span className='text-sm'    />All steps completed — great job!</span>
        </div>
<<<<<<< HEAD
=======
      ) : null}
      {/* Checklist */}
                {step.label}

              </span>
            </div>
            {!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>'"
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">

            {!step.completed && step.ctaHref && step.ctaLabel ? (}
              <Link href={step.ctaHref}    />

                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark: border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'    />



      {!allDone && firstIncomplete ? (
}
<div className='mt-5'    />}
          <Link href={firstIncomplete.ctaHref!}    />
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark: text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'    />

              {firstIncomplete.ctaLabe}
}
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
            <a className='inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon-blue hover:opacity-90 transition'>;
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
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>
        <div
          className={
            `h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`
          }
          style={ width: `${percentage}%` }
        />
      </div>

      {allDone ? (
        <div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>
        </div>
      ) : null}

      {/* Checklist */}
      <ul className="mt-4 space-y-2">
        {steps.map((step) => (
          <li key={step.id} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              {step.completed ? (
                <CheckCircle2 className='text-green-600 dark:text-green-400' size={18} />
              ) : (
                <Circle className='text-gray-400' size={18} />
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

            ) : null}
          </li>
        ))}
      </ul>
      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className=inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {!allDone && firstIncomplete ? (
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
              {firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
<<<<<<< HEAD

    </div>;


=======
    </div>
  )
}
    </div>

  );
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
        <div
          className={_`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`
          }
          style={_{ width: `${percentage}%` }}
        />
      </div>

      {allDone ? (
        <div className=&quot;mt-4 flex items-center gap-2 text-green-600 dark:text-green-400&quot;>
          <PartyPopper size={18} />
          <span className=&quot;text-sm&quot;>All steps completed — great job!</span>
        </div>
      ) : null}

      {/* Checklist */}
      <ul className=&quot;mt-4 space-y-2&quot;>
        {steps.map((step) => (
          <li key={step.id} className=&quot;flex items-center justify-between&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              {step.completed ? (
                <CheckCircle2 className=&quot;text-green-600 dark:text-green-400&quot; size={18} />
              ) : (
                <Circle className=&quot;text-gray-400&quot; size={18} />
              )}
              <span className={_step.completed ? 'line-through opacity-70' : ''}>{_step.label}</span>
            </div>
            {_!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>
                <a className=&quot;text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition&quot;>
                  {step.ctaLabel}
                </a>
              </a>
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {;
  const percentage = computePercentage(steps);
  const allDone = percentage === 100;
  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel);

};

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length === 0) return 0;

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
          <span className='text-sm'>All steps completed — great job!</span>        </div>
      ) : null}
      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
          <PartyPopper size={18} />
          <span className="text-sm">All steps completed — great job!</span>
        </div>
      ) : null}
      {/* Checklist */}
      <ul className='mt-4 space-y-2'>
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
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">

      {/* Checklist */}

                  {step.ctaLabel}
                </a>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (
<<<<<<< HEAD

        <div className=&quot;mt-5&quot;>
          <Link href={firstIncomplete.ctaHref!}>
            <a className=&quot;inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition&quot;>
              {firstIncomplete.ctaLabel}
            </a>
          </a>
        </div>
      ) : null}
=======
        <div className='mt-5'>
          <Link href={firstIncomplete.ctaHref!}>
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete.ctaLabel}        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
              {firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
);
  );
}
}
  );
}
  )}
  )})}
    </div>;
}
  )}
  )})}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>
  )
}
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
