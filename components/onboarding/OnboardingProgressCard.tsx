import React from 'react';
import Link from 'next/link';

export type OnboardingStep = {_id: string;
  label: string;
  completed: boolean;
  ctaLabel?: string;
  ctaHref?: string;};

export type OnboardingProgressCardProps = {_title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;};

function computePercentage(_steps: OnboardingStep[]): number {_if (!steps || steps.length === 0) return 0;
  const _completedCount = steps.filter(_(s) => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);}

export default function OnboardingProgressCard(_{_title, _steps, _highlightColorClass = 'from-neon-green to-neon-blue'}: OnboardingProgressCardProps) {_const _percentage = computePercentage(steps);
  const _allDone = percentage === 100;

  const _firstIncomplete = steps.find(_(s) => !s.completed && s.ctaHref && s.ctaLabel);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm opacity-75">{_percentage}% complete</div>
      </div>

      {_/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <div
          className={_`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`
          }
          style={_{ width: `${percentage}%` }}
        />
      </div>

      {_allDone ? (
        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
          <PartyPopper size={18} />
          <span className="text-sm">All steps completed — great job!</span>
        </div>
      ) : null}

      {_/* Checklist */}
      <ul className="mt-4 space-y-2">
        {_steps.map(_(step) => (
          <li key={step.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {_step.completed ? (
                <CheckCircle2 className="text-green-600 dark:text-green-400" size={18} />
              ) : (
                <Circle className="text-gray-400" size={_18} />
              )}
              <span className={_step.completed ? 'line-through opacity-70' : ''}>{_step.label}</span>
            </div>
            {_!step.completed && step.ctaHref && step.ctaLabel ? (
              <Link href={step.ctaHref}>
                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
                  {_step.ctaLabel}
                </a>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>

      {_/* Primary CTA for next step */}
      {_!allDone && firstIncomplete ? (
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
              {_firstIncomplete.ctaLabel}
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}