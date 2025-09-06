<<<<<<< HEAD
import { useEffect, useState } from 'react';
function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
<<<<<<< HEAD

=======
import {useEffect, useState} from 'react';

function useCounter(): any (target: number, durationMs: number) {;
  const [value, setValue] = useState(0);
  useEffect(() => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    let start: number | null = null;
    let raf: number;    const step = (ts: number) => {;
=======
    let start: number | null = null,
    let raf: number,
    const step = (ts: number) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      if (start === null) start = ts;
<<<<<<< HEAD
      const progress = Math.min(1, (ts - start) / durationMs);
      setValue(Math.floor(progress * target));
<<<<<<< HEAD
      if (progress < 1) raf = requestAnimationFrame(step);    let start: number | null = null
    let raf: number
    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min(1, (ts - start) / durationMs);
      setValue(Math.floor(progress * target));
=======
      const progress = Math && Math.min(1, (ts - start) / durationMs);
      setValue(Math && Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);    let start: number | null = null,;
    let raf: number,;
    const step = (ts: number) => {;
      if (start === null) start = ts,;
      const progress = Math && Math.min(1, (ts - start) / durationMs);
      setValue(Math && Math.floor(progress * target));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;}
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}
<<<<<<< HEAD
=======
      if (progress < 1) raf = requestAnimationFrame(step)
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]);
  return value
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function InteractiveStats() {
=======

export default function InteractiveStats() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
<<<<<<< HEAD

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>;
      <Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;
    </div>;
  );
    </div>;
  );
=======
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={experts} suffix="+" />
      <Stat label="Partners" value={partners} suffix="+" />
      <Stat label="Satisfaction" value={satisfaction} suffix="%" />
    </div>
  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
}
<<<<<<< HEAD
function Stat({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
);
function Stat({
  label
  value
  suffix = ''
}: {
=======

function Stat(): any ({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {;
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">;
      <div className="text-3xl font-bold">{value}{suffix}</div>;
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>;
    </div>;
  );
<<<<<<< HEAD
function Stat(): any ({;
  label,;
  value,;
  suffix = '',;
}: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  label: string;
  value: number;
  suffix?: string;
}) {;
  return (
    <div className='p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur'>;
      <div className='text-3xl font-bold'>;
        {value}
        {suffix}
      </div>;
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>;
    </div>;
  );
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
