
<<<<<<< HEAD
=======
<<<<<<< HEAD

import React from 'react','
import Link from 'next/link';'
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';'

export type OnboardingStep = any;
  "label": string;
  "completed": boolean
};

export type OnboardingStep = {"id": string;import React from 'react',import Link from 'next/link';'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
import React from 'react',
import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
import React from 'react';,
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';
export type OnboardingStep = any;
import Link from 'next/link';

=======
import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';
=======

<<<<<<< HEAD
import React from 'react';,
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
import React from 'react';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';

<<<<<<< HEAD
export type OnboardingStep = any;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type OnboardingStep = {;
  id: string;
  label: string;
  completed: boolean;


};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

>>>>>>> merged-prs-20250907-203621
import {CheckCircle2, Circle, PartyPopper} from 'lucide-react';
export type OnboardingStep = {
  id: string;
  label: string;
  completed: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}
<<<<<<< HEAD
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

=======
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
  'steps': OnboardingStep[];
  highlightColorClass?: string
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];}
  highlightColorClass?: string}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
};

}
export type OnboardingProgressCardProps = {title: string;
  steps: OnboardingStep[];}
  highlightColorClass?: string}
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
function computePercentage("steps": OnboardingStep[]): number {

  }
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======
function computePercentage(steps: OnboardingStep[]): number {
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

  if (!steps || steps.length = == 0);
  return 0;

const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
<<<<<<< HEAD
=======
<<<<<<< HEAD
  title,
steps
  highlightColorClass = 'from-neon-green to-neon-blue''
=======
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}: OnboardingProgressCardProps) {
  title,
<<<<<<< HEAD
  steps,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  highlightColorClass = 'from-neon-green to-neon-blue','
}: OnboardingProgressCardProps) {;
=======
>>>>>>> origin/resolved-merge-conflicts



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
<<<<<<< HEAD
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
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={ width: `${percentage}%` }
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

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
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={ width: `${percentage}%` }
      {/* Progress Bar */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 "dark":bg-gray-800 overflow-hidden'>'
        <div,
className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass},`}
 ;
return (;
    <div className="rounded-xl border border-gray-200 "dark": border-gray-800 bg-white/70 "dark":bg-black/40 p-5 shadow-sm">"
      <div className="flex items-center justify-between">"
        <h3 className="text-lg font-semibold">{title}</h3>"
        <div className="text-sm opacity-75">{percentage}% complete</div>"
      </div>

      {/* Progress Bar *
}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 "dark":bg-gray-800 overflow-hidden">;"
        <div;
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`;`          }
          style={{ "width": `${percentage}%` }}` />
      </div>
      {allDone ? (
<div className='mt-4 flex items-center gap-2 text-green-600 "dark":text-green-400'>'
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>'
=======
>>>>>>> origin/resolved-merge-conflicts
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

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
export type OnboardingProgressCardProps = {;
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
function computePercentage(): any (steps: OnboardingStep[]): number {;
  if (!steps || steps && steps.length === 0) return 0;
  const completedCount = steps && steps.filter(s => s && s.completed).length;
  return Math && Math.round((completedCount / steps && steps.length) * 100);  ctaLabel?: string;
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';
export type OnboardingStep = $2;
  label: string,
  completed: boolean,
  ctaLabel?: string,
  ctaHref?: string
},

>>>>>>> merged-prs-20250907-203621
export type OnboardingProgressCardProps = $2;
  steps: OnboardingStep[],
  highlightColorClass?: string
},
<<<<<<< HEAD
=======

}function computePercentage(steps: OnboardingStep[]): number {if (!steps |steps.length === 0) return 0;
  const completedCount  = steps.filter(s => s.completed).length;function computePercentage(steps: OnboardingStep[]): number {if (!steps |steps.length === 0) return 0;
  const completedCount  = steps.filter(s => s.completed).length;if (!steps || steps.length === 0) return 0;
const completedCount  = steps.filter(s => s.completed).length;return Math.round((completedCount / steps.length) * 100)title;
  steps;
  highlightColorClass = 'from-neon-green to-neon-blue';
}: OnboardingProgressCardProps) {title,steps,highlightColorClass = 'from-neon-green to-neon-blue',}: OnboardingProgressCardProps) {const percentage = computePercentage(steps)const allDone = percentage === 100;
  const firstIncomplete = steps.find(s => !s.completed && s.ctaHref && s.ctaLabel;
  )return (<div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>;
=======
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
  );
  return (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className='rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className='flex items-center justify-between'>;
        <h3 className='text-lg font-semibold'>{title}</h3>;
        <div className='text-sm opacity-75'>{percentage}% complete</div>;
      </div>;
<<<<<<< HEAD
=======
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';
<<<<<<< HEAD
export type OnboardingStep = {
  id: string,
  label: string,
  completed: boolean,
ctaLabel?: string;
  ctaHref?: string
};
export type OnboardingProgressCardProps = {
  title: string,
  steps: OnboardingStep[],
  highlightColorClass?: string
};
function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length === 0) return 0;
  const completedCount = steps.filter((s) => s.completed).length;
  return Math.round((completedCount / steps.length) * 100)
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      {/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">;
        <div;
=======
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">;
        <div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  cta_label?: string;
  cta_href?: string;
  ctaLabel?: string;
  ctaHref?: string;
}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const completed_count = steps.filter (string => s.completed).length;
  return Math.round ((completed_count / steps.length) * 100)cta_label?: string;
  cta_href?: string;
<<<<<<< HEAD
}export type OnboardingProgressCardProps = {title: string,steps: OnboardingStep[],highlightColorClass?: string;
}export type OnboardingProgressCardProps = {title: string,steps: OnboardingStep[],highlightColorClass?: string;
}function computePercentage(steps: OnboardingStep[]): number {if (!steps |steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100)const percentage = computePercentage(steps)const allDone = percentage === 100;
  const firstIncomplete = steps.find(s => !s.completed && s.ctaHref && s.ctaLabel;
  )return (<div className='rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 70 dark:bg - black / 40 p - 5 shadow - sm'>;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className='flex items - center justify - between'>;
        <h3 className='text - lg font - semibold'>{title}</h3>;
        <div className='text - sm opacity - 75'>{percentage}% complete</div>;
      </div>;
      {/* Progress Bar */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
=======
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Checklist */}        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">;
          <PartyPopper size={18} />;
          <span className="text-sm">All steps completed — great job!</span>;
        </div>;
<<<<<<< HEAD
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
      {allDone ? (
<div className='mt-4 flex items-center gap-2 text-green-600 'dark':text-green-400'>'
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

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        </div>
      ) : null}'
      <ul className='mt-4 space-y-2'>
      {/* Checklist */}
<ul className='mt-4 space-y-2'>'
        {steps.map(step => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <li key={step.id} className='flex items-center justify-between'>'
            <div className='flex items-center gap-2'>'
                <CheckCircle2,
className='text-green-600 "dark":text-green-400''

                  size={1
} />;
              ) : (<Circle className='text-gray-400' size={18} />;'
              )}
              <span className={step.completed ? 'line-through opacity-70' : ''}>;'
=======
>>>>>>> origin/resolved-merge-conflicts
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      ) : null}
<<<<<<< HEAD
      {/* Checklist */}
=======

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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                {step.label}

              </span>
            </div>
<<<<<<< HEAD
            {!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>'"
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
<<<<<<< HEAD
=======
<<<<<<< HEAD

                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 "dark": border-gray-700 "hover":bg-gray-50 "dark":"hover":bg-gray-900 transition'>'

                  {step.ctaLabe
=======
>>>>>>> origin/resolved-merge-conflicts
=======
<<<<<<< HEAD
            {!step.completed && step.ctaHref && step.ctaLabel ? (}
              <Link href={step.ctaHref}    />
>>>>>>> origin/chore/fix-lint-and-merge

                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark: border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'    />

<<<<<<< HEAD

=======
                  {step.ctaLabe}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
                </a>;
              </Link>;
            ) : null}
          </li>;
        ))}
      </ul>;
      {/* Primary CTA for next step */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      {!allDone && firstIncomplete ? (<div className='mt-5'>;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete && firstIncomplete.ctaLabel}        <div className='mt-5'>;
          <Link href={firstIncomplete && firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>;
              {firstIncomplete && firstIncomplete.ctaLabel}
            </a>;
          </Link>;
        </div>;
      {!allDone && firstIncomplete ? (<div className='mt-5'>;
          <Link href={firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>;
              {firstIncomplete.ctaLabel}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
      {!allDone && firstIncomplete ? ("
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>"
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
<div className='mt-5'>
          <Link href={firstIncomplete.ctaHref!}>
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black 'dark': text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue 'hover':opacity-90 transition'>'

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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
            <a className='inline - flex items - center justify - center px - 4 py - 2 rounded - lg text - sm font - medium text - black dark:text - white bg - gradient - to - r from - neon - blue to - neon - green shadow - neon-blue hover:opacity-90 transition'>;
              {first_incomplete.cta_label}
            </a>;
          </Link>;className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}return (<div className=rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm>;
      <div className="flex items-center justify-between">;
        <h3 className=text-lg font-semibold>{title}</h3>;
        <div className="text-sm opacity-75">{percentage}% complete</div>;
      </div>;
          </Link>;
>>>>>>> merged-prs-20250907-203621

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/resolved-merge-conflicts

      {/* Checklist */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark: hover: bg-gray-900 transition">
                  {step.ctaLabel}
                </a>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
=======
                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      {/* Primary CTA for next step */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {!allDone && firstIncomplete ? (<div className=mt-5>;
=======
<<<<<<< HEAD
      {!allDone && firstIncomplete ? (<div className="mt-5">;
=======
<<<<<<< HEAD
=======
      {!allDone && firstIncomplete ? (<div className=mt-5>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          <Link href={firstIncomplete.ctaHref!}>;
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">;
<div className=mt-5>;
          <Link href={firstIncomplete.ctaHref!}>;
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>;
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}                <a className=text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition>

                  {step.ctaLabel}
                </a>
              </Link>
<<<<<<< HEAD
=======
<<<<<<< HEAD

      </ul>;





      {/* Primary CTA for next step */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      {!allDone && firstIncomplete ? (
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
=======
>>>>>>> origin/resolved-merge-conflicts


      ) : null}
    </div>


  );

}
}

  );
}
            ) : null}
          </li>;
        ))}
      </ul>;
      {/* Primary CTA for next step */}
    </div>;
  );
}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      {!allDone && firstIncomplete ? (
        <div className='mt-5'>
          <Link href={firstIncomplete.ctaHref!}>
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>
              {firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ) : null}
          </li>
        ))}
      </ul>
      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className=inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition>
>>>>>>> merged-prs-20250907-203621
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
    </div>
  )
}
=======
    </div>;
=======

>>>>>>> origin/chore/fix-lint-and-merge
    </div>

  );
}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
        <div className=&quot;mt-5&quot;>
          <Link href={firstIncomplete.ctaHref!}>
            <a className=&quot;inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition&quot;>
              {firstIncomplete.ctaLabel}
            </a>
          </a>
        </div>
      ) : null}
    </div>
  )

}
<<<<<<< HEAD
=======
<<<<<<< HEAD

  );
}
  )}
  )})}
    </div>;
}
  )}
  )})}
    </div>
  )
}
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
