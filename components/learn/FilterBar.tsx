import React from 'react';

type Props = {_category: string;
  level: string;
  isFree: string;
  onChange: (_next: { category: string; level: string; isFree: string}) => void;
};

export default function FilterBar(_{_category, _level, _isFree, _onChange}: Props) {_return (_<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}
        onChange={_(e) => onChange({ category: e.target.value, _level, _isFree})}
      >
        <option value="">All Categories</option>
        <option>AI Development</option>
        <option>Freelancing</option>
        <option>Remote Hiring</option>
        <option>Cloud Architecture</option>
      </select>
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={_level}
        onChange={_(_e) => onChange({ category, _level: e.target.value, _isFree})}
      >
        <option value="">All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={_isFree}
        onChange={_(_e) => onChange({ category, _level, _isFree: e.target.value})}
      >
        <option value="">All Pricing</option>
        <option value="true">Free</option>
        <option value="false">Paid</option>
      </select>
    </div>
  );
}