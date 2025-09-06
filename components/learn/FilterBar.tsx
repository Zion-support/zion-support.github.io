import React from 'react';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
type Props = {
  category: string;
  level: string;
  isFree: string;
  onChange: (next: { category: string; level: string; isFree: string }) => void;
};

export default function FilterBar({
  category,
  level,
  isFree,
  onChange,
}: Props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      <select
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={category}
        onChange={e => onChange({ category: e.target.value, level, isFree })}
      >
<<<<<<< HEAD
        <option value=''>All Categories</option>        <option>AI Development</option>
=======
<<<<<<< HEAD
        <option value=''>All Categories</option>
=======
type Props = {
  category: string,
  level: string,
  isFree: string,
  onChange: (next: { category: string, level: string, isFree: string }) => void
};

export default function FilterBar({ category, level, isFree, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}
        onChange={(e) => onChange({ category: e.target.value, level, isFree })}
      >
        <option value="">All Categories</option>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <option value="">All Categories</option>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <option>AI Development</option>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <option>Freelancing</option>
        <option>Remote Hiring</option>
        <option>Cloud Architecture</option>
      </select>
      <select
<<<<<<< HEAD
        className='border rounded px-3 py-2 bg-white dark:bg-black'
=======
<<<<<<< HEAD
<<<<<<< HEAD
        className='border rounded px-3 py-2 bg-white dark:bg-black'
=======
        className="border rounded px-3 py-2 bg-white dark:bg-black"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        value={level}
        onChange={e => onChange({ category, level: e.target.value, isFree })}
      >
<<<<<<< HEAD
        <option value=''>All Levels</option>        <option>Beginner</option>
=======
<<<<<<< HEAD
        <option value=''>All Levels</option>
=======
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={level}
        onChange={(e) => onChange({ category, level: e.target.value, isFree })}
      >
        <option value="">All Levels</option>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <option value="">All Levels</option>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <option>Beginner</option>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
<<<<<<< HEAD
        className='border rounded px-3 py-2 bg-white dark:bg-black'
=======
<<<<<<< HEAD
<<<<<<< HEAD
        className='border rounded px-3 py-2 bg-white dark:bg-black'
=======
        className="border rounded px-3 py-2 bg-white dark:bg-black"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        value={isFree}
        onChange={e => onChange({ category, level, isFree: e.target.value })}
      >
        <option value=''>All Pricing</option>
        <option value='true'>Free</option>
        <option value='false'>Paid</option>
      </select>
    </div>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={isFree}
        onChange={(e) => onChange({ category, level, isFree: e.target.value })}
      >
        <option value="">All Pricing</option>
        <option value="true">Free</option>
        <option value="false">Paid</option>
      </select>
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
