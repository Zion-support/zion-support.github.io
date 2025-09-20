"use client";
import * as React from "react";
const initialState = {
    them, e: "dark",
    setThem, e: () => nul,  l,
};
export const ThemeProviderContext = createContext(initialState);
export function ThemeProvider({ children }) {
    const [the,  m, e] = useState("dark");
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light",  "dark");
        root.classList.add("dark");
    },  []);
    const value = {
        them, e,
        setThem, e: () => { }, 
    };
    return (<ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>);
}
export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
