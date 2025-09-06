import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton';
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from 'react';
const STEPS = null;
=======
import {useEffect, useState} from 'react';
const STEPS = [
  { key: 'profile', label: 'Profile completed' }
  { key: 'skills', label: 'Skills added' }
  { key: 'availability', label: 'Availability set' }
  { key: 'match', label: 'First match received' }
=======
import { useEffect, useState } from 'react';

const STEPS = [
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
  { key: 'match', label: 'First match received' },
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
] as const;
type StepKey = (typeof STEPS)[number]['key'];
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({
    profile: false
    skills: false
    availability: false
    match: false
  });
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
<<<<<<< HEAD
      if (raw) setCompleted(JSON.parse(raw));    } catch {}
=======
      if (raw) setCompleted(JSON.parse(raw));
    } catch {}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }, []);
  useEffect(() => {
    try {
      window.localStorage.setItem(
        'onboarding.talent'
        JSON.stringify(completed)
      );
    } catch {}
  }, [completed]);
  const progress = Math.round(
    (Object.values(completed).filter(Boolean).length / STEPS.length) * 100
  );
  const toggle = (key: StepKey) =>
    setCompleted(c => ({ ...c, [key]: !c[key] }));
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className='space-y-4'>
      <EnhancedCard>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-lg font-semibold'>Welcome back</h1>
            <p className='text-sm text-gray-600 dark:text-gray-300'>
              Complete onboarding to unlock better matches.
            </p>
          </div>
          <div className='text-sm font-medium'>{progress}%</div>
        </div>
        <div className='mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded'>
          <div
            className='h-2 rounded bg-blue-600'
            style={{ width: `${progress}%` }}
<<<<<<< HEAD
          />        </div>
=======
          />
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      </EnhancedCard>
      <EnhancedCard>
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
              </div>
              {completed[s.key] ? (
                <button
                  onClick={() => toggle(s.key)}
                  className='text-xs text-gray-500 hover:underline'
                >
                  Undo
                </button>
              ) : (
                <EnhancedButton
                  onClick={() => toggle(s.key)}
                  variant='secondary'
                  className='text-xs py-1 px-2'
                >
                  {s.key === 'skills' ? 'Add skills' : 'Mark done'}
<<<<<<< HEAD
                </EnhancedButton>              )}
=======
                </EnhancedButton>
              )}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
<<<<<<< HEAD
);
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
