import React, { useState, useEffect } from 'react.ts';
import React, { useState, useEffect } from 'react';
export const ThemeToggle: React.FC < ThemeToggleProps> = ({ className = '' }) => {;
export default ThemeToggle;
import { Sun, Moon, Monitor type Theme = 'dark' | 'light' | 'system';


type Theme = 'dark' | 'light' | 'system';

interface ThemeToggleProps {
  className?: string;
}

  const [theme, setTheme] = useState < Theme> ('system') ;
  const [mounted, setMounted] = useState (false) ;

  useEffect ( () => {
    setMounted (true) ;
    const savedTheme = localStorage.getItem ('theme') as Theme;
    if (savedTheme) {
      setTheme (savedTheme) ;
    }
  }, []) ;

  useEffect ( () => {
    if (!mounted) return;

      root.classList.toggle ('dark', theme === 'dark') ;
    }
    
    localStorage.setItem ('theme', theme) ;
  }, [theme, mounted]) ;

  if (!mounted) {
    return (<div role="button" className="w - 32 h - 10 rounded - lg bg - gray - 200 dark:bg - gray - 700 animate - pulse" />) ;
  }

  const themes: { value: Theme; label: string; icon: React.ComponentType < any> }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor }
  ];

  return (<div role="button" className="relative">
      <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsOpen (!isOpen) }
        className="flex items - center space - x-2 px - 3 py - 2 rounded - lg bg - gray - 100 dark:bg - gray - 800 border border - gray - 200 dark:border - gray - 700 text - gray - 700 dark:text - gray - 300 hover:bg - gray - 200 dark:hover:bg - gray - 700 transition - colors"
        aria - label="Select theme"
        aria - expanded={isOpen}
        aria - haspopup="true"
      >
        {themes.find (t => t.value === theme) ?.icon ({ className: 'w - 4 h - 4' }) }
        <span className="text - sm font - medium">{themes.find (t => t.value === theme) ?.label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (<motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top - full right - 0 mt - 2 w - 32 bg - white dark:bg - gray - 800 border border - gray - 200 dark:border - gray - 700 rounded - lg shadow - lg z - 50"
          >
            {themes.map ( (themeOption) => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={themeOption.value}
                onClick={ () => {
                  setTheme (themeOption.value) ;
                  setIsOpen (false) ;
                }}
                className={`w - full flex items - center space - x-2 px - 3 py - 2 text - left text - sm hover:bg - gray - 100 dark:hover:bg - gray - 700 transition - colors ${
                  theme === themeOption.value
                    ? 'bg - blue - 50 dark:bg - blue - 900 / 20 text - blue - 600 dark:text - blue - 400'
                    : 'text - gray - 700 dark:text - gray - 300'
                }`}
              >
                <themeOption.icon className="w - 4 h - 4" />
                <span>{themeOption.label}</span>
              </button>) ) }
          </motion.div>) }
      </AnimatePresence>
    </div>) ;
};
    const root = document.documentElement;
    const systemTheme = window.matchMedia (' (prefers - color - scheme: dark) ') .matches ? 'dark' : 'light';
    const effectiveTheme = theme === 'system' ? systemTheme : theme;

    root.classList.remove ('light', 'dark') ;
    root.classList.add (effectiveTheme) ;
    
    // Update CSS custom properties for smooth transitions
    if (effectiveTheme === 'dark') {
      root.style.setProperty ('--zion - bg - primary', '#0f172a') ;
      root.style.setProperty ('--zion - bg - secondary', '#1e293b') ;
      root.style.setProperty ('--zion - text - primary', '#f8fafc') ;
      root.style.setProperty ('--zion - text - secondary', '#cbd5e1') ;
    } else {
      root.style.setProperty ('--zion - bg - primary', '#ffffff') ;
      root.style.setProperty ('--zion - bg - secondary', '#f1f5f9') ;
      root.style.setProperty ('--zion - text - primary', '#0f172a') ;
      root.style.setProperty ('--zion - text - secondary', '#475569') ;
    }

    localStorage.setItem ('zion - theme', theme) ;
  }, [theme, mounted]) ;

  const handleThemeChange = useCallback ( (newTheme: Theme) => {
    setTheme (newTheme) ;
  };

  const themes: { value: Theme; label: string; icon: React.ComponentType < any> }[] = [
    { value: 'light', label: 'Light theme', icon: Sun },
    { value: 'dark', label: 'Dark theme', icon: Moon },
    { value: 'system', label: 'System theme', icon: Monitor }
  ];

  if (!mounted) {
    return (<div role="button" className={`w - 12 h - 12 bg - gray - 200 dark:bg - gray - 700 rounded - lg animate - pulse ${className}`} />) ;
  }

  return (<div role="button" className={`relative ${className}`}>
      <motion.div
        className="flex items - center space - x-1 bg - white / 10 backdrop - blur - sm border border - cyan - 400 / 20 rounded - xl p - 1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {themes.map ( (themeOption) => {
          const Icon = themeOption.icon;
          const isActive = theme === themeOption.value;
          
          return (<motion.button
              key={themeOption.value}
              onClick={ () => handleThemeChange (themeOption.value) }
              className={`relative p - 2 rounded - lg transition - all duration - 200 ${
                isActive
                  ? 'bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white shadow - lg'
                  : 'text - gray - 300 hover:text - white hover:bg - white / 10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria - label={themeOption.label}
              title={themeOption.label}
            >
              <Icon className="w - 4 h - 4" />
              {isActive && (<motion.div
                  className="absolute inset - 0 rounded - lg bg - gradient - to - r from - cyan - 500 to - blue - 500"
                  layoutId="activeTheme"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />) }
            </motion.button>) ;
        }) }
      </motion.div>
    </div>) ;
};

