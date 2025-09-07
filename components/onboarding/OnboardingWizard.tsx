<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function OnboardingWizard() {;

export default function OnboardingWizard() {

export default function OnboardingWizard() {

class ErrorBoundary extends React.Component {
  constructor(props) {
=======
export default function OnboardingWizard() { return null; }
export default function OnboardingWizard() {}
export default function OnboardingWizard() {}
class ErrorBoundary extends React.Component {}
  constructor(props) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function OnboardingWizard() {export default function OnboardingWizard() {export default function OnboardingWizard() {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }return this.props.children;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
<<<<<<< HEAD
}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import React, { useMemo, useState } from 'react';
import { useUser } from '../../providers/UserProvider';
import { useToast } from '../ui/ToastProvider';
import Link from 'next/link';
export default function OnboardingWizard() {
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);
  const isClient = user?.role === 'client';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
              <Link href='/jobs/post'>
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'>
                  Post a job
=======
}'
import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);'
  const isClient = user?.role === 'client';

  const steps = useMemo(() => {}
    if (isClient) {}
      return []
  const steps = useMemo(() => {}
    if (isClient) {}
      return []
        {'
          title: 'Ready to find top IT talent?'
<<<<<<< HEAD
  const isClient = null;
origin/cursor/automate-test-improve-and-merge-code-2533
          content: (
=======
          content: ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className='space-y-4'>
              <p>Post a role or import your job brief to get started.</p>'
              <Link href='/jobs/post'>'
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'>;
                  Post a job;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </a>
              </Link>
            </div>
          )
        }
<<<<<<< HEAD
        {
          title: 'View suggested matches'
          content: (
            <p>
              We will surface the best matches instantly based on your job
=======
        {'
          title: 'View suggested matches'
          content: (
            <p>
              We will surface the best matches instantly based on your job;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              brief.
            </p>
          )
        }
<<<<<<< HEAD
        {
import React, { useMemo, useState } from 'react'
import { useUser } from '../../providers/UserProvider'
import { useToast } from '../ui/ToastProvider'
import Link from 'next/link'

export default function OnboardingWizard() {
  const { user, completeOnboarding, setUser } = useUser()
  const { addToast } = useToast()
  const [step, setStep] = useState(0)

  const isClient = user?.role === 'client'
=======
<<<<<<< HEAD
        {
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  const steps = useMemo(() => {
    if (isClient) {
      return [
<<<<<<< HEAD
  const { user, completeOnboarding, setUser } = useUser()const { addToast } = useToast()const [step, setStep] = useState(0)const isClient  = user?.role === 'client';const steps = useMemo(() => {if (isClient) {return [;
  const steps = useMemo(() => {if (isClient) {return [;
        {title: 'Ready to find top IT talent?';
  const isClient  = null;content: (<div className='space-y-4'>;
              <p>Post a role or import your job brief to get started.</p>;
              <Link href='/jobs/post'>;
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'>;
                  Post a job;
                </a>;
              </Link>;
            </div>;
          )}
        {title: 'View suggested matches';
          content: (<p>We will surface the best matches instantly based on your job;
              brief.;
            </p>;
          )}
        {const steps = useMemo(() => {if (isClient) {return [;
          title: 'Invite or message talent',content: <p>Send invites or start a conversation to move fast.</p>,},];
    }
<<<<<<< HEAD
    return [;
      {title: 'Complete your profile';
        content: (<div className='space-y-3'>;
  const steps = useMemo(() => {if (isClient) {return [;
export default function OnboardingWizard() {const { user, completeOnboarding, setUser } = useUser()const { addToast } = useToast()const [step, setStep]  = useState(0)<input;
              className='w-full rounded-md border px-3 py-2 bg-transparent';
              placeholder='Your title (e && e.g., Senior LLM Engineer)';
              onChange={e =>;
                setUser(prev => (prev ? { ...prev, name: prev && prev.name } : prev))}
=======

<<<<<<< HEAD
=======
        {}
  const steps = useMemo(() => {}
    if (isClient) {}
      return []
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          title: 'Invite or message talent',;
          content: <p>Send invites or start a conversation to move fast.</p>,;
        },;

      ];
    }
    return []
      {'
        title: 'Complete your profile'
        content: ('
          <div className='space-y-3'>
  const steps = useMemo(() => {;
    if (isClient) {;
      return [;
export default function OnboardingWizard() { return null; }
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);

            <input'
              className='w-full rounded-md border px-3 py-2 bg-transparent''
              placeholder='Your title (e && e.g., Senior LLM Engineer)'
              onChange={e =>;
                setUser(prev => (prev ? { ...prev, name: prev && prev.name } : prev));
              }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            />;
            <textarea'
              className='w-full rounded-md border px-3 py-2 bg-transparent''
              placeholder='Short bio'
                  <button;
<<<<<<< HEAD
                    key={s}
                    className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5'>;
                    {s}
                  </button>;
                ))}
            </div>;
            <div className='flex gap-3'>;
              {['full-time', 'part-time', 'contract'].map(a => (<button;
                  key={a}
=======
                    key={s}'
                    className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5'>;
                    {s}
                  </button>;
                );
              )}
            </div>;'
            <div className='flex gap-3'>;'
              {['full-time', 'part-time', 'contract'].map(a => (;
                <button;
                  key={a}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize'>;
                  {a}
                </button>;
              ))}
<<<<<<< HEAD
  return (<div className='mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40'>;
      <div className='flex items-center justify-between'>;
        <div>;
          <div className='text-xs uppercase tracking-wide opacity-70 mb-1'>;
            Onboarding;
          </div>;
          <div className='text-sm font-medium'>{steps[step]?.title}</div>;
        </div>;
        <div className='text-xs opacity-70'>;
          Step {step + 1} of {steps && steps.length}
        </div>;
      </div>;
      <div className='mt-4 text-sm'>{steps[step]?.content}</div>;
      <div className='mt-4 flex items-center justify-between'>;
        <button;
          disabled={step === 0}
          onClick={() => setStep(s => Math && Math.max(0, s - 1))}
=======
  return ('
    <div className='mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40'>;'
      <div className='flex items-center justify-between'>;
        <div>;'
          <div className='text-xs uppercase tracking-wide opacity-70 mb-1'>;
            Onboarding;
          </div>;'
          <div className='text-sm font-medium'>{steps[step]?.title}</div>;
        </div>;'
        <div className='text-xs opacity-70'>;
          Step {step + 1} of {steps && steps.length}
        </div>;
      </div>;'
      <div className='mt-4 text-sm'>{steps[step]?.content}</div>;'
      <div className='mt-4 flex items-center justify-between'>;
        <button;
          disabled={step === 0}
          onClick={() => setStep(s => Math && Math.max(0, s - 1))}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          className='px-3 py-2 rounded-md border disabled:opacity-40';
        >;
          Back;
        </button>;
<<<<<<< HEAD
        {step < steps && steps.length - 1 ? (<button;
            onClick={() => setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))}
=======
        {step < steps && steps.length - 1 ? (;
          <button;
            onClick={() => setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            className='px-3 py-2 rounded-md border';
          >;
            Next;
          </button>;
<<<<<<< HEAD
        ) : (<button;
            onClick={() => {completeOnboarding()})}}className='px-3 py-2 rounded-md border';
            className='px-3 py-2 rounded-md border';
        ) : (<button;
            onClick={() => {completeOnboarding()})}}className='px-3 py-2 rounded-md border';
=======
        ) : (;
          <button;
            onClick={() => {;
              completeOnboarding();
              });
            }}'
            className='px-3 py-2 rounded-md border';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          >;
            Finish;
          </button>        )}
      </div>;
    </div>;
<<<<<<< HEAD
  )}    }
    return [;
      { title: 'Complete your profile', content: (<div className="space-y-3">;
          <input className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Your title (e && e.g., Senior LLM Engineer)" onChange={(e) => setUser(prev => prev ? { ...prev, name: prev && prev.name } : prev)} />;
          <textarea className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Short bio" />;
        </div>;
      ) }{ title: 'Choose skills and availability', content: (<div className="space-y-3 text-sm">;
          <div className="flex flex-wrap gap-2">;
            {['AILLMNext && AILLMNext.jsPythonDevOpsSecurity'].map(s => (<button key={s} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5">{s}</button>;
            ))}
          </div>;</div>;
      <div className="mt-4 text-sm">{steps[step]?.content}</div>;
      <div className="mt-4 flex items-center justify-between">;
        <button disabled={step === 0} onClick={() => setStep(s => Math && Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>;
        {step < steps && steps.length - 1 ? (<button onClick={() => setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>;
        ) : (<button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>;
=======
    return [
      {title: 'Complete your profile'
        content: (<div className='space-y-3'    />
const steps = useMemo(() => {if (isClient)
  return [;}

export default function OnboardingWizard() {const { user, completeOnboarding, setUser } = useUser()const { addToast } = useToast()const [step, setStep]  = useState(0)<input
              className='w-full rounded-md border px-3 py-2 bg-transparent'
              placeholder='Your title (e && e.g., Senior LLM Engineer)'
              onChange={e =    />;}
                setUser(prev => (prev ? { ...prev, name: prev && prev.name } : prev)

            />
            <textarea
              className='w-full rounded-md border px-3 py-2 bg-transparent'
              placeholder='Short bio'
                  <button
                    key={s}
                    className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5'    />
                    {s}
                  </button>
                ))}
            </div>
            <div className='flex gap-3'    />
              {['full-time', 'part-time', 'contract'].map(a => (<button;}
                  key={a}
                  className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5 capitalize'    />
                  {a}
                </button>
              ))}
            </div>
          </div>
        )
      }
      {
        title: 'Preview your profile'
        content: <p>Review how clients will see your profile.</p>
      }
      {
        title: 'Enable AI matchmaking'
        content: (
          <div className='space-y-2'>
            <p>Turn on AI-powered matching to get discovered faster.</p>
            <label className='inline-flex items-center gap-2 text-sm'>
              <input type='checkbox' defaultChecked /> Enable AI matchmaking
            </label>
          </div>
        )
      }
    ];
  }, [isClient, setUser]);
  if (!user |user.onboardingCompleted) return null;
  return (
    <div className='mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40'>
      <div className='flex items-center justify-between'>
        <div>
          <div className='text-xs uppercase tracking-wide opacity-70 mb-1'>
            Onboarding
          </div>
          <div className='text-sm font-medium'    />{steps[step]?.title}</div>
        </div>
        <div className='text-xs opacity-70'    />
          Step {step + 1} of {steps && steps.length}
        </div>
      </div>
      <div className='mt-4 text-sm'    />{steps[step]?.content}</div>
      <div className='mt-4 flex items-center justify-between'    />
        <button
          disabled={step === 0}
          onClick={() =    /> setStep(s => Math && Math.max(0, s - 1))}
          className='px-3 py-2 rounded-md border disabled:opacity-40'>

          Back
        </button>
        {step < steps && steps.length - 1 ? (<button;}
            onClick={() =    /> setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))}
            className='px-3 py-2 rounded-md border'>

            Next
          </button>
        ) : (
          <button
onClick={() =    /> {;}
              completeOnboarding();}
              })
            }}

        <button disabled={step === 0} onClick={() => setStep(s => Math && Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>
        {step < steps && steps.length - 1 ? (;"
          <button onClick={() => setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>
        ) : (;'"
          <button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        )}
  )import { use_user  } from '../../providers / UserProvider';
import { use_toast  } from '../ui / ToastProvider';
import Link from 'next/link';
export default /**;
 * OnboardingWizard - Function description;
 */;
function OnboardingWizard() {const { user, complete_onboarding, set_user } = use_user ()const { add_toast } = use_toast ()const [step, set_step]  = useState (0)const is_client = user?.role === 'client';
  const steps = useMemo (() => {// Check condition;
if ( {) {$2;
=======
  );
}    }
    return [;'
      { title: 'Complete your profile', content: (;
        <div className="space-y-3">;"
          <input className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Your title (e && e.g., Senior LLM Engineer)" onChange={(e) => setUser(prev => prev ? { ...prev, name: prev && prev.name } : prev)} />;"
          <textarea className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Short bio" />;
        </div>;
      ) };'
      { title: 'Choose skills and availability', content: (;"
        <div className="space-y-3 text-sm">;"
          <div className="flex flex-wrap gap-2">;'
            {['AILLMNext && AILLMNext.jsPythonDevOpsSecurity'].map(s => (;"
              <button key={s} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5">{s}</button>;
            ))}
          </div>;

<<<<<<< HEAD
      </div>;
      <div className="mt-4 text-sm">{steps[step]?.content}</div>;
      <div className="mt-4 flex items-center justify-between">;
=======

      </div>;"
      <div className="mt-4 text-sm">{steps[step]?.content}</div>;"
      <div className="mt-4 flex items-center justify-between">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <button disabled={step === 0} onClick={() => setStep(s => Math && Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>;
        {step < steps && steps.length - 1 ? (;"
          <button onClick={() => setStep(s => Math && Math.min(steps && steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>;
        ) : (;'"
          <button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>;
        )}
<<<<<<< HEAD
  );
import { use_user } from '../../providers / UserProvider';
import { use_toast } from '../ui / ToastProvider';
import Link from 'next/link';
export default /**
 * OnboardingWizard - Function description
=======
  );'
import { use_user } from '../../providers / UserProvider';'
import { use_toast } from '../ui / ToastProvider';'
import Link from 'next / link';
export default /**;
 * OnboardingWizard - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function OnboardingWizard() {}
  const { user, complete_onboarding, set_user } = use_user ();
  const { add_toast } = use_toast ();
  const [step, set_step] = useState (0);
;'
  const is_client = user?.role === 'client';
  const steps = useMemo (() => {}
    // Check condition;
if ( {) {}
  $2;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
      return [;
export default /**;
 * OnboardingWizard - Function description;
<<<<<<< HEAD
 */;
function OnboardingWizard() {const { user, complete_onboarding, set_user } = use_user ()const { add_toast } = use_toast ()const [step, set_step] = useState (0)const is_client = user?.role === 'client';
  const steps = useMemo (() => {// Check condition;
if ( {) {$2;
}
      return [;
        {title: 'Ready to find top IT talent?',content: (<div className='space - y-4'>;
              <p > Post a role or import your job brief to get started.</p>;
              <Link href='/jobs / post'>;
=======
 */
function OnboardingWizard() {}
  const { user, complete_onboarding, set_user } = use_user ();
  const { add_toast } = use_toast ();
  const [step, set_step] = useState (0);'
  const is_client = user?.role === 'client';
  const steps = useMemo (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      return [;
        {'
          title: 'Ready to find top IT talent?',
          content: ('
            <div className='space - y-4'>;
              <p > Post a role or import your job brief to get started.</p>;'
              <Link href='/jobs / post'>;'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                <a className='inline - flex items - center gap - 2 rounded - md border px - 3 py - 2 text - sm hover:bg - gray - 50 dark:hover:bg - white / 5'>;
                  Post a job;
                </a>;
              </Link>;
<<<<<<< HEAD
            </div>),},{title: 'View suggested matches',content: (<p>We will surface the best matches instantly based on your job;
              brief.;
            </p>),},{title: 'Invite or message talent',content: <p > Send invites or start a conversation to move fast.</p>,},];
    }
    return [;
      {title: 'Complete your profile',content: (<div className='space - y-3'>;
            <input;
              className='w - full rounded - md border px - 3 py - 2 bg - transparent';
              placeholder='Your title (e.g., Senior LLM Engineer)';
              on_change={e =>;
                set_user (prev => (prev ? { ...prev, name: prev.name } : prev))}
            />;
            <textarea;
              className='w - full rounded - md border px - 3 py - 2 bg - transparent';
              placeholder='Short bio';
            />;
          </div>),},{title: 'Choose skills and availability',content: (<div className='space - y-3 text - sm'>;
            <div className='flex flex - wrap gap - 2'>;
              {['AI', 'LLM', 'Next.js', 'Python', 'DevOps', 'Security'].map (string => (<button;
                    key={s}
=======
            </div>),
        },
        {'
          title: 'View suggested matches',
          content: (
            <p>;
              We will surface the best matches instantly based on your job;
              brief.;
            </p>),
        },
        {'
          title: 'Invite or message talent',
          content: <p > Send invites or start a conversation to move fast.</p>,
        },
      ];
    }
    return [;
      {'
        title: 'Complete your profile',
        content: ('
          <div className='space - y-3'>;
            <input;'
              className='w - full rounded - md border px - 3 py - 2 bg - transparent';'
              placeholder='Your title (e.g., Senior LLM Engineer)';
              on_change={e =>;
                set_user (prev => (prev ? { ...prev, name: prev.name } : prev));
              }
            />;
            <textarea;'
              className='w - full rounded - md border px - 3 py - 2 bg - transparent';'
              placeholder='Short bio';
            />;
          </div>),
      },
      {'
        title: 'Choose skills and availability',
        content: ('
          <div className='space - y-3 text - sm'>;'
            <div className='flex flex - wrap gap - 2'>;'
              {['AI', 'LLM', 'Next.js', 'Python', 'DevOps', 'Security'].map (
                string => (
                  <button;
                    key={s}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    className='px - 3 py - 1 rounded - full border hover:bg - gray - 50 dark:hover:bg - white / 5';
                  >;
                    {s}
                  </button>))}
<<<<<<< HEAD
            </div>;
            <div className='flex gap - 3'>;
              {['full - time', 'part - time', 'contract'].map (array => (<button;
                  key={a}
=======
            </div>;'
            <div className='flex gap - 3'>;'
              {['full - time', 'part - time', 'contract'].map (array => (
                <button;
                  key={a}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  className='px - 3 py - 1 rounded - full border hover:bg - gray - 50 dark:hover:bg - white / 5 capitalize';
                >;
                  {a}
                </button>))}
            </div>;
<<<<<<< HEAD
          </div>),},{title: 'Preview your profile',content: <p > Review how clients will see your profile.</p>,},{title: 'Enable AI matchmaking',content: (<div className='space - y-2'>;
            <p > Turn on AI - powered matching to get discovered faster.</p>;
            <label className='inline - flex items - center gap - 2 text - sm'>;
              <input type='checkbox' default_checked /> Enable AI matchmaking;
            </label>;
          </div>),},];
  }, [is_client, set_user])// Check condition;
if (return null) {$2;
}
  return (<div className='mb - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg - white / 60 dark:bg - black / 40'>;
      <div className='flex items - center justify - between'>;
        <div>;
          <div className='text - xs uppercase tracking - wide opacity - 70 mb - 1'>;
            Onboarding;
          </div>;
          <div className='text - sm font - medium'>{steps[step]?.title}</div>;
        </div>;
        <div className='text - xs opacity - 70'>;
          Step {step + 1} of {steps.length}
        </div>;
      </div>;
      <div className='mt - 4 text - sm'>{steps[step]?.content}</div>;
      <div className='mt - 4 flex items - center justify - between'>;
        <button;
          disabled={step === 0}
          on_click={() => set_step (string => Math.max (0, s - 1))}
=======
          </div>),
      },
      {'
        title: 'Preview your profile',
        content: <p > Review how clients will see your profile.</p>,
      },
      {'
        title: 'Enable AI matchmaking',
        content: ('
          <div className='space - y-2'>;
            <p > Turn on AI - powered matching to get discovered faster.</p>;'
            <label className='inline - flex items - center gap - 2 text - sm'>;'
              <input type='checkbox' default_checked /> Enable AI matchmaking;
            </label>;
          </div>),
      },
    ];
  }, [is_client, set_user]);
;
  // Check condition;
if (return null) {}
  $2;
}
  return ('
    <div className='mb - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg - white / 60 dark:bg - black / 40'>;'
      <div className='flex items - center justify - between'>;
        <div>;'
          <div className='text - xs uppercase tracking - wide opacity - 70 mb - 1'>;
            Onboarding;
          </div>;'
          <div className='text - sm font - medium'>{steps[step]?.title}</div>;
        </div>;'
        <div className='text - xs opacity - 70'>;
          Step {step + 1} of {steps.length}
        </div>;
      </div>;'
      <div className='mt - 4 text - sm'>{steps[step]?.content}</div>;'
      <div className='mt - 4 flex items - center justify - between'>;
        <button;
          disabled={step === 0}
          on_click={() => set_step (string => Math.max (0, s - 1))}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          className='px - 3 py - 2 rounded - md border disabled:opacity - 40';
        >;
          Back;
        </button>;
<<<<<<< HEAD
        {step < steps.length - 1 ? (<button;
            on_click={() => set_step (string => Math.min (steps.length - 1, s + 1))}
            className='px - 3 py - 2 rounded - md border';
          >;
            Next;
          </button>) : (<button;
            on_click={() => {complete_onboarding ()add_toast ({title: 'Onboarding completed',description: 'You can revisit anytime from Settings.',variant: 'success',})}}
=======
        {step < steps.length - 1 ? (
          <button;
            on_click={() => set_step (string => Math.min (steps.length - 1, s + 1))}'
            className='px - 3 py - 2 rounded - md border';
          >;
            Next;
          </button>) : (
          <button;
            on_click={() => {}
              complete_onboarding ();
              add_toast ({'
                title: 'Onboarding completed','
                description: 'You can revisit anytime from Settings.','
                variant: 'success',
              });
            }}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            className='px - 3 py - 2 rounded - md border';
          >;
            Finish;
          </button>        )}
      </div>;
<<<<<<< HEAD
    </div>)}    }
    return [;
      { title: 'Complete your profile', content: (<div className="space-y-3">;
          <input className="w - full rounded - md border px - 3 py-2 bg-transparent" placeholder="Your title (e.g., Senior LLM Engineer)" on_change={(e) => set_user (prev => prev ? { ...prev, name: prev.name } : prev)} />;
          <textarea className="w - full rounded - md border px - 3 py-2 bg-transparent" placeholder="Short bio" />;
        </div>) }
      { title: 'Choose skills and availability', content: (<div className="space-y-3 text-sm">;
          <div className="flex flex-wrap gap-2">;
            {['AILLMNext.jsPythonDevOpsSecurity'].map (string => (<button key={s} className="px - 3 py - 1 rounded - full border hover:bg - gray-50 dark:hover:bg-white / 5">{s}</button>))}
          </div>;
          <div className="flex gap-3">;
            {['full - timepart - timecontract'].map (array => (<button key={a} className="px - 3 py - 1 rounded - full border hover:bg - gray-50 dark:hover:bg-white / 5 capitalize">{a}</button>))}
          </div>;
        </div>) }
      { title: 'Preview your profile', content: <p > Review how clients will see your profile.</p> },{ title: 'Enable AI matchmaking', content: (<div className="space-y-2">;
          <p > Turn on AI - powered matching to get discovered faster.</p>;
          <label className="inline - flex items - center gap-2 text-sm">;
            <input type="checkbox" default_checked /> Enable AI matchmaking;
          </label>;
        </div>) }];
  }, [is_client, set_user])// Check condition;
if (return null) {$2;
}
  return (<div className="mb - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg-white / 60 dark:bg-black / 40">;
=======
    </div>);
}    }
<<<<<<< HEAD
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
=======
    return [;'
      { title: 'Complete your profile', content: ("
        <div className="space - y-3">;"
          <input className="w - full rounded - md border px - 3 py - 2 bg - transparent" placeholder="Your title (e.g., Senior LLM Engineer)" on_change={(e) => set_user (prev => prev ? { ...prev, name: prev.name } : prev)} />;"
          <textarea className="w - full rounded - md border px - 3 py - 2 bg - transparent" placeholder="Short bio" />;
        </div>) }'
      { title: 'Choose skills and availability', content: ("
        <div className="space - y-3 text - sm">;"
          <div className="flex flex - wrap gap - 2">;'
            {['AILLMNext.jsPythonDevOpsSecurity'].map (string => ("
              <button key={s} className="px - 3 py - 1 rounded - full border hover:bg - gray - 50 dark:hover:bg - white / 5">{s}</button>))}
          </div>;"
          <div className="flex gap - 3">;'
            {['full - timepart - timecontract'].map (array => ("
              <button key={a} className="px - 3 py - 1 rounded - full border hover:bg - gray - 50 dark:hover:bg - white / 5 capitalize">{a}</button>))}
          </div>;
        </div>) }'
      { title: 'Preview your profile', content: <p > Review how clients will see your profile.</p> },'
      { title: 'Enable AI matchmaking', content: ("
        <div className="space - y-2">;
          <p > Turn on AI - powered matching to get discovered faster.</p>;"
          <label className="inline - flex items - center gap - 2 text - sm">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <input type="checkbox" default_checked /> Enable AI matchmaking;
          </label>;
        </div>) }];
  }, [is_client, set_user]);
  // Check condition;
if (return null) {}
  $2;
}
<<<<<<< HEAD
  return (
    <div className="mb - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg-white / 60 dark:bg-black / 40">;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
        {step < steps.length - 1 ? (<button on_click={() => set_step (string => Math.min (steps.length - 1, s + 1))} className="px - 3 py-2 rounded-md border">Next</button>) : (<button on_click={() => { complete_onboarding (), add_toast ({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px - 3 py-2 rounded-md border">Finish</button>)}
      </div>;
    </div>)className='px-3 py-2 rounded-md border';
          >;
            Finish;
          </button>;
=======
        {step < steps.length - 1 ? (
          <button on_click={() => set_step (string => Math.min (steps.length - 1, s + 1))} className="px - 3 py-2 rounded-md border">Next</button>) : (
          <button on_click={() => { complete_onboarding (), add_toast ({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px - 3 py-2 rounded-md border">Finish</button>)}
=======
  return ("
    <div className="mb - 6 rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 bg - white / 60 dark:bg - black / 40">;"
      <div className="flex items - center justify - between">;
        <div>;"
          <div className="text - xs uppercase tracking - wide opacity - 70 mb - 1">Onboarding</div>;"
          <div className="text - sm font - medium">{steps[step]?.title}</div>;
        </div>;"
        <div className="text - xs opacity - 70">Step {step + 1} of {steps.length}</div>;
      </div>;"
      <div className="mt - 4 text - sm">{steps[step]?.content}</div>;"
      <div className="mt - 4 flex items - center justify - between">;"
        <button disabled={step === 0} on_click={() => set_step (string => Math.max (0, s - 1))} className="px - 3 py - 2 rounded - md border disabled:opacity - 40">Back</button>;
        {step < steps.length - 1 ? ("
          <button on_click={() => set_step (string => Math.min (steps.length - 1, s + 1))} className="px - 3 py - 2 rounded - md border">Next</button>) : ('"
          <button on_click={() => { complete_onboarding (), add_toast ({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px - 3 py - 2 rounded - md border">Finish</button>)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </div>;
    </div>);
            className='px-3 py-2 rounded-md border'
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
      { title: 'Enable AI matchmaking', content: (
        <div className="space-y-2">
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      ) }]
  }, [isClient, setUser])
  if (!user |user.onboardingCompleted) return null
  return (
    <div className="mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">Onboarding</div>
          <div className="text-sm font-medium">{steps[step]?.title}</div>
        </div>
        <div className="text-xs opacity-70">Step {step + 1} of {steps.length}</div>
      </div>
      <div className="mt-4 text-sm">{steps[step]?.content}</div>
      <div className="mt-4 flex items-center justify-between">
        <button disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>
        {step < steps.length - 1 ? (
          <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>
        ) : (
          <button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>
        )}
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        )}
      </div>;
    </div>;
  )}
      { title: 'Enable AI matchmaking', content: (<div className="space-y-2">;
          <p>Turn on AI-powered matching to get discovered faster.</p>;
          <label className="inline-flex items-center gap-2 text-sm">;
            <input type="checkbox" defaultChecked /> Enable AI matchmaking;
          </label>;
        </div>;
      ) }];
  }, [isClient, setUser])if (!user |user.onboardingCompleted) return null;
  return (<div className="mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">;
      <div className="flex items-center justify-between">;
        <div>;
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">Onboarding</div>;
          <div className="text-sm font-medium">{steps[step]?.title}</div>;
        </div>;
        <div className="text-xs opacity-70">Step {step + 1} of {steps.length}</div>;
      </div>;
      <div className="mt-4 text-sm">{steps[step]?.content}</div>;
      <div className="mt-4 flex items-center justify-between">;
        <button disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>;
        {step < steps.length - 1 ? (<button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>;
        ) : (<button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>;
        )}
    </div>);
}
      </div>;
    </div>;
)}
        { title: 'Ready to find top IT talent?', content: (
          <div className="space-y-3">
            <p>We will help you find the best IT talent for your projects.</p>
          </div>
        ) },
        { title: 'View suggested matches', content: <p>We will surface the best matches instantly based on your job brief.</p> },
        { title: 'Invite or message talent', content: <p>Send invites or start a conversation to move fast.</p> }]
    }
    return [
      { title: 'Complete your profile', content: (
        <div className="space-y-3">
          <input className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Your title (e.g., Senior LLM Engineer)" onChange={(e) => setUser(prev => prev ? { ...prev, name: prev.name } : prev)} />
          <textarea className = $2;
      { title: 'Choose skills and availability', content: (
        <div className = $2;
      { title: 'Preview your profile', content: <p>Review how clients will see your profile.</p> },
      { title: 'Enable AI matchmaking', content: (
        <div className="space-y-2">
          <p>Turn on AI-powered matching to get discovered faster.</p>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> Enable AI matchmaking
          </label>
        </div>
      ) }]
  }, [isClient, setUser])

<<<<<<< HEAD
  if (!user || user.onboardingCompleted) return null

  return (
    <div className="mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide opacity-70 mb-1">Onboarding</div>
          <div className="text-sm font-medium">{steps[step]?.title}</div>
        </div>
        <div className="text-xs opacity-70">Step {step + 1} of {steps.length}</div>
      </div>
      <div className="mt-4 text-sm">{steps[step]?.content}</div>
      <div className="mt-4 flex items-center justify-between">
        <button disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))} className="px-3 py-2 rounded-md border disabled:opacity-40">Back</button>
        {step < steps.length - 1 ? (
          <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>
        ) : (
          <button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>
        )}
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

"
=======
import {
  {
  React, {
  useMemo, useState 
}from 'react' import Link from 'next/link' export default function OnboardingWizard () {
  const {
  user, completeOnboarding, setUser 
}= useUser () const {
  addToast 
}= useToast () const [step, setStep] = useState (0) const isClient = user?.role === 'client' const steps = useMemo ( () => {
  if (isClient) {
  return [ <p>Post a role or import your job brief to get started.</p> <Link href="/jobs/post" ><a className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5" >Post a job</a></a> </div>) 
}
{
  title: 'View suggested matches', content: <p>We will surface the best matches instantly based on your job brief.</p> 
}
{
  title: 'Invite or message talent', content: <p>Send invites or start a conversation to move fast.</p> 
}] 
}return [ 
}</div> </div>) 
}
<p>Turn on AI-powered matching to get discovered faster.</p> <label className="inline-flex items-center gap-2 text-sm" > <input type="checkbox" defaultChecked /> Enable AI matchmaking </label> </div>) 
}] 
}, [isClient, setUser]) if (!user || user.onboardingCompleted) return null
}</div> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
        )}
      </div>
    </div>
  );
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
}
<<<<<<< HEAD
'"
=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
