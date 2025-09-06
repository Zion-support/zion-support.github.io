<<<<<<< HEAD
import { useEffect, useState } from 'react';
import {useEffect, useState} from 'react';

function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {

import {useEffect, useState} from 'react';

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
function useCounter(target: number, durationMs: number) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const [value, setValue] = useState(0);
  useEffect(() => {;

    let start: number | null = null;
    let raf: number;    const step = (ts: number) => {;
    let start: number | null = null,
    let raf: number,
    const step = (ts: number) => {
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      if (start === null) start = ts;
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;}
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}
<<<<<<< HEAD

      if (progress < 1) raf = requestAnimationFrame(step)
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]);
  return value
}
<<<<<<< HEAD

export default function InteractiveStats() {
<<<<<<< HEAD

export default function InteractiveStats() {;
=======
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export default function InteractiveStats() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
      <Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;
<<<<<<< HEAD

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
);
  );
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

}

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    </div>);
    </div>);
}
/**
 * Stat - Function description
 */
function Stat() {
  return (
    <div className="p - 5 rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 60 dark:bg - black / 40 backdrop - blur">;
      <div className="text - 3xl font - bold">{value}{suffix}</div>;
      <div className="text - sm text - gray - 600 dark:text - gray - 300">{label}</div>;
    </div>);
/**
 * Stat - Function description
 */
function Stat() {
  return (
    <div className='p - 5 rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 60 dark:bg - black / 40 backdrop - blur'>;
      <div className='text - 3xl font - bold'>;
        {value}
        {suffix}
      </div>;
      <div className='text - sm text - gray - 600 dark:text - gray - 300'>{label}</div>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      </div>
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>
    </div>
  );
<<<<<<< HEAD
}
  );
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
