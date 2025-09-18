import React, { useEffect, useState } from 'react';
import { Heart, Star, ThumbsUp, MessageCircle, Share2, Bookmark, Bell } from 'lucide-react';

interface UserFeedback {
  likes: number;
  rating: number;
  comments: number;
  shares: number;
  bookmarks: number;
  notifications: number;
}
interface UserExperienceMetrics {
  pageViews: number;
  timeOnSite: number;
  bounceRate: number;
  conversionRate: number;
  userSatisfaction: number;
export default function UserExperienceEnhancer() {
  const [feedback, setFeedback] = useState<UserFeedback>({
    likes: 0,
    rating: 0,
    comments: 0,
    shares: 0,
    bookmarks: 0,
    notifications: 0
  });
  
  const [metrics, setMetrics] = useState<UserExperienceMetrics>({
    pageViews: 0,
    timeOnSite: 0,
    bounceRate: 0,
    conversionRate: 0,
    userSatisfaction: 0
  const [isVisible, setIsVisible] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  useEffect(() => {
    // Load saved feedback data
    const savedFeedback = localStorage.getItem('user-feedback');
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
    // Simulate metrics collection
    const simulateMetrics = () => {
      setMetrics({
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        timeOnSite: Math.floor(Math.random() * 300) + 60,
        bounceRate: Math.random() * 30 + 20,
        conversionRate: Math.random() * 10 + 2,
        userSatisfaction: Math.random() * 20 + 80
      });
    };
    simulateMetrics();
    const interval = setInterval(simulateMetrics, 10000);
    return () => clearInterval(interval);
  }, []);
  const handleLike = () => {
    setFeedback(prev => {
      const newFeedback = { ...prev, likes: prev.likes + 1 };
      localStorage.setItem('user-feedback', JSON.stringify(newFeedback));
      return newFeedback;
    });
  };
  const handleShare = () => {
      const newFeedback = { ...prev, shares: prev.shares + 1 };
    
    // Trigger native share if available
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
  const handleBookmark = () => {
      const newFeedback = { ...prev, bookmarks: prev.bookmarks + 1 };
  const handleRating = (rating: number) => {
    setUserRating(rating);
      const newFeedback = { ...prev, rating: rating };
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  const getSatisfactionColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        title="Show User Experience Monitor"
      >
        <Heart className="w-5 h-5" />
      </button>
    );
  }
  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Heart className="w-5 h-5 mr-2" />
          User Experience
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>
      {/* User Rating */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Rate this page</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="text-2xl focus:outline-none"
              >
                <Star
                  className={`w-6 h-6 ${
                    star <= (hoverRating || userRating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      {/* Feedback Actions */}
      <div className="grid grid-cols-2 gap-2 mb-4">
          onClick={handleLike}
          className="flex items-center justify-center p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          <ThumbsUp className="w-4 h-4 mr-1" />
          {formatNumber(feedback.likes)}
        
          onClick={handleShare}
          className="flex items-center justify-center p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          <Share2 className="w-4 h-4 mr-1" />
          {formatNumber(feedback.shares)}
          onClick={handleBookmark}
          className="flex items-center justify-center p-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-md hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors"
          <Bookmark className="w-4 h-4 mr-1" />
          {formatNumber(feedback.bookmarks)}
        <button className="flex items-center justify-center p-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-md hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
          <MessageCircle className="w-4 h-4 mr-1" />
          {formatNumber(feedback.comments)}
      {/* Metrics */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">Page Views</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {formatNumber(metrics.pageViews)}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-300">Time on Site</span>
            {metrics.timeOnSite}s
          <span className="text-sm text-gray-600 dark:text-gray-300">Bounce Rate</span>
            {metrics.bounceRate.toFixed(1)}%
          <span className="text-sm text-gray-600 dark:text-gray-300">Conversion Rate</span>
            {metrics.conversionRate.toFixed(1)}%
          <span className="text-sm text-gray-600 dark:text-gray-300">Satisfaction</span>
          <span className={`text-sm font-medium ${getSatisfactionColor(metrics.userSatisfaction)}`}>
            {metrics.userSatisfaction.toFixed(1)}%
      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleTimeString()}
    </div>
  );
