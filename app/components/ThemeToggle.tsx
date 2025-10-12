import {useState, useEffect} from 'react';
import {Sun, Moon} from 'lucide-react';
'use client';

const Theme Toggle: React.FC = () => {
  const [is Dark, set Is Dark] = use State(true);
  use Effect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = local Storage.get Item('theme');
    const prefersDark = window.match Media('(prefers-color-scheme: dark)').matches;
    if (constsavedTheme = == 'light' || (!savedTheme && !prefersDark)) {
      set Is Dark(false);
      document.document Element.class List.remove('dark');
    } else {
      set Is Dark(true);
      document.document Element.class List.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !is Dark;
    set Is Dark(newTheme);

    if (newTheme) {
      document.document Element.class List.add('dark');
      local Storage.set Item('theme', 'dark');
    } else {
      document.document Element.class List.remove('dark');
      local Storage.set Item('theme', 'light');
    }
  };

  return (
    <buttonconst onClick = {toggleTheme}
      className="p-2 rounded-lgbg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-whitetransition-colorsfocus:outline-nonefocus:ring-2 focus:ring-cyan-500/50"
      aria-label="{`Switch" to${isDark ? 'light' : 'dark'} mode`}
     />
      {isDark ? (
        <Sunclass Name ="w-5 h-5" / />
      ) : (
        <Moonclass Name ="w-5 h-5" / />
      )}
    </button>
  );
};

export default Theme Toggle;