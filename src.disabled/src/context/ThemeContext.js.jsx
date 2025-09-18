<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/backup-main-20250918-004015
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
import * as _React from 'react'; const ThemeProvider = ({ children }) => {; const [theme,setTheme] = _React.useState('system'); _React.useEffect(() => {; const root = window.document.documentElement; root.classList.remove('light','dark'); if(theme === 'system') {; const systemTheme = window.matchMedia('(prefers-color-"scheme": dark)').matches ? 'dark' : 'light'; root.classList.add(systemTheme)}; else {; root.classList.add(theme)}},[theme]); return(<ThemeContext.Provider value = {; { theme,; setTheme}}>; {children}; </ThemeContext.Provider>)}; export const useTheme = () => {; const context = _React.useContext(ThemeContext); if(context === null) {; throw new Error('useTheme must be used within a ThemeProvider')}; return context};
import * as React from \'react\'; const ThemeProvider = ({ children }) => {; const [theme,setTheme] = React.useState(\'system\'); React.useEffect(() => {; const root = window.document.documentElement; root.classList.remove(\'light\',\'dark\'); if(theme === \'system\') {; const systemTheme = window.matchMedia(\'(prefers-color-\"scheme\": dark)\').matches ? \'dark\' : \'light\'; root.classList.add(systemTheme)}; else {; root.classList.add(theme)}},[theme]); return(<ThemeContext.Provider value = {; { theme,; setTheme}}>; {children}; </ThemeContext.Provider>)}; export const useTheme = () => {; const context = React.useContext(ThemeContext); if(context === null) {; throw new Error(\'useTheme must be used within a ThemeProvider\')}; return context};
const * as React from "react"; const ThemeProvider = ({ children }) => {; const [theme,setTheme] = React.useState("system"); React.useEffect(() => {; const root = window.document.documentElement; root.classList.remove("light","dark"); if(theme === "system") {; const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; root.classList.add(systemTheme)}; else {; root.classList.add(theme)}},[theme]); return(<ThemeContext.Provider value = {; { theme,; setTheme}}>; {children}; </ThemeContext.Provider>)}; export const useTheme = () => {; const context = React.useContext(ThemeContext); if(context === null) {; throw new Error("useTheme must be used within a ThemeProvider")}; return context};'"'"
import * as _React from 'react'; const ThemeProvider = ({ children }) => {; const [theme,setTheme] = _React.useState('system'); _React.useEffect(() => {; const root = window.document.documentElement; root.classList.remove('light','dark'); if(theme === 'system') {; const systemTheme = window.matchMedia('(prefers-color-"scheme": dark)').matches ? 'dark' : 'light'; root.classList.add(systemTheme)}; else {; root.classList.add(theme)}},[theme]); return(<ThemeContext.Provider value = {; { theme,; setTheme}}>; {children}; </ThemeContext.Provider>)}; export const useTheme = () => {; const context = _React.useContext(ThemeContext); if(context === null) {; throw new Error('useTheme must be used within a ThemeProvider')}; return context};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
=======
=======
=======
>>>>>>> origin/backup-main-20250918-004015
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
