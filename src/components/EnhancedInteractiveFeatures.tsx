import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Share2, 
  MessageCircle, 
  Star, 
  Bookmark, 
  ThumbsUp, 
  ThumbsDown,
  Send,
  X,
  CheckCircle
} from 'lucide-react';

interface FeedbackData {
  type: 'positive' | 'negative' | 'suggestion';
  message: string;
  timestamp: Date;
}

export const EnhancedInteractiveFeatures: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackData[]>([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState<'positive' | 'negative' | 'suggestion'>('positive');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [rating, setRating] = useState(0);
  const [showRating, setShowRating] = useState(false);

  useEffect(() => {
    // Load saved feedback from localStorage
    const savedFeedback = localStorage.getItem('zion-feedback');
    if (savedFeedback) {
      try {
        setFeedback(JSON.parse(savedFeedback));
      } catch (error) {
        console.error('Failed to parse saved feedback:', error);
      }
    }

    // Load bookmark status
    const savedBookmark = localStorage.getItem('zion-bookmark');
    if (savedBookmark) {
      setIsBookmarked(JSON.parse(savedBookmark));
    }
  }, []);

  const saveFeedback = (newFeedback: FeedbackData) => {
    const updatedFeedback = [...feedback, newFeedback];
    setFeedback(updatedFeedback);
    localStorage.setItem('zion-feedback', JSON.stringify(updatedFeedback));
  };

  const handleFeedbackSubmit = () => {
    if (feedbackMessage.trim()) {
      const newFeedback: FeedbackData = {
        type: feedbackType,
        message: feedbackMessage.trim(),
        timestamp: new Date()
      };
      saveFeedback(newFeedback);
      setFeedbackMessage('');
      setShowFeedbackForm(false);
    }
  };

  const toggleBookmark = () => {
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    localStorage.setItem('zion-bookmark', JSON.stringify(newBookmarkState));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Zion Tech Group',
          text: 'Check out this amazing technology company!',
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };

  const handleRating = (newRating: number) => {
    setRating(newRating);
    setShowRating(false);
    // Save rating to localStorage or send to analytics
    localStorage.setItem('zion-rating', newRating.toString());
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-20 right-4 z-40 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        title="Interactive Features"
      >
        <Heart size={24} />
      </motion.button>

      {/* Interactive Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-32 right-4 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Interactive Features</h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleBookmark}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center space-y-2 ${
                    isBookmarked
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
                  <span className="text-sm font-medium">
                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="p-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 flex flex-col items-center space-y-2"
                >
                  <Share2 size={20} />
                  <span className="text-sm font-medium">Share</span>
                </motion.button>
              </div>

              {/* Rating */}
              <div className="text-center">
                <button
                  onClick={() => setShowRating(!showRating)}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Rate this page
                </button>
                
                <AnimatePresence>
                  {showRating && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 space-y-2"
                    >
                      <div className="flex justify-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleRating(star)}
                            className={`p-1 transition-colors ${
                              star <= rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                          >
                            <Star size={20} fill={star <= rating ? 'currentColor' : 'none'} />
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">
                        {rating > 0 ? `You rated this ${rating} star${rating > 1 ? 's' : ''}` : 'Click to rate'}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Feedback */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-700">Feedback</h4>
                  <button
                    onClick={() => setShowFeedbackForm(!showFeedbackForm)}
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {showFeedbackForm ? 'Cancel' : 'Add Feedback'}
                  </button>
                </div>

                <AnimatePresence>
                  {showFeedbackForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      <div className="flex space-x-2">
                        {(['positive', 'negative', 'suggestion'] as const).map((type) => (
                          <button
                            key={type}
                            onClick={() => setFeedbackType(type)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                              feedbackType === type
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </button>
                        ))}
                      </div>
                      
                      <textarea
                        value={feedbackMessage}
                        onChange={(e) => setFeedbackMessage(e.target.value)}
                        placeholder="Share your thoughts..."
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                      />
                      
                      <button
                        onClick={handleFeedbackSubmit}
                        disabled={!feedbackMessage.trim()}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-2 px-4 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
                      >
                        Submit Feedback
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Recent Feedback */}
                {feedback.length > 0 && (
                  <div className="mt-3 space-y-2 max-h-32 overflow-y-auto">
                    {feedback.slice(-3).map((item, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded-lg text-xs ${
                          item.type === 'positive' ? 'bg-green-50 text-green-700' :
                          item.type === 'negative' ? 'bg-red-50 text-red-700' :
                          'bg-blue-50 text-blue-700'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-medium capitalize">{item.type}</div>
                            <div className="opacity-75">{item.message}</div>
                          </div>
                          <div className="text-xs opacity-50 ml-2">
                            {item.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedInteractiveFeatures;