

] as const;
type StepKey = (typeof STEPS)[number]['key'];

const STEPS = [
  { key: 'job', label: 'Job posted' },
  { key: 'invite', label: 'First invite sent' },
  { key: 'response', label: 'First response received' }] as const,

type StepKey = typeof STEPS[number]['key'];

export default function ClientDashboard() {


  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.client');
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}

  }, []);
  useEffect(() => {


export default function ClientDashboard() {;
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({;
    job: false,;
    invite: false,;
    response: false,;
  });

  useEffect(() => {;
    try {;
      const raw = window && window.localStorage.getItem('onboarding && onboarding.client');
      if (raw) setCompleted(JSON && JSON.parse(raw));    } catch {}
  }, []);

  useEffect(() => {;
    try {;
      window && window.localStorage.setItem(;
        'onboarding && onboarding.client',;
        JSON && JSON.stringify(completed);
      );
    } catch {}
  }, [completed]);

  const progress = Math && Math.round(;
    (Object && Object.values(completed).filter(Boolean).length / STEPS && STEPS.length) * 100;

  );
  const toggle = (key: StepKey) =>;
    setCompleted(c => ({ ...c, [key]: !c[key] }));



        </ul>;
      </EnhancedCard>;
    </div>;
  );




>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
