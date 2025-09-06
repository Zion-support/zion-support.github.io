<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import Link from 'next/link';
import { useRole } from '../context/RoleContext';


  const { role, setRole } = useRole();
  const [open, setOpen] = useState(false);


  useEffect(() => {;
    try {;
      const has =;
        typeof window !== 'undefined';
          ? window && window.localStorage.getItem('zion_has_onboarded');

          : 'true';
      if (!has) {;
        setOpen(true);      const has = typeof window !== 'undefined' ? window && window.localStorage.getItem('zion_has_onboarded') : 'true';
      if (!has) {;
        setOpen(true);

=======
      const has = typeof window !== 'undefined' ? window.localStorage.getItem('zion_has_onboarded') : 'true';
      if (!has) {
        setOpen(true)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      }
    } catch {}
  }, []);
<<<<<<< HEAD
=======
      const has = typeof window !== 'undefined' ? window.localStorage.getItem('zion_has_onboarded') : 'true';
=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import Link from 'next/link';
import { useRole } from '../context/RoleContext';
export default function OnboardingWizard() {;
  const { role, setRole } = useRole();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {

      const has =
        typeof window !== 'undefined'
          ? window.localStorage.getItem('zion_has_onboarded')
          : 'true';
      if (!has) {
        setOpen(true);      const has = typeof window !== 'undefined' ? window.localStorage.getItem('zion_has_onboarded') : 'true';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      if (!has) {
        setOpen(true)
      }
    } catch {}
<<<<<<< HEAD
}, []);
  function completeOnboarding() {;
    try {;
      if (typeof window !== 'undefined') {;
        window && window.localStorage.setItem('zion_has_onboarded', '1');
        window.localStorage.setItem('zion_has_onboarded1')
      }
    } catch {}
    setOpen(false);  }        window && window.localStorage.setItem('zion_has_onboarded1');
      }
    } catch {}
    setOpen(false);
  }
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 shadow-xl">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div className="font-semibold">Welcome to Zion</div>
          <button onClick={completeOnboarding} className="text-sm opacity-70 hover:opacity-100">Skip</button>
        </div>
        <div className="p-4 space-y-4">
          <div className="text-sm opacity-80">Let's get you started. Who are you?</div>
          <div className="flex gap-2">
    setOpen(false)
  }

  if (!open) return null,

  return (
    <div className=&quot;fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4&quot;>
      <div className=&quot;w-full max-w-xl rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 shadow-xl&quot;>
        <div className=&quot;p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between&quot;>
          <div className=&quot;font-semibold&quot;>Welcome to Zion</div>
          <button onClick={completeOnboarding} className=&quot;text-sm opacity-70 hover:opacity-100&quot;>Skip</button>
        </div>
        <div className=&quot;p-4 space-y-4&quot;>
          <div className=&quot;text-sm opacity-80&quot;>Let's get you started. Who are you?</div>
          <div className=&quot;flex gap-2&quot;>

=======
  }, []);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  function completeOnboarding() {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('zion_has_onboarded', '1');
<<<<<<< HEAD
      }
    } catch {}

=======


  function completeOnboarding() {;
    try {;
      if (typeof window !== 'undefined') {;
        window && window.localStorage.setItem('zion_has_onboarded', '1');

=======
        window.localStorage.setItem('zion_has_onboarded1')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      }
    } catch {}
    setOpen(false);  }        window && window.localStorage.setItem('zion_has_onboarded1');
      }
    } catch {}


=======

    setOpen(false);  }

  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (!open) return null;

  return (


=======
=======
      }
    } catch {}
<<<<<<< HEAD
    setOpen(false);  }        window.localStorage.setItem('zion_has_onboarded1')
      }
    } catch {}
    setOpen(false)
