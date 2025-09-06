import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import EnhancedButton from '../../components/ui/EnhancedButton'
const steps = ['AccountProfilePreferencesPreview']

const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),

  return (
    <div className=&quot;space-y-6&quot;>
import type {_NextPage} from 'next';
import Head from 'next/head';
import EnhancedButton from '../../components/ui/EnhancedButton';

const _steps = ['Account', 'Profile', 'Preferences', 'Preview'];

const Onboarding: NextPage = () => {_const [step, _setStep] = useState(0);

  const _next = () => setStep(_(s) => Math.min(s + 1, _steps.length - 1));
  const _prev = () => setStep(_(s) => Math.max(s - 1, _0));

  return (_<div className="space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Head>
        <title>Onboarding - Zion</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold&quot;>Get Started</h1>

      <div className=&quot;flex items-center gap-2 text-sm flex-wrap&quot;>
        {steps.map((label, i) => (
          <div key={label} className={`px-3 py-1 rounded-full border ${i === step ? 'bg-blue-600 text-white border-blue-600' : 'opacity-80'}`}>
            {i + 1}. {label}
          </div>
        ))}
      </div>

      <div className=&quot;border rounded-md p-4 min-h-[200px]&quot;>
        {step === 0 && <div>Account setup fields…</div>}
        {step === 1 && <div>Profile details fields…</div>}
        {step === 2 && <div>Preferences selection…</div>}
        {step === 3 && <div>Preview your profile/listing before going live.</div>}
      </div>

      <div className=&quot;flex gap-2&quot;>
        <EnhancedButton variant=&quot;secondary&quot; onClick={prev} disabled={step === 0}>Back</EnhancedButton>
        <EnhancedButton onClick={next} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>
  )
},

export default Onboarding