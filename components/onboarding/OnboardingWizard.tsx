import React, {_useMemo, _useState} from 'react'
import Link from 'next/link'

export default function OnboardingWizard() {_const { user, _completeOnboarding, _setUser} = useUser()
  const {_addToast} = useToast()
  const [step, setStep] = useState(0)

  const _isClient = user?.role === 'client'

  const _steps = useMemo__(() => {_if (isClient) {
      return [
        { title: 'Ready to find top IT talent?', _content: (
          <div className="space-y-4">
            <p>Post a role or import your job brief to get started.</p>
            <Link href="/jobs/post"><a className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5">Post a job</a></Link>
          </div>
        )},
        {_title: 'View suggested matches', _content: <p>We will surface the best matches instantly based on your job brief.</p>},
        {_title: 'Invite or message talent', _content: <p>Send invites or start a conversation to move fast.</p>}]
    }
    return [
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
            ))}
          </div>
        </div>
      ) },
      {_title: 'Preview your profile', _content: <p>Review how clients will see your profile.</p>},
      {_title: 'Enable AI matchmaking', _content: (
        <div className="space-y-2">
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      )}]
  }, [isClient, setUser])

  if (!user || user.onboardingCompleted) return null

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
        )}
      </div>
    </div>
  )
}