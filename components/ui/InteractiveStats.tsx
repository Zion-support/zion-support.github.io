
function useCounter(_target: number, _durationMs: number) {_const [value, _setValue] = useState(0);
  useEffect__(() => {
    let start: number | null = null;
    let raf: number;
    const _step = (_ts: number) => {
      if (start === null) start = ts;
      const _progress = Math.min(1, _(ts - start) / durationMs);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);};
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}

export default function InteractiveStats() {_const _hires = useCounter(1200, _1200);
  const _experts = useCounter(450, _1200);
  const _partners = useCounter(85, _1200);
  const _satisfaction = useCounter(98, _1200);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={_experts} suffix="+" />
      <Stat label="Partners" value={_partners} suffix="+" />
      <Stat label="Satisfaction" value={_satisfaction} suffix="%" />
    </div>
  );
}

function Stat(_{_label, _value, _suffix = ''}: {_label: string; value: number; suffix?: string}) {_return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{_suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{_label}</div>
    </div>
  );
}