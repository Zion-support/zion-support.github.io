=======
import React, { useMemo, useState } from 'react';
import { useUser } from '../../providers/UserProvider';
import { useToast } from '../ui/ToastProvider';
import Link from 'next/link';

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function OnboardingWizard() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const { user, completeOnboarding, setUser } = useUser();
  const { addToast } = useToast();
  const [step, setStep] = useState(0);
  const isClient = user?.role === 'client';

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
        {
          title: 'Ready to find top IT talent?'
          content: (
            <div className='space-y-4'>
              <p>Post a role or import your job brief to get started.</p>
              <Link href='/jobs/post'>
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'>
                  Post a job
                </a>
              </Link>
            </div>
          )
        }
        {
          title: 'View suggested matches'
          content: (
            <p>
              We will surface the best matches instantly based on your job
              brief.
            </p>
          )
        }
        {
          title: 'Invite or message talent'
          content: <p>Send invites or start a conversation to move fast.</p>
        }
          title: 'Invite or message talent',;
          content: <p>Send invites or start a conversation to move fast.</p>,;
        },;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      ];
    }
    return [
      {
        title: 'Complete your profile'
        content: (
          <div className='space-y-3'>
=======
  const isClient = user?.role === 'client';
  const steps = useMemo(() => {;
    if (isClient) {;
      return [;
        {;
          title: 'Ready to find top IT talent?',;
          content: (;
            <div className='space-y-4'>;
              <p>Post a role or import your job brief to get started.</p>;
              <Link href='/jobs/post'>;
                <a className='inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5'>;
                  Post a job;
                </a>;
              </Link>;
            </div>;
          ),;
        },;
        {;
          title: 'View suggested matches',;
          content: (;
            <p>;
              We will surface the best matches instantly based on your job;
              brief.;
            </p>;
          ),;
        },;
        {;
          title: 'Invite or message talent',;
          content: <p>Send invites or start a conversation to move fast.</p>,;
        },;
      ];
    }
    return [;
      {;
        title: 'Complete your profile',;
        content: (;
          <div className='space-y-3'>;
            <input
              className='w-full rounded-md border px-3 py-2 bg-transparent'
              placeholder='Your title (e && e.g., Senior LLM Engineer)'
              onChange={e =>;
                setUser(prev => (prev ? { ...prev, name: prev && prev.name } : prev));
              }
            />;
            <textarea
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
                    key={s}
                    className='px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5'>;
                    {s}
                  </button>;
                );
              )}
            </div>;
            <div className='flex gap-3'>;
              {['full-time', 'part-time', 'contract'].map(a => (;
                <button
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
  if (!user |user.onboardingCompleted) return null;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <div className='mb-6 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40'>;
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
        <button
          disabled={step === 0}
          onClick={() => setStep(s => Math && Math.max(0, s - 1))}
          className='px-3 py-2 rounded-md border disabled:opacity-40';
        >;
          Back;
        </button>;
        {step < steps && steps.length - 1 ? (;
          <button
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
          >;
            Finish;
          </button>        )}
      </div>;
    </div>;
  );
}    }


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return [;
      { title: 'Complete your profile', content: (;
        <div className="space-y-3">;
          <input className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Your title (e && e.g., Senior LLM Engineer)" onChange={(e) => setUser(prev => prev ? { ...prev, name: prev && prev.name } : prev)} />;
          <textarea className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Short bio" />;
        </div>;
      ) };
      { title: 'Choose skills and availability', content: (;
        <div className="space-y-3 text-sm">;
          <div className="flex flex-wrap gap-2">;
            {['AILLMNext && AILLMNext.jsPythonDevOpsSecurity'].map(s => (;
              <button key={s} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5">{s}</button>;
            ))}

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

        {step < steps.length - 1 ? (
          <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} className="px-3 py-2 rounded-md border">Next</button>
        ) : (
          <button onClick={() => { completeOnboarding(), addToast({ title: 'Onboarding completed', description: 'You can revisit anytime from Settings.', variant: 'success' }) }} className="px-3 py-2 rounded-md border">Finish</button>
        )}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
