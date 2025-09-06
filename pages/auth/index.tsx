<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EnhancedButton from "../../components/ui/EnhancedButton";
const steps = ["Account", "Profile", "Preferences", "Preview"];
<<<<<<< HEAD
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextPage } from 'next',
import Head from 'next/head',
import { useState } from 'react',
import EnhancedButton from '../../components/ui/EnhancedButton',
const steps = ['AccountProfilePreferencesPreview'],
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const Onboarding: NextPage = () => {
  const [step, setStep] = useState(0),
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1)),
  const prev = () => setStep((s) => Math.max(s - 1, 0)),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="space-y-6">
      <Head>
        <title>Onboarding - Zion</title>
      </Head>
      <h1 className="text-2xl font-semibold">Get Started</h1>
      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, i) => (
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </div>
      <div className="flex gap-2">
        <EnhancedButton variant="secondary" onClick={prev} disabled={step === 0}>Back</EnhancedButton>
        <EnhancedButton onClick={next} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>
<<<<<<< HEAD
  );
}
export default Onboarding;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
},
export default Onboarding,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
