import { useEffect, useState } from 'react';

function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
<<<<<<< HEAD
    let start: number | null = null;
    let raf: number;    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min(1, (ts - start) / durationMs);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    let start: number | null = null;
    let raf: number;
=======
    let start: number | null = null,
    let raf: number,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    let start: number | null = null,
    let raf: number,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min(1, (ts - start) / durationMs);
      setValue(Math.floor(progress * target));
<<<<<<< HEAD
<<<<<<< HEAD
      if (progress < 1) raf = requestAnimationFrame(step);
=======
      if (progress < 1) raf = requestAnimationFrame(step)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
<<<<<<< HEAD
  return value;
=======
<<<<<<< HEAD
  return value;
=======
      if (progress < 1) raf = requestAnimationFrame(step)
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]);
  return value
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return value
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function InteractiveStats() {
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      <Stat label='Successful Hires' value={hires} suffix='+' />
      <Stat label='AI Experts' value={experts} suffix='+' />
      <Stat label='Partners' value={partners} suffix='+' />
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />
<<<<<<< HEAD
    </div>
  );
=======
=======
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={experts} suffix="+" />
      <Stat label="Partners" value={partners} suffix="+" />
      <Stat label="Satisfaction" value={satisfaction} suffix="%" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    </div>
  )
}

function Stat({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
<<<<<<< HEAD
=======
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={experts} suffix="+" />
      <Stat label="Partners" value={partners} suffix="+" />
      <Stat label="Satisfaction" value={satisfaction} suffix="%" />
    </div>
  )
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

function Stat({
  label,
  value,
  suffix = '',
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div className='p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur'>
      <div className='text-3xl font-bold'>
        {value}
        {suffix}
      </div>
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>
    </div>
<<<<<<< HEAD
  );
=======
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
