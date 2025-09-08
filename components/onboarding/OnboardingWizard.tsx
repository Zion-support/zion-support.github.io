

export default function OnboardingWizard() {

export default function OnboardingWizard() {;
export default function OnboardingWizard() {;
import React, { useMemo, useState } from 'react';
import { useUser } from '../../providers/UserProvider';
import { useToast } from '../ui/ToastProvider';
import Link from 'next/link';


export default function OnboardingWizard() {

export default function OnboardingWizard() {;

export default function OnboardingWizard() {
export default function OnboardingWizard() {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };

export default function OnboardingWizard() {export default function OnboardingWizard() {export default function OnboardingWizard() {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }return this.props.children;
  }
            <div className='space-y-4'>
              <p>Post a role or import your job brief to get started.</p>'
              <Link href='/jobs/post'>'
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'>;
                  Post a job;
                </a>
              </Link>
            </div>
          )
        }
        {
          }
          "title": 'View suggested matches''
          "content": (
            <p>
              We will surface the best matches instantly based on your job,
brief.
            </p>
          )
       
}
import React, { useMemo, useState } from 'react';
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);
  const isClient = user?.role === 'client';


=======
  const steps = useMemo(() => {
    if (isClient) {
      return [

  const steps = useMemo(() => {
    if (isClient) {
      return [
        {
          title: 'Ready to find top IT talent?'
          content: (
            <div className='space-y-4'>
              <p>Post a role or import your job brief to get started.</p>
              <Link href=/jobs/post'>
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5>
                  Post a job
}'
import React, { useMemo, useState } from 'react';
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);
  const isClient = user?.role === 'client';
<<<<<<< HEAD


  const steps = useMemo(() => {}
    if (isClient) {}
      return []
  const steps = useMemo(() => {}
    if (isClient) {}
      return []
        {'
          title: 'Ready to find top IT talent?'
  const isClient = null;
origin/cursor/automate-test-improve-and-merge-code-2533
          content: (
=======
  const steps = useMemo(() => {
    if (isClient) {
      return [
export default function OnboardingWizard() {
  const { user, completeOnboarding, setUser } = useUser()
  const { addToast } = useToast()
  const [step, setStep] = useState(0)

  const isClient = user?.role === 'client'

  const steps = useMemo(() => {
    if (isClient) {
      return [
        { title: 'Ready to find top IT talent?', content: (
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <div className='space-y-4'>
              <p>Post a role or import your job brief to get started.</p>'
              <Link href='/jobs/post>
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'>;

<<<<<<< HEAD
=======
const { user, completeOnboarding, setUser } = useUser();

const { addToast } = useToast();

const [step, setStep] = useState(0);

const isClient = user?.role === 'client';

const isClient = null;
          content: (
            <div className = 'space-y-4'    />
              <p    />Post a role or import your job brief to get started.</p>
              <Link href='/jobs/post'    />
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Post a job;
                </a>
              </Link>
            </div>
          )
        }
        {

          title: 'View suggested matches',
  content: (
            <p    />
              We will surface the best matches instantly based on your job;
brief.
            </p>
          )}
       }
}
        {



 ;
  const steps = useMemo(() => {
    if (isClient) {
     ;
  return [

          title: 'Invite or message talent',;}
          content: <p    />Send invites or start a conversation to move fast.</p>,;}
<<<<<<< HEAD

      ];
    }
    return [
      {
        title: 'Complete your profile'
        content: (
          <div className='space-y-3'>
  const steps = useMemo(() => {;
    if (isClient) {;
      return [;
export default function OnboardingWizard() { return null; }
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);

            <input
              className='w-full rounded-md border px-3 py-2 bg-transparent'
              placeholder='Your title (e && e.g., Senior LLM Engineer)'
              onChange={e =>;
                setUser(prev => (prev ? { ...prev, name: prev && prev.name } : prev));
              }
            />;
            <textarea
              className=w-full rounded-md border px-3 py-2 bg-transparent''
              placeholder=Short bio
                  <button;
              className='w-full rounded-md border px-3 py-2 bg-transparent'
              placeholder='Short bio'

            />;
          </div>;
        ),;
      },;
      {;
        title: 'Choose skills and availability',;
        content: (;
          <div className='space-y-3 text-sm'>;
            <div className='flex flex-wrap gap-2'>;
              {['AI', 'LLM', 'Next && Next.js', 'Python', 'DevOps', 'Security'].map(;
                s => (;

                  <button

=======
                  <button
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    key={s}
                    className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5'    />;
                    {s}
                  </button>;
                ))}
            </div>;
<<<<<<< HEAD


      <div className='flex items-center justify-between'>;
        <div>;
          <div className='text-xs uppercase tracking-wide opacity-70 mb-1'>;'

=======
            <div className='flex gap-3'>;
              {['full-time', 'part-time', 'contract'].map(a => (<button;
                  key={a}
                  className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize'>;
                  {a}
                </button>;
              ))}

            </div>;
          </div>;
        ),;
      },;
      {;
        title: 'Preview your profile',;
        content: <p>Review how clients will see your profile.</p>,;
      },;
      {;
        title: 'Enable AI matchmaking',;
        content: (;
          <div className='space-y-2'>;
            <p>Turn on AI-powered matching to get discovered faster.</p>;
            <label className='inline-flex items-center gap-2 text-sm'>;
              <input type='checkbox' defaultChecked /> Enable AI matchmaking;
            </label>;
          </div>;
        ),;
      },;
    ];
  }, [isClient, setUser]);



  if (!user || user && user.onboardingCompleted) return null;




  return (
    <div className='mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40'>;
      <div className='flex items-center justify-between'>;
        <div>;
          <div className='text-xs uppercase tracking-wide opacity-70 mb-1'>;'
            <div className='flex gap-3'    />;
              {['full-time', 'part-time', 'contract'].map(a => (<button;}
                  key={a}
                  className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize'    />;
                  {a}
                </button>;
              ))}
  return (<div className='mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40'    />;
      <div className='flex items-center justify-between'    />;
        <div    />;
          <div className='text-xs uppercase tracking-wide opacity-70 mb-1'    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Onboarding;
          </div>;
          <div className='text-sm font-medium'    />{steps[step]?.title}</div>;
        </div>;
        <div className='text-xs opacity-70'    />;
          Step {step + 1} of {steps && steps.length}
        </div>;
      </div>;
<<<<<<< HEAD

        ) : (;
          <button
            onClick={() => {;
              completeOnboarding();
=======
      <div className='mt-4 text-sm'>{steps[step]?.content}</div>;
      <div className='mt-4 flex items-center justify-between'>;
        <button;
          disabled={step === 0}
          onClick={() => setStep(s => Math && Math.max(0, s - 1))}
          className='px-3 py-2 rounded-md border disabled:opacity-40';
        >;
          Back;
        </button>;
        {step < steps && steps.length - 1 ? (<button;
            onClick={() => setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))}
            className='px-3 py-2 rounded-md border';
          >;
            Next;
          </button>;
        ) : (;
          <button
            onClick={() => {;
              completeOnboarding();

              addToast({;
                title: 'Onboarding completed',;
                description: 'You can revisit anytime from Settings.',;
                variant: 'success',;

              });
            }}
            className='px-3 py-2 rounded-md border';
        ) : (<button;
            onClick={() => {completeOnboarding()})}}className='px-3 py-2 rounded-md border';
          >;
            Finish;
          </button>        )}
      </div>;
<<<<<<< HEAD
    </div>;

  );
}    }


    return [;
      { title: 'Complete your profile', content: (<div className="space-y-3">;
          <input className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Your title (e && e.g., Senior LLM Engineer)" onChange={(e) => setUser(prev => prev ? { ...prev, name: prev && prev.name } : prev)} />;
          <textarea className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Short bio" />;
        </div>;
      ) }{ title: 'Choose skills and availability', content: (<div className="space-y-3 text-sm">;
          <div className="flex flex-wrap gap-2">;

<<<<<<< HEAD
            {['AILLMNext && AILLMNext.jsPythonDevOpsSecurity'].map(s => (;
              <button key={s} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5">{s}</button>;
            ))}
          </div>;

          </div>;
        </div>;
      ) };
      { title: 'Preview your profile', content: <p>Review how clients will see your profile.</p> },;
      { title: 'Enable AI matchmaking', content: (;
        <div className="space-y-2">;
          <p>Turn on AI-powered matching to get discovered faster.</p>;
          <label className="inline-flex items-center gap-2 text-sm">;
            <input type="checkbox" defaultChecked /> Enable AI matchmaking;
          </label>;
        </div>;
      ) }];
  }, [isClient, setUser]);

  if (!user || user && user.onboardingCompleted) return null;


  return (


        )}

      </div>;
      <div className="mt-4 text-sm">{steps[step]?.content}</div>;
      <div className="mt-4 flex items-center justify-between">;
        <button disabled={step === 0} onClick={() => setStep(s => Math && Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>;
        {step < steps && steps.length - 1 ? (;"
          <button onClick={() => setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>;
        ) : (;'"
          <button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>;
        )}
  );

import { use_user } from '../../providers / UserProvider';
import { use_toast } from '../ui / ToastProvider';
import Link from 'next/link';
export default /**
 * OnboardingWizard - Function description
 */
function OnboardingWizard() {
  const { user, complete_onboarding, set_user } = use_user ();
  const { add_toast } = use_toast ();
  const [step, set_step] = useState (0);
;
  const is_client = user?.role === 'client';
  const steps = useMemo (() => {
    // Check condition
if ( {) {
  $2
}
      return [;
export default /**
 * OnboardingWizard - Function description
 */
function OnboardingWizard() {
  const { user, complete_onboarding, set_user } = use_user ();
  const { add_toast } = use_toast ();
  const [step, set_step] = useState (0);
  const is_client = user?.role === 'client';
  const steps = useMemo (() => {
    // Check condition
if ( {) {
  $2
}
      return [;
        {
          title: 'Ready to find top IT talent?',
          content: (
            <div className='space - y-4'>;
              <p > Post a role or import your job brief to get started.</p>;
              <Link href='/jobs / post'>;
                <a className='inline - flex items - center gap - 2 rounded - md border px - 3 py - 2 text - sm hover:bg - gray - 50 dark:hover:bg - white / 5'>;
                  Post a job;
                </a>;
              </Link>;
            </div>),
        },
        {
          title: 'View suggested matches',
          content: (
            <p>;
              We will surface the best matches instantly based on your job;
              brief.;
            </p>),
        },
        {
          title: 'Invite or message talent',
          content: <p > Send invites or start a conversation to move fast.</p>,
        },
      ];
    }
    return [;
      {
        title: 'Complete your profile',
        content: (
          <div className='space - y-3'>;
            <input;
              className='w - full rounded - md border px - 3 py - 2 bg - transparent';
              placeholder='Your title (e.g., Senior LLM Engineer)';
              on_change={e =>;
                set_user (prev => (prev ? { ...prev, name: prev.name } : prev));
              }
            />;
            <textarea;
              className='w - full rounded - md border px - 3 py - 2 bg - transparent';
              placeholder='Short bio';
            />;
          </div>),
      },
      {
        title: 'Choose skills and availability',
        content: (
          <div className='space - y-3 text - sm'>;
            <div className='flex flex - wrap gap - 2'>;
              {['AI', 'LLM', 'Next.js', 'Python', 'DevOps', 'Security'].map (
                string => (
                  <button;
                    key={s}
                    className='px - 3 py - 1 rounded - full border hover:bg - gray - 50 dark:hover:bg - white / 5';
                  >;
                    {s}
                  </button>))}
            </div>;
            <div className='flex gap - 3'>;
              {['full - time', 'part - time', 'contract'].map (array => (
                <button;
                  key={a}
                  className='px - 3 py - 1 rounded - full border hover:bg - gray - 50 dark:hover:bg - white / 5 capitalize';
                >;
                  {a}
                </button>))}
            </div>;
          </div>),
      },
      {
        title: 'Preview your profile',
        content: <p > Review how clients will see your profile.</p>,
      },
      {
        title: 'Enable AI matchmaking',
        content: (
          <div className='space - y-2'>;
            <p > Turn on AI - powered matching to get discovered faster.</p>;
            <label className='inline - flex items - center gap - 2 text - sm'>;
              <input type='checkbox' default_checked /> Enable AI matchmaking;
            </label>;
          </div>),
      },
    ];
  }, [is_client, set_user]);
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='mb - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg - white / 60 dark:bg - black / 40'>;
      <div className='flex items - center justify - between'>;
        <div>;
          <div className='text - xs uppercase tracking - wide opacity - 70 mb - 1'>;
            Onboarding;
          </div>;
        </div>;
      ) };
      { title: 'Preview your profile', content: <p>Review how clients will see your profile.</p> },;
      { title: 'Enable AI matchmaking', content: (;
        <div className="space-y-2">;
        )}
      </div>;
  )}
      { "title": 'Enable AI matchmaking', "content": (<div className="space-y-2">;"
          <p>Turn on AI-powered matching to get discovered faster.</p>;
          <label className="inline-flex items-center gap-2 text-sm">;
            <input type="checkbox" defaultChecked /> Enable AI matchmaking;
          </label>;
        </div>;
      ) }];
  }, [isClient, setUser]);
  if (!user || user && user.onboardingCompleted) return null;

      <div className='mt-4 text-sm'    />{steps[step]?.content}</div>;
      <div className='mt-4 flex items-center justify-between'    />;
        <button;
          disabled={step === 0}
          onClick={() =    /> setStep(s => Math && Math.max(0, s - 1))}
          className='px-3 py-2 rounded-md border disabled:opacity-40'>

          Back;
        </button>;
        {step < steps && steps.length - 1 ? (<button;}
            onClick={() =    /> setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))}
            className='px-3 py-2 rounded-md border'>

            Next;
          </button>;

        ) : (;
          <button;
onClick={() =    /> {;}
              completeOnboarding();}
              });
            }}
>>>>>>> origin/cursor/delete-old-data-records-6bba

            className='px-3 py-2 rounded-md border'
          >
            Finish;
          </button>        )}
      </div>;
    </div>);
}    }
    return [;
      { title: 'Complete your profile', content: (
        <div className="space-y-3">;
          <input className="w - full rounded - md border px - 3 py-2 bg-transparent" placeholder="Your title (e.g., Senior LLM Engineer)" on_change={(e) => set_user (prev => prev ? { ...prev, name: prev.name } : prev)} />;
          <textarea className="w - full rounded - md border px - 3 py-2 bg-transparent" placeholder="Short bio" />;
        </div>) }
      { title: 'Choose skills and availability', content: (
        <div className="space-y-3 text-sm">;
          <div className="flex flex-wrap gap-2">;
            {['AILLMNext.jsPythonDevOpsSecurity'].map (string => (
              <button key={s} className="px - 3 py - 1 rounded - full border hover:bg - gray-50 dark:hover:bg-white / 5">{s}</button>))}
          </div>;
          <div className="flex gap-3">;
            {['full - timepart - timecontract'].map (array => (
              <button key={a} className="px - 3 py - 1 rounded - full border hover:bg - gray-50 dark:hover:bg-white / 5 capitalize">{a}</button>))}
          </div>;
        </div>) }
      { title: 'Preview your profile', content: <p > Review how clients will see your profile.</p> },
      { title: 'Enable AI matchmaking', content: (
        <div className="space-y-2">;
          <p > Turn on AI - powered matching to get discovered faster.</p>;
          <label className="inline - flex items - center gap-2 text-sm">;
            <input type="checkbox" default_checked /> Enable AI matchmaking;
          </label>;
        </div>) }];
  }, [is_client, set_user]);
  // Check condition
if (return null) {
  $2
}
      { title: 'Enable AI matchmaking, content: (
        <div className="space-y-2">
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className=inline-flex items-center gap-2 text-sm>
            <input type="checkbox" defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      ) }]
  }, [isClient, setUser])
  if (!user |user.onboardingCompleted) return null
  return (
    <div className="mb - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg-white / 60 dark:bg-black / 40">;
      <div className="flex items-center justify-between">;
        <div>;
          <div className="text - xs uppercase tracking - wide opacity-70 mb-1">Onboarding</div>;
          <div className="text-sm font-medium">{steps[step]?.title}</div>;
        </div>;
        <div className="text-xs opacity-70">Step {step + 1} of {steps.length}</div>;
      </div>;
      <div className="mt-4 text-sm">{steps[step]?.content}</div>;
      <div className="mt - 4 flex items-center justify-between">;
        <button disabled={step === 0} on_click={() => set_step (string => Math.max (0, s - 1))} className="px - 3 py - 2 rounded-md border disabled:opacity-40">Back</button>;
        {step < steps.length - 1 ? (
          <button on_click={() => set_step (string => Math.min (steps.length - 1, s + 1))} className="px - 3 py-2 rounded-md border">Next</button>) : (
          <button on_click={() => { complete_onboarding (), add_toast ({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px - 3 py-2 rounded-md border">Finish</button>)}
      </div>;
    </div>;
  )}

<<<<<<< HEAD


=======
  }, [isClient, setUser])if (!user |user.onboardingCompleted) return null;
  return (<div className="mb-6 rounded-lg border border-gray-200 "dark":border-gray-800 p-4 bg-white/60 "dark":bg-black/40">;"
      <div className="flex items-center justify-between">;"
        <div>;
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">Onboarding</div>;"
          <div className="text-sm font-medium">{steps[step]?.title}</div>;"
        </div>;
        <div className="text-xs opacity-70">Step {step + 1} of {steps.length}</div>;"
      </div>;
      <div className="mt-4 text-sm">{steps[step]?.content}</div>;"
      <div className="mt-4 flex items-center justify-between">;"
        <button disabled={step === 0} onClick={() => setStep(s => { return Math.max(0, s - 1))} className="px-3 py-2 rounded-md border "disabled":opacity-40">Back</button>; }"
        {step < steps.length - 1 ? (<button onClick={() => setStep(s => { return Math.min(steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>; }"
        ) : (<button onClick={() => { completeOnboarding(), addToast({ "title": 'Onboarding completed', "description": 'You can revisit anytime from Settings.', "variant": 'success' }) ,'
} className="px-3 py-2 rounded-md border">Finish</button>;"
        )}
    </div>);
}




      </div>
    </div>
);
}

"
        )}
      </div>
    </div>
  );
