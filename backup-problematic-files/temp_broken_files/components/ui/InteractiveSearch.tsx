import React, { useState } from 'react',
import { motion } from 'framer-motion',
export default function InteractiveSearch({ placeholder = 'Search talent, skills, or jobs...' }: { placeholder?: string }) {
  const [value, setValue] = useState(''),
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className=&quot;relative&quot;>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500&quot;      />
      {_value && (_<button
          onClick={() => setValue('')}
          className=&quot;absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300&quot;
        >
          
        </button>
      )}
    </motion.div>
  )}