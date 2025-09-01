<<<<<<< HEAD
import React from 'react.ts';
import { cn  } from '../../lib/utils';

interface ProgressProps extends React.PropsWithChildren<{}> {

  value: number;
  max?: number;
  className?: string;
;
const Progress: React.FC<ProgressProps> = { value: unknown, max = 100: unknown, className;
}: unknown {;
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return()
    <div className = {
=======
import React from 'react.ts';'
import { cn  } from '../../lib/utils';    <div className = {
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

  cn("w-full bg-slate-700 rounded-full h-2",
  className)





}>;
      <div;"
        className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300";
        style={{ width: `${percentage}%` }};
      />;
    </div>;
  );
};
;
export { Progress </div>};
}'"`