import React, { useState, useEffect               } from 'react.ts';
import { Sun, Moon, Monitor                } from 'lucide-react.ts';

type Theme = 'light' | 'dark' | 'system' | 'cyberpunk' | 'minimal' | 'retro';

interface ThemeToggleProps extends React.PropsWithChildren<{}> {

  className?: string;

}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {;
  const [theme, setTheme] = useState<any>('system');
  const [mounted, setMounted] = useState(false);

  const themes: { value: Theme; label: string; icon: React.ComponentType<any>; description: string }[] = [
    { value: 'light', label: 'Light', icon: Sun, description: 'Clean and bright interface' },
    { value: 'dark', label: 'Dark', icon: Moon, description: 'Easy on the eyes' },
    { value: 'system', label: 'System', icon: Monitor, description: 'Follows your OS preference' },
    { value: 'cyberpunk', label: 'Cyberpunk', icon: Palette, description: 'Neon and futuristic' },
    { value: 'minimal', label: 'Minimal', icon: Settings, description: 'Simple and clean' },
    { value: 'retro', label: 'Retro', icon: Palette, description: 'Classic computing style' }
  ];

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('zion-theme') as Theme;
    if (savedTheme && themes.some(t => t.value === savedTheme)) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme: Theme = systemPrefersDark ? 'dark' : 'light';
      setCurrentTheme(defaultTheme);
      applyTheme(defaultTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-light', 'theme-dark', 'theme-cyberpunk', 'theme-minimal', 'theme-retro');
    
    // Add new theme class
    if (theme !== 'system') {
      root.classList.add(`theme-${theme}`);
    }
    
    // Set data attribute for CSS custom properties
    root.setAttribute('data-theme', theme);
    
    // Apply system theme if needed
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(`theme-${systemPrefersDark ? 'dark' : 'light'}`);
      root.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }
    
    // Save to localStorage
    localStorage.setItem('zion-theme', theme);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const colors = {
        light: '#ffffff',
        dark: '#0f172a',
        cyberpunk: '#0a0a0a',
        minimal: '#f8fafc',
        retro: '#2d3748'
      };
      metaThemeColor.setAttribute('content', colors[theme] || colors.dark);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    setIsOpen(false);
    setIsAdvancedOpen(false);
  };

  const getCurrentThemeIcon = () => {
    const theme = themes.find(t => t.value === currentTheme);
    return theme ? theme.icon : Moon;
  };

  const getCurrentThemeLabel = () => {
    const theme = themes.find(t => t.value === currentTheme);
    return theme ? theme.label : 'Dark';
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Theme Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${sizeClasses[size]} bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg flex items-center justify-center text-white transition-all duration-200 shadow-lg hover:shadow-xl`}
        aria-label={`Current theme: ${getCurrentThemeLabel()}. Click to change theme.`}
        title={`Current theme: ${getCurrentThemeLabel()}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTheme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <getCurrentThemeIcon className={iconSizes[size]} />
          </motion.div>
        </AnimatePresence>
      </motion.button>
      
      {/* Theme indicator tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover: anyanyanyanyanyanyanyanyanyanyanyanyanyanyopacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {themes.find(t               => t.value === theme)?.label} theme
      </div>
    </div>
  );
}

// Alternative dropdown version for more explicit theme selection
export function ThemeToggleDropdown(...args: any[]): any {
  const [theme, setTheme] = useState<any>('system');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);

  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="w-32 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  const themes: { value: Theme; label: string; icon: React.ComponentType<any> }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Select theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {themes.find(t => t.value === theme)?.icon({ className: 'w-4 h-4' })}
        <span className="text-sm font-medium">{themes.find(t => t.value === theme)?.label}</span>
      </button>

      {/* Quick Theme Switcher */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-32 bg-white dark: anyanyanyanyanyanyanyanyanyanyanyanyanyanybg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
          >
            {themes.map((themeOption)               => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  theme === themeOption.value
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <themeOption.icon className="w-4 h-4" />
                <span>{themeOption.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
