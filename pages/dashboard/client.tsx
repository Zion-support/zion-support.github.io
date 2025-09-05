import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import { useEffect, useState } from 'react',

const STEPS = [
  { key: 'job', label: 'Job posted' },
  { key: 'invite', label: 'First invite sent' },
  { key: 'response', label: 'First response received' }] as const,

type StepKey = typeof STEPS[number]['key'],

export default function ClientDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey boolean>>({ job: false, invite: false, response: false }),

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.client'),
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}
  }, []),

  useEffect(() => {
    try { window.localStorage.setItem('onboarding.client', JSON.stringify(completed)) } catch {}
  }, [completed]),

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100),
  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] })),

  return (
    <div className=&quot;space-y-4&quot;>
      <EnhancedCard>
        <div className=&quot;flex items-center justify-between&quot;>
          <div>
            <h1 className=&quot;text-lg font-semibold&quot;>Welcome back</h1>
            <p className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Post your first job and invite talent to get started.</p>
          </div>
          <div className=&quot;text-sm font-medium&quot;>{progress}%</div>
        </div>
        <div className=&quot;mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded&quot;>
          <div className=&quot;h-2 rounded bg-blue-600&quot; style={{ width: `${progress}%` }} />
        </div>
      </EnhancedCard>

      <EnhancedCard>
        <h2 className=&quot;font-semibold mb-2&quot;>Checklist</h2>
        <ul className=&quot;space-y-2&quot;>
          {STEPS.map((s) => (
            <li key={s.key} className=&quot;flex items-center justify-between&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>{completed[s.key] ? '✓' : ''}</span>
                <span className=&quot;text-sm&quot;>{s.label}</span>
              </div>
              {completed[s.key] ? (
                <button onClick={() => toggle(s.key)} className=&quot;text-xs text-gray-500 hover:underline&quot;>Undo</button>
              ) : (
                <EnhancedButton onClick={() => toggle(s.key)} variant=&quot;secondary&quot; className=&quot;text-xs py-1 px-2&quot;>{s.key === 'job' ? 'Post a Job' : 'Mark done'}</EnhancedButton>
              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
  )
}