

import EnhancedButton from "../../components / ui / EnhancedButton";
;
"
const steps = ["Account", "Profile", "Preferences", "Preview"];
'
import type { NextPage } from 'next';'
import Head from 'next/head';'
import { useState } from 'react';'
import EnhancedButton from '../../components/ui/EnhancedButton';'
const steps = ['AccountProfilePreferencesPreview'];


'


import type { NextPage } from 'next';'
import Head from 'next/head';'
import { useState } from 'react';'
import EnhancedButton from '../../components/ui/EnhancedButton';'
const steps = ['AccountProfilePreferencesPreview'];

import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',

const steps = ['AccountProfilePreferencesPreview'],
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),

    <div className="space-y-6">
      <Head>
        <title>Onboarding - Zion</title>
      </Head>


      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (


      </div>
      <div className="flex gap-2">

        <EnhancedButton variant="secondary" onClick={prev} disabled={step === 0}>Back</EnhancedButton>

        <EnhancedButton onClick={next} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>


  )
},
export default Onboarding,


  )
},
export default Onboarding,