=======
    setOpen(false);  }

  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='w-full max-w-xl rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 shadow-xl'>
        <div className='p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between'>
          <div className='font-semibold'>Welcome to Zion</div>
          <button
            onClick={completeOnboarding}
            className='text-sm opacity-70 hover:opacity-100'
          >
            Skip
          </button>
        </div>
        <div className='p-4 space-y-4'>
          <div className='text-sm opacity-80'>
            Let's get you started. Who are you?
          </div>
          <div className='flex gap-2'>
            <button
              onClick={() => setRole('client')}
              className={`px-3 py-1.5 rounded-md border ${role === 'client' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}
            >
              I'm a Client
            </button>
            <button
              onClick={() => setRole('talent')}
              className={`px-3 py-1.5 rounded-md border ${role === 'talent' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}
            >
              I'm Talent
            </button>
          </div>
          {role === 'client' ? (
            <div className='space-y-2'>
              <div className='text-base font-medium'>Next steps</div>
              <ul className='list-disc pl-5 space-y-1 text-sm'>                <li>Post your first job and get matched in minutes</li>
                <li>Invite talent you already know to apply</li>
                <li>We can suggest matches based on your job description</li>
              </ul>        </div>
        <div className="p-4 space-y-4">
          <div className="text-sm opacity-80">Let's get you started. Who are you?</div>
          <div className="flex gap-2">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <button onClick={() => setRole('client')} className={`px-3 py-1.5 rounded-md border ${role === 'client' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}>I'm a Client</button>
            <button onClick={() => setRole('talent')} className={`px-3 py-1.5 rounded-md border ${role === 'talent' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}>I'm Talent</button>
          </div>
          {role === 'client' ? (
<<<<<<< HEAD
<div className="space-y-2">
=======
            <div className="space-y-2">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="text-base font-medium">Next steps</div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Post your first job and get matched in minutes</li>
                <li>Invite talent you already know to apply</li>
                <li>We can suggest matches based on your job description</li>
              </ul>
<<<<<<< HEAD
<div className="flex gap-2 pt-2">
=======
              <div className='flex gap-2 pt-2'>
                <Link href='/jobs/post'>
                  <a className='px-3 py-1.5 rounded-md bg-blue-600 text-white'>
                    Post a Job
                  </a>
                </Link>
                <Link href='/talent'>
                  <a className='px-3 py-1.5 rounded-md border'>Browse Talent</a>
                </Link>
              </div>
            </div>
          ) : (
            <div className='space-y-2'>
              <div className='text-base font-medium'>Next steps</div>
              <ul className='list-disc pl-5 space-y-1 text-sm'>                <li>Complete your profile and set availability</li>
                <li>Get AI suggestions for roles that fit your skills</li>
                <li>Apply to jobs and get instant updates</li>
              </ul>              <div className="flex gap-2 pt-2">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <Link href="/jobs/post"><a className="px-3 py-1.5 rounded-md bg-blue-600 text-white">Post a Job</a></Link>
                <Link href="/talent"><a className="px-3 py-1.5 rounded-md border">Browse Talent</a></Link>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-base font-medium">Next steps</div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Complete your profile and set availability</li>
                <li>Get AI suggestions for roles that fit your skills</li>
                <li>Apply to jobs and get instant updates</li>
              </ul>
<div className="flex gap-2 pt-2">
                <Link href="/dashboard"><a className="px-3 py-1.5 rounded-md bg-blue-600 text-white">Go to Dashboard</a></Link>
                <Link href="/talent"><a className="px-3 py-1.5 rounded-md border">Browse Jobs</a></Link>
              </div>
            </div>
          )}
        </div>
<<<<<<< HEAD
<div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end">
=======
        <div className='p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end'>
          <button
            onClick={completeOnboarding}
            className='px-3 py-1.5 rounded-md border'
          >
            Done
          </button>        </div>
      </div>
    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
<<<<<<< HEAD
}        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end">
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <button onClick={completeOnboarding} className="px-3 py-1.5 rounded-md border">Done</button>
        </div>
      </div>
    </div>
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
}        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end">;
          <button onClick={completeOnboarding} className="px-3 py-1 && 1.5 rounded-md border">Done</button>;
        </div>;
      </div>;
    </div>;
  );
}
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
import Link from 'next / link';
import { use_role } from '../context / RoleContext';
export default /**
 * OnboardingWizard - Function description
 */
