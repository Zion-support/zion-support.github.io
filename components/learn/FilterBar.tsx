<<<<<<< HEAD
<<<<<<< HEAD
};
export default function FilterBar(): any ({;
  category,;
  level,;
  isFree,;
  onChange,;
}: Props) {;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
      <select
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={category}


import React from 'react';
type Props = {
  category: string,
  level: string,
  isFree: string,
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function FilterBar(): any ({ category, level, isFree, onChange }: Props) {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">;
import React from 'react';


=======
export default function FilterBar(): any ({ category, level, isFree, onChange }: Props) {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">;
=======
import React from 'react';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  category: string,
  level: string,
  isFree: string,
  onChange: (next: { category: string, level: string, isFree: string }) => void;
};

export default function FilterBar({ category, level, isFree, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}
<<<<<<< HEAD
<<<<<<< HEAD
        onChange={(e) => onChange({ category: e.target.value, level, isFree })}
      >
        <option value="">All Categories</option>
        <option>AI Development</option>
        <option>Freelancing</option>
        <option>Remote Hiring</option>
        <option>Cloud Architecture</option>
      </select>
      <select
        className='border rounded px-3 py-2 bg-white dark:bg-black'
        value={level}
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  );

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}



<<<<<<< HEAD
}
}

}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
