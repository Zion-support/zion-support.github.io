<<<<<<< HEAD
<<<<<<< HEAD
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton';

import {useEffect, useState} from 'react';
const STEPS = [
  { key: 'profile', label: 'Profile completed' }
  { key: 'skills', label: 'Skills added' }
  { key: 'availability', label: 'Availability set' }
  { key: 'match', label: 'First match received' }

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

] as const;
type StepKey = (typeof STEPS)[number]['key'];
export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({
    profile: false
    skills: false
    availability: false
    match: false
    profile: false,
    skills: false,
    availability: false,
    match: false,;
  });
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
      if (raw) setCompleted(JSON.parse(raw));    } catch {}
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

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import { useEffect, useState } from 'react';
const STEPS = [;
  { key: 'profile', label: 'Profile completed' },;
  { key: 'skills', label: 'Skills added' },;
  { key: 'availability', label: 'Availability set' },;
<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function TalentDashboard() {;
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({;
    profile: false,;
    skills: false,;
    availability: false,;
    match: false,;
  });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    try {;
      const raw = window && window.localStorage.getItem('onboarding && onboarding.talent');
      if (raw) setCompleted(JSON && JSON.parse(raw));    } catch {}
  }, []);
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    try {;
      window && window.localStorage.setItem(;
        'onboarding && onboarding.talent',;
        JSON && JSON.stringify(completed);
      );
    } catch {}
  }, [completed]);
<<<<<<< HEAD
  const progress = Math && Math.round(;
    (Object && Object.values(completed).filter(Boolean).length / STEPS && STEPS.length) * 100;
  );
  const toggle = (key: StepKey) =>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setCompleted(c => ({ ...c, [key]: !c[key] }));
=======

  const progress = Math && Math.round(;
    (Object && Object.values(completed).filter(Boolean).length / STEPS && STEPS.length) * 100;
  );

  const toggle = (key: StepKey) =>;

    setCompleted(c => ({ ...c, [key]: !c[key] }));

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />        </div>;
      </EnhancedCard>;
=======

          />        </div>;
      </EnhancedCard>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <EnhancedCard>;
        <h2 className='font-semibold mb-2'>Checklist</h2>;
        <ul className='space-y-2'>;
          {STEPS && STEPS.map(s => (;
            <li key={s && s.key} className='flex items-center justify-between'>;
              <div className='flex items-center gap-2'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try { window.localStorage.setItem('onboarding.talent', JSON.stringify(completed)) } catch {}
  }, [completed]);
  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);
  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));

<<<<<<< HEAD


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
    try { window.localStorage.setItem('onboarding.talent', JSON.stringify(completed)) } catch {}
  }, [completed]);

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);

  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

}

=======
=======


}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        </ul>;
      </EnhancedCard>;
    </div>;
  );


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                </EnhancedButton>              )}
            </li>))}
        </ul>;
      </EnhancedCard>;
    </div>);
;
<<<<<<< HEAD
<<<<<<< HEAD

type StepKey = typeof STEPS[number]['key'],

export default function TalentDashboard() {
      <EnhancedCard>
        <div className=&quot;flex items-center justify-between&quot;>
          <div>
            <h1 className=&quot;text-lg font-semibold&quot;>Welcome back</h1>
            <p className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>Complete onboarding to unlock better matches.</p>
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
                <EnhancedButton onClick={() => toggle(s.key)} variant=&quot;secondary&quot; className=&quot;text-xs py-1 px-2&quot;>{s.key === 'skills' ? 'Add skills' : 'Mark done'}</EnhancedButton>
              )}
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
        </ul>;
      </EnhancedCard>;
    </div>;
  );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
