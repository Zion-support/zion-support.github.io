import React, {_useMemo, _useState} from 'react'
import Link from 'next/link'

export default function OnboardingWizard() {_const { user, _completeOnboarding, _setUser} = useUser()
  const {_addToast} = useToast()
  const [step, setStep] = useState(0)

  const _isClient = user?.role === 'client'

  const _steps = useMemo__(() => {_if (isClient) {
      return [
<<<<<<< HEAD
        { title: 'Ready to find top IT talent?', content: (
          <div className=&quot;space-y-4&quot;>
=======
        { title: 'Ready to find top IT talent?', _content: (
          <div className="space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <p>Post a role or import your job brief to get started.</p>
            <Link href=&quot;/jobs/post&quot;><a className=&quot;inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5&quot;>Post a job</a></a>
          </div>
        )},
        {_title: 'View suggested matches', _content: <p>We will surface the best matches instantly based on your job brief.</p>},
        {_title: 'Invite or message talent', _content: <p>Send invites or start a conversation to move fast.</p>}]
    }
    return [
<<<<<<< HEAD
      { title: 'Complete your profile', content: (
        <div className=&quot;space-y-3&quot;>
          <input className=&quot;w-full rounded-md border px-3 py-2 bg-transparent&quot; placeholder=&quot;Your title (e.g., Senior LLM Engineer)&quot; onChange={(e) => setUser(prev => prev ? { ...prev, name: prev.name } : prev)} />
          <textarea className=&quot;w-full rounded-md border px-3 py-2 bg-transparent&quot; placeholder=&quot;Short bio&quot; />
        </div>
      ) },
      { title: 'Choose skills and availability', content: (
<<<<<<< HEAD
        <div className="space-y-3 text-sm">
          <div className="flex flex-wrap gap-2">
            {['AILLMNext.jsPythonDevOpsSecurity'].map(s => (
              <button key={s} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5">{s}</button>
            ))}
          </div>
          <div className="flex gap-3">
            {['full-timepart-timecontract'].map(a => (
              <button key={a} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize">{a}</button>
=======
        <div className=&quot;space-y-3 text-sm&quot;>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            {['AI', 'LLM', 'Next.js', 'Python', 'DevOps', 'Security'].map(s => (
              <button key={s} className=&quot;px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5&quot;>{s}</button>
            ))}
          </div>
          <div className=&quot;flex gap-3&quot;>
            {['full-time','part-time','contract'].map(a => (
              <button key={a} className=&quot;px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize&quot;>{a}</button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      {_title: 'Complete your profile', _content: (
        <div className="space-y-3">
          <input className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Your title (e.g., _Senior LLM Engineer)" onChange={(_e) => setUser(prev => prev ? { ...prev, _name: prev.name} : prev)} />
          <textarea className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Short bio" />
        </div>
      ) },
      {_title: 'Choose skills and availability', _content: (
        <div className="space-y-3 text-sm">
          <div className="flex flex-wrap gap-2">
            {['AI', _'LLM', _'Next.js', _'Python', _'DevOps', _'Security'].map(s => (
              <button key={s} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5">{_s}</button>
            ))}
          </div>
          <div className="flex gap-3">
            {_['full-time', _'part-time', _'contract'].map(a => (
              <button key={a} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize">{_a}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ))}
          </div>
        </div>
      ) },
<<<<<<< HEAD
      { title: 'Preview your profile', content: <p>Review how clients will see your profile.</p> },
      { title: 'Enable AI matchmaking', content: (
        <div className=&quot;space-y-2&quot;>
=======
      {_title: 'Preview your profile', _content: <p>Review how clients will see your profile.</p>},
      {_title: 'Enable AI matchmaking', _content: (
        <div className="space-y-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className=&quot;inline-flex items-center gap-2 text-sm&quot;>
            <input type=&quot;checkbox&quot; defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      )}]
  }, [isClient, setUser])

  if (!user || user.onboardingCompleted) return null

<<<<<<< HEAD
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
<<<<<<< HEAD
          <button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>
=======
          <button onClick={() => { completeOnboarding(); addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className=&quot;px-3 py-2 rounded-md border&quot;>Finish</button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  return (_<div className="mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">Onboarding</div>
          <div className="text-sm font-medium">{_steps[step]?.title}</div>
        </div>
        <div className="text-xs opacity-70">Step {_step + 1} of {_steps.length}</div>
      </div>
      <div className="mt-4 text-sm">{_steps[step]?.content}</div>
      <div className="mt-4 flex items-center justify-between">
        <button disabled={_step === 0} onClick={_() => setStep(s => Math.max(0, _s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>
        {_step < steps.length - 1 ? (_<button onClick={() => setStep(s => Math.min(steps.length - 1, _s + 1))} className="px-3 py-2 rounded-md border">Next</button>
        ) : (_<button onClick={_() => { completeOnboarding(); addToast({ title: 'Onboarding completed', _description: 'You can revisit anytime from Settings.', _variant: 'success'}) }} className="px-3 py-2 rounded-md border">Finish</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
      </div>
    </div>
  )
}