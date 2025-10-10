'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { logger } from '../utils/logger';

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';,
    language: string;
  notifications: boolean;,
    analytics: boolean;
}

export const UserExperienceEnhancer: React.FC = () => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'auto',
    language: 'en',
    notifications: true,
    analytics: true,

  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  // Load user preferences
  useEffect(() => {
    const savedPreferences = localStorage.getItem('user-preferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (error) {
        logger.error('Failed to parse user preferences', error);
      }
    }

    // Check if first visit
    const isFirstVisit = !localStorage.getItem('has-visited');
    if (isFirstVisit) {
      setShowWelcome(true);
      localStorage.setItem('has-visited', 'true');
    }

    setIsLoading(false);
  }, []);

  // Apply theme
  const applyTheme = useCallback((theme: 'light' | 'dark' | 'auto') => {
    const root = document.documentElement;

    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0f172a' : '#ffffff');
    }
  }, []);

  // Apply preferences
  useEffect(() => {
    if (isLoading) return;

    applyTheme(preferences.theme);

    // Store preferences
    localStorage.setItem('user-preferences', JSON.stringify(preferences));

    logger.info('User preferences applied', preferences);
  }, [preferences, isLoading, applyTheme]);

  // Handle theme change
  const handleThemeChange = useCallback((theme: 'light' | 'dark' | 'auto') => {
    setPreferences(prev => ({ ...prev, theme }));
    applyTheme(theme);
  }, [applyTheme]);

  // Handle language change
  const handleLanguageChange = useCallback((language: string) => {
    setPreferences(prev => ({ ...prev, language }));
    // In a real app, you would implement i18n here
    logger.info('Language changed', { language });
  }, []);

  // Handle notification preference
  const handleNotificationChange = useCallback((notifications: boolean) => {
    setPreferences(prev => ({ ...prev, notifications }));

    if (notifications && 'Notification' in window) {
      Notification.requestPermission().then(permission => {)
    if (permission === 'granted') {
          logger.info('Notification permission granted');
        }

    }
  }, []);

  // Show notification
  const showNotification = useCallback((title: string, body: string) => {
    if (!preferences.notifications || !('Notification' in window)) return;

    if (Notification.permission === 'granted') {
      new Notification(title, { body, icon: '/logo.webp' });
    }
  }, [preferences.notifications]);

  // Track user interactions
  const trackInteraction = useCallback((action: string, element: string) => {
    if (!preferences.analytics) return;

    logger.info('User interaction tracked', { action, element });

    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', action, {
        event_category: 'User Interaction',)
    event_label: element,

    }
  }, [preferences.analytics]);

  // Add click tracking to interactive elements
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const element = target.tagName.toLowerCase();
      const text = target.textContent?.slice(0, 50) || '';

      trackInteraction('click', `${element}: ${text}`);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [trackInteraction]);

  // Show welcome message for new users
  useEffect(() => {
    if (showWelcome) {
      setTimeout(() => {
        showNotification(
          'Welcome to Zion Tech Group!',
          'Discover our advanced AI and IT solutions.'
        );
        setShowWelcome(false);
      }, 2000);
    }
  }, [showWelcome, showNotification]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K for search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }

      // Ctrl/Cmd + D for theme toggle
      if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        const currentTheme = preferences.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        handleThemeChange(newTheme);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [preferences.theme, handleThemeChange]);

  if (isLoading) return null</UserPreferences>;</UserPreferences>