function OnboardingWizard() {
  const { role, set_role } = use_role ();
  const [open, set_open] = useState (false);
;
  useEffect (() => {
    try {
      const has =;
        typeof window !== 'undefined';
          ? window.local_storage.get_item ('zion_has_onboarded');
          : 'true';
      // Check condition
if ( {) {
  $2
}
        set_open (true);      const has = typeof window !== 'undefined' ? window.local_storage.get_item ('zion_has_onboarded') : 'true';
      // Check condition
if ( {) {
  $2
}
        set_open (true);
      }
    } catch {}
  }, []);
;
  /**
 * complete_onboarding - Function description
 */
function complete_onboarding() {
    try {
      // Check condition
if ( {) {
  $2
}
        window.local_storage.set_item ('zion_has_onboarded', '1');
      }
    } catch {}
    set_open (false);  }        window.local_storage.set_item ('zion_has_onboarded1');
      }
    } catch {}
    set_open (false);
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='fixed inset - 0 z - 50 flex items - center justify - center bg - black / 50 p - 4'>;
      <div className='w - full max - w-xl rounded - lg bg - white dark:bg - zinc - 900 border border - gray - 200 dark:border - gray - 800 shadow - xl'>;
        <div className='p - 4 border - b border - gray - 200 dark:border - gray - 800 flex items - center justify - between'>;
          <div className='font - semibold'>Welcome to Zion</div>;
          <button;
            on_click={complete_onboarding}
            className='text - sm opacity - 70 hover:opacity - 100';
          >;
            Skip;
          </button>;
        </div>;
        <div className='p - 4 space - y-4'>;
          <div className='text - sm opacity - 80'>;
            Let's get you started. Who are you?;
          </div>;
          <div className='flex gap - 2'>;
            <button;
              on_click={() => set_role ('client')}
              className={`px - 3 py - 1.5 rounded - md border ${role === 'client' ? 'bg - blue - 600 text - white border - blue - 600' : 'border - gray - 300 dark:border - gray - 700'}`}
            >;
              I'm a Client;
            </button>;
            <button;
              on_click={() => set_role ('talent')}
              className={`px - 3 py - 1.5 rounded - md border ${role === 'talent' ? 'bg - blue - 600 text - white border - blue - 600' : 'border - gray - 300 dark:border - gray - 700'}`}
            >;
              I'm Talent;
            </button>;
          </div>;
          {role === 'client' ? (
            <div className='space - y-2'>;
              <div className='text - base font - medium'>Next steps</div>;
              <ul className='list - disc pl - 5 space - y-1 text - sm'>                <li > Post your first job and get matched in minutes</li>;
                <li > Invite talent you already know to apply</li>;
                <li > We can suggest matches based on your job description</li>;
              </ul>        </div>;
        <div className="p - 4 space - y-4">;
          <div className="text - sm opacity - 80">Let's get you started. Who are you?</div>;
          <div className="flex gap - 2">;
            <button on_click={() => set_role ('client')} className={`px - 3 py - 1.5 rounded - md border ${role === 'client' ? 'bg - blue - 600 text - white border - blue - 600' : 'border - gray - 300 dark:border - gray - 700'}`}>I'm a Client</button>;
            <button on_click={() => set_role ('talent')} className={`px - 3 py - 1.5 rounded - md border ${role === 'talent' ? 'bg - blue - 600 text - white border - blue - 600' : 'border - gray - 300 dark:border - gray - 700'}`}>I'm Talent</button>;
          </div>;
          {role === 'client' ? (
            <div className="space - y-2">;
              <div className="text - base font - medium">Next steps</div>;
              <ul className="list - disc pl - 5 space - y-1 text - sm">;
                <li > Post your first job and get matched in minutes</li>;
                <li > Invite talent you already know to apply</li>;
                <li > We can suggest matches based on your job description</li>;
              </ul>;
              <div className='flex gap - 2 pt - 2'>;
                <Link href='/jobs / post'>;
                  <a className='px - 3 py - 1.5 rounded - md bg - blue - 600 text - white'>;
                    Post a Job;
                  </a>;
                </Link>;
                <Link href='/talent'>;
                  <a className='px - 3 py - 1.5 rounded - md border'>Browse Talent</a>;
                </Link>;
              </div>;
            </div>) : (
            <div className='space - y-2'>;
              <div className='text - base font - medium'>Next steps</div>;
              <ul className='list - disc pl - 5 space - y-1 text - sm'>                <li > Complete your profile and set availability</li>;
                <li > Get AI suggestions for roles that fit your skills</li>;
                <li > Apply to jobs and get instant updates</li>;
              </ul>              <div className="flex gap - 2 pt - 2">;
                <Link href="/jobs / post"><a className="px - 3 py - 1.5 rounded - md bg - blue - 600 text - white">Post a Job</a></Link>;
                <Link href="/talent"><a className="px - 3 py - 1.5 rounded - md border">Browse Talent</a></Link>;
              </div>;
            </div>) : (
            <div className="space - y-2">;
              <div className="text - base font - medium">Next steps</div>;
              <ul className="list - disc pl - 5 space - y-1 text - sm">;
                <li > Get AI suggestions for roles that fit your skills</li>;
                <li > Apply to jobs and get instant updates</li>;
              </ul>;
              <div className='flex gap - 2 pt - 2'>;
                <Link href='/dashboard'>;
                  <a className='px - 3 py - 1.5 rounded - md bg - blue - 600 text - white'>;
                    Go to Dashboard;
                  </a>;
                </Link>;
                <Link href='/talent'>;
                  <a className='px - 3 py - 1.5 rounded - md border'>Browse Jobs</a>;
                </Link>              </div>;
            </div>)}
        </div>              <div className="flex gap - 2 pt - 2">;
                <Link href="/dashboard"><a className="px - 3 py - 1.5 rounded - md bg - blue - 600 text - white">Go to Dashboard</a></Link>;
                <Link href="/talent"><a className="px - 3 py - 1.5 rounded - md border">Browse Jobs</a></Link>;
              </div>;
            </div>)}
        </div>;
        <div className='p - 4 border - t border - gray - 200 dark:border - gray - 800 flex justify - end'>;
          <button;
            on_click={complete_onboarding}
            className='px - 3 py - 1.5 rounded - md border';
          >;
            Done;
          </button>        </div>;
      </div>;
    </div>);
}        <div className="p - 4 border - t border - gray - 200 dark:border - gray - 800 flex justify - end">;
          <button on_click={complete_onboarding} className="px - 3 py - 1.5 rounded - md border">Done</button>;
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
);
}
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
