<<<<<<< HEAD
function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {

function useCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);
  useEffect(() => {;

    let start: number | null = null;
    let raf: number;    const step = (ts: number) => {;
    let start: number | null = null,
    let raf: number,
    const step = (ts: number) => {
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
      if (progress < 1) raf = requestAnimationFrame(step)
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs]);
  return value
}

export default function InteractiveStats() {;

export default function InteractiveStats() {;
=======

<<<<<<< HEAD
    let start: number | null;
export default function InteractiveStats() {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
<<<<<<< HEAD
=======

  return (
<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      <Stat label='Successful Hires' value={hires} suffix='+' />
      <Stat label='AI Experts' value={experts} suffix='+' />
      <Stat label='Partners' value={partners} suffix='+' />
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />
    </div>
  );
=======
import React from 'react';
interface StatItem {
  label: string;
=======
function useCounter() {const [value, setValue] = useState(0)useEffect(() => {function useCounter() {const [value, setValue] = useState(0)useEffect(() => {let start: number | null = null;
    let raf: number;    const step = (ts: number) => {let start: number | null = null,let raf: number,const step = (ts: number) => {if (start === null) start = ts;
      if (progress < 1) raf = requestAnimationFrame(step)}
    raf = requestAnimationFrame(step)return () => cancelAnimationFrame(raf)}, [target, durationMs])return value;}
    raf = requestAnimationFrame(step)return () => cancelAnimationFrame(raf)}, [target, durationMs])return value;
}
      if (progress < 1) raf = requestAnimationFrame(step)}raf = requestAnimationFrame(step)return () => cancelAnimationFrame(raf)}, [target, durationMs])return value;
}export default function InteractiveStats() {export default function InteractiveStats() {let start: number | null;
export default function InteractiveStats() {const hires = useCounter(1200, 1200)const experts = useCounter(450, 1200)const partners = useCounter(85, 1200)const satisfaction  = useCounter(98, 1200)<Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;return (<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
      <Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;
<<<<<<< HEAD
=======
    </div>;
  )import React from 'react';
interface StatItem  {label: string;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
  value: string | number;
  description?: string;
}interface InteractiveStatsProps  {stats: StatItem[];
  className?: string;
}export default function InteractiveStats() {return (<div className={className}>;
      {stats.map((stat, index) => (<div;
          key={index}
          className="text-center p-6 bg-white rounded-lg shadow-md";
        >;
          <div className="text-3xl font-bold text-blue-600 mb-2">;
            {stat.value}
          </div>;
          <div className="text-lg font-semibold text-gray-900 mb-1">;
            {stat.label}
          </div>;
          {stat.description && (<div className="text-gray-600 text-sm">{stat.description}</div>;
          )}
<<<<<<< HEAD
        </div>
      ))}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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
function Stat({
  label
  value
  suffix = ''
}: {
    </div>);
    </div>);
}
/**
 * Stat - Function description
 */
function Stat() {
  return (
    <div className="p - 5 rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 60 dark:bg-black / 40 backdrop-blur">;
=======
        </div>;
      ))}</div>;
  )}
function Stat() {return (<div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur">;
      <div className="text-3xl font-bold">{value}{suffix}</div>;
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>;
    </div>;
)function Stat({label;
  value;
  suffix = '';
}: {</div>)</div>)}
/**;
 * Stat - Function description;
 */;
function Stat() {return (<div className="p - 5 rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 60 dark:bg-black / 40 backdrop-blur">;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
      <div className="text-3xl font-bold">{value}{suffix}</div>;
      <div className="text - sm text - gray - 600 dark:text-gray-300">{label}</div>;
    </div>)/**;
 * Stat - Function description;
 */;
function Stat() {return (<div className='p - 5 rounded - xl border border - gray - 200 dark:border - gray - 800 bg - white / 60 dark:bg - black / 40 backdrop - blur'>;
      <div className='text - 3xl font - bold'>;
        {value}
        {suffix}
      </div>;
      <div className='text - sm text - gray - 600 dark:text - gray - 300'>{label}</div>;
<<<<<<< HEAD
    </div>);
}
      </div>
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>
    </div>

<<<<<<< HEAD
=======
  );
=======
    </div>)}
      </div>;
      <div className='text-sm text-gray-600 dark:text-gray-300'>{label}</div>;
    </div>;
  )
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
