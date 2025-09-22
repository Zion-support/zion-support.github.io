:pages_backup/dashboard/client.tsx
<<<<<<< HEAD:pages_backup/dashboard/client.tsx
<<<<<<< HEAD:pages/dashboard/client.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/dashboard/client.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/dashboard/client.tsx

import {useEffect, useState} from 'react';
const STEPS = ['
  { key: 'job', label: 'Job posted' }'
  { key: 'invite', label: 'First invite sent' }'
  { key: 'response', label: 'First response received' }
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton';
import { useEffect, useState } from 'react';
const STEPS = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import EnhancedCard from '../../components/ui/EnhancedCard',;
import EnhancedButton from '../../components/ui/EnhancedButton';
import { useEffect, useState } from 'react';
const STEPS = null;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/dashboard/client.tsx
] as const;
=======
] as const;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/dashboard/client.tsx
type StepKey = (typeof STEPS)[number]['key'];

const STEPS = ['
  { key: 'job', label: 'Job posted' },'
  { key: 'invite', label: 'First invite sent' },'
  { key: 'response', label: 'First response received' }] as const,
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD
<<<<<<< HEAD

type StepKey = typeof STEPS[number]['key'];

export default function ClientDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({
    job: false
    invite: false
    response: false
    job: false,
    invite: false,
    response: false,;
  });
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ job: false, invite: false, response: false }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.client');
      if (raw) setCompleted(JSON.parse(raw));    } catch {}
  }, []);
:pages_backup/dashboard/client.tsx
  useEffect(() => {
    try {
      window.localStorage.setItem(
        'onboarding.client'
        JSON.stringify(completed)
      );
    } catch {}
  }, [completed]);
  const progress = Math.round(
    (Object.values(completed).filter(Boolean).length / STEPS.length) * 100
  );
  const toggle = (key: StepKey) =>
    setCompleted(c => ({ ...c, [key]: !c[key] }));

  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ job: false, invite: false, response: false }),
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.client');
:pages_backup/dashboard/client.tsx
      if (raw) setCompleted(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
try {
      window.localStorage.setItem(
        'onboarding.client'
        JSON.stringify(completed)
origin/cursor/automate-test-improve-and-merge-code-2533
:pages_backup/dashboard/client.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/dashboard/client.tsx
      );
    } catch {}
  }, [completed]);

  const progress = Math && Math.round(;
    (Object && Object.values(completed).filter(Boolean).length / STEPS && STEPS.length) * 100;

  );
  const toggle = (key: StepKey) =>;
    setCompleted(c => ({ ...c, [key]: !c[key] }));
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD:pages_backup/dashboard/client.tsx
<<<<<<< HEAD:pages/dashboard/client.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useEffect, useState } from 'react';
const STEPS = [;
  { key: 'job', label: 'Job posted' },;
  { key: 'invite', label: 'First invite sent' },;
  { key: 'response', label: 'First response received' }] as const,;
type StepKey = typeof STEPS[number]['key'];
export default function ClientDashboard(req, res) {
  try {
  const [completed, setCompleted] = useState<Record<StepKey boolean>>({ job: false, invite: false, response: false }),;
  useEffect(() => {;
    try {
      const raw = window.localStorage.getItem('onboarding.client');
      if (raw) setCompleted(JSON.parse(raw));
    } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, []),;
  useEffect(() => {;
    try { window.localStorage.setItem('onboarding.client', JSON.stringify(completed)) } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [completed]),
  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100),
  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] })),
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div className='space-y-4'>;
      <EnhancedCard>;
        <div className='flex items-center justify-between'>;
          <div>;
            <h1 className='text-lg font-semibold'>Welcome back</h1>;
            <p className='text-sm text-gray-600 dark:text-gray-300'>;
              Post your first job and invite talent to get started.;
            </p>;
          </div>;
          <div className='text-sm font-medium'>{progress}%</div>;
        </div>;
        <div className='mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded'>;
          <div
            className='h-2 rounded bg-blue-600'
            style={{ width: `${progress}%` }}
