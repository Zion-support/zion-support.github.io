import React, { useMemo, useState } from 'react'
import { useUser } from '../../providers/UserProvider'
import { useToast } from '../ui/ToastProvider'
import Link from 'next/link'

export default function OnboardingWizard() {
  const { user, completeOnboarding, setUser } = useUser()
  const { addToast } = useToast()
  const [step, setStep] = useState(0)

  const isClient = user?.role === 'client'

  const steps = useMemo(() => {
    if (isClient) {
      return [
        { title: 'Ready to find top IT talent?', content: (
          <div className=&quot;space-y-4&quot;>
            <p>Post a role or import your job brief to get started.</p>
            <Link href=&quot;/jobs/post&quot;><a className=&quot;inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5&quot;>Post a job</a></a>
          </div>
        ) },
        { title: 'View suggested matches', content: <p>We will surface the best matches instantly based on your job brief.</p> },
        { title: 'Invite or message talent', content: <p>Send invites or start a conversation to move fast.</p> }]
    }
    return [
      { title: 'Complete your profile', content: (
        <div className=&quot;space-y-3&quot;>
          <input className=&quot;w-full rounded-md border px-3 py-2 bg-transparent&quot; placeholder=&quot;Your title (e.g., Senior LLM Engineer)&quot; onChange={(e) => setUser(prev => prev ? { ...prev, name: prev.name } : prev)} />
          <textarea className=&quot;w-full rounded-md border px-3 py-2 bg-transparent&quot; placeholder=&quot;Short bio&quot; />
        </div>
      ) },
      { title: 'Choose skills and availability', content: (
        <div className=&quot;space-y-3 text-sm&quot;>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            {['AI', 'LLM', 'Next.js', 'Python', 'DevOps', 'Security'].map(s => (
              <button key={s} className=&quot;px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5&quot;>{s}</button>
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            {['full-time','part-time','contract'].map(a => (
              <button key={a} className=&quot;px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize&quot;>{a}</button>
            ))}
          </div>
        </div>
      ) },
      { title: 'Preview your profile', content: <p>Review how clients will see your profile.</p> },
      { title: 'Enable AI matchmaking', content: (
        <div className=&quot;space-y-2&quot;>
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className=&quot;inline-flex items-center gap-2 text-sm&quot;>
            <input type=&quot;checkbox&quot; defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      ) }]
  }, [isClient, setUser])

  if (!user || user.onboardingCompleted) return null

  return (
    <div className=&quot;mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <div>
          <div className=&quot;text-xs uppercase tracking-wide opacity-70 mb-1&quot;>Onboarding</div>
          <div className=&quot;text-sm font-medium&quot;>{steps[step]?.title}</div>
        </div>
        <div className=&quot;text-xs opacity-70&quot;>Step {step + 1} of {steps.length}</div>
      </div>
      <div className=&quot;mt-4 text-sm&quot;>{steps[step]?.content}</div>
      <div className=&quot;mt-4 flex items-center justify-between&quot;>
        <button disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))} className=&quot;px-3 py-2 rounded-md border disabled:opacity-40&quot;>Back</button>
        {step < steps.length - 1 ? (
          <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} className=&quot;px-3 py-2 rounded-md border&quot;>Next</button>
        ) : (
          <button onClick={() => { completeOnboarding(); addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className=&quot;px-3 py-2 rounded-md border&quot;>Finish</button>
        )}
      </div>
    </div>
  )
}