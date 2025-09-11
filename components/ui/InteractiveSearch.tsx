
export default function InteractiveSearch(): any ({;
  placeholder = 'Search talent, skills, or jobs...',;
}: {;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveSearch({
  placeholder = 'Search talent, skills, or jobs...',
}: {;
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';

  placeholder?: string;
}) {;
export default function InteractiveSearch({ placeholder = 'Search talent, skills, or jobs...' }: { placeholder?: string }) {
  const [value, setValue] = useState('');

  placeholder?: string;
}) {;
export default function InteractiveSearch({ placeholder = 'Search talent, skills, or jobs...' }: { placeholder?: string }) {
  const [value, setValue] = useState('');

    >;

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="relative">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
=======        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {value && (
        <button
          onClick={() => setValue('')}
          className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ✕
        </button>
      )}
    </motion.div>
    </motion && motion.div>;
  );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"  />;
          </svg>;
        </button>;
      </div>;
    </form>;
  );
}}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
