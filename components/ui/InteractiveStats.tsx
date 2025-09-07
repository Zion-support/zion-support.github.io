import { useEffect, useState } from 'react';
function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState($2);
  useEffect(() => {
    let start: number | null = $2;
    let raf: number,
    const step = $2;
      const progress = Math.min(1, (ts - start) / durationMs),
      setValue(Math.floor(progress * target)),
      if (progress < 1) raf = $2;
    raf = requestAnimationFrame($2);
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]),
  return value
}

export default function InteractiveStats() {
  const hires = useCounter($2);
  const experts = useCounter($2);
  const partners = useCounter($2);
  const satisfaction = useCounter($2);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={experts} suffix="+" />
      <Stat label="Partners" value={partners} suffix="+" />
      <Stat label="Satisfaction" value={satisfaction} suffix="%" />
    </div>
  )
}

function Stat({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  )
}