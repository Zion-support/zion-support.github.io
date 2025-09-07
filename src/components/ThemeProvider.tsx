import React, { createContext, useContext, useState, useEffect } from 'react';
<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx

interface ThemeContextType {'
  theme: 'light' | 'dark';
=======
interface ThemeContextType {
  theme: 'light' | 'dark';',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ThemeProvider.tsx
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx

<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
=======
export const useTheme = () => {};
  const context = useContext(ThemeContext);
  if (context === undefined) {'
=======
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context ===,  undefined) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ThemeProvider.tsx
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx

interface ThemeProviderProps {}
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ThemeProvider.tsx
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {'
=======
interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {,
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ThemeProvider.tsx
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {}
      setTheme(savedTheme);
    }
<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx
  }, []);

<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
=======
  useEffect(() => {'
    localStorage.setItem('theme', theme);'
    if (theme === 'dark') {'
      document.documentElement.classList.add('dark');
    } else {'
      document.documentElement.classList.remove('dark');
    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ThemeProvider.tsx
  }, [theme]);

  const toggleTheme = () => {'
=======
  }, []);,
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {'
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);,
  const toggleTheme = () => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ThemeProvider.tsx
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx
};
<<<<<<< HEAD:src_backup/components/ThemeProvider.tsx

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
=======
};'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/ThemeProvider.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ThemeProvider.tsx
