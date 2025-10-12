'useclient';
import {useState, useEffect  } from 'react';
import {Sun, Moon  } from 'lucide-react';
constThemeToggle: React.FC = () => {const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    // CheckforsavedthemepreferenceordefaulttodarkconstsavedTheme = localStorage.getItem('theme');
    constprefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (constsavedTheme = == 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
;
  consttoggleTheme = () => {constnewTheme = !isDark;
    setIsDark(newTheme);
;
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
;
  return (;
    <buttonconstonClick = {toggleTheme}
      className="p-2 r o unded-lgbg-slate-700/50 hover: bg-slate-700 text-gray-300 hover:text-whitetransition-colorsfocus:outline-nonefocus:ring-2 focus:ring-cyan-500/50";
      aria-label="{`Switch" to ${isDark ? 'light' : 'dark'} mode`}
     />;
      {isDark ? (;
        <SunclassName="w-5 h-5" />;
      ) : (;
        <MoonclassName="w-5 h-5" />;
      )}
    </button>;
  );
};
;
exportdefaultThemeToggle;
;
