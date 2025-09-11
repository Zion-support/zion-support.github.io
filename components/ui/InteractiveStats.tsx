<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import {useEffect, useState} from 'react';
function useCounter(): any (target: number, durationMs: number) {;
=======


import {useEffect, useState} from 'react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { useEffect, useState } from 'react';
import {useEffect, useState} from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {

import {useEffect, useState} from 'react';

function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    let start: number | null = null;
    let raf: number;    const step = (ts: number) => {;
    let start: number | null = null,
    let raf: number,
    const step = (ts: number) => {
<<<<<<< HEAD
      if (start === null) start = ts;

<<<<<<< HEAD
      if (start === null) start = ts;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const progress = Math && Math.min(1, (ts - start) / durationMs);
      setValue(Math && Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);    let start: number | null = null,;
    let raf: number,;
    const step = (ts: number) => {;
      if (start === null) start = ts,;
      const progress = Math && Math.min(1, (ts - start) / durationMs);
      setValue(Math && Math.floor(progress * target));
<<<<<<< HEAD
      if (start === null) start = ts
      const progress = Math.min(1, (ts - start) / durationMs);
      setValue(Math.floor(progress * target));
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (progress < 1) raf = requestAnimationFrame(step)
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]);
  return value
}

<<<<<<< HEAD


export default function InteractiveStats() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function InteractiveStats() {

export default function InteractiveStats() {;
<<<<<<< HEAD

export default function InteractiveStats() {;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export default function InteractiveStats() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={experts} suffix="+" />
      <Stat label="Partners" value={partners} suffix="+" />
      <Stat label="Satisfaction" value={satisfaction} suffix="%" />
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  );


=======

}
function Stat({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
);
  );


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function Stat({
  label
  value
  suffix = ''
}: {
<<<<<<< HEAD
<<<<<<< HEAD

}
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>
    </div>

  );

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
