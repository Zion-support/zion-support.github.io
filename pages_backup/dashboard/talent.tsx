<<<<<<< HEAD:pages/dashboard/talent.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useEffect, useState} from 'react';
const STEPS = [
  { key: 'profile', label: 'Profile completed' }
  { key: 'skills', label: 'Skills added' }
  { key: 'availability', label: 'Availability set' }
  { key: 'match', label: 'First match received' }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton';
import { useEffect, useState } from 'react';
const STEPS = null;
<<<<<<< HEAD:pages/dashboard/talent.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
] as const;
type StepKey = (typeof STEPS)[number]['key'];

const STEPS = [
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
  { key: 'match', label: 'First match received' }] as const,

type StepKey = typeof STEPS[number]['key'];

export default function TalentDashboard() {
<<<<<<< HEAD
<<<<<<< HEAD
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({

  });
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}

  }, []);
  useEffect(() => {


const STEPS = [;
  { key: 'profile', label: 'Profile completed' },;
  { key: 'skills', label: 'Skills added' },;
  { key: 'availability', label: 'Availability set' },;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
] as const;
type StepKey = (typeof STEPS)[number]['key'];

const STEPS = [
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
  { key: 'match', label: 'First match received' }] as const,

type StepKey = typeof STEPS[number]['key'];

export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    profile: false
    skills: false
    availability: false
    match: false
    profile: false,
    skills: false,
    availability: false,
    match: false,;
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ profile: false, skills: false, availability: false, match: false }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
=======
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
<<<<<<< HEAD:pages/dashboard/talent.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}

  }, []);
  useEffect(() => {


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useEffect, useState } from 'react';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const STEPS = [;
  { key: 'profile', label: 'Profile completed' },;
  { key: 'skills', label: 'Skills added' },;
  { key: 'availability', label: 'Availability set' },;
<<<<<<< HEAD
  { key: 'match', label: 'First match received' },;
] as const;
type StepKey = (typeof STEPS)[number]['key'];
const STEPS = [
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
  { key: 'match', label: 'First match received' }] as const,
type StepKey = typeof STEPS[number]['key'];
export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ profile: false, skills: false, availability: false, match: false }),
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}
  }, []);
  useEffect(() => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function TalentDashboard() {;
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({;
    profile: false,;
    skills: false,;
    availability: false,;
    match: false,;
  });

  useEffect(() => {;
    try {;
      const raw = window && window.localStorage.getItem('onboarding && onboarding.talent');
      if (raw) setCompleted(JSON && JSON.parse(raw));    } catch {}
  }, []);

  useEffect(() => {;
    try {;
      window && window.localStorage.setItem(;
        'onboarding && onboarding.talent',;
        JSON && JSON.stringify(completed);
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
      if (raw) setCompleted(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
try {
      window.localStorage.setItem(
        'onboarding.talent'
        JSON.stringify(completed)
<<<<<<< HEAD:pages/dashboard/talent.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
      );
    } catch {}
  }, [completed]);

  const progress = Math && Math.round(;
    (Object && Object.values(completed).filter(Boolean).length / STEPS && STEPS.length) * 100;
  );

  const toggle = (key: StepKey) =>;

    setCompleted(c => ({ ...c, [key]: !c[key] }));
<<<<<<< HEAD:pages/dashboard/talent.tsx
<<<<<<< HEAD

<<<<<<< HEAD
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useEffect, useState } from 'react';
const STEPS = [;
  { key: 'profile', label: 'Profile completed' },;
  { key: 'skills', label: 'Skills added' },;
<<<<<<< HEAD
<<<<<<< HEAD
  { key: 'availability', label: 'Availability set' },;
  { key: 'match', label: 'First match received' }] as const,;
type StepKey = typeof STEPS[number]['key'];
export default function TalentDashboard(req, res) {
  try {
  const [completed, setCompleted] = useState<Record<StepKey boolean>>({ profile: false, skills: false, availability: false, match: false }),;
  useEffect(() => {;
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
      if (raw) setCompleted(JSON.parse(raw));
    } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, []),;
  useEffect(() => {;
    try { window.localStorage.setItem('onboarding.talent', JSON.stringify(completed)) } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [completed]),
  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100),
  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] })),
=======
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
  return (
    <div className='space-y-4'>;
      <EnhancedCard>;
        <div className='flex items-center justify-between'>;
          <div>;
            <h1 className='text-lg font-semibold'>Welcome back</h1>;
            <p className='text-sm text-gray-600 dark:text-gray-300'>;
              Complete onboarding to unlock better matches.;
            </p>;
          </div>;
          <div className='text-sm font-medium'>{progress}%</div>;
        </div>;
        <div className='mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded'>;
          <div
            className='h-2 rounded bg-blue-600'
            style={{ width: `${progress}%` }}
<<<<<<< HEAD:pages/dashboard/talent.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          />        </div>;
      </EnhancedCard>;

      <EnhancedCard>;
        <h2 className='font-semibold mb-2'>Checklist</h2>;
        <ul className='space-y-2'>;
          {STEPS && STEPS.map(s => (;
            <li key={s && s.key} className='flex items-center justify-between'>;
              <div className='flex items-center gap-2'>;

<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
          />
        </div>
      </EnhancedCard>
      <EnhancedCard>
<h2 className='font-semibold mb-2'>Checklist</h2>
        <ul className='space-y-2'>
          {STEPS.map(s => (
            <li key={s.key} className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
<<<<<<< HEAD:pages/dashboard/talent.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
                <span
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s && s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>;
                  {completed[s && s.key] ? '✓' : ''}
                </span>;
                <span className='text-sm'>{s && s.label}</span>;
              </div>;
              {completed[s && s.key] ? (;
                <button
                  onClick={() => toggle(s && s.key)}
                  className='text-xs text-gray-500 hover:underline';
                >;
                  Undo;
                </button>;
              ) : (;
                <EnhancedButton
                  onClick={() => toggle(s && s.key)}
                  variant='secondary';
                  className='text-xs py-1 px-2';
                >;
                  {s && s.key === 'skills' ? 'Add skills' : 'Mark done'}
                </EnhancedButton>              )}
            </li>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    try { window.localStorage.setItem('onboarding.talent', JSON.stringify(completed)) } catch {}
  }, [completed]);

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);

  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
        </div>
      </EnhancedCard>

      <EnhancedCard>
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
<<<<<<< HEAD
<<<<<<< HEAD
                <EnhancedButton
                  onClick={() => toggle(s.key)}
                  variant='secondary'
                  className='text-xs py-1 px-2'
                >
                  {s.key === 'skills' ? 'Add skills' : 'Mark done'}
                </EnhancedButton>              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
);


}
=======


<<<<<<< HEAD
}


=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </li>;
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </ul>;
      </EnhancedCard>;
    </div>;
  );


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )
}
import EnhancedCard from '../../components / ui / EnhancedCard';
import EnhancedButton from '../../components / ui / EnhancedButton';
import {useEffect, useState} from 'react';
const STEPS = [;
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
  { key: 'match', label: 'First match received' },
] as const;
;
type StepKey = (typeof STEPS)[number]['key'];
;
export default /**
 * TalentDashboard - Function description
 */
