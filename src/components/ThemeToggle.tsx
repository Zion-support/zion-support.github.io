<<<<<<< HEAD
import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
=======
interface Service {
id: string;
name: string;
}
}
}

import React from "react";
const ThemeToggle: React.FC = () => {
,
return (,
<div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
<h3 className = "text-xl font-bold mb-4">ThemeToggle</h3>;
<p className="text-gray-300">Revolutionary technology component</p>;
},
</div>)},
export default ThemeToggle,;<//div><///div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
