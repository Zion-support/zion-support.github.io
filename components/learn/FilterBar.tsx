import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
        <option>Freelancing</option>
        <option>Remote Hiring</option>
        <option>Cloud Architecture</option>
      </select>
      <select
<<<<<<< HEAD
<<<<<<< HEAD
        className='border rounded px-3 py-2 bg-white dark:bg-black'
=======
        className="border rounded px-3 py-2 bg-white dark:bg-black"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        value={level}
        onChange={(e) => onChange({ category, level: e.target.value, isFree })}
      >
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
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
<<<<<<< HEAD
<<<<<<< HEAD
        className='border rounded px-3 py-2 bg-white dark:bg-black'
=======
        className="border rounded px-3 py-2 bg-white dark:bg-black"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        value={isFree}
        onChange={(e) => onChange({ category, level, isFree: e.target.value })}
      >
        <option value="">All Pricing</option>
        <option value="true">Free</option>
        <option value="false">Paid</option>
      </select>
    </div>
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
