<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
interface Service {
id: string;,
name: string;
}
}
}

import React from "react";
const ThemeToggle: React.FC = () => {
,
return (
<div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
<h3 className = "text-xl font-bold mb-4">ThemeToggle</h3>;
<p className="text-gray-300">Revolutionary technology component</p>;
},
</div>)},
export default ThemeToggle,;<//div><///div>
<<<<<<< HEAD
=======
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
<<<<<<< HEAD
};

export default ThemeToggle;
=======
<<<<<<< HEAD
};

export default ThemeToggle;
=======
}

export default ThemeToggle;
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
