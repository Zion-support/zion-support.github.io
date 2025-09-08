





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




                  <button



      <div className='flex items-center justify-between'>;
        <div>;
          <div className='text-xs uppercase tracking-wide opacity-70 mb-1'>;'


        ) : (;
          <button
            onClick={() => {;
              completeOnboarding();
    </div>;

  );
}    }

            {['AILLMNext && AILLMNext.jsPythonDevOpsSecurity'].map(s => (;
              <button key={s} className="px-3 py-1 rounded-full border hover:bg-gray-50 dark:hover:bg-white/5">{s}</button>;
            ))}

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






