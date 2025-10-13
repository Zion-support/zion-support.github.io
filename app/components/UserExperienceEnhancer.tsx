import React, { useEffect, useState, useCallback } from 'react';
import { 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  Star, 
  Share2, 
  Bookmark, 
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: boolean;
  animations: boolean;
  soundEffects: boolean;
  autoPlay: boolean;
  compactMode: boolean;
  showHints: boolean;
}

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  showControls?: boolean;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ 
  children, 
  showControls = false 
}) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'auto',
    language: 'en',
    notifications: true,
    animations: true,
    soundEffects: false,
    autoPlay: false,
    compactMode: false,
    showHints: true
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Load preferences from localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem('user-preferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
        applyPreferences(parsed);
      } catch (error) {
        console.warn('Failed to load user preferences:', error);
      }
    }
  }, []);

  // Apply preferences to document
  const applyPreferences = useCallback((prefs: UserPreferences) => {
    const root = document.documentElement;
    
    // Theme
    root.classList.remove('light', 'dark');
    if (prefs.theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(prefersDark ? 'dark' : 'light');
    } else {
      root.classList.add(prefs.theme);
    }

    // Animations
    if (!prefs.animations) {
      root.classList.add('no-animations');
    } else {
      root.classList.remove('no-animations');
    }

    // Compact mode
    if (prefs.compactMode) {
      root.classList.add('compact-mode');
    } else {
      root.classList.remove('compact-mode');
    }

    // Language
    root.setAttribute('lang', prefs.language);
  }, []);

  // Update preferences
  const updatePreference = useCallback((key: keyof UserPreferences, value: any) => {
    const newPreferences = { ...preferences, [key]: value };
    setPreferences(newPreferences);
    applyPreferences(newPreferences);
    localStorage.setItem('user-preferences', JSON.stringify(newPreferences));
  }, [preferences, applyPreferences]);

  // Toggle controls visibility
  const toggleControls = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  // Handle search
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Implement search functionality here
    console.log('Searching for:', query);
  }, []);

  // Handle sort
  const handleSort = useCallback((by: string, order: 'asc' | 'desc') => {
    setSortBy(by);
    setSortOrder(order);
    // Implement sort functionality here
    console.log('Sorting by:', by, order);
  }, []);

  // Handle media controls
  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
    // Implement media control functionality here
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
    // Implement volume control functionality here
  }, [isMuted]);

  // Handle notifications
  const requestNotificationPermission = useCallback(async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        updatePreference('notifications', true);
      }
    }
  }, [updatePreference]);

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

      // Space for play/pause
      if (event.code === 'Space' && event.target === document.body) {
        event.preventDefault();
        togglePlayPause();
      }

      // M for mute
      if (event.key === 'm' && event.target === document.body) {
        event.preventDefault();
        toggleMute();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [togglePlayPause, toggleMute]);

  return (
    <div className="ux-enhancer">
      {children}
      
      {showControls && (
        <div className="fixed bottom-4 left-4 z-50">
          <button
            onClick={toggleControls}
            className="mb-2 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            title="User Experience Settings"
            aria-label="Open user experience settings"
          >
            <Settings className="w-5 h-5" />
          </button>
          
          {isVisible && (
            <div className="bg-slate-800 rounded-lg p-4 shadow-2xl border border-slate-700 min-w-80 max-w-96">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                User Experience
              </h3>
              
              <div className="space-y-4">
                {/* Search */}
                <div>
                  <label className="text-white text-sm mb-2 block">Quick Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Theme */}
                <div>
                  <label className="text-white text-sm mb-2 block">Theme</label>
                  <select
                    value={preferences.theme}
                    onChange={(e) => updatePreference('theme', e.target.value)}
                    className="w-full bg-slate-700 text-white rounded px-3 py-2 text-sm"
                  >
                    <option value="auto">Auto</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>

                {/* Language */}
                <div>
                  <label className="text-white text-sm mb-2 block">Language</label>
                  <select
                    value={preferences.language}
                    onChange={(e) => updatePreference('language', e.target.value)}
                    className="w-full bg-slate-700 text-white rounded px-3 py-2 text-sm"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                  </select>
                </div>

                {/* Toggle Settings */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Animations</span>
                    <button
                      onClick={() => updatePreference('animations', !preferences.animations)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.animations ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.animations ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Sound Effects</span>
                    <button
                      onClick={() => updatePreference('soundEffects', !preferences.soundEffects)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.soundEffects ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.soundEffects ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Compact Mode</span>
                    <button
                      onClick={() => updatePreference('compactMode', !preferences.compactMode)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.compactMode ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.compactMode ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Show Hints</span>
                    <button
                      onClick={() => updatePreference('showHints', !preferences.showHints)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.showHints ? 'bg-purple-600' : 'bg-slate-600'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.showHints ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Media Controls */}
                <div className="pt-3 border-t border-slate-700">
                  <h4 className="text-white text-sm mb-3">Media Controls</h4>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlayPause}
                      className="w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 bg-slate-700 hover:bg-slate-600 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    
                    <div className="flex-1">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-3 border-t border-slate-700">
                  <h4 className="text-white text-sm mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={requestNotificationPermission}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors"
                    >
                      <Bell className="w-4 h-4" />
                      Notifications
                    </button>
                    
                    <button className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors">
                      <HelpCircle className="w-4 h-4" />
                      Help
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserExperienceEnhancer;