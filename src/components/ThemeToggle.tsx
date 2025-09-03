<<<<<<< HEAD
import { Sun, Moon, Monitor type Theme = 'dark' | 'light' | 'system';

type Theme = 'dark' | 'light' | 'system';

interface ThemeToggleProps {
  // Add your props here

  className?: string}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {;
  const [theme, setTheme] = useState<Theme>('system');  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if(savedTheme) {

      setTheme(savedTheme)}
  }, []) ;
  useEffect(() => {
    if(!mounted) return;

      root.classList.toggle('dark', theme === 'dark') ;
    }

    localStorage.setItem('theme', theme) ;
  }, [theme, mounted]) ;
  if(!mounted) {

    return ()
      <div className="w-32 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
    )}

  const themes: { value: Theme; label: string; icon: React.ComponentType<any> }[] = ['
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor }
  ];

  return ("
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}"
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        
        aria-expanded={isOpen}"
        aria-haspopup="true"
      >
        {themes.find(t => t.value === theme)?.icon({ className: 'w-4 h-4' })}"
        <span className="text-sm font-medium">{themes.find(t => t.value === theme)?.label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (<motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}"
            className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
          >
            {themes.map((themeOption) => (<button      key={themeOption.value}
                onClick={ () => {
                  setTheme(themeOption.value) ;
                  setIsOpen(false) }}                className={`w-full flex items-center space-x-2 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${theme === themeOption.value'
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400''
                    : 'text-gray-700 dark:text-gray-300'`
                }`}
              >"
                <themeOption.icon className="w-4 h-4" />
                <span>{themeOption.label}</span>
              </button>) ) }
          </motion.div>) }
      </AnimatePresence>
    </div>) ;
};
    const root = document.documentElement;
    const systemTheme = window.matchMedia(' (prefers - color - scheme: dark) ') .matches ? 'dark' : 'light';
    const effectiveTheme = theme === 'system' ? systemTheme : theme;

    root.classList.remove('light', 'dark') ;
    root.classList.add(effectiveTheme) ;

    // Update CSS custom properties for smooth transitions    root.classList.add(effectiveTheme);
    
    // Update CSS custom properties for smooth transitions'
    if(effectiveTheme === 'dark') {

      root.style.setProperty('--zion-bg-primary',#0f172a');
      root.style.setProperty('--zion-bg-secondary',#1e293b');
      root.style.setProperty('--zion-text-primary',#f8fafc');
      root.style.setProperty('--zion-text-secondary',#cbd5e1')} else {

      root.style.setProperty('--zion-bg-primary',#ffffff');
      root.style.setProperty('--zion-bg-secondary',#f1f5f9');
      root.style.setProperty('--zion-text-primary',#0f172a');
      root.style.setProperty('--zion-text-secondary',#475569')}

    localStorage.setItem('zion-theme', theme)}, [theme, mounted])};
  const themes: { value: Theme; label: string; icon: React.ComponentType<any> }[] = ['
    { value: 'light', label: 'Light theme', icon: Sun },
    { value: 'dark', label: 'Dark theme', icon: Moon },
    { value: 'system', label: 'System theme', icon: Monitor }
  ];

  if(!mounted) {

    return ()`
      <div className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse ${className}`} />
    )}

  return ()`
    <div className={`relative ${className}`}>
      <motion.div"
        className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = theme === themeOption.value;

          return (<motion.button              key={themeOption.value}
              onClick={() => handleThemeChange(themeOption.value)}`
              className={`relative p-2 rounded-lg transition-all duration-200 ${isActive'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg''
                  : 'text-gray-300 hover:text-white hover:bg-white/10'`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={themeOption.label}
              title={themeOption.label}
            >"
              <Icon className="w-4 h-4"  />              {isActive && (
                <motion.div"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
                  layoutId="activeTheme"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />) }
            </motion.button>) }) }
      </motion.div>
    </div>) };
export default ThemeToggle;
'"`
=======
<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { Sun, Moon, Monitor  } from 'lucide-react'; import { useTheme } from './ThemeProvider'; const ThemeToggle: React.FC = () => { const { theme, setTheme } = useTheme(); const themes = [{ name: 'light', icon: Sun, label: 'Light' }, { name: 'dark', icon: Moon, label: 'Dark' }, { name: 'system', icon: Monitor, label: 'System' } ]; return(<div className="relative"> <div className="flex items-center space-x-1 bg-zion-slate-light/30 rounded-lg p-1"> {themes.map((themeOption) => { const Icon = themeOption.icon; const isActive = theme === themeOption.name; return(<motion.button key={themeOption.name} onClick={() => setTheme(themeOption.name as 'light' | 'dark' | 'system')} className={`relative px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white' }`} whileHover={{ scale: 1.05   }} whileTap={{ scale: 0.95   }} > {isActive && ( <motion.div layoutId="theme-bg" className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-md" initial={false} transition={{ type: "spring", stiffness: 500, damping: 30 }} /> )} <Icon className="w-4 h-4 relative z-10" /> <span className="text-sm font-medium relative z-10 hidden sm:block"> {themeOption.label} </span> </motion.button> ); })} </div> </div> ); }; export default ThemeToggle;
=======
import React from "react"; const ThemeToggle: React.FC = () => { const { theme, setTheme } = useTheme(); const themes = []; return (
    <div className="relative"> <div className="{"flex" items-center space-x-1 bg-zion-slate-light/30 rounded-lg p-1"> {themes.map((themeOption) => { const Icon = themeOption.icon; const isActive = theme === themeOption.name; return(<motion.button key="{themeOption.name}" onClick="{()" => setTheme(themeOption.name as "light" | "dark" | "system")} className="{"relative" px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${isActive ? "text-white" : "text-gray-400 hover:text-white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && ( <motion.div layoutId=""theme-bg"}" className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} /> )} <Icon className="w-4 h-4 relative z-10"  /> <span className="text-sm font-medium relative z-10 hidden sm:block"> {themeOption.label} </span> </motion.button> )})} </div> </div> )}; export default ThemeToggle; const ThemeToggle: React.FC = () => { const { theme, setTheme } = useTheme(); const themes = []; return ("
    <div className="relative"> <div className="{"flex" items-center space-x-1 bg-zion-slate-light/30 rounded-lg p-1"> {themes.map((themeOption) => { const Icon = themeOption.icon; const isActive = theme === themeOption.name; return (<motion.button key="{themeOption.name}" onClick="{()" => setTheme(themeOption.name as "light" | "dark" | "system")} className="{"relative" px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${isActive ? "text-white" : "text-gray-400 hover:text-white" }"} whileHover="{{" scale: 1.05  }} whileTap="{{" scale: 0.95  }} > {isActive && ( <motion.div layoutId=""theme-bg"}" className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} /> )} <Icon className="w-4 h-4 relative z-10"  /> <span className="text-sm font-medium relative z-10 hidden sm:block"> {themeOption.label} </span> </motion.button> )})} </div> </div> )}; export default ThemeToggle
"
;,"});,"})" const ThemeToggle: React.FC = () => { const { theme, setTheme } = useTheme () ; const themes = []; return ("
    <div role="button" className="relative"> <div role="button" className="{"flex" items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon; const isActive = theme === themeOption.name; return (<motion.button key="{themeOption.name}" onClick="{" () => setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion.div layoutId=""theme" - bg"} className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} />) } <Icon className="w - 4 h - 4 relative z - 10"  /> <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>) }) } </div> </div>) }; export default ThemeToggle;"""";,"});,"})" const ThemeToggle: React.FC = () => { const { theme, setTheme } = useTheme(); const themes = []; return ("
    <div className="relative"> <div className="{"flex" items-center space-x-1 bg-zion-slate-light/30 rounded-lg p-1"> {themes.map((themeOption) => { const Icon = themeOption.icon; const isActive = theme === themeOption.name; return (<motion.button key="{themeOption.name}" onClick="{()" => setTheme(themeOption.name as "light" | "dark" | "system")} className="{"relative" px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 ${isActive ? "text-white" : "text-gray-400 hover:text-white" }"} whileHover="{{" scale: 1.05  }} whileTap="{{" scale: 0.95  }} > {isActive && ( <motion.div layoutId=""theme-bg"}" className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} /> )} <Icon className="w-4 h-4 relative z-10"  /> <span className="text-sm font-medium relative z-10 hidden sm:block"> {themeOption.label} </span> </motion.button> )})} </div> </div> )}; export default ThemeToggle,"});,"})"
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion.button key="{themeOption.name}" onClick="{" () => setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion.div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} />) } <Icon className="w - 4 h - 4 relative z - 10"  /> <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  }) } </div> </div>)  } export default ThemeToggle";"";"
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion.button key="{themeOption.name}" onClick="{" () => setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05   }} whileTap="{{" scale: 0.95   }} > {isActive && (<motion.div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} />) } <Icon className="w - 4 h - 4 relative z - 10"  /> <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  })} </div> </div>)  } export default ThemeToggle"""""
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion.button key="{themeOption.name}" onClick="{" () => setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion.div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} />) } <Icon className="w - 4 h - 4 relative z - 10"  /> <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  })} </div> </div>)  } export default ThemeToggle";"""""
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion.button key="{themeOption.name}" onClick="{" () => setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion.div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} />) } <Icon className="w - 4 h - 4 relative z - 10"  /> <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  })} </div> </div>)  } export default ThemeToggle";""
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion.button key="{themeOption.name}" onClick="{()" => setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover: text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion.div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} />) } <Icon className="w - 4 h - 4 relative z - 10"  /> <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  })} </div> </div>)  } export default ThemeToggle";"""""framer - motion&apos;lucide - react&apos;./ThemeProvider&apos;&apos, const ThemeToggle: React.FC = () => {} const { theme, setTheme } = useTheme ()  const;const themes = [] return (&apos;<div role="&apos;button&apos;" className="&apos;relative&apos;">&apos, <div role="&apos;button&apos;" className="&apos;flex" items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1&apos;> {themes.map ( (themeOption) => {&apos}} const Icon = themeOption.icon const isActive = theme === themeOption.name return (<;<motion.button key="{themeOption.name}" onClick="{" () => setTheme (themeOption.name as &apos;light&apos; | &apos;dark&apos; | &apos;system&apos) } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? &apos;text - white&apos; : &apos;text - gray - 400 hover:text - white&apos}"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (&apos}<motion.div layoutId="&apos;theme" - bg&apos; className="&apos;absolute" inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md&apos; initial="{false}" transition="{{" type &apos;spring&apos, stiffness: 500, damping: 30 }} />) }&apos; <Icon className="&apos;w" - 4 h - 4 relative z - 10&apos;       />&apos; <span className="&apos;text" - sm font - medium relative z - 10 hidden sm: block&apos,> {themeOption.label}&apos; </span> </motion.button>)  })} </div> <;</div>)  } ;export default ThemeToggle";"&quot
&quot;""
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion .button key="{themeOption.name}" onClick="{" () =" > setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion .div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} /" >) } <Icon className="w - 4 h - 4 relative z - 10" /" > <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  })} </div> </div>)  } export default ThemeToggle";"""""
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion .button key="{themeOption.name}" onClick="{" () =" > setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion .div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} /" >) } <Icon className="w - 4 h - 4 relative z - 10" /" > <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  }) } </div> </div>)  } export default ThemeToggle";"""
""""
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion.button key="{themeOption.name}" onClick="{" () => setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion.div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} />) } <Icon className="w - 4 h - 4 relative z - 10"  /> <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  })} </div> </div>)  } export default ThemeToggle";"""const ThemeToggle: React.FC = () => { const { theme, setTheme } = useTheme ()  const themes = [] return ("
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion .button key="{themeOption.name}" onClick="{" () =" > setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion .div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} /" >) } <Icon className="w - 4 h - 4 relative z - 10" /" > <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  })} </div> </div>)  } export default ThemeToggle";"""""
  { name: "light", icon: Sun, label: "Light" } { name: "dark", icon: Moon, label: "Dark" } { name: "system", icon: Monitor, label: "System" } ] return ("
    <div role="button" className="relative"> <div role="button" className="flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1"> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion .button key="{themeOption.name}" onClick="{" () =" > setTheme (themeOption.name as "light" | "dark" | "system") } className="{"relative" px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? "text - white" : "text - gray - 400 hover:text - white" }"} whileHover="{{" scale: 1.05 }} whileTap="{{" scale: 0.95 }} > {isActive && (<motion .div layoutId="theme - bg" className="absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md" initial="{false}" transition="{{" type "spring", stiffness: 500, damping: 30 }} /" >) } <Icon className="w - 4 h - 4 relative z - 10" /" > <span className="text - sm font - medium relative z - 10 hidden sm: block"> {themeOption.label} </span> </motion.button>)  }) } </div> </div>)  } export default ThemeToggle";""
"
"`""
>>>>>>> main
>>>>>>> main
