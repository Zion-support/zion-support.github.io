import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
<<<<<<< HEAD
<<<<<<< HEAD

const steps = ['Account', 'Profile', 'Preferences', 'Preview'];
=======
const steps = ['AccountProfilePreferencesPreview'];
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const steps = ['AccountProfilePreferencesPreview'];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0);

<<<<<<< HEAD
<<<<<<< HEAD
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div className='space-y-6'>
=======
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="space-y-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="space-y-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <Head>
        <title>Onboarding - Zion</title>
      </Head>

<<<<<<< HEAD
<<<<<<< HEAD
      <h1 className='text-2xl font-semibold'>Get Started</h1>
=======
      <h1 className="text-2xl font-semibold">Get Started</h1>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (
<<<<<<< HEAD
          <div
            key={label}
            className={`px-3 py-1 rounded-full border ${i === step ? 'bg-blue-600 text-white border-blue-600' : 'opacity-80'}`}
          >
=======
      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (
          <div key={label} className={`px-3 py-1 rounded-full border ${i === step ? 'bg-blue-600 text-white border-blue-600' : 'opacity-80'}`}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div key={label} className={`px-3 py-1 rounded-full border ${i === step ? 'bg-blue-600 text-white border-blue-600' : 'opacity-80'}`}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {i + 1}. {label}
          </div>
        ))}
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      <div className='border rounded-md p-4 min-h-[200px]'>
=======
      <div className="border rounded-md p-4 min-h-[200px]">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {step === 0 && <div>Account setup fields…</div>}
        {step === 1 && <div>Profile details fields…</div>}
        {step === 2 && <div>Preferences selection…</div>}
        {step === 3 && <div>Preview your profile/listing before going live.</div>}
      </div>

      <div className="flex gap-2">
        <EnhancedButton variant="secondary" onClick={prev} disabled={step === 0}>Back</EnhancedButton>
        <EnhancedButton onClick={next} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>
  )
};

<<<<<<< HEAD
export default Onboarding;
=======
      <div className="border rounded-md p-4 min-h-[200px]">
        {step === 0 && <div>Account setup fields…</div>}
        {step === 1 && <div>Profile details fields…</div>}
        {step === 2 && <div>Preferences selection…</div>}
        {step === 3 && <div>Preview your profile/listing before going live.</div>}
      </div>

      <div className="flex gap-2">
        <EnhancedButton variant="secondary" onClick={prev} disabled={step === 0}>Back</EnhancedButton>
        <EnhancedButton onClick={next} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>
  )
};

export default Onboarding;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default Onboarding;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
