import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type Props = any;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
type Props = {
  category: string;
  level: string;
  isFree: string;
  onChange: (next: { category: string; level: string; isFree: string }) => void;
<<<<<<< HEAD
}
=======
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
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
      <select
        className="border rounded px-3 py-2 bg-white dark:bg-black"
        value={category}
        onChange={(e) => onChange({ category: e.target.value, level, isFree })}
      >
        <option value="">All Categories</option>
=======
        <option value=''>All Categories</option>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
        <option value=''>All Levels</option>        <option>Beginner</option>        value={level}
        onChange={(e) => onChange({ category, level: e.target.value, isFree })}
      >
        <option value="">All Levels</option>
=======
        <option value=''>All Levels</option>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
    </div>;
=======
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  );        value={isFree}
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
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