:pages_backup/dashboard/client.tsx
return (
    <div className='space-y-4'>;
      <EnhancedCard>;
        <div className='flex items-center justify-between'>;
          <div>;
            <h1 className='text-lg font-semibold'>Welcome back</h1>;
            <p className='text-sm text-gray-600 dark:text-gray-300'>;
              Post your first job and invite talent to get started.;
            </p>;
          </div>;
          <div className='text-sm font-medium'>{progress}%</div>;
        </div>;
        <div className='mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded'>;
          <div
            className='h-2 rounded bg-blue-600'
            style={{ width: `${progress}%` }}

          />        </div>;
      </EnhancedCard>;
      <EnhancedCard>;
        <h2 className='font-semibold mb-2'>Checklist</h2>;
        <ul className='space-y-2'>;
          {STEPS && STEPS.map(s => (;
            <li key={s && s.key} className='flex items-center justify-between'>;
              <div className='flex items-center gap-2'>;

                <span
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s && s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>;
                  {completed[s && s.key] ? '✓' : ''}
:pages_backup/dashboard/client.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (
    <div className='space-y-4'>;
      <EnhancedCard>;
        <div className='flex items-center justify-between'>;
          <div>;
            <h1 className='text-lg font-semibold'>Welcome back</h1>;
            <p className='text-sm text-gray-600 dark:text-gray-300'>;
              Post your first job and invite talent to get started.;
            </p>;
          </div>;
          <div className='text-sm font-medium'>{progress}%</div>;
        </div>;
        <div className='mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded'>;
          <div
            className='h-2 rounded bg-blue-600'
            style={{ width: `${progress}%` }}
:pages/dashboard/client.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </span>;
                <span className='text-sm'>{s && s.label}</span>;
              </div>;
              {completed[s && s.key] ? (;
                <button;
                  onClick={() => toggle(s && s.key)}'
                  className='text-xs text-gray-500 hover:underline';
                >;
                  Undo;
                </button>;
              ) : (;
                <EnhancedButton;
                  onClick={() => toggle(s && s.key)}'
                  variant='secondary';'
                  className='text-xs py-1 px-2';
                >;'
                  {s && s.key === 'job' ? 'Post a Job' : 'Mark done'}
                </EnhancedButton>              )}
            </li>;
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    try { window.localStorage.setItem('onboarding.client', JSON.stringify(completed)) } catch {}
  }, [completed]);
  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);
  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));
:pages_backup/dashboard/client.tsx

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/dashboard/client.tsx
=======
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/dashboard/client.tsx
  return (
    <div className="space-y-4">
      <EnhancedCard>"
        <div className="flex items-center justify-between">
          <div>"
            <h1 className="text-lg font-semibold">Welcome back</h1>"
            <p className="text-sm text-gray-600 dark:text-gray-300">Post your first job and invite talent to get started.</p>
          </div>"
          <div className="text-sm font-medium">{progress}%</div>
        </div>"
        <div className="mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded">"
          <div className="h-2 rounded bg-blue-600" style={{ width: `${progress}%` }} />
        </div>
      </EnhancedCard>

      <EnhancedCard>"
        <h2 className="font-semibold mb-2">Checklist</h2>"
        <ul className="space-y-2">
          {STEPS.map((s) => ("
            <li key={s.key} className="flex items-center justify-between">"
              <div className="flex items-center gap-2">'`
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>{completed[s.key] ? '✓' : ''}</span>"
                <span className="text-sm">{s.label}</span>
:pages_backup/dashboard/client.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/dashboard/client.tsx
          />
        </div>
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
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD:pages/dashboard/client.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/dashboard/client.tsx
              </div>
              {completed[s.key] ? ("
                <button onClick={() => toggle(s.key)} className="text-xs text-gray-500 hover:underline">Undo</button>
              ) : (
<EnhancedButton
                  onClick={() => toggle(s.key)}
                  variant='secondary'
                  className='text-xs py-1 px-2'
                >
                  {s.key === 'job' ? 'Post a Job' : 'Mark done'}
                </EnhancedButton>              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
);

}

}

}

}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/dashboard/client.tsx
                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'job' ? 'Post a Job' : 'Mark done'}</EnhancedButton>
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </li>;
          ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/dashboard/client.tsx
        </ul>;
      </EnhancedCard>;
    </div>;
  );

