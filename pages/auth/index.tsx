import type {_NextPage} from 'next';
import Head from 'next/head';
import EnhancedButton from '../../components/ui/EnhancedButton';

const _steps = ['Account', 'Profile', 'Preferences', 'Preview'];

const Onboarding: NextPage = () => {_const [step, _setStep] = useState(0);

  const _next = () => setStep(_(s) => Math.min(s + 1, _steps.length - 1));
  const _prev = () => setStep(_(s) => Math.max(s - 1, _0));

  return (_<div className="space-y-6">
      <Head>
        <title>Onboarding - Zion</title>
      </Head>

      <h1 className="text-2xl font-semibold">Get Started</h1>

      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((label, _i) => (
          <div key={label} className={_`px-3 py-1 rounded-full border ${i === step ? 'bg-blue-600 text-white border-blue-600' : 'opacity-80'}`}>
            {_i + 1}. {_label}
          </div>
        ))}
      </div>

      <div className="border rounded-md p-4 min-h-[200px]">
        {_step === 0 && <div>Account setup fields…</div>}
        {_step === 1 && <div>Profile details fields…</div>}
        {_step === 2 && <div>Preferences selection…</div>}
        {_step === 3 && <div>Preview your profile/listing before going live.</div>}
      </div>

      <div className="flex gap-2">
        <EnhancedButton variant="secondary" onClick={_prev} disabled={_step === 0}>Back</EnhancedButton>
        <EnhancedButton onClick={_next} disabled={_step === steps.length - 1}>{_step === steps.length - 1 ? 'Done' : 'Next'}</EnhancedButton>
      </div>
    </div>
  );
};

export default Onboarding;