<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


import {useEffect, useState} from 'react';

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {
<<<<<<< HEAD

<<<<<<< HEAD
import {useEffect, useState} from 'react';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

function useCounter(target: number, durationMs: number) {

=======
function useCounter(target: number, durationMs: number) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [value, setValue] = useState(0);
  useEffect(() => {;

    let start: number | null = null;
    let raf: number;    const step = (ts: number) => {;
    let start: number | null = null,
    let raf: number,
    const step = (ts: number) => {
<<<<<<< HEAD

=======
      if (start === null) start = ts;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      if (progress < 1) raf = requestAnimationFrame(step)
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]);
  return value
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

export default function InteractiveStats() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function InteractiveStats() {;

export default function InteractiveStats() {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default function InteractiveStats() {;

export default function InteractiveStats() {;
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
    let start: number | null;
export default function InteractiveStats() {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
<<<<<<< HEAD
<<<<<<< HEAD
      <Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;
<<<<<<< HEAD
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

=======
);
  );
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return (
<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      <Stat label='Successful Hires' value={hires} suffix='+' />
      <Stat label='AI Experts' value={experts} suffix='+' />
      <Stat label='Partners' value={partners} suffix='+' />
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />
    </div>
  );
import React from 'react';
interface StatItem {
  label: string;
  value: string | number;
  description?: string;
}

interface InteractiveStatsProps {
  stats: StatItem[];
  className?: string;
}

export default function InteractiveStats({
  stats,
  className = 'grid grid-cols-1 md: grid-cols-3 gap-6',
}: InteractiveStatsProps) {
  return (
    <div className={className}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white rounded-lg shadow-md"
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {stat.value}
          </div>
          <div className="text-lg font-semibold text-gray-900 mb-1">
            {stat.label}
          </div>
          {stat.description && (
            <div className="text-gray-600 text-sm">{stat.description}</div>
          )}
        </div>
      ))}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    </div>
  );
}
function Stat({ label, value, suffix = '' }: { label: string, value: number, suffix?: string }) {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
function Stat({
  label
  value
  suffix = ''
}: {
<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    </div>);
    </div>);
}
/**
 * Stat - Function description
 */
function Stat() {
  return (
    <div className="p - 5 rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 60 dark:bg-black / 40 backdrop-blur">;
      <div className="text-3xl font-bold">{value}{suffix}</div>;
      <div className="text - sm text - gray - 600 dark:text-gray-300">{label}</div>;
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
