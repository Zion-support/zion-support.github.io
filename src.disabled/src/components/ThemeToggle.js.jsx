<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import _React,{ useState,useEffect } from 'react';'''; import { SunIcon,MoonIcon } from '@heroicons/react/24/outline'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === 'dark')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem('zion-theme',newTheme ? 'dark' : 'light'); if (newTheme) {}; document.documentElement.classList.remove('light')} else {}; document.documentElement.classList.remove('dark')} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 "hover": bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-"hover": text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

=======
import _React,{ useState,useEffect } from 'react';'''; import { SunIcon,MoonIcon } from '@heroicons/react/24/outline'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === 'dark')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem('zion-theme',newTheme ? 'dark' : 'light'); if (newTheme) {}; document.documentElement.classList.remove('light')} else {}; document.documentElement.classList.remove('dark')} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 "hover": bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-"hover": text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
import React,{ useState,useEffect } from \'react\';\''\'; import { SunIcon,MoonIcon } from \'@heroicons/react/24/outline\'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === \'dark\')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage && localStorage.setItem(\'zion-theme\',newTheme ? \'dark\' : \'light\'); if (newTheme) {}; document && document.documentElement.classList && classList.remove(\'light\')} else {}; document && document.documentElement.classList && classList.remove(\'dark\')} }; return (<button onClick={toggleTheme} className=\"p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 \"hover\": bg-white/20 transition-all duration-300 group\" aria-label={`Switch to ${isDark ? \'light\' : \'dark\'} mode`}> {isDark ? (<SunIcon className=\"w-5 h-5 text-yellow-400 group-\"hover\": text-yellow-300 transition-colors duration-300\"/>) : (<MoonIcon className=\"w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300\"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
const React,{ useState,useEffect } from "react";"""; import { SunIcon,MoonIcon } from "@heroicons/react/24/outline"; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === "dark")} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage && localStorage.setItem("zion-theme",newTheme ? "dark" : "light"); if (newTheme) {}; document && document.documentElement.classList && classList.remove("light")} else {}; document && document.documentElement.classList && classList.remove("dark")} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover: bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-hover: text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };""`"`

import _React,{ useState,useEffect } from 'react';'''; import { SunIcon,MoonIcon } from '@heroicons/react/24/outline'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === 'dark')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage && localStorage.setItem('zion-theme',newTheme ? 'dark' : 'light'); if (newTheme) {}; document && document.documentElement.classList && classList.remove('light')} else {}; document && document.documentElement.classList && classList.remove('dark')} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 "hover": bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-"hover": text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
import _React,{ useState,useEffect } from 'react';'''; import { SunIcon,MoonIcon } from '@heroicons/react/24/outline'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === 'dark')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem('zion-theme',newTheme ? 'dark' : 'light'); if (newTheme) {}; document.documentElement.classList.remove('light')} else {}; document.documentElement.classList.remove('dark')} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 "hover": bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-"hover": text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import React,{ useState,useEffect } from \'react\';\''\'; import { SunIcon,MoonIcon } from \'@heroicons/react/24/outline\'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === \'dark\')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem(\'zion-theme\',newTheme ? \'dark\' : \'light\'); if (newTheme) {}; document.documentElement.classList.remove(\'light\')} else {}; document.documentElement.classList.remove(\'dark\')} }; return (<button onClick={toggleTheme} className=\"p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 \"hover\": bg-white/20 transition-all duration-300 group\" aria-label={`Switch to ${isDark ? \'light\' : \'dark\'} mode`}> {isDark ? (<SunIcon className=\"w-5 h-5 text-yellow-400 group-\"hover\": text-yellow-300 transition-colors duration-300\"/>) : (<MoonIcon className=\"w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300\"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
const React,{ useState,useEffect } from "react";"""; import { SunIcon,MoonIcon } from "@heroicons/react/24/outline"; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === "dark")} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem("zion-theme",newTheme ? "dark" : "light"); if (newTheme) {}; document.documentElement.classList.remove("light")} else {}; document.documentElement.classList.remove("dark")} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover: bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-hover: text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };""`"`
import _React,{ useState,useEffect } from 'react';'''; import { SunIcon,MoonIcon } from '@heroicons/react/24/outline'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === 'dark')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem('zion-theme',newTheme ? 'dark' : 'light'); if (newTheme) {}; document.documentElement.classList.remove('light')} else {}; document.documentElement.classList.remove('dark')} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 "hover": bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-"hover": text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React,{ useState,useEffect } from \'react\';\''\'; import { SunIcon,MoonIcon } from \'@heroicons/react/24/outline\'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === \'dark\')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem(\'zion-theme\',newTheme ? \'dark\' : \'light\'); if (newTheme) {}; document.documentElement.classList.remove(\'light\')} else {}; document.documentElement.classList.remove(\'dark\')} }; return (<button onClick={toggleTheme} className=\"p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 \"hover\": bg-white/20 transition-all duration-300 group\" aria-label={`Switch to ${isDark ? \'light\' : \'dark\'} mode`}> {isDark ? (<SunIcon className=\"w-5 h-5 text-yellow-400 group-\"hover\": text-yellow-300 transition-colors duration-300\"/>) : (<MoonIcon className=\"w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300\"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
const React,{ useState,useEffect } from "react";"""; import { SunIcon,MoonIcon } from "@heroicons/react/24/outline"; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === "dark")} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem("zion-theme",newTheme ? "dark" : "light"); if (newTheme) {}; document.documentElement.classList.remove("light")} else {}; document.documentElement.classList.remove("dark")} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover: bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-hover: text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };""`"`
import _React,{ useState,useEffect } from 'react';'''; import { SunIcon,MoonIcon } from '@heroicons/react/24/outline'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === 'dark')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem('zion-theme',newTheme ? 'dark' : 'light'); if (newTheme) {}; document.documentElement.classList.remove('light')} else {}; document.documentElement.classList.remove('dark')} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 "hover": bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-"hover": text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
import React,{ useState,useEffect } from \'react\';\''\'; import { SunIcon,MoonIcon } from \'@heroicons/react/24/outline\'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === \'dark\')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem(\'zion-theme\',newTheme ? \'dark\' : \'light\'); if (newTheme) {}; document.documentElement.classList.remove(\'light\')} else {}; document.documentElement.classList.remove(\'dark\')} }; return (<button onClick={toggleTheme} className=\"p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 \"hover\": bg-white/20 transition-all duration-300 group\" aria-label={`Switch to ${isDark ? \'light\' : \'dark\'} mode`}> {isDark ? (<SunIcon className=\"w-5 h-5 text-yellow-400 group-\"hover\": text-yellow-300 transition-colors duration-300\"/>) : (<MoonIcon className=\"w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300\"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
const React,{ useState,useEffect } from "react";"""; import { SunIcon,MoonIcon } from "@heroicons/react/24/outline"; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === "dark")} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem("zion-theme",newTheme ? "dark" : "light"); if (newTheme) {}; document.documentElement.classList.remove("light")} else {}; document.documentElement.classList.remove("dark")} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover: bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-hover: text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };""`"`
import _React,{ useState,useEffect } from 'react';'''; import { SunIcon,MoonIcon } from '@heroicons/react/24/outline'; const ThemeToggle = () => {}}; const [isDark,setIsDark] = useState(true); useEffect(() => {}; setIsDark(savedTheme === 'dark')} },[]); const toggleTheme = () => {}}; const newTheme = !isDark; setIsDark(newTheme); localStorage.setItem('zion-theme',newTheme ? 'dark' : 'light'); if (newTheme) {}; document.documentElement.classList.remove('light')} else {}; document.documentElement.classList.remove('dark')} }; return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 "hover": bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}> {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-"hover": text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)} </button>)}; export default ThemeToggle; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle }; export { ThemeToggle };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
