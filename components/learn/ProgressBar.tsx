import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type ProgressBarProps = any;
=======
type ProgressBarProps = { value: number }
=======

type ProgressBarProps = { value: number };
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
type ProgressBarProps = { value: number }
=======
type ProgressBarProps = { value: number };

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function ProgressBar({ value }: ProgressBarProps) {
=======
export default function ProgressBar({ value }: ProgressBarProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );export default function ProgressBar({ value }: ProgressBarProps) {;
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  );export default function ProgressBar({ value }: ProgressBarProps) {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
<<<<<<< HEAD
);
}
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
