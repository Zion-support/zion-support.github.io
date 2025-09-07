<<<<<<< HEAD:pages_backup/auth/index.tsx
=======
<<<<<<< HEAD


import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
import type { NextPage } from './next';
import Head from './next / head';
import { useState  } from './react';
import EnhancedButton from "../../components / ui / EnhancedButton";
;
const steps = ["Account", "Profile", "Preferences", "Preview"];

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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/auth/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";

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

<<<<<<< HEAD:pages_backup/auth/index.tsx
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/auth/index.tsx
import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',

const steps = ['AccountProfilePreferencesPreview'],
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages_backup/auth/index.tsx
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/auth/index.tsx
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),
<<<<<<< HEAD:pages_backup/auth/index.tsx

  return (

"
=======
<<<<<<< HEAD
  return (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/auth/index.tsx
    <div className="space-y-6">
      <Head>
        <title>Onboarding - Zion</title>
      </Head>
<<<<<<< HEAD:pages_backup/auth/index.tsx
'
import type { NextPage } from 'next','
import Head from 'next/head','
import { useState } from 'react','
import EnhancedButton from '../../components/ui/EnhancedButton','


const steps = ['Account', 'Profile', 'Preferences', 'Preview'];

  const [step, setStep] = useState(0);

const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div className='space-y-6'>

      <Head>
        <title>Onboarding - Zion</title>
      </Head>
=======
<<<<<<< HEAD
      <h1 className="text-2xl font-semibold">Get Started</h1>
      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/auth/index.tsx

      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (

<<<<<<< HEAD:pages_backup/auth/index.tsx
<h1 className='text-2xl font-semibold'>Get Started</h1>

      <div className='flex items-center gap-2 text-sm flex-wrap'>
        {steps.map((label, i) => (

          <div
            key={label}
            className={`px-3 py-1 rounded-full border ${i === step ? "bg-blue-600 text-white border-blue-600" : "opacity-80"}`}
          >

            {i + 1}. {label}
          </div>
        ))}
      </div>

        {step === 0 && <div>Account setup fields…</div>}
        {step === 1 && <div>Profile details fields…</div>}
        {step === 2 && <div>Preferences selection…</div>}
        {step === 3 && (
          <div>Preview your profile/listing before going live.</div>
        )}

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/auth/index.tsx
      </div>
      <div className="flex gap-2">

        <EnhancedButton variant="secondary" onClick={prev} disabled={step === 0}>Back</EnhancedButton>

        <EnhancedButton onClick={next} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>
<<<<<<< HEAD


=======

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

<<<<<<< HEAD:pages_backup/auth/index.tsx
=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/auth/index.tsx
  )
},
export default Onboarding,

<<<<<<< HEAD:pages_backup/auth/index.tsx
  )
},
export default Onboarding,
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
  );
}
export default Onboarding;

  )
},
export default Onboarding,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/auth/index.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
