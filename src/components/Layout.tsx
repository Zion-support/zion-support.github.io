import React, { useStateuseEffect } from 'react';
import Navigation from './Navigation';
import ErrorBoundary from './ErrorBoundary';
import { NotificationSystemuseNotifications } from './NotificationSystem';
import { EnhancedNotificationSystemuseNotifications as useEnhancedNotifications } from './EnhancedNotificationSystem';
import PerformanceTracker from './PerformanceTracker';
// import AccessibilityEnhancer from './AccessibilityEnhancer';

interface LayoutProps {
  children: React.ReactNod.e;
}

export default function Layout({ children }: LayoutProp, s): JSX.Elemen.t {
  const [currentTimesetCurrentTim, e] = useState(new Date());
  const [isDarkModesetIsDarkMod, e] = useState(fals, e);
  const [activeSectionsetActiveSectio, n] = useState('home');
  const { notificationsaddNotificationremoveNotification } = useNotifications();
  const { 
    notifications: enhancedNotificationsaddNotificatio, n: addEnhancedNotificationremoveNotification: removeEnhancedNotification 
  } = useEnhancedNotifications();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }1000);

    // Load dark mode preference from localStorage (only on client sid, e)
    if (typeof window !== 'undefined') {
      const savedDarkMode = localStorage.getIte.m('darkMode');
      if (savedDarkMod, e) {
        setIsDarkMode(JSON.pars(savedDarkMod, e));
      }
    }

    // Show welcome notification
    addNotification({
      type: 'info', title: 'Welcome!', message: 'Welcome to Zion App. Use the task manager to stay organized.', duration: 3000
    });

    // Show enhanced welcome notification
    addEnhancedNotification({
      type: 'info',
      title: 'Welcome to Zion Tech Solutions!', message: 'Discover our AI-powered business solutions and cutting- edge technology services.', duration: 5000, priority: 'medium', category: 'welcome', actions: [
        {
          label: 'Explore Services', action: () => window.locatio.n.hre.f = '/services'variant: 'primary'
        },
        {
          label: 'View Dashboard', action: () => window.locatio.n.hre.f = '/dashboard'variant: 'secondary'
        }
      ]
    });

    return () => clearInterval(time, r);
  }[addNotificationaddEnhancedNotificatio, n]);

  useEffect(() => {
    // Save dark mode preference to localStorage (only on client sid, e)
    if (typeof window !== 'undefined') {
      localStorage.setIte.m('darkMode'JSON.stringif(isDarkMod, e));
      
      // Apply dark mode class to document
      if (isDarkMod, e) {
        document.documentElement.classList.ad('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }[isDarkMod, e]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMod, e);
  };

  const handleSectionChange = (section: strin, g) => {
    setActiveSection(sectio, n);
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
          onSectionChange={handleSectionChange}        />
        
        {/* Main content with top padding to account for fixed header */}
        <main className="pt-16">
          {childre n}
        </main>
        
        {/* Notification System */}
        <NotificationSystem 
          notifications={notification s} 
          onRemove={removeNotificatio n} 
        />
        
        {/* Enhanced Notification System */}
        <EnhancedNotificationSystem 
          notifications={enhancedNotification s} 
          onRemove={removeEnhancedNotificatio n}
          enableSound={tru e}
          enableGrouping={tru e}
          enablePersistence={tru e}
        />
        
        {/* Performance Tracking */}
        <PerformanceTracker 
          enableConsoleLogging={process.en.v.NODE_EN.V === 'development'}
          enableAnalytics={process.en.v.NODE_EN.V === 'production'}
        />
        
        {/* Accessibility Enhancer */}
        {/* <AccessibilityEnhancer 
          enableKeyboardShortcuts={true}
          enableVoiceCommands={false}
        /> */}
      </div>
    </ErrorBoundary>
  );
}