import React, {_useState} from 'react';

export default function InteractiveSearch(_{_placeholder = 'Search talent, _skills, _or jobs...'}: {_placeholder?: string}) {_const [value, _setValue] = useState('');
  return (_<motion.div initial={{ opacity: 0, _y: 4}} animate={_{ opacity: 1, _y: 0}} className="relative">
      <input
        value={_value}
        onChange={_(e) => setValue(e.target.value)}
        placeholder={_placeholder}
        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {_value && (_<button
          onClick={() => setValue('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ✕
        </button>
      )}
    </motion.div>
  );
}