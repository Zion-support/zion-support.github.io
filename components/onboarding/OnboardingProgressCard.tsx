import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';

export type OnboardingStep = {
<<<<<<< HEAD
  id: string;
  label: string;
  completed: boolean;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  id: string;
  label: string;
  completed: boolean;
=======
  id: string,
  label: string,
  completed: boolean,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ctaLabel?: string;
  ctaHref?: string;
};

export type OnboardingProgressCardProps = {
<<<<<<< HEAD
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;};

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length === 0) return 0;
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
=======
<<<<<<< HEAD
  title: string;
  steps: OnboardingStep[];
  highlightColorClass?: string;
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  title: string,
  steps: OnboardingStep[],
  highlightColorClass?: string
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

function computePercentage(steps: OnboardingStep[]): number {
  if (!steps || steps.length === 0) return 0;
<<<<<<< HEAD
<<<<<<< HEAD
  const completedCount = steps.filter(s => s.completed).length;
  return Math.round((completedCount / steps.length) * 100);
=======
  const completedCount = steps.filter((s) => s.completed).length;
  return Math.round((completedCount / steps.length) * 100)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function OnboardingProgressCard({
  title,
  steps,
  highlightColorClass = 'from-neon-green to-neon-blue',
}: OnboardingProgressCardProps) {
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

      {/* Progress Bar */}
      <div className='mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden'>
        <div
<<<<<<< HEAD
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}          style={{ width: `${percentage}%` }}
=======
<<<<<<< HEAD
          className={`h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`}
=======
  const completedCount = steps.filter((s) => s.completed).length;
  return Math.round((completedCount / steps.length) * 100)
}

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

      {/* Progress Bar */}
      <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <div
          className={
            `h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`
          }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className={
            `h-2 rounded-full bg-gradient-to-r ${highlightColorClass}`
          }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          style={{ width: `${percentage}%` }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {allDone ? (
<<<<<<< HEAD
        <div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>        </div>
      ) : null}

      {/* Checklist */}
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='mt-4 flex items-center gap-2 text-green-600 dark:text-green-400'>
          <PartyPopper size={18} />
          <span className='text-sm'>All steps completed — great job!</span>
=======
        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
          <PartyPopper size={18} />
          <span className="text-sm">All steps completed — great job!</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
          <PartyPopper size={18} />
          <span className="text-sm">All steps completed — great job!</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      ) : null}

      {/* Checklist */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <ul className='mt-4 space-y-2'>
        {steps.map(step => (
          <li key={step.id} className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
<<<<<<< HEAD
=======
=======
      <ul className="mt-4 space-y-2">
        {steps.map((step) => (
          <li key={step.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {step.completed ? (
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
<<<<<<< HEAD
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>                  {step.ctaLabel}
=======
<<<<<<< HEAD
                <a className='text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition'>
=======
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
                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <a className="text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {step.ctaLabel}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>              {firstIncomplete.ctaLabel}
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='mt-5'>
          <Link href={firstIncomplete.ctaHref!}>
            <a className='inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition'>
=======
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="mt-5">
          <Link href={firstIncomplete.ctaHref!}>
            <a className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-black dark:text-white bg-gradient-to-r from-neon-blue to-neon-green shadow-neon-blue hover:opacity-90 transition">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {firstIncomplete.ctaLabel}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
