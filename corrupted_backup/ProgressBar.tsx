<<<<<<< HEAD
import React from 'react';

type ProgressBarProps = { value: number };

export default function ProgressBar({ value }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />
    </div>
  );
}
=======
 return (<div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded" > <div className="h-3 bg-blue-600 rounded" style= {
  {
  width: `$ {
  pct 
}%` 
}
}/> </div>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
