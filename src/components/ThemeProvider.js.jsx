"use client";
import * as React from "react";
const initialState = {
    theme: "dark",
    setTheme: () => null,
};
export const ThemeProviderContext = createContext(initialState);
export function ThemeProvider({ children }) {
    const [theme] = useState("dark");
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add("dark");
    }, []);
    const value = {
        theme,
        setTheme: () => { },
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
