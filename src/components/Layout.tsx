import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ErrorBoundary from './ErrorBoundary';
import { NotificationSystem, useNotifications } from './NotificationSystem';
import PerformanceTracker from './PerformanceTracker';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { notifications, addNotification, removeNotification } = useNotifications();

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

    // Show welcome notification
    addNotification({
      type: 'info',
      title: 'Welcome!',
      message: 'Welcome to Zion App. Use the task manager to stay organized.',
      duration: 3000
    });

    return () => clearInterval(timer);
  }, [addNotification]);

  useEffect(() => {
    // Save dark mode preference to localStorage (only on client side)
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      
      // Apply dark mode class to document
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <ErrorBoundary>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <Navigation
          currentTime={currentTime}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        
        {/* Main content with top padding to account for fixed header */}
        <main className="pt-16">
          {children}
        </main>
        
        {/* Notification System */}
        <NotificationSystem 
          notifications={notifications} 
          onRemove={removeNotification} 
        />
        
        {/* Performance Tracking */}
        <PerformanceTracker 
          enableConsoleLogging={process.env.NODE_ENV === 'development'}
          enableAnalytics={process.env.NODE_ENV === 'production'}
        />
      </div>
    </ErrorBoundary>
  );
}