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
};
{
  title: 'View suggested matches', content: <p>We will surface the best matches instantly based on your job brief.</p> 
};
{
  title: 'Invite or message talent', content: <p>Send invites or start a conversation to move fast.</p> 
}] 
}return [ 
}</div> </div>) 
};
<p>Turn on AI-powered matching to get discovered faster.</p> <label className="inline-flex items-center gap-2 text-sm" > <input type="checkbox" defaultChecked /> Enable AI matchmaking </label> </div>) 
}] 
}, [isClient, setUser]) if (!user || user.onboardingCompleted) return null;
}</div> </div>) 
}