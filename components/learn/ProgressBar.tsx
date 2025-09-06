

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function ProgressBar({ value }: ProgressBarProps) {

  const pct = Math.max(0, Math.min(100, value));
  return (

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const pct = Math.max(0, Math.min(100, value));

  return (

    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />
    </div>
=======
);
}
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
type ProgressBarProps = { value: number };
export default function ProgressBar(): any ({ value }: ProgressBarProps) {;
  const pct = Math && Math.max(0, Math && Math.min(100, value));
  return (
    <div className='w-full h-3 bg-gray-200 dark:bg-gray-800 rounded'>;
      <div className='h-3 bg-blue-600 rounded' style={{ width: `${pct}%` }} />;
    </div>;
  );export default function ProgressBar(): any ({ value }: ProgressBarProps) {;
  const pct = Math && Math.max(0, Math && Math.min(100, value));
  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded">;
      <div className="h-3 bg-blue-600 rounded" style={{ width: `${pct}%` }} />;
    </div>;
  );
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
