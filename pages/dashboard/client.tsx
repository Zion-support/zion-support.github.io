<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import {useEffect, useState} from 'react';
const STEPS = [
  { key: 'job', label: 'Job posted' }
  { key: 'invite', label: 'First invite sent' }
  { key: 'response', label: 'First response received' }
] as const;
type StepKey = (typeof STEPS)[number]['key'];

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const STEPS = [
  { key: 'job', label: 'Job posted' },
  { key: 'invite', label: 'First invite sent' },
  { key: 'response', label: 'First response received' }] as const,
<<<<<<< HEAD

type StepKey = typeof STEPS[number]['key'];

export default function ClientDashboard() {
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ job: false, invite: false, response: false }),
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.client');
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  }, []);
  useEffect(() => {


<<<<<<< HEAD
=======
  }, []);
  useEffect(() => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function ClientDashboard() {;
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({;
    job: false,;
    invite: false,;
    response: false,;
  });

  useEffect(() => {;
    try {;
      const raw = window && window.localStorage.getItem('onboarding && onboarding.client');
      if (raw) setCompleted(JSON && JSON.parse(raw));    } catch {}
  }, []);

  useEffect(() => {;
    try {;
      window && window.localStorage.setItem(;
        'onboarding && onboarding.client',;
        JSON && JSON.stringify(completed);
      );
    } catch {}
  }, [completed]);

  const progress = Math && Math.round(;
    (Object && Object.values(completed).filter(Boolean).length / STEPS && STEPS.length) * 100;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
  const toggle = (key: StepKey) =>;
    setCompleted(c => ({ ...c, [key]: !c[key] }));

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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                  {s && s.key === 'job' ? 'Post a Job' : 'Mark done'}
                </EnhancedButton>              )}
            </li>;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    try { window.localStorage.setItem('onboarding.client', JSON.stringify(completed)) } catch {}
  }, [completed]);

  const progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);
  const toggle = (key: StepKey) => setCompleted((c) => ({ ...c, [key]: !c[key] }));
<<<<<<< HEAD

=======



=======
import EnhancedCard from '../../components/ui/EnhancedCard',
import EnhancedButton from '../../components/ui/EnhancedButton';

import {useEffect, useState} from 'react';
const STEPS = [
  { key: 'job', label: 'Job posted' }
  { key: 'invite', label: 'First invite sent' }
  { key: 'response', label: 'First response received' }
] as const;
type StepKey = (typeof STEPS)[number]['key'];
export default function ClientDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({
    job: false
    invite: false
    response: false
    job: false,
    invite: false,
    response: false,;
  });
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.client');
      if (raw) setCompleted(JSON.parse(raw));    } catch {}
  }, []);
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

import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
=======

  );
  const toggle = (key: StepKey) =>;
    setCompleted(c => ({ ...c, [key]: !c[key] }));

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
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
                  {s && s.key === 'job' ? 'Post a Job' : 'Mark done'}
                </EnhancedButton>              )}
            </li>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


}


                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'job' ? 'Post a Job' : 'Mark done'}</EnhancedButton>
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </ul>;
      </EnhancedCard>;
    </div>;
  );


<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import EnhancedCard from '../../components / ui / EnhancedCard';
import EnhancedButton from '../../components / ui / EnhancedButton';
import {useEffect, useState} from 'react';
const STEPS = [;
  { key: 'job', label: 'Job posted' },
  { key: 'invite', label: 'First invite sent' },
  { key: 'response', label: 'First response received' },
] as const;
;
type StepKey = (typeof STEPS)[number]['key'];
;
export default /**
 * ClientDashboard - Function description
 */
function ClientDashboard() {
  const [completed, set_completed] = useState < Record < StepKey, boolean>>({
    job: false,
    invite: false,
    response: false,
  });
;
  useEffect (() => {
    try {
      const raw = window.local_storage.get_item ('onboarding.client');
      if (set_completed (JSON.parse (raw))) {
  $2
}    } catch {}
  }, []);
;
  useEffect (() => {
    try {
      window.local_storage.set_item (
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
  return (
    <div className='space - y-4'>;
      <EnhancedCard>;
        <div className='flex items - center justify - between'>;
          <div>;
            <h1 className='text - lg font - semibold'>Welcome back</h1>;
            <p className='text - sm text - gray - 600 dark:text - gray - 300'>;
              Post your first job and invite talent to get started.;
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
                  {s.key === 'job' ? 'Post a Job' : 'Mark done'}
                </EnhancedButton>              )}
            </li>))}
        </ul>;
      </EnhancedCard>;
    </div>);
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======

type StepKey = typeof STEPS[number]['key'],

export default function ClientDashboard() {
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
                <EnhancedButton onClick={() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{s.key === 'job' ? 'Post a Job' : 'Mark done'}</EnhancedButton>
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
