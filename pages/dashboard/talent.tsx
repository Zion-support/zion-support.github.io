<<<<<<< HEAD
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton',
import { useEffect, useState } from 'react',

const STEPS = [
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
  { key: 'match', label: 'First match received' }] as const,
=======
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';

const _STEPS = [
  {_key: 'profile', _label: 'Profile completed'},
  {_key: 'skills', _label: 'Skills added'},
  {_key: 'availability', _label: 'Availability set'},
  {_key: 'match', _label: 'First match received'}] as const;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type StepKey = typeof STEPS[number]['key'],

<<<<<<< HEAD
export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey boolean>>({ profile: false, skills: false, availability: false, match: false }),

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent'),
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}
  }, []),

  useEffect(() => {
    try { window.localStorage.setItem('onboarding.talent', JSON.stringify(completed)) } catch {}
  }, [completed]),

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100),

  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] })),

  return (
    <div className=&quot;space-y-4&quot;>
=======
export default function TalentDashboard() {_const [completed, _setCompleted] = useState<Record<StepKey, _boolean>>({ profile: false, _skills: false, _availability: false, _match: false});

  useEffect__(() => {_try {
      const _raw = window.localStorage.getItem('onboarding.talent');
      if (raw) setCompleted(JSON.parse(raw));} catch {}
  }, []);

  useEffect__(() => {_try { window.localStorage.setItem('onboarding.talent', _JSON.stringify(completed));} catch {}
  }, [completed]);

  const _progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);

  const _toggle = (_key: StepKey) => setCompleted(_(c) => ({_...c, _[key]: !c[key]}));

  return (_<div className="space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <EnhancedCard>
        <div className=&quot;flex items-center justify-between&quot;>
          <div>
            <h1 className=&quot;text-lg font-semibold&quot;>Welcome back</h1>
            <p className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Complete onboarding to unlock better matches.</p>
          </div>
<<<<<<< HEAD
          <div className=&quot;text-sm font-medium&quot;>{progress}%</div>
        </div>
        <div className=&quot;mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded&quot;>
          <div className=&quot;h-2 rounded bg-blue-600&quot; style={{ width: `${progress}%` }} />
=======
          <div className="text-sm font-medium">{_progress}%</div>
        </div>
        <div className="mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded">
          <div className="h-2 rounded bg-blue-600" style={_{ width: `${progress}%` }} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </EnhancedCard>

      <EnhancedCard>
<<<<<<< HEAD
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
                <EnhancedButton onClick={() => toggle(s.key)} variant=&quot;secondary&quot; className=&quot;text-xs py-1 px-2&quot;>{s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
=======
        <h2 className="font-semibold mb-2">Checklist</h2>
        <ul className="space-y-2">
          {_STEPS.map((s) => (_<li key={s.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={_`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>{_completed[s.key] ? '✓' : ''}</span>
                <span className="text-sm">{_s.label}</span>
              </div>
              {_completed[s.key] ? (
                <button onClick={() => toggle(s.key)} className="text-xs text-gray-500 hover:underline">Undo</button>
              ) : (_<EnhancedButton onClick={_() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{_s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
  )
}