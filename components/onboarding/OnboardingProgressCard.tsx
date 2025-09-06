import React from 'react'
import Link from 'next/link'
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react',

export type OnboardingStep = {
  id: string,
  label: string,
  completed: boolean,
  ctaLabel?: string,
  ctaHref?: string
},

export type OnboardingProgressCardProps = {
  title: string,
  steps: OnboardingStep[],
  highlightColorClass?: string
},

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length === 0) return 0,
  const completedCount = steps.filter((s) => s.completed).length
  return Math.round((completedCount / steps.length) * 100)
}

export default function OnboardingProgressCard({ title, steps, highlightColorClass = 'from-neon-green to-neon-blue' }: OnboardingProgressCardProps) {
  const percentage = computePercentage(steps)
  const allDone = percentage === 100

  const firstIncomplete = steps.find((s) => !s.completed && s.ctaHref && s.ctaLabel)

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm opacity-75">{_percentage}% complete</div>
      </div>

      {_/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
            ) : null}
          </li>
        ))}
      </ul>

      {/* Primary CTA for next step */}
      {!allDone && firstIncomplete ? (
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