"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);
  
  const value = {
    theme,
    setTheme,
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
