import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  User, 
  Heart, 
  Star, 
  MessageCircle, 
  HelpCircle, 
  Settings,
  X,
  ChevronUp,
  ChevronDown,
  Search,
  Filter,
  Grid,
  List,
  Eye,
  EyeOff,
  Palette,
  Moon,
  Sun,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Languages,
  Volume2,
  VolumeX,
  Zap,
  Target,
  TrendingUp,
  Users,
  Clock,
  Bookmark,
  Share2,
  Download,
  Print,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

interface UserPreference {

  theme: 'light' | 'dark' | 'auto';
  fontSize: 'small' | 'medium' | 'large';
  contrast: 'normal' | 'high';
  animations: boolean;
  sound: boolean;
  language: string;
  layout: 'grid' | 'list';
  compactMode: boolean;
}

interface UserFeedback {

  rating: number;
  comment: string;
  category: string;
  timestamp: Date;
}

export const EnhancedUserExperience: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState<'preferences' | 'feedback' | 'analytics' | 'help'>('preferences');
  const [preferences, setPreferences] = useState<UserPreference>({

    theme: 'auto',
    fontSize: 'medium',
    contrast: 'normal',
    animations: true,
    sound: true,
    language: 'en',
    layout: 'grid',
    compactMode: false
  });
  
  const [feedback, setFeedback] = useState<UserFeedback[]>([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [newFeedback, setNewFeedback] = useState({ rating: 5, comment: '', category: 'general' });
  const [isCompact, setIsCompact] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  
  const feedbackFormRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load preferences from localStorage
  useEffect(() => {

    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {

      setPreferences(JSON.parse(savedPreferences));
    }
    
    const savedFeedback = localStorage.getItem('userFeedback');
    if (savedFeedback) {

      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {

    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }, [preferences]);

  // Apply theme
  useEffect(() => {

    const root = document.documentElement;
    if (preferences.theme === 'dark' || 
        (preferences.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {

      root.classList.add('dark');
    } else {

      root.classList.remove('dark');
    }
  }, [preferences.theme]);

  // Apply font size
  useEffect(() => {

    const root = document.documentElement;
    root.style.fontSize = preferences.fontSize === 'small' ? '14px' : 
                          preferences.fontSize === 'large' ? '18px' : '16px';
  }, [preferences.fontSize]);

  // Apply contrast
  useEffect(() => {

    const root = document.documentElement;
    if (preferences.contrast === 'high') {

      root.classList.add('high-contrast');
    } else {

      root.classList.remove('high-contrast');
    }
  }, [preferences.contrast]);

  // Scroll handler for back to top button
  useEffect(() => {

    const handleScroll = () => {

      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle preference change
  const handlePreferenceChange = useCallback((key: keyof UserPreference, value: any) => {

    setPreferences(prev => ({ ...prev, [key]: value }));
  }, []);

  // Submit feedback
  const handleFeedbackSubmit = useCallback(() => {

    if (newFeedback.comment.trim()) {

      const feedbackItem: UserFeedback = {

        ...newFeedback,
        timestamp: new Date()
      };
      
      setFeedback(prev => [...prev, feedbackItem]);
      localStorage.setItem('userFeedback', JSON.stringify([...feedback, feedbackItem]));
      
      setNewFeedback({ rating: 5, comment: '', category: 'general' });
      setShowFeedbackForm(false);
    }
  }, [newFeedback, feedback]);

  // Toggle compact mode
  const toggleCompactMode = useCallback(() => {

    setIsCompact(!isCompact);
    document.body.classList.toggle('compact-mode');
  }, [isCompact]);

  // Scroll to top
  const scrollToTop = useCallback(() => {

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle search
  const handleSearch = useCallback((query: string) => {

    setSearchQuery(query);
    if (query.trim()) {

      // Simulate search results
      const results = [
        { title: 'AI Services', url: '/ai-services', category: 'Services' },
        { title: 'Cloud Solutions', url: '/cloud-solutions', category: 'Solutions' },
        { title: 'Contact Us', url: '/contact', category: 'Company' },
        { title: 'About Zion Tech', url: '/about', category: 'Company' }
      ].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {

      setSearchResults([]);
    }
  }, []);

  // Toggle visibility
  const toggleVisibility = useCallback(() => {

    setIsVisible(!isVisible);
  }, [isVisible]);

  // Get user satisfaction score
  const getSatisfactionScore = useCallback(() => {

    if (feedback.length === 0) return 0;
    const totalRating = feedback.reduce((sum, item) => sum + item.rating, 0);
    return Math.round((totalRating / feedback.length) * 20); // Convert to percentage
  }, [feedback]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-6 right-24 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="User Experience Settings"
      >
        <User className="w-6 h-6" />
      </motion.button>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-40 z-50 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Back to Top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* User Experience Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-24 z-40 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <h3 className="font-semibold">User Experience</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleCompactMode}
                    className={`p-2 rounded-full transition-colors ${

                      isCompact ? 'bg-white/20' : 'bg-white/10'
                    }`}
                    title="Toggle Compact Mode"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleVisibility}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setCurrentTab('preferences')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${

                    currentTab === 'preferences'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Preferences
                </button>
                <button
                  onClick={() => setCurrentTab('feedback')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${

                    currentTab === 'feedback'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Feedback
                </button>
                <button
                  onClick={() => setCurrentTab('analytics')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${

                    currentTab === 'analytics'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Analytics
                </button>
                <button
                  onClick={() => setCurrentTab('help')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${

                    currentTab === 'help'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Help
                </button>
              </div>

              {/* Preferences Tab */}
              {currentTab === 'preferences' && (
                <div className="space-y-4">
                  {/* Theme Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</label>
                    <div className="flex space-x-2">
                      {(['light', 'dark', 'auto'] as const).map((theme) => (
                        <button
                          key={theme}
                          onClick={() => handlePreferenceChange('theme', theme)}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${

                            preferences.theme === theme
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {theme === 'light' && <Sun className="w-4 h-4 inline mr-1" />}
                          {theme === 'dark' && <Moon className="w-4 h-4 inline mr-1" />}
                          {theme === 'auto' && <Monitor className="w-4 h-4 inline mr-1" />}
                          {theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font Size */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Font Size</label>
                    <div className="flex space-x-2">
                      {(['small', 'medium', 'large'] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => handlePreferenceChange('fontSize', size)}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${

                            preferences.fontSize === size
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {size.charAt(0).toUpperCase() + size.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contrast */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Contrast</label>
                    <div className="flex space-x-2">
                      {(['normal', 'high'] as const).map((contrast) => (
                        <button
                          key={contrast}
                          onClick={() => handlePreferenceChange('contrast', contrast)}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${

                            preferences.contrast === contrast
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {contrast.charAt(0).toUpperCase() + contrast.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Animations</span>
                      <button
                        onClick={() => handlePreferenceChange('animations', !preferences.animations)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                          preferences.animations ? 'bg-purple-600' : 'bg-gray-300'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                          preferences.animations ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sound</span>
                      <button
                        onClick={() => handlePreferenceChange('sound', !preferences.sound)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${

                          preferences.sound ? 'bg-purple-600' : 'bg-gray-300'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${

                          preferences.sound ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Feedback Tab */}
              {currentTab === 'feedback' && (
                <div className="space-y-4">
                  {/* Satisfaction Score */}
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-green-900 dark:text-green-100">User Satisfaction</span>
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {getSatisfactionScore()}%
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${

                            star <= (getSatisfactionScore() / 20)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Feedback Form */}
                  <button
                    onClick={() => setShowFeedbackForm(!showFeedbackForm)}
                    className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Share Feedback</span>
                  </button>

                  <AnimatePresence>
                    {showFeedbackForm && (
                      <motion.div
                        ref={feedbackFormRef}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Rating</label>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <button
                                key={rating}
                                onClick={() => setNewFeedback(prev => ({ ...prev, rating }))}
                                className={`p-1 rounded ${

                                  newFeedback.rating >= rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              >
                                <Star className="w-6 h-6" />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                          <select
                            value={newFeedback.category}
                            onChange={(e) => setNewFeedback(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            <option value="general">General</option>
                            <option value="usability">Usability</option>
                            <option value="design">Design</option>
                            <option value="performance">Performance</option>
                            <option value="bug">Bug Report</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Comment</label>
                          <textarea
                            value={newFeedback.comment}
                            onChange={(e) => setNewFeedback(prev => ({ ...prev, comment: e.target.value }))}
                            placeholder="Share your thoughts..."
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                            rows={3}
                          />
                        </div>

                        <div className="flex space-x-2">
                          <button
                            onClick={handleFeedbackSubmit}
                            className="flex-1 py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                          >
                            Submit
                          </button>
                          <button
                            onClick={() => setShowFeedbackForm(false)}
                            className="flex-1 py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Recent Feedback */}
                  {feedback.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">Recent Feedback</h4>
                      {feedback.slice(-3).reverse().map((item, index) => (
                        <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-3 h-3 ${

                                    star <= item.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {item.timestamp.toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{item.comment}</p>
                          <span className="inline-block mt-2 px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Analytics Tab */}
              {currentTab === 'analytics' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-sm text-blue-600 dark:text-blue-400">Total Feedback</div>
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        {feedback.length}
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-sm text-green-600 dark:text-green-400">Satisfaction</div>
                      <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                        {getSatisfactionScore()}%
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Feedback by Category</h4>
                    <div className="space-y-2">
                      {['general', 'usability', 'design', 'performance', 'bug'].map((category) => {

                        const count = feedback.filter(f => f.category === category).length;
                        const percentage = feedback.length > 0 ? Math.round((count / feedback.length) * 100) : 0;
                        
                        return (
                          <div key={category} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                              {category}
                            </span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div
                                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                              <span className="text-sm text-gray-700 dark:text-gray-300 w-8 text-right">
                                {count}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Help Tab */}
              {currentTab === 'help' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">Quick Actions</h4>
                    
                    <button className="w-full p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-left">
                        <div className="font-medium text-blue-900 dark:text-blue-100">Help Center</div>
                        <div className="text-sm text-blue-700 dark:text-blue-300">Find answers to common questions</div>
                      </span>
                    </button>

                    <button className="w-full p-3 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-left">
                        <div className="font-medium text-green-900 dark:text-green-100">Contact Support</div>
                        <div className="text-sm text-green-700 dark:text-green-300">Get help from our team</div>
                      </span>
                    </button>

                    <button className="w-full p-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors flex items-center space-x-3">
                      <Bookmark className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="text-left">
                        <div className="font-medium text-purple-900 dark:text-purple-100">Documentation</div>
                        <div className="text-sm text-purple-700 dark:text-purple-300">Browse guides and tutorials</div>
                      </span>
                    </button>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>support@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>123 Tech Street, Innovation City</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedUserExperience;