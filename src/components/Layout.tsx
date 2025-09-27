import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ErrorBoundary from './ErrorBoundary';
import PerformanceTracker from './PerformanceTracker';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Load dark mode preference from localStorage (only on client side)
    if (typeof window !== 'undefined') {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode) {
        setIsDarkMode(JSON.parse(savedDarkMode));
      }
    }

    return () => clearInterval(timer);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <ErrorBoundary>
        <Navigation 
          currentTime={currentTime}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="pt-16">
          {children}
        </main>
        <PerformanceTracker />
      </ErrorBoundary>
    </div>
  );
}