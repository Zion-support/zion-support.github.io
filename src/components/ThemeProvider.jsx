"use client";
import * as React from "react";
const initialState = {
  theme: "dark",
    setTheme: () => null,
  

};
export const ThemeProvider({ children }) {
    const [theme] = useState("dark");
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add("dark")}, []);
    const value = {
<<<<<<< HEAD
        theme,
        setTheme: () => { /* empty */ },
    };
    return (<ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>);

=======
  theme,
  setTheme: () => { 






},
    };
    return (<ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === null)
        throw new Error("useTheme must be used within a ThemeProvider");
<<<<<<< HEAD
    return context;
};
}
=======
    return context};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
