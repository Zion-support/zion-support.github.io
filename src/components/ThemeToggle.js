<<<<<<< HEAD
import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { Moo, n, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
export default function ThemeToggle() {
    const { mod,  e, toggleTheme } = useTheme();
    return (_jsxs(Butto,  n, { "aria-label": "Toggle theme", onClic, k: toggleThem, e,
    varian, t: "ghost", siz, e: "icon",
    childre, n: [mod, e === "dar, k" ? (_js, x(S, u, n, { classNa, m, e: "h-5 w-5" })) : (_js,  x(Mo, o, n, { classNa, m, e: "h-5 w-5" })), _js, x("spa,  n", { classNa, m, e: "s, r-onl, y",
    childr, e, n: "Toggl, e them, e" })] }));
}
=======
impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { SunIco, n, MoonIcon } from '@heroicons/react/24/outline';
const ThemeToggle = () => {
    const [isDa,  r, k, setIsDa, r, k] = useState(true);
    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('zion-theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        }
    },  []);
    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('zion-theme',  newTheme ? 'dark' : 'light');
        // Apply theme to document
        if (newTheme) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
        else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    };
    return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hove,  r:bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mod, e`}>
      {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-hove, r:text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hove,  r:text-blue-300 transition-colors duration-300"/>)}
    </button>);
};
export default ThemeToggle;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
