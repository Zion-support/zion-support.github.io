<<<<<<< HEAD:pages/auth/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
const steps = ["Account", "Profile", "Preferences", "Preview"];
=======
import type { NextPage } from './next';
import Head from './next / head';
import { useState  } from './react';
=======

import type { NextPage } from "next";"
import Head from "next/head";"
import { useState } from "react";"
import EnhancedButton from "../../components/ui/EnhancedButton";

import type { NextPage } from './next';'
import Head from './next / head';'
import { useState  } from './react';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/auth/index.tsx
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

:pages_backup/auth/index.tsx
const Onboarding: NextPage = () => {

import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
import type { NextPage } from './next';
import Head from './next / head';
import { useState  } from './react';
import EnhancedButton from "../../components / ui / EnhancedButton";
;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const Onboarding: NextPage = () => {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/auth/index.tsx
const steps = ["Account", "Profile", "Preferences", "Preview"];
'
import type { NextPage } from 'next';'
import Head from 'next/head';'
import { useState } from 'react';'
import EnhancedButton from '../../components/ui/EnhancedButton';'
const steps = ['AccountProfilePreferencesPreview'];

:pages_backup/auth/index.tsx
const Onboarding: NextPage = () => {

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
=======
const Onboarding: NextPage = () => {}
'
import type { NextPage } from 'next','
import Head from 'next/head','
import { useState } from 'react','
import EnhancedButton from '../../components/ui/EnhancedButton','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/auth/index.tsx
const steps = ['AccountProfilePreferencesPreview'],
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

"
    <div className="space-y-6">
      <Head>
        <title>Onboarding - Zion</title>
      </Head>
'
import type { NextPage } from 'next','
import Head from 'next/head','
import { useState } from 'react','
import EnhancedButton from '../../components/ui/EnhancedButton','
const steps = ['AccountProfilePreferencesPreview'],
:pages_backup/auth/index.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const steps = ['Account', 'Profile', 'Preferences', 'Preview'];

const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0);

const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div className='space-y-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <Head>
        <title>Onboarding - Zion</title>
      </Head>
:pages_backup/auth/index.tsx

<<<<<<< HEAD:pages/auth/index.tsx
<<<<<<< HEAD
      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (
<<<<<<< HEAD
<h1 className='text-2xl font-semibold'>Get Started</h1>

      <div className='flex items-center gap-2 text-sm flex-wrap'>
        {steps.map((label, i) => (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div
            key={label}
            className={`px-3 py-1 rounded-full border ${i === step ? "bg-blue-600 text-white border-blue-600" : "opacity-80"}`}
          >
{" "}
            {i + 1}. {label}
          </div>
        ))}
      </div>
<div className="border rounded-md p-4 min-h-[200px]">
        {step === 0 && <div>Account setup fields…</div>}
        {step === 1 && <div>Profile details fields…</div>}
        {step === 2 && <div>Preferences selection…</div>}
        {step === 3 && (
          <div>Preview your profile/listing before going live.</div>
        )}
<<<<<<< HEAD
          <div key={label} className={`px-3 py-1 rounded-full border ${i === step ? 'bg-blue-600 text-white border-blue-600' : 'opacity-80'}`}>
            {i + 1}. {label  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>
      <div className="border rounded-md p-4 min-h-[200px]">
        {step === 0 && <div>Account setup fields…</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {step === 1 && <div>Profile details fields…</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {step === 2 && <div>Preferences selection…</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {step === 3 && <div>Preview your profile/listing before going live.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (

"
      <h1 className="text-2xl font-semibold">Get Started</h1>
"
      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (

      </div>
"
      <div className="flex gap-2">
:pages_backup/auth/index.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/auth/index.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </div>

      <div className="flex gap-2">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <EnhancedButton variant="secondary" onClick={prev} disabled={step === 0}>Back</EnhancedButton>
=======
"
        <EnhancedButton variant="secondary" onClick={prev} disabled={step === 0}>Back</EnhancedButton>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/auth/index.tsx
        <EnhancedButton onClick={next} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>

:pages_backup/auth/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/auth/index.tsx
  const [step, set_step] = useState (0);
;
  const next = () =>: any set_step ((s) => Math.min (s + 1, steps.length - 1));
  const prev = () =>: any set_step ((s) => Math.max (s - 1, 0));
;
  return ("
    <div className="space - y-6">;"
      {" "}
      <Head>;
        <title > Onboarding - Zion</title>;
      </Head>;"
      <h1 className="text - 2xl font - semibold">Get Started</h1>;"
      <div className="flex items - center gap - 2 text - sm flex - wrap">;
        {steps.map ((label, i) => (
          <div;
            key={label}"
            className={`px - 3 py - 1 rounded - full border ${index === step ? "bg - blue - 600 text - white border - blue - 600" : "opacity - 80"}`}
          >;"
            {" "}
            {i + 1}. {label}
          </div>))}
      </div>;"
      <div className="border rounded - md p - 4 min - h-[200px]">;
        {step === 0 && <div > Account setup fields…</div>}
        {step === 1 && <div > Profile details fields…</div>}
        {step === 2 && <div > Preferences selection…</div>}
        {step === 3 && (
          <div > Preview your profile / listing before going live.</div>)}
      </div>;"
      <div className="flex gap - 2">;
        <EnhancedButton;"
          variant="secondary";
          on_click={prev}
          disabled={step === 0}
        >;
          Back;
        </EnhancedButton>;
        <EnhancedButton on_click={next} disabled={step === steps.length - 1}>;"
          {step === steps.length - 1 ? "Done" : "Next"}
        </EnhancedButton>;
      </div>;
    </div>);
}
;
export default Onboarding;
<<<<<<< HEAD:pages/auth/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
;

  )
},
export default Onboarding,

:pages_backup/auth/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  )
},
export default Onboarding,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/auth/index.tsx
=======

  )
},
export default Onboarding,

'";`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/auth/index.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
