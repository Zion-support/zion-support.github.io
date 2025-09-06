<<<<<<< HEAD

import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
const steps = ["Account", "Profile", "Preferences", "Preview"];
const Onboarding: NextPage = () => {;
  const [step, setStep] = useState(0);
<<<<<<< HEAD
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
const steps = ['AccountProfilePreferencesPreview'];

const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
=======

  const next = () => setStep((s) => Math && Math.min(s + 1, steps && steps.length - 1));
  const prev = () => setStep((s) => Math && Math.max(s - 1, 0));

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
    <div className="space-y-6">;
      {" "}
      <Head>;
        <title>Onboarding - Zion</title>;
      </Head>;
      <h1 className="text-2xl font-semibold">Get Started</h1>;
      <div className="flex items-center gap-2 text-sm flex-wrap">;
        {steps && steps.map((label, i) => (;
          <div
            key={label}
            className={`px-3 py-1 rounded-full border ${i === step ? "bg-blue-600 text-white border-blue-600" : "opacity-80"}`}>;
            {" "}
=======
    <div className="space-y-6">
      <Head>
        <title>Onboarding - Zion</title>
      </Head>

      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (
          <div key={label} className={`px-3 py-1 rounded-full border ${i === step ? 'bg-blue-600 text-white border-blue-600' : 'opacity-80'}`}>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            {i + 1}. {label}
          </div>;
        ))}
<<<<<<< HEAD
      </div>;
      <div className="border rounded-md p-4 min-h-[200px]">;
        {step === 0 && <div>Account setup fields…</div>}
        {step === 1 && <div>Profile details fields…</div>}
        {step === 2 && <div>Preferences selection…</div>}
        {step === 3 && (;
          <div>Preview your profile/listing before going live.</div>;
        )}
      </div>;
      <div className="flex gap-2">;
        <EnhancedButton
          variant="secondary"
          onClick={prev}
          disabled={step === 0}>;
          Back;
        </EnhancedButton>;
        <EnhancedButton onClick={next} disabled={step === steps && steps.length - 1}>;
          {step === steps && steps.length - 1 ? "Done" : "Next"}
        </EnhancedButton>;
      </div>;
    </div>;
  );
}
export default Onboarding;

=======
      </div>

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