function TalentDashboard() {
  const [completed, set_completed] = useState < Record < StepKey, boolean>>({
    profile: false,
    skills: false,
    availability: false,
    match: false,
  });
;
  useEffect (() => {
    try {
      const raw = window.local_storage.get_item ('onboarding.talent');
      if (set_completed (JSON.parse (raw))) {
  $2
}    } catch {}
  }, []);
;
  useEffect (() => {
    try {
      window.local_storage.set_item (
        'onboarding.talent',
        JSON.stringify (completed));
    } catch {}
  }, [completed]);
;
  const progress = Math.round (
    (Object.values (completed).filter (Boolean).length / STEPS.length) * 100);
;
  const toggle = (key: StepKey) =>: any;
    set_completed (c => ({ ...c, [key]: !c[key] }));
;
  return (
    <div className='space - y-4'>;
      <EnhancedCard>;
        <div className='flex items - center justify - between'>;
          <div>;
            <h1 className='text - lg font - semibold'>Welcome back</h1>;
            <p className='text - sm text - gray - 600 dark:text - gray - 300'>;
              Complete onboarding to unlock better matches.;
            </p>;
          </div>;
          <div className='text - sm font - medium'>{progress}%</div>;
        </div>;
        <div className='mt - 3 h - 2 w - full bg - gray - 100 dark:bg - gray - 800 rounded'>;
          <div;
            className='h - 2 rounded bg - blue - 600';
            style={{ width: `${progress}%` }}
          />        </div>;
      </EnhancedCard>;
      <EnhancedCard>;
        <h2 className='font - semibold mb - 2'>Checklist</h2>;
        <ul className='space - y-2'>;
          {STEPS.map (string => (
            <li key={s.key} className='flex items - center justify - between'>;
              <div className='flex items - center gap - 2'>;
                <span;
                  className={`inline - flex h - 5 w - 5 items - center justify - center rounded - full border ${completed[s.key] ? 'bg - emerald - 500 text - white border - emerald - 500' : 'border - gray - 300 dark:border - gray - 700'}`}
                >;
                  {completed[s.key] ? '✓' : ''}
                </span>;
                <span className='text - sm'>{s.label}</span>;
              </div>;
              {completed[s.key] ? (
                <button;
                  on_click={() => toggle (s.key)}
                  className='text - xs text - gray - 500 hover:underline';
                >;
                  Undo;
                </button>) : (
                <EnhancedButton;
                  on_click={() => toggle (s.key)}
                  variant='secondary';
                  className='text - xs py - 1 px - 2';
                >;
                  {s.key === 'skills' ? 'Add skills' : 'Mark done'}
<<<<<<< HEAD:pages/dashboard/talent.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </EnhancedButton>              )}
            </li>))}
        </ul>;
      </EnhancedCard>;
    </div>);
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
                </EnhancedButton>
              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
);
<<<<<<< HEAD:pages/dashboard/talent.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/dashboard/talent.tsx
