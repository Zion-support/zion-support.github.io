<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import { useEffect, useState } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useEffect, useState} from 'react';
function useCounter(): any (target: number, durationMs: number) {;
=======
<<<<<<< HEAD
import { useEffect, useState } from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

<<<<<<< HEAD

import {useEffect, useState} from 'react';



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {

import {useEffect, useState} from 'react';

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
function useCounter(target: number, durationMs: number) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const [value, setValue] = useState(0);
  useEffect(() => {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    let start: number | null = null;
    let raf: number;    const step = (ts: number) => {;
    let start: number | null = null,
    let raf: number,
    const step = (ts: number) => {
<<<<<<< HEAD
<<<<<<< HEAD
      if (start === null) start = ts
      const progress = Math.min(1, (ts - start) / durationMs);
      setValue(Math.floor(progress * target));

export default function InteractiveStats() {

export default function InteractiveStats() {;

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      if (start === null) start = ts;

=======
      if (start === null) start = ts;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const progress = Math && Math.min(1, (ts - start) / durationMs);
      setValue(Math && Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);    let start: number | null = null,;
    let raf: number,;
    const step = (ts: number) => {;
      if (start === null) start = ts,;
      const progress = Math && Math.min(1, (ts - start) / durationMs);
      setValue(Math && Math.floor(progress * target));
<<<<<<< HEAD

=======
=======
      if (start === null) start = ts
      const progress = Math.min(1, (ts - start) / durationMs);
      setValue(Math.floor(progress * target));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (progress < 1) raf = requestAnimationFrame(step)
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]);
  return value
}
<<<<<<< HEAD
<<<<<<< HEAD


export default function InteractiveStats() {
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export default function InteractiveStats() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export default function InteractiveStats() {
<<<<<<< HEAD
<<<<<<< HEAD
export default function InteractiveStats() {;
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

export default function InteractiveStats() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

export default function InteractiveStats() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useEffect, useState} from 'react';
/**
 * use_counter - Function description
 */
function use_counter() {
  const [value, set_value] = useState (0);
  useEffect (() => {
    let start: number | null = null;
    let raf: number;    const step = (ts: number) =>: any {
      // Check condition
if (start = ts) {
  $2
}
      const progress = Math.min (1, (ts - start) / duration_ms);
      set_value (Math.floor (progress * target));
      if (raf = requestAnimationFrame (step)) {
  $2
}    let start: number | null = null,
    let raf: number,
    const step = (ts: number) =>: any {
      // Check condition
if (start = ts, ) {
  $2
}
      const progress = Math.min (1, (ts - start) / duration_ms);
      set_value (Math.floor (progress * target));
      if (raf = requestAnimationFrame (step)) {
  $2
}
    }
    raf = requestAnimationFrame (step);
    return () => cancelAnimationFrame (raf);
  }, [target, duration_ms]);
  return value;}
    }
    raf = requestAnimationFrame (step);
    return () => cancelAnimationFrame (raf);
  }, [target, duration_ms]);
  return value;
}
export default /**
 * InteractiveStats - Function description
 */
function InteractiveStats() {
  const hires = use_counter (1200, 1200);
  const experts = use_counter (450, 1200);
  const partners = use_counter (85, 1200);
  const satisfaction = use_counter (98, 1200);
  return (
    <div className='grid sm:grid - cols - 2 lg:grid - cols - 4 gap - 4'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={experts} suffix="+" />
      <Stat label="Partners" value={partners} suffix="+" />
      <Stat label="Satisfaction" value={satisfaction} suffix="%" />
    </div>
  )
<<<<<<< HEAD

}
<<<<<<< HEAD
function Stat({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
<<<<<<< HEAD

=======


  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
function Stat({
  label
  value
  suffix = ''
}: {
=======

=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
function Stat(): any ({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {;
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">;
      <div className="text-3xl font-bold">{value}{suffix}</div>;
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>;
    </div>;
  );
<<<<<<< HEAD

}

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </div>
  )
}

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
function Stat({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
<<<<<<< HEAD
  )
}

    </div>
  )
}

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
);
  );
function Stat({
  label
  value
  suffix = ''
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
  );
}
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
