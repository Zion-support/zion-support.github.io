
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
const steps = ['AccountProfilePreferencesPreview'];

const Onboarding: NextPage = () => {



import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
const steps = ['AccountProfilePreferencesPreview'],


const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),
  return (

    <div className="space-y-6">
      <Head>
        <title>Onboarding - Zion</title>
      </Head>

      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (

const steps = ["Account", "Profile", "Preferences", "Preview"];
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
=======


import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
=======
import type { NextPage } from './next';
import Head from './next / head';
import { useState  } from './react';
import EnhancedButton from "../../components / ui / EnhancedButton";
;=======const steps = ["Account", "Profile", "Preferences", "Preview"];

import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EnhancedButton from '../../components/ui/EnhancedButton';
const steps = ['AccountProfilePreferencesPreview'];

const Onboarding: NextPage = () => {

=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),
==============
  return (

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">
      <Head>
        <title>Onboarding - Zion</title>
      </Head>
      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex gap-2">
        <EnhancedButton variant="secondary" onClick={prev} disabled={step === 0}>Back</EnhancedButton>
        <EnhancedButton onClick={next} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>

=======
=======
  const [step, set_step] = useState (0);
;
  const next = () =>: any set_step ((s) => Math.min (s + 1, steps.length - 1));
  const prev = () =>: any set_step ((s) => Math.max (s - 1, 0));
;
  return (
    <div className="space - y-6">;
      {" "}
      <Head>;
        <title > Onboarding - Zion</title>;
      </Head>;
      <h1 className="text - 2xl font - semibold">Get Started</h1>;
      <div className="flex items - center gap - 2 text - sm flex - wrap">;
        {steps.map ((label, i) => (
          <div;
            key={label}
            className={`px - 3 py - 1 rounded - full border ${index === step ? "bg - blue - 600 text - white border - blue - 600" : "opacity - 80"}`}
          >;
            {" "}
            {i + 1}. {label}
          </div>))}
      </div>;
      <div className="border rounded - md p - 4 min - h-[200px]">;
        {step === 0 && <div > Account setup fields…</div>}
        {step === 1 && <div > Profile details fields…</div>}
        {step === 2 && <div > Preferences selection…</div>}
        {step === 3 && (
          <div > Preview your profile / listing before going live.</div>)}
      </div>;
      <div className="flex gap - 2">;
        <EnhancedButton;
          variant="secondary";
          on_click={prev}
          disabled={step === 0}
        >;
          Back;
        </EnhancedButton>;
        <EnhancedButton on_click={next} disabled={step === steps.length - 1}>;
          {step === steps.length - 1 ? "Done" : "Next"}
        </EnhancedButton>;
      </div>;
    </div>);
}
;
export default Onboarding;
=======


=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
