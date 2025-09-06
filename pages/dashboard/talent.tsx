import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import { useEffect, useState } from 'react';

const STEPS = [
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
<<<<<<< HEAD
<<<<<<< HEAD
  { key: 'match', label: 'First match received' },
] as const;
=======
  { key: 'match', label: 'First match received' }] as const,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

type StepKey = typeof STEPS[number]['key'];

export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ profile: false, skills: false, availability: false, match: false }),
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
<<<<<<< HEAD
      if (raw) setCompleted(JSON.parse(raw));
=======
  { key: 'match', label: 'First match received' }] as const,

type StepKey = typeof STEPS[number]['key'];

export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ profile: false, skills: false, availability: false, match: false }),
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
      if (raw) setCompleted(JSON.parse(raw))
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      if (raw) setCompleted(JSON.parse(raw))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch {}
  }, []);

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    try {
      window.localStorage.setItem(
        'onboarding.talent',
        JSON.stringify(completed)
      );
    } catch {}
=======
    try { window.localStorage.setItem('onboarding.talent', JSON.stringify(completed)) } catch {}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [completed]);

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);

  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));

  return (
    <div className="space-y-4">
      <EnhancedCard>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Welcome back</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Complete onboarding to unlock better matches.</p>
          </div>
          <div className="text-sm font-medium">{progress}%</div>
        </div>
<<<<<<< HEAD
        <div className='mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded'>
          <div
            className='h-2 rounded bg-blue-600'
            style={{ width: `${progress}%` }}
          />
=======
    try { window.localStorage.setItem('onboarding.talent', JSON.stringify(completed)) } catch {}
  }, [completed]);

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);

  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));

  return (
    <div className="space-y-4">
      <EnhancedCard>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Welcome back</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Complete onboarding to unlock better matches.</p>
          </div>
          <div className="text-sm font-medium">{progress}%</div>
        </div>
        <div className="mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded">
          <div className="h-2 rounded bg-blue-600" style={{ width: `${progress}%` }} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded">
          <div className="h-2 rounded bg-blue-600" style={{ width: `${progress}%` }} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </EnhancedCard>

      <EnhancedCard>
<<<<<<< HEAD
<<<<<<< HEAD
        <h2 className='font-semibold mb-2'>Checklist</h2>
        <ul className='space-y-2'>
          {STEPS.map(s => (
            <li key={s.key} className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}
                >
                  {completed[s.key] ? '✓' : ''}
                </span>
                <span className='text-sm'>{s.label}</span>
=======
        <h2 className="font-semibold mb-2">Checklist</h2>
        <ul className="space-y-2">
          {STEPS.map((s) => (
            <li key={s.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>{completed[s.key] ? '✓' : ''}</span>
                <span className="text-sm">{s.label}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
              {completed[s.key] ? (
                <button onClick={() => toggle(s.key)} className="text-xs text-gray-500 hover:underline">Undo</button>
              ) : (
<<<<<<< HEAD
                <EnhancedButton
                  onClick={() => toggle(s.key)}
                  variant='secondary'
                  className='text-xs py-1 px-2'
                >
                  {s.key === 'skills' ? 'Add skills' : 'Mark done'}
                </EnhancedButton>
=======
        <h2 className="font-semibold mb-2">Checklist</h2>
        <ul className="space-y-2">
          {STEPS.map((s) => (
            <li key={s.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>{completed[s.key] ? '✓' : ''}</span>
                <span className="text-sm">{s.label}</span>
              </div>
              {completed[s.key] ? (
                <button onClick={() => toggle(s.key)} className="text-xs text-gray-500 hover:underline">Undo</button>
              ) : (
                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
