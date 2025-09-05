import React from 'react';

type Props = {
  category: string;
  level: string;
  isFree: string;
  onChange: (next: { category: string; level: string; isFree: string }) => void;
};

export default function FilterBar({ category, level, isFree, onChange }: Props) {
  return (
    <div className=&quot;grid grid-cols-1 sm:grid-cols-3 gap-3&quot;>
      <select
        className=&quot;border rounded px-3 py-2 bg-white dark:bg-black&quot;
        value={category}
        onChange={(e) => onChange({ category: e.target.value, level, isFree })}
      >
        <option value="">All Categories</option>
        <option>AI Development</option>
        <option>Freelancing</option>
        <option>Remote Hiring</option>
        <option>Cloud Architecture</option>
      </select>
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black&quot;
        value={level}
        onChange={(e) => onChange({ category, level: e.target.value, isFree })}
      >
        <option value="&quot;>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
        className=&quot;border rounded px-3 py-2 bg-white dark:bg-black&quot;
        value={isFree}
        onChange={(e) => onChange({ category, level, isFree: e.target.value })}
      >
        <option value="&quot;>All Pricing</option>
        <option value=&quot;true&quot;>Free</option>
        <option value=&quot;false">Paid</option>
      </select>
    </div>
  );
}