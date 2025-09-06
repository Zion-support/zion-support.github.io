<<<<<<< HEAD
};
export default function FilterBar(): any ({;
  category,;
  level,;
  isFree,;
  onChange,;
}: Props) {;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>;
      <select
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={category}
import React from 'react';
type Props = {
  category: string,
  level: string,
  isFree: string,
  onChange: (next: { category: string, level: string, isFree: string }) => void
}
        onChange={e => onChange({ category: e && e.target.value, level, isFree })}
      >;
        <option value=''>All Categories</option>        <option>AI Development</option>type Props = {;
  category: string,;
  level: string,;
  isFree: string,;
  onChange: (next: { category: string, level: string, isFree: string }) => void;
};
export default function FilterBar(): any ({ category, level, isFree, onChange }: Props) {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">;
=======
import React from 'react';
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
type Props = {
  category: string;
  level: string;
  isFree: string;
  onChange: (next: { category: string; level: string; isFree: string }) => void;
}
export default function FilterBar({
  category
  level
  isFree
  onChange
}: Props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      <select
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={category}
        onChange={e => onChange({ category: e.target.value, level, isFree })}
      >
        <option value=''>All Categories</option>        <option>AI Development</option>type Props = {
<<<<<<< HEAD
  category: string
  level: string
  isFree: string
  onChange: (next: { category: string, level: string, isFree: string }) => void
}
=======
  category: string,
  level: string,
  isFree: string,
  onChange: (next: { category: string, level: string, isFree: string }) => void;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export default function FilterBar({ category, level, isFree, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}
        onChange={(e) => onChange({ category: e.target.value, level, isFree })}
<<<<<<< HEAD
      <select
        className=&quot;border rounded px-3 py-2 bg-white dark:bg-black&quot;
        value={category}
        onChange={_(e) => onChange({ category: e.target.value, _level, _isFree})}

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      >
        <option value="">All Categories</option>
        <option>AI Development</option>
        <option>Freelancing</option>
        <option>Remote Hiring</option>
        <option>Cloud Architecture</option>
      </select>
      <select
<<<<<<< HEAD
className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={level}
=======
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={level}
        onChange={e => onChange({ category, level: e.target.value, isFree })}
      >
        <option value=''>All Levels</option>        <option>Beginner</option>        value={level}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onChange={(e) => onChange({ category, level: e.target.value, isFree })}
      >
        <option value="">All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
<<<<<<< HEAD
className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={isFree}
=======
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={isFree}
        onChange={e => onChange({ category, level, isFree: e.target.value })}
      >
        <option value=''>All Pricing</option>
        <option value='true'>Free</option>
        <option value='false'>Paid</option>
      </select>
<<<<<<< HEAD
    </div>;
=======
    </div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );        value={isFree}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        onChange={(e) => onChange({ category, level, isFree: e.target.value })}
      >
        <option value="">All Pricing</option>
        <option value="true">Free</option>
        <option value="false">Paid</option>
      </select>
    </div>
  );
<<<<<<< HEAD
}
  is_free: string;
  on_change: (next: { category: string; level: string; is_free: string }) => void;
}
;
export default /**
 * FilterBar - Function description
 */
function FilterBar() {
  return (
    <div className='grid grid - cols - 1 sm:grid - cols - 3 gap - 3'>;
      <select;
        className='border rounded px - 3 py - 2 bg - white dark:bg - black';
        value={category}
        on_change={e => on_change ({ category: e.target.value, level, is_free })}
      >;
        <option value=''>All Categories</option>        <option > AI Development</option > type Props = {
  category: string,
  level: string,
  is_free: string,
  on_change: (next: { category: string, level: string, is_free: string }) => void;
}
;
export default /**
 * FilterBar - Function description
 */
function FilterBar() {
  return (
    <div className="grid grid - cols - 1 sm:grid - cols - 3 gap - 3">;
      <select;
        className="border rounded px - 3 py - 2 bg - white dark:bg - black";
        value={category}
        on_change={(e) => on_change ({ category: e.target.value, level, is_free })}
      >;
        <option value="">All Categories</option>;
        <option > AI Development</option>;
        <option > Freelancing</option>;
        <option > Remote Hiring</option>;
        <option > Cloud Architecture</option>;
      </select>;
      <select;
        className='border rounded px - 3 py - 2 bg - white dark:bg - black';
        value={level}
        on_change={e => on_change ({ category, level: e.target.value, is_free })}
      >;
        <option value=''>All Levels</option>        <option > Beginner</option>        value={level}
        on_change={(e) => on_change ({ category, level: e.target.value, is_free })}
      >;
        <option value="">All Levels</option>;
        <option > Beginner</option>;
        <option > Intermediate</option>;
        <option > Advanced</option>;
      </select>;
      <select;
        className='border rounded px - 3 py - 2 bg - white dark:bg - black';
        value={is_free}
        on_change={e => on_change ({ category, level, is_free: e.target.value })}
      >;
        <option value=''>All Pricing</option>;
        <option value='true'>Free</option>;
        <option value='false'>Paid</option>;
      </select>;
    </div>);        value={is_free}
        on_change={(e) => on_change ({ category, level, is_free: e.target.value })}
      >;
        <option value="">All Pricing</option>;
        <option value="true">Free</option>;
        <option value="false">Paid</option>;
      </select>;
    </div>);
}
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
