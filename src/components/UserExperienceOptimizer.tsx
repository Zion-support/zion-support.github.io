import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Settings, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Info,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Download,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Eye,
  EyeOff,
  Bell,
  X
} from 'lucide-react';

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: boolean;
  autoPlay: boolean;
  soundEnabled: boolean;
  compactMode: boolean;
  showTutorials: boolean;
  personalizedContent: boolean;
}

interface UserBehavior {
  timeOnSite: number;
  pagesVisited: number;
  interactions: number;
  satisfaction: number;
  lastVisit: Date;
  preferences: UserPreferences;
}

interface UserExperienceOptimizerProps {
  enabled?: boolean;
  showAnalytics?: boolean;
  onPreferencesChange?: (preferences: UserPreferences) => void;
}

export const UserExperienceOptimizer: React.FC<UserExperienceOptimizerProps> = ({
  enabled = true,
  showAnalytics = false,
  onPreferencesChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'preferences' | 'analytics' | 'feedback'>('preferences');
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    timeOnSite: 0,
    pagesVisited: 1,
    interactions: 0,
    satisfaction: 0,
    lastVisit: new Date(),
    preferences: {
      theme: 'auto',
      language: 'en',
      notifications: true,
      autoPlay: false,
      soundEnabled: true,
      compactMode: false,
      showTutorials: true,
      personalizedContent: true
    }
  });

  const [feedback, setFeedback] = useState<Array<{
    id: string;
    type: 'suggestion' | 'bug' | 'praise';
    message: string;
    timestamp: Date;
    status: 'pending' | 'reviewed' | 'implemented';
  }>>([]);

  const [showTutorial, setShowTutorial] = useState(false);
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);

  // Tutorial steps
  const tutorialSteps = useMemo(() => [
    {
      title: 'Welcome to Zion Tech Group',
      description: 'Discover our AI-powered technology solutions and innovative services.',
      target: null,
      position: 'center'
    },
    {
      title: 'Explore Services',
      description: 'Browse our comprehensive range of technology solutions.',
      target: '#services-section',
      position: 'bottom'
    },
    {
      title: 'Get in Touch',
      description: 'Contact us for personalized solutions and support.',
      target: '#contact-section',
      position: 'top'
    }
  ], []);

  // Track user behavior
  useEffect(() => {
    if (!enabled) return;

    const startTime = Date.now();
    let interactionCount = 0;

    const trackInteraction = () => {
      interactionCount++;
      setUserBehavior(prev => ({
        ...prev,
        interactions: interactionCount
      }));
    };

    const trackPageVisit = () => {
      setUserBehavior(prev => ({
        ...prev,
        pagesVisited: prev.pagesVisited + 1
      }));
    };

    // Track various interactions
    document.addEventListener('click', trackInteraction);
    document.addEventListener('keydown', trackInteraction);
    document.addEventListener('scroll', trackInteraction);

    // Track page visits
    window.addEventListener('popstate', trackPageVisit);

    // Update time on site
    const interval = setInterval(() => {
      setUserBehavior(prev => ({
        ...prev,
        timeOnSite: Math.floor((Date.now() - startTime) / 1000)
      }));
    }, 1000);

    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('keydown', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
      window.removeEventListener('popstate', trackPageVisit);
      clearInterval(interval);
    };
  }, [enabled]);

  // Load saved preferences
  useEffect(() => {
    const saved = localStorage.getItem('user-preferences');
    if (saved) {
      try {
        const savedPreferences = JSON.parse(saved);
        setUserBehavior(prev => ({
          ...prev,
          preferences: { ...prev.preferences, ...savedPreferences }
        }));
      } catch (error) {
        console.warn('Failed to load user preferences:', error);
      }
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const { theme } = userBehavior.preferences;
    const root = document.documentElement;
    
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const applyTheme = (e: MediaQueryListEvent | MediaQueryList) => {
        root.classList.toggle('dark', e.matches);
      };
      
      applyTheme(mediaQuery);
      mediaQuery.addEventListener('change', applyTheme);
      
      return () => mediaQuery.removeEventListener('change', applyTheme);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
  }, [userBehavior.preferences.theme]);

  // Apply compact mode
  useEffect(() => {
    const root = document.documentElement;
    if (userBehavior.preferences.compactMode) {
      root.style.setProperty('--spacing-scale', '0.75');
      root.style.setProperty('--font-size-scale', '0.9');
    } else {
      root.style.setProperty('--spacing-scale', '1');
      root.style.setProperty('--font-size-scale', '1');
    }
  }, [userBehavior.preferences.compactMode]);

  // Update preferences
  const updatePreferences = useCallback((key: keyof UserPreferences, value: any) => {
    const newPreferences = {
      ...userBehavior.preferences,
      [key]: value
    };
    
    setUserBehavior(prev => ({
      ...prev,
      preferences: newPreferences
    }));
    
    localStorage.setItem('user-preferences', JSON.stringify(newPreferences));
    onPreferencesChange?.(newPreferences);
  }, [userBehavior.preferences, onPreferencesChange]);

  // Submit feedback
  const submitFeedback = useCallback((type: 'suggestion' | 'bug' | 'praise', message: string) => {
    const newFeedback = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date(),
      status: 'pending' as const
    };
    
    setFeedback(prev => [...prev, newFeedback]);
    
    // Simulate feedback submission
    setTimeout(() => {
      setFeedback(prev => 
        prev.map(f => 
          f.id === newFeedback.id 
            ? { ...f, status: 'reviewed' as const }
            : f
        )
      );
    }, 2000);
  }, []);

  // Start tutorial
  const startTutorial = useCallback(() => {
    setShowTutorial(true);
    setCurrentTutorialStep(0);
  }, []);

  // Next tutorial step
  const nextTutorialStep = useCallback(() => {
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep(prev => prev + 1);
    } else {
      setShowTutorial(false);
      updatePreferences('showTutorials', false);
    }
  }, [currentTutorialStep, tutorialSteps.length, updatePreferences]);

  // Calculate user satisfaction score
  const satisfactionScore = useMemo(() => {
    const { timeOnSite, pagesVisited, interactions } = userBehavior;
    
    let score = 50; // Base score
    
    // Time on site (max 20 points)
    if (timeOnSite > 300) score += 20;
    else if (timeOnSite > 180) score += 15;
    else if (timeOnSite > 60) score += 10;
    else if (timeOnSite > 30) score += 5;
    
    // Pages visited (max 15 points)
    if (pagesVisited > 5) score += 15;
    else if (pagesVisited > 3) score += 10;
    else if (pagesVisited > 1) score += 5;
    
    // Interactions (max 15 points)
    if (interactions > 20) score += 15;
    else if (interactions > 10) score += 10;
    else if (interactions > 5) score += 5;
    
    return Math.min(100, score);
  }, [userBehavior]);

  if (!enabled) return null;

  return (
    <>
      {/* UX Optimizer Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-20 z-50 w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="User Experience Settings"
        aria-label="Open user experience settings"
      >
        <User className="w-7 h-7 text-white mx-auto" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">
            {satisfactionScore}
          </span>
        </div>
      </motion.button>

      {/* UX Optimizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            className="fixed top-20 left-4 z-40 w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-pink-400" />
                  User Experience
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close user experience settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6">
                {[
                  { key: 'preferences', label: 'Preferences', icon: Settings },
                  { key: 'analytics', label: 'Analytics', icon: TrendingUp },
                  { key: 'feedback', label: 'Feedback', icon: MessageCircle }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as any)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeTab === key
                        ? 'bg-pink-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="min-h-[400px]">
                {activeTab === 'preferences' && (
                  <div className="space-y-4">
                    {/* Theme Selection */}
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Settings className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">Theme</div>
                          <div className="text-xs text-gray-400">Choose your preferred appearance</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {(['light', 'dark', 'auto'] as const).map((theme) => (
                          <button
                            key={theme}
                            onClick={() => updatePreferences('theme', theme)}
                            className={`px-3 py-1 text-xs rounded transition-colors ${
                              userBehavior.preferences.theme === theme
                                ? 'bg-blue-500 text-white'
                                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                            }`}
                          >
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Other Preferences */}
                    {[
                      { key: 'notifications', label: 'Notifications', icon: Bell },
                      { key: 'autoPlay', label: 'Auto-play Content', icon: Play },
                      { key: 'soundEnabled', label: 'Sound Effects', icon: Volume2 },
                      { key: 'compactMode', label: 'Compact Mode', icon: Minimize2 },
                      { key: 'showTutorials', label: 'Show Tutorials', icon: Info },
                      { key: 'personalizedContent', label: 'Personalized Content', icon: Heart }
                    ].map(({ key, label, icon: Icon }) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-cyan-400" />
                          <div>
                            <div className="text-sm font-medium text-white">{label}</div>
                            <div className="text-xs text-gray-400">Customize your experience</div>
                          </div>
                        </div>
                        <button
                          onClick={() => updatePreferences(key as keyof UserPreferences, !userBehavior.preferences[key as keyof UserPreferences])}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            userBehavior.preferences[key as keyof UserPreferences]
                              ? 'bg-cyan-500'
                              : 'bg-slate-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            userBehavior.preferences[key as keyof UserPreferences]
                              ? 'translate-x-6'
                              : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    ))}

                    {/* Tutorial Button */}
                    <button
                      onClick={startTutorial}
                      className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Info className="w-4 h-4" />
                      Start Tutorial
                    </button>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-4">
                    {/* User Satisfaction Score */}
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">User Satisfaction</span>
                        <span className={`text-2xl font-bold ${
                          satisfactionScore >= 80 ? 'text-green-500' :
                          satisfactionScore >= 60 ? 'text-yellow-500' : 'text-red-500'
                        }`}>
                          {satisfactionScore}
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            satisfactionScore >= 80 ? 'bg-green-500' :
                            satisfactionScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${satisfactionScore}%` }}
                        />
                      </div>
                    </div>

                    {/* User Behavior Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-cyan-400">
                          {Math.floor(userBehavior.timeOnSite / 60)}m {userBehavior.timeOnSite % 60}s
                        </div>
                        <div className="text-xs text-gray-400">Time on Site</div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-400">
                          {userBehavior.pagesVisited}
                        </div>
                        <div className="text-xs text-gray-400">Pages Visited</div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-pink-400">
                          {userBehavior.interactions}
                        </div>
                        <div className="text-xs text-gray-400">Interactions</div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-400">
                          {userBehavior.lastVisit.toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-400">Last Visit</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'feedback' && (
                  <div className="space-y-4">
                    {/* Feedback Form */}
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <h4 className="text-sm font-medium text-white mb-3">Share Your Feedback</h4>
                      <div className="space-y-3">
                        <select 
                          className="w-full px-3 py-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-pink-500 focus:outline-none"
                          onChange={(e) => {
                            const type = e.target.value as 'suggestion' | 'bug' | 'praise';
                            // Handle type selection
                          }}
                        >
                          <option value="suggestion">Suggestion</option>
                          <option value="bug">Bug Report</option>
                          <option value="praise">Praise</option>
                        </select>
                        <textarea
                          placeholder="Tell us what you think..."
                          className="w-full px-3 py-2 bg-slate-700 text-white rounded border border-slate-600 focus:border-pink-500 focus:outline-none resize-none"
                          rows={3}
                        />
                        <button className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition-colors">
                          Submit Feedback
                        </button>
                      </div>
                    </div>

                    {/* Recent Feedback */}
                    {feedback.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white">Recent Feedback</h4>
                        {feedback.slice(-3).map((item) => (
                          <div key={item.id} className="p-3 bg-slate-800/50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-xs px-2 py-1 rounded ${
                                item.type === 'suggestion' ? 'bg-blue-500/20 text-blue-400' :
                                item.type === 'bug' ? 'bg-red-500/20 text-red-400' :
                                'bg-green-500/20 text-green-400'
                              }`}>
                                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                              </span>
                              <span className="text-xs text-gray-400">
                                {item.timestamp.toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm text-gray-300">{item.message}</p>
                            <div className="mt-2 text-xs text-gray-400">
                              Status: {item.status}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tutorial Overlay */}
      <AnimatePresence>
        {showTutorial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-800 rounded-xl p-6 max-w-md text-center"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {tutorialSteps[currentTutorialStep].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {tutorialSteps[currentTutorialStep].description}
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowTutorial(false)}
                  className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded transition-colors"
                >
                  Skip Tutorial
                </button>
                <button
                  onClick={nextTutorialStep}
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition-colors"
                >
                  {currentTutorialStep === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
              <div className="mt-4 flex gap-2 justify-center">
                {tutorialSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTutorialStep ? 'bg-pink-500' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};