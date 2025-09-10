

:src_backup/components/ThemeToggle.tsx
import React from 'react';
import { Sun, Moon, Monitor  } from 'lucide-react';
import { useTheme  } from './ThemeProvider';
import React from 'react';
import { Sun, Moon, Monitor  } from 'lucide-react';
import { useTheme  } from './ThemeProvider';
import React from 'react;
import { Sun, Moon, Monitor  } from lucide-react';
import { useTheme  } from './ThemeProvider;
const ThemeToggle: React.FC = () => {const { theme, setTheme }  = useTheme()const themes = [;
    { name: 'light', icon: Sun, label: 'Light' },{ name: 'dark', icon: Moon, label: 'Dark' },{ name: 'system', icon: Monitor, label: 'System' }
  ];return (<div className="relative">;
      <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">;
        {themes.map((themeOption) => {const Icon = themeOption.icon;
          const isActive  = theme === themeOption.name;return (<button;
              key={themeOption.name}
              onClick={() => setTheme(themeOption.name as 'light' | 'dark' | 'system')}
              className={`relative px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white';
              }`}
            >;
              {isActive && (<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md" />;
              )}
              <Icon className="w-4 h-4 relative z-10" />;
              <span className="text-sm font-medium relative z-10 hidden sm:block">;
                {themeOption.label}
              </span>;
            </button>;
          )})}
      </div>;
  )}export default ThemeToggle;
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';


};
};
}
  );
};