import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ErrorBoundary from './ErrorBoundary';
import { NotificationSystem, useNotifications } from './NotificationSystem';
import { EnhancedNotificationSystem, useNotifications as useEnhancedNotifications } from './EnhancedNotificationSystem';
import PerformanceTracker from './PerformanceTracker';
import AccessibilityEnhancer from './AccessibilityEnhancer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { notifications, addNotification, removeNotification } = useNotifications();
  const { 
    notifications: enhancedNotifications, 
    addNotification: addEnhancedNotification, 
    removeNotification: removeEnhancedNotification 
  } = useEnhancedNotifications();

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

    // Show enhanced welcome notification
    addEnhancedNotification({
      type: 'info',
      title: 'Welcome to Zion Tech Solutions!',
      message: 'Discover our AI-powered business solutions and cutting-edge technology services.',
      duration: 5000,
      priority: 'medium',
      category: 'welcome',
      actions: [
        {
          labe, l: 'Explore Services',
          action: () => window.location.href = '/services',
          variant: 'primary'
        },
        {
          label: 'View Dashboard',
          action: () => window.location.href = '/dashboard',
          variant: 'secondary'
        }
      ]
    });

    return () => clearInterval(timer);
  }, [addNotification, addEnhancedNotification]);

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
      }`}>        <Navigation
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
        
        {/* Enhanced Notification System */}
        <EnhancedNotificationSystem 
          notifications={enhancedNotifications} 
          onRemove={removeEnhancedNotification}
          enableSound={true}
          enableGrouping={true}
          enablePersistence={true}
        />
        
        {/* Performance Tracking */}
        <PerformanceTracker 
          enableConsoleLogging={process.env.NODE_ENV === 'development'}
          enableAnalytics={process.env.NODE_ENV === 'production'}
        />
        
        {/* Accessibility Enhancer */}
        <AccessibilityEnhancer 
          enableKeyboardShortcuts={true}
          enableVoiceCommands={false}
        />
      </div>
    </ErrorBoundary>
  );
}