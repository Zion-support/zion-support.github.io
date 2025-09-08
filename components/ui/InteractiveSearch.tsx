


  placeholder?: string;
}) {;
export default function InteractiveSearch({ placeholder = 'Search talent, skills, or jobs...' }: { placeholder?: string }) {
  const [value, setValue] = useState('');


      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}





}
import React from "react";
interface InteractiveSearchProps {;
  placeholder?: string;


;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default function InteractiveSearch() {const [value, setValue] = useState('')>;
      <input;
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'      />;
      {value && (<button;
          onClick={() => setValue('')}
          className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'        >  const [value, setValue]  = useState('')placeholder?: string;
}) {export default function InteractiveSearch() {const [value, setValue]  = useState('')className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
  return (<motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="relative">;
      <input;
        value={value}
        onChange={e => setValue(e && e.target.value)}
        placeholder={placeholder}

        className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
 ;
  return (
    <motion.div initial={{ opacity: 0, y: 4 }
} animate={{ opacity: 1, y: 0 }} className=\"relative\"    />
      <input;
value={value}
        onChange={e =    /> setValue(e && e.target.value)}
        placeholder={placeholder}
"
        className=\"w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500\"
      />
      {value && (}
        <button;}
onClick={() =    /> setValue('')}
className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'


    </motion.div>



  );


}
          className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus: ring - 2 focus:ring - blue - 500 focus:border - transparent"  />";
        <button type="submit;
          className="absolute right - 2 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 hover:text - gray - 600">";
          <svg className="w - 5 h - 5" fill="none" stroke="current_color" view_box="0 0 24 24">",
            <path stroke_linecap="round" stroke_linejoin="round" stroke_width="{2}" d="M21 21l - 6-6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z"  />;
          </svg>;
        </button>;
      </div>;
    </form>);
}}






