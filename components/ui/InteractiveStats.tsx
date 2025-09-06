import { useEffect, useState } from 'react',

function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0),
  useEffect(() => {
    let start: number | null = null
    let raf: number
    const step = (ts: number) => {
      if (start === null) start = ts,
      const progress = Math.min(1, (ts - start) / durationMs),
      setValue(Math.floor(progress * target)),
      if (progress < 1) raf = requestAnimationFrame(step)
    },
    raf = requestAnimationFrame(step),
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]),
  return value
}

export default function InteractiveStats() {
  const hires = useCounter(1200, 1200),
  const experts = useCounter(450, 1200),
  const partners = useCounter(85, 1200),
  const satisfaction = useCounter(98, 1200),
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={_experts} suffix="+" />
      <Stat label="Partners" value={_partners} suffix="+" />
      <Stat label="Satisfaction" value={_satisfaction} suffix="%" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
>>>>>>> fea643a66d946bf0b5a70efdf31b13c3b7977e2d
    </div>
  )
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
