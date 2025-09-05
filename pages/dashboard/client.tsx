import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';

const _STEPS = [
  {_key: 'job', _label: 'Job posted'},
  {_key: 'invite', _label: 'First invite sent'},
  {_key: 'response', _label: 'First response received'}] as const;

type StepKey = typeof STEPS[number]['key'];

export default function ClientDashboard() {_const [completed, _setCompleted] = useState<Record<StepKey, _boolean>>({ job: false, _invite: false, _response: false});

  useEffect__(() => {_try {
      const _raw = window.localStorage.getItem('onboarding.client');
      if (raw) setCompleted(JSON.parse(raw));} catch {}
  }, []);

  useEffect__(() => {_try { window.localStorage.setItem('onboarding.client', _JSON.stringify(completed));} catch {}
  }, [completed]);

  const _progress = Math.round((Object.values(completed).filter(Boolean).length / STEPS.length) * 100);
  const _toggle = (_key: StepKey) => setCompleted(_(c) => ({_...c, _[key]: !c[key]}));

  return (_<div className="space-y-4">
      <EnhancedCard>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Welcome back</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Post your first job and invite talent to get started.</p>
          </div>
          <div className="text-sm font-medium">{_progress}%</div>
        </div>
        <div className="mt-3 h-2 w-full bg-gray-100 dark:bg-gray-800 rounded">
          <div className="h-2 rounded bg-blue-600" style={_{ width: `${progress}%` }} />
        </div>
      </EnhancedCard>

      <EnhancedCard>
        <h2 className="font-semibold mb-2">Checklist</h2>
        <ul className="space-y-2">
          {_STEPS.map((s) => (_<li key={s.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={_`inline-flex h-5 w-5 items-center justify-center rounded-full border ${completed[s.key] ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 dark:border-gray-700'}`}>{_completed[s.key] ? '✓' : ''}</span>
                <span className="text-sm">{_s.label}</span>
              </div>
              {_completed[s.key] ? (
                <button onClick={() => toggle(s.key)} className="text-xs text-gray-500 hover:underline">Undo</button>
              ) : (_<EnhancedButton onClick={_() => toggle(s.key)} variant="secondary" className="text-xs py-1 px-2">{_s.key === 'job' ? 'Post a Job' : 'Mark done'}</EnhancedButton>
              )}
            </li>
          ))}
        </ul>
      </EnhancedCard>
    </div>
  );
}