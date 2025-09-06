import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveSearch({
  placeholder = 'Search talent, skills, or jobs...',
}: {
  placeholder?: string;
}) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [value, setValue] = useState('');
  
    >
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'      />
      {value && (
        <button
          onClick={() => setValue('')}
          className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'        >
=======
        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {value && (
        <button
          onClick={() => setValue('')}
<<<<<<< HEAD
          className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
=======
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ✕
        </button>
      )}
    </motion.div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
