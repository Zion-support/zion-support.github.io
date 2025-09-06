import React, { useMemo, useState } from 'react';
import { useUser } from '../../providers/UserProvider';
import { useToast } from '../ui/ToastProvider';
import Link from 'next/link';
export default function OnboardingWizard() {
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);

  const isClient = user?.role === 'client';
  const steps = useMemo(() => {
    if (isClient) {
      return [
export default function OnboardingWizard() {
  const { user, completeOnboarding, setUser } = useUser()
  const { addToast } = useToast()
  const [step, setStep] = useState(0)


  const isClient = null;

      { title: 'Enable AI matchmaking', content: (
        <div className="space-y-2">
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      ) }]
  }, [isClient, setUser])

  if (!user || user.onboardingCompleted) return null

  return (
    <div className="mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">Onboarding</div>
          <div className="text-sm font-medium">{steps[step]?.title}</div>
        </div>
        <div className="text-xs opacity-70">Step {step + 1} of {steps.length}</div>
      </div>
      <div className="mt-4 text-sm">{steps[step]?.content}</div>
      <div className="mt-4 flex items-center justify-between">
        <button disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>
        {step < steps.length - 1 ? (
          <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>
        ) : (
          <button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>
        )}
      </div>
    </div>
);
}
