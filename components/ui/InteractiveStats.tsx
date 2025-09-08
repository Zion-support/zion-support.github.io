import { ReactNode } from "react";

interface StatItem {
  label: string;
  value: string | number;
  description?: string;
}

export default function InteractiveStats() {;

export default function InteractiveStats() {;
  const hires = useCounter(1200, 1200);
  const experts = useCounter(450, 1200);
  const partners = useCounter(85, 1200);
  const satisfaction = useCounter(98, 1200);
      <Stat label='Successful Hires' value={hires} suffix='+' />;
      <Stat label='AI Experts' value={experts} suffix='+' />;
      <Stat label='Partners' value={partners} suffix='+' />;
      <Stat label='Satisfaction' value={satisfaction} suffix='%' />;
function Stat({
  label
  value
  suffix = ''
}: {
    </div>);
    </div>);
}

export default function InteractiveStats({ 
  stats, 
  className = "grid grid-cols-1 md:grid-cols-3 gap-6" 
}: InteractiveStatsProps) {
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
  );
}
