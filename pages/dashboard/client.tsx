import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import { useEffect, useState } from 'react';

const STEPS = [
  { key: 'job', label: 'Job posted' },
  { key: 'invite', label: 'First invite sent' },

type StepKey = typeof STEPS[number]['key'];

export default function ClientDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ job: false, invite: false, response: false }),
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.client');
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}
  }, []);

  useEffect(() => {
  }, [completed]);

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);
  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));

  return (
    <div className="space-y-4">
      <EnhancedCard>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Welcome back</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Post your first job and invite talent to get started.</p>
          </div>
          <div className="text-sm font-medium">{progress}%</div>
        </div>
        <div className="mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded">
          <div className="h-2 rounded bg-blue-600" style={{ width: `${progress}%` }} />
        </div>
      </EnhancedCard>

      <EnhancedCard>
              </div>
              {completed[s.key] ? (
                <button onClick={() => toggle(s.key)} className="text-xs text-gray-500 hover:underline">Undo</button>
              ) : (
                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'job' ? 'Post a Job' : 'Mark done'}</EnhancedButton>
              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
  )
}
