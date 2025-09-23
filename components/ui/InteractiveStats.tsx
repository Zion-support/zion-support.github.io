<<<<<<< HEAD
"use client";

import { useEffect, useState } from 'react';
import {useEffect, useState} from 'react';

=======
import { useEffect, useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616

function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
<<<<<<< HEAD

import {useEffect, useState} from 'react';

function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {;

    let start: number | null = null;
    let raf: number;    const step = (ts: number) => {;
    let start: number | null = null,
    let raf: number,
    const step = (ts: number) => {





      if (start === null) start = ts;

      const progress = Math && Math.min(1, (ts - start) / durationMs);
      setValue(Math && Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);    let start: number | null = null,;
    let raf: number,;
    const step = (ts: number) => {;
      if (start === null) start = ts,;
      const progress = Math && Math.min(1, (ts - start) / durationMs);
      setValue(Math && Math.floor(progress * target));

      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;}
=======
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min(1, (ts - start) / durationMs);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
>>>>>>> origin/auto/autonomy-17186719616
    };
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






export default function InteractiveStats() {;



=======
export default function InteractiveStats() {
>>>>>>> origin/auto/autonomy-17186719616
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
<<<<<<< HEAD


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

      <Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;

=======
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Stat label="Successful Hires" value={hires} suffix="+" />
      <Stat label="AI Experts" value={experts} suffix="+" />
      <Stat label="Partners" value={partners} suffix="+" />
      <Stat label="Satisfaction" value={satisfaction} suffix="%" />
    </div>
<<<<<<< HEAD
  )

}
function Stat({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {
=======
  );
}

function Stat({ label, value, suffix = '' }: { label: string; value: number; suffix?: string }) {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
<<<<<<< HEAD

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

    <div className='p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur'>;
      <div className='text-3xl font-bold'>;
        {value}
        {suffix}
      </div>;
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>;
    </div>;
  );

}

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
      </div>
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>
    </div>
  );
}
  );

=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616