:pages_backup/dashboard/client.tsx
<<<<<<< HEAD
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import EnhancedCard from '../../components / ui / EnhancedCard';
import EnhancedButton from '../../components / ui / EnhancedButton';
=======

  )
}'
import EnhancedCard from '../../components / ui / EnhancedCard';'
import EnhancedButton from '../../components / ui / EnhancedButton';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/dashboard/client.tsx
import {useEffect, useState} from 'react';
const STEPS = [;'
  { key: 'job', label: 'Job posted' },'
  { key: 'invite', label: 'First invite sent' },'
  { key: 'response', label: 'First response received' },
] as const;
;'
type StepKey = (typeof STEPS)[number]['key'];
;
export default /**;
 * ClientDashboard - Function description;
 */
function ClientDashboard() {}
  const [completed, set_completed] = useState < Record < StepKey, boolean>>({}
    job: false,
    invite: false,
    response: false,
  });
;
  useEffect (() => {}
    try {'
      const raw = window.local_storage.get_item ('onboarding.client');
      if (set_completed (JSON.parse (raw))) {}
  $2;
}    } catch {}
  }, []);
;
  useEffect (() => {}
    try {}
      window.local_storage.set_item ('
        'onboarding.client',
        JSON.stringify (completed));
    } catch {}
  }, [completed]);
;
  const progress = Math.round (
    (Object.values (completed).filter (Boolean).length / STEPS.length) * 100);
  const toggle = (key: StepKey) =>: any;
    set_completed (c => ({ ...c, [key]: !c[key] }));
;
  return ('
    <div className='space - y-4'>;
      <EnhancedCard>;'
        <div className='flex items - center justify - between'>;
          <div>;'
            <h1 className='text - lg font - semibold'>Welcome back</h1>;'
            <p className='text - sm text - gray - 600 dark:text - gray - 300'>;
              Post your first job and invite talent to get started.;
            </p>;
          </div>;'
          <div className='text - sm font - medium'>{progress}%</div>;
        </div>;'
        <div className='mt - 3 h - 2 w - full bg - gray - 100 dark:bg - gray - 800 rounded'>;
          <div;'
            className='h - 2 rounded bg - blue - 600';`
            style={{ width: `${progress}%` }}
          />        </div>;
      </EnhancedCard>;
      <EnhancedCard>;'
        <h2 className='font - semibold mb - 2'>Checklist</h2>;'
        <ul className='space - y-2'>;
          {STEPS.map (string => ('
            <li key={s.key} className='flex items - center justify - between'>;'
              <div className='flex items - center gap - 2'>;
                <span;'`
                  className={`inline - flex h - 5 w - 5 items - center justify - center rounded - full border ${completed[s.key] ? 'bg - emerald - 500 text - white border - emerald - 500' : 'border - gray - 300 dark:border - gray - 700'}`}
                >;'
                  {completed[s.key] ? '✓' : ''}
                </span>;'
                <span className='text - sm'>{s.label}</span>;
              </div>;
              {completed[s.key] ? (
                <button;
                  on_click={() => toggle (s.key)}'
                  className='text - xs text - gray - 500 hover:underline';
                >;
                  Undo;
                </button>) : (
                <EnhancedButton;
                  on_click={() => toggle (s.key)}'
                  variant='secondary';'
                  className='text - xs py - 1 px - 2';
                >;'
                  {s.key === 'job' ? 'Post a Job' : 'Mark done'}
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD:pages/dashboard/client.tsx
<<<<<<< HEAD
                </EnhancedButton>              )}
            </li>))}
        </ul>;
      </EnhancedCard>;
    </div>);
;
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/dashboard/client.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/dashboard/client.tsx
                </EnhancedButton>
              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
);
:pages_backup/dashboard/client.tsx
<<<<<<< HEAD:pages/dashboard/client.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/dashboard/client.tsx