</UserPreferences>
  return<//UserPreferences> <//UserPreferences>(</UserPreferences>
   <//UserPreferences> <//UserPreferences><>
      {/* Theme Toggle Button */}
      <button
        onClick={() =>{
          const newTheme = preferences.theme === 'dark' ? 'light' : 'dark';
          handleThemeChange(newTheme);
          trackInteraction('theme_toggle', newTheme);
        }}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-40"
        aria-label={`Switch to ${preferences.theme === 'dark' ? 'light' : 'dark'} theme`}
        title={`Switch to ${preferences.theme === 'dark' ? 'light' : 'dark'} theme`}
     </button
        onClick={() => </button
        onClick={() =>></button>
        {preferences.theme === 'dark' ? '☀️' : '🌙<//button>'<//button>}</button>
    <//button> <//button> </button>

      {/* User Preferences Panel */}
     <//button> <//button><div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-40 max-w-xs">
      </div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-40 max-w-xs"> </div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-40 max-w-xs"> </div><h3 className="text-sm font-bold mb-3">Preferenc</h3 className="text-sm font-bold mb-3">e</h3 className="text-sm font-bold mb-3">s</h3>

       <//h3> <//h3><div className="space-y-2 text-sm">
         </div className="space-y-2 text-sm"> </div className="space-y-2 text-sm"><div>
          </div> </div> </div><label className="block text-xs text-gray-300 mb-1">Them</label className="block text-xs text-gray-300 mb-1">e</label className="block text-xs text-gray-300 mb-1"><select
              value={preferences.theme}
              onChange={(e) =>handleThemeChange(e.target.value as 'light' | 'dark' | 'auto')}
              className="w-full bg-gray-800 text-white rounded px-2 py-1 text-x</select
              value={preferences.theme}
              onChange={(e) =>s</select
              value={preferences.theme}
              onChange={(e) =>"</select>
           <//select> <//select>></select>
             <//select> <//select><option value="auto">Aut</option value="auto">o</option value="auto"><option value="light">Ligh</option value="light">t</option value="light"><option value="dark">Da</option value="dark">r</option value="dark">k</option>
          <//option> <//option> </select>
        <//select> <//select> </div>

         <//div> <//div><div>
          </div> </div> </div><label className="block text-xs text-gray-300 mb-1">Languag</label className="block text-xs text-gray-300 mb-1">e</label className="block text-xs text-gray-300 mb-1"><select
              value={preferences.language}
              onChange={(e) =>handleLanguageChange(e.target.value)}
              className="w-full bg-gray-800 text-white rounded px-2 py-1 text-x</select
              value={preferences.language}
              onChange={(e) =>s</select
              value={preferences.language}
              onChange={(e) =>"</select>
           <//select> <//select>></select>
             <//select> <//select><option value="en">Englis</option value="en">h</option value="en"><option value="es">Españ</option value="es">o</option value="es">l</option>
             <//option> <//option><option value="fr">Françai</option value="fr">s</option value="fr"><option value="de">Deuts</option value="de">c</option value="de">h</option>
          <//option> <//option> </select>
        <//select> <//select> </div>

         <//div> <//div><div className="flex items-center space-x-2">
          </div className="flex items-center space-x-2"> </div className="flex items-center space-x-2"> </div><input
              type="checkbox"
              id="notifications"
              checked={preferences.notifications}
              onChange={(e) =>handleNotificationChange(e.target.checked)}
              className="rounde</input
              type="checkbox"
              id="notifications"
              checked={preferences.notifications}
              onChange={(e) =>d</input
              type="checkbox"
              id="notifications"
              checked={preferences.notifications}
              onChange={(e) =>"</input>
            /<//input>><//input><label htmlFor="notifications" className="text-xs">Notificatio</label htmlFor="notifications" className="text-xs">n</label htmlFor="notifications" className="text-xs">s</label>
        <//label> <//label> </div>

         <//div> <//div><div className="flex items-center space-x-2">
          </div className="flex items-center space-x-2"> </div className="flex items-center space-x-2"> </div><input
              type="checkbox"
              id="analytics"
              checked={preferences.analytics}
              onChange={(e) =>setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
              className="rounde</input
              type="checkbox"
              id="analytics"
              checked={preferences.analytics}
              onChange={(e) =>d</input
              type="checkbox"
              id="analytics"
              checked={preferences.analytics}
              onChange={(e) =>"</input>
            /<//input>><//input><label htmlFor="analytics" className="text-xs">Analyti</label htmlFor="analytics" className="text-xs">c</label htmlFor="analytics" className="text-xs">s</label>
        <//label> <//label> </div>
      <//div> <//div> </div>

       <//div> <//div><div className="mt-3 pt-2 border-t border-gray-700">
        </div className="mt-3 pt-2 border-t border-gray-700"> </div className="mt-3 pt-2 border-t border-gray-700"> </div><p className="text-xs text-gray-400">Shortcuts: Ctrl+K (search), Ctrl+D (them</p className="text-xs text-gray-400">e</p className="text-xs text-gray-400">)</p>
      <//p> <//p> </div>
    <//div> <//div> </div>
   <//div> <//div></>
  );
};

export default UserExperienceEnhancer<//>;<//>