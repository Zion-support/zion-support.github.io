<<<<<<< HEAD
import React, { useState, useEffect } from 'react';'''
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);
    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('zion-theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark')}
    }, []);
    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('zion-theme', newTheme ? 'dark' : 'light');
        // Apply theme to document
        if (newTheme) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light')}
        else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark')}
    };
    return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
      {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"/>) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)}
    </button>)};
export default ThemeToggle;


export { ThemeToggle };

export { ThemeToggle };

export { ThemeToggle };

export { ThemeToggle };

export { ThemeToggle };
=======
import React from "react"
const ThemeToggle = () => { const [isDark, setIsDark] = useState (true) ; useEffect ( () => {"";,"});,"})"
;,"});,"})"""";,"});,"})","});,"})"
const ThemeToggle = () => {;,"});,"})"
    const [isDark, setIsDark] = useState(true);,"});,"})"
    useEffect(() => {;,"});,"})"
        // comment
        const savedTheme = localStorage.getItem("zion-theme");,"});,"})"
        if (savedTheme) {;,"});,"})"
            setIsDark(savedTheme === "dark")}"});,"});"
}, []);,"});,"})"
    const toggleTheme = () => {;,"});,"})"
        const newTheme = !isDark,"});,"})"
        setIsDark(newTheme);,"});,"})"
        localStorage.setItem("zion-theme", newTheme ? "dark" : "light");,"});,"})"
        // comment
        if (newTheme) {;,"});,"})"
            document.documentElement.classList.add("dark");,"});,"})"
            document.documentElement.classList.remove("light")}"});,"})"
        else {;,"});,"})"
            document.documentElement.classList.add("light");,"});,"})"
            document.documentElement.classList.remove("dark")}"});,"});"
};,"});,"})"
    return (<button onClick="{toggleTheme}" className="{"p-2" rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group" aria-label="{"Switch" to ${isDark ? "light" : "dark"} mode"}>;,"});,"}})"
      {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"  />) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"  />)}"});,"})"
    </button>)};,"});,"})"
export default ThemeToggle,"});,"})"
;,"});,"})"
export { ThemeToggle };,"});,"})"
;,"});,"})"
export { ThemeToggle };,"});,"})"
;,"});,"})"
export { ThemeToggle };,"});,"})"
;,"});,"})"
export { ThemeToggle };,"});,"})"
;,"});,"})"
export { ThemeToggle };,"});,"})"
"
""
}}

const ThemeToggleJs = () => {
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <SEO title="ThemeToggleJs - Zion Tech Group""
        description="Professional ThemeToggleJs services by Zion Tech Group""
        keywords="themetogglejs, technology, services"  />"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-6">ThemeToggleJs</h1>"
          <p className="text-xl text-gray-300 mb-8">
            Professional ThemeToggleJs services to help your business grow.
          </p>"
          <div className="flex justify-center">"
            <a href="/contact" "
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300"
            >
              Get Started,
            </a>
          </div>
    </div>;,
  )}

export default ThemeToggleJs;""
>>>>>>> main
