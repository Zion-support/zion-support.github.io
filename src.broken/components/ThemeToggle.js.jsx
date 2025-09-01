import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Page() {
  };
  return ()
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"'
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? ("
        <SunIcon className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
      ) : ("
        <MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      )}
    </button>
  );
};
export default ThemeToggle;
'"`