<<<<<<< HEAD
"use client";" export const ThemeProvider({ children }) { export const useTheme = () => { "use client"; const initialState = { " theme: "dark", setTheme: () => null}; export const ThemeProvider({ children }) { " const [theme] = useState("dark"); useEffect(() => { const root = window.document.documentElement;" root.classList.remove("light", "dark");" root.classList.add("dark")}, []); const value = { theme, setTheme: () => { }}; return (<ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>)} export const useTheme = () => { const context = useContext(ThemeProviderContext); if(context === null)" throw new Error("useTheme must be used within a ThemeProvider"); return context}; ";"
=======
<<<<<<< HEAD


"use client";" export const ThemeProvider ({ children }) { export const useTheme = () => { "use client"; const initialState = { " theme: "dark", setTheme: () => null}; export const ThemeProvider ({ children }) { " const [theme] = useState ("dark") ; useEffect ( () => { const root = window.document.documentElement;" root.classList.remove ("light", "dark") ;" root.classList.add ("dark") }, []) ; const value = { theme, setTheme: () => { }}; return (<ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>) } export const useTheme = () => { const context = useContext (ThemeProviderContext) ; if (context === null) " throw new Error ("useTheme must be used within a ThemeProvider") ; return context}; ";"""";

"use client";" export const ThemeProvider({ children }) { export const useTheme = () => { "use client"; const initialState = { " theme: "dark", setTheme: () => null}; export const ThemeProvider({ children }) { " const [theme] = useState("dark"); useEffect(() => { const root = window.document.documentElement;" root.classList.remove("light", "dark");" root.classList.add("dark")}, []); const value = { theme, setTheme: () => { }}; return (<ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>)} export const useTheme = () => { const context = useContext(ThemeProviderContext); if(context === null)" throw new Error("useTheme must be used within a ThemeProvider"); return context}; ";"
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======

<<<<<<< HEAD
'use: client'' export const ThemeProvider ({ children }) { export const useTheme = () => { 'use client' const initialState = { ' theme: 'dark,', setTheme: () => nul,l} export: const ThemeProvider ({ children }) { ' const [theme] = useState ('dark')  useEffect ( () => { const root = window.document.documentElement' root.classList.remove ('light', 'dark') ' root.classList.add ('dark') }, [])  const value = { theme, setTheme: () => {, }} return: (<ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>) } export const useTheme = () => { const context = useContext (ThemeProviderContext)  if (context === null) ' throw new Error ('useTheme must be used within a ThemeProvider')  return context}';''"";
=======
<<<<<<< HEAD
'use client'' export const ThemeProvider ({ children }) { export const useTheme = () => { 'use client' const initialState = { ' theme: 'dark', setTheme: () => null} export const ThemeProvider ({ children }) { ' const [theme] = useState ('dark')  useEffect ( () => { const root = window.document.documentElement' root.classList.remove ('light', 'dark') ' root.classList.add ('dark') }, [])  const value = { theme, setTheme: () => { }} return (<ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>) } export const useTheme = () => { const context = useContext (ThemeProviderContext)  if (context === null) ' throw new Error ('useTheme must be used within a ThemeProvider')  return context}'''"
=======
<<<<<<< HEAD
'use client'' export const ThemeProvider ({ children }) { export const useTheme = () => { 'use client' const initialState = { ' theme: 'dark', setTheme: () => null} export const ThemeProvider ({ children }) { ' const [theme] = useState ('dark')  useEffect ( () => { const root = window.document.documentElement' root.classList.remove ('light', 'dark') ' root.classList.add ('dark') }, [])  const value = { theme, setTheme: () => { }} return (<ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>) } export const useTheme = () => { const context = useContext (ThemeProviderContext)  if (context === null) ' throw new Error ('useTheme must be used within a ThemeProvider')  return context};'""
=======
'use client'' export const ThemeProvider ({ children }) { export const useTheme = () => { 'use client' const initialState = { ' theme: 'dark', setTheme: () => null} export const ThemeProvider ({ children }) { ' const [theme] = useState ('dark')  useEffect ( () => { const root = window.document.documentElement' root.classList.remove ('light,dark') ' root.classList.add ('dark') }, [])  const value = { theme, setTheme: () => { }} return (<ThemeContext.Provider value={value}> {children} </ThemeContext.Provider>) } export const useTheme = () => { const context = useContext (ThemeProviderContext)  if (context === null) ' throw new Error ('useTheme must be used within a ThemeProvider')  return context}'"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
