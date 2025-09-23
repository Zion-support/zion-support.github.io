import React from 'react';

type Props = {
  category: string;
  level: string;
  isFree: string;
  onChange: (next: { category: string; level: string; isFree: string }) => void;
};

<<<<<<< HEAD
export default function FilterBar({ category, level, isFree, onChange }: Props) {
  return (
=======
export default function FilterBar({ categorylevelisFreeonChange }: Props) {
  return (

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}
<<<<<<< HEAD
        onChange={(e) => onChange({ category: e.target.value, level, isFree })}
=======
        onChange={(e) => onChange({ category: e.target.valuelevelisFree })}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      >
        <option value="">All Categories</option>
        <option>AI Development</option>
        <option>Freelancing</option>
        <option>Remote Hiring</option>
        <option>Cloud Architecture</option>
      </select>
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={level}
<<<<<<< HEAD
        onChange={(e) => onChange({ category, level: e.target.value, isFree })}
=======
        onChange={(e) => onChange({ categorylevel: e.target.valueisFree })}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      >
        <option value="">All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={isFree}
<<<<<<< HEAD
        onChange={(e) => onChange({ category, level, isFree: e.target.value })}
=======
        onChange={(e) => onChange({ categorylevelisFree: e.target.value })}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      >
        <option value="">All Pricing</option>
        <option value="true">Free</option>
        <option value="false">Paid</option>
      </select>
    </div>
  );
}