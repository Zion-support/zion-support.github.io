import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === "undefined") return "light";
		const stored = window.localStorage.getItem("theme");
		return stored === "dark" || stored === "light" ? (stored as Theme) : "light";
	});

	useEffect(() => {
		if (typeof document !== "undefined") {
			document.documentElement.dataset.theme = theme;
			window.localStorage.setItem("theme", theme);
		}
	}, [theme]);

	const toggleTheme = useMemo(() => () => setTheme(prev => (prev === "light" ? "dark" : "light")), []);

	const value = useMemo<ThemeContextValue>(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextValue {
	const ctx = useContext(ThemeContext);
	if (!ctx) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return ctx;
}

