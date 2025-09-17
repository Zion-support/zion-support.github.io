import { useUser } from '../../providers/UserProvider'
import { useToast } from '../ui/ToastProvider'
import Link from 'next/link'

export default function OnboardingWizard() {

  const isClient = user?.role === 'client'

  const steps = useMemo(() => {
    if (isClient) {
      return [
          <div className="space-y-4">
            <p>Post a role or import your job brief to get started.</p>
            <Link href="/jobs/post"><a className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5">Post a job</a></Link>
          </div>
        ) },
              <button key={s} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5">{s}</button>
            ))}
          </div>
          <div className="flex gap-3">
            {['full-time','part-time','contract'].map(a => (
              <button key={a} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize">{a}</button>
            ))}
          </div>
        </div>
      ) },
        <div className="space-y-2">
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> Enable AI matchmaking
          </label>
        </div>

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
        )}
      </div>
    </div>
  )
}