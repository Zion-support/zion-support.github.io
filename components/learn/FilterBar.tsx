

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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


  category: string
  level: string
  isFree: string
  onChange: (next: { category: string, level: string, isFree: string }) => void
}



  onChange: (next: { category: string, level: string, isFree: string }) => void
}





export default function FilterBar(): any ({ category, level, isFree, onChange }: Props) {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">;


export default function FilterBar({ category, level, isFree, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}



  );

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


}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
