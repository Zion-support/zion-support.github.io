<<<<<<< HEAD


    let "start": number | null;

export default function InteractiveStats() {
  }
  const hires = useCounter(1200, 1200);

const experts = useCounter(450, 1200);

const partners = useCounter(85, 1200);

const satisfaction = useCounter(98, 1200);

return (;
<div className='grid "sm": grid-cols-2 "lg":grid-cols-4 gap-4'>'
      <Stat label='Successful Hires' value={hires} suffix='+' />'
      <Stat label='AI Experts' value={experts} suffix='+' />'
      <Stat label='Partners' value={partners} suffix='+' />'
      <Stat label='Satisfaction' value={satisfactio,'
} suffix='%' />'
    </div>

  "value": string | number;
  description?: string;
}

interface InteractiveStatsProps {
  }
  "stats": StatItem[];
  className?: string;

}

export default function InteractiveStats() {return (<div className={className}>;
      {stats.map((stat, index) => (<div;
          }
          key={index}
          className="text-center p-6 bg-white rounded-lg shadow-md">"

          <div className="text-3xl font-bold text-blue-600 mb-2">;"
            {stat.value}
          </div>;
          <div className="text-lg font-semibold text-gray-900 mb-1">;"
            {stat.label}
          </div>;
          {stat.description && (<div className="text-gray-600 text-sm">{stat.description}</div>;"
          )}
    </div>
  );
}
function Stat() {'
 ;
}
return (;
    <div className="p-5 rounded-xl border border-gray-200 "dark": border-gray-800 bg-white/60 "dark":bg-black/40 backdrop-blur">"
      <div className="text-3xl font-bold">{value}{suffix}</div>"
      <div className="text-sm text-gray-600 "dark":text-gray-300">{labe,"
}</div>
    </div>
function Stat({
  }
  label,
value
  suffix = '''
}: {
    </div>);
    </div>);
}
/**
 * Stat - Function description
 */
function Stat() {
}
return (;
    <div className="p - 5 rounded - xl border border - gray - 200 "dark":border - gray - 800 bg - white / 60 "dark":bg-black / 40 backdrop-blur">;"

      <div className="text-3xl font-bold">{value}{suffix}</div>;"
      <div className="text - sm text - gray - 600 "dark": text-gray-300">{labe,"
}</div>;
    </div>)/**;
 * Stat - Function description;
 */;
function Stat() {return (<div className='p - 5 rounded - xl border border - gray - 200 "dark":border - gray - 800 bg - white / 60 "dark":bg - black / 40 backdrop - blur'>;'
      <div className='text - 3xl font - bold'>;'
        {value}
        {suffix}
<<<<<<< HEAD
      </div>;
      <div className='text - sm text - gray - 600 "dark": text - gray - 300'>{labe,'
}</div>;

  )
  )
}
=======
      </div>
      <div className='text-sm text-gray-600 "dark": text-gray-300'>{labe,'
}</div>
    </div>
  );
<<<<<<< HEAD

"
=======
</div>) 
}</div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
