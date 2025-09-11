
import React from 'react';
type Props = {
  category: string,
  level: string,
  isFree: string,
=======

  onChange: (next: { category: string, level: string, isFree: string }) => void
}
=======


  onChange: (next: { category: string, level: string, isFree: string }) => void
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onChange={e => onChange({ category: e && e.target.value, level, isFree })}
      >;
        <option value=''>All Categories</option>        <option>AI Development</option>type Props = {;
  category: string,;
  level: string,;
  isFree: string,;
  onChange: (next: { category: string, level: string, isFree: string }) => void;
};




=======
export default function FilterBar(): any ({ category, level, isFree, onChange }: Props) {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">;
=======
import React from 'react';
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
export default function FilterBar({ category, level, isFree, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}

  );

=======
}



}
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
        onChange={e => onChange({ category, level: e.target.value, isFree })}
      >
        <option value=''>All Levels</option>        <option>Beginner</option>        value={level}
        onChange={(e) => onChange({ category, level: e.target.value, isFree })}
      >
        <option value="">All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={isFree}
        onChange={e => onChange({ category, level, isFree: e.target.value })}
      >
        <option value=''>All Pricing</option>
        <option value='true'>Free</option>
        <option value='false'>Paid</option>
      </select>
    </div>;
    </div>
  );        value={isFree}
        onChange={(e) => onChange({ category, level, isFree: e.target.value })}
      >
        <option value="">All Pricing</option>
        <option value="true">Free</option>
        <option value="false">Paid</option>
      </select>
    </div>
  );
}
}

=======

}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
