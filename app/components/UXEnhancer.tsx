import React, { useEffect, useState, useCallback, useRef } from 'react';
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  X, 
  ChevronUp, 
  ChevronDown,
  Sun,
  Moon,
  Monitor,
  Settings,
  Bell,
  Search,
  Menu,
  X as CloseIcon
} from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface Theme {
  name: string;
  value: 'light' | 'dark' | 'system';
  icon: React.ReactNode;
}

const UXEnhancer: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    animations: true,
    sounds: true,
    notifications: true,
    autoSave: true,
  });

  const notificationTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const themes: Theme[] = [
    { name: 'Light', value: 'light', icon: <Sun className="w-4 h-4" /> },
    { name: 'Dark', value: 'dark', icon: <Moon className="w-4 h-4" /> },
    { name: 'System', value: 'system', icon: <Monitor className="w-4 h-4" /> },
  ];

  // Notification system
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };
    
    setNotifications(prev => [...prev, newNotification]);

    // Auto-remove notification
    if (notification.duration !== 0) {
      const timeout = setTimeout(() => {
        removeNotification(id);
      }, notification.duration || 5000);
      
      notificationTimeoutRef.current[id] = timeout;
    }

    return id;
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    
    if (notificationTimeoutRef.current[id]) {
      clearTimeout(notificationTimeoutRef.current[id]);
      delete notificationTimeoutRef.current[id];
    }
  }, []);

  // Theme management
  const applyTheme = useCallback((newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  }, []);

  // Scroll to top functionality
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system';
    applyTheme(savedTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme, applyTheme]);

  // Loading state management
  const showLoading = useCallback((message?: string) => {
    setIsLoading(true);
    if (message) {
      addNotification({
        type: 'info',
        title: 'Loading',
        message,
        duration: 0,
      });
    }
  }, [addNotification]);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
    // Remove loading notifications
    setNotifications(prev => prev.filter(n => n.title !== 'Loading'));
  }, []);

  // Search functionality
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      // Implement search logic here
      console.log('Searching for:', query);
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      
      // Escape to close modals
      if (e.key === 'Escape') {
        setIsSettingsOpen(false);
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-save functionality
  useEffect(() => {
    if (!preferences.autoSave) return;

    const autoSave = setInterval(() => {
      // Implement auto-save logic here
      addNotification({
        type: 'success',
        title: 'Auto-saved',
        message: 'Your changes have been saved automatically',
        duration: 2000,
      });
    }, 30000); // Every 30 seconds

    return () => clearInterval(autoSave);
  }, [preferences.autoSave, addNotification]);

  // Demo notifications
  useEffect(() => {
    const demoNotifications = [
      {
        type: 'success' as const,
        title: 'Welcome!',
        message: 'Zion Tech Group is ready to help you succeed',
        duration: 3000,
      },
    ];

    const timer = setTimeout(() => {
      demoNotifications.forEach(notif => {
        setTimeout(() => addNotification(notif), Math.random() * 2000);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [addNotification]);

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center space-x-3">
            <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
            <span className="text-gray-900 dark:text-white">Loading...</span>
          </div>
        </div>
      )}

      {/* Notifications */}
      <div className="fixed top-4 right-4 z-40 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 p-4 ${
              notification.type === 'success' ? 'border-green-500' :
              notification.type === 'error' ? 'border-red-500' :
              notification.type === 'warning' ? 'border-yellow-500' :
              'border-blue-500'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {notification.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                {notification.type === 'error' && <AlertCircle className="w-5 h-5 text-red-500" />}
                {notification.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                {notification.type === 'info' && <AlertCircle className="w-5 h-5 text-blue-500" />}
              </div>
              <div className="ml-3 flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {notification.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {notification.message}
                </p>
                {notification.action && (
                  <button
                    onClick={notification.action.onClick}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-500 font-medium"
                  >
                    {notification.action.label}
                  </button>
                )}
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-30 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Settings Panel */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h3>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Theme Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Theme
                </label>
                <div className="flex space-x-2">
                  {themes.map(themeOption => (
                    <button
                      key={themeOption.value}
                      onClick={() => applyTheme(themeOption.value)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${
                        theme === themeOption.value
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                    >
                      {themeOption.icon}
                      <span className="text-sm">{themeOption.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-3">
                {Object.entries(preferences).map(([key, value]) => (
                  <label key={key} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, [key]: !value }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        value ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            
            {searchQuery && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Search results for "{searchQuery}" will appear here...
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-4 left-4 z-30 flex flex-col space-y-2">
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => setIsSearchOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default UXEnhancer;